(n=>{let t=(n,t)=>{let u={};return u.menuDom=document.getElementById(n),i(u.menuDom),r(u.menuDom,t),u.activeItem=n=>{let t=u.menuDom.querySelectorAll(".sidemenu-item")[n];t.click()},u},i=n=>{let t="sidemenu-arrdown",i="sidemenu-arrleft";n.querySelectorAll(".sidemenu-label").forEach(n=>{n.onclick=()=>{let r=n.parentNode.querySelector(`.${t},.${i}`);r.classList.contains(t)?(r.classList.remove(t),r.classList.add(i),n.parentNode.parentNode.classList.add("sidemenu-group-close")):(r.classList.add(t),r.classList.remove(i),n.parentNode.parentNode.classList.remove("sidemenu-group-close"))}})},r=(n,t)=>{let i="active";n.querySelectorAll(".sidemenu-item").forEach(r=>{r.onclick=()=>{n.querySelectorAll(".sidemenu-item.active").forEach(n=>{n.classList.remove(i)}),r.classList.add(i),typeof t=="function"&&t(r)}})};n.sidemenu=t})(window);(n=>{let t={};t.inputFileChange=n=>{let t="";[].forEach.call(n.files,n=>{t+=n.name+","});t=t.substr(0,t.length-1);let i=n.parentNode.querySelector(".input-file-label");i.innerHTML=t};t.clsInputFile=n=>{let t=n.parentNode.querySelector(".input-file-label");t.innerHTML="";n.outerHTML=n.outerHTML};t.isBtnLoading=n=>n.classList.contains("loading")?!0:(n.classList.add("loading"),!1);t.clsBtnLoading=(n,t)=>{t>=0?setInterval(()=>{n.classList.remove("loading")},t):n.classList.remove("loading")};n.$ui=t})(window);(n=>{let t=(n,t,i)=>{let u={changeType:i||1,activeIndex:t||0},r=document.getElementById(n),o=r.querySelectorAll(".tabs-label")[u.activeIndex];o.classList.add("active");let s=r.querySelectorAll(".tabs-panel")[u.activeIndex];s.classList.add("active");let f=n=>{let t=r.querySelectorAll(".tabs-label")[n];if(t&&!t.classList.contains("active")){let i=r.querySelectorAll(".tabs-label.active"),u=r.querySelectorAll(".tabs-panel.active");i.forEach(n=>{n.classList.remove("active")});t.classList.add("active");u.forEach(n=>{n.classList.remove("active")});let f=r.querySelectorAll(".tabs-panel")[n];f.classList.add("active")}},e=r.querySelectorAll(".tabs-label");return u.changeType==1?e.forEach((n,t)=>{n.onclick=()=>{f(t)}}):u.changeType==2&&e.forEach((n,t)=>{n.onmouseenter=()=>{f(t)}}),{}};n.tabs=t})(window);(n=>{let i=()=>{let n=document.createElement("div");n.classList.add("msgbox-shadow");document.body.append(n);let t=document.createElement("div");return t.classList.add("msgbox-modal"),t},r=n=>{document.body.style.overflow="hidden",document.body.append(n)},t={};t.close=()=>{let n=document.body,t=n.querySelectorAll(".msgbox-modal"),i=n.querySelectorAll(".msgbox-shadow");t.forEach(n=>{n.parentNode.removeChild(n)});i.forEach(n=>{n.parentNode.removeChild(n)});document.body.style.overflow=null};t.alert=(n,u,f,e)=>{t.close();let o=i();o.innerHTML=`<div class="msgbox ${f||""} msgbox-${e||"center"}">${n||""}
        <span class="msgbox-btn msgbox-ok">Ok</span></div>`;o.querySelector(".msgbox-ok").onclick=()=>{t.close(),typeof u=="function"&&u()};r(o)};t.confirm=(n,u,f,e)=>{t.close();let o=i();o.innerHTML=`<div class="msgbox ${f||""} msgbox-${e||"center"}">${n||""}
        <span class="msgbox-btn msgbox-ok">Ok</span><span class="msgbox-btn msgbox-cancel">Cancel</span></div>`;o.querySelector(".msgbox-ok").onclick=()=>{t.close(),typeof u=="function"&&u(1)};o.querySelector(".msgbox-cancel").onclick=()=>{t.close(),typeof u=="function"&&u(0)};r(o)};t.prompt=(n,u,f,e)=>{t.close();let o=i();o.innerHTML=`<div class="msgbox ${f||""} msgbox-${e||"center"}">${n||""}<input class="msgbox-input" type="text"/>
<span class="msgbox-btn msgbox-ok">Ok</span><span class="msgbox-btn msgbox-cancel">Cancel</span></div>`;o.querySelector(".msgbox-ok").onclick=()=>{if(t.close(),typeof u=="function"){let n=o.querySelector(".msgbox-input").value;u(n)}};o.querySelector(".msgbox-cancel").onclick=()=>{t.close(),typeof u=="function"&&u("")};r(o)};t.show=(n,u,f)=>{t.close();let e=i();e.innerHTML=n;typeof u=="function"&&u();r(e);typeof f=="function"&&u()};n.msgbox=t})(window);(n=>{let t=(n,t)=>(t||(t="val"),n.attributes[t].nodeValue),r=(n,t,i)=>{i||(i="val"),n.setAttribute(i,t)},i=n=>{let r=document.getElementById(n.domId),i={},u=()=>{i.PageIndex=n.pageIndex||1,i.PageSize=n.pageSize>4&&n.pageSize<51?n.pageSize:10,i.TotalData=n.totalData||0,i.TotalPage=o(),i.TotalBtn=n.totalBtn>4&&n.totalBtn<11?n.totalBtn:5,i.pageClickE=n.pageClickE},f=()=>{r.innerHTML="";let t=document.createElement("span");t.classList.add("pagenum-btns");r.append(t);let u=document.createElement("span");u.classList.add("pagenum-skip");u.innerHTML=`共<b class="pagenum-total">${i.TotalPage}</b>页&nbsp;&nbsp;到第<input class="pagenum-input" />页<a class="pagenum-ok">确定</a>`;r.append(u);e();let n="";if(n+=`<a class="pagenum-prev" pagenum="${i.PageIndex-1}"><</a>`,i.StartIndex>1){let t=i.PageIndex==1?"active":"num";n+=`<a class="pagenum-${t}" pagenum="1">1</a>`}i.StartIndex>2&&(n+='<span class="pagenum-break">...<\/span>');for(let t=i.StartIndex;t<=i.EndIndex;t++){let r=t,u=r==i.PageIndex?"active":"num";n+=`<a class="pagenum-${u}" pagenum="${r}">${r}</a>`}if(i.EndIndex<i.TotalPage-1&&(n+='<span class="pagenum-break">...<\/span>'),i.EndIndex<i.TotalPage){let t=i.PageIndex==i.TotalPage?"active":"num";n+=`<a class="pagenum-${t}" pagenum="${i.TotalPage}">${i.TotalPage}</a>`}n+=`<a class="pagenum-next" pagenum="${i.PageIndex+1}">></a>`;t.innerHTML=n;s()},e=()=>{let n=i.PageIndex-parseInt(i.TotalBtn/2)+(i.TotalBtn%2==0?1:0),t=i.PageIndex+parseInt(i.TotalBtn/2);n<1&&(n=1,t=t>i.TotalPage?i.TotalPage:i.TotalBtn);t>i.TotalPage&&(t=i.TotalPage,n=t-i.TotalBtn+1,n<1&&(n=1));i.StartIndex=n;i.EndIndex=t},o=()=>{if(i.TotalData>=0&&i.PageSize>=5&&i.PageIndex>=1){let n=parseInt(i.TotalData/i.PageSize),t=i.TotalData%i.PageSize;return t>0?n+1:n}return 0},s=()=>{r.querySelectorAll(".pagenum-prev,.pagenum-next,.pagenum-first,.pagenum-last,.pagenum-num").forEach(n=>{n.onclick=()=>{let r=parseInt(t(n,"pagenum"))||0;r<1||r>i.TotalPage||i.pageClickE(r)}}),r.querySelector(".pagenum-ok").onclick=()=>{let n=parseInt(r.querySelector(".pagenum-input").value||0);n<1||n>i.TotalPage||i.pageClickE(n)}};u();f()};n.pagenum=i})(window);(n=>{let o=(n,t)=>{let s=t||"yyyy/MM/dd HH:mm:ss",i={};i.yyyy=n.getFullYear();i.yy=i.yyyy.toString().substr(2);let r=n.getMonth()+1;i.MM=r>9?r:"0"+r;i.M=r;let u=n.getDate();i.dd=u>9?u:"0"+u;i.d=u;let f=n.getHours();i.HH=f>9?f:"0"+f;i.H=f;let e=n.getMinutes();i.mm=e>9?e:"0"+e;i.m=e;let o=n.getSeconds();i.ss=o>9?o:"0"+o;i.s=o;for(let n in i)s=s.replace(n,i[n]);return s},r=n=>{if(!n.forEach){n.parentNode.removeChild(n);return}n.forEach(n=>{n.parentNode.removeChild(n)})},u=(n,t)=>(t||(t="val"),n.attributes[t].nodeValue),s=(n,t,i)=>{i||(i="val"),n.setAttribute(i,t)},c="date-box",f=null,i=null,t=null,e=n=>{let t=window.event||arguments.callee.caller.arguments[0];t.stopPropagation();let r=t.currentTarget;y(r,n);i=w();p(i);ht()},y=(n,i)=>{f=n;let r=n.value.trim();/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/.test(r)?r=r+" 00:00:00":/^[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}:[0-9]{2}$/.test(r)?r=r+":00":/^[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(r)||(r=null);let e=Date.parse(r),u=isNaN(e)?new Date((new Date).setHours(0,0,0)):new Date(e);t={};t.year=u.getFullYear();t.month=u.getMonth();t.day=u.getDate();t.hour=u.getHours();t.minute=u.getMinutes();t.second=u.getSeconds();t.dateFmt="yyyy/MM/dd";t.fmtType=1;i&&i.fmt=="datetime"&&(t.dateFmt="yyyy/MM/dd HH:mm:ss",t.fmtType=2)},p=t=>{let i=f.offsetLeft+"px",u=f.offsetTop+f.offsetHeight+"px",e=n.innerHeight;e<576&&(i=0,u="25vh");let o=document.body.querySelectorAll("."+c);r(o);t.style.left=i;t.style.top=u;document.body.append(t);e<576&&t.focus()},w=()=>{let r=`<div class="date-area-ymt">${b()}${d()}${ft()}</div>`,u=`<div class="date-area-week">${nt()}</div>`,f=`<div class="date-area-day">${l()}</div>`,i="";t.fmtType==2&&(i=`<div class="date-area-tc">${tt()}${et()}${ot()}</div>`);let n=document.createElement("div");return n.classList.add("date-box"),n.tabIndex=-1,n.innerHTML=`${r}${u}${f}${i}`,n},b=()=>{let n=`<b class="date-btn-year" val="${t.year}">${t.year}年</b>`;return`<div class="date-area-year">${'<a class="date-btn-prev">&lt;<\/a>'}${n}${'<a class="date-btn-next">&gt;<\/a>'}</div>`},k=n=>{let r="",t=st();n||(n=(new Date).getFullYear());for(let i=0;i<t.length;i++){let u=t[i]==n?"selected":"";r+=`<b class="date-option-year ${u}" val="${t[i]}">${t[i]}</b>`}let i=document.createElement("div");return i.classList.add("date-select-year"),i.innerHTML=r,i},d=()=>{let n=`<b class="date-btn-month" val="${t.month}">${t.month+1}月</b>`;return`<div class="date-area-month">${'<a class="date-btn-prev">&lt;<\/a>'}${n}${'<a class="date-btn-next">&gt;<\/a>'}</div>`},g=n=>{let i="";for(let t=0;t<12;t++){let r=n==t?"selected":"";i+=`<b class="date-option-month ${r}" val="${t}">${t+1}</b>`}let t=document.createElement("div");return t.classList.add("date-select-month"),t.innerHTML=i,t},nt=()=>{let n="",t=["日","一","二","三","四","五","六"];for(let i=0;i<t.length;i++){let r=i==0||i==6?"date-item-weekend":"";n+=`<b class="date-item-week ${r}">${t[i]}</b>`}return n},l=n=>{let i=n||a(),r="";for(var t=0;t<i.length;t++){let n=i[t];n.istoday=n.Istoday?" date-item-today":"";n.isselected=n.Isselected?" selected":"";n.isdayinmonth=n.Isdayinmonth?"":" date-item-dayoutmonth";n.isweekend=n.Isweekend?" date-item-weekend":"";r+='<b class="date-item-day${istoday}${isdayinmonth}${isselected}${isweekend}" year="${yyyy}" month="${MM}" day="${dd}">${dd}<\/b>'.replace(/\${(.+?)\}/g,function(t,i){return n.hasOwnProperty(i)?n[i]:""})}return r},tt=()=>{let n=`<b class="date-btn-time date-btn-hour">${t.hour}</b>:`,i=`<b class="date-btn-time date-btn-minute">${t.minute}</b>:`,r=`<b class="date-btn-time date-btn-second">${t.second}</b>`;return`<div class="date-area-time">${n}${i}${r}</div>`},it=()=>{let t="";for(let n=0;n<24;n++)t+=`<b class="date-option-hour" val="${n}">${n}</b>`;let n=document.createElement("div");return n.classList.add("date-select-hour"),n.innerHTML=t,n},rt=()=>{let t="";for(let n=0;n<60;n++)t+=`<b class="date-option-minute" val="${n}">${n}</b>`;let n=document.createElement("div");return n.classList.add("date-select-minute"),n.innerHTML=t,n},ut=()=>{let t="";for(let n=0;n<60;n++)t+=`<b class="date-option-second" val="${n}">${n}</b>`;let n=document.createElement("div");return n.classList.add("date-select-second"),n.innerHTML=t,n},ft=()=>'<div class="date-area-today"><a class="date-btn-today">今天<\/a><\/div>',et=()=>'<div class="date-area-clear"><a class="date-btn-clear">清空<\/a><\/div>',ot=()=>'<div class="date-area-ok"><a class="date-btn-ok">确定<\/a><\/div>',h=(n,t)=>{let r=a(n,t),u=l(r);i.querySelector(".date-area-day").innerHTML=u;v()},st=()=>{let n=[];for(let t=1900;t<2101;t++)n.push(t);return n},a=(n,i)=>{let e=parseInt(n)||t.year,u=parseInt(i)||t.month,r=new Date(e,u,1);r.setDate(1-r.getDay());let s=o(new Date,"yyyyMMdd"),f=[];for(let n=0;n<42;n++){let i={};i.yyyy=r.getFullYear();i.MM=r.getMonth();i.dd=r.getDate();i.Isdayinmonth=i.MM==u;i.Istoday=o(r,"yyyyMMdd")==s;i.Isselected=i.yyyy==t.year&&i.MM==t.month&&i.dd==t.day;i.Isweekend=n%7==0||(n+1)%7==0;r.setDate(i.dd+1);f.push(i)}return f},ht=()=>{ct(),lt(),at(),pt(),wt(),v(),t.fmtType==2&&(bt(),kt(),dt(),ii(),ri())},ct=()=>{i.onclick=n=>{n.stopPropagation();let t=i.querySelectorAll("[class^=date-select]");r(t)}},lt=()=>{i.querySelector(".date-btn-year").onclick=n=>{n.stopPropagation();let f=n.currentTarget,o=u(f),e=f.parentElement.querySelector(".date-select-year");if(e){r(e);return}let s=i.querySelectorAll("[class^=date-select]");r(s);let t=k(o);f.parentElement.append(t);let h=t.querySelector(".selected"),c=h.offsetTop-t.clientHeight/2;t.scrollTo(0,c);vt()}},at=()=>{i.querySelector(".date-btn-month").onclick=n=>{n.stopPropagation();let t=n.currentTarget,e=u(t),f=t.parentElement.querySelector(".date-select-month");if(f){r(f);return}let o=i.querySelectorAll("[class^=date-select]");r(o);t.parentElement.append(g(e));yt()}},vt=()=>{i.querySelectorAll(".date-option-year").forEach(n=>{n.onclick=n=>{n.stopPropagation();let f=n.currentTarget,t=u(f),e=i.querySelector(".date-btn-year");s(e,t);e.innerHTML=t+"年";r(f.parentElement);let o=u(i.querySelector(".date-btn-month"));h(t,o)}})},yt=()=>{i.querySelectorAll(".date-option-month").forEach(n=>{n.onclick=n=>{n.stopPropagation();let f=n.currentTarget,t=parseInt(u(f)),e=i.querySelector(".date-btn-month");s(e,t);e.innerHTML=t+1+"月";r(f.parentElement);let o=u(i.querySelector(".date-btn-year"));h(o,t)}})},pt=()=>{i.querySelectorAll(".date-btn-prev,.date-btn-next").forEach(n=>{n.onclick=n=>{n.stopPropagation();let o=n.currentTarget,c=o.parentElement.classList.contains("date-area-year")?1:2,l=o.classList.contains("date-btn-next")?1:2,f=i.querySelector(".date-btn-year"),e=i.querySelector(".date-btn-month"),t=parseInt(u(f)),r=parseInt(u(e));c==1?(t=l==1?t+1:t-1,t<1?t=9999:t>9999&&(t=1)):c==2&&(r=l==1?r+1:r-1,r<0?(r=11,t>1&&(t=t-1)):r>11&&(r=0,t<9999&&(t=t+1)));s(f,t);f.innerHTML=t+"年";s(e,r);e.innerHTML=r+1+"月";h(t,r)}})},wt=()=>{i.querySelector(".date-btn-today").onclick=n=>{n.stopPropagation();let r=n.currentTarget,i=new Date((new Date).toLocaleDateString());f.value=o(i,t.dateFmt);e.close()}},bt=()=>{i.querySelector(".date-btn-hour").onclick=n=>{n.stopPropagation();let t=n.currentTarget,u=t.parentElement.querySelector(".date-select-hour"),f=t.parentElement.querySelectorAll(".date-btn-time");if(f.forEach(n=>{n.classList.remove("open")}),u){r(u);return}let e=i.querySelectorAll("[class^=date-select]");r(e);t.parentElement.append(it());t.classList.add("open");gt()}},kt=()=>{i.querySelector(".date-btn-minute").onclick=n=>{n.stopPropagation();let t=n.currentTarget,u=t.parentElement.querySelector(".date-select-minute"),f=t.parentElement.querySelectorAll(".date-btn-time");if(f.forEach(n=>{n.classList.remove("open")}),u){r(u);return}let e=i.querySelectorAll("[class^=date-select]");r(e);t.parentElement.append(rt());t.classList.add("open");ni()}},dt=()=>{i.querySelector(".date-btn-second").onclick=n=>{n.stopPropagation();let t=n.currentTarget,u=t.parentElement.querySelector(".date-select-second"),f=t.parentElement.querySelectorAll(".date-btn-time");if(f.forEach(n=>{n.classList.remove("open")}),u){r(u);return}let e=i.querySelectorAll("[class^=date-select]");r(e);t.parentElement.append(ut());t.classList.add("open");ti()}},gt=()=>{i.querySelectorAll(".date-option-hour").forEach(n=>{n.onclick=n=>{n.stopPropagation();let f=n.currentTarget,e=u(f),o=i.querySelector(".date-btn-hour");o.innerHTML=e;t.hour=e;r(f.parentElement)}})},ni=()=>{i.querySelectorAll(".date-option-minute").forEach(n=>{n.onclick=n=>{n.stopPropagation();let f=n.currentTarget,e=u(f);i.querySelector(".date-btn-minute").innerHTML=e;t.minute=e;r(f.parentElement)}})},ti=()=>{i.querySelectorAll(".date-option-second").forEach(n=>{n.onclick=n=>{n.stopPropagation();let f=n.currentTarget,e=u(f);i.querySelector(".date-btn-second").innerHTML=e;t.second=e;r(f.parentElement)}})},v=()=>{i.querySelectorAll(".date-item-day").forEach(n=>{n.onclick=n=>{n.stopPropagation();let i=n.currentTarget,r=new Date(u(i,"year"),u(i,"month"),u(i,"day"),t.hour,t.minute,t.second);f.value=o(r,t.dateFmt);e.close()}})},ii=()=>{i.querySelector(".date-btn-clear").onclick=n=>{n.stopPropagation(),f.value="",e.close()}},ri=()=>{i.querySelector(".date-btn-ok").onclick=n=>{n.stopPropagation();let r=i.querySelector(".date-item-day.selected"),s=o(new Date(t.year,t.month,t.day,t.hour,t.minute,t.second),t.dateFmt);if(r){let n=new Date(u(r,"year"),u(r,"month"),u(r,"day"),t.hour,t.minute,t.second);s=o(n,t.dateFmt)}f.value=s;e.close()}};e.close=()=>{i=null;f=null;t=null;let n=document.body.querySelectorAll("."+c);r(n)};document.onclick=()=>{e.close()};n.MyDatePick=e})(window);(n=>{let t=(n,t)=>(t||(t="val"),n.attributes[t].nodeValue),i=(n,t,i)=>{i||(i="val"),n.setAttribute(i,t)},r=n=>{if(!n.forEach){n.parentNode.removeChild(n);return}n.forEach(n=>{n.parentNode.removeChild(n)})},u=(n,u)=>{if(!n||!u)throw"必须传入DOM对象";let h={},f={};h.load=(n,t)=>{if(f[n]===null)return console.log("type1"),null;if(f[n]){let t=l(n);s(t);e();let i=f[n];return f[n]=null,console.log("type2"),i}return c(n,t),o(1),Object.getOwnPropertyNames(f).length>0&&e(),f[n]=null,console.log("type3"),null};let c=(t,r)=>{let f=n.querySelector(".tabsbox-tab.active");f&&f.classList.remove("active");let u=document.createElement("label");u.classList.add("tabsbox-tab");u.classList.add("active");i(u,r,"title");i(u,t);u.innerHTML=`${r}<a class="tabsbox-tabclose" title="关闭">×</a>`;a(u);v(u);let e=n.querySelector(".tabsbox-nav");e.append(u)},l=t=>{let i=n.querySelector(".tabsbox-tab.active");i&&i.classList.remove("active");let r=n.querySelector(`.tabsbox-tab[val='${t}']`);return r.classList.add("active"),r},e=()=>{for(let n in f)if(f.hasOwnProperty(n)&&f[n]===null){let t=document.createDocumentFragment();u.childNodes.forEach(n=>{t.append(n)});f[n]=t;return}},o=t=>{let i=n.querySelector(".tabsbox-nav"),r=i.scrollLeft,u=i.clientWidth,e=i.scrollWidth,f=0;f=t==0?0:t==1?e:t=="left"?r-u/4:t=="right"?r+u/4:r+t;i.scrollTo(f,0)},s=t=>{let i=n.querySelector(".tabsbox-nav"),r=i.clientWidth,u=t.offsetLeft;i.scrollTo(u-r/2,0)},a=i=>{i.querySelector(".tabsbox-tabclose").onclick=e=>{if(e.stopPropagation(),Object.getOwnPropertyNames(f).length==1){u.innerHTML="";f={};r(i);return}let o=t(i);if(delete f[o],i.classList.contains("active")){let t=Object.getOwnPropertyNames(f).pop(),i=n.querySelector(`.tabsbox-tab[val='${t}']`);i.classList.add("active");u.innerHTML="";u.append(f[t]);f[t]=null}r(i)}},v=i=>{i.onclick=()=>{if(s(i),!i.classList.contains("active")){e();let r=n.querySelector(".tabsbox-tab.active");r&&r.classList.remove("active");i.classList.add("active");let o=t(i);u.innerHTML="";u.append(f[o]);f[o]=null}}};return n.querySelector(".tabsbox-left").onclick=()=>{o("left")},n.querySelector(".tabsbox-right").onclick=()=>{o("right")},n.querySelector(".tabsbox-goto-active").onclick=()=>{let t=n.querySelector(".active");t&&s(t)},n.querySelector(".tabsbox-close-all").onclick=()=>{let t=n.querySelector(".tabsbox-nav");t.innerHTML="";u.innerHTML="";f={}},n.querySelector(".tabsbox-close-other").onclick=()=>{let t=n.querySelector(".tabsbox-nav"),i=t.querySelectorAll(".tabsbox-tab:not(.active)");i&&i.forEach(n=>{t.removeChild(n)});for(let n in f)if(f.hasOwnProperty(n)){if(f[n]===null)continue;delete f[n]}},h};n.cachepage=u})(window)