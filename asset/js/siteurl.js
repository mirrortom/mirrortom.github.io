(()=>{let t={"搜索":{"https://www.bing.com":"必应","https://www.baidu.com":"百度","https://search.yahoo.com":"雅虎","https://www.google.com/ncr":"谷歌"},"新闻":{"https://www.toutiao.com/":"头条","https://www.sohu.com/":"搜狐","https://www.msn.cn/zh-cn":"MSN","http://www.xinhuanet.com":"新华","https://www.nasa.gov/":"NASA"},"社娱":{"https://www.rottentomatoes.com":"烂番茄","https://www.bilibili.com":"Bili","https://www.youtube.com":"油管","https://www.facebook.com":"脸书","https://www.netflix.com/":"网飞","https://www.twitter.com":"推特"},"电商":{"https://www.taobao.com":"淘宝","https://www.jd.com":"京东","https://www.amazon.cn":"亚马逊"},"程序":{"https://github.com":"GitHub","https://docs.github.com/":"GitDocs","https://docs.microsoft.com/":"MSDN","https://stackoverflow.com/":"stackof","https://www.tiobe.com/tiobe-index/":"Lang排名","https://db-engines.com/en/ranking":"DB排名","https://fontawesome.com/":"fontawesome","https://getbootstrap.com/":"bootstrap","https://shoelace.style/":"shoelace","https://www.behance.net/":"behance"},"博客":{"https://www.changhai.org/":"卢昌海","https://www.turing.org.uk/":"图灵"},"资源":{"https://dictionary.cambridge.org/":"剑桥词典","https://realfavicongenerator.net/":"favicon","http://msdn.itellyou.cn":"msdn告诉你","https://www.canva.com":"canva设计","http://www.iconfont.cn":"阿里矢量","http://www.faisco.com":"凡科网"},"财经":{"http://www.csindex.com.cn/":"中证指数","http://www.sse.com.cn":"上交所","http://www.szse.cn/":"深交所","http://www.csrc.gov.cn":"证监会","http://www.pbc.gov.cn":"央行","http://gks.mof.gov.cn/":"财政部","https://www.miit.gov.cn/":"工信部"}},n="";for(let i in t){n+=`<span class="label text-gray-dk">${i}</span>`;for(let r in t[i]){let u=t[i][r];n+=`<a class="btn link danger" href="${r}" target="_blank">${u}</a>`}n+="&emsp;"}let i=document.querySelector("#websitebox");i.innerHTML=n})()