(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bbae70a"],{1520:function(t,e,n){},"4c48":function(t,e,n){"use strict";n("1520")},5592:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),a=n("ed22"),i=n.n(a),c=Object(r["withScopeId"])("data-v-1373e242");Object(r["pushScopeId"])("data-v-1373e242");var o={class:"xtx-pay-page"},u={class:"container"},s=Object(r["createTextVNode"])("首页"),d=Object(r["createTextVNode"])("购物车"),f=Object(r["createTextVNode"])("支付订单"),l={key:0,class:"pay-info"},b=Object(r["createVNode"])("span",{class:"icon iconfont icon-queren2"},null,-1),h={class:"tip"},v=Object(r["createVNode"])("p",null,"订单提交成功！请尽快完成支付。",-1),p={key:0},m=Object(r["createTextVNode"])("支付还剩 "),O=Object(r["createTextVNode"])(", 超时后将取消订单"),j={key:1},$={class:"amount"},y=Object(r["createVNode"])("span",null,"应付总额：",-1),g=Object(r["createStaticVNode"])('<div class="pay-type" data-v-1373e242><p class="head" data-v-1373e242>选择以下支付方式付款</p><div class="item" data-v-1373e242><p data-v-1373e242>支付平台</p><a class="btn wx" href="javascript:;" data-v-1373e242></a></div><div class="item" data-v-1373e242><p data-v-1373e242>支付方式</p><a class="btn" href="javascript:;" data-v-1373e242>招商银行</a><a class="btn" href="javascript:;" data-v-1373e242>工商银行</a><a class="btn" href="javascript:;" data-v-1373e242>建设银行</a><a class="btn" href="javascript:;" data-v-1373e242>农业银行</a><a class="btn" href="javascript:;" data-v-1373e242>交通银行</a></div></div>',1),M={class:"pay-wait"},D=Object(r["createVNode"])("img",{src:i.a,alt:""},null,-1),S={key:0},w=Object(r["createVNode"])("p",null,"如果支付成功：",-1),N=Object(r["createTextVNode"])("查看订单详情>"),V=Object(r["createVNode"])("p",null,"如果支付失败：",-1),x=Object(r["createTextVNode"])("查看相关疑问>");Object(r["popScopeId"])();var _=c((function(t,e,n,a,i,_){var k=Object(r["resolveComponent"])("XtxBreadItem"),T=Object(r["resolveComponent"])("XtxBread"),I=Object(r["resolveComponent"])("RouterLink"),C=Object(r["resolveComponent"])("XtxDialog");return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[Object(r["createVNode"])("div",u,[Object(r["createVNode"])(T,null,{default:c((function(){return[Object(r["createVNode"])(k,{to:"/"},{default:c((function(){return[s]})),_:1}),Object(r["createVNode"])(k,{to:"/cart"},{default:c((function(){return[d]})),_:1}),Object(r["createVNode"])(k,null,{default:c((function(){return[f]})),_:1})]})),_:1}),a.order?(Object(r["openBlock"])(),Object(r["createBlock"])("div",l,[b,Object(r["createVNode"])("div",h,[v,a.order.countdown>-1?(Object(r["openBlock"])(),Object(r["createBlock"])("p",p,[m,Object(r["createVNode"])("span",null,Object(r["toDisplayString"])(a.timeText),1),O])):(Object(r["openBlock"])(),Object(r["createBlock"])("p",j,"订单已经超时"))]),Object(r["createVNode"])("div",$,[y,Object(r["createVNode"])("span",null,"¥"+Object(r["toDisplayString"])(a.order.payMoney),1)])])):Object(r["createCommentVNode"])("",!0),g]),Object(r["createVNode"])(C,{title:"正在支付...",visible:a.visibleDialog,"onUpdate:visible":e[1]||(e[1]=function(t){return a.visibleDialog=t})},{default:c((function(){return[Object(r["createVNode"])("div",M,[D,a.order?(Object(r["openBlock"])(),Object(r["createBlock"])("div",S,[w,Object(r["createVNode"])(I,{to:"/member/order/".concat(t.$route.query.orderId)},{default:c((function(){return[N]})),_:1},8,["to"]),V,Object(r["createVNode"])(I,{to:"/"},{default:c((function(){return[x]})),_:1})])):Object(r["createCommentVNode"])("",!0)])]})),_:1},8,["visible"])])})),k=(n("99af"),n("6c02")),T=n("f8b7"),I=n("806c"),C=n("b775"),B={name:"XtxPayPage",setup:function(){var t=Object(k["c"])(),e=Object(r["ref"])(null);Object(T["g"])(t.query.orderId).then((function(t){e.value=t.result,t.result.countdown>-1&&a(t.result.countdown)}));var n=Object(I["b"])(),a=n.start,i=n.timeText,c=encodeURIComponent("http://erabbit.itheima.net/#/pay/callback"),o="".concat(C["a"],"pay/aliPay?orderId=").concat(t.query.orderId,"&redirect=").concat(c),u=Object(r["ref"])(!1),s=Object(k["d"])(),d=null;Object(r["onUnmounted"])((function(){clearTimeout(d)}));var f=function(){u.value=!0,d=setTimeout((function(){s.push("/member/order/".concat(t.query.orderId))}),18e4)};return{order:e,timeText:i,payUrl:o,visibleDialog:u,open:f}}};n("4c48");B.render=_,B.__scopeId="data-v-1373e242";e["default"]=B},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",a="day",i="week",c="month",o="quarter",u="year",s="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},b=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},h={s:b,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+b(r,2,"0")+":"+b(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,c),i=n-a<0,o=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:c,y:u,w:i,d:a,D:s,h:r,m:n,s:e,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",p={};p[v]=l;var m=function(t){return t instanceof y},O=function(t,e,n){var r;if(!t)return v;if("string"==typeof t)p[t]&&(r=t),e&&(p[t]=e,r=t);else{var a=t.name;p[a]=t,r=a}return!n&&r&&(v=r),r||!n&&v},j=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},$=h;$.l=O,$.i=m,$.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var y=function(){function l(t){this.$L=O(t.locale,null,!0),this.parse(t)}var b=l.prototype;return b.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},b.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},b.$utils=function(){return $},b.isValid=function(){return!("Invalid Date"===this.$d.toString())},b.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},b.isAfter=function(t,e){return j(t)<this.startOf(e)},b.isBefore=function(t,e){return this.endOf(e)<j(t)},b.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(t,o){var d=this,f=!!$.u(o)||o,l=$.p(t),b=function(t,e){var n=$.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return f?n:n.endOf(a)},h=function(t,e){return $.w(d.toDate()[t].apply(d.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},v=this.$W,p=this.$M,m=this.$D,O="set"+(this.$u?"UTC":"");switch(l){case u:return f?b(1,0):b(31,11);case c:return f?b(1,p):b(0,p+1);case i:var j=this.$locale().weekStart||0,y=(v<j?v+7:v)-j;return b(f?m-y:m+(6-y),p);case a:case s:return h(O+"Hours",0);case r:return h(O+"Minutes",1);case n:return h(O+"Seconds",2);case e:return h(O+"Milliseconds",3);default:return this.clone()}},b.endOf=function(t){return this.startOf(t,!1)},b.$set=function(i,o){var d,f=$.p(i),l="set"+(this.$u?"UTC":""),b=(d={},d[a]=l+"Date",d[s]=l+"Date",d[c]=l+"Month",d[u]=l+"FullYear",d[r]=l+"Hours",d[n]=l+"Minutes",d[e]=l+"Seconds",d[t]=l+"Milliseconds",d)[f],h=f===a?this.$D+(o-this.$W):o;if(f===c||f===u){var v=this.clone().set(s,1);v.$d[b](h),v.init(),this.$d=v.set(s,Math.min(this.$D,v.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},b.set=function(t,e){return this.clone().$set(t,e)},b.get=function(t){return this[$.p(t)]()},b.add=function(t,o){var s,d=this;t=Number(t);var f=$.p(o),l=function(e){var n=j(d);return $.w(n.date(n.date()+Math.round(e*t)),d)};if(f===c)return this.set(c,this.$M+t);if(f===u)return this.set(u,this.$y+t);if(f===a)return l(1);if(f===i)return l(7);var b=(s={},s[n]=6e4,s[r]=36e5,s[e]=1e3,s)[f]||1,h=this.$d.getTime()+t*b;return $.w(h,this)},b.subtract=function(t,e){return this.add(-1*t,e)},b.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=$.z(this),a=this.$locale(),i=this.$H,c=this.$m,o=this.$M,u=a.weekdays,s=a.months,d=function(t,r,a,i){return t&&(t[r]||t(e,n))||a[r].substr(0,i)},l=function(t){return $.s(i%12||12,t,"0")},b=a.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:d(a.monthsShort,o,s,3),MMMM:d(s,o),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:d(a.weekdaysMin,this.$W,u,2),ddd:d(a.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:$.s(i,2,"0"),h:l(1),hh:l(2),a:b(i,c,!0),A:b(i,c,!1),m:String(c),mm:$.s(c,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(t,e){return e||h[t]||r.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(t,s,d){var f,l=$.p(s),b=j(t),h=6e4*(b.utcOffset()-this.utcOffset()),v=this-b,p=$.m(this,b);return p=(f={},f[u]=p/12,f[c]=p,f[o]=p/3,f[i]=(v-h)/6048e5,f[a]=(v-h)/864e5,f[r]=v/36e5,f[n]=v/6e4,f[e]=v/1e3,f)[l]||v,d?p:$.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return p[this.$L]},b.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=O(t,e,!0);return r&&(n.$L=r),n},b.clone=function(){return $.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},l}(),g=y.prototype;return j.prototype=g,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",a],["$M",c],["$y",u],["$D",s]].forEach((function(t){g[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,y,j),t.$i=!0),j},j.locale=O,j.isDayjs=m,j.unix=function(t){return j(1e3*t)},j.en=p[v],j.Ls=p,j.p={},j}))},"806c":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return d}));var r=n("3835"),a=n("16ce"),i=n("7bbe"),c=n("7a23"),o=n("5a0c"),u=n.n(o),s=function(t){var e=Object(c["ref"])([]),n=Object(c["ref"])(null),i=Object(a["b"])(n,(function(n,a){var i=Object(r["a"])(n,1),c=i[0].isIntersecting;c&&(o(),t().then((function(t){e.value=t.result})))}),{threshold:0}),o=i.stop;return{result:e,target:n}},d=function(){var t=Object(c["ref"])(0),e=Object(c["ref"])(""),n=Object(i["u"])((function(){t.value--,e.value=u.a.unix(t.value).format("mm分ss秒"),t.value<=0&&r()}),1e3,!1),r=n.pause,a=n.resume;Object(c["onUnmounted"])((function(){r()}));var o=function(n){t.value=n,e.value=u.a.unix(t.value).format("mm分ss秒"),a()};return{start:o,timeText:e}}},ed22:function(t,e,n){t.exports=n.p+"img/load.88daf935.gif"},f8b7:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"j",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"k",(function(){return u})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return l})),n.d(e,"c",(function(){return b})),n.d(e,"i",(function(){return h}));var r=n("b775"),a=function(){return Object(r["b"])("/member/order/pre","get")},i=function(t){return Object(r["b"])("/member/order/repurchase/"+t,"get")},c=function(t){return Object(r["b"])("/member/address","post",t)},o=function(t){return Object(r["b"])("/member/address/".concat(t.id),"put",t)},u=function(t){return Object(r["b"])("/member/order","post",t)},s=function(t){return Object(r["b"])("/member/order/"+t,"get")},d=function(t){var e=t.page,n=void 0===e?1:e,a=t.pageSize,i=void 0===a?10:a,c=t.orderState,o=void 0===c?0:c;return Object(r["b"])("/member/order","get",{page:n,pageSize:i,orderState:o})},f=function(t){var e=t.orderId,n=t.cancelReason;return Object(r["b"])("/member/order/".concat(e,"/cancel"),"put",{cancelReason:n})},l=function(t){return Object(r["b"])("/member/order","delete",{ids:[t]})},b=function(t){return Object(r["b"])("/member/order/".concat(t,"/receipt"),"put")},h=function(t){return Object(r["b"])("/member/order/".concat(t,"/logistics"),"get")}}}]);
//# sourceMappingURL=chunk-7bbae70a.ef51df5e.js.map