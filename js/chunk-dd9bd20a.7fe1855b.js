(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd9bd20a"],{4280:function(t,s,e){"use strict";e("ce9c")},"987f":function(t,s,e){t.exports=e.p+"img/hottoys_logo.d0628d80.png"},aa92:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bg"},[a("main",{staticClass:"form-signin text-center"},[a("form",{staticClass:"form-signin"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"mb-4",attrs:{src:e("987f"),alt:"",width:"72",height:"72"}})]),a("h1",{staticClass:"h3 my-4 text-info font-weight-normal"},[t._v("WELCOME BACK!")]),a("div",{staticClass:"input-form"},[a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control mb-3",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}})]),a("div",{staticClass:"input-form"},[a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control mb-3",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}})]),t._m(0),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"},on:{click:function(s){return s.preventDefault(),t.signin(s)}}},[t._v("Sign in")]),a("p",{staticClass:"my-5 mb-3 text-muted"},[t._v("© 2017-2021")])],1)])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"checkbox mb-3"},[e("label",[e("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" Remember me ")])])}],r=(e("99af"),{name:"HelloWorld",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/admin/signin");this.$http.post(s,t.user).then((function(s){if(console.log(s.data),s.data.success){var e=s.data.token,a=s.data.expired;console.log(e,a),document.cookie="hexToken=".concat(e,"; expires=").concat(new Date(a)),t.$router.push("/admin/product")}}))}}}),o=r,i=(e("4280"),e("2877")),c=Object(i["a"])(o,a,n,!1,null,"15681ffa",null);s["default"]=c.exports},ce9c:function(t,s,e){}}]);
//# sourceMappingURL=chunk-dd9bd20a.7fe1855b.js.map