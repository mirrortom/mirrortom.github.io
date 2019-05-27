(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7816fa9f"],{"14d8":function(e,t,a){},"6c47":function(e,t,a){"use strict";var r=a("14d8"),n=a.n(r);n.a},cb11:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wz-page"},[a("articleheader"),a("h1",[e._v("文件转换BASE64")]),e._m(0),a("p",[e._v("选择文件(注意:不要选太大文件,1M以下就好.文件大会卡死!)")]),a("input",{attrs:{type:"file",id:"fileinput"}}),a("p",{staticClass:"text-danger"},[e._v(e._s(e.errinfo))]),a("div",{staticClass:"pd-tb-10"},[a("a",{staticClass:"btn success",on:{click:e.convert}},[e._v("转义")]),a("a",{staticClass:"btn primary",on:{click:e.clear}},[e._v("清空")])]),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.base64Str,expression:"base64Str"}],staticClass:"textbox",domProps:{value:e.base64Str},on:{input:function(t){t.target.composing||(e.base64Str=t.target.value)}}})])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",{staticClass:"code"},[e._v("// 从input控件取得文件对象\nvar file = document.getElementById('input').files[0];\n"),a("b",[e._v("// 第一步:新建一个这对象")]),e._v("\nlet reader = new FileReader();\nif (file)\n{\n"),a("b",[e._v("第二步:对象载入INPUT里的文件")]),e._v("\n  reader.readAsDataURL(file);\n"),a("b",{staticClass:"text-red"},[e._v("关键处:必须在图片加载完成事件中处理.")]),e._v("\n  reader.addEventListener(\"load\", function ()\n  {\n    // console.log('选择的图片已经载入...');\n    $('#previmg').prop('src', reader.result);\n    "),a("b",{staticClass:"text-red"},[e._v("对象加载完文件后,result属性就会有值.值就是base64字符串")]),e._v("\n    $('#showarea').val(reader.result);\n  }, false);\n}\n")])}],s=a("d225"),i=a("b0b4"),c=a("308d"),l=a("6bb5"),u=a("4e2b"),o=a("9ab4"),d=a("60a3"),v=a("dedd"),b=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.file="",e.base64Str="",e.errinfo="",e}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"convert",value:function(){var e=this;this.base64Str="",this.errinfo="";var t=document.querySelector("#fileinput"),a=t.files[0];if(a){var r=a.size/1024/1024;if(r>2)this.errinfo="已选文件超过"+Math.ceil(r)+"M,为方便示例,请选择小于2M的文件!";else{var n=new FileReader;a&&(n.readAsDataURL(a),n.addEventListener("load",function(){e.base64Str=n.result},!1))}}else this.errinfo="未选择文件"}},{key:"clear",value:function(){this.base64Str="",this.errinfo="";var e=document.querySelector("#fileinput");e&&(e.outerHTML=e.outerHTML)}}]),t}(d["b"]);b=o["a"]([Object(d["a"])({components:{articleheader:v["a"]}})],b);var f=b,p=f,h=(a("6c47"),a("2877")),_=Object(h["a"])(p,r,n,!1,null,"1839a780",null);t["default"]=_.exports},dedd:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"text-center"},[e._v(e._s(this.$route.query.title))]),a("h5",[e._v("\n        作者: \n        "),a("span",[e._v(e._s(this.$route.query.author))])]),a("h5",[e._v("\n        日期: \n        "),a("span",[e._v(e._s(this.$route.query.date))])]),a("hr")])},n=[],s=a("d225"),i=a("308d"),c=a("6bb5"),l=a("4e2b"),u=a("9ab4"),o=a("60a3"),d=function(e){function t(){return Object(s["a"])(this,t),Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(o["b"]);d=u["a"]([o["a"]],d);var v=d,b=v,f=a("2877"),p=Object(f["a"])(b,r,n,!1,null,"353a531e",null);t["a"]=p.exports}}]);