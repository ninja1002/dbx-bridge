(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,4],{322:function(t,e,n){"use strict";n(34),n(29),n(37),n(41),n(30),n(42);var o=n(15),r=n(20),c=(n(25),n(86),n(156),n(9),n(85),n(0)),l=n(38),d=n(54);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof data.style?(Object(l.b)("style must be an object",this),data):"string"==typeof data.class?(Object(l.b)("class must be an object",this),data):(Object(d.d)(t)?data.style=f(f({},data.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(data.class=f(f({},data.class),{},Object(r.a)({},t,!0))),data)},setTextColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof data.style)return Object(l.b)("style must be an object",this),data;if("string"==typeof data.class)return Object(l.b)("class must be an object",this),data;if(Object(d.d)(t))data.style=f(f({},data.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var e=t.toString().trim().split(" ",2),n=Object(o.a)(e,2),c=n[0],v=n[1];data.class=f(f({},data.class),{},Object(r.a)({},c+"--text",!0)),v&&(data.class["text--"+v]=!0)}return data}}})},327:function(t,e,n){"use strict";var o=n(2),r=n(217);o({target:"String",proto:!0,forced:n(218)("small")},{small:function(){return r(this,"small","","")}})},329:function(t,e,n){"use strict";var o=n(0);function r(t){return function(e,n){for(var o in n)Object.prototype.hasOwnProperty.call(e,o)||this.$delete(this.$data[t],o);for(var r in e)this.$set(this.$data[t],r,e[r])}}e.a=o.a.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},334:function(t,e,n){"use strict";n(327);var o=n(0);e.a=o.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},337:function(t,e,n){var content=n(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("6b715e77",content,!0,{sourceMap:!1})},338:function(t,e,n){var o=n(83)(!1);o.push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense .v-icon__component,.v-icon--dense .v-icon__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=o},362:function(t,e,n){"use strict";n(34),n(29),n(37),n(41),n(30),n(42);var o,r=n(20),c=(n(327),n(9),n(65),n(66),n(25),n(214),n(156),n(216),n(57),n(337),n(329)),l=n(322),d=n(334),v=n(155),f=n(18),m=n(0),h=n(154);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(o||(o={}));var y=Object(h.a)(c.a,l.a,d.a,v.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(f.w)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(f.t)(t).find((function(e){return t[e]}));return e&&o[e]||Object(f.g)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:x({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=x(x({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=x(x({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),o="material-icons",r=t.indexOf("-"),c=r<=-1;c?n.push(t):function(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}(o=t.slice(0,r))&&(o=""),data.class[o]=!0,data.class[t]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},o=this.getSize();return o&&(n.style={fontSize:o,height:o,width:o}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=m.a.extend({name:"v-icon",$_wrapperFor:y,functional:!0,render:function(t,e){var data=e.data,n=e.children,o="";return data.domProps&&(o=data.domProps.textContent||data.domProps.innerHTML||o,delete data.domProps.textContent,delete data.domProps.innerHTML),t(y,data,o?[o]:n)}})},363:function(t,e,n){var content=n(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("c30a50b6",content,!0,{sourceMap:!1})},364:function(t,e,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("c16aba88",content,!0,{sourceMap:!1})},392:function(t,e,n){"use strict";n(363)},393:function(t,e,n){var o=n(83)(!1);o.push([t.i,".select_from[data-v-55200230]{position:relative;background:#fff;height:80px;border-radius:25px}.select_home[data-v-55200230]{width:100%;height:100%;display:flex;align-items:center}.select_from ul[data-v-55200230]{z-index:99;border-bottom-left-radius:25px;border-bottom-right-radius:25px;width:100%;top:80px;position:absolute;left:0}.select_from ul li[data-v-55200230]{background:#fff;height:80px;display:flex}.select_from ul li[data-v-55200230]:nth-child(2n-1){background:#bf85f5;height:80px;display:flex}.from_text[data-v-55200230]{margin-top:20px;margin-left:20px}.from_text[data-v-55200230],.left_from[data-v-55200230]{display:flex;align-items:center}.left_from[data-v-55200230]{width:70%;justify-content:space-between;padding:22px}.right_from[data-v-55200230]{height:100%;width:30%;padding:3px}.symbol[data-v-55200230]{background:rgba(237,217,255,.42);border-radius:25px}.other_symbol[data-v-55200230],.symbol[data-v-55200230]{justify-content:space-around;height:100%}.chain[data-v-55200230],.other_symbol[data-v-55200230],.symbol[data-v-55200230]{display:flex;align-items:center}.chain_text[data-v-55200230]{margin-left:10px;font-weight:600}",""]),t.exports=o},394:function(t,e,n){"use strict";n(364)},395:function(t,e,n){var o=n(83)(!1);o.push([t.i,".select_from[data-v-773d4876]{position:relative;background:#fff;height:80px;border-radius:25px}.select_home[data-v-773d4876]{width:100%;height:100%;display:flex;align-items:center}.select_from ul[data-v-773d4876]{z-index:99;border-bottom-left-radius:25px;border-bottom-right-radius:25px;width:100%;top:80px;position:absolute;left:0}.select_from ul li[data-v-773d4876]{background:#fff;height:80px;display:flex}.select_from ul li[data-v-773d4876]:nth-child(2n-1){background:#bf85f5;height:80px;display:flex}.from_text[data-v-773d4876]{margin-top:20px;margin-left:20px}.from_text[data-v-773d4876],.left_from[data-v-773d4876]{display:flex;align-items:center}.left_from[data-v-773d4876]{width:70%;justify-content:space-between;padding:22px}.right_from[data-v-773d4876]{height:100%;width:30%;padding:3px}.symbol[data-v-773d4876]{background:rgba(237,217,255,.42);border-radius:25px}.other_symbol[data-v-773d4876],.symbol[data-v-773d4876]{justify-content:space-around;height:100%}.chain[data-v-773d4876],.other_symbol[data-v-773d4876],.symbol[data-v-773d4876]{display:flex;align-items:center}.chain_text[data-v-773d4876]{margin-left:10px;font-weight:600}",""]),t.exports=o},442:function(t,e,n){var content=n(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("25dd5de6",content,!0,{sourceMap:!1})},544:function(t,e,n){"use strict";n.r(e);var o=n(362),r={data:function(){return{index:0,selectStatus:!1,selectCoints:[{Chainname:"Ehtereum",ChainIcon:"/select/bsc.svg",SymbolName:"USDT",SymbolIcon:"/select/usdt.svg"},{Chainname:"BSC",ChainIcon:"/select/bsc.svg",SymbolName:"USDT",SymbolIcon:"/select/usdt.svg"},{Chainname:"EDX",ChainIcon:"/select/bsc.svg",SymbolName:"USDT",SymbolIcon:"/select/usdt.svg"}]}},methods:{handleSelectform:function(){this.selectStatus=!this.selectStatus}}},c=(n(392),n(71)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"select_from"},[e("div",{staticClass:"select_home",on:{click:t.handleSelectform}},[e("div",{staticClass:"left_from"},[t._m(0),t._v(" "),e("div",[e(o.a,{attrs:{slot:"append",size:"12"},slot:"append"},[t._v("fa fa-chevron-down")])],1)]),t._v(" "),t._m(1)]),t._v(" "),1==t.selectStatus?e("ul",[e("li",{on:{click:t.selectBSC}},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),t._m(4)]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"chain"},[e("img",{attrs:{src:"/select/bsc.svg",alt:""}}),t._v(" "),e("span",{staticClass:"chain_text"},[t._v("Ethereum")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"right_from"},[e("div",{staticClass:"symbol"},[e("img",{attrs:{src:"/select/busd.svg",alt:""}}),t._v(" "),e("div",{},[t._v("USDT")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"left_from"},[e("div",{staticClass:"chain"},[e("img",{attrs:{src:"/select/ethereum.svg",alt:""}}),t._v(" "),e("span",{staticClass:"chain_text"},[t._v("BSC")])]),t._v(" "),e("div")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"right_from"},[e("div",{staticClass:"other_symbol"},[e("img",{attrs:{src:"/select/usdt.svg",alt:""}}),t._v(" "),e("div",{},[t._v("BUSD")])])])},function(){var t=this,e=t._self._c;return e("li",[e("div",{staticClass:"left_from"},[e("div",{staticClass:"chain"},[e("img",{attrs:{src:"/select/dbx.svg",alt:""}}),t._v(" "),e("span",{staticClass:"chain_text"},[t._v("DBX Smart Network")])]),t._v(" "),e("div")]),t._v(" "),e("div",{staticClass:"right_from"},[e("div",{staticClass:"other_symbol"},[e("img",{attrs:{src:"/select/xus.svg",alt:""}}),t._v(" "),e("div",{},[t._v("XUS")])])])])}],!1,null,"55200230",null);e.default=component.exports},545:function(t,e,n){"use strict";n.r(e);var o=n(362),r={data:function(){return{index:0,selectStatus:!1,selectCoints:[{Chainname:"Ehtereum",ChainIcon:"/select/bsc.svg",SymbolName:"USDT",SymbolIcon:"/select/usdt.svg"},{Chainname:"BSC",ChainIcon:"/select/bsc.svg",SymbolName:"USDT",SymbolIcon:"/select/usdt.svg"},{Chainname:"EDX",ChainIcon:"/select/bsc.svg",SymbolName:"USDT",SymbolIcon:"/select/usdt.svg"}]}},methods:{handleSelectform:function(){this.selectStatus=!this.selectStatus}}},c=(n(394),n(71)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"select_from"},[e("div",{staticClass:"select_home",on:{click:t.handleSelectform}},[e("div",{staticClass:"left_from"},[t._m(0),t._v(" "),e("div",[e(o.a,{attrs:{slot:"append",size:"12"},slot:"append"},[t._v("fa fa-chevron-down")])],1)]),t._v(" "),t._m(1)]),t._v(" "),1==t.selectStatus?e("ul",[e("li",{on:{click:t.selectBSC}},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),t._m(4)]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"chain"},[e("img",{attrs:{src:"/select/ethereum.svg",alt:""}}),t._v(" "),e("span",{staticClass:"chain_text"},[t._v("Ethereum")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"right_from"},[e("div",{staticClass:"symbol"},[e("img",{attrs:{src:"/select/usdt.svg",alt:""}}),t._v(" "),e("div",{},[t._v("USDT")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"left_from"},[e("div",{staticClass:"chain"},[e("img",{attrs:{src:"/select/bsc.svg",alt:""}}),t._v(" "),e("span",{staticClass:"chain_text"},[t._v("BSC")])]),t._v(" "),e("div")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"right_from"},[e("div",{staticClass:"other_symbol"},[e("img",{attrs:{src:"/select/busd.svg",alt:""}}),t._v(" "),e("div",{},[t._v("BUSD")])])])},function(){var t=this,e=t._self._c;return e("li",[e("div",{staticClass:"left_from"},[e("div",{staticClass:"chain"},[e("img",{attrs:{src:"/select/dbx.svg",alt:""}}),t._v(" "),e("span",{staticClass:"chain_text"},[t._v("DBX Smart Network")])]),t._v(" "),e("div")]),t._v(" "),e("div",{staticClass:"right_from"},[e("div",{staticClass:"other_symbol"},[e("img",{attrs:{src:"/select/xus.svg",alt:""}}),t._v(" "),e("div",{},[t._v("XUS")])])])])}],!1,null,"773d4876",null);e.default=component.exports},554:function(t,e,n){"use strict";n(442)},555:function(t,e,n){var o=n(83)(!1);o.push([t.i,'.stable[data-v-5b5016c6]{position:relative}.transfer_modal[data-v-5b5016c6]{position:absolute;top:0;margin-left:-2%;background:rgba(122,24,213,.4);padding:0 10px;width:100%;height:100%;align-items:center;z-index:150}.transfer_modal[data-v-5b5016c6],.transfer_modal_layout[data-v-5b5016c6]{border-radius:25px;display:flex;justify-content:center}.transfer_modal_layout[data-v-5b5016c6]{flex-direction:column;position:relative;width:75%;height:52%;z-index:200;background:#fff;margin:20px}.close_btn[data-v-5b5016c6]{cursor:pointer;position:absolute;top:15px;right:15px}.transfer_modal_text[data-v-5b5016c6]{margin-top:15px;display:flex;flex-direction:column;align-items:center}.transfer_modal_topic_text[data-v-5b5016c6]{margin-top:3px;margin-bottom:5px;font-family:"Montserrat";font-style:normal;font-weight:500;font-size:14px;margin-left:20px}.transfer_one_btn[data-v-5b5016c6]{margin-bottom:8px}.transfer_one_btn[data-v-5b5016c6],.transfer_two_btn[data-v-5b5016c6]{cursor:pointer;display:flex;justify-content:center;border-radius:25px;margin-left:20px;margin-right:20px!important;width:88%;background:#edd9ff;padding:12px 0}.transfer_two_btn[data-v-5b5016c6]{flex-direction:column;align-items:center}@media screen and (max-width:1400px){.transfer_modal[data-v-5b5016c6]{font-size:11px!important}}@media screen and (max-width:1200px){.transfer_modal[data-v-5b5016c6]{font-size:9px!important}}@media screen and (max-width:768px){.transfer_modal[data-v-5b5016c6]{font-size:14px!important}}@media screen and (max-width:600px){.transfer_modal[data-v-5b5016c6]{font-size:11px!important;margin-left:-4%!important}}.connect_modal[data-v-5b5016c6]{display:flex;justify-content:center;align-items:center;position:absolute;top:0;width:100%;height:100vh;background:#4c1481;opacity:.25;z-index:100!important}.connect_modal_content[data-v-5b5016c6]{border-radius:25px;position:absolute;top:30%;background:#edd9ff;width:350px;height:350px;z-index:200}.connect_modal_text[data-v-5b5016c6]{margin-top:17%;font-family:"Montserrat";font-style:normal;font-weight:700;font-size:26px}.connect_modal_body[data-v-5b5016c6],.connect_modal_text[data-v-5b5016c6]{display:flex;justify-content:center}.chain_btns[data-v-5b5016c6]{margin-top:10%;margin-left:10%;margin-right:10%}.metabask_btn[data-v-5b5016c6]{font-family:"Montserrat";font-style:normal;font-weight:700;font-size:18px;cursor:pointer;padding:20px 0;border-radius:25px;margin-bottom:10%;background:#fff;position:relative;display:flex;justify-content:center;align-items:center;width:100%}.metabask_btn .metamask_img[data-v-5b5016c6]{position:absolute;left:20px}.wallet_btn[data-v-5b5016c6]{font-family:"Montserrat";font-style:normal;font-weight:700;font-size:18px;cursor:pointer;padding:20px 0;border-radius:25px;background:#fff;position:relative;display:flex;justify-content:center;align-items:center;width:100%}.wallet_btn .wallet_img[data-v-5b5016c6]{position:absolute;left:20px}@media screen and (max-width:768px){.connect_modal_content[data-v-5b5016c6]{background:#7a18d5;width:250px}.connect_modal_text[data-v-5b5016c6]{color:#fff}.mobile_header[data-v-5b5016c6]{top:0;position:absolute;right:0!important;background:hsla(0,0%,100%,.7);z-index:100!important;width:100%;height:100vh;display:block!important}.mobile_content[data-v-5b5016c6]{width:auto;height:720px!important;background:#edd9ff;display:flex;flex-direction:column;justify-content:space-between}.top_content .mobile_connect[data-v-5b5016c6]{margin-top:30px;display:flex;justify-content:center}.mobile_connect_btn[data-v-5b5016c6]{cursor:pointer;background:#7a18d5;padding:25px 40px;border-radius:25px;color:#fff;font-family:"Montserrat";font-style:normal;font-weight:700;font-size:18px;line-height:0;transition:.3s}.mobile_connect_btn[data-v-5b5016c6]:hover{background:#fff!important;color:#7a18d5!important;border:2px solid #7a18d5!important}.mobile_fourBtn[data-v-5b5016c6]{display:flex;flex-direction:column;align-items:start;margin-left:20%!important;margin-top:20%!important}.mobile_fourBtn button[data-v-5b5016c6]{color:#490389;font-family:"Montserrat";font-style:normal;font-weight:500;font-size:16px;margin-top:20px}.bottom_content[data-v-5b5016c6]{margin-left:10%!important;margin-right:10%!important;margin-bottom:30px!important}.support_btn[data-v-5b5016c6]{cursor:pointer;margin-bottom:20px;font-family:"Montserrat";font-style:normal;font-weight:500;font-size:16px;padding:12px 0;background:#fff;border-radius:25px;display:flex;align-items:center;justify-content:center;position:relative}.support_iamge[data-v-5b5016c6]{position:absolute;left:20px!important}.three_btn[data-v-5b5016c6]{display:flex;justify-content:space-between}.telegram_btn[data-v-5b5016c6]{cursor:pointer;display:flex;justify-content:center;align-items:center;padding:12px;background:#fff;border-radius:50%}.account_btn[data-v-5b5016c6]{display:none}.stable_header[data-v-5b5016c6]{display:flex;justify-content:start!important}.header_logo[data-v-5b5016c6]{margin-left:20px}.content_dbx[data-v-5b5016c6]{display:none!important}.transfer_content[data-v-5b5016c6]{margin-left:20px!important;margin-right:20px!important;width:100%!important;height:440px!important}.mobile_icon[data-v-5b5016c6]{cursor:pointer;display:block!important}}@media screen and (max-width:1200px){.dbx_large_text[data-v-5b5016c6]{font-size:16px!important;position:absolute;bottom:50px!important}.dbx_small_text[data-v-5b5016c6]{position:absolute;bottom:-30px!important;font-size:9px!important}.four_button[data-v-5b5016c6]{margin-top:50px!important;margin-left:5px!important}}.mobile_header[data-v-5b5016c6]{display:none;transition:.5}.stable_header[data-v-5b5016c6]{display:flex;justify-content:space-around;align-items:center;background:#edd9ff;height:100px;width:auto}.mobile_icon[data-v-5b5016c6]{position:absolute;right:20px;display:none}.header_logo[data-v-5b5016c6]{cursor:pointer;display:flex;align-items:center}.header_text[data-v-5b5016c6]{font-size:24px;font-family:bold}.account_btn[data-v-5b5016c6]{cursor:pointer;color:#fff;background:#7a18d5;border-radius:25px;padding:20px 22px;transition:.5s}.account_btn[data-v-5b5016c6]:hover{background:#fff;border:2px solid #7a18d5}.account_btn:hover button[data-v-5b5016c6]{color:#7a18d5}.account_btn button[data-v-5b5016c6]{font-size:18px;font-weight:700;font:"Montserrat";color:#fff}.select[data-v-5b5016c6]{width:100%}.content[data-v-5b5016c6]{margin-top:50px;margin-left:1%!important;margin-right:5%!important;width:88%}.content_dbx[data-v-5b5016c6]{height:425px!important}.content_dbx[data-v-5b5016c6],.transfer_content[data-v-5b5016c6]{border-radius:25px;background:#edd9ff;margin:10px;width:100%}.dbx_image[data-v-5b5016c6],.transfer_content[data-v-5b5016c6]{position:relative}.dbx_image[data-v-5b5016c6]{display:flex;justify-content:center;flex-direction:column;align-items:center}.dbx_image .dbx_large_text[data-v-5b5016c6]{font-size:26px;position:absolute;bottom:70px;font-family:"Montserrat";font-style:normal;font-weight:700}.dbx_image .dbx_small_text[data-v-5b5016c6]{font-size:11px;position:absolute;bottom:20px}.four_button[data-v-5b5016c6]{display:flex;flex-direction:column;justify-content:start;margin-left:30px}.four_button a[data-v-5b5016c6]{color:#490389;margin-bottom:5px}.from_text[data-v-5b5016c6]{margin-top:40px}.from_text[data-v-5b5016c6],.to_text[data-v-5b5016c6]{font-family:"Montserrat";font-style:normal;font-weight:700;font-size:21px;margin-left:20px;margin-bottom:10px}.to_text[data-v-5b5016c6]{margin-top:20px}.transfer_btn[data-v-5b5016c6]{cursor:pointer;display:flex;justify-content:center;align-items:center;padding:20px 90px;margin-top:30px;background:#7a18d5;border-radius:25px;color:#fff;transition:.5s}.transfer_btn[data-v-5b5016c6]:hover{background:#fff;color:#7a18d5!important;border:2px solid #7a18d5}.transfer_text[data-v-5b5016c6]{font-family:"Montserrat";font-style:normal;font-weight:700;font-size:21px;line-height:100%}.row[data-v-5b5016c6]:after{content:""!important;clear:both!important;display:table!important}[class*=col-][data-v-5b5016c6]{float:center;width:100%}@media only screen and (min-width:600px){.col-s-1[data-v-5b5016c6]{width:8.33%}.col-s-2[data-v-5b5016c6]{width:16.66%}.col-s-3[data-v-5b5016c6]{width:25%}.col-s-4[data-v-5b5016c6]{width:33.33%}.col-s-5[data-v-5b5016c6]{width:41.66%}.col-s-6[data-v-5b5016c6]{width:50%}.col-s-7[data-v-5b5016c6]{width:58.33%}.col-s-8[data-v-5b5016c6]{width:66.66%}.col-s-9[data-v-5b5016c6]{width:75%}.col-s-10[data-v-5b5016c6]{width:83.33%}.col-s-11[data-v-5b5016c6]{width:91.66%}.col-s-12[data-v-5b5016c6]{width:100%}}@media only screen and (max-width:600px){.col-ss-1[data-v-5b5016c6]{width:8.33%}.col-ss-2[data-v-5b5016c6]{width:16.66%}.col-ss-3[data-v-5b5016c6]{width:25%}.col-ss-4[data-v-5b5016c6]{width:33.33%}.col-ss-5[data-v-5b5016c6]{width:41.66%}.col-ss-6[data-v-5b5016c6]{width:50%}.col-ss-7[data-v-5b5016c6]{width:58.33%}.col-ss-8[data-v-5b5016c6]{width:66.66%}.col-ss-9[data-v-5b5016c6]{width:75%}.col-ss-10[data-v-5b5016c6]{width:83.33%}.col-ss-11[data-v-5b5016c6]{width:91.66%}.col-ss-12[data-v-5b5016c6]{width:100%}}@media only screen and (min-width:768px){.col-1[data-v-5b5016c6]{width:8.33%}.col-2[data-v-5b5016c6]{width:16.66%}.col-3[data-v-5b5016c6]{width:25%}.col-4[data-v-5b5016c6]{width:33.33%}.col-5[data-v-5b5016c6]{width:41.66%}.col-6[data-v-5b5016c6]{width:50%}.col-7[data-v-5b5016c6]{width:58.33%}.col-8[data-v-5b5016c6]{width:66.66%}.col-9[data-v-5b5016c6]{width:75%}.col-10[data-v-5b5016c6]{width:83.33%}.col-11[data-v-5b5016c6]{width:91.66%}.col-12[data-v-5b5016c6]{width:100%}}',""]),t.exports=o},902:function(t,e,n){"use strict";n.r(e);var o=n(545),r=n(544),c={components:{SelectCoin:o.default,SelectChangeCoin:r.default},data:function(){return{mobileStatus:!1,connectStatus:!1,transferStatus:!1}},mounted:function(){},created:function(){},methods:{mobileHandler:function(){this.mobileStatus=!this.mobileStatus},closeMobileHandler:function(){this.mobileStatus=!1},closeConnectModal:function(){this.connectStatus=!1},connectHandler:function(){this.connectStatus=!0},transferModalHandler:function(){this.transferStatus=!0},closeTransfer:function(){this.transferStatus=!1},supportHandler:function(){},telegramHandler:function(){},twitterHandler:function(){},youtubeHandler:function(){},worksHandler:function(){},faqHandler:function(){},userGuideHandler:function(){},videoGuideHandler:function(){}}},l=(n(554),n(71)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"stable"},[1==t.connectStatus?e("div",{staticClass:"connect_modal",on:{click:t.closeConnectModal}}):t._e(),t._v(" "),1==t.connectStatus?e("div",{staticClass:"connect_modal_body"},[e("div",{staticClass:"connect_modal_content"},[t._m(0),t._v(" "),e("div",{staticClass:"chain_btns"},[e("div",{staticClass:"metabask_btn",on:{click:t.closeConnectModal}},[t._m(1),t._v(" "),e("div",{staticClass:"metamask_text"},[t._v("MetaMask")])]),t._v(" "),e("div",{staticClass:"wallet_btn",on:{click:t.closeConnectModal}},[t._m(2),t._v(" "),e("div",{staticClass:"wallet_text"},[t._v("\r\n              WalletConnect\r\n            ")])])])])]):t._e(),t._v(" "),1==t.mobileStatus?e("div",{staticClass:"mobile_header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-s-3 col-ss-3",on:{click:t.closeMobileHandler}}),t._v(" "),e("div",{staticClass:"col-s-9 col-ss-9 mobile_content"},[e("div",{staticClass:"top_content"},[e("div",{staticClass:"mobile_connect",on:{click:t.connectHandler}},[e("span",{staticClass:"mobile_connect_btn"},[t._v("CONNECT")])]),t._v(" "),e("div",{staticClass:"mobile_fourBtn"},[e("button",{on:{click:t.worksHandler}},[t._v("How It Works")]),t._v(" "),e("button",{on:{click:t.faqHandler}},[t._v("FAQ")]),t._v(" "),e("button",{on:{click:t.userGuideHandler}},[t._v("User guide")]),t._v(" "),e("button",{on:{click:t.videoGuideHandler}},[t._v("Video guide (YouTube)")])])]),t._v(" "),e("div",{staticClass:"bottom_content"},[e("div",{staticClass:"support_btn",on:{click:t.supportHandler}},[e("span",[t._v("Support")]),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"three_btn"},[e("div",{staticClass:"telegram_btn"},[e("img",{attrs:{src:"/mobile/twitter.svg",alt:""},on:{click:t.twitterHandler}})]),t._v(" "),e("div",{staticClass:"telegram_btn"},[e("img",{attrs:{src:"/mobile/youtube.svg",alt:""},on:{click:t.youtubeHandler}})]),t._v(" "),e("div",{staticClass:"telegram_btn",on:{click:t.telegramHandler}},[e("img",{attrs:{src:"/mobile/telegram.svg",alt:""}})])])])])])]):t._e(),t._v(" "),e("div",{staticClass:"stable_header"},[t._m(4),t._v(" "),e("div",{staticClass:"account_btn",on:{click:t.connectHandler}},[e("button",[t._v("CONNECT")])]),t._v(" "),e("span",{staticClass:"mobile_icon",on:{click:t.mobileHandler}},[e("img",{attrs:{src:"/select/mobileIcon.svg",alt:""}})])]),t._v(" "),e("div",{staticClass:"row content"},[e("div",{staticClass:"col-3 col-s-1 left_dbx"}),t._v(" "),t._m(5),t._v(" "),e("div",{staticClass:"col-4 col-s-10 transfer_content"},[1==t.transferStatus?e("div",{staticClass:"transfer_modal"},[e("div",{staticClass:"transfer_modal_layout"},[e("div",{staticClass:"close_btn",on:{click:t.closeTransfer}},[e("img",{attrs:{src:"/connect/closeBtn.svg",alt:""}})]),t._v(" "),t._m(6),t._v(" "),e("div",{staticClass:"transfer_modal_topic_text"},[t._v("Related topics:")]),t._v(" "),e("div",{staticClass:"transfer_one_btn",on:{click:t.closeTransfer}},[e("span",[t._v("How to change network in MetaMask")])]),t._v(" "),e("div",{staticClass:"transfer_two_btn",on:{click:t.closeTransfer}},[e("span",[t._v("How to add DBX Smart Network to")]),t._v(" "),e("span",[t._v("MetaMask")])])])]):t._e(),t._v(" "),e("div",{staticClass:"from"},[e("div",{staticClass:"from_text"},[t._v("From")]),t._v(" "),e("SelectCoin")],1),t._v(" "),e("div",{staticClass:"to"},[e("div",{staticClass:"to_text"},[t._v("To")]),t._v(" "),e("SelectChangeCoin")],1),t._v(" "),e("div",{staticClass:"transfer_btn",on:{click:t.transferModalHandler}},[e("span",{staticClass:"transfer_text"},[t._v("Transfer")])])]),t._v(" "),e("div",{staticClass:"col-3 col-s-1 transfer_right"})])])}),[function(){var t=this._self._c;return t("div",{staticClass:"connect_modal_text"},[t("span",[this._v("Connect using")])])},function(){var t=this._self._c;return t("div",{staticClass:"metamask_img"},[t("img",{attrs:{src:"/connect/metamask.svg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"wallet_img"},[t("img",{attrs:{src:"/connect/walletConnect.svg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"support_iamge"},[t("img",{attrs:{src:"/mobile/telegram.svg",alt:"",width:"25px",height:"25px"}})])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"header_logo",attrs:{href:"#"}},[e("img",{attrs:{src:"/images/general/headerLogo.svg",alt:""}}),t._v(" "),e("div",{staticClass:"header_text"},[t._v("Bridge")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-2 content_dbx"},[e("div",{staticClass:"dbx_image"},[e("img",{attrs:{src:"/images/general/ufo.svg",alt:""}}),t._v(" "),e("div",{staticClass:"dbx_large_text"},[t._v("DBX Bridge")]),t._v(" "),e("div",{staticClass:"dbx_small_text"},[t._v("\r\n            Fastest way to transfer you DBX coins through popular blockchain\r\n            system’s\r\n          ")])]),t._v(" "),e("div",{staticClass:"four_button"},[e("a",{attrs:{href:""}},[t._v("How it works")]),t._v(" "),e("a",{attrs:{href:""}},[t._v("FAQ")]),t._v(" "),e("a",{attrs:{href:""}},[t._v("User guide")]),t._v(" "),e("a",{attrs:{href:""}},[t._v("Video guide {Youtube}")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"transfer_modal_text"},[e("span",[t._v("You selected wrong network.")]),t._v(" "),e("span",[t._v("Change your network to ERC20 in")]),t._v(" "),e("span",[t._v("your provider (MetaMask)")])])}],!1,null,"5b5016c6",null);e.default=component.exports}}]);