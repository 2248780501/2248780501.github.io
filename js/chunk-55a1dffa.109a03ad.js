(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55a1dffa"],{"07fa":function(e,t,c){"use strict";c("c177")},"0eb2":function(e,t,c){},"1eb1":function(e,t,c){"use strict";c("f5b8")},3191:function(e,t,c){"use strict";c.d(t,"b",(function(){return r})),c.d(t,"a",(function(){return o})),c.d(t,"e",(function(){return a})),c.d(t,"d",(function(){return i})),c.d(t,"c",(function(){return s})),c.d(t,"f",(function(){return l}));var n=c("b775"),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6;return Object(n["b"])("/home/brand","get",{limit:e})},o=function(){return Object(n["b"])("/home/banner","get")},a=function(){return Object(n["b"])("/home/new","get")},i=function(){return Object(n["b"])("/home/hot","get")},s=function(){return Object(n["b"])("/home/goods","get")},l=function(){return Object(n["b"])("/home/special","get")}},"4d4c":function(e,t,c){"use strict";c("a7bc")},"5a0c":function(e,t,c){!function(t,c){e.exports=c()}(0,(function(){"use strict";var e="millisecond",t="second",c="minute",n="hour",r="day",o="week",a="month",i="quarter",s="year",l="date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},O=function(e,t,c){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(c)+e},j={s:O,z:function(e){var t=-e.utcOffset(),c=Math.abs(t),n=Math.floor(c/60),r=c%60;return(t<=0?"+":"-")+O(n,2,"0")+":"+O(r,2,"0")},m:function e(t,c){if(t.date()<c.date())return-e(c,t);var n=12*(c.year()-t.year())+(c.month()-t.month()),r=t.clone().add(n,a),o=c-r<0,i=t.clone().add(n+(o?-1:1),a);return+(-(n+(c-r)/(o?r-i:i-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return{M:a,y:s,w:o,d:r,D:l,h:n,m:c,s:t,ms:e,Q:i}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},p="en",f={};f[p]=b;var m=function(e){return e instanceof k},h=function(e,t,c){var n;if(!e)return p;if("string"==typeof e)f[e]&&(n=e),t&&(f[e]=t,n=e);else{var r=e.name;f[r]=e,n=r}return!c&&n&&(p=n),n||!c&&p},v=function(e,t){if(m(e))return e.clone();var c="object"==typeof t?t:{};return c.date=e,c.args=arguments,new k(c)},g=j;g.l=h,g.i=m,g.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function b(e){this.$L=h(e.locale,null,!0),this.parse(e)}var O=b.prototype;return O.parse=function(e){this.$d=function(e){var t=e.date,c=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(u);if(n){var r=n[2]-1||0,o=(n[7]||"0").substring(0,3);return c?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},O.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},O.$utils=function(){return g},O.isValid=function(){return!("Invalid Date"===this.$d.toString())},O.isSame=function(e,t){var c=v(e);return this.startOf(t)<=c&&c<=this.endOf(t)},O.isAfter=function(e,t){return v(e)<this.startOf(t)},O.isBefore=function(e,t){return this.endOf(t)<v(e)},O.$g=function(e,t,c){return g.u(e)?this[t]:this.set(c,e)},O.unix=function(){return Math.floor(this.valueOf()/1e3)},O.valueOf=function(){return this.$d.getTime()},O.startOf=function(e,i){var u=this,d=!!g.u(i)||i,b=g.p(e),O=function(e,t){var c=g.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return d?c:c.endOf(r)},j=function(e,t){return g.w(u.toDate()[e].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},p=this.$W,f=this.$M,m=this.$D,h="set"+(this.$u?"UTC":"");switch(b){case s:return d?O(1,0):O(31,11);case a:return d?O(1,f):O(0,f+1);case o:var v=this.$locale().weekStart||0,k=(p<v?p+7:p)-v;return O(d?m-k:m+(6-k),f);case r:case l:return j(h+"Hours",0);case n:return j(h+"Minutes",1);case c:return j(h+"Seconds",2);case t:return j(h+"Milliseconds",3);default:return this.clone()}},O.endOf=function(e){return this.startOf(e,!1)},O.$set=function(o,i){var u,d=g.p(o),b="set"+(this.$u?"UTC":""),O=(u={},u[r]=b+"Date",u[l]=b+"Date",u[a]=b+"Month",u[s]=b+"FullYear",u[n]=b+"Hours",u[c]=b+"Minutes",u[t]=b+"Seconds",u[e]=b+"Milliseconds",u)[d],j=d===r?this.$D+(i-this.$W):i;if(d===a||d===s){var p=this.clone().set(l,1);p.$d[O](j),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else O&&this.$d[O](j);return this.init(),this},O.set=function(e,t){return this.clone().$set(e,t)},O.get=function(e){return this[g.p(e)]()},O.add=function(e,i){var l,u=this;e=Number(e);var d=g.p(i),b=function(t){var c=v(u);return g.w(c.date(c.date()+Math.round(t*e)),u)};if(d===a)return this.set(a,this.$M+e);if(d===s)return this.set(s,this.$y+e);if(d===r)return b(1);if(d===o)return b(7);var O=(l={},l[c]=6e4,l[n]=36e5,l[t]=1e3,l)[d]||1,j=this.$d.getTime()+e*O;return g.w(j,this)},O.subtract=function(e,t){return this.add(-1*e,t)},O.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var c=e||"YYYY-MM-DDTHH:mm:ssZ",n=g.z(this),r=this.$locale(),o=this.$H,a=this.$m,i=this.$M,s=r.weekdays,l=r.months,u=function(e,n,r,o){return e&&(e[n]||e(t,c))||r[n].substr(0,o)},b=function(e){return g.s(o%12||12,e,"0")},O=r.meridiem||function(e,t,c){var n=e<12?"AM":"PM";return c?n.toLowerCase():n},j={YY:String(this.$y).slice(-2),YYYY:this.$y,M:i+1,MM:g.s(i+1,2,"0"),MMM:u(r.monthsShort,i,l,3),MMMM:u(l,i),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,s,2),ddd:u(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:g.s(o,2,"0"),h:b(1),hh:b(2),a:O(o,a,!0),A:O(o,a,!1),m:String(a),mm:g.s(a,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:n};return c.replace(d,(function(e,t){return t||j[e]||n.replace(":","")}))},O.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},O.diff=function(e,l,u){var d,b=g.p(l),O=v(e),j=6e4*(O.utcOffset()-this.utcOffset()),p=this-O,f=g.m(this,O);return f=(d={},d[s]=f/12,d[a]=f,d[i]=f/3,d[o]=(p-j)/6048e5,d[r]=(p-j)/864e5,d[n]=p/36e5,d[c]=p/6e4,d[t]=p/1e3,d)[b]||p,u?f:g.a(f)},O.daysInMonth=function(){return this.endOf(a).$D},O.$locale=function(){return f[this.$L]},O.locale=function(e,t){if(!e)return this.$L;var c=this.clone(),n=h(e,t,!0);return n&&(c.$L=n),c},O.clone=function(){return g.w(this.$d,this)},O.toDate=function(){return new Date(this.valueOf())},O.toJSON=function(){return this.isValid()?this.toISOString():null},O.toISOString=function(){return this.$d.toISOString()},O.toString=function(){return this.$d.toUTCString()},b}(),y=k.prototype;return v.prototype=y,[["$ms",e],["$s",t],["$m",c],["$H",n],["$W",r],["$M",a],["$y",s],["$D",l]].forEach((function(e){y[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),v.extend=function(e,t){return e.$i||(e(t,k,v),e.$i=!0),v},v.locale=h,v.isDayjs=m,v.unix=function(e){return v(1e3*e)},v.en=f[p],v.Ls=f,v.p={},v}))},"685c":function(e,t,c){"use strict";c("6df8")},"6b1b":function(e,t,c){},"6df8":function(e,t,c){},"75e3":function(e,t,c){"use strict";c("9e28")},"7abe":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),r={class:"home-entry"},o={class:"container"};function a(e,t,c,a,i,s){var l=Object(n["resolveComponent"])("HomeCategory"),u=Object(n["resolveComponent"])("HomeBanner"),d=Object(n["resolveComponent"])("HomeNew"),b=Object(n["resolveComponent"])("HomeHot"),O=Object(n["resolveComponent"])("HomeBrand"),j=Object(n["resolveComponent"])("HomeProduct"),p=Object(n["resolveComponent"])("HomeSpecial");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("div",r,[Object(n["createVNode"])("div",o,[Object(n["createVNode"])(l),Object(n["createVNode"])(u)])]),Object(n["createVNode"])(d),Object(n["createVNode"])(b),Object(n["createVNode"])(O),Object(n["createVNode"])(j),Object(n["createVNode"])(p)],64)}c("b0c0");var i=Object(n["withScopeId"])("data-v-1da6ceaa");Object(n["pushScopeId"])("data-v-1da6ceaa");var s={class:"menu"},l={class:"layer"},u=Object(n["createVNode"])("small",null,"根据您的购买或浏览记录推荐",-1),d={key:0},b={class:"info"},O={class:"name ellipsis-2"},j={class:"desc ellipsis"},p={class:"price"},f=Object(n["createVNode"])("i",null,"¥",-1),m={key:1},h={class:"info"},v={class:"place"},g=Object(n["createVNode"])("i",{class:"iconfont icon-dingwei"},null,-1),k={class:"name ellipsis"},y={class:"desc ellipsis-2"};Object(n["popScopeId"])();var N=i((function(e,t,c,r,o,a){var N=Object(n["resolveComponent"])("RouterLink"),V=Object(n["resolveComponent"])("XtxSkeleton");return Object(n["openBlock"])(),Object(n["createBlock"])("div",{class:"home-category",onMouseleave:t[1]||(t[1]=function(e){return r.categoryId=null})},[Object(n["createVNode"])("ul",s,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.menuList,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{class:{active:r.categoryId&&r.categoryId===e.id},key:e.id,onMouseenter:function(t){return r.categoryId=e.id}},[Object(n["createVNode"])(N,{to:"/category/".concat(e.id)},{default:i((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.name),1)]})),_:2},1032,["to"]),e.children?(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],{key:0},Object(n["renderList"])(e.children,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(N,{key:e.id,to:"/category/sub/".concat(e.id)},{default:i((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.name),1)]})),_:2},1032,["to"])})),128)):(Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],{key:1},[Object(n["createVNode"])(V,{height:"18px",width:"60px",bg:"rgba(255,255,255,0.2)",style:{"margin-right":"5px"}}),Object(n["createVNode"])(V,{height:"18px",width:"50px",bg:"rgba(255,255,255,0.2)"})],64))],42,["onMouseenter"])})),128))]),Object(n["createVNode"])("div",l,[Object(n["createVNode"])("h4",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(r.currCategory&&"brand"===r.currCategory.id?"品牌":"分类")+"推荐 ",1),u]),r.currCategory&&r.currCategory.goods?(Object(n["openBlock"])(),Object(n["createBlock"])("ul",d,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.currCategory.goods,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{key:e.id},[Object(n["createVNode"])(N,{to:"/product/".concat(e.id)},{default:i((function(){return[Object(n["createVNode"])("img",{src:e.picture+"?imageView&thumbnail=78x78&quality=95",alt:""},null,8,["src"]),Object(n["createVNode"])("div",b,[Object(n["createVNode"])("p",O,Object(n["toDisplayString"])(e.name),1),Object(n["createVNode"])("p",j,Object(n["toDisplayString"])(e.desc),1),Object(n["createVNode"])("p",p,[f,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.price),1)])])]})),_:2},1032,["to"])])})),128))])):Object(n["createCommentVNode"])("",!0),r.currCategory&&r.currCategory.brands?(Object(n["openBlock"])(),Object(n["createBlock"])("ul",m,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.currCategory.brands,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{class:"brand",key:e.id},[Object(n["createVNode"])(N,{to:"/"},{default:i((function(){return[Object(n["createVNode"])("img",{src:e.picture,alt:""},null,8,["src"]),Object(n["createVNode"])("div",h,[Object(n["createVNode"])("p",v,[g,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.place),1)]),Object(n["createVNode"])("p",k,Object(n["toDisplayString"])(e.name),1),Object(n["createVNode"])("p",y,Object(n["toDisplayString"])(e.desc),1)])]})),_:2},1024)])})),128))])):Object(n["createCommentVNode"])("",!0)])],32)})),V=(c("d81d"),c("fb6a"),c("7db0"),c("5502")),S=c("3191"),B={name:"HomeCategory",setup:function(){var e=Object(V["b"])(),t=Object(n["reactive"])({id:"brand",name:"品牌",children:[{id:"brand-children",name:"品牌推荐"}],brands:[]}),c=Object(n["computed"])((function(){var c=e.state.category.list.map((function(e){return{id:e.id,name:e.name,children:e.children&&e.children.slice(0,2),goods:e.goods}}));return c.push(t),c})),r=Object(n["ref"])(null),o=Object(n["computed"])((function(){return c.value.find((function(e){return e.id===r.value}))}));return Object(S["b"])().then((function(e){t.brands=e.result})),{menuList:c,categoryId:r,currCategory:o}}};c("1eb1");B.render=N,B.__scopeId="data-v-1da6ceaa";var $=B,D=Object(n["withScopeId"])("data-v-a2c6bb04");Object(n["pushScopeId"])("data-v-a2c6bb04");var w={class:"home-banner"};Object(n["popScopeId"])();var _=D((function(e,t,c,r,o,a){var i=Object(n["resolveComponent"])("XtxCarousel");return Object(n["openBlock"])(),Object(n["createBlock"])("div",w,[Object(n["createVNode"])(i,{"auto-play":"",sliders:r.sliders},null,8,["sliders"])])})),H={name:"HomeBanner",setup:function(){var e=Object(n["ref"])([]);return Object(S["a"])().then((function(t){e.value=t.result})),{sliders:e}}};c("e644");H.render=_,H.__scopeId="data-v-a2c6bb04";var C=H,I=Object(n["withScopeId"])("data-v-506615d4");Object(n["pushScopeId"])("data-v-506615d4");var x={class:"home-new"},M={ref:"target",style:{position:"relative",height:"426px"}},L={key:0,class:"goods-list"},T={class:"name ellipsis"},F={class:"price"};Object(n["popScopeId"])();var P=I((function(e,t,c,r,o,a){var i=Object(n["resolveComponent"])("XtxMore"),s=Object(n["resolveComponent"])("RouterLink"),l=Object(n["resolveComponent"])("HomeSkeleton"),u=Object(n["resolveComponent"])("HomePanel");return Object(n["openBlock"])(),Object(n["createBlock"])("div",x,[Object(n["createVNode"])(u,{title:"新鲜好物","sub-title":"新鲜出炉 品质靠谱"},{right:I((function(){return[Object(n["createVNode"])(i,{path:"/"})]})),default:I((function(){return[Object(n["createVNode"])("div",M,[Object(n["createVNode"])(n["Transition"],{name:"fade"},{default:I((function(){return[r.goods.length?(Object(n["openBlock"])(),Object(n["createBlock"])("ul",L,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.goods,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{key:e.id},[Object(n["createVNode"])(s,{to:"/product/".concat(e.id)},{default:I((function(){return[Object(n["createVNode"])("img",{src:e.picture,alt:""},null,8,["src"]),Object(n["createVNode"])("p",T,Object(n["toDisplayString"])(e.name),1),Object(n["createVNode"])("p",F,"¥"+Object(n["toDisplayString"])(e.price),1)]})),_:2},1032,["to"])])})),128))])):(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:1,bg:"#f0f9f4"}))]})),_:1})],512)]})),_:1})])})),Y=Object(n["withScopeId"])("data-v-44aee56e");Object(n["pushScopeId"])("data-v-44aee56e");var W={class:"home-panel"},X={class:"container"},A={class:"head"};Object(n["popScopeId"])();var R=Y((function(e,t,c,r,o,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",W,[Object(n["createVNode"])("div",X,[Object(n["createVNode"])("div",A,[Object(n["createVNode"])("h3",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(c.title),1),Object(n["createVNode"])("small",null,Object(n["toDisplayString"])(c.subTitle),1)]),Object(n["renderSlot"])(e.$slots,"right",{},void 0,!0)]),Object(n["renderSlot"])(e.$slots,"default",{},void 0,!0)])])})),J={name:"HomePanel",props:{title:{type:String,default:""},subTitle:{type:String,default:""}}};c("e9d0");J.render=R,J.__scopeId="data-v-44aee56e";var U=J,z=Object(n["withScopeId"])("data-v-18f25d38");Object(n["pushScopeId"])("data-v-18f25d38");var Z={class:"home-skeleton"};Object(n["popScopeId"])();var G=z((function(e,t,c,r,o,a){var i=Object(n["resolveComponent"])("XtxSkeleton");return Object(n["openBlock"])(),Object(n["createBlock"])("div",Z,[(Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(4,(function(e){return Object(n["createVNode"])("div",{class:"item",key:e,style:{backgroundColor:c.bg}},[Object(n["createVNode"])(i,{bg:"#e4e4e4",width:"306px",height:"306px",animated:""}),Object(n["createVNode"])(i,{bg:"#e4e4e4",width:"160px",height:"24px",animated:""}),Object(n["createVNode"])(i,{bg:"#e4e4e4",width:"120px",height:"24px",animated:""})],4)})),64))])})),q={name:"HomeSkeleton",props:{bg:{type:String,default:"#fff"}}};c("685c");q.render=G,q.__scopeId="data-v-18f25d38";var E=q,Q=c("806c"),K={name:"HomeNew",components:{HomePanel:U,HomeSkeleton:E},setup:function(){var e=Object(Q["a"])(S["e"]),t=e.target,c=e.result;return{goods:c,target:t}}};c("8733");K.render=P,K.__scopeId="data-v-506615d4";var ee=K,te=Object(n["withScopeId"])("data-v-36ec9a90");Object(n["pushScopeId"])("data-v-36ec9a90");var ce={class:"home-hot"},ne={ref:"target",style:{position:"relative",height:"426px"}},re={key:0,class:"goods-list"},oe={class:"name"},ae={class:"desc"};Object(n["popScopeId"])();var ie=te((function(e,t,c,r,o,a){var i=Object(n["resolveComponent"])("RouterLink"),s=Object(n["resolveComponent"])("HomeSkeleton"),l=Object(n["resolveComponent"])("HomePanel");return Object(n["openBlock"])(),Object(n["createBlock"])("div",ce,[Object(n["createVNode"])(l,{title:"人气推荐","sub-title":"人气爆款 不容错过"},{default:te((function(){return[Object(n["createVNode"])("div",ne,[Object(n["createVNode"])(n["Transition"],{name:"fade"},{default:te((function(){return[r.list.length?(Object(n["openBlock"])(),Object(n["createBlock"])("ul",re,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.list,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{key:e.id},[Object(n["createVNode"])(i,{to:"/"},{default:te((function(){return[Object(n["createVNode"])("img",{src:e.picture,alt:""},null,8,["src"]),Object(n["createVNode"])("p",oe,Object(n["toDisplayString"])(e.title),1),Object(n["createVNode"])("p",ae,Object(n["toDisplayString"])(e.alt),1)]})),_:2},1024)])})),128))])):(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:1}))]})),_:1})],512)]})),_:1})])})),se={name:"HomeHot",components:{HomePanel:U,HomeSkeleton:E},setup:function(){var e=Object(Q["a"])(S["d"]),t=e.target,c=e.result;return{list:c,target:t}}};c("75e3");se.render=ie,se.__scopeId="data-v-36ec9a90";var le=se,ue=Object(n["withScopeId"])("data-v-637bd2c8");Object(n["pushScopeId"])("data-v-637bd2c8");var de={ref:"target",class:"box"},be={key:1,class:"skeleton"};Object(n["popScopeId"])();var Oe=ue((function(e,t,c,r,o,a){var i=Object(n["resolveComponent"])("RouterLink"),s=Object(n["resolveComponent"])("XtxSkeleton"),l=Object(n["resolveComponent"])("HomePanel");return Object(n["openBlock"])(),Object(n["createBlock"])(l,{title:"热门品牌","sub-title":"国际经典 品质保证"},{right:ue((function(){return[Object(n["createVNode"])("a",{onClick:t[1]||(t[1]=function(e){return r.toggle(-1)}),class:[{disabled:0===r.index},"iconfont icon-angle-left prev"],href:"javascript:;"},null,2),Object(n["createVNode"])("a",{onClick:t[2]||(t[2]=function(e){return r.toggle(1)}),class:[{disabled:1===r.index},"iconfont icon-angle-right next"],href:"javascript:;"},null,2)]})),default:ue((function(){return[Object(n["createVNode"])("div",de,[Object(n["createVNode"])(n["Transition"],{name:"fade"},{default:ue((function(){return[r.brands.length?(Object(n["openBlock"])(),Object(n["createBlock"])("ul",{key:0,class:"list",style:{transform:"translateX(".concat(1240*-r.index,"px)")}},[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.brands,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{key:e.id},[Object(n["createVNode"])(i,{to:"/"},{default:ue((function(){return[Object(n["createVNode"])("img",{src:e.picture,alt:""},null,8,["src"])]})),_:2},1024)])})),128))],4)):(Object(n["openBlock"])(),Object(n["createBlock"])("div",be,[(Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(5,(function(e){return Object(n["createVNode"])(s,{class:"item",key:e,animated:"",bg:"#e4e4e4",width:"240px",height:"305px"})})),64))]))]})),_:1})],512)]})),_:1})})),je={name:"HomeBrand",components:{HomePanel:U},setup:function(){var e=Object(Q["a"])((function(){return Object(S["b"])(10)})),t=e.target,c=e.result,r=Object(n["ref"])(0),o=function(e){var t=r.value+e;t<0||t>1||(r.value=t)};return{brands:c,toggle:o,index:r,target:t}}};c("4d4c");je.render=Oe,je.__scopeId="data-v-637bd2c8";var pe=je,fe=Object(n["withScopeId"])("data-v-f533d936");Object(n["pushScopeId"])("data-v-f533d936");var me={class:"home-product",ref:"target"},he={class:"sub"},ve={class:"box"},ge={alt:""},ke={class:"label"},ye={class:"goods-list"};Object(n["popScopeId"])();var Ne=fe((function(e,t,c,r,o,a){var i=Object(n["resolveComponent"])("RouterLink"),s=Object(n["resolveComponent"])("XtxMore"),l=Object(n["resolveComponent"])("HomeGoods"),u=Object(n["resolveComponent"])("HomePanel"),d=Object(n["resolveDirective"])("lazy");return Object(n["openBlock"])(),Object(n["createBlock"])("div",me,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.list,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(u,{title:e.name,key:e.id},{right:fe((function(){return[Object(n["createVNode"])("div",he,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.children,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:e.id,to:"/category/sub/".concat(e.id)},{default:fe((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.name),1)]})),_:2},1032,["to"])})),128))]),Object(n["createVNode"])(s,{path:"/category/".concat(e.id)},null,8,["path"])]})),default:fe((function(){return[Object(n["createVNode"])("div",ve,[Object(n["createVNode"])(i,{class:"cover",to:"/category/".concat(e.id)},{default:fe((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("img",ge,null,512),[[d,e.picture]]),Object(n["createVNode"])("strong",ke,[Object(n["createVNode"])("span",null,Object(n["toDisplayString"])(e.name)+"馆",1),Object(n["createVNode"])("span",null,Object(n["toDisplayString"])(e.saleInfo),1)])]})),_:2},1032,["to"]),Object(n["createVNode"])("ul",ye,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.goods,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{key:e.id},[Object(n["createVNode"])(l,{goods:e},null,8,["goods"])])})),128))])])]})),_:2},1032,["title"])})),128))],512)})),Ve=Object(n["withScopeId"])("data-v-5b2da528");Object(n["pushScopeId"])("data-v-5b2da528");var Se={class:"goods-item"},Be={alt:""},$e={class:"name ellipsis-2"},De={class:"desc ellipsis"},we={class:"price"},_e={class:"extra"},He=Object(n["createVNode"])("span",null,"找相似",-1),Ce=Object(n["createVNode"])("span",null,"发现现多宝贝 >",-1);Object(n["popScopeId"])();var Ie=Ve((function(e,t,c,r,o,a){var i=Object(n["resolveComponent"])("RouterLink"),s=Object(n["resolveDirective"])("lazy");return Object(n["openBlock"])(),Object(n["createBlock"])("div",Se,[Object(n["createVNode"])(i,{to:"/product/".concat(c.goods.id),class:"image"},{default:Ve((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("img",Be,null,512),[[s,c.goods.picture]])]})),_:1},8,["to"]),Object(n["createVNode"])("p",$e,Object(n["toDisplayString"])(c.goods.name),1),Object(n["createVNode"])("p",De,Object(n["toDisplayString"])(c.goods.desc),1),Object(n["createVNode"])("p",we,"¥"+Object(n["toDisplayString"])(c.goods.price),1),Object(n["createVNode"])("div",_e,[Object(n["createVNode"])(i,{to:"/"},{default:Ve((function(){return[He,Ce]})),_:1})])])})),xe={name:"HomeGoods",props:{goods:{type:Object,default:function(){return{}}}}};c("07fa");xe.render=Ie,xe.__scopeId="data-v-5b2da528";var Me=xe,Le={name:"HomeProduct",components:{HomePanel:U,HomeGoods:Me},setup:function(){var e=Object(Q["a"])(S["c"]),t=e.target,c=e.result;return{target:t,list:c}}};c("9b0b");Le.render=Ne,Le.__scopeId="data-v-f533d936";var Te=Le,Fe=Object(n["withScopeId"])("data-v-7e6342f4");Object(n["pushScopeId"])("data-v-7e6342f4");var Pe={ref:"target",class:"special-list"},Ye={class:"meta"},We={class:"title"},Xe={class:"top ellipsis"},Ae={class:"sub ellipsis"},Re={class:"price"},Je={class:"foot"},Ue={class:"like"},ze=Object(n["createVNode"])("i",{class:"iconfont icon-hart1"},null,-1),Ze={class:"view"},Ge=Object(n["createVNode"])("i",{class:"iconfont icon-see"},null,-1),qe={class:"reply"},Ee=Object(n["createVNode"])("i",{class:"iconfont icon-message"},null,-1);Object(n["popScopeId"])();var Qe=Fe((function(e,t,c,r,o,a){var i=Object(n["resolveComponent"])("XtxMore"),s=Object(n["resolveComponent"])("RouterLink"),l=Object(n["resolveComponent"])("HomePanel");return Object(n["openBlock"])(),Object(n["createBlock"])(l,{title:"最新专题"},{right:Fe((function(){return[Object(n["createVNode"])(i)]})),default:Fe((function(){return[Object(n["createVNode"])("div",Pe,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.specialList,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{class:"special-item",key:e.id},[Object(n["createVNode"])(s,{to:"/"},{default:Fe((function(){return[Object(n["createVNode"])("img",{src:e.cover,alt:""},null,8,["src"]),Object(n["createVNode"])("div",Ye,[Object(n["createVNode"])("p",We,[Object(n["createVNode"])("span",Xe,Object(n["toDisplayString"])(e.title),1),Object(n["createVNode"])("span",Ae,Object(n["toDisplayString"])(e.summary),1)]),Object(n["createVNode"])("span",Re,"¥"+Object(n["toDisplayString"])(e.lowestPrice)+"起",1)])]})),_:2},1024),Object(n["createVNode"])("div",Je,[Object(n["createVNode"])("span",Ue,[ze,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.collectNum),1)]),Object(n["createVNode"])("span",Ze,[Ge,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.viewNum),1)]),Object(n["createVNode"])("span",qe,[Ee,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.replyNum),1)])])])})),128))],512)]})),_:1})})),Ke={name:"HomeSpecial",components:{HomePanel:U},setup:function(){var e=Object(Q["a"])(S["f"]),t=e.target,c=e.result;return{target:t,specialList:c}}};c("d15e");Ke.render=Qe,Ke.__scopeId="data-v-7e6342f4";var et=Ke,tt={name:"HomePage",components:{HomeCategory:$,HomeBanner:C,HomeNew:ee,HomeHot:le,HomeBrand:pe,HomeProduct:Te,HomeSpecial:et}};tt.render=a;t["default"]=tt},"806c":function(e,t,c){"use strict";c.d(t,"a",(function(){return l})),c.d(t,"b",(function(){return u}));var n=c("3835"),r=c("16ce"),o=c("7bbe"),a=c("7a23"),i=c("5a0c"),s=c.n(i),l=function(e){var t=Object(a["ref"])([]),c=Object(a["ref"])(null),o=Object(r["b"])(c,(function(c,r){var o=Object(n["a"])(c,1),a=o[0].isIntersecting;a&&(i(),e().then((function(e){t.value=e.result})))}),{threshold:0}),i=o.stop;return{result:t,target:c}},u=function(){var e=Object(a["ref"])(0),t=Object(a["ref"])(""),c=Object(o["u"])((function(){e.value--,t.value=s.a.unix(e.value).format("mm分ss秒"),e.value<=0&&n()}),1e3,!1),n=c.pause,r=c.resume;Object(a["onUnmounted"])((function(){n()}));var i=function(c){e.value=c,t.value=s.a.unix(e.value).format("mm分ss秒"),r()};return{start:i,timeText:t}}},8733:function(e,t,c){"use strict";c("6b1b")},"9b0b":function(e,t,c){"use strict";c("e2b4")},"9e28":function(e,t,c){},a7bc:function(e,t,c){},b271:function(e,t,c){},c177:function(e,t,c){},d15e:function(e,t,c){"use strict";c("0eb2")},e2b4:function(e,t,c){},e461:function(e,t,c){},e644:function(e,t,c){"use strict";c("e461")},e9d0:function(e,t,c){"use strict";c("b271")},f5b8:function(e,t,c){}}]);
//# sourceMappingURL=chunk-55a1dffa.109a03ad.js.map