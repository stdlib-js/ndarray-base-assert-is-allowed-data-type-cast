// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){var n=t.default;if("function"==typeof n){var e=function(){return n.apply(this,arguments)};e.prototype=n.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})})),e}var n=function(t){return Object.keys(Object(t))},e=n;var r=function(){return function(){return 2!==(e(arguments)||"").length}(1,2)},i=void 0!==Object.keys;var o=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return o&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,l=c;var a=function(t){return l.call(t)},f=Object.prototype.hasOwnProperty;var p=function(t,n){return null!=t&&f.call(t,n)},v="function"==typeof Symbol?Symbol.toStringTag:"",y=p,b=v,m=c;var s=a,g=function(t){var n,e,r;if(null==t)return m.call(t);e=t[b],n=y(t,b);try{t[b]=void 0}catch(n){return m.call(t)}return r=m.call(t),n?t[b]=e:delete t[b],r},x=u()?g:s,d=x;var h=function(t){return"[object Arguments]"===d(t)},j=h;var w=function(){return j(arguments)}(),O="function"==typeof Object.defineProperty?Object.defineProperty:null;var _=function(){try{return O({},"x",{}),!0}catch(t){return!1}},P=Object.defineProperty,S=Object.prototype,E=S.toString,T=S.__defineGetter__,I=S.__defineSetter__,A=S.__lookupGetter__,k=S.__lookupSetter__;var V=function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===E.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===E.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(A.call(t,n)||k.call(t,n)?(r=t.__proto__,t.__proto__=S,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&T&&T.call(t,n,e.get),u&&I&&I.call(t,n,e.set),t},N=P,B=V,F=_()?N:B,G=F;var L=function(t,n,e){G(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})},M=L;var X=function(t){return"string"==typeof t},Y=String.prototype.valueOf;var C=x,D=function(t){try{return Y.call(t),!0}catch(t){return!1}},H=u();var R=function(t){return"object"==typeof t&&(t instanceof String||(H?D(t):"[object String]"===C(t)))},W=X,q=R;var z=M,U=function(t){return W(t)||q(t)},J=R;z(U,"isPrimitive",X),z(U,"isObject",J);var K=U;var Q=function(t){return"number"==typeof t},Z=Number,$=Z.prototype.toString;var tt=x,nt=Z,et=function(t){try{return $.call(t),!0}catch(t){return!1}},rt=u();var it=function(t){return"object"==typeof t&&(t instanceof nt||(rt?et(t):"[object Number]"===tt(t)))},ot=Q,ut=it;var ct=M,lt=function(t){return ot(t)||ut(t)},at=it;ct(lt,"isPrimitive",Q),ct(lt,"isObject",at);var ft=lt;var pt=function(t){return t!=t},vt=ft.isPrimitive,yt=pt;var bt=function(t){return vt(t)&&yt(t)},mt=ft.isObject,st=pt;var gt=function(t){return mt(t)&&st(t.valueOf())},xt=bt,dt=gt;var ht=M,jt=function(t){return xt(t)||dt(t)},wt=gt;ht(jt,"isPrimitive",bt),ht(jt,"isObject",wt);var Ot=jt,_t=Number.POSITIVE_INFINITY,Pt=Z.NEGATIVE_INFINITY,St=Math.floor;var Et=function(t){return St(t)===t},Tt=_t,It=Pt,At=Et;var kt=function(t){return t<Tt&&t>It&&At(t)},Vt=ft.isPrimitive,Nt=kt;var Bt=function(t){return Vt(t)&&Nt(t)},Ft=ft.isObject,Gt=kt;var Lt=function(t){return Ft(t)&&Gt(t.valueOf())},Mt=Bt,Xt=Lt;var Yt=M,Ct=function(t){return Mt(t)||Xt(t)},Dt=Lt;Yt(Ct,"isPrimitive",Bt),Yt(Ct,"isObject",Dt);var Ht,Rt=Ct,Wt=Object.prototype.propertyIsEnumerable;Ht=!Wt.call("beep","0");var qt=K,zt=Ot.isPrimitive,Ut=Rt.isPrimitive,Jt=Wt,Kt=Ht;var Qt=function(t,n){var e;return null!=t&&(!(e=Jt.call(t,n))&&Kt&&qt(t)?!zt(n=+n)&&Ut(n)&&n>=0&&n<t.length:e)},Zt=Qt,$t=x;var tn=Array.isArray?Array.isArray:function(t){return"[object Array]"===$t(t)},nn=p,en=Zt,rn=tn,on=Et;var un=w?h:function(t){return null!==t&&"object"==typeof t&&!rn(t)&&"number"==typeof t.length&&on(t.length)&&t.length>=0&&t.length<=4294967295&&nn(t,"callee")&&!en(t,"callee")},cn=un,ln=n,an=Array.prototype.slice;var fn=function(t){return cn(t)?ln(an.call(t)):ln(t)},pn=tn;var vn=function(t){return null!==t&&"object"==typeof t};M(vn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!pn(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(vn));var yn=vn;var bn=Zt((function(){}),"prototype"),mn=!Zt({toString:null},"toString"),sn=Et;var gn=Ot,xn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&sn(t.length)&&t.length>=0&&t.length<=9007199254740991},dn=K.isPrimitive,hn=Rt.isPrimitive;var jn=function(t,n,e){var r,i;if(!xn(t)&&!dn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!hn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(gn(n)){for(;i<r;i++)if(gn(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1},wn=/./;var On=function(t){return"boolean"==typeof t},_n=Boolean.prototype.toString;var Pn=x,Sn=function(t){try{return _n.call(t),!0}catch(t){return!1}},En=u();var Tn=function(t){return"object"==typeof t&&(t instanceof Boolean||(En?Sn(t):"[object Boolean]"===Pn(t)))},In=On,An=Tn;var kn=M,Vn=function(t){return In(t)||An(t)},Nn=Tn;kn(Vn,"isPrimitive",On),kn(Vn,"isObject",Nn);var Bn=Vn;var Fn=function(){return new Function("return this;")()},Gn="object"==typeof self?self:null,Ln="object"==typeof window?window:null,Mn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Xn="object"==typeof Mn?Mn:null;module.exports=Xn;var Yn=Bn.isPrimitive,Cn=Fn,Dn=Gn,Hn=Ln,Rn=t(Object.freeze({__proto__:null}));var Wn=function(t){if(arguments.length){if(!Yn(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Cn()}if(Dn)return Dn;if(Hn)return Hn;if(Rn)return Rn;throw new Error("unexpected error. Unable to resolve global object.")},qn=Wn(),zn=qn.document&&qn.document.childNodes,Un=Int8Array,Jn=wn,Kn=zn,Qn=Un;var Zn=function(){return"function"==typeof Jn||"object"==typeof Qn||"function"==typeof Kn};var $n=function(){return/^\s*function\s*([^(]*)/i},te=$n;M(te,"REGEXP",$n());var ne=yn;var ee=x,re=te.REGEXP,ie=function(t){return ne(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var oe=function(t){var n,e,r;if(("Object"===(e=ee(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=re.exec(r.toString()))return n[1]}return ie(t)?"Buffer":e},ue=oe;var ce=oe;var le=function(t){var n;return null===t?"null":"object"===(n=typeof t)?ue(t).toLowerCase():n},ae=function(t){return ce(t).toLowerCase()},fe=Zn()?ae:le;var pe,ve=function(t){return t.constructor&&t.constructor.prototype===t},ye="undefined"==typeof window?void 0:window,be=p,me=jn,se=fe,ge=ve,xe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],de=ye;pe=function(){var t;if("undefined"===se(de))return!1;for(t in de)try{-1===me(xe,t)&&be(de,t)&&null!==de[t]&&"object"===se(de[t])&&ge(de[t])}catch(t){return!0}return!1}();var he="undefined"!=typeof window,je=pe,we=ve,Oe=he;var _e=yn,Pe=p,Se=un,Ee=bn,Te=mn,Ie=function(t){if(!1===Oe&&!je)return we(t);try{return we(t)}catch(t){return!1}},Ae=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ke=n,Ve=fn,Ne=function(t){var n,e,r,i,o,u,c;if(i=[],Se(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!Pe(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1===(r="function"==typeof t)&&!_e(t))return i;e=Ee&&r}for(o in t)e&&"prototype"===o||!Pe(t,o)||i.push(String(o));if(Te)for(n=Ie(t),c=0;c<Ae.length;c++)u=Ae[c],n&&"constructor"===u||!Pe(t,u)||i.push(String(u));return i},Be=i?r()?Ve:ke:Ne,Fe=tn;var Ge=function(t){return"object"==typeof t&&null!==t&&!Fe(t)},Le=fe;var Me=function(t){return"function"===Le(t)},Xe=Object.getPrototypeOf;var Ye=function(t){return t.__proto__},Ce=x,De=Ye;var He=function(t){var n=De(t);return n||null===n?n:"[object Function]"===Ce(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Re=Xe,We=He,qe=Me(Object.getPrototypeOf)?Re:We;var ze=Ge,Ue=Me,Je=function(t){return null==t?null:(t=Object(t),qe(t))},Ke=p,Qe=x,Ze=Object.prototype;var $e=function(t){var n;return!!ze(t)&&(!(n=Je(t))||!Ke(t,"constructor")&&Ke(n,"constructor")&&Ue(n.constructor)&&"[object Function]"===Qe(n.constructor)&&Ke(n,"isPrototypeOf")&&Ue(n.isPrototypeOf)&&(n===Ze||function(t){var n;for(n in t)if(!Ke(t,n))return!1;return!0}(t)))},tr=Be,nr=tn,er=$e,rr=yn,ir=Bn.isPrimitive,or=p;var ur=function(t,n){var e,r,i,o,u,c,l,a=!0;if(!rr(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!er(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(or(n,"duplicates")&&(a=n.duplicates,!ir(a)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(r=(e=tr(t)).length,u={},a)for(l=0;l<r;l++)o=t[i=e[l]],or(u,o)?(c=u[o],nr(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(l=0;l<r;l++)u[t[i=e[l]]]=i;return u},cr=ur,lr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var ar=function(){return lr.slice()},fr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var pr=F;var vr=function(t,n,e){pr(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})},yr=vr,br=yr,mr=Be;var sr=function(t,n){var e,r,i;for(e=mr(n),i=0;i<e.length;i++)r=e[i],br(t,r,n[r]);return t},gr=function(){return fr.slice()},xr=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},dr=sr;M(gr,"enum",xr),dr(gr,xr());var hr=gr,jr=(0,hr.enum)();var wr=yr,Or=Be;var _r=function(t,n){var e,r,i;for(e=Or(n),i=0;i<e.length;i++)r=e[i],wr(t,r,n[r]);return t},Pr=ar,Sr=function(){return{bool:jr.bool,int8:jr.int8,uint8:jr.uint8,uint8c:jr.uint8c,int16:jr.int16,uint16:jr.uint16,int32:jr.int32,uint32:jr.uint32,int64:jr.int64,uint64:jr.uint64,float32:jr.float32,float64:jr.float64,complex64:jr.complex64,complex128:jr.complex128,binary:jr.binary,generic:jr.generic,notype:jr.notype,userdefined_type:jr.userdefined_type}},Er=_r;M(Pr,"enum",Sr),Er(Pr,Sr());var Tr=cr((0,Pr.enum)(),{duplicates:!1});var Ir=function(t){var n=Tr[t];return"string"==typeof n?n:null},Ar=(0,hr.enum)();var kr=Ir,Vr=function(t){var n=Ar[t];return"number"==typeof n?n:null};var Nr,Br=function(t){var n=typeof t;return"string"===n?null===Vr(t)?null:t:"number"===n?kr(t):null},Fr=Be,Gr=p,Lr=Br,Mr={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Xr(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Fr(Mr)).length,l=0;l<n;l++){for(i=t[l],u=Mr[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function Yr(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Fr(Mr)).length,l=0;l<n;l++){for(i=t[l],u=Mr[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var Cr=function(t){return 0===arguments.length?Xr():(void 0===Nr&&(Nr=Yr()),t=Lr(t),Gr(Nr,t)?Nr[t].slice():null)}();var Dr,Hr=function(t,n){return t===n||Cr[t][n]>0},Rr=Be,Wr=p,qr=Br,zr={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Ur(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Rr(zr)).length,l=0;l<n;l++){for(i=t[l],u=zr[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function Jr(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Rr(zr)).length,l=0;l<n;l++){for(i=t[l],u=zr[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var Kr=function(t){return 0===arguments.length?Ur():(void 0===Dr&&(Dr=Jr()),t=qr(t),Wr(Dr,t)?Dr[t].slice():null)}();var Qr=function(t,n){return t===n||Kr[t][n]>0};function Zr(t,n,e){return"unsafe"===e||(t===n||"none"!==e&&"equiv"!==e&&("safe"===e?Hr(t,n):Qr(t,n)))}export{Zr as default};
//# sourceMappingURL=mod.js.map
