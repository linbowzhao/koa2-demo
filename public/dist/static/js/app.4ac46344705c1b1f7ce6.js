webpackJsonp([1],{

/***/ "1nvv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c10ef76","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("XWkQ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c10ef76"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/Index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Index = ({
  name: 'Index',
  data: function data() {
    return {
      msg: '首页'
    };
  },

  methods: {
    jump: function jump() {
      this.$router.push('/page2');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-15ef2cc4","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/Index.vue
var Index_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-content"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"page-header pos-rel"},[_c('h1',[_c('div',{attrs:{"id":"nav-search"}},[_vm._m(1),_vm._v(" "),_c('button',{staticClass:"btn btn-xs btn-primary"},[_vm._v("确定")]),_vm._v(" "),_c('button',{staticClass:"btn btn-xs btn-success",attrs:{"data-toggle":"modal","data-target":"#myModal"}},[_vm._v("添加流程字段\n        ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-xs btn-primary",on:{"click":_vm.jump}},[_vm._v("跳页实验")])])])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3)])}
var Index_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-header"},[_c('h1',[_vm._v("\n      流程字段列表\n    ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"input-icon"},[_c('input',{staticClass:"nav-search-input",attrs:{"type":"text","placeholder":"Search ...","id":"nav-search-input","autocomplete":"off"}}),_vm._v(" "),_c('i',{staticClass:"ace-icon fa fa-search nav-search-icon"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-12"},[_c('table',{staticClass:"table table-striped table-bordered"},[_c('thead',[_c('tr',[_c('th',{staticClass:"center"},[_vm._v("#")]),_vm._v(" "),_c('th',[_vm._v("名称")]),_vm._v(" "),_c('th',{staticClass:"hidden-xs"},[_vm._v("类型")]),_vm._v(" "),_c('th',{staticClass:"hidden-480"},[_vm._v("值")]),_vm._v(" "),_c('th',[_vm._v("操作")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',{staticClass:"center"},[_vm._v("1")]),_vm._v(" "),_c('td',[_vm._v("申请人/Applicant")]),_vm._v(" "),_c('td',[_vm._v("input")]),_vm._v(" "),_c('td',[_vm._v("必填项")]),_vm._v(" "),_c('td',[_c('i',{staticClass:"ace-icon fa fa-pencil align-top bigger-125 text-info cursor"}),_vm._v("  \n                "),_c('i',{staticClass:"ace-icon fa fa-trash-o align-top bigger-125 text-danger cursor"})])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"center"},[_vm._v("2")]),_vm._v(" "),_c('td',[_vm._v("申请日期/Application Date")]),_vm._v(" "),_c('td',[_vm._v("date")]),_vm._v(" "),_c('td',[_vm._v(" --- ")]),_vm._v(" "),_c('td',[_c('i',{staticClass:"ace-icon fa fa-pencil align-top bigger-125 text-info cursor"}),_vm._v("  \n                "),_c('i',{staticClass:"ace-icon fa fa-trash-o align-top bigger-125 text-danger cursor"})])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"center"},[_vm._v("3")]),_vm._v(" "),_c('td',[_vm._v("申请原因/Apply Reason")]),_vm._v(" "),_c('td',[_vm._v("textarea")]),_vm._v(" "),_c('td',[_vm._v("必填项")]),_vm._v(" "),_c('td',[_c('i',{staticClass:"ace-icon fa fa-pencil align-top bigger-125 text-info cursor"}),_vm._v("  \n                "),_c('i',{staticClass:"ace-icon fa fa-trash-o align-top bigger-125 text-danger cursor"})])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"center"},[_vm._v("4")]),_vm._v(" "),_c('td',[_vm._v("付款方式/Payment Method")]),_vm._v(" "),_c('td',[_vm._v("select")]),_vm._v(" "),_c('td',[_vm._v("电汇 Wire Transfer,转账 Transfer,现金 Cash")]),_vm._v(" "),_c('td',[_c('i',{staticClass:"ace-icon fa fa-pencil align-top bigger-125 text-info cursor"}),_vm._v("  \n                "),_c('i',{staticClass:"ace-icon fa fa-trash-o align-top bigger-125 text-danger cursor"})])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"center"},[_vm._v("5")]),_vm._v(" "),_c('td',[_vm._v("福利类型/Benefit Type")]),_vm._v(" "),_c('td',[_vm._v("checkbox")]),_vm._v(" "),_c('td',[_vm._v("结婚礼金,生育礼金")]),_vm._v(" "),_c('td',[_c('i',{staticClass:"ace-icon fa fa-pencil align-top bigger-125 text-info cursor"}),_vm._v("  \n                "),_c('i',{staticClass:"ace-icon fa fa-trash-o align-top bigger-125 text-danger cursor"})])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"center"},[_vm._v("6")]),_vm._v(" "),_c('td',[_vm._v("性别/Male")]),_vm._v(" "),_c('td',[_vm._v("radio")]),_vm._v(" "),_c('td',[_vm._v("男 Man,女 Woman")]),_vm._v(" "),_c('td',[_c('i',{staticClass:"ace-icon fa fa-pencil align-top bigger-125 text-info cursor"}),_vm._v("  \n                "),_c('i',{staticClass:"ace-icon fa fa-trash-o align-top bigger-125 text-danger cursor"})])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"center"},[_vm._v("7")]),_vm._v(" "),_c('td',[_vm._v("附件/Accessory")]),_vm._v(" "),_c('td',[_vm._v("inputFile")]),_vm._v(" "),_c('td',[_vm._v(" --- ")]),_vm._v(" "),_c('td',[_c('i',{staticClass:"ace-icon fa fa-pencil align-top bigger-125 text-info cursor"}),_vm._v("  \n                "),_c('i',{staticClass:"ace-icon fa fa-trash-o align-top bigger-125 text-danger cursor"})])])])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal fade",attrs:{"id":"myModal","tabindex":"-1","role":"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog"},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header"},[_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-hidden":"true"}},[_vm._v("×")]),_vm._v(" "),_c('h4',{staticClass:"modal-title",attrs:{"id":"myModalLabel"}},[_vm._v("\n            添加流程字段\n            "),_c('button',{staticClass:"btn btn-xs btn-success add-btn",staticStyle:{"margin-left":"10%"}},[_vm._v("添加流程字段")])])]),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"section"},[_c('div',{staticClass:"pos-rel"},[_c('div',{staticClass:"form-group clearfix"},[_c('input',{staticClass:"fieldName inline middle",attrs:{"type":"text","placeholder":"请输入字段名称"}}),_vm._v(" "),_c('select',{staticClass:"fieldType inline middle",staticStyle:{"height":"34px"}},[_c('option',{attrs:{"value":"0","selected":""}},[_vm._v("请选择字段类型")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("input")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("select")]),_vm._v(" "),_c('option',{attrs:{"value":"3"}},[_vm._v("checkbox")]),_vm._v(" "),_c('option',{attrs:{"value":"4"}},[_vm._v("radio")]),_vm._v(" "),_c('option',{attrs:{"value":"5"}},[_vm._v("textarea")]),_vm._v(" "),_c('option',{attrs:{"value":"6"}},[_vm._v("inputFile")]),_vm._v(" "),_c('option',{attrs:{"value":"7"}},[_vm._v("date")])]),_vm._v(" "),_c('input',{staticClass:"fieldValue middle width-30 hide",attrs:{"type":"text","placeholder":"请输入字段Value,多个值以,分割"}}),_vm._v(" "),_c('div',{staticClass:"fieldRule1 hide middle"},[_c('label',[_c('input',{staticClass:"ace fieldIsEmpty",attrs:{"name":"form-field-checkbox","type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"lbl"},[_vm._v(" 是否为必填项")])])]),_vm._v(" "),_c('div',{staticClass:"fieldRule2 hide middle"},[_c('label',[_c('input',{staticClass:"ace fieldIsNum",attrs:{"name":"form-field-checkbox","type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"lbl"},[_vm._v(" 是否为数字")])])])])])]),_vm._v(" "),_c('div',{staticClass:"tips text-danger"})]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-default",attrs:{"type":"button","data-dismiss":"modal"}},[_vm._v("关闭")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button","id":"btn-submit"}},[_vm._v("提交更改")])])])])])}]
var Index_esExports = { render: Index_render, staticRenderFns: Index_staticRenderFns }
/* harmony default export */ var page_Index = (Index_esExports);
// CONCATENATED MODULE: ./src/page/Index.vue
function Index_injectStyle (ssrContext) {
  __webpack_require__("v2jN")
}
var Index_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Index___vue_template_functional__ = false
/* styles */
var Index___vue_styles__ = Index_injectStyle
/* scopeId */
var Index___vue_scopeId__ = "data-v-15ef2cc4"
/* moduleIdentifier (server only) */
var Index___vue_module_identifier__ = null
var Index_Component = Index_normalizeComponent(
  Index,
  page_Index,
  Index___vue_template_functional__,
  Index___vue_styles__,
  Index___vue_scopeId__,
  Index___vue_module_identifier__
)

/* harmony default export */ var src_page_Index = (Index_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/Page2.vue
//
//
//
//
//
//

/* harmony default export */ var Page2 = ({
  name: 'page2',
  data: function data() {
    return {
      msg: '第二页'
    };
  },

  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-77363fca","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/Page2.vue
var Page2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n  "+_vm._s(_vm.msg)+"\n")])}
var Page2_staticRenderFns = []
var Page2_esExports = { render: Page2_render, staticRenderFns: Page2_staticRenderFns }
/* harmony default export */ var page_Page2 = (Page2_esExports);
// CONCATENATED MODULE: ./src/page/Page2.vue
function Page2_injectStyle (ssrContext) {
  __webpack_require__("1nvv")
}
var Page2_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Page2___vue_template_functional__ = false
/* styles */
var Page2___vue_styles__ = Page2_injectStyle
/* scopeId */
var Page2___vue_scopeId__ = "data-v-77363fca"
/* moduleIdentifier (server only) */
var Page2___vue_module_identifier__ = null
var Page2_Component = Page2_normalizeComponent(
  Page2,
  page_Page2,
  Page2___vue_template_functional__,
  Page2___vue_styles__,
  Page2___vue_scopeId__,
  Page2___vue_module_identifier__
)

/* harmony default export */ var src_page_Page2 = (Page2_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js





vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  routes: [{
    path: '/index',
    name: 'index',
    component: src_page_Index
  }, {
    path: '/page2',
    name: 'page2',
    component: src_page_Page2
  }]
}));
// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




vue_esm["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  components: { App: src_App },
  template: '<App/>'
});

/***/ }),

/***/ "XWkQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "v2jN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.4ac46344705c1b1f7ce6.js.map