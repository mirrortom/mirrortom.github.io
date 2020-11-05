(n=>{function t(n){if(typeof n=="string")if(/^<[a-z]+?>$/.test(n))this.push(document.createElement(n.substring(1,n.length-1)));else{let t=document.querySelectorAll(n);t.forEach(n=>{this.push(n)})}else if(n.nodeType)this.push(n);else if(n.length)for(var t=0,i=n.length;t<i;t++)n[t].nodeType&&this.push(n[t]);else throw new Error("the selector invalid");return this}t.prototype.push=function(n){return Array.prototype.push.call(this,n),this};t.prototype.contains=function(n){for(let t=0,i=this.length;t<i;t++)if(this[t]===n)return!0;return!1};t.prototype.reset=function(n){return Array.prototype.splice.call(this,0),n&&n.forEach(n=>{this.push(n)}),this};t.prototype.each=function(n){for(let t=0,i=this.length;t<i;t++){let i=n(this[t],t);if(i==!0)continue;else if(i==!1)break}};let f=n=>new t(n);f.extend=n=>{for(var i in n)t.prototype[i]=n[i]};f.fragment=(...n)=>{let t=document.createDocumentFragment();return t.append(...n),t};let i=(n,t,i)=>{let r=n.querySelectorAll(t);if(!i)return r;let u=[];return r.forEach(n=>{i.forEach(t=>{t===n&&u.push(t)})}),u},r=(n,t)=>{var i=[];if(t==="nextAll")for(let t=n.nextSibling;t;t=t.nextSibling)t.nodeType===1&&i.push(t);else if(t==="prevAll")for(let t=n.previousSibling;t;t=t.previousSibling)t.nodeType===1&&i.unshift(t);else n.parentNode.childNodes.forEach(t=>{t.nodeType===1&&t!==n&&i.push(t)});return i},u=(n,t)=>{let i;if(typeof n=="string"){let t=document.createRange();i=t.createContextualFragment(n)}else n instanceof DocumentFragment?i=n:n.length?(i=document.createDocumentFragment(),i.append(...n)):(i=document.createDocumentFragment(),i.append(n));let r=document.createDocumentFragment();e(r,i,t)},e=(n,t,i)=>{if(t.firstChild===null){i(n);return}if(t.firstChild.nodeName==="SCRIPT"){let r=document.createElement("script"),u=t.firstChild.src;u?fetch(u).then(n=>n.text()).then(u=>{r.innerHTML=u,n.append(r),t.removeChild(t.firstChild),e(n,t,i)}):(r.innerHTML=t.firstChild.innerHTML,n.append(r),t.removeChild(t.firstChild),e(n,t,i))}else n.append(t.firstChild),e(n,t,i)};f.extend({find:function(n){let t=[];return this.each(i=>{let r=i.querySelectorAll(n);r.forEach(n=>{t.push(n)})}),this.reset(t)},eq:function(n){return this[0]=this[n],Array.prototype.splice.call(this,1),this},index:function(){return Array.prototype.indexOf.call(this[0].parentNode.children,this[0])},siblings:function(n){let t=[];return this.each(u=>{let f=r(u);t=typeof n=="string"?t.concat(i(u.parentNode,n,f)):t.concat(f)}),this.reset(t)},next:function(n){let t=[];return this.each(u=>{let f=r(u,"nextAll");if(typeof n=="string"){let r=i(u.parentNode,n,f);r[0]&&t.push(r[0])}else f[0]&&t.push(f[0])}),this.reset(t)},nextAll:function(n){let t=[];return this.each(u=>{let f=r(u,"nextAll");t=typeof n=="string"?t.concat(i(u.parentNode,n,f)):t.concat(f)}),this.reset(t)},prev:function(n){let t=[];return this.each(u=>{let f=r(u,"prevAll");if(typeof n=="string"){let r=i(u.parentNode,n,f);r[0]&&t.push(r[0])}else{let n=f[f.length-1];n&&t.push(n)}}),this.reset(t)},prevAll:function(n){let t=[];return this.each(u=>{let f=r(u,"prevAll");t=typeof n=="string"?t.concat(i(u.parentNode,n,f)):t.concat(f)}),this.reset(t)},parent:function(n){let t=[];return this.each(i=>{if(n===undefined)return t.push(i.parentNode),!0;let r=i.parentNode.closest(n);t.push(r)}),this.reset(t)},prop:function(n,t){if(typeof n=="string"){if(t===undefined)return this[0]?this[0].getAttribute(n):void 0;this.each(i=>{i.setAttribute(n,t)})}else typeof n=="object"&&this.each(t=>{for(var i in n)t.setAttribute(i,n[i])});return this},val:function(n){return n===undefined?this[0]?this[0].value:void 0:(this.each(t=>{t.value=n}),this)},removeProp:function(...n){return this.each(t=>{for(var i=0,r=n.length;i<r;i++)t.removeAttribute(n[i])}),this},addClass:function(...n){let t=[];return n.forEach(n=>{n&&t.push(n)}),this.each(n=>{n.classList.add(...t)}),this},removeClass:function(...n){n.length===0&&this.each(n=>{n.setAttribute("class","")});let t=[];return n.forEach(n=>{n&&t.push(n)}),this.each(n=>{n.classList.remove(...t)}),this},hasClass:function(n){return this.length>0?this[0].classList.contains(n):!1},text:function(n){return n===undefined?this[0]?this[0].innerText:void 0:(this.each(t=>{t.innerText=n}),this)},html:function(n){return n===undefined?this[0]?this[0].innerHTML:void 0:(this.each(t=>{u(n,n=>{t.innerHTML="",t.append(n)})}),this)},append:function(...n){return this.each(t=>{u(n,n=>{t.append(n)})}),this},prepend:function(...n){return this.each(t=>{u(n,n=>{t.prepend(n)})}),this},before:function(...n){return this.each(t=>{u(n,n=>{t.parentNode.insertBefore(n,t)})}),this},after:function(...n){return this.each(t=>{u(n,n=>{t.parentNode.insertBefore(n,t.nextSibling)})}),this},remove:function(){this.each(n=>{n.parentNode.removeChild(n)});this.reset()},empty:function(){return this.each(n=>{n.innerHTML=""}),this}});n.$ui=f})(window);(n=>{n.$ui.inputFileChange=n=>{let t="";[].forEach.call(n.files,n=>{t+=n.name+","});t=t.substr(0,t.length-1);let i=n.parentNode.querySelector(".input-file-label");i.innerHTML=t},n.$ui.clsInputFile=n=>{let t=n.parentNode.querySelector(".input-file-label");t.innerHTML="";n.outerHTML=n.outerHTML},n.$ui.isBtnLoading=n=>n.classList.contains("loading")?!0:(n.classList.add("loading"),!1),n.$ui.clsBtnLoading=(n,t)=>{t>=0?setTimeout(()=>{n.classList.remove("loading")},t):n.classList.remove("loading")}})(window);(n=>{const t=n.$ui;let i=n=>{let i=t.fragment();i.append(t("<a>").addClass("tabsbox-left")[0]);i.append(t("<nav>").addClass("tabsbox-navbox").append(t("<div>").addClass("tabsbox-nav")[0])[0]);i.append(t("<a>").addClass("tabsbox-right")[0]);i.append(t("<span>").addClass("tabsbox-menutitle").text("功能")[0]);let r=t("<div>").addClass("tabsbox-menugroup").append(t("<span>").addClass("tabsbox-goto-active").text("定位当前页")[0],t("<span>").addClass("tabsbox-close-all").text("关闭全部")[0],t("<span>").addClass("tabsbox-close-other").text("关闭其它")[0])[0];i.append(r);t(n).append(i).addClass("tabsbox")},r=(n,r)=>{if(!n||!r)throw"必须传入DOM对象";let s={},u={};i(n);s.load=(n,i,s)=>{if(!i)throw"tab title is empty!";if(u[n]===null){typeof s=="function"&&s(1);return}if(u[n]){let i=c(n);o(i);f();t(r).html(u[n]);u[n]=null;typeof s=="function"&&s(2);return}h(n,i);e(1);Object.getOwnPropertyNames(u).length>0&&f();u[n]=null;typeof s=="function"&&s(3)};let h=(i,r)=>{let f=t(n).find(".tabsbox-tab.active");f.length>0&&f.removeClass("active");let u=t("<label>").addClass("tabsbox-tab","active").prop({title:r,val:i}).html(r).append(t("<a>").addClass("tabsbox-tabclose").prop("title","关闭").text("×")[0])[0];l(u);a(u);t(n).find(".tabsbox-nav").append(u)},c=i=>{let r=t(n).find(".tabsbox-tab.active");r.length>0&&r.removeClass("active");return t(n).find(".tabsbox-tab[val='"+i+"']").addClass("active")[0]},f=()=>{for(let n in u)if(u.hasOwnProperty(n)&&u[n]===null){u[n]=t.fragment(...r.childNodes);return}},e=i=>{let r=t(n).find(".tabsbox-nav")[0],u=r.scrollLeft,f=r.clientWidth,o=r.scrollWidth,e=0;e=i==0?0:i==1?o:i=="left"?u-f/4:i=="right"?u+f/4:u+i;r.scrollTo(e,0)},o=i=>{let r=t(n).find(".tabsbox-nav")[0],u=r.clientWidth,f=i.offsetLeft;r.scrollTo(f-u/2,0)},l=i=>{t(i).find(".tabsbox-tabclose")[0].onclick=f=>{if(f.stopPropagation(),Object.getOwnPropertyNames(u).length==1){r.innerHTML="";u={};t(i).remove();return}let e=t(i).prop("val");if(delete u[e],t(i).hasClass("active")){let i=Object.getOwnPropertyNames(u).pop(),f=t(n).find(".tabsbox-tab[val='"+i+"']").addClass("active");t(r).html(u[i]);u[i]=null}t(i).remove()}},a=i=>{i.onclick=()=>{if(o(i),!t(i).hasClass("active")){f();let e=t(n).find(".tabsbox-tab.active");e.length>0&&e.removeClass("active");let s=t(i).addClass("active").prop("val");t(r).html(u[s]);u[s]=null}}};return t(n).find(".tabsbox-left")[0].onclick=()=>{e("left")},t(n).find(".tabsbox-right")[0].onclick=()=>{e("right")},t(n).find(".tabsbox-goto-active")[0].onclick=()=>{let i=t(n).find(".active")[0];i&&o(i)},t(n).find(".tabsbox-close-all")[0].onclick=()=>{let i=t(n).find(".tabsbox-nav").empty();r.innerHTML="";u={}},t(n).find(".tabsbox-close-other")[0].onclick=()=>{let i=t(n).find(".tabsbox-nav .tabsbox-tab:not(.active)").remove();for(let n in u)if(u.hasOwnProperty(n)){if(u[n]===null)continue;delete u[n]}},s};n.cachepage=r})(window);(n=>{const o="msgbox-shadow",s="msgbox-modal",h="msgbox",i=n.$ui;let u=()=>{let n=i("<div>").addClass(o)[0];document.body.append(n);return i("<div>").addClass(s)[0]},f=n=>{document.body.style.overflow="hidden",document.body.append(n)},e=(n,t,r)=>{let u=i("<div>").addClass(h,"msgbox-"+(r||"center"));return t&&u.addClass(t),u.text(n||""),u[0]},r=n=>{let t=i("<span>").addClass("msgbox-btn","msgbox-"+n).text(n==="ok"?"确定":"取消");return t[0]},t={};t.close=()=>{let n=document.body,t=n.querySelectorAll("."+s),i=n.querySelectorAll("."+o);t.forEach(n=>{n.parentNode.removeChild(n)});i.forEach(n=>{n.parentNode.removeChild(n)});document.body.style.overflow=null};t.alert=(n,i,o,s)=>{t.close();let h=u(),c=e(n,o,s),l=r("ok");l.onclick=()=>{t.close(),typeof i=="function"&&i()};c.appendChild(l);h.appendChild(c);f(h)};t.confirm=(n,i,o,s)=>{t.close();let c=u(),h=e(n,o,s),l=r("ok"),a=r("cancel");l.onclick=()=>{t.close(),typeof i=="function"&&i(1)};a.onclick=()=>{t.close(),typeof i=="function"&&i(0)};h.innerText=n;h.appendChild(l);h.appendChild(a);c.appendChild(h);f(c)};t.prompt=(n,o,s,h)=>{t.close();let l=u(),c=e(n,s,h),a=i("<input>").addClass("msgbox-input").prop("type","text")[0],v=r("ok"),y=r("cancel");v.onclick=()=>{t.close(),typeof o=="function"&&o(a.value)};y.onclick=()=>{t.close(),typeof o=="function"&&o("")};c.innerText=n;c.appendChild(a);c.appendChild(v);c.appendChild(y);l.appendChild(c);f(l)};t.show=(n,i,r)=>{t.close();let e=u();typeof n=="string"?e.innerHTML=n:e.appendChild(msgboxhtml);typeof i=="function"&&i();f(e);typeof r=="function"&&i()};n.msgbox=t})(window);(n=>{const c="date-box",o=2100,s=1900,t=n.$ui;let e=(n,t)=>{let s=t||"yyyy/MM/dd HH:mm:ss",i={};i.yyyy=n.getFullYear();i.yy=i.yyyy.toString().substr(2);let r=n.getMonth()+1;i.MM=r>9?r:"0"+r;i.M=r;let u=n.getDate();i.dd=u>9?u:"0"+u;i.d=u;let f=n.getHours();i.HH=f>9?f:"0"+f;i.H=f;let e=n.getMinutes();i.mm=e>9?e:"0"+e;i.m=e;let o=n.getSeconds();i.ss=o>9?o:"0"+o;i.s=o;for(let n in i)s=s.replace(n,i[n]);return s},u=null,r=null,i=null,f=n=>{let t=window.event||arguments.callee.caller.arguments[0];t.stopPropagation();let i=t.currentTarget;y(i,n);r=w();p(r);ht()},y=(n,t)=>{u=n;let r=n.value.trim();/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/.test(r)?r=r+" 00:00:00":/^[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}:[0-9]{2}$/.test(r)?r=r+":00":/^[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(r)?!0:r=null;let e=Date.parse(r),f=isNaN(e)?new Date((new Date).setHours(0,0,0)):new Date(e);i={};i.year=f.getFullYear();i.month=f.getMonth();i.day=f.getDate();i.hour=f.getHours();i.minute=f.getMinutes();i.second=f.getSeconds();i.dateFmt="yyyy/MM/dd";i.fmtType=1;t&&t.fmt=="datetime"&&(i.dateFmt="yyyy/MM/dd HH:mm:ss",i.fmtType=2)},p=i=>{let r=u.offsetLeft+"px",f=u.offsetTop+u.offsetHeight+"px",e=n.innerWidth;e<576&&(r=0,f="25vh");t(document.body).find("."+c).remove();i.style.left=r;i.style.top=f;document.body.append(i);e<576&&i.focus()},w=()=>{let r=t("<div>").addClass("date-area-ymt").append(b(),d(),ft())[0],u=t("<div>").addClass("date-area-week").append(nt())[0],f=t("<div>").addClass("date-area-day").append(l())[0],n=t("<div>").addClass("date-box").prop("tabIndex",-1).append(r,u,f);if(i.fmtType==2){let i=t("<div>").addClass("date-area-tc").append(tt(),et(),ot())[0];n.append(i)}return n[0]},b=()=>{let n=t("<a>").addClass("date-btn-prev").text("＜")[0],r=t("<b>").addClass("date-btn-year").prop("val",i.year).text(i.year+"年")[0],u=t("<a>").addClass("date-btn-next").text("＞")[0];return t("<div>").addClass("date-area-year").append(n,r,u)[0]},k=n=>{let i=st();n||(n=(new Date).getFullYear());let r=t("<div>").addClass("date-select-year");for(let u=0;u<i.length;u++){let e=i[u]==n?"selected":"",f=i[u],o=t("<b>").addClass("date-option-year",e).prop("val",f).text(f)[0];r.append(o)}return r[0]},d=()=>{let n=t("<a>").addClass("date-btn-prev").text("＜")[0],r=t("<b>").addClass("date-btn-month").prop("val",i.month).text(i.month+1+"月")[0],u=t("<a>").addClass("date-btn-next").text("＞")[0];return t("<div>").addClass("date-area-month").append(n,r,u)[0]},g=n=>{let i=t("<div>").addClass("date-select-month");for(let r=0;r<12;r++){let u=n==r?"selected":"",f=t("<b>").addClass("date-option-month",u).prop("val",r).text(r+1)[0];i.append(f)}return i[0]},nt=()=>{let n=t.fragment(),i=["日","一","二","三","四","五","六"];for(let r=0;r<i.length;r++){let u=r===0||r===6?"date-item-weekend":"",f=t("<b>").addClass("date-item-week",u).text(i[r])[0];n.append(f)}return n},l=n=>{let r=n||a(),u=t.fragment();for(var i=0;i<r.length;i++){let n=r[i];n.istoday=n.Istoday?"date-item-today":"";n.isselected=n.Isselected?"selected":"";n.isdayinmonth=n.Isdayinmonth?"":"date-item-dayoutmonth";n.isweekend=n.Isweekend?"date-item-weekend":"";let f=t("<b>").addClass("date-item-day",n.istoday,n.isdayinmonth,n.isselected,n.isweekend).prop({year:n.yyyy,month:n.MM,day:n.dd}).text(n.dd)[0];u.append(f)}return u},tt=()=>{let n=t("<b>").addClass("date-btn-time","date-btn-hour").text(i.hour)[0],r=t("<b>").addClass("date-btn-time","date-btn-minute").text(i.minute)[0],u=t("<b>").addClass("date-btn-time","date-btn-second").text(i.second)[0];return t("<div>").addClass("date-area-time").append(n,r,u)[0]},it=()=>{let n=t("<div>").addClass("date-select-hour"),i=["凌晨","上午","下午","夜晚"];for(let r=0;r<24;r++){let u=t("<b>").addClass("date-option-hour").prop("val",r).text(r)[0];r%6==0&&n.append(t("<span>").addClass("date-option-title").text(i[r/6])[0]);n.append(u)}return n[0]},rt=()=>{let n=t("<div>").addClass("date-select-minute");for(let i=0;i<60;i++){let r=t("<b>").addClass("date-option-minute").prop("val",i).text(i)[0];n.append(r)}return n[0]},ut=()=>{let n=t("<div>").addClass("date-select-second");for(let i=0;i<60;i++){let r=t("<b>").addClass("date-option-second").prop("val",i).text(i)[0];n.append(r)}return n[0]},ft=()=>t("<div>").addClass("date-area-today").html('<a class="date-btn-today">今天<\/a>')[0],et=()=>t("<div>").addClass("date-area-clear").html('<a class="date-btn-clear">清空<\/a>')[0],ot=()=>t("<div>").addClass("date-area-ok").html('<a class="date-btn-ok">确定<\/a>')[0],h=(n,i)=>{let u=a(n,i),f=l(u);t(r).find(".date-area-day").empty().append(f);v()},st=()=>{let n=[];for(let t=s;t<=o;t++)n.push(t);return n},a=(n,t)=>{let o=isNaN(parseInt(n))?i.year:parseInt(n),u=isNaN(parseInt(t))?i.month:parseInt(t),r=new Date(o,u,1);r.setDate(1-r.getDay());let s=e(new Date,"yyyyMMdd"),f=[];for(let n=0;n<42;n++){let t={};t.yyyy=r.getFullYear();t.MM=r.getMonth();t.dd=r.getDate();t.Isdayinmonth=t.MM==u;t.Istoday=e(r,"yyyyMMdd")==s;t.Isselected=t.yyyy==i.year&&t.MM==i.month&&t.dd==i.day;t.Isweekend=n%7==0||(n+1)%7==0;r.setDate(t.dd+1);f.push(t)}return f},ht=()=>{ct(),lt(),at(),pt(),wt(),v(),i.fmtType==2&&(bt(),kt(),dt(),ii(),ri())},ct=()=>{r.onclick=n=>{n.stopPropagation(),t(r).find("[class^=date-select]").remove()}},lt=()=>{t(r).find(".date-btn-year")[0].onclick=n=>{n.stopPropagation();let u=n.currentTarget,e=t(u).prop("val"),f=t(u.parentElement).find(".date-select-year");if(f.length>0){f.remove();return}let o=t(r).find("[class^=date-select]");o.remove();let i=k(e);u.parentElement.append(i);let s=t(i).find(".selected")[0],h=s.offsetTop-i.clientHeight/2;i.scrollTo(0,h);vt()}},at=()=>{t(r).find(".date-btn-month")[0].onclick=n=>{n.stopPropagation();let i=n.currentTarget,f=t(i).prop("val"),u=t(i.parentElement).find(".date-select-month");if(u.length>0){u.remove();return}let e=t(r).find("[class^=date-select]");e.remove();i.parentElement.append(g(f));yt()}},vt=()=>{t(r).find(".date-option-year").each(n=>{n.onclick=n=>{n.stopPropagation();let u=n.currentTarget,i=t(u).prop("val");t(r).find(".date-btn-year").prop("val",i).text(i+"年");t(u.parentElement).remove();let f=t(r).find(".date-btn-month").prop("val");h(i,f)}})},yt=()=>{t(r).find(".date-option-month").each(n=>{n.onclick=n=>{n.stopPropagation();let u=n.currentTarget,i=parseInt(t(u).prop("val"));t(r).find(".date-btn-month").prop("val",i).text(i+1+"月");t(u.parentElement).remove();let f=t(r).find(".date-btn-year").prop("val");h(f,i)}})},pt=()=>{t(r).find(".date-btn-prev,.date-btn-next").each(n=>{n.onclick=n=>{n.stopPropagation();let f=n.currentTarget,e=f.parentElement.classList.contains("date-area-year")?1:2,c=f.classList.contains("date-btn-next")?1:2,l=t(r).find(".date-btn-year"),a=t(r).find(".date-btn-month"),i=parseInt(l.prop("val")),u=parseInt(a.prop("val"));e==1?(i=c==1?i+1:i-1,i<s?i=o:i>o&&(i=s)):e==2&&(u=c==1?u+1:u-1,u<0?(u=11,i>s&&(i=i-1)):u>11&&(u=0,i<o&&(i=i+1)));l.prop("val",i).text(i+"年");a.prop("val",u).text(u+1+"月");h(i,u)}})},wt=()=>{t(r).find(".date-btn-today")[0].onclick=n=>{n.stopPropagation();let r=n.currentTarget,t=new Date((new Date).toLocaleDateString());u.value=e(t,i.dateFmt);f.close()}},bt=()=>{t(r).find(".date-btn-hour")[0].onclick=n=>{n.stopPropagation();let i=n.currentTarget,u=t(r).find(".date-select-hour"),e=t(i.parentElement).find(".date-btn-time").removeClass("open");if(u.length>0){u.remove();return}let f=t(r).find("[class^=date-select]");f.remove();r.append(it());t(i).addClass("open");gt()}},kt=()=>{t(r).find(".date-btn-minute")[0].onclick=n=>{n.stopPropagation();let i=n.currentTarget,u=t(r).find(".date-select-minute"),e=t(i.parentElement).find(".date-btn-time").removeClass("open");if(u.length>0){u.remove();return}let f=t(r).find("[class^=date-select]");f.remove();r.append(rt());t(i).addClass("open");ni()}},dt=()=>{t(r).find(".date-btn-second")[0].onclick=n=>{n.stopPropagation();let i=n.currentTarget,u=t(r).find(".date-select-second"),f=t(i.parentElement).find(".date-btn-time").removeClass("open");if(u.length>0){u.remove();return}t(r).find("[class^=date-select]").remove();r.append(ut());t(i).addClass("open");ti()}},gt=()=>{t(r).find(".date-option-hour").each(n=>{n.onclick=n=>{n.stopPropagation();let u=n.currentTarget,f=t(u).prop("val");t(r).find(".date-btn-hour").text(f);i.hour=f;t(u.parentElement).remove()}})},ni=()=>{t(r).find(".date-option-minute").each(n=>{n.onclick=n=>{n.stopPropagation();let u=n.currentTarget,f=t(u).prop("val");t(r).find(".date-btn-minute").text(f);i.minute=f;t(u.parentElement).remove()}})},ti=()=>{t(r).find(".date-option-second").each(n=>{n.onclick=n=>{n.stopPropagation();let u=n.currentTarget,f=t(u).prop("val");t(r).find(".date-btn-second").text(f);i.second=f;t(u.parentElement).remove()}})},v=()=>{t(r).find(".date-item-day").each(n=>{n.onclick=n=>{n.stopPropagation();let r=n.currentTarget,o=new Date(t(r).prop("year"),t(r).prop("month"),t(r).prop("day"),i.hour,i.minute,i.second);u.value=e(o,i.dateFmt);f.close()}})},ii=()=>{t(r).find(".date-btn-clear")[0].onclick=n=>{n.stopPropagation(),u.value="",f.close()}},ri=()=>{t(r).find(".date-btn-ok")[0].onclick=n=>{n.stopPropagation();let h=n.currentTarget,o=t(r).find(".date-item-day.selected"),s=e(new Date(i.year,i.month,i.day,i.hour,i.minute,i.second),i.dateFmt);if(o.length>0){let n=new Date(o.prop("year"),o.prop("month"),o.prop("day"),i.hour,i.minute,i.second);s=e(n,i.dateFmt)}u.value=s;f.close()}};f.close=()=>{r=null,u=null,i=null,t(document.body).find("."+c).remove()};document.onclick=()=>{f.close()};n.MyDatePick=f})(window);(n=>{const t=n.$ui;let i=(n,t,i)=>{if(n>=0&&t>=5&&i>=1){let i=parseInt(n/t),r=n%t;return r>0?i+1:i}return 0},r=n=>{let t={};return t.PageIndex=n.pageIndex||1,t.PageSize=n.pageSize>4&&n.pageSize<51?n.pageSize:10,t.TotalData=n.totalData||0,t.TotalPage=i(t.TotalData,t.PageSize,t.PageIndex),t.TotalBtn=n.totalBtn>4&&n.totalBtn<11?n.totalBtn:5,t.pageClickE=n.pageClickE,t},u=n=>{let t=n.PageIndex-parseInt(n.TotalBtn/2)+(n.TotalBtn%2==0?1:0),i=n.PageIndex+parseInt(n.TotalBtn/2);t<1&&(t=1,i=i>n.TotalPage?n.TotalPage:n.TotalBtn);i>n.TotalPage&&(i=n.TotalPage,t=i-n.TotalBtn+1,t<1&&(t=1));n.StartIndex=t;n.EndIndex=i},f=(n,i)=>{t(n).find(".pagenum-prev,.pagenum-next,.pagenum-first,.pagenum-last,.pagenum-num").each(n=>{n.onclick=()=>{let r=parseInt(t(n).prop("pagenum"))||0;r<1||r>i.TotalPage||i.pageClickE(r)}}),t(n).find(".pagenum-ok")[0].onclick=()=>{let r=parseInt(t(n).find(".pagenum-input")[0].value||0);r<1||r>i.TotalPage||i.pageClickE(r)}},e=n=>{let o=document.getElementById(n.domId),i=r(n);o.innerHTML="";o.innerText="";let s=t("<span>").addClass("pagenum-btns")[0],h=t("<span>").addClass("pagenum-skip")[0];h.innerHTML=`共<b class="pagenum-total">${i.TotalPage}</b>页&nbsp;&nbsp;到第<input class="pagenum-input" />页<a class="pagenum-ok">确定</a>`;u(i);let e=t.fragment();if(e.append(t("<a>").addClass("pagenum-prev").prop("pagenum",i.PageIndex-1).text("〈")[0]),i.StartIndex>1){let n=i.PageIndex==1?"active":"num";e.append(t("<a>").addClass("pagenum-"+n).prop("pagenum",1).text("1")[0])}i.StartIndex>2&&e.append(t("<span>").addClass("pagenum-break").text("...")[0]);for(let n=i.StartIndex;n<=i.EndIndex;n++){let r=n,u=r==i.PageIndex?"active":"num";e.append(t("<a>").addClass("pagenum-"+u).prop("pagenum",r).text(r)[0])}if(i.EndIndex<i.TotalPage-1&&e.append(t("<span>").addClass("pagenum-break").text("...")[0]),i.EndIndex<i.TotalPage){let n=i.PageIndex==i.TotalPage?"active":"num";e.append(t("<a>").addClass("pagenum-"+n).prop("pagenum",i.TotalPage).text(i.TotalPage)[0])}e.append(t("<a>").addClass("pagenum-next").prop("pagenum",i.PageIndex+1).text("〉")[0]);s.appendChild(e);o.appendChild(s);o.appendChild(h);f(o,i)};n.pagenum=e})(window);(n=>{let t=(n,t)=>{let u={};return u.menuDom=document.getElementById(n),i(u.menuDom),r(u.menuDom,t),u.activeItem=n=>{let t=u.menuDom.querySelectorAll(".sidemenu-item")[n];t.click()},u},i=n=>{let t="sidemenu-arrdown",i="sidemenu-arrleft";n.querySelectorAll(".sidemenu-label").forEach(n=>{n.onclick=()=>{let r=n.parentNode.querySelector(`.${t},.${i}`);r.classList.contains(t)?(r.classList.remove(t),r.classList.add(i),n.parentNode.parentNode.classList.add("sidemenu-group-close")):(r.classList.add(t),r.classList.remove(i),n.parentNode.parentNode.classList.remove("sidemenu-group-close"))}})},r=(n,t)=>{let i="active";n.querySelectorAll(".sidemenu-item").forEach((r,u)=>{r.onclick=()=>{n.querySelectorAll(".sidemenu-item.active").forEach(n=>{n.classList.remove(i)}),r.classList.add(i),typeof t=="function"&&t(r,u)}})};n.sidemenu=t})(window);(n=>{const r="active",f="tabs-label",u="tabs-panel",i="pid",t=n.$ui;let o=n=>{let t=n.length;while(n.indexOf(t)>0)t++;return t},e=(n,f)=>{let e=f;f||(e=n.tabsLabels[0]);typeof f=="number"&&(e=f>=n.tabsLabels.length?n.tabsLabels[0]:n.tabsLabels[f]);let o=t(n.tabsDom).find("."+r).removeClass(r).prop(i);t(n.tabsDom).find(`.${u}[${i}='${o}']`).removeClass(r);let s=t(e).addClass(r).prop(i);if(t(n.tabsDom).find(`.${u}[${i}='${s}']`).addClass(r),typeof n.onTabActive=="function")n.onTabActive(e)},s=(n,t)=>{n.changeType==2?t.onmouseenter=()=>{e(n,t)}:t.onclick=()=>{e(n,t)}},h=(n,r,e)=>{let l=n.getCount(),h=e;(!h||h<0||h>=l)&&(h=l);let c=o(n.tabsLabelsPids);n.tabsLabelsPids.push(c);let a=t("<span>").addClass(f).text(r).prop(i,c)[0],v=t("<div>").addClass(u).prop(i,c)[0];return s(n,a),h==l?t(n.tabsLabels[n.tabsLabels.length-1]).after(a):t(n.tabsLabels[h]).before(a),t(n.tabsDom).append(v),c},c=(n,r,e)=>{if(e==="pid"){if(n.tabsLabelsPids.contains(r)){let o=t(n.tabsDom).find(`.${u}[${i}='${r}']`).remove(),s=t(n.tabsDom).find(`.${f}[${i}='${r}']`).remove(),e=n.tabsLabelsPids.indexOf(r);n.tabsLabelsPids.splice(e,1)}}else{if(!r||r<0||r>=n.tabsLabels.length)return;let f=n.tabsLabels[r],e=t(f).prop(i);t(f).remove();let s=t(n.tabsDom).find(`.${u}[${i}='${e}']`).remove(),o=n.tabsLabelsPids.indexOf(parseInt(e));n.tabsLabelsPids.splice(o,1)}},l=(n,l,a)=>{let v={};v.onTabActive=null;v.changeType=a||1;v.tabsDom=typeof n=="string"?document.getElementById(n):n;v.tabsLabels=v.tabsDom.getElementsByClassName(f);v.tabsLabelsPids=[];for(let n=0;n<v.tabsLabels.length;n++){let r=o(v.tabsLabelsPids);t(v.tabsLabels[n]).prop(i,r);v.tabsLabelsPids.push(r)}let y=v.tabsDom.getElementsByClassName(u);for(let n=0;n<v.tabsLabelsPids.length;n++){let r=v.tabsLabelsPids[n];if(n>=y.length)break;t(y[n]).prop(i,r)}let p=l;(!l||l<0||l>=v.tabsLabels.length)&&(p=0);t(v.tabsLabels[p]).addClass(r);p<y.length&&t(y[p]).addClass(r);v.activeTab=n=>{e(v,n)};v.delTab=(n,t)=>{c(v,n,t)};v.addTab=(n,t)=>{h(v,n,t)};v.getCount=()=>v.tabsLabels.length;for(var w=0;w<v.tabsLabels.length;w++){let n=v.tabsLabels[w];s(v,n)}return v};n.tabs=l})(window);(n=>{const t=n.$ui;let i=n=>{let i={};return i.dom=document.getElementById(n),i.show=function(n,i,r){if(this.dom){let u=`<div class="msgshow ${r}"><span class="title">${i}</span><span class="text">${n}</span><b class="close">x</b></div>`;t(this.dom).html(u).find(".close")[0].onclick=()=>{this.clear()}}},i.ok=function(n){if(this.dom){let i=`<div class="msgshow success"><span class="title">✔ 成功</span><span class="text">${n}</span><b class="close">x</b></div>`;t(this.dom).html(i).find(".close")[0].onclick=()=>{this.clear()}}},i.info=function(n){if(this.dom){let i=`<div class="msgshow info"><span class="title">! 提示</span><span class="text">${n}</span><b class="close">x</b></div>`;t(this.dom).html(i).find(".close")[0].onclick=()=>{this.clear()}}},i.err=function(n){if(this.dom){let i=`<div class="msgshow danger"><span class="title">✖ 错误</span><span class="text">${n}</span><b class="close">x</b></div>`;t(this.dom).html(i).find(".close")[0].onclick=()=>{this.clear()}}},i.warn=function(n){if(this.dom){let i=`<div class="msgshow warning"><span class="title">⚠ 警示</span><span class="text">${n}</span><b class="close">x</b></div>`;t(this.dom).html(i).find(".close")[0].onclick=()=>{this.clear()}}},i.clear=function(){this.dom&&t(this.dom).empty()},i};n.msgshow=i})(window);(n=>{const t=n.$ui;let i=(n,t)=>{let i={};return i.menuDom=document.getElementById(n),r(i.menuDom),u(i.menuDom,t),i.activeItem=n=>{let t=i.menuDom.querySelectorAll(".mnavmenu-item")[n];t.click()},i},r=n=>{t(n).find(".mnavmenu-label").each(i=>{i.onclick=()=>{let r=".mnavmenu-itembox",u=t(i).prev(r).hasClass("close");t(n).find(r).addClass("close");u==!0&&t(i).prev(r).removeClass("close")}})},u=(n,i)=>{t(n).find(".mnavmenu-item").each((n,r)=>{n.onclick=()=>{t(n).parent(".mnavmenu").find(".mnavmenu-itembox").addClass("close"),typeof i=="function"&&i(n,r)}})};n.mnavmenu=i})(window)