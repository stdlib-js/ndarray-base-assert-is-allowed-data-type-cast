// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).isAllowedCast=n()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return i&&"symbol"==typeof Symbol.toStringTag}var r=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var a="function"==typeof Symbol?Symbol:void 0,c="function"==typeof a?a.toStringTag:"";var l,f=e()?function(t){var n,i,e;if(null==t)return r.call(t);i=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return r.call(t)}return e=r.call(t),n?t[c]=i:delete t[c],e}:function(t){return r.call(t)};function p(t){return"[object Arguments]"===f(t)}l=function(){return p(arguments)}();var s=l,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var m=Object.defineProperty;function y(t){return"number"==typeof t}function b(t){var n,i="";for(n=0;n<t;n++)i+="0";return i}function d(t,n,i){var e=!1,r=n-t.length;return r<0||(function(t){return"-"===t[0]}(t)&&(e=!0,t=t.substr(1)),t=i?t+b(r):b(r)+t,e&&(t="-"+t)),t}var h=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function x(t){var n,i,e;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(i=t.arg,e=parseInt(i,10),!isFinite(e)){if(!y(i))throw new Error("invalid integer. Value: "+i);e=0}return e<0&&("u"===t.specifier||10!==n)&&(e=4294967295+e+1),e<0?(i=(-e).toString(n),t.precision&&(i=d(i,t.precision,t.padRight)),i="-"+i):(i=e.toString(n),e||t.precision?t.precision&&(i=d(i,t.precision,t.padRight)):i="",t.sign&&(i=t.sign+i)),16===n&&(t.alternate&&(i="0x"+i),i=t.specifier===v.call(t.specifier)?v.call(i):h.call(i)),8===n&&t.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var w=Math.abs,j=String.prototype.toLowerCase,_=String.prototype.toUpperCase,O=String.prototype.replace,S=/e\+(\d)$/,E=/e-(\d)$/,T=/^(\d+)$/,k=/^(\d+)e/,I=/\.0$/,P=/\.0*e/,V=/(\..*[^0])0*e/;function A(t){var n,i,e=parseFloat(t.arg);if(!isFinite(e)){if(!y(t.arg))throw new Error("invalid floating-point number. Value: "+i);e=t.arg}switch(t.specifier){case"e":case"E":i=e.toExponential(t.precision);break;case"f":case"F":i=e.toFixed(t.precision);break;case"g":case"G":w(e)<1e-4?((n=t.precision)>0&&(n-=1),i=e.toExponential(n)):i=e.toPrecision(t.precision),t.alternate||(i=O.call(i,V,"$1e"),i=O.call(i,P,"e"),i=O.call(i,I,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return i=O.call(i,S,"e+0$1"),i=O.call(i,E,"e-0$1"),t.alternate&&(i=O.call(i,T,"$1."),i=O.call(i,k,"$1.e")),e>=0&&t.sign&&(i=t.sign+i),i=t.specifier===_.call(t.specifier)?_.call(i):j.call(i)}function F(t){var n,i="";for(n=0;n<t;n++)i+=" ";return i}var N=String.fromCharCode,C=isNaN,$=Array.isArray;function B(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function L(t){var n,i,e,r,o,u,a,c,l,f,p,s,g;if(!$(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(e=t[c],"string"==typeof e)u+=e;else{if(n=void 0!==e.precision,!(e=B(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+e+"`.");for(e.mapping&&(a=e.mapping),i=e.flags,l=0;l<i.length;l++)switch(r=i.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=i.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+r)}if("*"===e.width){if(e.width=parseInt(arguments[a],10),a+=1,C(e.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[a],10),a+=1,C(e.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[a],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=x(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!C(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=C(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=A(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=d(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(f=e.arg,p=e.width,s=e.padRight,g=void 0,(g=p-f.length)<0?f:f=s?f+F(g):F(g)+f)),u+=e.arg||"",a+=1}return u}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function W(t){var n,i,e,r;for(i=[],r=0,e=R.exec(t);e;)(n=t.slice(r,R.lastIndex-e[0].length)).length&&i.push(n),i.push(G(e)),r=R.lastIndex,e=R.exec(t);return(n=t.slice(r)).length&&i.push(n),i}function X(t){var n,i;if("string"!=typeof t)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=[W(t)],i=1;i<arguments.length;i++)n.push(arguments[i]);return L.apply(null,n)}var Z,M=Object.prototype,Y=M.toString,U=M.__defineGetter__,H=M.__defineSetter__,q=M.__lookupGetter__,z=M.__lookupSetter__;Z=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?m:function(t,n,i){var e,r,o,u;if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof i||null===i||"[object Array]"===Y.call(i))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((r="value"in i)&&(q.call(t,n)||z.call(t,n)?(e=t.__proto__,t.__proto__=M,delete t[n],t[n]=i.value,t.__proto__=e):t[n]=i.value),o="get"in i,u="set"in i,r&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(t,n,i.get),u&&H&&H.call(t,n,i.set),t};var D=Z;function J(t,n,i){D(t,n,{configurable:!1,enumerable:!1,writable:!1,value:i})}function K(t){return"string"==typeof t}var Q=String.prototype.valueOf;var tt=e();function nt(t){return"object"==typeof t&&(t instanceof String||(tt?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function it(t){return K(t)||nt(t)}function et(t){return"number"==typeof t}J(it,"isPrimitive",K),J(it,"isObject",nt);var rt=Number,ot=rt.prototype.toString;var ut=e();function at(t){return"object"==typeof t&&(t instanceof rt||(ut?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function ct(t){return et(t)||at(t)}function lt(t){return t!=t}function ft(t){return et(t)&&lt(t)}function pt(t){return at(t)&&lt(t.valueOf())}function st(t){return ft(t)||pt(t)}J(ct,"isPrimitive",et),J(ct,"isObject",at),J(st,"isPrimitive",ft),J(st,"isObject",pt);var gt=Number.POSITIVE_INFINITY,mt=rt.NEGATIVE_INFINITY,yt=Math.floor;function bt(t){return yt(t)===t}function dt(t){return t<gt&&t>mt&&bt(t)}function ht(t){return et(t)&&dt(t)}function vt(t){return at(t)&&dt(t.valueOf())}function xt(t){return ht(t)||vt(t)}J(xt,"isPrimitive",ht),J(xt,"isObject",vt);var wt=Object.prototype.propertyIsEnumerable;var jt=!wt.call("beep","0");function _t(t,n){var i;return null!=t&&(!(i=wt.call(t,n))&&jt&&it(t)?!ft(n=+n)&&ht(n)&&n>=0&&n<t.length:i)}var Ot=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var St=s?p:function(t){return null!==t&&"object"==typeof t&&!Ot(t)&&"number"==typeof t.length&&bt(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!_t(t,"callee")},Et=Array.prototype.slice;function Tt(t){return null!==t&&"object"==typeof t}J(Tt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var i,e;if(!Ot(n))return!1;if(0===(i=n.length))return!1;for(e=0;e<i;e++)if(!1===t(n[e]))return!1;return!0}}(Tt));var kt=_t((function(){}),"prototype"),It=!_t({toString:null},"toString"),Pt=9007199254740991;function Vt(t,n,i){var e,r,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&bt(o.length)&&o.length>=0&&o.length<=Pt||K(t)))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(e=t.length))return-1;if(3===arguments.length){if(!ht(i))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",i));if(i>=0){if(i>=e)return-1;r=i}else(r=e+i)<0&&(r=0)}else r=0;if(st(n)){for(;r<e;r++)if(st(t[r]))return r}else for(;r<e;r++)if(t[r]===n)return r;return-1}var At=/./;function Ft(t){return"boolean"==typeof t}var Nt=Boolean,Ct=Boolean.prototype.toString;var $t=e();function Bt(t){return"object"==typeof t&&(t instanceof Nt||($t?function(t){try{return Ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Lt(t){return Ft(t)||Bt(t)}J(Lt,"isPrimitive",Ft),J(Lt,"isObject",Bt);var Rt="object"==typeof self?self:null,Gt="object"==typeof window?window:null,Wt="object"==typeof global?global:null,Xt="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!Ft(t))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Xt)return Xt;if(Rt)return Rt;if(Gt)return Gt;if(Wt)return Wt;throw new Error("unexpected error. Unable to resolve global object.")}(),Mt=Zt.document&&Zt.document.childNodes,Yt=Int8Array;function Ut(){return/^\s*function\s*([^(]*)/i}var Ht=/^\s*function\s*([^(]*)/i;function qt(t){var n,i,e,r;if(("Object"===(i=f(t).slice(8,-1))||"Error"===i)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=Ht.exec(e.toString()))return n[1]}return Tt(r=t)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))?"Buffer":i}J(Ut,"REGEXP",Ht);var zt="function"==typeof At||"object"==typeof Yt||"function"==typeof Mt?function(t){return qt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?qt(t).toLowerCase():n};function Dt(t){return t.constructor&&t.constructor.prototype===t}var Jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kt="undefined"==typeof window?void 0:window;var Qt=function(){var t;if("undefined"===zt(Kt))return!1;for(t in Kt)try{-1===Vt(Jt,t)&&u(Kt,t)&&null!==Kt[t]&&"object"===zt(Kt[t])&&Dt(Kt[t])}catch(t){return!0}return!1}(),tn="undefined"!=typeof window;var nn,en=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];nn=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return St(n)?t(Et.call(n)):t(n)}:t:function(t){var n,i,e,r,o,a,c;if(r=[],St(t)){for(c=0;c<t.length;c++)r.push(c.toString());return r}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)r.push(c.toString())}else{if(!1==(e="function"==typeof t)&&!Tt(t))return r;i=kt&&e}for(o in t)i&&"prototype"===o||!u(t,o)||r.push(String(o));if(It)for(n=function(t){if(!1===tn&&!Qt)return Dt(t);try{return Dt(t)}catch(t){return!1}}(t),c=0;c<en.length;c++)a=en[c],n&&"constructor"===a||!u(t,a)||r.push(String(a));return r};var rn=nn;function on(t){return"function"===zt(t)}var un,an=Object,cn=Object.getPrototypeOf;un=on(Object.getPrototypeOf)?cn:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ln=un;var fn=Object.prototype;function pn(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!Ot(t)}(t)&&(n=function(t){return null==t?null:(t=an(t),ln(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&on(n.constructor)&&"[object Function]"===f(n.constructor)&&u(n,"isPrototypeOf")&&on(n.isPrototypeOf)&&(n===fn||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var sn={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function gn(){var t;return 0===arguments.length?sn.all.slice():(t=sn[arguments[0]])?t.slice():[]}function mn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function yn(t,n,i){D(t,n,{configurable:!1,enumerable:!0,writable:!1,value:i})}J(gn,"enum",mn),function(t,n){var i,e,r;for(i=rn(n),r=0;r<i.length;r++)yn(t,e=i[r],n[e])}(gn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var bn=function(t,n){var i,e,r,o,a,c,l,f=!0;if(!Tt(t))throw new TypeError(X("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!pn(n))throw new TypeError(X("invalid argument. Options argument must be an object. Value: `%s`.",n));if(u(n,"duplicates")&&!Ft(f=n.duplicates))throw new TypeError(X("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(e=(i=rn(t)).length,a={},f)for(l=0;l<e;l++)u(a,o=t[r=i[l]])?(c=a[o],Ot(c)?a[o].push(r):a[o]=[c,r]):a[o]=r;else for(l=0;l<e;l++)a[t[r=i[l]]]=r;return a}({bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},{duplicates:!1});var dn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function hn(t){var n=typeof t;return"string"===n?null===function(t){var n=dn[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=bn[t];return"string"==typeof n?n:null}(t):null}var vn,xn={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};var wn=function(t){return 0===arguments.length?function(){var t,n,i,e,r,o,u,a,c;for(i={},n=(t=rn(xn)).length,c=0;c<n;c++){for(r=t[c],u=xn[r],e={},a=0;a<n;a++)e[o=t[a]]=u[o];i[r]=e}return i}():(void 0===vn&&(vn=function(){var t,n,i,e,r,o,u,a,c;for(i={},n=(t=rn(xn)).length,c=0;c<n;c++){for(r=t[c],u=xn[r],e=[],a=0;a<n;a++)1===u[o=t[a]]&&e.push(o);i[r]=e}return i}()),t=hn(t),u(vn,t)?vn[t].slice():null)}();var jn,_n={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};var On=function(t){return 0===arguments.length?function(){var t,n,i,e,r,o,u,a,c;for(i={},n=(t=rn(_n)).length,c=0;c<n;c++){for(r=t[c],u=_n[r],e={},a=0;a<n;a++)e[o=t[a]]=u[o];i[r]=e}return i}():(void 0===jn&&(jn=function(){var t,n,i,e,r,o,u,a,c;for(i={},n=(t=rn(_n)).length,c=0;c<n;c++){for(r=t[c],u=_n[r],e=[],a=0;a<n;a++)1===u[o=t[a]]&&e.push(o);i[r]=e}return i}()),t=hn(t),u(jn,t)?jn[t].slice():null)}();var Sn,En={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};var Tn=function(t){return 0===arguments.length?function(){var t,n,i,e,r,o,u,a,c;for(i={},n=(t=rn(En)).length,c=0;c<n;c++){for(r=t[c],u=En[r],e={},a=0;a<n;a++)e[o=t[a]]=u[o];i[r]=e}return i}():(void 0===Sn&&(Sn=function(){var t,n,i,e,r,o,u,a,c;for(i={},n=(t=rn(En)).length,c=0;c<n;c++){for(r=t[c],u=En[r],e=[],a=0;a<n;a++)1===u[o=t[a]]&&e.push(o);i[r]=e}return i}()),t=hn(t),u(Sn,t)?Sn[t].slice():null)}();return function(t,n,i){return"unsafe"===i||(t===n||"none"!==i&&"equiv"!==i&&("safe"===i?function(t,n){return t===n||wn[t][n]>0}(t,n):"mostly-safe"===i?function(t,n){return t===n||On[t][n]>0}(t,n):function(t,n){return t===n||Tn[t][n]>0}(t,n)))}}));
//# sourceMappingURL=index.js.map
