(function(t){function e(e){for(var i,r,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={index:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("44eb")},"162a":function(t,e,n){},"1f29":function(t,e,n){},"2eb9":function(t,e,n){t.exports=n.p+"../img/u10.b27719ae.png"},"3b6a":function(t,e,n){},"44eb":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("router-view")],1)},o=[],r={},s=r,c=n("2877"),l=Object(c["a"])(s,a,o,!1,null,null,null),u=l.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{style:{width:t.screenWidth+"px",height:t.screenWidth/1280*813+"px"},attrs:{id:"container1"}},[n("HomeHead"),n("HomePage1")],1),n("div",{style:{width:t.screenWidth+"px",height:t.screenWidth/1935*1023+"px",top:-t.screenWidth/1935*120+"px"},attrs:{id:"container2"}},[n("HomePage2"),n("HomePage3")],1),n("div",{style:{width:t.screenWidth+"px",height:t.screenWidth/1929*1602+"px"},attrs:{id:"container3"}},[n("HomePage4")],1),n("div",{style:{width:t.screenWidth+"px",height:t.screenWidth/2560*818+"px"},attrs:{id:"container4"}},[n("fixedBottom")],1)])},h=[],m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"head"}},[i("img",{attrs:{src:n("a6f4"),id:"head-img"}}),t._m(0),i("scroll-to",{staticClass:"head-text",attrs:{target:"#container2"}},[i("a",{attrs:{id:"home-b"}},[t._v("简介")])])],1)])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-text"},[n("a",{attrs:{id:"home-a"}},[t._v("首页")])])}],v={name:"HomeHead",data:function(){return{homeColor:"#367EFE",introColor:"#05286C",index:0}},methods:{click:function(t){this.index=t},toIntro:function(){window.location.hash="#container2",this.$refs.intro.style.color="#367EFE",this.$refs.home.style.color="#05286C"},toHome:function(){this.$refs.home.style.color="#367EFE",this.$refs.intro.style.color="#05286C"},enter:function(t){"1"==t?(this.homeColor="#367EFE",this.introColor="#05286C"):(this.introColor="#367EFE",this.homeColor="#05286C")},leave:function(t){"1"==t?(this.introColor="#367EFE",this.homeColor="#05286C"):(this.homeColor="#367EFE",this.introColor="#05286C")}},created:function(){}},x=v,g=(n("c575"),Object(c["a"])(x,m,p,!1,null,"5c2f6579",null)),w=g.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page1"}},[n("p",{staticClass:"page1-text"},[t._v("创意 | 灵感 | 联想")]),n("p",{staticClass:"page1-text"},[t._v("您的中文广告词灵感库")]),n("a",{attrs:{href:"/page1.html"}},[n("button",{staticClass:"start-button"},[t._v("开始")])])])}],C={name:"HomePage1",methods:{}},E=C,y=(n("5971"),Object(c["a"])(E,b,_,!1,null,"61deae84",null)),S=y.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"page2"}},[i("div",{staticClass:"page-text"},[i("div",{attrs:{id:"text-item"}},[i("p",{staticClass:"text-head"},[t._v("点子·创意广告词")]),i("p",{staticClass:"text-title"},[t._v("广告语联想")]),i("p",{staticClass:"text-content"},[t._v("根据您的需求关键词，提供中文广告语灵感")]),i("p",{staticClass:"text-content"},[t._v("为设计师，店家，团队宣传等所有有文案创意需求的团体或个人解决知识储备量问题，释放大脑cpu")])])]),i("div",{staticClass:"page-img"},[i("div",{attrs:{id:"img-item"}},[i("img",{attrs:{src:n("2eb9"),width:"100%"}})])])])}],W={name:"HomePage2"},j=W,H=(n("eb4d"),Object(c["a"])(j,$,O,!1,null,"21ed14b9",null)),P=H.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"page3"}},[i("div",{staticClass:"page-img"},[i("div",{attrs:{id:"img-item"}},[i("img",{attrs:{src:n("f06f"),width:"100%"}})])]),i("div",{staticClass:"page-text"},[i("div",{attrs:{id:"text-item"}},[i("p",{staticClass:"text-head"},[t._v("点子·创意广告词")]),i("p",{staticClass:"text-title"},[t._v("数据库支持")]),i("p",{staticClass:"text-content"},[t._v("依托丰富强大的数据库。进行广告语、口号素材联想")]),i("p",{staticClass:"text-content"},[t._v("无论是成语、诗词，异或俗语、流行语，都有机会成为您的店名、口号或广告词")])])])])}],U={name:"HomePage3"},B=U,M=(n("c807"),Object(c["a"])(B,k,F,!1,null,"efcecbb6",null)),T=M.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"page4"}},[i("div",{attrs:{id:"page-text"}},[i("div",{attrs:{id:"text-item"}},[i("p",{staticClass:"text-head"},[t._v("点子·创意广告词")]),i("p",{staticClass:"text-title"},[t._v("操作方便")]),i("li",{staticClass:"text-content text-li"},[t._v("用户输入关键词")]),i("li",{staticClass:"text-content text-li"},[t._v("数据库查询")]),i("li",{staticClass:"text-content text-li"},[t._v("系统自动提供联想点子，并择优排序")])])]),i("div",{attrs:{id:"page-img"}},[i("div",{attrs:{id:"img-item"}},[i("img",{attrs:{src:n("954f"),width:"100%"}})])])]),i("div",{attrs:{id:"page4-bottom"}},[i("div",{attrs:{id:"between-img"}},[i("img",{attrs:{src:n("5bb2"),width:"50%"}})]),i("div",{attrs:{id:"button-box"}},[i("a",{attrs:{href:"/page1.html"}},[i("button",{staticClass:"start-button"},[t._v("开始")])])])])])}],N={name:"HomePage4"},I=N,q=(n("e9c4"),Object(c["a"])(I,z,J,!1,null,"ff713bbc",null)),A=q.exports,D=n("9728"),G={components:{HomeHead:w,HomePage1:S,HomePage2:P,HomePage3:T,HomePage4:A,fixedBottom:D["a"]},data:function(){return{screenWidth:document.documentElement.clientWidth}},beforeCreate:function(){var t=this;t.screenWidth<780&&(t.screenWidth=780)},created:function(){},mounted:function(){var t=this;window.onresize=function(){return function(){window.screenWidth=document.documentElement.clientWidth,window.screenWidth>=1280&&(t.screenWidth=window.screenWidth)}()};var e="\n      html{\n      font-size: ".concat(t.screenWidth/80,"px;\n      }\n      ");document.write("<style>".concat(e,"</style>"))},watch:{screenWidth:function(t){if(!this.timer){this.screenWidth=t,this.timer=!0;var e=this;setTimeout((function(){e.timer=!1}),400)}}}},K=G,L=(n("937c"),Object(c["a"])(K,f,h,!1,null,null,null)),Q=L.exports;i["default"].use(d["a"]);var R=new d["a"]({routes:[{path:"/",name:"home",component:Q}]}),V=n("fe3f"),X=n.n(V);n("a48e");i["default"].use(X.a),i["default"].config.productionTip=!1,new i["default"]({router:R,render:function(t){return t(u)}}).$mount("#app")},"473d":function(t,e,n){},5971:function(t,e,n){"use strict";var i=n("f271"),a=n.n(i);a.a},"5bb2":function(t,e,n){t.exports=n.p+"../img/u18.8e4e9be3.png"},"61c4":function(t,e,n){"use strict";var i=n("3b6a"),a=n.n(i);a.a},"6af6":function(t,e,n){},"743f":function(t,e,n){},"81d8":function(t,e,n){},8565:function(t,e,n){"use strict";var i=n("1f29"),a=n.n(i);a.a},"870a":function(t,e,n){t.exports=n.p+"../img/u24.b4be39a6.png"},"937c":function(t,e,n){"use strict";var i=n("743f"),a=n.n(i);a.a},"954f":function(t,e,n){t.exports=n.p+"../img/u19.9d994a4c.png"},9728:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"fixedBottom"}},[i("img",{attrs:{src:n("870a"),id:"bottom-bg",width:"100%"}}),i("ContactUs"),i("div",{attrs:{id:"statement"}},[t._v("点子·创意广告词灵感站 版权所有")])],1)},a=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bottom-text"}},[n("p",[t._v("点子·创意广告词灵感站 版权所有")])])}],s={name:"bottom"},c=s,l=(n("61c4"),n("2877")),u=Object(l["a"])(c,o,r,!1,null,"57d516e7",null),d=(u.exports,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"contactUs-box"}},[i("div",{attrs:{id:"part2"}},[t._m(0),i("div",{staticClass:"icon-box"},[i("div",{attrs:{id:"wechat"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.wechatShow,expression:"wechatShow"}],attrs:{src:n("9861"),width:"100%"}})]),i("div",{staticClass:"contactUs-icon",attrs:{id:"icon1"},on:{mouseenter:function(e){t.wechatShow=!0},mouseleave:function(e){t.wechatShow=!1},click:function(e){t.wechatShow=!t.wechatShow}}})]),i("div",{staticClass:"icon-box"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.mailShow,expression:"mailShow"}],attrs:{id:"mail"}},[i("p",{attrs:{id:"mail-text"}},[t._v("idea_dianzi@163.com")])]),i("div",{staticClass:"contactUs-icon",attrs:{id:"icon3"},on:{mouseenter:function(e){t.mailShow=!0},mouseleave:function(e){t.mailShow=!1},click:function(e){t.mailShow=!t.mailShow}}})])])])}),f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-box"},[n("div",{staticClass:"contactUs-icon",attrs:{id:"icon2",onclick:"window.open('https://weibo.com/u/7297692180')"}})])}],h={name:"ContactUs",data:function(){return{wechatShow:!1,mailShow:!1}},methods:{enter:function(t){"1"==t?this.wechatShow=!0:this.mailShow=!0},leave:function(t){"1"==t?this.wechatShow=!1:this.mailShow=!1}}},m=h,p=(n("a88e"),Object(l["a"])(m,d,f,!1,null,"7b28f5f4",null)),v=p.exports,x={name:"fixedBottom",components:{ContactUs:v}},g=x,w=(n("8565"),Object(l["a"])(g,i,a,!1,null,"13a2e804",null));e["a"]=w.exports},9861:function(t,e,n){t.exports=n.p+"../img/u29.17495743.jpg"},"9c10":function(t,e,n){},a6f4:function(t,e,n){t.exports=n.p+"../img/u2.69d8f14f.png"},a88e:function(t,e,n){"use strict";var i=n("162a"),a=n.n(i);a.a},c575:function(t,e,n){"use strict";var i=n("473d"),a=n.n(i);a.a},c807:function(t,e,n){"use strict";var i=n("9c10"),a=n.n(i);a.a},e9c4:function(t,e,n){"use strict";var i=n("81d8"),a=n.n(i);a.a},eb4d:function(t,e,n){"use strict";var i=n("6af6"),a=n.n(i);a.a},f06f:function(t,e,n){t.exports=n.p+"../img/u13.b4280abf.png"},f271:function(t,e,n){}});
//# sourceMappingURL=index.45407bf1.js.map