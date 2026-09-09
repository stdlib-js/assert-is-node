"use strict";var a=function(e,t){return function(){try{return t||e((t={exports:{}}).exports,t),t.exports}catch(g){throw (t=0, g)}};};var s=a(function(C,i){
var j=Object.prototype.toString;function q(e){return j.call(e)}i.exports=q
});var c=a(function(E,l){
var n;function S(){var e="";return e+="try {",e+="return this === global;",e+="} catch ( err ) {",e+="return false;",e+="}",new Function(e)()}n=S();l.exports=n
});var f=a(function(F,p){
var r=require("process"),y=require('@stdlib/utils-global/dist'),u=require('@stdlib/utils-native-class/dist'),b=require('@stdlib/assert-is-plain-object/dist'),v=require('@stdlib/assert-is-string/dist').isPrimitive,d=s(),m=c(),o=y(),x=/node|io\.js/;function G(){return typeof global=="object"&&global===o&&o===o.global&&(u(o)==="[object global]"||u(o)==="[object Object]")&&m===!0&&typeof require=="function"&&typeof r=="object"&&d(r)==="[object process]"&&b(r.versions)&&v(r.versions.node)&&(typeof r.release=="undefined"||b(r.release)&&v(r.release.name)&&x.test(r.release.name))}p.exports=G
});var O=f(),h=O();module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
