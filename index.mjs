// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-safe-data-type-cast@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-mostly-safe-data-type-cast@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-same-kind-data-type-cast@v0.2.1-esm/index.mjs";function a(a,r,d){return"unsafe"===d||(a===r||"none"!==d&&"equiv"!==d&&("safe"===d?s(a,r):"mostly-safe"===d?t(a,r):e(a,r)))}export{a as default};
//# sourceMappingURL=index.mjs.map
