"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=c(function(b,f){
var n=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-pow/dist'),d=require('@stdlib/constants-float64-ninf/dist');function F(e,r,t,u){var i;return n(e)||n(r)||n(t)||n(u)||r<=0||t<=0?NaN:e<=u?d:(i=(e-u)/t,-y(i,-r))}f.exports=F
});var N=c(function(j,q){
var g=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-pow/dist'),z=require('@stdlib/constants-float64-ninf/dist');function I(e,r,t){if(a(e)||a(r)||a(t)||e<=0||r<=0)return g(NaN);return u;function u(i){var o;return a(i)?NaN:i<=t?z:(o=(i-t)/r,-w(o,-e))}}q.exports=I
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=v(),O=N();p(s,"factory",O);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
