"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=n(function(o,a){
var v=require('@stdlib/ndarray-base-assert-is-safe-data-type-cast/dist'),l=require('@stdlib/ndarray-base-assert-is-mostly-safe-data-type-cast/dist'),q=require('@stdlib/ndarray-base-assert-is-same-kind-data-type-cast/dist'),i=require('@stdlib/ndarray-base-dtype-resolve-str/dist');function d(r,e,u){var s,t;return u==="unsafe"||(s=i(r),t=i(e),s===t)?!0:u==="none"||u==="equiv"?!1:u==="safe"?v(r,e):u==="mostly-safe"?l(r,e):q(r,e)}a.exports=d
});var C=f();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
