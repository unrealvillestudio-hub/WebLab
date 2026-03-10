import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.VITE_ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const { prompt, model = 'claude-sonnet-4-6', max_tokens = 2000, temperature = 0.75 } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'prompt is required' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens,
        temperature,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return res.status(response.status).json({ 
        error: `Anthropic API error ${response.status}`,
        detail: (err as any)?.error?.message ?? response.statusText
      });
    }

    const data = await response.json();
    const text = (data.content?.[0]?.text ?? '').trim();

    return res.status(200).json({ text });

  } catch (err: any) {
    return res.status(500).json({ error: err.message ?? 'Internal server error' });
  }
}
