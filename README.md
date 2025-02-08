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

# Logarithm of Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Fréchet][frechet-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Fréchet][frechet-distribution] random variable is

<!-- <equation class="equation" label="eq:frechet_cdf" align="center" raw="F\left( x; \mu, \beta \right ) = e^{{-({\frac{x-m}{s}})^{{-\alpha }}}}" alt="Cumulative distribution function for a Fréchet distribution."> -->

```math
F\left( x; \mu, \beta \right ) = e^{{-({\frac{x-m}{s}})^{{-\alpha }}}}
```

<!-- <div class="equation" align="center" data-raw-text="F\left( x; \mu, \beta \right ) = e^{{-({\frac{x-m}{s}})^{{-\alpha }}}}" data-equation="eq:frechet_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/logcdf/docs/img/equation_frechet_cdf.svg" alt="Cumulative distribution function for a Fréchet distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha > 0` is the shape, `s > 0` the scale, and `m` the location parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-frechet-logcdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats-base-dists-frechet-logcdf' );
```

#### logcdf( x, alpha, s, m )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.

```javascript
var y = logcdf( 10.0, 2.0, 3.0, 5.0 );
// returns ~-0.36

y = logcdf( -3.4, 1.0, 2.0, -4.0 );
// returns ~-3.333

y = logcdf( 0.0, 2.0, 1.0, -1.0 );
// returns -1.0
```

If provided `x <= m`, the function returns `-Infinity`.

```javascript
y = logcdf( -2.0, 2.0, 1.0, -1.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 1.0, 1.0, 0.0 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0, 0.0 );
// returns NaN

y = logcdf( 0.0, 1.0, NaN, 0.0);
// returns NaN

y = logcdf( 0.0, 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -0.1, 1.0, 1.0 );
// returns NaN

y = logcdf( 2.0, 0.0, 1.0, 1.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 1.0, -1.0, 1.0 );
// returns NaN

y = logcdf( 2.0, 1.0, 0.0, 1.0 );
// returns NaN
```

#### logcdf.factory( alpha, s, m )

Returns a function for evaluating the natural logarithm of the [cumulative distribution function][cdf] of a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m`.

```javascript
var mylogcdf = logcdf.factory( 3.0, 3.0, 5.0 );

var y = mylogcdf( 10.0 );
// returns ~-0.216

y = mylogcdf( 7.0 );
// returns ~-3.375
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var logcdf = require( '@stdlib/stats-base-dists-frechet-logcdf' );

var alpha;
var m;
var s;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    alpha = randu() * 10.0;
    x = randu() * 10.0;
    s = randu() * 10.0;
    m = randu() * 10.0;
    y = logcdf( x, alpha, s, m );
    console.log( 'x: %d, α: %d, s: %d, m: %d, ln(F(x;α,s,m)): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-frechet-logcdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-frechet-logcdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-frechet-logcdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-frechet-logcdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-frechet-logcdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-frechet-logcdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-frechet-logcdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-frechet-logcdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-frechet-logcdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-frechet-logcdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-frechet-logcdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-frechet-logcdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-frechet-logcdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-frechet-logcdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-frechet-logcdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-frechet-logcdf/main/LICENSE

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

</section>

<!-- /.links -->
