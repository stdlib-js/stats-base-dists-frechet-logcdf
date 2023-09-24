// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";function r(t,i,r,d){return s(t)||s(i)||s(r)||s(d)||i<=0||r<=0?NaN:t<=d?e:-n((t-d)/r,-i)}function d(t,r,d){return s(t)||s(r)||s(d)||t<=0||r<=0?i(NaN):function(i){if(s(i))return NaN;if(i<=d)return e;return-n((i-d)/r,-t)}}t(r,"factory",d);export{r as default,d as factory};
//# sourceMappingURL=index.mjs.map
