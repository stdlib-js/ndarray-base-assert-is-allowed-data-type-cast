"use strict";var n=function(u,e){return function(){try{return e||u((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var f=n(function(o,a){
var v=require('@stdlib/ndarray-base-assert-is-safe-data-type-cast/dist'),l=require('@stdlib/ndarray-base-assert-is-mostly-safe-data-type-cast/dist'),q=require('@stdlib/ndarray-base-assert-is-same-kind-data-type-cast/dist'),i=require('@stdlib/ndarray-base-dtype-resolve-str/dist');function d(u,e,r){var s,t;return r==="unsafe"||(s=i(u),t=i(e),s===t)?!0:r==="none"||r==="equiv"?!1:r==="safe"?v(u,e):r==="mostly-safe"?l(u,e):q(u,e)}a.exports=d
});var C=f();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
