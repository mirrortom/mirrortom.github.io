(n=>{function i(n){if(this.canvas=document.getElementById(n),!this.canvas)throw new Error("canvasId not found");return this.ctx=this.canvas.getContext("2d"),this}i.prototype.style=function(n=0){return n==0&&(this.canvas.style.display="block",this.canvas.style.backgroundColor="#f0f0f0"),this};let t=n=>new i(n);t.extend=n=>{for(var t in n)i.prototype[t]=n[t]};_checkP2=(n,t,i,r)=>typeof i=="undefined"?{ax:n.x,ay:n.y,bx:t.x,by:t.y}:{ax:n,ay:t,bx:i,by:r};let r={};r.getK=(n,t,i,r)=>{let u=_checkP2(n,t,i,r),f=u.bx-u.ax,e=u.by-u.ay;return e===0?0:f===0?null:e/f};r.dist=(n,t,i,r)=>{let u=_checkP2(n,t,i,r);return u.ay==u.by?Math.abs(u.ax-u.bx):u.ax==u.bx?Math.abs(u.ay-u.by):Math.sqrt(Math.pow(u.ax-u.bx,2)+Math.pow(u.ay-u.by,2))};t.line=r;let u={};u.getTangent=(n,t)=>{let i=n,r=t,u=Math.sqrt((i.x-r.x)*(i.x-r.x)+(i.y-r.y)*(i.y-r.y));if(u>i.r+r.r||u<Math.abs(i.r-r.r))return null;let o=(i.r*i.r-r.r*r.r+u*u)/(2*u),f={x:0,y:0,istag:!1},e=o/(u-o);return f.x=(i.x+e*r.x)/(1+e),f.y=(i.y+e*r.y)/(1+e),f.istag=parseFloat(u.toFixed(1))==i.r+r.r||parseFloat(u.toFixed(1))==Math.abs(i.r-r.r),f};u.getCrossLine=(n,t)=>{let i=n,r=t,e=Math.sqrt((i.x-r.x)*(i.x-r.x)+(i.y-r.y)*(i.y-r.y));if(e>i.r+r.r||e<Math.abs(i.r-r.r))return null;n.x>t.x&&(i=t,r=n);n.x==t.x&&n.y>t.y&&(i=t,r=n);let l=(i.r*i.r-r.r*r.r+e*e)/(2*e),y=Math.sqrt(i.r*i.r-l*l),o=l,s=y,h=l,c=-y,u=o,f=s,p=cavlib.line.getK({x:i.x,y:-i.y},{x:r.x,y:-r.y}),w=p==null?-Math.PI/2:Math.atan(p),a=Math.cos(w),v=Math.sin(w);return o=u*a+f*v,s=f*a-u*v,u=h,f=c,h=u*a+f*v,c=f*a-u*v,u=o,f=s,o=u+i.x,s=f+i.y,u=h,f=c,h=u+i.x,c=f+i.y,{x1:parseFloat(o.toFixed(4)),y1:parseFloat(s.toFixed(4)),x2:parseFloat(h.toFixed(4)),y2:parseFloat(c.toFixed(4))}};t.cirs=u;t.extend({lineArrow:function(n,t=12,i=10,r=true){this.ctx.save();this.ctx.beginPath();this.ctx.moveTo(n[0],n[1]);for(var e=2,s=n.length;e<s;e+=2)this.ctx.lineTo(n[e],n[e+1]);this.ctx.stroke();let u={x:n[n.length-2],y:n[n.length-1]},f={x:n[n.length-4],y:n[n.length-3]},o=0;if(u.x==f.x)this.ctx.translate(u.x,u.y),this.ctx.rotate(Math.PI/2),this.ctx.beginPath(),o=u.y>f.y?i:-i;else{let n=(u.y-f.y)/(f.x-u.x);this.ctx.translate(u.x,u.y);this.ctx.rotate(-Math.atan(n));o=u.x>f.x?i:-i}return this.ctx.beginPath(),this.ctx.moveTo(0,-t/2),this.ctx.lineTo(0,t/2),this.ctx.lineTo(o,0),this.ctx.closePath(),r==!0?this.ctx.fill():this.ctx.stroke(),this.ctx.restore(),this}});t.extend({xyAxis:function(n=0,t=0,i=0,r=0,u=0,f=0,e=0){let o=t,s=i,h=r,c=u,l=f,a=e,v=this.canvas.width,y=this.canvas.height;return n<2&&(o=v/2,s=y/2),h==0&&(h=v-o),c==0&&(c=s),l==0&&(l=o),a==0&&(a=y-s),this.ctx.save(),this.ctx.translate(o,s),n%2==0&&this.ctx.setLineDash([2]),this.ctx.beginPath(),this.lineArrow([-l,0,h-10,0]),this.lineArrow([0,a,0,-c+10]),this.ctx.restore(),this}});t.extend({p2Rect:function(n,t,i,r,u=0,f="black"){return this.ctx.save(),u%2==0&&this.ctx.setLineDash([2]),this.ctx.strokeStyle=f,this.ctx.beginPath(),this.ctx.moveTo(n,t),this.ctx.lineTo(i,t),this.ctx.lineTo(i,r),this.ctx.lineTo(n,r),this.ctx.closePath(),this.ctx.stroke(),this.ctx.restore(),this}});t.extend({pointVH:function(n,t,i=0,r="black",u=0,f=0){return i<2&&(u=this.canvas.width/2,f=this.canvas.height/2),this.ctx.save(),this.ctx.translate(u,f),i%2==0&&this.ctx.setLineDash([2]),this.ctx.strokeStyle=r,this.ctx.beginPath(),this.ctx.moveTo(n,t),this.ctx.lineTo(0,t),this.ctx.moveTo(n,t),this.ctx.lineTo(n,0),this.ctx.stroke(),this.ctx.restore(),this}});t.extend({pointTag:function(n,t,i="black",r=0,u=3){return this.ctx.save(),this.ctx.translate(n,t),this.ctx.beginPath(),r===0?this.ctx.arc(0,0,u,0,Math.PI*2):this.ctx.rect(-u,-u,u*2,u*2),this.ctx.fillStyle=i,this.ctx.fill(),this.ctx.restore(),this}});t.extend({pointChar:function(n,t,i,r=0,u="black",f=20){this.ctx.save();this.ctx.translate(n,t);this.ctx.textAlign="center";this.ctx.textBaseline="middle";let e=r*Math.PI/180,o=Math.cos(e)*f,s=Math.sin(e)*f;return this.ctx.beginPath(),this.ctx.fillStyle=u,this.ctx.fillText(i,o,s),this.ctx.restore(),this}});t.extend({line:function(n,t,i,r,u="black",f=1){return this.ctx.save(),this.ctx.beginPath(),this.ctx.moveTo(n,t),this.ctx.lineTo(i,r),this.ctx.strokeStyle=u,this.ctx.lineWidth=f,this.ctx.stroke(),this.ctx.restore(),this}});t.extend({fillArea:function(n,t="black",i=0){this.ctx.save();this.ctx.beginPath();for(var r=0;r<n.length;r++)this.ctx.lineTo(n[r][0],n[r][1]);return this.ctx.fillStyle=t,i===0?this.ctx.fill():this.ctx.fill("evenodd"),this.ctx.restore(),this}});n.cavlib=t})(window)