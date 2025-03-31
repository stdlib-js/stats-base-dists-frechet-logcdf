/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var Float64Array = require( '@stdlib/array-float64' );
var uniform = require( '@stdlib/random-base-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var EPS = require( '@stdlib/constants-float64-eps' );
var pkg = require( './../package.json' ).name;
var logcdf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var alpha;
	var len;
	var m;
	var s;
	var x;
	var y;
	var i;

	len = 100;
	x = new Float64Array( len );
	alpha = new Float64Array( len );
	s = new Float64Array( len );
	m = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( -50.0, 50.0 );
		alpha[ i ] = uniform( EPS, 20.0 );
		m[ i ] = uniform( -20.0, 40.0 );
		s[ i ] = uniform( EPS, 20.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = logcdf( x[ i % len ], alpha[ i % len ], s[ i % len ], m[ i % len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory', function benchmark( b ) {
	var mylogcdf;
	var alpha;
	var len;
	var m;
	var s;
	var x;
	var y;
	var i;

	alpha = 10.0;
	s = 3.0;
	m = 4.0;
	mylogcdf = logcdf.factory( alpha, s, m );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 50.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mylogcdf( x[ i % len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
