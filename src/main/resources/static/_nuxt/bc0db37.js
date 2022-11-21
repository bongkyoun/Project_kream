(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1227:function(t,e,n){},1228:function(t,e,n){},1479:function(t,e,n){"use strict";var o=n(2),r=(n(22),n(799)),l={props:{isFollowing:{type:Boolean,default:!1},isFollowedBy:{type:Boolean,default:!1},userId:{type:String,default:""},size:{type:String,default:"medium"}},computed:{style:function(){return this.isFollowing?"outlinegrey":"solid"},message:function(){return this.isFollowing?this.$t(this.$m.socialFollowing):this.isFollowedBy?this.$t(this.$m.socialMutualFollowing):this.$t(this.$m.socialFollow)}},methods:{switchFollow:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$loggedIn(t.$auth)){e.next=3;break}return t.$router.push("/login"),e.abrupt("return");case 3:return n=!t.isFollowing,e.prev=4,e.next=7,Object(r.k)(t.userId,n);case 7:t.$emit("updateUserFollowingState",t.userId,n),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(4);case 12:case"end":return e.stop()}}),e,null,[[4,10]])})))()}}},c=(n(1555),n(64)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BaseButton",{class:["btn_follow",t.size],attrs:{size:t.size,"style-type":t.style},on:{onClick:t.switchFollow}},[t._v(" "+t._s(t.message)+" ")])}),[],!1,null,"7611bfce",null);e.a=component.exports;installComponents(component,{BaseButton:n(461).default})},1555:function(t,e,n){"use strict";n(1227)},1556:function(t,e,n){"use strict";n(1228)},1622:function(t,e,n){"use strict";var o=n(836),r=n(1479),l={components:{ListLoading:o.a,SocialFollowButton:r.a},props:{list:{type:Array,default:function(){return[]}},hasNext:{type:Boolean,default:!1}},data:function(){return{loading:!1}},computed:{showEmpty:function(){return 0===this.list.length}},watch:{list:function(){this.loading=!1}},mounted:function(){var t=this.$refs.list;t&&t.addEventListener("scroll",this.scroll)},methods:{updateUserFollowingState:function(t,e){this.$emit("updateUserFollowingState",t,e)},scroll:function(){var t=this.$refs.list;this.$isMobile(this.$mq)?t.scrollTop+t.clientHeight>=window.pageYOffset&&this.loadMore():t.scrollTop+t.clientHeight>=t.scrollHeight&&this.loadMore()},canFollow:function(t){return!this.$auth.user||this.$auth.user&&"".concat(this.$auth.user.id)!==t},moveToUser:function(t){this.$router.push("/social/users/".concat(t))},loadMore:function(){var t=this;!this.loading&&this.hasNext&&(this.loading=!0,this.$nextTick((function(){t.$emit("showMore")})))}}},c=(n(1556),n(64)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user_list_content"},[n("ul",{ref:"list",staticClass:"user_list"},[t._l(t.list,(function(e){return n("li",{key:e.id,staticClass:"user_item"},[n("div",{staticClass:"user_box"},[n("a",{staticClass:"user_link",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.moveToUser(e.username)}}},[n("div",{staticClass:"img_box"},[n("img",{staticClass:"profile_img",attrs:{src:e.imgURL,alt:"KREAM 프로필 이미지"}})]),n("div",{staticClass:"info_box"},[n("span",{class:["user_name",{is_official:e.isVerified}]},[n("span",{staticClass:"user_name_text"},[t._v(t._s(e.id))])]),n("span",{staticClass:"user_subname"},[t._v(t._s(t.$lodash.unescape(e.displayName)))])])]),n("div",{staticClass:"user_box_follow"},[t.canFollow(e.userId)?n("SocialFollowButton",{attrs:{"is-following":e.isFollowing,"user-id":e.userId,"is-followed-by":e.isFollowedBy,size:"small"},on:{updateUserFollowingState:t.updateUserFollowingState}}):t._e()],1)])])})),n("ListLoading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],2),t.showEmpty?t._t("empty"):t._e()],2)}),[],!1,null,"754300ce",null);e.a=component.exports},1911:function(t,e,n){},2025:function(t,e,n){"use strict";var o=n(19),r=n(2),l=(n(21),n(11),n(23),n(42),n(22),n(1622)),c=n(932),f=n(54),d=n(799),h={components:{SocialUserFollowList:l.a,SocialFeedsEmpty:c.a},props:{showLayer:{type:Boolean,default:!1},userName:{type:String,default:""},id:{type:String,default:"-1"},counts:{type:Array,default:function(){return[]}},selectedTabKey:{type:String,default:""}},data:function(){return{followers:{},followings:{},loading:!1,initialLoad:!0}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$isMobile(t.$mq)){e.next=9;break}return e.next=3,t.load("followers");case 3:return t.followers=e.sent,e.next=6,t.load("following");case 6:t.followings=e.sent,e.next=11;break;case 9:return e.next=11,t.showMore();case 11:t.initialLoad=!1;case 12:case"end":return e.stop()}}),e)})))()},computed:{selectedTab:function(){var t=this;if(this.$lodash.isEmpty(this.selectedTabKey))return{};var e=this.counts.filter((function(e){return e.key===t.selectedTabKey}));return e.length>0?e[0]:{}},users:function(){return"FOLLOWER"===this.selectedTabKey?this.followers:this.followings}},methods:{showMore:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:n="FOLLOWER"===t.selectedTabKey?t.followers:t.followings,e.t0=t.selectedTabKey,e.next="FOLLOWER"===e.t0?6:"FOLLOWING"===e.t0?10:14;break;case 6:return e.next=8,t.load("followers",n);case 8:return t.followers=e.sent,e.abrupt("break",14);case 10:return e.next=12,t.load("following",n);case 12:return t.followings=e.sent,e.abrupt("break",14);case 14:case"end":return e.stop()}}),e)})))()},load:function(t){var e=arguments,n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var l,c,h,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l=e.length>1&&void 0!==e[1]?e[1]:{next_cursor:void 0,items:[]},n.loading=!0,c=void 0===l.next_cursor?"":"?cursor=".concat(l.next_cursor),r.prev=3,r.next=6,Object(d.m)("/api/s/users/".concat(n.id,"/").concat(t.toLowerCase(),"/").concat(c));case 6:return h=r.sent,(data=h.data).items=[].concat(Object(o.a)(l.items||[]),Object(o.a)(data.items.map((function(t){return new f.n(t)})))),n.loading=!1,r.abrupt("return",data);case 13:return r.prev=13,r.t0=r.catch(3),r.abrupt("return",l);case 16:case"end":return r.stop()}}),r,null,[[3,13]])})))()},generateFollowUsers:function(t,e,n){return(t||[]).map((function(t){return t.userId===e?Object.assign({},t,{isFollowing:n}):t}))},updateUserFollowingState:function(t,e){this.$emit("updateUserFollowingState",t,e),this.followers.items=this.generateFollowUsers(this.followers.items,t,e),this.followings.items=this.generateFollowUsers(this.followings.items,t,e)}}},m=h,w=(n(2402),n(64)),component=Object(w.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseLayer",{staticClass:"layer_social_user_list",attrs:{"show-layer":t.showLayer},on:{close:function(e){return t.$emit("close")}}},[n("h2",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t(t.selectedTab.title))+" "),n("span",{staticClass:"count"},[t._v(t._s(t.selectedTab.count))])]),n("template",{slot:"content"},[n("mq-layout",{staticClass:"user_list_tab",attrs:{mq:["sm","mo"]}},[n("ul",{staticClass:"tab_list"},t._l(t.counts,(function(e,o){return n("li",{key:o,class:["tab_item",{tab_on:t.selectedTabKey===e.key}]},[n("a",{staticClass:"tab_link",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.$emit("changeTab",e.key)}}},[n("span",{staticClass:"menu_count"},[t._v(t._s(e.count))]),n("span",{staticClass:"tab_menu"},[t._v(t._s(t.$t(e.title)))])])])})),0)]),t.initialLoad||(t.users.items||[]).length>0?n("SocialUserFollowList",{attrs:{list:t.users.items||[],loading:t.loading,"has-next":null!=t.users.next_cursor},on:{updateUserFollowingState:t.updateUserFollowingState,showMore:t.showMore}}):n("SocialFeedsEmpty",{attrs:{type:t.selectedTabKey,"empty-user-name":t.userName}})],1),n("a",{staticClass:"btn_layer_close",attrs:{slot:"btnClose"},on:{click:function(e){return e.preventDefault(),t.$emit("close")}},slot:"btnClose"},[n("svg-icon",{staticClass:"ico-close",attrs:{name:"ico-close"}})],1)],2)}),[],!1,null,"37cbff31",null);e.a=component.exports;installComponents(component,{BaseLayer:n(462).default})},2402:function(t,e,n){"use strict";n(1911)},801:function(t,e,n){(function(e){const o=n(805),path=n(463),r=n(808);function l(t){console.log(`[dotenv][DEBUG] ${t}`)}const c=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,f=/\\n/g,d=/\r\n|\n|\r/;function h(t,e){const n=Boolean(e&&e.debug),o={};return t.toString().split(d).forEach((function(line,t){const e=line.match(c);if(null!=e){const t=e[1];let n=e[2]||"";const r=n.length-1,l='"'===n[0]&&'"'===n[r];"'"===n[0]&&"'"===n[r]||l?(n=n.substring(1,r),l&&(n=n.replace(f,"\n"))):n=n.trim(),o[t]=n}else n&&l(`did not match key and value when parsing line ${t+1}: ${line}`)})),o}t.exports.config=function(t){let n=path.resolve(e.cwd(),".env"),c="utf8",f=!1;var d;t&&(null!=t.path&&(n="~"===(d=t.path)[0]?path.join(r.homedir(),d.slice(1)):d),null!=t.encoding&&(c=t.encoding),null!=t.debug&&(f=!0));try{const t=h(o.readFileSync(n,{encoding:c}),{debug:f});return Object.keys(t).forEach((function(n){Object.prototype.hasOwnProperty.call(e.env,n)?f&&l(`"${n}" is already defined in \`process.env\` and will not be overwritten`):e.env[n]=t[n]})),{parsed:t}}catch(t){return{error:t}}},t.exports.parse=h}).call(this,n(65))},805:function(t,e){},808:function(t,e){e.endianness=function(){return"LE"},e.hostname=function(){return"undefined"!=typeof location?location.hostname:""},e.loadavg=function(){return[]},e.uptime=function(){return 0},e.freemem=function(){return Number.MAX_VALUE},e.totalmem=function(){return Number.MAX_VALUE},e.cpus=function(){return[]},e.type=function(){return"Browser"},e.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},e.networkInterfaces=e.getNetworkInterfaces=function(){return{}},e.arch=function(){return"javascript"},e.platform=function(){return"browser"},e.tmpdir=e.tmpDir=function(){return"/tmp"},e.EOL="\n",e.homedir=function(){return"/"}},823:function(t,e,n){t.exports=n.p+"img/loading.410eb77.gif"}}]);