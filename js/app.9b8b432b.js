(function(t){function e(e){for(var n,r,l=e[0],c=e[1],o=e[2],d=0,m=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"040c":function(t,e,a){},"1c1c":function(t,e,a){},"26af":function(t,e,a){},"2aa2":function(t,e,a){},"2eeb":function(t,e,a){"use strict";var n=a("040c"),s=a.n(n);s.a},"3bd4":function(t,e,a){"use strict";var n=a("cbfa"),s=a.n(n);s.a},"46b9":function(t,e,a){t.exports=a.p+"img/4.270f55ff.png"},4809:function(t,e,a){"use strict";var n=a("1c1c"),s=a.n(n);s.a},"4c56":function(t,e,a){t.exports=a.p+"img/1.ca9faf5f.png"},"55e0":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("app-navbar"),a("router-view"),a("app-footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{ref:"header_navbar",staticClass:"header_area",class:{navbar_fixed:t.navbar_fixed},attrs:{id:"header-top"}},[a("div",{staticClass:"main_menu"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[a("div",{staticClass:"container"},[a("span",{staticClass:"navbar-brand logo_h",on:{click:t.navigate}},[t._v(" Nilanjan Deb ")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse offset",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"nav navbar-nav menu_nav justify-content-end"},[a("router-link",{staticClass:"nav-item",attrs:{exact:"",tag:"li",to:"/","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("Home")])]),a("router-link",{staticClass:"nav-item",attrs:{to:{name:"Home",hash:"#about"},exact:"",tag:"li","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("About")])]),t._m(1),t._m(2),a("router-link",{staticClass:"nav-item",attrs:{tag:"li",to:"/contact","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("Contact me")])])],1)])])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Portfolio")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item submenu dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Blogs")])])}],c=(a("b0c0"),a("2e22")),o={name:"Navbar",data:function(){return{navbar_fixed:!1}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.$refs.header_navbar.getBoundingClientRect().top<-100?this.navbar_fixed=!0:this.navbar_fixed=!1},navigate:function(){var t=Object(c["a"])();"Home"===this.$route.name?t({el:"#header-top",duration:600,easing:"ease-in",offset:-60}):this.$router.push({name:"Home"})}}},u=o,d=(a("a7c3"),a("2877")),m=Object(d["a"])(u,r,l,!1,null,null,null),f=m.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer_area"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"footer_top flex-column"},[a("div",{staticClass:"footer_logo"},[a("h5",[a("span",{staticClass:"fa fa-code"}),t._v(" with "),a("span",{staticClass:"fa fa-heart"}),t._v(" and "),a("span",{staticClass:"fa fa-coffee"})]),a("h4",[t._v("Nilanjan Deb")])]),a("div",{staticClass:"footer_social"},[a("a",{attrs:{href:"https://github.com/nil1729",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})]),a("a",{attrs:{href:"https://www.linkedin.com/in/nilanjan-deb/",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin-in"})]),a("a",{attrs:{href:"https://twitter.com/NilanjanDeb9",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter"})])])])])])]),a("div",{staticClass:"credit_footer text-right"},[a("h5",{staticClass:"col-lg-8 col-sm-12 ml-auto mr-5 lead mt-2"},[t._v(" Template by "),a("a",{attrs:{href:"https://colorlib.com/",target:"_blank"}},[t._v("Colorlib")])])])])}],h={},g=h,b=(a("3bd4"),Object(d["a"])(g,p,v,!1,null,null,null)),_=b.exports,C={name:"App",components:{"app-navbar":f,"app-footer":_}},x=C,w=(a("5c0b"),Object(d["a"])(x,s,i,!1,null,null,null)),y=w.exports,j=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fragment",[a("my-intro"),a("my-about"),a("my-skill"),a("my-newsletter")],1)},E=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"home_banner_area"},[a("div",{staticClass:"banner_inner"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-7"},[a("div",{staticClass:"banner_content"},[a("h3",{staticClass:"text-uppercase"},[t._v("Hell0")]),a("h1",{staticClass:"text-uppercase"},[t._v("I am Nilanjan")]),a("h5",{staticClass:"text-uppercase"},[t._v(" Web Developer • Undergradute Student ")]),a("div",{staticClass:"d-flex align-items-center"},[t._m(0),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#get-started",duration:600,easing:"ease-in",offset:-60},expression:"{\n                  el: '#get-started',\n                  duration: 600,\n                  easing: 'ease-in',\n                  offset: -60,\n                }"}],staticClass:"primary_btn tr-bg",attrs:{href:"#"}},[a("span",[t._v("Get in Touch")])])])])]),t._m(1)])])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"primary_btn tr-bg",attrs:{href:"#"}},[a("span",[t._v("My Portfolio")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-5"},[n("div",{staticClass:"home_right_img"},[n("img",{attrs:{src:a("ef9e"),alt:""}})])])}],S={},P=S,N=(a("4809"),Object(d["a"])(P,O,$,!1,null,null,null)),D=N.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about_area section_gap",attrs:{id:"about"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-start align-items-center"},[n("div",{staticClass:"col-lg-5"},[n("div",{staticClass:"about_img"},[n("img",{attrs:{src:a("8132"),alt:""}})])]),n("div",{staticClass:"offset-lg-1 col-lg-5"},[n("div",{staticClass:"main_title text-left"},[n("h2",[t._v(" let’s "),n("br"),t._v("Introduce about "),n("br"),t._v("myself ")]),n("p",[t._v(" Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their. Beast creepeth. Fish days. ")]),n("p",[t._v(" Is give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering whose gathered cattle let. Creature whales fruit unto meat the life beginning all in under give two. ")]),n("a",{staticClass:"primary_btn",attrs:{href:"#"}},[n("span",[t._v("My Resume")])])])])])])])}],F={},R=F,V=(a("67e9"),Object(d["a"])(R,M,T,!1,null,null,null)),I=V.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"brand_area"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"row"},t._l(9,(function(e){return a("div",{key:e,staticClass:"col-lg-4 col-md-4 col-sm-6"},[a("div",{staticClass:"single-brand-item d-table"},[a("div",{staticClass:"d-table-cell text-center"},[a("img",{attrs:{src:t.getImgUrl(e),alt:""}})])])])})),0)]),a("div",{staticClass:"offset-lg-2 col-lg-4 col-md-6"},[a("div",{staticClass:"client-info"},[a("div",{staticClass:"d-flex mb-50"},[a("span",{staticClass:"lage"},[t._v(t._s(t.experience)+"+")]),a("span",{staticClass:"smll"},[t._v("Years of Working Experience")])]),a("div",{staticClass:"call-now d-flex"},[t._m(1),a("div",{staticClass:"ml-15"},[a("p",[t._v("Wanna know More ?")]),a("h3",[a("router-link",{attrs:{to:"/contact"}},[t._v("Let's Connect!")])],1)])])])])])])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8 text-center"},[a("div",{staticClass:"main_title"},[a("h2",[t._v("technical skills")]),a("p",[t._v(" Is give may shall likeness made yielding spirit a itself togeth created after sea "),a("br"),t._v("is in beast beginning signs open god you're gathering ithe ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"fa fa-question-circle"})])}],H={name:"skill-set",data:function(){return{experience:(new Date).getFullYear()-2019}},methods:{getImgUrl:function(t){var e=a("73da");return e("./"+t+".png")}}},q=H,B=(a("da73"),Object(d["a"])(q,A,L,!1,null,null,null)),W=B.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"newsletter_area",attrs:{id:"get-started"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center align-items-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"subscription_box text-center"},[a("h2",{staticClass:"text-uppercase text-white"},[t._v("get update of my blogs")]),t.submitted?a("div",{staticClass:"mt-3 banner_content text-center success-msg"},[a("h4",{staticClass:"text-uppercase text-white"},[t._v("Thank You")])]):a("div",{staticClass:"subcribe-form",attrs:{id:"mc_embed_signup"}},[a("form",{staticClass:"position-relative subscription relative",on:{submit:function(e){return e.preventDefault(),t.handleSubscription(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{name:"EMAIL",placeholder:"Email address",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'Email address'",required:"",type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(0),a("button",{staticClass:"ml-2 primary-btn hover d-inline",class:{"loading-disabled":t.loading},attrs:{type:"submit"}},[a("span",[t._v(t._s(t.loading?"Loading ...":"Get Started"))])]),t.error?a("div",{staticClass:"info mx-auto mt-1"},[a("span",[t._v(t._s(t.error))])]):t._e()])])])])])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",left:"-5000px"}},[a("input",{attrs:{tabindex:"-1",value:"",type:"email"}})])}],G=(a("d3b7"),a("96cf"),a("1da1")),z=a("f90c"),J=a.n(z),Z={name:"my-subscription",data:function(){return{email:"",submitted:!1,error:"",loading:!1}},watch:{email:function(){this.error=""}},methods:{handleSubscription:function(){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(J.a.isEmail(t.email)){e.next=2;break}return e.abrupt("return",t.error="Please enter a valid Email Adresss");case 2:return t.loading=!0,e.next=5,t.sendFormData();case 5:t.loading=!1,t.submitted=!0;case 7:case"end":return e.stop()}}),e)})))()},sendFormData:function(){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new Headers,n=new FormData,n.append("Subscription",t.email),t.email="",s={method:"POST",headers:a,body:n,redirect:"follow"},e.prev=5,e.next=8,fetch("https://cors-anywhere.herokuapp.com/https://formspree.io/xrgyajyn",s);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](5),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[5,10]])})))()}}},K=Z,Q=(a("8a2c"),Object(d["a"])(K,U,Y,!1,null,null,null)),X=Q.exports,tt=a("3f08"),et={components:{"my-intro":D,"my-about":I,"my-skill":W,"my-newsletter":X,Fragment:tt["a"]}},at=et,nt=Object(d["a"])(at,k,E,!1,null,null,null),st=nt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fragment",[a("section",{staticClass:"banner_area"},[a("div",{staticClass:"banner_inner d-flex align-items-center"},[a("div",{staticClass:"container"},[a("div",{staticClass:"banner_content text-center"},[a("h2",[t._v("Let's Connect")])])])])]),a("section",{staticClass:"contact_area"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-5"},[a("h3",[t._v("Contact Me")]),a("hr",{staticClass:"mb-4"}),a("contact-info")],1),a("div",{staticClass:"col-lg-2"}),a("div",{staticClass:"col-lg-5"},[a("h3",[t._v("Profiles")]),a("hr",{staticClass:"mb-4"}),a("contact-profiles")],1)]),a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-lg-12"},[a("contact-form")],1)])])])])},rt=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fragment",[t.submitted?a("div",{staticClass:"mt-3 banner_content text-center success-msg"},[a("h5",{staticClass:"text-uppercase"},[t._v("Message sent")]),a("h1",{staticClass:"text-uppercase"},[t._v("Thank You")]),a("a",{staticClass:"primary_btn tr-bg mt-2",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.submitted=!1}}},[a("span",[t._v("Send another Message")])])]):a("form",{staticClass:"row contact_form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",class:{"is-invalid":!1===t.nameValid},attrs:{required:"",type:"text",placeholder:"Enter your Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("div",{staticClass:"feedback",class:{show:!1===t.nameValid}},[t._v(" Please enter a valid Name ")])]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":!1===t.emailValid},attrs:{required:"",type:"email",placeholder:"Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("div",{staticClass:"feedback",class:{show:!1===t.emailValid}},[t._v(" Please enter a valid Email Address ")])]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"form-control",attrs:{required:"",type:"text",placeholder:"Subject"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{required:"",rows:"7",placeholder:"Your Message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])]),a("div",{staticClass:"col-md-12 text-right"},[a("button",{staticClass:"primary_btn",class:{"loading-disabled":t.loading},attrs:{type:"submit",value:"submit"}},[a("span",[t._v(t._s(t.loading?"loading ...":"Send Message"))])])])])])},ct=[],ot=(a("498a"),{name:"contact-form",components:{Fragment:tt["a"]},data:function(){return{email:"",name:"",subject:"",message:"",emailValid:null,nameValid:null,loading:!1,submitted:!1}},watch:{email:function(){""!=this.email&&(this.emailValid=J.a.isEmail(this.email))},name:function(){this.nameValid=J.a.matches(this.name,/^[a-zA-Z ]*$/)}},methods:{handleSubmit:function(){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.doubleCheck()){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,e.next=5,t.sendFormData();case 5:t.loading=!1,t.submitted=!0;case 7:case"end":return e.stop()}}),e)})))()},doubleCheck:function(){return J.a.isEmail(this.email)&&J.a.matches(this.name,/^[a-zA-Z ]*$/)&&0!==this.subject.trim().length&&0!==this.message.trim().length},reset:function(){this.emailValid=null,this.email="",this.name="",this.subject="",this.message="",this.nameValid=null},sendFormData:function(){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new Headers,n=new FormData,n.append("Name",t.name),n.append("Email Adresss",t.email),n.append("Subject",J.a.ltrim(t.subject)),n.append("Message",J.a.ltrim(t.message)),t.reset(),s={method:"POST",headers:a,body:n,redirect:"follow"},e.prev=8,e.next=11,fetch("https://cors-anywhere.herokuapp.com/https://formspree.io/xrgyajyn",s);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](8),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[8,13]])})))()}}}),ut=ot,dt=(a("b84b"),Object(d["a"])(ut,lt,ct,!1,null,null,null)),mt=dt.exports,ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact_info"},[a("div",{staticClass:"info_item"},[a("i",{staticClass:"lnr lnr-home"}),a("h6",[t._v("KR 4105, BITS PILANI")]),a("p",[t._v("Vidya Vihar Campus, Pilani, Rajasthan 333031")])]),a("div",{staticClass:"info_item"},[a("i",{staticClass:"lnr lnr-phone-handset"}),a("h6",[a("a",{attrs:{href:"#"}},[t._v("(+91) 93664 96119")])]),a("p",[t._v("Mobile (Personal)")])]),a("div",{staticClass:"info_item"},[a("i",{staticClass:"lnr lnr-envelope"}),a("h6",[a("a",{attrs:{href:"#"}},[t._v("nilanjan172nsvian@gmail.com")])]),a("p",[t._v("Personal Email")])])])}],vt={name:"contact-info"},ht=vt,gt=Object(d["a"])(ht,ft,pt,!1,null,null,null),bt=gt.exports,_t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact_info"},[a("div",{staticClass:"info_item"},[a("i",{staticClass:"fab fa-linkedin-in"}),a("h6",[a("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/nilanjan-deb/"}},[t._v("@nilanjan-deb")])]),a("p",[t._v("LinkedIn")])]),a("div",{staticClass:"info_item"},[a("i",{staticClass:"fab fa-github"}),a("h6",[a("a",{attrs:{target:"_blank",href:"https://github.com/nil1729"}},[t._v("@nil1729")])]),a("p",[t._v("Github")])]),a("div",{staticClass:"info_item"},[a("i",{staticClass:"fab fa-twitter"}),a("h6",[a("a",{attrs:{target:"_blank",href:"https://twitter.com/NilanjanDeb9"}},[t._v("@NilanjanDeb9")])]),a("p",[t._v("Twitter")])])])}],xt={name:"contact-profile"},wt=xt,yt=Object(d["a"])(wt,_t,Ct,!1,null,null,null),jt=yt.exports,kt={name:"my-contact",components:{"contact-form":mt,"contact-info":bt,"contact-profiles":jt,Fragment:tt["a"]}},Et=kt,Ot=(a("2eeb"),Object(d["a"])(Et,it,rt,!1,null,null,null)),$t=Ot.exports,St=[{path:"",component:st,name:"Home"},{path:"/contact",component:$t,name:"Contact"}],Pt=St;n["a"].use(j["a"]);var Nt=new j["a"]({mode:"history",routes:Pt,scrollBehavior:function(t,e,a){return t.hash&&a?a:t.hash?{selector:t.hash}:{x:0,y:0}}}),Dt=Nt,Mt=a("f13c"),Tt=a.n(Mt);n["a"].use(Tt.a),n["a"].config.productionTip=!1,new n["a"]({router:Dt,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"62b7":function(t,e,a){},6537:function(t,e,a){},"67e9":function(t,e,a){"use strict";var n=a("2aa2"),s=a.n(n);s.a},"6f10":function(t,e,a){t.exports=a.p+"img/8.a9d48feb.png"},"73da":function(t,e,a){var n={"./1.png":"4c56","./2.png":"9c33","./3.png":"aca8","./4.png":"46b9","./5.png":"7c3c","./6.png":"f75d","./7.png":"f3ad","./8.png":"6f10","./9.png":"c932"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="73da"},"7c3c":function(t,e,a){t.exports=a.p+"img/5.164de142.png"},8132:function(t,e,a){t.exports=a.p+"img/about.9e2d15d2.svg"},"8a2c":function(t,e,a){"use strict";var n=a("6537"),s=a.n(n);s.a},"9c0c":function(t,e,a){},"9c33":function(t,e,a){t.exports=a.p+"img/2.638be909.png"},a7c3:function(t,e,a){"use strict";var n=a("55e0"),s=a.n(n);s.a},aca8:function(t,e,a){t.exports=a.p+"img/3.7aabd127.png"},b84b:function(t,e,a){"use strict";var n=a("26af"),s=a.n(n);s.a},c932:function(t,e,a){t.exports=a.p+"img/9.6c942e77.png"},cbfa:function(t,e,a){},da73:function(t,e,a){"use strict";var n=a("62b7"),s=a.n(n);s.a},ef9e:function(t,e,a){t.exports=a.p+"img/dev.40cdc4c4.png"},f3ad:function(t,e,a){t.exports=a.p+"img/7.cee64627.png"},f75d:function(t,e,a){t.exports=a.p+"img/6.671d80ff.png"}});
//# sourceMappingURL=app.9b8b432b.js.map