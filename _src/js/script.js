/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).LocomotiveScroll=e()}(this,(function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function i(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?c(t):e}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=l(t);if(e){var n=l(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return h(this,i)}}function u(t,e,i){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var s=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(s){var n=Object.getOwnPropertyDescriptor(s,e);return n.get?n.get.call(i):n.value}})(t,e,i||t)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],s=!0,n=!1,o=void 0;try{for(var r,l=t[Symbol.iterator]();!(s=(r=l.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(t){n=!0,o=t}finally{try{s||null==l.return||l.return()}finally{if(n)throw o}}return i}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var y={el:document,name:"scroll",offset:[0,0],repeat:!1,smooth:!1,initPosition:{x:0,y:0},direction:"vertical",gestureDirection:"vertical",reloadOnContextChange:!1,lerp:.1,class:"is-inview",scrollbarContainer:!1,scrollbarClass:"c-scrollbar",scrollingClass:"has-scroll-scrolling",draggingClass:"has-scroll-dragging",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",getSpeed:!1,getDirection:!1,scrollFromAnywhere:!1,multiplier:1,firefoxMultiplier:50,touchMultiplier:2,resetNativeScroll:!0,tablet:{smooth:!1,direction:"vertical",gestureDirection:"vertical",breakpoint:1024},smartphone:{smooth:!1,direction:"vertical",gestureDirection:"vertical"}},b=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),Object.assign(this,y,i),this.smartphone=y.smartphone,i.smartphone&&Object.assign(this.smartphone,i.smartphone),this.tablet=y.tablet,i.tablet&&Object.assign(this.tablet,i.tablet),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.els={},this.currentElements={},this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.checkScroll=this.checkScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},limit:{x:this.html.offsetWidth,y:this.html.offsetHeight},currentElements:this.currentElements},this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",this.isMobile&&(this.direction=this[this.context].direction),"horizontal"===this.direction?this.directionAxis="x":this.directionAxis="y",this.getDirection&&(this.instance.direction=null),this.getDirection&&(this.instance.speed=0),this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return i(e,[{key:"init",value:function(){this.initEvents()}},{key:"checkScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var t=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame((function(){t.resize(),t.resizeTick=!1})))}},{key:"resize",value:function(){}},{key:"checkContext",value:function(){if(this.reloadOnContextChange){this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&this.windowWidth>=this.tablet.breakpoint;var t=this.context;if(this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",t!=this.context)("desktop"==t?this.smooth:this[t].smooth)!=("desktop"==this.context?this.smooth:this[this.context].smooth)&&window.location.reload()}}},{key:"initEvents",value:function(){var t=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach((function(e){e.addEventListener("click",t.setScrollTo,!1)}))}},{key:"setScrollTo",value:function(t){t.preventDefault(),this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name,"-href"))||t.currentTarget.getAttribute("href"),{offset:t.currentTarget.getAttribute("data-".concat(this.name,"-offset"))})}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(t){var e=this,i=this.instance.scroll.y,s=i+this.windowHeight,n=this.instance.scroll.x,o=n+this.windowWidth;Object.entries(this.els).forEach((function(r){var l=f(r,2),a=l[0],c=l[1];if(!c||c.inView&&!t||("horizontal"===e.direction?o>=c.left&&n<c.right&&e.setInView(c,a):s>=c.top&&i<c.bottom&&e.setInView(c,a)),c&&c.inView)if("horizontal"===e.direction){var h=c.right-c.left;c.progress=(e.instance.scroll.x-(c.left-e.windowWidth))/(h+e.windowWidth),(o<c.left||n>c.right)&&e.setOutOfView(c,a)}else{var d=c.bottom-c.top;c.progress=(e.instance.scroll.y-(c.top-e.windowHeight))/(d+e.windowHeight),(s<c.top||i>c.bottom)&&e.setOutOfView(c,a)}})),this.hasScrollTicking=!1}},{key:"setInView",value:function(t,e){this.els[e].inView=!0,t.el.classList.add(t.class),this.currentElements[e]=t,t.call&&this.hasCallEventSet&&(this.dispatchCall(t,"enter"),t.repeat||(this.els[e].call=!1))}},{key:"setOutOfView",value:function(t,e){var i=this;this.els[e].inView=!1,Object.keys(this.currentElements).forEach((function(t){t===e&&delete i.currentElements[t]})),t.call&&this.hasCallEventSet&&this.dispatchCall(t,"exit"),t.repeat&&t.el.classList.remove(t.class)}},{key:"dispatchCall",value:function(t,e){this.callWay=e,this.callValue=t.call.split(",").map((function(t){return t.trim()})),this.callObj=t,1==this.callValue.length&&(this.callValue=this.callValue[0]);var i=new Event(this.namespace+"call");this.el.dispatchEvent(i)}},{key:"dispatchScroll",value:function(){var t=new Event(this.namespace+"scroll");this.el.dispatchEvent(t)}},{key:"setEvents",value:function(t,e){this.listeners[t]||(this.listeners[t]=[]);var i=this.listeners[t];i.push(e),1===i.length&&this.el.addEventListener(this.namespace+t,this.checkEvent,!1),"call"===t&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(t,e){if(this.listeners[t]){var i=this.listeners[t],s=i.indexOf(e);s<0||(i.splice(s,1),0===i.index&&this.el.removeEventListener(this.namespace+t,this.checkEvent,!1))}}},{key:"checkEvent",value:function(t){var e=this,i=t.type.replace(this.namespace,""),s=this.listeners[i];s&&0!==s.length&&s.forEach((function(t){switch(i){case"scroll":return t(e.instance);case"call":return t(e.callValue,e.callWay,e.callObj);default:return t()}}))}},{key:"startScroll",value:function(){}},{key:"stopScroll",value:function(){}},{key:"setScroll",value:function(t,e){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var t=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach((function(e){t.el.removeEventListener(t.namespace+e,t.checkEvent,!1)})),this.listeners={},this.scrollToEls.forEach((function(e){e.removeEventListener("click",t.setScrollTo,!1)})),this.html.classList.remove(this.initClass)}}]),e}(),g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function w(t,e){return t(e={exports:{}},e.exports),e.exports}var x=w((function(t,e){t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var i,s=t.HTMLElement||t.Element,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:s.prototype.scroll||l,scrollIntoView:s.prototype.scrollIntoView},o=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,r=(i=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(i)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?p.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},s.prototype.scroll=s.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var t=arguments[0].left,e=arguments[0].top;p.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},s.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},s.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var i=u(this),s=i.getBoundingClientRect(),o=this.getBoundingClientRect();i!==e.body?(p.call(this,i,i.scrollLeft+o.left-s.left,i.scrollTop+o.top-s.top),"fixed"!==t.getComputedStyle(i).position&&t.scrollBy({left:s.left,top:s.top,behavior:"smooth"})):t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function a(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+r<t.scrollHeight:"X"===e?t.clientWidth+r<t.scrollWidth:void 0}function h(e,i){var s=t.getComputedStyle(e,null)["overflow"+i];return"auto"===s||"scroll"===s}function d(t){var e=c(t,"Y")&&h(t,"Y"),i=c(t,"X")&&h(t,"X");return e||i}function u(t){for(;t!==e.body&&!1===d(t);)t=t.parentNode||t.host;return t}function f(e){var i,s,n,r,l=(o()-e.startTime)/468;r=l=l>1?1:l,i=.5*(1-Math.cos(Math.PI*r)),s=e.startX+(e.x-e.startX)*i,n=e.startY+(e.y-e.startY)*i,e.method.call(e.scrollable,s,n),s===e.x&&n===e.y||t.requestAnimationFrame(f.bind(t,e))}function p(i,s,r){var a,c,h,d,u=o();i===e.body?(a=t,c=t.scrollX||t.pageXOffset,h=t.scrollY||t.pageYOffset,d=n.scroll):(a=i,c=i.scrollLeft,h=i.scrollTop,d=l),f({scrollable:a,method:d,startTime:u,startX:c,startY:h,x:s,y:r})}}}})),S=(x.polyfill,function(e){r(n,e);var s=d(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,n),(e=s.call(this,i)).resetNativeScroll&&(history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0)),window.addEventListener("scroll",e.checkScroll,!1),void 0===window.smoothscrollPolyfill&&(window.smoothscrollPolyfill=x,window.smoothscrollPolyfill.polyfill()),e}return i(n,[{key:"init",value:function(){this.instance.scroll.y=window.pageYOffset,this.addElements(),this.detectElements(),u(l(n.prototype),"init",this).call(this)}},{key:"checkScroll",value:function(){var t=this;u(l(n.prototype),"checkScroll",this).call(this),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.instance.scroll.y=window.pageYOffset,Object.entries(this.els).length&&(this.hasScrollTicking||(requestAnimationFrame((function(){t.detectElements()})),this.hasScrollTicking=!0))}},{key:"addDirection",value:function(){window.pageYOffset>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):window.pageYOffset<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){window.pageYOffset!=this.instance.scroll.y?this.instance.speed=(window.pageYOffset-this.instance.scroll.y)/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"resize",value:function(){Object.entries(this.els).length&&(this.windowHeight=window.innerHeight,this.updateElements())}},{key:"addElements",value:function(){var t=this;this.els={},this.el.querySelectorAll("[data-"+this.name+"]").forEach((function(e,i){e.getBoundingClientRect();var s,n,o,r=e.dataset[t.name+"Class"]||t.class,l="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:i,a="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,c=e.dataset[t.name+"Repeat"],h=e.dataset[t.name+"Call"],d=e.dataset[t.name+"Target"],u=(o=void 0!==d?document.querySelector("".concat(d)):e).getBoundingClientRect();s=u.top+t.instance.scroll.y,n=u.left+t.instance.scroll.x;var f=s+o.offsetHeight,p=n+o.offsetWidth;c="false"!=c&&(null!=c||t.repeat);var m=t.getRelativeOffset(a),v={el:e,targetEl:o,id:l,class:r,top:s+=m[0],bottom:f-=m[1],left:n,right:p,offset:a,progress:0,repeat:c,inView:!1,call:h};t.els[l]=v,e.classList.contains(r)&&t.setInView(t.els[l],l)}))}},{key:"updateElements",value:function(){var t=this;Object.entries(this.els).forEach((function(e){var i=f(e,2),s=i[0],n=i[1],o=n.targetEl.getBoundingClientRect().top+t.instance.scroll.y,r=o+n.targetEl.offsetHeight,l=t.getRelativeOffset(n.offset);t.els[s].top=o+l[0],t.els[s].bottom=r-l[1]})),this.hasScrollTicking=!1}},{key:"getRelativeOffset",value:function(t){var e=[0,0];if(t)for(var i=0;i<t.length;i++)"string"==typeof t[i]?t[i].includes("%")?e[i]=parseInt(t[i].replace("%","")*this.windowHeight/100):e[i]=parseInt(t[i]):e[i]=t[i];return e}},{key:"scrollTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=parseInt(e.offset)||0,s=!!e.callback&&e.callback;if("string"==typeof t){if("top"===t)t=this.html;else if("bottom"===t)t=this.html.offsetHeight-window.innerHeight;else if(!(t=document.querySelector(t)))return}else if("number"==typeof t)t=parseInt(t);else if(!t||!t.tagName)return void console.warn("`target` parameter is not valid");i="number"!=typeof t?t.getBoundingClientRect().top+i+this.instance.scroll.y:t+i;var n=function(){return parseInt(window.pageYOffset)===parseInt(i)};if(s){if(n())return void s();var o=function t(){n()&&(window.removeEventListener("scroll",t),s())};window.addEventListener("scroll",o)}window.scrollTo({top:i,behavior:0===e.duration?"auto":"smooth"})}},{key:"update",value:function(){this.addElements(),this.detectElements()}},{key:"destroy",value:function(){u(l(n.prototype),"destroy",this).call(this),window.removeEventListener("scroll",this.checkScroll,!1)}}]),n}(b)),k=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;function A(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var O=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach((function(t){s[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,s,n=A(t),o=1;o<arguments.length;o++){for(var r in i=Object(arguments[o]))T.call(i,r)&&(n[r]=i[r]);if(k){s=k(i);for(var l=0;l<s.length;l++)E.call(i,s[l])&&(n[s[l]]=i[s[l]])}}return n};function D(){}D.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,r=s.length;o<r;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}};var C=D,L=w((function(t,e){(function(){(null!==e?e:this).Lethargy=function(){function t(t,e,i,s){this.stability=null!=t?Math.abs(t):8,this.sensitivity=null!=e?1+Math.abs(e):100,this.tolerance=null!=i?1+Math.abs(i):1.1,this.delay=null!=s?s:150,this.lastUpDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.lastDownDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.deltasTimestamp=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this)}return t.prototype.check=function(t){var e;return null!=(t=t.originalEvent||t).wheelDelta?e=t.wheelDelta:null!=t.deltaY?e=-40*t.deltaY:null==t.detail&&0!==t.detail||(e=-40*t.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),e>0?(this.lastUpDeltas.push(e),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(e),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(t){var e,i,s,n,o,r,l;return null===(e=-1===t?this.lastDownDeltas:this.lastUpDeltas)[0]?t:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&e[0]===e[2*this.stability-1])&&(s=e.slice(0,this.stability),i=e.slice(this.stability,2*this.stability),l=s.reduce((function(t,e){return t+e})),o=i.reduce((function(t,e){return t+e})),r=l/s.length,n=o/i.length,Math.abs(r)<Math.abs(n*this.tolerance)&&this.sensitivity<Math.abs(n)&&t)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t}()}).call(g)})),M={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1},j=Object.prototype.toString,_=Object.prototype.hasOwnProperty;function B(t,e){return function(){return t.apply(e,arguments)}}var W=L.Lethargy,H="virtualscroll",R=V,P=37,Y=38,I=39,z=40,X=32;function V(t){!function(t){if(!t)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(0===e.length)for(var i in t)_.call(t,i)&&"function"==typeof t[i]&&"[object Function]"==j.call(t[i])&&e.push(i);for(var s=0;s<e.length;s++){var n=e[s];t[n]=B(t[n],t)}}(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,t&&t.el&&(this.el=t.el,delete t.el),this.options=O({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},t),this.options.limitInertia&&(this._lethargy=new W),this._emitter=new C,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,void 0!==this.options.passive&&(this.listenerOptions={passive:this.options.passive})}function F(t,e,i){return(1-i)*t+i*e}function q(t){var e={};if(window.getComputedStyle){var i=getComputedStyle(t),s=i.transform||i.webkitTransform||i.mozTransform,n=s.match(/^matrix3d\((.+)\)$/);return n?(e.x=n?parseFloat(n[1].split(", ")[12]):0,e.y=n?parseFloat(n[1].split(", ")[13]):0):(n=s.match(/^matrix\((.+)\)$/),e.x=n?parseFloat(n[1].split(", ")[4]):0,e.y=n?parseFloat(n[1].split(", ")[5]):0),e}}function K(t){for(var e=[];t&&t!==document;t=t.parentNode)e.push(t);return e}V.prototype._notify=function(t){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(H,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},V.prototype._onWheel=function(t){var e=this.options;if(!this._lethargy||!1!==this._lethargy.check(t)){var i=this._event;i.deltaX=t.wheelDeltaX||-1*t.deltaX,i.deltaY=t.wheelDeltaY||-1*t.deltaY,M.isFirefox&&1==t.deltaMode&&(i.deltaX*=e.firefoxMultiplier,i.deltaY*=e.firefoxMultiplier),i.deltaX*=e.mouseMultiplier,i.deltaY*=e.mouseMultiplier,this._notify(t)}},V.prototype._onMouseWheel=function(t){if(!this.options.limitInertia||!1!==this._lethargy.check(t)){var e=this._event;e.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,e.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,this._notify(t)}},V.prototype._onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t;this.touchStartX=e.pageX,this.touchStartY=e.pageY},V.prototype._onTouchMove=function(t){var e=this.options;e.preventTouch&&!t.target.classList.contains(e.unpreventTouchClass)&&t.preventDefault();var i=this._event,s=t.targetTouches?t.targetTouches[0]:t;i.deltaX=(s.pageX-this.touchStartX)*e.touchMultiplier,i.deltaY=(s.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=s.pageX,this.touchStartY=s.pageY,this._notify(t)},V.prototype._onKeyDown=function(t){var e=this._event;e.deltaX=e.deltaY=0;var i=window.innerHeight-40;switch(t.keyCode){case P:case Y:e.deltaY=this.options.keyStep;break;case I:case z:e.deltaY=-this.options.keyStep;break;case t.shiftKey:e.deltaY=i;break;case X:e.deltaY=-i;break;default:return}this._notify(t)},V.prototype._bind=function(){M.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),M.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),M.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),M.hasPointer&&M.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),M.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},V.prototype._unbind=function(){M.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),M.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),M.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),M.hasPointer&&M.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),M.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},V.prototype.on=function(t,e){this._emitter.on(H,t,e);var i=this._emitter.e;i&&i[H]&&1===i[H].length&&this._bind()},V.prototype.off=function(t,e){this._emitter.off(H,t,e);var i=this._emitter.e;(!i[H]||i[H].length<=0)&&this._unbind()},V.prototype.reset=function(){var t=this._event;t.x=0,t.y=0},V.prototype.destroy=function(){this._emitter.off(),this._unbind()};var N="function"==typeof Float32Array;function U(t,e){return 1-3*e+3*t}function $(t,e){return 3*e-6*t}function G(t){return 3*t}function J(t,e,i){return((U(e,i)*t+$(e,i))*t+G(e))*t}function Q(t,e,i){return 3*U(e,i)*t*t+2*$(e,i)*t+G(e)}function Z(t){return t}var tt=function(t,e,i,s){if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&i===s)return Z;for(var n=N?new Float32Array(11):new Array(11),o=0;o<11;++o)n[o]=J(.1*o,t,i);function r(e){for(var s=0,o=1;10!==o&&n[o]<=e;++o)s+=.1;--o;var r=s+.1*((e-n[o])/(n[o+1]-n[o])),l=Q(r,t,i);return l>=.001?function(t,e,i,s){for(var n=0;n<4;++n){var o=Q(e,i,s);if(0===o)return e;e-=(J(e,i,s)-t)/o}return e}(e,r,t,i):0===l?r:function(t,e,i,s,n){var o,r,l=0;do{(o=J(r=e+(i-e)/2,s,n)-t)>0?i=r:e=r}while(Math.abs(o)>1e-7&&++l<10);return r}(e,s,s+.1,t,i)}return function(t){return 0===t?0:1===t?1:J(r(t),e,s)}},et=38,it=40,st=32,nt=9,ot=33,rt=34,lt=36,at=35,ct=function(e){r(n,e);var s=d(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,n),history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0),(e=s.call(this,i)).inertia&&(e.lerp=.1*e.inertia),e.isScrolling=!1,e.isDraggingScrollbar=!1,e.isTicking=!1,e.hasScrollTicking=!1,e.parallaxElements={},e.stop=!1,e.scrollbarContainer=i.scrollbarContainer,e.checkKey=e.checkKey.bind(c(e)),window.addEventListener("keydown",e.checkKey,!1),e}return i(n,[{key:"init",value:function(){var t=this;this.html.classList.add(this.smoothClass),this.html.setAttribute("data-".concat(this.name,"-direction"),this.direction),this.instance=o({delta:{x:this.initPosition.x,y:this.initPosition.y},scroll:{x:this.initPosition.x,y:this.initPosition.y}},this.instance),this.vs=new R({el:this.scrollFromAnywhere?document:this.el,mouseMultiplier:navigator.platform.indexOf("Win")>-1?1:.4,firefoxMultiplier:this.firefoxMultiplier,touchMultiplier:this.touchMultiplier,useKeyboard:!1,passive:!0}),this.vs.on((function(e){t.stop||t.isDraggingScrollbar||requestAnimationFrame((function(){t.updateDelta(e),t.isScrolling||t.startScrolling()}))})),this.setScrollLimit(),this.initScrollBar(),this.addSections(),this.addElements(),this.checkScroll(!0),this.transformElements(!0,!0),u(l(n.prototype),"init",this).call(this)}},{key:"setScrollLimit",value:function(){if(this.instance.limit.y=this.el.offsetHeight-this.windowHeight,"horizontal"===this.direction){for(var t=0,e=this.el.children,i=0;i<e.length;i++)t+=e[i].offsetWidth;this.instance.limit.x=t-this.windowWidth}}},{key:"startScrolling",value:function(){this.startScrollTs=Date.now(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"stopScrolling",value:function(){cancelAnimationFrame(this.checkScrollRaf),this.startScrollTs=void 0,this.scrollToRaf&&(cancelAnimationFrame(this.scrollToRaf),this.scrollToRaf=null),this.isScrolling=!1,this.instance.scroll.y=Math.round(this.instance.scroll.y),this.html.classList.remove(this.scrollingClass)}},{key:"checkKey",value:function(t){var e=this;if(this.stop)t.keyCode==nt&&requestAnimationFrame((function(){e.html.scrollTop=0,document.body.scrollTop=0,e.html.scrollLeft=0,document.body.scrollLeft=0}));else{switch(t.keyCode){case nt:requestAnimationFrame((function(){e.html.scrollTop=0,document.body.scrollTop=0,e.html.scrollLeft=0,document.body.scrollLeft=0,e.scrollTo(document.activeElement,{offset:-window.innerHeight/2})}));break;case et:this.instance.delta[this.directionAxis]-=240;break;case it:this.instance.delta[this.directionAxis]+=240;break;case ot:this.instance.delta[this.directionAxis]-=window.innerHeight;break;case rt:this.instance.delta[this.directionAxis]+=window.innerHeight;break;case lt:this.instance.delta[this.directionAxis]-=this.instance.limit[this.directionAxis];break;case at:this.instance.delta[this.directionAxis]+=this.instance.limit[this.directionAxis];break;case st:document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement||(t.shiftKey?this.instance.delta[this.directionAxis]-=window.innerHeight:this.instance.delta[this.directionAxis]+=window.innerHeight);break;default:return}this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis]),this.stopScrolling(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}}},{key:"checkScroll",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||this.isScrolling||this.isDraggingScrollbar){this.hasScrollTicking||(this.checkScrollRaf=requestAnimationFrame((function(){return t.checkScroll()})),this.hasScrollTicking=!0),this.updateScroll();var i=Math.abs(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis]),s=Date.now()-this.startScrollTs;if(!this.animatingScroll&&s>100&&(i<.5&&0!=this.instance.delta[this.directionAxis]||i<.5&&0==this.instance.delta[this.directionAxis])&&this.stopScrolling(),Object.entries(this.sections).forEach((function(i){var s=f(i,2),n=(s[0],s[1]);n.persistent||t.instance.scroll[t.directionAxis]>n.offset[t.directionAxis]&&t.instance.scroll[t.directionAxis]<n.limit[t.directionAxis]?("horizontal"===t.direction?t.transform(n.el,-t.instance.scroll[t.directionAxis],0):t.transform(n.el,0,-t.instance.scroll[t.directionAxis]),n.inView||(n.inView=!0,n.el.style.opacity=1,n.el.style.pointerEvents="all",n.el.setAttribute("data-".concat(t.name,"-section-inview"),""))):((n.inView||e)&&(n.inView=!1,n.el.style.opacity=0,n.el.style.pointerEvents="none",n.el.removeAttribute("data-".concat(t.name,"-section-inview"))),t.transform(n.el,0,0))})),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.detectElements(),this.transformElements(),this.hasScrollbar){var o=this.instance.scroll[this.directionAxis]/this.instance.limit[this.directionAxis]*this.scrollBarLimit[this.directionAxis];"horizontal"===this.direction?this.transform(this.scrollbarThumb,o,0):this.transform(this.scrollbarThumb,0,o)}u(l(n.prototype),"checkScroll",this).call(this),this.hasScrollTicking=!1}}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.checkContext(),this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.update()}},{key:"updateDelta",value:function(t){var e,i=this[this.context]&&this[this.context].gestureDirection?this[this.context].gestureDirection:this.gestureDirection;e="both"===i?t.deltaX+t.deltaY:"vertical"===i?t.deltaY:"horizontal"===i?t.deltaX:t.deltaY,this.instance.delta[this.directionAxis]-=e*this.multiplier,this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis])}},{key:"updateScroll",value:function(t){this.isScrolling||this.isDraggingScrollbar?this.instance.scroll[this.directionAxis]=F(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis],this.lerp):this.instance.scroll[this.directionAxis]>this.instance.limit[this.directionAxis]?this.setScroll(this.instance.scroll[this.directionAxis],this.instance.limit[this.directionAxis]):this.instance.scroll.y<0?this.setScroll(this.instance.scroll[this.directionAxis],0):this.setScroll(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis])}},{key:"addDirection",value:function(){this.instance.delta.y>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):this.instance.delta.y<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up"),this.instance.delta.x>this.instance.scroll.x?"right"!==this.instance.direction&&(this.instance.direction="right"):this.instance.delta.x<this.instance.scroll.x&&"left"!==this.instance.direction&&(this.instance.direction="left")}},{key:"addSpeed",value:function(){this.instance.delta[this.directionAxis]!=this.instance.scroll[this.directionAxis]?this.instance.speed=(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis])/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"initScrollBar",value:function(){if(this.scrollbar=document.createElement("span"),this.scrollbarThumb=document.createElement("span"),this.scrollbar.classList.add("".concat(this.scrollbarClass)),this.scrollbarThumb.classList.add("".concat(this.scrollbarClass,"_thumb")),this.scrollbar.append(this.scrollbarThumb),this.scrollbarContainer?this.scrollbarContainer.append(this.scrollbar):document.body.append(this.scrollbar),this.getScrollBar=this.getScrollBar.bind(this),this.releaseScrollBar=this.releaseScrollBar.bind(this),this.moveScrollBar=this.moveScrollBar.bind(this),this.scrollbarThumb.addEventListener("mousedown",this.getScrollBar),window.addEventListener("mouseup",this.releaseScrollBar),window.addEventListener("mousemove",this.moveScrollBar),this.hasScrollbar=!1,"horizontal"==this.direction){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,"horizontal"===this.direction?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"reinitScrollBar",value:function(){if(this.hasScrollbar=!1,"horizontal"==this.direction){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,"horizontal"===this.direction?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"destroyScrollBar",value:function(){this.scrollbarThumb.removeEventListener("mousedown",this.getScrollBar),window.removeEventListener("mouseup",this.releaseScrollBar),window.removeEventListener("mousemove",this.moveScrollBar),this.scrollbar.remove()}},{key:"getScrollBar",value:function(t){this.isDraggingScrollbar=!0,this.checkScroll(),this.html.classList.remove(this.scrollingClass),this.html.classList.add(this.draggingClass)}},{key:"releaseScrollBar",value:function(t){this.isDraggingScrollbar=!1,this.isScrolling&&this.html.classList.add(this.scrollingClass),this.html.classList.remove(this.draggingClass)}},{key:"moveScrollBar",value:function(t){var e=this;this.isDraggingScrollbar&&requestAnimationFrame((function(){var i=100*(t.clientX-e.scrollbarBCR.left)/e.scrollbarWidth*e.instance.limit.x/100,s=100*(t.clientY-e.scrollbarBCR.top)/e.scrollbarHeight*e.instance.limit.y/100;s>0&&s<e.instance.limit.y&&(e.instance.delta.y=s),i>0&&i<e.instance.limit.x&&(e.instance.delta.x=i)}))}},{key:"addElements",value:function(){var t=this;this.els={},this.parallaxElements={},this.el.querySelectorAll("[data-".concat(this.name,"]")).forEach((function(e,i){var s,n,o,r=K(e),l=Object.entries(t.sections).map((function(t){var e=f(t,2);e[0];return e[1]})).find((function(t){return r.includes(t.el)})),a=e.dataset[t.name+"Class"]||t.class,c="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:"el"+i,h=e.dataset[t.name+"Repeat"],d=e.dataset[t.name+"Call"],u=e.dataset[t.name+"Position"],p=e.dataset[t.name+"Delay"],m=e.dataset[t.name+"Direction"],v="string"==typeof e.dataset[t.name+"Sticky"],y=!!e.dataset[t.name+"Speed"]&&parseFloat(e.dataset[t.name+"Speed"])/10,b="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,g=e.dataset[t.name+"Target"],w=(o=void 0!==g?document.querySelector("".concat(g)):e).getBoundingClientRect();null===l||l.inView?(s=w.top+t.instance.scroll.y-q(o).y,n=w.left+t.instance.scroll.x-q(o).x):(s=w.top-q(l.el).y-q(o).y,n=w.left-q(l.el).x-q(o).x);var x=s+o.offsetHeight,S=n+o.offsetWidth,k={x:(S-n)/2+n,y:(x-s)/2+s};if(v){var T=e.getBoundingClientRect(),E=T.top,A=T.left,O={x:A-n,y:E-s};s+=window.innerHeight,n+=window.innerWidth,x=E+o.offsetHeight-e.offsetHeight-O[t.directionAxis],k={x:((S=A+o.offsetWidth-e.offsetWidth-O[t.directionAxis])-n)/2+n,y:(x-s)/2+s}}h="false"!=h&&(null!=h||t.repeat);var D=[0,0];if(b)if("horizontal"===t.direction){for(var C=0;C<b.length;C++)"string"==typeof b[C]?b[C].includes("%")?D[C]=parseInt(b[C].replace("%","")*t.windowWidth/100):D[C]=parseInt(b[C]):D[C]=b[C];n+=D[0],S-=D[1]}else{for(C=0;C<b.length;C++)"string"==typeof b[C]?b[C].includes("%")?D[C]=parseInt(b[C].replace("%","")*t.windowHeight/100):D[C]=parseInt(b[C]):D[C]=b[C];s+=D[0],x-=D[1]}var L={el:e,id:c,class:a,section:l,top:s,middle:k,bottom:x,left:n,right:S,offset:b,progress:0,repeat:h,inView:!1,call:d,speed:y,delay:p,position:u,target:o,direction:m,sticky:v};t.els[c]=L,e.classList.contains(a)&&t.setInView(t.els[c],c),(!1!==y||v)&&(t.parallaxElements[c]=L)}))}},{key:"addSections",value:function(){var t=this;this.sections={};var e=this.el.querySelectorAll("[data-".concat(this.name,"-section]"));0===e.length&&(e=[this.el]),e.forEach((function(e,i){var s="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:"section"+i,n=e.getBoundingClientRect(),o={x:n.left-1.5*window.innerWidth-q(e).x,y:n.top-1.5*window.innerHeight-q(e).y},r={x:o.x+n.width+2*window.innerWidth,y:o.y+n.height+2*window.innerHeight},l="string"==typeof e.dataset[t.name+"Persistent"];e.setAttribute("data-scroll-section-id",s);var a={el:e,offset:o,limit:r,inView:!1,persistent:l,id:s};t.sections[s]=a}))}},{key:"transform",value:function(t,e,i,s){var n;if(s){var o=q(t),r=F(o.x,e,s),l=F(o.y,i,s);n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(r,",").concat(l,",0,1)")}else n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e,",").concat(i,",0,1)");t.style.webkitTransform=n,t.style.msTransform=n,t.style.transform=n}},{key:"transformElements",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=this.instance.scroll.x+this.windowWidth,n=this.instance.scroll.y+this.windowHeight,o={x:this.instance.scroll.x+this.windowMiddle.x,y:this.instance.scroll.y+this.windowMiddle.y};Object.entries(this.parallaxElements).forEach((function(r){var l=f(r,2),a=(l[0],l[1]),c=!1;if(t&&(c=0),a.inView||i)switch(a.position){case"top":c=e.instance.scroll[e.directionAxis]*-a.speed;break;case"elementTop":c=(n-a.top)*-a.speed;break;case"bottom":c=(e.instance.limit[e.directionAxis]-n+e.windowHeight)*a.speed;break;case"left":c=e.instance.scroll[e.directionAxis]*-a.speed;break;case"elementLeft":c=(s-a.left)*-a.speed;break;case"right":c=(e.instance.limit[e.directionAxis]-s+e.windowHeight)*a.speed;break;default:c=(o[e.directionAxis]-a.middle[e.directionAxis])*-a.speed}a.sticky&&(c=a.inView?"horizontal"===e.direction?e.instance.scroll.x-a.left+window.innerWidth:e.instance.scroll.y-a.top+window.innerHeight:"horizontal"===e.direction?e.instance.scroll.x<a.left-window.innerWidth&&e.instance.scroll.x<a.left-window.innerWidth/2?0:e.instance.scroll.x>a.right&&e.instance.scroll.x>a.right+100&&a.right-a.left+window.innerWidth:e.instance.scroll.y<a.top-window.innerHeight&&e.instance.scroll.y<a.top-window.innerHeight/2?0:e.instance.scroll.y>a.bottom&&e.instance.scroll.y>a.bottom+100&&a.bottom-a.top+window.innerHeight),!1!==c&&("horizontal"===a.direction||"horizontal"===e.direction&&"vertical"!==a.direction?e.transform(a.el,c,0,!t&&a.delay):e.transform(a.el,0,c,!t&&a.delay))}))}},{key:"scrollTo",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=parseInt(i.offset)||0,n=isNaN(parseInt(i.duration))?1e3:parseInt(i.duration),o=i.easing||[.25,0,.35,1],r=!!i.disableLerp,l=!!i.callback&&i.callback;if(o=tt.apply(void 0,p(o)),"string"==typeof t){if("top"===t)t=0;else if("bottom"===t)t=this.instance.limit.y;else if("left"===t)t=0;else if("right"===t)t=this.instance.limit.x;else if(!(t=document.querySelector(t)))return}else if("number"==typeof t)t=parseInt(t);else if(!t||!t.tagName)return void console.warn("`target` parameter is not valid");if("number"!=typeof t){var a=K(t).includes(this.el);if(!a)return;var c=t.getBoundingClientRect(),h=c.top,d=c.left,u=K(t),m=u.find((function(t){return Object.entries(e.sections).map((function(t){var e=f(t,2);e[0];return e[1]})).find((function(e){return e.el==t}))})),v=0;v=m?q(m)[this.directionAxis]:-this.instance.scroll[this.directionAxis],s="horizontal"===this.direction?d+s-v:h+s-v}else s=t+s;var y=parseFloat(this.instance.delta[this.directionAxis]),b=Math.max(0,Math.min(s,this.instance.limit[this.directionAxis])),g=b-y,w=function(t){r?"horizontal"===e.direction?e.setScroll(y+g*t,e.instance.delta.y):e.setScroll(e.instance.delta.x,y+g*t):e.instance.delta[e.directionAxis]=y+g*t};this.animatingScroll=!0,this.stopScrolling(),this.startScrolling();var x=Date.now(),S=function t(){var i=(Date.now()-x)/n;i>1?(w(1),e.animatingScroll=!1,0==n&&e.update(),l&&l()):(e.scrollToRaf=requestAnimationFrame(t),w(o(i)))};S()}},{key:"update",value:function(){this.setScrollLimit(),this.addSections(),this.addElements(),this.detectElements(),this.updateScroll(),this.transformElements(!0),this.reinitScrollBar(),this.checkScroll(!0)}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(t,e){this.instance=o(o({},this.instance),{},{scroll:{x:t,y:e},delta:{x:t,y:e},speed:0})}},{key:"destroy",value:function(){u(l(n.prototype),"destroy",this).call(this),this.stopScrolling(),this.html.classList.remove(this.smoothClass),this.vs.destroy(),this.destroyScrollBar(),window.removeEventListener("keydown",this.checkKey,!1)}}]),n}(b);return function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.options=i,Object.assign(this,y,i),this.smartphone=y.smartphone,i.smartphone&&Object.assign(this.smartphone,i.smartphone),this.tablet=y.tablet,i.tablet&&Object.assign(this.tablet,i.tablet),this.smooth||"horizontal"!=this.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),this.tablet.smooth||"horizontal"!=this.tablet.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),this.smartphone.smooth||"horizontal"!=this.smartphone.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),this.init()}return i(e,[{key:"init",value:function(){if(this.options.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||window.innerWidth<this.tablet.breakpoint,this.options.isTablet=this.options.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.smooth&&!this.options.isMobile||this.tablet.smooth&&this.options.isTablet||this.smartphone.smooth&&this.options.isMobile&&!this.options.isTablet?this.scroll=new ct(this.options):this.scroll=new S(this.options),this.scroll.init(),window.location.hash){var t=window.location.hash.slice(1,window.location.hash.length),e=document.getElementById(t);e&&this.scroll.scrollTo(e)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(t,e){this.scroll.scrollTo(t,e)}},{key:"setScroll",value:function(t,e){this.scroll.setScroll(t,e)}},{key:"on",value:function(t,e){this.scroll.setEvents(t,e)}},{key:"off",value:function(t,e){this.scroll.unsetEvents(t,e)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),e}()}));
// Ion.RangeSlider, 2.3.1, © Denis Ineshin, 2010 - 2019, IonDen.com, Build date: 2019-12-19 16:56:44
!function(i){"undefined"!=typeof jQuery&&jQuery||"function"!=typeof define||!define.amd?"undefined"!=typeof jQuery&&jQuery||"object"!=typeof exports?i(jQuery,document,window,navigator):i(require("jquery"),document,window,navigator):define(["jquery"],function(t){return i(t,document,window,navigator)})}(function(a,c,l,t,_){"use strict";var i,s,o=0,e=(i=t.userAgent,s=/msie\s\d+/i,0<i.search(s)&&s.exec(i).toString().split(" ")[1]<9&&(a("html").addClass("lt-ie9"),!0));Function.prototype.bind||(Function.prototype.bind=function(o){var e=this,h=[].slice;if("function"!=typeof e)throw new TypeError;var r=h.call(arguments,1),n=function(){if(this instanceof n){var t=function(){};t.prototype=e.prototype;var i=new t,s=e.apply(i,r.concat(h.call(arguments)));return Object(s)===s?s:i}return e.apply(o,r.concat(h.call(arguments)))};return n}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,i){var s;if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),e=o.length>>>0;if(0==e)return-1;var h=+i||0;if(Math.abs(h)===1/0&&(h=0),e<=h)return-1;for(s=Math.max(0<=h?h:e-Math.abs(h),0);s<e;){if(s in o&&o[s]===t)return s;s++}return-1});function h(t,i,s){this.VERSION="2.3.1",this.input=t,this.plugin_count=s,this.current_plugin=0,this.calc_count=0,this.update_tm=0,this.old_from=0,this.old_to=0,this.old_min_interval=null,this.raf_id=null,this.dragging=!1,this.force_redraw=!1,this.no_diapason=!1,this.has_tab_index=!0,this.is_key=!1,this.is_update=!1,this.is_start=!0,this.is_finish=!1,this.is_active=!1,this.is_resize=!1,this.is_click=!1,i=i||{},this.$cache={win:a(l),body:a(c.body),input:a(t),cont:null,rs:null,min:null,max:null,from:null,to:null,single:null,bar:null,line:null,s_single:null,s_from:null,s_to:null,shad_single:null,shad_from:null,shad_to:null,edge:null,grid:null,grid_labels:[]},this.coords={x_gap:0,x_pointer:0,w_rs:0,w_rs_old:0,w_handle:0,p_gap:0,p_gap_left:0,p_gap_right:0,p_step:0,p_pointer:0,p_handle:0,p_single_fake:0,p_single_real:0,p_from_fake:0,p_from_real:0,p_to_fake:0,p_to_real:0,p_bar_x:0,p_bar_w:0,grid_gap:0,big_num:0,big:[],big_w:[],big_p:[],big_x:[]},this.labels={w_min:0,w_max:0,w_from:0,w_to:0,w_single:0,p_min:0,p_max:0,p_from_fake:0,p_from_left:0,p_to_fake:0,p_to_left:0,p_single_fake:0,p_single_left:0};var o,e,h,r=this.$cache.input,n=r.prop("value");for(h in o={skin:"flat",type:"single",min:10,max:100,from:null,to:null,step:1,min_interval:0,max_interval:0,drag_interval:!1,values:[],p_values:[],from_fixed:!1,from_min:null,from_max:null,from_shadow:!1,to_fixed:!1,to_min:null,to_max:null,to_shadow:!1,prettify_enabled:!0,prettify_separator:" ",prettify:null,force_edges:!1,keyboard:!0,grid:!1,grid_margin:!0,grid_num:4,grid_snap:!1,hide_min_max:!1,hide_from_to:!1,prefix:"",postfix:"",max_postfix:"",decorate_both:!0,values_separator:" — ",input_values_separator:";",disable:!1,block:!1,extra_classes:"",scope:null,onStart:null,onChange:null,onFinish:null,onUpdate:null},"INPUT"!==r[0].nodeName&&console&&console.warn&&console.warn("Base element should be <input>!",r[0]),(e={skin:r.data("skin"),type:r.data("type"),min:r.data("min"),max:r.data("max"),from:r.data("from"),to:r.data("to"),step:r.data("step"),min_interval:r.data("minInterval"),max_interval:r.data("maxInterval"),drag_interval:r.data("dragInterval"),values:r.data("values"),from_fixed:r.data("fromFixed"),from_min:r.data("fromMin"),from_max:r.data("fromMax"),from_shadow:r.data("fromShadow"),to_fixed:r.data("toFixed"),to_min:r.data("toMin"),to_max:r.data("toMax"),to_shadow:r.data("toShadow"),prettify_enabled:r.data("prettifyEnabled"),prettify_separator:r.data("prettifySeparator"),force_edges:r.data("forceEdges"),keyboard:r.data("keyboard"),grid:r.data("grid"),grid_margin:r.data("gridMargin"),grid_num:r.data("gridNum"),grid_snap:r.data("gridSnap"),hide_min_max:r.data("hideMinMax"),hide_from_to:r.data("hideFromTo"),prefix:r.data("prefix"),postfix:r.data("postfix"),max_postfix:r.data("maxPostfix"),decorate_both:r.data("decorateBoth"),values_separator:r.data("valuesSeparator"),input_values_separator:r.data("inputValuesSeparator"),disable:r.data("disable"),block:r.data("block"),extra_classes:r.data("extraClasses")}).values=e.values&&e.values.split(","),e)e.hasOwnProperty(h)&&(e[h]!==_&&""!==e[h]||delete e[h]);n!==_&&""!==n&&((n=n.split(e.input_values_separator||i.input_values_separator||";"))[0]&&n[0]==+n[0]&&(n[0]=+n[0]),n[1]&&n[1]==+n[1]&&(n[1]=+n[1]),i&&i.values&&i.values.length?(o.from=n[0]&&i.values.indexOf(n[0]),o.to=n[1]&&i.values.indexOf(n[1])):(o.from=n[0]&&+n[0],o.to=n[1]&&+n[1])),a.extend(o,i),a.extend(o,e),this.options=o,this.update_check={},this.validate(),this.result={input:this.$cache.input,slider:null,min:this.options.min,max:this.options.max,from:this.options.from,from_percent:0,from_value:null,to:this.options.to,to_percent:0,to_value:null},this.init()}h.prototype={init:function(t){this.no_diapason=!1,this.coords.p_step=this.convertToPercent(this.options.step,!0),this.target="base",this.toggleInput(),this.append(),this.setMinMax(),t?(this.force_redraw=!0,this.calc(!0),this.callOnUpdate()):(this.force_redraw=!0,this.calc(!0),this.callOnStart()),this.updateScene()},append:function(){var t='<span class="irs irs--'+this.options.skin+" js-irs-"+this.plugin_count+" "+this.options.extra_classes+'"></span>';this.$cache.input.before(t),this.$cache.input.prop("readonly",!0),this.$cache.cont=this.$cache.input.prev(),this.result.slider=this.$cache.cont,this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'),this.$cache.rs=this.$cache.cont.find(".irs"),this.$cache.min=this.$cache.cont.find(".irs-min"),this.$cache.max=this.$cache.cont.find(".irs-max"),this.$cache.from=this.$cache.cont.find(".irs-from"),this.$cache.to=this.$cache.cont.find(".irs-to"),this.$cache.single=this.$cache.cont.find(".irs-single"),this.$cache.line=this.$cache.cont.find(".irs-line"),this.$cache.grid=this.$cache.cont.find(".irs-grid"),"single"===this.options.type?(this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'),this.$cache.bar=this.$cache.cont.find(".irs-bar"),this.$cache.edge=this.$cache.cont.find(".irs-bar-edge"),this.$cache.s_single=this.$cache.cont.find(".single"),this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.shad_single=this.$cache.cont.find(".shadow-single")):(this.$cache.cont.append('<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'),this.$cache.bar=this.$cache.cont.find(".irs-bar"),this.$cache.s_from=this.$cache.cont.find(".from"),this.$cache.s_to=this.$cache.cont.find(".to"),this.$cache.shad_from=this.$cache.cont.find(".shadow-from"),this.$cache.shad_to=this.$cache.cont.find(".shadow-to"),this.setTopHandler()),this.options.hide_from_to&&(this.$cache.from[0].style.display="none",this.$cache.to[0].style.display="none",this.$cache.single[0].style.display="none"),this.appendGrid(),this.options.disable?(this.appendDisableMask(),this.$cache.input[0].disabled=!0):(this.$cache.input[0].disabled=!1,this.removeDisableMask(),this.bindEvents()),this.options.disable||(this.options.block?this.appendDisableMask():this.removeDisableMask()),this.options.drag_interval&&(this.$cache.bar[0].style.cursor="ew-resize")},setTopHandler:function(){var t=this.options.min,i=this.options.max,s=this.options.from,o=this.options.to;t<s&&o===i?this.$cache.s_from.addClass("type_last"):o<i&&this.$cache.s_to.addClass("type_last")},changeLevel:function(t){switch(t){case"single":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_single_fake),this.$cache.s_single.addClass("state_hover");break;case"from":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake),this.$cache.s_from.addClass("state_hover"),this.$cache.s_from.addClass("type_last"),this.$cache.s_to.removeClass("type_last");break;case"to":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_to_fake),this.$cache.s_to.addClass("state_hover"),this.$cache.s_to.addClass("type_last"),this.$cache.s_from.removeClass("type_last");break;case"both":this.coords.p_gap_left=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake),this.coords.p_gap_right=this.toFixed(this.coords.p_to_fake-this.coords.p_pointer),this.$cache.s_to.removeClass("type_last"),this.$cache.s_from.removeClass("type_last")}},appendDisableMask:function(){this.$cache.cont.append('<span class="irs-disable-mask"></span>'),this.$cache.cont.addClass("irs-disabled")},removeDisableMask:function(){this.$cache.cont.remove(".irs-disable-mask"),this.$cache.cont.removeClass("irs-disabled")},remove:function(){this.$cache.cont.remove(),this.$cache.cont=null,this.$cache.line.off("keydown.irs_"+this.plugin_count),this.$cache.body.off("touchmove.irs_"+this.plugin_count),this.$cache.body.off("mousemove.irs_"+this.plugin_count),this.$cache.win.off("touchend.irs_"+this.plugin_count),this.$cache.win.off("mouseup.irs_"+this.plugin_count),e&&(this.$cache.body.off("mouseup.irs_"+this.plugin_count),this.$cache.body.off("mouseleave.irs_"+this.plugin_count)),this.$cache.grid_labels=[],this.coords.big=[],this.coords.big_w=[],this.coords.big_p=[],this.coords.big_x=[],cancelAnimationFrame(this.raf_id)},bindEvents:function(){this.no_diapason||(this.$cache.body.on("touchmove.irs_"+this.plugin_count,this.pointerMove.bind(this)),this.$cache.body.on("mousemove.irs_"+this.plugin_count,this.pointerMove.bind(this)),this.$cache.win.on("touchend.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.win.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.line.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.line.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.line.on("focus.irs_"+this.plugin_count,this.pointerFocus.bind(this)),this.options.drag_interval&&"double"===this.options.type?(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"both")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"both"))):(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))),"single"===this.options.type?(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.shad_single.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.edge.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_single.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))):(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))),this.options.keyboard&&this.$cache.line.on("keydown.irs_"+this.plugin_count,this.key.bind(this,"keyboard")),e&&(this.$cache.body.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.body.on("mouseleave.irs_"+this.plugin_count,this.pointerUp.bind(this))))},pointerFocus:function(t){var i,s;this.target||(i=(s="single"===this.options.type?this.$cache.single:this.$cache.from).offset().left,i+=s.width()/2-1,this.pointerClick("single",{preventDefault:function(){},pageX:i}))},pointerMove:function(t){if(this.dragging){var i=t.pageX||t.originalEvent.touches&&t.originalEvent.touches[0].pageX;this.coords.x_pointer=i-this.coords.x_gap,this.calc()}},pointerUp:function(t){this.current_plugin===this.plugin_count&&this.is_active&&(this.is_active=!1,this.$cache.cont.find(".state_hover").removeClass("state_hover"),this.force_redraw=!0,e&&a("*").prop("unselectable",!1),this.updateScene(),this.restoreOriginalMinInterval(),(a.contains(this.$cache.cont[0],t.target)||this.dragging)&&this.callOnFinish(),this.dragging=!1)},pointerDown:function(t,i){i.preventDefault();var s=i.pageX||i.originalEvent.touches&&i.originalEvent.touches[0].pageX;2!==i.button&&("both"===t&&this.setTempMinInterval(),t=t||(this.target||"from"),this.current_plugin=this.plugin_count,this.target=t,this.is_active=!0,this.dragging=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=s-this.coords.x_gap,this.calcPointerPercent(),this.changeLevel(t),e&&a("*").prop("unselectable",!0),this.$cache.line.trigger("focus"),this.updateScene())},pointerClick:function(t,i){i.preventDefault();var s=i.pageX||i.originalEvent.touches&&i.originalEvent.touches[0].pageX;2!==i.button&&(this.current_plugin=this.plugin_count,this.target=t,this.is_click=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=+(s-this.coords.x_gap).toFixed(),this.force_redraw=!0,this.calc(),this.$cache.line.trigger("focus"))},key:function(t,i){if(!(this.current_plugin!==this.plugin_count||i.altKey||i.ctrlKey||i.shiftKey||i.metaKey)){switch(i.which){case 83:case 65:case 40:case 37:i.preventDefault(),this.moveByKey(!1);break;case 87:case 68:case 38:case 39:i.preventDefault(),this.moveByKey(!0)}return!0}},moveByKey:function(t){var i=this.coords.p_pointer,s=(this.options.max-this.options.min)/100;s=this.options.step/s,t?i+=s:i-=s,this.coords.x_pointer=this.toFixed(this.coords.w_rs/100*i),this.is_key=!0,this.calc()},setMinMax:function(){if(this.options){if(this.options.hide_min_max)return this.$cache.min[0].style.display="none",void(this.$cache.max[0].style.display="none");if(this.options.values.length)this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])),this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));else{var t=this._prettify(this.options.min),i=this._prettify(this.options.max);this.result.min_pretty=t,this.result.max_pretty=i,this.$cache.min.html(this.decorate(t,this.options.min)),this.$cache.max.html(this.decorate(i,this.options.max))}this.labels.w_min=this.$cache.min.outerWidth(!1),this.labels.w_max=this.$cache.max.outerWidth(!1)}},setTempMinInterval:function(){var t=this.result.to-this.result.from;null===this.old_min_interval&&(this.old_min_interval=this.options.min_interval),this.options.min_interval=t},restoreOriginalMinInterval:function(){null!==this.old_min_interval&&(this.options.min_interval=this.old_min_interval,this.old_min_interval=null)},calc:function(t){if(this.options&&(this.calc_count++,10!==this.calc_count&&!t||(this.calc_count=0,this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.calcHandlePercent()),this.coords.w_rs)){this.calcPointerPercent();var i=this.getHandleX();switch("both"===this.target&&(this.coords.p_gap=0,i=this.getHandleX()),"click"===this.target&&(this.coords.p_gap=this.coords.p_handle/2,i=this.getHandleX(),this.options.drag_interval?this.target="both_one":this.target=this.chooseHandle(i)),this.target){case"base":var s=(this.options.max-this.options.min)/100,o=(this.result.from-this.options.min)/s,e=(this.result.to-this.options.min)/s;this.coords.p_single_real=this.toFixed(o),this.coords.p_from_real=this.toFixed(o),this.coords.p_to_real=this.toFixed(e),this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real),this.target=null;break;case"single":if(this.options.from_fixed)break;this.coords.p_single_real=this.convertToRealPercent(i),this.coords.p_single_real=this.calcWithStep(this.coords.p_single_real),this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max),this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real);break;case"from":if(this.options.from_fixed)break;this.coords.p_from_real=this.convertToRealPercent(i),this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real),this.coords.p_from_real>this.coords.p_to_real&&(this.coords.p_from_real=this.coords.p_to_real),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_real=this.checkMaxInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);break;case"to":if(this.options.to_fixed)break;this.coords.p_to_real=this.convertToRealPercent(i),this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real),this.coords.p_to_real<this.coords.p_from_real&&(this.coords.p_to_real=this.coords.p_from_real),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_real=this.checkMaxInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case"both":if(this.options.from_fixed||this.options.to_fixed)break;i=this.toFixed(i+.001*this.coords.p_handle),this.coords.p_from_real=this.convertToRealPercent(i)-this.coords.p_gap_left,this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_real=this.convertToRealPercent(i)+this.coords.p_gap_right,this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case"both_one":if(this.options.from_fixed||this.options.to_fixed)break;var h=this.convertToRealPercent(i),r=this.result.from_percent,n=this.result.to_percent-r,a=n/2,c=h-a,l=h+a;c<0&&(l=(c=0)+n),100<l&&(c=(l=100)-n),this.coords.p_from_real=this.calcWithStep(c),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_real=this.calcWithStep(l),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real)}"single"===this.options.type?(this.coords.p_bar_x=this.coords.p_handle/2,this.coords.p_bar_w=this.coords.p_single_fake,this.result.from_percent=this.coords.p_single_real,this.result.from=this.convertToValue(this.coords.p_single_real),this.result.from_pretty=this._prettify(this.result.from),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from])):(this.coords.p_bar_x=this.toFixed(this.coords.p_from_fake+this.coords.p_handle/2),this.coords.p_bar_w=this.toFixed(this.coords.p_to_fake-this.coords.p_from_fake),this.result.from_percent=this.coords.p_from_real,this.result.from=this.convertToValue(this.coords.p_from_real),this.result.from_pretty=this._prettify(this.result.from),this.result.to_percent=this.coords.p_to_real,this.result.to=this.convertToValue(this.coords.p_to_real),this.result.to_pretty=this._prettify(this.result.to),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from],this.result.to_value=this.options.values[this.result.to])),this.calcMinMax(),this.calcLabels()}},calcPointerPercent:function(){this.coords.w_rs?(this.coords.x_pointer<0||isNaN(this.coords.x_pointer)?this.coords.x_pointer=0:this.coords.x_pointer>this.coords.w_rs&&(this.coords.x_pointer=this.coords.w_rs),this.coords.p_pointer=this.toFixed(this.coords.x_pointer/this.coords.w_rs*100)):this.coords.p_pointer=0},convertToRealPercent:function(t){return t/(100-this.coords.p_handle)*100},convertToFakePercent:function(t){return t/100*(100-this.coords.p_handle)},getHandleX:function(){var t=100-this.coords.p_handle,i=this.toFixed(this.coords.p_pointer-this.coords.p_gap);return i<0?i=0:t<i&&(i=t),i},calcHandlePercent:function(){"single"===this.options.type?this.coords.w_handle=this.$cache.s_single.outerWidth(!1):this.coords.w_handle=this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100)},chooseHandle:function(t){return"single"===this.options.type?"single":this.coords.p_from_real+(this.coords.p_to_real-this.coords.p_from_real)/2<=t?this.options.to_fixed?"from":"to":this.options.from_fixed?"to":"from"},calcMinMax:function(){this.coords.w_rs&&(this.labels.p_min=this.labels.w_min/this.coords.w_rs*100,this.labels.p_max=this.labels.w_max/this.coords.w_rs*100)},calcLabels:function(){this.coords.w_rs&&!this.options.hide_from_to&&("single"===this.options.type?(this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=this.coords.p_single_fake+this.coords.p_handle/2-this.labels.p_single_fake/2):(this.labels.w_from=this.$cache.from.outerWidth(!1),this.labels.p_from_fake=this.labels.w_from/this.coords.w_rs*100,this.labels.p_from_left=this.coords.p_from_fake+this.coords.p_handle/2-this.labels.p_from_fake/2,this.labels.p_from_left=this.toFixed(this.labels.p_from_left),this.labels.p_from_left=this.checkEdges(this.labels.p_from_left,this.labels.p_from_fake),this.labels.w_to=this.$cache.to.outerWidth(!1),this.labels.p_to_fake=this.labels.w_to/this.coords.w_rs*100,this.labels.p_to_left=this.coords.p_to_fake+this.coords.p_handle/2-this.labels.p_to_fake/2,this.labels.p_to_left=this.toFixed(this.labels.p_to_left),this.labels.p_to_left=this.checkEdges(this.labels.p_to_left,this.labels.p_to_fake),this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=(this.labels.p_from_left+this.labels.p_to_left+this.labels.p_to_fake)/2-this.labels.p_single_fake/2,this.labels.p_single_left=this.toFixed(this.labels.p_single_left)),this.labels.p_single_left=this.checkEdges(this.labels.p_single_left,this.labels.p_single_fake))},updateScene:function(){this.raf_id&&(cancelAnimationFrame(this.raf_id),this.raf_id=null),clearTimeout(this.update_tm),this.update_tm=null,this.options&&(this.drawHandles(),this.is_active?this.raf_id=requestAnimationFrame(this.updateScene.bind(this)):this.update_tm=setTimeout(this.updateScene.bind(this),300))},drawHandles:function(){this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&(this.coords.w_rs!==this.coords.w_rs_old&&(this.target="base",this.is_resize=!0),this.coords.w_rs===this.coords.w_rs_old&&!this.force_redraw||(this.setMinMax(),this.calc(!0),this.drawLabels(),this.options.grid&&(this.calcGridMargin(),this.calcGridLabels()),this.force_redraw=!0,this.coords.w_rs_old=this.coords.w_rs,this.drawShadow()),this.coords.w_rs&&(this.dragging||this.force_redraw||this.is_key)&&((this.old_from!==this.result.from||this.old_to!==this.result.to||this.force_redraw||this.is_key)&&(this.drawLabels(),this.$cache.bar[0].style.left=this.coords.p_bar_x+"%",this.$cache.bar[0].style.width=this.coords.p_bar_w+"%","single"===this.options.type?(this.$cache.bar[0].style.left=0,this.$cache.bar[0].style.width=this.coords.p_bar_w+this.coords.p_bar_x+"%",this.$cache.s_single[0].style.left=this.coords.p_single_fake+"%"):(this.$cache.s_from[0].style.left=this.coords.p_from_fake+"%",this.$cache.s_to[0].style.left=this.coords.p_to_fake+"%",this.old_from===this.result.from&&!this.force_redraw||(this.$cache.from[0].style.left=this.labels.p_from_left+"%"),this.old_to===this.result.to&&!this.force_redraw||(this.$cache.to[0].style.left=this.labels.p_to_left+"%")),this.$cache.single[0].style.left=this.labels.p_single_left+"%",this.writeToInput(),this.old_from===this.result.from&&this.old_to===this.result.to||this.is_start||(this.$cache.input.trigger("change"),this.$cache.input.trigger("input")),this.old_from=this.result.from,this.old_to=this.result.to,this.is_resize||this.is_update||this.is_start||this.is_finish||this.callOnChange(),(this.is_key||this.is_click)&&(this.is_key=!1,this.is_click=!1,this.callOnFinish()),this.is_update=!1,this.is_resize=!1,this.is_finish=!1),this.is_start=!1,this.is_key=!1,this.is_click=!1,this.force_redraw=!1))},drawLabels:function(){if(this.options){var t,i,s,o,e,h=this.options.values.length,r=this.options.p_values;if(!this.options.hide_from_to)if("single"===this.options.type)t=h?this.decorate(r[this.result.from]):(o=this._prettify(this.result.from),this.decorate(o,this.result.from)),this.$cache.single.html(t),this.calcLabels(),this.labels.p_single_left<this.labels.p_min+1?this.$cache.min[0].style.visibility="hidden":this.$cache.min[0].style.visibility="visible",this.labels.p_single_left+this.labels.p_single_fake>100-this.labels.p_max-1?this.$cache.max[0].style.visibility="hidden":this.$cache.max[0].style.visibility="visible";else{s=h?(this.options.decorate_both?(t=this.decorate(r[this.result.from]),t+=this.options.values_separator,t+=this.decorate(r[this.result.to])):t=this.decorate(r[this.result.from]+this.options.values_separator+r[this.result.to]),i=this.decorate(r[this.result.from]),this.decorate(r[this.result.to])):(o=this._prettify(this.result.from),e=this._prettify(this.result.to),this.options.decorate_both?(t=this.decorate(o,this.result.from),t+=this.options.values_separator,t+=this.decorate(e,this.result.to)):t=this.decorate(o+this.options.values_separator+e,this.result.to),i=this.decorate(o,this.result.from),this.decorate(e,this.result.to)),this.$cache.single.html(t),this.$cache.from.html(i),this.$cache.to.html(s),this.calcLabels();var n=Math.min(this.labels.p_single_left,this.labels.p_from_left),a=this.labels.p_single_left+this.labels.p_single_fake,c=this.labels.p_to_left+this.labels.p_to_fake,l=Math.max(a,c);this.labels.p_from_left+this.labels.p_from_fake>=this.labels.p_to_left?(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",l=this.result.from===this.result.to?("from"===this.target?this.$cache.from[0].style.visibility="visible":"to"===this.target?this.$cache.to[0].style.visibility="visible":this.target||(this.$cache.from[0].style.visibility="visible"),this.$cache.single[0].style.visibility="hidden",c):(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",Math.max(a,c))):(this.$cache.from[0].style.visibility="visible",this.$cache.to[0].style.visibility="visible",this.$cache.single[0].style.visibility="hidden"),n<this.labels.p_min+1?this.$cache.min[0].style.visibility="hidden":this.$cache.min[0].style.visibility="visible",l>100-this.labels.p_max-1?this.$cache.max[0].style.visibility="hidden":this.$cache.max[0].style.visibility="visible"}}},drawShadow:function(){var t,i,s,o,e=this.options,h=this.$cache,r="number"==typeof e.from_min&&!isNaN(e.from_min),n="number"==typeof e.from_max&&!isNaN(e.from_max),a="number"==typeof e.to_min&&!isNaN(e.to_min),c="number"==typeof e.to_max&&!isNaN(e.to_max);"single"===e.type?e.from_shadow&&(r||n)?(t=this.convertToPercent(r?e.from_min:e.min),i=this.convertToPercent(n?e.from_max:e.max)-t,t=this.toFixed(t-this.coords.p_handle/100*t),i=this.toFixed(i-this.coords.p_handle/100*i),t+=this.coords.p_handle/2,h.shad_single[0].style.display="block",h.shad_single[0].style.left=t+"%",h.shad_single[0].style.width=i+"%"):h.shad_single[0].style.display="none":(e.from_shadow&&(r||n)?(t=this.convertToPercent(r?e.from_min:e.min),i=this.convertToPercent(n?e.from_max:e.max)-t,t=this.toFixed(t-this.coords.p_handle/100*t),i=this.toFixed(i-this.coords.p_handle/100*i),t+=this.coords.p_handle/2,h.shad_from[0].style.display="block",h.shad_from[0].style.left=t+"%",h.shad_from[0].style.width=i+"%"):h.shad_from[0].style.display="none",e.to_shadow&&(a||c)?(s=this.convertToPercent(a?e.to_min:e.min),o=this.convertToPercent(c?e.to_max:e.max)-s,s=this.toFixed(s-this.coords.p_handle/100*s),o=this.toFixed(o-this.coords.p_handle/100*o),s+=this.coords.p_handle/2,h.shad_to[0].style.display="block",h.shad_to[0].style.left=s+"%",h.shad_to[0].style.width=o+"%"):h.shad_to[0].style.display="none")},writeToInput:function(){"single"===this.options.type?(this.options.values.length?this.$cache.input.prop("value",this.result.from_value):this.$cache.input.prop("value",this.result.from),this.$cache.input.data("from",this.result.from)):(this.options.values.length?this.$cache.input.prop("value",this.result.from_value+this.options.input_values_separator+this.result.to_value):this.$cache.input.prop("value",this.result.from+this.options.input_values_separator+this.result.to),this.$cache.input.data("from",this.result.from),this.$cache.input.data("to",this.result.to))},callOnStart:function(){this.writeToInput(),this.options.onStart&&"function"==typeof this.options.onStart&&(this.options.scope?this.options.onStart.call(this.options.scope,this.result):this.options.onStart(this.result))},callOnChange:function(){this.writeToInput(),this.options.onChange&&"function"==typeof this.options.onChange&&(this.options.scope?this.options.onChange.call(this.options.scope,this.result):this.options.onChange(this.result))},callOnFinish:function(){this.writeToInput(),this.options.onFinish&&"function"==typeof this.options.onFinish&&(this.options.scope?this.options.onFinish.call(this.options.scope,this.result):this.options.onFinish(this.result))},callOnUpdate:function(){this.writeToInput(),this.options.onUpdate&&"function"==typeof this.options.onUpdate&&(this.options.scope?this.options.onUpdate.call(this.options.scope,this.result):this.options.onUpdate(this.result))},toggleInput:function(){this.$cache.input.toggleClass("irs-hidden-input"),this.has_tab_index?this.$cache.input.prop("tabindex",-1):this.$cache.input.removeProp("tabindex"),this.has_tab_index=!this.has_tab_index},convertToPercent:function(t,i){var s,o=this.options.max-this.options.min,e=o/100;return o?(s=(i?t:t-this.options.min)/e,this.toFixed(s)):(this.no_diapason=!0,0)},convertToValue:function(t){var i,s,o=this.options.min,e=this.options.max,h=o.toString().split(".")[1],r=e.toString().split(".")[1],n=0,a=0;if(0===t)return this.options.min;if(100===t)return this.options.max;h&&(n=i=h.length),r&&(n=s=r.length),i&&s&&(n=s<=i?i:s),o<0&&(o=+(o+(a=Math.abs(o))).toFixed(n),e=+(e+a).toFixed(n));var c,l=(e-o)/100*t+o,_=this.options.step.toString().split(".")[1];return l=_?+l.toFixed(_.length):(l/=this.options.step,+(l*=this.options.step).toFixed(0)),a&&(l-=a),(c=_?+l.toFixed(_.length):this.toFixed(l))<this.options.min?c=this.options.min:c>this.options.max&&(c=this.options.max),c},calcWithStep:function(t){var i=Math.round(t/this.coords.p_step)*this.coords.p_step;return 100<i&&(i=100),100===t&&(i=100),this.toFixed(i)},checkMinInterval:function(t,i,s){var o,e,h=this.options;return h.min_interval?(o=this.convertToValue(t),e=this.convertToValue(i),"from"===s?e-o<h.min_interval&&(o=e-h.min_interval):o-e<h.min_interval&&(o=e+h.min_interval),this.convertToPercent(o)):t},checkMaxInterval:function(t,i,s){var o,e,h=this.options;return h.max_interval?(o=this.convertToValue(t),e=this.convertToValue(i),"from"===s?e-o>h.max_interval&&(o=e-h.max_interval):o-e>h.max_interval&&(o=e+h.max_interval),this.convertToPercent(o)):t},checkDiapason:function(t,i,s){var o=this.convertToValue(t),e=this.options;return"number"!=typeof i&&(i=e.min),"number"!=typeof s&&(s=e.max),o<i&&(o=i),s<o&&(o=s),this.convertToPercent(o)},toFixed:function(t){return+(t=t.toFixed(20))},_prettify:function(t){return this.options.prettify_enabled?this.options.prettify&&"function"==typeof this.options.prettify?this.options.prettify(t):this.prettify(t):t},prettify:function(t){return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1"+this.options.prettify_separator)},checkEdges:function(t,i){return this.options.force_edges&&(t<0?t=0:100-i<t&&(t=100-i)),this.toFixed(t)},validate:function(){var t,i,s=this.options,o=this.result,e=s.values,h=e.length;if("string"==typeof s.min&&(s.min=+s.min),"string"==typeof s.max&&(s.max=+s.max),"string"==typeof s.from&&(s.from=+s.from),"string"==typeof s.to&&(s.to=+s.to),"string"==typeof s.step&&(s.step=+s.step),"string"==typeof s.from_min&&(s.from_min=+s.from_min),"string"==typeof s.from_max&&(s.from_max=+s.from_max),"string"==typeof s.to_min&&(s.to_min=+s.to_min),"string"==typeof s.to_max&&(s.to_max=+s.to_max),"string"==typeof s.grid_num&&(s.grid_num=+s.grid_num),s.max<s.min&&(s.max=s.min),h)for(s.p_values=[],s.min=0,s.max=h-1,s.step=1,s.grid_num=s.max,s.grid_snap=!0,i=0;i<h;i++)t=+e[i],t=isNaN(t)?e[i]:(e[i]=t,this._prettify(t)),s.p_values.push(t);"number"==typeof s.from&&!isNaN(s.from)||(s.from=s.min),"number"==typeof s.to&&!isNaN(s.to)||(s.to=s.max),"single"===s.type?(s.from<s.min&&(s.from=s.min),s.from>s.max&&(s.from=s.max)):(s.from<s.min&&(s.from=s.min),s.from>s.max&&(s.from=s.max),s.to<s.min&&(s.to=s.min),s.to>s.max&&(s.to=s.max),this.update_check.from&&(this.update_check.from!==s.from&&s.from>s.to&&(s.from=s.to),this.update_check.to!==s.to&&s.to<s.from&&(s.to=s.from)),s.from>s.to&&(s.from=s.to),s.to<s.from&&(s.to=s.from)),("number"!=typeof s.step||isNaN(s.step)||!s.step||s.step<0)&&(s.step=1),"number"==typeof s.from_min&&s.from<s.from_min&&(s.from=s.from_min),"number"==typeof s.from_max&&s.from>s.from_max&&(s.from=s.from_max),"number"==typeof s.to_min&&s.to<s.to_min&&(s.to=s.to_min),"number"==typeof s.to_max&&s.from>s.to_max&&(s.to=s.to_max),o&&(o.min!==s.min&&(o.min=s.min),o.max!==s.max&&(o.max=s.max),(o.from<o.min||o.from>o.max)&&(o.from=s.from),(o.to<o.min||o.to>o.max)&&(o.to=s.to)),("number"!=typeof s.min_interval||isNaN(s.min_interval)||!s.min_interval||s.min_interval<0)&&(s.min_interval=0),("number"!=typeof s.max_interval||isNaN(s.max_interval)||!s.max_interval||s.max_interval<0)&&(s.max_interval=0),s.min_interval&&s.min_interval>s.max-s.min&&(s.min_interval=s.max-s.min),s.max_interval&&s.max_interval>s.max-s.min&&(s.max_interval=s.max-s.min)},decorate:function(t,i){var s="",o=this.options;return o.prefix&&(s+=o.prefix),s+=t,o.max_postfix&&(o.values.length&&t===o.p_values[o.max]?(s+=o.max_postfix,o.postfix&&(s+=" ")):i===o.max&&(s+=o.max_postfix,o.postfix&&(s+=" "))),o.postfix&&(s+=o.postfix),s},updateFrom:function(){this.result.from=this.options.from,this.result.from_percent=this.convertToPercent(this.result.from),this.result.from_pretty=this._prettify(this.result.from),this.options.values&&(this.result.from_value=this.options.values[this.result.from])},updateTo:function(){this.result.to=this.options.to,this.result.to_percent=this.convertToPercent(this.result.to),this.result.to_pretty=this._prettify(this.result.to),this.options.values&&(this.result.to_value=this.options.values[this.result.to])},updateResult:function(){this.result.min=this.options.min,this.result.max=this.options.max,this.updateFrom(),this.updateTo()},appendGrid:function(){if(this.options.grid){var t,i,s,o,e,h,r=this.options,n=r.max-r.min,a=r.grid_num,c=0,l=4,_="";for(this.calcGridMargin(),r.grid_snap&&(a=n/r.step),50<a&&(a=50),s=this.toFixed(100/a),4<a&&(l=3),7<a&&(l=2),14<a&&(l=1),28<a&&(l=0),t=0;t<a+1;t++){for(o=l,100<(c=this.toFixed(s*t))&&(c=100),e=((this.coords.big[t]=c)-s*(t-1))/(o+1),i=1;i<=o&&0!==c;i++)_+='<span class="irs-grid-pol small" style="left: '+this.toFixed(c-e*i)+'%"></span>';_+='<span class="irs-grid-pol" style="left: '+c+'%"></span>',h=this.convertToValue(c),_+='<span class="irs-grid-text js-grid-text-'+t+'" style="left: '+c+'%">'+(h=r.values.length?r.p_values[h]:this._prettify(h))+"</span>"}this.coords.big_num=Math.ceil(a+1),this.$cache.cont.addClass("irs-with-grid"),this.$cache.grid.html(_),this.cacheGridLabels()}},cacheGridLabels:function(){var t,i,s=this.coords.big_num;for(i=0;i<s;i++)t=this.$cache.grid.find(".js-grid-text-"+i),this.$cache.grid_labels.push(t);this.calcGridLabels()},calcGridLabels:function(){var t,i,s=[],o=[],e=this.coords.big_num;for(t=0;t<e;t++)this.coords.big_w[t]=this.$cache.grid_labels[t].outerWidth(!1),this.coords.big_p[t]=this.toFixed(this.coords.big_w[t]/this.coords.w_rs*100),this.coords.big_x[t]=this.toFixed(this.coords.big_p[t]/2),s[t]=this.toFixed(this.coords.big[t]-this.coords.big_x[t]),o[t]=this.toFixed(s[t]+this.coords.big_p[t]);for(this.options.force_edges&&(s[0]<-this.coords.grid_gap&&(s[0]=-this.coords.grid_gap,o[0]=this.toFixed(s[0]+this.coords.big_p[0]),this.coords.big_x[0]=this.coords.grid_gap),o[e-1]>100+this.coords.grid_gap&&(o[e-1]=100+this.coords.grid_gap,s[e-1]=this.toFixed(o[e-1]-this.coords.big_p[e-1]),this.coords.big_x[e-1]=this.toFixed(this.coords.big_p[e-1]-this.coords.grid_gap))),this.calcGridCollision(2,s,o),this.calcGridCollision(4,s,o),t=0;t<e;t++)i=this.$cache.grid_labels[t][0],this.coords.big_x[t]!==Number.POSITIVE_INFINITY&&(i.style.marginLeft=-this.coords.big_x[t]+"%")},calcGridCollision:function(t,i,s){var o,e,h,r=this.coords.big_num;for(o=0;o<r&&!(r<=(e=o+t/2));o+=t)h=this.$cache.grid_labels[e][0],s[o]<=i[e]?h.style.visibility="visible":h.style.visibility="hidden"},calcGridMargin:function(){this.options.grid_margin&&(this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&("single"===this.options.type?this.coords.w_handle=this.$cache.s_single.outerWidth(!1):this.coords.w_handle=this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100),this.coords.grid_gap=this.toFixed(this.coords.p_handle/2-.1),this.$cache.grid[0].style.width=this.toFixed(100-this.coords.p_handle)+"%",this.$cache.grid[0].style.left=this.coords.grid_gap+"%"))},update:function(t){this.input&&(this.is_update=!0,this.options.from=this.result.from,this.options.to=this.result.to,this.update_check.from=this.result.from,this.update_check.to=this.result.to,this.options=a.extend(this.options,t),this.validate(),this.updateResult(t),this.toggleInput(),this.remove(),this.init(!0))},reset:function(){this.input&&(this.updateResult(),this.update())},destroy:function(){this.input&&(this.toggleInput(),this.$cache.input.prop("readonly",!1),a.data(this.input,"ionRangeSlider",null),this.remove(),this.input=null,this.options=null)}},a.fn.ionRangeSlider=function(t){return this.each(function(){a.data(this,"ionRangeSlider")||a.data(this,"ionRangeSlider",new h(this,t,o++))})},function(){for(var h=0,t=["ms","moz","webkit","o"],i=0;i<t.length&&!l.requestAnimationFrame;++i)l.requestAnimationFrame=l[t[i]+"RequestAnimationFrame"],l.cancelAnimationFrame=l[t[i]+"CancelAnimationFrame"]||l[t[i]+"CancelRequestAnimationFrame"];l.requestAnimationFrame||(l.requestAnimationFrame=function(t,i){var s=(new Date).getTime(),o=Math.max(0,16-(s-h)),e=l.setTimeout(function(){t(s+o)},o);return h=s+o,e}),l.cancelAnimationFrame||(l.cancelAnimationFrame=function(t){clearTimeout(t)})}()});
;(function($, window) {

	/**
	 * Конструктор
	 *
	 * @constructor
	 * @param {HTMLElement} el - HTML-элемент в DOM
	 * @param {Object=} options - Объект с параметрами
	 */
	function FlexTabs(element, options) {
		var _ = this;

		_.it = element;
		_.init(options);

	};

	var fn = FlexTabs.prototype,

		 // Сокращения
		 _tabs_ = 'tabs',
		 _accordion_ = 'accordion',
		 
		 _control_ = 'control',
		 _controls_ = 'controls',
		 _status_ = 'status',
		 _content_ = 'content',
		 _active_ = 'active',
		 _auto_  = 'auto',
		 _flexTabs_ = 'flexTabs',

		 _dataIndex_ = 'data-index',
		 _dataId_ = 'data-id',

		 _addClass_ = 'addClass',

		 _div_ = '<div/>';


	/**
	 * Настройки по умолчанию
	 *
	 * @default
	 */
	FlexTabs.defaults = {

		// Базовый тип разметки:
		// "tabs" / "accordion"
		type: _tabs_,

		// Ширина окна браузера, при которой вкладки
		// будут преобразованы в аккордеон, px
		breakpoint: 768,

		// Событие переключающее вкладки,
		// При значении false — событие на вкладки назначено не будет
		event: 'click',

		// Базовая продолжительность анимации, мс
		fade: 200,

		// Преобразование 'tabs' в 'accordion'
		responsive: true,

		// Иконка для вкладок в режиме 'accordion'
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M48.293 23.293l-16.293 16.293-16.293-16.293-1.414 1.561 17 17.146h1.414l17-17.146z"/></svg>',

		// Способ переключения вкладок в режиме "accordion"
		// true — вкладки можно сворачивать и разворачивать,
		// 	разворачивание новой вкладки не влечет сворачивание остальных.
		// false — вкладки можно только разварачивать,
		// 	разворачивание новой вкладки влечет сворачивание всех остальных.
		collapsible: true,

		// Тема оформления (CSS-класс осн. контейнера)
		theme: 'ft-theme-default',

		// CSS-классы
		classes: {
			// Общий контейнер
			container: 'ft-container',

			// Общий контейнер. Режим: Tabs
			mtb: 'ft-'+ _tabs_,
			// Общий контейнер. Режим: Accordion
			mac: 'ft-'+ _accordion_,

			// Контейнер для содержимого вкладок
			contents: 'ft-'+ _content_ +'s',
			// Контейнер для вкладок
			nav: 'ft-nav',

			// Вкладка
			tab: 'ft-tab',
			// Вкладка, содержащая иконку
			tabIcon: 'ft-tab-icon',

			// Контент вкладки
			content: 'ft-' + _content_,

			// Контейнер с иконкой
			icon: 'ft-icon',

			// Активная вкладка/контент
			active: _active_,
		}

	};

	/**
	 * Экземпляры
	 *
	 * @default
	 */
	FlexTabs.instances = {};

	/**
	 * Инициализация
	 *
	 * @public
	 * @param {object={}} options - Объект с польз. настройками
	 * @example
	 * 
	 * $(element).flexTabs('init', {});
	 * $(element).flexTabs('init');
	 */
	fn.init = function(options) {
		var _ = this,
			 it = _.it,
			 $it = $(it),
			 event, sets, cls;

		if( _.inited === true ) return;

		_[_active_] = {};
		_.animation = _auto_;
		_.nsid = __.getRndNum(10000, 90000);
		_.ns = 'ft-' + _.nsid;

		_.id = $it.attr('id') || _.ns;
		$it.attr('id', _.id);
		FlexTabs.instances[_.id] = _;

		// Исходники: содержимое и атрибуты
		_.origin = {
			attrs: { class: '' },
			html: $it.html()
		};

		$.each(it.attributes, function() {
			_.origin.attrs[this.name] = this.value;
		});

		// Настройки
		sets = _.defineSets(options);
		cls = sets.classes;
		_.origin.type = sets.type;

		// Разметка
		_.createMarkup();

		// Режимы
		_.defineMode();
		$(window).on('resize' + '.' + _.ns, function() {
			_.defineMode();
		});

		// Вкладки. Обработчик
		if( event = sets.event ) {

			$(it).on(event + '.' + _.ns, '.' + cls.tab, function(e) {

				var target = $(e.target),
					 index;

				if( !target.hasClass(cls.tab) )
					target = target.parents('.' + cls.tab);

				index = Number(target.attr(_dataIndex_)) || 0;

				_.switch(index);

				e.preventDefault();
				e.stopPropagation();
				
			});

		}

		// Hash
		if( !_.inited ) {
			var hash = location.hash,
				 rexExp = new RegExp('' + _.id + '=([a-zA-Z0-9.,-_]+)', 'igm'),
				 tabsString, tabs = [];

			if( rexExp.test(hash) ) {

				FlexTabs.hasHash = true;

				tabsString = hash.match(rexExp)[0];
				tabsString = tabsString.replace(_.id + '=', '');
				tabs = tabsString.split(',');

				_.closeAll(true, 0);

				for (var i = tabs.length - 1; i >= 0; i--) {

					if( Number(tabs[i] ) ) {
						tabs[i] = Number(tabs[i]);
					}
					
					_.open(tabs[i], false, 0);
				};

			}
		}

		// Плагин инициализирован
		_.inited = true;

		// Callback: 'afterInit'
		$(it).trigger('afterInit.ft', [_]);

		// Анимация появления
		if( it.style.display == 'none' )
			$(it).fadeIn(sets.fade);
		
		// console.log( 'Метод: Init', arguments, _ );

	};


	/**
	 * Создание разметки
	 *
	 * @public
	 */
	fn.createMarkup = function() {
		var _ = this,
			 sets = _.sets,
			 cls = sets.classes,
			 lt = _.layout = {
			 	controls: {},
			 	navElems: {}
			 };

		// Контейнер
		lt.it = $(_.it)[_addClass_](cls.container + ' ' + sets.theme);

		switch( sets.type ) {

			// ТАБЫ
			case _tabs_: {

				// Контент
				lt.cnt = lt.it.find('.'+cls.contents);
				if( !lt.cnt.length )
					lt.cnt = lt.it.find('>*').eq(1);
				if( !lt.cnt.length )
					lt.cnt = $(_div_).appendTo(lt.it);

				lt.cnt[_addClass_](cls.contents);

				// Контент, элементы
				lt.cntElems = lt.cnt.children();


				// Навигация
				lt.nav = lt.it.find('.'+cls.nav);
				if( !lt.nav.length )
					lt.nav = lt.it.find('>*').eq(0);
				lt.nav[_addClass_](cls.nav);

				// Навигация, элементы
				lt.navElems = {
					tabs: lt.nav.children(),
					accordion: $()
				};

				build(sets.type);

				break;
			}

			// АККОРДЕОН
			case _accordion_: {

				// Контент
				lt.cnt = lt.it.wrapInner($(_div_, { class: cls.contents })).children().eq(0);

				// Контент, элементы
				lt.cntElems = lt.cnt.children().filter(':odd');


				// Навигация
				lt.nav = $('<nav/>', { class: cls.nav }).prependTo(lt.it);

				// Навигация, элементы
				lt.navElems = {
					tabs: $(),
					accordion: lt.cnt.find('>*').filter(':even')
				};

				build(sets.type);

				break;
			}

		}

		function build(type) {

			$.each(lt.navElems[type], function(index, tab) {

				var tab = $(tab),
					 content = lt.cntElems.eq(index),
					 id, attrID, href, dataID,
					 active = tab.hasClass(cls[_active_]) ? 1 : 0,
					 tabInfo = {},
					 tabAlter; 

				// Вкладка
				tab
					[_addClass_](cls.tab)
					.attr(_dataIndex_, index);

				if( href = tab.attr('href') ) {
					id = href.replace('#', '');
					attrID = 'href';
					tab.attr('href', '#' + _.id + '=' + id);
				} else if( dataID = tab.attr(_dataId_) ) {
					id = dataID;
					attrID = _dataId_;
				} else {
					id = 'ft-' + __.getRndNum(10000, 90000);
					attrID = _dataId_;
					tab.attr(_dataId_, id);
				}

				
				// Контент вкладки
				if( !content.length )
					content = $(_div_).appendTo(lt.cnt);

				content
					.attr('id', id)
					[_addClass_](cls[_content_])
					.attr(_dataIndex_, index)
					.hide();

				// Альтернативная вкладка
				tabAlter = tab.clone(true, true);
				if( type == _tabs_ ) content.before(tabAlter);
				else if( type == _accordion_ ) lt.nav.append(tabAlter);

				tabInfo = {
					id: id,
					attrID: attrID,
					index: index,
					control: {
						tabs: $(),
						accordion: $()
					},
					content: content,
					status: 0 // 1 - откр. 0 - закр.
				};

				if( type == _tabs_ ) {

					tabInfo[_control_][_tabs_] = tab;
					tabInfo[_control_][_accordion_] = tabAlter;
					lt.navElems[_accordion_] = lt.navElems[_accordion_].add(tabAlter);

				} else if( type == _accordion_ ) {

					tabInfo[_control_][_tabs_] = tabAlter;
					tabInfo[_control_][_accordion_] = tab;
					lt.navElems[_tabs_] = lt.navElems[_tabs_].add(tabAlter);

				}

				// Иконка
				if( sets.icon ) {

					tabInfo[_control_][_accordion_]
						[_addClass_](cls.tabIcon)
						.append($('<div class="' + cls.icon + '">' + sets.icon + '</div>'));

				}
				
				lt[_controls_][index] = tabInfo;

				if( active )
					_[_active_][index] = tabInfo;

			});
		}

	};


	/**
	 * Открытие вкладки
	 *
	 * @param {Number|String|Object} tab - Индекс(число), ID(строка) или Object вкладки
	 * @param {Boolean=false} forcibly - Принудительный режим запуска
	 * @param {Number=} fade - Продолжительность анимации, мс
	 *
	 * @public
	 */
	fn.open = function(tab, forcibly, fade) {
		var _ = this,
			 mode = _.mode,
			 cls = _.sets.classes,
			 fade = (fade >= 0) ? fade : _.sets.fade,
			 targetTab = _.getTab(tab);

		// Вкладка не найдена или открыта — выход
		if( !targetTab || targetTab[_status_] ) return;

		// Непринудительный запуск в табах
		if( !forcibly && mode == _tabs_ )
			_.closeAll(true); // принудительно

		// Открытие
		targetTab[_content_]
			.add(targetTab[_control_][_tabs_])
			.add(targetTab[_control_][_accordion_])
			[_addClass_](cls[_active_]);
		targetTab[_status_] = 1;
		_[_active_][targetTab.index] = targetTab;

		if( !forcibly )
		// Callback: 'afterOpen'
		$(_.it).trigger('afterOpen.ft', [_, targetTab]);

		// Анимация открытия
		if( _.animation == _auto_ ) {
			if( _.mode == _accordion_ ) {
				targetTab[_content_].slideDown({
					duration: fade,
					easing: 'swing'
				});
			} else {
				targetTab[_content_].fadeIn(fade);
			}
		}

		_.animation = _auto_;

		// console.log( 'Open', _ );

	};


	/**
	 * Закрытие вкладки
	 *
	 * @param {Number|String|Object} tab - Индекс(число), ID(строка) или Object вкладки
	 * @param {Boolean=false} forcibly - Принудительный режим запуска
	 * @param {Number=} fade - Продолжительность анимации, мс
	 *
	 * @public
	 */
	fn.close = function(tab, forcibly, fade) {
		var _ = this,
			 mode = _.mode,
			 cls = _.sets.classes,
			 fade = (fade >= 0) ? fade : _.sets.fade,
			 targetTab = _.getTab(tab);

		// Вкладка не найдена или закрыта — выход
		if( !targetTab || !targetTab[_status_] ) return;

		// В режиме вкладок, не принудительно, не закрывать активную вкладку
		if( !forcibly && mode == _tabs_ && targetTab[_status_] ) return;

		// Закрытие
		targetTab[_content_]
			.add(targetTab[_control_][_tabs_])
			.add(targetTab[_control_][_accordion_])
			.removeClass(cls[_active_]);
		targetTab[_status_] = 0;
		delete _[_active_][targetTab.index];

		if( !forcibly )
		// Callback: 'afterClose'
		$(_.it).trigger('afterClose.ft', [_, targetTab]);

		// Анимация закрытия
		if( _.animation == _auto_ ) {
			if( _.mode == _accordion_ ) {
				targetTab[_content_].slideUp({
					duration: fade,
					easing: 'linear'
				});
			} else {
				targetTab[_content_].hide();
			}
		}

		_.animation = _auto_;
		
		// console.log( 'Close', _ );

	};


	/**
	 * Закрытие всех вкладок
	 * 
	 * @param {Boolean=false} forcibly - Принудительный режим запуска
	 * @param {Number=} fade - Продолжительность анимации, мс
	 * 
	 * @public
	 */
	fn.closeAll = function(forcibly, fade) {
		var _ = this,
			 fade = (fade >= 0) ? fade : _.sets.fade;

		$.each(_.layout[_controls_], function(i, tab) {
			_.close(tab, forcibly, fade);
		});

		// console.log( 'Close All', _ );

	};


	/**
	 * Переключение вкладки в зависимости от текущего режима
	 *
	 * @param {Number|String|Object} tab - Индекс(число), ID(строка) или Object вкладки
	 * @param {Number=} fade - Продолжительность анимации, мс
	 *
	 * @public
	 */
	fn.switch = function(tab, fade) {
		var _ = this,
			 sets = _.sets,
			 mode = _.mode,
			 fade = (fade >= 0) ? fade : _.sets.fade,
			 targetTab = _.getTab(tab);
		
		if( !targetTab ) return;

		// Режим: Tabs
		if( mode == _tabs_ ) {

			// Игнор, если целевая вкладка уже открыта 
			if( targetTab[_status_] ) return;

			_.closeAll(true); // принудительно
			_.open(targetTab, false, fade);

		// Режим: Accordion
		} else if( mode == _accordion_ ) {

			if( sets.collapsible ) {

				targetTab[_status_] ? _.close(targetTab, false, fade) : _.open(targetTab, false, fade);

			} else if( !sets.collapsible ) {

				// Игнор, если целевая вкладка уже открыта 
				if( targetTab[_status_] ) return;

				_.closeAll(false); // принудительно
				_.open(targetTab, false, fade);

			}

		}

		// console.log( 'Переключение вкладки. Режим: ', mode );

	};


	/**
	 * Принимает ID, Index или объект вкладки.
	 * Возвращает объект вкладки
 	 *
 	 * @param {Number|String|Object} tab - Индекс(число), ID(строка) или Object вкладки
 	 *
	 * @public
	 */
	fn.getTab = function(tab) {
		var _ = this,
			 tabs = _.layout[_controls_],
			 tabType = typeof tab,
			 tabTarget;

		switch(tabType) {
			case 'number': {
				tabTarget = tabs[tab];
				break;
			}
			case 'string': {
				tab = tab.replace('#', '');
				tabTarget = tabs[_.getTabIndex(tab)];
				break;
			}
			case 'object': {
				tabTarget = tab;
				break;
			}
		}

		return tabTarget;

	};


	/**
	 * Возвращает Index вкладки по ее ID
	 *
	 * @param {String} id - ID вкладки
	 *
	 * @public
	 */
	fn.getTabIndex = function(id) {
		var _ = this,
			 index;

		id.replace('#', '');
		$.each(_.layout[_controls_], function(i, tab) {
			if( tab.id === id ) {
				index = tab.index;
				return false;
			}
		});

		return index;

	};


	/**
	 * Определение режима отображения
	 *
	 * @public
	 */
	fn.defineMode = function() {
		var _ = this,
			 sets = _.sets,
			 type = sets.type,
			 width;

		// Режим: Tabs
		if( type == _tabs_ ) {

			if( !sets.responsive ) {
				_.changeMode(_tabs_, true);
				return;
			}

			width = $(window).outerWidth();

			// Режим: Tabs Tabs
			if( ( !_.mode || _.mode == _accordion_) && ( width >= sets.breakpoint ) ) {

				_.changeMode(_tabs_, true);

			// Режим: Tabs Accordion
			} else if( ( !_.mode || _.mode == _tabs_) && ( width < sets.breakpoint ) ) {

				_.changeMode(_accordion_, true);

			}

		// Режим: Accordion
		} else if( type == _accordion_ && _.mode != _accordion_ ) {

			_.changeMode(_accordion_, true);

		}

		return _.mode;

	};


	/**
	 * Смена режима отображения
	 *
	 * @param {String} mode - Режим, на который нужно сменить ( 'tabs', 'accordion' )
	 * @param {Boolean=false} flow - Глобальная(true)/Поточная(false) смена режима
	 * @param {Function=} cb - Колбэк-функция. Сработает до выполнения метода changeMode()
	 *
	 * @public
	 */
	fn.changeMode = function(mode, flow, cb) {
		var _ = this,
			 cls = _.sets.classes,
			 active = _[_active_],
			 cb = (typeof cb === 'function' ) ? cb : $.noop;

		if( !mode ) return;

		cb.call(_);

		if( !flow ) {

			// Смена режима по умолчанию
			_.sets.type = mode;

			if( mode == _tabs_ ) {
				_.defineMode();
				return;
			}
		}

		// Callback: beforeChangeMode
		$(_.it).trigger('beforeChangeMode.ft', [_]);

		// Смена текущего режима
		_.mode = mode;

		switch( mode ) {
			case _tabs_: {

				$(_.it).removeClass(cls.mac)[_addClass_](cls.mtb);

				$.each(active, function() {
					_.closeAll(true, 0);
					_.open(this, true, 0);
					return false;
				});

				if( $.isEmptyObject(active) ) _.switch(0, 0);

				break;
			}
			case _accordion_: {

				$(_.it)[_addClass_](cls.mac).removeClass(cls.mtb);

				$.each(active, function() {
					_.open(this, true, 0);
				});

				break;
			}
		}

		// Callback: afterChangeMode
		$(_.it).trigger('afterChangeMode.ft', [_]);

	};


	/**
	 * Формирование настроек
	 *
	 * @param {Object=} opts - Объект с польз. настройками
	 *
	 * @public
	 *
	 */
	fn.defineSets = function(opts) {
		var _ = this,
			 // Настройки: Пользовательские
			 options = _.options = opts || {};
			 // Настройки: Data-атрибут
			 data = _.dataOptions = $(_.it).data('ft') || {};

		if( typeof(data) === 'string' )
			data = { type: data };

		// Настройки: Итоговые
		return _.sets = $.extend(true, {}, FlexTabs.defaults, options, data);

	};


	/**
	 * Деинициализация
	 *
	 * @public
	 * @example
	 * 
	 * $(element).flexTabs('destroy');
	 */
	fn.destroy = function() {
		var _ = this,
			 it = _.it,
			 $it = $(it),
			 ns = '.' + _.ns;

		if( !_.inited ) return;

		// console.log( 'Метод: Destroy', arguments );
		
		$it.empty()
			.html(_.origin.html)
			.off(_.sets.event + ns);

		$(window).off('resize' + ns);

		$.each(_.origin.attrs, function(name, value) {
			$it.attr(name, value);
		});

		delete FlexTabs.instances[$it.attr('id')];
		delete it[_flexTabs_];

	};


	/**
	 * Реинициализация
	 *
	 * @public
	 * @param {object=} newSets - Объект с новыми параметрами
	 * @example
	 * 
	 * $(element).flexTabs('reinit');
	 * $(element).flexTabs('reinit', {});
	 */
	fn.reinit = function(newSets) {
		var _ = this,
			 it = _.it,
			 sets = (typeof newSets == 'object' && Object.keys(newSets).length != 0 )
					  ? newSets : $.extend(true, {}, _.sets, {type:_.origin.type});

		// console.log( 'Метод: Reinit' );

		_.destroy();
		$(it)[_flexTabs_](sets);

	};


	__ = {
		/**
		 * Генерирует случайное число
		 *
		 * @private
		 * @param {Number} min - от
		 * @param {Number} max - до
		 */
		getRndNum: function(min, max) {
			return Math.round(min - 0.5 + Math.random() * (max - min + 1));
		}
	};

	$.fn[_flexTabs_] = function() {

		var args = arguments,
			 mth = args[0],
			 length = this.length, i = 0;

		$.each(this, function(i, it) {
			if( typeof mth == 'object' || typeof mth == 'undefined' )
				it[_flexTabs_] = createInstance(it, mth);
			else if( mth == 'init' || mth == 'reinit' )
				it[_flexTabs_] ? getMethod(it, mth, args) : it[_flexTabs_] = createInstance(it, args[1]);
			else getMethod( it, mth, args );

			// Очистка Hash на последней инициализации
			if( FlexTabs.hasHash && (i == length - 1) )
				history.pushState({ a: 'a' }, '', location.href.replace(location.hash, ''));

			i++;
		});

		function getMethod(it, mth, args) {
			if( !(it[_flexTabs_] instanceof FlexTabs) ) return;
			if( !(mth in it[_flexTabs_]) ) return;
			return it[_flexTabs_][mth].apply(it[_flexTabs_], Array.prototype.slice.call(args, 1));
		};

		function createInstance(it, mth) {
			if( it[_flexTabs_] instanceof FlexTabs ) return;
			return new FlexTabs(it, mth);
		};

		return this;
	};

	window.FlexTabs = FlexTabs;

})(jQuery, window);
const startWidth = $(window).width();
// const windowWidth = window.innerWidth;
// let infoSwiper;

// const actualYear = () => {
//   const year = new Date().getFullYear();

//   if (document.querySelector("[data-actual-year]")) {
//     document.querySelector("[data-actual-year]").textContent = year;
//   }
// };

const check = (element) => {
  if (element.length > 0) {
    return true;
  }

  return false;
};

// const getAccordionNav = () => {
//   const accordionNav = $(".nav__item--down");

//   if (check(accordionNav) && windowWidth <= 1000)
//     $(".nav__item--down").accordion({
//       transitionSpeed: 400,
//     });
// };

// const getDropDown = () => {
//   const itemDown = $(".nav__item--down");
//   const classActive = "nav__item--down-active";

//   const addClass = () => {
//     itemDown.addClass(classActive);
//   };

//   const removeClass = () => {
//     itemDown.removeClass(classActive);
//   };

//   if (check(itemDown) && windowWidth > 1000) {
//     itemDown.on("mouseover", () => {
//       addClass();
//     });

//     itemDown.on("mouseleave", () => {
//       removeClass();
//     });
//   }
// };

// const getMenuMobile = () => {
//   const navMenu = document.querySelector(".header__nav");

//   if (navMenu !== null && windowWidth <= 1000) {
//     const linkOpen = $(".header__link--open");
//     const linkClose = $(".header__link--close");
//     const menuLink = $(".menu-link");
//     const subMenuLink = $(".sub-list__link");

//     const menuMobile = new MmenuLight(navMenu);

//     const drawer = menuMobile.offcanvas();

//     linkOpen.on("click", (e) => {
//       e.preventDefault();
//       drawer.open();
//     });

//     linkClose.on("click", (e) => {
//       e.preventDefault();
//       drawer.close();
//     });

//     menuLink.on("click", (e) => {
//       e.preventDefault();
//       drawer.close();
//     });

//     subMenuLink.on("click", (e) => {
//       e.preventDefault();
//       drawer.close();
//     });
//   }
// };

// const createModal = (modal) => {
//   modal.modal({
//     fadeDuration: 200,
//   });
// };

// const getConsultationModal = () => {
//   const modal = $("#modal-consultation");
//   const link = $(".open-modal-consultation");

//   if (check(modal)) {
//     link.on("click", (e) => {
//       e.preventDefault();
//       createModal(modal);
//     });
//   }
// };

// const getSuccessModal = () => {
//   const modal = $("#modal-success");

//   if (check(modal)) {
//     createModal(modal);
//   }
// };

// const sendFormConsultation = () => {
//   const form = $(".form-consultation");

//   if (check(form)) {
//     form.on("submit", (e) => {
//       const data = $(this).serialize();

//       e.preventDefault();

//       $.ajax({
//         url: "https://httpbin.org/anything",
//         method: "post",
//         dataType: "json",
//         data,
//         success(data) {
//           getSuccessModal();
//           form.find(".reset").val("");
//         },
//       });
//     });
//   }
// };

// const sendFormRecord = () => {
//   const form = $(".record-form");

//   if (check(form)) {
//     form.on("submit", (e) => {
//       const data = $(this).serialize();

//       e.preventDefault();

//       $.ajax({
//         url: "https://httpbin.org/anything",
//         method: "post",
//         dataType: "json",
//         data,
//         success(data) {
//           getSuccessModal();
//           form.find(".reset").val("");
//         },
//       });
//     });
//   }
// };

// const getInputMask = () => {
//   const input = $(".mask");

//   if (check(input)) {
//     input.inputmask({
//       // mask: "+7 (999) 999-9999",
//       regex: "\\+7\\([0-79]{1}[0-9]{2}\\)\\-[0-9]{3}\\-[0-9]{4}",
//       keepStatic: true,
//     });
//   }
// };

// const getConsultationSlider = () => {
//   const slider = $(".slider__left");

//   if (check(slider)) {
//     const swiper = new Swiper(".slider__left", {
//       loop: true,
//       spaceBetween: 50,

//       pagination: {
//         el: ".slider__pagination",
//         bulletClass: "slider__bullet",
//         clickable: true,
//       },

//       // Navigation arrows
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
//   }
// };

// const getInfoSlider = () => {
//   const slider = $(".slider-info__container");

//   if (check(slider)) {
//     infoSwiper = new Swiper(".slider-info__container", {
//       loop: true,
//       effect: "fade",
//       allowTouchMove: false,
//       initialSlide: 0,
//       fadeEffect: {
//         crossFade: true,
//       },
//     });
//   }
// };

// const getInteriorSlider = () => {
//   const slider = $(".slider-interior__container");
//   const current = $(".interior-controls__current");
//   const sum = $(".interior-controls__sum");

//   if (check(slider) && check(current) && check(sum)) {
//     const swiper = new Swiper(".slider-interior__container", {
//       loop: true,
//       spaceBetween: 50,
//       initialSlide: 0,

//       pagination: {
//         el: ".interior-controls__pagination",
//         bulletClass: "slider__bullet",
//         clickable: true,
//       },

//       navigation: {
//         nextEl: ".interior-controls__next",
//         prevEl: ".interior-controls__prev",
//       },

//       on: {
//         afterInit(e) {
//           current.text(e.realIndex + 1);
//           sum.text(e.slides.length - 2);
//         },

//         slideChange(e) {
//           current.text(e.realIndex + 1);
//         },
//       },

//       controller: {
//         control: infoSwiper,
//       },
//     });
//   }
// };

// const getExamleSlider = () => {
//   const slider = $(".example-slider");
//   const items = $(".example-decor__item");
//   const current = $(".example-slider__index-current");
//   const sum = $(".example-slider__index-sum");
//   let swiper;

//   const changeSlade = (e) => {
//     $(items).on("click", (evt) => {
//       evt.preventDefault();
//       swiper.slideToLoop(Number(evt.target.dataset.slider_num));
//     });
//   };

//   if (check(slider)) {
//     swiper = new Swiper(".example-slider", {
//       spaceBetween: 50,
//       loop: true,
//       autoHeight: true,

//       navigation: {
//         nextEl: ".example-slider__next",
//         prevEl: ".example-slider__prev",
//       },

//       on: {
//         afterInit(e) {
//           $(items[e.realIndex]).addClass("example-decor__item--current");
//           changeSlade(e);
//           current.text(e.realIndex + 1);
//           sum.text(e.slides.length - 2);
//         },

//         slideChange(e) {
//           $(items).removeClass("example-decor__item--current");
//           $(items[e.realIndex]).addClass("example-decor__item--current");
//           current.text(e.realIndex + 1);
//         },
//       },
//     });
//   }
// };

// const marks = new Map([
//   [
//     "mir",
//     [
//       "Салон «Мир мебели»",
//       "Партизанская, 56",
//       "пн - сб  10:00 - 20:00,  вс 11:00 - 19:00",
//     ],
//   ],
//   [
//     "etalon",
//     [
//       "МЦ Эталон",
//       "Партизанская, 63., 2 этаж",
//       "пн - сб 10:00 - 19:00, вс 11:00 - 19:00",
//     ],
//   ],
// ]);

// const getBallon = (name) => {
//   return `<div class="addresses__item">
//     <h3> ${marks.get(name)[0]}</h3>
//       <p>${marks.get(name)[1]}</p>
//       <p>${marks.get(name)[2]}</p>
//   </div>`;
// };

// function initBasketMap() {
//   const myMap = new ymaps.Map("map", {
//     center: [52.27747, 104.30572],
//     zoom: 16,
//     controls: [],
//   });

//   const placemarkMir = new ymaps.Placemark(
//     [52.27707, 104.30592],

//     {
//       balloonContent: getBallon("mir"),
//       maxWidth: 300,
//     },

//     {
//       iconLayout: "default#image",
//       iconImageHref: "./img/svg/mark-map.svg",
//       iconImageSize: [51, 73],
//       iconImageOffset: [-25, -73],
//       // hideIconOnBalloonOpen: false,
//     }
//   );

//   const placemarkEtalon = new ymaps.Placemark(
//     [52.277654, 104.306738],
//     {
//       balloonContent: getBallon("etalon"),
//     },

//     {
//       iconLayout: "default#image",
//       iconImageHref: "./img/svg/mark-map.svg",
//       iconImageSize: [51, 73],
//       iconImageOffset: [-25, -73],
//       // hideIconOnBalloonOpen: false,
//     }
//   );

//   myMap.geoObjects.add(placemarkMir);
//   myMap.geoObjects.add(placemarkEtalon);

//   // myMap.behaviors.disable("scrollZoom");
// }

// const createMap = () => {
//   const map = $("#map");

//   if (check(map)) {
//     ymaps.ready(initBasketMap);
//   }
// };

// const scrollToTop = () => {
//   const link = $(".up__link");
//   const top = $("body,html");

//   if (check(link)) {
//     link.on("click", (e) => {
//       e.preventDefault();

//       top.animate(
//         {
//           scrollTop: 0,
//         },

//         800
//       );
//     });
//   }
// };

// const getAnchor = () => {
//   const anchorLink = $(".anchor");

//   if (check(anchorLink)) {
//     anchorLink.on("click", (e) => {
//       e.preventDefault();
//       console.log(e.target);

//       $("html, body")
//         .stop()
//         .animate(
//           {
//             scrollTop: $($(e.target).attr("href")).offset().top,
//           },

//           800
//         );
//     });
//   }
// };

// const reload = () => {
//   window.onresize = function () {
//     window.location.reload();
//   };
// };

// const scrollFunction = () => {
//   const btnUp = $(".footer__up");
//   const footerHeight = $(".main-footer");
//   const bottom = footerHeight.height() - btnUp.offset().right;

//   if (check(btnUp)) {
//     window.onscroll = () => {
//       const scrollBottom =
//         document.documentElement.scrollHeight -
//         document.documentElement.scrollTop -
//         document.documentElement.clientHeight;

//       if (
//         document.body.scrollTop > 50 ||
//         document.documentElement.scrollTop > 50
//       ) {
//         btnUp.addClass("up--visually");
//       } else {
//         btnUp.removeClass("up--visually");
//       }

//       if (scrollBottom < footerHeight.height()) {
//         btnUp.addClass("up--position");

//         btnUp.css({
//           top: `50px`,
//         });
//       } else {
//         btnUp.removeClass("up--position");

//         btnUp.css({
//           top: `auto`,
//         });
//       }
//     };
//   }
// };

const getScroll = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  scroll.on("scroll", (data) => {
    const scrollTop = data.scroll.y;

    if (scrollTop > 100) {
      $(".header").addClass("header--scroll");
    } else {
      $(".header").removeClass("header--scroll");
    }
  });
};

// const getVideoPromo = () => {
//   const video = $("#video-promo");

//   if (check(video)) {
//     videojs("video-promo", {
//       controls: true,
//       autoplay: false,
//       preload: "auto",
//       poster: "../img/poster.png",
//     });

//     // console.log(videojs.options);
//   }
// };

const resize = () => {
  let resizeTimeout;
  // const startWidth = $(window).width();

  const actualResizeHandler = () => {
    document.location.reload();
  };

  const resizeThrottler = () => {
    const endWidth = $(window).width();
    const deltaWidth = startWidth - endWidth;

    if (!resizeTimeout && Math.abs(deltaWidth) > 100) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        actualResizeHandler();
      }, 1000);
    }
  };

  const addEventResize = () => {
    return window.addEventListener("resize", resizeThrottler, false);
  };

  addEventResize();
};

const createSlider = () => {
  const slider = $(".how__list");

  if (check(slider) && startWidth < 1000) {
    slider.slick({
      slidesToShow: 1,
      speed: 600,
      rows: 0,
    });
  }
};

const createSliderNews = () => {
  const slider = $(".news-list");

  if (check(slider) && startWidth < 768) {
    slider.slick({
      slidesToShow: 1,
      speed: 600,
      rows: 0,
    });
  }
};

const makeRange = (num) => {
  const inputRange = $(`#package-${num}`);

  const getProfit = (proc, sum, modif) => {
    const profit = (sum / 100) * proc * 12;
    $(`.range-box__marga--${modif}`).text(profit.toLocaleString());
    if (modif === 365) {
      $(".range-box__proc--365 span").text(proc);
    }
  };

  const getСalculate = (data) => {
    const sumPretty = data.from_pretty;
    const sumFrom = data.from;
    const { input } = data;
    $(`.range-box__val--${num}`).text(sumPretty);

    if ($(input).is("#package-150")) {
      getProfit(15, sumFrom, 150);
    }

    if ($(input).is("#package-365")) {
      if (sumFrom > 1000 && sumFrom < 2999) {
        getProfit(8, sumFrom, 365);
      }
      if (sumFrom > 3000 && sumFrom < 9999) {
        getProfit(10, sumFrom, 365);
      }
      if (sumFrom > 10000 && sumFrom < 19999) {
        getProfit(12, sumFrom, 365);
      }
      if (sumFrom > 20000) {
        getProfit(15, sumFrom, 365);
      }
    }
  };

  if (check(inputRange)) {
    inputRange.ionRangeSlider({
      min: 1000,
      max: 100000,
      from: 72000,
      step: 500,
      onChange(data) {
        getСalculate(data);
      },
    });
  }
};

const playVideo = () => {
  const btn = $(".video__btn");
  const video = $(".video__body");
  if (check(btn) && check(video)) {
    btn.on("click", (e) => {
      video.trigger("play");
      btn.addClass("video__btn--hidden");
      e.stopPropagation();
    });

    video.on("click", (e) => {
      console.log("dfd");
      video.trigger("pause");
      btn.removeClass("video__btn--hidden");
    });
  }
};

const createAccordion = () => {
  $("[data-ft]").flexTabs({
    type: "accordion",
  });
};

$(function () {
  // reload();
  // getAccordionNav();
  // getDropDown();
  // getMenuMobile();
  // getConsultationModal();
  // sendFormConsultation();
  // sendFormRecord();
  // getInputMask();
  // getConsultationSlider();
  // getInfoSlider();
  // getInteriorSlider();
  // getExamleSlider();
  // createMap();
  // actualYear();
  // scrollToTop();
  // getAnchor();
  // scrollFunction();

  // getVideoPromo();
  // resize();
  createSlider();
  createSliderNews();
  playVideo();
  makeRange(365);
  makeRange(150);
  getScroll();
  createAccordion();
});

//# sourceMappingURL=script.js.map
