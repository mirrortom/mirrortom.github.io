(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12905b50"],{"4d27":function(t,e,n){},6371:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wz-page"},[n("articleheader",{attrs:{data:t.artheader}}),n("h2",[t._v("概述")]),n("p",[t._v("2018年时想做一个使用C# razor语法写html页面工具.当时研究了asp.net的razor后没找到生成静态页面的办法,后来使用了三方的RazorEngine开源库,得以实现.")]),n("p",[t._v("原理是使用RazorEngine提供的方法,将Razor页面编译成静态html.为了方便使用,做成了vs插件.支持在vs2017上使用")]),n("h2",[t._v("插件使用")]),n("p",[t._v("在vs2017安装这个插件,安装方法是找到插件项目的编译目录,运行WebFilePublishVSIX.vsix这个文件.按提示安装,过程中会要求关闭vs.")]),n("p",[t._v('打开或者新建一个项目,添加几个web文件,如home.js,home.css,home.cshtml"')]),n("h4",[t._v("发布文件 / 发布目录 / 发布项目")]),n("p",[t._v("插件的三个功能,分别针对文件,目录,整个项目.可以发布项目中选中的单个或多个文件,目录.发布项目则是编译项目后,发布所有文件.")]),n("p",[t._v('在项目管理窗口中,右击一个(或多个)文件,点击菜单项 "发布文件 Alt+1 Alt+1" 可以发布该文件.')]),n("p",[t._v("当前正在编辑的文件可以按Alt+AA发布.为了便于修改文件后马上发布.")]),n("p",[t._v("同理,右击文件夹时,会发布文件夹中的所有文件.")]),n("p",[t._v('右击项目时,点击菜单项"发布web",这时会先编译该项目,然后发布项目中所有文件.')]),n("p",[t._v("发布时会判断文件类型,如果是js,css,jpg等web静态文件,则会直接复制到发布目录.cshtml文件会编译成html输出,这是插件的主要功能.")]),n("h2",[t._v("配置文件")]),n("p",[t._v('发布功能由配置文件设定,文件位于项目根目录下,默认名"publish.json",每次发布动作时,会读取这个文件.插件项目有个默认模板在 "/JsonCfg/publish.json".')]),n("p",[t._v("配置文件可以设定发布到哪个目录,允许发布文件,不允许发布文件,发布前是否清空发布目录.没有配置文件时,会使用默认配置.")]),n("pre",[t._v('{\n  // 源文件目录名(例如:src/ 不能以/或者\\开头,是相对路径,相对于项目根目录.结尾有/)\n  "sourceDir": "src/",\n  // 发布目录名(例如: \'dist/\' 或 \'d:/pubdir/\' 相对路径或绝对路径,相对路径不以/或\\开头,结尾有/)\n  "distDir": "dist/",\n  // 发布整个项目时,发布前删除发布目录所有内容\n  "emptyPublishDir": "true",\n  // 发布整个项目时,编译项目后发布bin文件夹\n  "buildBin": "false",\n  // 允许发布的文件扩展名\n  "allowExts": [ ".htm", ".html", ".cshtml", ".config", ".js", ".css", ".json", ".jpg", ".jpeg", ".gif", ".png", ".bmp", ".woff", ".woff2", ".ttf", ".svg", ".eot", ".otf" ],\n  // 不允许发布的文件后缀名\n  "denySuffix": [ "layout.cshtml", "part.cshtml", "part.js", "part.css" ],\n  // 不允许发布的文件(例如:bundleconfig.json data/data.mdb 不能以/或者\\开头,是带相对路径的文件名,相对于项目根目录)\n  "denyFiles": [],\n  // 不允许发布的目录(例如:src/ 不能以/或者\\开头,是相对路径,相对于项目根目录.结尾有/)\n  "denyDirs": []\n}\n        ')]),n("h2",[t._v("RazorEngine")]),t._m(0),t._m(1),n("p",[t._v("编译生成razor页面时,RazorEngine要使用RoslynCompiler工具编译.否则会出现编译卡死.在控制台程序中,默认的编译工具不会有问题,但做到插件中后出现卡死.")]),n("h3",[t._v("cshtml文件")]),n("p",[t._v("基本上与razor用法一样,但是可用的功能非常少.")]),n("h4",[t._v("引用母版页")]),n("pre",[t._v('        @{\n            // 使用母板页.(母板页只能引用一个,并且写在页面开始处)\n            Layout="/src/layout/layout.cshtml";\n        }\n        ')]),n("h4",[t._v("引用部分页")]),n("pre",[t._v('        <div>\n            // 引入了一个分部页.(可以引用多个)\n            @Include("/src/a_1.part.cshtml"); \n            // 递归的 : a_1.part.cshtml中也支持再引用layout和Include.\n        </div>\n        ')]),n("h4",[t._v("命名约定")]),n("p",[t._v("母版页名字约定后缀:layout.cshtml,片段页约定:part.cshtml")]),n("h4",[t._v("母板页示例")]),n("pre",[t._v('        <!DOCTYPE html>\n        <html lang="en">\n            <head>\n                <meta charset="utf-8">\n                <meta http-equiv="X-UA-Compatible" content="IE=edge">\n                <meta name="viewport" content="width=device-width,initial-scale=1.0">\n                <link href="base.css" rel="stylesheet" />\n                <title>@ViewBag.Title</title>\n            </head>\n            <body>\n                @RenderBody()\n            </body>\n        </html>\n        ')]),n("h4",[t._v("主页面示例")]),n("pre",[t._v('        @{\n            // 引用母板页\n            Layout = "/layout.cshtml";\n            // 对应母板页中的@ViewBag.Title\n            ViewBag.Title = "页面标题-razorengine.dll";\n            // 页面变量\n            string hi = "hello world";\n            string html = "<h1>hello world</h1>";\n        }\n        <div>@hi</div>\n        // 如果变量是Html标记,可以使用Raw方法.否则输出字符串\n        <div>@Raw(html)</div>\n        // C#代码,这种行为和php那种内嵌一样的\n        @for (int i = 0; i < 10; i++)\n        {\n            <div>循环输出 @i</div>\n        }\n        ')]),n("h2",[t._v("vs平台的前端打包工具")]),n("p",[t._v("相比于node平台的webpack等前端打包工具的热度,vs平台就比较冷清,虽然功能上并不缺少,但在前后端分离之后,几乎很少有用vs平台做前端的了吧.")]),n("p",[t._v("这个插件解决html生成问题,css,js的话,可以安装这几个插件,打包js成一个文件,编译less,scss,stylus等,非常好用.这样看来,vs工具做前端工程也较便利了.")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("razorengine开源项目文档地址 "),n("a",{attrs:{href:"https://antaris.github.io/RazorEngine/index.html",target:"_blank"}},[t._v("https://antaris.github.io/RazorEngine/index.html")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("项目git地址 "),n("a",{attrs:{href:"https://github.com/Antaris/RazorEngine",target:"_blank"}},[t._v("https://github.com/Antaris/RazorEngine")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("js插件: BundlerMinifier "),n("a",{attrs:{href:"https://github.com/madskristensen/BundlerMinifier",target:"_blank"}},[t._v("https://github.com/madskristensen/BundlerMinifier")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("css插件: WebCompiler "),n("a",{attrs:{href:"https://github.com/madskristensen/WebCompiler",target:"_blank"}},[t._v("https://github.com/madskristensen/WebCompiler")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("雪碧图: ImageSprites "),n("a",{attrs:{href:"https://github.com/madskristensen/ImageSprites",target:"_blank"}},[t._v("https://github.com/madskristensen/ImageSprites")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("压缩图片: ImageOptimizer "),n("a",{attrs:{href:"https://github.com/madskristensen/ImageOptimizer",target:"_blank"}},[t._v("https://github.com/madskristensen/ImageOptimizer")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("插件项目git: "),n("a",{attrs:{href:"https://github.com/mirrortom/WebFilePublishVSIX",target:"_blank"}},[t._v("https://github.com/mirrortom/WebFilePublishVSIX")])])}],r=n("d225"),i=n("308d"),l=n("6bb5"),h=n("4e2b"),c=n("9ab4"),o=n("60a3"),p=n("dedd"),v=function(t){function e(){return Object(r["a"])(this,e),Object(i["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),e}(o["c"]);c["a"]([Object(o["b"])()],v.prototype,"artheader",void 0),v=c["a"]([Object(o["a"])({components:{articleheader:p["a"]}})],v);var m=v,_=m,u=n("2877"),b=Object(u["a"])(_,a,s,!1,null,"565ec462",null);e["default"]=b.exports},8786:function(t,e,n){"use strict";var a=n("4d27"),s=n.n(a);s.a},dedd:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-center"},[t._v(t._s(t.data.title))]),n("h5",[t._v("\n        作者: \n        "),n("span",[t._v(t._s(t.data.author))])]),n("h5",[t._v("\n        日期: \n        "),n("span",[t._v(t._s(t.data.date))])]),n("a",{staticClass:"btn link backbtn",on:{click:function(e){return t.goback()}}},[t._v("返回上页")]),n("hr",{staticClass:"line"})])},s=[],r=n("d225"),i=n("b0b4"),l=n("308d"),h=n("6bb5"),c=n("4e2b"),o=n("9ab4"),p=n("60a3"),v=function(t){function e(){return Object(r["a"])(this,e),Object(l["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(i["a"])(e,[{key:"goback",value:function(){this.$router.go(-1)}}]),e}(p["c"]);o["a"]([Object(p["b"])()],v.prototype,"data",void 0),v=o["a"]([p["a"]],v);var m=v,_=m,u=(n("8786"),n("2877")),b=Object(u["a"])(_,a,s,!1,null,"4d0669a8",null);e["a"]=b.exports}}]);