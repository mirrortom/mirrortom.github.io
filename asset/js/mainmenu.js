(()=>{function i(n){let t="#fff",i="#333";n==2&&(t="#303030",i="#b0b0b0");document.documentElement.style.setProperty("--font-color",i);document.body.style.backgroundColor=t;window.localStorage.setItem("theme",n);let r=document.createEvent("HTMLEvents");r.initEvent("changethemehandler",!1,!1);window.dispatchEvent(r);u()}function r(n){document.documentElement.style.setProperty("--font-size",n+"px");window.localStorage.setItem("fontsize",n)}function u(){let t=`
<div id="mainmenubox" class="mainmenu grids-1 grids-md-3 text-center">
  <div class="mainmenu-logo">
    <a href="/index.html"><canvas id="logo_canv" height="30"></canvas></a>
  </div>
  <div class="mainmenu-menu grids-3">
    <a class="mainmenu-link grid" href="/index.html">Home</a>
    <a class="mainmenu-link grid" href="/projectinfo.html">Info</a>
    <a class="mainmenu-link grid" href="/about.html">About</a>
  </div>
  <div class="mainmenu-theme text-right" id="themebox">
    <a colorval="1" title="亮light"><i class="ico ico-sun"></i></a>
    <a colorval="2" title="暗dark"><i class="ico ico-moon"></i></a>
    <a fontval="14" title="fontSize 14px">A</a>
    <a fontval="16" title="fontSize 16px">AA</a>
    <a fontval="20" title="fontSize 20px">AAA</a>
    <div style="position:fixed;right:20px;bottom:20px;display:inline-flex;flex-direction: column;align-items: center;">
        <a href="/index.html" title="首页. to Home."><i class="ico ico-home text-xxxl"></i></a>
        <a class="pd-t-15" href="javascript:scrollTo(0,0)" title="回到顶部. to page top."><i class="ico ico-anglearr up text-xxxl"></i></a>
    </div>
  </div>
</div>`;document.querySelector(".layout-part1").innerHTML=t;let n=window.localStorage.getItem("theme");f(n);document.querySelector(".layout-part1").style.backgroundColor=n==2?"#303030":"white";document.querySelectorAll(".mainmenu-theme a[colorval]").forEach(n=>{let t=n.getAttribute("colorval");n.onclick=()=>{i(t)}});document.querySelectorAll(".mainmenu-theme a[fontval]").forEach(n=>{let t=n.getAttribute("fontval");n.onclick=()=>{r(t)}})}function f(n){const u=window.document.querySelector("#logo_canv"),t=u.getContext("2d");let i=200,r=36;t.canvas.width=i;t.canvas.height=r;t.font="26px bold Arial,Tahoma,Helvetica";t.textBaseline="middle";t.textAlign="center";t.fillStyle=n==2?"#c3cfd3":"#333";n!=2&&(t.shadowColor="#c3cfd3",t.shadowOffsetX=4,t.shadowOffsetY=4);t.fillText("MIRROR SPACE",i/2,r/2)}u();let n=window.localStorage.getItem("theme"),t=window.localStorage.getItem("fontsize");n>0&&i(n);t>0&&r(t)})();(()=>{if(location.hostname!="localhost"){let t=document.createElement("link");t.rel="stylesheet";t.href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css";let i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js";document.body.append(t);document.body.append(i);let n=document.createElement("div");n.id="gitalk-container";n.style.width="90%";n.style.maxWidth="640px";n.style.margin="0 auto";document.querySelector(".layout").append(n);i.onload=()=>{var n=new Gitalk({clientID:"dbddc2f305d637314ab8",clientSecret:"0e6342b5a033d9e978097fd2e8f0965d8a8c14c5",repo:"mirrortom.github.io",owner:"mirrortom",admin:["mirrortom"],id:location.pathname,distractionFreeMode:!1});n.render("gitalk-container")}}})()