(()=>{function i(n){let t="#fff",i="#333";n==2&&(t="#303030",i="#b0b0b0");document.documentElement.style.setProperty("--font-color",i);document.body.style.backgroundColor=t;window.localStorage.setItem("theme",n);let r=document.createEvent("HTMLEvents");r.initEvent("changethemehandler",!1,!1);window.dispatchEvent(r);u()}function r(n){document.documentElement.style.setProperty("--font-size",n+"px");window.localStorage.setItem("fontsize",n)}function u(){let t=`
<div id="mainmenubox" class="mainmenu grids">
  <div class="grid-12 grid-md-9 grid-lg-9 grid-xl-9 grids text-center">
    <div class="grid-5"><a href="/index.html"><canvas id="logo_canv" height="30"></canvas></a></div>
    <a class="mainmenu-link grid" href="/index.html">Home</a>
    <a class="mainmenu-link grid" href="/projectinfo.html">Info</a>
    <a class="mainmenu-link grid" href="/about.html">About</a>
  </div>
  <div class="theme grid-12 grid-md-3 grid-lg-3 grid-xl-3 text-right" id="themebox">
    <a class="mainmenu-link" colorval="1">Sun</a>
    <a class="mainmenu-link" colorval="2">Moon</a>
    <a class="mainmenu-link" fontval="14">A</a>
    <a class="mainmenu-link" fontval="16">AA</a>
    <a class="mainmenu-link" fontval="20">AAA</a>
  </div>
</div>`;document.querySelector(".layout-part1").innerHTML=t;let n=window.localStorage.getItem("theme");f(n);document.querySelector(".layout-part1").style.backgroundColor=n==2?"#303030":"white";document.querySelectorAll(".theme a[colorval]").forEach(n=>{let t=n.getAttribute("colorval");n.onclick=()=>{i(t)}});document.querySelectorAll(".theme a[fontval]").forEach(n=>{let t=n.getAttribute("fontval");n.onclick=()=>{r(t)}})}function f(n){const i=window.document.querySelector("#logo_canv"),t=i.getContext("2d");t.font="26px bold Arial,Tahoma,Helvetica";t.textBaseline="middle";t.fillStyle=n==2?"#c3cfd3":"#333";n!=2&&(t.shadowColor="#c3cfd3",t.shadowOffsetX=3,t.shadowOffsetY=6);t.fillText("Mirror Space",10,15)}u();let n=window.localStorage.getItem("theme"),t=window.localStorage.getItem("fontsize");n>0&&i(n);t>0&&r(t)})()