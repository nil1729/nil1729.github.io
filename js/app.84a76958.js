(function(t){function e(e){for(var s,r,l=e[0],c=e[1],o=e[2],f=0,d=[];f<l.length;f++)r=l[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"040c":function(t,e,a){},"1c1c":function(t,e,a){},"2aa2":function(t,e,a){},"2eeb":function(t,e,a){"use strict";var s=a("040c"),n=a.n(s);n.a},"3bd4":function(t,e,a){"use strict";var s=a("cbfa"),n=a.n(s);n.a},"46b9":function(t,e,a){t.exports=a.p+"img/4.270f55ff.png"},4809:function(t,e,a){"use strict";var s=a("1c1c"),n=a.n(s);n.a},"4c56":function(t,e,a){t.exports=a.p+"img/1.ca9faf5f.png"},"55e0":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("app-navbar"),a("router-view"),a("app-footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{ref:"header_navbar",staticClass:"header_area",class:{navbar_fixed:t.navbar_fixed}},[a("div",{staticClass:"main_menu"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand logo_h",attrs:{to:"/"}},[t._v(" Nilanjan Deb ")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse offset",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"nav navbar-nav menu_nav justify-content-end"},[a("router-link",{staticClass:"nav-item",attrs:{exact:"",tag:"li",to:"/","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("Home")])]),t._m(1),t._m(2),t._m(3),a("router-link",{staticClass:"nav-item",attrs:{tag:"li",to:"/contact","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("Contact me")])])],1)])],1)])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("About")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Portfolio")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item submenu dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Blogs")])])}],c={name:"Navbar",data:function(){return{navbar_fixed:!1}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.$refs.header_navbar.getBoundingClientRect().top<-100?this.navbar_fixed=!0:this.navbar_fixed=!1}}},o=c,u=(a("a7c3"),a("2877")),f=Object(u["a"])(o,r,l,!1,null,null,null),d=f.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer_area"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"footer_top flex-column"},[a("div",{staticClass:"footer_logo"},[a("h5",[a("span",{staticClass:"fa fa-code"}),t._v(" with "),a("span",{staticClass:"fa fa-heart"}),t._v(" and "),a("span",{staticClass:"fa fa-coffee"})]),a("h4",[t._v("Nilanjan Deb")])]),a("div",{staticClass:"footer_social"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-github"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-linkedin-in"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter"})])])])])])]),a("div",{staticClass:"credit_footer text-right"},[a("h5",{staticClass:"col-lg-8 col-sm-12 ml-auto mr-5 lead mt-2"},[t._v(" Template by "),a("a",{attrs:{href:"#",target:"_blank"}},[t._v("Colorlib")])])])])}],p={},g=p,_=(a("3bd4"),Object(u["a"])(g,m,v,!1,null,null,null)),b=_.exports,h={name:"App",components:{"app-navbar":d,"app-footer":b}},C=h,x=(a("5c0b"),Object(u["a"])(C,n,i,!1,null,null,null)),y=x.exports,w=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fragment",[a("my-intro"),a("my-about"),a("my-skill"),a("my-newsletter")],1)},E=[],k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"home_banner_area"},[s("div",{staticClass:"banner_inner"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-7"},[s("div",{staticClass:"banner_content"},[s("h3",{staticClass:"text-uppercase"},[t._v("Hell0")]),s("h1",{staticClass:"text-uppercase"},[t._v("I am Nilanjan")]),s("h5",{staticClass:"text-uppercase"},[t._v("Web Developer • Undergradute Student")]),s("div",{staticClass:"d-flex align-items-center"},[s("a",{staticClass:"primary_btn tr-bg",attrs:{href:"#"}},[s("span",[t._v("My Portfolio")])]),s("a",{staticClass:"primary_btn tr-bg",attrs:{href:"#"}},[s("span",[t._v("Get in Touch")])])])])]),s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"home_right_img"},[s("img",{attrs:{src:a("ef9e"),alt:""}})])])])])])])}],O={},S=O,P=(a("4809"),Object(u["a"])(S,k,$,!1,null,null,null)),N=P.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"about_area section_gap"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-start align-items-center"},[s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"about_img"},[s("img",{attrs:{src:a("8132"),alt:""}})])]),s("div",{staticClass:"offset-lg-1 col-lg-5"},[s("div",{staticClass:"main_title text-left"},[s("h2",[t._v(" let’s "),s("br"),t._v("Introduce about "),s("br"),t._v("myself ")]),s("p",[t._v(" Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their. Beast creepeth. Fish days. ")]),s("p",[t._v(" Is give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering whose gathered cattle let. Creature whales fruit unto meat the life beginning all in under give two. ")]),s("a",{staticClass:"primary_btn",attrs:{href:"#"}},[s("span",[t._v("My Resume")])])])])])])])}],D={},T=D,L=(a("67e9"),Object(u["a"])(T,M,I,!1,null,null,null)),q=L.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"brand_area section_gap_bottom"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"row"},t._l(9,(function(e){return a("div",{key:e,staticClass:"col-lg-4 col-md-4 col-sm-6"},[a("div",{staticClass:"single-brand-item d-table"},[a("div",{staticClass:"d-table-cell text-center"},[a("img",{attrs:{src:t.getImgUrl(e),alt:""}})])])])})),0)]),a("div",{staticClass:"offset-lg-2 col-lg-4 col-md-6"},[a("div",{staticClass:"client-info"},[a("div",{staticClass:"d-flex mb-50"},[a("span",{staticClass:"lage"},[t._v(t._s(t.experience)+"+")]),a("span",{staticClass:"smll"},[t._v("Years of Working Experience")])]),t._m(1)])])])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8 text-center"},[a("div",{staticClass:"main_title"},[a("h2",[t._v("technical skills")]),a("p",[t._v(" Is give may shall likeness made yielding spirit a itself togeth created after sea "),a("br"),t._v("is in beast beginning signs open god you're gathering ithe ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"call-now d-flex"},[a("div",[a("span",{staticClass:"fa fa-question-circle"})]),a("div",{staticClass:"ml-15"},[a("p",[t._v("Wanna know More ?")]),a("h3",[t._v("Let's Connect!")])])])}],B={name:"skill-set",data:function(){return{experience:(new Date).getFullYear()-2019}},methods:{getImgUrl:function(t){var e=a("73da");return e("./"+t+".png")}}},F=B,U=(a("da73"),Object(u["a"])(F,W,A,!1,null,null,null)),R=U.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"newsletter_area"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center align-items-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"subscription_box text-center"},[a("h2",{staticClass:"text-uppercase text-white"},[t._v("get update of my blogs")]),a("div",{staticClass:"subcribe-form",attrs:{id:"mc_embed_signup"}},[a("form",{staticClass:"subscription relative",attrs:{target:"_blank"},on:{submit:function(e){return e.preventDefault(),t.handleSubscription(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{name:"EMAIL",placeholder:"Email address",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'Email address'",required:"",type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(0),t._m(1),a("div",{staticClass:"info"})])])])])])])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",left:"-5000px"}},[a("input",{attrs:{tabindex:"-1",value:"",type:"email"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"ml-2 primary-btn hover d-inline",attrs:{type:"submit"}},[a("span",[t._v("Get Started")])])}],J={name:"my-subscription",data:function(){return{email:""}},methods:{handleSubscription:function(){console.log(this.email),this.email=""}}},V=J,Y=(a("8a2c"),Object(u["a"])(V,G,H,!1,null,null,null)),K=Y.exports,z=a("3f08"),Q={components:{"my-intro":N,"my-about":q,"my-skill":R,"my-newsletter":K,Fragment:z["a"]}},X=Q,Z=Object(u["a"])(X,j,E,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fragment",[a("section",{staticClass:"banner_area"},[a("div",{staticClass:"banner_inner d-flex align-items-center"},[a("div",{staticClass:"container"},[a("div",{staticClass:"banner_content text-center"},[a("h2",[t._v("Let's Connect")])])])])]),a("section",{staticClass:"contact_area"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-5"},[a("h3",[t._v("Contact Me")]),a("hr",{staticClass:"mb-4"}),a("contact-info")],1),a("div",{staticClass:"col-lg-2"}),a("div",{staticClass:"col-lg-5"},[a("h3",[t._v("Profiles")]),a("hr",{staticClass:"mb-4"}),a("contact-profiles")],1)]),a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-lg-12"},[a("contact-form")],1)])])])])},at=[],st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"row contact_form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{required:"",type:"text",placeholder:"Enter your Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{required:"",type:"email",placeholder:"Enter Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"form-control",attrs:{required:"",type:"text",placeholder:"Enter Subject"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{required:"",rows:"1",placeholder:"Enter Message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])]),t._m(0)])},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12 text-right"},[a("button",{staticClass:"primary_btn",attrs:{type:"submit",value:"submit"}},[a("span",[t._v("Send Message")])])])}],it=(a("b0c0"),{name:"contact-form",data:function(){return{email:"",name:"",subject:"",message:""}},methods:{handleSubmit:function(){console.log(this.email,this.name,this.subject,this.message),this.reset()},reset:function(){this.email="",this.name="",this.subject="",this.message=""}}}),rt=it,lt=Object(u["a"])(rt,st,nt,!1,null,null,null),ct=lt.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact_info"},[a("div",{staticClass:"info_item"},[a("i",{staticClass:"lnr lnr-home"}),a("h6",[t._v("KR 4105, BITS PILANI")]),a("p",[t._v("Vidya Vihar Campus, Pilani, Rajasthan 333031")])]),a("div",{staticClass:"info_item"},[a("i",{staticClass:"lnr lnr-phone-handset"}),a("h6",[a("a",{attrs:{href:"#"}},[t._v("(+91) 93664 96119")])]),a("p",[t._v("Mobile (Personal)")])]),a("div",{staticClass:"info_item"},[a("i",{staticClass:"lnr lnr-envelope"}),a("h6",[a("a",{attrs:{href:"#"}},[t._v("nilanjan172nsvian@gmail.com")])]),a("p",[t._v("Personal Email")])])])}],ft={name:"contact-info"},dt=ft,mt=Object(u["a"])(dt,ot,ut,!1,null,null,null),vt=mt.exports,pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact_info"},[a("div",{staticClass:"info_item"},[a("i",{staticClass:"fab fa-linkedin-in"}),a("h6",[a("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/nilanjan-deb/"}},[t._v("@nilanjan-deb")])]),a("p",[t._v("LinkedIn")])]),a("div",{staticClass:"info_item"},[a("i",{staticClass:"fab fa-github"}),a("h6",[a("a",{attrs:{target:"_blank",href:"https://github.com/nil1729"}},[t._v("@nil1729")])]),a("p",[t._v("Github")])]),a("div",{staticClass:"info_item"},[a("i",{staticClass:"fab fa-twitter"}),a("h6",[a("a",{attrs:{target:"_blank",href:"https://twitter.com/NilanjanDeb9"}},[t._v("@NilanjanDeb9")])]),a("p",[t._v("Twitter")])])])}],_t={name:"contact-profile"},bt=_t,ht=Object(u["a"])(bt,pt,gt,!1,null,null,null),Ct=ht.exports,xt={name:"my-contact",components:{"contact-form":ct,"contact-info":vt,"contact-profiles":Ct,Fragment:z["a"]}},yt=xt,wt=(a("2eeb"),Object(u["a"])(yt,et,at,!1,null,null,null)),jt=wt.exports,Et=[{path:"",component:tt,name:"Home"},{path:"/contact",component:jt,name:"Contact"}],kt=Et;s["a"].use(w["a"]);var $t=new w["a"]({mode:"history",routes:kt}),Ot=$t;s["a"].config.productionTip=!1,new s["a"]({router:Ot,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"62b7":function(t,e,a){},6537:function(t,e,a){},"67e9":function(t,e,a){"use strict";var s=a("2aa2"),n=a.n(s);n.a},"6f10":function(t,e,a){t.exports=a.p+"img/8.a9d48feb.png"},"73da":function(t,e,a){var s={"./1.png":"4c56","./2.png":"9c33","./3.png":"aca8","./4.png":"46b9","./5.png":"7c3c","./6.png":"f75d","./7.png":"f3ad","./8.png":"6f10","./9.png":"c932"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="73da"},"7c3c":function(t,e,a){t.exports=a.p+"img/5.164de142.png"},8132:function(t,e,a){t.exports=a.p+"img/about.9e2d15d2.svg"},"8a2c":function(t,e,a){"use strict";var s=a("6537"),n=a.n(s);n.a},"9c0c":function(t,e,a){},"9c33":function(t,e,a){t.exports=a.p+"img/2.638be909.png"},a7c3:function(t,e,a){"use strict";var s=a("55e0"),n=a.n(s);n.a},aca8:function(t,e,a){t.exports=a.p+"img/3.7aabd127.png"},c932:function(t,e,a){t.exports=a.p+"img/9.6c942e77.png"},cbfa:function(t,e,a){},da73:function(t,e,a){"use strict";var s=a("62b7"),n=a.n(s);n.a},ef9e:function(t,e,a){t.exports=a.p+"img/dev.50953027.png"},f3ad:function(t,e,a){t.exports=a.p+"img/7.cee64627.png"},f75d:function(t,e,a){t.exports=a.p+"img/6.671d80ff.png"}});
//# sourceMappingURL=app.84a76958.js.map