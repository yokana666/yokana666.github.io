function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user/registration/registration.component */
    "./src/app/user/registration/registration.component.ts");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/user/login',
      pathMatch: 'full'
    }, {
      path: 'user',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
      children: [{
        path: 'registration',
        component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]
      }, {
        path: 'login',
        component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-ui-v1';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styles: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user/registration/registration.component */
    "./src/app/user/registration/registration.component.ts");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
        progressBar: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"], _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"], _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
            progressBar: true
          })],
          providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 926,
      vars: 0,
      consts: [[1, "dashboard-main-wrapper"], [1, "dashboard-header"], [1, "navbar", "navbar-expand-lg", "bg-white", "fixed-top"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "navbar-right-top"], [1, "nav-item"], ["id", "custom-search", 1, "top-search-bar"], ["type", "text", "placeholder", "Search..", 1, "form-control"], [1, "nav-item", "dropdown", "notification"], ["href", "#", "id", "navbarDropdownMenuLink1", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "nav-icons"], [1, "fas", "fa-fw", "fa-bell"], [1, "indicator"], [1, "dropdown-menu", "dropdown-menu-right", "notification-dropdown"], [1, "notification-title"], [1, "notification-list"], [1, "list-group"], ["href", "#", 1, "list-group-item", "list-group-item-action", "active"], [1, "notification-info"], [1, "notification-list-user-img"], ["src", "assets/images/avatar-2.jpg", "alt", "", 1, "user-avatar-md", "rounded-circle"], [1, "notification-list-user-block"], [1, "notification-list-user-name"], [1, "notification-date"], ["href", "#", 1, "list-group-item", "list-group-item-action"], ["src", "assets/images/avatar-3.jpg", "alt", "", 1, "user-avatar-md", "rounded-circle"], ["src", "assets/images/avatar-4.jpg", "alt", "", 1, "user-avatar-md", "rounded-circle"], ["src", "assets/images/avatar-5.jpg", "alt", "", 1, "user-avatar-md", "rounded-circle"], [1, "list-footer"], ["href", "#"], [1, "nav-item", "dropdown", "connection"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], [1, "fas", "fa-fw", "fa-th"], [1, "dropdown-menu", "dropdown-menu-right", "connection-dropdown"], [1, "connection-list"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-12"], ["href", "#", 1, "connection-item"], ["src", "assets/images/github.png", "alt", ""], ["src", "assets/images/dribbble.png", "alt", ""], ["src", "assets/images/dropbox.png", "alt", ""], ["src", "assets/images/bitbucket.png", "alt", ""], ["src", "assets/images/mail_chimp.png", "alt", ""], ["src", "assets/images/slack.png", "alt", ""], [1, "conntection-footer"], [1, "nav-item", "dropdown", "nav-user"], ["href", "#", "id", "navbarDropdownMenuLink2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "nav-user-img"], ["src", "assets/images/avatar-1.jpg", "alt", "", 1, "user-avatar-md", "rounded-circle"], ["aria-labelledby", "navbarDropdownMenuLink2", 1, "dropdown-menu", "dropdown-menu-right", "nav-user-dropdown"], [1, "nav-user-info"], [1, "mb-0", "text-white", "nav-user-name"], [1, "status"], [1, "ml-2"], ["href", "#", 1, "dropdown-item"], [1, "fas", "fa-user", "mr-2"], [1, "fas", "fa-cog", "mr-2"], [1, "fas", "fa-power-off", "mr-2"], [1, "nav-left-sidebar", "sidebar-dark"], [1, "menu-list"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["href", "#", 1, "d-xl-none", "d-lg-none"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "flex-column"], [1, "nav-divider"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-1", "aria-controls", "submenu-1", 1, "nav-link", "active"], [1, "fa", "fa-fw", "fa-user-circle"], [1, "badge", "badge-success"], ["id", "submenu-1", 1, "collapse", "submenu"], [1, "nav", "flex-column"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-1-2", "aria-controls", "submenu-1-2", 1, "nav-link"], ["id", "submenu-1-2", 1, "collapse", "submenu"], ["href", "index.html", 1, "nav-link"], ["href", "ecommerce-product.html", 1, "nav-link"], ["href", "ecommerce-product-single.html", 1, "nav-link"], ["href", "ecommerce-product-checkout.html", 1, "nav-link"], ["href", "dashboard-finance.html", 1, "nav-link"], ["href", "dashboard-sales.html", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-1-1", "aria-controls", "submenu-1-1", 1, "nav-link"], ["id", "submenu-1-1", 1, "collapse", "submenu"], ["href", "dashboard-influencer.html", 1, "nav-link"], ["href", "influencer-finder.html", 1, "nav-link"], ["href", "influencer-profile.html", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-2", "aria-controls", "submenu-2", 1, "nav-link"], [1, "fa", "fa-fw", "fa-rocket"], ["id", "submenu-2", 1, "collapse", "submenu"], ["href", "pages/cards.html", 1, "nav-link"], [1, "badge", "badge-secondary"], ["href", "pages/general.html", 1, "nav-link"], ["href", "pages/carousel.html", 1, "nav-link"], ["href", "pages/listgroup.html", 1, "nav-link"], ["href", "pages/typography.html", 1, "nav-link"], ["href", "pages/accordions.html", 1, "nav-link"], ["href", "pages/tabs.html", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-3", "aria-controls", "submenu-3", 1, "nav-link"], [1, "fas", "fa-fw", "fa-chart-pie"], ["id", "submenu-3", 1, "collapse", "submenu"], ["href", "pages/chart-c3.html", 1, "nav-link"], ["href", "pages/chart-chartist.html", 1, "nav-link"], ["href", "pages/chart-charts.html", 1, "nav-link"], ["href", "pages/chart-morris.html", 1, "nav-link"], ["href", "pages/chart-sparkline.html", 1, "nav-link"], ["href", "pages/chart-gauge.html", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-4", "aria-controls", "submenu-4", 1, "nav-link"], [1, "fab", "fa-fw", "fa-wpforms"], ["id", "submenu-4", 1, "collapse", "submenu"], ["href", "pages/form-elements.html", 1, "nav-link"], ["href", "pages/form-validation.html", 1, "nav-link"], ["href", "pages/multiselect.html", 1, "nav-link"], ["href", "pages/datepicker.html", 1, "nav-link"], ["href", "pages/bootstrap-select.html", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-5", "aria-controls", "submenu-5", 1, "nav-link"], [1, "fas", "fa-fw", "fa-table"], ["id", "submenu-5", 1, "collapse", "submenu"], ["href", "pages/general-table.html", 1, "nav-link"], ["href", "pages/data-tables.html", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-6", "aria-controls", "submenu-6", 1, "nav-link"], [1, "fas", "fa-fw", "fa-file"], ["id", "submenu-6", 1, "collapse", "submenu"], ["href", "pages/blank-page.html", 1, "nav-link"], ["href", "pages/blank-page-header.html", 1, "nav-link"], ["href", "pages/login.html", 1, "nav-link"], ["href", "pages/404-page.html", 1, "nav-link"], ["href", "pages/sign-up.html", 1, "nav-link"], ["href", "pages/forgot-password.html", 1, "nav-link"], ["href", "pages/pricing.html", 1, "nav-link"], ["href", "pages/timeline.html", 1, "nav-link"], ["href", "pages/calendar.html", 1, "nav-link"], ["href", "pages/sortable-nestable-lists.html", 1, "nav-link"], ["href", "pages/widgets.html", 1, "nav-link"], ["href", "pages/media-object.html", 1, "nav-link"], ["href", "pages/cropper-image.html", 1, "nav-link"], ["href", "pages/color-picker.html", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-7", "aria-controls", "submenu-7", 1, "nav-link"], [1, "fas", "fa-fw", "fa-inbox"], ["id", "submenu-7", 1, "collapse", "submenu"], ["href", "pages/inbox.html", 1, "nav-link"], ["href", "pages/email-details.html", 1, "nav-link"], ["href", "pages/email-compose.html", 1, "nav-link"], ["href", "pages/message-chat.html", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-8", "aria-controls", "submenu-8", 1, "nav-link"], [1, "fas", "fa-fw", "fa-columns"], ["id", "submenu-8", 1, "collapse", "submenu"], ["href", "pages/icon-fontawesome.html", 1, "nav-link"], ["href", "pages/icon-material.html", 1, "nav-link"], ["href", "pages/icon-simple-lineicon.html", 1, "nav-link"], ["href", "pages/icon-themify.html", 1, "nav-link"], ["href", "pages/icon-flag.html", 1, "nav-link"], ["href", "pages/icon-weather.html", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-9", "aria-controls", "submenu-9", 1, "nav-link"], [1, "fas", "fa-fw", "fa-map-marker-alt"], ["id", "submenu-9", 1, "collapse", "submenu"], ["href", "pages/map-google.html", 1, "nav-link"], ["href", "pages/map-vector.html", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-10", "aria-controls", "submenu-10", 1, "nav-link"], [1, "fas", "fa-f", "fa-folder"], ["id", "submenu-10", 1, "collapse", "submenu"], ["href", "#", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "aria-expanded", "false", "data-target", "#submenu-11", "aria-controls", "submenu-11", 1, "nav-link"], ["id", "submenu-11", 1, "collapse", "submenu"], [1, "dashboard-wrapper"], [1, "dashboard-ecommerce"], [1, "container-fluid", "dashboard-content"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12"], [1, "page-header"], [1, "pageheader-title"], [1, "pageheader-text"], [1, "page-breadcrumb"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#", 1, "breadcrumb-link"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ecommerce-widget"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "card"], [1, "card-body"], [1, "text-muted"], [1, "metric-value", "d-inline-block"], [1, "mb-1"], [1, "metric-label", "d-inline-block", "float-right", "text-success", "font-weight-bold"], [1, "fa", "fa-fw", "fa-arrow-up"], ["id", "sparkline-revenue"], ["id", "sparkline-revenue2"], [1, "metric-label", "d-inline-block", "float-right", "text-primary", "font-weight-bold"], ["id", "sparkline-revenue3"], [1, "metric-label", "d-inline-block", "float-right", "text-secondary", "font-weight-bold"], ["id", "sparkline-revenue4"], [1, "col-xl-9", "col-lg-12", "col-md-6", "col-sm-12", "col-12"], [1, "card-header"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table"], [1, "bg-light"], [1, "border-0"], [1, "m-r-10"], ["src", "assets/images/product-pic.jpg", "alt", "user", "width", "45", 1, "rounded"], [1, "badge-dot", "badge-brand", "mr-1"], ["src", "assets/images/product-pic-2.jpg", "alt", "user", "width", "45", 1, "rounded"], [1, "badge-dot", "badge-success", "mr-1"], ["src", "assets/images/product-pic-3.jpg", "alt", "user", "width", "45", 1, "rounded"], ["src", "assets/images/product-pic-4.jpg", "alt", "user", "width", "45", 1, "rounded"], ["colspan", "9"], ["href", "#", 1, "btn", "btn-outline-light", "float-right"], [1, "ct-chart", "ct-golden-section", 2, "height", "354px"], [1, "text-center"], [1, "legend-item", "mr-2"], [1, "fa-xs", "text-primary", "mr-1", "legend-tile"], [1, "fa", "fa-fw", "fa-square-full"], [1, "legend-text"], [1, "fa-xs", "text-secondary", "mr-1", "legend-tile"], [1, "ct-chart-category", "ct-golden-section", 2, "height", "315px"], [1, "text-center", "m-t-40"], [1, "legend-item", "mr-3"], [1, "fa-xs", "text-info", "mr-1", "legend-tile"], [1, "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12", "col-12"], [1, "mb-0"], [1, "ct-chart-product", "ct-golden-section"], [1, "col-xl-3", "col-lg-12", "col-md-6", "col-sm-12", "col-12"], [1, "table", "no-wrap", "p-table"], ["colspan", "3"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-12", "col-12"], [1, "card", "border-3", "border-top", "border-top-primary"], [1, "icon-circle-small", "icon-box-xs", "text-success", "bg-success-light"], [1, "ml-1"], [1, "metric-label", "d-inline-block", "float-right", "text-danger", "font-weight-bold"], [1, "icon-circle-small", "icon-box-xs", "text-danger", "bg-danger-light", "bg-danger-light"], [1, "fa", "fa-fw", "fa-arrow-down"], [1, "col-xl-5", "col-lg-5", "col-md-12", "col-sm-12", "col-12"], ["id", "c3chart_category", 2, "height", "420px"], [1, "col-xl-7", "col-lg-7", "col-md-12", "col-sm-12", "col-12"], ["id", "morris_totalrevenue"], [1, "card-footer"], [1, "display-7", "font-weight-bold"], [1, "text-primary", "d-inline-block"], [1, "text-success", "float-right"], [1, "col-xl-5", "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "social-sales", "list-group", "list-group-flush"], [1, "list-group-item", "social-sales-content"], [1, "social-sales-icon-circle", "facebook-bgcolor", "mr-2"], [1, "fab", "fa-facebook-f"], [1, "social-sales-name"], [1, "social-sales-count", "text-dark"], [1, "social-sales-icon-circle", "twitter-bgcolor", "mr-2"], [1, "fab", "fa-twitter"], [1, "social-sales-icon-circle", "instagram-bgcolor", "mr-2"], [1, "fab", "fa-instagram"], [1, "social-sales-icon-circle", "pinterest-bgcolor", "mr-2"], [1, "fab", "fa-pinterest-p"], [1, "social-sales-icon-circle", "googleplus-bgcolor", "mr-2"], [1, "fab", "fa-google-plus-g"], [1, "card-footer", "text-center"], ["href", "#", 1, "btn-primary-link"], [1, "col-xl-4", "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "traffic-sales", "list-group", "list-group-flush"], [1, "traffic-sales-content", "list-group-item"], [1, "traffic-sales-name"], [1, "traffic-sales-amount"], [1, "icon-circle-small", "icon-box-xs", "text-success", "ml-4", "bg-success-light"], [1, "ml-1", "text-success"], [1, "icon-circle-small", "icon-box-xs", "text-danger", "ml-4", "bg-danger-light"], [1, "ml-1", "text-danger"], [1, "country-sales", "list-group", "list-group-flush"], [1, "country-sales-content", "list-group-item"], [1, "mr-2"], ["title", "us", "id", "us", 1, "flag-icon", "flag-icon-us"], [1, ""], [1, "float-right", "text-dark"], [1, "list-group-item", "country-sales-content"], ["title", "ca", "id", "ca", 1, "flag-icon", "flag-icon-ca"], ["title", "ru", "id", "ru", 1, "flag-icon", "flag-icon-ru"], ["title", "in", "id", "in", 1, "flag-icon", "flag-icon-in"], ["title", "fr", "id", "fr", 1, "flag-icon", "flag-icon-fr"], [1, "footer"], [1, "container-fluid"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "col-12"], ["href", "https://colorlib.com/wp/"], [1, "text-md-right", "footer-links", "d-none", "d-sm-block"], ["href", "javascript: void(0);"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Concept");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Jeremy Rakestraw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "accepted your invitation to join the team. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2 min ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "John Abraham ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "is now following you ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2 days ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Monaan Pechi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " is watching your main repository ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "2 min ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Jessica Caruso");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "accepted your invitation to join the team. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "2 min ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "View all notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Dribbble");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Dropbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Bitbucket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Mail chimp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Slack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "John Abraham ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Setting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "nav", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "ul", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "E-Commerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "E Commerce Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Product List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Product Single");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Product Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Finance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Sales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Infulencer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Influencer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Influencer Finder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "a", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Influencer Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "UI Elements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "a", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Cards ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "List Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Typography");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Accordions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "C3 Charts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Chartist Charts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Morris");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Sparkline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "a", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Guage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "i", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "a", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Form Elements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "a", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Parsely Validations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "a", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Multiselect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Date Picker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Bootstrap Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "a", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "i", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Tables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "a", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "General Tables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Data Tables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " Features ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "a", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " Pages ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Blank Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "a", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Blank Page Header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "a", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "a", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "404 page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "a", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Sign up Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "a", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "a", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Pricing Tables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "a", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "a", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "a", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Sortable/Nestable List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "a", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Widgets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "a", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Media Objects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "a", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Cropper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "a", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Color Picker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "a", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "i", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Apps ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "a", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "a", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Email Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "a", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Email Compose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Message Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "a", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "i", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Icons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "a", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "FontAwesome Icons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "a", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Material Icons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "a", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Simpleline Icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "a", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Themify Icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "a", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Flag Icons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "a", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Weather Icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "a", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "i", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Maps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "a", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Google Maps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "a", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Vector Maps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "a", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "i", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Menu Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "a", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Level 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "a", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Level 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "a", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Level 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "a", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Level 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "a", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Level 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "h2", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "E-commerce Dashboard Template ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "p", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Nulla euismod urna eros, sit amet scelerisque torton lectus vel mauris facilisis faucibus at enim quis massa lobortis rutrum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "nav", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "ol", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "li", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "a", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "li", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "E-Commerce Dashboard Template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "h5", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Total Revenue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "h1", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "$12099");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](427, "i", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "5.86%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "div", 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "h5", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "Affiliate Revenue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "h1", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "$12099");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "i", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "5.86%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "h5", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Refunds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "h1", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "0.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "div", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "h5", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Avg. Revenue Per User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "div", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "h1", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "$28000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "div", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "-2.00%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](468, "div", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "div", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "h5", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "Recent Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "div", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "table", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "thead", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "tr", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "th", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "th", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "th", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "Product Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "th", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "Product Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "th", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "th", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "th", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "Order Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "th", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "th", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "div", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "img", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Product #1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "id000001 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "$80.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "27-08-2018 01:22:12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "Patricia J. King ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](517, "span", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "InTransit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "div", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](524, "img", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "Product #2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "id000002 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "$180.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "25-08-2018 21:12:56");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "Rachel J. Wicker ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](538, "span", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "Delivered ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "div", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](545, "img", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "Product #3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "id000003 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "23");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "$820.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "24-08-2018 14:12:77");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "Michael K. Ledford ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](559, "span", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "Delivered ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "div", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](566, "img", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "Product #4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "id000004 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, "34");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "$340.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, "23-08-2018 09:12:35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, "Michael K. Ledford ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](580, "span", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "Delivered ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "td", 204);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "a", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "h5", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "Customer Acquisition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](591, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "div", 207);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "span", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](595, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "span", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "Returning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "span", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "span", 212);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](600, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "span", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "First Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "h5", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, " Product Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](609, "div", 213);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "div", 214);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "span", 215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](613, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "span", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "Man");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "span", 215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "span", 212);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](618, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "span", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, "Woman");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "span", 215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "span", 216);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](623, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "span", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "div", 217);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "div", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "h5", 218);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, " Product Sales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](632, "div", 219);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "div", 220);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "h5", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "Top Performing Campaigns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "div", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "table", 221);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "thead", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "tr", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "th", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "Campaign");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "th", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "Visits");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "th", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, "Revenue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "Campaign#1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "98,789 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, "$4563");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, "Campaign#2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, "2,789 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](662, "$325");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "Campaign#3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667, "1,459 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, "$225");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "Campaign#4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](674, "5,035 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, "$856");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, "Campaign#5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, "10,000 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "$1000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, "Campaign#5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, "10,000 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, "$1000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "td", 222);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "a", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "div", 223);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "div", 224);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "h5", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "Sales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "div", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "h1", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, "$12099");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "span", 225);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](706, "i", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "span", 226);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "5.86%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "div", 223);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "div", 224);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "h5", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "New Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "div", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "h1", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "1245");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "span", 225);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](719, "i", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "span", 226);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, "10%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "div", 223);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "div", 224);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "h5", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "Visitor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "div", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "h1", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, "13000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "span", 225);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](732, "i", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "span", 226);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](734, "5%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "div", 223);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "div", 224);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "h5", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, "Total Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "div", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "h1", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, "1340");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "span", 228);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](745, "i", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "span", 226);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](747, "4%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "div", 230);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "h5", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "Revenue by Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](754, "div", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "div", 232);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "h5", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, " Total Revenue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](760, "div", 233);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "div", 234);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "p", 235);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "span", 236);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, "$26,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "span", 237);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "+9.45%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "div", 238);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "h5", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, " Sales By Social Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "div", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "ul", 239);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "li", 240);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "span", 241);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](776, "i", 242);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "span", 243);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "span", 244);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, "120 Sales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "li", 240);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "span", 245);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](783, "i", 246);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "span", 243);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](785, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "span", 244);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, "99 Sales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "li", 240);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "span", 247);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](790, "i", 248);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "span", 243);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, "Instagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "span", 244);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](794, "76 Sales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](795, "li", 240);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "span", 249);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](797, "i", 250);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "span", 243);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, "Pinterest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "span", 244);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](801, "56 Sales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "li", 240);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "span", 251);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](804, "i", 252);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "span", 243);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, "Google Plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "span", 244);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "36 Sales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "div", 253);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "a", 254);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "div", 255);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "h5", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, " Sales By Traffic Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "div", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "ul", 256);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "li", 257);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "span", 258);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "Direct");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "span", 259);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, "$4000.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "span", 260);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](824, "i", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "span", 261);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](826, "5.86%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "li", 257);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "span", 258);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "span", 259);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, "$3123.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "span", 260);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](833, "i", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "span", 261);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, "5.86%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "li", 257);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "span", 258);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, "Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "span", 259);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](840, "$3099.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "span", 260);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](842, "i", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "span", 261);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](844, "5.86%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "li", 257);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "span", 258);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "Referrals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "span", 259);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, "$2220.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "span", 262);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](851, "i", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "span", 263);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, "4.02%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "li", 257);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "span", 258);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "span", 259);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, "$1567.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "span", 262);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](860, "i", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "span", 263);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](862, "3.86%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "div", 253);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "a", 254);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](865, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "div", 220);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "h5", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, "Sales By Country Traffic Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "div", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "ul", 264);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "li", 265);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "span", 266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](874, "i", 267);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "span", 268);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](876, "United States");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "span", 269);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](878, "78%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "li", 270);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "span", 266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](881, "i", 271);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "span", 268);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](883, "Canada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "span", 269);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](885, "7%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "li", 270);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "span", 266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](888, "i", 272);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "span", 268);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](890, "Russia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "span", 269);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](892, "4%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "li", 270);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](894, "span", 266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](895, "i", 273);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "span", 268);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](897, "India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "span", 269);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, "12%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "li", 270);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "span", 266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](902, "i", 274);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "span", 268);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](904, "France");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "span", 269);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](906, "16%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "div", 253);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](908, "a", 254);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](909, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "div", 275);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "div", 276);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "div", 277);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](914, " Copyright \xA9 2018 Concept. All rights reserved. Dashboard by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "a", 278);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, "Colorlib");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](917, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "div", 277);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "div", 279);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](920, "a", 280);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](921, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "a", 280);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](923, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](924, "a", 280);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/user.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/user.service.ts ***!
    \****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(fb, http) {
        _classCallCheck(this, UserService);

        this.fb = fb;
        this.http = http;
        this.baseURI = 'http://localhost:5000/api';
        this.formLogin = this.fb.group({
          UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]]
        });
        this.formRegistration = this.fb.group({
          UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
          FullName: [''],
          Passwords: this.fb.group({
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validator: this.comparePasswords
          })
        });
      }

      _createClass(UserService, [{
        key: "comparePasswords",
        value: function comparePasswords(fb) {
          var confirmPasswordController = fb.get('ConfirmPassword'); //passwordMismatch

          if (confirmPasswordController.errors == null || 'passwordMismatch' in confirmPasswordController.errors) {
            if (fb.get('Password').value != confirmPasswordController.value) confirmPasswordController.setErrors({
              passwordMismatch: true
            });else confirmPasswordController.setErrors(null);
          }
        }
      }, {
        key: "register",
        value: function register() {
          var body = {
            UserName: this.formRegistration.value.UserName,
            Email: this.formRegistration.value.Email,
            FullName: this.formRegistration.value.FullName,
            Password: this.formRegistration.value.Passwords.Password
          };
          return this.http.post(this.baseURI + '/ApplicationUser/Register', body);
        }
      }, {
        key: "login",
        value: function login() {
          var body = {
            UserName: this.formLogin.value.UserName,
            Password: this.formLogin.value.Password
          };
          return this.http.post(this.baseURI + '/ApplicationUser/Login', body);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_label_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is Mandatory");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_label_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is Mandatory");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_label_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum 4 characters required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(service, toastr, router) {
        _classCallCheck(this, LoginComponent);

        this.service = service;
        this.toastr = toastr;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.service.formLogin.reset();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.service.login().subscribe(function (res) {
            localStorage.setItem('token', res.token);

            _this.router.navigateByUrl('/home');
          }, function (err) {
            if (err.status == 400) _this.toastr.error('Incorrect username or password', 'Authentication failed.');else console.log(err);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 28,
      vars: 5,
      consts: [[1, "splash-container"], [1, "card"], [1, "card-header", "text-center"], ["href", "../index.html"], ["src", "../assets/images/logo.png", "alt", "logo", 1, "logo-img"], [1, "splash-description"], [1, "card-body"], ["autocomplete", "off", 3, "formGroup", "submit"], [1, "form-group"], ["formControlName", "UserName", "type", "text", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "Password", "type", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], [1, "clearfix"], [1, "card-footer", "bg-white", "p-0"], [1, "card-footer-item", "card-footer-item-bordered"], ["routerLink", "/user/registration", "routerLinkAction", "active", 1, "to_register"], [1, "text-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please enter your user information.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_8_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_label_13_Template, 2, 0, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_label_18_Template, 2, 0, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_label_19_Template, 2, 0, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Create an Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.service.formLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formLogin.get("UserName").touched && (ctx.service.formLogin.get("UserName").errors == null ? null : ctx.service.formLogin.get("UserName").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formLogin.get("Password").touched && (ctx.service.formLogin.get("Password").errors == null ? null : ctx.service.formLogin.get("Password").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formLogin.get("Password").touched && (ctx.service.formLogin.get("Password").errors == null ? null : ctx.service.formLogin.get("Password").errors.minlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.service.formLogin.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/registration/registration.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user/registration/registration.component.ts ***!
    \*************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppUserRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function RegistrationComponent_label_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is Mandatory");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Email Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is Mandatory");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is Mandatory");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum 4 characters required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is Mandatory");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password does not match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(service, toastr) {
        _classCallCheck(this, RegistrationComponent);

        this.service = service;
        this.toastr = toastr;
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.service.formRegistration.reset();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.service.register().subscribe(function (res) {
            if (res.succeeded) {
              _this2.service.formRegistration.reset();

              _this2.toastr.success('New user created', 'Registration successfull.');
            } else {
              res.errors.forEach(function (element) {
                switch (element.code) {
                  case 'DuplicateUserName':
                    _this2.toastr.error('Username is already taken', 'Registration failed.');

                    break;

                  default:
                    _this2.toastr.error(element.description, 'Registration failed.');

                    break;
                }
              });
            }
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 47,
      vars: 9,
      consts: [[1, "splash-container"], [1, "card"], [1, "card-header"], [1, "mb-1"], [1, "card-body"], ["autocomplete", "off", 1, "splash-container", 3, "formGroup", "submit"], [1, "form-group", "required"], ["formControlName", "UserName", "type", "text", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "Email", "type", "text", 1, "form-control"], [1, "form-group"], ["formControlName", "FullName", "type", "text", 1, "form-control"], ["formGroupName", "Passwords"], ["formControlName", "Password", "type", "password", 1, "form-control"], ["formControlName", "ConfirmPassword", "type", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-block", "btn-primary", "btn-lg", 3, "disabled"], [1, "clearfix"], [1, "card-footer", "bg-white", "p-0"], [1, "card-footer-item", "card-footer-item-bordered"], ["routerLink", "/user/login", "routerLinkAction", "active", 1, "text-secondary"], [1, "text-danger"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Registrations Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please enter your user information.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegistrationComponent_Template_form_submit_8_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegistrationComponent_label_13_Template, 2, 0, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegistrationComponent_label_18_Template, 2, 0, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegistrationComponent_label_19_Template, 2, 0, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegistrationComponent_label_29_Template, 2, 0, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegistrationComponent_label_30_Template, 2, 0, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegistrationComponent_label_35_Template, 2, 0, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegistrationComponent_label_36_Template, 2, 0, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Already member? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Login.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.service.formRegistration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formRegistration.get("UserName").touched && (ctx.service.formRegistration.get("UserName").errors == null ? null : ctx.service.formRegistration.get("UserName").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formRegistration.get("Email").touched && (ctx.service.formRegistration.get("Email").errors == null ? null : ctx.service.formRegistration.get("Email").errors.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formRegistration.get("Email").touched && (ctx.service.formRegistration.get("Email").errors == null ? null : ctx.service.formRegistration.get("Email").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formRegistration.get("Passwords.Password").touched && (ctx.service.formRegistration.get("Passwords.Password").errors == null ? null : ctx.service.formRegistration.get("Passwords.Password").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formRegistration.get("Passwords.Password").touched && (ctx.service.formRegistration.get("Passwords.Password").errors == null ? null : ctx.service.formRegistration.get("Passwords.Password").errors.minlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formRegistration.get("Passwords.ConfirmPassword").touched && (ctx.service.formRegistration.get("Passwords.ConfirmPassword").errors == null ? null : ctx.service.formRegistration.get("Passwords.ConfirmPassword").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formRegistration.get("Passwords.ConfirmPassword").touched && (ctx.service.formRegistration.get("Passwords.ConfirmPassword").errors == null ? null : ctx.service.formRegistration.get("Passwords.ConfirmPassword").errors.passwordMismatch));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.service.formRegistration.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent() {
        _classCallCheck(this, UserComponent);
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserComponent;
    }();

    UserComponent.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)();
    };

    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["app-user"]],
      decls: 5,
      vars: 0,
      consts: [["id", "signup", 1, "hiddenanchor"], ["id", "signin", 1, "hiddenanchor"], [1, "login_wrapper"]],
      template: function UserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user',
          templateUrl: './user.component.html',
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\LATIHAN\angular-ui-v1\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map