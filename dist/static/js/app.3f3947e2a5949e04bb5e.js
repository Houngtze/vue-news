webpackJsonp([1],{"+hbV":function(t,i,e){"use strict";var a=e("Cz8s"),s=e("n5Qe"),n=e("GQaK"),o=e("YaEn");i.a={data:function(){return{title:"頭條",iniTab:"top",switchTab:"top",content:"",newList:{top:[],shehui:[],guonei:[],guoji:[],yule:[],tiyu:[],junshi:[],keji:[],caijing:[],shishang:[]},loadingShow:!0,noneShow:!1,toast:!1,tabPosition:0,hasFetch:{top:!0,shehui:!1,guonei:!1,guoji:!1,yule:!1,tiyu:!1,junshi:!1,keji:!1,caijing:!1,shishang:!1}}},components:{"v-header":a.a},methods:{handleTabChange:function(t){var i=this,a=document.querySelector("."+t).offsetLeft,n=window.screen.width,o=a+70-n,l=o+n/2-35;console.log(l),l>0&&l<700-n&&this.scroll.scrollTo(-l,0),l<0&&this.scroll.scrollTo(0,0),l>700-n&&this.scroll.scrollTo(-(700-n),0),this.iniTab=t;var c=this.hasFetch[t];console.log(c),c||(this.loadingShow=!0,e.i(s.a)(this.iniTab).then(function(e){if(10012===e.data.error_code||!e)return console.warn("网络出错了"),i.loadingShow=!1,i.noneShow=!0,void i.showToast();i.newList[t]=e.data.result.data,console.log(i.newList),i.loadingShow=!1,i.hasFetch[t]=!0}))},goToContent:function(t){o.a.push({name:"content",params:{url:t}})},showToast:function(){var t=this;this.toast=!0,this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(function(){t.toast=!1},1e6)},hideToast:function(){this.toast=!1,this.toastTimer&&clearTimeout(this.toastTimer)}},created:function(){var t=this;e.i(s.a)(this.iniTab).then(function(i){if(console.log(i),10012===i.data.error_code||!i)return console.log(i),console.warn("网络出错了"),t.loadingShow=!1,t.noneShow=!0,void t.showToast();t.newList.top=i.data.result.data,console.log(t.newList),t.loadingShow=!1})},deactivated:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.scroll=new n.a(t.$refs.wrapper,{scrollX:!0,scrollY:!1,click:!0,bounce:!1,probeType:2,scroll:t.tabPosition})})}}},"7Urw":function(t,i,e){t.exports=e.p+"static/img/none-img.c406ea3.jpg"},"8hXn":function(t,i,e){"use strict";function a(t){e("KpxS")}var s=e("+hbV"),n=e("Icjv"),o=e("VU/8"),l=a,c=o(s.a,n.a,!1,l,null,null);i.a=c.exports},A353:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"header"}},[e("mu-appbar",{attrs:{title:t.title}},[t.leftShow?e("mu-icon-button",{attrs:{slot:"left",icon:"arrow_back_ios"},slot:"left"}):t._e(),t._v(" "),t.rightShow?e("mu-icon-button",{attrs:{slot:"right",icon:""},slot:"right"}):t._e()],1)],1)},s=[],n={render:a,staticRenderFns:s};i.a=n},Aou8:function(t,i,e){"use strict";function a(t){e("C6Qx")}var s=e("McrU"),n=e("LjRN"),o=e("VU/8"),l=a,c=o(s.a,n.a,!1,l,null,null);i.a=c.exports},C6Qx:function(t,i){},Cz8s:function(t,i,e){"use strict";function a(t){e("Q5tt")}var s=e("wqBJ"),n=e("A353"),o=e("VU/8"),l=a,c=o(s.a,n.a,!1,l,null,null);i.a=c.exports},E51W:function(t,i){},EDLI:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},s=[],n={render:a,staticRenderFns:s};i.a=n},Icjv:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"animated fadeIn",attrs:{id:"index"}},[a("v-header",{attrs:{title:t.title,leftShow:!1,rightShow:!1}}),t._v(" "),a("div",{ref:"wrapper",staticClass:"wrapper"},[a("mu-tabs",{staticClass:"content",attrs:{value:t.iniTab},on:{change:t.handleTabChange}},[a("mu-tab",{staticClass:"top",attrs:{value:"top",title:"头条"}}),t._v(" "),a("mu-tab",{staticClass:"shehui",attrs:{value:"shehui",title:"社会"}}),t._v(" "),a("mu-tab",{staticClass:"guonei",attrs:{value:"guonei",title:"国内"}}),t._v(" "),a("mu-tab",{staticClass:"guoji",attrs:{value:"guoji",title:"国际"}}),t._v(" "),a("mu-tab",{staticClass:"yule",attrs:{value:"yule",title:"娱乐"}}),t._v(" "),a("mu-tab",{staticClass:"tiyu",attrs:{value:"tiyu",title:"体育"}}),t._v(" "),a("mu-tab",{staticClass:"junshi",attrs:{value:"junshi",title:"军事"}}),t._v(" "),a("mu-tab",{staticClass:"keji",attrs:{value:"keji",title:"科技"}}),t._v(" "),a("mu-tab",{staticClass:"caijing",attrs:{value:"caijing",title:"财经"}}),t._v(" "),a("mu-tab",{staticClass:"shishang",attrs:{value:"shishang",title:"时尚"}})],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"top"==t.iniTab,expression:"iniTab=='top'"}],staticClass:"news-content",class:t.iniTab},[a("ul",t._l(t.newList.top,function(i,e){return a("li",{staticClass:"news-item",on:{click:function(e){t.goToContent(i.url)}}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.thumbnail_pic_s,expression:"item.thumbnail_pic_s"}]})]),t._v(" "),a("div",{staticClass:"right"},[a("h1",[t._v(" "+t._s(i.title)+" ")]),t._v(" "),a("p",[a("em",[t._v(" "+t._s(i.date)+" ")]),t._v(" "),a("em",[t._v(" "+t._s(i.author_name)+" ")])])])])}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"shehui"==t.iniTab,expression:"iniTab=='shehui'"}],staticClass:"news-content",class:t.iniTab},[a("ul",t._l(t.newList.shehui,function(i,e){return a("li",{staticClass:"news-item",on:{click:function(e){t.goToContent(i.url)}}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.thumbnail_pic_s,expression:"item.thumbnail_pic_s"}]})]),t._v(" "),a("div",{staticClass:"right"},[a("h1",[t._v(" "+t._s(i.title)+" ")]),t._v(" "),a("p",[a("em",[t._v(" "+t._s(i.date)+" ")]),t._v(" "),a("em",[t._v(" "+t._s(i.author_name)+" ")])])])])}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"guonei"==t.iniTab,expression:"iniTab=='guonei'"}],staticClass:"news-content",class:t.iniTab},[a("ul",t._l(t.newList.guonei,function(i,e){return a("li",{staticClass:"news-item",on:{click:function(e){t.goToContent(i.url)}}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.thumbnail_pic_s,expression:"item.thumbnail_pic_s"}]})]),t._v(" "),a("div",{staticClass:"right"},[a("h1",[t._v(" "+t._s(i.title)+" ")]),t._v(" "),a("p",[a("em",[t._v(" "+t._s(i.date)+" ")]),t._v(" "),a("em",[t._v(" "+t._s(i.author_name)+" ")])])])])}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"guoji"==t.iniTab,expression:"iniTab=='guoji'"}],staticClass:"news-content",class:t.iniTab},[a("ul",t._l(t.newList.guoji,function(i,e){return a("li",{staticClass:"news-item",on:{click:function(e){t.goToContent(i.url)}}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.thumbnail_pic_s,expression:"item.thumbnail_pic_s"}]})]),t._v(" "),a("div",{staticClass:"right"},[a("h1",[t._v(" "+t._s(i.title)+" ")]),t._v(" "),a("p",[a("em",[t._v(" "+t._s(i.date)+" ")]),t._v(" "),a("em",[t._v(" "+t._s(i.author_name)+" ")])])])])}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"yule"==t.iniTab,expression:"iniTab=='yule'"}],staticClass:"news-content",class:t.iniTab},[a("ul",t._l(t.newList.yule,function(i,e){return a("li",{staticClass:"news-item",on:{click:function(e){t.goToContent(i.url)}}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.thumbnail_pic_s,expression:"item.thumbnail_pic_s"}]})]),t._v(" "),a("div",{staticClass:"right"},[a("h1",[t._v(" "+t._s(i.title)+" ")]),t._v(" "),a("p",[a("em",[t._v(" "+t._s(i.date)+" ")]),t._v(" "),a("em",[t._v(" "+t._s(i.author_name)+" ")])])])])}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"tiyu"==t.iniTab,expression:"iniTab=='tiyu'"}],staticClass:"news-content",class:t.iniTab},[a("ul",t._l(t.newList.tiyu,function(i,e){return a("li",{staticClass:"news-item",on:{click:function(e){t.goToContent(i.url)}}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.thumbnail_pic_s,expression:"item.thumbnail_pic_s"}]})]),t._v(" "),a("div",{staticClass:"right"},[a("h1",[t._v(" "+t._s(i.title)+" ")]),t._v(" "),a("p",[a("em",[t._v(" "+t._s(i.date)+" ")]),t._v(" "),a("em",[t._v(" "+t._s(i.author_name)+" ")])])])])}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"junshi"==t.iniTab,expression:"iniTab=='junshi'"}],staticClass:"news-content",class:t.iniTab},[a("ul",t._l(t.newList.junshi,function(i,e){return a("li",{staticClass:"news-item",on:{click:function(e){t.goToContent(i.url)}}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.thumbnail_pic_s,expression:"item.thumbnail_pic_s"}]})]),t._v(" "),a("div",{staticClass:"right"},[a("h1",[t._v(" "+t._s(i.title)+" ")]),t._v(" "),a("p",[a("em",[t._v(" "+t._s(i.date)+" ")]),t._v(" "),a("em",[t._v(" "+t._s(i.author_name)+" ")])])])])}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"keji"==t.iniTab,expression:"iniTab=='keji'"}],staticClass:"news-content",class:t.iniTab},[a("ul",t._l(t.newList.keji,function(i,e){return a("li",{staticClass:"news-item",on:{click:function(e){t.goToContent(i.url)}}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.thumbnail_pic_s,expression:"item.thumbnail_pic_s"}]})]),t._v(" "),a("div",{staticClass:"right"},[a("h1",[t._v(" "+t._s(i.title)+" ")]),t._v(" "),a("p",[a("em",[t._v(" "+t._s(i.date)+" ")]),t._v(" "),a("em",[t._v(" "+t._s(i.author_name)+" ")])])])])}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"caijing"==t.iniTab,expression:"iniTab=='caijing'"}],staticClass:"news-content",class:t.iniTab},[a("ul",t._l(t.newList.caijing,function(i,e){return a("li",{staticClass:"news-item",on:{click:function(e){t.goToContent(i.url)}}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.thumbnail_pic_s,expression:"item.thumbnail_pic_s"}]})]),t._v(" "),a("div",{staticClass:"right"},[a("h1",[t._v(" "+t._s(i.title)+" ")]),t._v(" "),a("p",[a("em",[t._v(" "+t._s(i.date)+" ")]),t._v(" "),a("em",[t._v(" "+t._s(i.author_name)+" ")])])])])}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"shishang"==t.iniTab,expression:"iniTab=='shishang'"}],staticClass:"news-content",class:t.iniTab},[a("ul",t._l(t.newList.shishang,function(i,e){return a("li",{staticClass:"news-item",on:{click:function(e){t.goToContent(i.url)}}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.thumbnail_pic_s,expression:"item.thumbnail_pic_s"}]})]),t._v(" "),a("div",{staticClass:"right"},[a("h1",[t._v(" "+t._s(i.title)+" ")]),t._v(" "),a("p",[a("em",[t._v(" "+t._s(i.date)+" ")]),t._v(" "),a("em",[t._v(" "+t._s(i.author_name)+" ")])])])])}))]),t._v(" "),a("mu-back-top",{attrs:{duration:100}}),t._v(" "),t.loadingShow?a("div",{staticClass:"loading"}):t._e(),t._v(" "),t.noneShow?a("div",{staticClass:"none"},[a("img",{attrs:{src:e("f/bL")}}),t._v(" "),a("p",[t._v("-暂无数据-")])]):t._e()],1)},s=[],n={render:a,staticRenderFns:s};i.a=n},KpxS:function(t,i){},LjRN:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("v-header",{attrs:{title:t.title,leftShow:!0,rightShow:!0},nativeOn:{click:function(i){t.goBack(i)}}}),t._v(" "),e("iframe",{attrs:{frameborder:"0",id:"iframe",scrolling:"auto",src:t.url,height:t.screenHeight}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.loadingShow,expression:"loadingShow"}],staticClass:"loading"})],1)},s=[],n={render:a,staticRenderFns:s};i.a=n},M93x:function(t,i,e){"use strict";function a(t){e("pI4Q")}var s=e("xJD8"),n=e("EDLI"),o=e("VU/8"),l=a,c=o(s.a,n.a,!1,l,null,null);i.a=c.exports},McrU:function(t,i,e){"use strict";var a=e("Cz8s"),s=e("YaEn");i.a={data:function(){return{title:"新闻内容",url:"",loadingShow:!0,screenHeight:""}},components:{"v-header":a.a},methods:{goBack:function(){s.a.push({name:"index"})}},activated:function(){var t=this;this.url=this.$route.params.url,this.screenHeight=window.screen.height;var i=document.getElementById("iframe");i.attachEvent?i.attachEvent("onload",function(){t.loadingShow=!1,console.log("ok"),document.getElementById("iframe").getElementById("redP").style.display="none"}):i.onload=function(){t.loadingShow=!1,console.log("ok"),document.getElementById("iframe").getElementById("redP").style.display="none"}}}},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("7+uW"),s=e("M93x"),n=e("YaEn"),o=e("cTzj"),l=e.n(o),c=e("u64Q"),r=e.n(c),u=e("E51W"),v=(e.n(u),e("VrJe"));e.n(v);a.default.use(r.a),a.default.config.productionTip=!1,a.default.use(l.a,{preLoad:1.3,error:e("7Urw"),loading:e("wOw2"),attempt:1,listenEvents:["scroll"]}),new a.default({el:"#app",router:n.a,template:"<App/>",components:{App:s.a}})},Q5tt:function(t,i){},VrJe:function(t,i){},YaEn:function(t,i,e){"use strict";var a=e("7+uW"),s=e("/ocq"),n=e("8hXn"),o=e("Aou8");a.default.use(s.a),i.a=new s.a({mode:"history",routes:[{path:"/",name:"index",component:n.a},{path:"/views/content",name:"content",component:o.a}]})},"f/bL":function(t,i,e){t.exports=e.p+"static/img/none.e2580c7.png"},n5Qe:function(t,i,e){"use strict";function a(t){return n.a.get("api/toutiao/index?type="+t+"&key="+o.a)}i.a=a;var s=e("mtWM"),n=e.n(s),o=e("vnjs")},pI4Q:function(t,i){},vnjs:function(t,i,e){"use strict";e.d(i,"a",function(){return a});var a="7bd17038176c590f3fecd6b6db45b58a"},wOw2:function(t,i,e){t.exports=e.p+"static/img/loading.c626991.gif"},wqBJ:function(t,i,e){"use strict";i.a={props:{title:String,leftShow:Boolean,rightShow:Boolean},data:function(){return{}}}},xJD8:function(t,i,e){"use strict";i.a={}}},["NHnr"]);
//# sourceMappingURL=app.3f3947e2a5949e04bb5e.js.map