(window.webpackJsonp=window.webpackJsonp||[]).push([[71,22],{1005:function(t,e,n){"use strict";n(912)},1088:function(t,e,n){"use strict";var o=n(13),r=(n(36),n(23),n(845)),l=(n(43),n(44),n(11),{props:{defaultWishOn:{type:Boolean,default:!1},option:{type:Object,default:null}},data:function(){return{wishOn:!1,wishClass:"wish-s-off"}},mounted:function(){this.wishOn=this.defaultWishOn,this.changeName()},methods:{activeWish:function(){this.wishOn=!this.wishOn,this.changeName(),this.$emit("click",this.option.text,this.wishOn)},changeName:function(){this.wishOn?this.wishClass="wish-s-on":this.wishClass="wish-s-off"}}}),c=(n(1136),n(64)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"interest_btn_box"},[n("BaseButton",{class:["btn_interest",{wish_on:t.wishOn}],attrs:{tag:"a",href:"#","style-type":"outlinegrey",size:"medium"},on:{onClick:t.activeWish}},[n("p",{staticClass:"info_txt"},[t._v(t._s(t.option.text))]),n("svg-icon",{class:t.wishClass,attrs:{name:t.wishClass}})],1)],1)}),[],!1,null,"9aa82764",null),d=component.exports;installComponents(component,{BaseButton:n(461).default});var h={components:{BtnInterest:d},props:{product:{type:Object,default:null}},computed:{options:function(){if(this.product&&this.product.product&&this.product.product.options){for(var t=this.product.product.options,e=[],i=0,n=t.length;i<n;i++)this.my_options.includes(t[i])?e.push({text:t[i],checked:!0}):e.push({text:t[i],checked:!1});return e}return[]},my_options:function(){return this.product&&this.product.product&&this.product.product.me?this.product.product.me.wish_options:[]},columnDouble:function(){return!!(this.product&&this.product.product&&this.product.product.options)&&this.product.product.options.some((function(option){return option.length>=10}))}},methods:{onOptionClick:function(option,t){this.$emit("click",option,t)}}},m=(n(1137),Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.$mq,"interest_list",{column_double:t.columnDouble}]},t._l(t.options,(function(option,e){return n("BtnInterest",{key:e,attrs:{option:option,"default-wish-on":option.checked},on:{click:t.onOptionClick}})})),1)}),[],!1,null,"24a04858",null).exports),f=n(92),_=n(220),v=n(799),C={components:{SuggestList:r.a,InterestList:m},props:{product:{type:Object,default:null},layerOpenInterest:{type:Boolean,default:!1}},data:function(){return{reloadRequired:!1}},computed:{suggestData:function(){var t,e,n=null===(t=this.product)||void 0===t||null===(e=t.product)||void 0===e?void 0:e.release;return[{image_url:null==n?void 0:n.image_urls[0],name:null==n?void 0:n.name,translated_name:null==n?void 0:n.translated_name}]}},methods:{interestClose:function(){var t,e,n,o=this;this.reloadRequired?Object(v.m)("api/p/products/"+(null===(t=this.product)||void 0===t||null===(e=t.product)||void 0===e||null===(n=e.release)||void 0===n?void 0:n.id)).then((function(t){var data=t.data;o.$emit("close",o.reloadRequired,data)})):this.$emit("close",this.reloadRequired,null)},onOptionClick:function(option,t){var e,n,r,l=this,c=this.product.product.release.id,d=this.product.product.release.name;(this.$addWish(c,option,(function(){l.$nuxt.$emit("onOptionClickWish",c,t)})),t)?(this.$gtag(f.c.WISHLIST_ADD,(e={},Object(o.a)(e,f.d.ACTION,"".concat(f.d.PRODUCT_NAME,"=").concat(d,", ").concat(f.d.PRODUCT_OPTION,"=").concat(option)),Object(o.a)(e,f.d.PRODUCT_NAME,d),Object(o.a)(e,f.d.PRODUCT_OPTION,option),e)),this.$fbEvent(f.a.WISHLIST_ADD,(n={},Object(o.a)(n,f.b.CONTENT_IDS,[c]),Object(o.a)(n,f.b.CONTENT_TYPE,"product"),Object(o.a)(n,f.b.CURRENCY,"KRW"),Object(o.a)(n,f.b.VALUE,this.product.product.market.lowest_ask),n)),this.$afEvent(_.a.WISH,(r={},Object(o.a)(r,_.b.PRODUCT_ID,c),Object(o.a)(r,_.b.PRODUCT_NAME,d),Object(o.a)(r,f.d.PRODUCT_OPTION,option),r))):this.$deleteWish(c,option,null);this.reloadRequired=!0}}},y=(n(1138),n(1139),Object(c.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseLayer",{directives:[{name:"show",rawName:"v-show",value:t.layerOpenInterest,expression:"layerOpenInterest"}],staticClass:"layer_interest",attrs:{"show-layer":t.layerOpenInterest},on:{close:t.interestClose}},[n("h2",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("관심 상품 추가")]),n("template",{slot:"content"},[n("SuggestList",{attrs:{suggests:t.suggestData,clickable:!1}}),n("InterestList",{attrs:{product:t.product},on:{click:t.onOptionClick}})],1),n("div",{staticClass:"layer_btn",attrs:{slot:"btn"},slot:"btn"},[n("BaseButton",{attrs:{tag:"a",href:"#","style-type":"outline",size:"medium"},on:{onClick:t.interestClose}},[t._v(" 확인 ")])],1),n("a",{staticClass:"btn_layer_close",attrs:{slot:"btnClose",href:"#"},on:{click:function(e){return e.preventDefault(),t.interestClose.apply(null,arguments)}},slot:"btnClose"},[n("svg-icon",{staticClass:"ico-close",attrs:{name:"ico-close"}})],1)],2)}),[],!1,null,"3df3a93e",null));e.a=y.exports;installComponents(y,{BaseButton:n(461).default,BaseLayer:n(462).default})},1093:function(t,e,n){"use strict";n(11);var o={props:{defaultWishOn:{type:Boolean,default:!1},item:{type:Object,default:null}},data:function(){return{wishOn:!1,wishClass:"ico-wish-off"}},watch:{defaultWishOn:function(t){this.wishOn=t,this.changeName()}},mounted:function(){this.wishOn=this.defaultWishOn,this.changeName()},methods:{activeWish:function(){var t=this,e=this;new Promise((function(e){return t.$emit("click",t.item,t.wishOn,e)})).then((function(t){e.wishOn=t,e.changeName()}))},changeName:function(){this.wishOn?this.wishClass="ico-wish-on":this.wishClass="ico-wish-off"}}},r=(n(1005),n(64)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn_wish",attrs:{href:"#","aria-label":"관심상품"},on:{click:function(e){return e.preventDefault(),t.activeWish.apply(null,arguments)}}},[n("svg-icon",{class:t.wishClass,attrs:{name:t.wishClass}})],1)}),[],!1,null,"150a7ea0",null);e.a=component.exports},1100:function(t,e,n){},1136:function(t,e,n){"use strict";n(948)},1137:function(t,e,n){"use strict";n(949)},1138:function(t,e,n){"use strict";n(950)},1139:function(t,e,n){"use strict";n(951)},1175:function(t,e,n){"use strict";n(149),n(36),n(993),n(26),n(51),n(11),n(90);var o=n(804),r=n(1093),l=n(10);function c(t){return null==t?"-":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var d={components:{Product:o.a,BtnWish:r.a},props:{item:{type:Object},displayType:{type:String,value:""},sort:{type:String,value:null},fetching:{type:Boolean,value:!1},wishOn:{type:Boolean,value:!1},hideWish:{type:Boolean,value:!1},onClick:{type:Function,default:function(){}},size:{type:String,default:null}},data:function(){return{isOverflowing:!1}},computed:{release:function(){var t,e,n;return(null===(t=this.item)||void 0===t?void 0:t.release)||(null===(e=this.item)||void 0===e||null===(n=e.product)||void 0===n?void 0:n.release)||{}},brand:function(){var t;return(null===(t=this.item.product||this.item)||void 0===t?void 0:t.brand)||{}},product:function(){return this.$lodash.isEmpty(this.item)?{}:{name:null==this.release?"":this.release.translated_name,image_url:this.item.image_url||(null==this.release?"":this.release.image_urls[0]),background_color:this.release.bgcolor||"#f4f4f4"}},market:function(){return this.item.market||(null==this.item.product?null:this.item.product.market)},price:function(){return null==this.item?"-":null!=this.market?this.sort&&"highest_bid"===this.sort?c(this.market.highest_bid):c(this.market.lowest_ask):"-"},priceLabel:function(){return this.sort&&"highest_bid"===this.sort?this.$t(this.$m.askInstantPrice):this.$t(this.$m.bidInstantPrice)},havePrice:function(){return"-"!==this.price},name:function(){return null===this.item?"-":this.$lodash.isEmpty(this.item.title)?this.item.title||(null==this.release?"-":this.release.name):this.item.title},sortValue:function(){return this.fetching?null:"date_released"===this.sort?this.release.date_released?"발매 ".concat(Object(l.j)(this.release.date_released,"yy/MM/dd")):"-":"pricepremium"===this.sort?null!=this.item.market.pricepremium_percentage?"".concat(this.item.market.pricepremium_percentage.toFixed(1),"%"):"-":null},sortClass:function(){switch(this.sort){case"date_released":return"sale";case"pricepremium":if(this.fetching)return null;var t=parseFloat(this.sortValue.replace("%",""));return t>0?"premium_up":t<0?"premium_down":"premium_same";default:return null}},isExpress:function(){var t;return null===(t=this.market)||void 0===t?void 0:t.has_immediate_delivery_item},isWishable:function(){var t,e,n;return null===(t=this.item)||void 0===t||null===(e=t.product)||void 0===e||null===(n=e.additional_info)||void 0===n?void 0:n.is_wishable}},mounted:function(){var t=this;this.$nextTick((function(){var element=t.$refs.brandText;t.isOverflowing=element&&(element.offsetHeight+2<element.scrollHeight||element.offsetWidth<element.scrollWidth)}))},methods:{onClickBtnWish:function(t,e,n){var o=this;if(this.$loggedIn(this.$auth)){var r=new Promise((function(n){return o.$nuxt.$emit("onClickBtnWish",t,e,n)}));r.then((function(t){n(t)}))}else window.location.href="/login"},onClickBrand:function(){this.$router.push(this.$getBrandFeedUrl(this.brand.name))}}},h=(n(1195),n(64)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["product_item",{coming:"C"===t.displayType}]},[n("nuxt-link",{staticClass:"item_inner",attrs:{to:"/products/"+t.release.id+(t.size?"?size="+t.size:"")},nativeOn:{click:function(e){return t.onClick.apply(null,arguments)}}},[n("div",{staticClass:"thumb_box"},[n("Product",{attrs:{item:t.product,"sort-class":t.sortClass,"sort-value":t.sortValue,"display-type":t.displayType,date:t.release.date_released}}),n("client-only",[!t.hideWish&&t.isWishable?n("BtnWish",{attrs:{"default-wish-on":t.wishOn,item:t.item},on:{click:t.onClickBtnWish}}):t._e()],1)],1),n("div",{staticClass:"info_box"},[n("div",{staticClass:"brand",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.onClickBrand.apply(null,arguments)}}},[null!=t.brand&&t.$lodash.isEmpty(t.brand.name)?n("img",{staticClass:"brand-nike",attrs:{src:t.brand.logo,name:"brand-nike",alt:t.brand.name}}):t._e(),null==t.brand||t.$lodash.isEmpty(t.brand.name)?t._e():n("p",{ref:"brandText",class:["brand-text",{"long-name":t.isOverflowing},{"without-wish":t.hideWish}]},[t._v(" "+t._s(t.brand.name)+" ")])]),n("p",{staticClass:"name"},[t._v(t._s(t.name))]),t.isExpress?n("span",{staticClass:"express_mark"},[t._v(t._s(t.$t(t.$m.inventory)))]):t._e(),"C"!=t.displayType?n("div",{staticClass:"price"},[n("div",{class:["amount",t.$mq]},[n("em",{staticClass:"num"},[t._v(" "+t._s(t.price)+" ")]),t.havePrice?n("span",{class:["won",t.$mq]},[t._v("원")]):t._e()]),n("div",{staticClass:"desc"},[n("p",[t._v(t._s(t.priceLabel))])])]):t._e()])])],1)}),[],!1,null,"7a7b0197",null);e.a=component.exports},1195:function(t,e,n){"use strict";n(1100)},1201:function(t,e,n){},1545:function(t,e,n){"use strict";n(1201)},1610:function(t,e,n){"use strict";var o={methods:{onClick:function(){window.scrollTo(0,0)}}},r=(n(1545),n(64)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:["btn_top",t.$mq],on:{click:t.onClick}},[n("svg-icon",{staticClass:"ico-top",attrs:{name:"ico-top"}})],1)}),[],!1,null,"695163b8",null);e.a=component.exports},1989:function(t,e,n){},1990:function(t,e,n){},1991:function(t,e,n){},1992:function(t,e,n){},1993:function(t,e,n){},1994:function(t,e,n){},1995:function(t,e,n){},1996:function(t,e,n){},1997:function(t,e,n){},1998:function(t,e,n){},1999:function(t,e,n){},2e3:function(t,e,n){},2480:function(t,e,n){"use strict";n(1989)},2482:function(t,e,n){"use strict";n(1990)},2483:function(t,e,n){"use strict";n(1991)},2484:function(t,e,n){"use strict";n(1992)},2485:function(t,e,n){"use strict";n(1993)},2486:function(t,e,n){"use strict";n(1994)},2487:function(t,e,n){"use strict";n(1995)},2488:function(t,e,n){"use strict";n(1996)},2489:function(t,e,n){"use strict";n(1997)},2490:function(t,e,n){"use strict";n(1998)},2491:function(t,e,n){"use strict";n(1999)},2492:function(t,e,n){"use strict";n(2e3)},2515:function(t,e,n){"use strict";n.r(e);var o=n(2),r=(n(22),{props:{container:{type:Object,default:null}},computed:{notice:function(){return this.$lodash.isEmpty(this.container)||this.$lodash.isEmpty(this.container.items)?null:this.container.items[0]}}}),l=(n(2480),n(64)),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.notice?n("div",{staticClass:"notice",class:t.$mq},[n("div",{staticClass:"inner"},[n("a",{staticClass:"notice_title",attrs:{href:t.$replaceLegacyUrl(t.notice.destination_url)}},[t._v(" "+t._s(t.notice.title)+" ")])])]):t._e()}),[],!1,null,"119cc752",null).exports,d=n(2481),h=n.n(d),m=(n(32),n(71),{props:{container:{type:Object,default:function(){return{}}},isSlide:{type:Boolean,default:!1}},data:function(){return{clickX:0,clickY:0,touchY:0}},computed:{contents:function(){return this.isSlide?this.container:this.container.items?this.container.items[0]:[]},isProductContents:function(){return!this.$lodash.isEmpty(this.contents.product)&&!this.$lodash.isEmpty(this.contents.product.release)},bgColor:function(){var t;return(null===(t=this.contents)||void 0===t?void 0:t.background_color)||"#fff"},imgUrl:function(){var t=this.contents.background_wide_url||this.contents.background_url||this.contents.image_url;return"sm"===this.$mq?this.$resizeImage(this.contents.background_url,"l"):this.$resizeImage(t,"m_2560")},imageDescription:function(){return this.isProductContents?this.contents.product.release.translated_name:this.contents.description}},methods:{didStartClick:function(t){this.clickX=t.clientX,this.clickY=t.clientY,this.touchY=t.clientY},didEndClick:function(t){Math.abs(t.clientX-this.clickX)+Math.abs(t.clientY-this.clickY)<5&&2!==t.button&&(this.onClick(),this.$emit("click"))},didTouch:function(t){var e=t.touchY;Math.abs(e-this.touchY)>30&&t.stopPropagation(),this.touchY=e},onClick:function(){if(!this.isSlide){var t=this.$replaceLegacyUrl(this.contents.destination_url);t===this.contents.destination_url?(this.$lodash.isEmpty(this.contents.destination_url)||(window.location.href=this.contents.destination_url),this.$lodash.isEmpty(this.contents.product)||this.$lodash.isEmpty(this.contents.product.release)||this.$router.push("/products/".concat(this.contents.product.release.id))):this.$router.push(t)}}}}),f=(n(2482),Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner",class:t.$mq,on:{mousedown:t.didStartClick,touchstart:t.didStartClick,touchmove:t.didTouch,mouseup:t.didEndClick,touchend:t.didEndClick}},[n("div",{staticClass:"banner_item",style:{backgroundColor:""+t.bgColor}},[t.contents?n("div",{staticClass:"item_inner"},[n("div",{staticClass:"img_box"},[n("img",{staticClass:"banner_img",attrs:{src:""+t.imgUrl,alt:"banner"}})])]):t._e()])])}),[],!1,null,"06f0b6c1",null).exports),_={components:{Banner:f},props:{container:Object},data:function(){return{settings:{dots:!0,infinite:!0,arrows:!1,autoplay:!0,speed:600,autoplaySpeed:5e3,draggable:!0,fade:!0,swipe:!0},isLightBackground:!1,newSlideIndex:0}},mounted:function(){this.$nextTick((function(){this.$isMobile(this.$mq)&&(this.settings.fade=!1),this.onResize()})),window.addEventListener("resize",this.onResize),void 0!==this.$refs.banner_slide_0&&this.isLightColor(this.$refs.banner_slide_0.bgColor.toUpperCase())&&(this.isLightBackground=!0)},methods:{isLightColor:function(t){return h.a.contrast(t,"#FFF")<h.a.contrast(t,"#BBB")},onResize:function(){this.settings.arrows="lg"===this.$mq||"md"===this.$mq},onBeforeChangeCarousel:function(t,e){this.newSlideIndex=e,this.isLightColor(this.$refs["banner_slide_".concat(e)].bgColor.toUpperCase())?this.isLightBackground=!0:this.isLightBackground=!1},onClick:function(){var t=this.container.items[this.newSlideIndex],e=this.$replaceLegacyUrl(t.destination_url);e===t.destination_url?(this.$lodash.isEmpty(t.destination_url)||(window.location.href=t.destination_url),this.$lodash.isEmpty(t.product)||this.$lodash.isEmpty(t.product.release)||this.$router.push("/products/".concat(t.product.release.id))):this.$router.push(e)}}},v=(n(2483),Object(l.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return!t.$lodash.isEmpty(t.container)&&t.container.items?n("VueSlickCarousel",t._b({ref:"carousel",staticClass:"banner_slide",class:{banner_slide_light:t.isLightBackground},on:{beforeChange:t.onBeforeChangeCarousel}},"VueSlickCarousel",t.settings,!1),t._l(t.container.items,(function(e,o){return n("Banner",{key:o,ref:"banner_slide_"+o,refInFor:!0,attrs:{container:e,"is-slide":!0},on:{click:t.onClick}})})),1):t._e()}),[],!1,null,"04d03524",null).exports),C=(n(58),{props:{contents:Object}}),y=(n(2484),Object(l.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product_title",class:t.$mq},[n("div",{staticClass:"title"},[t._v(" "+t._s(t.contents.title)+" ")]),n("div",{staticClass:"sub_title"},[t._v(" "+t._s(t.contents.description)+" ")])])}),[],!1,null,"b71614ae",null).exports),w=n(19),k=(n(301),n(23),n(99),{components:{ProductItem:n(1175).a},props:{listOpen:{type:Boolean,default:!1},contents:{type:Array},displayType:{type:String,default:""}},data:function(){var t,e;return{index:0,pageSize:4,page:1,viewContents:(null===(t=this.contents)||void 0===t?void 0:t.length)>4?null===(e=this.contents)||void 0===e?void 0:e.slice(0,4):this.contents,cloneContents:[]}},computed:{haveMoreContents:function(){var t;return this.page<Math.abs((null===(t=this.contents)||void 0===t?void 0:t.length)/4)}},watch:{contents:{deep:!0,handler:function(t){var e,n;this.cloneContents=this.$lodash.cloneDeep(t),this.viewContents=null===(e=this.cloneContents)||void 0===e?void 0:e.slice(0,null===(n=this.viewContents)||void 0===n?void 0:n.length)}}},mounted:function(){this.setViewContents(this.contents)},methods:{onClickMore:function(){var t,e,n,o=(this.page-1)*this.pageSize+this.pageSize;null===(e=this.viewContents)||void 0===e||(t=e).splice.apply(t,[o,0].concat(Object(w.a)(null===(n=this.cloneContents)||void 0===n?void 0:n.slice(o,o+this.pageSize)))),this.page++},enter:function(t){setTimeout((function(){t.style.opacity=1}),10)},beforeEnter:function(t){t.style.opacity=0},setViewContents:function(t){var e;"sm"===this.$mq||"mo"===this.$mq?this.viewContents=t:(this.cloneContents=this.$lodash.cloneDeep(t),this.viewContents=null===(e=this.cloneContents)||void 0===e?void 0:e.slice(0,4))}}}),$=(n(2485),Object(l.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["product_list_wrap",{list_open:t.listOpen},t.$mq]},[n("transition-group",{staticClass:"product_list list_first",attrs:{name:"list",tag:"div"},on:{"before-enter":t.beforeEnter,enter:t.enter}},t._l(t.viewContents,(function(e,o){return n("ProductItem",{key:"item_"+o,attrs:{item:e,"display-type":t.displayType,"wish-on":!!(e&&e.product&&e.product.me)&&e.product.me.wish}})})),1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.haveMoreContents,expression:"haveMoreContents"}],staticClass:"btn_product"},[n("BaseButton",{attrs:{tag:"a",href:"#","style-type":"outlinegrey",size:"medium"},on:{onClick:t.onClickMore}},[t._v(" 더보기 ")])],1)],1)}),[],!1,null,"fb223474",null)),O=$.exports;installComponents($,{BaseButton:n(461).default});var x={components:{ProductTitle:y,ProductList:O},props:{container:{type:Object,default:function(){return{}}}},computed:{titleData:function(){return{title:this.container.title,description:this.container.description}},products:function(){var t,e=this.container.items;if(!this.$isMobile(this.$mq)&&(null===(t=e)||void 0===t?void 0:t.length)>8){var n=Math.floor(e.length/4);e=n>4?e.slice(0,16):e.slice(0,4*n)}return e}}},B=Object(l.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home_products"},[n("ProductTitle",{attrs:{contents:t.titleData}}),n("ProductList",{attrs:{"list-open":!1,contents:t.products,"display-type":t.container.list_display_type}})],1)}),[],!1,null,null,null).exports,E=(n(43),n(44),n(26),n(51),n(10)),S={props:{item:{type:Object,default:function(){return{}}}},computed:{imageUrl:function(){return this.$resizeImage(this.item.image_url,"m")},profileImageUrl:function(){return this.$resizeImage(Object(E.m)(this.item.logo_url),"sl")}},methods:{clickSytleCard:function(t){if(t.includes("/social/posts/")){var e=t.replace("/social/posts/","");this.$emit("clickStyleCard",e)}else this.$router.push(t)}}},T=(n(2486),{components:{SocialStyleCard:Object(l.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"style_card"},[n("a",{staticClass:"card_link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickSytleCard(t.item.destination_url)}}},[n("img",{staticClass:"img_card",attrs:{src:t.imageUrl,alt:"스타일 카드"}}),n("div",{staticClass:"profile_img_box"},[n("img",{staticClass:"img_profile",attrs:{src:t.profileImageUrl,alt:"사용자 프로필 이미지"}})]),n("p",{staticClass:"user_name"},[t._v(t._s(t.item.title))])])])}),[],!1,null,"1f47ba04",null).exports},props:{container:{type:Object,default:function(){return{}}}},data:function(){return{settings:{dots:!1,arrows:!1,slidesToShow:6,slidesToScroll:1,speed:500,responsive:[{breakpoint:961,settings:{slidesToShow:5}}],infinite:!0}}},computed:{items:function(){var t;return null===(t=this.container)||void 0===t?void 0:t.items},slidesToShow:function(){return"lg"===this.$mq?6:5}},created:function(){var t=this;this.$nextTick((function(){t.$isMobile(t.$mq)||(t.settings.arrows=!0)}))},methods:{hasNext:function(t,e){return t+this.slidesToShow<e},moveToPost:function(t){this.$router.push("/social/picks?id=".concat(this.container.id,"#p").concat(t))}}}),j=(n(2487),Object(l.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",{staticClass:"social_style_slide"},[n("div",{staticClass:"style_title"},[n("span",[t._v(t._s(t.container.title))])]),n("div",{staticClass:"style_content"},[!t.$isMobile(t.$mq)&&t.items?n("div",{staticClass:"style_slide"},[n("VueSlickCarousel",t._b({ref:"carousel",scopedSlots:t._u([{key:"prevArrow",fn:function(t){return[n("div",{staticClass:"custom-arrow"})]}},{key:"nextArrow",fn:function(t){return[n("div",{staticClass:"custom-arrow"})]}}],null,!1,3880605311)},"VueSlickCarousel",t.settings,!1),t._l(t.items,(function(e){return n("SocialStyleCard",{key:e.id,attrs:{item:e},on:{clickStyleCard:t.moveToPost}})})),1)],1):n("div",{staticClass:"style_list"},t._l(t.items,(function(e){return n("SocialStyleCard",{key:e.id,attrs:{item:e},on:{clickStyleCard:t.moveToPost}})})),1)])])])}),[],!1,null,"4932ba0c",null).exports),L={props:{item:{type:Object,default:function(){}}},computed:{image:function(){var t;return this.$isMobile(this.$mq)?this.item.background_url:(null===(t=this.item.background_wide_url)||void 0===t?void 0:t.includes("?type"))?this.item.background_wide_url:"".concat(this.item.background_wide_url,"?type=m")}},methods:{click:function(t){(null==t?void 0:t.destination_url)&&(location.href=null==t?void 0:t.destination_url)}}},D=(n(2488),Object(l.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shortcut_item",on:{click:function(e){return e.preventDefault(),t.click(t.item)}}},[n("div",{staticClass:"shortcut_item_img_wrap"},[n("BaseImage",{staticClass:"shortcut_item_img_bg",style:{backgroundColor:t.item.background_color},attrs:{url:t.image}})],1),n("p",{staticClass:"shortcut_item_title"},[t._v(t._s(t.item.title))])])}),[],!1,null,"2bfcd244",null)),I=D.exports;installComponents(D,{BaseImage:n(803).default});var W={components:{HomeShortcut:I,ProductTitle:y},props:{container:{type:Object,default:function(){}}},computed:{chunks:function(){return this.$lodash.chunk(this.container.items,5)}}},M=(n(2489),Object(l.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shortcut_collection"},[t.container.title?n("ProductTitle",{attrs:{contents:t.container}}):t._e(),n("div",{staticClass:"shortcut_items_wrap"},t._l(t.chunks,(function(e,o){return n("div",{key:o,staticClass:"shortcut_items"},t._l(e,(function(t,e){return n("HomeShortcut",{key:e,attrs:{item:t}})})),1)})),0)],1)}),[],!1,null,"6ecd6fa2",null).exports),A=n(277),P={props:{container:{type:Object,default:function(){return{}}},bannerSlide:{type:Object,default:function(){return{}}}},computed:{component:function(){switch(this.container.view_type){case A.b.slim_banner:return c;case A.b.banner:return this.container.id===this.bannerSlide.id?v:f;case A.b.card:return B;case A.b.style_collection:return j;case A.b.shortcut_collection:return M;default:return null}}}},N=Object(l.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.component?n(t.component,{tag:"component",attrs:{container:t.container}}):t._e()}),[],!1,null,null,null).exports,H=n(836),R=n(826),z={components:{HomeCard:N,ListLoading:H.a},mixins:[R.a],props:{bannerSlide:{type:Object,default:function(){}}}},U=(n(2490),Object(l.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home_card_list"},[t._l(t.list,(function(e){return n("HomeCard",{key:e.id,attrs:{container:e,"banner-slide":t.bannerSlide}})})),n("ListLoading",{directives:[{name:"show",rawName:"v-show",value:t.loading&&t.hasNext,expression:"loading && hasNext"}]})],2)}),[],!1,null,"35198b53",null).exports),F=n(857),V=n(296),Y={methods:{onClickDownloadApp:function(){window.open(V.b.HOME,"_blank")}}},X=(n(2491),Object(l.a)(Y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"download_banner",class:t.$mq},[n("div",{staticClass:"banner_box"},[n("div",{staticClass:"thumb"},[n("svg-icon",{staticClass:"logo-app",attrs:{name:"logo-app"}})],1),n("div",{staticClass:"banner_info"},[n("p",{staticClass:"banner_title"},[t._v(" 한정판 거래 플랫폼, KREAM"),n("br"),t._v("앱 설치 후 사용해보세요 "),n("a",{staticClass:"btn_appdown",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onClickDownloadApp.apply(null,arguments)}}},[t._v("앱 다운로드")])])]),n("a",{staticClass:"btn_close",attrs:{href:"#","aria-label":"닫기"},on:{click:function(e){return e.preventDefault(),t.$emit("hide")}}},[n("svg-icon",{staticClass:"ico-nav-close",attrs:{name:"ico-nav-close"}})],1)])])}),[],!1,null,"1b035e08",null)),K=X.exports,J=n(1088),G=n(814),Q=n(1610),Z=n(305),tt=n(173),et=n(464),nt={components:{HomeCardList:U,BannerBottom:F.a,DownloadBanner:K,LayerInterest:J.a,BtnTop:Q.a,LayerAppdownForFaq:G.a},beforeRouteLeave:function(t,e,n){n((function(t){t.$nuxt.$off("onClickBtnWish")}))},layout:"search",middleware:[et.validateAppleLogin],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.app,!((null===(n=tt.$home.containers)||void 0===n?void 0:n.length)<1)){e.next=4;break}return e.next=4,tt.$home.fetchHomeCardContainers().catch((function(){}));case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{showLayer:!1,onMwScroll:!1,titleData:[{title:"Just Dropped",subTitle:"발매 상품"},{title:"Most Popular",subTitle:"인기 상품"},{title:"Jordan",subTitle:"추천 상품"}],layerOpenWish:!1,layerOpenAppDownload:!1,selectedWishItem:null,hideDownloadBanner:!1,loading:!1}},head:function(){return{meta:[{hid:"facebook-domain-verification",name:"facebook-domain-verification",content:"sk2tlhnlubmwgd31gjkbrmvh1q3dms"},{hid:"description",name:"description",content:"한정판을 거래하는 가장 확실한 방법. 럭키드로우, 발매정보, 패션트렌드도 이제 KREAM(크림)!"}],script:[Object(Z.a)("WebSite",{url:"https://kream.co.kr/",potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://kream.co.kr/search?keyword={search_term_string}"},"query-input":"required name=search_term_string"}})]}},computed:{bannerSlide:function(){return tt.$home.topBanner},showDownloadBanner:function(){return this.$isMobile(this.$mq)&&!this.hideDownloadBanner&&!this.onMwScroll&&!this.$isInAppBrowser(this.$ua)},homeCardContainers:function(){return tt.$home.response.items},hasNext:function(){var t,e,n;return(null===(t=tt.$home.response)||void 0===t?void 0:t.total)>(null===(n=null===(e=tt.$home.response)||void 0===e?void 0:e.items)||void 0===n?void 0:n.length)}},watch:{showDownloadBanner:function(){this.toggleBanner()}},created:function(){var t=this;this.$nuxt.$on("onClickBtnWish",(function(e,n,o){t.layerOpenWish=!0,t.selectedWishItem=e,o(!!(e&&e.product&&e.product.me)&&e.product.me.wish)}))},beforeDestroy:function(){this.$nuxt.$off("onClickBtnWish"),document.body.classList.remove("show_banner")},mounted:function(){var t,e=this;window.addEventListener("scroll",this.scrollEvent),(null===(t=this.homeCardContainers)||void 0===t?void 0:t.length)<1&&tt.$home.fetchHomeCardContainers(),this.$nextTick((function(){e.toggleBanner(),"#contact"===e.$route.hash&&(e.layerOpenAppDownload=!0)}))},methods:{scrollEvent:function(){window.pageYOffset>0?this.onMwScroll=!0:this.onMwScroll=!1},onWishModalClose:function(t,e){if(t){var n=this.$lodash.cloneDeep(e);tt.$home.updateProductByIndex(n)}this.layerOpenWish=!1},toggleBanner:function(){this.showDownloadBanner?document.body.classList.add("show_banner"):document.body.classList.remove("show_banner")},loadMore:function(){var t=this;!this.loading&&this.hasNext&&(this.loading=!0,this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,tt.$home.fetchHomeCardContainers(null===(n=tt.$home.response)||void 0===n?void 0:n.next_cursor);case 2:t.loading=!1;case 3:case"end":return e.stop()}}),e)})))))}}},it=(n(2492),Object(l.a)(nt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["container"]},[n("div",{class:["home",t.$mq]},[n("transition",{attrs:{name:"kream-op"}},[n("DownloadBanner",{directives:[{name:"show",rawName:"v-show",value:t.showDownloadBanner,expression:"showDownloadBanner"}],on:{hide:function(e){t.hideDownloadBanner=!0}}})],1),n("HomeCardList",{attrs:{list:t.homeCardContainers,"banner-slide":t.bannerSlide,"has-next":t.hasNext},on:{scrollBottom:t.loadMore}})],1),n("BannerBottom"),t.layerOpenWish?n("LayerInterest",{attrs:{product:t.selectedWishItem,"layer-open-interest":t.layerOpenWish},on:{close:t.onWishModalClose}}):t._e(),t.layerOpenAppDownload?n("LayerAppdownForFaq",{attrs:{type:"install",contents:{title:t.$t(t.$m.contactConfirmOnlyApp)},"layer-open-appdown":t.layerOpenAppDownload},on:{closeLayerAppdown:function(e){t.layerOpenAppDownload=!1}}}):t._e(),n("BtnTop",{directives:[{name:"show",rawName:"v-show",value:t.onMwScroll,expression:"onMwScroll"}]})],1)}),[],!1,null,"1e7cdca6",null));e.default=it.exports},800:function(t,e,n){},803:function(t,e,n){"use strict";n.r(e);var o={props:{alt:{type:String},url:{type:String},type:{type:String},mediaType:{type:Object}},data:function(){return{breakpointWidth:{lg:960,md:769,mo:450,sm:0},breakpoints:["lg","md","mo","sm"]}}},r=(n(807),n(64)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",{staticClass:"picture"},[t.mediaType?t._l(t.breakpoints,(function(e,o){return n("source",{key:"webp"+o,attrs:{type:"image/webp",srcset:t.$resizeImage(t.url,t.mediaType[e]||t.type)+"_webp",media:"(min-width: "+t.breakpointWidth[e]+"px)"}})})):n("source",{attrs:{type:"image/webp",srcset:t.$resizeImage(t.url,t.type)+"_webp"}}),t.mediaType?t._l(t.breakpoints,(function(e,o){return n("source",{key:o,attrs:{srcset:t.$resizeImage(t.url,t.mediaType[e]||t.type),media:"(min-width: "+t.breakpointWidth[e]+"px)"}})})):n("source",{attrs:{srcset:t.$resizeImage(t.url,t.type)}}),n("img",{staticClass:"image",attrs:{alt:t.alt,src:t.$resizeImage(t.url,t.type)}})],2)}),[],!1,null,"548c90f9",null);e.default=component.exports},804:function(t,e,n){"use strict";var o={props:{item:{type:Object},sortClass:{type:String,default:null},sortValue:{type:String,default:null},date:{type:String,default:null},displayType:{type:String,default:""},imageSize:{type:String,default:"m"},hasStockedMark:{type:Boolean,default:!1},isFlat:{type:Boolean,default:!1},isExclusive:{type:Boolean,default:!1}},computed:{imageUrl:function(){return this.$lodash.isEmpty(this.item.image_url)?"/images/common_thumbs_blank_L.png":this.item.image_url},bgColor:function(){return this.$lodash.isEmpty(this.item.background_color)?"#f2f2f2":this.item.background_color}},methods:{}},r=(n(816),n(64)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["product",{is_flat:t.isFlat},{is_exclusive:t.isExclusive}],style:{backgroundColor:""+t.bgColor}},[n("BaseImage",{staticClass:"product_img",attrs:{alt:t.item.name||"상품 이미지",url:t.imageUrl,type:t.imageSize}}),t.sortValue?n("div",{class:["status_value",t.sortClass]},[t._v(" "+t._s(("premium_up"===t.sortClass?"+":"")+t.sortValue)+" ")]):t._e(),"C"==t.displayType?n("div",{staticClass:"product_date"},[n("p",{staticClass:"month"},[n("em",[t._v(t._s(t._f("formatMonth")(t.date))+" ")]),t._v("월 ")]),n("p",{staticClass:"day"},[t._v(t._s(t._f("formatDate")(t.date)))])]):t._e(),t.hasStockedMark?n("em",{staticClass:"stocked_status_mark"},[t._v(" 95점 ")]):t._e(),t._t("innerText")],2)}),[],!1,null,"75e33658",null);e.a=component.exports;installComponents(component,{BaseImage:n(803).default})},806:function(t,e,n){},807:function(t,e,n){"use strict";n(800)},816:function(t,e,n){"use strict";n(806)},819:function(t,e,n){},820:function(t,e,n){},822:function(t,e,n){},823:function(t,e,n){t.exports=n.p+"img/loading.410eb77.gif"},825:function(t,e,n){"use strict";var o={},r=(n(843),n(64)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["result_nodata",t.$mq]},[n("p",{staticClass:"nodata_main"},[t._v("검색하신 결과가 없습니다.")]),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"nodata_sub"},[t._v(" 상품 등록 요청은 앱 "),n("span",{staticClass:"emphasis"},[t._v("1:1 문의하기")]),t._v(" 로 요청해주세요. ")])}],!1,null,"6b4bafe8",null);e.a=component.exports},826:function(t,e,n){"use strict";n(26),n(51);e.a={data:function(){return{loading:!1,footerOffsetHeight:null}},props:{list:{type:Array,default:function(){return[]}},hasNext:{type:Boolean,default:!1}},watch:{list:function(){this.loading=!1}},mounted:function(){var t=this;this.$nextTick((function(){t.offScroll||(t.setFooterOffsetHeight(),t.footerOffsetHeight>0&&window.addEventListener("scroll",t.scroll))}))},beforeDestroy:function(){window.removeEventListener("scroll",this.scroll)},methods:{scroll:function(){var t=document.documentElement.scrollHeight-window.innerHeight-this.footerOffsetHeight;this.hasNext&&!this.loading&&window.pageYOffset>t&&(this.loading=!0,this.$emit("scrollBottom"))},setFooterOffsetHeight:function(){try{var footer=document.getElementsByClassName("footer")[0];this.footerOffsetHeight=footer?footer.offsetHeight:0;var t=document.querySelector(".content");if(t&&(this.footerOffsetHeight=this.footerOffsetHeight+2*window.getComputedStyle(t).getPropertyValue("padding-bottom").replace("px","")),this.$isMobile(this.$mq)){var e=document.querySelector(".banner_bottom");e&&(this.footerOffsetHeight=this.footerOffsetHeight+e.offsetHeight)}}catch(t){this.footerOffsetHeight=0}}}}},836:function(t,e,n){"use strict";var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list_loading"},[e("img",{staticClass:"loading_img",attrs:{src:n(823),alt:"리스트 로딩중입니다."}})])}],r={},l=(n(904),n(64)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"538d2574",null);e.a=component.exports},839:function(t,e,n){},843:function(t,e,n){"use strict";n(819)},844:function(t,e,n){"use strict";n(820)},845:function(t,e,n){"use strict";n(123),n(26),n(51);var o={components:{ResultNodata:n(825).a},props:{inputValue:{type:String,default:""},suggests:{type:Array},clickable:{type:Boolean,default:!0}},computed:{suggestTotal:function(){return""!==this.inputValue?this.suggests.length:0},noResultAvailable:function(){return""!==this.inputValue&&0===this.suggestTotal}},methods:{imageUrl:function(t){var e=t.image_url||"/images/common_thumbs_blank_L.png";if(e.startsWith("https://res.cloudinary.com")){var n=/b_rgb:[0-9a-z]+,f_(jpg|png)\//;if(n.test(e))return e.replace(n,"")}return e},onClick:function(){this.$emit("onClickSuggestList")}}},r=(n(844),n(64)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.noResultAvailable?n("ResultNodata"):n("div",{class:["suggest_list",t.$mq]},t._l(t.suggests,(function(e,o){return n("div",{key:o,staticClass:"suggest_item",on:{click:t.onClick}},[t.clickable?n("nuxt-link",{staticClass:"suggest_link",attrs:{to:"/products/"+e.id}},[n("div",{staticClass:"suggest_thumb",style:{backgroundColor:""+e.bgcolor}},[n("img",{staticClass:"thumb_img",attrs:{src:t.imageUrl(e),alt:e.translated_name}})]),n("div",{staticClass:"suggest_info"},[n("p",{staticClass:"model_title"},[t._v(t._s(e.name))]),n("p",{staticClass:"model_sub_info"},[t._v(t._s(e.translated_name))])])]):n("div",{staticClass:"suggest_link"},[n("div",{staticClass:"suggest_thumb"},[t.$lodash.isEmpty(e.image_url)?t._e():n("img",{staticClass:"thumb_img",attrs:{src:t.imageUrl(e),alt:e.translated_name}})]),n("div",{staticClass:"suggest_info"},[n("p",{staticClass:"model_title"},[t._v(t._s(e.name))]),n("p",{staticClass:"model_sub_info"},[t._v(t._s(e.translated_name))])])])],1)})),0)}),[],!1,null,"2741e9de",null);e.a=component.exports},853:function(t,e,n){"use strict";n(822)},857:function(t,e,n){"use strict";n(26),n(51);var o=n(814),r=n(296),l={components:{LayerAppdown:o.a},data:function(){return{banners:[{subTitle:"service guide",Title:"KREAM은 처음이지? \n서비스 소개를 확인해보세요.",infoText:"서비스 안내",path:"/about",target:"_blank"},{subTitle:"download the app",Title:"KREAM 앱을 설치하여 \n한정판 스니커즈를 FLEX 하세요!",infoText:"앱 설치하기",path:"/download"}],showLayerAppdown:!1}},methods:{changeHtml:function(text){return text.replace(/(?:\r\n|\r|\n)/g,"<br />")},onClickBanner:function(path,t){if("/download"!==path)if(this.$lodash.isEmpty(t)||"_blank"!==t)this.$router.push(path);else{var e=this.$router.resolve({path:path});window.open(e.href,"_blank")}else this.$isMobile(this.$mq)?window.open(r.b.HOME,"_blank"):this.showLayerAppdown=!this.showLayerAppdown}}},c=(n(853),n(64)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["banner_bottom",t.$mq]},[t._l(t.banners,(function(e,o){return n("a",{key:o,staticClass:"banner_box",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.onClickBanner(e.path,e.target)}}},[n("div",{staticClass:"banner_info"},[n("strong",{staticClass:"info_subtitle"},[t._v(t._s(e.subTitle))]),n("p",{staticClass:"info_title",domProps:{innerHTML:t._s(t.changeHtml(e.Title))}}),n("span",{staticClass:"info_txt"},[t._v(t._s(e.infoText))])])])})),t.showLayerAppdown?n("LayerAppdown",{attrs:{type:"install","layer-open-appdown":t.showLayerAppdown},on:{closeLayerAppdown:function(e){t.showLayerAppdown=!1}}}):t._e()],2)}),[],!1,null,"11ddc032",null);e.a=component.exports},904:function(t,e,n){"use strict";n(839)},912:function(t,e,n){},948:function(t,e,n){},949:function(t,e,n){},950:function(t,e,n){},951:function(t,e,n){}}]);