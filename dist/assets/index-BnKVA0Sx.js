(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const u of p.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(c){if(c.ep)return;c.ep=!0;const p=r(c);fetch(c.href,p)}})();function Lg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Xc={exports:{}},Ji={},Jc={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function gx(){if(qm)return Ee;qm=1;var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=b&&N[b]||N["@@iterator"],typeof N=="function"?N:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,z={};function $(N,I,ye){this.props=N,this.context=I,this.refs=z,this.updater=ye||_}$.prototype.isReactComponent={},$.prototype.setState=function(N,I){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,I,"setState")},$.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function S(){}S.prototype=$.prototype;function T(N,I,ye){this.props=N,this.context=I,this.refs=z,this.updater=ye||_}var M=T.prototype=new S;M.constructor=T,k(M,$.prototype),M.isPureReactComponent=!0;var D=Array.isArray,F=Object.prototype.hasOwnProperty,X={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function Y(N,I,ye){var U,ae={},pe=null,Ne=null;if(I!=null)for(U in I.ref!==void 0&&(Ne=I.ref),I.key!==void 0&&(pe=""+I.key),I)F.call(I,U)&&!W.hasOwnProperty(U)&&(ae[U]=I[U]);var _e=arguments.length-2;if(_e===1)ae.children=ye;else if(1<_e){for(var Pe=Array(_e),Me=0;Me<_e;Me++)Pe[Me]=arguments[Me+2];ae.children=Pe}if(N&&N.defaultProps)for(U in _e=N.defaultProps,_e)ae[U]===void 0&&(ae[U]=_e[U]);return{$$typeof:n,type:N,key:pe,ref:Ne,props:ae,_owner:X.current}}function ve(N,I){return{$$typeof:n,type:N.type,key:I,ref:N.ref,props:N.props,_owner:N._owner}}function fe(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function De(N){var I={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return I[ye]})}var G=/\/+/g;function ue(N,I){return typeof N=="object"&&N!==null&&N.key!=null?De(""+N.key):I.toString(36)}function je(N,I,ye,U,ae){var pe=typeof N;(pe==="undefined"||pe==="boolean")&&(N=null);var Ne=!1;if(N===null)Ne=!0;else switch(pe){case"string":case"number":Ne=!0;break;case"object":switch(N.$$typeof){case n:case t:Ne=!0}}if(Ne)return Ne=N,ae=ae(Ne),N=U===""?"."+ue(Ne,0):U,D(ae)?(ye="",N!=null&&(ye=N.replace(G,"$&/")+"/"),je(ae,I,ye,"",function(Me){return Me})):ae!=null&&(fe(ae)&&(ae=ve(ae,ye+(!ae.key||Ne&&Ne.key===ae.key?"":(""+ae.key).replace(G,"$&/")+"/")+N)),I.push(ae)),1;if(Ne=0,U=U===""?".":U+":",D(N))for(var _e=0;_e<N.length;_e++){pe=N[_e];var Pe=U+ue(pe,_e);Ne+=je(pe,I,ye,Pe,ae)}else if(Pe=v(N),typeof Pe=="function")for(N=Pe.call(N),_e=0;!(pe=N.next()).done;)pe=pe.value,Pe=U+ue(pe,_e++),Ne+=je(pe,I,ye,Pe,ae);else if(pe==="object")throw I=String(N),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return Ne}function Re(N,I,ye){if(N==null)return N;var U=[],ae=0;return je(N,U,"","",function(pe){return I.call(ye,pe,ae++)}),U}function ge(N){if(N._status===-1){var I=N._result;I=I(),I.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=I)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},B={transition:null},ee={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:X};function Q(){throw Error("act(...) is not supported in production builds of React.")}return Ee.Children={map:Re,forEach:function(N,I,ye){Re(N,function(){I.apply(this,arguments)},ye)},count:function(N){var I=0;return Re(N,function(){I++}),I},toArray:function(N){return Re(N,function(I){return I})||[]},only:function(N){if(!fe(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Ee.Component=$,Ee.Fragment=r,Ee.Profiler=c,Ee.PureComponent=T,Ee.StrictMode=a,Ee.Suspense=g,Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,Ee.act=Q,Ee.cloneElement=function(N,I,ye){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var U=k({},N.props),ae=N.key,pe=N.ref,Ne=N._owner;if(I!=null){if(I.ref!==void 0&&(pe=I.ref,Ne=X.current),I.key!==void 0&&(ae=""+I.key),N.type&&N.type.defaultProps)var _e=N.type.defaultProps;for(Pe in I)F.call(I,Pe)&&!W.hasOwnProperty(Pe)&&(U[Pe]=I[Pe]===void 0&&_e!==void 0?_e[Pe]:I[Pe])}var Pe=arguments.length-2;if(Pe===1)U.children=ye;else if(1<Pe){_e=Array(Pe);for(var Me=0;Me<Pe;Me++)_e[Me]=arguments[Me+2];U.children=_e}return{$$typeof:n,type:N.type,key:ae,ref:pe,props:U,_owner:Ne}},Ee.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:p,_context:N},N.Consumer=N},Ee.createElement=Y,Ee.createFactory=function(N){var I=Y.bind(null,N);return I.type=N,I},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(N){return{$$typeof:f,render:N}},Ee.isValidElement=fe,Ee.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ge}},Ee.memo=function(N,I){return{$$typeof:h,type:N,compare:I===void 0?null:I}},Ee.startTransition=function(N){var I=B.transition;B.transition={};try{N()}finally{B.transition=I}},Ee.unstable_act=Q,Ee.useCallback=function(N,I){return le.current.useCallback(N,I)},Ee.useContext=function(N){return le.current.useContext(N)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(N){return le.current.useDeferredValue(N)},Ee.useEffect=function(N,I){return le.current.useEffect(N,I)},Ee.useId=function(){return le.current.useId()},Ee.useImperativeHandle=function(N,I,ye){return le.current.useImperativeHandle(N,I,ye)},Ee.useInsertionEffect=function(N,I){return le.current.useInsertionEffect(N,I)},Ee.useLayoutEffect=function(N,I){return le.current.useLayoutEffect(N,I)},Ee.useMemo=function(N,I){return le.current.useMemo(N,I)},Ee.useReducer=function(N,I,ye){return le.current.useReducer(N,I,ye)},Ee.useRef=function(N){return le.current.useRef(N)},Ee.useState=function(N){return le.current.useState(N)},Ee.useSyncExternalStore=function(N,I,ye){return le.current.useSyncExternalStore(N,I,ye)},Ee.useTransition=function(){return le.current.useTransition()},Ee.version="18.3.1",Ee}var Gm;function Ud(){return Gm||(Gm=1,Jc.exports=gx()),Jc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function hx(){if(Hm)return Ji;Hm=1;var n=Ud(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function u(f,g,h){var y,b={},v=null,_=null;h!==void 0&&(v=""+h),g.key!==void 0&&(v=""+g.key),g.ref!==void 0&&(_=g.ref);for(y in g)a.call(g,y)&&!p.hasOwnProperty(y)&&(b[y]=g[y]);if(f&&f.defaultProps)for(y in g=f.defaultProps,g)b[y]===void 0&&(b[y]=g[y]);return{$$typeof:t,type:f,key:v,ref:_,props:b,_owner:c.current}}return Ji.Fragment=r,Ji.jsx=u,Ji.jsxs=u,Ji}var Wm;function yx(){return Wm||(Wm=1,Xc.exports=hx()),Xc.exports}var s=yx(),C=Ud();const ia=Lg(C);var Fs={},Zc={exports:{}},Ut={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function xx(){return Km||(Km=1,(function(n){function t(B,ee){var Q=B.length;B.push(ee);e:for(;0<Q;){var N=Q-1>>>1,I=B[N];if(0<c(I,ee))B[N]=ee,B[Q]=I,Q=N;else break e}}function r(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var ee=B[0],Q=B.pop();if(Q!==ee){B[0]=Q;e:for(var N=0,I=B.length,ye=I>>>1;N<ye;){var U=2*(N+1)-1,ae=B[U],pe=U+1,Ne=B[pe];if(0>c(ae,Q))pe<I&&0>c(Ne,ae)?(B[N]=Ne,B[pe]=Q,N=pe):(B[N]=ae,B[U]=Q,N=U);else if(pe<I&&0>c(Ne,Q))B[N]=Ne,B[pe]=Q,N=pe;else break e}}return ee}function c(B,ee){var Q=B.sortIndex-ee.sortIndex;return Q!==0?Q:B.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var g=[],h=[],y=1,b=null,v=3,_=!1,k=!1,z=!1,$=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(B){for(var ee=r(h);ee!==null;){if(ee.callback===null)a(h);else if(ee.startTime<=B)a(h),ee.sortIndex=ee.expirationTime,t(g,ee);else break;ee=r(h)}}function D(B){if(z=!1,M(B),!k)if(r(g)!==null)k=!0,ge(F);else{var ee=r(h);ee!==null&&le(D,ee.startTime-B)}}function F(B,ee){k=!1,z&&(z=!1,S(Y),Y=-1),_=!0;var Q=v;try{for(M(ee),b=r(g);b!==null&&(!(b.expirationTime>ee)||B&&!De());){var N=b.callback;if(typeof N=="function"){b.callback=null,v=b.priorityLevel;var I=N(b.expirationTime<=ee);ee=n.unstable_now(),typeof I=="function"?b.callback=I:b===r(g)&&a(g),M(ee)}else a(g);b=r(g)}if(b!==null)var ye=!0;else{var U=r(h);U!==null&&le(D,U.startTime-ee),ye=!1}return ye}finally{b=null,v=Q,_=!1}}var X=!1,W=null,Y=-1,ve=5,fe=-1;function De(){return!(n.unstable_now()-fe<ve)}function G(){if(W!==null){var B=n.unstable_now();fe=B;var ee=!0;try{ee=W(!0,B)}finally{ee?ue():(X=!1,W=null)}}else X=!1}var ue;if(typeof T=="function")ue=function(){T(G)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Re=je.port2;je.port1.onmessage=G,ue=function(){Re.postMessage(null)}}else ue=function(){$(G,0)};function ge(B){W=B,X||(X=!0,ue())}function le(B,ee){Y=$(function(){B(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){k||_||(k=!0,ge(F))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return r(g)},n.unstable_next=function(B){switch(v){case 1:case 2:case 3:var ee=3;break;default:ee=v}var Q=v;v=ee;try{return B()}finally{v=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,ee){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=v;v=B;try{return ee()}finally{v=Q}},n.unstable_scheduleCallback=function(B,ee,Q){var N=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?N+Q:N):Q=N,B){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=Q+I,B={id:y++,callback:ee,priorityLevel:B,startTime:Q,expirationTime:I,sortIndex:-1},Q>N?(B.sortIndex=Q,t(h,B),r(g)===null&&B===r(h)&&(z?(S(Y),Y=-1):z=!0,le(D,Q-N))):(B.sortIndex=I,t(g,B),k||_||(k=!0,ge(F))),B},n.unstable_shouldYield=De,n.unstable_wrapCallback=function(B){var ee=v;return function(){var Q=v;v=ee;try{return B.apply(this,arguments)}finally{v=Q}}}})(td)),td}var Ym;function bx(){return Ym||(Ym=1,ed.exports=xx()),ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function vx(){if(Qm)return Ut;Qm=1;var n=Ud(),t=bx();function r(e){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)o+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function p(e,o){u(e,o),u(e+"Capture",o)}function u(e,o){for(c[e]=o,e=0;e<o.length;e++)a.add(o[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},b={};function v(e){return g.call(b,e)?!0:g.call(y,e)?!1:h.test(e)?b[e]=!0:(y[e]=!0,!1)}function _(e,o,i,l){if(i!==null&&i.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k(e,o,i,l){if(o===null||typeof o>"u"||_(e,o,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function z(e,o,i,l,d,m,x){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=e,this.type=o,this.sanitizeURL=m,this.removeEmptyString=x}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$[e]=new z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var o=e[0];$[o]=new z(o,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){$[e]=new z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$[e]=new z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$[e]=new z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){$[e]=new z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){$[e]=new z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){$[e]=new z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){$[e]=new z(e,5,!1,e.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function T(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var o=e.replace(S,T);$[o]=new z(o,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var o=e.replace(S,T);$[o]=new z(o,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var o=e.replace(S,T);$[o]=new z(o,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){$[e]=new z(e,1,!1,e.toLowerCase(),null,!1,!1)}),$.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){$[e]=new z(e,1,!1,e.toLowerCase(),null,!0,!0)});function M(e,o,i,l){var d=$.hasOwnProperty(o)?$[o]:null;(d!==null?d.type!==0:l||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(k(o,i,d,l)&&(i=null),l||d===null?v(o)&&(i===null?e.removeAttribute(o):e.setAttribute(o,""+i)):d.mustUseProperty?e[d.propertyName]=i===null?d.type===3?!1:"":i:(o=d.attributeName,l=d.attributeNamespace,i===null?e.removeAttribute(o):(d=d.type,i=d===3||d===4&&i===!0?"":""+i,l?e.setAttributeNS(l,o,i):e.setAttribute(o,i))))}var D=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),X=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),De=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,N;function I(e){if(N===void 0)try{throw Error()}catch(i){var o=i.stack.trim().match(/\n( *(at )?)/);N=o&&o[1]||""}return`
`+N+e}var ye=!1;function U(e,o){if(!e||ye)return"";ye=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(L){var l=L}Reflect.construct(e,[],o)}else{try{o.call()}catch(L){l=L}e.call(o.prototype)}else{try{throw Error()}catch(L){l=L}e()}}catch(L){if(L&&l&&typeof L.stack=="string"){for(var d=L.stack.split(`
`),m=l.stack.split(`
`),x=d.length-1,w=m.length-1;1<=x&&0<=w&&d[x]!==m[w];)w--;for(;1<=x&&0<=w;x--,w--)if(d[x]!==m[w]){if(x!==1||w!==1)do if(x--,w--,0>w||d[x]!==m[w]){var A=`
`+d[x].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=x&&0<=w);break}}}finally{ye=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?I(e):""}function ae(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1),e;case 11:return e=U(e.type.render,!1),e;case 1:return e=U(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case X:return"Portal";case ve:return"Profiler";case Y:return"StrictMode";case ue:return"Suspense";case je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case De:return(e.displayName||"Context")+".Consumer";case fe:return(e._context.displayName||"Context")+".Provider";case G:var o=e.render;return e=e.displayName,e||(e=o.displayName||o.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return o=e.displayName||null,o!==null?o:pe(e.type)||"Memo";case ge:o=e._payload,e=e._init;try{return pe(e(o))}catch{}}return null}function Ne(e){var o=e.type;switch(e.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=o.render,e=e.displayName||e.name||"",o.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(o);case 8:return o===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function _e(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pe(e){var o=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Me(e){var o=Pe(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,o),l=""+e[o];if(!e.hasOwnProperty(o)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,m=i.set;return Object.defineProperty(e,o,{configurable:!0,get:function(){return d.call(this)},set:function(x){l=""+x,m.call(this,x)}}),Object.defineProperty(e,o,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(x){l=""+x},stopTracking:function(){e._valueTracker=null,delete e[o]}}}}function Ze(e){e._valueTracker||(e._valueTracker=Me(e))}function en(e){if(!e)return!1;var o=e._valueTracker;if(!o)return!0;var i=o.getValue(),l="";return e&&(l=Pe(e)?e.checked?"true":"false":e.value),e=l,e!==i?(o.setValue(e),!0):!1}function xt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tn(e,o){var i=o.checked;return Q({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Go(e,o){var i=o.defaultValue==null?"":o.defaultValue,l=o.checked!=null?o.checked:o.defaultChecked;i=_e(o.value!=null?o.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function hn(e,o){o=o.checked,o!=null&&M(e,"checked",o,!1)}function yn(e,o){hn(e,o);var i=_e(o.value),l=o.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}o.hasOwnProperty("value")?fo(e,o.type,i):o.hasOwnProperty("defaultValue")&&fo(e,o.type,_e(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(e.defaultChecked=!!o.defaultChecked)}function mo(e,o,i){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var l=o.type;if(!(l!=="submit"&&l!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+e._wrapperState.initialValue,i||o===e.value||(e.value=o),e.defaultValue=o}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function fo(e,o,i){(o!=="number"||xt(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var qt=Array.isArray;function nn(e,o,i,l){if(e=e.options,o){o={};for(var d=0;d<i.length;d++)o["$"+i[d]]=!0;for(i=0;i<e.length;i++)d=o.hasOwnProperty("$"+e[i].value),e[i].selected!==d&&(e[i].selected=d),d&&l&&(e[i].defaultSelected=!0)}else{for(i=""+_e(i),o=null,d=0;d<e.length;d++){if(e[d].value===i){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}o!==null||e[d].disabled||(o=e[d])}o!==null&&(o.selected=!0)}}function qn(e,o){if(o.dangerouslySetInnerHTML!=null)throw Error(r(91));return Q({},o,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ft(e,o){var i=o.value;if(i==null){if(i=o.children,o=o.defaultValue,i!=null){if(o!=null)throw Error(r(92));if(qt(i)){if(1<i.length)throw Error(r(93));i=i[0]}o=i}o==null&&(o=""),i=o}e._wrapperState={initialValue:_e(i)}}function Pn(e,o){var i=_e(o.value),l=_e(o.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),o.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function Tn(e){var o=e.textContent;o===e._wrapperState.initialValue&&o!==""&&o!==null&&(e.value=o)}function xn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(e,o){return e==null||e==="http://www.w3.org/1999/xhtml"?xn(o):e==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gn,Gt=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,i,l,d){MSApp.execUnsafeLocalFunction(function(){return e(o,i,l,d)})}:e})(function(e,o){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=o;else{for(Gn=Gn||document.createElement("div"),Gn.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Gn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;o.firstChild;)e.appendChild(o.firstChild)}});function bn(e,o){if(o){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=o;return}}e.textContent=o}var R={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ie=["Webkit","ms","Moz","O"];Object.keys(R).forEach(function(e){ie.forEach(function(o){o=o+e.charAt(0).toUpperCase()+e.substring(1),R[o]=R[e]})});function xe(e,o,i){return o==null||typeof o=="boolean"||o===""?"":i||typeof o!="number"||o===0||R.hasOwnProperty(e)&&R[e]?(""+o).trim():o+"px"}function ke(e,o){e=e.style;for(var i in o)if(o.hasOwnProperty(i)){var l=i.indexOf("--")===0,d=xe(i,o[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,d):e[i]=d}}var Ie=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bt(e,o){if(o){if(Ie[e]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(r(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(r(61))}if(o.style!=null&&typeof o.style!="object")throw Error(r(62))}}function Fe(e,o){if(e.indexOf("-")===-1)return typeof o.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ge=null;function He(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ne=null,st=null,$t=null;function Ho(e){if(e=Fi(e)){if(typeof ne!="function")throw Error(r(280));var o=e.stateNode;o&&(o=Ja(o),ne(e.stateNode,e.type,o))}}function fi(e){st?$t?$t.push(e):$t=[e]:st=e}function $a(){if(st){var e=st,o=$t;if($t=st=null,Ho(e),o)for(e=0;e<o.length;e++)Ho(o[e])}}function Hn(e,o){return e(o)}function Pa(){}var go=!1;function Ta(e,o,i){if(go)return e(o,i);go=!0;try{return Hn(e,o,i)}finally{go=!1,(st!==null||$t!==null)&&(Pa(),$a())}}function Wn(e,o){var i=e.stateNode;if(i===null)return null;var l=Ja(i);if(l===null)return null;i=l[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,o,typeof i));return i}var gi=!1;if(f)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){gi=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{gi=!1}function gl(e,o,i,l,d,m,x,w,A){var L=Array.prototype.slice.call(arguments,3);try{o.apply(i,L)}catch(q){this.onError(q)}}var Kn=!1,yr=null,ho=!1,hi=null,on={onError:function(e){Kn=!0,yr=e}};function hl(e,o,i,l,d,m,x,w,A){Kn=!1,yr=null,gl.apply(on,arguments)}function Oa(e,o,i,l,d,m,x,w,A){if(hl.apply(this,arguments),Kn){if(Kn){var L=yr;Kn=!1,yr=null}else throw Error(r(198));ho||(ho=!0,hi=L)}}function On(e){var o=e,i=e;if(e.alternate)for(;o.return;)o=o.return;else{e=o;do o=e,(o.flags&4098)!==0&&(i=o.return),e=o.return;while(e)}return o.tag===3?i:null}function La(e){if(e.tag===13){var o=e.memoizedState;if(o===null&&(e=e.alternate,e!==null&&(o=e.memoizedState)),o!==null)return o.dehydrated}return null}function yi(e){if(On(e)!==e)throw Error(r(188))}function Yn(e){var o=e.alternate;if(!o){if(o=On(e),o===null)throw Error(r(188));return o!==e?null:e}for(var i=e,l=o;;){var d=i.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){i=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===i)return yi(d),e;if(m===l)return yi(d),o;m=m.sibling}throw Error(r(188))}if(i.return!==l.return)i=d,l=m;else{for(var x=!1,w=d.child;w;){if(w===i){x=!0,i=d,l=m;break}if(w===l){x=!0,l=d,i=m;break}w=w.sibling}if(!x){for(w=m.child;w;){if(w===i){x=!0,i=m,l=d;break}if(w===l){x=!0,l=m,i=d;break}w=w.sibling}if(!x)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:o}function Ra(e){return e=Yn(e),e!==null?yo(e):null}function yo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var o=yo(e);if(o!==null)return o;e=e.sibling}return null}var Fa=t.unstable_scheduleCallback,xo=t.unstable_cancelCallback,xi=t.unstable_shouldYield,wn=t.unstable_requestPaint,Xe=t.unstable_now,bi=t.unstable_getCurrentPriorityLevel,xr=t.unstable_ImmediatePriority,Qn=t.unstable_UserBlockingPriority,et=t.unstable_NormalPriority,vi=t.unstable_LowPriority,ze=t.unstable_IdlePriority,br=null,rn=null;function wi(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(br,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:bl,yl=Math.log,xl=Math.LN2;function bl(e){return e>>>=0,e===0?32:31-(yl(e)/xl|0)|0}var vr=64,wr=4194304;function Wo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,o){var i=e.pendingLanes;if(i===0)return 0;var l=0,d=e.suspendedLanes,m=e.pingedLanes,x=i&268435455;if(x!==0){var w=x&~d;w!==0?l=Wo(w):(m&=x,m!==0&&(l=Wo(m)))}else x=i&~d,x!==0?l=Wo(x):m!==0&&(l=Wo(m));if(l===0)return 0;if(o!==0&&o!==l&&(o&d)===0&&(d=l&-l,m=o&-o,d>=m||d===16&&(m&4194240)!==0))return o;if((l&4)!==0&&(l|=i&16),o=e.entangledLanes,o!==0)for(e=e.entanglements,o&=l;0<o;)i=31-Ht(o),d=1<<i,l|=e[i],o&=~d;return l}function vl(e,o){switch(e){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kr(e,o){for(var i=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes;0<m;){var x=31-Ht(m),w=1<<x,A=d[x];A===-1?((w&i)===0||(w&l)!==0)&&(d[x]=vl(w,o)):A<=o&&(e.expiredLanes|=w),m&=~w}}function _i(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sr(){var e=vr;return vr<<=1,(vr&4194240)===0&&(vr=64),e}function Cr(e){for(var o=[],i=0;31>i;i++)o.push(e);return o}function bo(e,o,i){e.pendingLanes|=o,o!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,o=31-Ht(o),e[o]=i}function Da(e,o){var i=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var d=31-Ht(i),m=1<<d;o[d]=0,l[d]=-1,e[d]=-1,i&=~m}}function Er(e,o){var i=e.entangledLanes|=o;for(e=e.entanglements;i;){var l=31-Ht(i),d=1<<l;d&o|e[l]&o&&(e[l]|=o),i&=~d}}var Oe=0;function ki(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Si,zr,E,Ce,$e,Ue=!1,Pt=[],Be=null,kt=null,Rt=null,_n=new Map,an=new Map,Wt=[],wl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ko(e,o){switch(e){case"focusin":case"focusout":Be=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":_n.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(o.pointerId)}}function Ar(e,o,i,l,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:o,domEventName:i,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},o!==null&&(o=Fi(o),o!==null&&zr(o)),e):(e.eventSystemFlags|=l,o=e.targetContainers,d!==null&&o.indexOf(d)===-1&&o.push(d),e)}function Nu(e,o,i,l,d){switch(o){case"focusin":return Be=Ar(Be,e,o,i,l,d),!0;case"dragenter":return kt=Ar(kt,e,o,i,l,d),!0;case"mouseover":return Rt=Ar(Rt,e,o,i,l,d),!0;case"pointerover":var m=d.pointerId;return _n.set(m,Ar(_n.get(m)||null,e,o,i,l,d)),!0;case"gotpointercapture":return m=d.pointerId,an.set(m,Ar(an.get(m)||null,e,o,i,l,d)),!0}return!1}function vo(e){var o=Yo(e.target);if(o!==null){var i=On(o);if(i!==null){if(o=i.tag,o===13){if(o=La(i),o!==null){e.blockedOn=o,$e(e.priority,function(){E(i)});return}}else if(o===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var o=e.targetContainers;0<o.length;){var i=Sl(e.domEventName,e.eventSystemFlags,o[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);Ge=l,i.target.dispatchEvent(l),Ge=null}else return o=Fi(i),o!==null&&zr(o),e.blockedOn=i,!1;o.shift()}return!0}function St(e,o,i){wo(e)&&i.delete(o)}function _l(){Ue=!1,Be!==null&&wo(Be)&&(Be=null),kt!==null&&wo(kt)&&(kt=null),Rt!==null&&wo(Rt)&&(Rt=null),_n.forEach(St),an.forEach(St)}function lt(e,o){e.blockedOn===o&&(e.blockedOn=null,Ue||(Ue=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,_l)))}function Ci(e){function o(d){return lt(d,e)}if(0<Pt.length){lt(Pt[0],e);for(var i=1;i<Pt.length;i++){var l=Pt[i];l.blockedOn===e&&(l.blockedOn=null)}}for(Be!==null&&lt(Be,e),kt!==null&&lt(kt,e),Rt!==null&&lt(Rt,e),_n.forEach(o),an.forEach(o),i=0;i<Wt.length;i++)l=Wt[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<Wt.length&&(i=Wt[0],i.blockedOn===null);)vo(i),i.blockedOn===null&&Wt.shift()}var Nr=D.ReactCurrentBatchConfig,Ma=!0;function I0(e,o,i,l){var d=Oe,m=Nr.transition;Nr.transition=null;try{Oe=1,kl(e,o,i,l)}finally{Oe=d,Nr.transition=m}}function B0(e,o,i,l){var d=Oe,m=Nr.transition;Nr.transition=null;try{Oe=4,kl(e,o,i,l)}finally{Oe=d,Nr.transition=m}}function kl(e,o,i,l){if(Ma){var d=Sl(e,o,i,l);if(d===null)Bl(e,o,l,Ia,i),Ko(e,l);else if(Nu(d,e,o,i,l))l.stopPropagation();else if(Ko(e,l),o&4&&-1<wl.indexOf(e)){for(;d!==null;){var m=Fi(d);if(m!==null&&Si(m),m=Sl(e,o,i,l),m===null&&Bl(e,o,l,Ia,i),m===d)break;d=m}d!==null&&l.stopPropagation()}else Bl(e,o,l,null,i)}}var Ia=null;function Sl(e,o,i,l){if(Ia=null,e=He(l),e=Yo(e),e!==null)if(o=On(e),o===null)e=null;else if(i=o.tag,i===13){if(e=La(o),e!==null)return e;e=null}else if(i===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;e=null}else o!==e&&(e=null);return Ia=e,null}function ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bi()){case xr:return 1;case Qn:return 4;case et:case vi:return 16;case ze:return 536870912;default:return 16}default:return 16}}var _o=null,Cl=null,Ba=null;function $u(){if(Ba)return Ba;var e,o=Cl,i=o.length,l,d="value"in _o?_o.value:_o.textContent,m=d.length;for(e=0;e<i&&o[e]===d[e];e++);var x=i-e;for(l=1;l<=x&&o[i-l]===d[m-l];l++);return Ba=d.slice(e,1<l?1-l:void 0)}function Ua(e){var o=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&o===13&&(e=13)):e=o,e===10&&(e=13),32<=e||e===13?e:0}function Va(){return!0}function Pu(){return!1}function Kt(e){function o(i,l,d,m,x){this._reactName=i,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(i=e[w],this[w]=i?i(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Va:Pu,this.isPropagationStopped=Pu,this}return Q(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),o}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Kt(jr),Ei=Q({},jr,{view:0,detail:0}),U0=Kt(Ei),zl,Al,zi,qa=Q({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zi&&(zi&&e.type==="mousemove"?(zl=e.screenX-zi.screenX,Al=e.screenY-zi.screenY):Al=zl=0,zi=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),Tu=Kt(qa),V0=Q({},qa,{dataTransfer:0}),q0=Kt(V0),G0=Q({},Ei,{relatedTarget:0}),Nl=Kt(G0),H0=Q({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=Kt(H0),K0=Q({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y0=Kt(K0),Q0=Q({},jr,{data:0}),Ou=Kt(Q0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ey(e){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(e):(e=Z0[e])?!!o[e]:!1}function jl(){return ey}var ty=Q({},Ei,{key:function(e){if(e.key){var o=X0[e.key]||e.key;if(o!=="Unidentified")return o}return e.type==="keypress"?(e=Ua(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?Ua(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ua(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ny=Kt(ty),oy=Q({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lu=Kt(oy),ry=Q({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),iy=Kt(ry),ay=Q({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=Kt(ay),ly=Q({},qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=Kt(ly),dy=[9,13,27,32],$l=f&&"CompositionEvent"in window,Ai=null;f&&"documentMode"in document&&(Ai=document.documentMode);var uy=f&&"TextEvent"in window&&!Ai,Ru=f&&(!$l||Ai&&8<Ai&&11>=Ai),Fu=" ",Du=!1;function Mu(e,o){switch(e){case"keyup":return dy.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function py(e,o){switch(e){case"compositionend":return Iu(o);case"keypress":return o.which!==32?null:(Du=!0,Fu);case"textInput":return e=o.data,e===Fu&&Du?null:e;default:return null}}function my(e,o){if($r)return e==="compositionend"||!$l&&Mu(e,o)?(e=$u(),Ba=Cl=_o=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Ru&&o.locale!=="ko"?null:o.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bu(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o==="input"?!!fy[e.type]:o==="textarea"}function Uu(e,o,i,l){fi(l),o=Ya(o,"onChange"),0<o.length&&(i=new El("onChange","change",null,i,l),e.push({event:i,listeners:o}))}var Ni=null,ji=null;function gy(e){ap(e,0)}function Ga(e){var o=Rr(e);if(en(o))return e}function hy(e,o){if(e==="change")return o}var Vu=!1;if(f){var Pl;if(f){var Tl="oninput"in document;if(!Tl){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),Tl=typeof qu.oninput=="function"}Pl=Tl}else Pl=!1;Vu=Pl&&(!document.documentMode||9<document.documentMode)}function Gu(){Ni&&(Ni.detachEvent("onpropertychange",Hu),ji=Ni=null)}function Hu(e){if(e.propertyName==="value"&&Ga(ji)){var o=[];Uu(o,ji,e,He(e)),Ta(gy,o)}}function yy(e,o,i){e==="focusin"?(Gu(),Ni=o,ji=i,Ni.attachEvent("onpropertychange",Hu)):e==="focusout"&&Gu()}function xy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ga(ji)}function by(e,o){if(e==="click")return Ga(o)}function vy(e,o){if(e==="input"||e==="change")return Ga(o)}function wy(e,o){return e===o&&(e!==0||1/e===1/o)||e!==e&&o!==o}var kn=typeof Object.is=="function"?Object.is:wy;function $i(e,o){if(kn(e,o))return!0;if(typeof e!="object"||e===null||typeof o!="object"||o===null)return!1;var i=Object.keys(e),l=Object.keys(o);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var d=i[l];if(!g.call(o,d)||!kn(e[d],o[d]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ku(e,o){var i=Wu(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=o&&l>=o)return{node:i,offset:o-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Wu(i)}}function Yu(e,o){return e&&o?e===o?!0:e&&e.nodeType===3?!1:o&&o.nodeType===3?Yu(e,o.parentNode):"contains"in e?e.contains(o):e.compareDocumentPosition?!!(e.compareDocumentPosition(o)&16):!1:!1}function Qu(){for(var e=window,o=xt();o instanceof e.HTMLIFrameElement;){try{var i=typeof o.contentWindow.location.href=="string"}catch{i=!1}if(i)e=o.contentWindow;else break;o=xt(e.document)}return o}function Ol(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o&&(o==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||o==="textarea"||e.contentEditable==="true")}function _y(e){var o=Qu(),i=e.focusedElem,l=e.selectionRange;if(o!==i&&i&&i.ownerDocument&&Yu(i.ownerDocument.documentElement,i)){if(l!==null&&Ol(i)){if(o=l.start,e=l.end,e===void 0&&(e=o),"selectionStart"in i)i.selectionStart=o,i.selectionEnd=Math.min(e,i.value.length);else if(e=(o=i.ownerDocument||document)&&o.defaultView||window,e.getSelection){e=e.getSelection();var d=i.textContent.length,m=Math.min(l.start,d);l=l.end===void 0?m:Math.min(l.end,d),!e.extend&&m>l&&(d=l,l=m,m=d),d=Ku(i,m);var x=Ku(i,l);d&&x&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==x.node||e.focusOffset!==x.offset)&&(o=o.createRange(),o.setStart(d.node,d.offset),e.removeAllRanges(),m>l?(e.addRange(o),e.extend(x.node,x.offset)):(o.setEnd(x.node,x.offset),e.addRange(o)))}}for(o=[],e=i;e=e.parentNode;)e.nodeType===1&&o.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<o.length;i++)e=o[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ky=f&&"documentMode"in document&&11>=document.documentMode,Pr=null,Ll=null,Pi=null,Rl=!1;function Xu(e,o,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Rl||Pr==null||Pr!==xt(l)||(l=Pr,"selectionStart"in l&&Ol(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Pi&&$i(Pi,l)||(Pi=l,l=Ya(Ll,"onSelect"),0<l.length&&(o=new El("onSelect","select",null,o,i),e.push({event:o,listeners:l}),o.target=Pr)))}function Ha(e,o){var i={};return i[e.toLowerCase()]=o.toLowerCase(),i["Webkit"+e]="webkit"+o,i["Moz"+e]="moz"+o,i}var Tr={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},Fl={},Ju={};f&&(Ju=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Wa(e){if(Fl[e])return Fl[e];if(!Tr[e])return e;var o=Tr[e],i;for(i in o)if(o.hasOwnProperty(i)&&i in Ju)return Fl[e]=o[i];return e}var Zu=Wa("animationend"),ep=Wa("animationiteration"),tp=Wa("animationstart"),np=Wa("transitionend"),op=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ko(e,o){op.set(e,o),p(o,[e])}for(var Dl=0;Dl<rp.length;Dl++){var Ml=rp[Dl],Sy=Ml.toLowerCase(),Cy=Ml[0].toUpperCase()+Ml.slice(1);ko(Sy,"on"+Cy)}ko(Zu,"onAnimationEnd"),ko(ep,"onAnimationIteration"),ko(tp,"onAnimationStart"),ko("dblclick","onDoubleClick"),ko("focusin","onFocus"),ko("focusout","onBlur"),ko(np,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ey=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));function ip(e,o,i){var l=e.type||"unknown-event";e.currentTarget=i,Oa(l,o,void 0,e),e.currentTarget=null}function ap(e,o){o=(o&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],d=l.event;l=l.listeners;e:{var m=void 0;if(o)for(var x=l.length-1;0<=x;x--){var w=l[x],A=w.instance,L=w.currentTarget;if(w=w.listener,A!==m&&d.isPropagationStopped())break e;ip(d,w,L),m=A}else for(x=0;x<l.length;x++){if(w=l[x],A=w.instance,L=w.currentTarget,w=w.listener,A!==m&&d.isPropagationStopped())break e;ip(d,w,L),m=A}}}if(ho)throw e=hi,ho=!1,hi=null,e}function We(e,o){var i=o[Wl];i===void 0&&(i=o[Wl]=new Set);var l=e+"__bubble";i.has(l)||(sp(o,e,2,!1),i.add(l))}function Il(e,o,i){var l=0;o&&(l|=4),sp(i,e,l,o)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function Oi(e){if(!e[Ka]){e[Ka]=!0,a.forEach(function(i){i!=="selectionchange"&&(Ey.has(i)||Il(i,!1,e),Il(i,!0,e))});var o=e.nodeType===9?e:e.ownerDocument;o===null||o[Ka]||(o[Ka]=!0,Il("selectionchange",!1,o))}}function sp(e,o,i,l){switch(ju(o)){case 1:var d=I0;break;case 4:d=B0;break;default:d=kl}i=d.bind(null,o,i,e),d=void 0,!gi||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(o,i,{capture:!0,passive:d}):e.addEventListener(o,i,!0):d!==void 0?e.addEventListener(o,i,{passive:d}):e.addEventListener(o,i,!1)}function Bl(e,o,i,l,d){var m=l;if((o&1)===0&&(o&2)===0&&l!==null)e:for(;;){if(l===null)return;var x=l.tag;if(x===3||x===4){var w=l.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(x===4)for(x=l.return;x!==null;){var A=x.tag;if((A===3||A===4)&&(A=x.stateNode.containerInfo,A===d||A.nodeType===8&&A.parentNode===d))return;x=x.return}for(;w!==null;){if(x=Yo(w),x===null)return;if(A=x.tag,A===5||A===6){l=m=x;continue e}w=w.parentNode}}l=l.return}Ta(function(){var L=m,q=He(i),H=[];e:{var V=op.get(e);if(V!==void 0){var Z=El,oe=e;switch(e){case"keypress":if(Ua(i)===0)break e;case"keydown":case"keyup":Z=ny;break;case"focusin":oe="focus",Z=Nl;break;case"focusout":oe="blur",Z=Nl;break;case"beforeblur":case"afterblur":Z=Nl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=iy;break;case Zu:case ep:case tp:Z=W0;break;case np:Z=sy;break;case"scroll":Z=U0;break;case"wheel":Z=cy;break;case"copy":case"cut":case"paste":Z=Y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=Lu}var re=(o&4)!==0,ct=!re&&e==="scroll",P=re?V!==null?V+"Capture":null:V;re=[];for(var j=L,O;j!==null;){O=j;var K=O.stateNode;if(O.tag===5&&K!==null&&(O=K,P!==null&&(K=Wn(j,P),K!=null&&re.push(Li(j,K,O)))),ct)break;j=j.return}0<re.length&&(V=new Z(V,oe,null,i,q),H.push({event:V,listeners:re}))}}if((o&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",V&&i!==Ge&&(oe=i.relatedTarget||i.fromElement)&&(Yo(oe)||oe[Xn]))break e;if((Z||V)&&(V=q.window===q?q:(V=q.ownerDocument)?V.defaultView||V.parentWindow:window,Z?(oe=i.relatedTarget||i.toElement,Z=L,oe=oe?Yo(oe):null,oe!==null&&(ct=On(oe),oe!==ct||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(Z=null,oe=L),Z!==oe)){if(re=Tu,K="onMouseLeave",P="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(re=Lu,K="onPointerLeave",P="onPointerEnter",j="pointer"),ct=Z==null?V:Rr(Z),O=oe==null?V:Rr(oe),V=new re(K,j+"leave",Z,i,q),V.target=ct,V.relatedTarget=O,K=null,Yo(q)===L&&(re=new re(P,j+"enter",oe,i,q),re.target=O,re.relatedTarget=ct,K=re),ct=K,Z&&oe)t:{for(re=Z,P=oe,j=0,O=re;O;O=Or(O))j++;for(O=0,K=P;K;K=Or(K))O++;for(;0<j-O;)re=Or(re),j--;for(;0<O-j;)P=Or(P),O--;for(;j--;){if(re===P||P!==null&&re===P.alternate)break t;re=Or(re),P=Or(P)}re=null}else re=null;Z!==null&&lp(H,V,Z,re,!1),oe!==null&&ct!==null&&lp(H,ct,oe,re,!0)}}e:{if(V=L?Rr(L):window,Z=V.nodeName&&V.nodeName.toLowerCase(),Z==="select"||Z==="input"&&V.type==="file")var se=hy;else if(Bu(V))if(Vu)se=vy;else{se=xy;var ce=yy}else(Z=V.nodeName)&&Z.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(se=by);if(se&&(se=se(e,L))){Uu(H,se,i,q);break e}ce&&ce(e,V,L),e==="focusout"&&(ce=V._wrapperState)&&ce.controlled&&V.type==="number"&&fo(V,"number",V.value)}switch(ce=L?Rr(L):window,e){case"focusin":(Bu(ce)||ce.contentEditable==="true")&&(Pr=ce,Ll=L,Pi=null);break;case"focusout":Pi=Ll=Pr=null;break;case"mousedown":Rl=!0;break;case"contextmenu":case"mouseup":case"dragend":Rl=!1,Xu(H,i,q);break;case"selectionchange":if(ky)break;case"keydown":case"keyup":Xu(H,i,q)}var de;if($l)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else $r?Mu(e,i)&&(we="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(we="onCompositionStart");we&&(Ru&&i.locale!=="ko"&&($r||we!=="onCompositionStart"?we==="onCompositionEnd"&&$r&&(de=$u()):(_o=q,Cl="value"in _o?_o.value:_o.textContent,$r=!0)),ce=Ya(L,we),0<ce.length&&(we=new Ou(we,e,null,i,q),H.push({event:we,listeners:ce}),de?we.data=de:(de=Iu(i),de!==null&&(we.data=de)))),(de=uy?py(e,i):my(e,i))&&(L=Ya(L,"onBeforeInput"),0<L.length&&(q=new Ou("onBeforeInput","beforeinput",null,i,q),H.push({event:q,listeners:L}),q.data=de))}ap(H,o)})}function Li(e,o,i){return{instance:e,listener:o,currentTarget:i}}function Ya(e,o){for(var i=o+"Capture",l=[];e!==null;){var d=e,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Wn(e,i),m!=null&&l.unshift(Li(e,m,d)),m=Wn(e,o),m!=null&&l.push(Li(e,m,d))),e=e.return}return l}function Or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lp(e,o,i,l,d){for(var m=o._reactName,x=[];i!==null&&i!==l;){var w=i,A=w.alternate,L=w.stateNode;if(A!==null&&A===l)break;w.tag===5&&L!==null&&(w=L,d?(A=Wn(i,m),A!=null&&x.unshift(Li(i,A,w))):d||(A=Wn(i,m),A!=null&&x.push(Li(i,A,w)))),i=i.return}x.length!==0&&e.push({event:o,listeners:x})}var zy=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function cp(e){return(typeof e=="string"?e:""+e).replace(zy,`
`).replace(Ay,"")}function Qa(e,o,i){if(o=cp(o),cp(e)!==o&&i)throw Error(r(425))}function Xa(){}var Ul=null,Vl=null;function ql(e,o){return e==="textarea"||e==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Gl=typeof setTimeout=="function"?setTimeout:void 0,Ny=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(e){return dp.resolve(null).then(e).catch($y)}:Gl;function $y(e){setTimeout(function(){throw e})}function Hl(e,o){var i=o,l=0;do{var d=i.nextSibling;if(e.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(l===0){e.removeChild(d),Ci(o);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=d}while(i);Ci(o)}function So(e){for(;e!=null;e=e.nextSibling){var o=e.nodeType;if(o===1||o===3)break;if(o===8){if(o=e.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return e}function up(e){e=e.previousSibling;for(var o=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(o===0)return e;o--}else i==="/$"&&o++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),Ln="__reactFiber$"+Lr,Ri="__reactProps$"+Lr,Xn="__reactContainer$"+Lr,Wl="__reactEvents$"+Lr,Py="__reactListeners$"+Lr,Ty="__reactHandles$"+Lr;function Yo(e){var o=e[Ln];if(o)return o;for(var i=e.parentNode;i;){if(o=i[Xn]||i[Ln]){if(i=o.alternate,o.child!==null||i!==null&&i.child!==null)for(e=up(e);e!==null;){if(i=e[Ln])return i;e=up(e)}return o}e=i,i=e.parentNode}return null}function Fi(e){return e=e[Ln]||e[Xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ja(e){return e[Ri]||null}var Kl=[],Fr=-1;function Co(e){return{current:e}}function Ke(e){0>Fr||(e.current=Kl[Fr],Kl[Fr]=null,Fr--)}function Ve(e,o){Fr++,Kl[Fr]=e.current,e.current=o}var Eo={},Ct=Co(Eo),Ft=Co(!1),Qo=Eo;function Dr(e,o){var i=e.type.contextTypes;if(!i)return Eo;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===o)return l.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in i)d[m]=o[m];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=d),d}function Dt(e){return e=e.childContextTypes,e!=null}function Za(){Ke(Ft),Ke(Ct)}function pp(e,o,i){if(Ct.current!==Eo)throw Error(r(168));Ve(Ct,o),Ve(Ft,i)}function mp(e,o,i){var l=e.stateNode;if(o=o.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var d in l)if(!(d in o))throw Error(r(108,Ne(e)||"Unknown",d));return Q({},i,l)}function es(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Eo,Qo=Ct.current,Ve(Ct,e),Ve(Ft,Ft.current),!0}function fp(e,o,i){var l=e.stateNode;if(!l)throw Error(r(169));i?(e=mp(e,o,Qo),l.__reactInternalMemoizedMergedChildContext=e,Ke(Ft),Ke(Ct),Ve(Ct,e)):Ke(Ft),Ve(Ft,i)}var Jn=null,ts=!1,Yl=!1;function gp(e){Jn===null?Jn=[e]:Jn.push(e)}function Oy(e){ts=!0,gp(e)}function zo(){if(!Yl&&Jn!==null){Yl=!0;var e=0,o=Oe;try{var i=Jn;for(Oe=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Jn=null,ts=!1}catch(d){throw Jn!==null&&(Jn=Jn.slice(e+1)),Fa(xr,zo),d}finally{Oe=o,Yl=!1}}return null}var Mr=[],Ir=0,ns=null,os=0,sn=[],ln=0,Xo=null,Zn=1,eo="";function Jo(e,o){Mr[Ir++]=os,Mr[Ir++]=ns,ns=e,os=o}function hp(e,o,i){sn[ln++]=Zn,sn[ln++]=eo,sn[ln++]=Xo,Xo=e;var l=Zn;e=eo;var d=32-Ht(l)-1;l&=~(1<<d),i+=1;var m=32-Ht(o)+d;if(30<m){var x=d-d%5;m=(l&(1<<x)-1).toString(32),l>>=x,d-=x,Zn=1<<32-Ht(o)+d|i<<d|l,eo=m+e}else Zn=1<<m|i<<d|l,eo=e}function Ql(e){e.return!==null&&(Jo(e,1),hp(e,1,0))}function Xl(e){for(;e===ns;)ns=Mr[--Ir],Mr[Ir]=null,os=Mr[--Ir],Mr[Ir]=null;for(;e===Xo;)Xo=sn[--ln],sn[ln]=null,eo=sn[--ln],sn[ln]=null,Zn=sn[--ln],sn[ln]=null}var Yt=null,Qt=null,Je=!1,Sn=null;function yp(e,o){var i=pn(5,null,null,0);i.elementType="DELETED",i.stateNode=o,i.return=e,o=e.deletions,o===null?(e.deletions=[i],e.flags|=16):o.push(i)}function xp(e,o){switch(e.tag){case 5:var i=e.type;return o=o.nodeType!==1||i.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(e.stateNode=o,Yt=e,Qt=So(o.firstChild),!0):!1;case 6:return o=e.pendingProps===""||o.nodeType!==3?null:o,o!==null?(e.stateNode=o,Yt=e,Qt=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(i=Xo!==null?{id:Zn,overflow:eo}:null,e.memoizedState={dehydrated:o,treeContext:i,retryLane:1073741824},i=pn(18,null,null,0),i.stateNode=o,i.return=e,e.child=i,Yt=e,Qt=null,!0):!1;default:return!1}}function Jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zl(e){if(Je){var o=Qt;if(o){var i=o;if(!xp(e,o)){if(Jl(e))throw Error(r(418));o=So(i.nextSibling);var l=Yt;o&&xp(e,o)?yp(l,i):(e.flags=e.flags&-4097|2,Je=!1,Yt=e)}}else{if(Jl(e))throw Error(r(418));e.flags=e.flags&-4097|2,Je=!1,Yt=e}}}function bp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Yt=e}function rs(e){if(e!==Yt)return!1;if(!Je)return bp(e),Je=!0,!1;var o;if((o=e.tag!==3)&&!(o=e.tag!==5)&&(o=e.type,o=o!=="head"&&o!=="body"&&!ql(e.type,e.memoizedProps)),o&&(o=Qt)){if(Jl(e))throw vp(),Error(r(418));for(;o;)yp(e,o),o=So(o.nextSibling)}if(bp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,o=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(o===0){Qt=So(e.nextSibling);break e}o--}else i!=="$"&&i!=="$!"&&i!=="$?"||o++}e=e.nextSibling}Qt=null}}else Qt=Yt?So(e.stateNode.nextSibling):null;return!0}function vp(){for(var e=Qt;e;)e=So(e.nextSibling)}function Br(){Qt=Yt=null,Je=!1}function ec(e){Sn===null?Sn=[e]:Sn.push(e)}var Ly=D.ReactCurrentBatchConfig;function Di(e,o,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,e));var d=l,m=""+e;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===m?o.ref:(o=function(x){var w=d.refs;x===null?delete w[m]:w[m]=x},o._stringRef=m,o)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function is(e,o){throw e=Object.prototype.toString.call(o),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":e))}function wp(e){var o=e._init;return o(e._payload)}function _p(e){function o(P,j){if(e){var O=P.deletions;O===null?(P.deletions=[j],P.flags|=16):O.push(j)}}function i(P,j){if(!e)return null;for(;j!==null;)o(P,j),j=j.sibling;return null}function l(P,j){for(P=new Map;j!==null;)j.key!==null?P.set(j.key,j):P.set(j.index,j),j=j.sibling;return P}function d(P,j){return P=Lo(P,j),P.index=0,P.sibling=null,P}function m(P,j,O){return P.index=O,e?(O=P.alternate,O!==null?(O=O.index,O<j?(P.flags|=2,j):O):(P.flags|=2,j)):(P.flags|=1048576,j)}function x(P){return e&&P.alternate===null&&(P.flags|=2),P}function w(P,j,O,K){return j===null||j.tag!==6?(j=Gc(O,P.mode,K),j.return=P,j):(j=d(j,O),j.return=P,j)}function A(P,j,O,K){var se=O.type;return se===W?q(P,j,O.props.children,K,O.key):j!==null&&(j.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ge&&wp(se)===j.type)?(K=d(j,O.props),K.ref=Di(P,j,O),K.return=P,K):(K=Ns(O.type,O.key,O.props,null,P.mode,K),K.ref=Di(P,j,O),K.return=P,K)}function L(P,j,O,K){return j===null||j.tag!==4||j.stateNode.containerInfo!==O.containerInfo||j.stateNode.implementation!==O.implementation?(j=Hc(O,P.mode,K),j.return=P,j):(j=d(j,O.children||[]),j.return=P,j)}function q(P,j,O,K,se){return j===null||j.tag!==7?(j=ar(O,P.mode,K,se),j.return=P,j):(j=d(j,O),j.return=P,j)}function H(P,j,O){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Gc(""+j,P.mode,O),j.return=P,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case F:return O=Ns(j.type,j.key,j.props,null,P.mode,O),O.ref=Di(P,null,j),O.return=P,O;case X:return j=Hc(j,P.mode,O),j.return=P,j;case ge:var K=j._init;return H(P,K(j._payload),O)}if(qt(j)||ee(j))return j=ar(j,P.mode,O,null),j.return=P,j;is(P,j)}return null}function V(P,j,O,K){var se=j!==null?j.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return se!==null?null:w(P,j,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case F:return O.key===se?A(P,j,O,K):null;case X:return O.key===se?L(P,j,O,K):null;case ge:return se=O._init,V(P,j,se(O._payload),K)}if(qt(O)||ee(O))return se!==null?null:q(P,j,O,K,null);is(P,O)}return null}function Z(P,j,O,K,se){if(typeof K=="string"&&K!==""||typeof K=="number")return P=P.get(O)||null,w(j,P,""+K,se);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case F:return P=P.get(K.key===null?O:K.key)||null,A(j,P,K,se);case X:return P=P.get(K.key===null?O:K.key)||null,L(j,P,K,se);case ge:var ce=K._init;return Z(P,j,O,ce(K._payload),se)}if(qt(K)||ee(K))return P=P.get(O)||null,q(j,P,K,se,null);is(j,K)}return null}function oe(P,j,O,K){for(var se=null,ce=null,de=j,we=j=0,yt=null;de!==null&&we<O.length;we++){de.index>we?(yt=de,de=null):yt=de.sibling;var Le=V(P,de,O[we],K);if(Le===null){de===null&&(de=yt);break}e&&de&&Le.alternate===null&&o(P,de),j=m(Le,j,we),ce===null?se=Le:ce.sibling=Le,ce=Le,de=yt}if(we===O.length)return i(P,de),Je&&Jo(P,we),se;if(de===null){for(;we<O.length;we++)de=H(P,O[we],K),de!==null&&(j=m(de,j,we),ce===null?se=de:ce.sibling=de,ce=de);return Je&&Jo(P,we),se}for(de=l(P,de);we<O.length;we++)yt=Z(de,P,we,O[we],K),yt!==null&&(e&&yt.alternate!==null&&de.delete(yt.key===null?we:yt.key),j=m(yt,j,we),ce===null?se=yt:ce.sibling=yt,ce=yt);return e&&de.forEach(function(Ro){return o(P,Ro)}),Je&&Jo(P,we),se}function re(P,j,O,K){var se=ee(O);if(typeof se!="function")throw Error(r(150));if(O=se.call(O),O==null)throw Error(r(151));for(var ce=se=null,de=j,we=j=0,yt=null,Le=O.next();de!==null&&!Le.done;we++,Le=O.next()){de.index>we?(yt=de,de=null):yt=de.sibling;var Ro=V(P,de,Le.value,K);if(Ro===null){de===null&&(de=yt);break}e&&de&&Ro.alternate===null&&o(P,de),j=m(Ro,j,we),ce===null?se=Ro:ce.sibling=Ro,ce=Ro,de=yt}if(Le.done)return i(P,de),Je&&Jo(P,we),se;if(de===null){for(;!Le.done;we++,Le=O.next())Le=H(P,Le.value,K),Le!==null&&(j=m(Le,j,we),ce===null?se=Le:ce.sibling=Le,ce=Le);return Je&&Jo(P,we),se}for(de=l(P,de);!Le.done;we++,Le=O.next())Le=Z(de,P,we,Le.value,K),Le!==null&&(e&&Le.alternate!==null&&de.delete(Le.key===null?we:Le.key),j=m(Le,j,we),ce===null?se=Le:ce.sibling=Le,ce=Le);return e&&de.forEach(function(fx){return o(P,fx)}),Je&&Jo(P,we),se}function ct(P,j,O,K){if(typeof O=="object"&&O!==null&&O.type===W&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case F:e:{for(var se=O.key,ce=j;ce!==null;){if(ce.key===se){if(se=O.type,se===W){if(ce.tag===7){i(P,ce.sibling),j=d(ce,O.props.children),j.return=P,P=j;break e}}else if(ce.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ge&&wp(se)===ce.type){i(P,ce.sibling),j=d(ce,O.props),j.ref=Di(P,ce,O),j.return=P,P=j;break e}i(P,ce);break}else o(P,ce);ce=ce.sibling}O.type===W?(j=ar(O.props.children,P.mode,K,O.key),j.return=P,P=j):(K=Ns(O.type,O.key,O.props,null,P.mode,K),K.ref=Di(P,j,O),K.return=P,P=K)}return x(P);case X:e:{for(ce=O.key;j!==null;){if(j.key===ce)if(j.tag===4&&j.stateNode.containerInfo===O.containerInfo&&j.stateNode.implementation===O.implementation){i(P,j.sibling),j=d(j,O.children||[]),j.return=P,P=j;break e}else{i(P,j);break}else o(P,j);j=j.sibling}j=Hc(O,P.mode,K),j.return=P,P=j}return x(P);case ge:return ce=O._init,ct(P,j,ce(O._payload),K)}if(qt(O))return oe(P,j,O,K);if(ee(O))return re(P,j,O,K);is(P,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,j!==null&&j.tag===6?(i(P,j.sibling),j=d(j,O),j.return=P,P=j):(i(P,j),j=Gc(O,P.mode,K),j.return=P,P=j),x(P)):i(P,j)}return ct}var Ur=_p(!0),kp=_p(!1),as=Co(null),ss=null,Vr=null,tc=null;function nc(){tc=Vr=ss=null}function oc(e){var o=as.current;Ke(as),e._currentValue=o}function rc(e,o,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&o)!==o?(e.childLanes|=o,l!==null&&(l.childLanes|=o)):l!==null&&(l.childLanes&o)!==o&&(l.childLanes|=o),e===i)break;e=e.return}}function qr(e,o){ss=e,tc=Vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&o)!==0&&(Mt=!0),e.firstContext=null)}function cn(e){var o=e._currentValue;if(tc!==e)if(e={context:e,memoizedValue:o,next:null},Vr===null){if(ss===null)throw Error(r(308));Vr=e,ss.dependencies={lanes:0,firstContext:e}}else Vr=Vr.next=e;return o}var Zo=null;function ic(e){Zo===null?Zo=[e]:Zo.push(e)}function Sp(e,o,i,l){var d=o.interleaved;return d===null?(i.next=i,ic(o)):(i.next=d.next,d.next=i),o.interleaved=i,to(e,l)}function to(e,o){e.lanes|=o;var i=e.alternate;for(i!==null&&(i.lanes|=o),i=e,e=e.return;e!==null;)e.childLanes|=o,i=e.alternate,i!==null&&(i.childLanes|=o),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Ao=!1;function ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cp(e,o){e=e.updateQueue,o.updateQueue===e&&(o.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function no(e,o){return{eventTime:e,lane:o,tag:0,payload:null,callback:null,next:null}}function No(e,o,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Te&2)!==0){var d=l.pending;return d===null?o.next=o:(o.next=d.next,d.next=o),l.pending=o,to(e,i)}return d=l.interleaved,d===null?(o.next=o,ic(l)):(o.next=d.next,d.next=o),l.interleaved=o,to(e,i)}function ls(e,o,i){if(o=o.updateQueue,o!==null&&(o=o.shared,(i&4194240)!==0)){var l=o.lanes;l&=e.pendingLanes,i|=l,o.lanes=i,Er(e,i)}}function Ep(e,o){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var d=null,m=null;if(i=i.firstBaseUpdate,i!==null){do{var x={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};m===null?d=m=x:m=m.next=x,i=i.next}while(i!==null);m===null?d=m=o:m=m.next=o}else d=m=o;i={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=o:e.next=o,i.lastBaseUpdate=o}function cs(e,o,i,l){var d=e.updateQueue;Ao=!1;var m=d.firstBaseUpdate,x=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var A=w,L=A.next;A.next=null,x===null?m=L:x.next=L,x=A;var q=e.alternate;q!==null&&(q=q.updateQueue,w=q.lastBaseUpdate,w!==x&&(w===null?q.firstBaseUpdate=L:w.next=L,q.lastBaseUpdate=A))}if(m!==null){var H=d.baseState;x=0,q=L=A=null,w=m;do{var V=w.lane,Z=w.eventTime;if((l&V)===V){q!==null&&(q=q.next={eventTime:Z,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var oe=e,re=w;switch(V=o,Z=i,re.tag){case 1:if(oe=re.payload,typeof oe=="function"){H=oe.call(Z,H,V);break e}H=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=re.payload,V=typeof oe=="function"?oe.call(Z,H,V):oe,V==null)break e;H=Q({},H,V);break e;case 2:Ao=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,V=d.effects,V===null?d.effects=[w]:V.push(w))}else Z={eventTime:Z,lane:V,tag:w.tag,payload:w.payload,callback:w.callback,next:null},q===null?(L=q=Z,A=H):q=q.next=Z,x|=V;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;V=w,w=V.next,V.next=null,d.lastBaseUpdate=V,d.shared.pending=null}}while(!0);if(q===null&&(A=H),d.baseState=A,d.firstBaseUpdate=L,d.lastBaseUpdate=q,o=d.shared.interleaved,o!==null){d=o;do x|=d.lane,d=d.next;while(d!==o)}else m===null&&(d.shared.lanes=0);nr|=x,e.lanes=x,e.memoizedState=H}}function zp(e,o,i){if(e=o.effects,o.effects=null,e!==null)for(o=0;o<e.length;o++){var l=e[o],d=l.callback;if(d!==null){if(l.callback=null,l=i,typeof d!="function")throw Error(r(191,d));d.call(l)}}}var Mi={},Rn=Co(Mi),Ii=Co(Mi),Bi=Co(Mi);function er(e){if(e===Mi)throw Error(r(174));return e}function sc(e,o){switch(Ve(Bi,o),Ve(Ii,e),Ve(Rn,Mi),e=o.nodeType,e){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:at(null,"");break;default:e=e===8?o.parentNode:o,o=e.namespaceURI||null,e=e.tagName,o=at(o,e)}Ke(Rn),Ve(Rn,o)}function Gr(){Ke(Rn),Ke(Ii),Ke(Bi)}function Ap(e){er(Bi.current);var o=er(Rn.current),i=at(o,e.type);o!==i&&(Ve(Ii,e),Ve(Rn,i))}function lc(e){Ii.current===e&&(Ke(Rn),Ke(Ii))}var tt=Co(0);function ds(e){for(var o=e;o!==null;){if(o.tag===13){var i=o.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var cc=[];function dc(){for(var e=0;e<cc.length;e++)cc[e]._workInProgressVersionPrimary=null;cc.length=0}var us=D.ReactCurrentDispatcher,uc=D.ReactCurrentBatchConfig,tr=0,nt=null,pt=null,gt=null,ps=!1,Ui=!1,Vi=0,Ry=0;function Et(){throw Error(r(321))}function pc(e,o){if(o===null)return!1;for(var i=0;i<o.length&&i<e.length;i++)if(!kn(e[i],o[i]))return!1;return!0}function mc(e,o,i,l,d,m){if(tr=m,nt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,us.current=e===null||e.memoizedState===null?Iy:By,e=i(l,d),Ui){m=0;do{if(Ui=!1,Vi=0,25<=m)throw Error(r(301));m+=1,gt=pt=null,o.updateQueue=null,us.current=Uy,e=i(l,d)}while(Ui)}if(us.current=gs,o=pt!==null&&pt.next!==null,tr=0,gt=pt=nt=null,ps=!1,o)throw Error(r(300));return e}function fc(){var e=Vi!==0;return Vi=0,e}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?nt.memoizedState=gt=e:gt=gt.next=e,gt}function dn(){if(pt===null){var e=nt.alternate;e=e!==null?e.memoizedState:null}else e=pt.next;var o=gt===null?nt.memoizedState:gt.next;if(o!==null)gt=o,pt=e;else{if(e===null)throw Error(r(310));pt=e,e={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},gt===null?nt.memoizedState=gt=e:gt=gt.next=e}return gt}function qi(e,o){return typeof o=="function"?o(e):o}function gc(e){var o=dn(),i=o.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=pt,d=l.baseQueue,m=i.pending;if(m!==null){if(d!==null){var x=d.next;d.next=m.next,m.next=x}l.baseQueue=d=m,i.pending=null}if(d!==null){m=d.next,l=l.baseState;var w=x=null,A=null,L=m;do{var q=L.lane;if((tr&q)===q)A!==null&&(A=A.next={lane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),l=L.hasEagerState?L.eagerState:e(l,L.action);else{var H={lane:q,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null};A===null?(w=A=H,x=l):A=A.next=H,nt.lanes|=q,nr|=q}L=L.next}while(L!==null&&L!==m);A===null?x=l:A.next=w,kn(l,o.memoizedState)||(Mt=!0),o.memoizedState=l,o.baseState=x,o.baseQueue=A,i.lastRenderedState=l}if(e=i.interleaved,e!==null){d=e;do m=d.lane,nt.lanes|=m,nr|=m,d=d.next;while(d!==e)}else d===null&&(i.lanes=0);return[o.memoizedState,i.dispatch]}function hc(e){var o=dn(),i=o.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,d=i.pending,m=o.memoizedState;if(d!==null){i.pending=null;var x=d=d.next;do m=e(m,x.action),x=x.next;while(x!==d);kn(m,o.memoizedState)||(Mt=!0),o.memoizedState=m,o.baseQueue===null&&(o.baseState=m),i.lastRenderedState=m}return[m,l]}function Np(){}function jp(e,o){var i=nt,l=dn(),d=o(),m=!kn(l.memoizedState,d);if(m&&(l.memoizedState=d,Mt=!0),l=l.queue,yc(Tp.bind(null,i,l,e),[e]),l.getSnapshot!==o||m||gt!==null&&gt.memoizedState.tag&1){if(i.flags|=2048,Gi(9,Pp.bind(null,i,l,d,o),void 0,null),ht===null)throw Error(r(349));(tr&30)!==0||$p(i,o,d)}return d}function $p(e,o,i){e.flags|=16384,e={getSnapshot:o,value:i},o=nt.updateQueue,o===null?(o={lastEffect:null,stores:null},nt.updateQueue=o,o.stores=[e]):(i=o.stores,i===null?o.stores=[e]:i.push(e))}function Pp(e,o,i,l){o.value=i,o.getSnapshot=l,Op(o)&&Lp(e)}function Tp(e,o,i){return i(function(){Op(o)&&Lp(e)})}function Op(e){var o=e.getSnapshot;e=e.value;try{var i=o();return!kn(e,i)}catch{return!0}}function Lp(e){var o=to(e,1);o!==null&&An(o,e,1,-1)}function Rp(e){var o=Fn();return typeof e=="function"&&(e=e()),o.memoizedState=o.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},o.queue=e,e=e.dispatch=My.bind(null,nt,e),[o.memoizedState,e]}function Gi(e,o,i,l){return e={tag:e,create:o,destroy:i,deps:l,next:null},o=nt.updateQueue,o===null?(o={lastEffect:null,stores:null},nt.updateQueue=o,o.lastEffect=e.next=e):(i=o.lastEffect,i===null?o.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,o.lastEffect=e)),e}function Fp(){return dn().memoizedState}function ms(e,o,i,l){var d=Fn();nt.flags|=e,d.memoizedState=Gi(1|o,i,void 0,l===void 0?null:l)}function fs(e,o,i,l){var d=dn();l=l===void 0?null:l;var m=void 0;if(pt!==null){var x=pt.memoizedState;if(m=x.destroy,l!==null&&pc(l,x.deps)){d.memoizedState=Gi(o,i,m,l);return}}nt.flags|=e,d.memoizedState=Gi(1|o,i,m,l)}function Dp(e,o){return ms(8390656,8,e,o)}function yc(e,o){return fs(2048,8,e,o)}function Mp(e,o){return fs(4,2,e,o)}function Ip(e,o){return fs(4,4,e,o)}function Bp(e,o){if(typeof o=="function")return e=e(),o(e),function(){o(null)};if(o!=null)return e=e(),o.current=e,function(){o.current=null}}function Up(e,o,i){return i=i!=null?i.concat([e]):null,fs(4,4,Bp.bind(null,o,e),i)}function xc(){}function Vp(e,o){var i=dn();o=o===void 0?null:o;var l=i.memoizedState;return l!==null&&o!==null&&pc(o,l[1])?l[0]:(i.memoizedState=[e,o],e)}function qp(e,o){var i=dn();o=o===void 0?null:o;var l=i.memoizedState;return l!==null&&o!==null&&pc(o,l[1])?l[0]:(e=e(),i.memoizedState=[e,o],e)}function Gp(e,o,i){return(tr&21)===0?(e.baseState&&(e.baseState=!1,Mt=!0),e.memoizedState=i):(kn(i,o)||(i=Sr(),nt.lanes|=i,nr|=i,e.baseState=!0),o)}function Fy(e,o){var i=Oe;Oe=i!==0&&4>i?i:4,e(!0);var l=uc.transition;uc.transition={};try{e(!1),o()}finally{Oe=i,uc.transition=l}}function Hp(){return dn().memoizedState}function Dy(e,o,i){var l=To(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Wp(e))Kp(o,i);else if(i=Sp(e,o,i,l),i!==null){var d=Ot();An(i,e,l,d),Yp(i,o,l)}}function My(e,o,i){var l=To(e),d={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Wp(e))Kp(o,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=o.lastRenderedReducer,m!==null))try{var x=o.lastRenderedState,w=m(x,i);if(d.hasEagerState=!0,d.eagerState=w,kn(w,x)){var A=o.interleaved;A===null?(d.next=d,ic(o)):(d.next=A.next,A.next=d),o.interleaved=d;return}}catch{}finally{}i=Sp(e,o,d,l),i!==null&&(d=Ot(),An(i,e,l,d),Yp(i,o,l))}}function Wp(e){var o=e.alternate;return e===nt||o!==null&&o===nt}function Kp(e,o){Ui=ps=!0;var i=e.pending;i===null?o.next=o:(o.next=i.next,i.next=o),e.pending=o}function Yp(e,o,i){if((i&4194240)!==0){var l=o.lanes;l&=e.pendingLanes,i|=l,o.lanes=i,Er(e,i)}}var gs={readContext:cn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},Iy={readContext:cn,useCallback:function(e,o){return Fn().memoizedState=[e,o===void 0?null:o],e},useContext:cn,useEffect:Dp,useImperativeHandle:function(e,o,i){return i=i!=null?i.concat([e]):null,ms(4194308,4,Bp.bind(null,o,e),i)},useLayoutEffect:function(e,o){return ms(4194308,4,e,o)},useInsertionEffect:function(e,o){return ms(4,2,e,o)},useMemo:function(e,o){var i=Fn();return o=o===void 0?null:o,e=e(),i.memoizedState=[e,o],e},useReducer:function(e,o,i){var l=Fn();return o=i!==void 0?i(o):o,l.memoizedState=l.baseState=o,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},l.queue=e,e=e.dispatch=Dy.bind(null,nt,e),[l.memoizedState,e]},useRef:function(e){var o=Fn();return e={current:e},o.memoizedState=e},useState:Rp,useDebugValue:xc,useDeferredValue:function(e){return Fn().memoizedState=e},useTransition:function(){var e=Rp(!1),o=e[0];return e=Fy.bind(null,e[1]),Fn().memoizedState=e,[o,e]},useMutableSource:function(){},useSyncExternalStore:function(e,o,i){var l=nt,d=Fn();if(Je){if(i===void 0)throw Error(r(407));i=i()}else{if(i=o(),ht===null)throw Error(r(349));(tr&30)!==0||$p(l,o,i)}d.memoizedState=i;var m={value:i,getSnapshot:o};return d.queue=m,Dp(Tp.bind(null,l,m,e),[e]),l.flags|=2048,Gi(9,Pp.bind(null,l,m,i,o),void 0,null),i},useId:function(){var e=Fn(),o=ht.identifierPrefix;if(Je){var i=eo,l=Zn;i=(l&~(1<<32-Ht(l)-1)).toString(32)+i,o=":"+o+"R"+i,i=Vi++,0<i&&(o+="H"+i.toString(32)),o+=":"}else i=Ry++,o=":"+o+"r"+i.toString(32)+":";return e.memoizedState=o},unstable_isNewReconciler:!1},By={readContext:cn,useCallback:Vp,useContext:cn,useEffect:yc,useImperativeHandle:Up,useInsertionEffect:Mp,useLayoutEffect:Ip,useMemo:qp,useReducer:gc,useRef:Fp,useState:function(){return gc(qi)},useDebugValue:xc,useDeferredValue:function(e){var o=dn();return Gp(o,pt.memoizedState,e)},useTransition:function(){var e=gc(qi)[0],o=dn().memoizedState;return[e,o]},useMutableSource:Np,useSyncExternalStore:jp,useId:Hp,unstable_isNewReconciler:!1},Uy={readContext:cn,useCallback:Vp,useContext:cn,useEffect:yc,useImperativeHandle:Up,useInsertionEffect:Mp,useLayoutEffect:Ip,useMemo:qp,useReducer:hc,useRef:Fp,useState:function(){return hc(qi)},useDebugValue:xc,useDeferredValue:function(e){var o=dn();return pt===null?o.memoizedState=e:Gp(o,pt.memoizedState,e)},useTransition:function(){var e=hc(qi)[0],o=dn().memoizedState;return[e,o]},useMutableSource:Np,useSyncExternalStore:jp,useId:Hp,unstable_isNewReconciler:!1};function Cn(e,o){if(e&&e.defaultProps){o=Q({},o),e=e.defaultProps;for(var i in e)o[i]===void 0&&(o[i]=e[i]);return o}return o}function bc(e,o,i,l){o=e.memoizedState,i=i(l,o),i=i==null?o:Q({},o,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var hs={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,o,i){e=e._reactInternals;var l=Ot(),d=To(e),m=no(l,d);m.payload=o,i!=null&&(m.callback=i),o=No(e,m,d),o!==null&&(An(o,e,d,l),ls(o,e,d))},enqueueReplaceState:function(e,o,i){e=e._reactInternals;var l=Ot(),d=To(e),m=no(l,d);m.tag=1,m.payload=o,i!=null&&(m.callback=i),o=No(e,m,d),o!==null&&(An(o,e,d,l),ls(o,e,d))},enqueueForceUpdate:function(e,o){e=e._reactInternals;var i=Ot(),l=To(e),d=no(i,l);d.tag=2,o!=null&&(d.callback=o),o=No(e,d,l),o!==null&&(An(o,e,l,i),ls(o,e,l))}};function Qp(e,o,i,l,d,m,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,x):o.prototype&&o.prototype.isPureReactComponent?!$i(i,l)||!$i(d,m):!0}function Xp(e,o,i){var l=!1,d=Eo,m=o.contextType;return typeof m=="object"&&m!==null?m=cn(m):(d=Dt(o)?Qo:Ct.current,l=o.contextTypes,m=(l=l!=null)?Dr(e,d):Eo),o=new o(i,m),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=hs,e.stateNode=o,o._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=m),o}function Jp(e,o,i,l){e=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(i,l),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(i,l),o.state!==e&&hs.enqueueReplaceState(o,o.state,null)}function vc(e,o,i,l){var d=e.stateNode;d.props=i,d.state=e.memoizedState,d.refs={},ac(e);var m=o.contextType;typeof m=="object"&&m!==null?d.context=cn(m):(m=Dt(o)?Qo:Ct.current,d.context=Dr(e,m)),d.state=e.memoizedState,m=o.getDerivedStateFromProps,typeof m=="function"&&(bc(e,o,m,i),d.state=e.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(o=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),o!==d.state&&hs.enqueueReplaceState(d,d.state,null),cs(e,i,d,l),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,o){try{var i="",l=o;do i+=ae(l),l=l.return;while(l);var d=i}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:e,source:o,stack:d,digest:null}}function wc(e,o,i){return{value:e,source:null,stack:i??null,digest:o??null}}function _c(e,o){try{console.error(o.value)}catch(i){setTimeout(function(){throw i})}}var Vy=typeof WeakMap=="function"?WeakMap:Map;function Zp(e,o,i){i=no(-1,i),i.tag=3,i.payload={element:null};var l=o.value;return i.callback=function(){ks||(ks=!0,Fc=l),_c(e,o)},i}function em(e,o,i){i=no(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var d=o.value;i.payload=function(){return l(d)},i.callback=function(){_c(e,o)}}var m=e.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(i.callback=function(){_c(e,o),typeof l!="function"&&($o===null?$o=new Set([this]):$o.add(this));var x=o.stack;this.componentDidCatch(o.value,{componentStack:x!==null?x:""})}),i}function tm(e,o,i){var l=e.pingCache;if(l===null){l=e.pingCache=new Vy;var d=new Set;l.set(o,d)}else d=l.get(o),d===void 0&&(d=new Set,l.set(o,d));d.has(i)||(d.add(i),e=ox.bind(null,e,o,i),o.then(e,e))}function nm(e){do{var o;if((o=e.tag===13)&&(o=e.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return e;e=e.return}while(e!==null);return null}function om(e,o,i,l,d){return(e.mode&1)===0?(e===o?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(o=no(-1,1),o.tag=2,No(i,o,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var qy=D.ReactCurrentOwner,Mt=!1;function Tt(e,o,i,l){o.child=e===null?kp(o,null,i,l):Ur(o,e.child,i,l)}function rm(e,o,i,l,d){i=i.render;var m=o.ref;return qr(o,d),l=mc(e,o,i,l,m,d),i=fc(),e!==null&&!Mt?(o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~d,oo(e,o,d)):(Je&&i&&Ql(o),o.flags|=1,Tt(e,o,l,d),o.child)}function im(e,o,i,l,d){if(e===null){var m=i.type;return typeof m=="function"&&!qc(m)&&m.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(o.tag=15,o.type=m,am(e,o,m,l,d)):(e=Ns(i.type,null,l,o,o.mode,d),e.ref=o.ref,e.return=o,o.child=e)}if(m=e.child,(e.lanes&d)===0){var x=m.memoizedProps;if(i=i.compare,i=i!==null?i:$i,i(x,l)&&e.ref===o.ref)return oo(e,o,d)}return o.flags|=1,e=Lo(m,l),e.ref=o.ref,e.return=o,o.child=e}function am(e,o,i,l,d){if(e!==null){var m=e.memoizedProps;if($i(m,l)&&e.ref===o.ref)if(Mt=!1,o.pendingProps=l=m,(e.lanes&d)!==0)(e.flags&131072)!==0&&(Mt=!0);else return o.lanes=e.lanes,oo(e,o,d)}return kc(e,o,i,l,d)}function sm(e,o,i){var l=o.pendingProps,d=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(Kr,Xt),Xt|=i;else{if((i&1073741824)===0)return e=m!==null?m.baseLanes|i:i,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:e,cachePool:null,transitions:null},o.updateQueue=null,Ve(Kr,Xt),Xt|=e,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:i,Ve(Kr,Xt),Xt|=l}else m!==null?(l=m.baseLanes|i,o.memoizedState=null):l=i,Ve(Kr,Xt),Xt|=l;return Tt(e,o,d,i),o.child}function lm(e,o){var i=o.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(o.flags|=512,o.flags|=2097152)}function kc(e,o,i,l,d){var m=Dt(i)?Qo:Ct.current;return m=Dr(o,m),qr(o,d),i=mc(e,o,i,l,m,d),l=fc(),e!==null&&!Mt?(o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~d,oo(e,o,d)):(Je&&l&&Ql(o),o.flags|=1,Tt(e,o,i,d),o.child)}function cm(e,o,i,l,d){if(Dt(i)){var m=!0;es(o)}else m=!1;if(qr(o,d),o.stateNode===null)xs(e,o),Xp(o,i,l),vc(o,i,l,d),l=!0;else if(e===null){var x=o.stateNode,w=o.memoizedProps;x.props=w;var A=x.context,L=i.contextType;typeof L=="object"&&L!==null?L=cn(L):(L=Dt(i)?Qo:Ct.current,L=Dr(o,L));var q=i.getDerivedStateFromProps,H=typeof q=="function"||typeof x.getSnapshotBeforeUpdate=="function";H||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(w!==l||A!==L)&&Jp(o,x,l,L),Ao=!1;var V=o.memoizedState;x.state=V,cs(o,l,x,d),A=o.memoizedState,w!==l||V!==A||Ft.current||Ao?(typeof q=="function"&&(bc(o,i,q,l),A=o.memoizedState),(w=Ao||Qp(o,i,w,l,V,A,L))?(H||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(o.flags|=4194308)):(typeof x.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=l,o.memoizedState=A),x.props=l,x.state=A,x.context=L,l=w):(typeof x.componentDidMount=="function"&&(o.flags|=4194308),l=!1)}else{x=o.stateNode,Cp(e,o),w=o.memoizedProps,L=o.type===o.elementType?w:Cn(o.type,w),x.props=L,H=o.pendingProps,V=x.context,A=i.contextType,typeof A=="object"&&A!==null?A=cn(A):(A=Dt(i)?Qo:Ct.current,A=Dr(o,A));var Z=i.getDerivedStateFromProps;(q=typeof Z=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(w!==H||V!==A)&&Jp(o,x,l,A),Ao=!1,V=o.memoizedState,x.state=V,cs(o,l,x,d);var oe=o.memoizedState;w!==H||V!==oe||Ft.current||Ao?(typeof Z=="function"&&(bc(o,i,Z,l),oe=o.memoizedState),(L=Ao||Qp(o,i,L,l,V,oe,A)||!1)?(q||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(l,oe,A),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(l,oe,A)),typeof x.componentDidUpdate=="function"&&(o.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof x.componentDidUpdate!="function"||w===e.memoizedProps&&V===e.memoizedState||(o.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&V===e.memoizedState||(o.flags|=1024),o.memoizedProps=l,o.memoizedState=oe),x.props=l,x.state=oe,x.context=A,l=L):(typeof x.componentDidUpdate!="function"||w===e.memoizedProps&&V===e.memoizedState||(o.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&V===e.memoizedState||(o.flags|=1024),l=!1)}return Sc(e,o,i,l,m,d)}function Sc(e,o,i,l,d,m){lm(e,o);var x=(o.flags&128)!==0;if(!l&&!x)return d&&fp(o,i,!1),oo(e,o,m);l=o.stateNode,qy.current=o;var w=x&&typeof i.getDerivedStateFromError!="function"?null:l.render();return o.flags|=1,e!==null&&x?(o.child=Ur(o,e.child,null,m),o.child=Ur(o,null,w,m)):Tt(e,o,w,m),o.memoizedState=l.state,d&&fp(o,i,!0),o.child}function dm(e){var o=e.stateNode;o.pendingContext?pp(e,o.pendingContext,o.pendingContext!==o.context):o.context&&pp(e,o.context,!1),sc(e,o.containerInfo)}function um(e,o,i,l,d){return Br(),ec(d),o.flags|=256,Tt(e,o,i,l),o.child}var Cc={dehydrated:null,treeContext:null,retryLane:0};function Ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function pm(e,o,i){var l=o.pendingProps,d=tt.current,m=!1,x=(o.flags&128)!==0,w;if((w=x)||(w=e!==null&&e.memoizedState===null?!1:(d&2)!==0),w?(m=!0,o.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),Ve(tt,d&1),e===null)return Zl(o),e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((o.mode&1)===0?o.lanes=1:e.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(x=l.children,e=l.fallback,m?(l=o.mode,m=o.child,x={mode:"hidden",children:x},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=x):m=js(x,l,0,null),e=ar(e,l,i,null),m.return=o,e.return=o,m.sibling=e,o.child=m,o.child.memoizedState=Ec(i),o.memoizedState=Cc,e):zc(o,x));if(d=e.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return Gy(e,o,x,l,w,d,i);if(m){m=l.fallback,x=o.mode,d=e.child,w=d.sibling;var A={mode:"hidden",children:l.children};return(x&1)===0&&o.child!==d?(l=o.child,l.childLanes=0,l.pendingProps=A,o.deletions=null):(l=Lo(d,A),l.subtreeFlags=d.subtreeFlags&14680064),w!==null?m=Lo(w,m):(m=ar(m,x,i,null),m.flags|=2),m.return=o,l.return=o,l.sibling=m,o.child=l,l=m,m=o.child,x=e.child.memoizedState,x=x===null?Ec(i):{baseLanes:x.baseLanes|i,cachePool:null,transitions:x.transitions},m.memoizedState=x,m.childLanes=e.childLanes&~i,o.memoizedState=Cc,l}return m=e.child,e=m.sibling,l=Lo(m,{mode:"visible",children:l.children}),(o.mode&1)===0&&(l.lanes=i),l.return=o,l.sibling=null,e!==null&&(i=o.deletions,i===null?(o.deletions=[e],o.flags|=16):i.push(e)),o.child=l,o.memoizedState=null,l}function zc(e,o){return o=js({mode:"visible",children:o},e.mode,0,null),o.return=e,e.child=o}function ys(e,o,i,l){return l!==null&&ec(l),Ur(o,e.child,null,i),e=zc(o,o.pendingProps.children),e.flags|=2,o.memoizedState=null,e}function Gy(e,o,i,l,d,m,x){if(i)return o.flags&256?(o.flags&=-257,l=wc(Error(r(422))),ys(e,o,x,l)):o.memoizedState!==null?(o.child=e.child,o.flags|=128,null):(m=l.fallback,d=o.mode,l=js({mode:"visible",children:l.children},d,0,null),m=ar(m,d,x,null),m.flags|=2,l.return=o,m.return=o,l.sibling=m,o.child=l,(o.mode&1)!==0&&Ur(o,e.child,null,x),o.child.memoizedState=Ec(x),o.memoizedState=Cc,m);if((o.mode&1)===0)return ys(e,o,x,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var w=l.dgst;return l=w,m=Error(r(419)),l=wc(m,l,void 0),ys(e,o,x,l)}if(w=(x&e.childLanes)!==0,Mt||w){if(l=ht,l!==null){switch(x&-x){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|x))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,to(e,d),An(l,e,d,-1))}return Vc(),l=wc(Error(r(421))),ys(e,o,x,l)}return d.data==="$?"?(o.flags|=128,o.child=e.child,o=rx.bind(null,e),d._reactRetry=o,null):(e=m.treeContext,Qt=So(d.nextSibling),Yt=o,Je=!0,Sn=null,e!==null&&(sn[ln++]=Zn,sn[ln++]=eo,sn[ln++]=Xo,Zn=e.id,eo=e.overflow,Xo=o),o=zc(o,l.children),o.flags|=4096,o)}function mm(e,o,i){e.lanes|=o;var l=e.alternate;l!==null&&(l.lanes|=o),rc(e.return,o,i)}function Ac(e,o,i,l,d){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:d}:(m.isBackwards=o,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=i,m.tailMode=d)}function fm(e,o,i){var l=o.pendingProps,d=l.revealOrder,m=l.tail;if(Tt(e,o,l.children,i),l=tt.current,(l&2)!==0)l=l&1|2,o.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=o.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mm(e,i,o);else if(e.tag===19)mm(e,i,o);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===o)break e;for(;e.sibling===null;){if(e.return===null||e.return===o)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Ve(tt,l),(o.mode&1)===0)o.memoizedState=null;else switch(d){case"forwards":for(i=o.child,d=null;i!==null;)e=i.alternate,e!==null&&ds(e)===null&&(d=i),i=i.sibling;i=d,i===null?(d=o.child,o.child=null):(d=i.sibling,i.sibling=null),Ac(o,!1,d,i,m);break;case"backwards":for(i=null,d=o.child,o.child=null;d!==null;){if(e=d.alternate,e!==null&&ds(e)===null){o.child=d;break}e=d.sibling,d.sibling=i,i=d,d=e}Ac(o,!0,i,null,m);break;case"together":Ac(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function xs(e,o){(o.mode&1)===0&&e!==null&&(e.alternate=null,o.alternate=null,o.flags|=2)}function oo(e,o,i){if(e!==null&&(o.dependencies=e.dependencies),nr|=o.lanes,(i&o.childLanes)===0)return null;if(e!==null&&o.child!==e.child)throw Error(r(153));if(o.child!==null){for(e=o.child,i=Lo(e,e.pendingProps),o.child=i,i.return=o;e.sibling!==null;)e=e.sibling,i=i.sibling=Lo(e,e.pendingProps),i.return=o;i.sibling=null}return o.child}function Hy(e,o,i){switch(o.tag){case 3:dm(o),Br();break;case 5:Ap(o);break;case 1:Dt(o.type)&&es(o);break;case 4:sc(o,o.stateNode.containerInfo);break;case 10:var l=o.type._context,d=o.memoizedProps.value;Ve(as,l._currentValue),l._currentValue=d;break;case 13:if(l=o.memoizedState,l!==null)return l.dehydrated!==null?(Ve(tt,tt.current&1),o.flags|=128,null):(i&o.child.childLanes)!==0?pm(e,o,i):(Ve(tt,tt.current&1),e=oo(e,o,i),e!==null?e.sibling:null);Ve(tt,tt.current&1);break;case 19:if(l=(i&o.childLanes)!==0,(e.flags&128)!==0){if(l)return fm(e,o,i);o.flags|=128}if(d=o.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ve(tt,tt.current),l)break;return null;case 22:case 23:return o.lanes=0,sm(e,o,i)}return oo(e,o,i)}var gm,Nc,hm,ym;gm=function(e,o){for(var i=o.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break;for(;i.sibling===null;){if(i.return===null||i.return===o)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Nc=function(){},hm=function(e,o,i,l){var d=e.memoizedProps;if(d!==l){e=o.stateNode,er(Rn.current);var m=null;switch(i){case"input":d=tn(e,d),l=tn(e,l),m=[];break;case"select":d=Q({},d,{value:void 0}),l=Q({},l,{value:void 0}),m=[];break;case"textarea":d=qn(e,d),l=qn(e,l),m=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Xa)}bt(i,l);var x;i=null;for(L in d)if(!l.hasOwnProperty(L)&&d.hasOwnProperty(L)&&d[L]!=null)if(L==="style"){var w=d[L];for(x in w)w.hasOwnProperty(x)&&(i||(i={}),i[x]="")}else L!=="dangerouslySetInnerHTML"&&L!=="children"&&L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&L!=="autoFocus"&&(c.hasOwnProperty(L)?m||(m=[]):(m=m||[]).push(L,null));for(L in l){var A=l[L];if(w=d!=null?d[L]:void 0,l.hasOwnProperty(L)&&A!==w&&(A!=null||w!=null))if(L==="style")if(w){for(x in w)!w.hasOwnProperty(x)||A&&A.hasOwnProperty(x)||(i||(i={}),i[x]="");for(x in A)A.hasOwnProperty(x)&&w[x]!==A[x]&&(i||(i={}),i[x]=A[x])}else i||(m||(m=[]),m.push(L,i)),i=A;else L==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,w=w?w.__html:void 0,A!=null&&w!==A&&(m=m||[]).push(L,A)):L==="children"?typeof A!="string"&&typeof A!="number"||(m=m||[]).push(L,""+A):L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&(c.hasOwnProperty(L)?(A!=null&&L==="onScroll"&&We("scroll",e),m||w===A||(m=[])):(m=m||[]).push(L,A))}i&&(m=m||[]).push("style",i);var L=m;(o.updateQueue=L)&&(o.flags|=4)}},ym=function(e,o,i,l){i!==l&&(o.flags|=4)};function Hi(e,o){if(!Je)switch(e.tailMode){case"hidden":o=e.tail;for(var i=null;o!==null;)o.alternate!==null&&(i=o),o=o.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?o||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function zt(e){var o=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(o)for(var d=e.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=i,o}function Wy(e,o,i){var l=o.pendingProps;switch(Xl(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(o),null;case 1:return Dt(o.type)&&Za(),zt(o),null;case 3:return l=o.stateNode,Gr(),Ke(Ft),Ke(Ct),dc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(rs(o)?o.flags|=4:e===null||e.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Sn!==null&&(Ic(Sn),Sn=null))),Nc(e,o),zt(o),null;case 5:lc(o);var d=er(Bi.current);if(i=o.type,e!==null&&o.stateNode!=null)hm(e,o,i,l,d),e.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!l){if(o.stateNode===null)throw Error(r(166));return zt(o),null}if(e=er(Rn.current),rs(o)){l=o.stateNode,i=o.type;var m=o.memoizedProps;switch(l[Ln]=o,l[Ri]=m,e=(o.mode&1)!==0,i){case"dialog":We("cancel",l),We("close",l);break;case"iframe":case"object":case"embed":We("load",l);break;case"video":case"audio":for(d=0;d<Ti.length;d++)We(Ti[d],l);break;case"source":We("error",l);break;case"img":case"image":case"link":We("error",l),We("load",l);break;case"details":We("toggle",l);break;case"input":Go(l,m),We("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},We("invalid",l);break;case"textarea":ft(l,m),We("invalid",l)}bt(i,m),d=null;for(var x in m)if(m.hasOwnProperty(x)){var w=m[x];x==="children"?typeof w=="string"?l.textContent!==w&&(m.suppressHydrationWarning!==!0&&Qa(l.textContent,w,e),d=["children",w]):typeof w=="number"&&l.textContent!==""+w&&(m.suppressHydrationWarning!==!0&&Qa(l.textContent,w,e),d=["children",""+w]):c.hasOwnProperty(x)&&w!=null&&x==="onScroll"&&We("scroll",l)}switch(i){case"input":Ze(l),mo(l,m,!0);break;case"textarea":Ze(l),Tn(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=Xa)}l=d,o.updateQueue=l,l!==null&&(o.flags|=4)}else{x=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xn(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=x.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=x.createElement(i,{is:l.is}):(e=x.createElement(i),i==="select"&&(x=e,l.multiple?x.multiple=!0:l.size&&(x.size=l.size))):e=x.createElementNS(e,i),e[Ln]=o,e[Ri]=l,gm(e,o,!1,!1),o.stateNode=e;e:{switch(x=Fe(i,l),i){case"dialog":We("cancel",e),We("close",e),d=l;break;case"iframe":case"object":case"embed":We("load",e),d=l;break;case"video":case"audio":for(d=0;d<Ti.length;d++)We(Ti[d],e);d=l;break;case"source":We("error",e),d=l;break;case"img":case"image":case"link":We("error",e),We("load",e),d=l;break;case"details":We("toggle",e),d=l;break;case"input":Go(e,l),d=tn(e,l),We("invalid",e);break;case"option":d=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},d=Q({},l,{value:void 0}),We("invalid",e);break;case"textarea":ft(e,l),d=qn(e,l),We("invalid",e);break;default:d=l}bt(i,d),w=d;for(m in w)if(w.hasOwnProperty(m)){var A=w[m];m==="style"?ke(e,A):m==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Gt(e,A)):m==="children"?typeof A=="string"?(i!=="textarea"||A!=="")&&bn(e,A):typeof A=="number"&&bn(e,""+A):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(c.hasOwnProperty(m)?A!=null&&m==="onScroll"&&We("scroll",e):A!=null&&M(e,m,A,x))}switch(i){case"input":Ze(e),mo(e,l,!1);break;case"textarea":Ze(e),Tn(e);break;case"option":l.value!=null&&e.setAttribute("value",""+_e(l.value));break;case"select":e.multiple=!!l.multiple,m=l.value,m!=null?nn(e,!!l.multiple,m,!1):l.defaultValue!=null&&nn(e,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=Xa)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return zt(o),null;case 6:if(e&&o.stateNode!=null)ym(e,o,e.memoizedProps,l);else{if(typeof l!="string"&&o.stateNode===null)throw Error(r(166));if(i=er(Bi.current),er(Rn.current),rs(o)){if(l=o.stateNode,i=o.memoizedProps,l[Ln]=o,(m=l.nodeValue!==i)&&(e=Yt,e!==null))switch(e.tag){case 3:Qa(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qa(l.nodeValue,i,(e.mode&1)!==0)}m&&(o.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[Ln]=o,o.stateNode=l}return zt(o),null;case 13:if(Ke(tt),l=o.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Je&&Qt!==null&&(o.mode&1)!==0&&(o.flags&128)===0)vp(),Br(),o.flags|=98560,m=!1;else if(m=rs(o),l!==null&&l.dehydrated!==null){if(e===null){if(!m)throw Error(r(318));if(m=o.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(r(317));m[Ln]=o}else Br(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;zt(o),m=!1}else Sn!==null&&(Ic(Sn),Sn=null),m=!0;if(!m)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=i,o):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(o.child.flags|=8192,(o.mode&1)!==0&&(e===null||(tt.current&1)!==0?mt===0&&(mt=3):Vc())),o.updateQueue!==null&&(o.flags|=4),zt(o),null);case 4:return Gr(),Nc(e,o),e===null&&Oi(o.stateNode.containerInfo),zt(o),null;case 10:return oc(o.type._context),zt(o),null;case 17:return Dt(o.type)&&Za(),zt(o),null;case 19:if(Ke(tt),m=o.memoizedState,m===null)return zt(o),null;if(l=(o.flags&128)!==0,x=m.rendering,x===null)if(l)Hi(m,!1);else{if(mt!==0||e!==null&&(e.flags&128)!==0)for(e=o.child;e!==null;){if(x=ds(e),x!==null){for(o.flags|=128,Hi(m,!1),l=x.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),o.subtreeFlags=0,l=i,i=o.child;i!==null;)m=i,e=l,m.flags&=14680066,x=m.alternate,x===null?(m.childLanes=0,m.lanes=e,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=x.childLanes,m.lanes=x.lanes,m.child=x.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=x.memoizedProps,m.memoizedState=x.memoizedState,m.updateQueue=x.updateQueue,m.type=x.type,e=x.dependencies,m.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ve(tt,tt.current&1|2),o.child}e=e.sibling}m.tail!==null&&Xe()>Yr&&(o.flags|=128,l=!0,Hi(m,!1),o.lanes=4194304)}else{if(!l)if(e=ds(x),e!==null){if(o.flags|=128,l=!0,i=e.updateQueue,i!==null&&(o.updateQueue=i,o.flags|=4),Hi(m,!0),m.tail===null&&m.tailMode==="hidden"&&!x.alternate&&!Je)return zt(o),null}else 2*Xe()-m.renderingStartTime>Yr&&i!==1073741824&&(o.flags|=128,l=!0,Hi(m,!1),o.lanes=4194304);m.isBackwards?(x.sibling=o.child,o.child=x):(i=m.last,i!==null?i.sibling=x:o.child=x,m.last=x)}return m.tail!==null?(o=m.tail,m.rendering=o,m.tail=o.sibling,m.renderingStartTime=Xe(),o.sibling=null,i=tt.current,Ve(tt,l?i&1|2:i&1),o):(zt(o),null);case 22:case 23:return Uc(),l=o.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(o.flags|=8192),l&&(o.mode&1)!==0?(Xt&1073741824)!==0&&(zt(o),o.subtreeFlags&6&&(o.flags|=8192)):zt(o),null;case 24:return null;case 25:return null}throw Error(r(156,o.tag))}function Ky(e,o){switch(Xl(o),o.tag){case 1:return Dt(o.type)&&Za(),e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 3:return Gr(),Ke(Ft),Ke(Ct),dc(),e=o.flags,(e&65536)!==0&&(e&128)===0?(o.flags=e&-65537|128,o):null;case 5:return lc(o),null;case 13:if(Ke(tt),e=o.memoizedState,e!==null&&e.dehydrated!==null){if(o.alternate===null)throw Error(r(340));Br()}return e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 19:return Ke(tt),null;case 4:return Gr(),null;case 10:return oc(o.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var bs=!1,At=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,te=null;function Wr(e,o){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){rt(e,o,l)}else i.current=null}function jc(e,o,i){try{i()}catch(l){rt(e,o,l)}}var xm=!1;function Qy(e,o){if(Ul=Ma,e=Qu(),Ol(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{i.nodeType,m.nodeType}catch{i=null;break e}var x=0,w=-1,A=-1,L=0,q=0,H=e,V=null;t:for(;;){for(var Z;H!==i||d!==0&&H.nodeType!==3||(w=x+d),H!==m||l!==0&&H.nodeType!==3||(A=x+l),H.nodeType===3&&(x+=H.nodeValue.length),(Z=H.firstChild)!==null;)V=H,H=Z;for(;;){if(H===e)break t;if(V===i&&++L===d&&(w=x),V===m&&++q===l&&(A=x),(Z=H.nextSibling)!==null)break;H=V,V=H.parentNode}H=Z}i=w===-1||A===-1?null:{start:w,end:A}}else i=null}i=i||{start:0,end:0}}else i=null;for(Vl={focusedElem:e,selectionRange:i},Ma=!1,te=o;te!==null;)if(o=te,e=o.child,(o.subtreeFlags&1028)!==0&&e!==null)e.return=o,te=e;else for(;te!==null;){o=te;try{var oe=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var re=oe.memoizedProps,ct=oe.memoizedState,P=o.stateNode,j=P.getSnapshotBeforeUpdate(o.elementType===o.type?re:Cn(o.type,re),ct);P.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var O=o.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(K){rt(o,o.return,K)}if(e=o.sibling,e!==null){e.return=o.return,te=e;break}te=o.return}return oe=xm,xm=!1,oe}function Wi(e,o,i){var l=o.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&e)===e){var m=d.destroy;d.destroy=void 0,m!==void 0&&jc(o,i,m)}d=d.next}while(d!==l)}}function vs(e,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==o)}}function $c(e){var o=e.ref;if(o!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof o=="function"?o(e):o.current=e}}function bm(e){var o=e.alternate;o!==null&&(e.alternate=null,bm(o)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(o=e.stateNode,o!==null&&(delete o[Ln],delete o[Ri],delete o[Wl],delete o[Py],delete o[Ty])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vm(e){return e.tag===5||e.tag===3||e.tag===4}function wm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pc(e,o,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,o?i.nodeType===8?i.parentNode.insertBefore(e,o):i.insertBefore(e,o):(i.nodeType===8?(o=i.parentNode,o.insertBefore(e,i)):(o=i,o.appendChild(e)),i=i._reactRootContainer,i!=null||o.onclick!==null||(o.onclick=Xa));else if(l!==4&&(e=e.child,e!==null))for(Pc(e,o,i),e=e.sibling;e!==null;)Pc(e,o,i),e=e.sibling}function Tc(e,o,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,o?i.insertBefore(e,o):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Tc(e,o,i),e=e.sibling;e!==null;)Tc(e,o,i),e=e.sibling}var vt=null,En=!1;function jo(e,o,i){for(i=i.child;i!==null;)_m(e,o,i),i=i.sibling}function _m(e,o,i){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(br,i)}catch{}switch(i.tag){case 5:At||Wr(i,o);case 6:var l=vt,d=En;vt=null,jo(e,o,i),vt=l,En=d,vt!==null&&(En?(e=vt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):vt.removeChild(i.stateNode));break;case 18:vt!==null&&(En?(e=vt,i=i.stateNode,e.nodeType===8?Hl(e.parentNode,i):e.nodeType===1&&Hl(e,i),Ci(e)):Hl(vt,i.stateNode));break;case 4:l=vt,d=En,vt=i.stateNode.containerInfo,En=!0,jo(e,o,i),vt=l,En=d;break;case 0:case 11:case 14:case 15:if(!At&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var m=d,x=m.destroy;m=m.tag,x!==void 0&&((m&2)!==0||(m&4)!==0)&&jc(i,o,x),d=d.next}while(d!==l)}jo(e,o,i);break;case 1:if(!At&&(Wr(i,o),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(w){rt(i,o,w)}jo(e,o,i);break;case 21:jo(e,o,i);break;case 22:i.mode&1?(At=(l=At)||i.memoizedState!==null,jo(e,o,i),At=l):jo(e,o,i);break;default:jo(e,o,i)}}function km(e){var o=e.updateQueue;if(o!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Yy),o.forEach(function(l){var d=ix.bind(null,e,l);i.has(l)||(i.add(l),l.then(d,d))})}}function zn(e,o){var i=o.deletions;if(i!==null)for(var l=0;l<i.length;l++){var d=i[l];try{var m=e,x=o,w=x;e:for(;w!==null;){switch(w.tag){case 5:vt=w.stateNode,En=!1;break e;case 3:vt=w.stateNode.containerInfo,En=!0;break e;case 4:vt=w.stateNode.containerInfo,En=!0;break e}w=w.return}if(vt===null)throw Error(r(160));_m(m,x,d),vt=null,En=!1;var A=d.alternate;A!==null&&(A.return=null),d.return=null}catch(L){rt(d,o,L)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Sm(o,e),o=o.sibling}function Sm(e,o){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zn(o,e),Dn(e),l&4){try{Wi(3,e,e.return),vs(3,e)}catch(re){rt(e,e.return,re)}try{Wi(5,e,e.return)}catch(re){rt(e,e.return,re)}}break;case 1:zn(o,e),Dn(e),l&512&&i!==null&&Wr(i,i.return);break;case 5:if(zn(o,e),Dn(e),l&512&&i!==null&&Wr(i,i.return),e.flags&32){var d=e.stateNode;try{bn(d,"")}catch(re){rt(e,e.return,re)}}if(l&4&&(d=e.stateNode,d!=null)){var m=e.memoizedProps,x=i!==null?i.memoizedProps:m,w=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{w==="input"&&m.type==="radio"&&m.name!=null&&hn(d,m),Fe(w,x);var L=Fe(w,m);for(x=0;x<A.length;x+=2){var q=A[x],H=A[x+1];q==="style"?ke(d,H):q==="dangerouslySetInnerHTML"?Gt(d,H):q==="children"?bn(d,H):M(d,q,H,L)}switch(w){case"input":yn(d,m);break;case"textarea":Pn(d,m);break;case"select":var V=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Z=m.value;Z!=null?nn(d,!!m.multiple,Z,!1):V!==!!m.multiple&&(m.defaultValue!=null?nn(d,!!m.multiple,m.defaultValue,!0):nn(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ri]=m}catch(re){rt(e,e.return,re)}}break;case 6:if(zn(o,e),Dn(e),l&4){if(e.stateNode===null)throw Error(r(162));d=e.stateNode,m=e.memoizedProps;try{d.nodeValue=m}catch(re){rt(e,e.return,re)}}break;case 3:if(zn(o,e),Dn(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Ci(o.containerInfo)}catch(re){rt(e,e.return,re)}break;case 4:zn(o,e),Dn(e);break;case 13:zn(o,e),Dn(e),d=e.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Rc=Xe())),l&4&&km(e);break;case 22:if(q=i!==null&&i.memoizedState!==null,e.mode&1?(At=(L=At)||q,zn(o,e),At=L):zn(o,e),Dn(e),l&8192){if(L=e.memoizedState!==null,(e.stateNode.isHidden=L)&&!q&&(e.mode&1)!==0)for(te=e,q=e.child;q!==null;){for(H=te=q;te!==null;){switch(V=te,Z=V.child,V.tag){case 0:case 11:case 14:case 15:Wi(4,V,V.return);break;case 1:Wr(V,V.return);var oe=V.stateNode;if(typeof oe.componentWillUnmount=="function"){l=V,i=V.return;try{o=l,oe.props=o.memoizedProps,oe.state=o.memoizedState,oe.componentWillUnmount()}catch(re){rt(l,i,re)}}break;case 5:Wr(V,V.return);break;case 22:if(V.memoizedState!==null){zm(H);continue}}Z!==null?(Z.return=V,te=Z):zm(H)}q=q.sibling}e:for(q=null,H=e;;){if(H.tag===5){if(q===null){q=H;try{d=H.stateNode,L?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(w=H.stateNode,A=H.memoizedProps.style,x=A!=null&&A.hasOwnProperty("display")?A.display:null,w.style.display=xe("display",x))}catch(re){rt(e,e.return,re)}}}else if(H.tag===6){if(q===null)try{H.stateNode.nodeValue=L?"":H.memoizedProps}catch(re){rt(e,e.return,re)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===e)break e;for(;H.sibling===null;){if(H.return===null||H.return===e)break e;q===H&&(q=null),H=H.return}q===H&&(q=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:zn(o,e),Dn(e),l&4&&km(e);break;case 21:break;default:zn(o,e),Dn(e)}}function Dn(e){var o=e.flags;if(o&2){try{e:{for(var i=e.return;i!==null;){if(vm(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(bn(d,""),l.flags&=-33);var m=wm(e);Tc(e,m,d);break;case 3:case 4:var x=l.stateNode.containerInfo,w=wm(e);Pc(e,w,x);break;default:throw Error(r(161))}}catch(A){rt(e,e.return,A)}e.flags&=-3}o&4096&&(e.flags&=-4097)}function Xy(e,o,i){te=e,Cm(e)}function Cm(e,o,i){for(var l=(e.mode&1)!==0;te!==null;){var d=te,m=d.child;if(d.tag===22&&l){var x=d.memoizedState!==null||bs;if(!x){var w=d.alternate,A=w!==null&&w.memoizedState!==null||At;w=bs;var L=At;if(bs=x,(At=A)&&!L)for(te=d;te!==null;)x=te,A=x.child,x.tag===22&&x.memoizedState!==null?Am(d):A!==null?(A.return=x,te=A):Am(d);for(;m!==null;)te=m,Cm(m),m=m.sibling;te=d,bs=w,At=L}Em(e)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,te=m):Em(e)}}function Em(e){for(;te!==null;){var o=te;if((o.flags&8772)!==0){var i=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:At||vs(5,o);break;case 1:var l=o.stateNode;if(o.flags&4&&!At)if(i===null)l.componentDidMount();else{var d=o.elementType===o.type?i.memoizedProps:Cn(o.type,i.memoizedProps);l.componentDidUpdate(d,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=o.updateQueue;m!==null&&zp(o,m,l);break;case 3:var x=o.updateQueue;if(x!==null){if(i=null,o.child!==null)switch(o.child.tag){case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}zp(o,x,i)}break;case 5:var w=o.stateNode;if(i===null&&o.flags&4){i=w;var A=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&i.focus();break;case"img":A.src&&(i.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var L=o.alternate;if(L!==null){var q=L.memoizedState;if(q!==null){var H=q.dehydrated;H!==null&&Ci(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}At||o.flags&512&&$c(o)}catch(V){rt(o,o.return,V)}}if(o===e){te=null;break}if(i=o.sibling,i!==null){i.return=o.return,te=i;break}te=o.return}}function zm(e){for(;te!==null;){var o=te;if(o===e){te=null;break}var i=o.sibling;if(i!==null){i.return=o.return,te=i;break}te=o.return}}function Am(e){for(;te!==null;){var o=te;try{switch(o.tag){case 0:case 11:case 15:var i=o.return;try{vs(4,o)}catch(A){rt(o,i,A)}break;case 1:var l=o.stateNode;if(typeof l.componentDidMount=="function"){var d=o.return;try{l.componentDidMount()}catch(A){rt(o,d,A)}}var m=o.return;try{$c(o)}catch(A){rt(o,m,A)}break;case 5:var x=o.return;try{$c(o)}catch(A){rt(o,x,A)}}}catch(A){rt(o,o.return,A)}if(o===e){te=null;break}var w=o.sibling;if(w!==null){w.return=o.return,te=w;break}te=o.return}}var Jy=Math.ceil,ws=D.ReactCurrentDispatcher,Oc=D.ReactCurrentOwner,un=D.ReactCurrentBatchConfig,Te=0,ht=null,ut=null,wt=0,Xt=0,Kr=Co(0),mt=0,Ki=null,nr=0,_s=0,Lc=0,Yi=null,It=null,Rc=0,Yr=1/0,ro=null,ks=!1,Fc=null,$o=null,Ss=!1,Po=null,Cs=0,Qi=0,Dc=null,Es=-1,zs=0;function Ot(){return(Te&6)!==0?Xe():Es!==-1?Es:Es=Xe()}function To(e){return(e.mode&1)===0?1:(Te&2)!==0&&wt!==0?wt&-wt:Ly.transition!==null?(zs===0&&(zs=Sr()),zs):(e=Oe,e!==0||(e=window.event,e=e===void 0?16:ju(e.type)),e)}function An(e,o,i,l){if(50<Qi)throw Qi=0,Dc=null,Error(r(185));bo(e,i,l),((Te&2)===0||e!==ht)&&(e===ht&&((Te&2)===0&&(_s|=i),mt===4&&Oo(e,wt)),Bt(e,l),i===1&&Te===0&&(o.mode&1)===0&&(Yr=Xe()+500,ts&&zo()))}function Bt(e,o){var i=e.callbackNode;kr(e,o);var l=_r(e,e===ht?wt:0);if(l===0)i!==null&&xo(i),e.callbackNode=null,e.callbackPriority=0;else if(o=l&-l,e.callbackPriority!==o){if(i!=null&&xo(i),o===1)e.tag===0?Oy(jm.bind(null,e)):gp(jm.bind(null,e)),jy(function(){(Te&6)===0&&zo()}),i=null;else{switch(ki(l)){case 1:i=xr;break;case 4:i=Qn;break;case 16:i=et;break;case 536870912:i=ze;break;default:i=et}i=Dm(i,Nm.bind(null,e))}e.callbackPriority=o,e.callbackNode=i}}function Nm(e,o){if(Es=-1,zs=0,(Te&6)!==0)throw Error(r(327));var i=e.callbackNode;if(Qr()&&e.callbackNode!==i)return null;var l=_r(e,e===ht?wt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||o)o=As(e,l);else{o=l;var d=Te;Te|=2;var m=Pm();(ht!==e||wt!==o)&&(ro=null,Yr=Xe()+500,rr(e,o));do try{tx();break}catch(w){$m(e,w)}while(!0);nc(),ws.current=m,Te=d,ut!==null?o=0:(ht=null,wt=0,o=mt)}if(o!==0){if(o===2&&(d=_i(e),d!==0&&(l=d,o=Mc(e,d))),o===1)throw i=Ki,rr(e,0),Oo(e,l),Bt(e,Xe()),i;if(o===6)Oo(e,l);else{if(d=e.current.alternate,(l&30)===0&&!Zy(d)&&(o=As(e,l),o===2&&(m=_i(e),m!==0&&(l=m,o=Mc(e,m))),o===1))throw i=Ki,rr(e,0),Oo(e,l),Bt(e,Xe()),i;switch(e.finishedWork=d,e.finishedLanes=l,o){case 0:case 1:throw Error(r(345));case 2:ir(e,It,ro);break;case 3:if(Oo(e,l),(l&130023424)===l&&(o=Rc+500-Xe(),10<o)){if(_r(e,0)!==0)break;if(d=e.suspendedLanes,(d&l)!==l){Ot(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=Gl(ir.bind(null,e,It,ro),o);break}ir(e,It,ro);break;case 4:if(Oo(e,l),(l&4194240)===l)break;for(o=e.eventTimes,d=-1;0<l;){var x=31-Ht(l);m=1<<x,x=o[x],x>d&&(d=x),l&=~m}if(l=d,l=Xe()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Jy(l/1960))-l,10<l){e.timeoutHandle=Gl(ir.bind(null,e,It,ro),l);break}ir(e,It,ro);break;case 5:ir(e,It,ro);break;default:throw Error(r(329))}}}return Bt(e,Xe()),e.callbackNode===i?Nm.bind(null,e):null}function Mc(e,o){var i=Yi;return e.current.memoizedState.isDehydrated&&(rr(e,o).flags|=256),e=As(e,o),e!==2&&(o=It,It=i,o!==null&&Ic(o)),e}function Ic(e){It===null?It=e:It.push.apply(It,e)}function Zy(e){for(var o=e;;){if(o.flags&16384){var i=o.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var d=i[l],m=d.getSnapshot;d=d.value;try{if(!kn(m(),d))return!1}catch{return!1}}}if(i=o.child,o.subtreeFlags&16384&&i!==null)i.return=o,o=i;else{if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Oo(e,o){for(o&=~Lc,o&=~_s,e.suspendedLanes|=o,e.pingedLanes&=~o,e=e.expirationTimes;0<o;){var i=31-Ht(o),l=1<<i;e[i]=-1,o&=~l}}function jm(e){if((Te&6)!==0)throw Error(r(327));Qr();var o=_r(e,0);if((o&1)===0)return Bt(e,Xe()),null;var i=As(e,o);if(e.tag!==0&&i===2){var l=_i(e);l!==0&&(o=l,i=Mc(e,l))}if(i===1)throw i=Ki,rr(e,0),Oo(e,o),Bt(e,Xe()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=o,ir(e,It,ro),Bt(e,Xe()),null}function Bc(e,o){var i=Te;Te|=1;try{return e(o)}finally{Te=i,Te===0&&(Yr=Xe()+500,ts&&zo())}}function or(e){Po!==null&&Po.tag===0&&(Te&6)===0&&Qr();var o=Te;Te|=1;var i=un.transition,l=Oe;try{if(un.transition=null,Oe=1,e)return e()}finally{Oe=l,un.transition=i,Te=o,(Te&6)===0&&zo()}}function Uc(){Xt=Kr.current,Ke(Kr)}function rr(e,o){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Ny(i)),ut!==null)for(i=ut.return;i!==null;){var l=i;switch(Xl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Za();break;case 3:Gr(),Ke(Ft),Ke(Ct),dc();break;case 5:lc(l);break;case 4:Gr();break;case 13:Ke(tt);break;case 19:Ke(tt);break;case 10:oc(l.type._context);break;case 22:case 23:Uc()}i=i.return}if(ht=e,ut=e=Lo(e.current,null),wt=Xt=o,mt=0,Ki=null,Lc=_s=nr=0,It=Yi=null,Zo!==null){for(o=0;o<Zo.length;o++)if(i=Zo[o],l=i.interleaved,l!==null){i.interleaved=null;var d=l.next,m=i.pending;if(m!==null){var x=m.next;m.next=d,l.next=x}i.pending=l}Zo=null}return e}function $m(e,o){do{var i=ut;try{if(nc(),us.current=gs,ps){for(var l=nt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}ps=!1}if(tr=0,gt=pt=nt=null,Ui=!1,Vi=0,Oc.current=null,i===null||i.return===null){mt=1,Ki=o,ut=null;break}e:{var m=e,x=i.return,w=i,A=o;if(o=wt,w.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var L=A,q=w,H=q.tag;if((q.mode&1)===0&&(H===0||H===11||H===15)){var V=q.alternate;V?(q.updateQueue=V.updateQueue,q.memoizedState=V.memoizedState,q.lanes=V.lanes):(q.updateQueue=null,q.memoizedState=null)}var Z=nm(x);if(Z!==null){Z.flags&=-257,om(Z,x,w,m,o),Z.mode&1&&tm(m,L,o),o=Z,A=L;var oe=o.updateQueue;if(oe===null){var re=new Set;re.add(A),o.updateQueue=re}else oe.add(A);break e}else{if((o&1)===0){tm(m,L,o),Vc();break e}A=Error(r(426))}}else if(Je&&w.mode&1){var ct=nm(x);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),om(ct,x,w,m,o),ec(Hr(A,w));break e}}m=A=Hr(A,w),mt!==4&&(mt=2),Yi===null?Yi=[m]:Yi.push(m),m=x;do{switch(m.tag){case 3:m.flags|=65536,o&=-o,m.lanes|=o;var P=Zp(m,A,o);Ep(m,P);break e;case 1:w=A;var j=m.type,O=m.stateNode;if((m.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&($o===null||!$o.has(O)))){m.flags|=65536,o&=-o,m.lanes|=o;var K=em(m,w,o);Ep(m,K);break e}}m=m.return}while(m!==null)}Om(i)}catch(se){o=se,ut===i&&i!==null&&(ut=i=i.return);continue}break}while(!0)}function Pm(){var e=ws.current;return ws.current=gs,e===null?gs:e}function Vc(){(mt===0||mt===3||mt===2)&&(mt=4),ht===null||(nr&268435455)===0&&(_s&268435455)===0||Oo(ht,wt)}function As(e,o){var i=Te;Te|=2;var l=Pm();(ht!==e||wt!==o)&&(ro=null,rr(e,o));do try{ex();break}catch(d){$m(e,d)}while(!0);if(nc(),Te=i,ws.current=l,ut!==null)throw Error(r(261));return ht=null,wt=0,mt}function ex(){for(;ut!==null;)Tm(ut)}function tx(){for(;ut!==null&&!xi();)Tm(ut)}function Tm(e){var o=Fm(e.alternate,e,Xt);e.memoizedProps=e.pendingProps,o===null?Om(e):ut=o,Oc.current=null}function Om(e){var o=e;do{var i=o.alternate;if(e=o.return,(o.flags&32768)===0){if(i=Wy(i,o,Xt),i!==null){ut=i;return}}else{if(i=Ky(i,o),i!==null){i.flags&=32767,ut=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{mt=6,ut=null;return}}if(o=o.sibling,o!==null){ut=o;return}ut=o=e}while(o!==null);mt===0&&(mt=5)}function ir(e,o,i){var l=Oe,d=un.transition;try{un.transition=null,Oe=1,nx(e,o,i,l)}finally{un.transition=d,Oe=l}return null}function nx(e,o,i,l){do Qr();while(Po!==null);if((Te&6)!==0)throw Error(r(327));i=e.finishedWork;var d=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var m=i.lanes|i.childLanes;if(Da(e,m),e===ht&&(ut=ht=null,wt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Ss||(Ss=!0,Dm(et,function(){return Qr(),null})),m=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||m){m=un.transition,un.transition=null;var x=Oe;Oe=1;var w=Te;Te|=4,Oc.current=null,Qy(e,i),Sm(i,e),_y(Vl),Ma=!!Ul,Vl=Ul=null,e.current=i,Xy(i),wn(),Te=w,Oe=x,un.transition=m}else e.current=i;if(Ss&&(Ss=!1,Po=e,Cs=d),m=e.pendingLanes,m===0&&($o=null),wi(i.stateNode),Bt(e,Xe()),o!==null)for(l=e.onRecoverableError,i=0;i<o.length;i++)d=o[i],l(d.value,{componentStack:d.stack,digest:d.digest});if(ks)throw ks=!1,e=Fc,Fc=null,e;return(Cs&1)!==0&&e.tag!==0&&Qr(),m=e.pendingLanes,(m&1)!==0?e===Dc?Qi++:(Qi=0,Dc=e):Qi=0,zo(),null}function Qr(){if(Po!==null){var e=ki(Cs),o=un.transition,i=Oe;try{if(un.transition=null,Oe=16>e?16:e,Po===null)var l=!1;else{if(e=Po,Po=null,Cs=0,(Te&6)!==0)throw Error(r(331));var d=Te;for(Te|=4,te=e.current;te!==null;){var m=te,x=m.child;if((te.flags&16)!==0){var w=m.deletions;if(w!==null){for(var A=0;A<w.length;A++){var L=w[A];for(te=L;te!==null;){var q=te;switch(q.tag){case 0:case 11:case 15:Wi(8,q,m)}var H=q.child;if(H!==null)H.return=q,te=H;else for(;te!==null;){q=te;var V=q.sibling,Z=q.return;if(bm(q),q===L){te=null;break}if(V!==null){V.return=Z,te=V;break}te=Z}}}var oe=m.alternate;if(oe!==null){var re=oe.child;if(re!==null){oe.child=null;do{var ct=re.sibling;re.sibling=null,re=ct}while(re!==null)}}te=m}}if((m.subtreeFlags&2064)!==0&&x!==null)x.return=m,te=x;else e:for(;te!==null;){if(m=te,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Wi(9,m,m.return)}var P=m.sibling;if(P!==null){P.return=m.return,te=P;break e}te=m.return}}var j=e.current;for(te=j;te!==null;){x=te;var O=x.child;if((x.subtreeFlags&2064)!==0&&O!==null)O.return=x,te=O;else e:for(x=j;te!==null;){if(w=te,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:vs(9,w)}}catch(se){rt(w,w.return,se)}if(w===x){te=null;break e}var K=w.sibling;if(K!==null){K.return=w.return,te=K;break e}te=w.return}}if(Te=d,zo(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(br,e)}catch{}l=!0}return l}finally{Oe=i,un.transition=o}}return!1}function Lm(e,o,i){o=Hr(i,o),o=Zp(e,o,1),e=No(e,o,1),o=Ot(),e!==null&&(bo(e,1,o),Bt(e,o))}function rt(e,o,i){if(e.tag===3)Lm(e,e,i);else for(;o!==null;){if(o.tag===3){Lm(o,e,i);break}else if(o.tag===1){var l=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&($o===null||!$o.has(l))){e=Hr(i,e),e=em(o,e,1),o=No(o,e,1),e=Ot(),o!==null&&(bo(o,1,e),Bt(o,e));break}}o=o.return}}function ox(e,o,i){var l=e.pingCache;l!==null&&l.delete(o),o=Ot(),e.pingedLanes|=e.suspendedLanes&i,ht===e&&(wt&i)===i&&(mt===4||mt===3&&(wt&130023424)===wt&&500>Xe()-Rc?rr(e,0):Lc|=i),Bt(e,o)}function Rm(e,o){o===0&&((e.mode&1)===0?o=1:(o=wr,wr<<=1,(wr&130023424)===0&&(wr=4194304)));var i=Ot();e=to(e,o),e!==null&&(bo(e,o,i),Bt(e,i))}function rx(e){var o=e.memoizedState,i=0;o!==null&&(i=o.retryLane),Rm(e,i)}function ix(e,o){var i=0;switch(e.tag){case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(i=d.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(o),Rm(e,i)}var Fm;Fm=function(e,o,i){if(e!==null)if(e.memoizedProps!==o.pendingProps||Ft.current)Mt=!0;else{if((e.lanes&i)===0&&(o.flags&128)===0)return Mt=!1,Hy(e,o,i);Mt=(e.flags&131072)!==0}else Mt=!1,Je&&(o.flags&1048576)!==0&&hp(o,os,o.index);switch(o.lanes=0,o.tag){case 2:var l=o.type;xs(e,o),e=o.pendingProps;var d=Dr(o,Ct.current);qr(o,i),d=mc(null,o,l,e,d,i);var m=fc();return o.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Dt(l)?(m=!0,es(o)):m=!1,o.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ac(o),d.updater=hs,o.stateNode=d,d._reactInternals=o,vc(o,l,e,i),o=Sc(null,o,l,!0,m,i)):(o.tag=0,Je&&m&&Ql(o),Tt(null,o,d,i),o=o.child),o;case 16:l=o.elementType;e:{switch(xs(e,o),e=o.pendingProps,d=l._init,l=d(l._payload),o.type=l,d=o.tag=sx(l),e=Cn(l,e),d){case 0:o=kc(null,o,l,e,i);break e;case 1:o=cm(null,o,l,e,i);break e;case 11:o=rm(null,o,l,e,i);break e;case 14:o=im(null,o,l,Cn(l.type,e),i);break e}throw Error(r(306,l,""))}return o;case 0:return l=o.type,d=o.pendingProps,d=o.elementType===l?d:Cn(l,d),kc(e,o,l,d,i);case 1:return l=o.type,d=o.pendingProps,d=o.elementType===l?d:Cn(l,d),cm(e,o,l,d,i);case 3:e:{if(dm(o),e===null)throw Error(r(387));l=o.pendingProps,m=o.memoizedState,d=m.element,Cp(e,o),cs(o,l,null,i);var x=o.memoizedState;if(l=x.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},o.updateQueue.baseState=m,o.memoizedState=m,o.flags&256){d=Hr(Error(r(423)),o),o=um(e,o,l,i,d);break e}else if(l!==d){d=Hr(Error(r(424)),o),o=um(e,o,l,i,d);break e}else for(Qt=So(o.stateNode.containerInfo.firstChild),Yt=o,Je=!0,Sn=null,i=kp(o,null,l,i),o.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Br(),l===d){o=oo(e,o,i);break e}Tt(e,o,l,i)}o=o.child}return o;case 5:return Ap(o),e===null&&Zl(o),l=o.type,d=o.pendingProps,m=e!==null?e.memoizedProps:null,x=d.children,ql(l,d)?x=null:m!==null&&ql(l,m)&&(o.flags|=32),lm(e,o),Tt(e,o,x,i),o.child;case 6:return e===null&&Zl(o),null;case 13:return pm(e,o,i);case 4:return sc(o,o.stateNode.containerInfo),l=o.pendingProps,e===null?o.child=Ur(o,null,l,i):Tt(e,o,l,i),o.child;case 11:return l=o.type,d=o.pendingProps,d=o.elementType===l?d:Cn(l,d),rm(e,o,l,d,i);case 7:return Tt(e,o,o.pendingProps,i),o.child;case 8:return Tt(e,o,o.pendingProps.children,i),o.child;case 12:return Tt(e,o,o.pendingProps.children,i),o.child;case 10:e:{if(l=o.type._context,d=o.pendingProps,m=o.memoizedProps,x=d.value,Ve(as,l._currentValue),l._currentValue=x,m!==null)if(kn(m.value,x)){if(m.children===d.children&&!Ft.current){o=oo(e,o,i);break e}}else for(m=o.child,m!==null&&(m.return=o);m!==null;){var w=m.dependencies;if(w!==null){x=m.child;for(var A=w.firstContext;A!==null;){if(A.context===l){if(m.tag===1){A=no(-1,i&-i),A.tag=2;var L=m.updateQueue;if(L!==null){L=L.shared;var q=L.pending;q===null?A.next=A:(A.next=q.next,q.next=A),L.pending=A}}m.lanes|=i,A=m.alternate,A!==null&&(A.lanes|=i),rc(m.return,i,o),w.lanes|=i;break}A=A.next}}else if(m.tag===10)x=m.type===o.type?null:m.child;else if(m.tag===18){if(x=m.return,x===null)throw Error(r(341));x.lanes|=i,w=x.alternate,w!==null&&(w.lanes|=i),rc(x,i,o),x=m.sibling}else x=m.child;if(x!==null)x.return=m;else for(x=m;x!==null;){if(x===o){x=null;break}if(m=x.sibling,m!==null){m.return=x.return,x=m;break}x=x.return}m=x}Tt(e,o,d.children,i),o=o.child}return o;case 9:return d=o.type,l=o.pendingProps.children,qr(o,i),d=cn(d),l=l(d),o.flags|=1,Tt(e,o,l,i),o.child;case 14:return l=o.type,d=Cn(l,o.pendingProps),d=Cn(l.type,d),im(e,o,l,d,i);case 15:return am(e,o,o.type,o.pendingProps,i);case 17:return l=o.type,d=o.pendingProps,d=o.elementType===l?d:Cn(l,d),xs(e,o),o.tag=1,Dt(l)?(e=!0,es(o)):e=!1,qr(o,i),Xp(o,l,d),vc(o,l,d,i),Sc(null,o,l,!0,e,i);case 19:return fm(e,o,i);case 22:return sm(e,o,i)}throw Error(r(156,o.tag))};function Dm(e,o){return Fa(e,o)}function ax(e,o,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,o,i,l){return new ax(e,o,i,l)}function qc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sx(e){if(typeof e=="function")return qc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===G)return 11;if(e===Re)return 14}return 2}function Lo(e,o){var i=e.alternate;return i===null?(i=pn(e.tag,o,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=o,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,o=e.dependencies,i.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Ns(e,o,i,l,d,m){var x=2;if(l=e,typeof e=="function")qc(e)&&(x=1);else if(typeof e=="string")x=5;else e:switch(e){case W:return ar(i.children,d,m,o);case Y:x=8,d|=8;break;case ve:return e=pn(12,i,o,d|2),e.elementType=ve,e.lanes=m,e;case ue:return e=pn(13,i,o,d),e.elementType=ue,e.lanes=m,e;case je:return e=pn(19,i,o,d),e.elementType=je,e.lanes=m,e;case le:return js(i,d,m,o);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fe:x=10;break e;case De:x=9;break e;case G:x=11;break e;case Re:x=14;break e;case ge:x=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return o=pn(x,i,o,d),o.elementType=e,o.type=l,o.lanes=m,o}function ar(e,o,i,l){return e=pn(7,e,l,o),e.lanes=i,e}function js(e,o,i,l){return e=pn(22,e,l,o),e.elementType=le,e.lanes=i,e.stateNode={isHidden:!1},e}function Gc(e,o,i){return e=pn(6,e,null,o),e.lanes=i,e}function Hc(e,o,i){return o=pn(4,e.children!==null?e.children:[],e.key,o),o.lanes=i,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},o}function lx(e,o,i,l,d){this.tag=o,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cr(0),this.expirationTimes=Cr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cr(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Wc(e,o,i,l,d,m,x,w,A){return e=new lx(e,o,i,w,A),o===1?(o=1,m===!0&&(o|=8)):o=0,m=pn(3,null,null,o),e.current=m,m.stateNode=e,m.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ac(m),e}function cx(e,o,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:l==null?null:""+l,children:e,containerInfo:o,implementation:i}}function Mm(e){if(!e)return Eo;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(r(170));var o=e;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Dt(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Dt(i))return mp(e,i,o)}return o}function Im(e,o,i,l,d,m,x,w,A){return e=Wc(i,l,!0,e,d,m,x,w,A),e.context=Mm(null),i=e.current,l=Ot(),d=To(i),m=no(l,d),m.callback=o??null,No(i,m,d),e.current.lanes=d,bo(e,d,l),Bt(e,l),e}function $s(e,o,i,l){var d=o.current,m=Ot(),x=To(d);return i=Mm(i),o.context===null?o.context=i:o.pendingContext=i,o=no(m,x),o.payload={element:e},l=l===void 0?null:l,l!==null&&(o.callback=l),e=No(d,o,x),e!==null&&(An(e,d,x,m),ls(e,d,x)),x}function Ps(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bm(e,o){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<o?i:o}}function Kc(e,o){Bm(e,o),(e=e.alternate)&&Bm(e,o)}function dx(){return null}var Um=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}Ts.prototype.render=Yc.prototype.render=function(e){var o=this._internalRoot;if(o===null)throw Error(r(409));$s(e,o,null,null)},Ts.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var o=e.containerInfo;or(function(){$s(null,e,null,null)}),o[Xn]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var o=Ce();e={blockedOn:null,target:e,priority:o};for(var i=0;i<Wt.length&&o!==0&&o<Wt[i].priority;i++);Wt.splice(i,0,e),i===0&&vo(e)}};function Qc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function ux(e,o,i,l,d){if(d){if(typeof l=="function"){var m=l;l=function(){var L=Ps(x);m.call(L)}}var x=Im(o,l,e,0,null,!1,!1,"",Vm);return e._reactRootContainer=x,e[Xn]=x.current,Oi(e.nodeType===8?e.parentNode:e),or(),x}for(;d=e.lastChild;)e.removeChild(d);if(typeof l=="function"){var w=l;l=function(){var L=Ps(A);w.call(L)}}var A=Wc(e,0,!1,null,null,!1,!1,"",Vm);return e._reactRootContainer=A,e[Xn]=A.current,Oi(e.nodeType===8?e.parentNode:e),or(function(){$s(o,A,i,l)}),A}function Ls(e,o,i,l,d){var m=i._reactRootContainer;if(m){var x=m;if(typeof d=="function"){var w=d;d=function(){var A=Ps(x);w.call(A)}}$s(o,x,e,d)}else x=ux(i,o,e,d,l);return Ps(x)}Si=function(e){switch(e.tag){case 3:var o=e.stateNode;if(o.current.memoizedState.isDehydrated){var i=Wo(o.pendingLanes);i!==0&&(Er(o,i|1),Bt(o,Xe()),(Te&6)===0&&(Yr=Xe()+500,zo()))}break;case 13:or(function(){var l=to(e,1);if(l!==null){var d=Ot();An(l,e,1,d)}}),Kc(e,1)}},zr=function(e){if(e.tag===13){var o=to(e,134217728);if(o!==null){var i=Ot();An(o,e,134217728,i)}Kc(e,134217728)}},E=function(e){if(e.tag===13){var o=To(e),i=to(e,o);if(i!==null){var l=Ot();An(i,e,o,l)}Kc(e,o)}},Ce=function(){return Oe},$e=function(e,o){var i=Oe;try{return Oe=e,o()}finally{Oe=i}},ne=function(e,o,i){switch(o){case"input":if(yn(e,i),o=i.name,i.type==="radio"&&o!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<i.length;o++){var l=i[o];if(l!==e&&l.form===e.form){var d=Ja(l);if(!d)throw Error(r(90));en(l),yn(l,d)}}}break;case"textarea":Pn(e,i);break;case"select":o=i.value,o!=null&&nn(e,!!i.multiple,o,!1)}},Hn=Bc,Pa=or;var px={usingClientEntryPoint:!1,Events:[Fi,Rr,Ja,fi,$a,Bc]},Xi={findFiberByHostInstance:Yo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mx={bundleType:Xi.bundleType,version:Xi.version,rendererPackageName:Xi.rendererPackageName,rendererConfig:Xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ra(e),e===null?null:e.stateNode},findFiberByHostInstance:Xi.findFiberByHostInstance||dx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{br=Rs.inject(mx),rn=Rs}catch{}}return Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=px,Ut.createPortal=function(e,o){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qc(o))throw Error(r(200));return cx(e,o,null,i)},Ut.createRoot=function(e,o){if(!Qc(e))throw Error(r(299));var i=!1,l="",d=Um;return o!=null&&(o.unstable_strictMode===!0&&(i=!0),o.identifierPrefix!==void 0&&(l=o.identifierPrefix),o.onRecoverableError!==void 0&&(d=o.onRecoverableError)),o=Wc(e,1,!1,null,null,i,!1,l,d),e[Xn]=o.current,Oi(e.nodeType===8?e.parentNode:e),new Yc(o)},Ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var o=e._reactInternals;if(o===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=Ra(o),e=e===null?null:e.stateNode,e},Ut.flushSync=function(e){return or(e)},Ut.hydrate=function(e,o,i){if(!Os(o))throw Error(r(200));return Ls(null,e,o,!0,i)},Ut.hydrateRoot=function(e,o,i){if(!Qc(e))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,d=!1,m="",x=Um;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(m=i.identifierPrefix),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),o=Im(o,null,e,1,i??null,d,!1,m,x),e[Xn]=o.current,Oi(e),l)for(e=0;e<l.length;e++)i=l[e],d=i._getVersion,d=d(i._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[i,d]:o.mutableSourceEagerHydrationData.push(i,d);return new Ts(o)},Ut.render=function(e,o,i){if(!Os(o))throw Error(r(200));return Ls(null,e,o,!1,i)},Ut.unmountComponentAtNode=function(e){if(!Os(e))throw Error(r(40));return e._reactRootContainer?(or(function(){Ls(null,null,e,!1,function(){e._reactRootContainer=null,e[Xn]=null})}),!0):!1},Ut.unstable_batchedUpdates=Bc,Ut.unstable_renderSubtreeIntoContainer=function(e,o,i,l){if(!Os(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Ls(e,o,i,!1,l)},Ut.version="18.3.1-next-f1338f8080-20240426",Ut}var Xm;function wx(){if(Xm)return Zc.exports;Xm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Zc.exports=vx(),Zc.exports}var Jm;function _x(){if(Jm)return Fs;Jm=1;var n=wx();return Fs.createRoot=n.createRoot,Fs.hydrateRoot=n.hydrateRoot,Fs}var kx=_x();const Sx=Lg(kx),Zm=n=>{let t;const r=new Set,a=(h,y)=>{const b=typeof h=="function"?h(t):h;if(!Object.is(b,t)){const v=t;t=y??(typeof b!="object"||b===null)?b:Object.assign({},t,b),r.forEach(_=>_(t,v))}},c=()=>t,f={setState:a,getState:c,getInitialState:()=>g,subscribe:h=>(r.add(h),()=>r.delete(h))},g=t=n(a,c,f);return f},Cx=(n=>n?Zm(n):Zm),Ex=n=>n;function zx(n,t=Ex){const r=ia.useSyncExternalStore(n.subscribe,ia.useCallback(()=>t(n.getState()),[n,t]),ia.useCallback(()=>t(n.getInitialState()),[n,t]));return ia.useDebugValue(r),r}const ef=n=>{const t=Cx(n),r=a=>zx(t,a);return Object.assign(r,t),r},Vd=(n=>n?ef(n):ef),il=Vd(n=>({shop:"neurone-south-central-florida.myshopify.com",token:"",connected:!1,cdnImageMap:{},setShop:t=>n({shop:t,connected:!1}),setToken:t=>n({token:t,connected:!1}),setConnected:t=>n({connected:t}),setCdnImageMap:t=>n({cdnImageMap:t}),clear:()=>n({token:"",connected:!1,cdnImageMap:{}})}));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rg=(...n)=>n.filter((t,r,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=C.forwardRef(({color:n="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:c="",children:p,iconNode:u,...f},g)=>C.createElement("svg",{ref:g,...Nx,width:t,height:t,stroke:n,strokeWidth:a?Number(r)*24/Number(t):r,className:Rg("lucide",c),...f},[...u.map(([h,y])=>C.createElement(h,y)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=(n,t)=>{const r=C.forwardRef(({className:a,...c},p)=>C.createElement(jx,{ref:p,iconNode:t,className:Rg(`lucide-${Ax(n)}`,a),...c}));return r.displayName=`${n}`,r};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=me("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=me("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=me("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=me("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=me("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=me("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=me("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=me("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=me("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=me("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=me("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=me("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=me("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=me("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=me("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=me("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=me("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=me("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=me("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=me("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=me("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=me("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=me("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=me("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=me("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=me("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=me("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=me("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=me("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=me("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=me("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=me("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=me("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=me("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=me("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=me("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=me("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=me("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=me("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=me("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=me("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=me("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=me("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=me("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=me("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=me("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=me("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=me("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=me("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=me("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=me("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Hd=C.createContext({});function Wd(n){const t=C.useRef(null);return t.current===null&&(t.current=n()),t.current}const sl=C.createContext(null),Kd=C.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class Kx extends C.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=r.offsetHeight||0,a.width=r.offsetWidth||0,a.top=r.offsetTop,a.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Yx({children:n,isPresent:t}){const r=C.useId(),a=C.useRef(null),c=C.useRef({width:0,height:0,top:0,left:0}),{nonce:p}=C.useContext(Kd);return C.useInsertionEffect(()=>{const{width:u,height:f,top:g,left:h}=c.current;if(t||!a.current||!u||!f)return;a.current.dataset.motionPopId=r;const y=document.createElement("style");return p&&(y.nonce=p),document.head.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${f}px !important;
            top: ${g}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(y)}},[t]),s.jsx(Kx,{isPresent:t,childRef:a,sizeRef:c,children:C.cloneElement(n,{ref:a})})}const Qx=({children:n,initial:t,isPresent:r,onExitComplete:a,custom:c,presenceAffectsLayout:p,mode:u})=>{const f=Wd(Xx),g=C.useId(),h=C.useCallback(b=>{f.set(b,!0);for(const v of f.values())if(!v)return;a&&a()},[f,a]),y=C.useMemo(()=>({id:g,initial:t,isPresent:r,custom:c,onExitComplete:h,register:b=>(f.set(b,!1),()=>f.delete(b))}),p?[Math.random(),h]:[r,h]);return C.useMemo(()=>{f.forEach((b,v)=>f.set(v,!1))},[r]),C.useEffect(()=>{!r&&!f.size&&a&&a()},[r]),u==="popLayout"&&(n=s.jsx(Yx,{isPresent:r,children:n})),s.jsx(sl.Provider,{value:y,children:n})};function Xx(){return new Map}function Wg(n=!0){const t=C.useContext(sl);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:a,register:c}=t,p=C.useId();C.useEffect(()=>{n&&c(p)},[n]);const u=C.useCallback(()=>n&&a&&a(p),[p,a,n]);return!r&&a?[!1,u]:[!0]}const Ms=n=>n.key||"";function rf(n){const t=[];return C.Children.forEach(n,r=>{C.isValidElement(r)&&t.push(r)}),t}const Yd=typeof window<"u",Kg=Yd?C.useLayoutEffect:C.useEffect,Vt=({children:n,custom:t,initial:r=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:p="sync",propagate:u=!1})=>{const[f,g]=Wg(u),h=C.useMemo(()=>rf(n),[n]),y=u&&!f?[]:h.map(Ms),b=C.useRef(!0),v=C.useRef(h),_=Wd(()=>new Map),[k,z]=C.useState(h),[$,S]=C.useState(h);Kg(()=>{b.current=!1,v.current=h;for(let D=0;D<$.length;D++){const F=Ms($[D]);y.includes(F)?_.delete(F):_.get(F)!==!0&&_.set(F,!1)}},[$,y.length,y.join("-")]);const T=[];if(h!==k){let D=[...h];for(let F=0;F<$.length;F++){const X=$[F],W=Ms(X);y.includes(W)||(D.splice(F,0,X),T.push(X))}p==="wait"&&T.length&&(D=T),S(rf(D)),z(h);return}const{forceRender:M}=C.useContext(Hd);return s.jsx(s.Fragment,{children:$.map(D=>{const F=Ms(D),X=u&&!f?!1:h===$||y.includes(F),W=()=>{if(_.has(F))_.set(F,!0);else return;let Y=!0;_.forEach(ve=>{ve||(Y=!1)}),Y&&(M==null||M(),S(v.current),u&&(g==null||g()),a&&a())};return s.jsx(Qx,{isPresent:X,initial:!b.current||r?void 0:!1,custom:X?void 0:t,presenceAffectsLayout:c,mode:p,onExitComplete:X?void 0:W,children:D},F)})})},Jt=n=>n;let Yg=Jt;const Jx={useManualTiming:!1};function Zx(n){let t=new Set,r=new Set,a=!1,c=!1;const p=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function f(h){p.has(h)&&(g.schedule(h),n()),h(u)}const g={schedule:(h,y=!1,b=!1)=>{const _=b&&a?t:r;return y&&p.add(h),_.has(h)||_.add(h),h},cancel:h=>{r.delete(h),p.delete(h)},process:h=>{if(u=h,a){c=!0;return}a=!0,[t,r]=[r,t],t.forEach(f),t.clear(),a=!1,c&&(c=!1,g.process(h))}};return g}const Is=["read","resolveKeyframes","update","preRender","render","postRender"],eb=40;function Qg(n,t){let r=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},p=()=>r=!0,u=Is.reduce((S,T)=>(S[T]=Zx(p),S),{}),{read:f,resolveKeyframes:g,update:h,preRender:y,render:b,postRender:v}=u,_=()=>{const S=performance.now();r=!1,c.delta=a?1e3/60:Math.max(Math.min(S-c.timestamp,eb),1),c.timestamp=S,c.isProcessing=!0,f.process(c),g.process(c),h.process(c),y.process(c),b.process(c),v.process(c),c.isProcessing=!1,r&&t&&(a=!1,n(_))},k=()=>{r=!0,a=!0,c.isProcessing||n(_)};return{schedule:Is.reduce((S,T)=>{const M=u[T];return S[T]=(D,F=!1,X=!1)=>(r||k(),M.schedule(D,F,X)),S},{}),cancel:S=>{for(let T=0;T<Is.length;T++)u[Is[T]].cancel(S)},state:c,steps:u}}const{schedule:Qe,cancel:Uo,state:_t,steps:od}=Qg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Jt,!0),Xg=C.createContext({strict:!1}),af={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ai={};for(const n in af)ai[n]={isEnabled:t=>af[n].some(r=>!!t[r])};function tb(n){for(const t in n)ai[t]={...ai[t],...n[t]}}const nb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Qs(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||nb.has(n)}let Jg=n=>!Qs(n);function ob(n){n&&(Jg=t=>t.startsWith("on")?!Qs(t):n(t))}try{ob(require("@emotion/is-prop-valid").default)}catch{}function rb(n,t,r){const a={};for(const c in n)c==="values"&&typeof n.values=="object"||(Jg(c)||r===!0&&Qs(c)||!t&&!Qs(c)||n.draggable&&c.startsWith("onDrag"))&&(a[c]=n[c]);return a}function ib(n){if(typeof Proxy>"u")return n;const t=new Map,r=(...a)=>n(...a);return new Proxy(r,{get:(a,c)=>c==="create"?n:(t.has(c)||t.set(c,n(c)),t.get(c))})}const ll=C.createContext({});function ba(n){return typeof n=="string"||Array.isArray(n)}function cl(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Qd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Xd=["initial",...Qd];function dl(n){return cl(n.animate)||Xd.some(t=>ba(n[t]))}function Zg(n){return!!(dl(n)||n.variants)}function ab(n,t){if(dl(n)){const{initial:r,animate:a}=n;return{initial:r===!1||ba(r)?r:void 0,animate:ba(a)?a:void 0}}return n.inherit!==!1?t:{}}function sb(n){const{initial:t,animate:r}=ab(n,C.useContext(ll));return C.useMemo(()=>({initial:t,animate:r}),[sf(t),sf(r)])}function sf(n){return Array.isArray(n)?n.join(" "):n}const lb=Symbol.for("motionComponentSymbol");function Jr(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function cb(n,t,r){return C.useCallback(a=>{a&&n.onMount&&n.onMount(a),t&&(a?t.mount(a):t.unmount()),r&&(typeof r=="function"?r(a):Jr(r)&&(r.current=a))},[t])}const Jd=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),db="framerAppearId",eh="data-"+Jd(db),{schedule:Zd}=Qg(queueMicrotask,!1),th=C.createContext({});function ub(n,t,r,a,c){var p,u;const{visualElement:f}=C.useContext(ll),g=C.useContext(Xg),h=C.useContext(sl),y=C.useContext(Kd).reducedMotion,b=C.useRef(null);a=a||g.renderer,!b.current&&a&&(b.current=a(n,{visualState:t,parent:f,props:r,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:y}));const v=b.current,_=C.useContext(th);v&&!v.projection&&c&&(v.type==="html"||v.type==="svg")&&pb(b.current,r,c,_);const k=C.useRef(!1);C.useInsertionEffect(()=>{v&&k.current&&v.update(r,h)});const z=r[eh],$=C.useRef(!!z&&!(!((p=window.MotionHandoffIsComplete)===null||p===void 0)&&p.call(window,z))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,z)));return Kg(()=>{v&&(k.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),Zd.render(v.render),$.current&&v.animationState&&v.animationState.animateChanges())}),C.useEffect(()=>{v&&(!$.current&&v.animationState&&v.animationState.animateChanges(),$.current&&(queueMicrotask(()=>{var S;(S=window.MotionHandoffMarkAsComplete)===null||S===void 0||S.call(window,z)}),$.current=!1))}),v}function pb(n,t,r,a){const{layoutId:c,layout:p,drag:u,dragConstraints:f,layoutScroll:g,layoutRoot:h}=t;n.projection=new r(n.latestValues,t["data-framer-portal-id"]?void 0:nh(n.parent)),n.projection.setOptions({layoutId:c,layout:p,alwaysMeasureLayout:!!u||f&&Jr(f),visualElement:n,animationType:typeof p=="string"?p:"both",initialPromotionConfig:a,layoutScroll:g,layoutRoot:h})}function nh(n){if(n)return n.options.allowProjection!==!1?n.projection:nh(n.parent)}function mb({preloadedFeatures:n,createVisualElement:t,useRender:r,useVisualState:a,Component:c}){var p,u;n&&tb(n);function f(h,y){let b;const v={...C.useContext(Kd),...h,layoutId:fb(h)},{isStatic:_}=v,k=sb(h),z=a(h,_);if(!_&&Yd){gb();const $=hb(v);b=$.MeasureLayout,k.visualElement=ub(c,z,v,t,$.ProjectionNode)}return s.jsxs(ll.Provider,{value:k,children:[b&&k.visualElement?s.jsx(b,{visualElement:k.visualElement,...v}):null,r(c,h,cb(z,k.visualElement,y),z,_,k.visualElement)]})}f.displayName=`motion.${typeof c=="string"?c:`create(${(u=(p=c.displayName)!==null&&p!==void 0?p:c.name)!==null&&u!==void 0?u:""})`}`;const g=C.forwardRef(f);return g[lb]=c,g}function fb({layoutId:n}){const t=C.useContext(Hd).id;return t&&n!==void 0?t+"-"+n:n}function gb(n,t){C.useContext(Xg).strict}function hb(n){const{drag:t,layout:r}=ai;if(!t&&!r)return{};const a={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const yb=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function eu(n){return typeof n!="string"||n.includes("-")?!1:!!(yb.indexOf(n)>-1||/[A-Z]/u.test(n))}function lf(n){const t=[{},{}];return n==null||n.values.forEach((r,a)=>{t[0][a]=r.get(),t[1][a]=r.getVelocity()}),t}function tu(n,t,r,a){if(typeof t=="function"){const[c,p]=lf(a);t=t(r!==void 0?r:n.custom,c,p)}if(typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"){const[c,p]=lf(a);t=t(r!==void 0?r:n.custom,c,p)}return t}const Sd=n=>Array.isArray(n),xb=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),bb=n=>Sd(n)?n[n.length-1]||0:n,jt=n=>!!(n&&n.getVelocity);function Gs(n){const t=jt(n)?n.get():n;return xb(t)?t.toValue():t}function vb({scrapeMotionValuesFromProps:n,createRenderState:t,onUpdate:r},a,c,p){const u={latestValues:wb(a,c,p,n),renderState:t()};return r&&(u.onMount=f=>r({props:a,current:f,...u}),u.onUpdate=f=>r(f)),u}const oh=n=>(t,r)=>{const a=C.useContext(ll),c=C.useContext(sl),p=()=>vb(n,t,a,c);return r?p():Wd(p)};function wb(n,t,r,a){const c={},p=a(n,{});for(const v in p)c[v]=Gs(p[v]);let{initial:u,animate:f}=n;const g=dl(n),h=Zg(n);t&&h&&!g&&n.inherit!==!1&&(u===void 0&&(u=t.initial),f===void 0&&(f=t.animate));let y=r?r.initial===!1:!1;y=y||u===!1;const b=y?f:u;if(b&&typeof b!="boolean"&&!cl(b)){const v=Array.isArray(b)?b:[b];for(let _=0;_<v.length;_++){const k=tu(n,v[_]);if(k){const{transitionEnd:z,transition:$,...S}=k;for(const T in S){let M=S[T];if(Array.isArray(M)){const D=y?M.length-1:0;M=M[D]}M!==null&&(c[T]=M)}for(const T in z)c[T]=z[T]}}}return c}const di=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],hr=new Set(di),rh=n=>t=>typeof t=="string"&&t.startsWith(n),ih=rh("--"),_b=rh("var(--"),nu=n=>_b(n)?kb.test(n.split("/*")[0].trim()):!1,kb=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ah=(n,t)=>t&&typeof n=="number"?t.transform(n):n,po=(n,t,r)=>r>t?t:r<n?n:r,ui={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},va={...ui,transform:n=>po(0,1,n)},Bs={...ui,default:1},Ea=n=>({test:t=>typeof t=="string"&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),Io=Ea("deg"),Bn=Ea("%"),he=Ea("px"),Sb=Ea("vh"),Cb=Ea("vw"),cf={...Bn,parse:n=>Bn.parse(n)/100,transform:n=>Bn.transform(n*100)},Eb={borderWidth:he,borderTopWidth:he,borderRightWidth:he,borderBottomWidth:he,borderLeftWidth:he,borderRadius:he,radius:he,borderTopLeftRadius:he,borderTopRightRadius:he,borderBottomRightRadius:he,borderBottomLeftRadius:he,width:he,maxWidth:he,height:he,maxHeight:he,top:he,right:he,bottom:he,left:he,padding:he,paddingTop:he,paddingRight:he,paddingBottom:he,paddingLeft:he,margin:he,marginTop:he,marginRight:he,marginBottom:he,marginLeft:he,backgroundPositionX:he,backgroundPositionY:he},zb={rotate:Io,rotateX:Io,rotateY:Io,rotateZ:Io,scale:Bs,scaleX:Bs,scaleY:Bs,scaleZ:Bs,skew:Io,skewX:Io,skewY:Io,distance:he,translateX:he,translateY:he,translateZ:he,x:he,y:he,z:he,perspective:he,transformPerspective:he,opacity:va,originX:cf,originY:cf,originZ:he},df={...ui,transform:Math.round},ou={...Eb,...zb,zIndex:df,size:he,fillOpacity:va,strokeOpacity:va,numOctaves:df},Ab={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Nb=di.length;function jb(n,t,r){let a="",c=!0;for(let p=0;p<Nb;p++){const u=di[p],f=n[u];if(f===void 0)continue;let g=!0;if(typeof f=="number"?g=f===(u.startsWith("scale")?1:0):g=parseFloat(f)===0,!g||r){const h=ah(f,ou[u]);if(!g){c=!1;const y=Ab[u]||u;a+=`${y}(${h}) `}r&&(t[u]=h)}}return a=a.trim(),r?a=r(t,c?"":a):c&&(a="none"),a}function ru(n,t,r){const{style:a,vars:c,transformOrigin:p}=n;let u=!1,f=!1;for(const g in t){const h=t[g];if(hr.has(g)){u=!0;continue}else if(ih(g)){c[g]=h;continue}else{const y=ah(h,ou[g]);g.startsWith("origin")?(f=!0,p[g]=y):a[g]=y}}if(t.transform||(u||r?a.transform=jb(t,n.transform,r):a.transform&&(a.transform="none")),f){const{originX:g="50%",originY:h="50%",originZ:y=0}=p;a.transformOrigin=`${g} ${h} ${y}`}}const $b={offset:"stroke-dashoffset",array:"stroke-dasharray"},Pb={offset:"strokeDashoffset",array:"strokeDasharray"};function Tb(n,t,r=1,a=0,c=!0){n.pathLength=1;const p=c?$b:Pb;n[p.offset]=he.transform(-a);const u=he.transform(t),f=he.transform(r);n[p.array]=`${u} ${f}`}function uf(n,t,r){return typeof n=="string"?n:he.transform(t+r*n)}function Ob(n,t,r){const a=uf(t,n.x,n.width),c=uf(r,n.y,n.height);return`${a} ${c}`}function iu(n,{attrX:t,attrY:r,attrScale:a,originX:c,originY:p,pathLength:u,pathSpacing:f=1,pathOffset:g=0,...h},y,b){if(ru(n,h,b),y){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:_,dimensions:k}=n;v.transform&&(k&&(_.transform=v.transform),delete v.transform),k&&(c!==void 0||p!==void 0||_.transform)&&(_.transformOrigin=Ob(k,c!==void 0?c:.5,p!==void 0?p:.5)),t!==void 0&&(v.x=t),r!==void 0&&(v.y=r),a!==void 0&&(v.scale=a),u!==void 0&&Tb(v,u,f,g,!1)}const au=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),sh=()=>({...au(),attrs:{}}),su=n=>typeof n=="string"&&n.toLowerCase()==="svg";function lh(n,{style:t,vars:r},a,c){Object.assign(n.style,t,c&&c.getProjectionStyles(a));for(const p in r)n.style.setProperty(p,r[p])}const ch=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function dh(n,t,r,a){lh(n,t,void 0,a);for(const c in t.attrs)n.setAttribute(ch.has(c)?c:Jd(c),t.attrs[c])}const Xs={};function Lb(n){Object.assign(Xs,n)}function uh(n,{layout:t,layoutId:r}){return hr.has(n)||n.startsWith("origin")||(t||r!==void 0)&&(!!Xs[n]||n==="opacity")}function lu(n,t,r){var a;const{style:c}=n,p={};for(const u in c)(jt(c[u])||t.style&&jt(t.style[u])||uh(u,n)||((a=r==null?void 0:r.getValue(u))===null||a===void 0?void 0:a.liveStyle)!==void 0)&&(p[u]=c[u]);return p}function ph(n,t,r){const a=lu(n,t,r);for(const c in n)if(jt(n[c])||jt(t[c])){const p=di.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[p]=n[c]}return a}function Rb(n,t){try{t.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const pf=["x","y","width","height","cx","cy","r"],Fb={useVisualState:oh({scrapeMotionValuesFromProps:ph,createRenderState:sh,onUpdate:({props:n,prevProps:t,current:r,renderState:a,latestValues:c})=>{if(!r)return;let p=!!n.drag;if(!p){for(const f in c)if(hr.has(f)){p=!0;break}}if(!p)return;let u=!t;if(t)for(let f=0;f<pf.length;f++){const g=pf[f];n[g]!==t[g]&&(u=!0)}u&&Qe.read(()=>{Rb(r,a),Qe.render(()=>{iu(a,c,su(r.tagName),n.transformTemplate),dh(r,a)})})}})},Db={useVisualState:oh({scrapeMotionValuesFromProps:lu,createRenderState:au})};function mh(n,t,r){for(const a in t)!jt(t[a])&&!uh(a,r)&&(n[a]=t[a])}function Mb({transformTemplate:n},t){return C.useMemo(()=>{const r=au();return ru(r,t,n),Object.assign({},r.vars,r.style)},[t])}function Ib(n,t){const r=n.style||{},a={};return mh(a,r,n),Object.assign(a,Mb(n,t)),a}function Bb(n,t){const r={},a=Ib(n,t);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=a,r}function Ub(n,t,r,a){const c=C.useMemo(()=>{const p=sh();return iu(p,t,su(a),n.transformTemplate),{...p.attrs,style:{...p.style}}},[t]);if(n.style){const p={};mh(p,n.style,n),c.style={...p,...c.style}}return c}function Vb(n=!1){return(r,a,c,{latestValues:p},u)=>{const g=(eu(r)?Ub:Bb)(a,p,u,r),h=rb(a,typeof r=="string",n),y=r!==C.Fragment?{...h,...g,ref:c}:{},{children:b}=a,v=C.useMemo(()=>jt(b)?b.get():b,[b]);return C.createElement(r,{...y,children:v})}}function qb(n,t){return function(a,{forwardMotionProps:c}={forwardMotionProps:!1}){const u={...eu(a)?Fb:Db,preloadedFeatures:n,useRender:Vb(c),createVisualElement:t,Component:a};return mb(u)}}function fh(n,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==n.length)return!1;for(let a=0;a<r;a++)if(t[a]!==n[a])return!1;return!0}function ul(n,t,r){const a=n.getProps();return tu(a,t,r!==void 0?r:a.custom,n)}function cu(n,t){return n?n[t]||n.default||n:void 0}const gh=new Set(["width","height","top","left","right","bottom",...di]);let Hs;function Gb(){Hs=void 0}const Un={now:()=>(Hs===void 0&&Un.set(_t.isProcessing||Jx.useManualTiming?_t.timestamp:performance.now()),Hs),set:n=>{Hs=n,queueMicrotask(Gb)}};function du(n,t){n.indexOf(t)===-1&&n.push(t)}function uu(n,t){const r=n.indexOf(t);r>-1&&n.splice(r,1)}class pu{constructor(){this.subscriptions=[]}add(t){return du(this.subscriptions,t),()=>uu(this.subscriptions,t)}notify(t,r,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](t,r,a);else for(let p=0;p<c;p++){const u=this.subscriptions[p];u&&u(t,r,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function hh(n,t){return t?n*(1e3/t):0}const mf=30,Hb=n=>!isNaN(parseFloat(n));class Wb{constructor(t,r={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,c=!0)=>{const p=Un.now();this.updatedAt!==p&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=r.owner}setCurrent(t){this.current=t,this.updatedAt=Un.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Hb(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new pu);const a=this.events[t].add(r);return t==="change"?()=>{a(),Qe.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,a){this.set(r),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,r=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Un.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>mf)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,mf);return hh(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function wa(n,t){return new Wb(n,t)}function Kb(n,t,r){n.hasValue(t)?n.getValue(t).set(r):n.addValue(t,wa(r))}function Yb(n,t){const r=ul(n,t);let{transitionEnd:a={},transition:c={},...p}=r||{};p={...p,...a};for(const u in p){const f=bb(p[u]);Kb(n,u,f)}}function Qb(n){return!!(jt(n)&&n.add)}function Cd(n,t){const r=n.getValue("willChange");if(Qb(r))return r.add(t)}function yh(n){return n.props[eh]}function mu(n){let t;return()=>(t===void 0&&(t=n()),t)}const Xb=mu(()=>window.ScrollTimeline!==void 0);class Jb{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,r){for(let a=0;a<this.animations.length;a++)this.animations[a][t]=r}attachTimeline(t,r){const a=this.animations.map(c=>{if(Xb()&&c.attachTimeline)return c.attachTimeline(t);if(typeof r=="function")return r(c)});return()=>{a.forEach((c,p)=>{c&&c(),this.animations[p].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let r=0;r<this.animations.length;r++)t=Math.max(t,this.animations[r].duration);return t}runAll(t){this.animations.forEach(r=>r[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Zb extends Jb{then(t,r){return Promise.all(this.animations).then(t).catch(r)}}const so=n=>n*1e3,lo=n=>n/1e3;function fu(n){return typeof n=="function"}function ff(n,t){n.timeline=t,n.onfinish=null}const gu=n=>Array.isArray(n)&&typeof n[0]=="number",ev={linearEasing:void 0};function tv(n,t){const r=mu(n);return()=>{var a;return(a=ev[t])!==null&&a!==void 0?a:r()}}const Js=tv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),si=(n,t,r)=>{const a=t-n;return a===0?1:(r-n)/a},xh=(n,t,r=10)=>{let a="";const c=Math.max(Math.round(t/r),2);for(let p=0;p<c;p++)a+=n(si(0,c-1,p))+", ";return`linear(${a.substring(0,a.length-2)})`};function bh(n){return!!(typeof n=="function"&&Js()||!n||typeof n=="string"&&(n in Ed||Js())||gu(n)||Array.isArray(n)&&n.every(bh))}const aa=([n,t,r,a])=>`cubic-bezier(${n}, ${t}, ${r}, ${a})`,Ed={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:aa([0,.65,.55,1]),circOut:aa([.55,0,1,.45]),backIn:aa([.31,.01,.66,-.59]),backOut:aa([.33,1.53,.69,.99])};function vh(n,t){if(n)return typeof n=="function"&&Js()?xh(n,t):gu(n)?aa(n):Array.isArray(n)?n.map(r=>vh(r,t)||Ed.easeOut):Ed[n]}const wh=(n,t,r)=>(((1-3*r+3*t)*n+(3*r-6*t))*n+3*t)*n,nv=1e-7,ov=12;function rv(n,t,r,a,c){let p,u,f=0;do u=t+(r-t)/2,p=wh(u,a,c)-n,p>0?r=u:t=u;while(Math.abs(p)>nv&&++f<ov);return u}function za(n,t,r,a){if(n===t&&r===a)return Jt;const c=p=>rv(p,0,1,n,r);return p=>p===0||p===1?p:wh(c(p),t,a)}const _h=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,kh=n=>t=>1-n(1-t),Sh=za(.33,1.53,.69,.99),hu=kh(Sh),Ch=_h(hu),Eh=n=>(n*=2)<1?.5*hu(n):.5*(2-Math.pow(2,-10*(n-1))),yu=n=>1-Math.sin(Math.acos(n)),zh=kh(yu),Ah=_h(yu),Nh=n=>/^0[^.\s]+$/u.test(n);function iv(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Nh(n):!0}const ma=n=>Math.round(n*1e5)/1e5,xu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function av(n){return n==null}const sv=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,bu=(n,t)=>r=>!!(typeof r=="string"&&sv.test(r)&&r.startsWith(n)||t&&!av(r)&&Object.prototype.hasOwnProperty.call(r,t)),jh=(n,t,r)=>a=>{if(typeof a!="string")return a;const[c,p,u,f]=a.match(xu);return{[n]:parseFloat(c),[t]:parseFloat(p),[r]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},lv=n=>po(0,255,n),rd={...ui,transform:n=>Math.round(lv(n))},ur={test:bu("rgb","red"),parse:jh("red","green","blue"),transform:({red:n,green:t,blue:r,alpha:a=1})=>"rgba("+rd.transform(n)+", "+rd.transform(t)+", "+rd.transform(r)+", "+ma(va.transform(a))+")"};function cv(n){let t="",r="",a="",c="";return n.length>5?(t=n.substring(1,3),r=n.substring(3,5),a=n.substring(5,7),c=n.substring(7,9)):(t=n.substring(1,2),r=n.substring(2,3),a=n.substring(3,4),c=n.substring(4,5),t+=t,r+=r,a+=a,c+=c),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const zd={test:bu("#"),parse:cv,transform:ur.transform},Zr={test:bu("hsl","hue"),parse:jh("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:r,alpha:a=1})=>"hsla("+Math.round(n)+", "+Bn.transform(ma(t))+", "+Bn.transform(ma(r))+", "+ma(va.transform(a))+")"},Nt={test:n=>ur.test(n)||zd.test(n)||Zr.test(n),parse:n=>ur.test(n)?ur.parse(n):Zr.test(n)?Zr.parse(n):zd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ur.transform(n):Zr.transform(n)},dv=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function uv(n){var t,r;return isNaN(n)&&typeof n=="string"&&(((t=n.match(xu))===null||t===void 0?void 0:t.length)||0)+(((r=n.match(dv))===null||r===void 0?void 0:r.length)||0)>0}const $h="number",Ph="color",pv="var",mv="var(",gf="${}",fv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _a(n){const t=n.toString(),r=[],a={color:[],number:[],var:[]},c=[];let p=0;const f=t.replace(fv,g=>(Nt.test(g)?(a.color.push(p),c.push(Ph),r.push(Nt.parse(g))):g.startsWith(mv)?(a.var.push(p),c.push(pv),r.push(g)):(a.number.push(p),c.push($h),r.push(parseFloat(g))),++p,gf)).split(gf);return{values:r,split:f,indexes:a,types:c}}function Th(n){return _a(n).values}function Oh(n){const{split:t,types:r}=_a(n),a=t.length;return c=>{let p="";for(let u=0;u<a;u++)if(p+=t[u],c[u]!==void 0){const f=r[u];f===$h?p+=ma(c[u]):f===Ph?p+=Nt.transform(c[u]):p+=c[u]}return p}}const gv=n=>typeof n=="number"?0:n;function hv(n){const t=Th(n);return Oh(n)(t.map(gv))}const Vo={test:uv,parse:Th,createTransformer:Oh,getAnimatableNone:hv},yv=new Set(["brightness","contrast","saturate","opacity"]);function xv(n){const[t,r]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[a]=r.match(xu)||[];if(!a)return n;const c=r.replace(a,"");let p=yv.has(t)?1:0;return a!==r&&(p*=100),t+"("+p+c+")"}const bv=/\b([a-z-]*)\(.*?\)/gu,Ad={...Vo,getAnimatableNone:n=>{const t=n.match(bv);return t?t.map(xv).join(" "):n}},vv={...ou,color:Nt,backgroundColor:Nt,outlineColor:Nt,fill:Nt,stroke:Nt,borderColor:Nt,borderTopColor:Nt,borderRightColor:Nt,borderBottomColor:Nt,borderLeftColor:Nt,filter:Ad,WebkitFilter:Ad},vu=n=>vv[n];function Lh(n,t){let r=vu(n);return r!==Ad&&(r=Vo),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const wv=new Set(["auto","none","0"]);function _v(n,t,r){let a=0,c;for(;a<n.length&&!c;){const p=n[a];typeof p=="string"&&!wv.has(p)&&_a(p).values.length&&(c=n[a]),a++}if(c&&r)for(const p of t)n[p]=Lh(r,c)}const hf=n=>n===ui||n===he,yf=(n,t)=>parseFloat(n.split(", ")[t]),xf=(n,t)=>(r,{transform:a})=>{if(a==="none"||!a)return 0;const c=a.match(/^matrix3d\((.+)\)$/u);if(c)return yf(c[1],t);{const p=a.match(/^matrix\((.+)\)$/u);return p?yf(p[1],n):0}},kv=new Set(["x","y","z"]),Sv=di.filter(n=>!kv.has(n));function Cv(n){const t=[];return Sv.forEach(r=>{const a=n.getValue(r);a!==void 0&&(t.push([r,a.get()]),a.set(r.startsWith("scale")?1:0))}),t}const li={width:({x:n},{paddingLeft:t="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(t)-parseFloat(r),height:({y:n},{paddingTop:t="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(t)-parseFloat(r),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:xf(4,13),y:xf(5,14)};li.translateX=li.x;li.translateY=li.y;const fr=new Set;let Nd=!1,jd=!1;function Rh(){if(jd){const n=Array.from(fr).filter(a=>a.needsMeasurement),t=new Set(n.map(a=>a.element)),r=new Map;t.forEach(a=>{const c=Cv(a);c.length&&(r.set(a,c),a.render())}),n.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const c=r.get(a);c&&c.forEach(([p,u])=>{var f;(f=a.getValue(p))===null||f===void 0||f.set(u)})}),n.forEach(a=>a.measureEndState()),n.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}jd=!1,Nd=!1,fr.forEach(n=>n.complete()),fr.clear()}function Fh(){fr.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(jd=!0)})}function Ev(){Fh(),Rh()}class wu{constructor(t,r,a,c,p,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=r,this.name=a,this.motionValue=c,this.element=p,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(fr.add(this),Nd||(Nd=!0,Qe.read(Fh),Qe.resolveKeyframes(Rh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:r,element:a,motionValue:c}=this;for(let p=0;p<t.length;p++)if(t[p]===null)if(p===0){const u=c==null?void 0:c.get(),f=t[t.length-1];if(u!==void 0)t[0]=u;else if(a&&r){const g=a.readValue(r,f);g!=null&&(t[0]=g)}t[0]===void 0&&(t[0]=f),c&&u===void 0&&c.set(t[0])}else t[p]=t[p-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),fr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,fr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Dh=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),zv=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Av(n){const t=zv.exec(n);if(!t)return[,];const[,r,a,c]=t;return[`--${r??a}`,c]}function Mh(n,t,r=1){const[a,c]=Av(n);if(!a)return;const p=window.getComputedStyle(t).getPropertyValue(a);if(p){const u=p.trim();return Dh(u)?parseFloat(u):u}return nu(c)?Mh(c,t,r+1):c}const Ih=n=>t=>t.test(n),Nv={test:n=>n==="auto",parse:n=>n},Bh=[ui,he,Bn,Io,Cb,Sb,Nv],bf=n=>Bh.find(Ih(n));class Uh extends wu{constructor(t,r,a,c,p){super(t,r,a,c,p,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:r,name:a}=this;if(!r||!r.current)return;super.readKeyframes();for(let g=0;g<t.length;g++){let h=t[g];if(typeof h=="string"&&(h=h.trim(),nu(h))){const y=Mh(h,r.current);y!==void 0&&(t[g]=y),g===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!gh.has(a)||t.length!==2)return;const[c,p]=t,u=bf(c),f=bf(p);if(u!==f)if(hf(u)&&hf(f))for(let g=0;g<t.length;g++){const h=t[g];typeof h=="string"&&(t[g]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:r}=this,a=[];for(let c=0;c<t.length;c++)iv(t[c])&&a.push(c);a.length&&_v(t,a,r)}measureInitialState(){const{element:t,unresolvedKeyframes:r,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=li[a](t.measureViewportBox(),window.getComputedStyle(t.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&t.getValue(a,c).jump(c,!1)}measureEndState(){var t;const{element:r,name:a,unresolvedKeyframes:c}=this;if(!r||!r.current)return;const p=r.getValue(a);p&&p.jump(this.measuredOrigin,!1);const u=c.length-1,f=c[u];c[u]=li[a](r.measureViewportBox(),window.getComputedStyle(r.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([g,h])=>{r.getValue(g).set(h)}),this.resolveNoneKeyframes()}}const vf=(n,t)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Vo.test(n)||n==="0")&&!n.startsWith("url("));function jv(n){const t=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==t)return!0}function $v(n,t,r,a){const c=n[0];if(c===null)return!1;if(t==="display"||t==="visibility")return!0;const p=n[n.length-1],u=vf(c,t),f=vf(p,t);return!u||!f?!1:jv(n)||(r==="spring"||fu(r))&&a}const Pv=n=>n!==null;function pl(n,{repeat:t,repeatType:r="loop"},a){const c=n.filter(Pv),p=t&&r!=="loop"&&t%2===1?0:c.length-1;return!p||a===void 0?c[p]:a}const Tv=40;class Vh{constructor({autoplay:t=!0,delay:r=0,type:a="keyframes",repeat:c=0,repeatDelay:p=0,repeatType:u="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Un.now(),this.options={autoplay:t,delay:r,type:a,repeat:c,repeatDelay:p,repeatType:u,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Tv?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Ev(),this._resolved}onKeyframesResolved(t,r){this.resolvedAt=Un.now(),this.hasAttemptedResolve=!0;const{name:a,type:c,velocity:p,delay:u,onComplete:f,onUpdate:g,isGenerator:h}=this.options;if(!h&&!$v(t,a,c,p))if(u)this.options.duration=0;else{g&&g(pl(t,this.options,r)),f&&f(),this.resolveFinishedPromise();return}const y=this.initPlayback(t,r);y!==!1&&(this._resolved={keyframes:t,finalKeyframe:r,...y},this.onPostResolved())}onPostResolved(){}then(t,r){return this.currentFinishedPromise.then(t,r)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const $d=2e4;function qh(n){let t=0;const r=50;let a=n.next(t);for(;!a.done&&t<$d;)t+=r,a=n.next(t);return t>=$d?1/0:t}const ot=(n,t,r)=>n+(t-n)*r;function id(n,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(t-n)*6*r:r<1/2?t:r<2/3?n+(t-n)*(2/3-r)*6:n}function Ov({hue:n,saturation:t,lightness:r,alpha:a}){n/=360,t/=100,r/=100;let c=0,p=0,u=0;if(!t)c=p=u=r;else{const f=r<.5?r*(1+t):r+t-r*t,g=2*r-f;c=id(g,f,n+1/3),p=id(g,f,n),u=id(g,f,n-1/3)}return{red:Math.round(c*255),green:Math.round(p*255),blue:Math.round(u*255),alpha:a}}function Zs(n,t){return r=>r>0?t:n}const ad=(n,t,r)=>{const a=n*n,c=r*(t*t-a)+a;return c<0?0:Math.sqrt(c)},Lv=[zd,ur,Zr],Rv=n=>Lv.find(t=>t.test(n));function wf(n){const t=Rv(n);if(!t)return!1;let r=t.parse(n);return t===Zr&&(r=Ov(r)),r}const _f=(n,t)=>{const r=wf(n),a=wf(t);if(!r||!a)return Zs(n,t);const c={...r};return p=>(c.red=ad(r.red,a.red,p),c.green=ad(r.green,a.green,p),c.blue=ad(r.blue,a.blue,p),c.alpha=ot(r.alpha,a.alpha,p),ur.transform(c))},Fv=(n,t)=>r=>t(n(r)),Aa=(...n)=>n.reduce(Fv),Pd=new Set(["none","hidden"]);function Dv(n,t){return Pd.has(n)?r=>r<=0?n:t:r=>r>=1?t:n}function Mv(n,t){return r=>ot(n,t,r)}function _u(n){return typeof n=="number"?Mv:typeof n=="string"?nu(n)?Zs:Nt.test(n)?_f:Uv:Array.isArray(n)?Gh:typeof n=="object"?Nt.test(n)?_f:Iv:Zs}function Gh(n,t){const r=[...n],a=r.length,c=n.map((p,u)=>_u(p)(p,t[u]));return p=>{for(let u=0;u<a;u++)r[u]=c[u](p);return r}}function Iv(n,t){const r={...n,...t},a={};for(const c in r)n[c]!==void 0&&t[c]!==void 0&&(a[c]=_u(n[c])(n[c],t[c]));return c=>{for(const p in a)r[p]=a[p](c);return r}}function Bv(n,t){var r;const a=[],c={color:0,var:0,number:0};for(let p=0;p<t.values.length;p++){const u=t.types[p],f=n.indexes[u][c[u]],g=(r=n.values[f])!==null&&r!==void 0?r:0;a[p]=g,c[u]++}return a}const Uv=(n,t)=>{const r=Vo.createTransformer(t),a=_a(n),c=_a(t);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Pd.has(n)&&!c.values.length||Pd.has(t)&&!a.values.length?Dv(n,t):Aa(Gh(Bv(a,c),c.values),r):Zs(n,t)};function Hh(n,t,r){return typeof n=="number"&&typeof t=="number"&&typeof r=="number"?ot(n,t,r):_u(n)(n,t)}const Vv=5;function Wh(n,t,r){const a=Math.max(t-Vv,0);return hh(r-n(a),t-a)}const it={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},sd=.001;function qv({duration:n=it.duration,bounce:t=it.bounce,velocity:r=it.velocity,mass:a=it.mass}){let c,p,u=1-t;u=po(it.minDamping,it.maxDamping,u),n=po(it.minDuration,it.maxDuration,lo(n)),u<1?(c=h=>{const y=h*u,b=y*n,v=y-r,_=Td(h,u),k=Math.exp(-b);return sd-v/_*k},p=h=>{const b=h*u*n,v=b*r+r,_=Math.pow(u,2)*Math.pow(h,2)*n,k=Math.exp(-b),z=Td(Math.pow(h,2),u);return(-c(h)+sd>0?-1:1)*((v-_)*k)/z}):(c=h=>{const y=Math.exp(-h*n),b=(h-r)*n+1;return-sd+y*b},p=h=>{const y=Math.exp(-h*n),b=(r-h)*(n*n);return y*b});const f=5/n,g=Hv(c,p,f);if(n=so(n),isNaN(g))return{stiffness:it.stiffness,damping:it.damping,duration:n};{const h=Math.pow(g,2)*a;return{stiffness:h,damping:u*2*Math.sqrt(a*h),duration:n}}}const Gv=12;function Hv(n,t,r){let a=r;for(let c=1;c<Gv;c++)a=a-n(a)/t(a);return a}function Td(n,t){return n*Math.sqrt(1-t*t)}const Wv=["duration","bounce"],Kv=["stiffness","damping","mass"];function kf(n,t){return t.some(r=>n[r]!==void 0)}function Yv(n){let t={velocity:it.velocity,stiffness:it.stiffness,damping:it.damping,mass:it.mass,isResolvedFromDuration:!1,...n};if(!kf(n,Kv)&&kf(n,Wv))if(n.visualDuration){const r=n.visualDuration,a=2*Math.PI/(r*1.2),c=a*a,p=2*po(.05,1,1-(n.bounce||0))*Math.sqrt(c);t={...t,mass:it.mass,stiffness:c,damping:p}}else{const r=qv(n);t={...t,...r,mass:it.mass},t.isResolvedFromDuration=!0}return t}function Kh(n=it.visualDuration,t=it.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:t}:n;let{restSpeed:a,restDelta:c}=r;const p=r.keyframes[0],u=r.keyframes[r.keyframes.length-1],f={done:!1,value:p},{stiffness:g,damping:h,mass:y,duration:b,velocity:v,isResolvedFromDuration:_}=Yv({...r,velocity:-lo(r.velocity||0)}),k=v||0,z=h/(2*Math.sqrt(g*y)),$=u-p,S=lo(Math.sqrt(g/y)),T=Math.abs($)<5;a||(a=T?it.restSpeed.granular:it.restSpeed.default),c||(c=T?it.restDelta.granular:it.restDelta.default);let M;if(z<1){const F=Td(S,z);M=X=>{const W=Math.exp(-z*S*X);return u-W*((k+z*S*$)/F*Math.sin(F*X)+$*Math.cos(F*X))}}else if(z===1)M=F=>u-Math.exp(-S*F)*($+(k+S*$)*F);else{const F=S*Math.sqrt(z*z-1);M=X=>{const W=Math.exp(-z*S*X),Y=Math.min(F*X,300);return u-W*((k+z*S*$)*Math.sinh(Y)+F*$*Math.cosh(Y))/F}}const D={calculatedDuration:_&&b||null,next:F=>{const X=M(F);if(_)f.done=F>=b;else{let W=0;z<1&&(W=F===0?so(k):Wh(M,F,X));const Y=Math.abs(W)<=a,ve=Math.abs(u-X)<=c;f.done=Y&&ve}return f.value=f.done?u:X,f},toString:()=>{const F=Math.min(qh(D),$d),X=xh(W=>D.next(F*W).value,F,30);return F+"ms "+X}};return D}function Sf({keyframes:n,velocity:t=0,power:r=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:p=500,modifyTarget:u,min:f,max:g,restDelta:h=.5,restSpeed:y}){const b=n[0],v={done:!1,value:b},_=Y=>f!==void 0&&Y<f||g!==void 0&&Y>g,k=Y=>f===void 0?g:g===void 0||Math.abs(f-Y)<Math.abs(g-Y)?f:g;let z=r*t;const $=b+z,S=u===void 0?$:u($);S!==$&&(z=S-b);const T=Y=>-z*Math.exp(-Y/a),M=Y=>S+T(Y),D=Y=>{const ve=T(Y),fe=M(Y);v.done=Math.abs(ve)<=h,v.value=v.done?S:fe};let F,X;const W=Y=>{_(v.value)&&(F=Y,X=Kh({keyframes:[v.value,k(v.value)],velocity:Wh(M,Y,v.value),damping:c,stiffness:p,restDelta:h,restSpeed:y}))};return W(0),{calculatedDuration:null,next:Y=>{let ve=!1;return!X&&F===void 0&&(ve=!0,D(Y),W(Y)),F!==void 0&&Y>=F?X.next(Y-F):(!ve&&D(Y),v)}}}const Qv=za(.42,0,1,1),Xv=za(0,0,.58,1),Yh=za(.42,0,.58,1),Jv=n=>Array.isArray(n)&&typeof n[0]!="number",Zv={linear:Jt,easeIn:Qv,easeInOut:Yh,easeOut:Xv,circIn:yu,circInOut:Ah,circOut:zh,backIn:hu,backInOut:Ch,backOut:Sh,anticipate:Eh},Cf=n=>{if(gu(n)){Yg(n.length===4);const[t,r,a,c]=n;return za(t,r,a,c)}else if(typeof n=="string")return Zv[n];return n};function e1(n,t,r){const a=[],c=r||Hh,p=n.length-1;for(let u=0;u<p;u++){let f=c(n[u],n[u+1]);if(t){const g=Array.isArray(t)?t[u]||Jt:t;f=Aa(g,f)}a.push(f)}return a}function t1(n,t,{clamp:r=!0,ease:a,mixer:c}={}){const p=n.length;if(Yg(p===t.length),p===1)return()=>t[0];if(p===2&&t[0]===t[1])return()=>t[1];const u=n[0]===n[1];n[0]>n[p-1]&&(n=[...n].reverse(),t=[...t].reverse());const f=e1(t,a,c),g=f.length,h=y=>{if(u&&y<n[0])return t[0];let b=0;if(g>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const v=si(n[b],n[b+1],y);return f[b](v)};return r?y=>h(po(n[0],n[p-1],y)):h}function n1(n,t){const r=n[n.length-1];for(let a=1;a<=t;a++){const c=si(0,t,a);n.push(ot(r,1,c))}}function o1(n){const t=[0];return n1(t,n.length-1),t}function r1(n,t){return n.map(r=>r*t)}function i1(n,t){return n.map(()=>t||Yh).splice(0,n.length-1)}function el({duration:n=300,keyframes:t,times:r,ease:a="easeInOut"}){const c=Jv(a)?a.map(Cf):Cf(a),p={done:!1,value:t[0]},u=r1(r&&r.length===t.length?r:o1(t),n),f=t1(u,t,{ease:Array.isArray(c)?c:i1(t,c)});return{calculatedDuration:n,next:g=>(p.value=f(g),p.done=g>=n,p)}}const a1=n=>{const t=({timestamp:r})=>n(r);return{start:()=>Qe.update(t,!0),stop:()=>Uo(t),now:()=>_t.isProcessing?_t.timestamp:Un.now()}},s1={decay:Sf,inertia:Sf,tween:el,keyframes:el,spring:Kh},l1=n=>n/100;class ku extends Vh{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:g}=this.options;g&&g()};const{name:r,motionValue:a,element:c,keyframes:p}=this.options,u=(c==null?void 0:c.KeyframeResolver)||wu,f=(g,h)=>this.onKeyframesResolved(g,h);this.resolver=new u(p,f,r,a,c),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:r="keyframes",repeat:a=0,repeatDelay:c=0,repeatType:p,velocity:u=0}=this.options,f=fu(r)?r:s1[r]||el;let g,h;f!==el&&typeof t[0]!="number"&&(g=Aa(l1,Hh(t[0],t[1])),t=[0,100]);const y=f({...this.options,keyframes:t});p==="mirror"&&(h=f({...this.options,keyframes:[...t].reverse(),velocity:-u})),y.calculatedDuration===null&&(y.calculatedDuration=qh(y));const{calculatedDuration:b}=y,v=b+c,_=v*(a+1)-c;return{generator:y,mirroredGenerator:h,mapPercentToKeyframes:g,calculatedDuration:b,resolvedDuration:v,totalDuration:_}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,r=!1){const{resolved:a}=this;if(!a){const{keyframes:Y}=this.options;return{done:!0,value:Y[Y.length-1]}}const{finalKeyframe:c,generator:p,mirroredGenerator:u,mapPercentToKeyframes:f,keyframes:g,calculatedDuration:h,totalDuration:y,resolvedDuration:b}=a;if(this.startTime===null)return p.next(0);const{delay:v,repeat:_,repeatType:k,repeatDelay:z,onUpdate:$}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-y/this.speed,this.startTime)),r?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const S=this.currentTime-v*(this.speed>=0?1:-1),T=this.speed>=0?S<0:S>y;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=y);let M=this.currentTime,D=p;if(_){const Y=Math.min(this.currentTime,y)/b;let ve=Math.floor(Y),fe=Y%1;!fe&&Y>=1&&(fe=1),fe===1&&ve--,ve=Math.min(ve,_+1),!!(ve%2)&&(k==="reverse"?(fe=1-fe,z&&(fe-=z/b)):k==="mirror"&&(D=u)),M=po(0,1,fe)*b}const F=T?{done:!1,value:g[0]}:D.next(M);f&&(F.value=f(F.value));let{done:X}=F;!T&&h!==null&&(X=this.speed>=0?this.currentTime>=y:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&X);return W&&c!==void 0&&(F.value=pl(g,this.options,c)),$&&$(F.value),W&&this.finish(),F}get duration(){const{resolved:t}=this;return t?lo(t.calculatedDuration):0}get time(){return lo(this.currentTime)}set time(t){t=so(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const r=this.playbackSpeed!==t;this.playbackSpeed=t,r&&(this.time=lo(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=a1,onPlay:r,startTime:a}=this.options;this.driver||(this.driver=t(p=>this.tick(p))),r&&r();const c=this.driver.now();this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=c):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const c1=new Set(["opacity","clipPath","filter","transform"]);function d1(n,t,r,{delay:a=0,duration:c=300,repeat:p=0,repeatType:u="loop",ease:f="easeInOut",times:g}={}){const h={[t]:r};g&&(h.offset=g);const y=vh(f,c);return Array.isArray(y)&&(h.easing=y),n.animate(h,{delay:a,duration:c,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:p+1,direction:u==="reverse"?"alternate":"normal"})}const u1=mu(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),tl=10,p1=2e4;function m1(n){return fu(n.type)||n.type==="spring"||!bh(n.ease)}function f1(n,t){const r=new ku({...t,keyframes:n,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:n[0]};const c=[];let p=0;for(;!a.done&&p<p1;)a=r.sample(p),c.push(a.value),p+=tl;return{times:void 0,keyframes:c,duration:p-tl,ease:"linear"}}const Qh={anticipate:Eh,backInOut:Ch,circInOut:Ah};function g1(n){return n in Qh}class Ef extends Vh{constructor(t){super(t);const{name:r,motionValue:a,element:c,keyframes:p}=this.options;this.resolver=new Uh(p,(u,f)=>this.onKeyframesResolved(u,f),r,a,c),this.resolver.scheduleResolve()}initPlayback(t,r){let{duration:a=300,times:c,ease:p,type:u,motionValue:f,name:g,startTime:h}=this.options;if(!f.owner||!f.owner.current)return!1;if(typeof p=="string"&&Js()&&g1(p)&&(p=Qh[p]),m1(this.options)){const{onComplete:b,onUpdate:v,motionValue:_,element:k,...z}=this.options,$=f1(t,z);t=$.keyframes,t.length===1&&(t[1]=t[0]),a=$.duration,c=$.times,p=$.ease,u="keyframes"}const y=d1(f.owner.current,g,t,{...this.options,duration:a,times:c,ease:p});return y.startTime=h??this.calcStartTime(),this.pendingTimeline?(ff(y,this.pendingTimeline),this.pendingTimeline=void 0):y.onfinish=()=>{const{onComplete:b}=this.options;f.set(pl(t,this.options,r)),b&&b(),this.cancel(),this.resolveFinishedPromise()},{animation:y,duration:a,times:c,type:u,ease:p,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:r}=t;return lo(r)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:r}=t;return lo(r.currentTime||0)}set time(t){const{resolved:r}=this;if(!r)return;const{animation:a}=r;a.currentTime=so(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:r}=t;return r.playbackRate}set speed(t){const{resolved:r}=this;if(!r)return;const{animation:a}=r;a.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:r}=t;return r.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:r}=t;return r.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:r}=this;if(!r)return Jt;const{animation:a}=r;ff(a,t)}return Jt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:r,keyframes:a,duration:c,type:p,ease:u,times:f}=t;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:y,onComplete:b,element:v,..._}=this.options,k=new ku({..._,keyframes:a,duration:c,type:p,ease:u,times:f,isGenerator:!0}),z=so(this.time);h.setWithVelocity(k.sample(z-tl).value,k.sample(z).value,tl)}const{onStop:g}=this.options;g&&g(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:r,name:a,repeatDelay:c,repeatType:p,damping:u,type:f}=t;if(!r||!r.owner||!(r.owner.current instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:h}=r.owner.getProps();return u1()&&a&&c1.has(a)&&!g&&!h&&!c&&p!=="mirror"&&u!==0&&f!=="inertia"}}const h1={type:"spring",stiffness:500,damping:25,restSpeed:10},y1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),x1={type:"keyframes",duration:.8},b1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},v1=(n,{keyframes:t})=>t.length>2?x1:hr.has(n)?n.startsWith("scale")?y1(t[1]):h1:b1;function w1({when:n,delay:t,delayChildren:r,staggerChildren:a,staggerDirection:c,repeat:p,repeatType:u,repeatDelay:f,from:g,elapsed:h,...y}){return!!Object.keys(y).length}const Su=(n,t,r,a={},c,p)=>u=>{const f=cu(a,n)||{},g=f.delay||a.delay||0;let{elapsed:h=0}=a;h=h-so(g);let y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-h,onUpdate:v=>{t.set(v),f.onUpdate&&f.onUpdate(v)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:n,motionValue:t,element:p?void 0:c};w1(f)||(y={...y,...v1(n,y)}),y.duration&&(y.duration=so(y.duration)),y.repeatDelay&&(y.repeatDelay=so(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(b=!0)),b&&!p&&t.get()!==void 0){const v=pl(y.keyframes,f);if(v!==void 0)return Qe.update(()=>{y.onUpdate(v),y.onComplete()}),new Zb([])}return!p&&Ef.supports(y)?new Ef(y):new ku(y)};function _1({protectedKeys:n,needsAnimating:t},r){const a=n.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,a}function Xh(n,t,{delay:r=0,transitionOverride:a,type:c}={}){var p;let{transition:u=n.getDefaultTransition(),transitionEnd:f,...g}=t;a&&(u=a);const h=[],y=c&&n.animationState&&n.animationState.getState()[c];for(const b in g){const v=n.getValue(b,(p=n.latestValues[b])!==null&&p!==void 0?p:null),_=g[b];if(_===void 0||y&&_1(y,b))continue;const k={delay:r,...cu(u||{},b)};let z=!1;if(window.MotionHandoffAnimation){const S=yh(n);if(S){const T=window.MotionHandoffAnimation(S,b,Qe);T!==null&&(k.startTime=T,z=!0)}}Cd(n,b),v.start(Su(b,v,_,n.shouldReduceMotion&&gh.has(b)?{type:!1}:k,n,z));const $=v.animation;$&&h.push($)}return f&&Promise.all(h).then(()=>{Qe.update(()=>{f&&Yb(n,f)})}),h}function Od(n,t,r={}){var a;const c=ul(n,t,r.type==="exit"?(a=n.presenceContext)===null||a===void 0?void 0:a.custom:void 0);let{transition:p=n.getDefaultTransition()||{}}=c||{};r.transitionOverride&&(p=r.transitionOverride);const u=c?()=>Promise.all(Xh(n,c,r)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:v}=p;return k1(n,t,y+h,b,v,r)}:()=>Promise.resolve(),{when:g}=p;if(g){const[h,y]=g==="beforeChildren"?[u,f]:[f,u];return h().then(()=>y())}else return Promise.all([u(),f(r.delay)])}function k1(n,t,r=0,a=0,c=1,p){const u=[],f=(n.variantChildren.size-1)*a,g=c===1?(h=0)=>h*a:(h=0)=>f-h*a;return Array.from(n.variantChildren).sort(S1).forEach((h,y)=>{h.notify("AnimationStart",t),u.push(Od(h,t,{...p,delay:r+g(y)}).then(()=>h.notify("AnimationComplete",t)))}),Promise.all(u)}function S1(n,t){return n.sortNodePosition(t)}function C1(n,t,r={}){n.notify("AnimationStart",t);let a;if(Array.isArray(t)){const c=t.map(p=>Od(n,p,r));a=Promise.all(c)}else if(typeof t=="string")a=Od(n,t,r);else{const c=typeof t=="function"?ul(n,t,r.custom):t;a=Promise.all(Xh(n,c,r))}return a.then(()=>{n.notify("AnimationComplete",t)})}const E1=Xd.length;function Jh(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?Jh(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const t={};for(let r=0;r<E1;r++){const a=Xd[r],c=n.props[a];(ba(c)||c===!1)&&(t[a]=c)}return t}const z1=[...Qd].reverse(),A1=Qd.length;function N1(n){return t=>Promise.all(t.map(({animation:r,options:a})=>C1(n,r,a)))}function j1(n){let t=N1(n),r=zf(),a=!0;const c=g=>(h,y)=>{var b;const v=ul(n,y,g==="exit"?(b=n.presenceContext)===null||b===void 0?void 0:b.custom:void 0);if(v){const{transition:_,transitionEnd:k,...z}=v;h={...h,...z,...k}}return h};function p(g){t=g(n)}function u(g){const{props:h}=n,y=Jh(n.parent)||{},b=[],v=new Set;let _={},k=1/0;for(let $=0;$<A1;$++){const S=z1[$],T=r[S],M=h[S]!==void 0?h[S]:y[S],D=ba(M),F=S===g?T.isActive:null;F===!1&&(k=$);let X=M===y[S]&&M!==h[S]&&D;if(X&&a&&n.manuallyAnimateOnMount&&(X=!1),T.protectedKeys={..._},!T.isActive&&F===null||!M&&!T.prevProp||cl(M)||typeof M=="boolean")continue;const W=$1(T.prevProp,M);let Y=W||S===g&&T.isActive&&!X&&D||$>k&&D,ve=!1;const fe=Array.isArray(M)?M:[M];let De=fe.reduce(c(S),{});F===!1&&(De={});const{prevResolvedValues:G={}}=T,ue={...G,...De},je=le=>{Y=!0,v.has(le)&&(ve=!0,v.delete(le)),T.needsAnimating[le]=!0;const B=n.getValue(le);B&&(B.liveStyle=!1)};for(const le in ue){const B=De[le],ee=G[le];if(_.hasOwnProperty(le))continue;let Q=!1;Sd(B)&&Sd(ee)?Q=!fh(B,ee):Q=B!==ee,Q?B!=null?je(le):v.add(le):B!==void 0&&v.has(le)?je(le):T.protectedKeys[le]=!0}T.prevProp=M,T.prevResolvedValues=De,T.isActive&&(_={..._,...De}),a&&n.blockInitialAnimation&&(Y=!1),Y&&(!(X&&W)||ve)&&b.push(...fe.map(le=>({animation:le,options:{type:S}})))}if(v.size){const $={};v.forEach(S=>{const T=n.getBaseTarget(S),M=n.getValue(S);M&&(M.liveStyle=!0),$[S]=T??null}),b.push({animation:$})}let z=!!b.length;return a&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(z=!1),a=!1,z?t(b):Promise.resolve()}function f(g,h){var y;if(r[g].isActive===h)return Promise.resolve();(y=n.variantChildren)===null||y===void 0||y.forEach(v=>{var _;return(_=v.animationState)===null||_===void 0?void 0:_.setActive(g,h)}),r[g].isActive=h;const b=u(g);for(const v in r)r[v].protectedKeys={};return b}return{animateChanges:u,setActive:f,setAnimateFunction:p,getState:()=>r,reset:()=>{r=zf(),a=!0}}}function $1(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!fh(t,n):!1}function sr(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zf(){return{animate:sr(!0),whileInView:sr(),whileHover:sr(),whileTap:sr(),whileDrag:sr(),whileFocus:sr(),exit:sr()}}class qo{constructor(t){this.isMounted=!1,this.node=t}update(){}}class P1 extends qo{constructor(t){super(t),t.animationState||(t.animationState=j1(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();cl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let T1=0;class O1 extends qo{constructor(){super(...arguments),this.id=T1++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const c=this.node.animationState.setActive("exit",!t);r&&!t&&c.then(()=>r(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const L1={animation:{Feature:P1},exit:{Feature:O1}},Nn={x:!1,y:!1};function Zh(){return Nn.x||Nn.y}function R1(n){return n==="x"||n==="y"?Nn[n]?null:(Nn[n]=!0,()=>{Nn[n]=!1}):Nn.x||Nn.y?null:(Nn.x=Nn.y=!0,()=>{Nn.x=Nn.y=!1})}const Cu=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function ka(n,t,r,a={passive:!0}){return n.addEventListener(t,r,a),()=>n.removeEventListener(t,r)}function Na(n){return{point:{x:n.pageX,y:n.pageY}}}const F1=n=>t=>Cu(t)&&n(t,Na(t));function fa(n,t,r,a){return ka(n,t,F1(r),a)}const Af=(n,t)=>Math.abs(n-t);function D1(n,t){const r=Af(n.x,t.x),a=Af(n.y,t.y);return Math.sqrt(r**2+a**2)}class e0{constructor(t,r,{transformPagePoint:a,contextWindow:c,dragSnapToOrigin:p=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=cd(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,_=D1(b.offset,{x:0,y:0})>=3;if(!v&&!_)return;const{point:k}=b,{timestamp:z}=_t;this.history.push({...k,timestamp:z});const{onStart:$,onMove:S}=this.handlers;v||($&&$(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,b)},this.handlePointerMove=(b,v)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=ld(v,this.transformPagePoint),Qe.update(this.updatePoint,!0)},this.handlePointerUp=(b,v)=>{this.end();const{onEnd:_,onSessionEnd:k,resumeAnimation:z}=this.handlers;if(this.dragSnapToOrigin&&z&&z(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const $=cd(b.type==="pointercancel"?this.lastMoveEventInfo:ld(v,this.transformPagePoint),this.history);this.startEvent&&_&&_(b,$),k&&k(b,$)},!Cu(t))return;this.dragSnapToOrigin=p,this.handlers=r,this.transformPagePoint=a,this.contextWindow=c||window;const u=Na(t),f=ld(u,this.transformPagePoint),{point:g}=f,{timestamp:h}=_t;this.history=[{...g,timestamp:h}];const{onSessionStart:y}=r;y&&y(t,cd(f,this.history)),this.removeListeners=Aa(fa(this.contextWindow,"pointermove",this.handlePointerMove),fa(this.contextWindow,"pointerup",this.handlePointerUp),fa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Uo(this.updatePoint)}}function ld(n,t){return t?{point:t(n.point)}:n}function Nf(n,t){return{x:n.x-t.x,y:n.y-t.y}}function cd({point:n},t){return{point:n,delta:Nf(n,t0(t)),offset:Nf(n,M1(t)),velocity:I1(t,.1)}}function M1(n){return n[0]}function t0(n){return n[n.length-1]}function I1(n,t){if(n.length<2)return{x:0,y:0};let r=n.length-1,a=null;const c=t0(n);for(;r>=0&&(a=n[r],!(c.timestamp-a.timestamp>so(t)));)r--;if(!a)return{x:0,y:0};const p=lo(c.timestamp-a.timestamp);if(p===0)return{x:0,y:0};const u={x:(c.x-a.x)/p,y:(c.y-a.y)/p};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const n0=1e-4,B1=1-n0,U1=1+n0,o0=.01,V1=0-o0,q1=0+o0;function Zt(n){return n.max-n.min}function G1(n,t,r){return Math.abs(n-t)<=r}function jf(n,t,r,a=.5){n.origin=a,n.originPoint=ot(t.min,t.max,n.origin),n.scale=Zt(r)/Zt(t),n.translate=ot(r.min,r.max,n.origin)-n.originPoint,(n.scale>=B1&&n.scale<=U1||isNaN(n.scale))&&(n.scale=1),(n.translate>=V1&&n.translate<=q1||isNaN(n.translate))&&(n.translate=0)}function ga(n,t,r,a){jf(n.x,t.x,r.x,a?a.originX:void 0),jf(n.y,t.y,r.y,a?a.originY:void 0)}function $f(n,t,r){n.min=r.min+t.min,n.max=n.min+Zt(t)}function H1(n,t,r){$f(n.x,t.x,r.x),$f(n.y,t.y,r.y)}function Pf(n,t,r){n.min=t.min-r.min,n.max=n.min+Zt(t)}function ha(n,t,r){Pf(n.x,t.x,r.x),Pf(n.y,t.y,r.y)}function W1(n,{min:t,max:r},a){return t!==void 0&&n<t?n=a?ot(t,n,a.min):Math.max(n,t):r!==void 0&&n>r&&(n=a?ot(r,n,a.max):Math.min(n,r)),n}function Tf(n,t,r){return{min:t!==void 0?n.min+t:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function K1(n,{top:t,left:r,bottom:a,right:c}){return{x:Tf(n.x,r,c),y:Tf(n.y,t,a)}}function Of(n,t){let r=t.min-n.min,a=t.max-n.max;return t.max-t.min<n.max-n.min&&([r,a]=[a,r]),{min:r,max:a}}function Y1(n,t){return{x:Of(n.x,t.x),y:Of(n.y,t.y)}}function Q1(n,t){let r=.5;const a=Zt(n),c=Zt(t);return c>a?r=si(t.min,t.max-a,n.min):a>c&&(r=si(n.min,n.max-c,t.min)),po(0,1,r)}function X1(n,t){const r={};return t.min!==void 0&&(r.min=t.min-n.min),t.max!==void 0&&(r.max=t.max-n.min),r}const Ld=.35;function J1(n=Ld){return n===!1?n=0:n===!0&&(n=Ld),{x:Lf(n,"left","right"),y:Lf(n,"top","bottom")}}function Lf(n,t,r){return{min:Rf(n,t),max:Rf(n,r)}}function Rf(n,t){return typeof n=="number"?n:n[t]||0}const Ff=()=>({translate:0,scale:1,origin:0,originPoint:0}),ei=()=>({x:Ff(),y:Ff()}),Df=()=>({min:0,max:0}),dt=()=>({x:Df(),y:Df()});function fn(n){return[n("x"),n("y")]}function r0({top:n,left:t,right:r,bottom:a}){return{x:{min:t,max:r},y:{min:n,max:a}}}function Z1({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function e2(n,t){if(!t)return n;const r=t({x:n.left,y:n.top}),a=t({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:a.y,right:a.x}}function dd(n){return n===void 0||n===1}function Rd({scale:n,scaleX:t,scaleY:r}){return!dd(n)||!dd(t)||!dd(r)}function cr(n){return Rd(n)||i0(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function i0(n){return Mf(n.x)||Mf(n.y)}function Mf(n){return n&&n!=="0%"}function nl(n,t,r){const a=n-r,c=t*a;return r+c}function If(n,t,r,a,c){return c!==void 0&&(n=nl(n,c,a)),nl(n,r,a)+t}function Fd(n,t=0,r=1,a,c){n.min=If(n.min,t,r,a,c),n.max=If(n.max,t,r,a,c)}function a0(n,{x:t,y:r}){Fd(n.x,t.translate,t.scale,t.originPoint),Fd(n.y,r.translate,r.scale,r.originPoint)}const Bf=.999999999999,Uf=1.0000000000001;function t2(n,t,r,a=!1){const c=r.length;if(!c)return;t.x=t.y=1;let p,u;for(let f=0;f<c;f++){p=r[f],u=p.projectionDelta;const{visualElement:g}=p.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&ni(n,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,a0(n,u)),a&&cr(p.latestValues)&&ni(n,p.latestValues))}t.x<Uf&&t.x>Bf&&(t.x=1),t.y<Uf&&t.y>Bf&&(t.y=1)}function ti(n,t){n.min=n.min+t,n.max=n.max+t}function Vf(n,t,r,a,c=.5){const p=ot(n.min,n.max,c);Fd(n,t,r,p,a)}function ni(n,t){Vf(n.x,t.x,t.scaleX,t.scale,t.originX),Vf(n.y,t.y,t.scaleY,t.scale,t.originY)}function s0(n,t){return r0(e2(n.getBoundingClientRect(),t))}function n2(n,t,r){const a=s0(n,r),{scroll:c}=t;return c&&(ti(a.x,c.offset.x),ti(a.y,c.offset.y)),a}const l0=({current:n})=>n?n.ownerDocument.defaultView:null,o2=new WeakMap;class r2{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=dt(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const c=y=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Na(y).point)},p=(y,b)=>{const{drag:v,dragPropagation:_,onDragStart:k}=this.getProps();if(v&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=R1(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),fn($=>{let S=this.getAxisMotionValue($).get()||0;if(Bn.test(S)){const{projection:T}=this.visualElement;if(T&&T.layout){const M=T.layout.layoutBox[$];M&&(S=Zt(M)*(parseFloat(S)/100))}}this.originPoint[$]=S}),k&&Qe.postRender(()=>k(y,b)),Cd(this.visualElement,"transform");const{animationState:z}=this.visualElement;z&&z.setActive("whileDrag",!0)},u=(y,b)=>{const{dragPropagation:v,dragDirectionLock:_,onDirectionLock:k,onDrag:z}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:$}=b;if(_&&this.currentDirection===null){this.currentDirection=i2($),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",b.point,$),this.updateAxis("y",b.point,$),this.visualElement.render(),z&&z(y,b)},f=(y,b)=>this.stop(y,b),g=()=>fn(y=>{var b;return this.getAnimationState(y)==="paused"&&((b=this.getAxisMotionValue(y).animation)===null||b===void 0?void 0:b.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new e0(t,{onSessionStart:c,onStart:p,onMove:u,onSessionEnd:f,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:l0(this.visualElement)})}stop(t,r){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:c}=r;this.startAnimation(c);const{onDragEnd:p}=this.getProps();p&&Qe.postRender(()=>p(t,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,a){const{drag:c}=this.getProps();if(!a||!Us(t,c,this.currentDirection))return;const p=this.getAxisMotionValue(t);let u=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(u=W1(u,this.constraints[t],this.elastic[t])),p.set(u)}resolveConstraints(){var t;const{dragConstraints:r,dragElastic:a}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,p=this.constraints;r&&Jr(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&c?this.constraints=K1(c.layoutBox,r):this.constraints=!1,this.elastic=J1(a),p!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&fn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=X1(c.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!Jr(t))return!1;const a=t.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const p=n2(a,c.root,this.visualElement.getTransformPagePoint());let u=Y1(c.layout.layoutBox,p);if(r){const f=r(Z1(u));this.hasMutatedConstraints=!!f,f&&(u=r0(f))}return u}startAnimation(t){const{drag:r,dragMomentum:a,dragElastic:c,dragTransition:p,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),g=this.constraints||{},h=fn(y=>{if(!Us(y,r,this.currentDirection))return;let b=g&&g[y]||{};u&&(b={min:0,max:0});const v=c?200:1e6,_=c?40:1e7,k={type:"inertia",velocity:a?t[y]:0,bounceStiffness:v,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...p,...b};return this.startAxisValueAnimation(y,k)});return Promise.all(h).then(f)}startAxisValueAnimation(t,r){const a=this.getAxisMotionValue(t);return Cd(this.visualElement,t),a.start(Su(t,a,0,r,this.visualElement,!1))}stopAnimation(){fn(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){fn(t=>{var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(t){const r=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),c=a[r];return c||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){fn(r=>{const{drag:a}=this.getProps();if(!Us(r,a,this.currentDirection))return;const{projection:c}=this.visualElement,p=this.getAxisMotionValue(r);if(c&&c.layout){const{min:u,max:f}=c.layout.layoutBox[r];p.set(t[r]-ot(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:a}=this.visualElement;if(!Jr(r)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};fn(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const g=f.get();c[u]=Q1({min:g,max:g},this.constraints[u])}});const{transformTemplate:p}=this.visualElement.getProps();this.visualElement.current.style.transform=p?p({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),fn(u=>{if(!Us(u,t,null))return;const f=this.getAxisMotionValue(u),{min:g,max:h}=this.constraints[u];f.set(ot(g,h,c[u]))})}addListeners(){if(!this.visualElement.current)return;o2.set(this.visualElement,this);const t=this.visualElement.current,r=fa(t,"pointerdown",g=>{const{drag:h,dragListener:y=!0}=this.getProps();h&&y&&this.start(g)}),a=()=>{const{dragConstraints:g}=this.getProps();Jr(g)&&g.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,p=c.addEventListener("measure",a);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Qe.read(a);const u=ka(window,"resize",()=>this.scalePositionWithinConstraints()),f=c.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:h})=>{this.isDragging&&h&&(fn(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=g[y].translate,b.set(b.get()+g[y].translate))}),this.visualElement.render())}));return()=>{u(),r(),p(),f&&f()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:p=!1,dragElastic:u=Ld,dragMomentum:f=!0}=t;return{...t,drag:r,dragDirectionLock:a,dragPropagation:c,dragConstraints:p,dragElastic:u,dragMomentum:f}}}function Us(n,t,r){return(t===!0||t===n)&&(r===null||r===n)}function i2(n,t=10){let r=null;return Math.abs(n.y)>t?r="y":Math.abs(n.x)>t&&(r="x"),r}class a2 extends qo{constructor(t){super(t),this.removeGroupControls=Jt,this.removeListeners=Jt,this.controls=new r2(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Jt}unmount(){this.removeGroupControls(),this.removeListeners()}}const qf=n=>(t,r)=>{n&&Qe.postRender(()=>n(t,r))};class s2 extends qo{constructor(){super(...arguments),this.removePointerDownListener=Jt}onPointerDown(t){this.session=new e0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:l0(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:qf(t),onStart:qf(r),onMove:a,onEnd:(p,u)=>{delete this.session,c&&Qe.postRender(()=>c(p,u))}}}mount(){this.removePointerDownListener=fa(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ws={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Gf(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const Zi={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(he.test(n))n=parseFloat(n);else return n;const r=Gf(n,t.target.x),a=Gf(n,t.target.y);return`${r}% ${a}%`}},l2={correct:(n,{treeScale:t,projectionDelta:r})=>{const a=n,c=Vo.parse(n);if(c.length>5)return a;const p=Vo.createTransformer(n),u=typeof c[0]!="number"?1:0,f=r.x.scale*t.x,g=r.y.scale*t.y;c[0+u]/=f,c[1+u]/=g;const h=ot(f,g,.5);return typeof c[2+u]=="number"&&(c[2+u]/=h),typeof c[3+u]=="number"&&(c[3+u]/=h),p(c)}};class c2 extends C.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:a,layoutId:c}=this.props,{projection:p}=t;Lb(d2),p&&(r.group&&r.group.add(p),a&&a.register&&c&&a.register(p),p.root.didUpdate(),p.addEventListener("animationComplete",()=>{this.safeToRemove()}),p.setOptions({...p.options,onExitComplete:()=>this.safeToRemove()})),Ws.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:a,drag:c,isPresent:p}=this.props,u=a.projection;return u&&(u.isPresent=p,c||t.layoutDependency!==r||r===void 0?u.willUpdate():this.safeToRemove(),t.isPresent!==p&&(p?u.promote():u.relegate()||Qe.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Zd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:a}=this.props,{projection:c}=t;c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function c0(n){const[t,r]=Wg(),a=C.useContext(Hd);return s.jsx(c2,{...n,layoutGroup:a,switchLayoutGroup:C.useContext(th),isPresent:t,safeToRemove:r})}const d2={borderRadius:{...Zi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Zi,borderTopRightRadius:Zi,borderBottomLeftRadius:Zi,borderBottomRightRadius:Zi,boxShadow:l2};function u2(n,t,r){const a=jt(n)?n:wa(n);return a.start(Su("",a,t,r)),a.animation}function p2(n){return n instanceof SVGElement&&n.tagName!=="svg"}const m2=(n,t)=>n.depth-t.depth;class f2{constructor(){this.children=[],this.isDirty=!1}add(t){du(this.children,t),this.isDirty=!0}remove(t){uu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(m2),this.isDirty=!1,this.children.forEach(t)}}function g2(n,t){const r=Un.now(),a=({timestamp:c})=>{const p=c-r;p>=t&&(Uo(a),n(p-t))};return Qe.read(a,!0),()=>Uo(a)}const d0=["TopLeft","TopRight","BottomLeft","BottomRight"],h2=d0.length,Hf=n=>typeof n=="string"?parseFloat(n):n,Wf=n=>typeof n=="number"||he.test(n);function y2(n,t,r,a,c,p){c?(n.opacity=ot(0,r.opacity!==void 0?r.opacity:1,x2(a)),n.opacityExit=ot(t.opacity!==void 0?t.opacity:1,0,b2(a))):p&&(n.opacity=ot(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,a));for(let u=0;u<h2;u++){const f=`border${d0[u]}Radius`;let g=Kf(t,f),h=Kf(r,f);if(g===void 0&&h===void 0)continue;g||(g=0),h||(h=0),g===0||h===0||Wf(g)===Wf(h)?(n[f]=Math.max(ot(Hf(g),Hf(h),a),0),(Bn.test(h)||Bn.test(g))&&(n[f]+="%")):n[f]=h}(t.rotate||r.rotate)&&(n.rotate=ot(t.rotate||0,r.rotate||0,a))}function Kf(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const x2=u0(0,.5,zh),b2=u0(.5,.95,Jt);function u0(n,t,r){return a=>a<n?0:a>t?1:r(si(n,t,a))}function Yf(n,t){n.min=t.min,n.max=t.max}function mn(n,t){Yf(n.x,t.x),Yf(n.y,t.y)}function Qf(n,t){n.translate=t.translate,n.scale=t.scale,n.originPoint=t.originPoint,n.origin=t.origin}function Xf(n,t,r,a,c){return n-=t,n=nl(n,1/r,a),c!==void 0&&(n=nl(n,1/c,a)),n}function v2(n,t=0,r=1,a=.5,c,p=n,u=n){if(Bn.test(t)&&(t=parseFloat(t),t=ot(u.min,u.max,t/100)-u.min),typeof t!="number")return;let f=ot(p.min,p.max,a);n===p&&(f-=t),n.min=Xf(n.min,t,r,f,c),n.max=Xf(n.max,t,r,f,c)}function Jf(n,t,[r,a,c],p,u){v2(n,t[r],t[a],t[c],t.scale,p,u)}const w2=["x","scaleX","originX"],_2=["y","scaleY","originY"];function Zf(n,t,r,a){Jf(n.x,t,w2,r?r.x:void 0,a?a.x:void 0),Jf(n.y,t,_2,r?r.y:void 0,a?a.y:void 0)}function eg(n){return n.translate===0&&n.scale===1}function p0(n){return eg(n.x)&&eg(n.y)}function tg(n,t){return n.min===t.min&&n.max===t.max}function k2(n,t){return tg(n.x,t.x)&&tg(n.y,t.y)}function ng(n,t){return Math.round(n.min)===Math.round(t.min)&&Math.round(n.max)===Math.round(t.max)}function m0(n,t){return ng(n.x,t.x)&&ng(n.y,t.y)}function og(n){return Zt(n.x)/Zt(n.y)}function rg(n,t){return n.translate===t.translate&&n.scale===t.scale&&n.originPoint===t.originPoint}class S2{constructor(){this.members=[]}add(t){du(this.members,t),t.scheduleRender()}remove(t){if(uu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(c=>t===c);if(r===0)return!1;let a;for(let c=r;c>=0;c--){const p=this.members[c];if(p.isPresent!==!1){a=p;break}}return a?(this.promote(a),!0):!1}promote(t,r){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,r&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:c}=t.options;c===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:a}=t;r.onExitComplete&&r.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function C2(n,t,r){let a="";const c=n.x.translate/t.x,p=n.y.translate/t.y,u=(r==null?void 0:r.z)||0;if((c||p||u)&&(a=`translate3d(${c}px, ${p}px, ${u}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),r){const{transformPerspective:h,rotate:y,rotateX:b,rotateY:v,skewX:_,skewY:k}=r;h&&(a=`perspective(${h}px) ${a}`),y&&(a+=`rotate(${y}deg) `),b&&(a+=`rotateX(${b}deg) `),v&&(a+=`rotateY(${v}deg) `),_&&(a+=`skewX(${_}deg) `),k&&(a+=`skewY(${k}deg) `)}const f=n.x.scale*t.x,g=n.y.scale*t.y;return(f!==1||g!==1)&&(a+=`scale(${f}, ${g})`),a||"none"}const dr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},sa=typeof window<"u"&&window.MotionDebug!==void 0,ud=["","X","Y","Z"],E2={visibility:"hidden"},ig=1e3;let z2=0;function pd(n,t,r,a){const{latestValues:c}=t;c[n]&&(r[n]=c[n],t.setStaticValue(n,0),a&&(a[n]=0))}function f0(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:t}=n.options;if(!t)return;const r=yh(t);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:p}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",Qe,!(c||p))}const{parent:a}=n;a&&!a.hasCheckedOptimisedAppear&&f0(a)}function g0({attachResizeListener:n,defaultParent:t,measureScroll:r,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(u={},f=t==null?void 0:t()){this.id=z2++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,sa&&(dr.totalNodes=dr.resolvedTargetDeltas=dr.recalculatedProjection=0),this.nodes.forEach(j2),this.nodes.forEach(L2),this.nodes.forEach(R2),this.nodes.forEach($2),sa&&window.MotionDebug.record(dr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new f2)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new pu),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const g=this.eventHandlers.get(u);g&&g.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=p2(u),this.instance=u;const{layoutId:g,layout:h,visualElement:y}=this.options;if(y&&!y.current&&y.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(h||g)&&(this.isLayoutDirty=!0),n){let b;const v=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=g2(v,250),Ws.hasAnimatedSinceResize&&(Ws.hasAnimatedSinceResize=!1,this.nodes.forEach(sg))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&y&&(g||h)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:v,hasRelativeTargetChanged:_,layout:k})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const z=this.options.transition||y.getDefaultTransition()||B2,{onLayoutAnimationStart:$,onLayoutAnimationComplete:S}=y.getProps(),T=!this.targetLayout||!m0(this.targetLayout,k)||_,M=!v&&_;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||M||v&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,M);const D={...cu(z,"layout"),onPlay:$,onComplete:S};(y.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D)}else v||sg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=k})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Uo(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(F2),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&f0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:f,layout:g}=this.options;if(f===void 0&&!g)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ag);return}this.isUpdating||this.nodes.forEach(T2),this.isUpdating=!1,this.nodes.forEach(O2),this.nodes.forEach(A2),this.nodes.forEach(N2),this.clearAllSnapshots();const f=Un.now();_t.delta=po(0,1e3/60,f-_t.timestamp),_t.timestamp=f,_t.isProcessing=!0,od.update.process(_t),od.preRender.process(_t),od.render.process(_t),_t.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Zd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(P2),this.sharedNodes.forEach(D2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=dt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f){const g=a(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:g,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!c)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!p0(this.projectionDelta),g=this.getTransformTemplate(),h=g?g(this.latestValues,""):void 0,y=h!==this.prevTransformTemplateValue;u&&(f||cr(this.latestValues)||y)&&(c(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let g=this.removeElementScroll(f);return u&&(g=this.removeTransform(g)),U2(g),{animationId:this.root.animationId,measuredBox:f,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:f}=this.options;if(!f)return dt();const g=f.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(V2))){const{scroll:y}=this.root;y&&(ti(g.x,y.offset.x),ti(g.y,y.offset.y))}return g}removeElementScroll(u){var f;const g=dt();if(mn(g,u),!((f=this.scroll)===null||f===void 0)&&f.wasRoot)return g;for(let h=0;h<this.path.length;h++){const y=this.path[h],{scroll:b,options:v}=y;y!==this.root&&b&&v.layoutScroll&&(b.wasRoot&&mn(g,u),ti(g.x,b.offset.x),ti(g.y,b.offset.y))}return g}applyTransform(u,f=!1){const g=dt();mn(g,u);for(let h=0;h<this.path.length;h++){const y=this.path[h];!f&&y.options.layoutScroll&&y.scroll&&y!==y.root&&ni(g,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),cr(y.latestValues)&&ni(g,y.latestValues)}return cr(this.latestValues)&&ni(g,this.latestValues),g}removeTransform(u){const f=dt();mn(f,u);for(let g=0;g<this.path.length;g++){const h=this.path[g];if(!h.instance||!cr(h.latestValues))continue;Rd(h.latestValues)&&h.updateSnapshot();const y=dt(),b=h.measurePageBox();mn(y,b),Zf(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,y)}return cr(this.latestValues)&&Zf(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==_t.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var f;const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==g;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:v}=this.options;if(!(!this.layout||!(b||v))){if(this.resolvedRelativeTargetAt=_t.timestamp,!this.targetDelta&&!this.relativeTarget){const _=this.getClosestProjectingParent();_&&_.layout&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=dt(),this.relativeTargetOrigin=dt(),ha(this.relativeTargetOrigin,this.layout.layoutBox,_.layout.layoutBox),mn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=dt(),this.targetWithTransforms=dt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),H1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):mn(this.target,this.layout.layoutBox),a0(this.target,this.targetDelta)):mn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const _=this.getClosestProjectingParent();_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=dt(),this.relativeTargetOrigin=dt(),ha(this.relativeTargetOrigin,this.target,_.target),mn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}sa&&dr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Rd(this.parent.latestValues)||i0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const f=this.getLead(),g=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===_t.timestamp&&(h=!1),h)return;const{layout:y,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||b))return;mn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,_=this.treeScale.y;t2(this.layoutCorrected,this.treeScale,this.path,g),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=dt());const{target:k}=f;if(!k){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Qf(this.prevProjectionDelta.x,this.projectionDelta.x),Qf(this.prevProjectionDelta.y,this.projectionDelta.y)),ga(this.projectionDelta,this.layoutCorrected,k,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==_||!rg(this.projectionDelta.x,this.prevProjectionDelta.x)||!rg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",k)),sa&&dr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)===null||f===void 0||f.scheduleRender(),u){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ei(),this.projectionDelta=ei(),this.projectionDeltaWithTransform=ei()}setAnimationOrigin(u,f=!1){const g=this.snapshot,h=g?g.latestValues:{},y={...this.latestValues},b=ei();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const v=dt(),_=g?g.source:void 0,k=this.layout?this.layout.source:void 0,z=_!==k,$=this.getStack(),S=!$||$.members.length<=1,T=!!(z&&!S&&this.options.crossfade===!0&&!this.path.some(I2));this.animationProgress=0;let M;this.mixTargetDelta=D=>{const F=D/1e3;lg(b.x,u.x,F),lg(b.y,u.y,F),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ha(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),M2(this.relativeTarget,this.relativeTargetOrigin,v,F),M&&k2(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=dt()),mn(M,this.relativeTarget)),z&&(this.animationValues=y,y2(y,h,this.latestValues,F,T,S)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Uo(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Qe.update(()=>{Ws.hasAnimatedSinceResize=!0,this.currentAnimation=u2(0,ig,{...u,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ig),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:g,layout:h,latestValues:y}=u;if(!(!f||!g||!h)){if(this!==u&&this.layout&&h&&h0(this.options.animationType,this.layout.layoutBox,h.layoutBox)){g=this.target||dt();const b=Zt(this.layout.layoutBox.x);g.x.min=u.target.x.min,g.x.max=g.x.min+b;const v=Zt(this.layout.layoutBox.y);g.y.min=u.target.y.min,g.y.max=g.y.min+v}mn(f,g),ni(f,y),ga(this.projectionDeltaWithTransform,this.layoutCorrected,f,y)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new S2),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:f}=this.options;return f?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:f}=this.options;return f?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:g}={}){const h=this.getStack();h&&h.promote(this,g),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:g}=u;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(f=!0),!f)return;const h={};g.z&&pd("z",u,h,this.animationValues);for(let y=0;y<ud.length;y++)pd(`rotate${ud[y]}`,u,h,this.animationValues),pd(`skew${ud[y]}`,u,h,this.animationValues);u.render();for(const y in h)u.setStaticValue(y,h[y]),this.animationValues&&(this.animationValues[y]=h[y]);u.scheduleRender()}getProjectionStyles(u){var f,g;if(!this.instance||this.isSVG)return;if(!this.isVisible)return E2;const h={visibility:""},y=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Gs(u==null?void 0:u.pointerEvents)||"",h.transform=y?y(this.latestValues,""):"none",h;const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){const z={};return this.options.layoutId&&(z.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,z.pointerEvents=Gs(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!cr(this.latestValues)&&(z.transform=y?y({},""):"none",this.hasProjected=!1),z}const v=b.animationValues||b.latestValues;this.applyTransformsToTarget(),h.transform=C2(this.projectionDeltaWithTransform,this.treeScale,v),y&&(h.transform=y(v,h.transform));const{x:_,y:k}=this.projectionDelta;h.transformOrigin=`${_.origin*100}% ${k.origin*100}% 0`,b.animationValues?h.opacity=b===this?(g=(f=v.opacity)!==null&&f!==void 0?f:this.latestValues.opacity)!==null&&g!==void 0?g:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=b===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const z in Xs){if(v[z]===void 0)continue;const{correct:$,applyTo:S}=Xs[z],T=h.transform==="none"?v[z]:$(v[z],b);if(S){const M=S.length;for(let D=0;D<M;D++)h[S[D]]=T}else h[z]=T}return this.options.layoutId&&(h.pointerEvents=b===this?Gs(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)===null||f===void 0?void 0:f.stop()}),this.root.nodes.forEach(ag),this.root.sharedNodes.clear()}}}function A2(n){n.updateLayout()}function N2(n){var t;const r=((t=n.resumeFrom)===null||t===void 0?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=n.layout,{animationType:p}=n.options,u=r.source!==n.layout.source;p==="size"?fn(b=>{const v=u?r.measuredBox[b]:r.layoutBox[b],_=Zt(v);v.min=a[b].min,v.max=v.min+_}):h0(p,r.layoutBox,a)&&fn(b=>{const v=u?r.measuredBox[b]:r.layoutBox[b],_=Zt(a[b]);v.max=v.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+_)});const f=ei();ga(f,a,r.layoutBox);const g=ei();u?ga(g,n.applyTransform(c,!0),r.measuredBox):ga(g,a,r.layoutBox);const h=!p0(f);let y=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:v,layout:_}=b;if(v&&_){const k=dt();ha(k,r.layoutBox,v.layoutBox);const z=dt();ha(z,a,_.layoutBox),m0(k,z)||(y=!0),b.options.layoutRoot&&(n.relativeTarget=z,n.relativeTargetOrigin=k,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:a,snapshot:r,delta:g,layoutDelta:f,hasLayoutChanged:h,hasRelativeTargetChanged:y})}else if(n.isLead()){const{onExitComplete:a}=n.options;a&&a()}n.options.transition=void 0}function j2(n){sa&&dr.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function $2(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function P2(n){n.clearSnapshot()}function ag(n){n.clearMeasurements()}function T2(n){n.isLayoutDirty=!1}function O2(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function sg(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function L2(n){n.resolveTargetDelta()}function R2(n){n.calcProjection()}function F2(n){n.resetSkewAndRotation()}function D2(n){n.removeLeadSnapshot()}function lg(n,t,r){n.translate=ot(t.translate,0,r),n.scale=ot(t.scale,1,r),n.origin=t.origin,n.originPoint=t.originPoint}function cg(n,t,r,a){n.min=ot(t.min,r.min,a),n.max=ot(t.max,r.max,a)}function M2(n,t,r,a){cg(n.x,t.x,r.x,a),cg(n.y,t.y,r.y,a)}function I2(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const B2={duration:.45,ease:[.4,0,.1,1]},dg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),ug=dg("applewebkit/")&&!dg("chrome/")?Math.round:Jt;function pg(n){n.min=ug(n.min),n.max=ug(n.max)}function U2(n){pg(n.x),pg(n.y)}function h0(n,t,r){return n==="position"||n==="preserve-aspect"&&!G1(og(t),og(r),.2)}function V2(n){var t;return n!==n.root&&((t=n.scroll)===null||t===void 0?void 0:t.wasRoot)}const q2=g0({attachResizeListener:(n,t)=>ka(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),md={current:void 0},y0=g0({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!md.current){const n=new q2({});n.mount(window),n.setOptions({layoutScroll:!0}),md.current=n}return md.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),G2={pan:{Feature:s2},drag:{Feature:a2,ProjectionNode:y0,MeasureLayout:c0}};function H2(n,t,r){var a;if(n instanceof Element)return[n];if(typeof n=="string"){let c=document;const p=(a=void 0)!==null&&a!==void 0?a:c.querySelectorAll(n);return p?Array.from(p):[]}return Array.from(n)}function x0(n,t){const r=H2(n),a=new AbortController,c={passive:!0,...t,signal:a.signal};return[r,c,()=>a.abort()]}function mg(n){return t=>{t.pointerType==="touch"||Zh()||n(t)}}function W2(n,t,r={}){const[a,c,p]=x0(n,r),u=mg(f=>{const{target:g}=f,h=t(f);if(typeof h!="function"||!g)return;const y=mg(b=>{h(b),g.removeEventListener("pointerleave",y)});g.addEventListener("pointerleave",y,c)});return a.forEach(f=>{f.addEventListener("pointerenter",u,c)}),p}function fg(n,t,r){const{props:a}=n;n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,p=a[c];p&&Qe.postRender(()=>p(t,Na(t)))}class K2 extends qo{mount(){const{current:t}=this.node;t&&(this.unmount=W2(t,r=>(fg(this.node,r,"Start"),a=>fg(this.node,a,"End"))))}unmount(){}}class Y2 extends qo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Aa(ka(this.node.current,"focus",()=>this.onFocus()),ka(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const b0=(n,t)=>t?n===t?!0:b0(n,t.parentElement):!1,Q2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function X2(n){return Q2.has(n.tagName)||n.tabIndex!==-1}const la=new WeakSet;function gg(n){return t=>{t.key==="Enter"&&n(t)}}function fd(n,t){n.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const J2=(n,t)=>{const r=n.currentTarget;if(!r)return;const a=gg(()=>{if(la.has(r))return;fd(r,"down");const c=gg(()=>{fd(r,"up")}),p=()=>fd(r,"cancel");r.addEventListener("keyup",c,t),r.addEventListener("blur",p,t)});r.addEventListener("keydown",a,t),r.addEventListener("blur",()=>r.removeEventListener("keydown",a),t)};function hg(n){return Cu(n)&&!Zh()}function Z2(n,t,r={}){const[a,c,p]=x0(n,r),u=f=>{const g=f.currentTarget;if(!hg(f)||la.has(g))return;la.add(g);const h=t(f),y=(_,k)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",v),!(!hg(_)||!la.has(g))&&(la.delete(g),typeof h=="function"&&h(_,{success:k}))},b=_=>{y(_,r.useGlobalTarget||b0(g,_.target))},v=_=>{y(_,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",v,c)};return a.forEach(f=>{!X2(f)&&f.getAttribute("tabindex")===null&&(f.tabIndex=0),(r.useGlobalTarget?window:f).addEventListener("pointerdown",u,c),f.addEventListener("focus",h=>J2(h,c),c)}),p}function yg(n,t,r){const{props:a}=n;n.animationState&&a.whileTap&&n.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),p=a[c];p&&Qe.postRender(()=>p(t,Na(t)))}class ew extends qo{mount(){const{current:t}=this.node;t&&(this.unmount=Z2(t,r=>(yg(this.node,r,"Start"),(a,{success:c})=>yg(this.node,a,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Dd=new WeakMap,gd=new WeakMap,tw=n=>{const t=Dd.get(n.target);t&&t(n)},nw=n=>{n.forEach(tw)};function ow({root:n,...t}){const r=n||document;gd.has(r)||gd.set(r,{});const a=gd.get(r),c=JSON.stringify(t);return a[c]||(a[c]=new IntersectionObserver(nw,{root:n,...t})),a[c]}function rw(n,t,r){const a=ow(t);return Dd.set(n,r),a.observe(n),()=>{Dd.delete(n),a.unobserve(n)}}const iw={some:0,all:1};class aw extends qo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:a,amount:c="some",once:p}=t,u={root:r?r.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:iw[c]},f=g=>{const{isIntersecting:h}=g;if(this.isInView===h||(this.isInView=h,p&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),v=h?y:b;v&&v(g)};return rw(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(sw(t,r))&&this.startObserver()}unmount(){}}function sw({viewport:n={}},{viewport:t={}}={}){return r=>n[r]!==t[r]}const lw={inView:{Feature:aw},tap:{Feature:ew},focus:{Feature:Y2},hover:{Feature:K2}},cw={layout:{ProjectionNode:y0,MeasureLayout:c0}},Md={current:null},v0={current:!1};function dw(){if(v0.current=!0,!!Yd)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>Md.current=n.matches;n.addListener(t),t()}else Md.current=!1}const uw=[...Bh,Nt,Vo],pw=n=>uw.find(Ih(n)),xg=new WeakMap;function mw(n,t,r){for(const a in t){const c=t[a],p=r[a];if(jt(c))n.addValue(a,c);else if(jt(p))n.addValue(a,wa(c,{owner:n}));else if(p!==c)if(n.hasValue(a)){const u=n.getValue(a);u.liveStyle===!0?u.jump(c):u.hasAnimated||u.set(c)}else{const u=n.getStaticValue(a);n.addValue(a,wa(u!==void 0?u:c,{owner:n}))}}for(const a in r)t[a]===void 0&&n.removeValue(a);return t}const bg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class fw{scrapeMotionValuesFromProps(t,r,a){return{}}constructor({parent:t,props:r,presenceContext:a,reducedMotionConfig:c,blockInitialAnimation:p,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=wu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Un.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Qe.render(this.render,!1,!0))};const{latestValues:g,renderState:h,onUpdate:y}=u;this.onUpdate=y,this.latestValues=g,this.baseTarget={...g},this.initialValues=r.initial?{...g}:{},this.renderState=h,this.parent=t,this.props=r,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=c,this.options=f,this.blockInitialAnimation=!!p,this.isControllingVariants=dl(r),this.isVariantNode=Zg(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:b,...v}=this.scrapeMotionValuesFromProps(r,{},this);for(const _ in v){const k=v[_];g[_]!==void 0&&jt(k)&&k.set(g[_],!1)}}mount(t){this.current=t,xg.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,a)=>this.bindToMotionValue(a,r)),v0.current||dw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Md.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){xg.delete(this.current),this.projection&&this.projection.unmount(),Uo(this.notifyUpdate),Uo(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(t,r){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=hr.has(t),c=r.on("change",f=>{this.latestValues[t]=f,this.props.onUpdate&&Qe.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),p=r.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,t,r)),this.valueSubscriptions.set(t,()=>{c(),p(),u&&u(),r.owner&&r.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ai){const r=ai[t];if(!r)continue;const{isEnabled:a,Feature:c}=r;if(!this.features[t]&&c&&a(this.props)&&(this.features[t]=new c(this)),this.features[t]){const p=this.features[t];p.isMounted?p.update():(p.mount(),p.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):dt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let a=0;a<bg.length;a++){const c=bg[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const p="on"+c,u=t[p];u&&(this.propEventSubscriptions[c]=this.on(c,u))}this.prevMotionValues=mw(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){const a=this.values.get(t);r!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,r),this.values.set(t,r),this.latestValues[t]=r.get())}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&r!==void 0&&(a=wa(r===null?void 0:r,{owner:this}),this.addValue(t,a)),a}readValue(t,r){var a;let c=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(a=this.getBaseTargetFromProps(this.props,t))!==null&&a!==void 0?a:this.readValueFromInstance(this.current,t,this.options);return c!=null&&(typeof c=="string"&&(Dh(c)||Nh(c))?c=parseFloat(c):!pw(c)&&Vo.test(r)&&(c=Lh(t,r)),this.setBaseTarget(t,jt(c)?c.get():c)),jt(c)?c.get():c}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var r;const{initial:a}=this.props;let c;if(typeof a=="string"||typeof a=="object"){const u=tu(this.props,a,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);u&&(c=u[t])}if(a&&c!==void 0)return c;const p=this.getBaseTargetFromProps(this.props,t);return p!==void 0&&!jt(p)?p:this.initialValues[t]!==void 0&&c===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new pu),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class w0 extends fw{constructor(){super(...arguments),this.KeyframeResolver=Uh}sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:a}){delete r[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;jt(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function gw(n){return window.getComputedStyle(n)}class hw extends w0{constructor(){super(...arguments),this.type="html",this.renderInstance=lh}readValueFromInstance(t,r){if(hr.has(r)){const a=vu(r);return a&&a.default||0}else{const a=gw(t),c=(ih(r)?a.getPropertyValue(r):a[r])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(t,{transformPagePoint:r}){return s0(t,r)}build(t,r,a){ru(t,r,a.transformTemplate)}scrapeMotionValuesFromProps(t,r,a){return lu(t,r,a)}}class yw extends w0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=dt}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(hr.has(r)){const a=vu(r);return a&&a.default||0}return r=ch.has(r)?r:Jd(r),t.getAttribute(r)}scrapeMotionValuesFromProps(t,r,a){return ph(t,r,a)}build(t,r,a){iu(t,r,this.isSVGTag,a.transformTemplate)}renderInstance(t,r,a,c){dh(t,r,a,c)}mount(t){this.isSVGTag=su(t.tagName),super.mount(t)}}const xw=(n,t)=>eu(n)?new yw(t):new hw(t,{allowProjection:n!==C.Fragment}),bw=qb({...L1,...lw,...G2,...cw},xw),qe=ib(bw),vw="unrealvillestudio-hub",ww="Drafts",vg="main";function _w(n){return n==="html"?"html":n==="liquid"?"liquid":"txt"}function kw(){return`draft_${Date.now()}_${Math.random().toString(36).slice(2,7)}`}function Sw(n){return btoa(unescape(encodeURIComponent(n)))}async function wg(n,t,r,a){const c=`https://api.github.com/repos/${vw}/${ww}/contents/${t}`;let p;try{const h=await fetch(c+`?ref=${vg}`,{headers:{Authorization:`Bearer ${n}`,Accept:"application/vnd.github+json"}});h.ok&&(p=(await h.json()).sha)}catch{}const u={message:a,content:Sw(r),branch:vg};p&&(u.sha=p);const f=await fetch(c,{method:"PUT",headers:{Authorization:`Bearer ${n}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify(u)});if(!f.ok){const h=await f.text();throw new Error(`GitHub PUT failed ${f.status}: ${h}`)}const g=await f.json();return{sha:g.content.sha,html_url:g.content.html_url}}async function Cw(n){const{token:t,brandId:r,brandName:a,packId:c,packLabel:p,module:u,outputMode:f,themeId:g,aggro:h,language:y,platform:b,content:v,sections:_}=n,k=kw(),z=new Date,$=new Date(z.getTime()+10080*60*1e3),S=`${z.getFullYear()}-${String(z.getMonth()+1).padStart(2,"0")}`,T=_w(f),M=z.toISOString().replace(/[:.]/g,"-").slice(0,19),D=`drafts/${r}/${S}/${M}_${c}_${f}.${T}`,F=`drafts/${r}/${S}/meta_${M}_${c}.json`,X=await wg(t,D,v,`draft(${r}): ${p} [${f}] — ${k}`),W={draftId:k,brandId:r,brandName:a,packId:c,packLabel:p,module:u,outputMode:f,themeId:g,aggro:h,language:y,platform:b,status:"pending_approval",createdAt:z.toISOString(),expiresAt:$.toISOString(),contentPath:D,sections:_,generatedBy:"WebLab v2.3"},Y=await wg(t,F,JSON.stringify(W,null,2),`meta(${r}): ${p} — ${k}`);return{draftId:k,contentUrl:X.html_url,metaUrl:Y.html_url,expiresAt:$.toISOString()}}const _0={unrealilleStudio:{id:"unrealilleStudio",name:"Unreal>ille Studio",shortName:"UNRLVL",owner:"Sam",color:"#FFAB00",emoji:"⚡",description:"Agencia inhouse — marketing, publicidad y estrategia",market:"Miami, FL",channels:["web","instagram","linkedin"]},patriciaOsorioPersonal:{id:"patriciaOsorioPersonal",name:"Patricia Osorio Personal",shortName:"PO Personal",owner:"Patricia Osorio",color:"#EC4899",emoji:"👩",description:"Marca personal de Patricia Osorio",market:"Miami, FL",channels:["instagram","tiktok","youtube"]},patriciaOsorioComunidad:{id:"patriciaOsorioComunidad",name:"Patricia Osorio Comunidad",shortName:"PO Comunidad",owner:"Patricia Osorio",color:"#A855F7",emoji:"🌐",description:"Comunidad y contenido educativo de PO",market:"Miami, FL",channels:["instagram","youtube","email"]},patriciaOsorioVizosSalon:{id:"patriciaOsorioVizosSalon",name:"Vizos Salon",shortName:"Vizos",owner:"Patricia Osorio",color:"#F59E0B",emoji:"✂️",description:"Salón de belleza — servicios capilares premium",market:"Miami, FL",channels:["instagram","whatsapp","google"]},diamondDetails:{id:"diamondDetails",name:"Diamond Details",shortName:"Diamond",owner:"Sam",color:"#3B82F6",emoji:"💎",description:"Detailing de autos premium",market:"Miami, FL",channels:["instagram","google","whatsapp"]},d7Herbal:{id:"d7Herbal",name:"D7 Herbal",shortName:"D7",owner:"Sam",color:"#22C55E",emoji:"🌿",description:"Gel bebible natural — Asaí, Espirulina, Fruto del Monje",market:"Miami, FL",channels:["instagram","tiktok","shopify"]},vivoseMask:{id:"vivoseMask",name:"Vivose Mask",shortName:"Vivose",owner:"Sam",color:"#F472B6",emoji:"🌸",description:"Mascarillas y skincare natural",market:"Miami, FL",channels:["instagram","tiktok","shopify"]},vizosCosmetics:{id:"vizosCosmetics",name:"Vizos Cosmetics",shortName:"Vizos Co.",owner:"Sam",color:"#6366F1",emoji:"💄",description:"Cosméticos y maquillaje",market:"Miami, FL",channels:["instagram","tiktok","shopify"]},neuroneCosmetics:{id:"neuroneCosmetics",name:"Neurone Cosmética",shortName:"Neurone",owner:"Patricia Osorio",color:"#0076A8",secondaryColor:"#000000",emoji:"💙",description:"Distribución exclusiva South & Central Miami — Neurocosmética + Nano Tribología. B2C + Portal Pro B2B para profesionales.",market:"South & Central Miami, FL",channels:["shopify","instagram","whatsapp","b2b-portal"]},forumPhs:{id:"forumPhs",name:"ForumPHs",shortName:"FPHs",owner:"Sam",color:"#5C3472",secondaryColor:"#C4622D",emoji:"🟣",description:"Administración de Propiedad Horizontal · Panamá · Desde 2015",market:"Panamá",channels:["web"]}},Mn=Object.values(_0),Ew=n=>_0[n],oi={neuroneCosmetics:{defaultPlatform:"shopify",extraContext:"Distribución exclusiva South & Central Miami. Tecnología Neurocosmética y Nano Tribología capilar. Catálogo de 142 SKUs: colorimetría, tratamientos, cuidado capilar profesional. Modelo comercial dual: tienda B2C para consumidor final + Portal Pro B2B exclusivo para profesionales (coloristas, propietarios de salones). Única distribuidora exclusiva en South & Central Miami — diferenciador clave frente a cualquier competidor. Paleta de marca: negro obsidian + navy #0076A8 + blanco. Tono: autoridad técnica accesible, Spanglish Miami.",productAudience:"Mujeres latinas 30–55 años Miami interesadas en colorimetría premium y cuidado capilar de alta gama. Canal B2B: coloristas independientes y propietarios de salones en South & Central Miami.",productCompliance:"Cosmética capilar registrada. SIN claims médicos ni curativos. USAR: ayuda a, favorece, contribuye a, potencia, optimiza, nutre, fortalece. PROHIBIDO: trata, cura, elimina enfermedades, patologías o condiciones capilares médicas.",complianceBlock:`── COMPLIANCE NEURONE — GUARDARRAÍL OBLIGATORIO FDA/FTC ──────────────────────
CLASIFICACIÓN: Cosméticos capilares registrados (21 CFR 701). NO son medicamentos.
JURISDICCIÓN: Florida / US — estándares FTC (verdad en publicidad) + FDA (claims cosméticos).

VERBOS APROBADOS (únicos permitidos para describir beneficios):
  ayuda a • favorece • contribuye a • potencia • optimiza • nutre • fortalece
  hidrata • suaviza • mejora la apariencia de • aporta brillo a • protege

PROHIBIDO ABSOLUTO — activa rechazo de plataforma y riesgo legal:
  ✗ "trata" • "cura" • "elimina" enfermedades o condiciones médicas capilares
  ✗ Claims sobre alopecia, psoriasis, dermatitis seborreica, caspa patológica
  ✗ "regenera el folículo piloso" o cualquier claim de acción biológica interna
  ✗ Antes/después con claims de crecimiento capilar sin estudio clínico
  ✗ "aprobado por la FDA" o "clínicamente probado" sin documentación válida

PRODUCTOS DE RIESGO CRÍTICO — NO GENERAR COPY DE VENTA:
  ✗ Capissen Shampoo — posible drug claim (anticaída clínico)
  ✗ Capissen Lotion — posible drug claim
  ✗ Derma Roller — posible medical device (FDA)
  → shopify_visibility: pending — NO activar hasta attorney review

PRODUCTOS DE RIESGO ALTO — copy con precaución extra:
  Depura Shampoo ("detox"), Pro Salon line (Fanzi Mix, Plattina White, Total Violet Ink,
  Neuroxide, Density Proff, Neurone Color, Pro Filus)
  → B2B only. Evitar claims de resultado sin soporte técnico verificable.

TESTIMONIOS Y PRUEBA SOCIAL:
  • Solo testimonios reales y verificables. No fabricar resultados específicos.
  • Si se usan resultados ("mi cabello creció X cm"), requieren disclaimer: "Resultados individuales pueden variar."

DISCLAIMER FDA — incluir en landing pages y product pages cuando aplique:
  "Este producto no ha sido evaluado por la FDA. No está destinado a diagnosticar,
  tratar, curar o prevenir ninguna enfermedad o condición médica."
────────────────────────────────────────────────────────────────────────────────`,productCatalogContext:`── CATÁLOGO NEURONE S&C FLORIDA — 39 BP_PRODUCT activos ────────────────────────
Nota: catálogo completo en repo BluePrints/products/. Este es el resumen estructurado para copy.

CATEGORÍA 1 — CUIDADO Y TRATAMIENTO (B2C, riesgo compliance: low)
  • Humit Shampoo — hidratación profunda, control del frizz
  • Humit Mask — mascarilla nutrición intensa, cabello seco y poroso
  • Kerasin HB Shampoo — keratina hidrolizada, suavidad y brillo
  • Dyfensor SF Shampoo — fortalecimiento, cabello debilitado
  • Dyfensor Serum — sérum protector anti-daño
  • Velvety Control — control frizz y suavidad duradera

CATEGORÍA 2 — STYLING Y ACABADOS (B2C, riesgo: low)
  • Geometry Gel — fijación fuerte, definición de rizos
  • Geometry Cream — fijación media, acabado natural
  • Controller — crema de control y peinado
  • Molding Toner — tónico moldeador flexible
  • Resplander Shine — brillo intenso, acabado liso

CATEGORÍA 3 — COLORIMETRÍA CONSUMIDOR (B2C/B2B, riesgo: low)
  • DY Fazza — coloración permanente profesional
  • DY Fazza Color — gama ampliada de tonos

CATEGORÍA 4 — DETOX / LIMPIEZA PROFUNDA (B2C, riesgo: high — precaución en copy)
  • Depura Shampoo — limpieza profunda. EVITAR "detox capilar" — usar "limpieza profunda"

CATEGORÍA 5 — PRO SALON LINE (B2B exclusivo, riesgo: high, shopifyVisibility: pending)
  • Fanzi Mix — mezcla profesional para servicios de salón
  • Plattina White — decoloración profesional
  • Total Violet Ink — matizador violeta intenso
  • Neuroxide — oxidante profesional
  • Density Proff — tratamiento densidad profesional
  • Neurone Color — coloración profesional full-coverage
  • Pro Filus — alisado profesional
  → COPY: solo para Portal Pro B2B. No generar copy B2C para estos productos.

CATEGORÍA 6 — CRÍTICOS — SIN COPY ACTIVO (shopifyVisibility: pending / attorney)
  • Capissen Shampoo — NO generar copy
  • Capissen Lotion — NO generar copy
  • Derma Roller — NO generar copy

IMÁGENES DISPONIBLES:
  • standard (fondo blanco): todos los 39 productos — usar para tienda Shopify y Portal Pro
  • dark/campaign (fondo negro estudio): solo 8 productos disponibles:
    Kerasin HB Shampoo, Capissen Shampoo*, Dyfensor Serum, Humit Shampoo,
    DY Fazza, DY Fazza Color, Dyfensor SF Shampoo, Humit Mask
    (*Capissen: imagen dark disponible pero producto sin copy activo)
  ⚠️ Pendiente confirmar con PO si imágenes dark son uso libre para distribuidor.
────────────────────────────────────────────────────────────────────────────────`},patriciaOsorioVizosSalon:{defaultPlatform:"wordpress",extraContext:'Vizos Salón — salón de belleza premium en South Miami (local 12955 South Dixie Hwy). Servicios: corte y color capilar, tratamientos (línea Neurone Cosmética), maquillaje profesional, nail bar. Propietaria Patricia Osorio, especialista en colorimetría con más de 20 años. Instalaciones modernas: espejo Hollywood, zona lounge con butacas azul navy, barra de café. Ambiente íntimo, profesional y acogedor. Clientela latina principalmente. Tono: experta local, cercana, práctica — "Esto es lo que funciona en la silla".',productAudience:"Mujeres latinas 25–55 años South Miami. Buscan servicios capilares y de belleza premium en ambiente de confianza con profesionales experimentados."},patriciaOsorioPersonal:{defaultPlatform:"wordpress",extraContext:'Marca personal de Patricia Osorio — empresaria multimarca Miami. Distribuidora exclusiva Neurone Cosmética South & Central Miami. Propietaria Vizos Salón. Socia D7 Herbal España. Más de 20 años de experiencia independiente en belleza y negocios. Voz de liderazgo femenino latino en Miami. Conecta todas sus marcas desde perspectiva de fundadora auténtica. Tono: directa, sin postureo, desde el camino recorrido — "Lo construí. Aquí está."',productAudience:"Mujeres latinas emprendedoras y profesionales 30–55 años. Comunidad hispana Miami y Florida."},patriciaOsorioComunidad:{defaultPlatform:"wordpress",extraContext:'Comunidad de mujeres emprendedoras y líderes fundada por Patricia Osorio en Miami. Contenido: emprendimiento femenino, liderazgo, negocios, crecimiento personal desde experiencia real. Tono inspirador pero práctico y honesto — sin promesas vacías, desde camino recorrido. "Si yo pude, tú puedes — y te digo exactamente cómo."',productAudience:"Mujeres latinas emprendedoras y profesionales 25–55 años. Comunidad hispana Miami y Florida.",productCompliance:"SIN promesas de ingresos garantizados ni resultados económicos específicos. Testimonios deben ser reales y verificables. No usar claims de enriquecimiento rápido."},d7Herbal:{defaultPlatform:"shopify",extraContext:"D7 Herbal — gel bebible natural premium. Ingredientes: Asaí (antioxidante), Espirulina (proteínas + micronutrientes), Fruto del Monje (edulcorante natural sin azúcar). Importado de Colombia. Suplemento de bienestar dirigido a latinos en Miami y Florida. Fórmula 100% natural. Mercado wellness latinoamericano en crecimiento. Tono: natural, saludable, auténtico latino.",productAudience:"Adultos latinos 25–55 años interesados en bienestar natural, salud integral y suplementación sin artificiales. Miami y Florida.",productCompliance:'Suplemento alimenticio — SIN claims de tratamiento, diagnóstico o cura médica. USAR: apoya, contribuye a, ayuda a mantener, favorece, potencia el bienestar. INCLUIR disclaimer FDA: "Este producto no ha sido evaluado por la FDA. No está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad." No mencionar efectos sobre enfermedades específicas.',complianceBlock:`── COMPLIANCE D7 HERBAL — GUARDARRAÍL OBLIGATORIO FDA/FTC ──────────────────────
CLASIFICACIÓN: Suplemento alimenticio / Dietary Supplement (DSHEA, 21 CFR 101.36).
JURISDICCIÓN: Florida / US — estándares FTC (verdad en publicidad) + FDA (DSHEA).

VERBOS APROBADOS (únicos permitidos para describir beneficios):
  apoya • contribuye a • ayuda a mantener • favorece • potencia • nutre
  aporta energía a • promueve el bienestar • complementa

PROHIBIDO ABSOLUTO:
  ✗ Claims de tratamiento, diagnóstico, cura o prevención de enfermedades
  ✗ Mencionar diabetes, obesidad, presión arterial, colesterol, cáncer u otras condiciones médicas
  ✗ "Clínicamente probado", "aprobado por la FDA", "cura", "elimina", "trata"
  ✗ Resultados de pérdida de peso con cifras específicas sin estudio clínico registrado
  ✗ Testimonios que atribuyan curación de enfermedades al producto

DISCLAIMER FDA — OBLIGATORIO en toda landing page y product page:
  "Este producto no ha sido evaluado por la FDA. No está destinado a diagnosticar,
  tratar, curar o prevenir ninguna enfermedad o condición médica."
────────────────────────────────────────────────────────────────────────────────`},diamondDetails:{defaultPlatform:"wordpress",extraContext:"Diamond Details — detailing de autos premium en Miami. Servicios: recubrimiento cerámico, paint protection film (PPF), detailing interior/exterior de alta gama, corrección de pintura. Trabajo artesanal y perfeccionista. Especialistas en vehículos de lujo y deportivos. Tono: experto, técnico, premium — para clientes que saben la diferencia.",productAudience:"Hombres y mujeres 28–55 años Miami. Propietarios de vehículos premium/lujo (BMW, Mercedes, Porsche, Tesla, exóticos). Valoran la calidad perfecta y el cuidado a largo plazo de su inversión."},vivoseMask:{defaultPlatform:"shopify",extraContext:"Vivose Mask — mascarillas y skincare natural para el mercado latinoamericano en Miami. Productos de cuidado facial con ingredientes naturales y botánicos. E-commerce Shopify. Tono: natural, consciente, femenino y moderno.",productAudience:"Mujeres latinas 20–45 años interesadas en skincare natural, clean beauty y rutinas de cuidado facial.",productCompliance:"Cosmética tópica. SIN claims médicos o dermatológicos clínicos. USAR: hidrata, nutre, suaviza, ilumina, revitaliza, mejora la apariencia de. PROHIBIDO: trata, cura condiciones de piel como acné, rosacea, eczema.",complianceBlock:`── COMPLIANCE VIVOSE MASK — GUARDARRAÍL OBLIGATORIO FDA/FTC ─────────────────────
CLASIFICACIÓN: Cosmético tópico (21 CFR 700). NO es medicamento ni device.
JURISDICCIÓN: Florida / US — estándares FTC + FDA cosmetic claims.

VERBOS APROBADOS (únicos permitidos):
  hidrata • nutre • suaviza • ilumina • revitaliza • mejora la apariencia de
  aporta luminosidad • protege • limpia • equilibra

PROHIBIDO ABSOLUTO:
  ✗ "trata", "cura" o referencias a acné, rosácea, eczema, psoriasis, dermatitis
  ✗ Claims de acción biológica interna ("regenera células", "estimula colágeno" sin estudio)
  ✗ "Dermatológicamente probado" o "clínicamente testado" sin documentación válida
  ✗ Resultados de reducción de arrugas con % específico sin estudio
  ✗ Comparaciones con medicamentos o tratamientos médicos estéticos
────────────────────────────────────────────────────────────────────────────────`},vizosCosmetics:{defaultPlatform:"shopify",extraContext:"Vizos Cosmetics — línea de cosméticos y maquillaje color para el mercado latino Miami. Productos: labiales, sombras, bases, iluminadores. E-commerce Shopify. Tono: bold, glam, latina — celebra la belleza diversa.",productAudience:"Mujeres latinas 18–45 años Miami. Amantes del maquillaje, el color y la expresión a través de la belleza."},forumPhs:{defaultPlatform:"wordpress",extraContext:'ForumPHs (FPHs) — administración de propiedad horizontal, Panamá, fundada 2015. Portafolio: ~1.500 unidades, 7 propiedades. GM y representante legal: Ivette Flores (Abogada). Web: forumphs.com. Marco legal: Ley 284 de 2022 (Propiedad Horizontal, Panamá). POSICIONAMIENTO: ForumPHs no vende "administración de edificios" — vende gestión patrimonial sistémica. Diferenciador: estándar único de calidad para todos los clientes, pricing value-based, SLAs auditables. Slogan invariable: "Construiste tu patrimonio. Nosotros le construimos un sistema." La segunda parte ("Nosotros le construimos un sistema.") lleva énfasis visual en color Terra (#C4622D). SERVICIOS CORE: gestión administrativa, servicio jurídico, gestión contable, Actas de Asamblea, Document Factory, reportes SLA mensuales, gestión de morosidad. SLA: Urgente (inmediato), Prioritario (horas), Regular (días hábiles). AUDIENCIA: Juntas Directivas y propietarios de Propiedades Horizontales en Panamá. NOMBRE ANTERIOR: PHAS — no usar como identificador activo, solo como contexto histórico.',productAudience:"Juntas Directivas y propietarios de Propiedades Horizontales en Panamá. Perfil: tomadores de decisión con activos patrimoniales inmobiliarios, interesados en gestión profesional, transparencia financiera y cumplimiento legal.",productCompliance:"Marco legal: Ley No. 284 de 14 de febrero de 2022. Territorio: Panamá. Ivette Flores es la única GM activa y firmante oficial. Roberto González ya no forma parte de la empresa — no mencionar como representante.",complianceBlock:`── REGLAS DE MARCA FORUMPHS ─────────────────────────────────────────────
NOMBRE: Siempre "ForumPHs" — capital F, PH en caps, s minúscula.
SIGLA: FPHs. EXCEPCIÓN: "FORUMPHS" solo en Cinzel (labels, tags, eyebrow-caps).

SLOGAN INVARIABLE (no acortar, no parafrasear):
  "Construiste tu patrimonio. Nosotros le construimos un sistema."
  — Parte 1: voz del propietario (tono atenuado)
  — Parte 2: promesa ForumPHs (énfasis en Terra #C4622D)

PALETA AMATISTA CARBON:
  Amatista (#5C3472) · Amatista Dark (#3A1F4A) · Amatista Light (#EAD9F5)
  Terra (#C4622D) · Carbon (#1C2233) · Carbon Dark (#0E1018)
  Ink (#1A1612) · Stone (#6B6460) · Parchment (#F0EDE8)

TIPOGRAFÍA: EB Garamond (display/slogan) · Cormorant Garamond (editorial) · Cinzel (labels) · DM Sans (body/UI)

PROHIBIDO:
  ✗ Usar colores fuera de la paleta Amatista Carbon
  ✗ Acortar o parafrasear el slogan
  ✗ Referir a Roberto González como representante activo
  ✗ Usar posicionamiento "PHAS" o "OS of your PH" en materiales nuevos
────────────────────────────────────────────────────────────────────────`},unrealilleStudio:{defaultPlatform:"wordpress",extraContext:"Unreal>ille Studio — agencia inhouse de marketing, publicidad y estrategia digital del ecosistema UNRLVL. Especializada en marcas latinas en Miami. No es agencia pública en esta fase — operación inhouse exclusiva. Servicios: marketing digital, estrategia de contenido, e-commerce, publicidad pagada, producción creativa.",productAudience:"Ecosistema interno UNRLVL: marcas propias y marcas de familia/asociados."}},k0={neuroneCosmetics:{schemaVersion:"BP_BRAND_1.1",displayName:"Neurone South & Central Florida",tagline:"La ciencia capilar que Miami necesitaba.",palettePrompt:"Paleta Neurone: Negro obsidian #000000 (dominante), Azul Pantone 7546 #0076A8 (acento técnico / CTA), Blanco #FAFAFA (espacio / respiro). Líneas de producto: Restore #C27D5B terracota, Scalp #FAFAFA, Moisture #0076A8, Styling #3F3E3F, Pro Salon #003A70 navy profundo, Color Rescue #41273B burdeos.",typographyPrompt:"Tipografías Neurone: PT Sans Narrow (cuerpo, tablas, datos técnicos) + Montserrat (headlines, CTAs, labels). Headlines: weight 800, letter-spacing -0.02em. Body: weight 400-500, line-height 1.65.",voiceB2C:'Voz B2C Neurone SCF: Autoridad técnica accesible. Spanglish Miami natural — inglés para términos técnicos, español para cercanía emocional. Tono directo, específico, sin hedging. Educativa pero nunca condescendiente. "La ciencia trabaja para ti — te explicamos cómo."',voiceB2B:'Voz B2B Portal Pro: Colega de negocio, no vendedor. Respeta la experiencia del profesional. Datos primero: márgenes, exclusividad territorial, soporte técnico. "Esto es lo que te da ventaja en la silla. Los números lo respaldan."',rulesInherited:["Logotipo Neurone — tipografía, casing y proporción exacta del logo global","Claims de producto aprobados por Neurone global (neurocosmética, nano tribología)","Nomenclatura oficial de líneas: Restore, Moisture, Styling, Scalp, Color Rescue, Pro Salon","Paleta de colores primaria: negro + #0076A8 + blanco"],rulesOwned:["Voz editorial local — tono, Spanglish Miami, calidez de PO como distribuidora",'Slogan territorial: "La ciencia capilar que Miami necesitaba."',"Énfasis en distribución exclusiva South & Central Miami como diferenciador",'Arquitectura dual B2C / Portal Pro — entrada "Soy profesional" siempre visible',"Fotografía: editorial warm Miami, mujeres latinas reales, cabello con textura auténtica"],status:"active",sourceFile:"BluePrints/brands/BP_BRAND_NeuroneSCF_v1.0.json"}};function S0(n){const t=k0[n];if(!t)return"";const r=[`── BP_BRAND: ${t.displayName} (${t.schemaVersion}) ──`,`Tagline: "${t.tagline}"`,"","PALETA Y TIPOGRAFÍA:",t.palettePrompt,t.typographyPrompt,"","VOZ EDITORIAL B2C:",t.voiceB2C];return t.voiceB2B&&r.push("","VOZ EDITORIAL B2B / PRO:",t.voiceB2B),t.rulesInherited.length&&(r.push("","REGLAS HEREDADAS (marca global — no modificar):"),t.rulesInherited.forEach(a=>r.push(`  • ${a}`))),t.rulesOwned.length&&(r.push("","REGLAS PROPIAS (distribuidor / operador):"),t.rulesOwned.forEach(a=>r.push(`  • ${a}`))),r.push("── FIN BP_BRAND ──"),r.join(`
`)}function zw(n){return n in k0}const ol={hero:{id:"hero",label:"Hero",description:"Titular principal, subtítulo y CTA primario",wordCount:60,required:!0,platforms:["both"]},about:{id:"about",label:"Sobre nosotros",description:"Historia, misión y propuesta de valor",wordCount:200,required:!1,platforms:["both"]},services:{id:"services",label:"Servicios",description:"Lista de servicios con descripción breve",wordCount:300,required:!1,platforms:["wordpress"]},features:{id:"features",label:"Características",description:"Puntos diferenciadores del producto o servicio",wordCount:200,required:!1,platforms:["both"]},testimonials:{id:"testimonials",label:"Testimonios",description:"3–5 testimonios redactados en formato real",wordCount:250,required:!1,platforms:["both"]},faq:{id:"faq",label:"FAQ",description:"5–8 preguntas frecuentes con respuestas",wordCount:400,required:!1,platforms:["both"]},cta:{id:"cta",label:"CTA Final",description:"Sección de cierre con llamada a la acción",wordCount:80,required:!0,platforms:["both"]},contact:{id:"contact",label:"Contacto",description:"Texto de sección de contacto y formulario",wordCount:80,required:!1,platforms:["wordpress"]},pricing:{id:"pricing",label:"Precios",description:"Tabla o descripción de precios y planes",wordCount:200,required:!1,platforms:["both"]},team:{id:"team",label:"Equipo",description:"Bios cortas del equipo o fundador",wordCount:200,required:!1,platforms:["wordpress"]},gallery:{id:"gallery",label:"Galería / Portafolio",description:"Texto de contexto para galería de trabajos",wordCount:100,required:!1,platforms:["both"]},blog_preview:{id:"blog_preview",label:"Blog Preview",description:"Intro a sección de blog o recursos",wordCount:80,required:!1,platforms:["wordpress"]}},ya={web_corporate:{id:"web_corporate",label:"Web Corporativa",module:"web",description:"Sitio completo para marca o negocio. Hero + About + Services + CTA + Contact.",sections:["hero","about","services","testimonials","faq","cta","contact"],estimatedWords:1400,outputFormat:"html"},web_personal_brand:{id:"web_personal_brand",label:"Marca Personal",module:"web",description:"Web para marca personal. Hero + Bio + Oferta + Testimonios + Contacto.",sections:["hero","about","services","testimonials","cta","contact"],estimatedWords:1100,outputFormat:"html"},web_salon_detailing:{id:"web_salon_detailing",label:"Salón / Detailing",module:"web",description:"Web para servicios locales. Hero + Servicios + Galería + Testimonios + CTA.",sections:["hero","services","gallery","testimonials","faq","cta","contact"],estimatedWords:1200,outputFormat:"html"},landing_lead:{id:"landing_lead",label:"Landing Lead Capture",module:"landing",description:"Landing page enfocada en captura de email o lead. Copy completo y CTA.",sections:["hero","features","testimonials","faq","cta"],estimatedWords:700,outputFormat:"html"},landing_product_sale:{id:"landing_product_sale",label:"Landing Venta de Producto",module:"landing",description:"Landing de conversión directa para un producto. Features + Prueba social + CTA fuerte.",sections:["hero","features","pricing","testimonials","faq","cta"],estimatedWords:900,outputFormat:"html"},landing_appointment:{id:"landing_appointment",label:"Landing Agendamiento",module:"landing",description:"Landing para agendar cita o consulta. Salones, consultoras, servicios.",sections:["hero","services","testimonials","faq","cta"],estimatedWords:700,outputFormat:"html"},ecom_product_listing:{id:"ecom_product_listing",label:"Product Listing",module:"ecommerce",description:"Descripción completa de producto para Shopify. Título SEO + cuerpo + bullet benefits.",sections:["features","faq"],estimatedWords:500,outputFormat:"structured"},ecom_collection:{id:"ecom_collection",label:"Collection Page",module:"ecommerce",description:"Copy de página de colección. Intro + beneficios + CTA.",sections:["hero","features","cta"],estimatedWords:350,outputFormat:"structured"},ecom_homepage:{id:"ecom_homepage",label:"Homepage Tienda",module:"ecommerce",description:"Homepage completa de tienda Shopify. Hero + Categorías + Propuesta + Testimonios.",sections:["hero","features","testimonials","cta"],estimatedWords:650,outputFormat:"html"},ecom_product_page:{id:"ecom_product_page",label:"Product Page",module:"ecommerce",description:"Página de producto Shopify completa. Título SEO + descripción + beneficios + uso + FAQ.",sections:["hero","features","faq","cta"],estimatedWords:700,outputFormat:"structured"},ecom_about:{id:"ecom_about",label:"About / Historia de Marca",module:"ecommerce",description:"Página Nuestra Historia para tienda. Origen, valores, diferenciadores.",sections:["about","team"],estimatedWords:450,outputFormat:"html"}},Vs={web:Object.values(ya).filter(n=>n.module==="web"),landing:Object.values(ya).filter(n=>n.module==="landing"),ecommerce:Object.values(ya).filter(n=>n.module==="ecommerce")},Bo={copy:`
[HUMANIZE — COPY]
AUTENTICIDAD DE VOZ:
- Escribe como habla una persona real, no como un documento corporativo.
- Usa contracciones y coloquialismos naturales del mercado objetivo.
- Varía el ritmo: alterna frases cortas con frases más largas. No todas las frases tienen la misma cadencia.
- Usa puntuación expresiva cuando corresponde: puntos suspensivos para pausa, em-dash para énfasis, signos de exclamación solo cuando hay emoción real.
- Primera persona cuando sea posible. "Nosotros lo usamos" en vez de "Los usuarios utilizan".
PROHIBIDO (tells de AI):
- "En conclusión", "Es importante destacar", "Ciertamente", "Sin duda alguna", "En el dinámico mundo de"
- Listas de exactamente 3 puntos con el mismo largo. Listas de características en formato bullet cuando el copy debería fluir.
- Frases que empiezan con "Nuestro producto/servicio es..."
- Adjetivos vacíos: innovador, revolucionario, transformador, robusto, sinérgico.
- Párrafos perfectamente simétricos en longitud.
NATURALIDAD:
- Si algo tiene una desventaja real que el lector ya conoce, reconócela brevemente. Aumenta credibilidad.
- El CTA puede ser indirecto a veces. "Cuando estés listo, estamos aquí" es más humano que "¡Compra ahora!".
- Usa humor sutil si el tono de marca lo permite. No fuerces la seriedad.
`.trim(),image:`
[HUMANIZE — IMAGE / AVATAR]
PIEL Y RASGOS:
- Piel con textura real: poros visibles en primer plano, variación tonal sutil, ningún área uniformemente lisa.
- Asimetría facial natural: ninguna persona tiene el rostro perfectamente simétrico. Aplica micro-variaciones.
- Imperfecciones honestas: líneas de expresión donde corresponde por edad, marcas de sol leves en zonas de exposición.
- Ojos con catchlights naturales (no perfectamente centrados), venas sutiles en esclerótica si el primer plano es extremo.
CABELLO:
- Flyaways y mechones sueltos en la dirección del viento o movimiento.
- Variación de volumen: la raíz no tiene el mismo grosor que las puntas.
- Brillo en puntos de luz reales, no aplicado uniformemente.
EXPRESIÓN Y POSE:
- Micro-expresiones: el 0.1s antes y después de una sonrisa plena, no la sonrisa perfecta congelada.
- Pose con peso: el cuerpo cede a la gravedad. Hombros ligeramente asimétricos.
- Contacto visual no siempre directo al lente. Un 20% de tomas con mirada levemente descentrada o pensativa.
- Manos con postura natural: dedos ligeramente curvados en reposo, no extendidos perfectamente.
ROPA Y ENTORNO:
- Ropa con caída real: arrugas en codos, axilas, cintura donde el cuerpo las genera.
- Interacción con el entorno: cabello moviéndose con la brisa, sombras de objetos reales.
- Fondo con profundidad: elementos detrás del sujeto ligeramente fuera de foco, no perfectamente limpios.
PROHIBIDO:
- Piel de plástico o cera. Piel uniformemente lisa.
- Simetría facial perfecta.
- Poses de stock: brazos cruzados perfectos, sonrisa de dentífico congelada.
- Iluminación de estudio sin sombras naturales cuando el contexto es lifestyle o exterior.
- Ropa sin arrugas en poses donde las habría.
`.trim(),video:`
[HUMANIZE — VIDEO / MOTION]
MOVIMIENTO DE CÁMARA:
- Handheld implica micro-vibración orgánica, no movimiento de gimbal perfecto. 
- Dolly con leve aceleración al inicio y desaceleración al final, no lineal puro.
- El encuadre puede tener leve recomposición espontánea como si el camarógrafo ajustara.
PERSONAJES EN FRAME:
- Micro-movimientos entre tomas: una respiración visible en el pecho, un parpadeo, un ajuste sutil de postura.
- Ritmo de parpadeo natural: no sincronizado, aprox. 1 parpadeo cada 4-6 segundos.
- Gestos que acompañan la narrativa: la mano que se mueve antes de que la voz enfatice.
- Eyeline: no siempre directo al lente. En conversación, la mirada puede ir al interlocutor fuera de frame.
- Entre frases: micro-pausa con expresión de "estoy pensando qué sigue", no cara neutral congelada.
COMPOSICIÓN:
- Regla de tercios pero con intención: el sujeto no siempre centrado perfectamente.
- Elementos en primer plano ocasionales que enmarcan la escena (rama, borde de objeto).
- Profundidad de campo con transición suave, no corte duro entre nítido y fuera de foco.
CONTINUIDAD:
- Variación de ángulo entre cortes: al menos 30° de diferencia para evitar jump-cut antinatural.
- Iluminación que cambia levemente entre tomas del mismo espacio (nube que pasa, reflexión cambiante).
PROHIBIDO:
- Estabilización perfecta en contexto handheld/UGC.
- Personajes inmóviles como maniquíes entre líneas de diálogo.
- Encuadres de stock perfectamente centrados en todos los planos.
`.trim(),voice:`
[HUMANIZE — VOICE / AUDIO]
RESPIRACIÓN Y RITMO:
- Pausas de respiración naturales antes de frases largas y después de signos de puntuación.
- Micro-hesitaciones controladas (100-150ms) en transiciones de idea, como cuando el hablante recuerda el siguiente punto.
- Velocidad variable: más rápido en información secundaria, más lento en el mensaje clave.
ÉNFASIS Y EMOCIÓN:
- Coloración emocional genuina: la voz sube levemente en el hook, se asienta en el desarrollo, cierra con convicción.
- Énfasis prosódico en palabras clave, no en todas las palabras.
- Sonrisa audible en frases de cierre cuando el tono de marca lo permite.
IMPERFECCIONES CONTROLADAS:
- Leve variación de pitch entre frases (±5% natural, no monotonal robótico).
- Micro-textura en consonantes explosivas (p, t, k) — naturaleza del habla humana.
- Si el estilo es conversacional: alguna contracción de sílabas naturales del idioma.
PROHIBIDO:
- Cadencia uniforme de texto a voz sin variación.
- Pausas mecánicas de exactamente la misma duración.
- Énfasis en todas las frases por igual (todo importante = nada importante).
- Velocidad constante de inicio a fin.
`.trim(),web:`
[HUMANIZE — WEB ASSETS]
FOTOGRAFÍA E IMAGEN:
- Candid sobre staged cuando sea posible: personas en acción real, no posando.
- Luz natural imperfecta es preferible a iluminación de estudio uniforme para marcas lifestyle.
- Profundidad de escena: elementos de contexto real en el fondo (no fondos blancos infinitos salvo e-commerce de producto).
- Escala humana: manos, objetos del día a día en frame que dan proporción.
COPY EN WEB:
- Headlines conversacionales, no declaraciones corporativas.
- Párrafos cortos: máximo 3-4 líneas. El eye-scan en web es rápido.
- Segunda persona directa: "tú" o "usted" según la marca, no "los clientes" o "los usuarios".
- Microcopy de UI con personalidad: botones que dicen algo más que "Enviar" o "Comprar".
LAYOUT Y COMPOSICIÓN:
- Espaciado que respira: no llenar todos los espacios en blanco.
- Jerarquía tipográfica clara pero no rígida — variación de peso y tamaño con intención.
- Elementos asimétricos deliberados que rompen la retícula cuando hay algo importante que destacar.
TONO GENERAL:
- La marca tiene personalidad, no solo información. Cada sección web refleja el carácter de la marca.
- Errores honestos reconocidos cuando aplica (FAQ, política de devoluciones) en tono humano, no legal.
PROHIBIDO:
- Fotos de stock de personas mirando a cámara con sonrisa perfecta en entornos clínicamente limpios.
- Copy corporativo en tercera persona impersonal.
- UI microcopy genérico ("Submit", "Learn More", "Click Here").
- Grids perfectamente uniformes cuando la jerarquía de contenido requiere variación.
`.trim()},Aw=[{brandId:"neuroneCosmetics",copy:`${Bo.copy}
NEURONECOSMÉTICA ESPECÍFICO:
- Tono científico-accesible: usa terminología técnica real pero explícala en la siguiente frase.
- Bilingüe natural ES/EN en mercado Miami: Spanglish controlado, no forzado.
- Compliance: nunca "cura", "trata", "elimina" — usa "ayuda a", "contribuye a", "favorece".
- B2C: emocional + técnico. B2B: técnico + ROI. Mismo producto, voz diferente.`},{brandId:"patriciaOsorioVizosSalon",copy:`${Bo.copy}
VIZOS SALÓN ESPECÍFICO:
- Voz de autoridad cálida: Patricia habla como experta que también es tu amiga de confianza.
- Spanglish natural Miami: mezcla ES/EN como habla el mercado objetivo.
- Referencias a experiencia real de salón: el olor, el tacto, la transformación visible.`,image:`${Bo.image}
VIZOS VISUAL ESPECÍFICO:
- Entorno de salón real con imperfecciones de trabajo: toallas, productos abiertos, herramientas en uso.
- Patricia con manos activas: siempre haciendo algo, no posando estática.
- Clientas con expresiones de reacción auténtica (no posar post-transformación).`},{brandId:"diamondDetails",copy:`${Bo.copy}
DIAMOND DETAILS ESPECÍFICO:
- Lenguaje de taller premium: técnico sin ser pedante, apasionado sin ser fanático.
- El auto no es un producto — es la extensión de la identidad del cliente. Trátalo así.
- Antes/después siempre implícito. El cliente visualiza su coche, no un coche genérico.`,image:`${Bo.image}
DIAMOND DETAILS VISUAL ESPECÍFICO:
- Reflejos en carrocería que muestren el entorno real del taller (no fondos perfectamente limpios).
- Manos del técnico en frame: guantes con rastros de trabajo real.
- Ángulos bajos que dan drama y escala al vehículo.`},{brandId:"d7Herbal",copy:`${Bo.copy}
D7HERBAL ESPECÍFICO:
- Proximidad botánica: ingredientes con nombre real y origen (Açaí de Brasil, Espirulina de cultivo controlado).
- Compliance estricto: cosmético solo. Cero lenguaje médico. "Favorece", "contribuye", "ayuda a mantener".
- Tono wellness: cálido, natural, sin exageración.`},{brandId:"vizosCosmetics",copy:`${Bo.copy}
VIZOS COSMETICS ESPECÍFICO:
- Registro profesional de laboratorio: el cliente es el estilista profesional, no el consumidor final.
- Hair Healing Systems como marco conceptual central.
- Evidencia técnica antes que beneficio emocional (al revés que en B2C).`}];function C0(n,t,r){var a;if(t){const c=Aw.find(p=>p.brandId===t);if((a=c==null?void 0:c[n])!=null&&a.trim())return c[n].trim()}return Bo[n]}const Nw="claude-sonnet-4-6",jw=`
════════════════════════════════════════════════════════════════
  ⚠️  AVISO AL OPERADOR — AGGRO OUTPUT ACTIVO
════════════════════════════════════════════════════════════════
  Este output usa persuasión de alta presión y está diseñado
  para maximizar conversión, no para pasar filtros editoriales.

  ANTES DE PUBLICAR, revisa estos puntos:

  › Meta Ads / TikTok Ads
    Urgencia extrema y escasez pueden ser rechazados si no son
    verificables con evidencia en la cuenta publicitaria.

  › Google Ads
    Claims de resultados sin disclaimer ("desde la primera
    aplicación") activan revisión manual. Añade un asterisco
    con fuente si el claim es medible.

  › Shopify / Políticas de plataforma
    Comparaciones con competencia implícita son generalmente
    aceptadas. Comparaciones directas con nombre de marca
    requieren evidencia o pueden generar disputas.

  › Recomendación operacional
    Usar este output como punto de partida. Una reducción del
    20–30% en intensidad suele ser suficiente para paid media
    sin sacrificar conversión orgánica.

  El copy que sigue es deliberadamente incómodo. Ese es el punto.
════════════════════════════════════════════════════════════════

REGLAS AGGRO ABSOLUTAS — aplica todas sin excepción ni moderación:

PSICOLOGÍA DE PÉRDIDA (no de ganancia):
- El lector ya está perdiendo dinero, clientes, oportunidades. No potencialmente. Ahora mismo.
- Cada día sin actuar es un día que tu competencia te está comiendo el mercado.
- No vendas el producto. Vende el costo de no tenerlo.

DOLOR PRIMERO, SOLUCIÓN DESPUÉS, CONSECUENCIA AL FINAL:
- Sección 1: abre con el dolor más profundo, sin suavizarlo.
- Sección 2: la solución existe, es específica, está disponible hoy.
- Sección 3: si no actúas ahora, la ventana se cierra. Y eso tiene un precio.

COPY QUE INCOMODA (deliberadamente):
- Haz que el lector se sienta incómodo quedándose donde está.
- La comodidad es el enemigo. El status quo es la amenaza.
- "Seguir como estás" debe sonar peor que cualquier riesgo de comprar.

URGENCIA REAL, NO FABRICADA:
- Si hay exclusividad: úsala como escasez real ("solo nosotros, solo aquí").
- Si hay stock limitado: nómbralo con número si existe.
- Si hay timing: "cada semana que esperas es una semana que tu competencia lleva ventaja".
- PROHIBIDO urgencia genérica ("¡Oferta por tiempo limitado!"). Siempre específica.

CERO HEDGING — AFIRMACIÓN ABSOLUTA:
- Elimina: podría, quizás, tal vez, esperamos, creemos, intentamos, buscamos.
- Reemplaza con: es, funciona, entrega, garantiza, cambia, transforma.
- Si hay garantía real: ponla en el CTA. Si no hay, no la inventes.

CTAs QUE NO DAN OPCIÓN DE SALIDA ELEGANTE:
- Verbo fuerte + beneficio inmediato + qué pasa si no actúas.
- Ej: "Accede hoy — o deja que tu competencia se te adelante."
- Ej: "Reserva tu cupo ahora. Cuando se llene, se llena."
- Ej: "Ver catálogo — 142 productos que tus clientes ya están buscando."

PRUEBA SOCIAL COMO ARMA:
- No "nuestros clientes están satisfechos".
- Sí: "Los coloristas top de South Miami ya usan esto. ¿Tú todavía no?"
- Convierte la prueba social en presión social implícita.

HEADLINES QUE DUELEN O PROVOCAN:
- Formato A — Dolor: "Tu cabello merece ciencia real. No otro producto que promete y no entrega."
- Formato B — Provocación: "¿Sigues comprando al por mayor en Amazon? Tus clientes lo notan."
- Formato C — Contraste: "Tus competidores ya tienen acceso. Tú todavía estás esperando."
- NUNCA: headlines aspiracionales genéricos ("Descubre la diferencia", "Eleva tu experiencia").

DISEÑO VISUAL AGGRO — EL LAYOUT TAMBIÉN DEBE INCOMODAR:
- Hero: fondo oscuro (#0a0a0a o #0d0d0d), texto blanco. El contraste es intencional.
  No hay calidez en la apertura. El lector entra en territorio serio.
- Jerarquía rota: usa una tarjeta de feature o bloque que sea visualmente distinto
  (fondo negro, acento de color, tipografía más grande) para romper el ritmo del grid.
- Color como señal de urgencia: el azul Neurone (#0076A8) se reserva para datos,
  exclusividad y CTAs. El negro (#0a0a0a) para afirmaciones absolutas.
  El rojo solo para micro-urgencia real (stock, plazo, consecuencia).
- Tipografía con tensión: font-weight 800-900 en headlines. Letter-spacing negativo (-0.02em a -0.03em).
  El texto debe ocupar el espacio con autoridad, no con elegancia.
- CTAs que parecen inevitables: botón oscuro, full-width en mobile, sin border-radius suave.
  Que parezca una decisión, no una invitación.
- Separadores como cortes: usa líneas de 2-3px en acento de color, no dividers decorativos.
  El espacio entre secciones debe sentirse como una pausa antes del siguiente golpe.
- Evitar: fondos blancos puros en hero, padding excesivo que suavice el tono,
  border-radius altos (>6px), sombras decorativas que den sensación de ligereza.
`.trim();function $w(n,t,r,a){return n==="html"?`FORMATO DE SALIDA: HTML semántico con CSS inline.
REGLAS ESTRICTAS:
- Devuelve SOLO el bloque HTML de esta sección, sin <!DOCTYPE>, sin <html>, sin <head>, sin <body>.
- Usa clases descriptivas (hero-section, hero-title, hero-subtitle, cta-button, etc.)
- CSS inline en style="" para colores, tipografía y espaciado base.
- PALETA: Si el contexto incluye "color dominante: #XXXXXX" de un producto, usa ese hex como color de acento (botones, bordes, highlights). Si no, usa paleta neutra: fondo blanco o #f9f9f9, texto #1a1a1a, acento #000.
- Responsive: las secciones raíz (<section>) deben tener width:100% sin ningún max-width. Shopify ya gestiona el ancho del layout. Solo los contenedores INTERNOS de texto (divs de copy, no la sección) pueden tener max-width para legibilidad.
- Botones con cursor:pointer y padding generoso.
- CTAs tipo enlace de texto (no botón): NO uses white-space:nowrap. El sistema aplicará wrapping automático en mobile.
- CTAs tipo botón: usa display:block con width:100% en mobile (max-width:400px en desktop) para evitar overflow.
- Cuando haya DOS botones en fila (ej: "Ver catálogo" + "Soy profesional"): envuélvelos en un div con display:flex; flex-wrap:wrap; gap:12px. Cada botón con flex:1; min-width:140px. NUNCA uses width fijo ni white-space:nowrap en estos casos.
- Para grids de product cards en collection pages: USA display:flex; flex-wrap:wrap; gap:20px en el contenedor. Cada card con width:calc(33.33% - 14px); min-width:260px. Esto garantiza que las cards fluyen correctamente en mobile sin cortes. NO uses CSS grid con grid-template-columns inline.
- CRÍTICO: NUNCA uses grid-template-columns en style inline. NUNCA uses position:absolute con valores negativos. Ambos rompen el layout en mobile. Si necesitas múltiples columnas usa SIEMPRE flex-wrap.
- NO incluyas <script>, NO incluyas frameworks externos.
- La sección debe ser copy-paste directo en un bloque "Custom HTML" de ${a==="shopify"?"Shopify":"WordPress"}.
- ⛔ PROHIBIDO incluir después del HTML: notas de producción, tablas markdown, comentarios sobre decisiones de diseño, explicaciones, resúmenes ni ningún texto fuera del bloque HTML. El output termina con la etiqueta de cierre de la sección (</section> o </div>). NADA más.

SISTEMA DE GRIDS RESPONSIVE — OBLIGATORIO:
El documento final ya incluye este CSS base. DEBES usarlo en lugar de inline grid-template-columns:
  .rg-2       → 2 columnas iguales (1fr 1fr)
  .rg-3       → 3 columnas iguales (repeat(3, 1fr))
  .rg-auto    → columnas automáticas responsive (auto-fit, minmax 300px)
  .rg-contact → 2 columnas contacto (1fr 1fr)
  .rg-contact-aggro → 2 columnas asimétricas (1fr 1.6fr)
  A 860px o menos, TODAS colapsan a 1 columna automáticamente.

PROHIBICIONES ABSOLUTAS — violan el responsive del documento:
- ❌ NUNCA uses grid-template-columns con múltiples columnas como inline style. Usa las clases .rg-* siempre.
- ❌ NUNCA uses position: absolute con valores negativos (left: -Npx, right: -Npx, top: -Npx) en elementos decorativos.
- ❌ NUNCA uses width fijo > 100% o min-width > 100% en ningún elemento.
- ❌ NUNCA añadas elementos decorativos con dimensiones que excedan el viewport (ej: width: 400px en posición absoluta).
- ✅ SÍ puedes usar position: relative en contenedores y position: absolute SOLO para badges/labels internos con top/right positivos pequeños (max 30px desde el borde del contenedor padre).

IMÁGENES DE BLUEPRINT:
- Cuando el contexto incluya image_filename de un producto, úsalo como: <img src="{{ 'FILENAME' | asset_url }}" alt="NOMBRE_PRODUCTO" ...> (Shopify) o <img src="[IMAGE:FILENAME]" alt="..."> (WP).
- Para BP_PERSON: coloca el <img> en secciones hero/about con class="person-bp-img".
- Para BP_LOCATION: coloca el <img> en secciones gallery/hero como background o decorativo.
- Para BP_PRODUCT: coloca el <img> inmediatamente junto al nombre/descripción del producto.
- Si el precio del contexto es "0.00": escribe <span class="product-price">$10.00</span> — los precios con "0.00" son placeholders, muéstralos como $10.00 hasta confirmar precio real.
EJEMPLO DE ESTRUCTURA:
<section class="hero-section" style="padding:80px 20px;text-align:center;background:#fff;">
  <h1 class="hero-title" style="font-size:2.5rem;font-weight:700;color:#1a1a1a;margin-bottom:16px;">...</h1>
  <p class="hero-subtitle" style="font-size:1.1rem;color:#555;margin-bottom:32px;">...</p>
  <a href="#" class="cta-button" style="display:inline-block;padding:16px 32px;background:#1a1a1a;color:#fff;text-decoration:none;border-radius:4px;font-weight:600;">...</a>
</section>`:n==="liquid"?`FORMATO DE SALIDA: Sección Shopify Liquid nativa.
REGLAS ESTRICTAS:
- Devuelve SOLO el contenido del archivo .liquid completo para esta sección.
- Incluye el schema JSON al final dentro de {% schema %}...{% endschema %}.
- Usa variables Liquid: {{ section.settings.heading }}, {{ section.settings.text }}, etc.
- El schema debe incluir settings editables para: heading, subheading, body_text, cta_label, cta_url, background_color, text_color.
- CSS debe ir dentro de <style> al inicio del archivo.
- El archivo debe ser autosuficiente: funciona al subirlo como nueva sección en el theme editor de Shopify.
- Nombre de sección en schema: "${r}" con class: "section-${t}".
- ⛔ PROHIBIDO incluir después del {% endschema %}: notas, tablas markdown, explicaciones ni ningún texto adicional. El output termina con {% endschema %}. NADA más.

SISTEMA DE GRIDS RESPONSIVE — OBLIGATORIO EN LIQUID:
Define estas clases en el <style> de tu sección y úsalas en el HTML (no inline grid-template-columns):
  .s${t}-rg-2       { display:grid; grid-template-columns:1fr 1fr; gap:40px 56px; }
  .s${t}-rg-3       { display:grid; grid-template-columns:repeat(3,1fr); gap:0; }
  .s${t}-rg-auto    { display:grid; grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr)); }
  .s${t}-rg-contact { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; }
  @media(max-width:860px){
    .s${t}-rg-2,.s${t}-rg-3,.s${t}-rg-auto,.s${t}-rg-contact {
      grid-template-columns:1fr !important; gap:24px !important;
    }
  }
Incluye SIEMPRE este bloque de media query en el <style> de la sección.

PROHIBICIONES ABSOLUTAS — rompen responsive en Shopify mobile:
- ❌ NUNCA grid-template-columns con múltiples columnas como inline style. Usa las clases .s${t}-rg-* siempre.
- ❌ NUNCA position:absolute con valores negativos (left:-Npx, right:-Npx) en decorativos.
- ❌ NUNCA width o min-width > 100vw en ningún elemento.
- ✅ SÍ: position:relative en contenedores, position:absolute SOLO para badges internos (top/right ≤ 30px del borde del padre).

IMÁGENES DE BLUEPRINT EN LIQUID:
- Para imágenes de producto (BP_PRODUCT image_filename): usa {{ section.settings.product_image | img_url: '800x' | img_tag }} y agrega al schema: { "type": "image_picker", "id": "product_image", "label": "Imagen producto" }.
- Para BP_PERSON: { "type": "image_picker", "id": "person_image", "label": "Imagen persona" }.
- Para BP_LOCATION: { "type": "image_picker", "id": "location_image", "label": "Imagen locación" }.
- Para precio: usa {{ section.settings.product_price }} con default "[PRECIO]" — NUNCA hardcodees $0.00.
- Para precio en schema: { "type": "text", "id": "product_price", "label": "Precio", "default": "" }.
ESTRUCTURA BASE:
<style>
  .section-${t} { box-sizing: border-box; overflow-x: hidden; }
  .section-${t} *, .section-${t} *::before, .section-${t} *::after { box-sizing: border-box; }
  /* grids responsive */
  .s${t}-rg-2 { display:grid; grid-template-columns:1fr 1fr; gap:40px 56px; }
  .s${t}-rg-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:0; }
  .s${t}-rg-auto { display:grid; grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr)); }
  .s${t}-rg-contact { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; }
  @media(max-width:860px){
    .s${t}-rg-2,.s${t}-rg-3,.s${t}-rg-auto,.s${t}-rg-contact {
      grid-template-columns:1fr !important; gap:24px !important;
    }
  }
</style>
<div class="section-${t}">
  <h2>{{ section.settings.heading }}</h2>
  ...
</div>
{% schema %}
{
  "name": "${r}",
  "settings": [
    { "type": "text", "id": "heading", "label": "Título", "default": "..." },
    ...
  ],
  "presets": [{ "name": "${r}" }]
}
{% endschema %}`:`INSTRUCCIONES DE FORMATO:
- Escribe SOLO el contenido de la sección "${r}", listo para copiar en ${a==="shopify"?"Shopify":"WordPress"}
- Incluye headline, cuerpo y (si aplica) CTA específico para esta sección
- Si la sección es HERO: H1 principal + subtítulo (max 2 líneas) + texto de botón CTA
- Si la sección es FAQ: 5 preguntas con respuestas de 2–3 líneas cada una
- Si la sección es TESTIMONIALS: 3 testimonios realistas en primera persona de clientes del perfil de la marca
- Si la sección es FEATURES: lista de 4–6 puntos con ícono emoji + título corto + descripción de 1 línea
- IMÁGENES DE BLUEPRINT: cuando el contexto incluya image_filename de productos, insértalos como: ![NOMBRE_PRODUCTO](images/FILENAME) — colócalos estratégicamente junto al producto/sección relevante.
- Para BP_PERSON: insertar referencia ![Nombre](images/filename) en secciones hero/about.
- Para BP_LOCATION: insertar referencia al final de hero o en sección gallery.
- Si el precio del contexto es "0.00": escríbelo como **[PRECIO]** — NO pongas $0.00.
- No incluyas instrucciones, meta-comentarios ni placeholders ajenos al contenido. Solo el contenido final.
- Formato: Markdown limpio (## para subtítulos, **negrita** para énfasis)
- Respeta ESTRICTAMENTE cualquier nota de compliance si fue proporcionada`}function Pw(n){const{brand:t,pack:r,section:a,language:c,tone:p,platform:u,productSpec:f,extraContext:g,superAggro:h,outputMode:y}=n,b={ES:"español neutro","ES-FL":"español latino para audiencia de Florida/Miami (mezcla natural de inglés)",EN:"English","ES+EN":"español e inglés (genera ambas versiones, una debajo de la otra)"},v={professional:"profesional, claro, confiable",conversational:"cercano, directo, sin jargon",luxury:"premium, sofisticado, aspiracional",energetic:"dinámico, impactante, con urgencia",technical:"preciso, basado en datos, experto",warm:"cálido, empático, humano"},_=f?`PRODUCTO / SERVICIO: ${f.name}
Categoría: ${f.category}
Beneficios clave: ${f.keyBenefits}
Audiencia objetivo: ${f.targetAudience}
${f.price?`Precio referencia: ${f.price}`:""}
${f.complianceNotes?`RESTRICCIONES DE COMPLIANCE: ${f.complianceNotes}`:""}`:"",k=C0("web",t.id),z=$w(y,a.id,a.label,u),$=y==="liquid"?"Shopify Liquid":y==="html"?"HTML":"Markdown",S=S0(t.id),T=oi[t.id],D=!g.includes("── CONTEXTO E-COMMERCE")&&(T!=null&&T.productCatalogContext)?`${T.productCatalogContext}

`:"",F=r.id==="ecom_product_page",W=r.id==="ecom_collection"?`
── INSTRUCCIONES CRÍTICAS PARA COLLECTION PAGE ───────────────────────────────
Esta sección es una PÁGINA DE COLECCIÓN de e-commerce. NO es una página corporativa.
Visual, impactante, que muestra productos reales con imágenes.

${a.id==="hero"?`
HERO DE COLECCIÓN:
- HEADLINE: 2-4 palabras máximo en H1. Tamaño gigante (clamp 3rem-6rem). Bold extremo. Que ocupe toda la línea.
  Ejemplos correctos: "HIDRATACIÓN SIN COMPROMISO" / "TU CUERO CABELLUDO PRIMERO" / "REPARA. RESTAURA. DOMINA."
  Ejemplos incorretos: "Descubre nuestra línea de productos Moisture" (demasiado largo, sin punch)
- SUBHEADLINE: 1 frase de 10-15 palabras máximo. Específica, con datos o diferenciador.
- DOS CTAs en flex-wrap: [Ver colección] (botón sólido color marca) + [Soy profesional → Portal Pro] (outline)
- Eyebrow: DOS elementos en una línea horizontal en desktop, wrap permitido en mobile:
  · Wrapper: display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin-bottom:24px
  · Primero: badge azul (#0076A8) con "Línea [NOMBRE COLECCIÓN]" — texto en una sola línea, white-space:nowrap
  · Segundo: texto plain "Distribuidor Exclusivo · South & Central Florida" — white-space:nowrap — SIEMPRE "Florida" NO "Miami"
- Fondo: #0E1018 oscuro. Acento: #0076A8 navy Neurone.`:a.id==="features"?`
GRID DE PRODUCTOS — obligatorio mostrar imágenes:
- Título sección: corto y con punch (ej: "Los productos que lo hacen posible")
- Grid de product cards: mínimo 3 columnas desktop, 1 móvil
- Cada card DEBE incluir:
  · <img> del producto — usa el image_filename del contexto así: <img src="[IMAGE:FILENAME]" alt="NOMBRE" style="width:100%;height:200px;object-fit:cover;display:block;">
  · El sistema reemplazará [IMAGE:FILENAME] con la URL real automáticamente al exportar
  · Nombre del producto en bold
  · 1 benefit claim en 6 palabras máximo
  · Precio: <span class="product-price">$10.00</span>
  · Botón "Ver producto" o "Agregar"
- Si hay subcollections diferentes: agrúpalos con un label pequeño de subcollection
- Fondo alterno: #161923 para contrastar con el hero oscuro`:`
CTA FINAL DE COLECCIÓN:
- Fondo de acento #0076A8 o gradiente oscuro
- 1 frase de cierre con urgencia o exclusividad
- Botón CTA grande full-width en mobile`}
`:"",Y=F?`
── INSTRUCCIONES CRÍTICAS PARA PRODUCT PAGE ─────────────────────────────────
Esta sección es una PÁGINA DE PRODUCTO de e-commerce. NO es una web corporativa.
El formato debe ser visual, orientado a conversión, con muy poco texto y mucho peso visual.

ESTRUCTURA OBLIGATORIA para la sección "${a.label}":
${a.id==="hero"?`
HERO DE PRODUCTO (layout split 50/50):
- COLUMNA IZQUIERDA: imagen de producto grande.
  · El contexto incluye "Imagen producto (standard/shopify): URL" — USA ESA URL COMPLETA en el src. Si no hay URL en el contexto, genera un div placeholder con fondo del color dominante del producto.
  · NUNCA dejes src="" ni src="#" ni src="placeholder".
  · Mínimo 400px de altura en desktop. Ocupa todo el ancho de la columna.
- COLUMNA DERECHA: ficha de compra.
  · Brand label pequeño (NEURONE COSMÉTICA)
  · Nombre del producto en H1 grande y bold
  · Rating visual (★★★★★ con número de reviews)
  · Precio destacado ($XX.XX) — si el precio es 0.00 usa $10.00 como placeholder
  · 3-4 bullets de beneficio clave (máx 8 palabras cada uno) con ícono ✓ o ●
  · Botón CTA primario full-width "Agregar al carrito" o "Comprar ahora"
  · Botón secundario opcional "Ver descripción completa"
  · Trust badges pequeños debajo: 🔒 Pago seguro · 🚚 Envío gratis +$50 · ↩ 30 días devolución
PROHIBIDO en el hero: párrafos de texto largos, múltiples CTAs de texto, fondos blancos sin imagen.`:a.id==="features"?`
FEATURES DEL PRODUCTO:
- Sección oscura de contraste (fondo #0E1018 o similar)
- Título corto: "Por qué [Nombre Producto]" o "Lo que lo hace diferente"
- Grid de 3 cards visuales: ícono grande + título corto + 1 frase de beneficio (máx 15 palabras)
- NO uses listas de texto corrido. Solo cards visuales.
- Incluye 1 bloque "Modo de uso" con pasos numerados simples (máx 4 pasos)`:a.id==="faq"?`
FAQ COMPACTO:
- Máximo 4 preguntas. Solo las más frecuentes de compra.
- Acordeón CSS puro (no JS) con + / − toggle
- Respuestas de máx 2 líneas.`:`
SECCIÓN CTA FINAL:
- Fondo de color de marca
- 1 frase de cierre + botón CTA principal`}
`:"";return`Eres un redactor web senior, front-end developer y estratega de conversión especializado en negocios hispanos en Miami.
Generas contenido en formato ${$} listo para producción.
Tu estándar no es copy "correcto" — es copy que convierte. Directo, específico, que incomoda al lector lo suficiente para que actúe.

MARCA: ${t.name}
DESCRIPCIÓN: ${t.description}
MERCADO: ${t.market}
PLATAFORMA TARGET: ${u==="shopify"?"Shopify (e-commerce)":"WordPress (sitio web)"}
MÓDULO: ${r.label}
SECCIÓN A GENERAR: ${a.label} — ${a.description}
IDIOMA: ${b[c]}
TONO: ${v[p]}
PALABRAS APROXIMADAS: ${a.wordCount}
OUTPUT MODE: ${$}

${_}

${W}${Y}${S?`${S}

`:""}${T!=null&&T.complianceBlock?`${T.complianceBlock}

`:""}${D}${g?`CONTEXTO DE MARCA / DB_VARIABLES:
${g}`:""}

── ESTÁNDAR DE COPY BASE (SIEMPRE APLICA) ──────────────────────────────────────
ADN UNRLVL: Todo copy producido aquí sigue estas reglas por defecto. No son opcionales.

ESTRUCTURA DOLOR → SOLUCIÓN → CONSECUENCIA:
- Abre con el dolor real del lector, sin suavizarlo. Hazlo sentir reconocible.
- Presenta la solución como específica, disponible, con nombre y número.
- Cierra con la consecuencia de no actuar — no el beneficio de actuar.

AFIRMACIÓN SIN HEDGING:
- Prohibido: "podría", "quizás", "tal vez", "esperamos", "creemos", "intentamos".
- Obligatorio: verbos de acción en presente — "funciona", "entrega", "transforma", "garantiza".
- Si hay datos: úsalos. Si no hay datos: sé específico en la descripción de la transformación.

HEADLINES CON FRICCIÓN INTENCIONAL:
- Un buen headline hace que el lector se sienta interpelado, no inspirado.
- Formato preferido: dolor directo ("Tu cabello merece ciencia real — no otra promesa vacía.")
- O contraste que incomoda ("Tus competidores ya tienen acceso. ¿Tú todavía estás esperando?")
- NUNCA: aspiracional genérico ("Descubre la diferencia", "Eleva tu experiencia").

CTAs QUE NO DAN SALIDA CÓMODA:
- Verbo fuerte + beneficio inmediato + (opcional) consecuencia de no actuar.
- Ej: "Accede hoy — o deja que tu competencia se te adelante."
- Ej: "Ver catálogo completo — 142 productos que tus clientes ya buscan."

PRUEBA SOCIAL COMO PRESIÓN:
- No "clientes satisfechos". Sí: nombres de rol, números concretos, transformaciones verificables.
- Convierte la prueba social en presión social implícita cuando la marca lo permita.

URGENCIA REAL, NO GENÉRICA:
- Si hay exclusividad, escasez o timing real: úsalos con nombre propio.
- PROHIBIDO: "¡No te lo pierdas!", "Oferta por tiempo limitado", "Últimas unidades" sin contexto.
────────────────────────────────────────────────────────────────────────────────

${h?`
${jw}
`:""}

${k}

${z}

GENERA LA SECCIÓN AHORA:`}const Tw={educativo:`POST EDUCATIVO:
- Estructura: Introducción (problema/pregunta) → Desarrollo (3-5 secciones con H2) → Conclusión + CTA suave
- Tono: autoridad accesible, explica conceptos técnicos con analogías reales
- Incluye ejemplos concretos del mercado Miami/hispano cuando sea relevante
- CTA final: invita a explorar productos o servicios relacionados, no vende directamente`,seo:`POST SEO-OPTIMIZADO:
- Estructura: H1 con keyword principal → H2s con keywords secundarias → FAQ al final (schema markup friendly)
- Keyword density natural: keyword principal 2-3 veces, variantes semánticas en H2s
- Párrafos cortos (3-4 líneas máximo), ideal para featured snippets
- Meta description al final del post (max 155 chars) en bloque separado
- CTA interno: link a producto/categoría relacionada`,producto:`POST DE PRODUCTO:
- Estructura: problema que resuelve → cómo funciona → beneficios concretos → prueba social → CTA
- Tono: informativo + persuasivo, no publicitario explícito
- Incluye casos de uso reales del mercado objetivo
- Compliance: si el producto tiene restricciones, aplicarlas al copy
- CTA directo: compra o más información`,ugc:`POST ESTILO UGC / TESTIMONIAL:
- Estructura: historia de cliente real (o ficticia pero realista) → transformación → resultado concreto
- Voz: primera o tercera persona, conversacional, específica en detalles
- Incluye detalles creíbles: nombre, ciudad (Miami area), situación antes/después
- Tono: auténtico, sin lenguaje de marketing corporativo
- CTA: invita a otros a compartir su experiencia o probar el producto`};function Ow(n){var _;const{brand:t,blog:r,language:a,outputMode:c,extraContext:p}=n,u={ES:"español neutro","ES-FL":"español latino Miami/Florida",EN:"English","ES+EN":"ES + EN"},f=C0("copy",t.id),g=S0(t.id),h=oi[t.id],y=c==="liquid"?"Shopify Liquid (blog post template)":c==="html"?"HTML semántico":"Markdown",b=r.wordCount??800,v=c==="html"?"FORMATO: HTML semántico sin <html>/<body>. Usa <article>, <h1>, <h2>, <p>, <ul>. CSS inline neutro. Listo para Custom HTML.":c==="liquid"?"FORMATO: Liquid template para blog post de Shopify. Incluye schema con settings: title, content, meta_description, featured_image_alt.":"FORMATO: Markdown limpio. # para H1, ## para H2, **negrita** para énfasis. Incluye meta_description al final en bloque separado.";return`Eres un content strategist y copywriter especializado en blogs para e-commerce hispano Miami.

MARCA: ${t.name}
DESCRIPCIÓN: ${t.description}
MERCADO: ${t.market}
PLATAFORMA: WordPress Blog
IDIOMA: ${u[a]}
OUTPUT MODE: ${y}

TEMA DEL POST: ${r.topic}
${(_=r.keywords)!=null&&_.length?`KEYWORDS: ${r.keywords.join(", ")}`:""}
EXTENSIÓN OBJETIVO: ~${b} palabras

${g?`${g}

`:""}${h!=null&&h.complianceBlock?`${h.complianceBlock}

`:""}${p?`CONTEXTO ADICIONAL:
${p}`:""}

${Tw[r.postType]}

${f}

${v}

GENERA EL POST COMPLETO AHORA:`}async function E0(n,t){const r=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},signal:t,body:JSON.stringify({prompt:n,model:Nw,max_tokens:6e3,temperature:.75})});if(!r.ok){const u=await r.json().catch(()=>({}));throw new Error(`Claude API error ${r.status}: ${(u==null?void 0:u.error)??(u==null?void 0:u.detail)??r.statusText}`)}return((await r.json()).text??"").trim().split(`
`).filter(u=>!u.startsWith("```")).join(`
`).trim()}async function Lw(n){var f,g;const t=[];let r=0;const a=[],c=((f=n.dbPrompt)==null?void 0:f.trim())||n.extraContext,p=n.superAggro??!1,u=n.outputMode??"html";for(const h of n.pack.sections){const y=ol[h];if(!y)continue;const b=t.length>0?`
── SECCIONES YA GENERADAS (mantén coherencia — no repitas, continúa la narrativa) ──
`+t.map(k=>`[${k.label}]
${k.content.slice(0,400)}${k.content.length>400?"…":""}`).join(`

`)+`
────────────────────────────────────────────────────────────────────────────────
`:"",v=Pw({brand:n.brand,pack:n.pack,section:y,language:n.language,tone:n.tone,platform:n.platform,productSpec:n.productSpec,extraContext:c+b,superAggro:p,outputMode:u});a.push(v);const _=await E0(v,n.signal);r+=_.split(/\s+/).length,t.push({sectionId:h,label:y.label,content:_}),(g=n.onSectionComplete)==null||g.call(n,h,_)}return{id:`web_${Date.now()}`,packId:n.pack.id,brandId:n.brand.id,module:n.pack.module,language:n.language,platform:n.platform,superAggro:p,outputMode:u,sections:t,wordCount:r,generatedAt:new Date().toISOString(),prompt:a[0]??""}}async function Rw(n){const t=n.outputMode??"html",r=Ow({brand:n.brand,blog:n.blog,language:n.language,outputMode:t,extraContext:n.extraContext});return{content:await E0(r,n.signal),outputMode:t,generatedAt:new Date().toISOString()}}function Fw(n){return n.reduce((t,r)=>{var a;return t+(((a=ol[r])==null?void 0:a.wordCount)??0)},0)}function lr(n){return n==="liquid"?"liquid":n==="html"?"html":"md"}function hd(n){return n==="liquid"?"text/plain":n==="html"?"text/html":"text/markdown"}const Dw="https://raw.githubusercontent.com/unrealvillestudio-hub/BluePrints/main/assets/images/products/";function Eu(n){return n.replace(/\[IMAGE:([^\]]+)\]/g,(t,r)=>`${Dw}${r.trim()}`)}function yd(n,t){let r=n.replace(/<img([^>]*?)src=""([^>]*?)>/gi,(a,c,p)=>{var h;const u=(c+p).match(/alt="([^"]+)"/i);if(!u)return a;const f=u[1],g=t[f]??((h=Object.entries(t).find(([y])=>f.toLowerCase().includes(y.toLowerCase())||y.toLowerCase().includes(f.toLowerCase())))==null?void 0:h[1]);return g?`<img${c}src="${g}"${p}>`:a});return r=Eu(r),r}function ea(n,t,r=!1){var a;if(t==="liquid")return n.map(c=>`{% comment %} === SECTION: ${c.label.toUpperCase()} === {% endcomment %}

${c.content}`).join(`

{% comment %} ─────────────────────────────────────── {% endcomment %}

`);if(t==="html"){const c=g=>g.replace(/\{\{\s*section\.settings\.background_color\s*\}\}/g,"#0d0d0d").replace(/\{\{\s*section\.settings\.text_color\s*\}\}/g,"#ffffff").replace(/\{\{\s*section\.settings\.heading\s*\}\}/g,"").replace(/\{\{\s*section\.settings\.subheading\s*\}\}/g,"").replace(/\{\{\s*section\.settings\.eyebrow\s*\}\}/g,"").replace(/\{\{[^}]+\}\}/g,"").replace(/\{%-?\s*.*?-?%\}/g,""),u=`<style>
/* ── Shopify Dawn override — ancho completo ── */
:root { --max-width--body-normal: 100% !important; --page-width: 2000px !important; }
.shopify-block, .shopify-block.rte, .shopify-block > *,
[class*="text-block"], [class*="page-width"],
[class*="section-content"], .rte, .rte > *,
[id*="page-content"], [id*="shopify-block"] {
  max-width: 100% !important;
  width: 100% !important;
  padding-inline-start: 0 !important;
  padding-inline-end: 0 !important;
  margin-inline-start: 0 !important;
  margin-inline-end: 0 !important;
}
/* Romper el grid de Dawn */
.page-width { max-width: 100% !important; padding: 0 !important; }
main > .shopify-section { padding: 0 !important; }
</style>`+`
`+n.map(g=>`<!-- === ${g.label.toUpperCase()} === -->
${c(Eu(g.content))}`).join(`

`),f=r?`
<div style="
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background: #1a0a00;
  border-left: 5px solid #ff6b00;
  border-radius: 4px;
  padding: 20px 24px;
  margin: 0 0 0 0;
  position: relative;
">
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
    <span style="font-size:1.3rem;">⚠️</span>
    <span style="
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #ff6b00;
    ">AGGRO OUTPUT — Revisar antes de publicar</span>
  </div>
  <p style="margin:0 0 10px;font-size:0.88rem;color:#ffd4a8;line-height:1.6;">
    Este output usa persuasión de alta presión. Antes de publicar, verifica:
  </p>
  <ul style="margin:0 0 14px;padding-left:18px;font-size:0.84rem;color:#ffb37a;line-height:1.8;">
    <li><strong style="color:#ff9040;">Meta / TikTok Ads</strong> — Urgencia extrema puede rechazarse si la escasez no es verificable en la cuenta.</li>
    <li><strong style="color:#ff9040;">Google Ads</strong> — Claims de resultado sin disclaimer activan revisión manual. Añade fuente si el claim es medible.</li>
    <li><strong style="color:#ff9040;">Shopify</strong> — Comparaciones implícitas OK. Comparaciones directas con nombre de marca requieren evidencia.</li>
  </ul>
  <p style="margin:0;font-size:0.8rem;color:#a07050;font-style:italic;">
    Reducir intensidad un 20–30% suele ser suficiente para paid media sin sacrificar conversión orgánica.
  </p>
</div>
`:"";return`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebLab Preview — ${r?"⚠️ AGGRO — ":""}${((a=n[0])==null?void 0:a.label)??"Export"}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html, body { margin: 0; overflow-x: hidden; width: 100%; }
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f0f0f0; }
    a { color: inherit; }
    /* ── Grid system responsive — usado por todas las secciones generadas ── */
    .rg-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 40px 56px; }
    .rg-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
    .rg-auto { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px,100%), 1fr)); }
    .rg-contact { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
    .rg-contact-aggro { display: grid; grid-template-columns: 1fr 1.6fr; gap: 64px; align-items: start; }
    @media (max-width: 860px) {
      .rg-2, .rg-3, .rg-auto, .rg-contact, .rg-contact-aggro {
        grid-template-columns: 1fr !important;
        gap: 24px !important;
      }
    }
    /* CTA base — evita desplazamiento por herencia de margin/text-align */
    a[class*="cta"], button[class*="cta"], .cta-button { display: inline-block; }
    /* CTA mobile — wrapping obligatorio, sin overflow lateral */
    @media (max-width: 860px) {
      a[class*="cta"], button[class*="cta"], .cta-button {
        white-space: normal !important;
        word-break: break-word !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
      }
    }
  </style>
</head>
<body>
${f}
${u}
<footer style="font-family:'DM Sans','Helvetica Neue',Arial,sans-serif;font-size:0.75rem;color:#6B6460;text-align:center;padding:28px 24px;border-top:1px solid #1e1e2a;margin-top:0;background:#0E1018;line-height:1.7;">
  Designed &amp; Developed by <strong style="color:#C4622D;">Unreal&gt;ille Studio</strong><br>
  1303 N 46th Ave, Hollywood, FL 33021
</footer>
</body>
</html>`}return n.map(c=>`## ${c.label}

${c.content}`).join(`

---

`)+`

---

*Designed & Developed by Unreal>ille Studio · Miami, FL*`}const Mw=Vd(n=>({outputs:[],addOutput:t=>n(r=>({outputs:[t,...r.outputs]})),removeOutput:t=>n(r=>({outputs:r.outputs.filter(a=>a.id!==t)})),clearAll:()=>n({outputs:[]})}));function z0(n){var t,r,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(t=0;t<c;t++)n[t]&&(r=z0(n[t]))&&(a&&(a+=" "),a+=r)}else for(r in n)n[r]&&(a&&(a+=" "),a+=r);return a}function Iw(){for(var n,t,r=0,a="",c=arguments.length;r<c;r++)(n=arguments[r])&&(t=z0(n))&&(a&&(a+=" "),a+=t);return a}const zu="-",Bw=n=>{const t=Vw(n),{conflictingClassGroups:r,conflictingClassGroupModifiers:a}=n;return{getClassGroupId:u=>{const f=u.split(zu);return f[0]===""&&f.length!==1&&f.shift(),A0(f,t)||Uw(u)},getConflictingClassGroupIds:(u,f)=>{const g=r[u]||[];return f&&a[u]?[...g,...a[u]]:g}}},A0=(n,t)=>{var u;if(n.length===0)return t.classGroupId;const r=n[0],a=t.nextPart.get(r),c=a?A0(n.slice(1),a):void 0;if(c)return c;if(t.validators.length===0)return;const p=n.join(zu);return(u=t.validators.find(({validator:f})=>f(p)))==null?void 0:u.classGroupId},_g=/^\[(.+)\]$/,Uw=n=>{if(_g.test(n)){const t=_g.exec(n)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Vw=n=>{const{theme:t,prefix:r}=n,a={nextPart:new Map,validators:[]};return Gw(Object.entries(n.classGroups),r).forEach(([p,u])=>{Id(u,a,p,t)}),a},Id=(n,t,r,a)=>{n.forEach(c=>{if(typeof c=="string"){const p=c===""?t:kg(t,c);p.classGroupId=r;return}if(typeof c=="function"){if(qw(c)){Id(c(a),t,r,a);return}t.validators.push({validator:c,classGroupId:r});return}Object.entries(c).forEach(([p,u])=>{Id(u,kg(t,p),r,a)})})},kg=(n,t)=>{let r=n;return t.split(zu).forEach(a=>{r.nextPart.has(a)||r.nextPart.set(a,{nextPart:new Map,validators:[]}),r=r.nextPart.get(a)}),r},qw=n=>n.isThemeGetter,Gw=(n,t)=>t?n.map(([r,a])=>{const c=a.map(p=>typeof p=="string"?t+p:typeof p=="object"?Object.fromEntries(Object.entries(p).map(([u,f])=>[t+u,f])):p);return[r,c]}):n,Hw=n=>{if(n<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,a=new Map;const c=(p,u)=>{r.set(p,u),t++,t>n&&(t=0,a=r,r=new Map)};return{get(p){let u=r.get(p);if(u!==void 0)return u;if((u=a.get(p))!==void 0)return c(p,u),u},set(p,u){r.has(p)?r.set(p,u):c(p,u)}}},N0="!",Ww=n=>{const{separator:t,experimentalParseClassName:r}=n,a=t.length===1,c=t[0],p=t.length,u=f=>{const g=[];let h=0,y=0,b;for(let $=0;$<f.length;$++){let S=f[$];if(h===0){if(S===c&&(a||f.slice($,$+p)===t)){g.push(f.slice(y,$)),y=$+p;continue}if(S==="/"){b=$;continue}}S==="["?h++:S==="]"&&h--}const v=g.length===0?f:f.substring(y),_=v.startsWith(N0),k=_?v.substring(1):v,z=b&&b>y?b-y:void 0;return{modifiers:g,hasImportantModifier:_,baseClassName:k,maybePostfixModifierPosition:z}};return r?f=>r({className:f,parseClassName:u}):u},Kw=n=>{if(n.length<=1)return n;const t=[];let r=[];return n.forEach(a=>{a[0]==="["?(t.push(...r.sort(),a),r=[]):r.push(a)}),t.push(...r.sort()),t},Yw=n=>({cache:Hw(n.cacheSize),parseClassName:Ww(n),...Bw(n)}),Qw=/\s+/,Xw=(n,t)=>{const{parseClassName:r,getClassGroupId:a,getConflictingClassGroupIds:c}=t,p=[],u=n.trim().split(Qw);let f="";for(let g=u.length-1;g>=0;g-=1){const h=u[g],{modifiers:y,hasImportantModifier:b,baseClassName:v,maybePostfixModifierPosition:_}=r(h);let k=!!_,z=a(k?v.substring(0,_):v);if(!z){if(!k){f=h+(f.length>0?" "+f:f);continue}if(z=a(v),!z){f=h+(f.length>0?" "+f:f);continue}k=!1}const $=Kw(y).join(":"),S=b?$+N0:$,T=S+z;if(p.includes(T))continue;p.push(T);const M=c(z,k);for(let D=0;D<M.length;++D){const F=M[D];p.push(S+F)}f=h+(f.length>0?" "+f:f)}return f};function Jw(){let n=0,t,r,a="";for(;n<arguments.length;)(t=arguments[n++])&&(r=j0(t))&&(a&&(a+=" "),a+=r);return a}const j0=n=>{if(typeof n=="string")return n;let t,r="";for(let a=0;a<n.length;a++)n[a]&&(t=j0(n[a]))&&(r&&(r+=" "),r+=t);return r};function Zw(n,...t){let r,a,c,p=u;function u(g){const h=t.reduce((y,b)=>b(y),n());return r=Yw(h),a=r.cache.get,c=r.cache.set,p=f,f(g)}function f(g){const h=a(g);if(h)return h;const y=Xw(g,r);return c(g,y),y}return function(){return p(Jw.apply(null,arguments))}}const Ye=n=>{const t=r=>r[n]||[];return t.isThemeGetter=!0,t},$0=/^\[(?:([a-z-]+):)?(.+)\]$/i,e_=/^\d+\/\d+$/,t_=new Set(["px","full","screen"]),n_=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,o_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,r_=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,i_=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,a_=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,io=n=>ri(n)||t_.has(n)||e_.test(n),Fo=n=>pi(n,"length",f_),ri=n=>!!n&&!Number.isNaN(Number(n)),xd=n=>pi(n,"number",ri),ta=n=>!!n&&Number.isInteger(Number(n)),s_=n=>n.endsWith("%")&&ri(n.slice(0,-1)),Se=n=>$0.test(n),Do=n=>n_.test(n),l_=new Set(["length","size","percentage"]),c_=n=>pi(n,l_,P0),d_=n=>pi(n,"position",P0),u_=new Set(["image","url"]),p_=n=>pi(n,u_,h_),m_=n=>pi(n,"",g_),na=()=>!0,pi=(n,t,r)=>{const a=$0.exec(n);return a?a[1]?typeof t=="string"?a[1]===t:t.has(a[1]):r(a[2]):!1},f_=n=>o_.test(n)&&!r_.test(n),P0=()=>!1,g_=n=>i_.test(n),h_=n=>a_.test(n),y_=()=>{const n=Ye("colors"),t=Ye("spacing"),r=Ye("blur"),a=Ye("brightness"),c=Ye("borderColor"),p=Ye("borderRadius"),u=Ye("borderSpacing"),f=Ye("borderWidth"),g=Ye("contrast"),h=Ye("grayscale"),y=Ye("hueRotate"),b=Ye("invert"),v=Ye("gap"),_=Ye("gradientColorStops"),k=Ye("gradientColorStopPositions"),z=Ye("inset"),$=Ye("margin"),S=Ye("opacity"),T=Ye("padding"),M=Ye("saturate"),D=Ye("scale"),F=Ye("sepia"),X=Ye("skew"),W=Ye("space"),Y=Ye("translate"),ve=()=>["auto","contain","none"],fe=()=>["auto","hidden","clip","visible","scroll"],De=()=>["auto",Se,t],G=()=>[Se,t],ue=()=>["",io,Fo],je=()=>["auto",ri,Se],Re=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ge=()=>["solid","dashed","dotted","double","none"],le=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],ee=()=>["","0",Se],Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>[ri,Se];return{cacheSize:500,separator:":",theme:{colors:[na],spacing:[io,Fo],blur:["none","",Do,Se],brightness:N(),borderColor:[n],borderRadius:["none","","full",Do,Se],borderSpacing:G(),borderWidth:ue(),contrast:N(),grayscale:ee(),hueRotate:N(),invert:ee(),gap:G(),gradientColorStops:[n],gradientColorStopPositions:[s_,Fo],inset:De(),margin:De(),opacity:N(),padding:G(),saturate:N(),scale:N(),sepia:ee(),skew:N(),space:G(),translate:G()},classGroups:{aspect:[{aspect:["auto","square","video",Se]}],container:["container"],columns:[{columns:[Do]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Re(),Se]}],overflow:[{overflow:fe()}],"overflow-x":[{"overflow-x":fe()}],"overflow-y":[{"overflow-y":fe()}],overscroll:[{overscroll:ve()}],"overscroll-x":[{"overscroll-x":ve()}],"overscroll-y":[{"overscroll-y":ve()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[z]}],"inset-x":[{"inset-x":[z]}],"inset-y":[{"inset-y":[z]}],start:[{start:[z]}],end:[{end:[z]}],top:[{top:[z]}],right:[{right:[z]}],bottom:[{bottom:[z]}],left:[{left:[z]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ta,Se]}],basis:[{basis:De()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Se]}],grow:[{grow:ee()}],shrink:[{shrink:ee()}],order:[{order:["first","last","none",ta,Se]}],"grid-cols":[{"grid-cols":[na]}],"col-start-end":[{col:["auto",{span:["full",ta,Se]},Se]}],"col-start":[{"col-start":je()}],"col-end":[{"col-end":je()}],"grid-rows":[{"grid-rows":[na]}],"row-start-end":[{row:["auto",{span:[ta,Se]},Se]}],"row-start":[{"row-start":je()}],"row-end":[{"row-end":je()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Se]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Se]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[T]}],px:[{px:[T]}],py:[{py:[T]}],ps:[{ps:[T]}],pe:[{pe:[T]}],pt:[{pt:[T]}],pr:[{pr:[T]}],pb:[{pb:[T]}],pl:[{pl:[T]}],m:[{m:[$]}],mx:[{mx:[$]}],my:[{my:[$]}],ms:[{ms:[$]}],me:[{me:[$]}],mt:[{mt:[$]}],mr:[{mr:[$]}],mb:[{mb:[$]}],ml:[{ml:[$]}],"space-x":[{"space-x":[W]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[W]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Se,t]}],"min-w":[{"min-w":[Se,t,"min","max","fit"]}],"max-w":[{"max-w":[Se,t,"none","full","min","max","fit","prose",{screen:[Do]},Do]}],h:[{h:[Se,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Se,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Se,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Se,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Do,Fo]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",xd]}],"font-family":[{font:[na]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Se]}],"line-clamp":[{"line-clamp":["none",ri,xd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",io,Se]}],"list-image":[{"list-image":["none",Se]}],"list-style-type":[{list:["none","disc","decimal",Se]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ge(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",io,Fo]}],"underline-offset":[{"underline-offset":["auto",io,Se]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:G()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Se]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Se]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Re(),d_]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",c_]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},p_]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[p]}],"rounded-s":[{"rounded-s":[p]}],"rounded-e":[{"rounded-e":[p]}],"rounded-t":[{"rounded-t":[p]}],"rounded-r":[{"rounded-r":[p]}],"rounded-b":[{"rounded-b":[p]}],"rounded-l":[{"rounded-l":[p]}],"rounded-ss":[{"rounded-ss":[p]}],"rounded-se":[{"rounded-se":[p]}],"rounded-ee":[{"rounded-ee":[p]}],"rounded-es":[{"rounded-es":[p]}],"rounded-tl":[{"rounded-tl":[p]}],"rounded-tr":[{"rounded-tr":[p]}],"rounded-br":[{"rounded-br":[p]}],"rounded-bl":[{"rounded-bl":[p]}],"border-w":[{border:[f]}],"border-w-x":[{"border-x":[f]}],"border-w-y":[{"border-y":[f]}],"border-w-s":[{"border-s":[f]}],"border-w-e":[{"border-e":[f]}],"border-w-t":[{"border-t":[f]}],"border-w-r":[{"border-r":[f]}],"border-w-b":[{"border-b":[f]}],"border-w-l":[{"border-l":[f]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...ge(),"hidden"]}],"divide-x":[{"divide-x":[f]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[f]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:ge()}],"border-color":[{border:[c]}],"border-color-x":[{"border-x":[c]}],"border-color-y":[{"border-y":[c]}],"border-color-s":[{"border-s":[c]}],"border-color-e":[{"border-e":[c]}],"border-color-t":[{"border-t":[c]}],"border-color-r":[{"border-r":[c]}],"border-color-b":[{"border-b":[c]}],"border-color-l":[{"border-l":[c]}],"divide-color":[{divide:[c]}],"outline-style":[{outline:["",...ge()]}],"outline-offset":[{"outline-offset":[io,Se]}],"outline-w":[{outline:[io,Fo]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[io,Fo]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",Do,m_]}],"shadow-color":[{shadow:[na]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":[...le(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":le()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[a]}],contrast:[{contrast:[g]}],"drop-shadow":[{"drop-shadow":["","none",Do,Se]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[y]}],invert:[{invert:[b]}],saturate:[{saturate:[M]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[g]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[M]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Se]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",Se]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",Se]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[ta,Se]}],"translate-x":[{"translate-x":[Y]}],"translate-y":[{"translate-y":[Y]}],"skew-x":[{"skew-x":[X]}],"skew-y":[{"skew-y":[X]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Se]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Se]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":G()}],"scroll-mx":[{"scroll-mx":G()}],"scroll-my":[{"scroll-my":G()}],"scroll-ms":[{"scroll-ms":G()}],"scroll-me":[{"scroll-me":G()}],"scroll-mt":[{"scroll-mt":G()}],"scroll-mr":[{"scroll-mr":G()}],"scroll-mb":[{"scroll-mb":G()}],"scroll-ml":[{"scroll-ml":G()}],"scroll-p":[{"scroll-p":G()}],"scroll-px":[{"scroll-px":G()}],"scroll-py":[{"scroll-py":G()}],"scroll-ps":[{"scroll-ps":G()}],"scroll-pe":[{"scroll-pe":G()}],"scroll-pt":[{"scroll-pt":G()}],"scroll-pr":[{"scroll-pr":G()}],"scroll-pb":[{"scroll-pb":G()}],"scroll-pl":[{"scroll-pl":G()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Se]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[io,Fo,xd]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},x_=Zw(y_);function J(...n){return x_(Iw(n))}const jn=({children:n,color:t})=>s.jsx("span",{className:"px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide",style:t?{backgroundColor:`${t}22`,color:t}:void 0,children:n}),$n=({size:n=16})=>s.jsx("span",{className:"inline-block rounded-full border-2 border-accent/20 border-t-accent animate-spin",style:{width:n,height:n}}),b_={A:{label:"Slot A",accepts:["BP_PERSON"],description:"Persona / vocero principal"},B:{label:"Slot B",accepts:["BP_PERSON"],description:"Persona / vocero secundario"},C:{label:"Slot C",accepts:["BP_PRODUCT"],description:"Producto principal de la pieza"},D:{label:"Slot D",accepts:["BP_PRODUCT"],description:"Producto de apoyo o upsell"},L:{label:"Slot L",accepts:["BP_LOCATION"],description:"Contexto de lugar / escena"},R1:{label:"Slot R1",accepts:["BP_PERSON","BP_LOCATION","BP_PRODUCT"],description:"Referencia de estilo libre"},R2:{label:"Slot R2",accepts:["BP_PERSON","BP_LOCATION","BP_PRODUCT"],description:"Referencia de estilo libre"},R3:{label:"Slot R3",accepts:["BP_PERSON","BP_LOCATION","BP_PRODUCT"],description:"Referencia de estilo libre"}},v_="unrlvl_blueprints",Vn="blueprints",w_=1;function ml(){return new Promise((n,t)=>{const r=indexedDB.open(v_,w_);r.onupgradeneeded=a=>{const c=a.target.result;if(!c.objectStoreNames.contains(Vn)){const p=c.createObjectStore(Vn,{keyPath:"id"});p.createIndex("byType","type",{unique:!1}),p.createIndex("byBrand","brandId",{unique:!1}),p.createIndex("byTypeAndBrand",["type","brandId"],{unique:!1})}},r.onsuccess=()=>n(r.result),r.onerror=()=>t(r.error)})}async function __(){const n=await ml();return new Promise((t,r)=>{const c=n.transaction(Vn,"readonly").objectStore(Vn).getAll();c.onsuccess=()=>t(c.result),c.onerror=()=>r(c.error)})}async function k_(n){const t=await ml();return new Promise((r,a)=>{const p=t.transaction(Vn,"readwrite").objectStore(Vn).put(n);p.onsuccess=()=>r(),p.onerror=()=>a(p.error)})}async function S_(n){const t=await ml();return new Promise((r,a)=>{const p=t.transaction(Vn,"readwrite").objectStore(Vn).delete(n);p.onsuccess=()=>r(),p.onerror=()=>a(p.error)})}async function C_(){const n=await ml();return new Promise((t,r)=>{const c=n.transaction(Vn,"readwrite").objectStore(Vn).clear();c.onsuccess=()=>t(),c.onerror=()=>r(c.error)})}function E_(n){const t=n.schema_version||"";return t.startsWith("BP_PERSON")||n.voicelab||n.humanize?"BP_PERSON":t.startsWith("BP_LOCATION")||n.location||n.scene?"BP_LOCATION":t.startsWith("BP_PRODUCT")||n.compliance_flags||n.sku?"BP_PRODUCT":n.schema==="BP_PERSON"||n.persona?"BP_PERSON":n.schema==="BP_LOCATION"?"BP_LOCATION":n.schema==="BP_PRODUCT"||n.imagelab?"BP_PRODUCT":null}function z_(n){const t=n.displayName||n.display_name||n.location_name||n.name||n.id||"Sin nombre",a=(n.schema_version||"").split("_").pop()||"";return{name:t,brandId:n.brandId||n.brand_id||"unknown",version:n.version||a||"1.0"}}const Au=Vd((n,t)=>({blueprints:[],slots:{},loading:!1,filter:"ALL",search:"",hydrate:async()=>{n({loading:!0});try{const r=await __();n({blueprints:r})}finally{n({loading:!1})}},importJSON:async r=>{try{const a=JSON.parse(r),c=E_(a);if(!c)return{ok:!1,error:"Tipo no detectado. Verifica el campo schema_version."};const p=z_(a),u={id:crypto.randomUUID(),type:c,brandId:p.brandId,name:p.name,version:p.version,data:a,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return await k_(u),n(f=>({blueprints:[...f.blueprints,u]})),{ok:!0,entry:u}}catch{return{ok:!1,error:"JSON inválido."}}},importFiles:async r=>{let a=0,c=0;for(const p of Array.from(r)){const u=await p.text();(await t().importJSON(u)).ok?a++:c++}return{imported:a,failed:c}},deleteBlueprint:async r=>{await S_(r),n(a=>({blueprints:a.blueprints.filter(c=>c.id!==r),slots:Object.fromEntries(Object.entries(a.slots).filter(([,c])=>(c==null?void 0:c.id)!==r))}))},clearAll:async()=>{await C_(),n({blueprints:[],slots:{}})},assignSlot:(r,a)=>n(c=>({slots:{...c.slots,[r]:a}})),clearSlot:r=>n(a=>{const c={...a.slots};return delete c[r],{slots:c}}),clearAllSlots:()=>n({slots:{}}),setFilter:r=>n({filter:r}),setSearch:r=>n({search:r}),getSlotContext:()=>{const{slots:r}=t(),a=Object.entries(r);if(!a.length)return"";const c={A:"PERSONA PRINCIPAL",B:"PERSONA SECUNDARIA",C:"PRODUCTO HÉROE",D:"PRODUCTO COMPLEMENTARIO",L:"LOCACIÓN / ESCENA",R1:"REF ESTILO 1",R2:"REF ESTILO 2",R3:"REF ESTILO 3"};return`

=== BLUEPRINTS ACTIVOS ===
${a.map(([u,f])=>`[${c[u]} — ${f.name} | ${f.type} v${f.version} | brand: ${f.brandId}]
${JSON.stringify(f.data,null,2)}`).join(`

---

`)}
=== FIN BLUEPRINTS ===
`},exportAll:()=>{const r=t().blueprints,a=new Blob([JSON.stringify(r.map(u=>u.data),null,2)],{type:"application/json"}),c=URL.createObjectURL(a);Object.assign(document.createElement("a"),{href:c,download:`UNRLVL_BPs_${new Date().toISOString().slice(0,10)}.json`}).click(),URL.revokeObjectURL(c)}})),Xr={BP_PERSON:{bg:"bg-blue-500/10",text:"text-blue-400",border:"border-blue-500/30"},BP_LOCATION:{bg:"bg-green-500/10",text:"text-green-400",border:"border-green-500/30"},BP_PRODUCT:{bg:"bg-amber-500/10",text:"text-amber-400",border:"border-amber-500/30"}},T0={BP_PERSON:"👤",BP_LOCATION:"📍",BP_PRODUCT:"📦"},A_=["A","B","C","D","L","R1","R2","R3"];function N_({bp:n,onDelete:t}){const r=Xr[n.type];return s.jsxs("div",{className:`flex items-center gap-2 px-2 py-1.5 rounded-lg border ${r.bg} ${r.border} group`,children:[s.jsx("span",{className:"text-sm",children:T0[n.type]}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("p",{className:`text-xs font-medium truncate ${r.text}`,children:n.name}),s.jsxs("p",{className:"text-[10px] text-zinc-500",children:[n.brandId," · v",n.version]})]}),s.jsx("button",{onClick:t,className:"opacity-0 group-hover:opacity-100 p-0.5 text-zinc-600 hover:text-red-400 transition-all",children:s.jsx(Hg,{size:11})})]})}function j_({slotId:n,bp:t,blueprints:r,onAssign:a,onClear:c}){const[p,u]=C.useState(!1),f=C.useRef(null),g=b_[n],h=r.filter(y=>g.accepts.includes(y.type));return C.useEffect(()=>{const y=b=>{f.current&&!f.current.contains(b.target)&&u(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[]),s.jsxs("div",{ref:f,className:"relative",children:[s.jsxs("button",{onClick:()=>u(y=>!y),className:`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg border text-left transition-all ${t?`${Xr[t.type].bg} ${Xr[t.type].border}`:"bg-zinc-800/50 border-zinc-700/50 hover:border-zinc-600"}`,children:[s.jsx("span",{className:`text-[10px] font-mono font-bold w-6 shrink-0 ${t?Xr[t.type].text:"text-zinc-500"}`,children:n}),s.jsx("div",{className:"flex-1 min-w-0",children:t?s.jsxs(s.Fragment,{children:[s.jsx("p",{className:`text-xs font-medium truncate ${Xr[t.type].text}`,children:t.name}),s.jsx("p",{className:"text-[10px] text-zinc-500 truncate",children:t.type})]}):s.jsx("p",{className:"text-xs text-zinc-600 truncate",children:g.description})}),s.jsx(Sa,{size:11,className:"text-zinc-500 shrink-0"})]}),s.jsx(Vt,{children:p&&s.jsxs(qe.div,{initial:{opacity:0,y:-4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-4,scale:.97},transition:{duration:.12},className:"absolute z-50 left-0 right-0 top-full mt-1 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden",children:[h.length===0?s.jsxs("p",{className:"text-xs text-zinc-500 px-3 py-2",children:["No hay BPs compatibles. Importa un ",g.accepts.join(" o "),"."]}):s.jsx("div",{className:"max-h-48 overflow-y-auto",children:h.map(y=>{const b=Xr[y.type];return s.jsxs("button",{onClick:()=>{a(n,y),u(!1)},className:`w-full flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 text-left transition-colors ${(t==null?void 0:t.id)===y.id?"bg-zinc-800":""}`,children:[s.jsx("span",{children:T0[y.type]}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("p",{className:`text-xs font-medium ${b.text}`,children:y.name}),s.jsx("p",{className:"text-[10px] text-zinc-500",children:y.brandId})]}),(t==null?void 0:t.id)===y.id&&s.jsx(co,{size:11,className:"text-emerald-400 shrink-0"})]},y.id)})}),t&&s.jsxs("button",{onClick:()=>{c(n),u(!1)},className:"w-full flex items-center gap-2 px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 border-t border-zinc-800 transition-colors",children:[s.jsx(uo,{size:11})," Limpiar slot"]})]})})]})}function $_(){const{importJSON:n,importFiles:t}=Au(),[r,a]=C.useState(""),[c,p]=C.useState(null),u=C.useRef(null),f=async()=>{var y;if(!r.trim())return;const h=await n(r);p(h.ok?{ok:!0,msg:`✅ Importado: ${(y=h.entry)==null?void 0:y.name}`}:{ok:!1,msg:`❌ ${h.error}`}),h.ok&&a(""),setTimeout(()=>p(null),3e3)},g=async h=>{var b;if(!((b=h.target.files)!=null&&b.length))return;const y=await t(h.target.files);p({ok:y.failed===0,msg:`✅ ${y.imported} importados${y.failed?` · ❌ ${y.failed} fallidos`:""}`}),setTimeout(()=>p(null),3e3),h.target.value=""};return s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("button",{onClick:()=>{var h;return(h=u.current)==null?void 0:h.click()},className:"flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-xs text-zinc-300 transition-colors",children:[s.jsx(pa,{size:12})," Archivos .json"]}),s.jsx("input",{ref:u,type:"file",accept:".json",multiple:!0,className:"hidden",onChange:g})]}),s.jsx("textarea",{value:r,onChange:h=>a(h.target.value),placeholder:`Pega aquí el JSON de un blueprint individual.

Ejemplo:
{
  "schema_version": "BP_PERSON_1.0",
  "displayName": "Patricia Osorio",
  ...
}

⚠️ No pegues el contexto exportado (=== BLUEPRINTS ACTIVOS ===) — ese formato es para prompts externos, no para importar.`,rows:12,className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-2 py-2 text-xs text-zinc-300 placeholder:text-zinc-500 outline-none focus:border-violet-500/50 resize-y font-mono leading-relaxed",style:{minHeight:"200px"}}),s.jsx("button",{onClick:f,disabled:!r.trim(),className:"w-full py-1.5 bg-zinc-700 hover:bg-zinc-600 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg text-xs text-zinc-200 transition-colors",children:"Importar JSON"}),s.jsx(Vt,{children:c&&s.jsx(qe.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0},className:`text-xs px-2 py-1.5 rounded-lg ${c.ok?"bg-emerald-500/10 text-emerald-400":"bg-red-500/10 text-red-400"}`,children:c.msg})})]})}function P_({onInject:n,injected:t,onClearInjection:r}){const[a,c]=C.useState(!1),[p,u]=C.useState("slots"),{blueprints:f,slots:g,filter:h,search:y,hydrate:b,assignSlot:v,clearSlot:_,clearAllSlots:k,deleteBlueprint:z,exportAll:$,setFilter:S,setSearch:T,getSlotContext:M}=Au();C.useEffect(()=>{b()},[]);const D=Object.entries(g).filter(([,W])=>!!W).length,F=f.filter(W=>h==="ALL"||W.type===h).filter(W=>!y||W.name.toLowerCase().includes(y.toLowerCase())||W.brandId.toLowerCase().includes(y.toLowerCase())),X=()=>{const W=M();W&&(n(W),c(!1))};return s.jsxs(s.Fragment,{children:[s.jsxs("button",{onClick:()=>c(W=>!W),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${t?"bg-emerald-500/15 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/20":D>0?"bg-violet-500/15 border-violet-500/40 text-violet-400 hover:bg-violet-500/20":"bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-300"}`,children:[s.jsx(gr,{size:13}),s.jsx("span",{children:"BPs"}),D>0&&s.jsx("span",{className:`text-[10px] px-1 rounded-full font-bold ${t?"bg-emerald-500/20 text-emerald-400":"bg-violet-500/20 text-violet-400"}`,children:D}),t&&s.jsx(gn,{size:11,className:"text-emerald-400"})]}),s.jsx(Vt,{children:a&&s.jsxs(s.Fragment,{children:[s.jsx(qe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-40 bg-black/40 backdrop-blur-sm",onClick:()=>c(!1)}),s.jsxs(qe.div,{initial:{opacity:0,x:24,scale:.97},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:24,scale:.97},transition:{type:"spring",damping:28,stiffness:400},className:"fixed right-4 top-4 bottom-4 z-50 w-96 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden",children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-zinc-800",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(gr,{size:15,className:"text-violet-400"}),s.jsx("span",{className:"text-sm font-semibold text-zinc-100",children:"Blueprint Library"}),s.jsxs("span",{className:"text-[10px] text-zinc-500 font-mono",children:[f.length," BPs"]})]}),s.jsx("button",{onClick:()=>c(!1),className:"p-1 text-zinc-500 hover:text-zinc-300 rounded-md hover:bg-zinc-800",children:s.jsx(uo,{size:14})})]}),s.jsx("div",{className:"flex border-b border-zinc-800",children:[["slots","Slots"],["library","Librería"],["import","Importar"]].map(([W,Y])=>s.jsxs("button",{onClick:()=>u(W),className:`flex-1 py-2 text-xs font-medium transition-colors ${p===W?"text-zinc-100 border-b-2 border-violet-400":"text-zinc-500 hover:text-zinc-300"}`,children:[Y,W==="slots"&&D>0&&s.jsx("span",{className:"ml-1 text-[9px] bg-violet-500/20 text-violet-400 px-1 rounded-full",children:D})]},W))}),s.jsxs("div",{className:"flex-1 overflow-y-auto",children:[p==="slots"&&s.jsxs("div",{className:"p-3 space-y-1.5",children:[s.jsx("p",{className:"text-[10px] text-zinc-600 px-1 mb-2",children:"Asigna BPs a slots para inyectar su contexto en el generador."}),A_.map(W=>s.jsx(j_,{slotId:W,bp:g[W],blueprints:f,onAssign:v,onClear:_},W)),D>0&&s.jsx("button",{onClick:k,className:"w-full mt-2 py-1.5 text-xs text-zinc-500 hover:text-red-400 border border-zinc-800 hover:border-red-500/30 rounded-lg transition-colors",children:"Limpiar todos los slots"})]}),p==="library"&&s.jsxs("div",{className:"p-3 space-y-2",children:[s.jsx("div",{className:"flex gap-1.5",children:["ALL","BP_PERSON","BP_LOCATION","BP_PRODUCT"].map(W=>s.jsx("button",{onClick:()=>S(W),className:`px-2 py-1 rounded-lg text-[10px] font-medium transition-colors ${h===W?"bg-violet-500/20 text-violet-400 border border-violet-500/30":"bg-zinc-800 text-zinc-500 hover:text-zinc-300 border border-transparent"}`,children:W==="ALL"?`Todos (${f.length})`:W.replace("BP_","")},W))}),s.jsx("input",{value:y,onChange:W=>T(W.target.value),placeholder:"Buscar por nombre o marca...",className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-2 py-1.5 text-xs text-zinc-300 placeholder:text-zinc-600 outline-none focus:border-zinc-500"}),F.length===0?s.jsx("p",{className:"text-xs text-zinc-600 text-center py-6",children:f.length===0?"No hay blueprints. Ve a Importar.":"Sin resultados."}):s.jsx("div",{className:"space-y-1.5",children:F.map(W=>s.jsx(N_,{bp:W,onDelete:()=>z(W.id)},W.id))}),f.length>0&&s.jsxs("button",{onClick:$,className:"w-full flex items-center justify-center gap-1.5 py-1.5 text-xs text-zinc-500 hover:text-zinc-300 border border-zinc-800 rounded-lg transition-colors",children:[s.jsx(ua,{size:11})," Backup all"]})]}),p==="import"&&s.jsx("div",{className:"p-3",children:s.jsx($_,{})})]}),s.jsxs("div",{className:"p-3 border-t border-zinc-800 space-y-2",children:[t?s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg",children:[s.jsx(co,{size:13,className:"text-emerald-400 shrink-0"}),s.jsx("p",{className:"text-xs text-emerald-400",children:"Contexto BP inyectado en el generador"})]}),s.jsxs("button",{onClick:()=>{r()},className:"w-full flex items-center justify-center gap-1.5 py-2 text-xs text-zinc-500 hover:text-red-400 border border-zinc-800 hover:border-red-500/30 rounded-lg transition-colors",children:[s.jsx(Wx,{size:12})," Quitar inyección"]})]}):s.jsxs("button",{onClick:X,disabled:D===0,className:"w-full flex items-center justify-center gap-2 py-2.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-sm font-semibold text-white transition-colors",children:[s.jsx(gn,{size:14}),"Inyectar contexto al generador"]}),D===0&&!t&&s.jsx("p",{className:"text-[10px] text-zinc-600 text-center",children:"Asigna al menos un slot para inyectar"})]})]})]})})]})}const T_="modulepreload",O_=function(n){return"/"+n},Sg={},L_=function(t,r,a){let c=Promise.resolve();if(r&&r.length>0){let u=function(h){return Promise.all(h.map(y=>Promise.resolve(y).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));c=u(r.map(h=>{if(h=O_(h),h in Sg)return;Sg[h]=!0;const y=h.endsWith(".css"),b=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${b}`))return;const v=document.createElement("link");if(v.rel=y?"stylesheet":T_,y||(v.as="script"),v.crossOrigin="",v.href=h,g&&v.setAttribute("nonce",g),document.head.appendChild(v),y)return new Promise((_,k)=>{v.addEventListener("load",_),v.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${h}`)))})}))}function p(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return c.then(u=>{for(const f of u||[])f.status==="rejected"&&p(f.reason);return t().catch(p)})},R_=[{id:"neurone_capissen_lotion",sku:"T067",display_name:"Capissen Lotion",collection:"Scalp",collection_id:"scalp",subcollection:"Anti-Caída / Capissen",subcollection_id:"anti_cada_capissen",description:"Loción capilar de uso diario. Ayuda a retrasar la caída prematura del cabello. SIN ENJUAGUE. Su avanzada TECNOLOGÍA DE PÉPTIDOS contribuye a optimizar los ciclos de crecimiento capilar, mejorar la densidad, engrosar y fortalecer el cabello.",description_enhanced:null,key_ingredients:[],benefit_claims:["contribuye al aspecto de densidad y fortaleza del cabello","cuidado del cuero cabelludo"],hair_type:["thinning","hair loss concern"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"pending",image_filename:"NACLOT.webp",format:"spray_applicator_bottle",size:"100ml",cross_sell:["neurone_capissen_shampoo","neurone_melanin_anti_g"],imagelab:{packaging_style:"spray_applicator_scalp",dominant_hex:"#E8E8E8",accent_hex:"#2A2A2A",lifestyle_context:["scalp treatment routine","hairline application","anti-loss ritual"],ugc_scenarios:["scalp applicator use","healthy scalp result","professional recommendation context"],hero_angle:"three_quarter_with_applicator",mood:"clinical, scalp care authority, prevention ritual",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NACLOT.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NACLOT.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_capissen_shampoo",sku:"L033",display_name:"Capissen Shampoo",collection:"Scalp",collection_id:"scalp",subcollection:"Anti-Caída / Capissen",subcollection_id:"anti_cada_capissen",description:"Shampoo de uso diario, auxiliar en la prevención de la caída del cabello. Su avanzada TECNOLOGÍA DE PÉPTIDOS contribuye a optimizar los ciclos de crecimiento capilar, mejorar la densidad, engrosar y fortalecer el cabello.",description_enhanced:null,key_ingredients:[],benefit_claims:["contribuye al aspecto de densidad","cuida el cuero cabelludo","fortalece la hebra capilar"],hair_type:["thinning","hair loss concern","fine hair"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"pending",image_filename:"NACSHA-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_capissen_lotion"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#F5F5F5",accent_hex:"#1A1A1A",lifestyle_context:["scalp care routine","anti-hair-loss ritual"],ugc_scenarios:["scalp application","healthy scalp aesthetic","hair density visual"],hero_angle:"front_portrait",mood:"clean white, clinical scalp care, professional",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NACSHA-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"dark",filename:"CAPISSEN_400_WEB.png",notes:"Fondo negro de estudio para landings, redes y campañas."},dark_available:!1}}},{id:"neurone_neurone_color",sku:"",display_name:"Neurone Color",collection:"Pro Salon / Colour",collection_id:"pro_salon_colour",subcollection:"Neurone Color",subcollection_id:"neurone_color",description:"El primer tinte de oxidación creado con tecnología NANO TRIBOLOGÍA CAPILAR que promueve el balance de lubricación de las hebras del cabello (Tribología) para una mejor penetración del color evitando el daño en el cabello y logrando una máxima duración del color con excelente cubrimiento de cana. Más de 70 tonos de oxidación permanente.",description_enhanced:null,key_ingredients:["quinoa protein","nano tribology complex","oxidative dyes"],benefit_claims:[],hair_type:[],price:"10.00",msrp:"10.00",b2b_only:!0,shopify_visibility:"pending",image_filename:"NCOLOR.webp",format:"tube_in_box",size:"90ml",cross_sell:["neurone_neuroxide","neurone_density_proff"],imagelab:{packaging_style:"tube_in_premium_box",dominant_hex:"#1A2F5A",accent_hex:"#C8C8A0",lifestyle_context:["salon coloring station","professional color tray","B2B showcase"],ugc_scenarios:["shade family display","professional application","before/after color result"],hero_angle:"box_front_portrait",mood:"navy premium, professional colorist authority, permanent color precision",image_usage:{standard:{filename:"NCOLOR.webp",background:"white"},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NCOLOR.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_controller",sku:"E006",display_name:"Controller",collection:"Styling",collection_id:"styling",subcollection:"Styling",subcollection_id:"styling",description:"Cera gel de máxima fijación con efecto de aspecto húmedo y con excelente resistencia a la humedad. Su textura permite hacer peinados artísticos o simplemente aplacar cabellos muy rebeldes. Para un estilo definido y controlado.",description_enhanced:null,key_ingredients:[],benefit_claims:["fijación extrema","efecto wet look","control total del peinado"],hair_type:["all hair types","medium to short styles"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NECONTR-3.webp",format:"jar_with_lid",size:"300g",cross_sell:["neurone_molding_toner"],imagelab:{packaging_style:"matte_black_jar",dominant_hex:"#1A1A1A",accent_hex:"#9A9A9A",lifestyle_context:["barbershop","men's grooming","editorial fashion"],ugc_scenarios:["wet look application","extreme hold demonstration","before/after slick style"],hero_angle:"top_and_front_duo",mood:"matte black authority, extreme hold, urban grooming",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NECONTR-3.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NECONTR-3.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_density_proff",sku:"",display_name:"Density Proff",collection:"Pro Salon / Peroxide",collection_id:"pro_salon_peroxide",subcollection:"Density Proff",subcollection_id:"density_proff",description:"Peróxido en crema estabilizado, su formulación proporciona una consistencia densa que permite tener mayor precisión y fácil manejo. Aumenta el poder de aclaración contribuyendo a mejorar la fijación del pigmento.",description_enhanced:null,key_ingredients:["hydrogen peroxide","high density formula"],benefit_claims:[],hair_type:[],price:"10.00",msrp:"10.00",b2b_only:!0,shopify_visibility:"pending",image_filename:"NCPROF.webp",format:"squeeze_bottle",size:"1L",cross_sell:["neurone_neurone_color","neurone_plattina_white"],imagelab:{packaging_style:"squeeze_bottle",dominant_hex:"#F5F5F5",accent_hex:"#2C8FBF",lifestyle_context:["salon coloring station","professional developer","B2B context"],ugc_scenarios:["high density texture","professional mixing","paired with Neurone Color"],hero_angle:"front_portrait",mood:"clean white, high density professional, salon precision",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NCPROF.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NCPLWT-2-1.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_depura_shampoo",sku:"L021",display_name:"Depura Shampoo",collection:"Scalp",collection_id:"scalp",subcollection:"Depura",subcollection_id:"depura",description:"Formulado a base de carbón activado y otros ingredientes purificantes y regenerantes, logrando una limpieza profunda que elimina impurezas en el cuero cabelludo y cabello, favoreciendo el crecimiento sano de la fibra capilar.",description_enhanced:null,key_ingredients:[],benefit_claims:["limpieza profunda","efecto purificante","elimina residuos de producto"],hair_type:["all hair types","oily scalp","product buildup"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NLSDEP-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_menthol_ice_shampoo"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#F5F5F5",accent_hex:"#1A1A1A",lifestyle_context:["shower","clean routine","clarifying treatment"],ugc_scenarios:["product buildup before/after","scalp clarifying routine","clean minimal aesthetic"],hero_angle:"front_portrait",mood:"white clean minimalism, purifying, detox aesthetic",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NLSDEP-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NLSDEP-1-1.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_derma_roller",sku:"PR041",display_name:"Derma Roller",collection:"Scalp",collection_id:"scalp",subcollection:"Anti-Caída",subcollection_id:"anti_cada",description:"Rodillo de Microagujas de Titanio. Auxiliar para tratar el adelgazamiento capilar.",description_enhanced:null,key_ingredients:["titanium microneedles"],benefit_claims:["auxiliar para el cuidado del cuero cabelludo","contribuye al aspecto del cabello"],hair_type:["thinning hair","hair loss concern"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"pending",image_filename:"NACDR.webp",format:"box_with_device",size:"1 pieza",cross_sell:["neurone_capissen_lotion","neurone_melanin_anti_g"],imagelab:{packaging_style:"box_with_device",dominant_hex:"#1A2F5A",accent_hex:"#FFFFFF",lifestyle_context:["scalp care routine","professional treatment context","B2B/salon preferred"],ugc_scenarios:["packaging display","device detail","salon professional use"],hero_angle:"product_and_packaging_duo",mood:"clinical, professional, scalp authority",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NACDR.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NACDR.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_dy_fazza_color",sku:"T062",display_name:"DY Fazza Color",collection:"Color Rescue",collection_id:"color_rescue",subcollection:"DY Fazza",subcollection_id:"dy_fazza",description:"Tratamiento hidratante en dos fases para cabello teñido que desenreda, aportando vitalidad y fuerza. Sus ingredientes ayudan a proteger el color del cabello teñido alargando su duración y evitando el deslave.",description_enhanced:null,key_ingredients:["2-phase formula"],benefit_claims:["hidrata el cabello teñido sin enjuague","nutre la hebra coloreada","contribuye a prolongar la viveza del color"],hair_type:["color-treated","dyed","bleached","colored hair"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"dyfazzacolor_400_web.png",format:"spray_bottle",size:"400ml",cross_sell:["neurone_dyfensor_shampoo","neurone_dyfensor_serum","neurone_total_violet_mask"],imagelab:{packaging_style:"spray_bottle",dominant_hex:"#E8A0C8",accent_hex:"#9A3A7A",lifestyle_context:["post-color routine","color maintenance ritual","paired with Dyfensor line"],ugc_scenarios:["shake-before-use 2-phase visual","application on color-treated hair","color longevity before/after","Color Rescue line pairing"],hero_angle:"front_portrait",mood:"pink gradient luxury, color protection, vibrant color-care",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"dyfazzacolor_400_web.png",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"dark",filename:"dyfazzacolor_400_web.png",notes:"Fondo negro de estudio para landings, redes y campañas."},dark_available:!0}}},{id:"neurone_dy_fazza",sku:"T029",display_name:"DY Fazza",collection:"Moisture",collection_id:"moisture",subcollection:"DY Fazza",subcollection_id:"dy_fazza",description:"Tratamiento nutritivo en dos fases altamente hidratante y desenredante que aporta flexibilidad al cabello para evitar su ruptura. Protege al cabello de los daños causados por el medio ambiente, el sol, las herramientas de calor y procesos químicos controlando el frizz, aportando vitalidad, hidratación, volumen y fuerza.",description_enhanced:null,key_ingredients:["2-phase formula"],benefit_claims:["hidrata en profundidad","nutre la hebra","sin enjuague — fácil de aplicar"],hair_type:["dry","dehydrated","curly","coarse"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NLSDYLS-1-1.webp",format:"spray_bottle",size:"400ml",cross_sell:["neurone_humit_mask","neurone_hyaloneurine"],imagelab:{packaging_style:"spray_bottle",dominant_hex:"#5BB8E8",accent_hex:"#1A4F9A",lifestyle_context:["shower","bathroom counter","post-wash routine"],ugc_scenarios:["shake before use","spray application","hydration result on hair"],hero_angle:"front_portrait",mood:"fresh, hydrating, blue ocean energy",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NLSDYLS-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"dark",filename:"dyfazza_400_web.png",notes:"Fondo negro de estudio para landings, redes y campañas."},dark_available:!0}}},{id:"neurone_dyfensor_serum",sku:"S006",display_name:"Dyfensor Hair Restructuring Serum",collection:"Color Rescue",collection_id:"color_rescue",subcollection:"Dyfensor",subcollection_id:"dyfensor",description:"Suero que recubre las zonas dañadas del cabello brindando una profunda restauración capilar. Protege el color del cabello teñido prolongando su duración para mantener un color radiante y duradero.",description_enhanced:null,key_ingredients:[],benefit_claims:["reestructura la hebra","protege el color","sella la cutícula"],hair_type:["color-treated","bleached","damaged"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NSERCPT-4.webp",format:"pump_serum_bottle",size:"25ml",cross_sell:["neurone_total_violet_shampoo","neurone_plattina_shampoo"],imagelab:{packaging_style:"slim_pump_serum",dominant_hex:"#F0F0F0",accent_hex:"#8B1A4A",lifestyle_context:["vanity flatlay","post-color treatment","salon finishing"],ugc_scenarios:["drop application","shine result","serum texture close-up"],hero_angle:"front_portrait",mood:"minimal, clinical-luxury, color protection",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NSERCPT-4.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"dark",filename:"DYFENSOR_25ML_WEB.png",notes:"Fondo negro de estudio para landings, redes y campañas."},dark_available:!1}}},{id:"neurone_dyfensor_shampoo",sku:"L024",display_name:"Dyfensor Sulfate Free Shampoo",collection:"Color Rescue",collection_id:"color_rescue",subcollection:"Dyfensor",subcollection_id:"dyfensor",description:"Shampoo libre de sulfatos de acción suave que limpia el cabello cuidando el color y manteniéndolo por más tiempo sin causar irritaciones o molestias al cuero cabelludo. Mantiene los aceites naturales que produce la piel cabelluda reduciendo el efecto de pelo rebelde y encrespado para lograr un cabello más fuerte, saludable y con colores vibrantes.",description_enhanced:null,key_ingredients:["sulfate-free cleansing agents"],benefit_claims:["libre de sulfatos","protege el color del cabello teñido","limpieza suave que prolonga el color"],hair_type:["color-treated","dyed","bleached"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"dyfensorsh_400_web.png",format:"pump_bottle",size:"400ml",cross_sell:["neurone_dyfensor_serum","neurone_total_violet_mask"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#4A1942",accent_hex:"#8B1A4A",lifestyle_context:["color-care routine","salon color maintenance","paired with Dyfensor Serum"],ugc_scenarios:["sulfate-free lather","color longevity before/after","color-treated hair care"],hero_angle:"front_portrait",mood:"deep plum luxury, color protection, sulfate-free clean",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"dyfensorsh_400_web.png",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"dark",filename:"dyfensorsh_400_web.png",notes:"Fondo negro de estudio para landings, redes y campañas."},dark_available:!0}}},{id:"neurone_fanzi_mix",sku:"",display_name:"Fanzi Mix",collection:"Pro Salon / Colour",collection_id:"pro_salon_colour",subcollection:"Fanzi Mix",subcollection_id:"fanzi_mix",description:"Crema de color semipermanente acondicionadora para lograr tonos de fantasía. Deja el cabello manejable, sedoso y brillante. Sin peróxido ni amoniaco. Se pueden crear nuevos tonos mezclándolos entre sí o utilizando FANZI MIX TONE DOWN para dar tonos pastel.",description_enhanced:null,key_ingredients:["direct dyes / pigments"],benefit_claims:[],hair_type:[],price:"10.00",msrp:"10.00",b2b_only:!0,shopify_visibility:"pending",image_filename:"NCFAMIX.webp",format:"squeeze_bottle",size:"200ml",imagelab:{packaging_style:"squeeze_bottle_family",lifestyle_context:["colorist station","salon fantasy color","rainbow display"],ugc_scenarios:["color mixing","fantasy color application","vibrant hair result"],hero_angle:"family_grid",mood:"vibrant, fantasy, professional colorist, salon exclusive",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NCFAMIX.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NCFAMIX.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_geometry_cream",sku:"E012",display_name:"Geometry Cream",collection:"Styling",collection_id:"styling",subcollection:"Geometry",subcollection_id:"geometry",description:"Ideal para marcar rizos con efecto elástico y controlar el frizz otorgando brillo y textura al cabello. Enriquecida con Queratina Hidrolizada que otorga resistencia y acondicionamiento al cabello.",description_enhanced:null,key_ingredients:[],benefit_claims:["define los rizos con textura cremosa","aporta elasticidad","control del frizz"],hair_type:["curly","wavy","coily"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NGEOMC-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_geometry_gel"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#9A9A9A",accent_hex:"#4A4A4A",lifestyle_context:["curl styling routine","wash-and-go","curly hair model"],ugc_scenarios:["cream application texture","defined curls result","paired with Geometry Gel"],hero_angle:"front_portrait",mood:"sleek silver, curl care, sister product to Geometry Gel",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NGEOMC-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NGEOMC-1.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_geometry_gel",sku:"E008",display_name:"Geometry Gel",collection:"Styling",collection_id:"styling",subcollection:"Geometry",subcollection_id:"geometry",description:"Gel líquido que brinda una combinación de estilizado y acondicionamiento. Ideal para otorgar textura, moldear y marcar rizos con efecto elástico y controlar el frizz. Retiene y define los rizos proporcionando una fijación flexible y suave con efecto memoria.",description_enhanced:null,key_ingredients:[],benefit_claims:["define los rizos","aporta elasticidad","efecto anti-frizz"],hair_type:["curly","wavy","coily"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NEGEOGE-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_geometry_cream"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#9A9A9A",accent_hex:"#4A4A4A",lifestyle_context:["curl styling routine","shower to style","editorial curly hair"],ugc_scenarios:["curl definition result","application on wet hair","before/after frizz"],hero_angle:"front_portrait",mood:"sleek silver, curl authority, anti-frizz precision",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NEGEOGE-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NEGEOGE-1-1.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_green_100",sku:"T109",display_name:"Green 100",collection:"Restore",collection_id:"restore",subcollection:"Green 100",subcollection_id:"green_100",description:"Serum vegetal para cabello extremadamente reseco, poroso y químicamente procesado. PRODUCTO 100% VERDE. Libre de siliconas, 100% origen vegetal. Humecta, aporta brillo desbordante, controla el frizz, sella la cutícula, protege el color y facilita el deslizamiento de herramientas de estilizado.",description_enhanced:null,key_ingredients:["vegetable extracts"],benefit_claims:["restaura la hebra seca y porosa","nutre con activos vegetales","favorece la suavidad y flexibilidad"],hair_type:["extremely dry","porous","chemically processed","bleached"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NTGREEN-2.webp",format:"spray_serum_bottle",size:"25ml",cross_sell:["neurone_kerasin_hb_mask","neurone_kerasin_hb_leave_in"],imagelab:{packaging_style:"slim_spray_serum",dominant_hex:"#2A7A3A",accent_hex:"#8BC34A",lifestyle_context:["natural/organic flatlay","dry hair treatment","green aesthetic"],ugc_scenarios:["extremely dry hair before/after","application","natural ingredients visual"],hero_angle:"front_portrait",mood:"natural, green, botanical rescue, clean ingredients",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NTGREEN-2.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NTGREEN-2.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_humit_mask",sku:"T035",display_name:"Humit Mask",collection:"Moisture",collection_id:"moisture",subcollection:"Humit",subcollection_id:"humit",description:"Mascarilla acondicionadora de alta humectación. Brinda una prolongada y eficaz restauración capilar e intenso acondicionamiento, reduciendo el frizz para una cabellera brillante, suave y controlada.",description_enhanced:null,key_ingredients:[],benefit_claims:["hidratación intensa","acondiciona","suaviza y aporta brillo"],hair_type:["dry","damaged","dehydrated","over-processed"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NTHUMA-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_dy_fazza","neurone_hyaloneurine"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#F5EDD5",accent_hex:"#2C3E6B",lifestyle_context:["bathroom counter","spa treatment aesthetic","shower shelf"],ugc_scenarios:["mask application","hydrated hair result","before/after dry to moisturized"],hero_angle:"front_portrait",mood:"warm, creamy, luxurious hydration, spa-like",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NTHUMA-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"dark",filename:"humitmask_400_web.png",notes:"Fondo negro de estudio para landings, redes y campañas."},dark_available:!0}}},{id:"neurone_humit_shampoo",sku:"L013",display_name:"Humit Shampoo",collection:"Moisture",collection_id:"moisture",subcollection:"Humit",subcollection_id:"humit",description:"Ideal para cabelleras que sufren de gran deshidratación, ya que genera una prolongada y eficaz restauración capilar. Proporciona un intenso acondicionamiento que mejora notablemente la manejabilidad del cabello, reduciendo el frizz, logrando un cabello brillante, suave y controlado.",description_enhanced:null,key_ingredients:[],benefit_claims:["humectación intensa","acondiciona mientras limpia","suaviza la hebra seca"],hair_type:["dry","damaged","dehydrated"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NLSHUM-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_humit_mask","neurone_dy_fazza"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#1A5F7A",accent_hex:"#2C3E6B",lifestyle_context:["shower","hydration routine","paired with Humit Mask"],ugc_scenarios:["creamy lather","hydrated hair result","dry to moisturized transformation"],hero_angle:"front_portrait",mood:"deep teal, moisture immersion, spa hydration",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NLSHUM-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"dark",filename:"HUMIT_SH_1L.png",notes:"Fondo negro de estudio para landings, redes y campañas."},dark_available:!0}}},{id:"neurone_hyaloneurine",sku:"S005",display_name:"Hyaloneurine Face & Hair Serum",collection:"Moisture",collection_id:"moisture",subcollection:"Hyaloneurine",subcollection_id:"hyaloneurine",description:"Fórmula única de suero anti-edad a base de Ácido Hialurónico, Colágeno y Elastina desarrollada para su uso en piel y cabello. Sus ingredientes hacen sinergia para devolver la luminosidad, suavidad y lozanía a la piel y al cabello.",description_enhanced:null,key_ingredients:["hyaluronic acid","elastin"],benefit_claims:["hidrata cara y cabello","favorece la elasticidad","contribuye al aspecto antiedad de la piel","nutre y suaviza la hebra capilar"],hair_type:["all hair types","mature hair","dry hair"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NSERHYA.webp",format:"pump_serum_bottle",size:"50ml",cross_sell:["neurone_humit_mask","neurone_dy_fazza"],imagelab:{packaging_style:"slim_pump_serum",dominant_hex:"#C8D0DC",accent_hex:"#2C3E6B",lifestyle_context:["vanity with skincare","face + hair dual use","clean beauty flatlay"],ugc_scenarios:["face application","hair serum use","dual-use demonstration"],hero_angle:"front_portrait",mood:"clean, scientific, hydration luxury, dual-purpose premium",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NSERHYA.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NSERHYA.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_kerasin_hb_leave_in",sku:"T059",display_name:"Kerasin HB Leave-In",collection:"Restore",collection_id:"restore",subcollection:"Kerasin HB",subcollection_id:"kerasin_hb",description:"Tratamiento sin enjuague, enriquecido con Ácido Hialurónico, Queratina y Biotina que restauran la elasticidad del cabello dañado y sobre procesado. De textura ligera para una fácil absorción que brinda manejabilidad y gran sedosidad.",description_enhanced:null,key_ingredients:["keratin","hyaluronic acid","biotin"],benefit_claims:["repara sin enjuague","fortalece la hebra","nutre con keratina y biotina"],hair_type:["damaged","brittle","chemically treated"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NTKHBLN.webp",format:"pump_bottle",size:"100ml",cross_sell:["neurone_kerasin_hb_shampoo","neurone_kerasin_hb_mask"],imagelab:{packaging_style:"pump_bottle_compact",dominant_hex:"#8B5A2B",accent_hex:"#C47C30",lifestyle_context:["post-wash routine","styling station","travel kit"],ugc_scenarios:["application on damp hair","no-rinse step in routine","before/after repair"],hero_angle:"front_portrait",mood:"warm bronze, professional repair, salon quality at home",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NTKHBLN.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NTKHBLN.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_kerasin_hb_mask",sku:"T058",display_name:"Kerasin HB Mask",collection:"Restore",collection_id:"restore",subcollection:"Kerasin HB",subcollection_id:"kerasin_hb",description:"Mascarilla reparadora para cabello dañado y sobre procesado. A base de Ácido Hialurónico, Queratina, Biotina y proteínas que fortalecen el cabello, reparándolo y nutriéndolo profundamente para reconstruir la fuerza, mejorar la textura y restaurar su elasticidad.",description_enhanced:null,key_ingredients:["keratin","hyaluronic acid","biotin"],benefit_claims:["repara intensamente","aporta keratina y biotina","restaura la hebra maltratada"],hair_type:["damaged","brittle","porous","chemically processed"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NTKHBMK-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_kerasin_hb_shampoo","neurone_kerasin_hb_leave_in"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#F5F0E8",accent_hex:"#8B5A2B",lifestyle_context:["shower","treatment ritual","salon station"],ugc_scenarios:["deep treatment application","before/after damaged hair","salon mask ritual"],hero_angle:"front_portrait",mood:"warm bronze on white, premium repair, before/after transformation",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NTKHBMK-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NTKHBMK-1-1.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_kerasin_hb_shampoo",sku:"L029",display_name:"Kerasin HB Shampoo",collection:"Restore",collection_id:"restore",subcollection:"Kerasin HB",subcollection_id:"kerasin_hb",description:"Con Ácido Hialurónico, Queratina y Biotina que ayudan a reparar el daño del cabello maltratado y sobreprocesado desde su interior, para mantener fuerte, lubricada y protegida la superficie del cabello, reduciendo el daño causado por tratamientos químicos, factores ambientales o el uso de herramientas de estilizado.",description_enhanced:null,key_ingredients:["keratin","hyaluronic acid","biotin"],benefit_claims:["repara","fortalece","nutre la hebra capilar"],hair_type:["damaged","chemically treated","brittle","porous"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NLSKHB-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_kerasin_hb_mask","neurone_kerasin_hb_leave_in"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#8B5A2B",accent_hex:"#C47C30",lifestyle_context:["shower shelf","salon station","product lineup"],ugc_scenarios:["application lather","damaged-to-healthy transformation","ingredient highlight"],hero_angle:"front_portrait",mood:"warm, restorative, professional repair",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NLSKHB-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"dark",filename:"kerasinsh_400_web.png",notes:"Fondo negro de estudio para landings, redes y campañas."},dark_available:!0}}},{id:"neurone_licra_web",sku:"E016",display_name:"Licra Web",collection:"Styling",collection_id:"styling",subcollection:"Styling",subcollection_id:"styling",description:"Pasta para el cabello con efecto telaraña. Su fórmula permite dar definición al peinado, con fijación ligera y gran textura al cabello.",description_enhanced:null,key_ingredients:[],benefit_claims:["fijación ligera","efecto telaraña","define y da textura"],hair_type:["all hair types","medium to short hair"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NLYCW.webp",format:"jar_with_lid",size:"70g",cross_sell:["neurone_lisothermic","neurone_thermo_dual"],imagelab:{packaging_style:"round_jar",dominant_hex:"#E8E8E8",accent_hex:"#9A9A9A",lifestyle_context:["vanity countertop","barbershop aesthetic","men/women styling"],ugc_scenarios:["texture application between fingers","before/after texture effect","web effect demonstration"],hero_angle:"top_and_front_duo",mood:"textured, editorial, minimal, unisex",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NLYCW.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NLYCW.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_lisothermic",sku:"T040",display_name:"Lisothermic",collection:"Styling",collection_id:"styling",subcollection:"Styling",subcollection_id:"styling",description:"Crema de estilizado que ofrece protección contra el calor extremo y reduce los efectos dañinos de las herramientas de calor. Contribuye a lograr un impresionante alaciado temporal, otorgando máxima suavidad al cabello y brillo espectacular. También se puede utilizar como crema de peinar.",description_enhanced:null,key_ingredients:["thermal protective complex"],benefit_claims:["protege del calor","favorece el alaciado temporal","suaviza la hebra"],hair_type:["all hair types","wavy","curly hair seeking temporary straightening"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NTLISOTH-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_thermo_dual","neurone_neurona_gloss"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#A8A8A8",accent_hex:"#5A5A5A",lifestyle_context:["styling station","blowdry setup","flat iron routine"],ugc_scenarios:["heat protection application","smooth blowout result","before/after frizzy to smooth"],hero_angle:"front_portrait",mood:"sleek silver, professional thermal care, salon-grade precision",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NTLISOTH-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NTLISOTH-1-1.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_melanin_anti_g",sku:"A003",display_name:"Melanin Anti G",collection:"Scalp",collection_id:"scalp",subcollection:"Melanin",subcollection_id:"melanin",description:"Loción capilar para el cabello. Efecto Anti-Canas. De uso diario. Contribuye a reducir el proceso de pérdida de Melanina y activar su generación en el folículo capilar, que se hará visible con el crecimiento del nuevo cabello. Su tecnología de Péptidos contribuye a energizar, nutrir y engrosar la cutícula capilar.",description_enhanced:null,key_ingredients:["peptides"],benefit_claims:["efecto anti-canas","tecnología de péptidos","favorece el aspecto más joven del cabello"],hair_type:["gray hair","premature gray","all hair types for prevention"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NTMELA.webp",format:"spray_applicator_bottle",size:"100ml",cross_sell:["neurone_menthol_ice_shampoo"],imagelab:{packaging_style:"spray_applicator_scalp",dominant_hex:"#E0E0E0",accent_hex:"#2A2A2A",lifestyle_context:["scalp treatment routine","mirror application","hairline focus"],ugc_scenarios:["scalp applicator in use","before/after gray reduction visual","peptide technology graphic"],hero_angle:"three_quarter_with_applicator",mood:"clinical precision, anti-aging authority, scalp science",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NTMELA.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NTMELA.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_menthol_ice_shampoo",sku:"L026",display_name:"Menthol Ice Shampoo",collection:"Scalp",collection_id:"scalp",subcollection:"Menthol Ice",subcollection_id:"menthol_ice",description:"Shampoo refrescante y fortalecedor que remueve las impurezas y grasa del cuero cabelludo, activando la oxigenación y circulación para estimular el crecimiento capilar y lograr un cabello mucho más suave, notablemente más grueso, resistente y sano.",description_enhanced:null,key_ingredients:["menthol"],benefit_claims:["refresca el cuero cabelludo","fortalece","contribuye al volumen"],hair_type:["all hair types","oily scalp","fine hair needing volume"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NLSMICE-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_melanin_anti_g"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#F5F5F5",accent_hex:"#1A1A1A",lifestyle_context:["shower","salon","clean minimal flatlay"],ugc_scenarios:["scalp massage application","clean hair result","mint/ice visual metaphor"],hero_angle:"front_portrait",mood:"clean, fresh, crisp, minimalist",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NLSMICE-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NLSMICE-1-1.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_molding_toner",sku:"E007",display_name:"Molding Toner",collection:"Styling",collection_id:"styling",subcollection:"Styling",subcollection_id:"styling",description:"Crema gel de fijación media que funciona para estilizar, moldear, definir rizos y al mismo tiempo matizar el cabello a tonos platinados dándole cuerpo, volumen y brillo. En cabello cano, se logra un tono luminoso platinado.",description_enhanced:null,key_ingredients:["platinum toning pigments"],benefit_claims:["moldea y estiliza","matiza tonos no deseados en cabello platinado","fijación con efecto matizante"],hair_type:["platinum","silver","blonde","gray"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NEMOLON-3.webp",format:"jar_with_lid",size:"300g",cross_sell:["neurone_plattina_shampoo","neurone_controller"],imagelab:{packaging_style:"matte_black_jar",dominant_hex:"#1A1A1A",accent_hex:"#C8C8D4",lifestyle_context:["platinum hair styling","barbershop premium","silver hair model"],ugc_scenarios:["platinum hair application","toning while styling","paired with Plattina line"],hero_angle:"top_and_front_duo",mood:"matte black luxury, silver nuance, platinum editorial",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NEMOLON-3.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NEMOLON-3.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_neurona_gloss",sku:"T032",display_name:"Neurona Gloss",collection:"Styling",collection_id:"styling",subcollection:"Styling",subcollection_id:"styling",description:"Tratamiento en serum que actúa formando una barrera protectora en el cabello, previniendo la formación de puntas abiertas, controlando el frizz y aportando sedosidad, suavidad, manejabilidad y un intenso brillo.",description_enhanced:null,key_ingredients:[],benefit_claims:["brillo instantáneo","protección térmica","flexibilidad y sedosidad"],hair_type:["all hair types","dull hair","frizzy hair"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NCNEU-6.webp",format:"pump_bottle",size:"100ml",cross_sell:["neurone_thermo_dual","neurone_lisothermic"],imagelab:{packaging_style:"pump_bottle_compact",dominant_hex:"#E8E8E8",accent_hex:"#9A9A9A",lifestyle_context:["vanity finish","salon finishing station","bright studio light"],ugc_scenarios:["gloss application","shine result on dark hair","finishing touch"],hero_angle:"front_portrait",mood:"glossy, luminous, clean minimal, finishing luxury",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NCNEU-6.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NTTHERM.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_neuroxide",sku:"",display_name:"Neuroxide Cream Developer",collection:"Pro Salon / Peroxide",collection_id:"pro_salon_peroxide",subcollection:"Neuroxide",subcollection_id:"neuroxide",description:"Peróxido en crema estabilizado con innovador sistema de emulsión y acondicionamiento para una coloración o aclaración del cabello con el menor daño posible a la cutícula y menor irritación al cuero cabelludo promoviendo una extraordinaria penetración de los pigmentos.",description_enhanced:null,key_ingredients:[],benefit_claims:[],hair_type:[],price:"10.00",msrp:"10.00",b2b_only:!0,shopify_visibility:"pending",image_filename:"NCNEU-6.webp",format:"squeeze_bottle",size:"1L",cross_sell:["neurone_neurone_color","neurone_plattina_white"],imagelab:{packaging_style:"squeeze_bottle_family",dominant_hex:"#F5F5F5",accent_hex:"#2C3E6B",lifestyle_context:["salon coloring station","professional developer","B2B product lineup"],ugc_scenarios:["vol selector visual","professional mixing","salon application"],hero_angle:"family_lineup",mood:"clean white professional, salon precision, oxidative authority",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NCNEU-6.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NCNEU-6.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_plattina_shampoo",sku:"L028",display_name:"Plattina Shampoo",collection:"Color Rescue",collection_id:"color_rescue",subcollection:"Plattina",subcollection_id:"plattina",description:"Ideal para cabelleras canosas en las que se necesite neutralizar el tono amarillento y lograr un extraordinario color platino. Intensifica y otorga brillo al cabello negro o decolorado y lo mantiene en tonalidades grises con reflejos platinados, haciéndolo lucir con brillo, sedosidad e hidratación.",description_enhanced:null,key_ingredients:["platinum toning pigments"],benefit_claims:["matiza tonos no deseados","mantiene el platino brillante","limpia sin dañar el color"],hair_type:["platinum","silver","very light blonde","gray"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NLSPLAT-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_total_violet_mask","neurone_total_violet_shampoo"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#4A1942",accent_hex:"#8B1A4A",lifestyle_context:["salon vanity","platinum hair model","luxury flatlay"],ugc_scenarios:["before/after platinum maintenance","application","color comparison"],hero_angle:"front_portrait",mood:"luxurious, deep purple, salon-grade exclusivity",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NLSPLAT-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NLSPLAT-1-1.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_plattina_white",sku:"D003",display_name:"Plattina White",collection:"Pro Salon / Bleaching",collection_id:"pro_salon_bleaching",subcollection:"Plattina White",subcollection_id:"plattina_white",description:"Polvo decolorante con tecnología NANO TRIBOLOGÍA CAPILAR, que permite reducir el daño al cabello durante el proceso de la decoloración y menor grado de irritación sobre el cuero cabelludo. Sus ingredientes actúan interna y externamente logrando una decoloración homogénea con un cabello suave y con brillo.",description_enhanced:null,key_ingredients:["bleaching agents","nanotribology complex"],benefit_claims:[],hair_type:[],price:"10.00",msrp:"10.00",b2b_only:!0,shopify_visibility:"pending",image_filename:"NCPLWT.webp",format:"jar_with_lid",size:"400g",cross_sell:["neurone_neuroxide","neurone_density_proff"],imagelab:{packaging_style:"professional_jar",dominant_hex:"#F5F5F5",accent_hex:"#2C3E6B",lifestyle_context:["salon coloring station","professional bleaching setup","B2B showcase"],ugc_scenarios:["product display","professional bleaching process","before/after blonde"],hero_angle:"front_portrait",mood:"clean white professional, salon-grade precision",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NCPLWT.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NCPLWT.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_pro_filus",sku:"D006",display_name:"Pro Filus",collection:"Pro Salon / Bleaching",collection_id:"pro_salon_bleaching",subcollection:"Pro Filus",subcollection_id:"pro_filus",description:"Polvo protector de la hebra capilar para decoloraciones en el cabello altamente procesado. Su fórmula ayuda a combatir los daños que el cabello sufre durante estos procesos, reduciendo la rotura, reparándolo y manteniendo su integridad.",description_enhanced:null,key_ingredients:["protective complex for bleaching"],benefit_claims:[],hair_type:[],price:"10.00",msrp:"10.00",b2b_only:!0,shopify_visibility:"pending",image_filename:"NCPLWT-2-1.webp",format:"large_jar",size:"200g",cross_sell:["neurone_plattina_white","neurone_neuroxide"],imagelab:{packaging_style:"large_matte_black_jar",dominant_hex:"#1A1A1A",accent_hex:"#C47C30",lifestyle_context:["bleaching station","professional colorist setup","B2B showcase"],ugc_scenarios:["product display","professional bleaching protection context","before/after highly processed hair"],hero_angle:"front_portrait",mood:"matte black authority, professional protection, salon-exclusive premium",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NCPLWT-2-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NCPROF.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_regress",sku:"D008",display_name:"Regress Color Remover Kit",collection:"Pro Salon",collection_id:"pro_salon",subcollection:"Pro Salon",subcollection_id:"pro_salon",description:"Sistema para la extracción de color artificial que revierte el proceso del tinte de oxidación regresando el cabello a su melanina original. No contiene amoniaco, decolorante ni formaldehído.",description_enhanced:null,key_ingredients:[],benefit_claims:["extrae el color de oxidación","prepara para recoloración"],hair_type:["all hair types with permanent color"],price:"10.00",msrp:"10.00",b2b_only:!0,shopify_visibility:"pending",image_filename:"NREGRE.webp",format:"box_kit_2_pieces",size:"200ml x2 pieces",imagelab:{packaging_style:"premium_box_kit",dominant_hex:"#1A2F5A",accent_hex:"#FFFFFF",lifestyle_context:["salon professional station","colorist toolkit","B2B product showcase"],ugc_scenarios:["professional application","before/after color removal","salon context only"],hero_angle:"front_portrait",mood:"professional, authoritative, navy precision, salon-exclusive",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NREGRE.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NREGRE.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_resplander_shine",sku:"E017",display_name:"Resplander Shine",collection:"Styling",collection_id:"styling",subcollection:"Styling",subcollection_id:"styling",description:"Spray de brillo y acondicionamiento que contribuye a dar al cabello un aspecto vibrante, luminoso, hidratado y saludable, incluso en cabello dañado y sobre procesado. Su fórmula no grasosa y ligera acondiciona dando sedosidad y suavidad al cabello.",description_enhanced:null,key_ingredients:[],benefit_claims:["brillo instantáneo","acondiciona el cabello","acabado luminoso"],hair_type:["all hair types"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NERESPSH.webp",format:"spray_bottle",size:"100ml",cross_sell:["neurone_neurona_gloss","neurone_thermo_dual"],imagelab:{packaging_style:"spray_bottle_metallic",dominant_hex:"#6A6A6A",accent_hex:"#C8C8C8",lifestyle_context:["finishing touch","salon finishing station","photo shoot prep"],ugc_scenarios:["shine spray in action","luminous hair close-up","editorial gloss"],hero_angle:"front_portrait",mood:"gunmetal editorial, instant luminosity, photo-ready finish",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NERESPSH.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NERESPSH.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_revenant_color",sku:"",display_name:"Revenant Color",collection:"Color Rescue",collection_id:"color_rescue",subcollection:"Revenant Color",subcollection_id:"revenant_color",description:"Mascarilla nutritiva de color semipermanente que realza el tono del color existente e intensifica reflejos, dando al cabello un aspecto sedoso y gran luminosidad. Todos los tonos son intermezclables para personalizar y crear nuevos tonos.",description_enhanced:null,key_ingredients:["color pigments","nourishing complex"],benefit_claims:["intensifica el color","nutre la hebra","ayuda a reparar el cabello"],hair_type:["color-treated","bleached","all hair types needing color refresh"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NTREVCO-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_total_violet_shampoo","neurone_plattina_shampoo"],imagelab:{packaging_style:"premium_pump_bottle_family",lifestyle_context:["color studio","salon station","rainbow lineup display"],ugc_scenarios:["variant selector","color intensity before/after","shade match consultation"],hero_angle:"family_lineup",mood:"rich color spectrum, salon professional, color artistry",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NTREVCO-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NTREVCO-1-1.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_thermo_dual",sku:"T042",display_name:"Thermo Dual",collection:"Styling",collection_id:"styling",subcollection:"Styling",subcollection_id:"styling",description:"Protector térmico de doble acción. Protege al cabello del calor intenso de los dispositivos térmicos y a la vez repara los daños causados a la cutícula sin dejarlo pesado ni grasoso. Brinda máxima suavidad e impresionante brillo.",description_enhanced:null,key_ingredients:["thermal protective complex"],benefit_claims:["protege del calor","ayuda a reparar","dual action: protector + tratamiento"],hair_type:["all hair types","heat-styled hair"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NTTHERM__1_.webp",format:"spray_bottle",size:"200ml",cross_sell:["neurone_lisothermic","neurone_neurona_gloss"],imagelab:{packaging_style:"spray_bottle_premium",dominant_hex:"#5A5A5A",accent_hex:"#9A9A9A",lifestyle_context:["styling station","flat iron setup","blowdry routine"],ugc_scenarios:["spray before heat","heat tool + protector","damage prevention concept"],hero_angle:"front_portrait",mood:"dark metallic, heat precision, dual-function professional",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NTTHERM__1_.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"dark",filename:"NTTHERM.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!0}}},{id:"neurone_total_violet_ink",sku:"C180",display_name:"Total Violet Ink",collection:"Pro Salon / Colour",collection_id:"pro_salon_colour",subcollection:"Total Violet",subcollection_id:"total_violet",description:"Pigmento puro violeta mega concentrado, ideal para eliminar visos naranjas o amarillos y dar luz a los reflejos rubios platinados. Se puede mezclar con el producto que más se adapte al cabello, ya sea tinte, shampoo, acondicionador, mascarillas, etc.",description_enhanced:null,key_ingredients:["pure violet pigment concentrate"],benefit_claims:[],hair_type:[],price:"10.00",msrp:"10.00",b2b_only:!0,shopify_visibility:"pending",image_filename:"NCTOVIOK.webp",format:"pump_bottle",size:"100ml",cross_sell:["neurone_fanzi_mix","neurone_plattina_shampoo"],imagelab:{packaging_style:"pump_bottle_compact",dominant_hex:"#F5F5F5",accent_hex:"#2C3E6B",lifestyle_context:["colorist station","professional toning","B2B context"],ugc_scenarios:["pigment dropper technique","professional toning result","salon application"],hero_angle:"front_portrait",mood:"clinical white, concentrated pigment, professional colorist tool",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NCTOVIOK.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NCTOVIOK.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_total_violet_mask",sku:"T038",display_name:"Total Violet Mask",collection:"Color Rescue",collection_id:"color_rescue",subcollection:"Total Violet",subcollection_id:"total_violet",description:"Mascarilla acondicionadora para neutralizar visos amarillos en cabello cano y rubio logrando tonos platinados. Brinda un efecto reparador inmediato aportando gran humectación e increíble suavidad para mayor acondicionamiento del cabello, reduciendo el frizz y aportando brillo.",description_enhanced:null,key_ingredients:["violet pigments"],benefit_claims:["neutraliza tonos amarillos","acondiciona","matiza"],hair_type:["bleached","highlighted","platinum","gray"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NTTVIMA-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_total_violet_shampoo","neurone_plattina_shampoo"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#8B8AC8",accent_hex:"#8B1A4A",lifestyle_context:["salon counter","bathroom vanity","flatlay with blonde hair"],ugc_scenarios:["before/after toning","application on wet hair","texture close-up"],hero_angle:"front_portrait",mood:"cool, sophisticated, violet luxury",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NTTVIMA-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NTTVIMA-1-1.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_total_violet_shampoo",sku:"L015",display_name:"Total Violet Shampoo",collection:"Color Rescue",collection_id:"color_rescue",subcollection:"Total Violet",subcollection_id:"total_violet",description:"Recomendado para mantener un rubio luminoso, pues neutraliza los visos amarillos sin resecar el cabello. Tiene una alta concentración de proteína, oligosacáridos, vitaminas y acondicionadores que brindan una profunda suavidad y manejabilidad dando brillo al cabello.",description_enhanced:null,key_ingredients:["violet pigments"],benefit_claims:["neutraliza visos amarillos","matiza","cuida el color"],hair_type:["bleached","highlighted","platinum","gray"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NLSTOVIO-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_total_violet_mask","neurone_plattina_shampoo"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#4A1942",accent_hex:"#8B1A4A",lifestyle_context:["salon","bathroom vanity","paired with Total Violet Mask"],ugc_scenarios:["application","lather on blonde hair","before/after yellow tones"],hero_angle:"front_portrait",mood:"deep luxurious purple, violet correction",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NLSTOVIO-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NLSTOVIO-1-1.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}},{id:"neurone_velvety_control",sku:"T026",display_name:"Velvety Control",collection:"Restore",collection_id:"restore",subcollection:"Velvety Control",subcollection_id:"velvety_control",description:"Tratamiento nutritivo profundo sin enjuague, altamente higroscópico. Aporta una increíble textura aterciopelada sin dejar una sensación grasosa. Es perfecto para cabellos secos, sin vitalidad y sin control.",description_enhanced:null,key_ingredients:[],benefit_claims:["hidratación profunda sin enjuague","pro reparación","control del frizz y suavidad"],hair_type:["damaged","dry","frizzy","over-processed"],price:"10.00",msrp:"10.00",b2b_only:!1,shopify_visibility:"public",image_filename:"NTVELCO-1-1.webp",format:"pump_bottle",size:"400ml",cross_sell:["neurone_kerasin_hb_mask","neurone_green_100"],imagelab:{packaging_style:"premium_pump_bottle",dominant_hex:"#8B5A2B",accent_hex:"#C47C30",lifestyle_context:["post-wash routine","styling station","repair ritual"],ugc_scenarios:["leave-in application","velvet smooth hair result","before/after damaged hair"],hero_angle:"front_portrait",mood:"warm bronze luxury, deep repair, velvety smooth finish",image_usage:{standard:{context:["shopify_product_page","shopify_collection","shopify_cart"],background:"white",filename:"NTVELCO-1-1.webp",notes:"Fondo blanco. Estándar para tienda B2C y Portal Pro."},campaign:{context:["landing_page","social_media","ads","email_header"],background:"white",filename:"NTVELCO-1-1.webp",notes:"Sin versión dark disponible — usar imagen estándar hasta nueva sesión de fotos."},dark_available:!1}}}];function F_(n){const t=new Map;for(const r of n){t.has(r.collection_id)||t.set(r.collection_id,{id:r.collection_id,label:r.collection,subcollections:[],products:[]});const a=t.get(r.collection_id);a.products.push(r);let c=a.subcollections.find(p=>p.id===r.subcollection_id);c||(c={id:r.subcollection_id,label:r.subcollection,products:[]},a.subcollections.push(c)),c.products.push(r)}return Array.from(t.values()).sort((r,a)=>r.label.localeCompare(a.label))}const D_=F_(R_),M_={neuroneCosmetics:D_};function pr(n){return M_[n]??[]}const bd={};var vd={};const Ks="https://raw.githubusercontent.com/unrealvillestudio-hub/BluePrints/main",I_=(typeof import.meta<"u"&&(bd==null?void 0:bd.VITE_ASSETS_BASE_URL))??(typeof process<"u"&&(vd==null?void 0:vd.ASSETS_BASE_URL))??null;function O0(){return I_??Ks}const rl={NeuroneCosmetics:{productsPath:"assets/images/products",brandPath:"assets/images/brand",displayName:"Neurone Cosmética"},NeuroneSCFlorida:{productsPath:"assets/images/products",brandPath:"assets/images/brand",displayName:"Neurone SCF"},forumPhs:{productsPath:"assets/images/ForumPHs/products",brandPath:"assets/images/ForumPHs/brand",displayName:"Forum PH's"}},Cg={NeuroneCosmetics:{white:"logo_neurone_white.png",blue:"logo_neurone_blue.png",dark:"logo_neurone_dark.png",aro_degradado:"aro_degradado.png",aro_curve:"aro_curve.png"}};function Eg(n,t){if(!t)return"";const r=rl[n]??rl.NeuroneCosmetics;return`${O0()}/${r.productsPath}/${t}`}function oa(n,t){const r=rl[n]??rl.NeuroneCosmetics;return`${O0()}/${r.brandPath}/${t}`}function B_(n){const t=Cg[n]??Cg.NeuroneCosmetics;return{white:oa(n,t.white),blue:oa(n,t.blue),dark:oa(n,t.dark),aro_degradado:oa(n,t.aro_degradado),aro_curve:oa(n,t.aro_curve)}}function wd(n,t,r){var p,u;const a=Eg(n,((p=t==null?void 0:t.standard)==null?void 0:p.filename)??r),c=t!=null&&t.dark_available?Eg(n,((u=t==null?void 0:t.campaign)==null?void 0:u.filename)??r):a;return{standard:a,campaign:c,hasDark:!!(t!=null&&t.dark_available)}}async function U_(n,t){var c,p;const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1e3,messages:[{role:"user",content:`Eres un experto en copywriting para e-commerce de belleza y cuidado capilar premium.
Contexto de marca: ${t}

Reescribe y mejora la siguiente descripción haciéndola más persuasiva, con beneficios claros, lenguaje sensorial, SEO-friendly y orientada a conversión. Mantén el tono profesional-luxury. Responde SOLO con la descripción mejorada, sin preámbulos ni explicaciones.

DESCRIPCIÓN ORIGINAL:
${n}`}]})});if(!r.ok)throw new Error(`API ${r.status}`);return((p=(c=(await r.json()).content)==null?void 0:c[0])==null?void 0:p.text)??n}function zg({label:n,value:t,onChange:r,enhancedValue:a,onEnhancedChange:c,brandContext:p,onPushReady:u,pushState:f="idle",pushMessage:g="",accent:h="#FFAB00"}){const[y,b]=C.useState(!1),[v,_]=C.useState(""),[k,z]=C.useState(!1),$=C.useCallback(async()=>{const S=t.trim();if(S){b(!0),_("");try{const T=await U_(S,p);c(T),z(!0)}catch(T){_(T.message??"Error al mejorar")}finally{b(!1)}}},[t,p,c]);return s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:n}),s.jsxs("div",{className:"flex items-center gap-1.5",children:[a&&s.jsx("button",{onClick:()=>z(S=>!S),className:J("text-[9px] px-2 py-0.5 rounded font-bold border transition-colors",k?"bg-amber-500/20 border-amber-500/40 text-amber-400":"bg-zinc-800 border-zinc-700 text-zinc-500 hover:text-zinc-300"),children:k?"← Base":"✨ Enhanced"}),s.jsx("button",{onClick:$,disabled:y||!t.trim(),className:J("flex items-center gap-1 text-[9px] px-2 py-1 rounded font-bold border transition-all",y?"bg-zinc-800 border-zinc-700 text-zinc-600 cursor-wait":"bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-amber-500/50 hover:text-amber-400 disabled:opacity-40"),title:"Mejorar descripción con IA",children:y?s.jsxs(s.Fragment,{children:[s.jsx(tf,{size:9,className:"animate-spin"})," Mejorando..."]}):s.jsxs(s.Fragment,{children:[s.jsx(Hx,{size:9})," Mejorar con IA"]})})]})]}),k?s.jsxs("div",{className:"space-y-1.5",children:[s.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg",children:[s.jsx("span",{className:"text-[9px] font-bold text-amber-400",children:"✨ ENHANCED"}),s.jsx("span",{className:"text-[9px] text-zinc-600 ml-auto",children:"Editable antes de hacer push"})]}),s.jsx("textarea",{value:a,onChange:S=>c(S.target.value),rows:4,className:"w-full bg-zinc-900 border border-amber-500/25 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-amber-500/50 resize-y leading-relaxed"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("button",{onClick:()=>u(a),disabled:f==="pushing"||f==="done",className:J("flex items-center gap-1.5 text-[9px] px-2.5 py-1.5 rounded font-bold border transition-all",f==="done"?"bg-emerald-500/20 border-emerald-500/40 text-emerald-400":f==="pushing"?"bg-zinc-800 border-zinc-700 text-zinc-600 cursor-wait":f==="error"?"bg-red-500/20 border-red-500/40 text-red-400":"bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-emerald-500/40 hover:text-emerald-400"),children:[f==="pushing"&&s.jsx(tf,{size:9,className:"animate-spin"}),f==="done"&&s.jsx(Lt,{size:9}),f==="error"&&s.jsx(In,{size:9}),f==="idle"&&s.jsx(Dx,{size:9}),f==="done"?"Pusheado":f==="pushing"?"Pusheando...":"Push → BluePrints"]}),g&&s.jsx("span",{className:J("text-[9px]",f==="done"?"text-emerald-500":"text-red-400"),children:g})]})]}):s.jsx("textarea",{value:t,onChange:S=>r(S.target.value),rows:4,placeholder:"Descripción desde blueprint. Puedes editar aquí antes de generar.",className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-zinc-500 resize-y leading-relaxed"}),v&&s.jsx("p",{className:"text-[9px] text-red-400",children:v})]})}function V_({value:n,onChange:t}){return s.jsxs("div",{className:"space-y-1.5",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Blueprints en composición"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("button",{onClick:()=>t({...n,usePersonBP:!n.usePersonBP}),className:J("flex items-center gap-1.5 flex-1 justify-center px-3 py-2 rounded-lg text-xs font-bold border transition-all",n.usePersonBP?"bg-blue-500/20 border-blue-500/40 text-blue-300":"bg-zinc-800 border-zinc-700 text-zinc-600 hover:text-zinc-400"),children:[s.jsx(Gx,{size:11}),"Person BP",n.usePersonBP?s.jsx("span",{className:"ml-auto text-[9px] text-blue-400/70",children:"ON"}):s.jsx("span",{className:"ml-auto text-[9px] text-zinc-700",children:"OFF"})]}),s.jsxs("button",{onClick:()=>t({...n,useLocationBP:!n.useLocationBP}),className:J("flex items-center gap-1.5 flex-1 justify-center px-3 py-2 rounded-lg text-xs font-bold border transition-all",n.useLocationBP?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":"bg-zinc-800 border-zinc-700 text-zinc-600 hover:text-zinc-400"),children:[s.jsx(Bx,{size:11}),"Location BP",n.useLocationBP?s.jsx("span",{className:"ml-auto text-[9px] text-emerald-400/70",children:"ON"}):s.jsx("span",{className:"ml-auto text-[9px] text-zinc-700",children:"OFF"})]})]}),s.jsx("p",{className:"text-[9px] text-zinc-700 px-0.5",children:"Controla si el contexto de Person/Location BPs se inyecta en la composición generada"})]})}function q_({packId:n,brandId:t,brandContext:r,value:a,onChange:c,githubToken:p}){const u=pr(t),[f,g]=C.useState({}),[h,y]=C.useState({}),b=($,S,T="")=>{g(M=>({...M,[$]:S})),y(M=>({...M,[$]:T}))},v=a.collectionId?u.find($=>$.id===a.collectionId):void 0,_=a.collectionId?(v==null?void 0:v.products)??[]:u.flatMap($=>$.products),k=C.useCallback(async($,S)=>{if(!p){b("product","error","Token GitHub requerido");return}const{pushEnhancedDescription:T,productIdToFilePath:M}=await L_(async()=>{const{pushEnhancedDescription:F,productIdToFilePath:X}=await import("./blueprintPush-B4wDtj94.js");return{pushEnhancedDescription:F,productIdToFilePath:X}},[]);b("product","pushing");const D=await T({token:p,productId:$.id,brandId:t,enhancedText:S,existingJson:$,filePath:M($.id)});b("product",D.ok?"done":"error",D.message)},[p,t]),z=C.useCallback(async($,S)=>{if(!p){b(`col_${$}`,"error","Token GitHub requerido");return}b(`col_${$}`,"done","Descripción guardada en sesión (BP_COLLECTION en próxima iteración)")},[p]);if(u.length===0)return s.jsxs("div",{className:"flex items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-600",children:[s.jsx(Vg,{size:13}),s.jsx("span",{children:"Sin catálogo para esta marca"})]});if(n==="ecom_collection"){const $=v;return s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"space-y-1.5",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Collection"}),s.jsxs("select",{value:a.collectionId??"",onChange:S=>{const T=u.find(M=>M.id===S.target.value);c({...a,collectionId:S.target.value||void 0,collectionLabel:T==null?void 0:T.label,collectionDescription:a.collectionDescription??""})},className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-500",children:[s.jsx("option",{value:"",children:"— Todas las Collections —"}),u.map(S=>s.jsxs("option",{value:S.id,children:[S.label," (",S.products.length," productos)"]},S.id))]})]}),$&&s.jsxs("div",{className:"space-y-1",children:[s.jsxs("p",{className:"text-[9px] text-zinc-600 font-mono",children:[$.subcollections.length," líneas · ",$.products.length," productos"]}),s.jsx("div",{className:"flex flex-wrap gap-1",children:$.subcollections.map(S=>s.jsxs("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-500 border border-zinc-700",children:[S.label," (",S.products.length,")"]},S.id))})]}),s.jsx(zg,{label:"Descripción de Collection",value:a.collectionDescription??"",onChange:S=>c({...a,collectionDescription:S}),enhancedValue:a.collectionDescriptionEnhanced??"",onEnhancedChange:S=>c({...a,collectionDescriptionEnhanced:S}),brandContext:r,onPushReady:S=>z(a.collectionId??"all",S),pushState:f[`col_${a.collectionId??"all"}`]??"idle",pushMessage:h[`col_${a.collectionId??"all"}`]})]})}if(n==="ecom_product_listing"){const $=a.listingMode??"bulk",S=a.selectedProductIds??[];return s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[s.jsxs("div",{className:"space-y-1",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Collection"}),s.jsxs("select",{value:a.collectionId??"",onChange:T=>{c({...a,collectionId:T.target.value||void 0,selectedProductIds:[]})},className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-zinc-500",children:[s.jsx("option",{value:"",children:"Todas"}),u.map(T=>s.jsxs("option",{value:T.id,children:[T.label," (",T.products.length,")"]},T.id))]})]}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Modo"}),s.jsx("div",{className:"flex rounded-lg overflow-hidden border border-zinc-700 h-[38px]",children:["bulk","select"].map(T=>s.jsx("button",{onClick:()=>c({...a,listingMode:T,selectedProductIds:[]}),className:J("flex-1 text-xs font-bold transition-colors",$===T?"bg-emerald-500/20 text-emerald-400":"text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800"),children:T==="bulk"?"⚡ Bulk":"☑ Select"},T))})]})]}),$==="select"&&s.jsxs("div",{className:"space-y-1",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("p",{className:"text-[9px] text-zinc-500",children:S.length>0?`${S.length} seleccionado${S.length>1?"s":""}`:"Selecciona productos"}),S.length>0&&s.jsx("button",{onClick:()=>c({...a,selectedProductIds:[]}),className:"text-[9px] text-zinc-600 hover:text-red-400 transition-colors",children:"Limpiar"})]}),s.jsx("div",{className:"max-h-48 overflow-y-auto space-y-0.5 rounded-lg border border-zinc-800 p-1.5",children:(a.collectionId?[v]:u).filter(Boolean).map(T=>s.jsxs("div",{children:[s.jsx("p",{className:"text-[9px] font-bold text-zinc-600 px-1 py-0.5 uppercase tracking-wider sticky top-0 bg-zinc-950",children:T.label}),T.subcollections.map(M=>s.jsxs("div",{children:[s.jsx("p",{className:"text-[9px] text-zinc-700 px-2 py-0.5 italic",children:M.label}),M.products.map(D=>{const F=S.includes(D.id);return s.jsxs("button",{onClick:()=>{const X=F?S.filter(W=>W!==D.id):[...S,D.id];c({...a,selectedProductIds:X})},className:J("w-full text-left flex items-center gap-2 px-2 py-1.5 rounded text-xs transition-colors",F?"bg-emerald-500/15 text-emerald-300 border border-emerald-500/25":"text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"),children:[s.jsx("span",{className:J("w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0",F?"bg-emerald-500 border-emerald-500":"border-zinc-700"),children:F&&s.jsx(Lt,{size:8,className:"text-black"})}),s.jsx("span",{className:"flex-1 truncate",children:D.display_name}),D.b2b_only&&s.jsx("span",{className:"text-[8px] px-1 rounded bg-violet-500/20 text-violet-400 shrink-0",children:"B2B"})]},D.id)})]},M.id))]},T.id))})]}),$==="bulk"&&s.jsxs("div",{className:"flex items-center gap-2 p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg",children:[s.jsx(Mx,{size:12,className:"text-zinc-600 shrink-0"}),s.jsxs("p",{className:"text-[10px] text-zinc-600",children:["Se generará el listing completo de"," ",s.jsxs("span",{className:"text-zinc-400 font-bold",children:[a.collectionId?(v==null?void 0:v.products.length)??0:_.length," productos"]})," ","— con filtros por collection, alfabético y línea"]})]})]})}if(n==="ecom_product_page"){const $=a.productId?_.find(S=>S.id===a.productId):void 0;return s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[s.jsxs("div",{className:"space-y-1",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Collection"}),s.jsxs("select",{value:a.collectionId??"",onChange:S=>c({...a,collectionId:S.target.value||void 0,productId:void 0,productDescription:""}),className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-zinc-500",children:[s.jsx("option",{value:"",children:"Todas"}),u.map(S=>s.jsx("option",{value:S.id,children:S.label},S.id))]})]}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Producto"}),s.jsxs("div",{className:"relative",children:[s.jsxs("select",{value:a.productId??"",onChange:S=>{const T=_.find(M=>M.id===S.target.value);c({...a,productId:S.target.value||void 0,productDescription:(T==null?void 0:T.description_enhanced)??(T==null?void 0:T.description)??""})},className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-zinc-500 appearance-none pr-7",children:[s.jsx("option",{value:"",children:"— Selecciona —"}),(a.collectionId?(v==null?void 0:v.subcollections)??[]:u.flatMap(S=>S.subcollections)).map(S=>s.jsx("optgroup",{label:S.label,children:S.products.map(T=>s.jsxs("option",{value:T.id,children:[T.display_name,T.b2b_only?" [B2B]":""]},T.id))},S.id))]}),s.jsx(Sa,{size:11,className:"absolute right-2 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none"})]})]})]}),$&&s.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[s.jsxs("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-500",children:["📦 ",$.subcollection]}),$.price!=="0.00"&&s.jsxs("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-500",children:["$",$.price]}),$.b2b_only&&s.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-violet-500/20 border border-violet-500/30 text-violet-400",children:"B2B only"}),$.hair_type.slice(0,2).map(S=>s.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-500",children:S},S))]}),$&&s.jsx(zg,{label:"Descripción del Producto",value:a.productDescription??$.description,onChange:S=>c({...a,productDescription:S}),enhancedValue:a.productDescriptionEnhanced??$.description_enhanced??"",onEnhancedChange:S=>c({...a,productDescriptionEnhanced:S}),brandContext:r,onPushReady:S=>k($,S),pushState:f.product??"idle",pushMessage:h.product})]})}return null}function G_(n,t){var p;const r=pr(t),a=[],c=B_(t);if(a.push("── BRAND ASSETS ──"),a.push(`Logo (dark bg): ${c.white}`),a.push(`Logo (light bg): ${c.blue}`),a.push(`Aro degradado: ${c.aro_degradado}`),a.push(`Aro curve: ${c.aro_curve}`),n.collectionId){const u=r.find(f=>f.id===n.collectionId);if(u){a.push(`── COLLECTION SELECCIONADA: ${u.label} ──`),a.push(`Subcollections (líneas): ${u.subcollections.map(g=>g.label).join(", ")}`);const f=u.products.map(g=>{const h=g.b2b_only?" [B2B]":"",y=g.imagelab,b=wd(t,y==null?void 0:y.image_usage,g.image_filename),v=b.standard?` | img_standard: ${b.standard}`:"",_=b.hasDark?` | img_campaign: ${b.campaign}`:"",k=y!=null&&y.dominant_hex?` | color: ${y.dominant_hex}`:"";return`• ${g.display_name}${h}${v}${_}${k}`});a.push(`Productos (${u.products.length}):
${f.join(`
`)}`),n.collectionDescriptionEnhanced?a.push(`
DESCRIPCIÓN COLLECTION (Enhanced):
${n.collectionDescriptionEnhanced}`):n.collectionDescription&&a.push(`
DESCRIPCIÓN COLLECTION:
${n.collectionDescription}`)}}else if((p=n.selectedProductIds)!=null&&p.length){const u=r.flatMap(f=>f.products).filter(f=>n.selectedProductIds.includes(f.id));a.push(`── PRODUCTOS SELECCIONADOS (${u.length}) ──`),u.forEach(f=>{const g=f.imagelab,h=wd(t,g==null?void 0:g.image_usage,f.image_filename),y=h.standard?` | img_standard: ${h.standard}`:"",b=h.hasDark?` | img_campaign: ${h.campaign}`:"",v=g!=null&&g.dominant_hex?` | color: ${g.dominant_hex}`:"";a.push(`• ${f.display_name} [${f.subcollection}]${y}${b}${v} — ${f.description.slice(0,100)}`)})}if(n.productId){const u=r.flatMap(g=>g.products),f=u.find(g=>g.id===n.productId);if(f){a.push(`── PRODUCTO: ${f.display_name} ──`),a.push(`Collection: ${f.collection} > ${f.subcollection}`),a.push(`Formato: ${f.format} — ${f.size}`),f.key_ingredients.length?a.push(`Ingredientes clave: ${f.key_ingredients.join(", ")}`):a.push("Ingredientes clave: no documentados (inferir del nombre del producto y claims para el copy)"),f.benefit_claims.length&&a.push(`Benefit claims (usar textualmente en copy): ${f.benefit_claims.join(" · ")}`),f.hair_type.length&&a.push(`Hair type objetivo: ${f.hair_type.join(", ")}`);const g=f.imagelab,h=wd(t,g==null?void 0:g.image_usage,f.image_filename);if(h.standard&&a.push(`Imagen producto (standard/shopify): ${h.standard}`),h.hasDark&&a.push(`Imagen producto (campaign/landing dark bg): ${h.campaign}`),g){const b=[g.dominant_hex?`color dominante: ${g.dominant_hex}`:"",g.accent_hex?`acento: ${g.accent_hex}`:"",g.mood?`mood visual: ${g.mood}`:"",g.packaging_style?`packaging: ${g.packaging_style}`:""].filter(Boolean).join(" · ");b&&a.push(`Visual: ${b}`)}const y=f.cross_sell;if(y!=null&&y.length){const b=y.map(v=>{var _;return(_=u.find(k=>k.id===v))==null?void 0:_.display_name}).filter(Boolean);b.length&&a.push(`Cross-sell (mencionar si aplica): ${b.join(", ")}`)}f.b2b_only&&a.push(`
⚠️ AUDIENCIA B2B — ESTILISTA PROFESIONAL:
Este producto es exclusivo para profesionales. El copy debe:
- Hablar al estilista, no al consumidor final.
- Usar terminología técnica sin explicar lo básico (el estilista ya sabe).
- Enfatizar resultados en servicio (rendimiento, consistencia, reputación con clientes).
- Tone: par a par — no "tú puedes lograr", sino "los estilistas que trabajan con esto".
- PROHIBIDO: lenguaje de self-care, rutina personal, "para ti y tu cabello".`),n.productDescriptionEnhanced?a.push(`
DESCRIPCIÓN (Enhanced):
${n.productDescriptionEnhanced}`):n.productDescription&&a.push(`
DESCRIPCIÓN:
${n.productDescription}`)}}return a.length?`

── CONTEXTO E-COMMERCE ─────────────────────────────
`+a.join(`
`):""}const L0=[{id:"onyx",name:"ONYX",tagline:"La ausencia de color como máxima declaración de lujo.",type:"ecommerce",mood:["luxury","minimal","dark"],palette:{bg:"#0A0A0A",surface:"#141414",text:"#F0EDE8",accent:"#C9A96E",accent2:"#8A7455",muted:"#5A5550",rule:"rgba(201,169,110,0.15)"},typography:{display:"Playfair Display",body:"Jost",displayWeight:"300",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap"},motion:"Silencio cinético — apariciones en 800ms con easing cubic-bezier(0.16,1,0.3,1). Sin bounce. Sin flash. Todo emerge del negro como seda desplegándose.",layoutDNA:"Grid de 12 columnas con márgenes generosos. Hero full-bleed con producto flotante. Sections alternantes imagen-texto. Producto como obra de arte, no como mercancía.",aggro:{unlocked:!0,description:"En AGGRO: tipografía display crece al 20vw. Precio en caracteres de 6rem. Imágenes cortadas al borde sin padding. Copy provocador sin eufemismos."},previewColors:["#0A0A0A","#C9A96E","#F0EDE8","#141414"],designerNote:"Menos es más solo cuando lo que queda es perfecto. ONYX no decora — edita.",structure:{colorMode:"dark",headerStyle:"hero-cinematic",cardLayout:"grid-standard",enhancers:["scroll-reveal","hover-reveal","sticky-header"]}},{id:"precision",name:"PRECISION",tagline:"Donde la tecnología del producto habla por sí sola.",type:"ecommerce",mood:["technical","luxury","dark"],palette:{bg:"#080C12",surface:"#0F1520",text:"#E8EEF8",accent:"#00AACC",accent2:"#5580A0",muted:"#3A4A5C",rule:"rgba(0,170,204,0.15)"},typography:{display:"Syne",body:"Barlow",displayWeight:"700",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Barlow:wght@300;400;500;600&display=swap"},motion:"Construcción precisa: líneas y elementos que aparecen de izquierda a derecha con 60ms de delay escalonado. Hover revela especificaciones del producto con fade-in limpio.",layoutDNA:"Hero split 55/45 — producto a la izquierda, beneficios técnicos a la derecha como ficha de especificaciones. Stats numéricos prominentes. Credenciales y certificaciones visibles.",aggro:{unlocked:!0,description:"AGGRO PRECISION: claims técnicos al frente en tipo masivo. Stats de eficacia como titulares. Comparativa de ingredientes activos vs estándar de mercado. La ciencia sin rodeos."},previewColors:["#080C12","#00AACC","#E8EEF8","#0F1520"],designerNote:"PRECISION es para marcas cuyo diferenciador real es la formulación, la tecnología o el proceso. Cosmética avanzada, B2B industrial, equipamiento profesional.",structure:{colorMode:"dark",headerStyle:"hero-split",cardLayout:"grid-standard",enhancers:["scroll-reveal","sticky-header","parallax"]}},{id:"terra",name:"TERRA",tagline:"La tierra no necesita justificarse. Tampoco tú.",type:"ecommerce",mood:["organic","luxury","minimal"],palette:{bg:"#F5EFE6",surface:"#EDE4D8",text:"#2C2018",accent:"#7A5C3E",accent2:"#4A7C59",muted:"#8A7A6A",rule:"rgba(122,92,62,0.18)"},typography:{display:"Lora",body:"DM Sans",displayWeight:"400",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"},motion:"Crecimiento orgánico — elementos emergen con transform: scale(0.97)→1 y opacity 0→1. Curvas de animación imitan el crecimiento de plantas. Nada es brusco.",layoutDNA:"Formas orgánicas, ningún ángulo recto en decoración. Imágenes con border-radius asimétrico. Secciones divididas por formas de ola SVG. Ingredientes como botánica visual.",aggro:{unlocked:!0,description:"AGGRO TERRA: contraste radical — blanco puro vs negro absoluto. Claims en tipografía aggressive italic. La naturaleza como arma, no como decoración."},previewColors:["#F5EFE6","#7A5C3E","#2C2018","#4A7C59"],designerNote:"TERRA es lujo consciente. No grita — crece.",structure:{colorMode:"light",headerStyle:"hero-editorial",cardLayout:"grid-masonry",enhancers:["scroll-reveal","hover-reveal"]}},{id:"coral",name:"CORAL",tagline:"La energía de la tendencia convertida en decisión de compra.",type:"ecommerce",mood:["vibrant","edge","editorial"],palette:{bg:"#FFF5F0",surface:"#FFEAE0",text:"#1A0A06",accent:"#FF4D2E",accent2:"#FF9E6D",muted:"#C4724A",rule:"rgba(255,77,46,0.15)"},typography:{display:"Syne",body:"DM Sans",displayWeight:"700",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"},motion:"Energía controlada: entradas con slide-up de 300ms y easing suave. Hover en productos activa un warm glow coral. Los CTAs tienen un pulse sutil que invita sin presionar.",layoutDNA:"Grid moderno con acentos warm. Hero con producto en primer plano y fondo cálido degradado. Secciones alternando blanco roto y coral suave. Precio y CTA siempre visibles.",aggro:{unlocked:!0,description:"AGGRO CORAL: coral intenso pleno, sin suavizadores. Headlines de impacto sobre bloque de color puro. Copy directo orientado a urgencia real de tendencia."},previewColors:["#FFF5F0","#FF4D2E","#1A0A06","#FF9E6D"],designerNote:"CORAL convierte la tendencia en argumento de compra. Para beauty, cosmética, moda y lifestyle que quieren estar en el momento correcto.",structure:{colorMode:"light",headerStyle:"hero-fullbleed",cardLayout:"grid-standard",enhancers:["scroll-reveal","floating-cta"]}},{id:"velvet",name:"VELVET",tagline:"Decadencia calibrada. Lujo sin disculpas.",type:"ecommerce",mood:["luxury","dark","editorial"],palette:{bg:"#1A0A12",surface:"#28101C",text:"#F2E8DC",accent:"#C4843C",accent2:"#8B1A3C",muted:"#7A5A6A",rule:"rgba(196,132,60,0.2)"},typography:{display:"Cormorant Garamond",body:"Jost",displayWeight:"300",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@200;300;400;500&display=swap"},motion:"Transiciones como tela que cae. Cubic-bezier(0.4,0,0.2,1) en todo. Hover en productos activa un glow interno cálido. Scroll parallax suave en hero.",layoutDNA:"Asimetría controlada. Hero con texto a 2/3 del viewport. Secciones texturadas con gradientes radiales. Bordes gold como firma de calidad.",aggro:{unlocked:!0,description:"AGGRO VELVET: bordeaux intenso, tipo en rojo sangre. Claims como sentencias. Producto en primer plano máximo sin contexto. La oscuridad como manifesto."},previewColors:["#1A0A12","#C4843C","#F2E8DC","#8B1A3C"],designerNote:"VELVET es para marcas que saben que el cliente correcto no necesita convencerse.",structure:{colorMode:"dark",headerStyle:"hero-cinematic",cardLayout:"cards-overlap",enhancers:["parallax","hover-reveal","scroll-reveal"]}},{id:"solar",name:"SOLAR",tagline:"Energía sin filtros. Optimismo radical como estrategia de marca.",type:"ecommerce",mood:["vibrant","edge","brutalist"],palette:{bg:"#FFEE00",surface:"#FFF5AA",text:"#0A0A00",accent:"#0A0A00",accent2:"#FF3300",muted:"#5A5500",rule:"rgba(10,10,0,0.15)"},typography:{display:"Bebas Neue",body:"DM Sans",displayWeight:"400",style:"display",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"},motion:"Entrada explosiva: elementos que caen desde arriba con rebote controlado. CTAs que palpitan. Hover en negro puro. La energía se mueve, no flota.",layoutDNA:"Bloques de color planos y masivos. Tipografía Bebas como arquitectura visual. Sin sombras, sin gradientes — contraste puro. Precio como titular de periódico.",aggro:{unlocked:!0,description:"AGGRO SOLAR: amarillo neón vs rojo sangre. Copy de manifiesto, no de producto. Precio enorme con descuento tachado brutal. Sin márgenes."},previewColors:["#FFEE00","#0A0A00","#FF3300","#FFF5AA"],designerNote:"SOLAR es el grito de una marca que no tiene miedo de ser vista. Literalmente.",structure:{colorMode:"light",headerStyle:"hero-text-only",cardLayout:"scroll-horizontal",enhancers:["scroll-reveal","floating-cta"]}},{id:"phantom",name:"PHANTOM",tagline:"El lujo más caro no se anuncia. Se reconoce.",type:"ecommerce",mood:["luxury","minimal","dark"],palette:{bg:"#0C0C14",surface:"#13131E",text:"#DDD8F0",accent:"#9B8EC4",accent2:"#5A4E8A",muted:"#4A4660",rule:"rgba(155,142,196,0.15)"},typography:{display:"Cinzel",body:"Outfit",displayWeight:"400",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Outfit:wght@200;300;400;500&display=swap"},motion:"Materialización: elementos emergen de opacity 0 con blur(8px)→blur(0). Todo en 700ms. El producto aparece como si siempre hubiera estado ahí.",layoutDNA:"Espacios dramáticos vacíos. Producto centrado con márgenes imposibles. Texto pequeño y preciso como joyería tipográfica. Ningún elemento compite por atención.",aggro:{unlocked:!0,description:"AGGRO PHANTOM: violeta intenso vs negro. Claims en Cinzel uppercase a gran escala. Producto en contraste máximo. La exclusividad como provocación."},previewColors:["#0C0C14","#9B8EC4","#DDD8F0","#5A4E8A"],designerNote:"PHANTOM vende lo que no se puede tocar: el deseo de pertenecer a algo invisible.",structure:{colorMode:"dark",headerStyle:"hero-cinematic",cardLayout:"grid-masonry",enhancers:["parallax","scroll-reveal","image-carousel"]}},{id:"concrete",name:"CONCRETE",tagline:"Crudo. Honesto. Implacable. Sin decoración innecesaria.",type:"ecommerce",mood:["brutalist","edge","technical"],palette:{bg:"#1C1C1C",surface:"#2C2C2C",text:"#E8E8E8",accent:"#FF4400",accent2:"#FFFFFF",muted:"#888888",rule:"rgba(255,68,0,0.3)"},typography:{display:"Barlow Condensed",body:"Barlow",displayWeight:"700",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700;0,800;1,700&family=Barlow:wght@300;400;500;600&display=swap"},motion:"Sin suavidad: transitions de 150ms con easing linear. Hover: color swap instantáneo. Scroll: elementos entran con translateX sin curva. La velocidad es honestidad.",layoutDNA:"Grid desnudo visible. Líneas de separación en lugar de espacios. Tipografía condensada masiva. Precio prominente sin eufemismos. Boutons con texto uppercase mínimo.",aggro:{unlocked:!0,description:"AGGRO CONCRETE: naranja sangre puro. Copy sin cortesía. Precio en tipo de advertencia industrial. Sin márgenes — texto hasta el borde del viewport."},previewColors:["#1C1C1C","#FF4400","#E8E8E8","#2C2C2C"],designerNote:"CONCRETE es para marcas que entienden que la autenticidad es el lujo más escaso.",structure:{colorMode:"dark",headerStyle:"hero-split",cardLayout:"grid-standard",enhancers:["scroll-reveal","sticky-header"]}},{id:"biolux",name:"BIOLUX",tagline:"Donde la ciencia se convierte en obsesión de compra.",type:"ecommerce",mood:["technical","luxury","dark"],palette:{bg:"#030F18",surface:"#071A28",text:"#D8F0FF",accent:"#00E5CC",accent2:"#0076A8",muted:"#2A5068",rule:"rgba(0,229,204,0.15)"},typography:{display:"Outfit",body:"Crimson Text",displayWeight:"600",style:"mixed",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"},motion:"Revelación científica: contadores animados, líneas que crecen como barras de progreso. Hover en ingredientes activa tooltip con descripción técnica. Data que respira.",layoutDNA:"Cards de ingredientes como fichas de laboratorio. Stats numéricos prominentes. Hero con gráfico de fibra capilar como fondo decorativo. Credenciales visibles.",aggro:{unlocked:!0,description:"AGGRO BIOLUX: claims científicos como verdades absolutas en tipo masivo. Comparativa vs competencia directa. Ingredientes como superpoderes visualizados."},previewColors:["#030F18","#00E5CC","#D8F0FF","#0076A8"],designerNote:"BIOLUX convierte la química en deseo. El laboratorio como escaparate.",structure:{colorMode:"dark",headerStyle:"hero-split",cardLayout:"grid-standard",enhancers:["scroll-reveal","parallax","floating-cta"]}},{id:"blueprint",name:"BLUEPRINT",tagline:"La precisión de la ingeniería aplicada al comercio de premium.",type:"ecommerce",mood:["technical","editorial","luxury"],palette:{bg:"#F8F6F0",surface:"#EDEBE3",text:"#1A1E2C",accent:"#1A3A6C",accent2:"#C4A448",muted:"#6A7288",rule:"rgba(26,58,108,0.15)"},typography:{display:"Playfair Display",body:"IBM Plex Sans",displayWeight:"400",style:"mixed",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap"},motion:"Construcción arquitectónica: líneas que se dibujan, elementos que toman posición. Timing staggered exacto: 60ms entre cada child. Precisión como valor.",layoutDNA:"Grid de 12 columnas con gutters definidos como especificaciones técnicas. Anotaciones y medidas como elementos decorativos. Producto como el objeto de un plano.",aggro:{unlocked:!0,description:"AGGRO BLUEPRINT: el plano técnico explota — líneas de construcción se convierten en composición caótica controlada. Claims como especificaciones militares."},previewColors:["#F8F6F0","#1A3A6C","#1A1E2C","#C4A448"],designerNote:"BLUEPRINT es para marcas que entienden que la confianza se construye con precisión, no con promesas.",structure:{colorMode:"light",headerStyle:"hero-editorial",cardLayout:"list-editorial",enhancers:["scroll-reveal","hover-reveal"]}},{id:"ignition",name:"IGNITION",tagline:"Una sola pantalla. Una sola decisión. Sin distracciones.",type:"landing",mood:["edge","minimal","dark"],palette:{bg:"#000000",surface:"#0A0A0A",text:"#FFFFFF",accent:"#FF2200",accent2:"#FF6600",muted:"#444444",rule:"rgba(255,34,0,0.2)"},typography:{display:"Bebas Neue",body:"Mulish",displayWeight:"400",style:"display",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Mulish:wght@300;400;600;700&display=swap"},motion:"Un solo momento de impacto: headline que cae en 300ms con bounce final. CTA que palpita cada 3s. El fondo tiene partículas ascendentes subtiles. Una vez. Perfecto.",layoutDNA:"Todo above the fold. Un headline enorme. Una propuesta de valor en 12 palabras máximo. Un CTA. Scroll revela social proof. Estructura de embudo puro.",aggro:{unlocked:!0,description:'AGGRO IGNITION: countdown timer. Copy de escasez extrema. CTA en rojo con texto "AHORA O NUNCA". Pop-up de exit intent con oferta final.'},previewColors:["#000000","#FF2200","#FFFFFF","#FF6600"],designerNote:"IGNITION es la máquina de conversión más simple posible. Porque simple no significa fácil.",structure:{colorMode:"dark",headerStyle:"hero-fullbleed",cardLayout:"grid-standard",enhancers:["scroll-reveal","floating-cta","sticky-header"]}},{id:"trust",name:"TRUST",tagline:"La confianza construida con evidencia. La conversión construida con verdad.",type:"landing",mood:["technical","minimal","editorial"],palette:{bg:"#F8F9FC",surface:"#EEF1F8",text:"#0F1628",accent:"#1A4FD6",accent2:"#00A878",muted:"#5A6A8A",rule:"rgba(15,22,40,0.1)"},typography:{display:"Mulish",body:"Mulish",displayWeight:"800",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800;900&display=swap"},motion:"Micro-confirmaciones: cada elemento de social proof aparece con un checkmark animado. Counters de clientes/ventas que incrementan al llegar al viewport. Confianza en movimiento.",layoutDNA:"Estructura de conversión probada: hero con propuesta de valor clara → beneficios en 3 columnas → social proof masivo (logos, testimonios, números) → FAQ → CTA final. Sin desvíos.",aggro:{unlocked:!0,description:"AGGRO TRUST: números de ventas/clientes en tiempo real. Garantías con términos concretos. Testimonios con nombre completo y foto. La competencia no existe porque los números lo demuestran."},previewColors:["#F8F9FC","#1A4FD6","#0F1628","#00A878"],designerNote:"TRUST es para cualquier negocio real que tiene resultados verificables. El diseño que mejor convierte no se ve — se siente como una decisión obvia.",structure:{colorMode:"light",headerStyle:"hero-split",cardLayout:"grid-standard",enhancers:["scroll-reveal","sticky-header"]}},{id:"ivory",name:"IVORY",tagline:"Cuando ya no necesitas convencer, solo confirmar.",type:"landing",mood:["luxury","minimal","editorial"],palette:{bg:"#FAFAF5",surface:"#F0EFE8",text:"#1A1A14",accent:"#1A1A14",accent2:"#C4A448",muted:"#8A8A7A",rule:"rgba(26,26,20,0.1)"},typography:{display:"EB Garamond",body:"Jost",displayWeight:"400",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap"},motion:"Antigital: sin transiciones de entrada — los elementos están ahí desde el inicio, como texto impreso. Scroll revela secciones sin animación. La quietud es la declaración.",layoutDNA:"Documento elegante. Márgenes amplios como un libro de arte. Texto justificado. Testimonios como notas al pie de página. Sin CTAs agresivos — una invitación, no un grito.",aggro:{unlocked:!0,description:"AGGRO IVORY: el contraste extremo del paper vs black. Copy que confronta directamente al lector. La elegancia como provocación en un mundo ruidoso."},previewColors:["#FAFAF5","#1A1A14","#C4A448","#F0EFE8"],designerNote:"IVORY es para marcas que saben que su cliente ya decidió. Solo necesita el contexto correcto.",structure:{colorMode:"light",headerStyle:"hero-editorial",cardLayout:"list-editorial",enhancers:["scroll-reveal","hover-reveal"]}},{id:"kinetic",name:"KINETIC",tagline:"El movimiento como argumento de venta más persuasivo.",type:"landing",mood:["edge","vibrant","technical"],palette:{bg:"#0A0A0A",surface:"#181818",text:"#F5F5F5",accent:"#E8FF00",accent2:"#FF3300",muted:"#555555",rule:"rgba(232,255,0,0.2)"},typography:{display:"Oswald",body:"Barlow",displayWeight:"600",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Barlow:ital,wght@0,300;0,400;0,500;1,400&display=swap"},motion:"Todo en movimiento continuo: texto que sube como créditos, flechas que apuntan hacia el CTA, speed lines CSS en backgrounds. La energía es el mensaje.",layoutDNA:"Composición diagonal. Líneas de velocidad como elementos estructurales. Secciones divididas en ángulo. El scroll activa nuevos estados de movimiento. Nunca estático.",aggro:{unlocked:!0,description:"AGGRO KINETIC: velocidad extrema — todo se mueve más rápido. Claims de performance como números parpadeantes. Timer de oferta. La energía como urgencia."},previewColors:["#0A0A0A","#E8FF00","#F5F5F5","#FF3300"],designerNote:"KINETIC convierte la energía de la marca en energía de conversión.",structure:{colorMode:"dark",headerStyle:"hero-text-only",cardLayout:"scroll-horizontal",enhancers:["scroll-reveal","floating-cta","sticky-header"]}},{id:"deep-signal",name:"DEEP SIGNAL",tagline:"La confianza que construye la data. La conversión que construye el diseño.",type:"landing",mood:["technical","dark","edge"],palette:{bg:"#020E18",surface:"#061828",text:"#D0E8F8",accent:"#FF6B00",accent2:"#00AAFF",muted:"#2A4A60",rule:"rgba(255,107,0,0.2)"},typography:{display:"Syne",body:"Source Sans 3",displayWeight:"700",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;1,300&display=swap"},motion:"Transmisión de señal: elementos que aparecen píxel a píxel, barras de carga que no cargan — estética de terminal. Counters que incrementan en tiempo real.",layoutDNA:"Data visualization como decoración. Stats como headlines. Progress bars y gráficos como elementos de confianza. El producto respaldado por números.",aggro:{unlocked:!0,description:"AGGRO DEEP SIGNAL: claims con porcentajes extremos. Comparativa directa vs competencia. Terminal mode — todo en monospace. La data como weapon."},previewColors:["#020E18","#FF6B00","#D0E8F8","#00AAFF"],designerNote:"DEEP SIGNAL convierte la evidencia en deseo.",structure:{colorMode:"dark",headerStyle:"hero-cinematic",cardLayout:"grid-standard",enhancers:["parallax","scroll-reveal","floating-cta"]}},{id:"bloom-protocol",name:"BLOOM PROTOCOL",tagline:"La biociencia del bienestar. Donde la naturaleza tiene fórmulas.",type:"landing",mood:["organic","technical","luxury"],palette:{bg:"#F8FAF5",surface:"#EEF5E8",text:"#162010",accent:"#2A6A30",accent2:"#8B5E3C",muted:"#5A7050",rule:"rgba(42,106,48,0.15)"},typography:{display:"Cormorant Garamond",body:"Source Sans 3",displayWeight:"300",style:"mixed",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Source+Sans+3:wght@300;400;600&display=swap"},motion:"Crecimiento celular: elementos que aparecen como organismos expandiéndose. Ilustraciones botánicas que se dibujan en SVG stroke. Naturaleza animada.",layoutDNA:"Secciones alternando clínico-blanco y botanical-verde. Ingredientes con ilustración + ficha técnica. La ciencia y la naturaleza como dualidad visual.",aggro:{unlocked:!0,description:'AGGRO BLOOM: la naturaleza como advertencia. Claims de eficacia vs químicos. "Sin esto. Sin aquello. Solo lo que necesitas." Verde como agresión.'},previewColors:["#F8FAF5","#2A6A30","#162010","#8B5E3C"],designerNote:"BLOOM PROTOCOL es para marcas que entienden que la salud es el nuevo lujo.",structure:{colorMode:"light",headerStyle:"hero-editorial",cardLayout:"grid-masonry",enhancers:["scroll-reveal","hover-reveal"]}},{id:"reserve",name:"RESERVE",tagline:"Para las marcas que no necesitan explicarse. Solo mostrarse.",type:"landing",mood:["luxury","minimal","dark"],palette:{bg:"#08080A",surface:"#111116",text:"#F0ECE4",accent:"#C8B48A",accent2:"#7A6A50",muted:"#3A3830",rule:"rgba(200,180,138,0.12)"},typography:{display:"Cinzel",body:"Jost",displayWeight:"400",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Cinzel:wght@300;400;500&family=Jost:wght@200;300;400;500&display=swap"},motion:"Presencia silenciosa: los elementos se materializan en 900ms desde opacity 0 sin movimiento. El producto aparece como si hubiera estado ahí siempre. El tiempo que tarda en cargar es intencional.",layoutDNA:"Espacio generoso con propósito. Un claim central, el producto en primer plano absoluto, un solo CTA de alta intención. Social proof discreto: nombres de clientes, no contadores. Calidad sobre cantidad.",aggro:{unlocked:!0,description:"AGGRO RESERVE: el lujo como declaración de superioridad sin adornos. Precio visible y sin disculpa. Un solo claim de 5 palabras. El producto llena el 70% del viewport."},previewColors:["#08080A","#C8B48A","#F0ECE4","#111116"],designerNote:"RESERVE es para joyería, relojes, cosmética ultra-premium, inmobiliaria exclusiva y servicios de alto valor. No convence — confirma.",structure:{colorMode:"dark",headerStyle:"hero-cinematic",cardLayout:"list-editorial",enhancers:["parallax","scroll-reveal","hover-reveal"]}},{id:"launch",name:"LAUNCH",tagline:"El momento del lanzamiento tiene su propio diseño. Este es.",type:"landing",mood:["edge","vibrant","editorial"],palette:{bg:"#0C0C14",surface:"#181826",text:"#F0F0F8",accent:"#FF5F1F",accent2:"#FFB800",muted:"#4A4A6A",rule:"rgba(255,95,31,0.2)"},typography:{display:"Oswald",body:"DM Sans",displayWeight:"600",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"},motion:"Cuenta regresiva que activa la narrativa: countdown timer al centro, seguido de reveal del producto en 400ms. Cada scroll desbloquea el siguiente beneficio como un evento.",layoutDNA:"Hero de anuncio con producto revelado dramáticamente. Beneficios que aparecen como hitos de lanzamiento. Zona de precio/oferta de lanzamiento bien jerarquizada. Un solo CTA dominante.",aggro:{unlocked:!0,description:"AGGRO LAUNCH: oferta de lanzamiento con fecha límite real visible. Precio de lanzamiento vs precio regular con contraste extremo. Primeras unidades / plazas limitadas con número real."},previewColors:["#0C0C14","#FF5F1F","#F0F0F8","#FFB800"],designerNote:"LAUNCH es para nuevos productos, temporadas, servicios y colecciones. El lanzamiento es un evento — el diseño debe tratarlo como tal.",structure:{colorMode:"dark",headerStyle:"hero-fullbleed",cardLayout:"grid-standard",enhancers:["scroll-reveal","floating-cta","image-carousel"]}},{id:"golden-age",name:"GOLDEN AGE",tagline:"El lujo tiene memoria. El tuyo empieza aquí.",type:"landing",mood:["luxury","editorial","dark"],palette:{bg:"#0C0800",surface:"#18120A",text:"#F5E8C8",accent:"#D4AF37",accent2:"#8B7320",muted:"#6A5A30",rule:"rgba(212,175,55,0.2)"},typography:{display:"Cinzel Decorative",body:"Raleway",displayWeight:"400",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Raleway:ital,wght@0,300;0,400;0,500;1,300&display=swap"},motion:"Revelación teatral: una cortina dorada que se abre en SVG. Elementos que aparecen acompañados de una partícula gold. El scroll es una función de teatro.",layoutDNA:"Marcos decorativos geométricos Art Deco. Ornamentos como separadores. Tipografía UPPERCASE con tracking extremo. El oro como arquitectura visual.",aggro:{unlocked:!0,description:"AGGRO GOLDEN AGE: el Art Deco explota — patrones geométricos que ocupan el fondo completo. Copy de grandeza sin límites. El precio como corona."},previewColors:["#0C0800","#D4AF37","#F5E8C8","#8B7320"],designerNote:"GOLDEN AGE es para marcas que entienden que el legado es el mejor argumento de venta.",structure:{colorMode:"dark",headerStyle:"hero-cinematic",cardLayout:"list-editorial",enhancers:["parallax","scroll-reveal","hover-reveal"]}},{id:"authority",name:"AUTHORITY",tagline:"La credibilidad no se declara. Se demuestra. Sección a sección.",type:"landing",mood:["technical","editorial","luxury"],palette:{bg:"#F4F2EC",surface:"#EAE7DC",text:"#1C1C18",accent:"#2A4A8A",accent2:"#8A6A2A",muted:"#6A6A60",rule:"rgba(28,28,24,0.12)"},typography:{display:"Libre Baskerville",body:"Source Sans 3",displayWeight:"700",style:"mixed",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600&display=swap"},motion:"Autoridad que se construye: secciones que aparecen con peso y presencia, no con agilidad. Cada testimonio de cliente o caso de éxito entra con un fade que comunica solidez.",layoutDNA:"Estructura de propuesta de valor institucional: presentación del problema → solución → metodología → casos de éxito → equipo/credenciales → CTA. Diseño que comunica seriedad sin frialdad.",aggro:{unlocked:!0,description:"AGGRO AUTHORITY: propuesta directa sin preámbulos. Resultados de clientes en números concretos al frente. Garantía o metodología como primer elemento visible. Sin adornos — solo evidencia."},previewColors:["#F4F2EC","#2A4A8A","#1C1C18","#8A6A2A"],designerNote:"AUTHORITY es para consultoras, agencias, distribuidores B2B, servicios profesionales y cualquier negocio donde la confianza institucional determina la decisión de compra.",structure:{colorMode:"light",headerStyle:"hero-split",cardLayout:"list-editorial",enhancers:["scroll-reveal","sticky-header"]}},{id:"editorial",name:"EDITORIAL",tagline:"La marca como publicación. Cada página, una historia.",type:"web",mood:["editorial","luxury","minimal"],palette:{bg:"#FAFAF8",surface:"#F2F0EA",text:"#1A1814",accent:"#D4272A",accent2:"#1A1814",muted:"#7A7060",rule:"rgba(26,24,20,0.12)"},typography:{display:"Playfair Display",body:"DM Sans",displayWeight:"700",style:"mixed",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"},motion:"Lento y deliberado: page transitions de 400ms. Hover en imágenes activa zoom suave. El editorial no corre — pasea.",layoutDNA:"Grid tipo Vogue — columnas asimétricas (2-3-4). Imágenes cropped en formatos editoriales. Pull quotes en gran formato. Navegación como sumario de revista.",aggro:{unlocked:!0,description:"AGGRO EDITORIAL: el rojo editorial se convierte en rojo sangre. Headlines que transgreden el grid. Tipografía que sangra fuera del viewport. Punto de vista radical."},previewColors:["#FAFAF8","#D4272A","#1A1814","#F2F0EA"],designerNote:"EDITORIAL convierte la marca en un medio de comunicación con autoridad propia.",structure:{colorMode:"light",headerStyle:"hero-editorial",cardLayout:"list-editorial",enhancers:["scroll-reveal","hover-reveal"]}},{id:"studio",name:"STUDIO",tagline:"El espacio de trabajo visible. La creatividad como producto.",type:"web",mood:["minimal","editorial","technical"],palette:{bg:"#F8F8F4",surface:"#EFEEEA",text:"#202018",accent:"#FF5F00",accent2:"#202018",muted:"#888880",rule:"rgba(32,32,24,0.1)"},typography:{display:"Syne",body:"Instrument Sans",displayWeight:"700",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"},motion:"Cursor personalizado. Transiciones de página con slide horizontal. Hover en proyectos revela thumbnail con motion fluido. El cursor como elemento de diseño.",layoutDNA:"Portfolio grid con hover states. Números de proyecto. Case studies con antes/después. El proceso como producto visible. Navegación minimalista con mucho espacio.",aggro:{unlocked:!0,description:"AGGRO STUDIO: el proceso creativo desordenado visible. Obras sin terminar como statement. El making-of como el producto principal."},previewColors:["#F8F8F4","#FF5F00","#202018","#EFEEEA"],designerNote:"STUDIO muestra que el mejor portfolio es el que hace sentir al cliente que el trabajo ya está hecho.",structure:{colorMode:"light",headerStyle:"hero-split",cardLayout:"grid-masonry",enhancers:["scroll-reveal","hover-reveal","parallax"]}},{id:"founding-story",name:"FOUNDING STORY",tagline:"La historia detrás de la marca es el argumento más poderoso que tiene.",type:"web",mood:["editorial","luxury","dark"],palette:{bg:"#0C0C0A",surface:"#161612",text:"#F0EDE8",accent:"#D4A84B",accent2:"#8A6A30",muted:"#5A5850",rule:"rgba(212,168,75,0.18)"},typography:{display:"Libre Baskerville",body:"Karla",displayWeight:"700",style:"mixed",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Karla:ital,wght@0,300;0,400;0,500;1,300&display=swap"},motion:"Narrativa en movimiento: el scroll lleva al visitante a través de la historia cronológicamente. Cada milestone aparece con peso y pausa. Las imágenes históricas se revelan con parallax suave.",layoutDNA:"Una columna narrativa con momentos clave destacados. Fotos y fechas como anclajes de historia. Citas del fundador en gran formato. La visión de la empresa como conclusión natural, no como pitch.",aggro:{unlocked:!0,description:'AGGRO FOUNDING STORY: la historia como declaración de ventaja competitiva. Años de experiencia como dato duro al frente. "Nadie ha hecho esto más tiempo que nosotros" sin eufemismos.'},previewColors:["#0C0C0A","#D4A84B","#F0EDE8","#8A6A30"],designerNote:"FOUNDING STORY es para empresas familiares, marcas con historia, distribuidores con trayectoria y cualquier negocio cuyo origen sea un diferenciador real de confianza.",structure:{colorMode:"dark",headerStyle:"hero-cinematic",cardLayout:"list-editorial",enhancers:["parallax","scroll-reveal"]}},{id:"atlas",name:"ATLAS",tagline:"Marcas que piensan a escala global y actúan a escala humana.",type:"web",mood:["luxury","editorial","technical"],palette:{bg:"#F2F0E8",surface:"#E8E4D8",text:"#1C2030",accent:"#C07830",accent2:"#1C2030",muted:"#6A6A80",rule:"rgba(28,32,48,0.12)"},typography:{display:"Libre Baskerville",body:"Source Sans 3",displayWeight:"700",style:"mixed",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600&display=swap"},motion:"Autoridad tranquila: transiciones de 350ms, no hay prisa. Mapas que aparecen en el fondo de algunas secciones con opacity 0.05. Global sin ser genérico.",layoutDNA:"Grid periodístico. Contenido organizado por relevancia, no por categoría. Datos y contexto siempre presentes. La marca como fuente de información confiable.",aggro:{unlocked:!0,description:"AGGRO ATLAS: el tono de autoridad se vuelve reclamo de territorio. La marca como estándar global. Sin competencia mencionada — porque no existe."},previewColors:["#F2F0E8","#C07830","#1C2030","#E8E4D8"],designerNote:"ATLAS es para marcas que entienden que la confianza se construye a lo largo del tiempo, no de una landing.",structure:{colorMode:"light",headerStyle:"hero-editorial",cardLayout:"list-editorial",enhancers:["scroll-reveal","hover-reveal"]}},{id:"archive",name:"ARCHIVE",tagline:"El legado no se declara. Se documenta.",type:"web",mood:["editorial","luxury","minimal"],palette:{bg:"#F0EDE4",surface:"#E4E0D4",text:"#2A2420",accent:"#8B3A1A",accent2:"#2A2420",muted:"#8A8070",rule:"rgba(42,36,32,0.15)"},typography:{display:"Playfair Display",body:"Lato",displayWeight:"400",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,300;0,400;1,300&display=swap"},motion:"Paper feels — page turns en CSS 3D para navegación. Sepia tone en imágenes que se desatura al hover. La historia como experiencia presente.",layoutDNA:"Columnas de periódico. Drop caps. Footnotes como features. Timeline visual. La antigüedad como valor de diseño, no como limitación.",aggro:{unlocked:!0,description:'AGGRO ARCHIVE: el legado como weapon. Fechas de fundación prominentes. "Desde XXXX" como statement de superioridad. El tiempo como argumento.'},previewColors:["#F0EDE4","#8B3A1A","#2A2420","#E4E0D4"],designerNote:"ARCHIVE convierte la historia de la marca en su argumento más moderno.",structure:{colorMode:"light",headerStyle:"hero-editorial",cardLayout:"list-editorial",enhancers:["scroll-reveal","hover-reveal"]}},{id:"signal",name:"SIGNAL",tagline:"La conversión como consecuencia del diseño. No al revés.",type:"web",mood:["technical","minimal","edge"],palette:{bg:"#F5F7FA",surface:"#EBEEF5",text:"#1A1E2C",accent:"#0060FF",accent2:"#00CC88",muted:"#6A7090",rule:"rgba(26,30,44,0.1)"},typography:{display:"Mulish",body:"Mulish",displayWeight:"800",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,400&display=swap"},motion:'Micro-interactions en todos los elementos interactivos. Toggle states con feedback inmediato. Pricing tables con highlight animado. CTA que "late" sutilmente.',layoutDNA:"Feature grid. Pricing table. Social proof masivo. FAQ accordion. Todo optimizado para reducir friction. El diseño es invisible — solo existe la decisión del usuario.",aggro:{unlocked:!0,description:"AGGRO SIGNAL: social proof extremo. Comparativa directa vs competencia nombrada. Garantías agresivas. Urgencia sin fake-urgency. Conversión brutal y honesta."},previewColors:["#F5F7FA","#0060FF","#1A1E2C","#00CC88"],designerNote:"SIGNAL sabe que la mejor conversión es la que el usuario no recuerda haber hecho.",structure:{colorMode:"light",headerStyle:"hero-split",cardLayout:"grid-standard",enhancers:["scroll-reveal","sticky-header","floating-cta"]}},{id:"greenhouse",name:"GREENHOUSE",tagline:"El bienestar como estética. La salud como identidad visual.",type:"web",mood:["organic","luxury","minimal"],palette:{bg:"#F2F8F0",surface:"#E8F2E4",text:"#1A2C18",accent:"#3A7A48",accent2:"#7A5C3E",muted:"#5A7A58",rule:"rgba(58,122,72,0.15)"},typography:{display:"Lora",body:"Nunito",displayWeight:"500",style:"mixed",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Nunito:wght@300;400;500;600&display=swap"},motion:"Crecimiento lento: elementos que se expanden como plantas. SVG ilustraciones que se dibujan. Colores que saturan gradualmente. La vida como animación.",layoutDNA:"Ilustraciones botánicas como sistema decorativo. Ingredientes con representación visual. Testimonios con foto naturalista. El verde como arquitectura.",aggro:{unlocked:!0,description:'AGGRO GREENHOUSE: el "natural" como arma frente a la industria química. Claims de pureza extremos. La naturaleza como superioridad moral y científica.'},previewColors:["#F2F8F0","#3A7A48","#1A2C18","#7A5C3E"],designerNote:"GREENHOUSE convierte el wellness en la identidad central de la marca.",structure:{colorMode:"light",headerStyle:"hero-editorial",cardLayout:"grid-masonry",enhancers:["scroll-reveal","hover-reveal"]}},{id:"obsidian",name:"OBSIDIAN",tagline:"Lujo oscuro. Sin concesiones. Sin audiencia masiva.",type:"web",mood:["luxury","dark","minimal"],palette:{bg:"#080808",surface:"#111111",text:"#EEE8DC",accent:"#D4C4A8",accent2:"#6A6060",muted:"#3A3A3A",rule:"rgba(212,196,168,0.12)"},typography:{display:"Cormorant Garamond",body:"Cinzel",displayWeight:"300",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@300;400;500&display=swap"},motion:"Presencia gravitacional: elementos pesados que aparecen como bloques de obsidiana materializándose. Sin ligereza. Sin movimiento superfluo.",layoutDNA:"Márgenes que pertenecen a la oscuridad. Texto que emerge de la nada. Imágenes en alto contraste como joyería en vitrina. La web como galería privada.",aggro:{unlocked:!0,description:"AGGRO OBSIDIAN: la oscuridad total sin alivio. Una sola frase en la hero. El producto visible solo con hover. La exclusividad como filtro de acceso."},previewColors:["#080808","#D4C4A8","#EEE8DC","#111111"],designerNote:"OBSIDIAN no es para todos. Eso es exactamente el punto.",structure:{colorMode:"dark",headerStyle:"hero-cinematic",cardLayout:"list-editorial",enhancers:["parallax","scroll-reveal","hover-reveal"]}},{id:"performance",name:"PERFORMANCE",tagline:"Los resultados son el diseño. El diseño son los resultados.",type:"web",mood:["edge","technical","brutalist"],palette:{bg:"#0A0A0A",surface:"#141414",text:"#F5F5F5",accent:"#E8380A",accent2:"#F5A623",muted:"#404040",rule:"rgba(232,56,10,0.2)"},typography:{display:"Oswald",body:"Barlow",displayWeight:"700",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Barlow:ital,wght@0,300;0,400;0,500;1,400&display=swap"},motion:"Impacto directo: secciones que entran con slide limpio desde abajo en 250ms. Contadores animados para stats de rendimiento. Hover en productos activa highlight de beneficio clave.",layoutDNA:"Diagonales estructurales que comunican dinamismo sin caos. Stats de rendimiento como titulares de sección. Antes/después con métricas reales. CTA con orientación a resultado, no a proceso.",aggro:{unlocked:!0,description:"AGGRO PERFORMANCE: métricas de resultado al frente sin contexto suavizador. Comparativa directa con estándar de la industria. El producto como herramienta de ventaja competitiva."},previewColors:["#0A0A0A","#E8380A","#F5F5F5","#F5A623"],designerNote:"PERFORMANCE es para marcas de fitness, equipamiento deportivo, automotive, suplementos y cualquier categoría donde el resultado medible es el argumento central de venta.",structure:{colorMode:"dark",headerStyle:"hero-fullbleed",cardLayout:"grid-standard",enhancers:["scroll-reveal","floating-cta","sticky-header"]}},{id:"canvas",name:"CANVAS",tagline:"El espacio creativo como destino. La marca como obra abierta.",type:"web",mood:["minimal","editorial","organic"],palette:{bg:"#FFFFFF",surface:"#F5F5F0",text:"#1A1A1A",accent:"#FF3366",accent2:"#3366FF",muted:"#888888",rule:"rgba(26,26,26,0.1)"},typography:{display:"Libre Caslon Text",body:"Work Sans",displayWeight:"700",style:"mixed",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"},motion:"Pinceladas: elementos que aparecen como si se estuvieran pintando. Hover activa un splash de color del acento. La creatividad como interacción.",layoutDNA:"Gallery grid con hover states que revelan información. Masonry flexible. Proyectos que se despliegan en full-screen. El blanco como lienzo activo.",aggro:{unlocked:!0,description:"AGGRO CANVAS: el lienzo en blanco se convierte en campo de batalla de color. Múltiples acentos simultáneos. La creatividad sin límites como provocación."},previewColors:["#FFFFFF","#FF3366","#1A1A1A","#3366FF"],designerNote:"CANVAS es para marcas que entienden que la creatividad es el único diferenciador real.",structure:{colorMode:"light",headerStyle:"hero-split",cardLayout:"grid-masonry",enhancers:["scroll-reveal","hover-reveal","floating-cta"]}},{id:"chronicle",name:"CHRONICLE",tagline:"El blog como publicación. La marca como medio.",type:"blog",mood:["editorial","luxury","minimal"],palette:{bg:"#FAFAF6",surface:"#F0EDE4",text:"#1C1814",accent:"#C0282A",accent2:"#1C1814",muted:"#7A7060",rule:"rgba(28,24,20,0.12)"},typography:{display:"Playfair Display",body:"Source Serif 4",displayWeight:"700",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300&display=swap"},motion:"Deliberado y editorial: hover en artículos revela categoría con slide. Zoom muy sutil en imágenes al hover.",layoutDNA:"Magazine grid: artículo featured 2/3 + sidebar editorial 1/3 arriba. Bajo: 3 columnas. Las imágenes lideran. Arquitectura periodística auténtica.",aggro:{unlocked:!0,description:"AGGRO CHRONICLE: el rojo editorial se convierte en rojo ruptura. Tipografía que rompe la columna. La portada como declaración sin matices."},previewColors:["#FAFAF6","#C0282A","#1C1814","#F0EDE4"],designerNote:"CHRONICLE trata el blog como lo que debería ser: un medio con autoridad propia.",structure:{colorMode:"light",headerStyle:"hero-editorial",cardLayout:"magazine",enhancers:["reading-progress","category-pills","newsletter-cta","sticky-header"]}},{id:"dispatch",name:"DISPATCH",tagline:"Un solo hilo. Una sola voz. Sin ruido.",type:"blog",mood:["minimal","editorial","luxury"],palette:{bg:"#FFFEF8",surface:"#F5F2E8",text:"#181614",accent:"#1A52A8",accent2:"#8A3A18",muted:"#6A6860",rule:"rgba(24,22,20,0.1)"},typography:{display:"EB Garamond",body:"Lato",displayWeight:"500",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lato:ital,wght@0,300;0,400;1,300&display=swap"},motion:"Anti-digital: sin animaciones de entrada. El contenido simplemente está, como una carta recibida.",layoutDNA:"Una columna central de 680px. Numeración de entregas tipo newsletter. Artículos como capítulos numerados. CTA de suscripción como párrafo final.",aggro:{unlocked:!0,description:"AGGRO DISPATCH: el tono íntimo se convierte en declaración. Un punto de vista sin concesiones. La columna de opinión sin filtro."},previewColors:["#FFFEF8","#1A52A8","#181614","#F5F2E8"],designerNote:"DISPATCH es para creadores que entienden que una audiencia comprometida vale más que alcance masivo.",structure:{colorMode:"light",headerStyle:"hero-text-only",cardLayout:"single-column",enhancers:["newsletter-cta","author-bio","reading-progress"]}},{id:"mural",name:"MURAL",tagline:"La imagen primero. El texto la contextualiza. Siempre.",type:"blog",mood:["maximalist","editorial","dark"],palette:{bg:"#0A0A0A",surface:"#141414",text:"#F5F5F0",accent:"#FF5500",accent2:"#FFD700",muted:"#555555",rule:"rgba(255,85,0,0.2)"},typography:{display:"Syne",body:"DM Sans",displayWeight:"800",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"},motion:"Hover: la imagen escala al 105% con overlay de título + categoría desde abajo. Masonry que respira.",layoutDNA:"Foto full-bleed como hero. Masonry grid irregular de imágenes grandes. El texto contextualiza. Categorías como etiquetas flotantes sobre la foto.",aggro:{unlocked:!0,description:"AGGRO MURAL: imágenes que sangran fuera del viewport. Texto sobre imagen sin overlay. La fotografía como statement."},previewColors:["#0A0A0A","#FF5500","#F5F5F0","#FFD700"],designerNote:"MURAL es para fotógrafos, viajeros, chefs y cualquier creador cuya historia vive en la imagen.",structure:{colorMode:"dark",headerStyle:"hero-fullbleed",cardLayout:"grid-masonry",enhancers:["hover-reveal","scroll-reveal","parallax"]}},{id:"codex",name:"CODEX",tagline:"El pensamiento largo. La lectura profunda. El argumento completo.",type:"blog",mood:["editorial","luxury","technical"],palette:{bg:"#F8F4EC",surface:"#EDE8DC",text:"#1E1A12",accent:"#2A5C2A",accent2:"#8B3A1A",muted:"#7A7060",rule:"rgba(30,26,18,0.12)"},typography:{display:"Libre Baskerville",body:"Crimson Text",displayWeight:"700",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap"},motion:"Prácticamente estático. Reading progress bar arriba. TOC lateral hace highlight de sección activa. Footnotes en hover.",layoutDNA:"Dos columnas: contenido principal 70% + TOC sidebar fija 30%. Abstract y tiempo de lectura visibles. Drop caps. Blockquotes formales. Footnotes numeradas.",aggro:{unlocked:!0,description:"AGGRO CODEX: el argumento académico como manifiesto. La evidencia como arma. Sin concesiones al lector casual."},previewColors:["#F8F4EC","#2A5C2A","#1E1A12","#EDE8DC"],designerNote:"CODEX respeta la inteligencia de su audiencia lo suficiente como para no simplificarla.",structure:{colorMode:"light",headerStyle:"hero-text-only",cardLayout:"list-editorial",enhancers:["toc-sidebar","reading-progress","scroll-reveal"]}},{id:"datastream",name:"DATASTREAM",tagline:"Contenido técnico con el diseño que merece.",type:"blog",mood:["technical","dark","edge"],palette:{bg:"#020B14",surface:"#061828",text:"#C8E8FF",accent:"#00E5B4",accent2:"#FF6B6B",muted:"#2A4A6A",rule:"rgba(0,229,180,0.15)"},typography:{display:"Outfit",body:"IBM Plex Mono",displayWeight:"600",style:"mono",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap"},motion:"Terminal estético: reading time como progress bar. Tags filtrables con fade instantáneo. Hover en cards: borde acento que crece desde abajo.",layoutDNA:"Search prominente. Tag pills filtrables. Card grid oscuro con nivel (Básico/Intermedio/Avanzado) + tiempo de lectura + tags + avatar autor.",aggro:{unlocked:!0,description:"AGGRO DATASTREAM: terminal mode completo — monospace puro, negro absoluto, acento verde neón. La complejidad técnica como señal de calidad."},previewColors:["#020B14","#00E5B4","#C8E8FF","#FF6B6B"],designerNote:"DATASTREAM trata el contenido técnico con el rigor visual que sus lectores esperan y merecen.",structure:{colorMode:"dark",headerStyle:"hero-split",cardLayout:"grid-standard",enhancers:["reading-progress","category-pills","newsletter-cta"]}},{id:"memoir",name:"MEMOIR",tagline:"La voz de una persona. La historia de muchos.",type:"blog",mood:["editorial","luxury","organic"],palette:{bg:"#FAF7F2",surface:"#F0EAE0",text:"#2A1E18",accent:"#8B4A6A",accent2:"#C09040",muted:"#8A7A6A",rule:"rgba(42,30,24,0.12)"},typography:{display:"Cormorant Garamond",body:"Lora",displayWeight:"300",style:"serif",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap"},motion:"Como pasar páginas de un diario: fade suave. Las fotos con leve grano de película simulado. Todo tiene textura.",layoutDNA:"Intro personal del autor con foto grande. Artículos como entradas de diario: fecha prominente, título en cursiva, foto personal a ancho completo. Alternando imagen-texto.",aggro:{unlocked:!1,description:"MEMOIR no tiene AGGRO — la intimidad no escala con agresividad. Tiene un modo HONESTO: el copy más directo posible."},previewColors:["#FAF7F2","#8B4A6A","#2A1E18","#C09040"],designerNote:"MEMOIR entiende que la vulnerabilidad calculada es la forma más alta de autoridad personal.",structure:{colorMode:"light",headerStyle:"hero-editorial",cardLayout:"list-editorial",enhancers:["author-bio","related-articles","scroll-reveal"]}},{id:"broadcast",name:"BROADCAST",tagline:"Noticias de tu industria. Tu voz como medio de referencia.",type:"blog",mood:["edge","technical","brutalist"],palette:{bg:"#FFFFFF",surface:"#F4F4F4",text:"#0A0A0A",accent:"#CC1100",accent2:"#0A0A0A",muted:"#666666",rule:"rgba(10,10,10,0.15)"},typography:{display:"Barlow Condensed",body:"Barlow",displayWeight:"700",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;1,700&family=Barlow:wght@300;400;500;600&display=swap"},motion:"Periódico vivo: breaking news banner se desliza horizontalmente. Cards en stagger rápido. La noticia no espera.",layoutDNA:"Masthead de periódico con fecha + número de edición. Grid asimétrico: 1 lead (2/3 ancho) + 2 secundarios + 4 breves. Divisores tipográficos. Información densa, jerarquizada.",aggro:{unlocked:!0,description:"AGGRO BROADCAST: breaking news total. Todo el viewport para el titular en tipo enorme. El resto: texto pequeño y denso. La urgencia como diseño."},previewColors:["#FFFFFF","#CC1100","#0A0A0A","#F4F4F4"],designerNote:"BROADCAST convierte el blog corporativo en el medio de referencia de su categoría.",structure:{colorMode:"light",headerStyle:"hero-fullbleed",cardLayout:"magazine",enhancers:["scroll-reveal","category-pills","sticky-header"]}},{id:"field-notes",name:"FIELD NOTES",tagline:"Guías que se usan. Contenido que se guarda.",type:"blog",mood:["technical","organic","minimal"],palette:{bg:"#FBF8F0",surface:"#F0EBE0",text:"#2A2218",accent:"#D4820A",accent2:"#4A7A3A",muted:"#8A7A60",rule:"rgba(42,34,24,0.12)"},typography:{display:"IBM Plex Serif",body:"IBM Plex Sans",displayWeight:"600",style:"mixed",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"},motion:"Funcional: progress bar siempre visible. Steps marcables como completados. Hover en imágenes las expande. La UX al servicio del aprendizaje.",layoutDNA:"Header con breadcrumb + progress bar. Guide featured con step preview. Card grid con nivel de dificultad + tiempo de lectura + categoría. TOC inline con anclas.",aggro:{unlocked:!1,description:"FIELD NOTES no tiene AGGRO — la utilidad no necesita agresividad. Solo claridad absoluta."},previewColors:["#FBF8F0","#D4820A","#2A2218","#4A7A3A"],designerNote:"FIELD NOTES entiende que enseñar es la mejor estrategia de ventas que existe.",structure:{colorMode:"light",headerStyle:"hero-minimal",cardLayout:"grid-standard",enhancers:["reading-progress","toc-sidebar","related-articles"]}},{id:"roundtable",name:"ROUNDTABLE",tagline:"La comunidad como contenido. La conversación como SEO.",type:"blog",mood:["vibrant","technical","editorial"],palette:{bg:"#F8FAFF",surface:"#EEF2FC",text:"#0E1828",accent:"#3A6AE0",accent2:"#E05A20",muted:"#6A7A9A",rule:"rgba(14,24,40,0.1)"},typography:{display:"Mulish",body:"Mulish",displayWeight:"800",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800;900&display=swap"},motion:"Social: likes y comentarios con micro-animación al hover. Avatar clusters con stagger. La energía de la comunidad como diseño.",layoutDNA:"Artículos con métricas de engagement (likes, comentarios, guardados). Author card con foto. Trending topics sidebar. El lector como participante activo.",aggro:{unlocked:!0,description:"AGGRO ROUNDTABLE: el debate como espectáculo. Dos puntos de vista opuestos. Métricas de engagement en prominencia máxima. La polémica como estrategia."},previewColors:["#F8FAFF","#3A6AE0","#0E1828","#E05A20"],designerNote:"ROUNDTABLE convierte la audiencia en la fuente de autoridad más creíble que la marca puede tener.",structure:{colorMode:"light",headerStyle:"hero-split",cardLayout:"list-editorial",enhancers:["scroll-reveal","newsletter-cta","category-pills"]}},{id:"manifesto",name:"MANIFESTO",tagline:"Un punto de vista. Sin ambigüedad. Sin disculpa.",type:"blog",mood:["brutalist","minimal","edge"],palette:{bg:"#F5F5F0",surface:"#E8E8E0",text:"#080808",accent:"#080808",accent2:"#FF1A1A",muted:"#5A5A50",rule:"rgba(8,8,8,0.12)"},typography:{display:"Oswald",body:"Work Sans",displayWeight:"700",style:"sans",googleFontsUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap"},motion:"Una sola afirmación por scroll. Texto que aparece de golpe. Las imágenes son pocas y enérgicas. El espacio vacío es el diseño.",layoutDNA:"Single column con una declaración por sección. Numeración de argumentos en grande. Pull quotes que ocupan ancho completo en tipografía enorme. Sin sidebar. Sin distracciones.",aggro:{unlocked:!0,description:"AGGRO MANIFESTO: rojo sangre. Una frase. Un botón. El argumento reducido a su forma más pura y provocadora. La controversia como elección de diseño."},previewColors:["#F5F5F0","#080808","#FF1A1A","#E8E8E0"],designerNote:"MANIFESTO entiende que el silencio también es una posición, y tomar una posición es la única forma de construir audiencia real.",structure:{colorMode:"light",headerStyle:"hero-text-only",cardLayout:"single-column",enhancers:["reading-progress","scroll-reveal"]}}];function H_(n){return L0.filter(t=>t.type===n)}function ra(n){return L0.find(t=>t.id===n)}function W_(n,t){const r=t?"AGGRO":"STANDARD",a=n.structure.enhancers.join(", ");return`── THEME: ${n.name} [${r}] ──
PRINCIPIO FUNDAMENTAL: La paleta de la MARCA (definida en el brandContext arriba) tiene PRIORIDAD ABSOLUTA.
Los colores del theme son referencia de ambiente — el output debe usar los tokens de color de la marca.
Si no hay brandContext con paleta definida, usa la paleta del theme como fallback.

ESTRUCTURA (esto es lo que el theme define — aplica siempre):
  Modo base: ${n.structure.colorMode==="dark"?"OSCURO — fondos profundos, alto contraste":"CLARO — fondos limpios, tipografía protagonista"}
  Header: ${n.structure.headerStyle}
  Layout de cards/secciones: ${n.structure.cardLayout}
  Enhancers activos: ${a}

ENHANCERS — instrucciones de implementación:
${n.structure.enhancers.includes("scroll-reveal")?"  • scroll-reveal: elementos aparecen con IntersectionObserver — opacity 0→1, translateY 20px→0, staggered 100ms entre items":""}
${n.structure.enhancers.includes("hover-reveal")?"  • hover-reveal: en cards, overlay de info aparece en hover con transition 200ms":""}
${n.structure.enhancers.includes("parallax")?"  • parallax: imágenes hero con translateY(calc(var(--scrollY) * 0.3)) via JS scroll listener":""}
${n.structure.enhancers.includes("sticky-header")?"  • sticky-header: navbar position:sticky top:0, añade backdrop-blur + shadow al hacer scroll":""}
${n.structure.enhancers.includes("floating-cta")?"  • floating-cta: botón CTA flotante en mobile (position:fixed bottom-6 right-6) que aparece después de 30% de scroll":""}
${n.structure.enhancers.includes("image-carousel")?"  • image-carousel: hero con slider automático — transición crossfade 4s, dots de navegación, touch swipe":""}
${n.structure.enhancers.includes("scroll-horizontal")?"  • scroll-horizontal: sección de cards con overflow-x:auto, scroll-snap, cursor grab":""}

LAYOUT DNA: ${n.layoutDNA}
MOTION: ${n.motion}

TIPOGRAFÍA DEL THEME (úsala si la marca no especifica tipografía propia, o como complemento):
  Display: ${n.typography.display} (weight: ${n.typography.displayWeight})
  Body: ${n.typography.body}
  Google Fonts URL: ${n.typography.googleFontsUrl}

PALETA DE REFERENCIA (fallback si no hay brandContext):
  bg: ${n.palette.bg} | surface: ${n.palette.surface}
  text: ${n.palette.text} | accent: ${n.palette.accent}
  accent2: ${n.palette.accent2} | muted: ${n.palette.muted}

Filosofía de diseño: ${n.designerNote}
${t?`
⚡ MODO AGGRO ACTIVADO:
${n.aggro.description}
PUSHA los límites. El cliente aceptó el riesgo. No te contengas.`:""}`}const Ae=(n,t=400,r=300)=>`https://picsum.photos/seed/${n}/${t}/${r}`,be={prod:[101,102,103,104,105,106,107,108,109,110,111,112],hero:[201,202,203,204,205,206],article:[301,302,303,304,305,306],person:[401,402,403,404],scene:[501,502,503,504]};function mi(n){const t=["sans","display","mono"].includes(n.typography.style);return{d:`'${n.typography.display}',${t?"system-ui,sans-serif":"Georgia,serif"}`,b:`'${n.typography.body}',system-ui,sans-serif`,w:n.typography.displayWeight,url:n.typography.googleFontsUrl}}const ja=n=>n.structure.colorMode==="light"?"0.72":"0.62",R0="*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}body{overflow-x:hidden;}img{display:block;max-width:100%;}a{text-decoration:none;color:inherit;}button{cursor:pointer;}.sr{opacity:0;transform:translateY(20px);transition:opacity .65s ease,transform .65s ease;}.sr-vis{opacity:1;transform:translateY(0);}",K_="document.addEventListener('DOMContentLoaded',()=>{const e=document.querySelectorAll('.sr'),o=new IntersectionObserver(entries=>{entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('sr-vis');o.unobserve(en.target);}});},{threshold:0.1});e.forEach(el=>o.observe(el));});";function Y_(n){const t=n.palette,r=mi(n),a=ja(n),c=n.structure.headerStyle,p=n.structure.cardLayout;let u="";return n.type==="ecommerce"?u=Q_(t,r,a,c,p):n.type==="landing"?u=X_(t,r,a,c):n.type==="blog"?u=Z_(t,r,a,p):u=J_(t,r,a,c,p),`<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=800"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${r.url}" rel="stylesheet">
<style>${R0}body{width:800px;background:${t.bg};color:${t.text};font-family:${r.b};}::-webkit-scrollbar{display:none;}</style>
</head><body>${u}</body></html>`}function Q_(n,t,r,a,c){const p=a==="hero-split",u=a==="hero-text-only"||a==="hero-minimal",f=`<nav style="height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 32px;background:${n.surface};border-bottom:1px solid ${n.rule};">
    <span style="font-family:${t.d};font-size:1rem;font-weight:${t.w};color:${n.text};">STORE</span>
    <div style="display:flex;gap:22px;">${["Colecciones","Nuevo","Sale"].map(k=>`<a style="font-family:${t.b};font-size:0.72rem;color:${n.text};opacity:.65;">${k}</a>`).join("")}</div>
    <div style="display:flex;gap:14px;align-items:center;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${n.text}" stroke-width="2" opacity=".65"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <div style="position:relative;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${n.text}" stroke-width="2" opacity=".65"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg><div style="position:absolute;top:-5px;right:-6px;width:13px;height:13px;background:${n.accent};border-radius:50%;font-family:${t.b};font-size:8px;font-weight:700;color:${n.bg};display:flex;align-items:center;justify-content:center;">2</div></div>
    </div>
  </nav>`;let g="";p?g=`<section style="display:grid;grid-template-columns:1fr 1fr;height:204px;">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:0 36px;background:${n.bg};">
        <p style="font-family:${t.b};font-size:0.52rem;letter-spacing:.24em;text-transform:uppercase;color:${n.accent};margin-bottom:10px;">Nueva Colección</p>
        <h1 style="font-family:${t.d};font-size:2.1rem;font-weight:${t.w};line-height:1.05;color:${n.text};margin-bottom:12px;">Producto<br/><span style="color:${n.accent};">Destacado</span></h1>
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;">
          <span style="font-family:${t.d};font-size:1.5rem;font-weight:${t.w};color:${n.accent};">$89.99</span>
          <span style="font-family:${t.b};font-size:0.65rem;color:${n.muted};text-decoration:line-through;">$120.00</span>
        </div>
        <button style="background:${n.accent};color:${n.bg};border:none;padding:9px 22px;font-family:${t.b};font-size:0.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;width:fit-content;">Comprar Ahora →</button>
      </div>
      <div style="overflow:hidden;"><img src="${Ae(be.prod[0],400,204)}" style="width:100%;height:100%;object-fit:cover;" alt=""/></div>
    </section>`:u?g=`<section style="height:204px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 60px;background:${n.bg};">
      <p style="font-family:${t.b};font-size:0.52rem;letter-spacing:.28em;text-transform:uppercase;color:${n.accent};margin-bottom:10px;">Colección Exclusiva</p>
      <h1 style="font-family:${t.d};font-size:2.8rem;font-weight:${t.w};line-height:1.0;color:${n.text};margin-bottom:14px;letter-spacing:-.03em;">Todo<br/><span style="color:${n.accent};">Comienza Aquí</span></h1>
      <div style="display:flex;gap:12px;">
        <button style="background:${n.accent};color:${n.bg};border:none;padding:9px 28px;font-family:${t.b};font-size:0.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Ver Colección</button>
        <button style="background:transparent;color:${n.text};border:1px solid ${n.rule};padding:9px 20px;font-family:${t.b};font-size:0.65rem;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;">Buscar</button>
      </div>
    </section>`:g=`<section style="position:relative;height:204px;overflow:hidden;display:flex;align-items:center;padding:0 40px;">
      <img src="${Ae(be.hero[0],800,204)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" alt=""/>
      <div style="position:absolute;inset:0;background:linear-gradient(to right,${n.bg}F2,${n.bg}80 62%,transparent);"></div>
      <div style="position:relative;z-index:2;max-width:340px;">
        <p style="font-family:${t.b};font-size:0.52rem;letter-spacing:.24em;text-transform:uppercase;color:${n.accent};margin-bottom:10px;">Colección Verano</p>
        <h1 style="font-family:${t.d};font-size:2.2rem;font-weight:${t.w};line-height:1.05;color:${n.text};margin-bottom:14px;letter-spacing:-.02em;">Lo Mejor<br/><em style="color:${n.accent};font-style:normal;">Está Aquí.</em></h1>
        <button style="background:${n.accent};color:${n.bg};border:none;padding:9px 22px;font-family:${t.b};font-size:0.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Comprar Ahora</button>
      </div>
    </section>`;const h=(k,z,$,S)=>`
    <div style="background:${n.bg};border:1px solid ${n.rule};border-radius:8px;overflow:hidden;">
      <div style="position:relative;aspect-ratio:${c==="grid-masonry"?"3/4":"4/3"};overflow:hidden;">
        <img src="${Ae(k,300,225)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
        ${S?`<span style="position:absolute;top:7px;left:7px;background:${n.accent};color:${n.bg};font-family:${t.b};font-size:8px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;padding:2px 7px;border-radius:2px;">${S}</span>`:""}
      </div>
      <div style="padding:9px 11px;">
        <p style="font-family:${t.b};font-size:0.52rem;letter-spacing:.14em;text-transform:uppercase;color:${n.muted};margin-bottom:3px;">Colección</p>
        <p style="font-family:${t.b};font-size:0.72rem;font-weight:600;color:${n.text};margin-bottom:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${z}</p>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-family:${t.d};font-size:0.9rem;font-weight:700;color:${n.accent};">${$}</span>
          <button style="background:${n.accent};color:${n.bg};border:none;padding:4px 9px;font-family:${t.b};font-size:8px;font-weight:700;letter-spacing:.05em;border-radius:3px;">+ Agregar</button>
        </div>
      </div>
    </div>`,y=c==="scroll-horizontal",b=c==="grid-masonry",v=`<section style="padding:18px 32px;background:${n.surface};">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px;">
      <h2 style="font-family:${t.d};font-size:1.1rem;font-weight:${t.w};color:${n.text};">Nuevos Arrivals</h2>
      <a style="font-family:${t.b};font-size:0.62rem;letter-spacing:.1em;text-transform:uppercase;color:${n.accent};">Ver todos →</a>
    </div>
    <div style="${y?"display:flex;gap:10px;overflow-x:auto;padding-bottom:4px;":b?"columns:4;gap:10px;":"display:grid;grid-template-columns:repeat(4,1fr);gap:10px;"}">
      ${h(be.prod[1],"Producto Signature","$89.99","Nuevo")}
      ${h(be.prod[2],"Edición Limitada","$64.99")}
      ${h(be.prod[3],"Essential Vol.2","$49.99","−30%")}
      ${h(be.prod[4],"Colección Core","$74.99")}
    </div>
  </section>`,_=`<section style="padding:12px 32px;background:${n.accent};display:flex;align-items:center;justify-content:space-between;">
    <p style="font-family:${t.d};font-size:0.9rem;font-weight:${t.w};color:${n.bg};">✦ Envío Gratis en órdenes +$50 · Devolución 30 días</p>
    <a style="font-family:${t.b};font-size:0.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${n.bg};border:1px solid ${n.bg}70;padding:5px 14px;border-radius:3px;">Ver Ofertas</a>
  </section>`;return f+g+v+_}function X_(n,t,r,a){const c=a!=="hero-split",p=`<nav style="height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 32px;background:${n.surface};border-bottom:1px solid ${n.rule};">
    <span style="font-family:${t.d};font-size:1rem;font-weight:${t.w};color:${n.text};">BRAND</span>
    <button style="background:${n.accent};color:${n.bg};border:none;padding:7px 18px;font-family:${t.b};font-size:0.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Diagnóstico Gratuito →</button>
  </nav>`,u=c?`<section style="padding:44px 64px 36px;background:${n.bg};text-align:center;">
        <div style="display:inline-flex;align-items:center;gap:8px;background:${n.accent}18;border:1px solid ${n.accent}40;border-radius:100px;padding:4px 14px;margin-bottom:18px;">
          <span style="width:6px;height:6px;background:${n.accent};border-radius:50%;display:inline-block;"></span>
          <span style="font-family:${t.b};font-size:0.58rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${n.accent};">Exclusivo · Solo 20 lugares</span>
        </div>
        <h1 style="font-family:${t.d};font-size:2.9rem;font-weight:${t.w};line-height:1.02;color:${n.text};margin-bottom:14px;letter-spacing:-.03em;">Cada día sin esto,<br/><span style="color:${n.accent};">alguien paga el precio.</span></h1>
        <p style="font-family:${t.b};font-size:0.9rem;line-height:1.7;color:${n.text};opacity:${r};max-width:500px;margin:0 auto 22px;">El sistema que le falta a tu negocio existe. La pregunta no es si lo necesitas — es cuánto te ha costado no tenerlo.</p>
        <div style="display:flex;gap:12px;justify-content:center;">
          <button style="background:${n.accent};color:${n.bg};border:none;padding:12px 28px;font-family:${t.b};font-size:0.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Solicitar Diagnóstico →</button>
          <button style="background:transparent;color:${n.text};border:1px solid ${n.rule};padding:12px 20px;font-family:${t.b};font-size:0.72rem;letter-spacing:.06em;text-transform:uppercase;border-radius:4px;opacity:.75;">Ver casos →</button>
        </div>
      </section>`:`<section style="display:grid;grid-template-columns:1fr 1fr;height:220px;">
        <div style="display:flex;flex-direction:column;justify-content:center;padding:0 36px;background:${n.bg};">
          <p style="font-family:${t.b};font-size:0.5rem;letter-spacing:.28em;text-transform:uppercase;color:${n.accent};margin-bottom:10px;">Resultado Garantizado</p>
          <h1 style="font-family:${t.d};font-size:2rem;font-weight:${t.w};line-height:1.05;color:${n.text};margin-bottom:12px;">El sistema que tu negocio<br/><span style="color:${n.accent};">necesitaba ayer.</span></h1>
          <p style="font-family:${t.b};font-size:0.72rem;line-height:1.65;color:${n.text};opacity:${r};margin-bottom:16px;">Sin implementación. Sin excusas. En 72 horas.</p>
          <button style="background:${n.accent};color:${n.bg};border:none;padding:10px 24px;font-family:${t.b};font-size:0.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;width:fit-content;">Empezar Ahora →</button>
        </div>
        <div style="position:relative;overflow:hidden;background:${n.surface};">
          <img src="${Ae(be.scene[0],400,220)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
          <div style="position:absolute;inset:0;background:${n.bg}30;"></div>
        </div>
      </section>`,f=`<section style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;background:${n.surface};border-top:1px solid ${n.rule};border-bottom:1px solid ${n.rule};">
    ${[["98%","Satisfacción"],["3×","Más rápido"],["500+","Clientes"],["24h","Respuesta"]].map(([h,y],b)=>`
      <div style="padding:16px;text-align:center;${b>0?`border-left:1px solid ${n.rule};`:""}">
        <div style="font-family:${t.d};font-size:1.8rem;font-weight:${t.w};color:${n.accent};line-height:1;">${h}</div>
        <div style="font-family:${t.b};font-size:0.58rem;letter-spacing:.12em;text-transform:uppercase;color:${n.muted};margin-top:4px;">${y}</div>
      </div>`).join("")}
  </section>`,g=`<section style="padding:18px 32px;background:${n.bg};">
    <p style="font-family:${t.b};font-size:0.58rem;letter-spacing:.2em;text-transform:uppercase;color:${n.muted};margin-bottom:14px;text-align:center;">Lo que incluye</p>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
      ${[["Diagnóstico Completo","Análisis de brechas en 48h con recomendaciones accionables."],["Implementación Guiada","No te dejamos solo. Cada paso tiene un protocolo."],["Resultados Medibles","KPIs definidos desde el día 1. Sin excusas sin datos."]].map(([h,y])=>`
        <div style="padding:14px;background:${n.surface};border:1px solid ${n.rule};border-radius:8px;">
          <div style="width:28px;height:28px;background:${n.accent}22;border-radius:6px;display:flex;align-items:center;justify-content:center;margin-bottom:8px;">
            <div style="width:14px;height:14px;background:${n.accent};border-radius:2px;"></div>
          </div>
          <p style="font-family:${t.b};font-size:0.72rem;font-weight:700;color:${n.text};margin-bottom:4px;">${h}</p>
          <p style="font-family:${t.b};font-size:0.62rem;line-height:1.55;color:${n.text};opacity:${r};">${y}</p>
        </div>`).join("")}
    </div>
  </section>`;return p+u+f+g}function J_(n,t,r,a,c){const p=`<nav style="height:48px;display:flex;align-items:center;justify-content:space-between;padding:0 32px;background:${n.surface};border-bottom:1px solid ${n.rule};">
    <span style="font-family:${t.d};font-size:1.05rem;font-weight:${t.w};color:${n.text};">STUDIO</span>
    <div style="display:flex;gap:24px;">${["Servicios","Portfolio","Nosotros","Blog","Contacto"].map(y=>`<a style="font-family:${t.b};font-size:0.7rem;color:${n.text};opacity:.65;">${y}</a>`).join("")}</div>
    <button style="background:${n.accent};color:${n.bg};border:none;padding:7px 18px;font-family:${t.b};font-size:0.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Contactar →</button>
  </nav>`;let u="";a==="hero-split"?u=`<section style="display:grid;grid-template-columns:1fr 1fr;height:204px;">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:0 32px;background:${n.bg};">
        <p style="font-family:${t.b};font-size:0.5rem;letter-spacing:.26em;text-transform:uppercase;color:${n.accent};margin-bottom:10px;">Agencia de Diseño</p>
        <h1 style="font-family:${t.d};font-size:2rem;font-weight:${t.w};line-height:1.05;color:${n.text};margin-bottom:12px;letter-spacing:-.02em;">Diseño que<br/><span style="color:${n.accent};">Habla.</span></h1>
        <p style="font-family:${t.b};font-size:0.7rem;line-height:1.65;color:${n.text};opacity:${r};margin-bottom:14px;">Identidades visuales para marcas que quieren diferenciarse de verdad.</p>
        <div style="display:flex;gap:10px;">
          <button style="background:${n.accent};color:${n.bg};border:none;padding:8px 18px;font-family:${t.b};font-size:0.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;">Ver Portfolio</button>
          <button style="background:transparent;color:${n.text};border:1px solid ${n.rule};padding:8px 14px;font-family:${t.b};font-size:0.62rem;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;opacity:.7;">Nosotros</button>
        </div>
      </div>
      <div style="overflow:hidden;"><img src="${Ae(be.scene[1],400,204)}" style="width:100%;height:100%;object-fit:cover;" alt=""/></div>
    </section>`:a==="hero-text-only"||a==="hero-minimal"?u=`<section style="height:204px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 80px;background:${n.bg};">
      <p style="font-family:${t.b};font-size:0.5rem;letter-spacing:.28em;text-transform:uppercase;color:${n.accent};margin-bottom:12px;">Identidad · Diseño · Estrategia</p>
      <h1 style="font-family:${t.d};font-size:3.2rem;font-weight:${t.w};line-height:0.96;color:${n.text};margin-bottom:16px;letter-spacing:-.04em;">Ideas que<br/><span style="color:${n.accent};">Escalan</span></h1>
      <p style="font-family:${t.b};font-size:0.78rem;line-height:1.7;color:${n.text};opacity:${r};margin-bottom:18px;">De startup a categoría.</p>
      <button style="background:${n.accent};color:${n.bg};border:none;padding:10px 28px;font-family:${t.b};font-size:0.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Ver Portfolio</button>
    </section>`:u=`<section style="position:relative;height:204px;overflow:hidden;display:flex;align-items:center;padding:0 40px;">
      <img src="${Ae(be.hero[2],800,204)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" alt=""/>
      <div style="position:absolute;inset:0;background:linear-gradient(to right,${n.bg}F4,${n.bg}80 62%,transparent);"></div>
      <div style="position:relative;z-index:2;max-width:380px;">
        <p style="font-family:${t.b};font-size:0.5rem;letter-spacing:.26em;text-transform:uppercase;color:${n.accent};margin-bottom:10px;">Agencia Full-Service</p>
        <h1 style="font-family:${t.d};font-size:2.3rem;font-weight:${t.w};line-height:1.04;color:${n.text};margin-bottom:14px;letter-spacing:-.02em;">Tu Marca.<br/><span style="color:${n.accent};">Sin Límites.</span></h1>
        <button style="background:${n.accent};color:${n.bg};border:none;padding:9px 22px;font-family:${t.b};font-size:0.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Ver Portfolio</button>
      </div>
    </section>`;const g=c==="list-editorial"?`<section style="padding:18px 32px;background:${n.surface};">
        ${["Identidad Visual","Diseño Web","Estrategia de Marca","Campañas Digitales"].map((y,b)=>`
          <div style="display:flex;gap:20px;align-items:flex-start;padding:10px 0;${b>0?`border-top:1px solid ${n.rule};`:""}">
            <span style="font-family:${t.b};font-size:0.6rem;color:${n.muted};opacity:.5;padding-top:5px;">0${b+1}</span>
            <div style="flex:1;">
              <p style="font-family:${t.d};font-size:1rem;font-weight:${t.w};color:${n.text};margin-bottom:3px;">${y}</p>
              <p style="font-family:${t.b};font-size:0.65rem;line-height:1.55;color:${n.text};opacity:${r};">Soluciones diseñadas para tu industria con resultados medibles.</p>
            </div>
            <span style="color:${n.accent};font-size:1.1rem;margin-top:2px;">→</span>
          </div>`).join("")}
      </section>`:`<section style="padding:18px 32px;background:${n.surface};">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px;">
          <h2 style="font-family:${t.d};font-size:1.1rem;font-weight:${t.w};color:${n.text};">Servicios</h2>
          <a style="font-family:${t.b};font-size:0.6rem;letter-spacing:.1em;text-transform:uppercase;color:${n.accent};">Ver todos →</a>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          ${[["Identidad Visual","Sistemas de marca completos."],["Diseño Web","Experiencias digitales."],["Estrategia","Posicionamiento y contenido."]].map(([y,b])=>`
            <div style="padding:14px;background:${n.bg};border:1px solid ${n.rule};border-radius:8px;">
              <div style="width:24px;height:24px;background:${n.accent}22;border-radius:5px;margin-bottom:8px;"></div>
              <p style="font-family:${t.b};font-size:0.72rem;font-weight:700;color:${n.text};margin-bottom:4px;">${y}</p>
              <p style="font-family:${t.b};font-size:0.62rem;line-height:1.5;color:${n.text};opacity:${r};">${b}</p>
            </div>`).join("")}
        </div>
      </section>`,h=`<section style="display:grid;grid-template-columns:repeat(4,1fr);background:${n.bg};border-top:1px solid ${n.rule};">
    ${[["120+","Proyectos"],["8","Años"],["98%","Satisfacción"],["40+","Marcas"]].map(([y,b],v)=>`
      <div style="padding:14px;text-align:center;${v>0?`border-left:1px solid ${n.rule};`:""}">
        <div style="font-family:${t.d};font-size:1.7rem;font-weight:${t.w};color:${n.accent};line-height:1;">${y}</div>
        <div style="font-family:${t.b};font-size:0.55rem;letter-spacing:.12em;text-transform:uppercase;color:${n.muted};margin-top:3px;">${b}</div>
      </div>`).join("")}
  </section>`;return p+u+g+h}function Z_(n,t,r,a){const c=a==="magazine",p=`<nav style="height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 32px;background:${n.surface};border-bottom:1px solid ${n.rule};">
    <span style="font-family:${t.d};font-size:1rem;font-weight:${t.w};color:${n.text};">THE JOURNAL</span>
    <div style="display:flex;gap:16px;">${["Estrategia","Diseño","Tecnología","Cultura"].map(h=>`<a style="font-family:${t.b};font-size:0.7rem;color:${n.text};opacity:.62;">${h}</a>`).join("")}</div>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${n.text}" stroke-width="2" opacity=".65"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  </nav>`,u=c?`<section style="display:grid;grid-template-columns:2fr 1fr;height:200px;background:${n.surface};">
        <div style="position:relative;overflow:hidden;">
          <img src="${Ae(be.article[0],533,200)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
          <div style="position:absolute;inset:0;background:linear-gradient(to top,${n.bg}E8,transparent 50%);"></div>
          <div style="position:absolute;bottom:14px;left:14px;right:14px;">
            <span style="display:inline-block;background:${n.accent};color:${n.bg};font-family:${t.b};font-size:0.5rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:2px 8px;border-radius:2px;margin-bottom:6px;">Estrategia</span>
            <h2 style="font-family:${t.d};font-size:1.2rem;font-weight:${t.w};line-height:1.2;color:#fff;">Cómo construir un sistema de contenidos que sobreviva al equipo</h2>
          </div>
        </div>
        <div style="padding:14px;display:flex;flex-direction:column;gap:10px;background:${n.bg};">
          ${be.article.slice(1,4).map((h,y)=>`
            <div style="display:flex;gap:8px;align-items:flex-start;">
              <img src="${Ae(h,72,72)}" style="width:52px;height:52px;border-radius:4px;object-fit:cover;flex-shrink:0;" alt=""/>
              <div>
                <span style="font-family:${t.b};font-size:0.48rem;letter-spacing:.1em;text-transform:uppercase;color:${n.accent};">Diseño</span>
                <p style="font-family:${t.b};font-size:0.65rem;font-weight:600;color:${n.text};line-height:1.3;margin-top:2px;">Artículo número ${y+1} sobre el tema</p>
              </div>
            </div>`).join("")}
        </div>
      </section>`:`<section style="position:relative;height:200px;overflow:hidden;">
        <img src="${Ae(be.article[0],800,200)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
        <div style="position:absolute;inset:0;background:linear-gradient(to top,${n.bg}F0,transparent 45%);"></div>
        <div style="position:absolute;top:12px;left:14px;"><span style="background:${n.accent};color:${n.bg};font-family:${t.b};font-size:0.5rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:2px 8px;border-radius:2px;">Destacado</span></div>
        <div style="position:absolute;bottom:14px;left:14px;right:14px;max-width:580px;">
          <h2 style="font-family:${t.d};font-size:1.5rem;font-weight:${t.w};line-height:1.15;color:#fff;margin-bottom:6px;">Cómo construir un sistema de contenidos que sobreviva al equipo</h2>
          <div style="display:flex;align-items:center;gap:10px;">
            <img src="${Ae(be.person[0],32,32)}" style="width:22px;height:22px;border-radius:50%;object-fit:cover;" alt=""/>
            <span style="font-family:${t.b};font-size:0.58rem;color:#ffffffaa;">María G. · 8 min · Estrategia</span>
          </div>
        </div>
      </section>`,f=`<section style="padding:14px 32px;background:${n.bg};">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;">
      <h3 style="font-family:${t.d};font-size:0.9rem;font-weight:${t.w};color:${n.text};">Lo Más Reciente</h3>
      <a style="font-family:${t.b};font-size:0.58rem;letter-spacing:.1em;text-transform:uppercase;color:${n.accent};">Ver todos →</a>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
      ${be.article.slice(1,4).map((h,y)=>`
        <div style="background:${n.surface};border:1px solid ${n.rule};border-radius:8px;overflow:hidden;">
          <img src="${Ae(h,260,130)}" style="width:100%;height:88px;object-fit:cover;" alt=""/>
          <div style="padding:9px 11px;">
            <span style="font-family:${t.b};font-size:0.48rem;letter-spacing:.1em;text-transform:uppercase;color:${n.accent};">Diseño</span>
            <p style="font-family:${t.b};font-size:0.68rem;font-weight:600;color:${n.text};line-height:1.3;margin-top:3px;margin-bottom:4px;">Artículo ${y+1}: La guía definitiva</p>
            <p style="font-family:${t.b};font-size:0.55rem;color:${n.muted};">4 min · María G.</p>
          </div>
        </div>`).join("")}
    </div>
  </section>`,g=`<section style="padding:10px 32px;background:${n.surface};border-top:1px solid ${n.rule};display:flex;align-items:center;gap:8px;">
    <span style="font-family:${t.b};font-size:0.55rem;color:${n.muted};letter-spacing:.1em;text-transform:uppercase;">Categorías:</span>
    ${["Estrategia","Diseño","IA & Tech","Marketing","Cultura"].map(h=>`<span style="font-family:${t.b};font-size:0.58rem;font-weight:600;padding:3px 9px;background:${n.bg};border:1px solid ${n.rule};border-radius:100px;color:${n.text};">${h}</span>`).join("")}
  </section>`;return p+u+f+g}function F0(n){return n.type==="ecommerce"?tk(n):n.type==="landing"?nk(n):n.type==="blog"?ok(n):rk(n)}function ek(n){const t=n.structure.enhancers.includes("image-carousel"),r=n.structure.enhancers.includes("parallax"),a=n.structure.enhancers.includes("sticky-header"),c=n.structure.enhancers.includes("floating-cta");return`
    ${K_}
    ${t?"let _ci=0;const _sl=document.querySelectorAll('.cs');function _nx(){_sl[_ci].style.opacity='0';_ci=(_ci+1)%_sl.length;_sl[_ci].style.opacity='1';}if(_sl.length)setInterval(_nx,3800);":""}
    ${r?"window.addEventListener('scroll',()=>{document.querySelectorAll('.pbg').forEach(el=>{el.style.transform='translateY('+(window.scrollY*.28)+'px)';});});":""}
    ${a?"const _nav=document.getElementById('mnav');if(_nav)window.addEventListener('scroll',()=>{_nav.style.backdropFilter=window.scrollY>60?'blur(20px)':'none';_nav.style.boxShadow=window.scrollY>60?'0 2px 24px rgba(0,0,0,.18)':'none';});":""}
    ${c?"const _fab=document.getElementById('fab');if(_fab)window.addEventListener('scroll',()=>{_fab.style.opacity=window.scrollY>window.innerHeight*.3?'1':'0';_fab.style.pointerEvents=window.scrollY>window.innerHeight*.3?'all':'none';});":""}
  `}function fl(n,t){const r=n.palette,a=mi(n),c=n.structure.enhancers.includes("floating-cta");return`<!DOCTYPE html>
<html lang="es"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${n.name} Preview</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${a.url}" rel="stylesheet">
<style>
${R0}
body{background:${r.bg};color:${r.text};font-family:${a.b};}
::-webkit-scrollbar{width:6px;height:6px;}
::-webkit-scrollbar-track{background:${r.bg};}
::-webkit-scrollbar-thumb{background:${r.accent}50;border-radius:3px;}
</style></head><body>
${t}
${c?`<button id="fab" style="position:fixed;bottom:1.8rem;right:1.8rem;z-index:999;background:${r.accent};color:${r.bg};border:none;padding:.8rem 1.8rem;font-family:${a.b};font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;border-radius:100px;box-shadow:0 8px 32px ${r.accent}60;opacity:0;transition:opacity .4s;pointer-events:none;">Solicitar ↑</button>`:""}
<script>document.addEventListener('DOMContentLoaded',()=>{${ek(n)}});<\/script>
</body></html>`}function tk(n){const t=n.palette,r=mi(n),a=ja(n),c=n.structure.headerStyle,p=n.structure.cardLayout,f=`<nav id="mnav" style="position:${n.structure.enhancers.includes("sticky-header")?"sticky":"relative"};top:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1.1rem 6vw;background:${t.surface};border-bottom:1px solid ${t.rule};transition:backdrop-filter .3s,box-shadow .3s;">
    <div style="font-family:${r.d};font-size:1.2rem;font-weight:${r.w};color:${t.text};">STORE</div>
    <div style="display:flex;gap:2rem;">${["Inicio","Colecciones","Nuevo","Sale","Blog"].map(S=>`<a href="#" style="font-family:${r.b};font-size:.82rem;color:${t.text};opacity:.7;">${S}</a>`).join("")}</div>
    <div style="display:flex;gap:1.2rem;align-items:center;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${t.text}" stroke-width="2" opacity=".7"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <div style="position:relative;cursor:pointer;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${t.text}" stroke-width="2" opacity=".7"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <div style="position:absolute;top:-7px;right:-8px;width:16px;height:16px;background:${t.accent};border-radius:50%;font-family:${r.b};font-size:9px;font-weight:700;color:${t.bg};display:flex;align-items:center;justify-content:center;">2</div>
      </div>
    </div>
  </nav>`,g=`<div style="background:${t.accent};padding:.6rem;text-align:center;font-family:${r.b};font-size:.72rem;font-weight:600;letter-spacing:.06em;color:${t.bg};">✦ Envío Gratis en órdenes +$50 &nbsp;·&nbsp; Devolución 30 días &nbsp;·&nbsp; Pago seguro SSL</div>`;let h="";c==="hero-split"?h=`<section style="display:grid;grid-template-columns:1fr 1fr;min-height:90vh;">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:8vw 5vw 8vw 6vw;background:${t.bg};">
        <div class="sr" style="display:inline-flex;align-items:center;gap:.5rem;background:${t.accent}18;border:1px solid ${t.accent}30;border-radius:100px;padding:.3rem 1rem;margin-bottom:1.6rem;width:fit-content;">
          <span style="width:6px;height:6px;background:${t.accent};border-radius:50%;"></span>
          <span style="font-family:${r.b};font-size:.58rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${t.accent};">Lanzamiento 2026 · Cupos limitados</span>
        </div>
        <h1 class="sr" style="font-family:${r.d};font-size:clamp(2.4rem,4.5vw,4.2rem);font-weight:${r.w};line-height:1.04;color:${t.text};margin-bottom:1.2rem;letter-spacing:-.02em;">El Producto<br/>que Define<br/><em style="color:${t.accent};font-style:normal;">Tu Estilo.</em></h1>
        <p class="sr" style="font-family:${r.b};font-size:1rem;line-height:1.75;color:${t.text};opacity:${a};margin-bottom:1.8rem;">Formulado para los que exigen más. Sin compromisos en ingredientes, sin límites en resultados.</p>
        <div style="display:flex;align-items:baseline;gap:1rem;margin-bottom:.6rem;">
          <span style="font-family:${r.d};font-size:2.4rem;font-weight:${r.w};color:${t.accent};">$89.99</span>
          <del style="font-family:${r.b};font-size:.85rem;color:${t.muted};">$130.00</del>
          <span style="font-family:${r.b};font-size:.65rem;font-weight:700;color:${t.accent};background:${t.accent}18;padding:2px 8px;border-radius:100px;">−31%</span>
        </div>
        <div style="display:flex;gap:.4rem;margin-bottom:1.8rem;">${[0,1,2,3,4].map(S=>`<span style="color:${t.accent};font-size:1rem;">${S<4?"★":"☆"}</span>`).join("")}<span style="font-family:${r.b};font-size:.72rem;color:${t.muted};margin-left:.4rem;">4.8 (2,847)</span></div>
        <div class="sr" style="display:flex;gap:1rem;margin-bottom:2rem;">
          <button style="flex:1;background:${t.accent};color:${t.bg};border:none;padding:1rem 2rem;font-family:${r.b};font-size:.88rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:6px;">🛒 Comprar Ahora</button>
          <button style="background:transparent;color:${t.text};border:1px solid ${t.rule};padding:1rem 1.4rem;font-family:${r.b};font-size:.82rem;border-radius:6px;">♡</button>
        </div>
        <div style="display:flex;gap:2rem;padding-top:1.4rem;border-top:1px solid ${t.rule};">
          ${["✓ Envío en 24h","✓ Devolución 30d","✓ Pago Seguro"].map(S=>`<span style="font-family:${r.b};font-size:.7rem;color:${t.text};opacity:${a};">${S}</span>`).join("")}
        </div>
      </div>
      <div style="position:relative;overflow:hidden;background:${t.surface};">
        <img src="${Ae(be.prod[0],600,800)}" style="width:100%;height:100%;object-fit:cover;" alt="Producto destacado"/>
        <div style="position:absolute;inset:0;background:${t.bg}15;"></div>
        <div class="sr" style="position:absolute;top:1.5rem;left:1.5rem;background:${t.accent};color:${t.bg};font-family:${r.b};font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.4rem 1rem;border-radius:100px;">Más Vendido</div>
        <div class="sr" style="position:absolute;bottom:2rem;right:2rem;background:${t.bg}EE;backdrop-filter:blur(12px);border:1px solid ${t.rule};border-radius:14px;padding:1.2rem;min-width:160px;">
          <div style="display:flex;gap:.2rem;margin-bottom:.5rem;">${[0,1,2,3,4].map(()=>`<span style="color:${t.accent};">★</span>`).join("")}</div>
          <p style="font-family:${r.b};font-size:.72rem;font-weight:700;color:${t.text};">4.9 / 5.0</p>
          <p style="font-family:${r.b};font-size:.62rem;color:${t.muted};">+2,847 reseñas verificadas</p>
        </div>
      </div>
    </section>`:c==="hero-editorial"?h=`<section style="padding:10vh 7vw 6vh;background:${t.bg};border-bottom:1px solid ${t.rule};">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4rem;">
        <p style="font-family:${r.b};font-size:.62rem;letter-spacing:.28em;text-transform:uppercase;color:${t.muted};">Colección 2026 — Vol. III</p>
        <div style="display:flex;gap:2rem;">${["Nuevo","Colecciones","Sale"].map(S=>`<a href="#" style="font-family:${r.b};font-size:.75rem;color:${t.text};opacity:.6;">${S}</a>`).join("")}</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:end;">
        <div>
          <h1 class="sr" style="font-family:${r.d};font-size:clamp(3.5rem,7vw,6.5rem);font-weight:${r.w};line-height:.95;color:${t.text};letter-spacing:-.04em;margin-bottom:2.5rem;">La Forma<br/>de lo<br/><span style="color:${t.accent};">Esencial.</span></h1>
          <div style="display:flex;align-items:baseline;gap:1.2rem;margin-bottom:1.5rem;">
            <span style="font-family:${r.d};font-size:2rem;font-weight:${r.w};color:${t.accent};">$89.99</span>
            <del style="font-family:${r.b};font-size:.85rem;color:${t.muted};">$130.00</del>
          </div>
          <div style="display:flex;gap:1rem;">
            <button style="background:${t.accent};color:${t.bg};border:none;padding:1rem 2.4rem;font-family:${r.b};font-size:.85rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Comprar →</button>
            <button style="background:transparent;color:${t.text};border:1px solid ${t.rule};padding:1rem 1.6rem;font-family:${r.b};font-size:.82rem;border-radius:4px;">Ver Todo</button>
          </div>
        </div>
        <div style="position:relative;">
          <img src="${Ae(be.prod[0],600,700)}" style="width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:4px;" alt=""/>
          <div style="position:absolute;bottom:-1.5rem;left:2rem;background:${t.bg};border:1px solid ${t.rule};padding:1rem 1.4rem;border-radius:8px;">
            <p style="font-family:${r.b};font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:${t.muted};">Bestseller #1</p>
            <p style="font-family:${r.d};font-size:1rem;font-weight:${r.w};color:${t.text};">Signature Collection</p>
          </div>
        </div>
      </div>
    </section>`:c==="hero-text-only"||c==="hero-minimal"?h=`<section style="background:${t.bg};">
      <div style="padding:12vh 8vw 6vh;text-align:center;border-bottom:1px solid ${t.rule};">
        <p class="sr" style="font-family:${r.b};font-size:.6rem;letter-spacing:.3em;text-transform:uppercase;color:${t.accent};margin-bottom:1.5rem;">Nueva Colección — Disponible Ahora</p>
        <h1 class="sr" style="font-family:${r.d};font-size:clamp(4rem,10vw,9rem);font-weight:${r.w};line-height:.9;color:${t.text};letter-spacing:-.04em;margin-bottom:2rem;">TODO<br/><span style="color:${t.accent};">COMIENZA</span><br/>AQUÍ.</h1>
        <p class="sr" style="font-family:${r.b};font-size:1.05rem;line-height:1.7;color:${t.text};opacity:${a};max-width:440px;margin:0 auto 2.5rem;">Sin relleno. Sin promesas vacías. Solo el mejor producto de su categoría.</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <button style="background:${t.accent};color:${t.bg};border:none;padding:1rem 2.6rem;font-family:${r.b};font-size:.9rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Ver Colección</button>
          <button style="background:transparent;color:${t.text};border:1px solid ${t.rule};padding:1rem 2rem;font-family:${r.b};font-size:.85rem;border-radius:4px;">Más Vendidos →</button>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-bottom:1px solid ${t.rule};">
        ${be.prod.slice(0,4).map((S,T)=>`
          <div style="position:relative;aspect-ratio:3/4;overflow:hidden;border-right:${T<3?`1px solid ${t.rule}`:"none"};">
            <img src="${Ae(S,320,427)}" style="width:100%;height:100%;object-fit:cover;transition:transform .4s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'" alt=""/>
            <div style="position:absolute;inset:0;background:${t.bg}00;transition:background .2s;"></div>
            <div style="position:absolute;bottom:1.2rem;left:1.2rem;right:1.2rem;">
              <p style="font-family:${r.b};font-size:.75rem;font-weight:700;color:${t.text};background:${t.bg}EE;backdrop-filter:blur(8px);padding:.5rem .8rem;border-radius:6px;display:inline-block;">$${[89,64,49,74][T]}.99</p>
            </div>
          </div>`).join("")}
      </div>
    </section>`:h=`<section style="position:relative;min-height:92vh;overflow:hidden;display:flex;align-items:center;padding:0 6vw;">
      <div class="pbg" style="position:absolute;inset:-20%;z-index:0;background:url('${Ae(be.hero[0],1400,900)}') center/cover no-repeat;"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to right,${t.bg}F4,${t.bg}C0 55%,${t.bg}40);"></div>
      <div style="position:relative;z-index:2;max-width:580px;">
        <p class="sr" style="font-family:${r.b};font-size:.65rem;letter-spacing:.28em;text-transform:uppercase;color:${t.accent};margin-bottom:1.5rem;">Colección Exclusiva · 2026</p>
        <h1 class="sr" style="font-family:${r.d};font-size:clamp(2.8rem,6vw,5.5rem);font-weight:${r.w};line-height:1.04;color:${t.text};margin-bottom:1rem;letter-spacing:-.02em;">Hecho Para<br/>Los Que<br/><em style="color:${t.accent};font-style:normal;">Saben.</em></h1>
        <div style="display:flex;align-items:baseline;gap:1rem;margin-bottom:1.5rem;">
          <span style="font-family:${r.d};font-size:2.2rem;font-weight:${r.w};color:${t.accent};">$89.99</span>
          <del style="font-family:${r.b};font-size:.85rem;color:${t.muted};">$130.00</del>
        </div>
        <div class="sr" style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem;">
          <button style="background:${t.accent};color:${t.bg};border:none;padding:1rem 2.4rem;font-family:${r.b};font-size:.85rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Comprar Ahora</button>
          <button style="background:transparent;color:${t.text};border:1px solid ${t.text}40;padding:1rem 2rem;font-family:${r.b};font-size:.82rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;">Ver Colección</button>
        </div>
        <div class="sr" style="display:flex;gap:1.8rem;">
          ${["✓ Envío 24h","✓ Devol. 30d","✓ Pago Seguro"].map(S=>`<span style="font-family:${r.b};font-size:.72rem;color:${t.text};opacity:${a};">${S}</span>`).join("")}
        </div>
      </div>
    </section>`;const y=p==="scroll-horizontal",b=(S,T,M,D)=>`
    <div class="sr" style="background:${t.bg};border:1px solid ${t.rule};border-radius:10px;overflow:hidden;${y?"flex:0 0 280px;":""}" >
      <div style="position:relative;aspect-ratio:3/4;overflow:hidden;background:${t.surface};">
        <img src="${Ae(S,280,373)}" style="width:100%;height:100%;object-fit:cover;transition:transform .5s ease;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'" alt=""/>
        ${D?`<span style="position:absolute;top:10px;left:10px;background:${t.accent};color:${t.bg};font-family:${r.b};font-size:.6rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:3px;">${D}</span>`:""}
        <button style="position:absolute;bottom:10px;right:10px;background:${t.bg};color:${t.text};border:1px solid ${t.rule};width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.1rem;transition:background .2s;" onmouseover="this.style.background='${t.accent}';this.style.color='${t.bg}'" onmouseout="this.style.background='${t.bg}';this.style.color='${t.text}'">♡</button>
      </div>
      <div style="padding:1rem 1.1rem;">
        <p style="font-family:${r.b};font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:${t.muted};margin-bottom:.3rem;">Colección 2026</p>
        <p style="font-family:${r.b};font-size:.9rem;font-weight:600;color:${t.text};margin-bottom:.6rem;">${T}</p>
        <div style="display:flex;gap:.3rem;margin-bottom:.6rem;">${[0,1,2,3,4].map(F=>`<div style="width:12px;height:12px;border-radius:50%;background:${F<4?t.accent:t.rule};"></div>`).join("")}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-family:${r.d};font-size:1.1rem;font-weight:${r.w};color:${t.accent};">${M}</span>
          <button style="background:${t.accent};color:${t.bg};border:none;padding:.5rem 1rem;font-family:${r.b};font-size:.72rem;font-weight:700;letter-spacing:.06em;border-radius:4px;transition:opacity .2s;" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">+ Agregar</button>
        </div>
      </div>
    </div>`,v=`<section id="collection" style="padding:6rem 6vw;background:${t.surface};">
    <div class="sr" style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3rem;">
      <div>
        <p style="font-family:${r.b};font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:${t.accent};margin-bottom:.5rem;">Recién Llegado</p>
        <h2 style="font-family:${r.d};font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:${r.w};color:${t.text};letter-spacing:-.02em;">Nueva Colección</h2>
      </div>
      <div style="display:flex;gap:.8rem;">
        ${["Todos","Nuevo","Sale","Kit"].map(S=>`<button style="background:transparent;border:1px solid ${t.rule};padding:.4rem 1rem;font-family:${r.b};font-size:.7rem;color:${t.muted};border-radius:100px;">${S}</button>`).join("")}
      </div>
    </div>
    <div style="${y?"display:flex;gap:1.4rem;overflow-x:auto;padding-bottom:1rem;scroll-snap-type:x mandatory;cursor:grab;":"display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.4rem;"}">
      ${b(be.prod[1],"Signature Collection","$89.99","Nuevo")}
      ${b(be.prod[2],"Limited Edition Vol. 2","$64.99","−30%")}
      ${b(be.prod[3],"Essential Bundle","$49.99")}
      ${b(be.prod[4],"Core Formula","$74.99","Nuevo")}
      ${b(be.prod[5],"Premium Reserve","$119.99")}
      ${b(be.prod[6],"Classic Edition","$54.99")}
      ${b(be.prod[7],"Gift Set","$99.99","Popular")}
      ${b(be.prod[8],"Trial Kit","$29.99")}
    </div>
  </section>`,_=`<section id="product" style="display:grid;grid-template-columns:1fr 1fr;min-height:70vh;background:${t.bg};">
    <div style="overflow:hidden;position:relative;background:${t.surface};">
      <img src="${Ae(be.prod[9],600,700)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
    </div>
    <div style="display:flex;flex-direction:column;justify-content:center;padding:6rem 5vw;">
      <p class="sr" style="font-family:${r.b};font-size:.62rem;letter-spacing:.24em;text-transform:uppercase;color:${t.accent};margin-bottom:1.2rem;">Producto del Mes</p>
      <h2 class="sr" style="font-family:${r.d};font-size:clamp(2rem,3.5vw,3rem);font-weight:${r.w};color:${t.text};margin-bottom:1rem;letter-spacing:-.02em;">Premium Reserve<br/>Formula 001</h2>
      <p class="sr" style="font-family:${r.b};font-size:.95rem;line-height:1.8;color:${t.text};opacity:${a};margin-bottom:2rem;">Formulado con 97% de ingredientes naturales activos. Resultados visibles en 14 días. El estándar al que todos aspiran pero pocos alcanzan.</p>
      <div class="sr" style="display:flex;gap:2rem;margin-bottom:2rem;">
        ${[["Ingredientes","97% Natural"],["Días","14 días"],["Reseñas","4.9★"]].map(([S,T])=>`<div><p style="font-family:${r.b};font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:${t.muted};margin-bottom:.3rem;">${S}</p><p style="font-family:${r.d};font-size:1.2rem;font-weight:${r.w};color:${t.text};">${T}</p></div>`).join("")}
      </div>
      <div class="sr" style="display:flex;align-items:center;gap:2rem;margin-bottom:2rem;">
        <span style="font-family:${r.d};font-size:2.4rem;font-weight:${r.w};color:${t.accent};">$119.99</span>
        <del style="font-family:${r.b};font-size:.9rem;color:${t.muted};">$180.00</del>
      </div>
      <div class="sr" style="display:flex;gap:1rem;">
        <button style="flex:1;background:${t.accent};color:${t.bg};border:none;padding:1.1rem 2rem;font-family:${r.b};font-size:.85rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Agregar al Carrito</button>
        <button style="background:transparent;color:${t.text};border:1px solid ${t.rule};padding:1.1rem 1.4rem;font-family:${r.b};font-size:.82rem;border-radius:4px;">♡</button>
      </div>
    </div>
  </section>`,k=`<section style="padding:6rem 6vw;background:${t.surface};">
    <div class="sr" style="text-align:center;margin-bottom:3.5rem;">
      <p style="font-family:${r.b};font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:${t.accent};margin-bottom:.8rem;">Lo Que Dicen</p>
      <h2 style="font-family:${r.d};font-size:clamp(1.8rem,3vw,2.5rem);font-weight:${r.w};color:${t.text};letter-spacing:-.02em;">+2,847 Clientes Felices</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;">
      ${[["★★★★★","María G.","Increíble calidad. Lo uso todos los días desde hace 6 meses y nunca volvería a usar otro."],["★★★★★","Carlos R.","El mejor producto de su categoría. Resultados en 2 semanas, exactamente como prometían."],["★★★★★","Ana M.","Packaging impecable, envío rapidísimo. El producto supera todas las expectativas."]].map(([S,T,M])=>`
        <div class="sr" style="background:${t.bg};border:1px solid ${t.rule};border-radius:12px;padding:1.5rem;">
          <div style="font-size:1rem;color:${t.accent};margin-bottom:.8rem;">${S}</div>
          <p style="font-family:${r.b};font-size:.88rem;line-height:1.75;color:${t.text};opacity:${a};margin-bottom:1rem;">"${M}"</p>
          <div style="display:flex;align-items:center;gap:.6rem;">
            <div style="width:32px;height:32px;border-radius:50%;background:${t.accent}30;"></div>
            <span style="font-family:${r.b};font-size:.75rem;font-weight:700;color:${t.text};">${T}</span>
          </div>
        </div>`).join("")}
    </div>
  </section>`,z=`<section style="padding:5rem 6vw;background:${t.bg};text-align:center;border-top:1px solid ${t.rule};">
    <h2 class="sr" style="font-family:${r.d};font-size:clamp(1.5rem,2.5vw,2.2rem);font-weight:${r.w};color:${t.text};margin-bottom:1rem;">Acceso Anticipado a Nuevos Lanzamientos</h2>
    <p class="sr" style="font-family:${r.b};font-size:.9rem;color:${t.text};opacity:${a};margin-bottom:2rem;">Sé el primero. Descuentos exclusivos para suscriptores.</p>
    <div class="sr" style="display:flex;max-width:440px;margin:0 auto;gap:0;">
      <input type="email" placeholder="tu@email.com" style="flex:1;padding:.9rem 1.2rem;font-family:${r.b};font-size:.85rem;background:${t.surface};border:1px solid ${t.rule};border-right:none;border-radius:4px 0 0 4px;color:${t.text};outline:none;"/>
      <button style="background:${t.accent};color:${t.bg};border:none;padding:.9rem 1.6rem;font-family:${r.b};font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:0 4px 4px 0;">Unirme</button>
    </div>
  </section>`,$=`<footer style="background:${t.surface};border-top:1px solid ${t.rule};padding:3rem 6vw 2rem;">
    <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:2rem;">
      <div style="font-family:${r.d};font-size:1.3rem;font-weight:${r.w};color:${t.text};">STORE</div>
      <div style="display:flex;gap:3rem;">
        ${[["Comprar",["Nuevo","Sale","Colecciones"]],["Ayuda",["FAQ","Envíos","Devoluciones"]],["Marca",["Historia","Blog","Contacto"]]].map(([S,T])=>`
          <div>
            <p style="font-family:${r.b};font-size:.62rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${t.muted};margin-bottom:.8rem;">${S}</p>
            ${T.map(M=>`<p style="font-family:${r.b};font-size:.78rem;color:${t.text};opacity:.6;margin-bottom:.4rem;">${M}</p>`).join("")}
          </div>`).join("")}
      </div>
    </div>
    <div style="border-top:1px solid ${t.rule};padding-top:1.2rem;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-family:${r.b};font-size:.7rem;color:${t.muted};">© ${new Date().getFullYear()} STORE — Todos los derechos reservados.</span>
      <div style="display:flex;gap:1rem;">
        <img src="${Ae(600,40,24)}" style="height:20px;opacity:.4;border-radius:3px;" alt="Visa"/>
        <img src="${Ae(601,40,24)}" style="height:20px;opacity:.4;border-radius:3px;" alt="MC"/>
      </div>
    </div>
  </footer>`;return fl(n,g+f+h+v+_+k+z+$)}function nk(n){const t=n.palette,r=mi(n),a=ja(n),c=n.structure.headerStyle,p=n.structure.cardLayout,u=`<nav id="mnav" style="position:sticky;top:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:.9rem 7vw;background:${t.surface};border-bottom:1px solid ${t.rule};">
    <div style="font-family:${r.d};font-size:1.1rem;font-weight:${r.w};color:${t.text};">BRAND</div>
    <div style="display:flex;gap:1.8rem;">${["Producto","Casos","Precios","FAQ"].map(_=>`<a href="#" style="font-family:${r.b};font-size:.8rem;color:${t.text};opacity:.65;">${_}</a>`).join("")}</div>
    <button style="background:${t.accent};color:${t.bg};border:none;padding:.7rem 1.6rem;font-family:${r.b};font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Empezar Gratis →</button>
  </nav>`;let f="";c==="hero-fullbleed"?f=`<section style="position:relative;min-height:95vh;overflow:hidden;display:flex;align-items:center;justify-content:center;text-align:center;padding:0 10vw;">
      <div style="position:absolute;inset:0;background:url('${Ae(be.scene[0],1400,900)}') center/cover no-repeat;"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,${t.bg}B0,${t.bg}E8);"></div>
      <div style="position:relative;z-index:2;max-width:720px;">
        <div class="sr" style="display:inline-flex;align-items:center;gap:.6rem;background:${t.accent}22;border:1px solid ${t.accent}50;border-radius:100px;padding:.35rem 1.1rem;margin-bottom:2rem;">
          <span style="width:6px;height:6px;background:${t.accent};border-radius:50%;"></span>
          <span style="font-family:${r.b};font-size:.58rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:${t.accent};">Prueba gratis 14 días · Sin tarjeta</span>
        </div>
        <h1 class="sr" style="font-family:${r.d};font-size:clamp(2.8rem,6vw,5.5rem);font-weight:${r.w};line-height:1.0;color:${t.text};margin-bottom:1.6rem;letter-spacing:-.03em;">Resultados reales.<br/>No promesas de<br/><em style="color:${t.accent};font-style:normal;">agencia.</em></h1>
        <p class="sr" style="font-family:${r.b};font-size:1.05rem;line-height:1.8;color:${t.text};opacity:${a};max-width:560px;margin:0 auto 2.5rem;">El sistema que 500+ negocios usan para crecer sin depender de suerte ni de presupuesto ilimitado.</p>
        <div class="sr" style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:2rem;">
          <button style="background:${t.accent};color:${t.bg};border:none;padding:1.1rem 2.8rem;font-family:${r.b};font-size:.9rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;box-shadow:0 8px 40px ${t.accent}50;">Empezar Gratis Ahora →</button>
          <button style="background:transparent;color:${t.text};border:1px solid ${t.rule};padding:1.1rem 2rem;font-family:${r.b};font-size:.85rem;border-radius:4px;">Ver Demo en Vivo</button>
        </div>
        <div style="display:flex;justify-content:center;gap:2rem;">${["Sin contrato","Soporte 24/7","Cancela cuando quieras"].map(_=>`<span style="font-family:${r.b};font-size:.72rem;color:${t.text};opacity:${a};">✓ ${_}</span>`).join("")}</div>
      </div>
    </section>`:c==="hero-split"?f=`<section style="display:grid;grid-template-columns:1fr 1fr;min-height:88vh;">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:8vw 5vw 8vw 7vw;background:${t.bg};">
        <p class="sr" style="font-family:${r.b};font-size:.62rem;letter-spacing:.28em;text-transform:uppercase;color:${t.accent};margin-bottom:1.5rem;">Para equipos que mueven rápido</p>
        <h1 class="sr" style="font-family:${r.d};font-size:clamp(2.2rem,4vw,3.8rem);font-weight:${r.w};line-height:1.05;color:${t.text};margin-bottom:1.4rem;letter-spacing:-.02em;">El sistema que<br/>tu equipo<br/><em style="color:${t.accent};font-style:normal;">necesitaba ayer.</em></h1>
        <p class="sr" style="font-family:${r.b};font-size:1rem;line-height:1.8;color:${t.text};opacity:${a};margin-bottom:1.8rem;">Sin onboarding de 3 meses. Sin consultor caro. Resultados medibles en la primera semana.</p>
        <div style="display:flex;gap:.4rem;align-items:center;margin-bottom:1.8rem;">
          ${[0,1,2,3,4].map(()=>`<span style="color:${t.accent};font-size:1.1rem;">★</span>`).join("")}
          <span style="font-family:${r.b};font-size:.78rem;color:${t.muted};margin-left:.5rem;">4.9 · 2,400+ reseñas</span>
        </div>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;">
          <button class="sr" style="background:${t.accent};color:${t.bg};border:none;padding:1.1rem 2.5rem;font-family:${r.b};font-size:.88rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Empezar Gratis →</button>
          <button style="background:transparent;color:${t.text};border:1px solid ${t.rule};padding:1.1rem 1.6rem;font-family:${r.b};font-size:.85rem;border-radius:4px;">Ver Demo</button>
        </div>
      </div>
      <div style="position:relative;overflow:hidden;background:${t.surface};">
        <img src="${Ae(be.scene[0],620,820)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
        <div style="position:absolute;top:2rem;right:2rem;background:${t.bg}EE;backdrop-filter:blur(12px);border:1px solid ${t.rule};border-radius:14px;padding:1.2rem 1.5rem;min-width:180px;">
          <p style="font-family:${r.b};font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:${t.accent};margin-bottom:.5rem;">Esta semana</p>
          <p style="font-family:${r.d};font-size:1.8rem;font-weight:${r.w};color:${t.text};line-height:1;">+34%</p>
          <p style="font-family:${r.b};font-size:.72rem;color:${t.muted};">Tasa de conversión</p>
        </div>
      </div>
    </section>`:c==="hero-editorial"?f=`<section style="padding:10vh 8vw 6vh;background:${t.bg};">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3.5rem;border-bottom:1px solid ${t.rule};padding-bottom:1.5rem;">
        <p style="font-family:${r.b};font-size:.6rem;letter-spacing:.26em;text-transform:uppercase;color:${t.muted};">El Método — 2026</p>
        <div style="display:flex;gap:1.8rem;">${["Cómo Funciona","Resultados","Precios"].map(_=>`<a href="#" style="font-family:${r.b};font-size:.75rem;color:${t.text};opacity:.6;">${_}</a>`).join("")}</div>
      </div>
      <div style="display:grid;grid-template-columns:3fr 2fr;gap:8rem;align-items:end;">
        <div>
          <h1 class="sr" style="font-family:${r.d};font-size:clamp(3.2rem,7vw,6rem);font-weight:${r.w};line-height:.92;color:${t.text};letter-spacing:-.05em;margin-bottom:2.5rem;">Menos ruido.<br/>Más<br/><span style="color:${t.accent};">resultados.</span></h1>
          <p class="sr" style="font-family:${r.b};font-size:1rem;line-height:1.8;color:${t.text};opacity:${a};max-width:420px;margin-bottom:2rem;">El único sistema que combina automatización real con estrategia humana. Sin promesas vacías.</p>
          <button style="background:${t.accent};color:${t.bg};border:none;padding:1rem 2.5rem;font-family:${r.b};font-size:.85rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Acceso Inmediato</button>
        </div>
        <div>
          <img src="${Ae(be.scene[1],500,580)}" style="width:100%;border-radius:8px;object-fit:cover;aspect-ratio:4/5;" alt=""/>
          <div style="margin-top:1.2rem;padding:1.2rem;background:${t.surface};border:1px solid ${t.rule};border-radius:8px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem;">
              <span style="font-family:${r.b};font-size:.7rem;color:${t.muted};">Resultado promedio</span>
              <span style="font-family:${r.b};font-size:.62rem;font-weight:700;color:${t.accent};background:${t.accent}18;padding:2px 8px;border-radius:100px;">+247%</span>
            </div>
            <div style="height:6px;background:${t.rule};border-radius:100px;overflow:hidden;">
              <div style="height:100%;width:78%;background:${t.accent};border-radius:100px;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>`:c==="hero-text-only"||c==="hero-minimal"?f=`<section style="padding:14vh 12vw 10vh;background:${t.bg};text-align:center;border-bottom:2px solid ${t.rule};">
      <p class="sr" style="font-family:${r.b};font-size:.6rem;letter-spacing:.3em;text-transform:uppercase;color:${t.accent};margin-bottom:2rem;">La categoría tiene un nuevo estándar</p>
      <h1 class="sr" style="font-family:${r.d};font-size:clamp(4rem,10vw,9rem);font-weight:${r.w};line-height:.88;color:${t.text};letter-spacing:-.05em;margin-bottom:2.5rem;">EL SISTEMA<br/><span style="color:${t.accent};">QUE CIERRA</span><br/>NEGOCIOS.</h1>
      <p class="sr" style="font-family:${r.b};font-size:1.1rem;line-height:1.75;color:${t.text};opacity:${a};max-width:500px;margin:0 auto 2.5rem;">Sin vendedor estelar. Sin año de implementación. Sin excusas de "mercado difícil".</p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:3rem;">
        <button style="background:${t.accent};color:${t.bg};border:none;padding:1.1rem 2.8rem;font-family:${r.b};font-size:.9rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Quiero Acceso →</button>
        <button style="background:transparent;color:${t.text};border:1px solid ${t.rule};padding:1.1rem 2rem;font-family:${r.b};font-size:.88rem;border-radius:4px;">Ver Casos Reales</button>
      </div>
      <div style="display:flex;justify-content:center;gap:4rem;">
        ${[["500+","Empresas activas"],["3×","Más conversión"],["14d","Resultados promedio"]].map(([_,k])=>`<div style="text-align:center;"><p style="font-family:${r.d};font-size:2.5rem;font-weight:${r.w};color:${t.accent};line-height:1;">${_}</p><p style="font-family:${r.b};font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:${t.muted};margin-top:.4rem;">${k}</p></div>`).join("")}
      </div>
    </section>`:f=`<section style="position:relative;min-height:92vh;overflow:hidden;display:flex;align-items:center;padding:0 7vw;">
      <img src="${Ae(be.scene[0],1400,920)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;"/>
      <div style="position:absolute;inset:0;background:linear-gradient(105deg,${t.bg}F2 45%,${t.bg}80 70%,transparent);"></div>
      <div style="position:relative;z-index:2;max-width:560px;">
        <p class="sr" style="font-family:${r.b};font-size:.62rem;letter-spacing:.28em;text-transform:uppercase;color:${t.accent};margin-bottom:1.5rem;">Probado. Medido. Sin promesas.</p>
        <h1 class="sr" style="font-family:${r.d};font-size:clamp(2.5rem,5vw,4.8rem);font-weight:${r.w};line-height:1.04;color:${t.text};margin-bottom:1.5rem;letter-spacing:-.03em;">El crecimiento<br/>que merecías<br/><em style="color:${t.accent};font-style:normal;">desde el primer día.</em></h1>
        <p class="sr" style="font-family:${r.b};font-size:1rem;line-height:1.8;color:${t.text};opacity:${a};margin-bottom:2.5rem;">No vendemos "estrategia". Vendemos el sistema que la ejecuta sin que tengas que supervisar cada paso.</p>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem;">
          <button style="background:${t.accent};color:${t.bg};border:none;padding:1rem 2.5rem;font-family:${r.b};font-size:.88rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;box-shadow:0 6px 30px ${t.accent}40;">Solicitar Demo →</button>
          <button style="background:${t.bg}CC;color:${t.text};border:1px solid ${t.rule};padding:1rem 1.8rem;font-family:${r.b};font-size:.85rem;border-radius:4px;backdrop-filter:blur(8px);">Casos de Éxito</button>
        </div>
        <div style="display:flex;gap:1.5rem;">${["Sin permanencia","Soporte incluido","Cancela en 1 clic"].map(_=>`<span style="font-family:${r.b};font-size:.7rem;color:${t.text};opacity:${a};">✓ ${_}</span>`).join("")}</div>
      </div>
    </section>`;const g=`<section style="display:grid;grid-template-columns:repeat(4,1fr);background:${t.surface};border-top:1px solid ${t.rule};border-bottom:1px solid ${t.rule};">
    ${[["500+","Empresas activas"],["3×","Más conversión"],["98%","Retención 12 meses"],["14d","Tiempo primer resultado"]].map(([_,k],z)=>`
      <div class="sr" style="padding:2.5rem;text-align:center;${z>0?`border-left:1px solid ${t.rule};`:""}">
        <div style="font-family:${r.d};font-size:2.8rem;font-weight:${r.w};color:${t.accent};line-height:1;">${_}</div>
        <div style="font-family:${r.b};font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:${t.muted};margin-top:.6rem;">${k}</div>
      </div>`).join("")}
  </section>`;let h="";p==="list-editorial"?h=`<section style="padding:7rem 7vw;background:${t.bg};">
      <div style="display:grid;grid-template-columns:1fr 2fr;gap:6rem;align-items:start;">
        <div>
          <p style="font-family:${r.b};font-size:.62rem;letter-spacing:.24em;text-transform:uppercase;color:${t.accent};margin-bottom:1rem;">El Sistema</p>
          <h2 class="sr" style="font-family:${r.d};font-size:clamp(1.8rem,3vw,2.6rem);font-weight:${r.w};color:${t.text};letter-spacing:-.02em;line-height:1.1;margin-bottom:1.5rem;">Todo lo que<br/>necesitas.<br/>Nada de lo<br/>que no.</h2>
          <p style="font-family:${r.b};font-size:.85rem;line-height:1.75;color:${t.text};opacity:${a};">Diseñado para escalar contigo desde el día 1. Sin configuraciones infinitas.</p>
        </div>
        <div>
          ${[["01","Diagnóstico en 48h","Análisis de brechas específico para tu realidad. No un cuestionario genérico."],["02","Implementación Asistida","Cada paso tiene un protocolo. Tu equipo no parte de cero."],["03","Resultados Medibles","KPIs desde el día 1. Si no hay datos, no hay progreso — y lo sabemos."],["04","Escalabilidad Incluida","El sistema crece contigo. Lo que funciona en 10 clientes, funciona en 10,000."]].map(([_,k,z])=>`
            <div class="sr" style="display:grid;grid-template-columns:3rem 1fr;gap:1.5rem;padding:1.8rem 0;border-bottom:1px solid ${t.rule};align-items:start;">
              <span style="font-family:${r.d};font-size:1.4rem;font-weight:${r.w};color:${t.accent};opacity:.4;line-height:1;">${_}</span>
              <div>
                <p style="font-family:${r.b};font-size:.95rem;font-weight:700;color:${t.text};margin-bottom:.5rem;">${k}</p>
                <p style="font-family:${r.b};font-size:.82rem;line-height:1.7;color:${t.text};opacity:${a};">${z}</p>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>`:p==="grid-masonry"?h=`<section style="padding:7rem 7vw;background:${t.bg};">
      <div class="sr" style="text-align:center;margin-bottom:4rem;">
        <p style="font-family:${r.b};font-size:.62rem;letter-spacing:.24em;text-transform:uppercase;color:${t.accent};margin-bottom:.8rem;">Por Qué Funciona</p>
        <h2 style="font-family:${r.d};font-size:clamp(1.8rem,3vw,2.6rem);font-weight:${r.w};color:${t.text};letter-spacing:-.02em;">Construido para resultados reales.</h2>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;">
        <div class="sr" style="background:${t.accent};border-radius:16px;padding:3rem;display:flex;flex-direction:column;justify-content:flex-end;min-height:280px;position:relative;overflow:hidden;">
          <div style="position:absolute;top:-2rem;right:-2rem;width:180px;height:180px;background:${t.bg}15;border-radius:50%;"></div>
          <p style="font-family:${r.d};font-size:3.5rem;font-weight:${r.w};color:${t.bg};line-height:1;margin-bottom:.5rem;">+247%</p>
          <p style="font-family:${r.b};font-size:.85rem;font-weight:700;color:${t.bg};margin-bottom:.3rem;">Incremento promedio en conversión</p>
          <p style="font-family:${r.b};font-size:.75rem;color:${t.bg};opacity:.75;">En los primeros 90 días de uso</p>
        </div>
        <div style="display:grid;grid-template-rows:1fr 1fr;gap:1.2rem;">
          ${[["Integración en 1 día","Sin equipo técnico. Sin meses de setup. Empieza el mismo día."],["Soporte 24/7","Un humano real. SLA de respuesta: urgente = 1h, normal = 4h."]].map(([_,k])=>`
            <div class="sr" style="background:${t.surface};border:1px solid ${t.rule};border-radius:16px;padding:2rem;">
              <p style="font-family:${r.b};font-size:.95rem;font-weight:700;color:${t.text};margin-bottom:.5rem;">${_}</p>
              <p style="font-family:${r.b};font-size:.82rem;line-height:1.7;color:${t.text};opacity:${a};">${k}</p>
            </div>`).join("")}
        </div>
        <div class="sr" style="background:${t.surface};border:1px solid ${t.rule};border-radius:16px;padding:2rem;">
          <p style="font-family:${r.b};font-size:.95rem;font-weight:700;color:${t.text};margin-bottom:.5rem;">Sin permanencia</p>
          <p style="font-family:${r.b};font-size:.82rem;line-height:1.7;color:${t.text};opacity:${a};">Cancela en 1 clic. Si no funciona, no tienes por qué quedarte. Así de simple.</p>
        </div>
        <div class="sr" style="background:${t.bg};border:1px solid ${t.rule};border-radius:16px;padding:2rem;display:flex;align-items:center;justify-content:center;">
          <button style="background:${t.accent};color:${t.bg};border:none;padding:1rem 2rem;font-family:${r.b};font-size:.85rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:8px;white-space:nowrap;">Empezar Ahora →</button>
        </div>
      </div>
    </section>`:p==="scroll-horizontal"?h=`<section style="padding:7rem 0;background:${t.bg};overflow:hidden;">
      <div style="padding:0 7vw;margin-bottom:3rem;">
        <p style="font-family:${r.b};font-size:.62rem;letter-spacing:.24em;text-transform:uppercase;color:${t.accent};margin-bottom:.8rem;">Lo Que Incluye</p>
        <h2 class="sr" style="font-family:${r.d};font-size:clamp(1.8rem,3vw,2.6rem);font-weight:${r.w};color:${t.text};letter-spacing:-.02em;">Todo incluido. Sin sorpresas.</h2>
      </div>
      <div style="display:flex;gap:1.2rem;padding:0 7vw;overflow-x:auto;scroll-snap-type:x mandatory;cursor:grab;">
        ${[["⚡","Implementación Express","En vivo el mismo día. Sin instalación. Sin equipo técnico."],["📊","Analytics en Tiempo Real","Datos que se actualizan cada 5 minutos. Sin esperar el reporte del lunes."],["🔗","120+ Integraciones","Conecta con lo que ya usas. CRM, email, ERP, Shopify, todo."],["🛡️","Seguridad Empresarial","SOC2, GDPR, ISO 27001. Tu data nunca sale de tu jurisdicción."],["🤝","Account Manager Dedicado","No un bot. Una persona que conoce tu negocio y lleva tu cuenta."]].map(([_,k,z])=>`
          <div class="sr" style="flex:0 0 300px;background:${t.surface};border:1px solid ${t.rule};border-radius:16px;padding:2rem;scroll-snap-align:start;">
            <div style="font-size:2rem;margin-bottom:1.2rem;">${_}</div>
            <p style="font-family:${r.b};font-size:.95rem;font-weight:700;color:${t.text};margin-bottom:.6rem;">${k}</p>
            <p style="font-family:${r.b};font-size:.82rem;line-height:1.7;color:${t.text};opacity:${a};">${z}</p>
          </div>`).join("")}
      </div>
    </section>`:h=`<section style="padding:7rem 7vw;background:${t.bg};">
      <div class="sr" style="text-align:center;margin-bottom:4rem;">
        <p style="font-family:${r.b};font-size:.64rem;letter-spacing:.24em;text-transform:uppercase;color:${t.accent};margin-bottom:.8rem;">Lo Que Incluye</p>
        <h2 style="font-family:${r.d};font-size:clamp(1.8rem,3vw,2.6rem);font-weight:${r.w};color:${t.text};letter-spacing:-.02em;">Un Sistema. No Un Servicio Más.</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;">
        ${[["Diagnóstico Profundo","Análisis de brechas en 48h. Específico para tu realidad, no genérico."],["Implementación Guiada","Cada paso tiene un protocolo. No te dejamos solo ante la hoja en blanco."],["Resultados Medibles","KPIs definidos desde el día 1. Sin datos, no hay progreso."],["Soporte con SLA","Urgente, Prioritario, Regular. Sin ambigüedad, sin bots."],["Escalabilidad Incluida","Lo que funciona en 10 clientes funciona en 10,000. Mismo sistema."],["Reportes Mensuales","Rendición de cuentas real. Transparencia es un documento, no un discurso."]].map(([_,k])=>`
          <div class="sr" style="padding:2rem;background:${t.surface};border:1px solid ${t.rule};border-radius:12px;">
            <div style="width:40px;height:40px;background:${t.accent}20;border-radius:10px;margin-bottom:1.2rem;"></div>
            <p style="font-family:${r.b};font-size:.9rem;font-weight:700;color:${t.text};margin-bottom:.6rem;">${_}</p>
            <p style="font-family:${r.b};font-size:.82rem;line-height:1.7;color:${t.text};opacity:${a};">${k}</p>
          </div>`).join("")}
      </div>
    </section>`;const y=`<section style="padding:7rem 7vw;background:${t.surface};">
    <div class="sr" style="text-align:center;margin-bottom:4rem;">
      <p style="font-family:${r.b};font-size:.64rem;letter-spacing:.24em;text-transform:uppercase;color:${t.accent};margin-bottom:.8rem;">Lo Que Dicen</p>
      <h2 style="font-family:${r.d};font-size:clamp(1.6rem,3vw,2.4rem);font-weight:${r.w};color:${t.text};letter-spacing:-.02em;">No lo decimos nosotros.</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;">
      ${[["Ricardo O.","CEO · Fintech Scale-up","Implementamos en un viernes por la tarde. El lunes ya teníamos datos. Nada de lo que habíamos probado antes fue tan rápido."],["Patricia M.","VP Marketing · Retail Chain","El equipo tardó 2 horas en adoptarlo. Sin capacitación extra. Sin preguntas raras al soporte. Así de intuitivo."],["Carlos V.","Fundador · SaaS B2B","El ROI fue claro en 3 semanas: menos tiempo en reuniones de seguimiento, más tiempo cerrando. No hay vuelta atrás."]].map(([_,k,z])=>`
        <div class="sr" style="background:${t.bg};border:1px solid ${t.rule};border-radius:12px;padding:2rem;">
          <div style="display:flex;gap:.3rem;margin-bottom:1rem;">${[0,1,2,3,4].map(()=>`<span style="color:${t.accent};">★</span>`).join("")}</div>
          <p style="font-family:${r.b};font-size:.88rem;line-height:1.8;color:${t.text};opacity:${a};margin-bottom:1.5rem;">"${z}"</p>
          <div style="display:flex;align-items:center;gap:.8rem;border-top:1px solid ${t.rule};padding-top:1.2rem;">
            <div style="width:38px;height:38px;border-radius:50%;background:${t.accent}25;display:flex;align-items:center;justify-content:center;font-family:${r.d};font-size:.8rem;font-weight:${r.w};color:${t.accent};">${_[0]}</div>
            <div><p style="font-family:${r.b};font-size:.8rem;font-weight:700;color:${t.text};">${_}</p><p style="font-family:${r.b};font-size:.7rem;color:${t.muted};">${k}</p></div>
          </div>
        </div>`).join("")}
    </div>
  </section>`,b=`<section style="padding:9rem 7vw;background:${t.bg};text-align:center;">
    <p class="sr" style="font-family:${r.b};font-size:.64rem;letter-spacing:.24em;text-transform:uppercase;color:${t.accent};margin-bottom:1rem;">14 días gratis. Sin tarjeta. Sin trampa.</p>
    <h2 class="sr" style="font-family:${r.d};font-size:clamp(2rem,4vw,3.5rem);font-weight:${r.w};color:${t.text};margin-bottom:1.5rem;letter-spacing:-.03em;">Cada semana que esperas,<br/>tu competencia no<br/><em style="color:${t.accent};font-style:normal;">está esperando.</em></h2>
    <p class="sr" style="font-family:${r.b};font-size:1rem;line-height:1.8;color:${t.text};opacity:${a};max-width:440px;margin:0 auto 3rem;">Sin permanencia. Cancela cuando quieras. Pero los que empiezan, no se van.</p>
    <button class="sr" style="background:${t.accent};color:${t.bg};border:none;padding:1.2rem 3.2rem;font-family:${r.b};font-size:.95rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;box-shadow:0 8px 40px ${t.accent}50;">Empezar Ahora — Es Gratis →</button>
  </section>`,v=`<footer style="background:${t.surface};border-top:1px solid ${t.rule};padding:2.5rem 7vw;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-family:${r.d};font-size:1rem;font-weight:${r.w};color:${t.text};">BRAND</span>
    <span style="font-family:${r.b};font-size:.72rem;color:${t.muted};">© ${new Date().getFullYear()} · Todos los derechos reservados</span>
    <div style="display:flex;gap:1.4rem;">${["Privacidad","Términos","Contacto"].map(_=>`<a style="font-family:${r.b};font-size:.72rem;color:${t.muted};">${_}</a>`).join("")}</div>
  </footer>`;return fl(n,u+f+g+h+y+b+v)}function ok(n){const t=n.palette,r=mi(n),a=ja(n),p=n.structure.cardLayout==="magazine",u=`<nav id="mnav" style="position:sticky;top:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1rem 6vw;background:${t.surface};border-bottom:1px solid ${t.rule};">
    <div style="font-family:${r.d};font-size:1.1rem;font-weight:${r.w};color:${t.text};">THE JOURNAL</div>
    <div style="display:flex;gap:1.8rem;">${["Estrategia","Diseño","Tecnología","Cultura","Opinión"].map(_=>`<a href="#" style="font-family:${r.b};font-size:.8rem;color:${t.text};opacity:.65;">${_}</a>`).join("")}</div>
    <div style="display:flex;align-items:center;gap:1rem;">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="${t.text}" stroke-width="2" opacity=".7"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <button style="background:${t.accent};color:${t.bg};border:none;padding:.55rem 1.2rem;font-family:${r.b};font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;">Suscribirse</button>
    </div>
  </nav>`,f=p?`<section id="listing" style="display:grid;grid-template-columns:2fr 1fr;gap:0;background:${t.surface};border-bottom:1px solid ${t.rule};">
        <div style="position:relative;overflow:hidden;aspect-ratio:16/9;">
          <img src="${Ae(be.article[0],700,400)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
          <div style="position:absolute;inset:0;background:linear-gradient(to top,${t.bg}E8,transparent 50%);"></div>
          <div style="position:absolute;top:1.2rem;left:1.2rem;"><span style="background:${t.accent};color:${t.bg};font-family:${r.b};font-size:.58rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:3px 10px;border-radius:2px;">Portada</span></div>
          <div style="position:absolute;bottom:2rem;left:2rem;right:2rem;">
            <h1 style="font-family:${r.d};font-size:clamp(1.5rem,2.5vw,2.2rem);font-weight:${r.w};line-height:1.2;color:${n.structure.colorMode==="dark"?t.text:"#fff"};margin-bottom:.8rem;">Cómo construir un sistema de contenidos que sobrevive al equipo que lo creó</h1>
            <div style="display:flex;align-items:center;gap:1rem;">
              <img src="${Ae(be.person[0],32,32)}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" alt=""/>
              <span style="font-family:${r.b};font-size:.72rem;color:${n.structure.colorMode==="dark"?t.text+"CC":"#ffffffCC"};">María García · 12 min · Estrategia</span>
            </div>
          </div>
        </div>
        <div style="padding:2rem;background:${t.bg};display:flex;flex-direction:column;gap:1.4rem;border-left:1px solid ${t.rule};">
          ${be.article.slice(1,5).map((_,k)=>`
            <a href="#" style="display:flex;gap:.8rem;align-items:start;padding-bottom:1.2rem;${k<3?`border-bottom:1px solid ${t.rule};`:""}" >
              <img src="${Ae(_,80,80)}" style="width:62px;height:62px;border-radius:6px;object-fit:cover;flex-shrink:0;" alt=""/>
              <div>
                <span style="font-family:${r.b};font-size:.55rem;letter-spacing:.12em;text-transform:uppercase;color:${t.accent};">Diseño</span>
                <p style="font-family:${r.b};font-size:.8rem;font-weight:600;color:${t.text};line-height:1.35;margin-top:.2rem;">La guía definitiva para escalar sin perder la esencia de marca</p>
                <span style="font-family:${r.b};font-size:.62rem;color:${t.muted};margin-top:.3rem;display:block;">5 min · Ana M.</span>
              </div>
            </a>`).join("")}
        </div>
      </section>`:`<section id="listing" style="position:relative;overflow:hidden;min-height:70vh;display:flex;align-items:flex-end;background:${t.bg};">
        <img src="${Ae(be.article[0],1200,700)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" alt=""/>
        <div style="position:absolute;inset:0;background:linear-gradient(to top,${t.bg}F4 30%,${t.bg}90 60%,transparent);"></div>
        <div style="position:relative;z-index:2;padding:5rem 7vw;max-width:780px;">
          <span class="sr" style="display:inline-block;background:${t.accent};color:${t.bg};font-family:${r.b};font-size:.6rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:4px 12px;border-radius:2px;margin-bottom:1.2rem;">Estrategia · Artículo Destacado</span>
          <h1 class="sr" style="font-family:${r.d};font-size:clamp(2rem,5vw,4rem);font-weight:${r.w};line-height:1.08;color:${t.text};margin-bottom:1.2rem;letter-spacing:-.02em;">Cómo construir un sistema de contenidos que sobrevive al equipo que lo creó</h1>
          <p class="sr" style="font-family:${r.b};font-size:.95rem;line-height:1.75;color:${t.text};opacity:${a};max-width:580px;margin-bottom:1.5rem;">El problema no es crear contenido — es crear un sistema que lo produzca de forma consistente, sin depender de una sola persona.</p>
          <div style="display:flex;align-items:center;gap:1.2rem;">
            <img src="${Ae(be.person[0],40,40)}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid ${t.accent};" alt=""/>
            <div>
              <p style="font-family:${r.b};font-size:.78rem;font-weight:600;color:${t.text};">María García</p>
              <p style="font-family:${r.b};font-size:.68rem;color:${t.muted};">12 min · Publicado hace 2 días</p>
            </div>
            <button style="margin-left:auto;background:${t.accent};color:${t.bg};border:none;padding:.65rem 1.6rem;font-family:${r.b};font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;">Leer Artículo →</button>
          </div>
        </div>
      </section>`,g=(_,k,z,$,S)=>`
    <article class="sr" style="background:${t.bg};border:1px solid ${t.rule};border-radius:10px;overflow:hidden;">
      <div style="overflow:hidden;aspect-ratio:16/10;">
        <img src="${Ae(_,400,250)}" style="width:100%;height:100%;object-fit:cover;transition:transform .4s;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'" alt=""/>
      </div>
      <div style="padding:1.3rem;">
        <span style="display:inline-block;font-family:${r.b};font-size:.58rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${t.accent};margin-bottom:.7rem;">${z}</span>
        <h3 style="font-family:${r.d};font-size:1.05rem;font-weight:${r.w};line-height:1.3;color:${t.text};margin-bottom:.6rem;">${k}</h3>
        <p style="font-family:${r.b};font-size:.78rem;line-height:1.65;color:${t.text};opacity:${a};margin-bottom:1rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estrategia aplicada.</p>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:.5rem;">
            <div style="width:24px;height:24px;border-radius:50%;background:${t.accent}30;"></div>
            <span style="font-family:${r.b};font-size:.68rem;color:${t.muted};">${S} · ${$}</span>
          </div>
          <a href="#" style="font-family:${r.b};font-size:.68rem;font-weight:700;color:${t.accent};">Leer →</a>
        </div>
      </div>
    </article>`,h=`<section style="padding:6rem 6vw;background:${t.surface};">
    <div class="sr" style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3rem;">
      <div>
        <p style="font-family:${r.b};font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:${t.accent};margin-bottom:.5rem;">Lo Más Reciente</p>
        <h2 style="font-family:${r.d};font-size:clamp(1.6rem,2.8vw,2.4rem);font-weight:${r.w};color:${t.text};letter-spacing:-.02em;">Últimas Publicaciones</h2>
      </div>
      <div style="display:flex;gap:.6rem;">
        ${["Todo","Estrategia","Diseño","IA & Tech","Marketing"].map(_=>`<button style="background:transparent;border:1px solid ${t.rule};padding:.35rem .9rem;font-family:${r.b};font-size:.68rem;color:${t.muted};border-radius:100px;">${_}</button>`).join("")}
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;">
      ${g(be.article[1],"El diseño como ventaja competitiva en mercados saturados","Diseño","7 min","Ana M.")}
      ${g(be.article[2],"IA generativa en marketing: qué funciona y qué no","IA & Tech","9 min","Pedro R.")}
      ${g(be.article[3],"La trampa del crecimiento rápido: cómo escalar sin perder cultura","Estrategia","11 min","María G.")}
    </div>
  </section>`,y=`<section style="padding:4rem 6vw 6rem;background:${t.bg};">
    <div class="sr" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2.5rem;">
      <h2 style="font-family:${r.d};font-size:1.6rem;font-weight:${r.w};color:${t.text};">También te puede interesar</h2>
      <a style="font-family:${r.b};font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:${t.accent};">Ver todos →</a>
    </div>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:1.4rem;">
      ${g(be.article[4],"Cómo escribir contenido que convierte sin sonar comercial","Marketing","6 min","Luis C.")}
      ${g(be.article[5],"El framework STAR para documentar procesos de empresa","Estrategia","8 min","María G.")}
    </div>
  </section>`,b=`<section style="padding:6rem 7vw;background:${t.surface};text-align:center;border-top:1px solid ${t.rule};">
    <h2 class="sr" style="font-family:${r.d};font-size:clamp(1.5rem,2.5vw,2.2rem);font-weight:${r.w};color:${t.text};margin-bottom:1rem;">Ideas sin ruido. Directo a tu inbox.</h2>
    <p class="sr" style="font-family:${r.b};font-size:.9rem;color:${t.text};opacity:${a};margin-bottom:2rem;">Un artículo semanal. Sin spam. Sin clickbait. Solo ideas que valen tu tiempo.</p>
    <div class="sr" style="display:flex;max-width:440px;margin:0 auto;">
      <input type="email" placeholder="tu@email.com" style="flex:1;padding:.9rem 1.2rem;font-family:${r.b};font-size:.85rem;background:${t.bg};border:1px solid ${t.rule};border-right:none;border-radius:4px 0 0 4px;color:${t.text};outline:none;"/>
      <button style="background:${t.accent};color:${t.bg};border:none;padding:.9rem 1.6rem;font-family:${r.b};font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:0 4px 4px 0;">Suscribirme</button>
    </div>
    <p style="font-family:${r.b};font-size:.65rem;color:${t.muted};margin-top:1rem;opacity:.7;">Sin spam. Cancela cuando quieras.</p>
  </section>`,v=`<footer style="background:${t.surface};border-top:1px solid ${t.rule};padding:2.5rem 6vw;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-family:${r.d};font-size:1rem;font-weight:${r.w};color:${t.text};">THE JOURNAL</span>
    <div style="display:flex;gap:1.8rem;">${["Estrategia","Diseño","Tecnología","Cultura"].map(_=>`<a style="font-family:${r.b};font-size:.75rem;color:${t.muted};">${_}</a>`).join("")}</div>
    <span style="font-family:${r.b};font-size:.7rem;color:${t.muted};">© ${new Date().getFullYear()}</span>
  </footer>`;return fl(n,u+f+h+y+b+v)}function rk(n){const t=n.palette,r=mi(n),a=ja(n),c=n.structure.headerStyle,p=n.structure.cardLayout,u=n.structure.enhancers.includes("sticky-header"),f=n.structure.enhancers.includes("image-carousel"),g=`<nav id="mnav" style="position:${u?"sticky":"relative"};top:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1.2rem 7vw;background:${t.surface};border-bottom:1px solid ${t.rule};transition:backdrop-filter .3s,box-shadow .3s;">
    <div style="font-family:${r.d};font-size:1.2rem;font-weight:${r.w};color:${t.text};">${n.name}</div>
    <div style="display:flex;gap:2rem;">${["Inicio","Servicios","Portfolio","Nosotros","Blog","Contacto"].map(k=>`<a href="#" style="font-family:${r.b};font-size:.82rem;color:${t.text};opacity:.68;">${k}</a>`).join("")}</div>
    <button style="background:${t.accent};color:${t.bg};border:none;padding:.65rem 1.5rem;font-family:${r.b};font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Agendar Llamada</button>
  </nav>`;let h="";c==="hero-cinematic"||c==="hero-fullbleed"?h=`<section style="position:relative;min-height:92vh;overflow:hidden;display:flex;align-items:center;padding:0 7vw;">
      ${f?`<div style="position:absolute;inset:0;">${[0,1,2].map(k=>`<div class="cs" style="position:absolute;inset:0;background:url('${Ae(be.hero[k],1400,900)}') center/cover;opacity:${k===0?1:0};transition:opacity 1.2s ease;"></div>`).join("")}<div style="position:absolute;inset:0;background:linear-gradient(to right,${t.bg}E0,${t.bg}80 60%,transparent);"></div></div>`:`<div class="pbg" style="position:absolute;inset:-20%;z-index:0;background:url('${Ae(be.hero[0],1400,900)}') center/cover;"></div><div style="position:absolute;inset:0;background:linear-gradient(to right,${t.bg}F0,${t.bg}90 55%,${t.bg}30);"></div>`}
      <div style="position:relative;z-index:2;max-width:680px;">
        <p class="sr" style="font-family:${r.b};font-size:.65rem;letter-spacing:.28em;text-transform:uppercase;color:${t.accent};margin-bottom:1.5rem;">Agencia de Diseño & Estrategia</p>
        <h1 class="sr" style="font-family:${r.d};font-size:clamp(2.8rem,6vw,5.8rem);font-weight:${r.w};line-height:1.02;color:${t.text};margin-bottom:1.5rem;letter-spacing:-.025em;">Tu Marca.<br/>Sin Límites.<br/><em style="color:${t.accent};font-style:normal;">En Serio.</em></h1>
        <p class="sr" style="font-family:${r.b};font-size:1.05rem;line-height:1.8;color:${t.text};opacity:${a};max-width:500px;margin-bottom:2.5rem;">Sistemas de identidad visual que trabajan en todos los puntos de contacto. Estrategia que convierte.</p>
        <div class="sr" style="display:flex;gap:1.2rem;flex-wrap:wrap;">
          <button style="background:${t.accent};color:${t.bg};border:none;padding:1rem 2.5rem;font-family:${r.b};font-size:.88rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Ver Portfolio</button>
          <button style="background:transparent;color:${t.text};border:1px solid ${t.text}40;padding:1rem 2rem;font-family:${r.b};font-size:.85rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;">Contactar →</button>
        </div>
      </div>
    </section>`:c==="hero-split"?h=`<section style="display:grid;grid-template-columns:1fr 1fr;min-height:86vh;">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:8vw 5vw 8vw 7vw;background:${t.bg};">
        <p class="sr" style="font-family:${r.b};font-size:.64rem;letter-spacing:.26em;text-transform:uppercase;color:${t.accent};margin-bottom:1.5rem;">Agencia Full-Service</p>
        <h1 class="sr" style="font-family:${r.d};font-size:clamp(2.4rem,4.5vw,4rem);font-weight:${r.w};line-height:1.05;color:${t.text};margin-bottom:1.5rem;letter-spacing:-.02em;">Construido<br/>Para <em style="color:${t.accent};font-style:normal;">Crecer</em></h1>
        <p class="sr" style="font-family:${r.b};font-size:1rem;line-height:1.8;color:${t.text};opacity:${a};margin-bottom:2.5rem;">Sistemas de identidad que trabajan en todos los puntos de contacto. Diseño que convierte.</p>
        <div class="sr" style="display:flex;gap:1rem;">
          <button style="background:${t.accent};color:${t.bg};border:none;padding:1rem 2.2rem;font-family:${r.b};font-size:.86rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Ver Portfolio</button>
          <button style="background:transparent;color:${t.text};border:1px solid ${t.rule};padding:1rem 1.8rem;font-family:${r.b};font-size:.82rem;font-weight:500;letter-spacing:.06em;text-transform:uppercase;border-radius:4px;opacity:.75;">Nosotros</button>
        </div>
      </div>
      <div style="position:relative;overflow:hidden;background:${t.surface};">
        <img src="${Ae(be.scene[1],600,800)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
        <div style="position:absolute;inset:0;background:${t.bg}18;"></div>
      </div>
    </section>`:c==="hero-editorial"?h=`<section style="padding:12vh 7vw 8vh;background:${t.bg};border-bottom:1px solid ${t.rule};">
      <p class="sr" style="font-family:${r.b};font-size:.62rem;letter-spacing:.3em;text-transform:uppercase;color:${t.muted};margin-bottom:3rem;">Vol. 01 — Identidad Visual</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;">
        <h1 class="sr" style="font-family:${r.d};font-size:clamp(3rem,6vw,5.5rem);font-weight:${r.w};line-height:1.0;color:${t.text};letter-spacing:-.03em;">Diseño<br/>que<br/><span style="color:${t.accent};">Habla.</span></h1>
        <div>
          <p class="sr" style="font-family:${r.b};font-size:1.05rem;line-height:1.8;color:${t.text};opacity:${a};margin-bottom:2rem;">Una identidad visual no es un logo. Es el sistema completo que comunica quién eres antes de que digas una palabra.</p>
          <a href="#" style="font-family:${r.b};font-size:.8rem;letter-spacing:.15em;text-transform:uppercase;color:${t.accent};border-bottom:1px solid ${t.accent};padding-bottom:3px;">Leer más →</a>
        </div>
      </div>
      <img src="${Ae(be.scene[2],1200,500)}" class="sr" style="width:100%;height:45vh;object-fit:cover;margin-top:5rem;border-radius:2px;" alt=""/>
    </section>`:h=`<section style="padding:16vh 10vw 10vh;background:${t.bg};text-align:center;">
      <p class="sr" style="font-family:${r.b};font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;color:${t.muted};margin-bottom:2rem;">Soluciones de Marca</p>
      <h1 class="sr" style="font-family:${r.d};font-size:clamp(3.5rem,8vw,7rem);font-weight:${r.w};line-height:0.95;color:${t.text};letter-spacing:-.04em;max-width:900px;margin:0 auto 2.5rem;">Ideas que<br/><span style="color:${t.accent};">Escalan</span></h1>
      <p class="sr" style="font-family:${r.b};font-size:1.1rem;line-height:1.7;color:${t.text};opacity:${a};max-width:500px;margin:0 auto 3rem;">Creamos sistemas visuales que crecen con tu negocio. De startup a categoría.</p>
      <button class="sr" style="background:${t.accent};color:${t.bg};border:none;padding:1rem 2.5rem;font-family:${r.b};font-size:.88rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;">Explorar</button>
    </section>`;const y=`<section style="padding:4rem 7vw;background:${t.surface};display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;border-top:1px solid ${t.rule};border-bottom:1px solid ${t.rule};">
    ${[["120+","Proyectos"],["8","Años"],["98%","Satisfacción"],["40+","Marcas"]].map(([k,z])=>`
      <div class="sr" style="text-align:center;">
        <div style="font-family:${r.d};font-size:3rem;font-weight:${r.w};color:${t.accent};line-height:1;">${k}</div>
        <div style="font-family:${r.b};font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:${t.muted};margin-top:.5rem;">${z}</div>
      </div>`).join("")}
  </section>`;let b="";p==="list-editorial"?b=`<section style="padding:6rem 7vw;background:${t.surface};">
      <div style="display:grid;grid-template-columns:1fr 2fr;gap:5rem;align-items:start;">
        <div><h2 style="font-family:${r.d};font-size:2.5rem;font-weight:${r.w};color:${t.text};letter-spacing:-.02em;position:sticky;top:130px;">Qué<br/>Hacemos</h2></div>
        <div style="display:flex;flex-direction:column;gap:0;">
          ${["Identidad Visual","Diseño Web","Estrategia de Marca","Campañas Digitales"].map((k,z)=>`
            <div class="sr" style="display:flex;gap:2rem;align-items:flex-start;padding:2.5rem 0;border-bottom:1px solid ${t.rule};">
              <span style="font-family:${r.b};font-size:.62rem;color:${t.muted};opacity:.5;padding-top:6px;">0${z+1}</span>
              <div style="flex:1;">
                <h3 style="font-family:${r.d};font-size:1.5rem;font-weight:${r.w};color:${t.text};margin-bottom:.75rem;">${k}</h3>
                <p style="font-family:${r.b};font-size:.9rem;line-height:1.75;color:${t.text};opacity:${a};">Soluciones diseñadas para tu industria. Entregamos resultados medibles con un enfoque sistemático.</p>
              </div>
              <span style="color:${t.accent};font-size:1.2rem;margin-top:4px;">→</span>
            </div>`).join("")}
        </div>
      </div>
    </section>`:p==="grid-masonry"?b=`<section style="padding:7rem 7vw;background:${t.surface};">
      <div class="sr" style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3.5rem;">
        <h2 style="font-family:${r.d};font-size:clamp(1.8rem,3vw,2.6rem);font-weight:${r.w};color:${t.text};letter-spacing:-.02em;">Proyectos<br/>Seleccionados</h2>
        <a href="#" style="font-family:${r.b};font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:${t.accent};">Portfolio completo →</a>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.4rem;">
        <div class="sr" style="border-radius:12px;overflow:hidden;background:${t.bg};border:1px solid ${t.rule};grid-row:span 2;">
          <div style="overflow:hidden;height:400px;"><img src="${Ae(be.scene[0],500,400)}" style="width:100%;height:100%;object-fit:cover;transition:transform .5s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'" alt=""/></div>
          <div style="padding:2rem;">
            <p style="font-family:${r.b};font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:${t.accent};margin-bottom:.5rem;">Identidad · Branding</p>
            <h3 style="font-family:${r.d};font-size:1.4rem;font-weight:${r.w};color:${t.text};margin-bottom:.7rem;">Proyecto Insignia</h3>
            <p style="font-family:${r.b};font-size:.85rem;line-height:1.7;color:${t.text};opacity:${a};">Sistema visual completo. Identidad, web, campañas y todos los puntos de contacto.</p>
          </div>
        </div>
        ${be.scene.slice(1,4).map((k,z)=>`
          <div class="sr" style="border-radius:12px;overflow:hidden;background:${t.bg};border:1px solid ${t.rule};${z===2?"grid-column:span 1;":""}" >
            <div style="overflow:hidden;height:180px;"><img src="${Ae(k,500,180)}" style="width:100%;height:100%;object-fit:cover;transition:transform .5s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'" alt=""/></div>
            <div style="padding:1.4rem;">
              <p style="font-family:${r.b};font-size:.58rem;letter-spacing:.18em;text-transform:uppercase;color:${t.accent};margin-bottom:.4rem;">Proyecto 0${z+2}</p>
              <h3 style="font-family:${r.d};font-size:1.05rem;font-weight:${r.w};color:${t.text};">Identidad Visual 0${z+2}</h3>
            </div>
          </div>`).join("")}
      </div>
    </section>`:p==="scroll-horizontal"?b=`<section style="padding:6rem 0;background:${t.surface};overflow:hidden;">
      <h2 class="sr" style="font-family:${r.d};font-size:2rem;font-weight:${r.w};color:${t.text};margin:0 7vw 3rem;letter-spacing:-.02em;">Proyectos Recientes</h2>
      <div style="display:flex;gap:1.5rem;overflow-x:auto;padding:0 7vw 2rem;scroll-snap-type:x mandatory;cursor:grab;">
        ${be.scene.map((k,z)=>`
          <div class="sr" style="flex:0 0 360px;scroll-snap-align:start;border-radius:10px;overflow:hidden;background:${t.bg};border:1px solid ${t.rule};">
            <img src="${Ae(k,360,220)}" style="width:100%;height:220px;object-fit:cover;" alt=""/>
            <div style="padding:1.5rem;">
              <p style="font-family:${r.b};font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:${t.accent};margin-bottom:.5rem;">Proyecto 0${z+1}</p>
              <h3 style="font-family:${r.d};font-size:1.15rem;font-weight:600;color:${t.text};margin-bottom:.5rem;">Identidad de Marca</h3>
              <p style="font-family:${r.b};font-size:.85rem;line-height:1.6;color:${t.text};opacity:${a};">Sistema visual completo con todos los puntos de contacto.</p>
            </div>
          </div>`).join("")}
      </div>
    </section>`:b=`<section style="padding:6rem 7vw;background:${t.surface};">
      <div class="sr" style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3.5rem;">
        <div>
          <p style="font-family:${r.b};font-size:.64rem;letter-spacing:.22em;text-transform:uppercase;color:${t.accent};margin-bottom:.5rem;">Nuestros Servicios</p>
          <h2 style="font-family:${r.d};font-size:clamp(1.8rem,3vw,2.6rem);font-weight:${r.w};color:${t.text};letter-spacing:-.02em;">Proyectos & Servicios</h2>
        </div>
        <a href="#" style="font-family:${r.b};font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:${t.accent};">Ver todos →</a>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;">
        ${be.scene.slice(0,6).map((k,z)=>`
          <div class="sr" style="border-radius:10px;overflow:hidden;background:${t.bg};border:1px solid ${t.rule};">
            <div style="overflow:hidden;"><img src="${Ae(k,400,280)}" style="width:100%;height:220px;object-fit:cover;transition:transform .5s;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'" alt=""/></div>
            <div style="padding:1.4rem;">
              <p style="font-family:${r.b};font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:${t.accent};margin-bottom:.4rem;">Categoría</p>
              <h3 style="font-family:${r.d};font-size:1.05rem;font-weight:600;color:${t.text};margin-bottom:.5rem;">Identidad 0${z+1}</h3>
              <p style="font-family:${r.b};font-size:.82rem;line-height:1.6;color:${t.text};opacity:${a};">Sistema visual completo con todos los puntos de contacto de marca.</p>
            </div>
          </div>`).join("")}
      </div>
    </section>`;const v=`<section style="padding:8rem 7vw;background:${t.bg};text-align:center;">
    <h2 class="sr" style="font-family:${r.d};font-size:clamp(2rem,4vw,3.5rem);font-weight:${r.w};color:${t.text};margin-bottom:1.5rem;letter-spacing:-.02em;">¿Listo para<br/><span style="color:${t.accent};">empezar</span>?</h2>
    <p class="sr" style="font-family:${r.b};font-size:1rem;line-height:1.7;color:${t.text};opacity:${a};max-width:450px;margin:0 auto 2.5rem;">Hablemos de tu proyecto. Sin compromisos — solo una conversación estratégica.</p>
    <button class="sr" style="background:${t.accent};color:${t.bg};border:none;padding:1rem 2.5rem;font-family:${r.b};font-size:.88rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;">Agendar Llamada</button>
  </section>`,_=`<footer style="background:${t.surface};border-top:1px solid ${t.rule};padding:4rem 7vw;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;">
      <div style="font-family:${r.d};font-size:1.4rem;font-weight:${r.w};color:${t.text};">${n.name}</div>
      <div style="display:flex;gap:2rem;">${["Inicio","Proyectos","Servicios","Contacto"].map(k=>`<a href="#" style="font-family:${r.b};font-size:.8rem;color:${t.muted};">${k}</a>`).join("")}</div>
    </div>
    <div style="border-top:1px solid ${t.rule};padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-family:${r.b};font-size:.7rem;color:${t.muted};">© ${new Date().getFullYear()} ${n.name} — Studio · Miami, FL</span>
      <span style="font-family:${r.b};font-size:.7rem;color:${t.muted};">Diseñado con WEBLAB · UNRLVL Studio</span>
    </div>
  </footer>`;return fl(n,g+h+y+b+v+_)}const Ag=[{id:"ecommerce",label:"E-Commerce",icon:qg,accent:"#22C55E"},{id:"landing",label:"Landing",icon:Ig,accent:"#8B5CF6"},{id:"web",label:"Web",icon:ii,accent:"#3B82F6"},{id:"blog",label:"Blog",icon:Ux,accent:"#F59E0B"}];function ik({theme:n}){const t=C.useRef(null),r=C.useRef(null),[a,c]=C.useState(!1),[p,u]=C.useState(.25),f=n.palette;C.useEffect(()=>{if(!t.current)return;const h=new ResizeObserver(([y])=>{u(y.contentRect.width/800)});return h.observe(t.current),()=>h.disconnect()},[]),C.useEffect(()=>{const h=new IntersectionObserver(([y])=>{var b,v,_;if(y.isIntersecting&&!a){const k=((b=r.current)==null?void 0:b.contentDocument)||((_=(v=r.current)==null?void 0:v.contentWindow)==null?void 0:_.document);k&&(k.open(),k.write(Y_(n)),k.close(),c(!0)),h.disconnect()}},{threshold:.01});return t.current&&h.observe(t.current),()=>h.disconnect()},[n.id]);const g=Math.round(580*p);return s.jsxs("div",{ref:t,style:{width:"100%",height:`${g}px`,overflow:"hidden",position:"relative",background:f.bg},children:[s.jsx("iframe",{ref:r,title:`card-${n.id}`,style:{width:"800px",height:"580px",transform:`scale(${p})`,transformOrigin:"top left",border:"none",pointerEvents:"none",display:"block"},sandbox:"allow-scripts allow-same-origin"}),!a&&s.jsxs("div",{className:"absolute inset-0 animate-pulse",style:{background:`linear-gradient(135deg, ${f.surface}, ${f.bg})`},children:[s.jsx("div",{className:"absolute top-0 left-0 right-0",style:{height:"20px",background:f.surface,borderBottom:`1px solid ${f.rule}`}}),s.jsx("div",{className:"absolute rounded",style:{top:"34px",left:"16px",width:"60%",height:"10px",background:f.text,opacity:.15}}),s.jsx("div",{className:"absolute rounded",style:{top:"52px",left:"16px",width:"40%",height:"8px",background:f.accent,opacity:.2}}),s.jsx("div",{className:"absolute rounded",style:{top:"70px",left:"16px",width:"80px",height:"22px",background:f.accent,opacity:.25}})]})]})}function ak({theme:n,isSelected:t,aggroMode:r,onSelect:a,onHover:c,onOpenPreview:p}){const u=n.palette,f=n.mood.slice(0,2).map(g=>g.toUpperCase());return s.jsxs(qe.div,{layout:!0,initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.25},onMouseEnter:c,className:J("group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-200 border",t?"ring-2 scale-[1.01]":"hover:scale-[1.005] hover:shadow-2xl"),style:{borderColor:t?u.accent:`${u.accent}30`,boxShadow:t?`0 0 0 2px ${u.accent}, 0 8px 32px ${u.accent}30`:void 0,background:u.bg},children:[s.jsxs("div",{className:"relative overflow-hidden",style:{borderBottom:`1px solid ${u.rule}`},children:[s.jsx(ik,{theme:n}),s.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200",style:{background:`${u.bg}CC`},children:s.jsxs("div",{className:"absolute inset-0 flex items-center justify-center gap-3",children:[s.jsxs("button",{onClick:g=>{g.stopPropagation(),p()},className:"flex flex-col items-center gap-1.5 hover:scale-110 transition-transform",title:"Ver preview completo",children:[s.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center",style:{background:u.bg,border:`2px solid ${u.accent}`},children:s.jsx(Bg,{size:14,style:{color:u.accent}})}),s.jsx("span",{className:"text-[9px] font-bold uppercase tracking-wider",style:{color:u.accent},children:"Preview"})]}),s.jsxs("button",{onClick:g=>{g.stopPropagation(),a()},className:"flex flex-col items-center gap-1.5 hover:scale-110 transition-transform",title:"Seleccionar theme",children:[s.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center",style:{background:u.accent},children:t?s.jsx(Lt,{size:14,style:{color:u.bg}}):s.jsx(Ca,{size:14,style:{color:u.bg}})}),s.jsx("span",{className:"text-[9px] font-bold uppercase tracking-wider",style:{color:u.accent},children:t?"Activo":"Elegir"})]})]})}),t&&s.jsxs("div",{className:"absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider",style:{background:u.accent,color:u.bg},children:[s.jsx(Lt,{size:8})," EN USO"]}),n.aggro.unlocked&&s.jsxs("div",{className:"absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-bold",style:{background:r?"#FF4400":"#FF440020",color:r?"#FFFFFF":"#FF4400",border:"1px solid #FF4400"},children:[s.jsx(gn,{size:7,className:r?"fill-white":""}),"AGGRO"]})]}),s.jsxs("div",{className:"p-3",style:{background:u.surface},children:[s.jsx("h3",{className:"text-xs font-bold uppercase tracking-widest leading-tight truncate",style:{color:u.text},children:n.name}),s.jsx("p",{className:"text-[9px] leading-tight mt-0.5 opacity-60 line-clamp-1",style:{color:u.text},children:n.tagline}),s.jsxs("div",{className:"flex items-center gap-1 mt-1.5 flex-wrap",children:[s.jsx("span",{className:"text-[8px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider",style:{background:`${u.accent}20`,color:u.accent},children:n.structure.headerStyle.replace("hero-","")}),s.jsx("span",{className:"text-[8px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider",style:{background:`${u.text}10`,color:u.muted},children:n.structure.colorMode})]}),s.jsx("div",{className:"flex gap-1 mt-2",children:n.previewColors.map((g,h)=>s.jsx("div",{className:"flex-1 h-1.5 rounded-full",style:{background:g}},h))}),s.jsx("div",{className:"flex gap-1 mt-1.5 flex-wrap",children:f.map(g=>s.jsx("span",{className:"text-[8px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider",style:{background:`${u.accent}15`,color:u.accent},children:g},g))})]})]})}function sk({theme:n,aggroMode:t,onSelect:r,onOpenPreview:a,isSelected:c}){const p=n.palette,u=C.useRef(null);C.useEffect(()=>{var k;const v=u.current;if(!v)return;const _=v.contentDocument||((k=v.contentWindow)==null?void 0:k.document);_&&(_.open(),_.write(F0(n)),_.close())},[n.id]);const f=260,g=1200,h=1100,y=f/g,b=Math.round(h*y);return s.jsxs("div",{className:"flex flex-col h-full rounded-2xl overflow-hidden",style:{background:p.bg,border:`1px solid ${p.accent}30`},children:[s.jsxs("div",{style:{width:"100%",height:`${b}px`,overflow:"hidden",position:"relative",flexShrink:0},children:[s.jsxs("div",{className:"absolute top-0 left-0 right-0 z-10 flex items-center px-2 gap-1.5",style:{height:"20px",background:"#1A1A24",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:[["#FF5F57","#FFBD2E","#28C840"].map((v,_)=>s.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:v,opacity:.8}},_)),s.jsx("div",{style:{flex:1,height:"10px",background:"rgba(255,255,255,0.06)",borderRadius:"4px",margin:"0 8px"}})]}),s.jsx("div",{style:{marginTop:"20px",overflow:"hidden",height:`${b-20}px`},children:s.jsx("iframe",{ref:u,title:`panel-${n.id}`,style:{width:`${g}px`,height:`${h}px`,transform:`scale(${y})`,transformOrigin:"top left",border:"none",pointerEvents:"none",display:"block"},sandbox:"allow-scripts allow-same-origin"})}),s.jsxs("button",{onClick:a,className:"absolute top-3 right-2 z-20 flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all hover:opacity-90",style:{background:`${p.bg}EE`,color:p.accent,border:`1px solid ${p.accent}50`},children:[s.jsx(Bg,{size:8})," Full"]})]}),s.jsxs("div",{className:"flex-1 overflow-y-auto p-4",style:{background:p.surface},children:[s.jsxs("div",{className:"flex items-start justify-between mb-2",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-lg font-bold uppercase tracking-widest",style:{color:p.text},children:n.name}),s.jsx("p",{className:"text-xs opacity-60 mt-0.5 leading-snug",style:{color:p.text},children:n.tagline})]}),n.aggro.unlocked&&s.jsxs("div",{className:"shrink-0 flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-bold",style:{background:t?"#FF4400":"#FF440015",color:t?"#fff":"#FF4400",border:"1px solid #FF440040"},children:[s.jsx(gn,{size:8,className:t?"fill-white":""}),t?"AGGRO ON":"AGGRO"]})]}),s.jsxs("div",{className:"mb-3 p-2.5 rounded-lg",style:{background:`${p.accent}08`,border:`1px solid ${p.accent}20`},children:[s.jsx("p",{className:"text-[9px] uppercase font-bold tracking-widest mb-2 opacity-40",style:{color:p.text},children:"Estructura"}),s.jsx("div",{className:"flex flex-wrap gap-1",children:[n.structure.headerStyle,n.structure.cardLayout,n.structure.colorMode].map(v=>s.jsx("span",{className:"text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider",style:{background:`${p.accent}20`,color:p.accent},children:v},v))}),s.jsx("div",{className:"flex flex-wrap gap-1 mt-1.5",children:n.structure.enhancers.map(v=>s.jsx("span",{className:"text-[7px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider",style:{background:`${p.accent}10`,color:p.accent,opacity:.7},children:v},v))})]}),s.jsxs("div",{className:"mb-3",children:[s.jsx("p",{className:"text-[9px] uppercase font-bold tracking-widest mb-1.5 opacity-40",style:{color:p.text},children:"Paleta"}),s.jsx("div",{className:"flex gap-1.5",children:Object.entries(p).filter(([v])=>["bg","surface","text","accent","accent2"].includes(v)).map(([v,_])=>s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx("div",{className:"w-7 h-7 rounded-md",style:{background:_,border:`1px solid ${p.rule}`}}),s.jsx("span",{className:"text-[7px] opacity-40 font-mono",style:{color:p.text},children:v})]},v))})]}),s.jsxs("div",{className:"mb-3",children:[s.jsx("p",{className:"text-[9px] uppercase font-bold tracking-widest mb-1 opacity-40",style:{color:p.text},children:"Tipografía"}),s.jsxs("div",{className:"flex items-baseline gap-2",children:[s.jsx("span",{className:"text-sm font-bold",style:{color:p.accent},children:n.typography.display}),s.jsxs("span",{className:"text-[10px] opacity-40",style:{color:p.text},children:["+ ",n.typography.body]})]})]}),s.jsxs("div",{className:"mb-3",children:[s.jsx("p",{className:"text-[9px] uppercase font-bold tracking-widest mb-1 opacity-40",style:{color:p.text},children:"Motion"}),s.jsxs("p",{className:"text-[10px] leading-snug opacity-60",style:{color:p.text},children:[n.motion.slice(0,110),"..."]})]}),t&&n.aggro.unlocked&&s.jsxs("div",{className:"mb-3 p-2 rounded-lg",style:{background:"#FF440010",border:"1px solid #FF440030"},children:[s.jsx("p",{className:"text-[9px] uppercase font-bold tracking-widest mb-1",style:{color:"#FF4400"},children:"⚡ Modo AGGRO"}),s.jsx("p",{className:"text-[10px] leading-snug",style:{color:"#FF8866"},children:n.aggro.description})]}),s.jsx("div",{className:"p-2.5 rounded-lg",style:{background:`${p.accent}10`,border:`1px solid ${p.accent}20`},children:s.jsxs("p",{className:"text-[9px] italic leading-snug",style:{color:p.accent},children:['"',n.designerNote,'"']})})]}),s.jsxs("div",{className:"p-3 flex gap-2",style:{background:p.surface,borderTop:`1px solid ${p.rule}`},children:[s.jsxs("button",{onClick:a,className:"flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90 flex items-center justify-center gap-1.5",style:{background:`${p.accent}15`,color:p.accent,border:`1px solid ${p.accent}30`},children:[s.jsx(al,{size:12})," Preview"]}),s.jsx("button",{onClick:r,className:"flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-1.5",style:{background:c?p.muted:p.accent,color:p.bg},children:c?s.jsxs(s.Fragment,{children:[s.jsx(Lt,{size:12})," Activo"]}):s.jsxs(s.Fragment,{children:["Usar ",s.jsx(Ca,{size:12})]})})]})]})}function lk({theme:n,isSelected:t,onSelect:r,onClose:a}){const c=C.useRef(null),p=C.useRef(null),[u,f]=C.useState("desktop"),g=n.palette;return C.useEffect(()=>{const h=F0(n);[c,p].forEach(y=>{var v,_,k;const b=((v=y.current)==null?void 0:v.contentDocument)||((k=(_=y.current)==null?void 0:_.contentWindow)==null?void 0:k.document);b&&(b.open(),b.write(h),b.close())})},[n.id]),C.useEffect(()=>{const h=y=>{y.key==="Escape"&&a()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[a]),s.jsxs(qe.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.97},transition:{duration:.22},className:"fixed inset-0 z-[200] flex flex-col",style:{background:"#050508"},children:[s.jsxs("div",{className:"shrink-0 flex items-center justify-between px-5 py-3 border-b",style:{borderColor:"rgba(255,255,255,0.08)",background:"#0A0A10"},children:[s.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[s.jsxs("button",{onClick:a,className:"shrink-0 flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors text-sm",children:[s.jsx(Fg,{size:15}),s.jsx("span",{className:"font-medium",children:"Volver"})]}),s.jsx("div",{className:"w-px h-4 bg-zinc-800 shrink-0"}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("span",{className:"text-zinc-300 text-sm font-bold uppercase tracking-widest mr-2",children:n.name}),s.jsx("span",{className:"text-zinc-600 text-xs hidden lg:inline truncate",children:n.tagline})]})]}),s.jsx("div",{className:"shrink-0 flex items-center gap-1 p-1 rounded-xl",style:{background:"#111118",border:"1px solid rgba(255,255,255,0.08)"},children:[{id:"desktop",label:"Desktop",icon:Ug},{id:"mobile",label:"Mobile",icon:Gg}].map(h=>s.jsxs("button",{onClick:()=>f(h.id),className:"flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all",style:{background:u===h.id?`${g.accent}22`:"transparent",color:u===h.id?g.accent:"#4A4A5A",border:`1px solid ${u===h.id?g.accent+"40":"transparent"}`},children:[s.jsx(h.icon,{size:12}),h.label]},h.id))}),s.jsxs("div",{className:"shrink-0 flex items-center gap-3",children:[s.jsx("div",{className:"hidden md:flex items-center gap-1.5",children:n.structure.enhancers.slice(0,3).map(h=>s.jsx("span",{className:"text-[9px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider",style:{background:`${g.accent}15`,color:g.accent},children:h.replace("-"," ")},h))}),s.jsx("div",{className:"w-px h-4 bg-zinc-800 hidden md:block"}),s.jsx("button",{onClick:()=>{r(),a()},className:"flex items-center gap-2 px-5 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-all hover:opacity-90",style:{background:t?"#444":g.accent,color:g.bg},children:t?s.jsxs(s.Fragment,{children:[s.jsx(Lt,{size:14})," Activo"]}):s.jsxs(s.Fragment,{children:["Usar Theme ",s.jsx(Ca,{size:14})]})}),s.jsx("button",{onClick:a,className:"p-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/60 transition-colors",children:s.jsx(uo,{size:18})})]})]}),s.jsxs("div",{className:"flex-1 relative overflow-hidden",style:{background:u==="desktop"?"#000":"#111118"},children:[s.jsx("div",{className:J("absolute inset-0 transition-opacity duration-300",u==="desktop"?"opacity-100 z-10":"opacity-0 z-0 pointer-events-none"),children:s.jsx("iframe",{ref:c,title:`full-desktop-${n.id}`,className:"w-full h-full border-0",sandbox:"allow-scripts allow-same-origin"})}),s.jsx("div",{className:J("absolute inset-0 flex items-center justify-center transition-opacity duration-300",u==="mobile"?"opacity-100 z-10":"opacity-0 z-0 pointer-events-none"),children:s.jsx("div",{className:"relative flex items-center justify-center h-full py-8",children:s.jsxs("div",{style:{position:"relative",width:"414px",height:"min(840px, calc(100vh - 140px))",background:"#1C1C1E",borderRadius:"52px",padding:"14px",boxShadow:`
                0 80px 160px rgba(0,0,0,0.85),
                0 0 0 2px #3A3A3C,
                inset 0 1px 0 rgba(255,255,255,0.07)
              `},children:[s.jsx("div",{style:{position:"absolute",left:"-3px",top:"88px",width:"3px",height:"36px",background:"#3A3A3C",borderRadius:"2px 0 0 2px"}}),s.jsx("div",{style:{position:"absolute",left:"-3px",top:"142px",width:"3px",height:"64px",background:"#3A3A3C",borderRadius:"2px 0 0 2px"}}),s.jsx("div",{style:{position:"absolute",left:"-3px",top:"218px",width:"3px",height:"64px",background:"#3A3A3C",borderRadius:"2px 0 0 2px"}}),s.jsx("div",{style:{position:"absolute",right:"-3px",top:"148px",width:"3px",height:"76px",background:"#3A3A3C",borderRadius:"0 2px 2px 0"}}),s.jsxs("div",{style:{width:"100%",height:"100%",borderRadius:"40px",overflow:"hidden",background:g.bg,position:"relative"},children:[s.jsx("div",{style:{position:"absolute",top:"11px",left:"50%",transform:"translateX(-50%)",width:"122px",height:"35px",background:"#0A0A0C",borderRadius:"20px",zIndex:30,boxShadow:"0 0 0 1px rgba(255,255,255,0.08)"}}),s.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,height:"56px",background:`${g.bg}F0`,backdropFilter:"blur(12px)",zIndex:20,display:"flex",alignItems:"flex-end",justifyContent:"space-between",padding:"0 26px 8px"},children:[s.jsx("span",{style:{fontFamily:"system-ui",fontSize:"12px",fontWeight:700,color:g.text,letterSpacing:"-0.01em"},children:"9:41"}),s.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[s.jsxs("svg",{width:"17",height:"12",viewBox:"0 0 17 12",fill:g.text,opacity:".9",children:[s.jsx("rect",{x:"0",y:"8",width:"3",height:"4",rx:"0.5"}),s.jsx("rect",{x:"4.5",y:"5.5",width:"3",height:"6.5",rx:"0.5"}),s.jsx("rect",{x:"9",y:"3",width:"3",height:"9",rx:"0.5"}),s.jsx("rect",{x:"13.5",y:"0",width:"3",height:"12",rx:"0.5"})]}),s.jsxs("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:g.text,opacity:".9",children:[s.jsx("path",{d:"M7.5 3.5C9.8 3.5 11.9 4.6 13.3 6.3L14.4 5C12.6 2.8 10.2 1.5 7.5 1.5S2.4 2.8 0.6 5L1.7 6.3C3.1 4.6 5.2 3.5 7.5 3.5z"}),s.jsx("path",{d:"M7.5 6.5C9 6.5 10.3 7.2 11.2 8.3L12.3 7C11 5.5 9.3 4.5 7.5 4.5S4 5.5 2.7 7L3.8 8.3C4.7 7.2 6 6.5 7.5 6.5z"}),s.jsx("circle",{cx:"7.5",cy:"10.5",r:"1.5"})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2px"},children:[s.jsx("div",{style:{width:"25px",height:"12px",border:`1.5px solid ${g.text}`,borderRadius:"3px",opacity:.9,position:"relative",padding:"2px"},children:s.jsx("div",{style:{width:"75%",height:"100%",background:g.text,borderRadius:"1px"}})}),s.jsx("div",{style:{width:"2px",height:"5px",background:g.text,borderRadius:"0 1px 1px 0",opacity:.6}})]})]})]}),s.jsx("div",{style:{position:"absolute",inset:0,paddingTop:"56px",paddingBottom:"36px",overflow:"hidden"},children:s.jsx("iframe",{ref:p,title:`full-mobile-${n.id}`,style:{width:"390px",height:"100%",border:"none",display:"block"},sandbox:"allow-scripts allow-same-origin"})}),s.jsx("div",{style:{position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",width:"132px",height:"5px",background:`${g.text}25`,borderRadius:"3px",zIndex:20}})]})]})})})]}),s.jsxs("div",{className:"shrink-0 flex items-center gap-6 px-5 py-2 border-t",style:{borderColor:"rgba(255,255,255,0.05)",background:"#08080E"},children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-3 h-3 rounded-sm",style:{background:g.accent}}),s.jsx("span",{className:"text-[10px] text-zinc-500 font-mono",children:g.accent})]}),s.jsx("span",{className:"text-zinc-700",children:"·"}),s.jsxs("span",{className:"text-[10px] text-zinc-600 uppercase tracking-widest",children:[n.typography.display," + ",n.typography.body]}),s.jsx("span",{className:"text-zinc-700",children:"·"}),s.jsxs("span",{className:"text-[10px] text-zinc-600 uppercase tracking-widest",children:[n.structure.colorMode," · ",n.structure.headerStyle]}),s.jsx("div",{className:"ml-auto text-[10px] text-zinc-700 uppercase tracking-widest",children:"ESC para cerrar"})]})]})}function ck({currentThemeId:n,aggroMode:t,onSelect:r,onClose:a}){const[c,p]=C.useState("ecommerce"),[u,f]=C.useState(null),[g,h]=C.useState(null),[y,b]=C.useState(null),v=H_(c),_=g??u??v[0];C.useEffect(()=>{const z=$=>{$.key==="Escape"&&!y&&a()};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[a,y]);const k=C.useCallback(z=>{r(z),a()},[r,a]);return s.jsxs(s.Fragment,{children:[s.jsxs(qe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex flex-col",style:{background:"#0A0A0F"},children:[s.jsxs("div",{className:"shrink-0 flex items-center justify-between px-6 py-4 border-b",style:{borderColor:"rgba(255,255,255,0.08)"},children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("button",{onClick:a,className:"flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors text-sm",children:[s.jsx(Fg,{size:16}),s.jsx("span",{className:"font-medium",children:"Volver al Generator"})]}),s.jsx("div",{className:"w-px h-5 bg-zinc-800"}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-white font-black text-lg uppercase tracking-widest leading-none",children:"THEME PICKER"}),s.jsx("p",{className:"text-zinc-600 text-[10px] uppercase tracking-widest mt-0.5",children:"40 identidades · Previews en tiempo real · Desktop + Mobile"})]})]}),s.jsx("div",{className:"flex items-center gap-2",children:Ag.map(z=>s.jsxs("button",{onClick:()=>{p(z.id),f(null),h(null)},className:"flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all",style:{background:c===z.id?`${z.accent}20`:"transparent",color:c===z.id?z.accent:"#4a4a5a",border:`1px solid ${c===z.id?z.accent+"40":"transparent"}`},children:[s.jsx(z.icon,{size:13}),z.label]},z.id))}),s.jsx("button",{onClick:a,className:"p-2 rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/50 transition-colors",children:s.jsx(uo,{size:18})})]}),s.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[s.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[s.jsx("div",{className:"flex items-center gap-3 mb-5",children:(()=>{const z=Ag.find($=>$.id===c);return s.jsxs(s.Fragment,{children:[s.jsx(z.icon,{size:18,style:{color:z.accent}}),s.jsxs("span",{className:"text-sm font-bold uppercase tracking-widest",style:{color:z.accent},children:[z.label," Themes"]}),s.jsxs("span",{className:"text-zinc-600 text-xs",children:["— ",v.length," identidades · hover para preview · ",s.jsx("span",{style:{color:z.accent},children:"⊞ Maximize"})," para Desktop/Mobile"]}),n&&v.some($=>$.id===n)&&s.jsxs("div",{className:"ml-auto flex items-center gap-1 text-[10px] text-zinc-500",children:[s.jsx(Lt,{size:10,className:"text-emerald-400"}),"Theme activo en esta categoría"]})]})})()}),s.jsx(Vt,{mode:"wait",children:s.jsx(qe.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},className:"grid gap-3",style:{gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))"},children:v.map(z=>s.jsx(ak,{theme:z,isSelected:n===z.id,aggroMode:t,onSelect:()=>k(z.id),onHover:()=>f(z),onOpenPreview:()=>b(z)},z.id))},c)})]}),s.jsx("div",{className:"w-72 shrink-0 p-4 border-l overflow-y-auto",style:{borderColor:"rgba(255,255,255,0.06)",background:"#080810"},children:s.jsx(Vt,{mode:"wait",children:_&&s.jsx(qe.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0},transition:{duration:.15},className:"h-full",children:s.jsx(sk,{theme:_,aggroMode:t,isSelected:n===_.id,onSelect:()=>k(_.id),onOpenPreview:()=>b(_)})},_.id)})})]}),s.jsxs("div",{className:"shrink-0 flex items-center justify-between px-6 py-2 border-t",style:{borderColor:"rgba(255,255,255,0.05)",background:"#050508"},children:[s.jsxs("div",{className:"flex items-center gap-3 text-[10px] uppercase tracking-widest",children:[s.jsx("span",{style:{color:"#22C55E50"},children:"10 E-Commerce"}),s.jsx("span",{className:"text-zinc-800",children:"·"}),s.jsx("span",{style:{color:"#8B5CF650"},children:"10 Landing"}),s.jsx("span",{className:"text-zinc-800",children:"·"}),s.jsx("span",{style:{color:"#3B82F650"},children:"10 Web"}),s.jsx("span",{className:"text-zinc-800",children:"·"}),s.jsx("span",{style:{color:"#F59E0B50"},children:"10 Blog"})]}),s.jsxs("div",{className:"flex items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-widest",children:[s.jsx("span",{className:"text-orange-600/60",children:"⚡ AGGRO disponible"}),s.jsx("span",{children:"·"}),s.jsx("span",{children:"Preview real · Desktop + Mobile"})]}),s.jsx("div",{className:"text-[10px] text-zinc-700 uppercase tracking-widest",children:"WEBLAB v3.0 · UNRLVL STUDIO"})]})]}),s.jsx(Vt,{children:y&&s.jsx(lk,{theme:y,isSelected:n===y.id,onSelect:()=>k(y.id),onClose:()=>b(null)})})]})}const dk=[{id:"grow-list",label:"Crecer Lista",tagline:"Construye tu audiencia de cero",rationale:"El form captura. La prueba social reduce fricción. El magnet filtra al curioso del prospecto real.",funnel:"TOFU",funnelLabel:"TOFU — Captación",icon:Ix,color:"#3B82F6",tactics:[{id:"newsletter-form",label:"Newsletter Form",description:"Formulario above fold con CTA de suscripción"},{id:"lead-magnet-gate",label:"Lead Magnet Gate",description:"Contenido premium desbloqueado por email"},{id:"social-proof-feed",label:"Social Proof Feed",description:"Prueba social continua para reducir fricción"}],contexts:["ecommerce","landing","blog"],params:[{id:"cta_text",label:"Texto del CTA",placeholder:"Quiero recibir ofertas exclusivas",type:"text",required:!0},{id:"magnet_url",label:"URL del Lead Magnet",placeholder:"https://...",type:"url",required:!1,hint:"¿No tienes un Lead Magnet? Genera uno en CopyLab → Blog Article"},{id:"social_proof",label:"Prueba social",placeholder:"+2,400 profesionales ya suscritos",type:"text",required:!1}]},{id:"convert-now",label:"Convertir Ahora",tagline:"Urgencia real, decisión inmediata",rationale:"Countdown real crea escasez. FOMO badge visibiliza el riesgo de esperar. Sticky CTA elimina el scroll como excusa.",funnel:"BOFU",funnelLabel:"BOFU — Conversión",icon:Gd,color:"#EF4444",tactics:[{id:"urgency-bar",label:"Urgency Bar",description:"Barra superior con countdown o mensaje de escasez"},{id:"fomo-badge",label:"FOMO Badge",description:"Badge visible de stock bajo o tiempo limitado"},{id:"sticky-cta",label:"Sticky CTA",description:"CTA fijo en scroll que no desaparece"},{id:"promo-banner",label:"Promo Banner",description:"Banner de oferta por tiempo limitado"}],contexts:["ecommerce","landing","blog"],blogTypes:["producto","ugc"],params:[{id:"offer_text",label:"Texto de la oferta",placeholder:"20% OFF · Solo por hoy",type:"text",required:!0},{id:"deadline",label:"Fecha límite",placeholder:"",type:"date",required:!1,hint:"Si no hay fecha, se usará urgencia de stock"},{id:"cta_text",label:"Texto del CTA",placeholder:"Obtener descuento ahora",type:"text",required:!0}]},{id:"recover-traffic",label:"Recuperar Tráfico",tagline:"Captura antes de que se vaya",rationale:"Exit intent intercepta la última oportunidad. El email hook segmenta por comportamiento. El pixel retargeting activa la segunda oportunidad en paid.",funnel:"MOFU",funnelLabel:"MOFU — Nurturing",icon:nf,color:"#F59E0B",tactics:[{id:"exit-intent",label:"Exit Intent Popup",description:"Captura al visitante antes de salir"},{id:"email-hook",label:"Email Sequence Hook",description:"Segmenta por comportamiento para nurturing"},{id:"retargeting-helper",label:"Retargeting Pixel Helper",description:"Instrucciones y código de seguimiento"}],contexts:["ecommerce","landing","blog"],blogTypes:["producto","ugc"],params:[{id:"exit_headline",label:"Headline del popup",placeholder:"Espera — antes de irte...",type:"text",required:!0},{id:"exit_offer",label:"Oferta de retención",placeholder:"10% OFF si te quedas",type:"text",required:!1},{id:"email_sequence",label:"Nombre de la secuencia",placeholder:"Bienvenida + nurturing 3 emails",type:"text",required:!1,hint:"Genera la secuencia en CopyLab → Email Campaign"}]},{id:"launch-product",label:"Lanzar Producto",tagline:"Crea anticipación, lanza con lista calificada",rationale:"Countdown pre-launch genera expectativa. La waitlist filtra interesados reales. La prueba social desde día 1 activa el efecto manada.",funnel:"TOFU",funnelLabel:"TOFU — Lanzamiento",icon:nf,color:"#8B5CF6",tactics:[{id:"countdown-prelaunch",label:"Countdown Pre-Launch",description:"Timer de cuenta regresiva al lanzamiento"},{id:"waitlist-form",label:"Waitlist Form",description:"Lista de espera con confirmación automática"},{id:"social-proof-feed",label:"Social Proof Feed",description:"Prueba social desde día 1"}],contexts:["ecommerce","landing"],params:[{id:"launch_date",label:"Fecha de lanzamiento",placeholder:"",type:"date",required:!0},{id:"product_name",label:"Nombre del producto",placeholder:"Nuevo serum hidratante",type:"text",required:!0},{id:"waitlist_cta",label:"CTA de la waitlist",placeholder:"Quiero acceso anticipado",type:"text",required:!0}]},{id:"tofu-authority",label:"Autoridad TOFU",tagline:"Contenido de valor, contacto cualificado",rationale:"El content upgrade da algo a cambio. El newsletter conecta en el tiempo. El quiz segmenta por intención antes de que el usuario lo sepa.",funnel:"TOFU",funnelLabel:"TOFU — Educativo",icon:Dg,color:"#10B981",tactics:[{id:"content-upgrade-gate",label:"Content Upgrade Gate",description:"Recurso premium desbloqueado por email"},{id:"newsletter-form",label:"Newsletter Form",description:"Captura para newsletter de autoridad"},{id:"quiz-survey",label:"Quiz / Survey",description:"Segmenta por respuesta antes del CTA"}],contexts:["ecommerce","landing","blog"],params:[{id:"upgrade_label",label:"Nombre del recurso",placeholder:"Guía completa de hidratación capilar",type:"text",required:!0},{id:"upgrade_url",label:"URL del recurso",placeholder:"https://...",type:"url",required:!1,hint:"¿No tienes el recurso? Genera uno en CopyLab → Blog Article"},{id:"quiz_topic",label:"Tema del quiz (opcional)",placeholder:"¿Cuál es tu tipo de cabello?",type:"text",required:!1}]}],uk={TOFU:"#3B82F6",MOFU:"#F59E0B",BOFU:"#EF4444"};function D0({stage:n,label:t}){const r=uk[n];return s.jsx("span",{className:"inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full font-mono font-bold uppercase tracking-wider",style:{background:r+"18",color:r,border:`1px solid ${r}30`},children:t})}function pk({tactic:n,active:t}){return s.jsxs("div",{className:J("text-[10px] px-2 py-1 rounded-md border transition-colors",t?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-zinc-800/50 border-zinc-700 text-zinc-500"),children:[t&&s.jsx("span",{className:"mr-1",children:"✓"}),n.label]})}function mk({text:n}){return s.jsxs("div",{className:"flex items-start gap-2 mt-1.5 px-2.5 py-2 bg-blue-500/8 border border-blue-500/20 rounded-lg",children:[s.jsx(Ys,{size:10,className:"text-blue-400 mt-0.5 shrink-0"}),s.jsx("p",{className:"text-[10px] text-blue-300/80 leading-relaxed",children:n})]})}function fk({param:n,value:t,onChange:r}){const a="w-full bg-[#0d0d14] border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-blue-500/50 placeholder:text-zinc-600 transition-colors";return s.jsxs("div",{className:"space-y-1",children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx("label",{className:"text-[10px] text-zinc-500 uppercase font-bold tracking-wider",children:n.label}),n.required&&s.jsx("span",{className:"text-[9px] text-red-400",children:"*"})]}),n.type==="textarea"?s.jsx("textarea",{value:t,onChange:c=>r(c.target.value),placeholder:n.placeholder,rows:3,className:J(a,"resize-none")}):s.jsx("input",{type:n.type==="date"?"date":n.type==="url"?"url":"text",value:t,onChange:c=>r(c.target.value),placeholder:n.placeholder,className:a}),n.hint&&s.jsx(mk,{text:n.hint})]})}function gk({preset:n,selected:t,onSelect:r}){const a=n.icon;return s.jsx("button",{onClick:r,className:J("w-full text-left p-3 rounded-xl border transition-all",t?"border-opacity-50 bg-opacity-10":"border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-900"),style:t?{borderColor:n.color+"60",background:n.color+"0d"}:{},children:s.jsxs("div",{className:"flex items-start gap-2.5",children:[s.jsx("div",{className:"w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5",style:{background:n.color+"20"},children:s.jsx(a,{size:13,style:{color:n.color}})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[s.jsx("span",{className:"text-sm font-bold text-zinc-200",children:n.label}),s.jsx(D0,{stage:n.funnel,label:n.funnelLabel})]}),s.jsx("p",{className:"text-[11px] text-zinc-500 mt-0.5 leading-relaxed",children:n.tagline})]}),t&&s.jsx(Lt,{size:13,style:{color:n.color},className:"shrink-0 mt-1"})]})})}function Ng({context:n,blogPostType:t,brandId:r,pulse:a=!1,baseHtml:c,onGenerate:p}){const[u,f]=C.useState(!1),[g,h]=C.useState(null),[y,b]=C.useState({}),[v,_]=C.useState(!1),[k,z]=C.useState(null),[$,S]=C.useState(""),[T,M]=C.useState(!1),D=dk.filter(G=>G.contexts.includes(n)?n==="blog"&&t&&G.blogTypes?G.blogTypes.includes(t):!0:!1),F=D.find(G=>G.id===g)??null;function X(G){h(G),b({}),z(null),S("")}function W(G,ue){b(je=>({...je,[G]:ue}))}function Y(G,ue){const je=G.tactics.map(N=>`- ${N.label}: ${N.description}`).join(`
`),Re=G.params.filter(N=>ue[N.id]).map(N=>`- ${N.label}: ${ue[N.id]}`).join(`
`),ge=!!(c&&c.trim().length>200),le=ge?c.slice(0,9e3)+(c.length>9e3?`
[continúa...]`:""):"",B=ge?"Toma el HTML base y devuelve la versión MEJORADA con las tácticas de Sales Layer integradas quirúrgicamente en los puntos óptimos de la página.":"Genera un bloque HTML de Sales Layer completo listo para insertar.",ee=ge?`<!-- Enhanced by Sales Layer: ${G.label} -->`:`<!-- Sales Layer: ${G.label} -->`,Q=ge?`
HTML BASE (integra las tácticas EN este HTML):
- Inyecta form/gate/CTA después del hero o antes del CTA final
- Respeta paleta y tipografía existente
- Devuelve el HTML COMPLETO mejorado

${le}`:"";return`Eres un experto en conversión web y copywriting de alto rendimiento.

TAREA: ${B}

OBJETIVO ESTRATÉGICO: ${G.label} — ${G.tagline}
ETAPA DEL FUNNEL: ${G.funnelLabel}
ESTRATEGIA: ${G.rationale}

TÁCTICAS:
${je}

PARÁMETROS:
${Re||"(usar placeholders profesionales)"}

CONTEXTO: ${n==="blog"?"Blog post":n==="ecommerce"?"Tienda E-Commerce":"Landing Page"}
MARCA ID: ${r}
${Q}

INSTRUCCIONES:
1. ${ge?"HTML COMPLETO de la página con tácticas integradas":"Bloque HTML standalone completo"}
2. Dark theme (#0E1018) — respeta paleta existente si hay base
3. JavaScript vanilla si necesario — sin dependencias externas
4. Responsive mobile-first — mínimo 100 líneas con contenido real
5. NUNCA divs vacíos — todo el contenido visible y funcional
6. Sin explicaciones — solo el HTML
7. CRÍTICO si tienes HTML base: NO repitas header, nav, ni footer del HTML base — solo integra las tácticas en el body
8. Headlines sin punto final — el punto debilita el impacto

OUTPUT: ${ee}`}async function ve(){if(!F)return;const G=F.params.filter(ue=>{var je;return ue.required&&!((je=y[ue.id])!=null&&je.trim())});if(G.length>0){S(`Campos requeridos: ${G.map(ue=>ue.label).join(", ")}`);return}_(!0),S(""),z(null);try{const ue=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:Y(F,y),max_tokens:4e3,temperature:.7})});if(!ue.ok){const B=await ue.json().catch(()=>({}));throw new Error(`Error ${ue.status}: ${(B==null?void 0:B.error)??ue.statusText}`)}const le=((await ue.json()).text??"").trim().split(`
`).filter(B=>!B.startsWith("```")).join(`
`).trim();if(!le)throw new Error("Sin output del modelo");z(le),p(F,y,le)}catch(ue){S(ue.message??"Error generando Sales Layer")}finally{_(!1)}}function fe(){k&&(navigator.clipboard.writeText(k),M(!0),setTimeout(()=>M(!1),2e3))}function De(){if(!k)return;const G=new Blob([k],{type:"text/html"}),ue=document.createElement("a");ue.href=URL.createObjectURL(G),ue.download=`sales-layer_${F==null?void 0:F.id}_${r}_${Date.now()}.html`,ue.click()}return D.length===0?null:s.jsxs(qe.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},className:"mt-4",children:[s.jsxs(qe.button,{onClick:()=>{f(G=>!G)},animate:a&&!u?{boxShadow:["0 0 0px #22c55e00","0 0 12px #22c55e60","0 0 0px #22c55e00"]}:{},transition:{duration:1.6,repeat:1/0,ease:"easeInOut"},className:J("w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all",u?"bg-violet-500/10 border-violet-500/30 text-violet-300":a?"bg-emerald-500/10 border-emerald-500/40 text-emerald-300":"bg-zinc-900 border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-300"),children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("div",{className:J("w-6 h-6 rounded-lg flex items-center justify-center transition-colors",u?"bg-violet-500/20":a?"bg-emerald-500/20":"bg-zinc-800"),children:s.jsx(gn,{size:12,className:u?"text-violet-400":a?"text-emerald-400":"text-zinc-500"})}),s.jsxs("div",{className:"text-left",children:[s.jsx("span",{className:"text-sm font-bold",children:"Sales Layer"}),a&&!u?s.jsx("span",{className:"text-[10px] ml-2 text-emerald-400/80 font-medium animate-pulse",children:"¡Potencia este output!"}):s.jsxs("span",{className:"text-[10px] ml-2 opacity-60",children:[D.length," presets disponibles"]})]}),F&&!u&&s.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full font-mono",style:{background:F.color+"20",color:F.color},children:F.label})]}),u?s.jsx(qd,{size:14}):s.jsx(Sa,{size:14})]}),s.jsx(Vt,{children:u&&s.jsx(qe.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},className:"overflow-hidden",children:s.jsxs("div",{className:"mt-2 space-y-3 px-0.5",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest px-1",children:"Objetivo estratégico"}),s.jsx("div",{className:"space-y-1.5",children:D.map(G=>s.jsx(gk,{preset:G,selected:g===G.id,onSelect:()=>X(G.id)},G.id))})]}),s.jsx(Vt,{children:F&&s.jsxs(qe.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},className:"space-y-3",children:[s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Bundle táctico"}),s.jsxs("p",{className:"text-[11px] text-zinc-400 italic leading-relaxed",children:['"',F.rationale,'"']}),s.jsx("div",{className:"flex flex-wrap gap-1.5 pt-1",children:F.tactics.map(G=>s.jsx(pk,{tactic:G,active:!0},G.id))})]}),F.params.length>0&&s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-3",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Parámetros de campaña"}),F.params.map(G=>s.jsx(fk,{param:G,value:y[G.id]??"",onChange:ue=>W(G.id,ue)},G.id))]}),$&&s.jsxs("div",{className:"flex items-center gap-2 px-3 py-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-400",children:[s.jsx(In,{size:13}),$]}),!k&&s.jsx("button",{onClick:ve,disabled:v,className:J("w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all",v?"opacity-50 cursor-not-allowed bg-zinc-800 text-zinc-500":"text-white hover:opacity-90"),style:v?{}:{background:F.color},children:v?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"w-3.5 h-3.5 border-2 border-zinc-500 border-t-transparent rounded-full animate-spin"}),"Generando Sales Layer..."]}):s.jsxs(s.Fragment,{children:[s.jsx(gn,{size:13}),"Generar Sales Layer — ",F.label]})}),k&&s.jsxs(qe.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},className:"space-y-2",children:[s.jsxs(qe.div,{initial:{opacity:0,scale:.97},animate:{opacity:1,scale:1},transition:{duration:.35,ease:"easeOut"},className:"relative overflow-hidden rounded-t-xl border-b-0",style:{background:"linear-gradient(135deg, #052e16 0%, #14532d 50%, #052e16 100%)",border:"1px solid #16a34a60"},children:[s.jsx(qe.div,{initial:{x:"-100%"},animate:{x:"200%"},transition:{duration:.8,delay:.1,ease:"easeOut"},style:{position:"absolute",top:0,left:0,width:"50%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",pointerEvents:"none"}}),s.jsxs("div",{className:"flex items-center justify-between px-3 py-2.5",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(qe.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:300,damping:15,delay:.15},children:s.jsx(Lt,{size:15,className:"text-emerald-400",strokeWidth:3})}),s.jsx("span",{className:"text-sm font-bold text-emerald-300",children:"✦ Sales Layer listo"}),s.jsxs("span",{className:"text-xs text-emerald-400/70 font-medium",children:["· ",F.label]}),s.jsx(D0,{stage:F.funnel,label:F.funnelLabel})]}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("button",{onClick:fe,className:"p-1.5 rounded-md hover:bg-zinc-700 text-zinc-500 hover:text-zinc-300 transition-colors",title:"Copiar HTML",children:T?s.jsx(Lt,{size:12,className:"text-emerald-400"}):s.jsx(Mg,{size:12})}),s.jsx("button",{onClick:De,className:"p-1.5 rounded-md hover:bg-zinc-700 text-zinc-500 hover:text-zinc-300 transition-colors",title:"Descargar .html",children:s.jsx(ua,{size:12})}),s.jsx("button",{onClick:()=>{z(null),h(null)},className:"p-1.5 rounded-md hover:bg-zinc-700 text-zinc-500 hover:text-zinc-300 transition-colors",title:"Limpiar",children:s.jsx(uo,{size:12})})]})]})]}),s.jsx("div",{className:"border border-zinc-800 rounded-b-xl overflow-hidden",children:s.jsx("iframe",{srcDoc:`<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;padding:0;background:#0E1018}</style></head><body>${k}</body></html>`,style:{width:"100%",height:"480px",border:"none",display:"block"},sandbox:"allow-scripts allow-same-origin",title:"Sales Layer Preview"})}),s.jsx("button",{onClick:ve,disabled:v,className:"w-full py-2 rounded-xl text-xs text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800/60 transition-all",children:"Regenerar con los mismos parámetros"})]})]},F.id)})]})})})]})}const jg=[{id:"web",label:"Web Generator",icon:ii,color:"#3B82F6",description:"Sitios corporativos y marcas personales en WordPress"},{id:"landing",label:"Landing Generator",icon:Ig,color:"#8B5CF6",description:"Landings de conversión — leads, ventas, agendamiento"},{id:"ecommerce",label:"E-Commerce Generator",icon:qg,color:"#22C55E",description:"Contenido para tiendas Shopify — listings, colecciones, home"}],$g=[{id:"ES",label:"Español neutro"},{id:"ES-FL",label:"Español Miami / FL"},{id:"EN",label:"English"},{id:"ES+EN",label:"ES + EN (ambas)"}],hk=[{id:"professional",label:"Profesional",emoji:"👔"},{id:"conversational",label:"Cercano",emoji:"💬"},{id:"luxury",label:"Luxury",emoji:"✨"},{id:"energetic",label:"Energético",emoji:"⚡"},{id:"technical",label:"Técnico",emoji:"🔬"},{id:"warm",label:"Cálido",emoji:"🤍"}],Bd=[{id:"html",label:"HTML",icon:Tx,color:"#F97316",description:"HTML entregable — landings, product pages, previews"},{id:"liquid",label:"Liquid",icon:Rx,color:"#06B6D4",description:"Sección nativa Shopify"}],_d=[{id:"educativo",label:"Educativo",emoji:"📚",description:"Guías y tutoriales de autoridad"},{id:"seo",label:"SEO",emoji:"🔍",description:"Optimizado para búsqueda orgánica"},{id:"producto",label:"Producto",emoji:"🛍️",description:"Content marketing de producto"},{id:"ugc",label:"UGC / Story",emoji:"👤",description:"Estilo testimonial auténtico"}];function M0({text:n}){const[t,r]=C.useState(!1);return s.jsx("button",{onClick:()=>{navigator.clipboard.writeText(n),r(!0),setTimeout(()=>r(!1),2e3)},className:"p-1.5 rounded-md hover:bg-white/10 text-zinc-500 hover:text-zinc-300 transition-colors",children:t?s.jsx(Lt,{size:13,className:"text-emerald-400"}):s.jsx(Mg,{size:13})})}function xa({mode:n}){const t=Bd.find(r=>r.id===n);return t?s.jsxs("span",{className:"inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded font-mono font-bold",style:{background:t.color+"20",color:t.color},children:[s.jsx(t.icon,{size:9}),t.label]}):null}function yk({section:n,live:t,aggro:r,outputMode:a}){const[c,p]=C.useState(!0),[u,f]=C.useState(!1),g=a??"html";return s.jsxs("div",{className:J("bg-zinc-900 border rounded-xl overflow-hidden transition-colors",r?"border-orange-500/30":t?"border-accent/30":"border-zinc-800"),children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 cursor-pointer hover:bg-zinc-800/50 transition-colors",onClick:()=>p(h=>!h),children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-[10px] font-mono text-zinc-600 uppercase",children:n.sectionId}),s.jsx("span",{className:"text-sm font-bold text-zinc-300",children:n.label}),s.jsx(xa,{mode:g}),t&&s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-accent animate-pulse"}),r&&!t&&s.jsx("span",{className:"text-[9px] font-mono text-orange-400/70 uppercase tracking-widest",children:"aggro"})]}),s.jsxs("div",{className:"flex items-center gap-1",onClick:h=>h.stopPropagation(),children:[g==="html"&&s.jsx("button",{onClick:()=>f(h=>!h),className:J("p-1.5 rounded-md text-zinc-500 transition-colors text-[10px] px-2",u?"bg-orange-500/20 text-orange-400":"hover:bg-white/10 hover:text-zinc-300"),children:u?"Código":"Preview"}),g==="liquid"&&s.jsx("button",{onClick:()=>f(h=>!h),className:J("p-1.5 rounded-md text-zinc-500 transition-colors text-[10px] px-2",u?"bg-cyan-500/20 text-cyan-400":"hover:bg-white/10 hover:text-zinc-300"),children:u?"Liquid":"Preview"}),s.jsx(M0,{text:n.content}),s.jsx(Ca,{size:14,className:J("text-zinc-600 transition-transform",c&&"rotate-90")})]})]}),s.jsx(Vt,{initial:!1,children:c&&s.jsx(qe.div,{initial:{height:0},animate:{height:"auto"},exit:{height:0},className:"overflow-hidden",children:s.jsx("div",{className:"px-4 pb-4 pt-1 border-t border-zinc-800",children:g==="html"&&u?s.jsx("div",{className:"rounded-lg overflow-auto bg-white p-2",style:{maxHeight:"400px"},dangerouslySetInnerHTML:{__html:Eu(n.content)}}):g==="liquid"&&u?s.jsx("div",{className:"rounded-lg overflow-auto bg-white p-2",style:{maxHeight:"400px"},dangerouslySetInnerHTML:{__html:n.content.replace(/{%-?\s*schema\s*-?%}[\s\S]*?{%-?\s*endschema\s*-?%}/gi,"").replace(/{%-?\s*style\s*-?%}([\s\S]*?){%-?\s*endstyle\s*-?%}/gi,"<style>$1</style>").replace(/{%-?.*?-?%}/g,"").replace(/\{\{-?\s*(section\.settings\.\w+)\s*-?\}\}/g,(y,b)=>{const v=b.replace("section.settings.","");return{heading:"[Título]",subheading:"[Subtítulo]",body_text:"[Cuerpo de texto]",cta_label:"Solicitar información",cta_url:"#",background_color:"#ffffff",text_color:"#1a1a1a",eyebrow:"[Eyebrow]",heading2:"[Título 2]"}[v]??`[${v}]`}).replace(/\{\{.*?\}\}/g,"[…]")}}):s.jsx("pre",{className:J("text-sm whitespace-pre-wrap leading-relaxed overflow-auto","text-zinc-400 font-mono"),style:{maxHeight:"400px"},children:n.content})})})})]})}function xk({output:n,onLoad:t,onDelete:r}){const a=Ew(n.brandId),c=ya[n.packId];return s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex items-center gap-3 hover:border-zinc-700 transition-colors group",children:[s.jsx("div",{className:"w-1 self-stretch rounded-full",style:{backgroundColor:(a==null?void 0:a.color)||"#666"}}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsxs("p",{className:"text-xs font-bold text-zinc-300 truncate",children:[a==null?void 0:a.name," — ",c==null?void 0:c.label]}),n.superAggro&&s.jsx("span",{className:"text-[9px] font-bold text-orange-400 bg-orange-500/10 px-1 rounded",children:"AGGRO"}),n.outputMode&&s.jsx(xa,{mode:n.outputMode})]}),s.jsxs("p",{className:"text-[10px] text-zinc-600",children:[n.wordCount," palabras · ",new Date(n.generatedAt).toLocaleDateString("es-ES")," · ",n.language," · ",n.platform]})]}),s.jsxs("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:[s.jsx("button",{onClick:()=>t(n),className:"p-1.5 rounded-md hover:bg-zinc-700 text-zinc-500 hover:text-zinc-300 transition-colors",title:"Cargar",children:s.jsx(Dg,{size:13})}),s.jsx("button",{onClick:()=>r(n.id),className:"p-1.5 rounded-md hover:bg-red-500/20 text-zinc-500 hover:text-red-400 transition-colors",title:"Eliminar",children:s.jsx(Hg,{size:13})})]})]})}const bk=`
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; overflow-x: hidden; width: 100%; }
  a { color: inherit; }
  .rg-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 40px 56px; }
  .rg-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
  .rg-auto { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px,100%), 1fr)); }
  .rg-contact { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
  .rg-contact-aggro { display: grid; grid-template-columns: 1fr 1.6fr; gap: 64px; align-items: start; }
  @media (max-width: 860px) {
    .rg-2, .rg-3, .rg-auto, .rg-contact, .rg-contact-aggro {
      grid-template-columns: 1fr !important; gap: 24px !important;
    }
  }
  a[class*="cta"], button[class*="cta"], .cta-button { display: inline-block; }
`,vk=`<footer style="background:#0E1018;text-align:center;font-family:'DM Sans','Inter',system-ui,sans-serif;font-size:11px;letter-spacing:0.04em;color:#6B6460;padding:18px 24px 20px;margin-top:0;line-height:1.6;border-top:1px solid #1e1e2a;">Designed &amp; Developed by <a href="#" style="color:#C4622D;font-weight:600;text-decoration:none;">Unreal&gt;ille Studio</a><br><span style="font-size:10px;color:#6B6460;">1303 N 46th Ave, Hollywood, FL 33021</span></footer>`;function wk({sections:n,onClose:t}){const[r,a]=C.useState("desktop"),c=C.useMemo(()=>{const p=n.map(u=>u.content).join(`

`);return`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preview — WebLab</title>
  <style>${bk}</style>
</head>
<body>
${p}
${vk}
</body>
</html>`},[n]);return s.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col",style:{background:"rgba(0,0,0,0.93)"},children:[s.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-zinc-800 bg-zinc-950 shrink-0",children:[s.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[s.jsx("span",{className:"text-[11px] font-bold text-zinc-500 uppercase tracking-widest",children:"Preview"}),s.jsx("span",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-400",children:"HTML"})]}),s.jsx("div",{className:"flex items-center gap-0.5 bg-zinc-900 border border-zinc-700 rounded-lg p-0.5",children:["desktop","mobile"].map(p=>s.jsxs("button",{onClick:()=>a(p),className:J("flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all",r===p?"bg-zinc-700 text-white":"text-zinc-500 hover:text-zinc-300"),children:[p==="desktop"?s.jsx(Ug,{size:12}):s.jsx(Gg,{size:12}),p==="desktop"?"Desktop":"Mobile"]},p))}),s.jsx("button",{onClick:t,className:"flex items-center justify-center w-7 h-7 rounded-full bg-zinc-800 hover:bg-red-500/20 hover:text-red-400 text-zinc-400 transition-colors",title:"Cerrar preview",children:s.jsx(uo,{size:14})})]}),s.jsx("div",{className:"flex-1 overflow-hidden flex items-stretch justify-center",style:{background:r==="mobile"?"#18181b":"#fff"},children:s.jsx("div",{className:"transition-all duration-300 shadow-2xl overflow-hidden bg-white",style:{width:r==="mobile"?"390px":"100%",maxWidth:r==="desktop"?"1440px":"390px",borderRadius:r==="mobile"?"16px":"0",margin:r==="mobile"?"16px auto":"0",flex:r==="desktop"?"1":void 0},children:s.jsx("iframe",{srcDoc:c,title:"WebLab Preview",style:{width:"100%",height:"100%",border:"none",display:"block"},sandbox:"allow-same-origin allow-scripts"},r)})})]})}function _k({value:n,onChange:t,wordpressOnly:r}){return r?s.jsx("div",{className:"flex rounded-lg overflow-hidden border border-zinc-700 opacity-75",children:s.jsx("div",{className:"flex-1 py-1.5 text-xs font-bold text-center bg-blue-500/20 text-blue-400",children:"⚙️ WordPress"})}):s.jsx("div",{className:"flex rounded-lg overflow-hidden border border-zinc-700",children:["wordpress","shopify"].map(a=>s.jsx("button",{onClick:()=>t(a),className:J("flex-1 py-1.5 text-xs font-bold transition-colors",n===a?a==="shopify"?"bg-emerald-500/20 text-emerald-400":"bg-blue-500/20 text-blue-400":"text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800"),children:a==="wordpress"?"⚙️ WordPress":"🛍️ Shopify"},a))})}function kk(){var Cr,bo,Da,Er,Oe,ki,Si,zr;const{outputs:n,addOutput:t,removeOutput:r}=Mw(),a=il(),[c,p]=C.useState(!1),[u,f]=C.useState(null);C.useEffect(()=>{a.token&&!a.connected&&fetch("/api/shopify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:a.shop,token:a.token,endpoint:"/admin/api/2024-01/shop.json"})}).then(E=>E.ok?E.json():null).then(E=>{E!=null&&E.shop&&a.setConnected(!0)}).catch(()=>{})},[a.token]);const{getSlotContext:g,slots:h}=Au(),[y,b]=C.useState("generator"),[v,_]=C.useState("web"),[k,z]=C.useState(Mn[0].id),[$,S]=C.useState(Vs.web[0].id),[T,M]=C.useState("ES-FL"),[D,F]=C.useState("professional"),[X,W]=C.useState("wordpress"),[Y,ve]=C.useState("html"),[fe,De]=C.useState(!1),[G,ue]=C.useState(null),[je,Re]=C.useState(!1),[ge,le]=C.useState(!1),[B,ee]=C.useState(!1),[Q,N]=C.useState(""),[I,ye]=C.useState(!1),[U,ae]=C.useState(""),[pe,Ne]=C.useState(""),[_e,Pe]=C.useState(""),[Me,Ze]=C.useState(""),[en,xt]=C.useState(""),[tn,Go]=C.useState({}),[hn,yn]=C.useState(""),[mo,fo]=C.useState({usePersonBP:!0,useLocationBP:!0}),[qt,nn]=C.useState(!1),[qn,ft]=C.useState(!1),[Pn,Tn]=C.useState(null),[xn,at]=C.useState(!1),[Gn,Gt]=C.useState(!1),[bn,R]=C.useState(!1),[ie,xe]=C.useState(null),[ke,Ie]=C.useState(""),[bt,Fe]=C.useState([]),[Ge,He]=C.useState(""),[ne,st]=C.useState(null),[$t,Ho]=C.useState(""),[fi,$a]=C.useState(!1),[Hn,Pa]=C.useState(Mn[0].id),[go,Ta]=C.useState(""),[Wn,gi]=C.useState(""),[vn,gl]=C.useState("educativo"),[Kn,yr]=C.useState("ES-FL"),[ho,hi]=C.useState(800),[on,hl]=C.useState("html"),[Oa,On]=C.useState(""),[La,yi]=C.useState(!1),[Yn,Ra]=C.useState(!1),[yo,Fa]=C.useState(""),[xo,xi]=C.useState(!1),[wn,Xe]=C.useState(null),[bi,xr]=C.useState(""),Qn=C.useRef(null),et=C.useMemo(()=>Mn.find(E=>E.id===k)??Mn[0],[k]),vi=C.useMemo(()=>Mn.find(E=>E.id===Hn)??Mn[0],[Hn]),ze=C.useMemo(()=>ya[$],[$]),br=C.useMemo(()=>ze?Fw(ze.sections):0,[ze]),rn=C.useMemo(()=>Vs[v],[v]);C.useEffect(()=>{const E=oi[k];E?(ae(E.extraContext),E.productAudience&&Ze(E.productAudience),E.productCompliance&&xt(E.productCompliance),W(E.defaultPlatform),ye(!0)):ye(!1),Ne(""),Pe("")},[k]),C.useEffect(()=>{const E=oi[Hn];E?(On(E.extraContext),yi(!0)):yi(!1)},[Hn]);async function wi(){var E,Ce,$e,Ue,Pt;if(!(!ne||!a.connected||c)){p(!0),f(null);try{const Be=ne.outputMode??Y,kt=a.cdnImageMap,Rt=pr(k),_n={};Rt.flatMap(lt=>lt.products).forEach(lt=>{lt.image_filename&&(_n[lt.display_name]=`${Ks}/assets/images/products/${lt.image_filename}`)}),Object.assign(_n,kt);const an=yd(ea(ne.sections,Be,ne.superAggro??!1),_n),Wt=Pn&&xn?an+`

<!-- ═══ SALES LAYER ═══ -->
`+Pn+`
<!-- ═══ /SALES LAYER ═══ -->`:an,wl=tn!=null&&tn.collectionId?((E=pr(k).find(lt=>lt.id===tn.collectionId))==null?void 0:E.label)??(ze==null?void 0:ze.label):ze==null?void 0:ze.label,Ko=(ze==null?void 0:ze.id)==="ecom_collection"?`Línea ${wl??"Colección"}`:(ze==null?void 0:ze.id)==="ecom_homepage"?`${(et==null?void 0:et.name)??"Neurone"} — Tienda`:`${(et==null?void 0:et.name)??"Neurone"} — ${(ze==null?void 0:ze.label)??"Página"}`,vo=(Ce=(await(await fetch("/api/shopify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:a.shop,token:a.token,endpoint:`/admin/api/2024-01/pages.json?title=${encodeURIComponent(Ko)}&fields=id,title`,method:"GET"})})).json()).pages)==null?void 0:Ce[0];let wo,St;if(vo!=null&&vo.id){const lt=await fetch("/api/shopify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:a.shop,token:a.token,endpoint:`/admin/api/2024-01/pages/${vo.id}.json`,method:"PUT",body:{page:{id:vo.id,title:Ko,body_html:Wt,published:!0}}})});if(St=await lt.json(),!lt.ok)throw new Error(St!=null&&St.errors?JSON.stringify(St.errors):`HTTP ${lt.status}`);wo=($e=St.page)==null?void 0:$e.id}else{const lt=await fetch("/api/shopify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:a.shop,token:a.token,endpoint:"/admin/api/2024-01/pages.json",method:"POST",body:{page:{title:Ko,body_html:Wt,published:!0}}})});if(St=await lt.json(),!lt.ok)throw new Error(St!=null&&St.errors?JSON.stringify(St.errors):`HTTP ${lt.status}`);wo=(Ue=St.page)==null?void 0:Ue.id}const _l=a.shop.replace(".myshopify.com","");f({url:`https://admin.shopify.com/store/${_l}/pages/${wo}`,title:((Pt=St.page)==null?void 0:Pt.title)??Ko})}catch(Be){alert(`Error push Shopify: ${Be.message}`)}finally{p(!1)}}}const Ht=E=>{_(E),S(Vs[E][0].id),Fe([]),st(null),Ho(""),ft(!1),Tn(null),at(!1),E==="web"&&W("wordpress"),E==="web"&&ve("html")},yl=()=>{const E=oi[k];E&&(ae(E.extraContext),E.productAudience&&Ze(E.productAudience),E.productCompliance&&xt(E.productCompliance),W(E.defaultPlatform),ye(!0))},xl=async()=>{if(!et||!ze)return;nn(!0),Fe([]),st(null),Ho(""),Qn.current=new AbortController;const E=pe||_e?{name:pe,category:et.description,keyBenefits:_e,targetAudience:Me,complianceNotes:en}:void 0;let $e=g()||"";mo.usePersonBP||($e=$e.replace(/BP_PERSON[^─]*──[^─]*/g,"")),mo.useLocationBP||($e=$e.replace(/BP_LOCATION[^─]*──[^─]*/g,""));const Ue=v==="ecommerce"||v==="landing"?G_(tn,k):"",Pt=G?`

`+W_(ra(G),fe):"",Be=U+Ue+Pt+($e||"");try{const kt=await Lw({brand:et,pack:ze,language:T,tone:D,platform:X,productSpec:E,extraContext:Be,dbPrompt:B&&Q.trim()?Q:void 0,superAggro:fe,outputMode:Y,signal:Qn.current.signal,onSectionComplete:(Rt,_n)=>{const an=ol[Rt];Fe(Wt=>[...Wt,{sectionId:Rt,label:(an==null?void 0:an.label)??Rt,content:_n}]),He("")}});st(kt),t(kt),(v==="ecommerce"||v==="landing")&&ft(!0)}catch(kt){kt.name!=="AbortError"&&Ho(kt.message??"Error desconocido")}finally{nn(!1),He("")}},bl=()=>{var E;(E=Qn.current)==null||E.abort(),nn(!1)},vr=()=>{const E=oi[Mn[0].id];z(Mn[0].id),S(Vs[v][0].id),M("ES-FL"),F("professional"),W((E==null?void 0:E.defaultPlatform)??"wordpress"),ve("html"),De(!1),ee(!1),N(""),ae((E==null?void 0:E.extraContext)??""),Ne(""),Pe(""),Ze((E==null?void 0:E.productAudience)??""),xt((E==null?void 0:E.productCompliance)??""),Go({}),fo({usePersonBP:!0,useLocationBP:!0}),ye(!!E),st(null),Ho(""),Fe([])},wr=()=>{if(!ne)return;const E=ne.outputMode??Y,Ce=lr(E),$e=hd(E),Ue=ea(ne.sections,E,ne.superAggro??!1),Pt=new Blob([Ue],{type:$e}),Be=document.createElement("a");Be.href=URL.createObjectURL(Pt),Be.download=`weblab_${et.id}_${ze.id}_${ne.superAggro?"AGGRO_":""}${Date.now()}.${Ce}`,Be.click()},Wo=async()=>{if(!(!ne||!hn.trim())){R(!0),Ie(""),xe(null);try{const E=ne.outputMode??Y,Ce=pr(k),$e={...a.cdnImageMap};Ce.flatMap(Be=>Be.products).forEach(Be=>{Be.image_filename&&!$e[Be.display_name]&&($e[Be.display_name]=`${Ks}/assets/images/products/${Be.image_filename}`)});const Ue=yd(ea(ne.sections,E,ne.superAggro??!1),$e),Pt=await Cw({token:hn,brandId:et.id,brandName:et.name,packId:ze.id,packLabel:ze.label,module:v,outputMode:E,themeId:G,aggro:!!ne.superAggro,language:ne.language,platform:ne.platform,content:Ue,sections:ne.sections.length});xe(Pt)}catch(E){Ie(E.message??"Error al guardar borrador")}finally{R(!1)}}},_r=async()=>{if(!go.trim())return;xi(!0),Xe(null),xr(""),Gt(!1),Qn.current=new AbortController;const E={postType:vn,topic:go,keywords:Wn?Wn.split(",").map(Ce=>Ce.trim()).filter(Boolean):[],wordCount:ho};try{const Ce=await Rw({brand:vi,blog:E,language:Kn,platform:"wordpress",outputMode:on,extraContext:Yn&&yo.trim()?yo:Oa||void 0,signal:Qn.current.signal});Xe(Ce.content),Gt(!0)}catch(Ce){Ce.name!=="AbortError"&&xr(Ce.message??"Error desconocido")}finally{xi(!1)}},vl=()=>{if(!wn)return;const E=lr(on),Ce=hd(on),$e=new Blob([wn],{type:Ce}),Ue=document.createElement("a");Ue.href=URL.createObjectURL($e),Ue.download=`bloglab_${vi.id}_${Date.now()}.${E}`,Ue.click()},kr=ne?ne.sections:bt,_i=new Set(bt.map(E=>E.sectionId)),Sr=(ne==null?void 0:ne.outputMode)??Y;return s.jsxs("div",{className:"space-y-4",children:[s.jsx(Vt,{children:je&&s.jsx(ck,{currentThemeId:G,aggroMode:fe,onSelect:E=>ue(E),onClose:()=>Re(!1)})}),ge&&ne&&s.jsx(wk,{sections:ne.sections,onClose:()=>le(!1)}),s.jsxs("div",{className:"flex gap-1 bg-zinc-900 border border-zinc-800 rounded-xl p-1 w-fit",children:[s.jsxs("button",{onClick:()=>b("generator"),className:J("flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",y==="generator"?"bg-zinc-700 text-white":"text-zinc-500 hover:text-zinc-300"),children:[s.jsx(ii,{size:14}),"Web Generator"]}),s.jsxs("button",{onClick:()=>b("blog"),className:J("flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",y==="blog"?"bg-zinc-700 text-white":"text-zinc-500 hover:text-zinc-300"),children:[s.jsx(nd,{size:14}),"BlogLab"]})]}),y==="generator"&&s.jsxs("div",{className:"flex gap-6",children:[s.jsxs("aside",{className:"w-72 shrink-0 space-y-4",children:[s.jsx("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1.5",children:jg.map(E=>s.jsxs("button",{onClick:()=>Ht(E.id),className:J("w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-left",v===E.id?"bg-zinc-800 text-white":"text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"),children:[s.jsx(E.icon,{size:15,style:{color:v===E.id?E.color:void 0}}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("p",{className:"font-bold text-xs",children:E.label}),s.jsx("p",{className:"text-[10px] text-zinc-600 truncate",children:E.description})]})]},E.id))}),s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Marca"}),I&&s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("span",{className:"text-[9px] text-accent/70 font-mono",children:"DB"}),s.jsx("button",{onClick:yl,title:"Recargar datos DB_VARIABLES",className:"p-0.5 rounded hover:bg-zinc-700 text-zinc-600 hover:text-accent transition-colors",children:s.jsx(ao,{size:10})})]})]}),s.jsx("select",{value:k,onChange:E=>z(E.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-accent/50 transition-colors",children:Mn.map(E=>s.jsxs("option",{value:E.id,children:[E.emoji," ",E.name]},E.id))}),s.jsxs("div",{className:"flex items-center gap-2 px-1",children:[s.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:et.color}}),s.jsxs("span",{className:"text-[10px] text-zinc-600",children:[et.market," · ",(Cr=et.channels)==null?void 0:Cr.join(", ")]})]}),zw(k)&&s.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/25 w-fit",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-400"}),s.jsx("span",{className:"text-[9px] font-semibold text-blue-400 tracking-wide uppercase",children:"Brand context — injected by default"})]})]}),s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Output Mode"}),s.jsx("div",{className:"space-y-1",children:Bd.filter(E=>v==="web"?E.id==="html":!0).map(E=>s.jsxs("button",{onClick:()=>ve(E.id),className:J("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-all text-left",Y===E.id?"bg-zinc-700 text-white":"text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"),children:[s.jsx(E.icon,{size:13,style:{color:Y===E.id?E.color:void 0}}),s.jsxs("div",{children:[s.jsx("p",{className:"font-bold",children:E.label}),s.jsx("p",{className:"text-zinc-600 text-[10px]",children:E.description})]}),Y===E.id&&s.jsxs("span",{className:"ml-auto text-[9px] font-mono opacity-50",children:[".",lr(E.id)]})]},E.id))})]}),s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Pack"}),s.jsx("div",{className:"space-y-1",children:rn.map(E=>s.jsxs("button",{onClick:()=>S(E.id),className:J("w-full text-left px-3 py-2 rounded-lg text-xs transition-all",$===E.id?"bg-zinc-700 text-white":"text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"),children:[s.jsx("p",{className:"font-bold",children:E.label}),s.jsx("p",{className:"text-zinc-600 text-[10px] mt-0.5",children:E.description})]},E.id))})]}),s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-3",children:[s.jsxs("div",{className:"space-y-1.5",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Plataforma"}),s.jsx(_k,{value:X,onChange:W,wordpressOnly:v==="web"})]}),s.jsxs("div",{className:"space-y-1.5",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Idioma"}),s.jsx("select",{value:T,onChange:E=>M(E.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-accent/50",children:$g.map(E=>s.jsx("option",{value:E.id,children:E.label},E.id))})]}),s.jsxs("div",{className:"space-y-1.5",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Tono"}),s.jsx("div",{className:"grid grid-cols-3 gap-1",children:hk.map(E=>s.jsxs("button",{onClick:()=>F(E.id),className:J("flex flex-col items-center gap-0.5 py-1.5 rounded-lg text-[10px] transition-all",D===E.id?"bg-zinc-700 text-white":"text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800"),children:[s.jsx("span",{children:E.emoji}),s.jsx("span",{children:E.label})]},E.id))})]})]}),s.jsxs("button",{onClick:()=>$a(E=>!E),className:"w-full flex items-center justify-between px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 transition-colors",children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(Fx,{size:12}),"Historial (",n.length,")"]}),s.jsx(Ca,{size:12,className:J("transition-transform",fi&&"rotate-90")})]})]}),s.jsxs("div",{className:"flex-1 min-w-0 space-y-4",children:[s.jsx(Vt,{children:fi&&n.length>0&&s.jsx(qe.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"overflow-hidden",children:s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 px-1",children:"Generaciones anteriores"}),n.map(E=>s.jsx(xk,{output:E,onLoad:Ce=>{st(Ce),Fe([]),ve(Ce.outputMode??"html")},onDelete:r},E.id))]})})}),s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Contexto de marca"}),I&&s.jsxs("span",{className:"flex items-center gap-1 text-[9px] text-accent/60 font-mono",children:[s.jsx(Ds,{size:9})," DB auto-fill"]})]}),s.jsxs("button",{onClick:()=>ee(E=>!E),className:J("flex items-center gap-1.5 text-[10px] px-2 py-1 rounded-md font-medium transition-colors border",B?"bg-accent/15 border-accent/40 text-accent":"bg-zinc-800 border-zinc-700 text-zinc-500 hover:text-zinc-300"),children:[s.jsx(Ds,{size:10}),B?"DB Prompt activo":"DB Prompt"]})]}),s.jsx(Vt,{children:B&&s.jsx(qe.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"overflow-hidden",children:s.jsxs("div",{className:"space-y-1",children:[s.jsx("p",{className:"text-[10px] text-accent/60 font-mono px-0.5",children:"Pega el bloque de prompt/contexto de DB_VARIABLES — reemplaza el contexto estándar"}),s.jsx("textarea",{value:Q,onChange:E=>N(E.target.value),placeholder:"Contexto completo desde DB_VARIABLES (CONTEXTOS sheet, PersonBlueprint, o prompt personalizado)...",rows:6,className:"w-full bg-zinc-800 border border-accent/30 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/60 resize-y font-mono text-xs"})]})})}),(v==="ecommerce"||v==="landing")&&s.jsxs("div",{className:"space-y-3",children:[s.jsx(q_,{packId:$,brandId:k,brandContext:U,value:tn,onChange:Go,githubToken:hn}),v==="landing"&&s.jsx("input",{value:en,onChange:E=>xt(E.target.value),placeholder:"Restricciones / compliance / objetivo de conversión (opcional)",className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/50"})]}),s.jsx("textarea",{value:U,onChange:E=>ae(E.target.value),placeholder:"Contexto de marca: propuesta única de valor, palabras clave SEO, tono específico, información especial...",rows:6,className:J("w-full bg-zinc-800 border rounded-lg px-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/50 resize-y transition-colors",B?"border-zinc-700 opacity-50":"border-zinc-700"),disabled:B&&!!Q.trim()}),B&&Q.trim()&&s.jsx("p",{className:"text-[10px] text-zinc-600 -mt-1 px-0.5",children:"↑ Contexto estándar ignorado — DB Prompt activo"})]}),s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3",children:[s.jsx(V_,{value:mo,onChange:fo}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"GitHub Token (sesión)"}),s.jsx("input",{type:"password",value:hn,onChange:E=>yn(E.target.value),placeholder:"ghp_... · Requerido para Push Enhanced Description",className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-400 placeholder:text-zinc-700 outline-none focus:border-accent/50 font-mono"})]})]}),s.jsxs("div",{className:J("rounded-xl border p-4 space-y-3 transition-colors",Object.keys(h).length>0?"bg-violet-950/20 border-violet-500/25":"bg-zinc-900 border-zinc-800"),children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Blueprints"}),Object.keys(h).length>0&&s.jsxs("span",{className:"text-[9px] px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-400 font-bold",children:[Object.keys(h).length," activos — se inyectarán al generar"]})]}),s.jsx(P_,{injected:Object.keys(h).length>0,onInject:()=>{},onClearInjection:()=>{}})]}),Object.keys(h).length>0?s.jsx("div",{className:"flex flex-wrap gap-2",children:Object.entries(h).map(([E,Ce])=>{const $e={BP_PERSON:"bg-blue-500/15 text-blue-300 border-blue-500/30",BP_LOCATION:"bg-emerald-500/15 text-emerald-300 border-emerald-500/30",BP_PRODUCT:"bg-amber-500/15 text-amber-300 border-amber-500/30"},Ue={BP_PERSON:"👤",BP_LOCATION:"📍",BP_PRODUCT:"📦"};return s.jsxs("div",{className:J("flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs",$e[Ce.type]||"bg-zinc-800 text-zinc-300 border-zinc-700"),children:[s.jsx("span",{className:"text-[10px] font-bold opacity-60",children:E}),s.jsx("span",{children:Ue[Ce.type]||"🔹"}),s.jsx("span",{className:"font-medium max-w-[120px] truncate",children:Ce.name})]},E)})}):s.jsx("p",{className:"text-xs text-zinc-600 italic",children:"Ningún blueprint asignado. Abre el panel BPs para importar y asignar slots."})]}),s.jsxs("div",{className:J("border rounded-xl px-4 py-3 flex flex-col gap-2 transition-colors",fe?"bg-orange-950/20 border-orange-500/30":"bg-zinc-900 border-zinc-800"),children:[ze&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[s.jsx("span",{className:"text-sm font-bold text-white mr-1",children:ze.label}),s.jsxs(jn,{color:(bo=jg.find(E=>E.id===v))==null?void 0:bo.color,children:[ze.sections.length," secciones"]}),s.jsxs(jn,{color:"#FFAB00",children:["~",br," palabras"]}),s.jsx(jn,{color:"#6366F1",children:T}),s.jsx(jn,{color:X==="shopify"?"#22C55E":"#3B82F6",children:X}),s.jsx(xa,{mode:Y}),fe&&s.jsx(jn,{color:"#f97316",children:"⚡ SUPER AGGRO"})]}),s.jsx("div",{className:"flex gap-1 flex-wrap",children:ze.sections.map(E=>{const Ce=ol[E],$e=_i.has(E);return s.jsx("span",{className:J("text-[9px] px-1.5 py-0.5 rounded font-mono transition-colors",$e?"bg-emerald-500/20 text-emerald-400":"bg-zinc-800 text-zinc-600"),children:(Ce==null?void 0:Ce.label)??E},E)})})]}),s.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap pt-0.5",children:[s.jsxs("button",{onClick:()=>Re(!0),className:J("flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border",G?"border-[var(--accent)]/50 text-[var(--accent)] bg-[var(--accent)]/10":"bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"),style:G?{borderColor:((Da=ra(G))==null?void 0:Da.palette.accent)+"50",color:(Er=ra(G))==null?void 0:Er.palette.accent,background:((Oe=ra(G))==null?void 0:Oe.palette.accent)+"15"}:{},children:[s.jsx(gr,{size:11}),G?s.jsxs("span",{className:"flex items-center gap-1",children:[(ki=ra(G))==null?void 0:ki.name,s.jsx(uo,{size:9,className:"opacity-60",onClick:E=>{E.stopPropagation(),ue(null)}})]}):"Theme"]}),ne&&s.jsxs("button",{onClick:()=>le(!0),className:J("flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border",Sr==="liquid"?"bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20":"bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:border-zinc-600"),title:"Preview completo — desktop y mobile",children:[s.jsx(al,{size:11})," Preview"]}),s.jsxs("button",{onClick:()=>De(E=>!E),className:J("flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border",fe?"bg-orange-500/20 border-orange-500/50 text-orange-400":"bg-zinc-800 border-zinc-700 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600"),children:[s.jsx(gn,{size:11,className:fe?"fill-orange-400":""}),"AGGRO"]}),s.jsxs("button",{onClick:vr,disabled:qt,className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 text-xs font-medium transition-colors disabled:opacity-40",children:[s.jsx(kd,{size:11}),"Reset"]}),s.jsx("div",{className:"w-px h-5 bg-zinc-700 mx-0.5"}),qt?s.jsxs("button",{onClick:bl,className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium hover:bg-red-500/20",children:[s.jsx(of,{size:11}),"Detener"]}):s.jsxs("button",{onClick:xl,disabled:!ze,className:J("flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all disabled:opacity-40",fe?"bg-orange-500 hover:bg-orange-400 text-black":"bg-accent hover:bg-accent/90 text-black"),children:[s.jsx(qx,{size:11}),fe?"⚡ Generar AGGRO":"Generar"]}),ne&&s.jsx("div",{className:"w-px h-5 bg-zinc-700 mx-0.5"}),ne&&s.jsx("button",{onClick:wr,className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs transition-colors",title:`Exportar .${lr(Sr)}`,children:s.jsx(ua,{size:11})}),ne&&ne.superAggro&&s.jsxs("button",{onClick:()=>{const E=ne.outputMode??Y,Ce=lr(E),$e=hd(E),Ue=ea(ne.sections,E,!1),Pt=new Blob([Ue],{type:$e}),Be=document.createElement("a");Be.href=URL.createObjectURL(Pt),Be.download=`weblab_${et==null?void 0:et.id}_${ze==null?void 0:ze.id}_AGGRO_CLEAN_${Date.now()}.${Ce}`,Be.click()},className:"flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-emerald-400 text-xs font-bold transition-colors",title:"Export sin advertencia AGGRO — listo para publicar",children:[s.jsx(ua,{size:11}),s.jsx("span",{children:"CLEAN"})]}),ne&&s.jsx("button",{onClick:Wo,disabled:bn||!hn.trim(),className:J("flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all",ie?"bg-emerald-500/15 border border-emerald-500/30 text-emerald-400":bn?"bg-zinc-800 text-zinc-500":"bg-zinc-800 hover:bg-zinc-700 text-zinc-300 disabled:opacity-40"),title:hn.trim()?"Guardar borrador en Drafts repo":"Requiere GitHub Token",children:bn?s.jsxs(s.Fragment,{children:[s.jsx(ao,{size:11,className:"animate-spin"}),"Guardando..."]}):ie?s.jsxs(s.Fragment,{children:[s.jsx(Lt,{size:11}),"Guardado"]}):s.jsxs(s.Fragment,{children:[s.jsx(Px,{size:11}),"Borrador"]})}),Pn&&!xn&&s.jsxs("button",{onClick:()=>at(!0),className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs font-bold hover:bg-violet-500/25 transition-colors animate-pulse",children:[s.jsx(gn,{size:11}),"+ Sales Layer"]}),xn&&s.jsxs("span",{className:"flex items-center gap-1.5 text-[10px] text-violet-400 font-mono",children:[s.jsx(Lt,{size:10}),"Sales Layer incluido"]}),s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"w-px h-5 bg-zinc-700 mx-0.5"}),u?s.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-colors hover:bg-emerald-500/20",children:[s.jsx(co,{size:11})," En Shopify ↗"]}):s.jsxs("button",{onClick:wi,disabled:c||!ne||!a.connected,className:J("flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border",ne&&a.connected?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20":"bg-zinc-800 border-zinc-700 text-zinc-600 cursor-not-allowed opacity-50"),title:a.connected?"Push página a Shopify":"Conecta Shopify en el tab Shopify Push",children:[c?s.jsx(ao,{size:11,className:"animate-spin"}):s.jsx(mr,{size:11}),c?"Pushing...":"Shopify"]})]}),ke&&s.jsxs("span",{className:"text-[10px] text-red-400 max-w-40 truncate",title:ke,children:["⚠ ",ke]}),ie&&s.jsxs("a",{href:ie.contentUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors",title:"Ver en GitHub",children:[s.jsx(Gd,{size:9}),"Expira ",new Date(ie.expiresAt).toLocaleDateString("es-ES")]})]})]}),qt&&s.jsxs("div",{className:J("flex items-center gap-3 px-4 py-3 border rounded-xl text-sm",fe?"bg-orange-500/5 border-orange-500/20 text-orange-400":"bg-accent/5 border-accent/20 text-accent"),children:[s.jsx($n,{size:14}),s.jsxs("span",{children:["Generando sección ",bt.length+1," de ",ze==null?void 0:ze.sections.length," · ",Y,fe&&" ⚡",Ge&&` — ${Ge}`]})]}),$t&&s.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400",children:[s.jsx(In,{size:14}),$t]}),kr.length>0&&s.jsxs("div",{className:"space-y-3",children:[kr.map((E,Ce)=>s.jsx(yk,{section:E,live:qt&&Ce===kr.length-1,aggro:ne==null?void 0:ne.superAggro,outputMode:Sr},E.sectionId+Ce)),ne&&s.jsxs(qe.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},className:"space-y-3",children:[s.jsxs("div",{className:J("flex items-center gap-2 px-4 py-2.5 border rounded-xl text-sm",ne.superAggro?"bg-orange-500/10 border-orange-500/20 text-orange-400":"bg-emerald-500/10 border-emerald-500/20 text-emerald-400"),children:[s.jsx(co,{size:14}),"Generación completa · ",ne.wordCount," palabras · ",ne.sections.length," secciones · ",ne.platform,ne.superAggro&&" · ⚡ SUPER AGGRO",s.jsx("span",{className:"ml-auto text-[10px] font-mono opacity-50",children:new Date(ne.generatedAt).toLocaleTimeString("es-ES")})]}),(v==="ecommerce"||v==="landing")&&!xn&&s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"¿Qué quieres hacer?"}),s.jsxs("div",{className:"flex gap-3 flex-wrap",children:[s.jsxs("button",{onClick:wi,disabled:c||!a.connected,className:J("flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold border transition-all",a.connected?"bg-emerald-500/10 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20":"bg-zinc-800 border-zinc-700 text-zinc-600 cursor-not-allowed"),children:[c?s.jsx(ao,{size:14,className:"animate-spin"}):s.jsx(mr,{size:14}),c?"Pushing...":a.connected?"Push to Shopify":"Conecta Shopify primero"]}),s.jsxs("button",{onClick:()=>ft(!0),className:"flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold border bg-violet-500/10 border-violet-500/40 text-violet-300 hover:bg-violet-500/20 transition-all",children:[s.jsx(gn,{size:14}),"Aplicar Sales Layer"]})]}),!a.connected&&s.jsx("p",{className:"text-[10px] text-zinc-600",children:"Para hacer push conecta Shopify en el tab correspondiente."})]}),xn&&Pn&&s.jsxs(qe.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},className:"bg-zinc-900 border border-violet-500/30 rounded-xl overflow-hidden",children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-b border-violet-500/20",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(gn,{size:12,className:"text-violet-400"}),s.jsx("span",{className:"text-xs font-bold text-violet-300",children:"Sales Layer aplicado — output enhanced"})]}),s.jsx("button",{onClick:()=>{Tn(null),at(!1),ft(!1)},className:"text-zinc-600 hover:text-zinc-400 transition-colors",children:s.jsx(uo,{size:12})})]}),s.jsx("iframe",{srcDoc:`<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{margin:0;padding:0;background:#0E1018}</style></head><body>${Pn}</body></html>`,style:{width:"100%",height:"400px",border:"none",display:"block"},sandbox:"allow-scripts allow-same-origin",title:"Enhanced Output Preview"}),s.jsx("div",{className:"px-4 py-3 border-t border-violet-500/20",children:s.jsxs("button",{onClick:wi,disabled:c||!a.connected,className:J("w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all",a.connected?"bg-emerald-500 hover:bg-emerald-400 text-white":"bg-zinc-800 text-zinc-600 cursor-not-allowed"),children:[c?s.jsx(ao,{size:13,className:"animate-spin"}):s.jsx(mr,{size:13}),c?"Pushing...":"Push Enhanced to Shopify"]})})]})]}),ne&&(v==="ecommerce"||v==="landing")&&qn&&!xn&&s.jsx(Ng,{context:v,brandId:k,pulse:!0,baseHtml:(()=>{const E=ne.outputMode??Y,Ce=pr(k),$e={...a.cdnImageMap};return Ce.flatMap(Ue=>Ue.products).forEach(Ue=>{Ue.image_filename&&!$e[Ue.display_name]&&($e[Ue.display_name]=`${Ks}/assets/images/products/${Ue.image_filename}`)}),yd(ea(ne.sections,E,ne.superAggro??!1),$e)})(),onGenerate:(E,Ce,$e)=>{$e&&$e.trim().length>100&&(Tn($e),at(!0),ft(!1))}})]}),!qt&&kr.length===0&&!$t&&s.jsxs("div",{className:"flex flex-col items-center justify-center py-24 gap-3 text-zinc-700",children:[s.jsx(ii,{size:40,strokeWidth:1}),s.jsxs("p",{className:"text-sm",children:["Selecciona marca, pack, output mode e idioma y pulsa"," ",s.jsx("span",{className:J("font-bold",fe?"text-orange-400":"text-accent"),children:fe?"⚡ Generar AGGRO":"Generar"})]})]})]})]}),y==="blog"&&s.jsxs("div",{className:"flex gap-6",children:[s.jsxs("aside",{className:"w-72 shrink-0 space-y-4",children:[s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Marca"}),s.jsx("select",{value:Hn,onChange:E=>Pa(E.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-accent/50",children:Mn.map(E=>s.jsxs("option",{value:E.id,children:[E.emoji," ",E.name]},E.id))})]}),s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Tipo de post"}),s.jsx("div",{className:"space-y-1",children:_d.map(E=>s.jsxs("button",{onClick:()=>gl(E.id),className:J("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-all text-left",vn===E.id?"bg-zinc-700 text-white":"text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"),children:[s.jsx("span",{className:"text-base",children:E.emoji}),s.jsxs("div",{children:[s.jsx("p",{className:"font-bold",children:E.label}),s.jsx("p",{className:"text-zinc-600 text-[10px]",children:E.description})]})]},E.id))})]}),s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Output Mode"}),s.jsx("div",{className:"space-y-1",children:Bd.filter(E=>E.id==="html").map(E=>s.jsxs("button",{onClick:()=>hl(E.id),className:J("w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all",on===E.id?"bg-zinc-700 text-white":"text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"),children:[s.jsx(E.icon,{size:12,style:{color:on===E.id?E.color:void 0}}),s.jsx("span",{className:"font-bold",children:E.label}),s.jsxs("span",{className:"text-zinc-600 text-[10px] ml-auto",children:[".",lr(E.id)]})]},E.id))})]}),s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-3",children:[s.jsxs("div",{className:"space-y-1.5",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Idioma"}),s.jsx("select",{value:Kn,onChange:E=>yr(E.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-accent/50",children:$g.map(E=>s.jsx("option",{value:E.id,children:E.label},E.id))})]}),s.jsxs("div",{className:"space-y-1.5",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Palabras objetivo"}),s.jsxs("select",{value:ho,onChange:E=>hi(Number(E.target.value)),className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-accent/50",children:[s.jsx("option",{value:400,children:"~400 (corto)"}),s.jsx("option",{value:800,children:"~800 (estándar)"}),s.jsx("option",{value:1200,children:"~1200 (largo)"}),s.jsx("option",{value:1800,children:"~1800 (pillar)"})]})]})]})]}),s.jsxs("div",{className:"flex-1 min-w-0 space-y-4",children:[s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Brief del post"}),s.jsx("input",{value:go,onChange:E=>Ta(E.target.value),placeholder:"Tema del post (ej: Cómo proteger el cabello en Miami durante el verano)",className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/50"}),s.jsx("input",{value:Wn,onChange:E=>gi(E.target.value),placeholder:"Keywords SEO separadas por coma (opcional)",className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/50"}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Contexto de marca"}),La&&s.jsxs("span",{className:"flex items-center gap-1 text-[9px] text-accent/60 font-mono",children:[s.jsx(Ds,{size:9})," DB auto-fill"]})]}),s.jsxs("button",{onClick:()=>Ra(E=>!E),className:J("flex items-center gap-1.5 text-[10px] px-2 py-1 rounded-md font-medium transition-colors border",Yn?"bg-accent/15 border-accent/40 text-accent":"bg-zinc-800 border-zinc-700 text-zinc-500 hover:text-zinc-300"),children:[s.jsx(Ds,{size:10}),Yn?"DB Prompt activo":"DB Prompt"]})]}),s.jsx(Vt,{children:Yn&&s.jsx(qe.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"overflow-hidden",children:s.jsxs("div",{className:"space-y-1",children:[s.jsx("p",{className:"text-[10px] text-accent/60 font-mono px-0.5",children:"Pega el bloque de prompt/contexto de DB_VARIABLES — reemplaza el contexto estándar"}),s.jsx("textarea",{value:yo,onChange:E=>Fa(E.target.value),placeholder:"Contexto completo desde DB_VARIABLES (CONTEXTOS sheet, PersonBlueprint, o prompt personalizado)...",rows:6,className:"w-full bg-zinc-800 border border-accent/30 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/60 resize-y font-mono text-xs"})]})})}),s.jsx("textarea",{value:Oa,onChange:E=>On(E.target.value),placeholder:"Contexto adicional de marca o producto (opcional)",rows:4,className:J("w-full bg-zinc-800 border rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/50 resize-y transition-colors",Yn?"border-zinc-700 opacity-50":"border-zinc-700"),disabled:Yn&&!!yo.trim()}),Yn&&yo.trim()&&s.jsx("p",{className:"text-[10px] text-zinc-600 -mt-1 px-0.5",children:"↑ Contexto estándar ignorado — DB Prompt activo"})]}),s.jsxs("div",{className:"flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl p-4",children:[s.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[s.jsx("span",{className:"text-sm font-bold text-white",children:vi.name}),s.jsxs(jn,{color:"#FFAB00",children:[(Si=_d.find(E=>E.id===vn))==null?void 0:Si.emoji," ",(zr=_d.find(E=>E.id===vn))==null?void 0:zr.label]}),s.jsx(jn,{color:"#6366F1",children:Kn}),s.jsx(xa,{mode:on})]}),s.jsxs("div",{className:"flex gap-2",children:[xo?s.jsxs("button",{onClick:()=>{var E;(E=Qn.current)==null||E.abort(),xi(!1)},className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-500/20",children:[s.jsx(of,{size:13}),"Detener"]}):s.jsxs("button",{onClick:_r,disabled:!go.trim(),className:"flex items-center gap-2 px-5 py-2 rounded-lg bg-accent hover:bg-accent/90 text-black text-sm font-bold transition-all disabled:opacity-40",children:[s.jsx(Vx,{size:13}),"Generar post"]}),wn&&s.jsx("button",{onClick:vl,className:"flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm",title:`Exportar .${lr(on)}`,children:s.jsx(ua,{size:13})})]})]}),xo&&s.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 bg-accent/5 border border-accent/20 rounded-xl text-sm text-accent",children:[s.jsx($n,{size:14}),"Generando post · ",on," · ~",ho," palabras"]}),bi&&s.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400",children:[s.jsx(In,{size:14}),bi]}),wn&&!xo&&s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden",children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-b border-zinc-800",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(nd,{size:13,className:"text-accent"}),s.jsx("span",{className:"text-sm font-bold text-zinc-300",children:"Post generado"}),s.jsx(xa,{mode:on})]}),s.jsx(M0,{text:wn})]}),s.jsx("div",{className:"p-4",children:on==="html"?s.jsx("div",{className:"rounded-lg bg-white p-4 overflow-auto",style:{maxHeight:"600px"},dangerouslySetInnerHTML:{__html:wn}}):s.jsx("pre",{className:"text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed font-mono overflow-auto",style:{maxHeight:"600px"},children:wn})})]}),wn&&!xo&&s.jsx(Ng,{context:"blog",blogPostType:vn,brandId:Hn,pulse:Gn,onGenerate:(E,Ce,$e)=>{Gt(!1)}}),!xo&&!wn&&!bi&&s.jsxs("div",{className:"flex flex-col items-center justify-center py-24 gap-3 text-zinc-700",children:[s.jsx(nd,{size:40,strokeWidth:1}),s.jsxs("p",{className:"text-sm",children:["Escribe el tema del post y pulsa ",s.jsx("span",{className:"text-accent font-bold",children:"Generar post"})]})]})]})]})]})}const Sk=`/* ═══════════════════════════════════════════════════════════════
   NEURONE COSMÉTICA — BASE.CSS v1.0
   Dark Scientific Luxury — Unreal>ille Studio
   ═══════════════════════════════════════════════════════════════ */

/* ── DESIGN TOKENS ─────────────────────────────────────────── */
:root {
  --nc-bg:           #0A0D14;
  --nc-bg-card:      #111520;
  --nc-bg-elevated:  #161C2A;
  --nc-navy:         #0076A8;
  --nc-navy-glow:    #0095D4;
  --nc-navy-dim:     rgba(0, 118, 168, 0.15);
  --nc-navy-border:  rgba(0, 118, 168, 0.30);
  --nc-white:        #F8FAFB;
  --nc-text:         rgba(248, 250, 251, 0.72);
  --nc-text-muted:   rgba(248, 250, 251, 0.42);
  --nc-border:       rgba(255, 255, 255, 0.07);
  --nc-border-mid:   rgba(255, 255, 255, 0.12);
  --nc-accent:       #C4622D;

  --nc-font-head:    'Bebas Neue', 'Helvetica Neue', 'Arial Black', sans-serif;
  --nc-font-body:    'PT Sans Narrow', 'Franklin Gothic Medium', Arial Narrow, sans-serif;
  --nc-font-label:   'Courier New', 'Courier', monospace;

  --nc-radius:       4px;
  --nc-radius-lg:    8px;
  --nc-radius-card:  6px;

  --nc-shadow-card:  0 4px 24px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,118,168,0.10);
  --nc-shadow-glow:  0 0 30px rgba(0,118,168,0.25), 0 4px 24px rgba(0,0,0,0.6);

  --nc-transition:   all 0.22s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --nc-transition-fast: all 0.14s ease;

  --nc-header-h:     68px;
  --nc-max:          1280px;
  --nc-gutter:       clamp(16px, 4vw, 48px);
}

/* ── RESET TOTAL ────────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body.nc-body {
  background-color: var(--nc-bg);
  color: var(--nc-text);
  font-family: var(--nc-font-body);
  font-size: 1rem;
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

img, video { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { cursor: pointer; border: none; background: none; font: inherit; }
input, select, textarea { font: inherit; }
ul, ol { list-style: none; }

/* ── TYPOGRAPHY ─────────────────────────────────────────────── */
.nc-label {
  font-family: var(--nc-font-label);
  font-size: 0.625rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--nc-navy-glow);
  font-weight: 400;
}

.nc-eyebrow {
  font-family: var(--nc-font-label);
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--nc-navy-glow);
  display: block;
  margin-bottom: 12px;
}

h1, .nc-h1 {
  font-family: var(--nc-font-head);
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.0;
  color: var(--nc-white);
  text-transform: uppercase;
}

h2, .nc-h2 {
  font-family: var(--nc-font-head);
  font-size: clamp(1.8rem, 4vw, 3.2rem);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1.05;
  color: var(--nc-white);
  text-transform: uppercase;
}

h3, .nc-h3 {
  font-family: var(--nc-font-head);
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1.1;
  color: var(--nc-white);
  text-transform: uppercase;
}

h4, .nc-h4 {
  font-family: var(--nc-font-body);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--nc-white);
}

p { color: var(--nc-text); line-height: 1.7; }

/* ── LAYOUT ─────────────────────────────────────────────────── */
#nc-main {
  min-height: calc(100vh - var(--nc-header-h) - 280px);
  padding-top: var(--nc-header-h);
}

.nc-container {
  width: 100%;
  max-width: var(--nc-max);
  margin: 0 auto;
  padding: 0 var(--nc-gutter);
}

.nc-section { padding: clamp(48px, 8vw, 96px) 0; }
.nc-section-sm { padding: clamp(24px, 4vw, 48px) 0; }

/* ── BUTTONS ────────────────────────────────────────────────── */
.nc-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--nc-font-label);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 400;
  padding: 14px 28px;
  border-radius: var(--nc-radius);
  transition: var(--nc-transition);
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.nc-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.2s;
  background: rgba(255,255,255,0.06);
}
.nc-btn:hover::before { opacity: 1; }

.nc-btn-primary {
  background: var(--nc-navy);
  color: var(--nc-white);
  border: 1px solid var(--nc-navy);
}
.nc-btn-primary:hover {
  background: var(--nc-navy-glow);
  border-color: var(--nc-navy-glow);
  box-shadow: 0 0 20px rgba(0,118,168,0.4);
  transform: translateY(-1px);
}

.nc-btn-outline {
  background: transparent;
  color: var(--nc-white);
  border: 1px solid var(--nc-border-mid);
}
.nc-btn-outline:hover {
  border-color: var(--nc-navy);
  color: var(--nc-navy-glow);
}

.nc-btn-ghost {
  background: transparent;
  color: var(--nc-navy-glow);
  border: 1px solid var(--nc-navy-border);
}
.nc-btn-ghost:hover {
  background: var(--nc-navy-dim);
}

.nc-btn-full { width: 100%; }

.nc-btn-lg {
  padding: 18px 40px;
  font-size: 0.78rem;
}

/* ── HEADER ─────────────────────────────────────────────────── */
.nc-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nc-header-h);
  display: flex;
  align-items: center;
  background: rgba(10, 13, 20, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--nc-border);
  transition: var(--nc-transition);
}

.nc-header.scrolled {
  background: rgba(10, 13, 20, 0.97);
  border-bottom-color: var(--nc-navy-border);
}

.nc-header-inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  max-width: var(--nc-max);
  margin: 0 auto;
  padding: 0 var(--nc-gutter);
  gap: 24px;
}

.nc-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-self: start;
}

.nc-logo img {
  height: 32px;
  width: auto;
  object-fit: contain;
  filter: brightness(1) saturate(1);
}

.nc-logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.nc-logo-name {
  font-family: var(--nc-font-head);
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--nc-white);
}

.nc-logo-sub {
  font-family: var(--nc-font-label);
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--nc-navy-glow);
}

.nc-nav {
  display: flex;
  align-items: center;
  gap: 0;
}

.nc-nav-link {
  font-family: var(--nc-font-label);
  font-size: 0.63rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--nc-text-muted);
  padding: 8px 14px;
  border-radius: var(--nc-radius);
  transition: var(--nc-transition-fast);
  white-space: nowrap;
}

.nc-nav-link:hover,
.nc-nav-link.active {
  color: var(--nc-white);
  background: rgba(255,255,255,0.05);
}

.nc-nav-link.pro {
  color: var(--nc-navy-glow);
  border: 1px solid var(--nc-navy-border);
  padding: 7px 14px;
}

.nc-nav-link.pro:hover {
  background: var(--nc-navy-dim);
  color: var(--nc-white);
}

.nc-header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-self: end;
}

.nc-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: var(--nc-radius);
  color: var(--nc-text-muted);
  transition: var(--nc-transition-fast);
  position: relative;
}

.nc-icon-btn:hover {
  color: var(--nc-white);
  background: rgba(255,255,255,0.06);
}

.nc-cart-count {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 16px;
  height: 16px;
  background: var(--nc-navy);
  color: white;
  font-size: 0.55rem;
  font-family: var(--nc-font-label);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}

/* Mobile hamburger */
.nc-mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: var(--nc-radius);
  transition: var(--nc-transition-fast);
}

.nc-mobile-toggle span {
  display: block;
  width: 20px;
  height: 1.5px;
  background: var(--nc-text);
  transition: var(--nc-transition-fast);
}

.nc-mobile-toggle:hover span { background: var(--nc-white); }

.nc-mobile-menu {
  display: none;
  position: fixed;
  top: var(--nc-header-h);
  left: 0;
  right: 0;
  background: rgba(10, 13, 20, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--nc-navy-border);
  padding: 24px var(--nc-gutter);
  flex-direction: column;
  gap: 4px;
  z-index: 999;
}

.nc-mobile-menu.open { display: flex; }

.nc-mobile-menu .nc-nav-link {
  font-size: 0.8rem;
  padding: 12px 16px;
}

/* ── HERO ───────────────────────────────────────────────────── */
.nc-hero {
  position: relative;
  min-height: calc(100vh - var(--nc-header-h));
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--nc-bg);
}

.nc-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 60% at 60% 40%, rgba(0, 118, 168, 0.12) 0%, transparent 70%),
    radial-gradient(ellipse 40% 50% at 20% 80%, rgba(0, 118, 168, 0.06) 0%, transparent 60%);
}

.nc-hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,118,168,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,118,168,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 80%);
}

.nc-hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: var(--nc-max);
  margin: 0 auto;
  padding: clamp(48px, 8vw, 96px) var(--nc-gutter);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.nc-hero-text {}

.nc-hero-title {
  font-family: var(--nc-font-head);
  font-size: clamp(3rem, 7vw, 6.5rem);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: var(--nc-white);
  margin-bottom: 24px;
}

.nc-hero-title em {
  font-style: normal;
  color: var(--nc-navy-glow);
  display: block;
}

.nc-hero-body {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--nc-text);
  max-width: 440px;
  margin-bottom: 36px;
}

.nc-hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.nc-hero-media {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nc-hero-product-img {
  width: 100%;
  max-width: 420px;
  height: auto;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 20px 60px rgba(0, 118, 168, 0.3));
  animation: nc-float 6s ease-in-out infinite;
}

@keyframes nc-float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-14px); }
}

.nc-hero-glow-ring {
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  border: 1px solid rgba(0, 118, 168, 0.2);
  animation: nc-pulse-ring 4s ease-in-out infinite;
}

.nc-hero-glow-ring:nth-child(2) {
  width: 500px;
  height: 500px;
  animation-delay: 0.8s;
  border-color: rgba(0, 118, 168, 0.10);
}

@keyframes nc-pulse-ring {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50%       { transform: scale(1.04); opacity: 1; }
}

.nc-hero-stats {
  display: flex;
  gap: 32px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--nc-border);
}

.nc-stat-num {
  font-family: var(--nc-font-head);
  font-size: 2rem;
  letter-spacing: 0.02em;
  color: var(--nc-navy-glow);
  line-height: 1;
  display: block;
}

.nc-stat-label {
  font-family: var(--nc-font-label);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--nc-text-muted);
  display: block;
  margin-top: 4px;
}

/* ── PRODUCT CARDS ──────────────────────────────────────────── */
.nc-product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.nc-product-card {
  background: var(--nc-bg-card);
  border: 1px solid var(--nc-border);
  border-radius: var(--nc-radius-card);
  overflow: hidden;
  transition: var(--nc-transition);
  position: relative;
  display: flex;
  flex-direction: column;
}

.nc-product-card:hover {
  border-color: var(--nc-navy-border);
  box-shadow: var(--nc-shadow-card);
  transform: translateY(-3px);
}

.nc-product-card-img {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #FFFFFF;
  border-bottom: 1px solid rgba(0, 118, 168, 0.12);
}

.nc-product-card-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
  transition: transform 0.5s ease;
}

.nc-product-card:hover .nc-product-card-img img {
  transform: scale(1.05);
}

.nc-product-card-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  font-family: var(--nc-font-label);
  font-size: 0.55rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 2px;
  z-index: 2;
}

.nc-badge-new { background: var(--nc-navy); color: white; }
.nc-badge-pro { background: rgba(196,98,45,0.9); color: white; }
.nc-badge-sale { background: rgba(180, 30, 30, 0.85); color: white; }

.nc-product-card-quick {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  opacity: 0;
  transform: translateY(8px);
  transition: var(--nc-transition);
}

.nc-product-card:hover .nc-product-card-quick {
  opacity: 1;
  transform: translateY(0);
}

.nc-product-card-body {
  padding: 16px 20px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.nc-product-card-collection {
  font-family: var(--nc-font-label);
  font-size: 0.58rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--nc-navy-glow);
  margin-bottom: 6px;
}

.nc-product-card-name {
  font-family: var(--nc-font-body);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--nc-white);
  line-height: 1.2;
  margin-bottom: 6px;
}

.nc-product-card-desc {
  font-size: 0.82rem;
  color: var(--nc-text-muted);
  line-height: 1.5;
  flex: 1;
  margin-bottom: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.nc-product-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.nc-price {
  font-family: var(--nc-font-head);
  font-size: 1.2rem;
  letter-spacing: 0.04em;
  color: var(--nc-white);
}

.nc-price-compare {
  font-size: 0.82rem;
  color: var(--nc-text-muted);
  text-decoration: line-through;
  font-family: var(--nc-font-body);
}

/* ── COLLECTION PAGE ─────────────────────────────────────────── */
.nc-collection-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 32px;
  align-items: start;
}

.nc-collection-sidebar {
  position: sticky;
  top: calc(var(--nc-header-h) + 24px);
}

.nc-filter-group {
  margin-bottom: 28px;
}

.nc-filter-title {
  font-family: var(--nc-font-label);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--nc-navy-glow);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--nc-border);
}

.nc-filter-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  font-size: 0.85rem;
  color: var(--nc-text-muted);
  cursor: pointer;
  transition: var(--nc-transition-fast);
}

.nc-filter-option:hover { color: var(--nc-white); }
.nc-filter-option.active { color: var(--nc-navy-glow); }

.nc-filter-option input { accent-color: var(--nc-navy); }

.nc-collection-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 16px;
}

.nc-collection-count {
  font-family: var(--nc-font-label);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--nc-text-muted);
}

.nc-sort-select {
  appearance: none;
  background: var(--nc-bg-card);
  border: 1px solid var(--nc-border);
  color: var(--nc-text);
  padding: 8px 32px 8px 14px;
  border-radius: var(--nc-radius);
  font-family: var(--nc-font-label);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%230076A8'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  transition: var(--nc-transition-fast);
}

.nc-sort-select:hover { border-color: var(--nc-navy-border); }
.nc-sort-select:focus { outline: none; border-color: var(--nc-navy); }

/* ── PRODUCT PAGE ────────────────────────────────────────────── */
.nc-product-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: start;
}

.nc-product-gallery {
  position: sticky;
  top: calc(var(--nc-header-h) + 24px);
}

.nc-gallery-main {
  position: relative;
  border-radius: var(--nc-radius-lg);
  overflow: hidden;
  background: #FFFFFF;
  aspect-ratio: 1 / 1;
  margin-bottom: 12px;
  border: 1px solid var(--nc-border);
}

.nc-gallery-main img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 12px;
}

.nc-gallery-thumbs {
  display: flex;
  gap: 8px;
}

.nc-gallery-thumb {
  width: 72px;
  height: 72px;
  border-radius: var(--nc-radius);
  overflow: hidden;
  border: 1px solid var(--nc-border);
  cursor: pointer;
  transition: var(--nc-transition-fast);
  flex-shrink: 0;
  background: #FFFFFF;
}

.nc-gallery-thumb.active,
.nc-gallery-thumb:hover { border-color: var(--nc-navy); }

.nc-gallery-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
}

.nc-product-info {}

.nc-product-collection-link {
  font-family: var(--nc-font-label);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--nc-navy-glow);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
  transition: var(--nc-transition-fast);
}

.nc-product-collection-link:hover { color: var(--nc-white); }

.nc-product-title {
  font-family: var(--nc-font-head);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 400;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--nc-white);
  line-height: 1.0;
  margin-bottom: 8px;
}

.nc-product-subtitle {
  font-size: 1rem;
  color: var(--nc-text-muted);
  margin-bottom: 24px;
}

.nc-product-price-block {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--nc-border);
}

.nc-product-price {
  font-family: var(--nc-font-head);
  font-size: 2rem;
  letter-spacing: 0.02em;
  color: var(--nc-white);
}

.nc-product-variants {
  margin-bottom: 24px;
}

.nc-variant-label {
  font-family: var(--nc-font-label);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--nc-text-muted);
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.nc-variant-options {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.nc-variant-btn {
  padding: 8px 16px;
  border: 1px solid var(--nc-border);
  border-radius: var(--nc-radius);
  font-family: var(--nc-font-label);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--nc-text-muted);
  background: transparent;
  cursor: pointer;
  transition: var(--nc-transition-fast);
}

.nc-variant-btn:hover { border-color: var(--nc-navy-border); color: var(--nc-white); }
.nc-variant-btn.selected { border-color: var(--nc-navy); color: var(--nc-navy-glow); background: var(--nc-navy-dim); }

.nc-quantity-row {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: center;
}

.nc-quantity {
  display: flex;
  align-items: center;
  border: 1px solid var(--nc-border);
  border-radius: var(--nc-radius);
  overflow: hidden;
}

.nc-qty-btn {
  width: 40px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--nc-text-muted);
  font-size: 1.2rem;
  transition: var(--nc-transition-fast);
  background: var(--nc-bg-card);
}

.nc-qty-btn:hover { color: var(--nc-white); background: var(--nc-bg-elevated); }

.nc-qty-input {
  width: 52px;
  height: 44px;
  text-align: center;
  background: transparent;
  border: none;
  border-left: 1px solid var(--nc-border);
  border-right: 1px solid var(--nc-border);
  color: var(--nc-white);
  font-family: var(--nc-font-label);
  font-size: 0.9rem;
}

.nc-qty-input:focus { outline: none; }

.nc-add-to-cart {
  flex: 1;
  height: 52px;
}

.nc-product-benefits {
  margin-top: 28px;
  padding: 20px;
  background: var(--nc-bg-card);
  border: 1px solid var(--nc-border);
  border-radius: var(--nc-radius-lg);
}

.nc-benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--nc-border);
}

.nc-benefit-item:last-child { border-bottom: none; }

.nc-benefit-icon {
  width: 20px;
  height: 20px;
  background: var(--nc-navy-dim);
  border: 1px solid var(--nc-navy-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.nc-benefit-icon svg { width: 10px; height: 10px; fill: var(--nc-navy-glow); }

.nc-benefit-text { font-size: 0.88rem; color: var(--nc-text); }

.nc-product-tabs {
  margin-top: 48px;
}

.nc-tabs-nav {
  display: flex;
  border-bottom: 1px solid var(--nc-border);
  margin-bottom: 28px;
}

.nc-tab-btn {
  font-family: var(--nc-font-label);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--nc-text-muted);
  padding: 12px 20px;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: var(--nc-transition-fast);
  cursor: pointer;
}

.nc-tab-btn.active, .nc-tab-btn:hover {
  color: var(--nc-navy-glow);
  border-bottom-color: var(--nc-navy);
}

.nc-tab-panel { display: none; }
.nc-tab-panel.active { display: block; }

.nc-tab-panel p { font-size: 0.92rem; color: var(--nc-text); line-height: 1.75; margin-bottom: 16px; }

/* ── TRUST STRIP ─────────────────────────────────────────────── */
.nc-trust-strip {
  background: var(--nc-bg-card);
  border-top: 1px solid var(--nc-border);
  border-bottom: 1px solid var(--nc-border);
}

.nc-trust-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(24px, 4vw, 64px);
  padding: 20px var(--nc-gutter);
  flex-wrap: wrap;
}

.nc-trust-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nc-trust-icon {
  color: var(--nc-navy-glow);
  opacity: 0.9;
}

.nc-trust-text {
  font-family: var(--nc-font-label);
  font-size: 0.63rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--nc-text-muted);
}

/* ── COLLECTION CARDS (homepage) ─────────────────────────────── */
.nc-collections-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.nc-collection-card {
  position: relative;
  border-radius: var(--nc-radius-card);
  overflow: hidden;
  aspect-ratio: 3/4;
  background: var(--nc-bg-elevated);
  cursor: pointer;
  border: 1px solid var(--nc-border);
  transition: var(--nc-transition);
}

.nc-collection-card:first-child {
  grid-row: span 2;
  aspect-ratio: unset;
}

.nc-collection-card:hover {
  border-color: var(--nc-navy-border);
  box-shadow: var(--nc-shadow-card);
}

.nc-collection-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.nc-collection-card:hover img { transform: scale(1.06); }

.nc-collection-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10,13,20,0.9) 0%, rgba(10,13,20,0.2) 50%, transparent 100%);
}

.nc-collection-card-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
}

.nc-collection-card-name {
  font-family: var(--nc-font-head);
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--nc-white);
  line-height: 1;
  margin-bottom: 4px;
}

.nc-collection-card-count {
  font-family: var(--nc-font-label);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
}

/* ── SECTION DIVIDER ─────────────────────────────────────────── */
.nc-section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: clamp(24px, 4vw, 40px);
  gap: 24px;
}

.nc-divider-line {
  height: 1px;
  background: linear-gradient(90deg, var(--nc-navy-border) 0%, transparent 100%);
  margin-bottom: clamp(24px, 4vw, 40px);
}

/* ── ANNOUNCEMENT BAR ─────────────────────────────────────────── */
.nc-announcement {
  background: var(--nc-navy);
  color: rgba(255,255,255,0.9);
  font-family: var(--nc-font-label);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-align: center;
  padding: 9px var(--nc-gutter);
  position: relative;
  z-index: 1001;
}

.nc-header-with-bar { --nc-header-top: 36px; }

/* ── FOOTER ──────────────────────────────────────────────────── */
.nc-footer {
  background: var(--nc-bg-card);
  border-top: 1px solid var(--nc-border);
  padding: clamp(48px, 8vw, 80px) 0 0;
  margin-top: auto;
}

.nc-footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: clamp(24px, 4vw, 64px);
  max-width: var(--nc-max);
  margin: 0 auto;
  padding: 0 var(--nc-gutter) clamp(40px, 6vw, 64px);
}

.nc-footer-brand {}

.nc-footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.nc-footer-logo img { height: 28px; width: auto; }

.nc-footer-tagline {
  font-size: 0.88rem;
  color: var(--nc-text-muted);
  line-height: 1.65;
  margin-bottom: 20px;
  max-width: 280px;
}

.nc-footer-distributor {
  font-family: var(--nc-font-label);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--nc-navy-glow);
  padding: 8px 12px;
  border: 1px solid var(--nc-navy-border);
  border-radius: var(--nc-radius);
  display: inline-block;
  margin-bottom: 24px;
}

.nc-footer-col-title {
  font-family: var(--nc-font-label);
  font-size: 0.63rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--nc-white);
  margin-bottom: 16px;
}

.nc-footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nc-footer-link {
  font-size: 0.85rem;
  color: var(--nc-text-muted);
  transition: var(--nc-transition-fast);
}

.nc-footer-link:hover { color: var(--nc-white); }

.nc-newsletter-form {
  display: flex;
  gap: 0;
  margin-top: 4px;
}

.nc-newsletter-input {
  flex: 1;
  background: var(--nc-bg);
  border: 1px solid var(--nc-border);
  border-right: none;
  border-radius: var(--nc-radius) 0 0 var(--nc-radius);
  padding: 10px 14px;
  color: var(--nc-white);
  font-size: 0.82rem;
  font-family: var(--nc-font-body);
  transition: var(--nc-transition-fast);
}

.nc-newsletter-input::placeholder { color: var(--nc-text-muted); }
.nc-newsletter-input:focus { outline: none; border-color: var(--nc-navy); }

.nc-newsletter-btn {
  padding: 10px 16px;
  background: var(--nc-navy);
  border: 1px solid var(--nc-navy);
  color: white;
  border-radius: 0 var(--nc-radius) var(--nc-radius) 0;
  font-family: var(--nc-font-label);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--nc-transition-fast);
}

.nc-newsletter-btn:hover { background: var(--nc-navy-glow); }

.nc-footer-bottom {
  border-top: 1px solid var(--nc-border);
  padding: 20px var(--nc-gutter);
  max-width: var(--nc-max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.nc-footer-copy {
  font-size: 0.78rem;
  color: var(--nc-text-muted);
}

.nc-footer-dev {
  font-family: var(--nc-font-label);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--nc-text-muted);
}

.nc-footer-dev span {
  color: #C4622D;
  font-weight: 700;
}

.nc-footer-legal {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.nc-footer-legal a {
  font-size: 0.75rem;
  color: var(--nc-text-muted);
  transition: var(--nc-transition-fast);
}

.nc-footer-legal a:hover { color: var(--nc-white); }

/* ── SCIENCE STRIP ───────────────────────────────────────────── */
.nc-science-strip {
  display: flex;
  gap: 0;
  background: var(--nc-bg-elevated);
  border: 1px solid var(--nc-border);
  border-radius: var(--nc-radius-lg);
  overflow: hidden;
}

.nc-science-item {
  flex: 1;
  padding: 28px 24px;
  border-right: 1px solid var(--nc-border);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nc-science-item:last-child { border-right: none; }

.nc-science-num {
  font-family: var(--nc-font-head);
  font-size: 2.4rem;
  letter-spacing: 0.02em;
  color: var(--nc-navy-glow);
  line-height: 1;
}

.nc-science-label {
  font-family: var(--nc-font-label);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--nc-text-muted);
}

.nc-science-desc {
  font-size: 0.82rem;
  color: var(--nc-text-muted);
  line-height: 1.5;
}

/* ── CART DRAWER ─────────────────────────────────────────────── */
.nc-cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 2000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s;
  backdrop-filter: blur(4px);
}

.nc-cart-overlay.open { opacity: 1; pointer-events: all; }

.nc-cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(420px, 100vw);
  background: var(--nc-bg-card);
  border-left: 1px solid var(--nc-navy-border);
  z-index: 2001;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.nc-cart-drawer.open { transform: translateX(0); }

.nc-cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--nc-border);
}

.nc-cart-title {
  font-family: var(--nc-font-head);
  font-size: 1.2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--nc-white);
}

.nc-cart-close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--nc-radius);
  color: var(--nc-text-muted);
  transition: var(--nc-transition-fast);
}

.nc-cart-close:hover { color: var(--nc-white); background: rgba(255,255,255,0.06); }

.nc-cart-items { flex: 1; overflow-y: auto; padding: 16px 24px; }

.nc-cart-item {
  display: flex;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid var(--nc-border);
}

.nc-cart-item-img {
  width: 72px;
  height: 72px;
  border-radius: var(--nc-radius);
  overflow: hidden;
  flex-shrink: 0;
  background: var(--nc-bg-elevated);
  border: 1px solid var(--nc-border);
}

.nc-cart-item-img img { width: 100%; height: 100%; object-fit: cover; }

.nc-cart-item-info { flex: 1; }

.nc-cart-item-name {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--nc-white);
  margin-bottom: 4px;
}

.nc-cart-item-price { font-family: var(--nc-font-head); font-size: 1rem; color: var(--nc-navy-glow); }

.nc-cart-footer {
  padding: 20px 24px;
  border-top: 1px solid var(--nc-border);
}

.nc-cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.nc-cart-total-label {
  font-family: var(--nc-font-label);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--nc-text-muted);
}

.nc-cart-total-price {
  font-family: var(--nc-font-head);
  font-size: 1.4rem;
  color: var(--nc-white);
}

/* ── BREADCRUMBS ─────────────────────────────────────────────── */
.nc-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 0;
  font-family: var(--nc-font-label);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--nc-text-muted);
}

.nc-breadcrumbs a:hover { color: var(--nc-white); }
.nc-breadcrumbs .sep { color: var(--nc-navy-border); }
.nc-breadcrumbs .current { color: var(--nc-text); }

/* ── PAGINATION ──────────────────────────────────────────────── */
.nc-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 40px 0;
}

.nc-page-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--nc-border);
  border-radius: var(--nc-radius);
  font-family: var(--nc-font-label);
  font-size: 0.75rem;
  color: var(--nc-text-muted);
  transition: var(--nc-transition-fast);
}

.nc-page-btn:hover { border-color: var(--nc-navy-border); color: var(--nc-white); }
.nc-page-btn.active { background: var(--nc-navy); border-color: var(--nc-navy); color: white; }

/* ── ALERTS / NOTIFICATIONS ──────────────────────────────────── */
.nc-alert {
  padding: 12px 16px;
  border-radius: var(--nc-radius);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.nc-alert-success {
  background: rgba(0, 118, 168, 0.12);
  border: 1px solid rgba(0, 118, 168, 0.3);
  color: var(--nc-navy-glow);
}

.nc-alert-error {
  background: rgba(180, 30, 30, 0.12);
  border: 1px solid rgba(180, 30, 30, 0.3);
  color: #f87171;
}

/* ── PRO PORTAL BADGE ────────────────────────────────────────── */
.nc-pro-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  background: rgba(196, 98, 45, 0.12);
  border: 1px solid rgba(196, 98, 45, 0.35);
  border-radius: 2px;
  font-family: var(--nc-font-label);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #C4622D;
}

/* ── LOADING / SKELETON ──────────────────────────────────────── */
.nc-skeleton {
  background: linear-gradient(90deg, var(--nc-bg-card) 25%, var(--nc-bg-elevated) 50%, var(--nc-bg-card) 75%);
  background-size: 200% 100%;
  animation: nc-shimmer 1.5s infinite;
  border-radius: var(--nc-radius);
}

@keyframes nc-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ── SCROLLBAR ───────────────────────────────────────────────── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--nc-bg); }
::-webkit-scrollbar-thumb { background: var(--nc-border-mid); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--nc-navy-border); }

/* ── UTILITIES ───────────────────────────────────────────────── */
.nc-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
}

.nc-text-center { text-align: center; }
.nc-text-navy { color: var(--nc-navy-glow); }
.nc-text-muted { color: var(--nc-text-muted); }

/* ── RESPONSIVE ──────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .nc-collection-layout { grid-template-columns: 1fr; }
  .nc-sidebar { display: none; }
  .nc-collections-grid { grid-template-columns: repeat(2, 1fr); }
  .nc-collections-grid .nc-collection-card:first-child { grid-row: auto; }
}

@media (max-width: 860px) {
  .nc-hero-content { grid-template-columns: 1fr; text-align: center; }
  .nc-hero-media { display: none; }
  .nc-hero-body { max-width: 100%; }
  .nc-hero-actions { justify-content: center; }
  .nc-hero-stats { justify-content: center; }
  .nc-product-layout { grid-template-columns: 1fr; }
  .nc-product-gallery { position: static; }
  .nc-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .nc-nav { display: none; }
  .nc-mobile-toggle { display: flex; }
  .nc-header-inner { grid-template-columns: auto 1fr auto; }
  .nc-science-strip { flex-direction: column; }
  .nc-science-item { border-right: none; border-bottom: 1px solid var(--nc-border); }
  .nc-science-item:last-child { border-bottom: none; }
}

@media (max-width: 540px) {
  .nc-product-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .nc-collections-grid { grid-template-columns: 1fr; }
  .nc-footer-grid { grid-template-columns: 1fr; }
  .nc-trust-inner { flex-direction: column; gap: 14px; text-align: center; }
  .nc-footer-bottom { flex-direction: column; text-align: center; }
  .nc-quantity-row { flex-direction: column; }
  .nc-add-to-cart { width: 100%; }
}

/* ── ANIMATIONS ON SCROLL (se activan via JS) ─────────────────── */
.nc-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}

.nc-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.nc-reveal-delay-1 { transition-delay: 0.1s; }
.nc-reveal-delay-2 { transition-delay: 0.2s; }
.nc-reveal-delay-3 { transition-delay: 0.3s; }
.nc-reveal-delay-4 { transition-delay: 0.4s; }
`,Ck=`/* ═══════════════════════════════════════════════════════════════
   NEURONE COSMÉTICA — THEME.JS v1.0
   Unreal>ille Studio
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── HEADER SCROLL ────────────────────────────────────────────
  const header = document.querySelector('.nc-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── MOBILE MENU ──────────────────────────────────────────────
  const mobileToggle = document.querySelector('.nc-mobile-toggle');
  const mobileMenu = document.querySelector('.nc-mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute(
        'aria-expanded',
        mobileMenu.classList.contains('open')
      );
    });
    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  // ── CART DRAWER ──────────────────────────────────────────────
  const cartOverlay = document.querySelector('.nc-cart-overlay');
  const cartDrawer = document.querySelector('.nc-cart-drawer');
  const cartClose = document.querySelector('.nc-cart-close');
  const cartTriggers = document.querySelectorAll('[data-cart-toggle]');

  function openCart() {
    if (!cartOverlay || !cartDrawer) return;
    cartOverlay.classList.add('open');
    cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    refreshCart();
  }

  function closeCart() {
    if (!cartOverlay || !cartDrawer) return;
    cartOverlay.classList.remove('open');
    cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  cartTriggers.forEach(t => t.addEventListener('click', openCart));
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  function refreshCart() {
    fetch('/cart.js')
      .then(r => r.json())
      .then(cart => {
        // Update badge
        document.querySelectorAll('.nc-cart-count').forEach(b => {
          b.textContent = cart.item_count;
          b.style.display = cart.item_count > 0 ? 'flex' : 'none';
        });

        // Update items list
        const itemsList = document.querySelector('.nc-cart-items');
        const totalPrice = document.querySelector('.nc-cart-total-price');
        if (!itemsList) return;

        if (cart.items.length === 0) {
          itemsList.innerHTML = '<p style="text-align:center;padding:32px 0;color:var(--nc-text-muted);font-size:.85rem;">Tu carrito está vacío</p>';
        } else {
          itemsList.innerHTML = cart.items.map(item => \`
            <div class="nc-cart-item">
              <div class="nc-cart-item-img">
                <img src="\${item.featured_image?.url || ''}" alt="\${item.title}" loading="lazy">
              </div>
              <div class="nc-cart-item-info">
                <div class="nc-cart-item-name">\${item.product_title}</div>
                <div style="font-size:.78rem;color:var(--nc-text-muted);margin:3px 0;">\${item.variant_title !== 'Default Title' ? item.variant_title : ''}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
                  <div class="nc-cart-item-price">\${formatMoney(item.final_line_price)}</div>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <button onclick="updateCart(\${item.key},\${item.quantity - 1})" style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;border:1px solid var(--nc-border);border-radius:3px;color:var(--nc-text-muted);cursor:pointer;background:transparent;font-size:1rem;transition:var(--nc-transition-fast)" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--nc-text-muted)'">−</button>
                    <span style="font-size:.85rem;color:var(--nc-white);min-width:20px;text-align:center">\${item.quantity}</span>
                    <button onclick="updateCart(\${item.key},\${item.quantity + 1})" style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;border:1px solid var(--nc-border);border-radius:3px;color:var(--nc-text-muted);cursor:pointer;background:transparent;font-size:1rem;transition:var(--nc-transition-fast)" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--nc-text-muted)'">+</button>
                  </div>
                </div>
              </div>
            </div>
          \`).join('');
        }

        if (totalPrice) {
          totalPrice.textContent = formatMoney(cart.total_price);
        }
      });
  }

  window.updateCart = function (key, quantity) {
    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: key, quantity })
    })
      .then(r => r.json())
      .then(() => refreshCart());
  };

  function formatMoney(cents) {
    return '$' + (cents / 100).toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
  }

  // ── ADD TO CART ──────────────────────────────────────────────
  const addToCartForms = document.querySelectorAll('[data-product-form]');
  addToCartForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('[data-add-to-cart-btn]');
      const variantId = form.querySelector('[name="id"]')?.value;
      const qty = form.querySelector('[name="quantity"]')?.value || 1;
      if (!variantId) return;

      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Agregando...';
      }

      try {
        await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: variantId, quantity: parseInt(qty) })
        });
        openCart();
      } catch (err) {
        console.error('Error adding to cart:', err);
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Agregar al Carrito';
        }
      }
    });
  });

  // ── QUICK ADD (product cards) ────────────────────────────────
  document.querySelectorAll('[data-quick-add]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const variantId = btn.dataset.quickAdd;
      if (!variantId) return;
      btn.textContent = '✓';
      btn.disabled = true;
      try {
        await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: variantId, quantity: 1 })
        });
        openCart();
      } catch (_) {}
      setTimeout(() => {
        btn.textContent = 'Agregar';
        btn.disabled = false;
      }, 1800);
    });
  });

  // ── PRODUCT GALLERY ──────────────────────────────────────────
  const galleryMain = document.querySelector('.nc-gallery-main img');
  const galleryThumbs = document.querySelectorAll('.nc-gallery-thumb');
  galleryThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.dataset.src;
      const alt = thumb.dataset.alt || '';
      if (galleryMain && src) {
        galleryMain.src = src;
        galleryMain.alt = alt;
      }
      galleryThumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // ── PRODUCT TABS ─────────────────────────────────────────────
  const tabBtns = document.querySelectorAll('.nc-tab-btn');
  const tabPanels = document.querySelectorAll('.nc-tab-panel');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });

  // ── VARIANT SELECTION ────────────────────────────────────────
  const variantBtns = document.querySelectorAll('.nc-variant-btn');
  const variantInput = document.querySelector('[name="id"]');
  const priceEl = document.querySelector('.nc-product-price');

  variantBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      variantBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (variantInput) variantInput.value = btn.dataset.variantId;
      if (priceEl && btn.dataset.price) {
        priceEl.textContent = formatMoney(parseInt(btn.dataset.price));
      }
    });
  });

  // ── QUANTITY CONTROLS ────────────────────────────────────────
  const qtyInput = document.querySelector('.nc-qty-input');
  document.querySelector('[data-qty-minus]')?.addEventListener('click', () => {
    if (qtyInput && parseInt(qtyInput.value) > 1) qtyInput.value = parseInt(qtyInput.value) - 1;
  });
  document.querySelector('[data-qty-plus]')?.addEventListener('click', () => {
    if (qtyInput) qtyInput.value = parseInt(qtyInput.value) + 1;
  });

  // ── SCROLL REVEAL ────────────────────────────────────────────
  const revealEls = document.querySelectorAll('.nc-reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // ── NEWSLETTER FORM ──────────────────────────────────────────
  const newsletterForms = document.querySelectorAll('[data-newsletter-form]');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn = form.querySelector('[type="submit"]');
      if (!input?.value) return;
      if (btn) {
        btn.textContent = '✓';
        btn.disabled = true;
        btn.style.background = '#2a7a3a';
      }
      // Shopify newsletter via form action
      const data = new FormData(form);
      try {
        await fetch(form.action || '/contact', { method: 'POST', body: data });
      } catch (_) {}
      setTimeout(() => {
        if (btn) { btn.textContent = 'Enviar'; btn.disabled = false; btn.style.background = ''; }
        input.value = '';
      }, 3000);
    });
  });

  // ── ANNOUNCEMENT BAR HEIGHT OFFSET ───────────────────────────
  const announcement = document.querySelector('.nc-announcement');
  if (announcement) {
    const h = announcement.offsetHeight;
    document.documentElement.style.setProperty('--nc-header-h', \`\${68 + h}px\`);
    document.querySelectorAll('.nc-mobile-menu').forEach(m => {
      m.style.top = \`\${68 + h}px\`;
    });
  }

})();
`,Ek=`<!doctype html>
<html lang="{{ request.locale.iso_code }}" class="nc-theme">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="#0E1018">

    <link rel="canonical" href="{{ canonical_url }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet">

    {%- if settings.favicon != blank -%}
      <link rel="icon" type="image/png" href="{{ settings.favicon | image_url: width: 32, height: 32 }}">
    {%- endif -%}

    <title>
      {{ page_title }}
      {%- if current_tags %} &ndash; tagged "{{ current_tags | join: ', ' }}"{% endif -%}
      {%- if current_page != 1 %} &ndash; Page {{ current_page }}{% endif -%}
      {%- unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless -%}
    </title>

    {% if page_description %}
      <meta name="description" content="{{ page_description | escape }}">
    {% endif %}

    {{ content_for_header }}

    {{ 'base.css' | asset_url | stylesheet_tag }}
  </head>

  <body class="nc-body template-{{ template.name | handle }}{% if template.suffix %} template-{{ template.suffix }}{% endif %}">

    {% section 'nc-header' %}

    <main id="nc-main" role="main">
      {{ content_for_layout }}
    </main>

    {% section 'nc-footer' %}

    <script>
      // Cart count badge
      document.addEventListener('DOMContentLoaded', function() {
        fetch('/cart.js')
          .then(r => r.json())
          .then(cart => {
            const badges = document.querySelectorAll('.nc-cart-count');
            badges.forEach(b => {
              b.textContent = cart.item_count;
              b.style.display = cart.item_count > 0 ? 'flex' : 'none';
            });
          });
      });
    <\/script>

    {{ 'theme.js' | asset_url | script_tag }}
  </body>
</html>
`,zk=`[
  {
    "name": "theme_info",
    "theme_name": "Neurone Custom Theme",
    "theme_version": "1.0.0",
    "theme_author": "Unreal>ille Studio",
    "theme_documentation_url": "https://unrealvillestudio.com",
    "theme_support_url": "https://unrealvillestudio.com"
  },
  {
    "name": "Colors",
    "settings": [
      {
        "type": "color",
        "id": "color_bg",
        "label": "Color de fondo principal",
        "default": "#0A0D14"
      },
      {
        "type": "color",
        "id": "color_navy",
        "label": "Color acento principal (navy)",
        "default": "#0076A8"
      },
      {
        "type": "color",
        "id": "color_text",
        "label": "Color de texto",
        "default": "#F8FAFB"
      }
    ]
  },
  {
    "name": "Typography",
    "settings": [
      {
        "type": "font_picker",
        "id": "font_heading",
        "label": "Tipografía de títulos",
        "default": "helvetica_neue_n9"
      },
      {
        "type": "font_picker",
        "id": "font_body",
        "label": "Tipografía de cuerpo",
        "default": "pt_sans_narrow_n4"
      }
    ]
  },
  {
    "name": "Favicon",
    "settings": [
      {
        "type": "image_picker",
        "id": "favicon",
        "label": "Favicon"
      }
    ]
  },
  {
    "name": "Social Media",
    "settings": [
      {
        "type": "text",
        "id": "social_instagram",
        "label": "Instagram URL"
      },
      {
        "type": "text",
        "id": "social_facebook",
        "label": "Facebook URL"
      },
      {
        "type": "text",
        "id": "social_tiktok",
        "label": "TikTok URL"
      }
    ]
  },
  {
    "name": "Checkout",
    "settings": [
      {
        "type": "image_picker",
        "id": "checkout_logo",
        "label": "Logo en checkout"
      },
      {
        "type": "color",
        "id": "checkout_bg",
        "label": "Color fondo checkout",
        "default": "#0A0D14"
      },
      {
        "type": "color",
        "id": "checkout_accent",
        "label": "Botones checkout",
        "default": "#0076A8"
      }
    ]
  }
]
`,Ak=`{
  "current": {
    "color_bg": "#0A0D14",
    "color_navy": "#0076A8",
    "color_text": "#F8FAFB"
  },
  "presets": {}
}
`,Nk=`{
  "general": {
    "search": {
      "placeholder": "Buscar productos..."
    },
    "newsletter_form_placeholder": "Tu dirección de email",
    "password_page_password_label": "Contraseña",
    "password_page_password_placeholder": "Tu contraseña",
    "password_page_login_form_submit": "Entrar",
    "password_page_signup_form_email_label": "Email",
    "password_page_signup_form_submit": "Notificarme",
    "password_page_password_button": "Iniciar sesión con contraseña"
  },
  "products": {
    "product": {
      "add_to_cart": "Agregar al Carrito",
      "sold_out": "Agotado",
      "unavailable": "No disponible",
      "quantity": "Cantidad",
      "regular_price": "Precio regular",
      "sale_price": "Precio de oferta",
      "unit_price_separator": "por"
    },
    "facets": {
      "filters": "Filtros",
      "clear_all": "Limpiar filtros",
      "sort_by_label": "Ordenar por:",
      "sort_options": {
        "manual": "Destacados",
        "best-selling": "Más vendidos",
        "title-ascending": "A-Z",
        "title-descending": "Z-A",
        "price-ascending": "Precio: menor a mayor",
        "price-descending": "Precio: mayor a menor",
        "created-ascending": "Más antiguos",
        "created-descending": "Más recientes"
      }
    }
  },
  "cart": {
    "general": {
      "title": "Carrito",
      "empty": "Tu carrito está vacío",
      "note": "Nota del pedido (opcional)",
      "subtotal": "Subtotal",
      "taxes_shipping": "Impuestos y envío calculados al finalizar compra"
    },
    "label": {
      "continue_shopping": "Seguir Comprando",
      "checkout": "Finalizar Compra",
      "remove": "Eliminar",
      "close": "Cerrar"
    }
  },
  "collections": {
    "general": {
      "no_matches": "Ningún producto coincide con la búsqueda."
    }
  },
  "customer": {
    "login": {
      "title": "Iniciar Sesión",
      "email": "Email",
      "password": "Contraseña",
      "submit": "Iniciar Sesión",
      "forgot_password": "¿Olvidaste tu contraseña?",
      "create_account": "Crear Cuenta"
    },
    "register": {
      "title": "Crear Cuenta",
      "first_name": "Nombre",
      "last_name": "Apellido",
      "email": "Email",
      "password": "Contraseña",
      "submit": "Crear Cuenta"
    },
    "account": {
      "title": "Mi Cuenta",
      "orders": "Pedidos",
      "details": "Datos de cuenta"
    },
    "orders": {
      "title": "Historial de Pedidos",
      "order_number": "Pedido #",
      "date": "Fecha",
      "payment_status": "Pago",
      "fulfillment_status": "Estado",
      "total": "Total"
    }
  },
  "accessibility": {
    "skip_to_content": "Saltar al contenido",
    "close": "Cerrar",
    "open": "Abrir",
    "open_media": "Abrir media"
  }
}
`,jk=`{%- if section.settings.show_announcement and section.settings.announcement_text != blank -%}
<div class="nc-announcement" role="alert">
  {%- if section.settings.announcement_link != blank -%}
    <a href="{{ section.settings.announcement_link }}" style="color:inherit;text-decoration:underline">
      {{ section.settings.announcement_text }}
    </a>
  {%- else -%}
    {{ section.settings.announcement_text }}
  {%- endif -%}
</div>
{%- endif -%}

<header class="nc-header" role="banner">
  <div class="nc-header-inner">

    <!-- LOGO -->
    <a href="/" class="nc-logo" aria-label="{{ shop.name }} — Inicio">
      {%- if section.settings.logo != blank -%}
        <img
          src="{{ section.settings.logo | image_url: height: 64 }}"
          alt="{{ shop.name }}"
          width="auto"
          height="32"
          loading="eager"
        >
      {%- else -%}
        <div class="nc-logo-text">
          <span class="nc-logo-name">Neurone</span>
          <span class="nc-logo-sub">Cosmética</span>
        </div>
      {%- endif -%}
    </a>

    <!-- NAV DESKTOP -->
    <nav class="nc-nav" role="navigation" aria-label="Navegación principal">
      <a href="/" class="nc-nav-link{% if request.path == '/' %} active{% endif %}">Home</a>
      <a href="/collections/all" class="nc-nav-link{% if request.path contains '/collections/all' %} active{% endif %}">Catálogo</a>
      <a href="/collections/moisture" class="nc-nav-link{% if request.path contains 'moisture' %} active{% endif %}">Moisture</a>
      <a href="/collections/restore" class="nc-nav-link{% if request.path contains 'restore' %} active{% endif %}">Restore</a>
      <a href="/collections/styling" class="nc-nav-link{% if request.path contains 'styling' %} active{% endif %}">Styling</a>
      <a href="/collections/color-rescue" class="nc-nav-link{% if request.path contains 'color-rescue' %} active{% endif %}">Color Rescue</a>
      <a href="/collections/scalp" class="nc-nav-link{% if request.path contains 'scalp' %} active{% endif %}">Scalp</a>
      <a href="/pages/pro-portal" class="nc-nav-link pro">Portal Pro</a>
    </nav>

    <!-- ACTIONS -->
    <div class="nc-header-actions">
      <!-- Search -->
      <a href="/search" class="nc-icon-btn" aria-label="Buscar">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/>
        </svg>
      </a>

      <!-- Account -->
      <a href="/account" class="nc-icon-btn" aria-label="Mi cuenta">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </a>

      <!-- Cart -->
      <button class="nc-icon-btn" data-cart-toggle aria-label="Carrito">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <span class="nc-cart-count" aria-live="polite">0</span>
      </button>

      <!-- Mobile toggle -->
      <button
        class="nc-mobile-toggle"
        aria-label="Menú"
        aria-expanded="false"
        aria-controls="nc-mobile-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

  </div>
</header>

<!-- MOBILE MENU -->
<nav class="nc-mobile-menu" id="nc-mobile-menu" role="navigation" aria-label="Menú móvil">
  <a href="/" class="nc-nav-link">Home</a>
  <a href="/collections/all" class="nc-nav-link">Catálogo Completo</a>
  <a href="/collections/moisture" class="nc-nav-link">Moisture</a>
  <a href="/collections/restore" class="nc-nav-link">Restore</a>
  <a href="/collections/styling" class="nc-nav-link">Styling</a>
  <a href="/collections/color-rescue" class="nc-nav-link">Color Rescue</a>
  <a href="/collections/scalp" class="nc-nav-link">Scalp</a>
  <a href="/pages/pro-portal" class="nc-nav-link pro" style="margin-top:8px">Portal Pro →</a>
</nav>

<!-- CART DRAWER -->
<div class="nc-cart-overlay" aria-hidden="true"></div>
<div class="nc-cart-drawer" role="dialog" aria-modal="true" aria-label="Tu carrito">
  <div class="nc-cart-header">
    <span class="nc-cart-title">Tu Carrito</span>
    <button class="nc-cart-close" aria-label="Cerrar carrito">
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
        <path d="M18 6 6 18M6 6l12 12"/>
      </svg>
    </button>
  </div>
  <div class="nc-cart-items">
    <p style="text-align:center;padding:32px 0;color:var(--nc-text-muted);font-size:.85rem;">Cargando...</p>
  </div>
  <div class="nc-cart-footer">
    <div class="nc-cart-total">
      <span class="nc-cart-total-label">Total estimado</span>
      <span class="nc-cart-total-price">$0.00</span>
    </div>
    <p style="font-size:.75rem;color:var(--nc-text-muted);margin-bottom:14px;">Impuestos y envío calculados al finalizar compra</p>
    <a href="/checkout" class="nc-btn nc-btn-primary nc-btn-full nc-btn-lg">Finalizar Compra</a>
    <a href="/cart" class="nc-btn nc-btn-outline nc-btn-full" style="margin-top:8px">Ver Carrito</a>
  </div>
</div>

{% schema %}
{
  "name": "NC Header",
  "settings": [
    { "type": "image_picker", "id": "logo", "label": "Logo" },
    { "type": "checkbox", "id": "show_announcement", "label": "Mostrar anuncio", "default": false },
    { "type": "text", "id": "announcement_text", "label": "Texto del anuncio", "default": "Envío gratis en pedidos +$75 · South & Central Florida" },
    { "type": "url", "id": "announcement_link", "label": "Link del anuncio (opcional)" }
  ],
  "presets": [{ "name": "NC Header" }]
}
{% endschema %}
`,$k=`<footer class="nc-footer" role="contentinfo">
  <div class="nc-footer-grid">

    <!-- BRAND COLUMN -->
    <div class="nc-footer-brand">
      {%- if section.settings.logo != blank -%}
        <div class="nc-footer-logo">
          <img src="{{ section.settings.logo | image_url: height: 56 }}" alt="{{ shop.name }}" height="28" loading="lazy">
        </div>
      {%- else -%}
        <div class="nc-footer-logo">
          <div class="nc-logo-text">
            <span class="nc-logo-name">Neurone</span>
            <span class="nc-logo-sub">Cosmética</span>
          </div>
        </div>
      {%- endif -%}

      <p class="nc-footer-tagline">
        Neurocosmética + Nano Tribología capilar. Ciencia aplicada donde el cabello lo necesita. Resultados que se sienten desde la primera aplicación.
      </p>

      <div class="nc-footer-distributor">
        Distribuidor Exclusivo · South &amp; Central Florida
      </div>

      <!-- Social -->
      <div style="display:flex;gap:8px;">
        {%- if section.settings.instagram_url != blank -%}
          <a href="{{ section.settings.instagram_url }}" class="nc-icon-btn" aria-label="Instagram" target="_blank" rel="noopener">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        {%- endif -%}
        {%- if section.settings.facebook_url != blank -%}
          <a href="{{ section.settings.facebook_url }}" class="nc-icon-btn" aria-label="Facebook" target="_blank" rel="noopener">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        {%- endif -%}
        {%- if section.settings.tiktok_url != blank -%}
          <a href="{{ section.settings.tiktok_url }}" class="nc-icon-btn" aria-label="TikTok" target="_blank" rel="noopener">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.22 8.22 0 0 0 4.79 1.52V6.77a4.85 4.85 0 0 1-1.02-.08z"/>
            </svg>
          </a>
        {%- endif -%}
      </div>
    </div>

    <!-- COLLECTIONS -->
    <div>
      <p class="nc-footer-col-title">Colecciones</p>
      <ul class="nc-footer-links">
        <li><a href="/collections/all" class="nc-footer-link">Todo el Catálogo</a></li>
        <li><a href="/collections/moisture" class="nc-footer-link">Moisture</a></li>
        <li><a href="/collections/restore" class="nc-footer-link">Restore</a></li>
        <li><a href="/collections/styling" class="nc-footer-link">Styling</a></li>
        <li><a href="/collections/color-rescue" class="nc-footer-link">Color Rescue</a></li>
        <li><a href="/collections/scalp" class="nc-footer-link">Scalp</a></li>
      </ul>
    </div>

    <!-- INFO -->
    <div>
      <p class="nc-footer-col-title">Información</p>
      <ul class="nc-footer-links">
        <li><a href="/pages/about" class="nc-footer-link">Sobre Neurone</a></li>
        <li><a href="/pages/la-ciencia" class="nc-footer-link">La Ciencia</a></li>
        <li><a href="/pages/pro-portal" class="nc-footer-link">Portal Profesional</a></li>
        <li><a href="/pages/faq" class="nc-footer-link">Preguntas Frecuentes</a></li>
        <li><a href="/pages/contacto" class="nc-footer-link">Contacto</a></li>
      </ul>
    </div>

    <!-- NEWSLETTER -->
    <div>
      <p class="nc-footer-col-title">Novedades</p>
      <p style="font-size:.82rem;color:var(--nc-text-muted);margin-bottom:16px;line-height:1.55;">
        Acceso anticipado a lanzamientos, tips profesionales y ofertas exclusivas.
      </p>
      <form data-newsletter-form method="post" action="/contact#footer-newsletter">
        <input type="hidden" name="form_type" value="customer">
        <input type="hidden" name="utf8" value="✓">
        <input type="hidden" name="contact[tags]" value="newsletter">
        <div class="nc-newsletter-form">
          <input
            class="nc-newsletter-input"
            type="email"
            name="contact[email]"
            placeholder="tu@email.com"
            autocomplete="email"
            required
            aria-label="Tu email"
          >
          <button type="submit" class="nc-newsletter-btn">Enviar</button>
        </div>
      </form>

      <!-- Contact -->
      <div style="margin-top:20px;display:flex;flex-direction:column;gap:8px;">
        {%- if section.settings.whatsapp != blank -%}
          <a href="https://wa.me/{{ section.settings.whatsapp | remove: '+' | remove: '-' | remove: ' ' }}" class="nc-footer-link" style="display:flex;align-items:center;gap:8px;" target="_blank" rel="noopener">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style="color:var(--nc-navy-glow)">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        {%- endif -%}
        {%- if section.settings.email != blank -%}
          <a href="mailto:{{ section.settings.email }}" class="nc-footer-link" style="display:flex;align-items:center;gap:8px;">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" style="color:var(--nc-navy-glow)">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            {{ section.settings.email }}
          </a>
        {%- endif -%}
      </div>
    </div>

  </div>

  <!-- BOTTOM BAR -->
  <div class="nc-footer-bottom">
    <p class="nc-footer-copy">
      &copy; {{ 'now' | date: '%Y' }} {{ shop.name }}. Todos los derechos reservados. · Hollywood, FL 33021
    </p>
    <div class="nc-footer-legal">
      <a href="/policies/privacy-policy">Privacidad</a>
      <a href="/policies/terms-of-service">Términos</a>
      <a href="/policies/shipping-policy">Envíos</a>
      <a href="/policies/refund-policy">Devoluciones</a>
    </div>
    <p class="nc-footer-dev">
      Designed &amp; Developed by <span>Unreal&gt;ille Studio</span>
    </p>
  </div>
</footer>

{% schema %}
{
  "name": "NC Footer",
  "settings": [
    { "type": "image_picker", "id": "logo", "label": "Logo" },
    { "type": "text", "id": "email", "label": "Email de contacto" },
    { "type": "text", "id": "whatsapp", "label": "WhatsApp (con código de país, ej: +13055551234)" },
    { "type": "url", "id": "instagram_url", "label": "Instagram URL" },
    { "type": "url", "id": "facebook_url", "label": "Facebook URL" },
    { "type": "url", "id": "tiktok_url", "label": "TikTok URL" }
  ],
  "presets": [{ "name": "NC Footer" }]
}
{% endschema %}
`,Pk=`<section class="nc-hero">
  <div class="nc-hero-bg"></div>
  <div class="nc-hero-grid"></div>

  <div class="nc-hero-content">
    <div class="nc-hero-text">
      <span class="nc-eyebrow">{{ section.settings.eyebrow | default: "Neurocosmética · Nano Tribología Capilar" }}</span>

      <h1 class="nc-hero-title nc-reveal">
        {{ section.settings.headline | default: "Cuando el" }}
        <em>{{ section.settings.headline_accent | default: "Cabello" }}</em>
        {{ section.settings.headline_end | default: "No Puede Esperar" }}
      </h1>

      <p class="nc-hero-body nc-reveal nc-reveal-delay-1">
        {{ section.settings.subheadline | default: "Formulaciones de grado profesional desarrolladas con tecnología de Nano Tribología. Sin excusas, sin parches. El cabello que mereces — ya." }}
      </p>

      <div class="nc-hero-actions nc-reveal nc-reveal-delay-2">
        <a href="{{ section.settings.cta_url | default: '/collections/all' }}" class="nc-btn nc-btn-primary nc-btn-lg">
          {{ section.settings.cta_text | default: "Ver Catálogo" }}
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="{{ section.settings.cta2_url | default: '/pages/la-ciencia' }}" class="nc-btn nc-btn-outline">
          {{ section.settings.cta2_text | default: "La Ciencia" }}
        </a>
      </div>

      <div class="nc-hero-stats nc-reveal nc-reveal-delay-3">
        <div>
          <span class="nc-stat-num">39+</span>
          <span class="nc-stat-label">Productos</span>
        </div>
        <div>
          <span class="nc-stat-num">6</span>
          <span class="nc-stat-label">Líneas</span>
        </div>
        <div>
          <span class="nc-stat-num">Pro</span>
          <span class="nc-stat-label">Portal B2B</span>
        </div>
      </div>
    </div>

    <div class="nc-hero-media">
      <div class="nc-hero-glow-ring"></div>
      <div class="nc-hero-glow-ring"></div>
      {%- if section.settings.hero_image != blank -%}
        <img
          class="nc-hero-product-img"
          src="{{ section.settings.hero_image | image_url: width: 840 }}"
          alt="{{ section.settings.hero_image.alt | default: 'Neurone Cosmética' }}"
          width="420"
          loading="eager"
          fetchpriority="high"
        >
      {%- else -%}
        <!-- Placeholder visual cuando no hay imagen -->
        <div style="width:340px;height:400px;display:flex;align-items:center;justify-content:center;position:relative;z-index:2;">
          <div style="text-align:center;">
            <div style="font-family:var(--nc-font-head);font-size:5rem;color:var(--nc-navy);opacity:.3;letter-spacing:.1em;line-height:1;">NC</div>
            <div class="nc-label" style="margin-top:12px;">Neurone Cosmética</div>
          </div>
        </div>
      {%- endif -%}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "NC Hero",
  "settings": [
    { "type": "image_picker", "id": "hero_image", "label": "Imagen hero (producto destacado)" },
    { "type": "text", "id": "eyebrow", "label": "Eyebrow", "default": "Neurocosmética · Nano Tribología Capilar" },
    { "type": "text", "id": "headline", "label": "Headline parte 1", "default": "Cuando el" },
    { "type": "text", "id": "headline_accent", "label": "Headline acento (azul)", "default": "Cabello" },
    { "type": "text", "id": "headline_end", "label": "Headline parte final", "default": "No Puede Esperar" },
    { "type": "textarea", "id": "subheadline", "label": "Subtítulo" },
    { "type": "text", "id": "cta_text", "label": "CTA principal", "default": "Ver Catálogo" },
    { "type": "url", "id": "cta_url", "label": "CTA principal URL" },
    { "type": "text", "id": "cta2_text", "label": "CTA secundario", "default": "La Ciencia" },
    { "type": "url", "id": "cta2_url", "label": "CTA secundario URL" }
  ],
  "presets": [{ "name": "NC Hero" }]
}
{% endschema %}
`,Tk=`<div class="nc-trust-strip">
  <div class="nc-trust-inner">

    <div class="nc-trust-item">
      <svg class="nc-trust-icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
      <span class="nc-trust-text">Envío Rápido · South &amp; Central Florida</span>
    </div>

    <div class="nc-trust-item">
      <svg class="nc-trust-icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
      <span class="nc-trust-text">Formulación Profesional Certificada</span>
    </div>

    <div class="nc-trust-item">
      <svg class="nc-trust-icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
        <polyline points="20 12 20 22 4 22 4 12"/>
        <rect x="2" y="7" width="20" height="5"/>
        <line x1="12" y1="22" x2="12" y2="7"/>
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
      </svg>
      <span class="nc-trust-text">Envío Gratis +$75</span>
    </div>

    <div class="nc-trust-item">
      <svg class="nc-trust-icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      <span class="nc-trust-text">Distribuidor Exclusivo Miami</span>
    </div>

    <div class="nc-trust-item">
      <svg class="nc-trust-icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18l3-.01a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 6.09 6.09l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      <span class="nc-trust-text">Soporte WhatsApp</span>
    </div>

  </div>
</div>

{% schema %}
{
  "name": "NC Trust Strip",
  "presets": [{ "name": "NC Trust Strip" }]
}
{% endschema %}
`,Ok=`<section class="nc-section">
  <div class="nc-container">
    <div class="nc-section-head">
      <div>
        <span class="nc-eyebrow">{{ section.settings.eyebrow | default: "Líneas de Tratamiento" }}</span>
        <h2 class="nc-h2">{{ section.settings.title | default: "Encuentra Tu Solución" }}</h2>
      </div>
      <a href="/collections/all" class="nc-btn nc-btn-ghost" style="flex-shrink:0;">
        Todo el Catálogo
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <div class="nc-collections-grid">
      {%- for block in section.blocks -%}
        {%- assign col = block.settings -%}
        <a href="{{ col.url | default: '/collections/' | append: col.handle }}" class="nc-collection-card nc-reveal" style="animation-delay:{{ forloop.index0 | times: 0.08 }}s">
          {%- if col.image != blank -%}
            <img
              src="{{ col.image | image_url: width: 600 }}"
              alt="{{ col.name }}"
              loading="lazy"
              width="600"
            >
          {%- elsif col.collection != blank -%}
            {%- assign c = collections[col.collection] -%}
            {%- if c.image -%}
              <img src="{{ c.image | image_url: width: 600 }}" alt="{{ c.title }}" loading="lazy" width="600">
            {%- endif -%}
          {%- endif -%}
          <div class="nc-collection-card-overlay"></div>
          <div class="nc-collection-card-label">
            {%- if col.badge != blank -%}
              <span class="nc-badge-new" style="font-family:var(--nc-font-label);font-size:.55rem;letter-spacing:.18em;text-transform:uppercase;padding:3px 7px;border-radius:2px;background:var(--nc-navy);color:white;display:inline-block;margin-bottom:6px;">{{ col.badge }}</span>
            {%- endif -%}
            <div class="nc-collection-card-name">{{ col.name | default: c.title }}</div>
            {%- assign c_real = collections[col.collection] -%}
            {%- if c_real -%}
              <div class="nc-collection-card-count">{{ c_real.all_products_count }} producto{% if c_real.all_products_count != 1 %}s{% endif %}</div>
            {%- elsif col.count != blank -%}
              <div class="nc-collection-card-count">{{ col.count }}</div>
            {%- endif -%}
          </div>
        </a>
      {%- endfor -%}

      {%- if section.blocks.size == 0 -%}
        <!-- Default blocks si no hay configuración -->
        {%- assign default_cols = "Moisture,restore,Restore,restore,Styling,styling,Color Rescue,color-rescue,Scalp,scalp" | split: "," -%}
        {%- for i in (0..4) -%}
          {%- assign n = i | times: 2 -%}
          {%- assign name = default_cols[n] -%}
          {%- assign handle = default_cols[n | plus: 1] -%}
          {%- assign c = collections[handle] -%}
          <a href="/collections/{{ handle }}" class="nc-collection-card nc-reveal" style="transition-delay:{{ forloop.index0 | times: 80 }}ms">
            {%- if c.image -%}
              <img src="{{ c.image | image_url: width: 600 }}" alt="{{ name }}" loading="lazy">
            {%- else -%}
              <div style="width:100%;height:100%;background:var(--nc-bg-elevated);display:flex;align-items:center;justify-content:center;">
                <span style="font-family:var(--nc-font-head);font-size:2rem;color:var(--nc-navy);opacity:.4;letter-spacing:.1em;">{{ name | upcase | slice: 0, 2 }}</span>
              </div>
            {%- endif -%}
            <div class="nc-collection-card-overlay"></div>
            <div class="nc-collection-card-label">
              <div class="nc-collection-card-name">{{ name }}</div>
              {%- if c -%}<div class="nc-collection-card-count">{{ c.all_products_count }} productos</div>{%- endif -%}
            </div>
          </a>
        {%- endfor -%}
      {%- endif -%}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "NC Collection Grid",
  "blocks": [
    {
      "type": "collection",
      "name": "Colección",
      "settings": [
        { "type": "collection", "id": "collection", "label": "Colección de Shopify" },
        { "type": "image_picker", "id": "image", "label": "Imagen personalizada (opcional)" },
        { "type": "text", "id": "name", "label": "Nombre mostrado" },
        { "type": "url", "id": "url", "label": "URL" },
        { "type": "text", "id": "badge", "label": "Badge (ej: Nuevo)" },
        { "type": "text", "id": "count", "label": "Texto bajo el nombre (ej: 8 productos)" }
      ]
    }
  ],
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Eyebrow", "default": "Líneas de Tratamiento" },
    { "type": "text", "id": "title", "label": "Título", "default": "Encuentra Tu Solución" }
  ],
  "presets": [{ "name": "NC Collection Grid" }],
  "max_blocks": 6
}
{% endschema %}
`,Lk=`{%- paginate collection.products by section.settings.products_per_page -%}

<!-- COLLECTION HEADER -->
<div style="background:var(--nc-bg-elevated);border-bottom:1px solid var(--nc-border);padding:clamp(32px,6vw,60px) 0 clamp(24px,4vw,40px);">
  <div class="nc-container">
    <nav class="nc-breadcrumbs" style="margin-bottom:16px;">
      <a href="/">Home</a>
      <span class="sep">›</span>
      <span class="current">{{ collection.title }}</span>
    </nav>
    <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;">
      <div>
        {%- if section.settings.show_eyebrow -%}
          <span class="nc-eyebrow">Línea de Tratamiento</span>
        {%- endif -%}
        <h1 class="nc-h1" style="font-size:clamp(2rem,5vw,4rem);">{{ collection.title }}</h1>
        {%- if collection.description != blank -%}
          <p style="font-size:.9rem;color:var(--nc-text-muted);max-width:520px;margin-top:10px;line-height:1.65;">
            {{ collection.description | strip_html }}
          </p>
        {%- endif -%}
      </div>
      <div class="nc-badge-new" style="font-family:var(--nc-font-label);font-size:.65rem;letter-spacing:.18em;padding:8px 14px;border-radius:3px;flex-shrink:0;background:var(--nc-navy);color:white;">
        {{ collection.all_products_count }} producto{% if collection.all_products_count != 1 %}s{% endif %}
      </div>
    </div>
  </div>
</div>

<!-- COLLECTION BODY -->
<section class="nc-section">
  <div class="nc-container">
    <div class="nc-collection-layout">

      <!-- SIDEBAR FILTERS (desktop) -->
      <aside class="nc-collection-sidebar" style="display:block;" aria-label="Filtros">
        <!-- Sort -->
        <div class="nc-filter-group">
          <p class="nc-filter-title">Ordenar por</p>
          <select class="nc-sort-select" onchange="location.href=this.value" style="width:100%;">
            {%- assign sort_by = collection.sort_by | default: collection.default_sort_by -%}
            {%- for option in collection.sort_options -%}
              <option value="{{ collection.url }}?sort_by={{ option.value }}"{% if sort_by == option.value %} selected{% endif %}>
                {{ option.name }}
              </option>
            {%- endfor -%}
          </select>
        </div>

        <!-- Tags filter -->
        {%- if collection.all_tags.size > 0 -%}
          <div class="nc-filter-group">
            <p class="nc-filter-title">Tipo de Cabello</p>
            {%- assign hair_tags = collection.all_tags | where: "contains", "hair_" -%}
            {%- for tag in collection.all_tags limit: 12 -%}
              {%- unless tag contains 'b2b' or tag contains 'compliance' or tag contains 'collection' -%}
                <label class="nc-filter-option">
                  <input type="checkbox"
                    {% if current_tags contains tag %}checked{% endif %}
                    onchange="ncFilterTag('{{ tag | handle }}', this.checked)"
                  >
                  {{ tag | replace: '_', ' ' | capitalize }}
                </label>
              {%- endunless -%}
            {%- endfor -%}
          </div>
        {%- endif -%}

        <!-- Collections nav -->
        <div class="nc-filter-group">
          <p class="nc-filter-title">Otras Líneas</p>
          {%- assign line_handles = "moisture,restore,styling,color-rescue,scalp" | split: "," -%}
          {%- assign line_names = "Moisture,Restore,Styling,Color Rescue,Scalp" | split: "," -%}
          {%- for h in line_handles -%}
            {%- assign line_name = line_names[forloop.index0] -%}
            <a
              href="/collections/{{ h }}"
              class="nc-filter-option{% if collection.handle == h %} active{% endif %}"
              style="text-decoration:none;"
            >
              {{ line_name }}
            </a>
          {%- endfor -%}
        </div>
      </aside>

      <!-- PRODUCTS GRID -->
      <div>
        <div class="nc-collection-header">
          <span class="nc-collection-count">
            {%- if paginate.pages > 1 -%}
              Página {{ paginate.current_page }} de {{ paginate.pages }} · {{ collection.all_products_count }} productos
            {%- else -%}
              {{ collection.products_count }} producto{% if collection.products_count != 1 %}s{% endif %}
            {%- endif -%}
          </span>
          <select class="nc-sort-select" onchange="location.href=this.value">
            {%- assign sort_by = collection.sort_by | default: collection.default_sort_by -%}
            {%- for option in collection.sort_options -%}
              <option value="{{ collection.url }}?sort_by={{ option.value }}"{% if sort_by == option.value %} selected{% endif %}>
                {{ option.name }}
              </option>
            {%- endfor -%}
          </select>
        </div>

        {%- if collection.products_count == 0 -%}
          <div style="text-align:center;padding:64px 0;">
            <p style="font-family:var(--nc-font-head);font-size:1.5rem;color:var(--nc-text-muted);letter-spacing:.08em;">Sin Productos</p>
            <p style="color:var(--nc-text-muted);margin-top:8px;font-size:.88rem;">Esta colección no tiene productos disponibles actualmente.</p>
            <a href="/collections/all" class="nc-btn nc-btn-outline" style="margin-top:20px;display:inline-flex;">Ver Todo el Catálogo</a>
          </div>
        {%- else -%}
          <div class="nc-product-grid">
            {%- for product in collection.products -%}
              {%- render 'nc-product-card', product: product -%}
            {%- endfor -%}
          </div>

          <!-- PAGINATION -->
          {%- if paginate.pages > 1 -%}
            <div class="nc-pagination">
              {%- if paginate.previous -%}
                <a href="{{ paginate.previous.url }}" class="nc-page-btn" aria-label="Anterior">
                  <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                </a>
              {%- endif -%}

              {%- for part in paginate.parts -%}
                {%- if part.is_link -%}
                  <a href="{{ part.url }}" class="nc-page-btn">{{ part.title }}</a>
                {%- elsif part.title == paginate.current_page -%}
                  <span class="nc-page-btn active">{{ part.title }}</span>
                {%- else -%}
                  <span class="nc-page-btn" style="opacity:.4;pointer-events:none;">{{ part.title }}</span>
                {%- endif -%}
              {%- endfor -%}

              {%- if paginate.next -%}
                <a href="{{ paginate.next.url }}" class="nc-page-btn" aria-label="Siguiente">
                  <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              {%- endif -%}
            </div>
          {%- endif -%}
        {%- endif -%}
      </div>
    </div>
  </div>
</section>

{%- endpaginate -%}

<script>
function ncFilterTag(tag, active) {
  var url = new URL(window.location.href);
  // Construir URL con filtros de tags de Shopify
  var path = window.location.pathname;
  var parts = path.split('/');
  // Simple redirect — para filtros avanzados usar Shopify Storefront API
  location.href = active
    ? '/collections/{{ collection.handle }}/' + tag
    : '/collections/{{ collection.handle }}';
}
<\/script>

{% schema %}
{
  "name": "NC Collection Page",
  "settings": [
    { "type": "checkbox", "id": "show_eyebrow", "label": "Mostrar eyebrow", "default": true },
    { "type": "range", "id": "products_per_page", "label": "Productos por página", "min": 8, "max": 48, "step": 4, "default": 24 }
  ],
  "presets": [{ "name": "NC Collection Page" }]
}
{% endschema %}
`,Rk=`<section class="nc-section">
  <div class="nc-container">
    <div class="nc-section-head">
      <div>
        <span class="nc-eyebrow">{{ section.settings.eyebrow | default: "Más Vendidos" }}</span>
        <h2 class="nc-h2">{{ section.settings.title | default: "Productos Destacados" }}</h2>
      </div>
      {%- if section.settings.view_all_url != blank -%}
        <a href="{{ section.settings.view_all_url }}" class="nc-btn nc-btn-ghost" style="flex-shrink:0;">
          Ver Todos
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      {%- endif -%}
    </div>

    <div class="nc-product-grid">
      {%- for block in section.blocks -%}
        {%- assign product = all_products[block.settings.product] -%}
        {%- if product != blank -%}
          {%- include 'nc-product-card', product: product, badge: block.settings.badge -%}
        {%- endif -%}
      {%- else -%}
        <!-- Fallback: mostrar productos de la colección featured -->
        {%- assign featured = collections['featured'] | default: collections['all'] -%}
        {%- for product in featured.products limit: section.settings.products_per_row | default: 4 -%}
          {%- render 'nc-product-card', product: product -%}
        {%- endfor -%}
      {%- endfor -%}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "NC Featured Products",
  "blocks": [
    {
      "type": "product",
      "name": "Producto",
      "settings": [
        { "type": "product", "id": "product", "label": "Producto" },
        { "type": "text", "id": "badge", "label": "Badge (ej: Nuevo, Pro, -20%)" }
      ]
    }
  ],
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Eyebrow", "default": "Más Vendidos" },
    { "type": "text", "id": "title", "label": "Título", "default": "Productos Destacados" },
    { "type": "url", "id": "view_all_url", "label": "URL Ver Todos" }
  ],
  "presets": [{ "name": "NC Featured Products" }],
  "max_blocks": 8
}
{% endschema %}
`,Fk=`{%- assign current_variant = product.selected_or_first_available_variant -%}
{%- assign product_form_id = 'nc-product-form-' | append: product.id -%}

<!-- BREADCRUMBS -->
<div class="nc-container">
  <nav class="nc-breadcrumbs" aria-label="Breadcrumb">
    <a href="/">Home</a>
    <span class="sep">›</span>
    {%- if collection -%}
      <a href="{{ collection.url }}">{{ collection.title }}</a>
      <span class="sep">›</span>
    {%- endif -%}
    <span class="current">{{ product.title }}</span>
  </nav>
</div>

<!-- PRODUCT MAIN -->
<section class="nc-section">
  <div class="nc-container">
    <div class="nc-product-layout">

      <!-- GALLERY -->
      <div class="nc-product-gallery">
        <div class="nc-gallery-main">
          {%- if product.featured_image -%}
            <img
              id="nc-gallery-main-img"
              src="{{ product.featured_image | image_url: width: 900 }}"
              alt="{{ product.featured_image.alt | default: product.title | escape }}"
              width="900"
              loading="eager"
              fetchpriority="high"
            >
          {%- else -%}
            <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;min-height:400px;">
              <span style="font-family:var(--nc-font-head);font-size:5rem;color:var(--nc-navy);opacity:.2;">NC</span>
            </div>
          {%- endif -%}
        </div>

        {%- if product.images.size > 1 -%}
          <div class="nc-gallery-thumbs">
            {%- for image in product.images -%}
              <div
                class="nc-gallery-thumb{% if forloop.first %} active{% endif %}"
                data-src="{{ image | image_url: width: 900 }}"
                data-alt="{{ image.alt | default: product.title | escape }}"
                role="button"
                tabindex="0"
                aria-label="Imagen {{ forloop.index }}"
              >
                <img
                  src="{{ image | image_url: width: 144 }}"
                  alt="{{ image.alt | default: product.title | escape }}"
                  loading="lazy"
                  width="72"
                  height="72"
                >
              </div>
            {%- endfor -%}
          </div>
        {%- endif -%}
      </div>

      <!-- INFO -->
      <div class="nc-product-info">
        {%- if collection -%}
          <a href="{{ collection.url }}" class="nc-product-collection-link">
            ← {{ collection.title }}
          </a>
        {%- endif -%}

        {%- if product.tags contains 'b2b' or product.tags contains 'pro-salon' -%}
          <div class="nc-pro-badge" style="margin-bottom:14px;">
            <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Producto Profesional
          </div>
        {%- endif -%}

        <h1 class="nc-product-title">{{ product.title }}</h1>

        {%- if product.description contains '<!--subtitle-->' -%}
          {%- assign subtitle = product.description | split: '<!--subtitle-->' | last | split: '<!--/subtitle-->' | first -%}
          <p class="nc-product-subtitle">{{ subtitle }}</p>
        {%- elsif product.metafields.neurone.subcollection -%}
          <p class="nc-product-subtitle">{{ product.metafields.neurone.subcollection }}</p>
        {%- endif -%}

        <!-- PRICE -->
        <div class="nc-product-price-block">
          <span class="nc-product-price" id="nc-price-display">
            {{ current_variant.price | money }}
          </span>
          {%- if current_variant.compare_at_price > current_variant.price -%}
            <span class="nc-price-compare">{{ current_variant.compare_at_price | money }}</span>
            <span class="nc-badge-sale" style="font-family:var(--nc-font-label);font-size:.6rem;letter-spacing:.12em;padding:3px 8px;border-radius:2px;background:rgba(180,30,30,.85);color:white;">
              Ahorro {{ current_variant.compare_at_price | minus: current_variant.price | money }}
            </span>
          {%- endif -%}
        </div>

        <!-- PRODUCT FORM -->
        {%- form 'product', product, id: product_form_id, data-product-form: '' -%}

          <input type="hidden" name="id" value="{{ current_variant.id }}" id="nc-variant-id">

          <!-- VARIANTS -->
          {%- unless product.has_only_default_variant -%}
            <div class="nc-product-variants">
              {%- for option in product.options_with_values -%}
                <div style="margin-bottom:16px;">
                  <div class="nc-variant-label">
                    <span>{{ option.name }}</span>
                    <span id="nc-selected-{{ option.position }}" style="color:var(--nc-white);">
                      {{ option.selected_value }}
                    </span>
                  </div>
                  <div class="nc-variant-options">
                    {%- for value in option.values -%}
                      <button
                        type="button"
                        class="nc-variant-btn{% if option.selected_value == value %} selected{% endif %}"
                        data-option="{{ option.position }}"
                        data-value="{{ value | escape }}"
                        onclick="ncSelectVariant(this)"
                      >
                        {{ value }}
                      </button>
                    {%- endfor -%}
                  </div>
                </div>
              {%- endfor -%}
            </div>
          {%- endunless -%}

          <!-- QUANTITY + ADD TO CART -->
          <div class="nc-quantity-row">
            <div class="nc-quantity">
              <button type="button" class="nc-qty-btn" data-qty-minus aria-label="Reducir cantidad">−</button>
              <input class="nc-qty-input" type="number" name="quantity" value="1" min="1" max="99" aria-label="Cantidad">
              <button type="button" class="nc-qty-btn" data-qty-plus aria-label="Aumentar cantidad">+</button>
            </div>

            {%- if current_variant.available -%}
              <button
                type="submit"
                name="add"
                class="nc-btn nc-btn-primary nc-add-to-cart"
                data-add-to-cart-btn
              >
                Agregar al Carrito
              </button>
            {%- else -%}
              <button type="button" class="nc-btn nc-btn-outline nc-add-to-cart" disabled style="opacity:.5;cursor:not-allowed;">
                Agotado
              </button>
            {%- endif -%}
          </div>

          <!-- FORMAT / SIZE INFO -->
          {%- if product.metafields.neurone.format != blank or product.metafields.neurone.size != blank -%}
            <p style="font-family:var(--nc-font-label);font-size:.62rem;letter-spacing:.15em;color:var(--nc-text-muted);margin-bottom:16px;">
              {%- if product.metafields.neurone.format != blank -%}
                Formato: {{ product.metafields.neurone.format }}
              {%- endif -%}
              {%- if product.metafields.neurone.size != blank -%}
                &nbsp;·&nbsp; {{ product.metafields.neurone.size }}
              {%- endif -%}
            </p>
          {%- endif -%}

        {%- endform -%}

        <!-- BENEFITS -->
        {%- if product.metafields.neurone.benefit_claims != blank -%}
          <div class="nc-product-benefits">
            <div class="nc-filter-title" style="margin-bottom:14px;">Beneficios Clave</div>
            {%- assign claims = product.metafields.neurone.benefit_claims | split: ' | ' -%}
            {%- for claim in claims -%}
              <div class="nc-benefit-item">
                <div class="nc-benefit-icon">
                  <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <p class="nc-benefit-text">{{ claim }}</p>
              </div>
            {%- endfor -%}
          </div>
        {%- endif -%}

        <!-- SHIPPING / TRUST -->
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:20px;padding:16px;background:var(--nc-bg-card);border:1px solid var(--nc-border);border-radius:var(--nc-radius);">
          <div class="nc-trust-item">
            <svg class="nc-trust-icon" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <span class="nc-trust-text">Envío rápido · South &amp; Central Florida</span>
          </div>
          <div class="nc-trust-item">
            <svg class="nc-trust-icon" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span class="nc-trust-text">Producto profesional · Grado salón</span>
          </div>
        </div>
      </div>
    </div>

    <!-- PRODUCT TABS -->
    <div class="nc-product-tabs" style="margin-top:64px;">
      <div class="nc-tabs-nav">
        <button class="nc-tab-btn active" data-tab="nc-tab-desc">Descripción</button>
        {%- if product.metafields.neurone.key_ingredients != blank -%}
          <button class="nc-tab-btn" data-tab="nc-tab-ingredients">Ingredientes</button>
        {%- endif -%}
        <button class="nc-tab-btn" data-tab="nc-tab-how">Cómo Usar</button>
        <button class="nc-tab-btn" data-tab="nc-tab-shipping">Envío</button>
      </div>

      <div id="nc-tab-desc" class="nc-tab-panel active">
        <div style="max-width:800px;">
          {{ product.description }}
        </div>
      </div>

      {%- if product.metafields.neurone.key_ingredients != blank -%}
        <div id="nc-tab-ingredients" class="nc-tab-panel">
          <div style="max-width:800px;">
            <p><strong style="color:var(--nc-white);">Ingredientes Clave:</strong></p>
            <p>{{ product.metafields.neurone.key_ingredients }}</p>
          </div>
        </div>
      {%- endif -%}

      <div id="nc-tab-how" class="nc-tab-panel">
        <div style="max-width:800px;">
          <p>Aplicar sobre cabello húmedo o seco según el producto. Para mejores resultados, seguir las instrucciones específicas de cada tratamiento. Consultar con un profesional para protocolos avanzados.</p>
          <p style="margin-top:16px;">¿Tienes dudas? <a href="https://wa.me/{{ shop.metafields.neurone.whatsapp }}" style="color:var(--nc-navy-glow)">Contáctanos por WhatsApp</a> y te asesoramos.</p>
        </div>
      </div>

      <div id="nc-tab-shipping" class="nc-tab-panel">
        <div style="max-width:800px;">
          <p><strong style="color:var(--nc-white);">Zona de entrega:</strong> South &amp; Central Florida</p>
          <p>Envío gratis en pedidos superiores a $75. Tiempo de entrega estimado: 2-5 días hábiles dentro del área de cobertura.</p>
          <p style="margin-top:16px;"><strong style="color:var(--nc-white);">Pedidos al por mayor:</strong> Contactar a través del <a href="/pages/pro-portal" style="color:var(--nc-navy-glow)">Portal Profesional</a>.</p>
        </div>
      </div>
    </div>

    <!-- RELATED PRODUCTS -->
    {%- if product.collections.first.products.size > 1 -%}
      <div style="margin-top:80px;">
        <div class="nc-section-head">
          <h2 class="nc-h2" style="font-size:clamp(1.4rem,3vw,2rem);">También de {{ product.collections.first.title }}</h2>
        </div>
        <div class="nc-product-grid">
          {%- for related in product.collections.first.products limit: 4 -%}
            {%- unless related.id == product.id -%}
              {%- render 'nc-product-card', product: related -%}
            {%- endunless -%}
          {%- endfor -%}
        </div>
      </div>
    {%- endif -%}
  </div>
</section>

<!-- VARIANT SELECTION JS -->
<script>
  // Mapa de variantes para selección dinámica
  var ncProductVariants = {{ product.variants | json }};

  function ncSelectVariant(btn) {
    var optionPos = btn.dataset.option;
    var optionValue = btn.dataset.value;

    // Update UI de la opción
    var siblings = btn.parentElement.querySelectorAll('.nc-variant-btn');
    siblings.forEach(function(s) { s.classList.remove('selected'); });
    btn.classList.add('selected');

    // Actualizar label selected
    var labelEl = document.getElementById('nc-selected-' + optionPos);
    if (labelEl) labelEl.textContent = optionValue;

    // Encontrar variante que matchea todas las opciones seleccionadas
    var selected = {};
    document.querySelectorAll('.nc-variant-btn.selected').forEach(function(b) {
      selected[parseInt(b.dataset.option)] = b.dataset.value;
    });

    var matchedVariant = ncProductVariants.find(function(v) {
      return v.options.every(function(opt, idx) {
        return !selected[idx + 1] || selected[idx + 1] === opt;
      });
    });

    if (matchedVariant) {
      // Update hidden input
      var idInput = document.getElementById('nc-variant-id');
      if (idInput) idInput.value = matchedVariant.id;

      // Update precio
      var priceEl = document.getElementById('nc-price-display');
      if (priceEl) {
        priceEl.textContent = '$' + (matchedVariant.price / 100).toFixed(2);
      }

      // Update imagen si la variante tiene imagen
      if (matchedVariant.featured_image) {
        var mainImg = document.getElementById('nc-gallery-main-img');
        if (mainImg) {
          mainImg.src = matchedVariant.featured_image.src;
        }
      }

      // Update botón
      var addBtn = document.querySelector('[data-add-to-cart-btn]');
      if (addBtn) {
        addBtn.disabled = !matchedVariant.available;
        addBtn.textContent = matchedVariant.available ? 'Agregar al Carrito' : 'Agotado';
      }
    }
  }
<\/script>
`,Dk=`<section class="nc-section">
  <div class="nc-container" style="max-width:{{ section.settings.max_width | default: '840px' }}">
    {%- if section.settings.show_title -%}
      <h1 class="nc-h1" style="margin-bottom:32px;">{{ page.title }}</h1>
      <div class="nc-divider-line"></div>
    {%- endif -%}
    <div class="nc-page-content">
      {{ page.content }}
    </div>
  </div>
</section>

<style>
  .nc-page-content h1, .nc-page-content h2, .nc-page-content h3 {
    font-family: var(--nc-font-head);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--nc-white);
    margin: 32px 0 16px;
    line-height: 1.1;
  }
  .nc-page-content h1 { font-size: clamp(2rem, 4vw, 3.2rem); }
  .nc-page-content h2 { font-size: clamp(1.4rem, 3vw, 2.2rem); }
  .nc-page-content h3 { font-size: 1.2rem; }
  .nc-page-content p { font-size: 0.95rem; line-height: 1.8; color: var(--nc-text); margin-bottom: 18px; }
  .nc-page-content a { color: var(--nc-navy-glow); text-decoration: underline; }
  .nc-page-content a:hover { color: var(--nc-white); }
  .nc-page-content ul, .nc-page-content ol { padding-left: 20px; color: var(--nc-text); font-size: 0.92rem; margin-bottom: 18px; }
  .nc-page-content li { margin-bottom: 8px; line-height: 1.65; }
  .nc-page-content img { border-radius: var(--nc-radius-lg); margin: 24px 0; border: 1px solid var(--nc-border); }
  .nc-page-content table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  .nc-page-content th { background: var(--nc-bg-elevated); border: 1px solid var(--nc-border); padding: 10px 14px; font-family: var(--nc-font-label); font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--nc-white); text-align: left; }
  .nc-page-content td { border: 1px solid var(--nc-border); padding: 10px 14px; font-size: 0.88rem; color: var(--nc-text); }
  .nc-page-content tr:nth-child(even) td { background: rgba(255,255,255,0.02); }
  .nc-page-content blockquote { border-left: 3px solid var(--nc-navy); padding: 12px 20px; background: var(--nc-navy-dim); border-radius: 0 var(--nc-radius) var(--nc-radius) 0; margin: 24px 0; font-style: italic; color: var(--nc-text); }
</style>

{% schema %}
{
  "name": "NC Page Content",
  "settings": [
    { "type": "checkbox", "id": "show_title", "label": "Mostrar título de página", "default": true },
    { "type": "select", "id": "max_width", "label": "Ancho máximo del contenido",
      "options": [
        { "value": "640px", "label": "Estrecho (640px)" },
        { "value": "840px", "label": "Medio (840px)" },
        { "value": "1080px", "label": "Ancho (1080px)" },
        { "value": "100%", "label": "Completo" }
      ],
      "default": "840px"
    }
  ],
  "presets": [{ "name": "NC Page Content" }]
}
{% endschema %}
`,Mk=`<div class="nc-sales-layer-section" style="width:100%;">
  {{ section.settings.content }}
</div>

{% schema %}
{
  "name": "NC Sales Layer",
  "settings": [
    {
      "type": "html",
      "id": "content",
      "label": "Contenido HTML",
      "info": "Pega aquí el HTML generado por WebLab SalesLayer. Incluye estilos inline."
    }
  ],
  "presets": [{ "name": "NC Sales Layer" }]
}
{% endschema %}
`,Ik=`<section class="nc-section-sm">
  <div class="nc-container">
    <div class="nc-science-strip nc-reveal">
      <div class="nc-science-item">
        <span class="nc-science-num">Nano</span>
        <span class="nc-science-label">Tribología Capilar</span>
        <p class="nc-science-desc">Tecnología de fricción a escala nanométrica que regenera la cutícula sin silicones.</p>
      </div>
      <div class="nc-science-item">
        <span class="nc-science-num">Neuro</span>
        <span class="nc-science-label">Cosmética Aplicada</span>
        <p class="nc-science-desc">Activos que responden al estado del cuero cabelludo. Adaptación inteligente.</p>
      </div>
      <div class="nc-science-item">
        <span class="nc-science-num">Pro</span>
        <span class="nc-science-label">Grado Profesional</span>
        <p class="nc-science-desc">Misma formulación que usan los salones top de South Florida. Sin diluir.</p>
      </div>
      <div class="nc-science-item">
        <span class="nc-science-num">0</span>
        <span class="nc-science-label">Compromisos</span>
        <p class="nc-science-desc">Sin sulfatos agresivos, sin parabenos, sin resultados a medias.</p>
      </div>
    </div>
  </div>
</section>

{% schema %}
{
  "name": "NC Science Strip",
  "presets": [{ "name": "NC Science Strip" }]
}
{% endschema %}
`,Bk=`{%- assign default_variant = product.selected_or_first_available_variant -%}
<div class="nc-product-card nc-reveal">
  <div class="nc-product-card-img">

    {%- if badge != blank -%}
      <span class="nc-product-card-badge nc-badge-new">{{ badge }}</span>
    {%- elsif product.tags contains 'new' -%}
      <span class="nc-product-card-badge nc-badge-new">Nuevo</span>
    {%- elsif product.tags contains 'b2b' or product.tags contains 'pro-salon' -%}
      <span class="nc-product-card-badge nc-badge-pro">Pro</span>
    {%- elsif product.compare_at_price > product.price -%}
      <span class="nc-product-card-badge nc-badge-sale">
        -{{ product.compare_at_price | minus: product.price | times: 100 | divided_by: product.compare_at_price | round }}%
      </span>
    {%- endif -%}

    {%- if product.featured_image -%}
      <a href="{{ product.url }}">
        <img
          src="{{ product.featured_image | image_url: width: 540 }}"
          alt="{{ product.featured_image.alt | default: product.title | escape }}"
          loading="lazy"
          width="540"
          height="540"
        >
      </a>
    {%- else -%}
      <a href="{{ product.url }}" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;aspect-ratio:1/1;background:var(--nc-bg-elevated);">
        <span style="font-family:var(--nc-font-head);font-size:3rem;color:var(--nc-navy);opacity:.3;">NC</span>
      </a>
    {%- endif -%}

    {%- if default_variant.available -%}
      <div class="nc-product-card-quick">
        <button
          class="nc-btn nc-btn-primary nc-btn-full"
          data-quick-add="{{ default_variant.id }}"
          style="padding:10px 14px;font-size:.6rem;"
        >
          Agregar
        </button>
      </div>
    {%- endif -%}
  </div>

  <div class="nc-product-card-body">
    {%- assign col_tag = product.tags | where: "contains", "collection_" | first -%}
    <div class="nc-product-card-collection">
      {{- product.type | default: product.collections.first.title -}}
    </div>

    <a href="{{ product.url }}">
      <h3 class="nc-product-card-name">{{ product.title }}</h3>
    </a>

    {%- if product.description != blank -%}
      <p class="nc-product-card-desc">{{ product.description | strip_html }}</p>
    {%- endif -%}

    <div class="nc-product-card-footer">
      <div>
        {%- if product.compare_at_price > product.price -%}
          <span class="nc-price-compare">{{ product.compare_at_price | money }}</span>
        {%- endif -%}
        <span class="nc-price">{{ product.price | money }}</span>
      </div>

      <a href="{{ product.url }}" class="nc-btn nc-btn-outline" style="padding:8px 14px;font-size:.6rem;">
        Ver
        <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</div>
`,Uk=`{
  "sections": {
    "nc-hero": {
      "type": "nc-hero",
      "settings": {}
    },
    "nc-trust": {
      "type": "nc-trust-strip",
      "settings": {}
    },
    "nc-collections": {
      "type": "nc-collection-grid",
      "settings": {
        "eyebrow": "Líneas de Tratamiento",
        "title": "Encuentra Tu Solución"
      }
    },
    "nc-science": {
      "type": "nc-science-strip",
      "settings": {}
    },
    "nc-featured": {
      "type": "nc-featured-products",
      "settings": {
        "eyebrow": "Más Vendidos",
        "title": "Productos Destacados",
        "view_all_url": "/collections/all"
      }
    }
  },
  "order": [
    "nc-hero",
    "nc-trust",
    "nc-collections",
    "nc-science",
    "nc-featured"
  ]
}
`,Vk=`{
  "sections": {
    "nc-product": {
      "type": "nc-product-detail",
      "settings": {}
    }
  },
  "order": ["nc-product"]
}
`,qk=`{
  "sections": {
    "nc-collection": {
      "type": "nc-collection-page",
      "settings": {
        "products_per_page": 24
      }
    }
  },
  "order": ["nc-collection"]
}
`,Gk=`{
  "sections": {
    "nc-page": {
      "type": "nc-page-content",
      "settings": {
        "show_title": true,
        "max_width": "840px"
      }
    }
  },
  "order": ["nc-page"]
}
`,Hk=`{
  "sections": {
    "nc-sales-layer": {
      "type": "nc-sales-layer",
      "settings": {}
    }
  },
  "order": ["nc-sales-layer"]
}
`,Wk=`{% layout 'theme' %}

<section class="nc-section">
  <div class="nc-container" style="max-width:860px;">
    <h1 class="nc-h1" style="margin-bottom:40px;">Tu Carrito</h1>

    {% if cart.item_count == 0 %}
      <div style="text-align:center;padding:80px 0;">
        <svg width="48" height="48" fill="none" stroke="var(--nc-navy-glow)" stroke-width="1.2" viewBox="0 0 24 24" style="margin:0 auto 20px;display:block;opacity:.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <p style="font-family:var(--nc-font-head);font-size:1.5rem;color:var(--nc-text-muted);letter-spacing:.08em;margin-bottom:8px;">Carrito Vacío</p>
        <p style="color:var(--nc-text-muted);font-size:.88rem;margin-bottom:28px;">Agrega productos para continuar</p>
        <a href="/collections/all" class="nc-btn nc-btn-primary nc-btn-lg">Ver Catálogo</a>
      </div>

    {% else %}
      <form action="/cart" method="post">
        <!-- Items -->
        <div style="display:flex;flex-direction:column;gap:0;border:1px solid var(--nc-border);border-radius:var(--nc-radius-lg);overflow:hidden;margin-bottom:24px;">
          {% for item in cart.items %}
            <div style="display:grid;grid-template-columns:80px 1fr auto;gap:20px;align-items:center;padding:20px;border-bottom:1px solid var(--nc-border);">
              <!-- Image -->
              <a href="{{ item.url }}" style="display:block;border-radius:var(--nc-radius);overflow:hidden;border:1px solid var(--nc-border);">
                <img src="{{ item.featured_image | image_url: width: 160 }}" alt="{{ item.title }}" width="80" height="80" style="width:80px;height:80px;object-fit:cover;">
              </a>
              <!-- Info -->
              <div>
                <a href="{{ item.url }}" style="font-family:var(--nc-font-body);font-size:.9rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--nc-white);">{{ item.product_title }}</a>
                {% unless item.variant_title == 'Default Title' %}
                  <p style="font-size:.78rem;color:var(--nc-text-muted);margin-top:2px;">{{ item.variant_title }}</p>
                {% endunless %}
                <p style="font-family:var(--nc-font-head);font-size:1.1rem;color:var(--nc-navy-glow);margin-top:6px;">{{ item.final_line_price | money }}</p>
              </div>
              <!-- Qty + Remove -->
              <div style="display:flex;flex-direction:column;align-items:flex-end;gap:12px;">
                <div class="nc-quantity" style="border-color:var(--nc-border);">
                  <button type="button" class="nc-qty-btn" onclick="ncCartUpdate('{{ item.key }}', {{ item.quantity | minus: 1 }})">−</button>
                  <span style="width:40px;text-align:center;color:var(--nc-white);font-size:.9rem;">{{ item.quantity }}</span>
                  <button type="button" class="nc-qty-btn" onclick="ncCartUpdate('{{ item.key }}', {{ item.quantity | plus: 1 }})">+</button>
                </div>
                <button type="button" onclick="ncCartUpdate('{{ item.key }}', 0)" style="font-family:var(--nc-font-label);font-size:.58rem;letter-spacing:.15em;text-transform:uppercase;color:var(--nc-text-muted);background:transparent;cursor:pointer;border:none;padding:0;transition:color .15s;" onmouseover="this.style.color='#f87171'" onmouseout="this.style.color='var(--nc-text-muted)'">Eliminar</button>
              </div>
            </div>
          {% endfor %}
        </div>

        <!-- Summary -->
        <div style="display:grid;grid-template-columns:1fr 340px;gap:24px;align-items:start;">
          <div>
            <div style="padding:20px;background:var(--nc-bg-card);border:1px solid var(--nc-border);border-radius:var(--nc-radius-lg);">
              <p class="nc-filter-title" style="margin-bottom:12px;">Nota del pedido</p>
              <textarea name="note" rows="3" placeholder="Instrucciones especiales (opcional)" style="width:100%;background:var(--nc-bg);border:1px solid var(--nc-border);border-radius:var(--nc-radius);padding:10px 14px;color:var(--nc-text);font-family:var(--nc-font-body);font-size:.85rem;resize:none;transition:border-color .15s;" onfocus="this.style.borderColor='var(--nc-navy)'" onblur="this.style.borderColor='var(--nc-border)'">{{ cart.note }}</textarea>
            </div>
          </div>
          <div style="padding:24px;background:var(--nc-bg-card);border:1px solid var(--nc-navy-border);border-radius:var(--nc-radius-lg);position:sticky;top:calc(var(--nc-header-h)+24px);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <span style="font-family:var(--nc-font-label);font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--nc-text-muted);">Subtotal</span>
              <span style="font-family:var(--nc-font-head);font-size:1.6rem;color:var(--nc-white);">{{ cart.total_price | money }}</span>
            </div>
            <p style="font-size:.75rem;color:var(--nc-text-muted);margin-bottom:20px;">Impuestos y envío calculados al finalizar compra.</p>
            <a href="/checkout" class="nc-btn nc-btn-primary nc-btn-full nc-btn-lg" style="margin-bottom:10px;display:flex;">
              Finalizar Compra
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/collections/all" class="nc-btn nc-btn-outline nc-btn-full" style="display:flex;">Seguir Comprando</a>
          </div>
        </div>
      </form>
    {% endif %}
  </div>
</section>

<script>
function ncCartUpdate(key, qty) {
  fetch('/cart/change.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: key, quantity: qty })
  }).then(() => location.reload());
}
<\/script>
`,ca=[{key:"assets/base.css",value:Sk,description:"CSS base"},{key:"assets/theme.js",value:Ck,description:"JavaScript del theme"},{key:"layout/theme.liquid",value:Ek,description:"Layout principal"},{key:"config/settings_schema.json",value:zk,description:"Schema de configuración"},{key:"config/settings_data.json",value:Ak,description:"Datos de configuración"},{key:"locales/es.default.json",value:Nk,description:"Textos en español"},{key:"sections/nc-header.liquid",value:jk,description:"Header + Nav + Cart Drawer"},{key:"sections/nc-footer.liquid",value:$k,description:"Footer + Newsletter"},{key:"sections/nc-hero.liquid",value:Pk,description:"Hero homepage"},{key:"sections/nc-trust-strip.liquid",value:Tk,description:"Trust strip"},{key:"sections/nc-collection-grid.liquid",value:Ok,description:"Grid de colecciones"},{key:"sections/nc-collection-page.liquid",value:Lk,description:"Página de colección + filtros"},{key:"sections/nc-featured-products.liquid",value:Rk,description:"Productos destacados"},{key:"sections/nc-product-detail.liquid",value:Fk,description:"Página de producto"},{key:"sections/nc-page-content.liquid",value:Dk,description:"Contenido de páginas"},{key:"sections/nc-sales-layer.liquid",value:Mk,description:"Sales Layer nativo"},{key:"sections/nc-science-strip.liquid",value:Ik,description:"Science strip"},{key:"snippets/nc-product-card.liquid",value:Bk,description:"Tarjeta de producto"},{key:"templates/index.json",value:Uk,description:"Template: Homepage"},{key:"templates/product.json",value:Vk,description:"Template: Producto"},{key:"templates/collection.json",value:qk,description:"Template: Colección"},{key:"templates/page.json",value:Gk,description:"Template: Página"},{key:"templates/page.sales-layer.json",value:Hk,description:"Template: Sales Layer"},{key:"templates/cart.liquid",value:Wk,description:"Página de carrito"}],Kk="Neurone Custom Theme v1.0",Mo=ca.length;function Pg(n){return new Promise(t=>setTimeout(t,n))}async function qs(n,t,r,a={}){const c=await fetch("/api/shopify-theme",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:n,token:t,action:r,payload:a})}),p=await c.json();if(!c.ok)throw new Error(p.error||`HTTP ${c.status}`);return p}function Yk(){const{shop:n,token:t,connected:r}=il(),[a,c]=C.useState("idle"),[p,u]=C.useState([]),[f,g]=C.useState(null),[h,y]=C.useState(!0),[b,v]=C.useState(Kk),[_,k]=C.useState(ca.map(U=>({file:U,status:"idle"}))),[z,$]=C.useState(0),[S,T]=C.useState(0),[M,D]=C.useState(""),[F,X]=C.useState(""),[W,Y]=C.useState(!1),[ve,fe]=C.useState(!1),[De,G]=C.useState(""),[ue,je]=C.useState([]),Re=C.useRef(!1),ge=C.useCallback(U=>{je(ae=>[...ae.slice(-99),`${new Date().toLocaleTimeString("es")} — ${U}`])},[]),le=C.useCallback((U,ae,pe)=>{k(Ne=>Ne.map(_e=>_e.file.key===U?{..._e,status:ae,error:pe}:_e))},[]),B=C.useCallback(async()=>{if(!(!n||!t)){c("fetching_themes"),G("");try{const ae=(await qs(n,t,"list_themes")).themes??[];u(ae.sort((pe,Ne)=>pe.role==="main"?-1:1)),ge(`${ae.length} themes encontrados en la tienda`),c("idle")}catch(U){const ae=U instanceof Error?U.message:"Error desconocido";G(`Error cargando themes: ${ae}`),c("error")}}},[n,t,ge]),ee=C.useCallback(async()=>{var Pe;if(!n||!t)return;Re.current=!1,G(""),$(0),T(0),je([]),k(ca.map(Me=>({file:Me,status:"idle"})));let U=f;if(h||!U){c("creating_theme"),ge(`Creando theme "${b}"...`);try{if(U=(Pe=(await qs(n,t,"create_theme",{name:b})).theme)==null?void 0:Pe.id,!U)throw new Error("Shopify no devolvió ID del theme");ge(`Theme creado → ID: ${U}`),ge("Esperando que Shopify procese el theme..."),await Pg(3500)}catch(Me){const Ze=Me instanceof Error?Me.message:"Error desconocido";G(`Error creando theme: ${Ze}`),c("error");return}}c("deploying"),ge(`Deployando ${Mo} archivos...`);let ae=0,pe=0;for(const Me of _){if(Re.current){ge("Deploy cancelado por el usuario");break}const{file:Ze}=Me;le(Ze.key,"pending");try{await qs(n,t,"put_asset",{theme_id:U,key:Ze.key,value:Ze.value}),le(Ze.key,"success"),ae++,$(ae),ge(`✓ ${Ze.key}`)}catch(en){const xt=en instanceof Error?en.message:"Error";le(Ze.key,"error",xt),pe++,T(pe),ge(`✗ ${Ze.key} — ${xt}`)}await Pg(180)}if(ve&&!Re.current&&pe===0){ge("Publicando theme como activo...");try{await qs(n,t,"publish_theme",{theme_id:U}),ge("✓ Theme publicado como theme activo")}catch(Me){const Ze=Me instanceof Error?Me.message:"Error";ge(`✗ Error publicando: ${Ze}`)}}const _e=n.replace(/^https?:\/\//,"").replace(/\/$/,"").replace(".myshopify.com","");D(`https://${_e}.myshopify.com/admin/themes/${U}/editor`),X(`https://${_e}.myshopify.com/?preview_theme_id=${U}`),ge(`Deploy completado: ${ae} éxitos, ${pe} errores`),c("done")},[n,t,h,f,b,_,ve,le,ge]),Q=_.reduce((U,ae)=>(U[ae.status]=(U[ae.status]||0)+1,U),{}),N=Mo>0?Math.round((z+S)/Mo*100):0,I=()=>{Re.current=!0,c("idle"),k(ca.map(U=>({file:U,status:"idle"}))),$(0),T(0),G(""),je([])},ye=({status:U})=>U==="success"?s.jsx(co,{size:14,className:"text-green-400"}):U==="error"?s.jsx(da,{size:14,className:"text-red-400"}):U==="pending"?s.jsx($n,{size:14}):U==="skipped"?s.jsx(In,{size:14,className:"text-yellow-500"}):s.jsx("div",{className:"w-3.5 h-3.5 rounded-full border border-white/10"});return r?s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsxs("div",{className:"flex items-start justify-between gap-4",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx(gr,{size:18,className:"text-[#0076A8]"}),s.jsx("h2",{className:"text-sm font-bold tracking-widest uppercase text-white",children:"Theme Deploy"}),s.jsx(jn,{color:"#0076A8",children:"F9"})]}),s.jsxs("p",{className:"text-xs text-zinc-400",children:[Mo," archivos · Neurone Custom Theme · Full-width, sin Dawn"]})]}),s.jsxs("div",{className:"flex gap-2",children:[a!=="idle"&&a!=="deploying"&&s.jsxs("button",{onClick:I,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-zinc-400 hover:text-white hover:border-white/20 transition-colors",children:[s.jsx(kd,{size:13}),"Reset"]}),p.length===0&&a==="idle"&&s.jsxs("button",{onClick:B,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0076A8]/20 border border-[#0076A8]/30 text-xs text-[#5BB8E8] hover:bg-[#0076A8]/30 transition-colors",children:[s.jsx(ao,{size:13}),"Cargar Themes"]})]})]}),De&&s.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-xs",children:[s.jsx(da,{size:16,className:"flex-shrink-0 mt-0.5"}),De]}),(a==="idle"||a==="fetching_themes")&&s.jsxs("div",{className:"flex flex-col gap-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5",children:[s.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-zinc-400",children:"Configuración"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{onClick:()=>y(!0),className:J("flex-1 py-2.5 rounded-lg border text-xs font-medium tracking-wide uppercase transition-all",h?"bg-[#0076A8]/20 border-[#0076A8]/50 text-[#5BB8E8]":"bg-transparent border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-300"),children:"+ Crear theme nuevo"}),s.jsx("button",{onClick:()=>{y(!1),p.length===0&&B()},className:J("flex-1 py-2.5 rounded-lg border text-xs font-medium tracking-wide uppercase transition-all",h?"bg-transparent border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-300":"bg-[#0076A8]/20 border-[#0076A8]/50 text-[#5BB8E8]"),children:"Actualizar existente"})]}),h&&s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5",children:"Nombre del theme"}),s.jsx("input",{type:"text",value:b,onChange:U=>v(U.target.value),className:"w-full bg-zinc-800/80 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#0076A8]/60 transition-colors"})]}),!h&&s.jsxs("div",{children:[s.jsxs("label",{className:"block text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5",children:["Theme destino",a==="fetching_themes"&&s.jsx($n,{size:12})]}),p.length>0?s.jsxs("select",{value:f??"",onChange:U=>g(Number(U.target.value)),className:"w-full bg-zinc-800/80 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#0076A8]/60 transition-colors",children:[s.jsx("option",{value:"",children:"— Seleccionar theme —"}),p.map(U=>s.jsxs("option",{value:U.id,children:[U.name," ",U.role==="main"?"(Activo)":""]},U.id))]}):s.jsxs("button",{onClick:B,disabled:a==="fetching_themes",className:"flex items-center gap-2 text-xs text-[#5BB8E8] hover:text-white transition-colors",children:[a==="fetching_themes"?s.jsx($n,{size:12}):s.jsx(ao,{size:12}),"Cargar themes de la tienda"]})]}),s.jsxs("label",{className:"flex items-center gap-3 cursor-pointer group",children:[s.jsx("div",{onClick:()=>fe(!ve),className:J("w-8 h-4 rounded-full relative transition-colors cursor-pointer flex-shrink-0",ve?"bg-[#0076A8]":"bg-zinc-700"),children:s.jsx("div",{className:J("absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform",ve?"translate-x-4":"translate-x-0.5")})}),s.jsxs("div",{children:[s.jsx("span",{className:"text-xs text-zinc-300",children:"Publicar al terminar"}),s.jsx("p",{className:"text-[10px] text-zinc-500",children:"Reemplaza el theme activo. Solo si 0 errores."})]})]}),ve&&s.jsxs("div",{className:"flex items-start gap-2 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300",children:[s.jsx(In,{size:14,className:"flex-shrink-0 mt-0.5"}),s.jsxs("span",{children:["Publicar reemplaza el theme activo en ",s.jsx("strong",{children:n}),". Revisa siempre en preview primero."]})]})]}),a==="idle"&&s.jsxs("button",{onClick:()=>Y(!W),className:"flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors",children:[s.jsx(Lx,{size:13}),Mo," archivos incluidos",W?s.jsx(qd,{size:13}):s.jsx(Sa,{size:13})]}),W&&a==="idle"&&s.jsx("div",{className:"rounded-xl border border-white/5 overflow-hidden",children:ca.map((U,ae)=>s.jsxs("div",{className:J("flex items-center justify-between px-3 py-2 text-xs",ae%2===0?"bg-zinc-900/30":"bg-transparent","border-b border-white/[0.03] last:border-0"),children:[s.jsx("span",{className:"text-zinc-400 font-mono truncate",children:U.key}),s.jsxs("span",{className:"text-zinc-600 flex-shrink-0 ml-4",children:[(U.value.length/1024).toFixed(1),"kb"]})]},U.key))}),a==="idle"&&s.jsxs("button",{onClick:ee,disabled:!h&&!f,className:J("flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all",!h&&!f?"bg-zinc-800 text-zinc-600 cursor-not-allowed":"bg-[#0076A8] hover:bg-[#0095D4] text-white shadow-lg shadow-[#0076A8]/20 hover:shadow-[#0076A8]/40 hover:-translate-y-0.5"),children:[s.jsx(pa,{size:16}),"Deploy Theme Neurone"]}),(a==="creating_theme"||a==="deploying")&&s.jsxs("div",{className:"flex flex-col gap-4 p-4 bg-zinc-900/50 rounded-xl border border-white/5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx($n,{size:16}),s.jsx("span",{className:"text-sm text-white font-medium",children:a==="creating_theme"?"Creando theme...":`Deployando archivos (${z}/${Mo})`})]}),s.jsx("button",{onClick:()=>{Re.current=!0},className:"text-xs text-zinc-500 hover:text-red-400 transition-colors",children:"Cancelar"})]}),a==="deploying"&&s.jsxs("div",{children:[s.jsx("div",{className:"h-1.5 rounded-full bg-zinc-800 overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-[#0076A8] to-[#5BB8E8] rounded-full transition-all duration-300",style:{width:`${N}%`}})}),s.jsxs("div",{className:"flex justify-between mt-1.5",children:[s.jsxs("span",{className:"text-[10px] text-zinc-500",children:[N,"%"]}),s.jsx("span",{className:"text-[10px] text-zinc-500",children:S>0&&s.jsxs("span",{className:"text-red-400",children:[S," error",S>1?"es":""]})})]})]}),s.jsx("div",{className:"max-h-56 overflow-y-auto flex flex-col gap-0.5 pr-1",children:_.map(U=>s.jsxs("div",{className:J("flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors",U.status==="pending"&&"bg-[#0076A8]/10",U.status==="success"&&"text-green-300",U.status==="error"&&"text-red-300 bg-red-500/5",U.status==="idle"&&"text-zinc-600"),children:[s.jsx(ye,{status:U.status}),s.jsx("span",{className:"font-mono truncate",children:U.file.key}),U.error&&s.jsx("span",{className:"text-red-400 ml-auto text-[10px] flex-shrink-0 truncate max-w-[140px]",children:U.error})]},U.file.key))})]}),a==="done"&&s.jsxs("div",{className:"flex flex-col gap-4 p-4 bg-zinc-900/50 rounded-xl border border-white/5",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[S===0?s.jsx(co,{size:22,className:"text-green-400 flex-shrink-0"}):s.jsx(In,{size:22,className:"text-amber-400 flex-shrink-0"}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-bold text-white",children:S===0?"Deploy completado ✓":"Deploy con errores"}),s.jsxs("p",{className:"text-xs text-zinc-400",children:[z," archivo",z!==1?"s":""," subido",z!==1?"s":"",S>0&&` · ${S} error${S>1?"es":""}`]})]})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[s.jsxs("div",{className:"text-center p-2 rounded-lg bg-green-500/10 border border-green-500/20",children:[s.jsx("span",{className:"block text-lg font-bold text-green-400",children:Q.success||0}),s.jsx("span",{className:"text-[10px] uppercase tracking-wider text-green-600",children:"Éxitos"})]}),s.jsxs("div",{className:"text-center p-2 rounded-lg bg-red-500/10 border border-red-500/20",children:[s.jsx("span",{className:"block text-lg font-bold text-red-400",children:Q.error||0}),s.jsx("span",{className:"text-[10px] uppercase tracking-wider text-red-600",children:"Errores"})]}),s.jsxs("div",{className:"text-center p-2 rounded-lg bg-[#0076A8]/10 border border-[#0076A8]/20",children:[s.jsx("span",{className:"block text-lg font-bold text-[#5BB8E8]",children:Mo}),s.jsx("span",{className:"text-[10px] uppercase tracking-wider text-[#0076A8]",children:"Total"})]})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[M&&s.jsxs("a",{href:M,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0076A8] hover:bg-[#0095D4] text-white text-xs font-bold uppercase tracking-widest transition-colors",children:[s.jsx(gn,{size:13}),"Abrir Theme Editor",s.jsx(Ys,{size:12})]}),F&&s.jsxs("a",{href:F,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors",children:[s.jsx(al,{size:13}),"Preview del Theme",s.jsx(Ys,{size:12})]})]}),S>0&&s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("p",{className:"text-[10px] uppercase tracking-widest text-red-400 font-bold",children:"Archivos con error:"}),_.filter(U=>U.status==="error").map(U=>s.jsxs("div",{className:"flex items-start gap-2 text-xs text-red-300 bg-red-500/5 rounded px-2 py-1.5",children:[s.jsx(da,{size:12,className:"flex-shrink-0 mt-0.5"}),s.jsxs("div",{children:[s.jsx("span",{className:"font-mono",children:U.file.key}),U.error&&s.jsx("p",{className:"text-[10px] text-red-400 mt-0.5",children:U.error})]})]},U.file.key))]}),s.jsxs("button",{onClick:I,className:"flex items-center justify-center gap-2 py-2 rounded-lg border border-white/10 text-xs text-zinc-400 hover:text-white hover:border-white/20 transition-colors",children:[s.jsx(kd,{size:12}),"Nuevo Deploy"]})]}),ue.length>0&&s.jsxs("div",{className:"rounded-xl border border-white/5 overflow-hidden",children:[s.jsxs("div",{className:"flex items-center justify-between px-3 py-2 bg-zinc-900/60 border-b border-white/5",children:[s.jsx("span",{className:"text-[10px] uppercase tracking-widest text-zinc-500 font-bold",children:"Log"}),s.jsxs("span",{className:"text-[10px] text-zinc-600",children:[ue.length," entradas"]})]}),s.jsx("div",{className:"max-h-40 overflow-y-auto p-2 flex flex-col gap-0.5",children:ue.slice().reverse().map((U,ae)=>s.jsx("p",{className:J("text-[10px] font-mono leading-relaxed",U.includes("✓")?"text-green-500":U.includes("✗")?"text-red-400":"text-zinc-500"),children:U},ae))})]}),s.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-zinc-600 pt-1",children:[s.jsx(ii,{size:11}),s.jsxs("span",{children:["Shop: ",s.jsx("span",{className:"text-zinc-500",children:n})]}),s.jsxs("span",{className:"ml-auto flex items-center gap-1",children:[s.jsx(Vg,{size:11}),Mo," archivos · Theme Custom v1.0"]})]})]}):s.jsxs("div",{className:"p-6 bg-zinc-900/50 rounded-xl border border-white/5 text-center",children:[s.jsx(gr,{size:32,className:"mx-auto mb-3 text-zinc-600"}),s.jsx("p",{className:"text-sm text-zinc-400",children:"Conecta la tienda Shopify en el módulo de configuración para deployar el theme."})]})}function Tg(n){return new Promise(t=>setTimeout(t,n))}function Qk(n){var p,u,f;const t=n.shopify_visibility==="pending"||n.b2b_only,r=[n.collection_id,n.subcollection_id,...n.hair_type,...n.b2b_only?["b2b","pro-salon"]:["b2c"],...n.shopify_visibility==="pending"?["compliance-pending"]:[]].filter(Boolean),a=[{namespace:"neurone",key:"sku",value:n.sku||n.id,type:"single_line_text_field"},{namespace:"neurone",key:"collection_id",value:n.collection_id,type:"single_line_text_field"},{namespace:"neurone",key:"subcollection",value:n.subcollection,type:"single_line_text_field"},{namespace:"neurone",key:"format",value:n.format,type:"single_line_text_field"},{namespace:"neurone",key:"size",value:n.size,type:"single_line_text_field"},{namespace:"neurone",key:"b2b_only",value:String(n.b2b_only),type:"single_line_text_field"},{namespace:"neurone",key:"shopify_visibility",value:n.shopify_visibility,type:"single_line_text_field"}];(p=n.benefit_claims)!=null&&p.length&&a.push({namespace:"neurone",key:"benefit_claims",value:n.benefit_claims.join(" | "),type:"single_line_text_field"}),(u=n.key_ingredients)!=null&&u.length&&a.push({namespace:"neurone",key:"key_ingredients",value:n.key_ingredients.join(", "),type:"single_line_text_field"}),(f=n.cross_sell)!=null&&f.length&&a.push({namespace:"neurone",key:"cross_sell",value:n.cross_sell.join(","),type:"single_line_text_field"});const c={title:n.display_name,body_html:`<p>${n.description_enhanced||n.description}</p>`,vendor:"Neurone Cosmética",product_type:n.collection,tags:r.join(", "),status:t?"draft":"active",variants:[{price:n.price==="10.00"?"0.00":n.price,sku:n.sku||n.id,inventory_management:"shopify",inventory_policy:"deny",fulfillment_service:"manual",weight:0,weight_unit:"kg",requires_shipping:!0}],metafields:a};return n.image_filename&&(c.images=[{src:`https://cdn.shopify.com/s/files/placeholder/${n.image_filename}`,alt:n.display_name}]),{product:c}}async function ci(n,t,r="GET",a){const c=await fetch("/api/shopify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:n.shop,token:n.token,endpoint:t,method:r,body:a})}),p=await c.json();if(!c.ok)throw new Error(p!=null&&p.errors?JSON.stringify(p.errors):`HTTP ${c.status}`);return p}async function Xk(n){return(await ci(n,"/admin/api/2024-01/shop.json")).shop}async function Jk(n){const t={};let r=1,a=!0;for(;a;){const p=(await ci(n,`/admin/api/2024-01/products.json?limit=250&fields=id,title,tags&page=${r}`)).products??[];for(const u of p){const f=(u.tags??"").split(",").find(g=>g.trim().startsWith("sku:"));f&&(t[f.replace("sku:","").trim()]=u.id),t[u.title]=u.id}a=p.length===250,r++}return t}async function Zk(n,t,r){const a=Qk(t),c=r[t.display_name];return c?(await ci(n,`/admin/api/2024-01/products/${c}.json`,"PUT",{product:{...a.product,id:c}})).product.id:(await ci(n,"/admin/api/2024-01/products.json","POST",a)).product.id}function eS({status:n}){return n==="idle"?s.jsx("span",{className:"text-[10px] text-zinc-600 font-mono",children:"—"}):n==="pending"?s.jsx($n,{size:12}):n==="success"?s.jsx(co,{size:13,className:"text-emerald-400"}):n==="error"?s.jsx(da,{size:13,className:"text-red-400"}):n==="skipped"?s.jsx(Gd,{size:13,className:"text-amber-400"}):null}function tS({product:n}){return n.b2b_only?s.jsx(jn,{color:"#8B5CF6",children:"B2B"}):n.shopify_visibility==="pending"?s.jsx(jn,{color:"#F59E0B",children:"Compliance"}):s.jsx(jn,{color:"#22C55E",children:"Public"})}function nS({state:n,selected:t,onToggle:r}){const{product:a,status:c,shopifyId:p,error:u}=n;return s.jsxs("div",{className:J("flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors",c==="success"?"bg-emerald-500/5 border-emerald-500/20":c==="error"?"bg-red-500/5 border-red-500/20":c==="pending"?"bg-accent/5 border-accent/20":t?"bg-zinc-800 border-zinc-700":"bg-zinc-900 border-zinc-800 hover:border-zinc-700"),children:[s.jsx("button",{onClick:r,disabled:c==="pending"||c==="success",className:J("w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors",t?"bg-accent border-accent":"border-zinc-600 hover:border-zinc-400",(c==="pending"||c==="success")&&"opacity-40 cursor-not-allowed"),children:t&&s.jsx(Lt,{size:10,className:"text-black",strokeWidth:3})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[s.jsx("span",{className:"text-xs font-bold text-zinc-200",children:a.display_name}),s.jsx(tS,{product:a}),a.sku&&s.jsx("span",{className:"text-[9px] font-mono text-zinc-600",children:a.sku})]}),s.jsxs("p",{className:"text-[10px] text-zinc-600 mt-0.5",children:[a.collection," · ",a.size," · ",a.format]}),u&&s.jsx("p",{className:"text-[10px] text-red-400 mt-0.5 truncate",children:u}),p&&c==="success"&&s.jsxs("p",{className:"text-[10px] text-emerald-400/70 mt-0.5",children:["Shopify ID: ",p]})]}),s.jsx(eS,{status:c})]})}function oS(){const n=il(),[t,r]=C.useState(n.shop),[a,c]=C.useState(n.token),[p,u]=C.useState(!1),[f,g]=C.useState("catalog");function h(R){r(R),n.setShop(R),n.setConnected(!1)}function y(R){c(R),n.setToken(R),n.setConnected(!1)}C.useEffect(()=>{const R=window.location.hash;if(!R.includes("shopify_token="))return;const ie=new URLSearchParams(R.replace("#","")),xe=ie.get("shopify_token"),ke=ie.get("shop");xe&&y(xe),ke&&h(ke),window.history.replaceState(null,"",window.location.pathname),xe&&setTimeout(()=>b(xe,ke??t),300)},[]);async function b(R,ie){try{const xe=await fetch("/api/shopify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:ie,token:R,endpoint:"/admin/api/2024-01/shop.json"})}),ke=await xe.json();xe.ok&&ke.shop&&($(ke.shop),n.setConnected(!0),n.setToken(R),n.setShop(ie))}catch{}}const[v,_]=C.useState(!1),k=n.connected,[z,$]=C.useState(null),[S,T]=C.useState(""),M=pr("neuroneCosmetics").flatMap(R=>R.subcollections.flatMap(ie=>ie.products).concat(R.products)).filter((R,ie,xe)=>xe.findIndex(ke=>ke.id===R.id)===ie),[D,F]=C.useState(M.map(R=>({product:R,status:"idle"}))),[X,W]=C.useState(new Set(M.filter(R=>R.shopify_visibility==="public"&&!R.b2b_only).map(R=>R.id))),[Y,ve]=C.useState(!1),[fe,De]=C.useState(!1),[G,ue]=C.useState(0),[je,Re]=C.useState(""),[ge,le]=C.useState(!1),[B,ee]=C.useState([]),[Q,N]=C.useState(!1),[I,ye]=C.useState({ok:0,err:0}),[U,ae]=C.useState({}),[pe,Ne]=C.useState(!1),[_e,Pe]=C.useState(!1),[Me,Ze]=C.useState([]),en=C.useRef(!1),[xt,tn]=C.useState("all"),[Go,hn]=C.useState({}),yn={shop:t,token:a};async function mo(){_(!0),T(""),n.setConnected(!1);try{const R=await Xk(yn);$(R),n.setConnected(!0),n.setToken(a),n.setShop(t),setTimeout(()=>Gn(!0),300)}catch(R){T(R.message??"Error de conexión")}finally{_(!1)}}function fo(R){W(ie=>{const xe=new Set(ie);return xe.has(R)?xe.delete(R):xe.add(R),xe})}function qt(R){W(ie=>{const xe=new Set(ie);return R.forEach(ke=>xe.add(ke)),xe})}function nn(R){W(ie=>{const xe=new Set(ie);return R.forEach(ke=>xe.delete(ke)),xe})}function qn(R,ie){F(xe=>xe.map(ke=>ke.product.id===R?{...ke,...ie}:ke))}function ft(R){Ze(ie=>[...ie,`${new Date().toLocaleTimeString("es-ES")} — ${R}`])}async function Pn(){if(!k||pe)return;Ne(!0),Pe(!1),en.current=!1,Ze([]);const R=D.filter(Fe=>X.has(Fe.product.id));ft(`Iniciando push — ${R.length} productos seleccionados`);let ie={};try{ft("Verificando productos existentes en Shopify..."),ie=await Jk(yn);const Fe=Object.keys(ie).length;ft(`${Fe} productos encontrados en la tienda`)}catch(Fe){ft(`⚠️ No se pudo obtener productos existentes: ${Fe.message}`)}let xe=0,ke=0,Ie=0;for(const Fe of R){if(en.current){ft("Push cancelado por el usuario");break}const Ge=Fe.product;qn(Ge.id,{status:"pending"}),ft(`Subiendo: ${Ge.display_name}...`);try{const He=await Zk(yn,Ge,ie);qn(Ge.id,{status:"success",shopifyId:He});const ne=Ge.shopify_visibility==="pending"||Ge.b2b_only;ft(`✓ ${Ge.display_name} → ID ${He}${ne?" [borrador]":" [activo]"}`),xe++}catch(He){qn(Ge.id,{status:"error",error:He.message}),ft(`✗ ${Ge.display_name} — ${He.message}`),ke++}await Tg(550)}ft(`─── Completado: ${xe} exitosos · ${ke} errores · ${Ie} omitidos`);const bt={};D.forEach(Fe=>{Fe.shopifyId&&(bt[Fe.product.display_name]=Fe.shopifyId)}),ae(bt),Ne(!1),Pe(!0)}const Tn=D.filter(R=>xt==="public"?R.product.shopify_visibility==="public"&&!R.product.b2b_only:xt==="pending"?R.product.shopify_visibility==="pending"&&!R.product.b2b_only:xt==="b2b"?R.product.b2b_only:!0),xn=Tn.reduce((R,ie)=>{const xe=ie.product.collection;return R[xe]||(R[xe]=[]),R[xe].push(ie),R},{}),at={total:D.length,selected:X.size,success:D.filter(R=>R.status==="success").length,errors:D.filter(R=>R.status==="error").length,public:D.filter(R=>R.product.shopify_visibility==="public"&&!R.product.b2b_only).length,pending:D.filter(R=>R.product.shopify_visibility==="pending"&&!R.product.b2b_only).length,b2b:D.filter(R=>R.product.b2b_only).length};async function Gn(R=!1){var ie,xe;if(!(!k&&!R||Y)){ve(!0),De(!1),Re("Leyendo catálogo...");try{const ke={};let Ie="/admin/api/2024-01/products.json?limit=250&fields=id,title,status",bt=!0;for(;bt;){const He=(await ci(yn,Ie)).products??[];for(const ne of He)ke[ne.title]=ne.id;bt=He.length===250,bt&&(Ie=`/admin/api/2024-01/products.json?limit=250&fields=id,title,status&since_id=${(ie=He[He.length-1])==null?void 0:ie.id}`)}Re("Sincronizando imágenes CDN...");const Fe={};for(const[Ge,He]of Object.entries(ke)){try{const st=(xe=(await ci(yn,`/admin/api/2024-01/products/${He}/images.json?limit=1&fields=src,alt`)).images)==null?void 0:xe[0];st!=null&&st.src&&(Fe[Ge]=st.src)}catch{}await Tg(200)}n.setCdnImageMap(Fe),F(Ge=>Ge.map(He=>{const ne=ke[He.product.display_name];return ne?{...He,status:"success",shopifyId:ne}:He})),ae(ke),ue(Object.keys(ke).length),Re(""),De(!0)}catch(ke){T(`Error sync: ${ke.message}`)}finally{ve(!1)}}}function Gt(R){ee(ie=>[...ie,`${new Date().toLocaleTimeString("es-ES")} — ${R}`])}async function bn(){if(!k||ge)return;le(!0),N(!1),ee([]),ye({ok:0,err:0});const R=D.filter(ke=>ke.shopifyId&&ke.product.image_filename);Gt(`Iniciando upload de imágenes — ${R.length} productos`);let ie=0,xe=0;for(const ke of R){const Ie=ke.product,bt=ke.shopifyId??U[Ie.display_name];if(!bt){Gt(`⚠️ ${Ie.display_name} — sin Shopify ID, omitido`);continue}Gt(`Subiendo imagen: ${Ie.display_name} (${Ie.image_filename})...`);try{const Fe=`https://raw.githubusercontent.com/unrealvillestudio-hub/BluePrints/main/assets/images/products/${Ie.image_filename}`,Ge=await fetch(Fe);if(!Ge.ok)throw new Error(`No se pudo obtener imagen: ${Ge.status}`);const He=await Ge.arrayBuffer(),ne=btoa(String.fromCharCode(...new Uint8Array(He))),st=await fetch("/api/shopify-images",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:t,token:a,productId:bt,filename:Ie.image_filename,base64:ne,alt:Ie.display_name})}),$t=await st.json();if(!st.ok)throw new Error($t!=null&&$t.errors?JSON.stringify($t.errors):`HTTP ${st.status}`);Gt(`✓ ${Ie.display_name} — imagen subida`),ie++}catch(Fe){Gt(`✗ ${Ie.display_name} — ${Fe.message}`),xe++}await new Promise(Fe=>setTimeout(Fe,600))}Gt(`─── Imágenes: ${ie} subidas · ${xe} errores`),ye({ok:ie,err:xe}),le(!1),N(!0)}return s.jsxs("div",{className:"space-y-4 pb-12",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center",children:s.jsx(mr,{size:15,className:"text-emerald-400"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-base font-bold text-zinc-100",children:"Shopify Push"}),s.jsx("p",{className:"text-[11px] text-zinc-500",children:"Sube el catálogo de Neurone directamente a tu tienda"})]})]}),k&&s.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg",children:[s.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),s.jsx("span",{className:"text-xs text-emerald-300 font-medium",children:z==null?void 0:z.name})]})]}),s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3",children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Conexión Shopify"}),s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsxs("div",{className:"space-y-1.5",children:[s.jsx("label",{className:"text-[10px] text-zinc-500 uppercase font-bold tracking-wider",children:"Shop URL"}),s.jsx("input",{value:t,onChange:R=>{h(R.target.value),n.setConnected(!1)},placeholder:"mi-tienda.myshopify.com",className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-emerald-500/50 font-mono text-xs"})]}),s.jsxs("div",{className:"space-y-1.5",children:[s.jsx("label",{className:"text-[10px] text-zinc-500 uppercase font-bold tracking-wider",children:"Admin API Token"}),s.jsxs("div",{className:"relative",children:[s.jsx("input",{value:a,onChange:R=>{y(R.target.value),n.setConnected(!1)},type:p?"text":"password",placeholder:"shpss_...",className:"w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 pr-9 text-sm text-zinc-200 outline-none focus:border-emerald-500/50 font-mono text-xs"}),s.jsx("button",{onClick:()=>u(R=>!R),className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400",children:p?s.jsx(Ox,{size:13}):s.jsx(al,{size:13})})]})]})]}),s.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[s.jsxs("a",{href:`/api/shopify-auth?shop=${encodeURIComponent(t)}`,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all border bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-300",children:[s.jsx(mr,{size:13}),"Conectar con Shopify"]}),s.jsx("span",{className:"text-zinc-700 text-xs",children:"o pega el token manualmente →"}),s.jsxs("button",{onClick:mo,disabled:v||!t||!a,className:J("flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all border",k?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300":"bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-zinc-600",(v||!t||!a)&&"opacity-50 cursor-not-allowed"),children:[v?s.jsx($n,{size:13}):k?s.jsx(co,{size:13}):s.jsx(ao,{size:13}),v?"Verificando...":k?"Conectado":"Verificar conexión"]}),k&&z&&s.jsxs("a",{href:`https://${z.domain}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors",children:[s.jsx(Ys,{size:11}),z.domain]}),S&&s.jsxs("span",{className:"text-xs text-red-400 flex items-center gap-1.5",children:[s.jsx(da,{size:12}),S]})]})]}),s.jsx("div",{className:"flex gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-xl",children:[{id:"catalog",label:"Catálogo",icon:s.jsx(mr,{size:13})},{id:"theme",label:"Theme Deploy",icon:s.jsx(gr,{size:13})}].map(R=>s.jsxs("button",{onClick:()=>g(R.id),className:J("flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",f===R.id?"bg-zinc-700 text-white shadow-sm":"text-zinc-500 hover:text-zinc-300"),children:[R.icon,R.label]},R.id))}),f==="catalog"&&k&&s.jsx("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-4",children:s.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest mb-1",children:"Operaciones"}),s.jsx("p",{className:"text-[11px] text-zinc-500",children:fe?`Sincronizado — ${G} productos en tienda`:"Sincroniza el estado actual de la tienda antes de operar"})]}),s.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:s.jsxs("button",{onClick:()=>Gn(),disabled:Y,className:J("flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold border transition-all",fe?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300":"bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-zinc-600",Y&&"opacity-50 cursor-not-allowed"),children:[Y?s.jsx($n,{size:12}):fe?s.jsx(co,{size:12}):s.jsx(ao,{size:12}),Y?je||"Sincronizando...":fe?`Sincronizado (${G})`:"Sincronizar tienda"]})})]})}),f==="catalog"&&s.jsx("div",{className:"grid grid-cols-4 gap-3",children:[{label:"Total",value:at.total,color:"#6366F1"},{label:"Seleccionados",value:at.selected,color:"#3B82F6"},{label:"Exitosos",value:at.success,color:"#22C55E"},{label:"Errores",value:at.errors,color:"#EF4444"}].map(R=>s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center",children:[s.jsx("p",{className:"text-xl font-bold",style:{color:R.color},children:R.value}),s.jsx("p",{className:"text-[10px] text-zinc-600 uppercase tracking-wider mt-0.5",children:R.label})]},R.label))}),f==="catalog"&&s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden",children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-zinc-800",children:[s.jsx("div",{className:"flex items-center gap-1.5",children:["all","public","pending","b2b"].map(R=>s.jsx("button",{onClick:()=>tn(R),className:J("text-[10px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider transition-colors",xt===R?"bg-zinc-700 text-zinc-200":"text-zinc-600 hover:text-zinc-400"),children:R==="all"?`Todo (${at.total})`:R==="public"?`Public (${at.public})`:R==="pending"?`Compliance (${at.pending})`:`B2B (${at.b2b})`},R))}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:()=>qt(Tn.map(R=>R.product.id)),className:"text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors",children:"Seleccionar todo"}),s.jsx("span",{className:"text-zinc-700",children:"·"}),s.jsx("button",{onClick:()=>nn(Tn.map(R=>R.product.id)),className:"text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors",children:"Deseleccionar"})]})]}),s.jsx("div",{className:"p-3 space-y-3 max-h-[480px] overflow-y-auto",children:Object.entries(xn).map(([R,ie])=>{const xe=Go[R],ke=ie.filter(Ie=>X.has(Ie.product.id)).length;return s.jsxs("div",{children:[s.jsxs("button",{onClick:()=>hn(Ie=>({...Ie,[R]:!Ie[R]})),className:"w-full flex items-center gap-2 py-1.5 px-1 text-left hover:bg-zinc-800/50 rounded-lg transition-colors mb-1.5",children:[xe?s.jsx(Sa,{size:12,className:"text-zinc-600"}):s.jsx(qd,{size:12,className:"text-zinc-600"}),s.jsx("span",{className:"text-[10px] uppercase font-bold text-zinc-500 tracking-widest",children:R}),s.jsxs("span",{className:"text-[10px] text-zinc-700 ml-auto",children:[ke,"/",ie.length," sel."]})]}),!xe&&s.jsx("div",{className:"space-y-1.5",children:ie.map(Ie=>s.jsx(nS,{state:Ie,selected:X.has(Ie.product.id),onToggle:()=>fo(Ie.product.id)},Ie.product.id))})]},R)})})]}),s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3",children:[s.jsx("div",{className:"space-y-2",children:X.size>0&&s.jsxs(s.Fragment,{children:[[...X].some(R=>{const ie=M.find(xe=>xe.id===R);return(ie==null?void 0:ie.shopify_visibility)==="pending"&&!(ie!=null&&ie.b2b_only)})&&s.jsxs("div",{className:"flex items-start gap-2 px-3 py-2 bg-amber-500/8 border border-amber-500/20 rounded-lg",children:[s.jsx(In,{size:12,className:"text-amber-400 mt-0.5 shrink-0"}),s.jsxs("p",{className:"text-[11px] text-amber-300/80",children:["Hay productos con compliance pendiente (Capissen, Derma Roller) — se subirán como ",s.jsx("strong",{children:"borrador"}),", invisibles en la tienda hasta revisión legal."]})]}),[...X].some(R=>{var ie;return(ie=M.find(xe=>xe.id===R))==null?void 0:ie.b2b_only})&&s.jsxs("div",{className:"flex items-start gap-2 px-3 py-2 bg-violet-500/8 border border-violet-500/20 rounded-lg",children:[s.jsx(In,{size:12,className:"text-violet-400 mt-0.5 shrink-0"}),s.jsxs("p",{className:"text-[11px] text-violet-300/80",children:["Productos B2B Pro Salon seleccionados — se subirán como ",s.jsx("strong",{children:"borrador"}),", pendiente configuración Locksmith."]})]}),s.jsxs("div",{className:"flex items-start gap-2 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg",children:[s.jsx(In,{size:12,className:"text-zinc-400 mt-0.5 shrink-0"}),s.jsxs("p",{className:"text-[11px] text-zinc-400",children:["Los precios se suben en ",s.jsx("strong",{children:"$0.00"})," (placeholder). Actualízalos en Shopify Admin una vez confirmados con PO."]})]})]})}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{onClick:Pn,disabled:!k||pe||X.size===0,className:J("flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all",k&&!pe&&X.size>0?"bg-emerald-500 hover:bg-emerald-400 text-white":"bg-zinc-800 text-zinc-600 cursor-not-allowed"),children:pe?s.jsxs(s.Fragment,{children:[s.jsx($n,{size:14})," Subiendo ",at.success+at.errors,"/",X.size,"..."]}):s.jsxs(s.Fragment,{children:[s.jsx(pa,{size:14})," Push ",X.size," producto",X.size!==1?"s":""," a Shopify"]})}),pe&&s.jsxs("button",{onClick:()=>{en.current=!0},className:"flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-red-400 border border-red-500/20 hover:bg-red-500/10 transition-colors",children:[s.jsx(uo,{size:12})," Cancelar"]}),_e&&!pe&&s.jsxs(qe.div,{initial:{opacity:0,x:8},animate:{opacity:1,x:0},className:"flex items-center gap-2 text-sm text-emerald-400",children:[s.jsx(gn,{size:13}),at.success," subidos · ",at.errors," errores"]})]})]}),f==="catalog"&&s.jsx(Vt,{children:Me.length>0&&s.jsxs(qe.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden",children:[s.jsxs("div",{className:"px-4 py-2.5 border-b border-zinc-800 flex items-center gap-2",children:[s.jsx(gr,{size:11,className:"text-zinc-500"}),s.jsx("span",{className:"text-[10px] uppercase font-bold text-zinc-600 tracking-widest",children:"Log de push"})]}),s.jsx("div",{className:"p-3 max-h-48 overflow-y-auto space-y-0.5",children:Me.map((R,ie)=>s.jsx("p",{className:J("text-[11px] font-mono leading-relaxed",R.includes("✓")?"text-emerald-400":R.includes("✗")?"text-red-400":R.includes("⚠️")?"text-amber-400":R.includes("───")?"text-zinc-300 font-bold":"text-zinc-500"),children:R},ie))})]})}),f==="catalog"&&k&&(fe||_e)&&s.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center",children:s.jsx(pa,{size:12,className:"text-blue-400"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-bold text-zinc-200",children:"Upload de imágenes"}),s.jsx("p",{className:"text-[11px] text-zinc-500",children:"39 imágenes disponibles en BluePrints → Shopify CDN"})]})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{onClick:bn,disabled:!k||ge,className:J("flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all",k&&!ge?"bg-blue-500 hover:bg-blue-400 text-white":"bg-zinc-800 text-zinc-600 cursor-not-allowed"),children:ge?s.jsxs(s.Fragment,{children:[s.jsx($n,{size:13})," Subiendo imágenes ",I.ok,"/",D.filter(R=>R.product.image_filename).length,"..."]}):s.jsxs(s.Fragment,{children:[s.jsx(pa,{size:13})," Subir imágenes a Shopify"]})}),Q&&!ge&&s.jsxs(qe.span,{initial:{opacity:0,x:8},animate:{opacity:1,x:0},className:"text-sm text-blue-300 flex items-center gap-2",children:[s.jsx(Lt,{size:13}),I.ok," imágenes subidas · ",I.err," errores"]})]}),B.length>0&&s.jsx("div",{className:"bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden",children:s.jsx("div",{className:"p-3 max-h-48 overflow-y-auto space-y-0.5",children:B.map((R,ie)=>s.jsx("p",{className:J("text-[11px] font-mono leading-relaxed",R.includes("✓")?"text-blue-400":R.includes("✗")?"text-red-400":R.includes("⚠️")?"text-amber-400":R.includes("───")?"text-zinc-300 font-bold":"text-zinc-500"),children:R},ie))})})]}),f==="theme"&&s.jsx("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-4",children:s.jsx(Yk,{})})]})}const Og="WL v2.3",rS=()=>s.jsxs("div",{className:"flex items-center gap-2 font-bold tracking-tighter text-xl",children:[s.jsx("div",{className:"w-6 h-6 bg-[#FFAB00] rounded-sm flex items-center justify-center text-black text-[10px] font-black",children:"UV"}),s.jsx("span",{children:"UNRLVL"})]});function iS(){const[n,t]=C.useState("weblab"),r=il();return s.jsxs("div",{className:"min-h-screen bg-[#0A0A0A] text-zinc-200 selection:bg-[#FFAB00]/30",children:[s.jsxs("header",{className:"h-14 border-b border-zinc-800 px-6 flex items-center justify-between sticky top-0 bg-[#0A0A0A]/90 backdrop-blur-md z-50",children:[s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsx(rS,{}),s.jsx("div",{className:"h-4 w-px bg-zinc-800"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm font-bold text-[#FFAB00]",children:"UNRLVL — WebLab"}),s.jsx("span",{className:"px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-500",children:Og})]}),s.jsxs("div",{className:"flex items-center gap-1 ml-2",children:[s.jsxs("button",{onClick:()=>t("weblab"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="weblab"?"bg-zinc-800 text-zinc-200":"text-zinc-600 hover:text-zinc-400"}`,children:[s.jsx(ii,{size:12}),"WebLab"]}),s.jsxs("button",{onClick:()=>t("shopify"),className:`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="shopify"?"bg-emerald-500/15 text-emerald-300 border border-emerald-500/30":r.connected?"text-emerald-400/70 hover:text-emerald-300":"text-zinc-600 hover:text-zinc-400"}`,children:[s.jsx(mr,{size:12}),"Shopify Push",!r.connected&&n!=="shopify"&&s.jsxs("span",{className:"flex items-center gap-1 text-[9px] font-mono text-amber-400/80 bg-amber-500/10 border border-amber-500/25 px-2 py-0.5 rounded-full ml-1",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block"}),"CONECTAR"]}),r.connected&&n!=="shopify"&&s.jsxs("span",{className:"flex items-center gap-1 text-[9px] font-mono text-emerald-400/70 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full ml-1",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"}),"SYNC"]})]})]})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] font-mono text-emerald-400/70 bg-emerald-500/5 border border-emerald-500/20 px-2.5 py-1 rounded-full",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"CLAUDE CONNECTED"]}),s.jsx("button",{className:"p-2 hover:bg-zinc-800 rounded-full transition-colors",children:s.jsx($x,{className:"w-4 h-4 text-zinc-500"})})]})]}),s.jsxs("main",{className:"max-w-7xl mx-auto px-6 py-6 pb-20",children:[n==="weblab"&&s.jsx(kk,{}),n==="shopify"&&s.jsx(oS,{})]}),s.jsxs("footer",{className:"h-8 border-t border-zinc-800/50 px-6 flex items-center justify-between text-[10px] font-mono text-zinc-700 uppercase tracking-widest fixed bottom-0 left-0 right-0 bg-[#0A0A0A]/80 backdrop-blur-sm z-50",children:[s.jsx("div",{className:"flex items-center gap-4",children:s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),"System Ready"]})}),s.jsxs("span",{className:"text-[#FFAB00]/30",children:["UNRLVL WebLab ",Og]}),s.jsxs("span",{className:"text-zinc-600 hidden md:block tracking-wide normal-case",children:["Designed & Developed by ",s.jsx("span",{className:"text-zinc-500",children:"Unreal>ille Studio"})," · Miami, FL"]})]})]})}Sx.createRoot(document.getElementById("root")).render(s.jsx(ia.StrictMode,{children:s.jsx(iS,{})}));
