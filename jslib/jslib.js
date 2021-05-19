(n=>{function i(n){if(typeof n=="string")if(/^<[a-z]+?>$/.test(n))this.push(document.createElement(n.substring(1,n.length-1)));else{let t=document.querySelectorAll(n);t.forEach(n=>{this.push(n)})}else if(n.nodeType)this.push(n);else if(n.length)for(var t=0,i=n.length;t<i;t++)n[t].nodeType&&this.push(n[t]);else throw new Error("the selector invalid");return this}i.prototype.push=function(n){return Array.prototype.push.call(this,n),this};i.prototype.contains=function(n){for(let t=0,i=this.length;t<i;t++)if(this[t]===n)return!0;return!1};i.prototype.reset=function(n){return Array.prototype.splice.call(this,0),n&&n.forEach(n=>{this.push(n)}),this};i.prototype.each=function(n){for(let t=0,i=this.length;t<i;t++){let i=n(this[t],t);if(i==!0)continue;else if(i==!1)break}};let t=n=>new i(n);t.extend=n=>{for(var t in n)i.prototype[t]=n[t]};t.fragment=(...n)=>{let t=document.createDocumentFragment();return t.append(...n),t};let r=(n,t,i)=>{let r=n.querySelectorAll(t);if(!i)return r;let u=[];return r.forEach(n=>{i.forEach(t=>{t===n&&u.push(t)})}),u},u=(n,t)=>{var i=[];if(t==="nextAll")for(let t=n.nextSibling;t;t=t.nextSibling)t.nodeType===1&&i.push(t);else if(t==="prevAll")for(let t=n.previousSibling;t;t=t.previousSibling)t.nodeType===1&&i.unshift(t);else n.parentNode.childNodes.forEach(t=>{t.nodeType===1&&t!==n&&i.push(t)});return i},f=(n,t)=>{let i;if(typeof n=="string"){let t=document.createRange();i=t.createContextualFragment(n)}else n instanceof DocumentFragment?i=n:n.length?(i=document.createDocumentFragment(),i.append(...n)):(i=document.createDocumentFragment(),i.append(n));let r=document.createDocumentFragment();e(r,i,t)},e=(n,t,i)=>{if(t.firstChild===null){i(n);return}if(t.firstChild.nodeName==="SCRIPT"){let r=document.createElement("script"),u=t.firstChild.src;u?fetch(u).then(n=>n.text()).then(u=>{r.innerHTML=u,n.append(r),t.removeChild(t.firstChild),e(n,t,i)}):(r.innerHTML=t.firstChild.innerHTML,n.append(r),t.removeChild(t.firstChild),e(n,t,i))}else n.append(t.firstChild),e(n,t,i)};t.extend({find:function(n){let t=[];return this.each(i=>{let r=i.querySelectorAll(n);r.forEach(n=>{t.push(n)})}),this.reset(t)},eq:function(n){return this[0]=this[n],Array.prototype.splice.call(this,1),this},index:function(){return Array.prototype.indexOf.call(this[0].parentNode.children,this[0])},siblings:function(n){let t=[];return this.each(i=>{let f=u(i);t=typeof n=="string"?t.concat(r(i.parentNode,n,f)):t.concat(f)}),this.reset(t)},next:function(n){let t=[];return this.each(i=>{let f=u(i,"nextAll");if(typeof n=="string"){let u=r(i.parentNode,n,f);u[0]&&t.push(u[0])}else f[0]&&t.push(f[0])}),this.reset(t)},nextAll:function(n){let t=[];return this.each(i=>{let f=u(i,"nextAll");t=typeof n=="string"?t.concat(r(i.parentNode,n,f)):t.concat(f)}),this.reset(t)},prev:function(n){let t=[];return this.each(i=>{let f=u(i,"prevAll");if(typeof n=="string"){let u=r(i.parentNode,n,f);u[0]&&t.push(u[0])}else{let n=f[f.length-1];n&&t.push(n)}}),this.reset(t)},prevAll:function(n){let t=[];return this.each(i=>{let f=u(i,"prevAll");t=typeof n=="string"?t.concat(r(i.parentNode,n,f)):t.concat(f)}),this.reset(t)},parent:function(n){let t=[];return this.each(i=>{if(n===undefined)return t.push(i.parentNode),!0;let r=i.parentNode.closest(n);t.push(r)}),this.reset(t)},prop:function(n,t){if(typeof n=="string"){if(t===undefined)return this[0]?this[0].getAttribute(n):void 0;this.each(i=>{i.setAttribute(n,t)})}else typeof n=="object"&&this.each(t=>{for(var i in n)t.setAttribute(i,n[i])});return this},val:function(n){return n===undefined?this[0]?this[0].value:void 0:(this.each(t=>{t.value=n}),this)},removeProp:function(...n){return this.each(t=>{for(var i=0,r=n.length;i<r;i++)t.removeAttribute(n[i])}),this},addClass:function(...n){let t=[];return n.forEach(n=>{n&&t.push(n)}),this.each(n=>{n.classList.add(...t)}),this},removeClass:function(...n){n.length===0&&this.each(n=>{n.setAttribute("class","")});let t=[];return n.forEach(n=>{n&&t.push(n)}),this.each(n=>{n.classList.remove(...t)}),this},hasClass:function(n){return this.length>0?this[0].classList.contains(n):!1},text:function(n){return n===undefined?this[0]?this[0].innerText:void 0:(this.each(t=>{t.innerText=n}),this)},html:function(n){return n===undefined?this[0]?this[0].innerHTML:void 0:(this.each(t=>{f(n,n=>{t.innerHTML="",t.append(n)})}),this)},append:function(n){return this.each(t=>{f(n,n=>{t.append(n)})}),this},prepend:function(n){return this.each(t=>{f(n,n=>{t.prepend(n)})}),this},before:function(n){return this.each(t=>{f(n,n=>{t.parentNode.insertBefore(n,t)})}),this},after:function(...n){return this.each(t=>{f(n,n=>{t.parentNode.insertBefore(n,t.nextSibling)})}),this},remove:function(){this.each(n=>{n.parentNode.removeChild(n)});this.reset()},empty:function(){return this.each(n=>{n.innerHTML=""}),this},load:function(n){if(!n)return this;var t=new XMLHttpRequest;t.onreadystatechange=()=>{if(t.readyState===4)if(t.status===200){if(n.lastIndexOf(".js")==n.length-3){this.html(`<script>${t.response}</script>`);return}this.html(t.response)}else throw new Error(t.statusText);};t.open("GET",n);t.send()}});t.extend({click:function(n){return typeof n=="function"?this.each(t=>{let i=t;i.onclick=()=>{n(i)}}):this.each(n=>{n.click()}),this}});t.isEmptyOrNull=n=>!n||n.length===0;t.isNullOrWhiteSpace=n=>/^\s+$/.test(n)?!0:!n||n.length===0;t.format=(n,...t)=>n.replace(/\{(\d+)\}/g,function(n,i){return t[i]});t.dataBind=(n,t)=>n.replace(/\${(.+?)\}/g,function(n,i){return t.hasOwnProperty(i)?t[i]:""});t.trim=n=>n.replace(/^\s*|\s*$/g,"");t.nextInt=(n,t)=>{let i=Math.random()*(t-n);return Math.floor(i)+n};t.datefmt=(n,t)=>{let s=t||"yyyy/MM/dd HH:mm:ss",i={};i.yyyy=n.getFullYear();i.yy=i.yyyy.toString().substr(2);let r=n.getMonth()+1;i.MM=r>9?r:"0"+r;i.M=r;let u=n.getDate();i.dd=u>9?u:"0"+u;i.d=u;let f=n.getHours();i.HH=f>9?f:"0"+f;i.H=f;let e=n.getMinutes();i.mm=e>9?e:"0"+e;i.m=e;let o=n.getSeconds();i.ss=o>9?o:"0"+o;i.s=o;for(let n in i)s=s.replace(n,i[n]);return s};t.dateByfmt=n=>{let t="";if(/^[0-9]{4}[\/\-][0-9]{1,2}[\/\-][0-9]{1,2}$/.test(n))t=n+" 00:00:00";else if(/^[0-9]{4}[\/\-][0-9]{1,2}[\/\-][0-9]{1,2} [0-9]{1,2}$/.test(n))t=n+":00:00";else if(/^[0-9]{4}[\/\-][0-9]{1,2}[\/\-][0-9]{1,2} [0-9]{1,2}:[0-9]{1,2}$/.test(n))t=n+":00";else if(/^[0-9]{4}[\/\-][0-9]{1,2}[\/\-][0-9]{1,2} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}$/.test(n))t=n;else throw new Error("invalid date fmt!");let i=Date.parse(t);return isNaN(i)?null:new Date(i)};t.isNotNull=n=>!t.isNullOrWhiteSpace(n);t.isNumber=n=>!n||n.length===0?!0:/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n);t.isEmail=n=>!n||n.length===0?!0:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n);t.isMobile=n=>!n||n.length===0?!0:/^(\((\+)?86\)|((\+)?86)?)0?1[^012]\d{9}$/.test(n);t.isAbc=n=>!n||n.length===0?!0:!/[^a-zA-Z]/.test(n);t.isDigit=n=>!n||n.length===0?!0:/^\d+$/.test(n);t.isAbcDigit=n=>!n||n.length===0?!0:/^[a-zA-Z][a-zA-Z\d]*$/.test(n);t.isAbcDigitUline=n=>!n||n.length===0?!0:/^[a-zA-Z_][a-zA-Z\d_]*$/.test(n);t.isUrl=n=>!n||n.length===0?!0:/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(n);t.isIpv4=n=>!n||n.length===0?!0:/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(n);t.isMaxLength=(n,t)=>!n||n.length===0?!1:isNaN(parseInt(t))?!1:n.length>parseInt(t);t.isMinLength=(n,t)=>!n||n.length===0?!1:isNaN(parseInt(t))?!1:n.length<parseInt(t);t.isMinNum=(n,t)=>{let i=parseFloat(n);return isNaN(i)?!1:i!=n?!1:isNaN(parseFloat(t))?!1:i<t};t.isMaxNum=(n,t)=>{let i=parseFloat(n);return isNaN(i)?!1:i!=n?!1:isNaN(parseFloat(t))?!1:i>t};t.isMoney=n=>!n||n.length===0?!0:/^-?[0-9]+([.]{1}[0-9]{1,3})?$/.test(n);t.isDate=n=>!n||n.length===0?!0:!/Invalid|NaN/.test(new Date(n).toString());n.ns||(n.ns={});n.ns.jslib=t;n.$||(n.$=n.ns.jslib)})(window);(n=>{const i={notnull:"isNotNull",email:"isEmail",mobile:"isMobile",abc:"isAbc","123":"isDigit",abc123:"isAbcDigit",abc_123:"isAbcDigitUline",url:"isUrl",ipv4:"isIpv4",date:"isDate",maxlen:"isMaxLength",minlen:"isMinLength",minnum:"isMinNum",maxnum:"isMaxNum",money:"isMoney"},r="formcheck-err",u="formcheck-errmsg",t=n.ns.jslib;t.formClear=n=>{t(n).hasClass(r)&&(t(n).next("."+u).remove(),n.style.backgroundColor=null,n.parentNode.style.position=null),n.removeEventListener("focus",t.formClear)};t.formAlert=(n,i)=>{let f="#ffebec";t(n).addClass(r);n.style.backgroundColor=f;n.parentNode.style.position="relative";let e=t("<span>").addClass(u).text("⛔ "+i)[0];e.style.cssText=t.format("position:absolute;top:{0}px;left:{1}px;padding:3px;background-color:{2};color:{3};width:{4}px",n.offsetTop+n.offsetHeight,n.offsetLeft,f,"#e6393d",n.offsetWidth);t(n).after(e);n.addEventListener("focus",()=>{t.formClear(n)})};t.formCheck=n=>{var f,o,u,c;let e=n.getAttribute("vtype");if(t.isNullOrWhiteSpace(e))return!0;let r=e.split("|");for(f=0,o=r.length;f<o;f++)if(!i.hasOwnProperty(r[f]))throw"vtype value wrong: "+r[f];let s=[],h=n.getAttribute("verrmsg");for(t.isNullOrWhiteSpace(h)||(s=h.split("|")),t.formClear(n),u=0,c=r.length;u<c;u++){let e=i[r[u]],f=!0;if(r[u]==="minlen"){let i=n.getAttribute("minlength");f=!t[e](n.value,i)}else if(r[u]==="maxlen"){let i=n.getAttribute("maxlength");f=!t[e](n.value,i)}else if(r[u]==="minnum"){let i=n.getAttribute("minnum");f=!t[e](n.value,i)}else if(r[u]==="maxnum"){let i=n.getAttribute("maxnum");f=!t[e](n.value,i)}else f=t[e](n.value);if(f!=!0)return t.formAlert(n,s[u]||"validation failed: "+r[u]),!1}return!0};t.formJson=(n,t)=>{let u=n.querySelectorAll("input[name],select[name],textarea[name]"),i={};for(var r=0,f=u.length;r<f;r++){let n=u[r];(t!=!0||n.value.length!=0)&&(i.hasOwnProperty(n.name)?i instanceof Array?i[n.name].push(n.value):(i[n.name]=[i[n.name]],i[n.name].push(n.value)):i[n.name]=n.value)}return i}})(window);(n=>{const t=n.ns.jslib;let i=(n,t)=>{let i=new FormData;n instanceof FormData?i=n:n&&Object.keys(n).forEach(t=>{i.append(t,n[t])});let r={method:"POST",body:i};return t&&Object.keys(t).forEach(n=>{r[n]=t[n]}),r},r=(n,t)=>{let i=[];return t&&(t instanceof FormData?t.forEach((n,t)=>{i.push(`${t}=${n}`)}):Object.keys(t).forEach(n=>{i.push(`${n}=${t[n]}`)}),n+=n.indexOf("?")<0?"?":"&",n+=i.join("&")),encodeURI(n)};t.postAsync=async(n,t,r=null,u="json")=>{let e=i(t,r),f=await fetch(n,e);if(f.ok)return await u!="json"?f.text():f.json();else{let n=await f.text();throw new Error(n);}};t.getAsync=async(n,t,i=null,u="html")=>{let e=r(n,t),f=await fetch(e,i);if(f.ok)return await u!="html"?f.json():f.text();else{let n=await f.text();throw new Error(n);}};t.post=(n,t,r=null,u="json")=>{let f=i(t,r);return fetch(n,f).then(n=>{if(n.ok)return u!="json"?n.text():n.json();throw new Error(n.text());})};t.get=(n,t,i=null,u="html")=>{let f=r(n,t);return fetch(f,i).then(n=>{if(n.ok)return u!="html"?n.json():n.text();throw new Error(n.text());})}})(window);(n=>{function u(n,t,i,r){var e,u,s;let o=i?` class="${i}"`:"",f="";if(r)for(e in r)f+=` ${e}="${r[e]}"`;if(typeof t=="string"&&t.indexOf(":for")==0){let i=t.substr(4).split("|"),r="";for(u=0,s=i.length;u<s;u++){let t=i[u];r+=`<${n}${o}${f}>${t}</${n}>`}return r}return`<${n}${o}${f}>${t}</${n}>`}const f=n.ns.jslib;let i=["div","span","a","p","table","tr","th","td","select","option","ul","li","dt","dd","h1","h2","h3","h4","h5","h6"],r={};for(var t=0,e=i.length;t<e;t++){let n=i[t];r[n]=(t,i,r)=>typeof i=="object"?u(n,t,null,i):u(n,t,i,r)}f.dom=r})(window)