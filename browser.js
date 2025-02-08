// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,v,"e"),t=l.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,g,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,c,f,s,l,p,g,y,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))c+=t;else{if(e=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,E(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,g=t.width,y=t.padRight,d=void 0,(d=g-p.length)<0?p:p=y?p+m(d):m(d)+p)),c+=t.arg||"",f+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function F(r){var e,n;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var j=Object.prototype,N=j.toString,T=j.__defineGetter__,O=j.__defineSetter__,V=j.__lookupGetter__,$=j.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=j,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C=Math.floor;function L(r){return C(r)===r}function P(r){return L(r/2)}function R(r){return P(r>0?r-1:r+1)}var Z=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY;function X(r){return r===Z||r===M}var Y=Math.sqrt;function q(r){return Math.abs(r)}var z,B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),D=Object.prototype.toString,J=Object.prototype.hasOwnProperty,K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"",rr=B&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return D.call(r);n=r[Q],a=Q,e=null!=(i=r)&&J.call(i,a);try{r[Q]=void 0}catch(e){return D.call(r)}return t=D.call(r),e?r[Q]=n:delete r[Q],t}:function(r){return D.call(r)},er="function"==typeof Uint32Array,nr="function"==typeof Uint32Array?Uint32Array:null,tr="function"==typeof Uint32Array?Uint32Array:void 0;z=function(){var r,e,n;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(er&&n instanceof Uint32Array||"[object Uint32Array]"===rr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir,ar=z,or="function"==typeof Float64Array,ur="function"==typeof Float64Array?Float64Array:null,cr="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),n=e,r=(or&&n instanceof Float64Array||"[object Float64Array]"===rr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr,sr=ir,lr="function"==typeof Uint8Array,pr="function"==typeof Uint8Array?Uint8Array:null,gr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,256,257]),n=e,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===rr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var yr,dr=fr,hr="function"==typeof Uint16Array,vr="function"==typeof Uint16Array?Uint16Array:null,wr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,e,n;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(hr&&n instanceof Uint16Array||"[object Uint16Array]"===rr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr={uint16:yr,uint8:dr};(br=new mr.uint16(1))[0]=4660;var Ar,_r,Er=52===new mr.uint8(br.buffer)[0];!0===Er?(Ar=1,_r=0):(Ar=0,_r=1);var Ur={HIGH:Ar,LOW:_r},Sr=new sr(1),Ir=new ar(Sr.buffer),xr=Ur.HIGH,kr=Ur.LOW;function Fr(r,e,n,t){return Sr[0]=r,e[t]=Ir[xr],e[t+n]=Ir[kr],e}function jr(r){return Fr(r,[0,0],1,0)}H(jr,"assign",Fr);var Nr=!0===Er?0:1,Tr=new sr(1),Or=new ar(Tr.buffer);function Vr(r,e){return Tr[0]=r,Or[Nr]=e>>>0,Tr[0]}function $r(r){return 0|r}var Gr,Hr,Wr=2147483647,Cr=2147483648,Lr=!0===Er?1:0,Pr=new sr(1),Rr=new ar(Pr.buffer);function Zr(r){return Pr[0]=r,Rr[Lr]}!0===Er?(Gr=1,Hr=0):(Gr=0,Hr=1);var Mr={HIGH:Gr,LOW:Hr},Xr=new sr(1),Yr=new ar(Xr.buffer),qr=Mr.HIGH,zr=Mr.LOW;function Br(r,e){return Yr[qr]=r,Yr[zr]=e,Xr[0]}var Dr=[0,0];function Jr(r,e){var n,t;return jr.assign(r,Dr,1,0),n=Dr[0],n&=Wr,t=Zr(e),Br(n|=t&=Cr,Dr[1])}var Kr=1072693247,Qr=1e300,re=1e-300,ee=!0===Er?1:0,ne=new sr(1),te=new ar(ne.buffer);function ie(r,e){return ne[0]=r,te[ee]=e>>>0,ne[0]}var ae=1023,oe=1048575,ue=1048576,ce=1072693248,fe=536870912,se=524288,le=20,pe=9007199254740992,ge=.9617966939259756,ye=.9617967009544373,de=-7.028461650952758e-9,he=[1,1.5],ve=[0,.5849624872207642],we=[0,1.350039202129749e-8],be=1.4426950408889634,me=1.4426950216293335,Ae=1.9259629911266175e-8,_e=1023,Ee=-1023,Ue=-1074,Se=22250738585072014e-324,Ie=4503599627370496;function xe(r,e,n,t){return W(r)||X(r)?(e[t]=r,e[t+n]=0,e):0!==r&&q(r)<Se?(e[t]=r*Ie,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return xe(r,[0,0],1,0)}),"assign",xe);var ke=2146435072,Fe=2220446049250313e-31,je=2148532223,Ne=[0,0],Te=[0,0];function Oe(r,e){var n,t;return 0===e||0===r||W(r)||X(r)?r:(xe(r,Ne,1,0),r=Ne[0],e+=Ne[1],e+=function(r){var e=Zr(r);return(e=(e&ke)>>>20)-ae|0}(r),e<Ue?Jr(0,r):e>_e?r<0?M:Z:(e<=Ee?(e+=52,t=Fe):t=1,jr.assign(r,Te,1,0),n=Te[0],n&=je,t*Br(n|=e+ae<<20,Te[1])))}var Ve=.6931471805599453,$e=1048575,Ge=1048576,He=1071644672,We=20,Ce=.6931471824645996,Le=-1.904654299957768e-9,Pe=1072693247,Re=1105199104,Ze=1139802112,Me=1083179008,Xe=1072693248,Ye=1083231232,qe=3230714880,ze=31,Be=1e300,De=1e-300,Je=8008566259537294e-32,Ke=[0,0],Qe=[0,0];function rn(r,e){var n,t,i,a,o,u,c,f,s,l,p,g,y,d;if(W(r)||W(e))return NaN;if(jr.assign(e,Ke,1,0),o=Ke[0],0===Ke[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Y(r);if(-.5===e)return 1/Y(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(X(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:q(r)<1==(e===Z)?0:Z}(r,e)}if(jr.assign(r,Ke,1,0),a=Ke[0],0===Ke[1]){if(0===a)return function(r,e){return e===M?Z:e===Z?0:e>0?R(e)?r:0:R(e)?Jr(Z,r):Z}(r,e);if(1===r)return 1;if(-1===r&&R(e))return-1;if(X(r))return r===M?rn(-0,-e):e<0?0:Z}if(r<0&&!1===L(e))return(r-r)/(r-r);if(i=q(r),n=a&Wr|0,t=o&Wr|0,c=o>>>ze|0,u=(u=a>>>ze|0)&&R(e)?-1:1,t>Re){if(t>Ze)return function(r,e){return(Zr(r)&Wr)<=Kr?e<0?Qr*Qr:re*re:e>0?Qr*Qr:re*re}(r,e);if(n<Pe)return 1===c?u*Be*Be:u*De*De;if(n>Xe)return 0===c?u*Be*Be:u*De*De;p=function(r,e){var n,t,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*Ae-a*be)-((t=Vr(t=(o=me*i)+u,0))-o),r[0]=t,r[1]=n,r}(Qe,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g,y,d,h,v,w,b,m,A,_,E;return m=0,n<ue&&(m-=53,n=Zr(e*=pe)),m+=(n>>le)-ae|0,n=(A=n&oe|0)|ce|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ue),o=Vr(i=(w=(e=ie(e,n))-(f=he[_]))*(b=1/(e+f)),0),t=(n>>1|fe)+se,c=ie(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Vr(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=Vr(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0),p=ye*l,d=(g=de*l+(b-(l-w))*ge+we[_])-((y=Vr(y=p+g+(s=ve[_])+(h=m),0))-h-s-p),r[0]=y,r[1]=d,r}(Qe,i,n);if(g=(l=(e-(f=Vr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),jr.assign(g,Ke,1,0),y=$r(Ke[0]),d=$r(Ke[1]),y>=Me){if(0!=(y-Me|d))return u*Be*Be;if(l+Je>g-s)return u*Be*Be}else if((y&Wr)>=Ye){if(0!=(y-qe|d))return u*De*De;if(l<=g-s)return u*De*De}return g=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&Wr|0)>>We)-ae|0,f=0,s>He&&(i=ie(0,((f=r+(Ge>>l+1)>>>0)&~($e>>(l=((f&Wr)>>We)-ae|0)))>>>0),f=(f&$e|Ge)>>We-l>>>0,r<0&&(f=-f),e-=i),r=$r(r=Zr(c=1-((c=(a=(i=Vr(i=n+e,0))*Ce)+(o=(n-(i-e))*Ve+i*Le))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<We>>>0)>>We<=0?Oe(c,f):ie(c,r)}(y,s,l),u*g}function en(r,e,n,t){return W(r)||W(e)||W(n)||W(t)||e<=0||n<=0?NaN:r<=t?M:-rn((r-t)/n,-e)}return H(en,"factory",(function(r,e,n){return W(r)||W(e)||W(n)||r<=0||e<=0?(t=NaN,function(){return t}):function(t){return W(t)?NaN:t<=n?M:-rn((t-n)/e,-r)};var t})),en},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logcdf=e();
//# sourceMappingURL=browser.js.map
