(function e(t,n,r,i,s){var o={},u=function(e){return t.Function("return "+e)()},a=t.document,f,l=function(e,n){var s={exports:{}};o[e]=1,r[e]=s.exports;if(!n)n=n||t[e];else if(typeof n=="function"){var u=c;i[e]&&i[e].sandbox&&typeof u=="function"&&(u=f),n=n(u,s.exports,s)||s.exports}return n=n,r[e]=n},c=function(e){var t=r[e],n=[e,t];return n&&(e=n[0],t=n[1]),o[e]&&t?t:(typeof t=="string"&&t.indexOf("(function(")===0&&(t=u(t)),l(e,t))},h={exports:{}};for(var p in r)o[p]=0;(function(){t.localStorage&&s.version&&function(){var o=a.getElementById("lmd-initializer"),u=o?o.getAttribute("data-key"):"lmd";try{t.localStorage[u]=t.JSON.stringify({modules:r,main:"("+n+")",lmd:"("+e+")",modules_options:i,options:s})}catch(f){}}()})(),n(c,h.exports,h)})(this,function(e,t,n){var r=e("sha512");$(function(){function e(){n.val(r(i.val()))}var t=$(".b-button"),n=$(".b-result"),i=$(".b-input");t.click(e)})},{sha512:'(function(e){function r(e){return h(l(v(e)))}function i(e){return p(l(v(e)))}function s(e,t){return d(l(v(e)),t)}function o(e,t){return h(c(v(e),v(t)))}function u(e,t){return p(c(v(e),v(t)))}function a(e,t,n){return d(c(v(e),v(t)),n)}function f(){return r("abc").toLowerCase()=="ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a"+"2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"}function l(e){return b(E(y(e),e.length*8))}function c(e,t){var n=y(e);n.length>32&&(n=E(n,e.length*8));var r=Array(32),i=Array(32);for(var s=0;s<32;s++)r[s]=n[s]^909522486,i[s]=n[s]^1549556828;var o=E(r.concat(y(t)),1024+t.length*8);return b(E(i.concat(o),1536))}function h(e){try{t}catch(n){t=0}var r=t?"0123456789ABCDEF":"0123456789abcdef",i="",s;for(var o=0;o<e.length;o++)s=e.charCodeAt(o),i+=r.charAt(s>>>4&15)+r.charAt(s&15);return i}function p(e){try{n}catch(t){n=""}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i="",s=e.length;for(var o=0;o<s;o+=3){var u=e.charCodeAt(o)<<16|(o+1<s?e.charCodeAt(o+1)<<8:0)|(o+2<s?e.charCodeAt(o+2):0);for(var a=0;a<4;a++)o*8+a*6>e.length*8?i+=n:i+=r.charAt(u>>>6*(3-a)&63)}return i}function d(e,t){var n=t.length,r,i,s,o,u,a=Array(Math.ceil(e.length/2));for(r=0;r<a.length;r++)a[r]=e.charCodeAt(r*2)<<8|e.charCodeAt(r*2+1);var f=Math.ceil(e.length*8/(Math.log(t.length)/Math.log(2))),l=Array(f);for(i=0;i<f;i++){u=Array(),o=0;for(r=0;r<a.length;r++){o=(o<<16)+a[r],s=Math.floor(o/n),o-=s*n;if(u.length>0||s>0)u[u.length]=s}l[i]=o,a=u}var c="";for(r=l.length-1;r>=0;r--)c+=t.charAt(l[r]);return c}function v(e){var t="",n=-1,r,i;while(++n<e.length)r=e.charCodeAt(n),i=n+1<e.length?e.charCodeAt(n+1):0,55296<=r&&r<=56319&&56320<=i&&i<=57343&&(r=65536+((r&1023)<<10)+(i&1023),n++),r<=127?t+=String.fromCharCode(r):r<=2047?t+=String.fromCharCode(192|r>>>6&31,128|r&63):r<=65535?t+=String.fromCharCode(224|r>>>12&15,128|r>>>6&63,128|r&63):r<=2097151&&(t+=String.fromCharCode(240|r>>>18&7,128|r>>>12&63,128|r>>>6&63,128|r&63));return t}function m(e){var t="";for(var n=0;n<e.length;n++)t+=String.fromCharCode(e.charCodeAt(n)&255,e.charCodeAt(n)>>>8&255);return t}function g(e){var t="";for(var n=0;n<e.length;n++)t+=String.fromCharCode(e.charCodeAt(n)>>>8&255,e.charCodeAt(n)&255);return t}function y(e){var t=Array(e.length>>2);for(var n=0;n<t.length;n++)t[n]=0;for(var n=0;n<e.length*8;n+=8)t[n>>5]|=(e.charCodeAt(n/8)&255)<<24-n%32;return t}function b(e){var t="";for(var n=0;n<e.length*32;n+=8)t+=String.fromCharCode(e[n>>5]>>>24-n%32&255);return t}function E(e,t){w==undefined&&(w=new Array(new S(1116352408,-685199838),new S(1899447441,602891725),new S(-1245643825,-330482897),new S(-373957723,-2121671748),new S(961987163,-213338824),new S(1508970993,-1241133031),new S(-1841331548,-1357295717),new S(-1424204075,-630357736),new S(-670586216,-1560083902),new S(310598401,1164996542),new S(607225278,1323610764),new S(1426881987,-704662302),new S(1925078388,-226784913),new S(-2132889090,991336113),new S(-1680079193,633803317),new S(-1046744716,-815192428),new S(-459576895,-1628353838),new S(-272742522,944711139),new S(264347078,-1953704523),new S(604807628,2007800933),new S(770255983,1495990901),new S(1249150122,1856431235),new S(1555081692,-1119749164),new S(1996064986,-2096016459),new S(-1740746414,-295247957),new S(-1473132947,766784016),new S(-1341970488,-1728372417),new S(-1084653625,-1091629340),new S(-958395405,1034457026),new S(-710438585,-1828018395),new S(113926993,-536640913),new S(338241895,168717936),new S(666307205,1188179964),new S(773529912,1546045734),new S(1294757372,1522805485),new S(1396182291,-1651133473),new S(1695183700,-1951439906),new S(1986661051,1014477480),new S(-2117940946,1206759142),new S(-1838011259,344077627),new S(-1564481375,1290863460),new S(-1474664885,-1136513023),new S(-1035236496,-789014639),new S(-949202525,106217008),new S(-778901479,-688958952),new S(-694614492,1432725776),new S(-200395387,1467031594),new S(275423344,851169720),new S(430227734,-1194143544),new S(506948616,1363258195),new S(659060556,-544281703),new S(883997877,-509917016),new S(958139571,-976659869),new S(1322822218,-482243893),new S(1537002063,2003034995),new S(1747873779,-692930397),new S(1955562222,1575990012),new S(2024104815,1125592928),new S(-2067236844,-1578062990),new S(-1933114872,442776044),new S(-1866530822,593698344),new S(-1538233109,-561857047),new S(-1090935817,-1295615723),new S(-965641998,-479046869),new S(-903397682,-366583396),new S(-779700025,566280711),new S(-354779690,-840897762),new S(-176337025,-294727304),new S(116418474,1914138554),new S(174292421,-1563912026),new S(289380356,-1090974290),new S(460393269,320620315),new S(685471733,587496836),new S(852142971,1086792851),new S(1017036298,365543100),new S(1126000580,-1676669620),new S(1288033470,-885112138),new S(1501505948,-60457430),new S(1607167915,987167468),new S(1816402316,1246189591)));var n=new Array(new S(1779033703,-205731576),new S(-1150833019,-2067093701),new S(1013904242,-23791573),new S(-1521486534,1595750129),new S(1359893119,-1377402159),new S(-1694144372,725511199),new S(528734635,-79577749),new S(1541459225,327033209)),r=new S(0,0),i=new S(0,0),s=new S(0,0),o=new S(0,0),u=new S(0,0),a=new S(0,0),f=new S(0,0),l=new S(0,0),c=new S(0,0),h=new S(0,0),p=new S(0,0),d=new S(0,0),v=new S(0,0),m=new S(0,0),g=new S(0,0),y=new S(0,0),b=new S(0,0),E,O,M=new Array(80);for(O=0;O<80;O++)M[O]=new S(0,0);e[t>>5]|=128<<24-(t&31),e[(t+128>>10<<5)+31]=t;for(O=0;O<e.length;O+=32){x(s,n[0]),x(o,n[1]),x(u,n[2]),x(a,n[3]),x(f,n[4]),x(l,n[5]),x(c,n[6]),x(h,n[7]);for(E=0;E<16;E++)M[E].h=e[O+2*E],M[E].l=e[O+2*E+1];for(E=16;E<80;E++)T(g,M[E-2],19),N(y,M[E-2],29),C(b,M[E-2],6),d.l=g.l^y.l^b.l,d.h=g.h^y.h^b.h,T(g,M[E-15],1),T(y,M[E-15],8),C(b,M[E-15],7),p.l=g.l^y.l^b.l,p.h=g.h^y.h^b.h,L(M[E],d,M[E-7],p,M[E-16]);for(E=0;E<80;E++)v.l=f.l&l.l^~f.l&c.l,v.h=f.h&l.h^~f.h&c.h,T(g,f,14),T(y,f,18),N(b,f,9),d.l=g.l^y.l^b.l,d.h=g.h^y.h^b.h,T(g,s,28),N(y,s,2),N(b,s,7),p.l=g.l^y.l^b.l,p.h=g.h^y.h^b.h,m.l=s.l&o.l^s.l&u.l^o.l&u.l,m.h=s.h&o.h^s.h&u.h^o.h&u.h,A(r,h,d,v,w[E],M[E]),k(i,p,m),x(h,c),x(c,l),x(l,f),k(f,a,r),x(a,u),x(u,o),x(o,s),k(s,r,i);k(n[0],n[0],s),k(n[1],n[1],o),k(n[2],n[2],u),k(n[3],n[3],a),k(n[4],n[4],f),k(n[5],n[5],l),k(n[6],n[6],c),k(n[7],n[7],h)}var _=new Array(16);for(O=0;O<8;O++)_[2*O]=n[O].h,_[2*O+1]=n[O].l;return _}function S(e,t){this.h=e,this.l=t}function x(e,t){e.h=t.h,e.l=t.l}function T(e,t,n){e.l=t.l>>>n|t.h<<32-n,e.h=t.h>>>n|t.l<<32-n}function N(e,t,n){e.l=t.h>>>n|t.l<<32-n,e.h=t.l>>>n|t.h<<32-n}function C(e,t,n){e.l=t.l>>>n|t.h<<32-n,e.h=t.h>>>n}function k(e,t,n){var r=(t.l&65535)+(n.l&65535),i=(t.l>>>16)+(n.l>>>16)+(r>>>16),s=(t.h&65535)+(n.h&65535)+(i>>>16),o=(t.h>>>16)+(n.h>>>16)+(s>>>16);e.l=r&65535|i<<16,e.h=s&65535|o<<16}function L(e,t,n,r,i){var s=(t.l&65535)+(n.l&65535)+(r.l&65535)+(i.l&65535),o=(t.l>>>16)+(n.l>>>16)+(r.l>>>16)+(i.l>>>16)+(s>>>16),u=(t.h&65535)+(n.h&65535)+(r.h&65535)+(i.h&65535)+(o>>>16),a=(t.h>>>16)+(n.h>>>16)+(r.h>>>16)+(i.h>>>16)+(u>>>16);e.l=s&65535|o<<16,e.h=u&65535|a<<16}function A(e,t,n,r,i,s){var o=(t.l&65535)+(n.l&65535)+(r.l&65535)+(i.l&65535)+(s.l&65535),u=(t.l>>>16)+(n.l>>>16)+(r.l>>>16)+(i.l>>>16)+(s.l>>>16)+(o>>>16),a=(t.h&65535)+(n.h&65535)+(r.h&65535)+(i.h&65535)+(s.h&65535)+(u>>>16),f=(t.h>>>16)+(n.h>>>16)+(r.h>>>16)+(i.h>>>16)+(s.h>>>16)+(a>>>16);e.l=o&65535|u<<16,e.h=a&65535|f<<16}var t=0,n="",w;return r})'},{},{version:"0.0.1"})