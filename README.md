<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isAllowedCast

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine whether an ndarray [data type][@stdlib/ndarray/dtypes] can be cast to another ndarray [data type][@stdlib/ndarray/dtypes] according to a specified [casting mode][@stdlib/ndarray/casting-modes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
isAllowedCast = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isAllowedCast = require( 'path/to/vendor/umd/ndarray-base-assert-is-allowed-data-type-cast/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isAllowedCast;
})();
</script>
```

#### isAllowedCast( from, to, casting )

Returns a boolean indicating whether an ndarray [data type][@stdlib/ndarray/dtypes] can be cast to another ndarray [data type][@stdlib/ndarray/dtypes] according to a specified [`casting`][@stdlib/ndarray/casting-modes] mode.

```javascript
var bool = isAllowedCast( 'float32', 'float64', 'safe' );
// returns true

bool = isAllowedCast( 'float64', 'int32', 'safe' );
// returns false
```

The following [`casting`][@stdlib/ndarray/casting-modes] modes are supported:

-   `none`: only allow casting between identical types.
-   `equiv`: allow casting between identical and byte swapped types.
-   `safe`: only allow "safe" casts.
-   `mostly-safe`: allow "safe" casts and, for floating-point data types, downcasts.
-   `same-kind`: allow "safe" casts and casts within the same kind (e.g., between signed integers or between floats).
-   `unsafe`: allow casting between all types (including between integers and floats).

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-casting-modes@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var DTYPES;
var MODES;
var bool;
var dt1;
var dt2;
var i;
var j;
var k;

// Get a list of supported ndarray data types and casting modes:
DTYPES = dtypes();
MODES = modes();

// For each data type and mode, determine whether one can cast to another data type...
for ( i = 0; i < DTYPES.length; i++ ) {
    dt1 = DTYPES[ i ];
    for ( j = 0; j < DTYPES.length; j++ ) {
        dt2 = DTYPES[ j ];
        for ( k = 0; k < MODES.length; k++ ) {
            bool = isAllowedCast( dt1, dt2, MODES[ k ] );
            console.log( '%s => %s. %s: %s.', dt1, dt2, MODES[ k ], bool );
        }
    }
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-assert-is-allowed-data-type-cast.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-assert-is-allowed-data-type-cast

[test-image]: https://github.com/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/main/LICENSE

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/umd

[@stdlib/ndarray/casting-modes]: https://github.com/stdlib-js/ndarray-casting-modes/tree/umd

</section>

<!-- /.links -->
