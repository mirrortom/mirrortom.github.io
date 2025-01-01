﻿(()=>{function r(n){let t="theme-dark",i=document.documentElement;n=="light"?i.classList.contains(t)&&i.classList.remove(t):n=="dark"&&(i.classList.contains(t)||i.classList.add(t));window.localStorage.setItem("theme",n);let r=new Event("changethemehandler");window.dispatchEvent(r);f()}function u(n){document.documentElement.style.fontSize=n*10+"px";window.localStorage.setItem("fontsize",n)}function f(){let n=`
<div id="mainmenubox" class="mainmenu-box">
  <a  class="layout-v f-v-center" href="/index.html"><canvas id="logo_canv"></canvas></a>
  <div class="layout-h pd-lr-30">
    <a class="mainmenu-link pd-lr-20" href="/index.html"><h5>Home</h5></a>
    <a class="mainmenu-link pd-lr-20" href="/projectinfo.html"><h5>Info</h5></a>
    <a class="mainmenu-link pd-lr-20" href="/about.html"><h5>About</h5></a>
  </div>
  <div id="themebox" class="mainmenu-theme layout-h f-v-center pd-l-15">
    <a class="pd-r-5" fontval="1" title="font 100%"><i class="i-ac-font text-base"></i></a>
    <a class="pd-lr-5" fontval="1.2" title="font 120%"><i class="i-ac-font text-md"></i></a>
    <a class="pd-lr-5" fontval="1.35" title="font 135%"><i class="i-ac-font text-lg"></i></a>
    <a class="pd-lr-20 text-red-6" themeval="light" title="亮light"><i class="i-a-sun"></i></a>
    <a class="text-gray-7" themeval="dark" title="暗dark"><i class="i-moon"></i></a>
  </div>
</div>
<div class="tohomebar">
    <a href="/index.html" title="首页. to Home."><i class="i-a-home text-3xl"></i></a>
    <a class="pd-t-15" href="javascript:scrollTo(0,0)" title="回到顶部. to page top."><i class="i-a-anglearr up text-3xl"></i></a>
</div>`;document.querySelector(".layout-part1").innerHTML=n;let t=window.localStorage.getItem("theme");e(t);document.querySelectorAll("#themebox a[themeval]").forEach(n=>{let t=n.getAttribute("themeval");n.onclick=()=>{r(t)}});document.querySelectorAll("#themebox a[fontval]").forEach(n=>{let t=n.getAttribute("fontval");n.onclick=()=>{u(t)}})}function e(t){const w=window.document.querySelector("#logo_canv"),i=w.getContext("2d");i.canvas.width=218;i.canvas.height=36;i.strokeStyle=t=="dark"?"#c3cfd3":"#343434";i.shadowColor="#c3cfd3";i.shadowOffsetX=2;i.shadowOffsetY=2;let u=24,f=3,p=f;i.lineWidth=f;i.lineJoin="bevel";let e=[o,s,n,n,h,n,"-",c,l,a,v,y];for(var r=0;r<e.length;r++)e[r]!="-"&&(p=r*(u*.5+6)+f,e[r](i,p,6,u*.5,u))}function o(n,t,i,r,u){n.beginPath();n.moveTo(t,i+u);n.lineTo(t,i);n.lineTo(t+r/2,i+u*.7);n.lineTo(t+r,i);n.lineTo(t+r,i+u);n.stroke()}function s(n,t,i,r,u){n.beginPath();n.moveTo(t,i+u);n.lineTo(t+r,i+u);n.moveTo(t+r/2,i+u);n.lineTo(t+r/2,i);n.moveTo(t,i);n.lineTo(t+r,i);n.stroke()}function n(n,t,i,r,u){n.beginPath();n.moveTo(t,i+u);n.lineTo(t,i);n.lineTo(t+r,i);n.lineTo(t+r,i+u/2);n.lineTo(t,i+u/2);n.lineTo(t+r,i+u);n.stroke()}function h(n,t,i,r,u){n.beginPath();n.ellipse(t+r/2,i+u/2,r/2,u/2,0,0,Math.PI*2);n.stroke()}function c(n,t,i,r,u){n.beginPath();n.moveTo(t,i+u);n.lineTo(t+r,i+u);n.lineTo(t+r,i+u/2);n.lineTo(t,i+u/2);n.lineTo(t,i);n.lineTo(t+r,i);n.stroke()}function l(n,t,i,r,u){n.beginPath();n.moveTo(t,i+u);n.lineTo(t,i);n.lineTo(t+r,i);n.lineTo(t+r,i+u/2);n.lineTo(t,i+u/2);n.stroke()}function a(n,t,i,r,u){n.beginPath();n.moveTo(t,i+u);n.lineTo(t+r/2,i);n.lineTo(t+r,i+u);n.stroke()}function v(n,t,i,r,u){n.beginPath();n.moveTo(t+r,i+u);n.lineTo(t,i+u);n.lineTo(t,i);n.lineTo(t+r,i);n.stroke()}function y(n,t,i,r,u){n.beginPath();n.moveTo(t+r,i+u);n.lineTo(t,i+u);n.lineTo(t,i);n.lineTo(t+r,i);n.moveTo(t,i+u/2);n.lineTo(t+r,i+u/2);n.stroke()}f();let t=window.localStorage.getItem("theme"),i=window.localStorage.getItem("fontsize");t&&r(t);i&&u(i)})();(()=>{if(location.hostname!="localhost"){let t=document.createElement("link");t.rel="stylesheet";t.href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css";let i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js";document.body.append(t);document.body.append(i);let n=document.createElement("div");n.id="gitalk-container";n.style.width="90%";n.style.maxWidth="640px";n.style.margin="0 auto";document.querySelector(".layout").append(n);i.onload=()=>{var n=new Gitalk({clientID:"dbddc2f305d637314ab8",clientSecret:"0e6342b5a033d9e978097fd2e8f0965d8a8c14c5",repo:"mirrortom.github.io",owner:"mirrortom",admin:["mirrortom"],id:location.pathname,distractionFreeMode:!1});n.render("gitalk-container")}}})()