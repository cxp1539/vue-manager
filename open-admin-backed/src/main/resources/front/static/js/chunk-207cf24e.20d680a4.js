(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-207cf24e"],{"0636":function(e,t,n){},8491:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{style:{minHeight:"560px"},attrs:{bordered:!1}},[n("a-drawer",{attrs:{title:"配置角色权限",width:720,visible:e.powerVisible,"body-style":{paddingBottom:"80px"}},on:{close:e.onClose}},[n("a-tabs",{attrs:{"default-active-key":e.currentTab},on:{change:e.changeTab}},[n("a-tab-pane",{key:"1"},[n("span",{attrs:{slot:"tab"},slot:"tab"},[n("a-icon",{attrs:{type:"menu"}}),e._v("配置菜单 ")],1),n("div",{staticClass:"table-operator"},[n("a-button",{attrs:{type:"primary"},on:{click:e.saveRoleMenus}},[e._v("保存")])],1),n("a-tree",{attrs:{checkable:"","expanded-keys":e.expandedKeys,"auto-expand-parent":e.autoExpandParent,"tree-data":e.menuList,replaceFields:{title:"name",key:"id",children:"children"}},on:{expand:e.onExpand},model:{value:e.checkedKeys,callback:function(t){e.checkedKeys=t},expression:"checkedKeys"}})],1),n("a-tab-pane",{key:"2"},[n("span",{attrs:{slot:"tab"},slot:"tab"},[n("a-icon",{attrs:{type:"control"}}),e._v("配置页面按钮权限 ")],1),n("div",{staticClass:"table-operator"},[n("a-button",{attrs:{type:"primary"},on:{click:e.saveRoleMenuPermissons}},[e._v("保存")])],1),e._l(e.permissions,(function(t,a){return n("a-row",{key:a,attrs:{gutter:16}},[n("a-col",{attrs:{xl:4,lg:24}},[e._v(e._s(t.name)+"：")]),n("a-col",{attrs:{xl:20,lg:24}},[t.actionsOptions.length>0?n("a-checkbox",{attrs:{indeterminate:t.indeterminate,checked:t.checkedAll},on:{change:function(n){return e.onChangeCheckAll(n,t)}}},[e._v("全选")]):e._e(),n("a-checkbox-group",{attrs:{options:t.actionsOptions},on:{change:function(n){return e.onChangeCheck(t)}},model:{value:t.selected,callback:function(n){e.$set(t,"selected",n)},expression:"permission.selected"}})],1)],1)}))],2)],1)],1),n("div",{staticClass:"table-operator"},[n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.handleCreate()}}},[e._v("新建角色")])],1),n("s-table",{ref:"list",attrs:{rowKey:"id",size:"default",columns:e.columns,data:e.loadData,pagination:!1},scopedSlots:e._u([{key:"action",fn:function(t,a){return n("span",{},[[n("a",{on:{click:function(t){return e.showDrawer(a)}}},[n("a-icon",{attrs:{type:"tool"}}),e._v("配置权限 ")],1),n("a-divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(t){return e.handleEdit(a)}}},[n("a-icon",{attrs:{type:"edit"}}),e._v("编辑 ")],1),n("a-divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(t){return e.handleDelete(a)}}},[n("a-icon",{attrs:{type:"delete"}}),e._v("删除 ")],1)]],2)}},{key:"uniqueKey",fn:function(t){return n("span",{},[n("a-tag",[e._v(e._s(t))])],1)}}])}),n("a-modal",{staticStyle:{top:"20px"},attrs:{title:1==e.formFlag?"创建角色":"修改角色",width:800},on:{cancel:e.cancel,ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("a-form",{attrs:{form:e.form,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[n("a-form-item",{attrs:{label:"权限唯一键"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["uniqueKey",{rules:[{required:!0,message:"请输入权限唯一键!"}]}],expression:"[\n            'uniqueKey',\n            { rules: [{ required: true, message: '请输入权限唯一键!' }] },\n          ]"}],attrs:{placeholder:"请输入权限唯一键!"}})],1),n("a-form-item",{attrs:{label:"角色名称"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入角色名称!"}]}],expression:"[\n            'name',\n            { rules: [{ required: true, message: '请输入角色名称!' }] },\n          ]"}],attrs:{placeholder:"请输入角色名称!"}})],1),n("a-form-item",{attrs:{label:"角色备注"}},[n("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark"],expression:"['remark']"}],attrs:{rows:3,placeholder:"请输入角色备注!"}})],1)],1)],1)],1)},r=[],s=(n("d81d"),n("a15b"),n("99af"),n("1276"),n("ac1f"),n("a9e3"),n("159b"),n("e8c4")),i=n("1d40"),o=n("ca00"),c=n("88bc"),l=n.n(c),u={name:"RoleList",components:{STable:s["a"]},data:function(){return{expandedKeys:[],autoExpandParent:!0,checkedKeys:[],permissions:[],initPermissions:[],layout:{labelCol:{span:4},wrapperCol:{span:14}},powerVisible:!1,currentTab:1,currentRoleId:0,menuList:[],visible:!1,rolesMap:[],form:this.$form.createForm(this),formFlag:1,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},mdl:{},columns:[{title:"Id",dataIndex:"id",key:"id"},{title:"唯一键",dataIndex:"uniqueKey",key:"uniqueKey",scopedSlots:{customRender:"uniqueKey"}},{title:"角色名称",dataIndex:"name",key:"name"},{title:"备注说明",dataIndex:"remark",key:"remark"},{title:"创建时间",dataIndex:"createdTime",key:"createdTime"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},key:"action"}],loadData:function(e){return Object(i["k"])(e).then((function(e){return e.data}))}}},created:function(){this.getMenus(),this.loadPermissions()},methods:{changeTab:function(e){this.currentTab=e},saveRoleMenuPermissons:function(){var e=this,t=this.permissions.map((function(e){for(var t=e.actionsOptions,n=[],a=0;a<t.length;a++)for(var r=0;r<e.selected.length;r++)if(e.selected[r]==t[a].value){var s=t[a].value.lastIndexOf("-");n.push({action:t[a].value.substr(s+1),describe:t[a].label});break}return{menuId:e.id,operation:JSON.stringify(n)}}));Object(i["o"])({roleId:this.currentRoleId,permissions:t}).then((function(t){200==t.code?e.$message.success("配置配置页面按钮权限成功"):e.$message.error(t.message)}))},saveRoleMenus:function(){var e=this;Object(i["p"])({roleId:this.currentRoleId,menuIds:this.checkedKeys.join(",")}).then((function(t){200==t.code?e.$message.success("配置菜单成功"):e.$message.error(t.message)}))},getMenus:function(){var e=this;Object(i["j"])().then((function(t){e.menuList=e.processMenuList(t.data),e.expandedKeys=e.menuList.map((function(e){return e.id}))}))},loadPermissions:function(){var e=this;Object(i["i"])().then((function(t){var n=t.data;e.permissions=n.map((function(e){var t=Object(o["a"])(e.permissions);return e.checkedAll=!1,e.selected=[],e.indeterminate=!1,e.actionsOptions=t.map((function(t){return{label:t.describe,value:"".concat(e.id,"-").concat(t.action)}})),e})),e.initPermissions=JSON.parse(JSON.stringify(e.permissions))}))},onChangeCheck:function(e){e.indeterminate=!!e.selected.length&&e.selected.length<e.actionsOptions.length,e.checkedAll=e.selected.length===e.actionsOptions.length},onChangeCheckAll:function(e,t){Object.assign(t,{selected:e.target.checked?t.actionsOptions.map((function(e){return e.value})):[],indeterminate:!1,checkedAll:e.target.checked})},processMenuList:function(e){var t=this;return e.map((function(e){return e.children&&e.children.length>0?e.children=t.processMenuList(e.children):delete e.children,e}))},onExpand:function(e){this.expandedKeys=e,this.autoExpandParent=!1},showDrawer:function(e){var t=this;this.permissions=JSON.parse(JSON.stringify(this.initPermissions)),this.currentRoleId=e.id,this.powerVisible=!0,Object(i["h"])({roleId:e.id}).then((function(e){var n=e.data,a=n.menuIds,r=n.permissions;if(t.checkedKeys=a.split(",").map((function(e){return Number(e)})),t.permissions&&r&&r.length>0){var s={};r.forEach((function(e){var t=JSON.parse(e.operation);s[e.menuId]=t.map((function(t){return"".concat(e.menuId,"-").concat(t.action)}))})),t.permissions.forEach((function(e){var n=s[e.id];e.selected=n||[],t.onChangeCheck(e)}))}}))},onClose:function(){this.powerVisible=!1,this.currentTab=1},handleEdit:function(e){var t=this;this.visible=!0,this.formFlag=2,this.$nextTick((function(){t.form.setFieldsValue(l()(e,"name","remark","uniqueKey"))}))},handleCreate:function(){this.visible=!0,this.form.resetFields(),this.formFlag=1},cancel:function(){this.form.resetFields()},handleDelete:function(e){var t=this,n=this.$confirm({title:"提示",content:"确定要删除该角色吗?",onOk:function(){return Object(i["d"])({roleId:e.id}).then((function(e){200==e.code?(t.$message.success("删除角色成功"),t.$refs.list.refresh()):t.$message.error(e.message),n.destroy()}))},onCancel:function(){}})},handleOk:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,n){e||Object(i["f"])(n).then((function(e){200==e.code?(t.$message.success(1==t.formFlag?"创建":"修改角色成功"),t.visible=!1,t.$refs.list.refresh()):t.$message.error(e.message)}))}))}}},d=u,p=(n("a5d4"),n("2877")),h=Object(p["a"])(d,a,r,!1,null,"eabf472a",null);t["default"]=h.exports},"88bc":function(e,t,n){(function(t){var n=1/0,a=9007199254740991,r="[object Arguments]",s="[object Function]",i="[object GeneratorFunction]",o="[object Symbol]",c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=c||l||Function("return this")();function d(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function p(e,t){var n=-1,a=e?e.length:0,r=Array(a);while(++n<a)r[n]=t(e[n],n,e);return r}function h(e,t){var n=-1,a=t.length,r=e.length;while(++n<a)e[r+n]=t[n];return e}var f=Object.prototype,m=f.hasOwnProperty,b=f.toString,v=u.Symbol,y=f.propertyIsEnumerable,g=v?v.isConcatSpreadable:void 0,k=Math.max;function x(e,t,n,a,r){var s=-1,i=e.length;n||(n=C),r||(r=[]);while(++s<i){var o=e[s];t>0&&n(o)?t>1?x(o,t-1,n,a,r):h(r,o):a||(r[r.length]=o)}return r}function w(e,t){return e=Object(e),O(e,t,(function(t,n){return n in e}))}function O(e,t,n){var a=-1,r=t.length,s={};while(++a<r){var i=t[a],o=e[i];n(o,i)&&(s[i]=o)}return s}function j(e,t){return t=k(void 0===t?e.length-1:t,0),function(){var n=arguments,a=-1,r=k(n.length-t,0),s=Array(r);while(++a<r)s[a]=n[t+a];a=-1;var i=Array(t+1);while(++a<t)i[a]=n[a];return i[t]=s,d(e,this,i)}}function C(e){return _(e)||K(e)||!!(g&&e&&e[g])}function I(e){if("string"==typeof e||M(e))return e;var t=e+"";return"0"==t&&1/e==-n?"-0":t}function K(e){return $(e)&&m.call(e,"callee")&&(!y.call(e,"callee")||b.call(e)==r)}var _=Array.isArray;function S(e){return null!=e&&A(e.length)&&!F(e)}function $(e){return E(e)&&S(e)}function F(e){var t=q(e)?b.call(e):"";return t==s||t==i}function A(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){return!!e&&"object"==typeof e}function M(e){return"symbol"==typeof e||E(e)&&b.call(e)==o}var P=j((function(e,t){return null==e?{}:w(e,p(x(t,1),I))}));e.exports=P}).call(this,n("c8ba"))},a5d4:function(e,t,n){"use strict";n("0636")}}]);