(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],d=0,b=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"08b2aedc","chunk-1eff362f":"0635ea8b","chunk-27feb71e":"c82726d5","chunk-3fa8184f":"805aef78","chunk-613b3bd8":"e8342b0e","chunk-80f5796a":"3b67b082","chunk-dcb33b8e":"7d4993c2","chunk-fe5edc06":"a5d7f533","chunk-56106876":"d872bd5f","chunk-24a801f8":"352b884b","chunk-dbd1a838":"47851754"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1eff362f":1,"chunk-27feb71e":1,"chunk-3fa8184f":1,"chunk-613b3bd8":1,"chunk-80f5796a":1,"chunk-dcb33b8e":1,"chunk-fe5edc06":1,"chunk-56106876":1,"chunk-24a801f8":1,"chunk-dbd1a838":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-1eff362f":"10ea9e8e","chunk-27feb71e":"9b73495d","chunk-3fa8184f":"17049492","chunk-613b3bd8":"3c820419","chunk-80f5796a":"14f66d85","chunk-dcb33b8e":"139d32ed","chunk-fe5edc06":"10b01c06","chunk-56106876":"f05c3561","chunk-24a801f8":"ea15288e","chunk-dbd1a838":"de4d410b"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===a))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){l=b[u],d=l.getAttribute("data-href");if(d===r||d===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],s.parentNode.removeChild(s),n(o)},s.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var b=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",b.name="ChunkLoadError",b.type=r,b.request=c,n[1](b)}a[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/pamphlet/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var s=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fb6":function(e,t,n){"use strict";n("b47d")},3162:function(e,t,n){},"45e6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e792");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},a=[],o={name:"App",components:{},data:function(){return{data:500,position:{scrollTop:0,scrollLeft:0}}},created:function(){},methods:{onScroll:function(e,t){console.log(t),console.log(e),this.position=t}},destroyed:function(){},mounted:function(){},watch:{}},u=o,i=(n("c738"),n("2877")),l=Object(i["a"])(u,c,a,!1,null,"409fb193",null),d=l.exports,b=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",{style:{padding:this.paddingVal,backgroundColor:this.backColor},attrs:{"ma-0":"","pa-0":""}},[n("Header",{directives:[{name:"show",rawName:"v-show",value:this.headerShow,expression:"this.headerShow"}],attrs:{mainColor:e.headerColor},on:{"change-page":e.changePage}}),n(e.view,{tag:"component",staticStyle:{"padding-top":"0","padding-left":"0"},on:{"change-page":e.changePage}})],1)},h=[],f={name:"Pamphlet",components:{Header:function(){return n.e("chunk-1eff362f").then(n.bind(null,"0418"))},Main:function(){return Promise.all([n.e("chunk-27feb71e"),n.e("chunk-dcb33b8e")]).then(n.bind(null,"2614"))},Service:function(){return Promise.all([n.e("chunk-27feb71e"),n.e("chunk-3fa8184f")]).then(n.bind(null,"1ad4"))},Product:function(){return Promise.all([n.e("chunk-27feb71e"),n.e("chunk-80f5796a")]).then(n.bind(null,"be6f"))},Question:function(){return Promise.all([n.e("chunk-27feb71e"),n.e("chunk-613b3bd8")]).then(n.bind(null,"1f97"))},RoadMap:function(){return n.e("chunk-fe5edc06").then(n.bind(null,"5b45"))}},created:function(){},data:function(){return{view:"Main",headerColor:"#8DBDE5",headerShow:"true",paddingVal:"64px 0px 0px",backColor:"#8DBDE5"}},methods:{changePage:function(e){console.log("??"+e),console.log("??"+this.headerColor),"Service"==e?(this.headerColor="#999999",this.backColor="#AFD6F7"):"Main"==e||"Question"==e?(this.headerColor="#8DBDE5",this.backColor="#8DBDE5"):"Product"==e&&(this.headerColor="#999999",this.backColor="#FFFFFF"),"RoadMap"==e?(this.headerShow=!1,this.paddingVal="0px"):(this.headerShow=!0,this.paddingVal="64px 0px 0px"),console.log("??"+this.headerColor),this.view=e}}},v=f,p=(n("0fb6"),n("6544")),m=n.n(p),g=n("f6c4"),k=Object(i["a"])(v,s,h,!1,null,"3feccbb1",null),A=k.exports;m()(k,{VMain:g["a"]});var y=n("fb93");r["default"].use(b["a"]);var w=[{path:"/",name:"Pamphlet",component:A},{path:"/Policy",name:"Policy",component:y["default"]},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],C=new b["a"]({mode:"history",base:"/pamphlet/",routes:w}),O=C,N=n("2f62");r["default"].use(N["a"]);var I=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=n("f309");r["default"].use(S["a"]);var _=new S["a"]({}),E=n("c56d");r["default"].use(E["a"]),r["default"].config.productionTip=!1,new r["default"]({router:O,store:I,vuetify:_,render:function(e){return e(d)}}).$mount("#app")},"5a0e":function(e,t,n){"use strict";n("3162")},"9cea":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAbCAYAAADVq2dMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJEN0M5NUM1NDk3ODExRUJCNkNERUE5NzQ2OUUyMzc3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJEN0M5NUM2NDk3ODExRUJCNkNERUE5NzQ2OUUyMzc3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkQ3Qzk1QzM0OTc4MTFFQkI2Q0RFQTk3NDY5RTIzNzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkQ3Qzk1QzQ0OTc4MTFFQkI2Q0RFQTk3NDY5RTIzNzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ogDuIAAACkklEQVR42tRYzXGzMBA1HjegFuQS8OW742tupgRSginBlBBKgFuu4Z5L1AIt0MKnzTxlNjuSkG2Ik53RQGT97Nt9+0M2mz8q/57Oiga9Z3zSPl7sUHeeX7+/NuYKZQr7yO3QmJowenvOGNhzsY8z/ix37Dc66LSAkUgpk6D8acZoF7tmsM9nD5icvWsOwmDwBcMNIIYEANyScwb5sOuPMe9+gbCLJiB3IAY7d1yBy4UAQFZuQB/SgWhVsTXkqc7OH+j3KAiPm8xKMSkBfFMO1Kmt0nR/5ygDYI3vwO0DEkvB3puQde18L6hZzNKJZQYnlbXGhINGeRmymYKVcgwFGjYBKukr48fElA+BaFmGIoUuTIFUS+uQ2z2ilnDtVriQLHO8Ix5MDAD4zj06l9JPIn6SPOGAHOB6XoRccJH0UNgVptFHuYD07JwzBTD4L6n3wu52+9JACKuN7FDOJxXifYI0sLCjUofU3uO+HCA5gAHG3fyK7ATjlIJWBar3G+JQi+AvY2dm1grdQu2GT4hi+1ADh5pRBQKc6Nra/a1n7xvLWvVOFLilRZOyvljBXI3CpkUDmBpfXzHxvCKQJGVk/F0rOwTMEOvbRZZSIiONmwfLLqFRK2YaOoP2oU9o/vQtlGSdgfZ5LAtcdubVOlGoCy0jACpkoEVoyphRbz2X5QKAC0Cq5HuMA2KJW+UERWMWvVcmtEbjHJ0qsWkfCM7PFCjSXYVLQkXO3NAvjTJj4c4oCG6xNiG7tAxEHslAU6x1WCWw55QKgJ5+KCH1uPfzUyFLCOo68n0gP/ajwb2WZIG68OGxsGEBpUAhJdYcHlE3skiB61K+qljwldf8v2l1EKLgFczq3/obeGdIKXRryn8BBgD9KSFAt26jBQAAAABJRU5ErkJggg=="},b47d:function(e,t,n){},c738:function(e,t,n){"use strict";n("45e6")},fb93:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v(" 개인정보 보호정책 약관 "),r("v-spacer"),r("v-btn",{attrs:{color:"primary",icon:""},on:{click:function(t){return e.checkAgree("Close")}}},[r("v-icon",[e._v("mdi-close-circle")])],1)],1),r("v-divider"),r("v-card-text",[r("v-card-subtitle",[e._v(" ■ 개인정보의 수집 및 이용 목적"),r("br"),e._v(" (주)UBCn은 개인정보를 다음과 같은 목적을 위해 활용합니다."),r("br"),e._v(" - 마케팅 및 광고에 활용 : 신규 서비스(제품) 개발 및 특화, 자사 빙고제품 서비스 안내"),r("br"),e._v(" - 고객 관리 : 고객 서비스 이용에 따른 본인 확인, 개인 식별, 문의사항 처리, 추후 고지사항의 전달."),r("br")]),r("v-card-subtitle",[e._v(" ■ 수집하는 개인정보 항목"),r("br"),e._v(" (주)UBCn은 정보주체가 고개서비스(상담신청, 상담, 서비스 신청 등)를 이용하기 위하여 고객의 개인 정보를 제공할 때의 서비스 제공을 위한 필수 정보와, 보다 향상된 서비스 제공을 위한 선택정보를 온라인상 입력방법을 통하여 수집하고 있습니다. "),r("br"),e._v(" 수집하는 개인정보의 범위는 아래와 같습니다."),r("br"),e._v(" - 개인정보 수집항목 : 이름, 회사명, 전화번호, 이메일"),r("br")]),r("v-card-subtitle",[e._v(" ■ 개인정보 수집방법"),r("br"),e._v(" - 정보주체는 웹사이트 또는 서면 절차를 통하여 개인정보처리방침과 이용약관 각각의 내용을 확인하고 ‘동의’ 또는 ‘동의하지 않는다’ 문구를 선택 할 수 있습니다. 정보 주체가 ‘동의’ 문구를 선택한 경우에는 개인정보 수집에 동의한 것으로 봅니다."),r("br")]),r("v-card-subtitle",[e._v(" ■ 동의를 거부할 권리 및 거부 시 불이익"),r("br"),e._v(" 위 개인정보 중 필수적 정보의 수집/이용에 관한 동의는 계약의 체결 및 이행을 위하여 필수적이므로, 위 사항에 동의하셔야만 서비스의 제공이 가능합니다. "),r("br"),e._v(" 위 개인정보 중 선택적 정보의 수집/이용에 관한 동의는 거부하실 수 있으며, 다만 동의하지 않으시는 경우 회원제 서비스의 이용에 대한 안내가 제한됩니다."),r("br")]),r("v-card-subtitle",[e._v(" ■ 개인정보의 보유 및 이용기간"),r("br"),e._v(" 회사는 법령에 따른 개인정보 보유 이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용 기간 내에 한하여 개인정보를 보유 및 처리합니다."),r("br"),e._v(" 제공된 개인 정보 폐기를 요청하거나 개인정보의 수집 및 이용에 대한 동의를 철회하는 경우, 수집 및 이용목적이 달성되거나 보유 및 이용기간이 종료한 경우 해당 개인정보를 지체 없이 파기합니다."),r("br"),e._v(" 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다."),r("br"),e._v(" 가. 회사 내부 방침에 의한 정보보유 사유"),r("br"),e._v(" - 내 용 : 상담 관련 정보"),r("br"),e._v(" - 보존이유 : 고객에게 원활한 상담 서비스 제공"),r("br"),e._v(" - 보존기간 : 폐기 요청 시 까지"),r("br")]),r("v-card-subtitle",[e._v(" ■ 개인정보의 파기절차 및 방법"),r("br"),e._v(" 회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다."),r("br"),e._v(" 파기절차"),r("br"),e._v(" 회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어 집니다. "),r("br"),e._v(" 별도 이메일로 수신받은 개인정보는 법률에 의한 경우가 아니고서는 보유 되어지는 이외의 다른 목적으로 이용되지 않습니다."),r("br"),e._v(" 파기방법"),r("br"),e._v(" - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다."),r("br"),e._v(" - 이메일 내역에 대한 삭제."),r("br")]),r("v-card-subtitle",[e._v(" ■ 개인정보의 공유 및 제공"),r("br"),e._v(" 회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다."),r("br"),e._v(" 고객으로부터 수속 서비스 대행을 의뢰 받은 경우"),r("br"),e._v(" 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우"),r("br")]),r("v-card-subtitle",[e._v(" ■ 이용자 및 법정대리인의 권리와 그 행사방법"),r("br"),e._v(" 이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 내역 삭제를 요청할 수도 있습니다."),r("br"),e._v(" 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다."),r("br"),e._v(" 회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 “회사가 수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다."),r("br")])],1),r("v-card-text",[r("v-card-title",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",icon:"",dark:""},on:{click:function(t){return e.checkAgree("Agree")}}},[r("v-img",{attrs:{src:n("9cea"),contain:""}})],1)],1)],1)],1)},c=[],a={name:"Policy",data:function(){return{dialog:!0}},methods:{checkAgree:function(e){this.$emit("check-agree",e,event)}}},o=a,u=(n("5a0e"),n("2877")),i=n("6544"),l=n.n(i),d=n("8336"),b=n("b0af"),s=n("99d9"),h=n("ce7e"),f=n("132d"),v=n("adda"),p=n("2fa4"),m=Object(u["a"])(o,r,c,!1,null,null,null);t["default"]=m.exports;l()(m,{VBtn:d["a"],VCard:b["a"],VCardSubtitle:s["a"],VCardText:s["b"],VCardTitle:s["c"],VDivider:h["a"],VIcon:f["a"],VImg:v["a"],VSpacer:p["a"]})}});
//# sourceMappingURL=app.1937be0d.js.map