(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65212394"],{"12a4":function(e,t,a){},"1a59":function(e,t,a){"use strict";a("12a4")},"21d4":function(e,t,a){"use strict";a("8af2")},"80c1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("common-layout",[s("div",{staticClass:"top"},[s("div",{staticClass:"header"},[s("img",{staticClass:"logo",attrs:{alt:"logo",src:a("4ffd")}}),s("span",{staticClass:"title"},[e._v(e._s(e.systemName))])]),s("div",{staticClass:"desc"},[e._v("Ant Design 是西湖区最具影响力的 Web 设计规范")])]),s("div",{staticClass:"login"},[s("a-form",{attrs:{form:e.form},on:{submit:e.onSubmit}},[s("a-alert",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",closable:!0,message:e.error,showIcon:""}}),s("a-form-item",[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入账户名",whitespace:!0}]}],expression:"[\n            'username',\n            {\n              rules: [\n                { required: true, message: '请输入账户名', whitespace: true },\n              ],\n            },\n          ]"}],attrs:{autocomplete:"autocomplete",size:"large",placeholder:"请输入账户名"}},[s("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),s("a-form-item",[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码",whitespace:!0}]}],expression:"[\n            'password',\n            {\n              rules: [\n                { required: true, message: '请输入密码', whitespace: true },\n              ],\n            },\n          ]"}],attrs:{size:"large",placeholder:"请输入密码",autocomplete:"autocomplete",type:"password"}},[s("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),s("a-form-item",[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['code', { rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur' }]"}],staticStyle:{width:"230px","margin-right":"20px"},attrs:{size:"large",autocomplete:"false",placeholder:"请输入验证码"}}),s("img",{staticClass:"verCode",staticStyle:{display:"inline-block"},attrs:{src:e.verCode},on:{click:e.newVerCode}})],1),s("div",[s("a-checkbox",{attrs:{checked:!0}},[e._v("自动登录")])],1),s("a-form-item",[s("a-button",{staticStyle:{width:"100%","margin-top":"24px"},attrs:{loading:e.logging,size:"large",htmlType:"submit",type:"primary"}},[e._v("登录")])],1)],1)],1)])},r=[],o=a("5530"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"common-layout"},[a("div",{staticClass:"content"},[e._t("default")],2),a("page-footer",{attrs:{"link-list":e.footerLinks,copyright:e.copyright}})],1)},n=[],c=a("613e"),l=a("5880"),m={name:"CommonLayout",components:{PageFooter:c["a"]},computed:Object(o["a"])({},Object(l["mapState"])("setting",["footerLinks","copyright"]))},u=m,d=(a("21d4"),a("2877")),p=Object(d["a"])(u,i,n,!1,null,"f17a92f6",null),g=p.exports,f=a("1d40"),h=a("b775"),v={name:"Login",components:{CommonLayout:g},data:function(){return{logging:!1,error:"",form:this.$form.createForm(this),verCode:""}},computed:{systemName:function(){return this.$store.state.setting.systemName}},created:function(){this.newVerCode()},methods:Object(o["a"])(Object(o["a"])({},Object(l["mapMutations"])("account",["setUser","setPermissions","setRole"])),{},{newVerCode:function(){this.verCode="http://116.63.145.108:8030/backed/captcha?m="+Math.random()},onSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e){if(!e){t.logging=!0;var a=t.form.getFieldValue("username"),s=t.form.getFieldValue("password"),r=t.form.getFieldValue("code");Object(f["j"])({username:a,password:s,code:r}).then(t.afterLogin)}}))},afterLogin:function(e){if(this.logging=!1,200==e.code){var t=e.data,a=t.user,s=t.permissions;this.setUser(a),this.setPermissions(s),this.setRole(a.role),Object(h["e"])({token:e.data.token,expireAt:new Date(e.data.tokenExpireAt)}),this.$router.push("/workplace")}else this.error=e.message}})},w=v,b=(a("1a59"),Object(d["a"])(w,s,r,!1,null,"577c448e",null)),y=b.exports;t["default"]=y},"8af2":function(e,t,a){}}]);