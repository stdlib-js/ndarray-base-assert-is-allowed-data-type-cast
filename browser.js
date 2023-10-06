// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).isAllowedCast=n()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var c="function"==typeof Symbol?Symbol:void 0,a="function"==typeof c?c.toStringTag:"";var l,f=r()?function(t){var n,e,r;if(null==t)return i.call(t);e=t[a],n=u(t,a);try{t[a]=void 0}catch(n){return i.call(t)}return r=i.call(t),n?t[a]=e:delete t[a],r}:function(t){return i.call(t)};function p(t){return"[object Arguments]"===f(t)}l=function(){return p(arguments)}();var s=l,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function b(t){return"number"==typeof t}function v(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function m(t,n,e){var r=!1,i=n-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=e?t+v(i):v(i)+t,r&&(t="-"+t)),t}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(t){var n,e,r;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,r=parseInt(e,10),!isFinite(r)){if(!b(e))throw new Error("invalid integer. Value: "+e);r=0}return r<0&&("u"===t.specifier||10!==n)&&(r=4294967295+r+1),r<0?(e=(-r).toString(n),t.precision&&(e=m(e,t.precision,t.padRight)),e="-"+e):(e=r.toString(n),r||t.precision?t.precision&&(e=m(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===h.call(t.specifier)?h.call(e):d.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function j(t){return"string"==typeof t}var x=Math.abs,_=String.prototype.toLowerCase,O=String.prototype.toUpperCase,S=String.prototype.replace,E=/e\+(\d)$/,T=/e-(\d)$/,I=/^(\d+)$/,P=/^(\d+)e/,A=/\.0$/,k=/\.0*e/,V=/(\..*[^0])0*e/;function N(t){var n,e,r=parseFloat(t.arg);if(!isFinite(r)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+e);r=t.arg}switch(t.specifier){case"e":case"E":e=r.toExponential(t.precision);break;case"f":case"F":e=r.toFixed(t.precision);break;case"g":case"G":x(r)<1e-4?((n=t.precision)>0&&(n-=1),e=r.toExponential(n)):e=r.toPrecision(t.precision),t.alternate||(e=S.call(e,V,"$1e"),e=S.call(e,k,"e"),e=S.call(e,A,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=S.call(e,E,"e+0$1"),e=S.call(e,T,"e-0$1"),t.alternate&&(e=S.call(e,I,"$1."),e=S.call(e,P,"$1.e")),r>=0&&t.sign&&(e=t.sign+e),e=t.specifier===O.call(t.specifier)?O.call(e):_.call(e)}function F(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}function B(t,n,e){var r=n-t.length;return r<0?t:t=e?t+F(r):F(r)+t}var L=String.fromCharCode,C=isNaN,G=Array.isArray;function Y(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function X(t){var n,e,r,i,o,u,c,a,l;if(!G(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",c=1,a=0;a<t.length;a++)if(j(r=t[a]))u+=r;else{if(n=void 0!==r.precision,!(r=Y(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+a+"`. Value: `"+r+"`.");for(r.mapping&&(c=r.mapping),e=r.flags,l=0;l<e.length;l++)switch(i=e.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=e.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[c],10),c+=1,C(r.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[c],10),c+=1,C(r.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[c],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=n?r.precision:-1;break;case"c":if(!C(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=C(o)?String(r.arg):L(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=N(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=m(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=B(r.arg,r.width,r.padRight)),u+=r.arg||"",c+=1}return u}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function $(t){var n,e,r,i;for(e=[],i=0,r=M.exec(t);r;)(n=t.slice(i,M.lastIndex-r[0].length)).length&&e.push(n),e.push(W(r)),i=M.lastIndex,r=M.exec(t);return(n=t.slice(i)).length&&e.push(n),e}function R(t){return"string"==typeof t}function H(t){var n,e,r;if(!R(t))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=$(t),(e=new Array(arguments.length))[0]=n,r=1;r<e.length;r++)e[r]=arguments[r];return X.apply(null,e)}var U,Z=Object.prototype,D=Z.toString,q=Z.__defineGetter__,z=Z.__defineSetter__,J=Z.__lookupGetter__,K=Z.__lookupSetter__;U=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?g:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===D.call(e))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(J.call(t,n)||K.call(t,n)?(r=t.__proto__,t.__proto__=Z,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&q&&q.call(t,n,e.get),u&&z&&z.call(t,n,e.set),t};var Q=U;function tt(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function nt(t){return"string"==typeof t}var et=String.prototype.valueOf;var rt=r();function it(t){return"object"==typeof t&&(t instanceof String||(rt?function(t){try{return et.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function ot(t){return nt(t)||it(t)}function ut(t){return"number"==typeof t}tt(ot,"isPrimitive",nt),tt(ot,"isObject",it);var ct=Number,at=ct.prototype.toString;var lt=r();function ft(t){return"object"==typeof t&&(t instanceof ct||(lt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function pt(t){return ut(t)||ft(t)}function st(t){return t!=t}function yt(t){return ut(t)&&st(t)}function gt(t){return ft(t)&&st(t.valueOf())}function bt(t){return yt(t)||gt(t)}tt(pt,"isPrimitive",ut),tt(pt,"isObject",ft),tt(bt,"isPrimitive",yt),tt(bt,"isObject",gt);var vt=Number.POSITIVE_INFINITY,mt=ct.NEGATIVE_INFINITY,dt=Math.floor;function ht(t){return dt(t)===t}function wt(t){return t<vt&&t>mt&&ht(t)}function jt(t){return ut(t)&&wt(t)}function xt(t){return ft(t)&&wt(t.valueOf())}function _t(t){return jt(t)||xt(t)}tt(_t,"isPrimitive",jt),tt(_t,"isObject",xt);var Ot=Object.prototype.propertyIsEnumerable;var St=!Ot.call("beep","0");function Et(t,n){var e;return null!=t&&(!(e=Ot.call(t,n))&&St&&ot(t)?!yt(n=+n)&&jt(n)&&n>=0&&n<t.length:e)}var Tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var It=s?p:function(t){return null!==t&&"object"==typeof t&&!Tt(t)&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Et(t,"callee")},Pt=Array.prototype.slice;function At(t){return null!==t&&"object"==typeof t}tt(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!Tt(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(At));var kt=Et((function(){}),"prototype"),Vt=!Et({toString:null},"toString");function Nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ft(t,n,e){var r,i;if(!Nt(t)&&!nt(t))throw new TypeError(H("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!jt(e))throw new TypeError(H("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(bt(n)){for(;i<r;i++)if(bt(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var Bt=/./;function Lt(t){return"boolean"==typeof t}var Ct=Boolean,Gt=Boolean.prototype.toString;var Yt=r();function Xt(t){return"object"==typeof t&&(t instanceof Ct||(Yt?function(t){try{return Gt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Mt(t){return Lt(t)||Xt(t)}function Wt(){return new Function("return this;")()}tt(Mt,"isPrimitive",Lt),tt(Mt,"isObject",Xt);var $t="object"==typeof self?self:null,Rt="object"==typeof window?window:null,Ht="object"==typeof globalThis?globalThis:null;var Ut=function(t){if(arguments.length){if(!Lt(t))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Wt()}if(Ht)return Ht;if($t)return $t;if(Rt)return Rt;throw new Error("unexpected error. Unable to resolve global object.")}(),Zt=Ut.document&&Ut.document.childNodes,Dt=Int8Array;function qt(){return/^\s*function\s*([^(]*)/i}var zt=/^\s*function\s*([^(]*)/i;function Jt(t){var n,e,r,i;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=zt.exec(r.toString()))return n[1]}return At(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}tt(qt,"REGEXP",zt);var Kt="function"==typeof Bt||"object"==typeof Dt||"function"==typeof Zt?function(t){return Jt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Jt(t).toLowerCase():n};function Qt(t){return t.constructor&&t.constructor.prototype===t}var tn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],nn="undefined"==typeof window?void 0:window;var en=function(){var t;if("undefined"===Kt(nn))return!1;for(t in nn)try{-1===Ft(tn,t)&&u(nn,t)&&null!==nn[t]&&"object"===Kt(nn[t])&&Qt(nn[t])}catch(t){return!0}return!1}(),rn="undefined"!=typeof window;var on,un=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];on=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return It(n)?t(Pt.call(n)):t(n)}:t:function(t){var n,e,r,i,o,c,a;if(i=[],It(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(!1==(r="function"==typeof t)&&!At(t))return i;e=kt&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if(Vt)for(n=function(t){if(!1===rn&&!en)return Qt(t);try{return Qt(t)}catch(t){return!1}}(t),a=0;a<un.length;a++)c=un[a],n&&"constructor"===c||!u(t,c)||i.push(String(c));return i};var cn=on;function an(t){return Object.keys(Object(t))}var ln=void 0!==Object.keys;var fn="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function pn(){return fn&&"symbol"==typeof Symbol.toStringTag}var sn=Object.prototype.toString;var yn=Object.prototype.hasOwnProperty;function gn(t,n){return null!=t&&yn.call(t,n)}var bn="function"==typeof Symbol?Symbol.toStringTag:"";var vn,mn=pn()?function(t){var n,e,r;if(null==t)return sn.call(t);e=t[bn],n=gn(t,bn);try{t[bn]=void 0}catch(n){return sn.call(t)}return r=sn.call(t),n?t[bn]=e:delete t[bn],r}:function(t){return sn.call(t)};function dn(t){return"[object Arguments]"===mn(t)}vn=function(){return dn(arguments)}();var hn=vn,wn="function"==typeof Object.defineProperty?Object.defineProperty:null;var jn,xn=Object.defineProperty,_n=Object.prototype,On=_n.toString,Sn=_n.__defineGetter__,En=_n.__defineSetter__,Tn=_n.__lookupGetter__,In=_n.__lookupSetter__;jn=function(){try{return wn({},"x",{}),!0}catch(t){return!1}}()?xn:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===On.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===On.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(Tn.call(t,n)||In.call(t,n)?(r=t.__proto__,t.__proto__=_n,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Sn&&Sn.call(t,n,e.get),u&&En&&En.call(t,n,e.set),t};var Pn=jn;function An(t,n,e){Pn(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function kn(t){return"string"==typeof t}var Vn=String.prototype.valueOf;var Nn=pn();function Fn(t){return"object"==typeof t&&(t instanceof String||(Nn?function(t){try{return Vn.call(t),!0}catch(t){return!1}}(t):"[object String]"===mn(t)))}function Bn(t){return kn(t)||Fn(t)}function Ln(t){return"number"==typeof t}An(Bn,"isPrimitive",kn),An(Bn,"isObject",Fn);var Cn=Number,Gn=Cn.prototype.toString;var Yn=pn();function Xn(t){return"object"==typeof t&&(t instanceof Cn||(Yn?function(t){try{return Gn.call(t),!0}catch(t){return!1}}(t):"[object Number]"===mn(t)))}function Mn(t){return Ln(t)||Xn(t)}function Wn(t){return t!=t}function $n(t){return Ln(t)&&Wn(t)}function Rn(t){return Xn(t)&&Wn(t.valueOf())}function Hn(t){return $n(t)||Rn(t)}An(Mn,"isPrimitive",Ln),An(Mn,"isObject",Xn),An(Hn,"isPrimitive",$n),An(Hn,"isObject",Rn);var Un=Number.POSITIVE_INFINITY,Zn=Cn.NEGATIVE_INFINITY,Dn=Math.floor;function qn(t){return Dn(t)===t}function zn(t){return t<Un&&t>Zn&&qn(t)}function Jn(t){return Ln(t)&&zn(t)}function Kn(t){return Xn(t)&&zn(t.valueOf())}function Qn(t){return Jn(t)||Kn(t)}An(Qn,"isPrimitive",Jn),An(Qn,"isObject",Kn);var te=Object.prototype.propertyIsEnumerable;var ne=!te.call("beep","0");function ee(t,n){var e;return null!=t&&(!(e=te.call(t,n))&&ne&&Bn(t)?!$n(n=+n)&&Jn(n)&&n>=0&&n<t.length:e)}var re=Array.isArray?Array.isArray:function(t){return"[object Array]"===mn(t)};var ie=hn?dn:function(t){return null!==t&&"object"==typeof t&&!re(t)&&"number"==typeof t.length&&qn(t.length)&&t.length>=0&&t.length<=4294967295&&gn(t,"callee")&&!ee(t,"callee")},oe=Array.prototype.slice;function ue(t){return null!==t&&"object"==typeof t}An(ue,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!re(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(ue));var ce=ee((function(){}),"prototype"),ae=!ee({toString:null},"toString");function le(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&qn(t.length)&&t.length>=0&&t.length<=9007199254740991}function fe(t,n,e){var r,i;if(!le(t)&&!kn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!Jn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(Hn(n)){for(;i<r;i++)if(Hn(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var pe=/./;function se(t){return"boolean"==typeof t}var ye=Boolean.prototype.toString;var ge=pn();function be(t){return"object"==typeof t&&(t instanceof Boolean||(ge?function(t){try{return ye.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===mn(t)))}function ve(t){return se(t)||be(t)}function me(){return new Function("return this;")()}An(ve,"isPrimitive",se),An(ve,"isObject",be);var de="object"==typeof self?self:null,he="object"==typeof window?window:null,we="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},je="object"==typeof we?we:null;var xe=function(t){if(arguments.length){if(!se(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return me()}if(de)return de;if(he)return he;if(je)return je;throw new Error("unexpected error. Unable to resolve global object.")}(),_e=xe.document&&xe.document.childNodes,Oe=Int8Array;function Se(){return/^\s*function\s*([^(]*)/i}var Ee=/^\s*function\s*([^(]*)/i;function Te(t){var n,e,r,i;if(("Object"===(e=mn(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Ee.exec(r.toString()))return n[1]}return ue(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}An(Se,"REGEXP",Ee);var Ie="function"==typeof pe||"object"==typeof Oe||"function"==typeof _e?function(t){return Te(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Te(t).toLowerCase():n};function Pe(t){return t.constructor&&t.constructor.prototype===t}var Ae=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ke="undefined"==typeof window?void 0:window;var Ve=function(){var t;if("undefined"===Ie(ke))return!1;for(t in ke)try{-1===fe(Ae,t)&&gn(ke,t)&&null!==ke[t]&&"object"===Ie(ke[t])&&Pe(ke[t])}catch(t){return!0}return!1}(),Ne="undefined"!=typeof window;var Fe,Be=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Fe=ln?function(){return 2!==(an(arguments)||"").length}(1,2)?function(t){return ie(t)?an(oe.call(t)):an(t)}:an:function(t){var n,e,r,i,o,u,c;if(i=[],ie(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!gn(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!ue(t))return i;e=ce&&r}for(o in t)e&&"prototype"===o||!gn(t,o)||i.push(String(o));if(ae)for(n=function(t){if(!1===Ne&&!Ve)return Pe(t);try{return Pe(t)}catch(t){return!1}}(t),c=0;c<Be.length;c++)u=Be[c],n&&"constructor"===u||!gn(t,u)||i.push(String(u));return i};var Le=Fe;function Ce(t){return"function"===Ie(t)}var Ge,Ye=Object.getPrototypeOf;Ge=Ce(Object.getPrototypeOf)?Ye:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===mn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Xe=Ge;var Me=Object.prototype;function We(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!re(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Xe(t))}(t),!n||!gn(t,"constructor")&&gn(n,"constructor")&&Ce(n.constructor)&&"[object Function]"===mn(n.constructor)&&gn(n,"isPrototypeOf")&&Ce(n.isPrototypeOf)&&(n===Me||function(t){var n;for(n in t)if(!gn(t,n))return!1;return!0}(t)))}var $e="function"==typeof Object.defineProperty?Object.defineProperty:null;var Re,He=Object.defineProperty,Ue=Object.prototype,Ze=Ue.toString,De=Ue.__defineGetter__,qe=Ue.__defineSetter__,ze=Ue.__lookupGetter__,Je=Ue.__lookupSetter__;Re=function(){try{return $e({},"x",{}),!0}catch(t){return!1}}()?He:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===Ze.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===Ze.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(ze.call(t,n)||Je.call(t,n)?(r=t.__proto__,t.__proto__=Ue,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&De&&De.call(t,n,e.get),u&&qe&&qe.call(t,n,e.set),t};var Ke=Re;function Qe(t,n,e){Ke(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var tr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function nr(){return tr.slice()}var er=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function rr(){return er.slice()}function ir(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function or(t,n,e){Ke(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function ur(t){return Object.keys(Object(t))}var cr=void 0!==Object.keys;var ar="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function lr(){return ar&&"symbol"==typeof Symbol.toStringTag}var fr=Object.prototype.toString;var pr=Object.prototype.hasOwnProperty;function sr(t,n){return null!=t&&pr.call(t,n)}var yr="function"==typeof Symbol?Symbol.toStringTag:"";var gr,br=lr()?function(t){var n,e,r;if(null==t)return fr.call(t);e=t[yr],n=sr(t,yr);try{t[yr]=void 0}catch(n){return fr.call(t)}return r=fr.call(t),n?t[yr]=e:delete t[yr],r}:function(t){return fr.call(t)};function vr(t){return"[object Arguments]"===br(t)}gr=function(){return vr(arguments)}();var mr=gr;function dr(t){return"string"==typeof t}var hr=String.prototype.valueOf;var wr=lr();function jr(t){return"object"==typeof t&&(t instanceof String||(wr?function(t){try{return hr.call(t),!0}catch(t){return!1}}(t):"[object String]"===br(t)))}function xr(t){return dr(t)||jr(t)}function _r(t){return"number"==typeof t}Qe(xr,"isPrimitive",dr),Qe(xr,"isObject",jr);var Or=Number,Sr=Or.prototype.toString;var Er=lr();function Tr(t){return"object"==typeof t&&(t instanceof Or||(Er?function(t){try{return Sr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===br(t)))}function Ir(t){return _r(t)||Tr(t)}function Pr(t){return t!=t}function Ar(t){return _r(t)&&Pr(t)}function kr(t){return Tr(t)&&Pr(t.valueOf())}function Vr(t){return Ar(t)||kr(t)}Qe(Ir,"isPrimitive",_r),Qe(Ir,"isObject",Tr),Qe(Vr,"isPrimitive",Ar),Qe(Vr,"isObject",kr);var Nr=Number.POSITIVE_INFINITY,Fr=Or.NEGATIVE_INFINITY,Br=Math.floor;function Lr(t){return Br(t)===t}function Cr(t){return t<Nr&&t>Fr&&Lr(t)}function Gr(t){return _r(t)&&Cr(t)}function Yr(t){return Tr(t)&&Cr(t.valueOf())}function Xr(t){return Gr(t)||Yr(t)}Qe(Xr,"isPrimitive",Gr),Qe(Xr,"isObject",Yr);var Mr=Object.prototype.propertyIsEnumerable;var Wr=!Mr.call("beep","0");function $r(t,n){var e;return null!=t&&(!(e=Mr.call(t,n))&&Wr&&xr(t)?!Ar(n=+n)&&Gr(n)&&n>=0&&n<t.length:e)}var Rr=Array.isArray?Array.isArray:function(t){return"[object Array]"===br(t)};var Hr=mr?vr:function(t){return null!==t&&"object"==typeof t&&!Rr(t)&&"number"==typeof t.length&&Lr(t.length)&&t.length>=0&&t.length<=4294967295&&sr(t,"callee")&&!$r(t,"callee")},Ur=Array.prototype.slice;function Zr(t){return null!==t&&"object"==typeof t}Qe(Zr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!Rr(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Zr));var Dr=$r((function(){}),"prototype"),qr=!$r({toString:null},"toString");function zr(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Lr(t.length)&&t.length>=0&&t.length<=9007199254740991}function Jr(t,n,e){var r,i;if(!zr(t)&&!dr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!Gr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(Vr(n)){for(;i<r;i++)if(Vr(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var Kr=/./;function Qr(t){return"boolean"==typeof t}var ti=Boolean.prototype.toString;var ni=lr();function ei(t){return"object"==typeof t&&(t instanceof Boolean||(ni?function(t){try{return ti.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===br(t)))}function ri(t){return Qr(t)||ei(t)}function ii(){return new Function("return this;")()}Qe(ri,"isPrimitive",Qr),Qe(ri,"isObject",ei);var oi="object"==typeof self?self:null,ui="object"==typeof window?window:null,ci="object"==typeof we?we:null;var ai=function(t){if(arguments.length){if(!Qr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ii()}if(oi)return oi;if(ui)return ui;if(ci)return ci;throw new Error("unexpected error. Unable to resolve global object.")}(),li=ai.document&&ai.document.childNodes,fi=Int8Array;function pi(){return/^\s*function\s*([^(]*)/i}var si=/^\s*function\s*([^(]*)/i;function yi(t){var n,e,r,i;if(("Object"===(e=br(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=si.exec(r.toString()))return n[1]}return Zr(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}Qe(pi,"REGEXP",si);var gi="function"==typeof Kr||"object"==typeof fi||"function"==typeof li?function(t){return yi(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?yi(t).toLowerCase():n};function bi(t){return t.constructor&&t.constructor.prototype===t}var vi=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],mi="undefined"==typeof window?void 0:window;var di=function(){var t;if("undefined"===gi(mi))return!1;for(t in mi)try{-1===Jr(vi,t)&&sr(mi,t)&&null!==mi[t]&&"object"===gi(mi[t])&&bi(mi[t])}catch(t){return!0}return!1}(),hi="undefined"!=typeof window;var wi,ji=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];wi=cr?function(){return 2!==(ur(arguments)||"").length}(1,2)?function(t){return Hr(t)?ur(Ur.call(t)):ur(t)}:ur:function(t){var n,e,r,i,o,u,c;if(i=[],Hr(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!sr(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!Zr(t))return i;e=Dr&&r}for(o in t)e&&"prototype"===o||!sr(t,o)||i.push(String(o));if(qr)for(n=function(t){if(!1===hi&&!di)return bi(t);try{return bi(t)}catch(t){return!1}}(t),c=0;c<ji.length;c++)u=ji[c],n&&"constructor"===u||!sr(t,u)||i.push(String(u));return i};var xi=wi;Qe(rr,"enum",ir),function(t,n){var e,r,i;for(e=xi(n),i=0;i<e.length;i++)or(t,r=e[i],n[r])}(rr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var _i={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Oi(){return{bool:_i.bool,int8:_i.int8,uint8:_i.uint8,uint8c:_i.uint8c,int16:_i.int16,uint16:_i.uint16,int32:_i.int32,uint32:_i.uint32,int64:_i.int64,uint64:_i.uint64,float32:_i.float32,float64:_i.float64,complex64:_i.complex64,complex128:_i.complex128,binary:_i.binary,generic:_i.generic,notype:_i.notype,userdefined_type:_i.userdefined_type}}Qe(nr,"enum",Oi),function(t,n){var e,r,i;for(e=xi(n),i=0;i<e.length;i++)or(t,r=e[i],n[r])}(nr,Oi());var Si=function(t,n){var e,r,i,o,u,c,a,l=!0;if(!ue(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!We(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(gn(n,"duplicates")&&!se(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=Le(t)).length,u={},l)for(a=0;a<r;a++)gn(u,o=t[i=e[a]])?(c=u[o],re(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(a=0;a<r;a++)u[t[i=e[a]]]=i;return u}(Oi(),{duplicates:!1});var Ei={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Ti(){var t;return 0===arguments.length?Ei.all.slice():(t=Ei[arguments[0]])?t.slice():[]}function Ii(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Pi(t,n,e){Q(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}tt(Ti,"enum",Ii),function(t,n){var e,r,i;for(e=cn(n),i=0;i<e.length;i++)Pi(t,r=e[i],n[r])}(Ti,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ai={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function ki(t){var n=typeof t;return"string"===n?null===function(t){var n=Ai[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Si[t];return"string"==typeof n?n:null}(t):null}var Vi,Ni={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Fi(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=cn(Ni)).length,a=0;a<n;a++){for(i=t[a],u=Ni[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function Bi(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=cn(Ni)).length,a=0;a<n;a++){for(i=t[a],u=Ni[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var Li=function(t){return 0===arguments.length?Fi():(void 0===Vi&&(Vi=Bi()),t=ki(t),u(Vi,t)?Vi[t].slice():null)}();var Ci,Gi={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Yi(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=cn(Gi)).length,a=0;a<n;a++){for(i=t[a],u=Gi[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function Xi(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=cn(Gi)).length,a=0;a<n;a++){for(i=t[a],u=Gi[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var Mi=function(t){return 0===arguments.length?Yi():(void 0===Ci&&(Ci=Xi()),t=ki(t),u(Ci,t)?Ci[t].slice():null)}();return function(t,n,e){return"unsafe"===e||(t===n||"none"!==e&&"equiv"!==e&&("safe"===e?function(t,n){return t===n||Li[t][n]>0}(t,n):function(t,n){return t===n||Mi[t][n]>0}(t,n)))}}));
//# sourceMappingURL=browser.js.map
