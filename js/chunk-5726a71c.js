(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5726a71c"],{1603:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wz-page"},[a("articleheader"),a("h3",[t._v("摘要")]),a("p",[t._v("顾名思义是摘取要点,对于不同的文章来讲,摘要就是其重点,文章不同,重点不同,摘要能表现文章的特点.")]),a("p",[t._v("计算机里的摘要算法是对一段数据(1)做计算,得到一个固定长度的数据(2),2就是1的摘要.而这个计算办法是摘要算法")]),a("p",[t._v("摘要数据2由源数据1经过摘要算法得出,2体现了1的特点.当1改变时,2必然会改变.另外,由2不能推断出1.摘要算法是单向的.")]),a("h3",[t._v("碰撞")]),a("p",[t._v("碰撞是指两个不同的源数据,经过摘要算法后,得到了相同的摘要数据.碰撞发生后,此摘要数据将不能代表源数据了")]),a("p",[t._v("所以摘要算法如果发生了碰撞几率,那么就不是100%安全的了.但是,如果找到碰撞的几率非常低,或者非常难.那么虽然理论上不安全.但现实中可以使用.")]),a("h3",[t._v("sha")]),a("p",[t._v("sha是一系列摘要算法的名字,s是英文安全的首字母,h是英文哈希的首字母,a是英文算法的首字母")]),a("p",[t._v("C#提供的sha库在System.Security.Cryptography命令空间下,现有四个类 SHA1 SHA256 SHA384 SHA512")]),a("p",[t._v("名字上的数字越大,摘要得出数据越长.字节数分别是 20 32 48 64 .摘要越长,那么,发生碰撞的概率就降得越低.")]),a("h3",[t._v("用途")]),a("p",[t._v("在数字资产验证上,数字资产经常会复制传播,检查数字资产是否更改过非常重要,办法就是拿源资产数据的摘要对比复制的摘要,如果一样,就说明没修改过.")])],1)},c=[],s=a("d225"),r=a("308d"),i=a("6bb5"),u=a("4e2b"),b=a("9ab4"),h=a("60a3"),o=a("dedd"),v=function(t){function e(){return Object(s["a"])(this,e),Object(r["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(h["b"]);v=b["a"]([Object(h["a"])({components:{articleheader:o["a"]}})],v);var l=v,p=l,_=a("2877"),d=Object(_["a"])(p,n,c,!1,null,"3efccdf0",null);e["default"]=d.exports},"57b1":function(t,e,a){"use strict";var n=a("f99d"),c=a.n(n);c.a},dedd:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"text-center"},[t._v(t._s(this.$route.query.title))]),a("h5",[t._v("\n        作者: \n        "),a("span",[t._v(t._s(this.$route.query.author))])]),a("h5",[t._v("\n        日期: \n        "),a("span",[t._v(t._s(this.$route.query.date))])]),a("a",{staticClass:"btn link backbtn",on:{click:function(e){return t.goback()}}},[t._v("返回上页")]),a("hr",{staticClass:"line"})])},c=[],s=a("d225"),r=a("b0b4"),i=a("308d"),u=a("6bb5"),b=a("4e2b"),h=a("9ab4"),o=a("60a3"),v=function(t){function e(){return Object(s["a"])(this,e),Object(i["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),Object(r["a"])(e,[{key:"goback",value:function(){this.$router.go(-1)}}]),e}(o["b"]);v=h["a"]([o["a"]],v);var l=v,p=l,_=(a("57b1"),a("2877")),d=Object(_["a"])(p,n,c,!1,null,"cad40f34",null);e["a"]=d.exports},f99d:function(t,e,a){}}]);