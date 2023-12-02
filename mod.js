// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var c="function"==typeof Symbol?Symbol:void 0,a="function"==typeof c?c.toStringTag:"";var l=r()?function(t){var n,e,r;if(null==t)return i.call(t);e=t[a],n=u(t,a);try{t[a]=void 0}catch(n){return i.call(t)}return r=i.call(t),n?t[a]=e:delete t[a],r}:function(t){return i.call(t)};function f(t){return"[object Arguments]"===l(t)}var p=function(){return f(arguments)}(),s="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function g(t){return"number"==typeof t}function b(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function m(t,n,e){var r=!1,i=n-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=e?t+b(i):b(i)+t,r&&(t="-"+t)),t}var v=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(t){var n,e,r;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,r=parseInt(e,10),!isFinite(r)){if(!g(e))throw new Error("invalid integer. Value: "+e);r=0}return r<0&&("u"===t.specifier||10!==n)&&(r=4294967295+r+1),r<0?(e=(-r).toString(n),t.precision&&(e=m(e,t.precision,t.padRight)),e="-"+e):(e=r.toString(n),r||t.precision?t.precision&&(e=m(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===d.call(t.specifier)?d.call(e):v.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function w(t){return"string"==typeof t}var x=Math.abs,j=String.prototype.toLowerCase,_=String.prototype.toUpperCase,O=String.prototype.replace,S=/e\+(\d)$/,E=/e-(\d)$/,I=/^(\d+)$/,T=/^(\d+)e/,P=/\.0$/,A=/\.0*e/,k=/(\..*[^0])0*e/;function V(t){var n,e,r=parseFloat(t.arg);if(!isFinite(r)){if(!g(t.arg))throw new Error("invalid floating-point number. Value: "+e);r=t.arg}switch(t.specifier){case"e":case"E":e=r.toExponential(t.precision);break;case"f":case"F":e=r.toFixed(t.precision);break;case"g":case"G":x(r)<1e-4?((n=t.precision)>0&&(n-=1),e=r.toExponential(n)):e=r.toPrecision(t.precision),t.alternate||(e=O.call(e,k,"$1e"),e=O.call(e,A,"e"),e=O.call(e,P,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=O.call(e,S,"e+0$1"),e=O.call(e,E,"e-0$1"),t.alternate&&(e=O.call(e,I,"$1."),e=O.call(e,T,"$1.e")),r>=0&&t.sign&&(e=t.sign+e),e=t.specifier===_.call(t.specifier)?_.call(e):j.call(e)}function N(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}function F(t,n,e){var r=n-t.length;return r<0?t:t=e?t+N(r):N(r)+t}var B=String.fromCharCode,L=isNaN,C=Array.isArray;function G(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function Y(t){var n,e,r,i,o,u,c,a,l;if(!C(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",c=1,a=0;a<t.length;a++)if(w(r=t[a]))u+=r;else{if(n=void 0!==r.precision,!(r=G(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+a+"`. Value: `"+r+"`.");for(r.mapping&&(c=r.mapping),e=r.flags,l=0;l<e.length;l++)switch(i=e.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=e.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[c],10),c+=1,L(r.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[c],10),c+=1,L(r.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[c],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=h(r);break;case"s":r.maxWidth=n?r.precision:-1;break;case"c":if(!L(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=L(o)?String(r.arg):B(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=V(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=m(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=F(r.arg,r.width,r.padRight)),u+=r.arg||"",c+=1}return u}var X=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function W(t){var n,e,r,i;for(e=[],i=0,r=X.exec(t);r;)(n=t.slice(i,X.lastIndex-r[0].length)).length&&e.push(n),e.push(M(r)),i=X.lastIndex,r=X.exec(t);return(n=t.slice(i)).length&&e.push(n),e}function $(t){return"string"==typeof t}function R(t){var n,e,r;if(!$(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=W(t),(e=new Array(arguments.length))[0]=n,r=1;r<e.length;r++)e[r]=arguments[r];return Y.apply(null,e)}var H,U=Object.prototype,Z=U.toString,D=U.__defineGetter__,q=U.__defineSetter__,z=U.__lookupGetter__,J=U.__lookupSetter__;H=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?y:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(z.call(t,n)||J.call(t,n)?(r=t.__proto__,t.__proto__=U,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(t,n,e.get),u&&q&&q.call(t,n,e.set),t};var K=H;function Q(t,n,e){K(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function tt(t){return"string"==typeof t}var nt=String.prototype.valueOf;var et=r();function rt(t){return"object"==typeof t&&(t instanceof String||(et?function(t){try{return nt.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function it(t){return tt(t)||rt(t)}function ot(t){return"number"==typeof t}Q(it,"isPrimitive",tt),Q(it,"isObject",rt);var ut=Number,ct=ut.prototype.toString;var at=r();function lt(t){return"object"==typeof t&&(t instanceof ut||(at?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function ft(t){return ot(t)||lt(t)}function pt(t){return t!=t}function st(t){return ot(t)&&pt(t)}function yt(t){return lt(t)&&pt(t.valueOf())}function gt(t){return st(t)||yt(t)}Q(ft,"isPrimitive",ot),Q(ft,"isObject",lt),Q(gt,"isPrimitive",st),Q(gt,"isObject",yt);var bt=Number.POSITIVE_INFINITY,mt=ut.NEGATIVE_INFINITY,vt=Math.floor;function dt(t){return vt(t)===t}function ht(t){return t<bt&&t>mt&&dt(t)}function wt(t){return ot(t)&&ht(t)}function xt(t){return lt(t)&&ht(t.valueOf())}function jt(t){return wt(t)||xt(t)}Q(jt,"isPrimitive",wt),Q(jt,"isObject",xt);var _t=Object.prototype.propertyIsEnumerable;var Ot=!_t.call("beep","0");function St(t,n){var e;return null!=t&&(!(e=_t.call(t,n))&&Ot&&it(t)?!st(n=+n)&&wt(n)&&n>=0&&n<t.length:e)}var Et=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var It=p?f:function(t){return null!==t&&"object"==typeof t&&!Et(t)&&"number"==typeof t.length&&dt(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!St(t,"callee")},Tt=Array.prototype.slice;function Pt(t){return null!==t&&"object"==typeof t}Q(Pt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!Et(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Pt));var At=St((function(){}),"prototype"),kt=!St({toString:null},"toString");function Vt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&dt(t.length)&&t.length>=0&&t.length<=9007199254740991}function Nt(t,n,e){var r,i;if(!Vt(t)&&!tt(t))throw new TypeError(R("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!wt(e))throw new TypeError(R("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(gt(n)){for(;i<r;i++)if(gt(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var Ft=/./;function Bt(t){return"boolean"==typeof t}var Lt=Boolean,Ct=Boolean.prototype.toString;var Gt=r();function Yt(t){return"object"==typeof t&&(t instanceof Lt||(Gt?function(t){try{return Ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function Xt(t){return Bt(t)||Yt(t)}function Mt(){return new Function("return this;")()}Q(Xt,"isPrimitive",Bt),Q(Xt,"isObject",Yt);var Wt="object"==typeof self?self:null,$t="object"==typeof window?window:null,Rt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ht="object"==typeof Rt?Rt:null,Ut="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!Bt(t))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Mt()}if(Ut)return Ut;if(Wt)return Wt;if($t)return $t;if(Ht)return Ht;throw new Error("unexpected error. Unable to resolve global object.")}(),Dt=Zt.document&&Zt.document.childNodes,qt=Int8Array;function zt(){return/^\s*function\s*([^(]*)/i}var Jt=/^\s*function\s*([^(]*)/i;function Kt(t){var n,e,r,i;if(("Object"===(e=l(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Jt.exec(r.toString()))return n[1]}return Pt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}Q(zt,"REGEXP",Jt);var Qt="function"==typeof Ft||"object"==typeof qt||"function"==typeof Dt?function(t){return Kt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Kt(t).toLowerCase():n};function tn(t){return t.constructor&&t.constructor.prototype===t}var nn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],en="undefined"==typeof window?void 0:window;var rn=function(){var t;if("undefined"===Qt(en))return!1;for(t in en)try{-1===Nt(nn,t)&&u(en,t)&&null!==en[t]&&"object"===Qt(en[t])&&tn(en[t])}catch(t){return!0}return!1}(),on="undefined"!=typeof window;var un=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var cn=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return It(n)?t(Tt.call(n)):t(n)}:t:function(t){var n,e,r,i,o,c,a;if(i=[],It(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(!1==(r="function"==typeof t)&&!Pt(t))return i;e=At&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if(kt)for(n=function(t){if(!1===on&&!rn)return tn(t);try{return tn(t)}catch(t){return!1}}(t),a=0;a<un.length;a++)c=un[a],n&&"constructor"===c||!u(t,c)||i.push(String(c));return i};function an(t){return Object.keys(Object(t))}var ln=void 0!==Object.keys;var fn="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function pn(){return fn&&"symbol"==typeof Symbol.toStringTag}var sn=Object.prototype.toString;var yn=Object.prototype.hasOwnProperty;function gn(t,n){return null!=t&&yn.call(t,n)}var bn="function"==typeof Symbol?Symbol.toStringTag:"";var mn=pn()?function(t){var n,e,r;if(null==t)return sn.call(t);e=t[bn],n=gn(t,bn);try{t[bn]=void 0}catch(n){return sn.call(t)}return r=sn.call(t),n?t[bn]=e:delete t[bn],r}:function(t){return sn.call(t)};function vn(t){return"[object Arguments]"===mn(t)}var dn=function(){return vn(arguments)}(),hn="function"==typeof Object.defineProperty?Object.defineProperty:null;var wn,xn=Object.defineProperty,jn=Object.prototype,_n=jn.toString,On=jn.__defineGetter__,Sn=jn.__defineSetter__,En=jn.__lookupGetter__,In=jn.__lookupSetter__;wn=function(){try{return hn({},"x",{}),!0}catch(t){return!1}}()?xn:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===_n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===_n.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(En.call(t,n)||In.call(t,n)?(r=t.__proto__,t.__proto__=jn,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&On&&On.call(t,n,e.get),u&&Sn&&Sn.call(t,n,e.set),t};var Tn=wn;function Pn(t,n,e){Tn(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function An(t){return"string"==typeof t}var kn=String.prototype.valueOf;var Vn=pn();function Nn(t){return"object"==typeof t&&(t instanceof String||(Vn?function(t){try{return kn.call(t),!0}catch(t){return!1}}(t):"[object String]"===mn(t)))}function Fn(t){return An(t)||Nn(t)}function Bn(t){return"number"==typeof t}Pn(Fn,"isPrimitive",An),Pn(Fn,"isObject",Nn);var Ln=Number,Cn=Ln.prototype.toString;var Gn=pn();function Yn(t){return"object"==typeof t&&(t instanceof Ln||(Gn?function(t){try{return Cn.call(t),!0}catch(t){return!1}}(t):"[object Number]"===mn(t)))}function Xn(t){return Bn(t)||Yn(t)}function Mn(t){return t!=t}function Wn(t){return Bn(t)&&Mn(t)}function $n(t){return Yn(t)&&Mn(t.valueOf())}function Rn(t){return Wn(t)||$n(t)}Pn(Xn,"isPrimitive",Bn),Pn(Xn,"isObject",Yn),Pn(Rn,"isPrimitive",Wn),Pn(Rn,"isObject",$n);var Hn=Number.POSITIVE_INFINITY,Un=Ln.NEGATIVE_INFINITY,Zn=Math.floor;function Dn(t){return Zn(t)===t}function qn(t){return t<Hn&&t>Un&&Dn(t)}function zn(t){return Bn(t)&&qn(t)}function Jn(t){return Yn(t)&&qn(t.valueOf())}function Kn(t){return zn(t)||Jn(t)}Pn(Kn,"isPrimitive",zn),Pn(Kn,"isObject",Jn);var Qn=Object.prototype.propertyIsEnumerable;var te=!Qn.call("beep","0");function ne(t,n){var e;return null!=t&&(!(e=Qn.call(t,n))&&te&&Fn(t)?!Wn(n=+n)&&zn(n)&&n>=0&&n<t.length:e)}var ee=Array.isArray?Array.isArray:function(t){return"[object Array]"===mn(t)};var re=dn?vn:function(t){return null!==t&&"object"==typeof t&&!ee(t)&&"number"==typeof t.length&&Dn(t.length)&&t.length>=0&&t.length<=4294967295&&gn(t,"callee")&&!ne(t,"callee")},ie=Array.prototype.slice;function oe(t){return null!==t&&"object"==typeof t}Pn(oe,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!ee(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(oe));var ue=ne((function(){}),"prototype"),ce=!ne({toString:null},"toString");function ae(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Dn(t.length)&&t.length>=0&&t.length<=9007199254740991}function le(t,n,e){var r,i;if(!ae(t)&&!An(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!zn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(Rn(n)){for(;i<r;i++)if(Rn(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var fe=/./;function pe(t){return"boolean"==typeof t}var se=Boolean.prototype.toString;var ye=pn();function ge(t){return"object"==typeof t&&(t instanceof Boolean||(ye?function(t){try{return se.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===mn(t)))}function be(t){return pe(t)||ge(t)}function me(){return new Function("return this;")()}Pn(be,"isPrimitive",pe),Pn(be,"isObject",ge);var ve="object"==typeof self?self:null,de="object"==typeof window?window:null,he="object"==typeof Rt?Rt:null;var we=function(t){if(arguments.length){if(!pe(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return me()}if(ve)return ve;if(de)return de;if(he)return he;throw new Error("unexpected error. Unable to resolve global object.")}(),xe=we.document&&we.document.childNodes,je=Int8Array;function _e(){return/^\s*function\s*([^(]*)/i}var Oe=/^\s*function\s*([^(]*)/i;function Se(t){var n,e,r,i;if(("Object"===(e=mn(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Oe.exec(r.toString()))return n[1]}return oe(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}Pn(_e,"REGEXP",Oe);var Ee="function"==typeof fe||"object"==typeof je||"function"==typeof xe?function(t){return Se(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Se(t).toLowerCase():n};function Ie(t){return t.constructor&&t.constructor.prototype===t}var Te=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Pe="undefined"==typeof window?void 0:window;var Ae=function(){var t;if("undefined"===Ee(Pe))return!1;for(t in Pe)try{-1===le(Te,t)&&gn(Pe,t)&&null!==Pe[t]&&"object"===Ee(Pe[t])&&Ie(Pe[t])}catch(t){return!0}return!1}(),ke="undefined"!=typeof window;var Ve=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ne=ln?function(){return 2!==(an(arguments)||"").length}(1,2)?function(t){return re(t)?an(ie.call(t)):an(t)}:an:function(t){var n,e,r,i,o,u,c;if(i=[],re(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!gn(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!oe(t))return i;e=ue&&r}for(o in t)e&&"prototype"===o||!gn(t,o)||i.push(String(o));if(ce)for(n=function(t){if(!1===ke&&!Ae)return Ie(t);try{return Ie(t)}catch(t){return!1}}(t),c=0;c<Ve.length;c++)u=Ve[c],n&&"constructor"===u||!gn(t,u)||i.push(String(u));return i};function Fe(t){return"function"===Ee(t)}var Be,Le=Object.getPrototypeOf;Be=Fe(Object.getPrototypeOf)?Le:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===mn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ce=Be;var Ge=Object.prototype;function Ye(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!ee(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Ce(t))}(t),!n||!gn(t,"constructor")&&gn(n,"constructor")&&Fe(n.constructor)&&"[object Function]"===mn(n.constructor)&&gn(n,"isPrototypeOf")&&Fe(n.isPrototypeOf)&&(n===Ge||function(t){var n;for(n in t)if(!gn(t,n))return!1;return!0}(t)))}var Xe="function"==typeof Object.defineProperty?Object.defineProperty:null;var Me,We=Object.defineProperty,$e=Object.prototype,Re=$e.toString,He=$e.__defineGetter__,Ue=$e.__defineSetter__,Ze=$e.__lookupGetter__,De=$e.__lookupSetter__;Me=function(){try{return Xe({},"x",{}),!0}catch(t){return!1}}()?We:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===Re.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===Re.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(Ze.call(t,n)||De.call(t,n)?(r=t.__proto__,t.__proto__=$e,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&He&&He.call(t,n,e.get),u&&Ue&&Ue.call(t,n,e.set),t};var qe=Me;function ze(t,n,e){qe(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var Je=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ke(){return Je.slice()}var Qe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function tr(){return Qe.slice()}function nr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function er(t,n,e){qe(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function rr(t){return Object.keys(Object(t))}var ir=void 0!==Object.keys;var or="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ur(){return or&&"symbol"==typeof Symbol.toStringTag}var cr=Object.prototype.toString;var ar=Object.prototype.hasOwnProperty;function lr(t,n){return null!=t&&ar.call(t,n)}var fr="function"==typeof Symbol?Symbol.toStringTag:"";var pr=ur()?function(t){var n,e,r;if(null==t)return cr.call(t);e=t[fr],n=lr(t,fr);try{t[fr]=void 0}catch(n){return cr.call(t)}return r=cr.call(t),n?t[fr]=e:delete t[fr],r}:function(t){return cr.call(t)};function sr(t){return"[object Arguments]"===pr(t)}var yr=function(){return sr(arguments)}();function gr(t){return"string"==typeof t}var br=String.prototype.valueOf;var mr=ur();function vr(t){return"object"==typeof t&&(t instanceof String||(mr?function(t){try{return br.call(t),!0}catch(t){return!1}}(t):"[object String]"===pr(t)))}function dr(t){return gr(t)||vr(t)}function hr(t){return"number"==typeof t}ze(dr,"isPrimitive",gr),ze(dr,"isObject",vr);var wr=Number,xr=wr.prototype.toString;var jr=ur();function _r(t){return"object"==typeof t&&(t instanceof wr||(jr?function(t){try{return xr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===pr(t)))}function Or(t){return hr(t)||_r(t)}function Sr(t){return t!=t}function Er(t){return hr(t)&&Sr(t)}function Ir(t){return _r(t)&&Sr(t.valueOf())}function Tr(t){return Er(t)||Ir(t)}ze(Or,"isPrimitive",hr),ze(Or,"isObject",_r),ze(Tr,"isPrimitive",Er),ze(Tr,"isObject",Ir);var Pr=Number.POSITIVE_INFINITY,Ar=wr.NEGATIVE_INFINITY,kr=Math.floor;function Vr(t){return kr(t)===t}function Nr(t){return t<Pr&&t>Ar&&Vr(t)}function Fr(t){return hr(t)&&Nr(t)}function Br(t){return _r(t)&&Nr(t.valueOf())}function Lr(t){return Fr(t)||Br(t)}ze(Lr,"isPrimitive",Fr),ze(Lr,"isObject",Br);var Cr=Object.prototype.propertyIsEnumerable;var Gr=!Cr.call("beep","0");function Yr(t,n){var e;return null!=t&&(!(e=Cr.call(t,n))&&Gr&&dr(t)?!Er(n=+n)&&Fr(n)&&n>=0&&n<t.length:e)}var Xr=Array.isArray?Array.isArray:function(t){return"[object Array]"===pr(t)};var Mr=yr?sr:function(t){return null!==t&&"object"==typeof t&&!Xr(t)&&"number"==typeof t.length&&Vr(t.length)&&t.length>=0&&t.length<=4294967295&&lr(t,"callee")&&!Yr(t,"callee")},Wr=Array.prototype.slice;function $r(t){return null!==t&&"object"==typeof t}ze($r,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!Xr(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}($r));var Rr=Yr((function(){}),"prototype"),Hr=!Yr({toString:null},"toString");function Ur(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Vr(t.length)&&t.length>=0&&t.length<=9007199254740991}function Zr(t,n,e){var r,i;if(!Ur(t)&&!gr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!Fr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(Tr(n)){for(;i<r;i++)if(Tr(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var Dr=/./;function qr(t){return"boolean"==typeof t}var zr=Boolean.prototype.toString;var Jr=ur();function Kr(t){return"object"==typeof t&&(t instanceof Boolean||(Jr?function(t){try{return zr.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===pr(t)))}function Qr(t){return qr(t)||Kr(t)}function ti(){return new Function("return this;")()}ze(Qr,"isPrimitive",qr),ze(Qr,"isObject",Kr);var ni="object"==typeof self?self:null,ei="object"==typeof window?window:null,ri="object"==typeof Rt?Rt:null;var ii=function(t){if(arguments.length){if(!qr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ti()}if(ni)return ni;if(ei)return ei;if(ri)return ri;throw new Error("unexpected error. Unable to resolve global object.")}(),oi=ii.document&&ii.document.childNodes,ui=Int8Array;function ci(){return/^\s*function\s*([^(]*)/i}var ai=/^\s*function\s*([^(]*)/i;function li(t){var n,e,r,i;if(("Object"===(e=pr(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=ai.exec(r.toString()))return n[1]}return $r(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}ze(ci,"REGEXP",ai);var fi="function"==typeof Dr||"object"==typeof ui||"function"==typeof oi?function(t){return li(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?li(t).toLowerCase():n};function pi(t){return t.constructor&&t.constructor.prototype===t}var si=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],yi="undefined"==typeof window?void 0:window;var gi=function(){var t;if("undefined"===fi(yi))return!1;for(t in yi)try{-1===Zr(si,t)&&lr(yi,t)&&null!==yi[t]&&"object"===fi(yi[t])&&pi(yi[t])}catch(t){return!0}return!1}(),bi="undefined"!=typeof window;var mi=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var vi=ir?function(){return 2!==(rr(arguments)||"").length}(1,2)?function(t){return Mr(t)?rr(Wr.call(t)):rr(t)}:rr:function(t){var n,e,r,i,o,u,c;if(i=[],Mr(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!lr(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!$r(t))return i;e=Rr&&r}for(o in t)e&&"prototype"===o||!lr(t,o)||i.push(String(o));if(Hr)for(n=function(t){if(!1===bi&&!gi)return pi(t);try{return pi(t)}catch(t){return!1}}(t),c=0;c<mi.length;c++)u=mi[c],n&&"constructor"===u||!lr(t,u)||i.push(String(u));return i};ze(tr,"enum",nr),function(t,n){var e,r,i;for(e=vi(n),i=0;i<e.length;i++)er(t,r=e[i],n[r])}(tr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var di={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function hi(){return{bool:di.bool,int8:di.int8,uint8:di.uint8,uint8c:di.uint8c,int16:di.int16,uint16:di.uint16,int32:di.int32,uint32:di.uint32,int64:di.int64,uint64:di.uint64,float32:di.float32,float64:di.float64,complex64:di.complex64,complex128:di.complex128,binary:di.binary,generic:di.generic,notype:di.notype,userdefined_type:di.userdefined_type}}ze(Ke,"enum",hi),function(t,n){var e,r,i;for(e=vi(n),i=0;i<e.length;i++)er(t,r=e[i],n[r])}(Ke,hi());var wi=function(t,n){var e,r,i,o,u,c,a,l=!0;if(!oe(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Ye(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(gn(n,"duplicates")&&!pe(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=Ne(t)).length,u={},l)for(a=0;a<r;a++)gn(u,o=t[i=e[a]])?(c=u[o],ee(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(a=0;a<r;a++)u[t[i=e[a]]]=i;return u}(hi(),{duplicates:!1});var xi={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function ji(){var t;return 0===arguments.length?xi.all.slice():(t=xi[arguments[0]])?t.slice():[]}function _i(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Oi(t,n,e){K(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}Q(ji,"enum",_i),function(t,n){var e,r,i;for(e=cn(n),i=0;i<e.length;i++)Oi(t,r=e[i],n[r])}(ji,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Si={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Ei(t){var n=typeof t;return"string"===n?null===function(t){var n=Si[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=wi[t];return"string"==typeof n?n:null}(t):null}var Ii,Ti={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Pi(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=cn(Ti)).length,a=0;a<n;a++){for(i=t[a],u=Ti[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function Ai(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=cn(Ti)).length,a=0;a<n;a++){for(i=t[a],u=Ti[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var ki=function(t){return 0===arguments.length?Pi():(void 0===Ii&&(Ii=Ai()),t=Ei(t),u(Ii,t)?Ii[t].slice():null)}();var Vi,Ni={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Fi(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=cn(Ni)).length,a=0;a<n;a++){for(i=t[a],u=Ni[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function Bi(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=cn(Ni)).length,a=0;a<n;a++){for(i=t[a],u=Ni[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var Li=function(t){return 0===arguments.length?Fi():(void 0===Vi&&(Vi=Bi()),t=Ei(t),u(Vi,t)?Vi[t].slice():null)}();var Ci,Gi={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Yi(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=cn(Gi)).length,a=0;a<n;a++){for(i=t[a],u=Gi[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function Xi(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=cn(Gi)).length,a=0;a<n;a++){for(i=t[a],u=Gi[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var Mi=function(t){return 0===arguments.length?Yi():(void 0===Ci&&(Ci=Xi()),t=Ei(t),u(Ci,t)?Ci[t].slice():null)}();function Wi(t,n,e){return"unsafe"===e||(t===n||"none"!==e&&"equiv"!==e&&("safe"===e?function(t,n){return t===n||ki[t][n]>0}(t,n):"mostly-safe"===e?function(t,n){return t===n||Li[t][n]>0}(t,n):function(t,n){return t===n||Mi[t][n]>0}(t,n)))}export{Wi as default};
//# sourceMappingURL=mod.js.map
