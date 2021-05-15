(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+nzF":
    /*!********************************************!*\
      !*** ./src/modules/auth/services/index.ts ***!
      \********************************************/

    /*! exports provided: services, AuthUtilsService, AuthService */

    /***/
    function nzF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "services", function () {
        return services;
      });
      /* harmony import */


      var _auth_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth-utils.service */
      "8iQY");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "LonY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthUtilsService", function () {
        return _auth_utils_service__WEBPACK_IMPORTED_MODULE_0__["AuthUtilsService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"];
      });

      var services = [_auth_utils_service__WEBPACK_IMPORTED_MODULE_0__["AuthUtilsService"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]];
      /***/
    },

    /***/
    "/lcZ":
    /*!*******************************************************!*\
      !*** ./src/modules/icons/icons.font-awesome-solid.ts ***!
      \*******************************************************/

    /*! exports provided: fontAwesomeSolidIcons */

    /***/
    function lcZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fontAwesomeSolidIcons", function () {
        return fontAwesomeSolidIcons;
      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* All free solid fontawesome icons -> https://fontawesome.com/icons?d=gallery&s=solid&m=free */


      var fontAwesomeSolidIcons = {
        faAngleDown: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAngleDown"],
        faAngleRight: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAngleRight"],
        faArrowLeft: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faArrowLeft"],
        faBars: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBars"],
        faBookOpen: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBookOpen"],
        faChartArea: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChartArea"],
        faChartBar: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChartBar"],
        faChartPie: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChartPie"],
        faChevronDown: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChevronDown"],
        faChevronUp: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChevronUp"],
        faCircle: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCircle"],
        faColumns: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faColumns"],
        faSearch: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"],
        faTable: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTable"],
        faTachometerAlt: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTachometerAlt"],
        faUser: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUser"]
      };
      /***/
    },

    /***/
    "/pXg":
    /*!**************************************************************************!*\
      !*** ./src/modules/navigation/containers/top-nav/top-nav.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function pXg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host fa-icon {\n  font-size: 20px;\n  vertical-align: text-top;\n}\n:host a.icon {\n  padding: 0 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9wLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtBQUZSO0FBSUk7RUFDSSwwQkFBQTtBQUZSIiwiZmlsZSI6InRvcC1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZmEtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIH1cclxuICAgIGEuaWNvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */";
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
      /*! C:\Work\StaticWebApp\WebSite\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2hFx":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-blog/layout-blog.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hFx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-top-nav></sb-top-nav><ng-content></ng-content><sb-footer></sb-footer>\r\n";
      /***/
    },

    /***/
    "3Hik":
    /*!**************************************************************!*\
      !*** ./src/modules/app-common/interceptors/demo.config.json ***!
      \**************************************************************/

    /*! exports provided: posts, default */

    /***/
    function Hik(module) {
      module.exports = JSON.parse("{\"posts\":[{\"id\":\"fc3e4766-51ac-4385-937b-43643ed26d4a\",\"slug\":\"magna-nostrud-incididunt-cupidatat-cillum-incididunt-et-nisi-in-ut-minim-reprehenderit\",\"backgroundImage\":\"url(\\\"assets/img/post-bg.jpg\\\")\",\"heading\":\"Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.\",\"subHeading\":\"Labore irure irure laborum quis tempor aliqua. Dude\",\"meta\":\"February 19, 2020\",\"body\":\"# Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.\\n\\nLabore irure irure laborum quis tempor aliqua.\\n\\n## Occaecat tempor sint cillum quis sit magna sit incididunt in ut labore eiusmod veniam non.\\n\\nEst ipsum sint officia quis nulla nisi cupidatat aliquip nisi laboris eiusmod eiusmod aliquip do. Commodo elit excepteur occaecat irure Lorem sit nulla nulla sint duis incididunt. Nostrud ut do mollit et amet velit aute excepteur et culpa culpa velit. Cillum veniam officia anim cupidatat.\"},{\"id\":\"9aea3756-fa44-46ad-b893-0f730384dcab\",\"slug\":\"dolore-pariatur-amet-ullamco-aliquip-mollit-aliqua-qui\",\"backgroundImage\":\"url(\\\"assets/img/post-bg.jpg\\\")\",\"heading\":\"Dolore pariatur amet ullamco aliquip mollit aliqua qui.\",\"subHeading\":\"Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.\",\"meta\":\"February 17, 2020\",\"body\":\"# Dolore pariatur amet ullamco aliquip mollit aliqua qui.\\n\\nEiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.\\n\\n## Incididunt cillum do dolor occaecat.\\n\\nTempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla.\"},{\"id\":\"cddbab19-8d8b-40bc-8163-29f975296377\",\"slug\":\"velit-esse-dolor-dolor-qui-cillum-velit-in-quis-exercitation-occaecat\",\"backgroundImage\":\"url(\\\"assets/img/post-bg.jpg\\\")\",\"heading\":\"Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.\",\"subHeading\":\"Adipisicing sit minim occaecat nulla proident exercitation do laboris.\",\"meta\":\"February 15, 2020\",\"body\":\"# Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.\\n\\nAdipisicing sit minim occaecat nulla proident exercitation do laboris.\\n\\n## Mollit magna sunt ipsum eiusmod magna non officia officia id nostrud cillum.\\n\\nLaboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis.\"}]}");
      /***/
    },

    /***/
    "5TF+":
    /*!************************************************!*\
      !*** ./src/modules/app-common/guards/index.ts ***!
      \************************************************/

    /*! exports provided: guards, AppCommonGuard */

    /***/
    function TF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "guards", function () {
        return guards;
      });
      /* harmony import */


      var _app_common_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-common.guard */
      "62Ze");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppCommonGuard", function () {
        return _app_common_guard__WEBPACK_IMPORTED_MODULE_0__["AppCommonGuard"];
      });

      var guards = [_app_common_guard__WEBPACK_IMPORTED_MODULE_0__["AppCommonGuard"]];
      /***/
    },

    /***/
    "5udd":
    /*!*****************************************************************************!*\
      !*** ./src/modules/navigation/layouts/layout-auth/layout-auth.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LayoutAuthComponent */

    /***/
    function udd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutAuthComponent", function () {
        return LayoutAuthComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_layout_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./layout-auth.component.html */
      "f8sU");
      /* harmony import */


      var _layout_auth_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout-auth.component.scss */
      "KEmI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LayoutAuthComponent = /*#__PURE__*/function () {
        function LayoutAuthComponent() {
          _classCallCheck(this, LayoutAuthComponent);
        }

        _createClass(LayoutAuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LayoutAuthComponent;
      }();

      LayoutAuthComponent.ctorParameters = function () {
        return [];
      };

      LayoutAuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-layout-auth',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_layout_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_layout_auth_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LayoutAuthComponent);
      /***/
    },

    /***/
    "62Ze":
    /*!***********************************************************!*\
      !*** ./src/modules/app-common/guards/app-common.guard.ts ***!
      \***********************************************************/

    /*! exports provided: AppCommonGuard */

    /***/
    function Ze(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCommonGuard", function () {
        return AppCommonGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AppCommonGuard = /*#__PURE__*/function () {
        function AppCommonGuard() {
          _classCallCheck(this, AppCommonGuard);
        }

        _createClass(AppCommonGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
          }
        }]);

        return AppCommonGuard;
      }();

      AppCommonGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppCommonGuard);
      /***/
    },

    /***/
    "68rg":
    /*!***********************************************************!*\
      !*** ./src/modules/navigation/guards/navigation.guard.ts ***!
      \***********************************************************/

    /*! exports provided: NavigationGuard */

    /***/
    function rg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationGuard", function () {
        return NavigationGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var NavigationGuard = /*#__PURE__*/function () {
        function NavigationGuard() {
          _classCallCheck(this, NavigationGuard);
        }

        _createClass(NavigationGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
          }
        }]);

        return NavigationGuard;
      }();

      NavigationGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NavigationGuard);
      /***/
    },

    /***/
    "6yf/":
    /*!*************************************************!*\
      !*** ./src/modules/navigation/layouts/index.ts ***!
      \*************************************************/

    /*! exports provided: layouts, LayoutAuthComponent, LayoutErrorComponent, LayoutBlogComponent */

    /***/
    function yf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "layouts", function () {
        return layouts;
      });
      /* harmony import */


      var _layout_auth_layout_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout-auth/layout-auth.component */
      "5udd");
      /* harmony import */


      var _layout_blog_layout_blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout-blog/layout-blog.component */
      "iOCu");
      /* harmony import */


      var _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout-error/layout-error.component */
      "biH8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutAuthComponent", function () {
        return _layout_auth_layout_auth_component__WEBPACK_IMPORTED_MODULE_0__["LayoutAuthComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutErrorComponent", function () {
        return _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_2__["LayoutErrorComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutBlogComponent", function () {
        return _layout_blog_layout_blog_component__WEBPACK_IMPORTED_MODULE_1__["LayoutBlogComponent"];
      });

      var layouts = [_layout_auth_layout_auth_component__WEBPACK_IMPORTED_MODULE_0__["LayoutAuthComponent"], _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_2__["LayoutErrorComponent"], _layout_blog_layout_blog_component__WEBPACK_IMPORTED_MODULE_1__["LayoutBlogComponent"]];
      /***/
    },

    /***/
    "8iQY":
    /*!*********************************************************!*\
      !*** ./src/modules/auth/services/auth-utils.service.ts ***!
      \*********************************************************/

    /*! exports provided: AuthUtilsService */

    /***/
    function iQY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthUtilsService", function () {
        return AuthUtilsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @common/services */
      "gNCb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var _isLoggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);

      var AuthUtilsService = /*#__PURE__*/function () {
        function AuthUtilsService(util) {
          _classCallCheck(this, AuthUtilsService);

          this.util = util;
          this.jwtHelperService = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        }

        _createClass(AuthUtilsService, [{
          key: "isLoggedIn$",
          value: function isLoggedIn$() {
            return _isLoggedIn$;
          }
        }, {
          key: "bearerToken",
          value: function bearerToken() {
            var token = this._jwtIsValid();

            if (token) {
              return "bearer ".concat(token);
            }

            return false;
          }
        }, {
          key: "checkToken",
          value: function checkToken() {
            this._jwtIsValid();
          }
        }, {
          key: "checkToken$",
          value: function checkToken$() {
            var token = this._jwtIsValid();

            if (token) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(token);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new Error('INVALID_JWT'));
          }
        }, {
          key: "processToken$",
          value: function processToken$(token) {
            if (!token) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new Error('NO_TOKEN'));
            }

            this._storeToken(token);

            var tokenPayload = this._decodeToken(token);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(tokenPayload);
          }
        }, {
          key: "_decodeToken",
          value: function _decodeToken(token) {
            var user = this.jwtHelperService.decodeToken(token);
            return user;
          }
        }, {
          key: "decodeToken$",
          value: function decodeToken$(token) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this._decodeToken(token));
          }
        }, {
          key: "_storeToken",
          value: function _storeToken(token) {
            return this.util.localStorage.setItem('sb-clean-blog|token', token);
          }
        }, {
          key: "removeTokens",
          value: function removeTokens() {
            return this.util.localStorage.removeItem('sb-clean-blog|token');
          }
        }, {
          key: "postOptionsAuthHeaders",
          value: function postOptionsAuthHeaders() {
            return {
              headers: {
                Authorization: this.bearerToken()
              }
            };
          }
        }, {
          key: "_jwtIsValid",
          value: function _jwtIsValid() {
            var token = this.util.localStorage.getItem('sb-clean-blog|token');

            if (!token) {
              _isLoggedIn$.next(false);

              return false;
            }

            var expired = this.jwtHelperService.isTokenExpired(token);

            if (expired) {
              this.util.localStorage.removeItem('sb-clean-blog|token');

              _isLoggedIn$.next(false);

              return false;
            }

            _isLoggedIn$.next(true);

            return token;
          }
        }]);

        return AuthUtilsService;
      }();

      AuthUtilsService.ctorParameters = function () {
        return [{
          type: _common_services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
        }];
      };

      AuthUtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])], AuthUtilsService);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
    "C5PV":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/containers/version/version.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function C5PV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span>{{version}}</span>\r\n";
      /***/
    },

    /***/
    "G69V":
    /*!****************************************************!*\
      !*** ./src/modules/app-common/components/index.ts ***!
      \****************************************************/

    /*! exports provided: components, CardComponent, CardViewDetailsComponent */

    /***/
    function G69V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "components", function () {
        return components;
      });
      /* harmony import */


      var _card_view_details_card_view_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./card-view-details/card-view-details.component */
      "Qn4I");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card/card.component */
      "vaVa");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return _card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CardViewDetailsComponent", function () {
        return _card_view_details_card_view_details_component__WEBPACK_IMPORTED_MODULE_0__["CardViewDetailsComponent"];
      });

      var components = [_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _card_view_details_card_view_details_component__WEBPACK_IMPORTED_MODULE_0__["CardViewDetailsComponent"]];
      /***/
    },

    /***/
    "HBbf":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-error/layout-error.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HBbf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"layoutError\">\r\n    <div id=\"layoutError_content\">\r\n        <main><ng-content></ng-content></main>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Hf4d":
    /*!*****************************************************************!*\
      !*** ./src/modules/app-common/interceptors/demo.interceptor.ts ***!
      \*****************************************************************/

    /*! exports provided: DemoInterceptor */

    /***/
    function Hf4d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemoInterceptor", function () {
        return DemoInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @common/services */
      "gNCb");
      /* harmony import */


      var change_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! change-case */
      "8LIU");
      /* harmony import */


      var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! crypto-js/enc-base64 */
      "ETIr");
      /* harmony import */


      var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! crypto-js/enc-utf8 */
      "+NVA");
      /* harmony import */


      var crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! crypto-js/hmac-sha256 */
      "7VPu");
      /* harmony import */


      var crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! uuid */
      "4USb");
      /* harmony import */


      var _demo_config_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./demo.config.json */
      "3Hik");

      var _demo_config_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ./demo.config.json */
      "3Hik", 1);

      var DemoInterceptor = /*#__PURE__*/function () {
        function DemoInterceptor(utilityService, configService) {
          _classCallCheck(this, DemoInterceptor);

          this.utilityService = utilityService;
          this.configService = configService;
          this.secret = 'SHHHHHHHHH';
          var demoPosts = this.utilityService.getStoredObject('DEMO_POSTS');

          if (demoPosts) {
            this.posts = demoPosts;
          } else {
            this.posts = _demo_config_json__WEBPACK_IMPORTED_MODULE_11__.posts;

            this._savePosts();
          }
        }

        _createClass(DemoInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            if (!this.configService.config || !this.configService.config.demoEnabled) {
              return next.handle(request);
            }

            if (request.url.match(/\/api\/latest\/auth\/login$/)) {
              // login$
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                status: 200,
                body: {
                  token: this._createToken()
                }
              }));
            }

            if (request.url.match(/\/api\/latest\/posts$/)) {
              switch (request.method) {
                case 'GET':
                  // getPosts$
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200,
                    body: this.posts
                  }));

                case 'POST':
                  // createPost$
                  var body = request.body;
                  var slug = body.slug ? Object(change_case__WEBPACK_IMPORTED_MODULE_4__["paramCase"])(body.slug).toLowerCase() : Object(change_case__WEBPACK_IMPORTED_MODULE_4__["paramCase"])(body.heading).toLowerCase();
                  var newPost = {
                    id: Object(uuid__WEBPACK_IMPORTED_MODULE_10__["v4"])(),
                    slug: slug,
                    backgroundImage: "url(\"".concat(body.backgroundImage, "\")"),
                    heading: body.heading,
                    subHeading: body.subHeading,
                    body: body.body,
                    meta: Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(new Date(), 'MMMM d, yyyy')
                  };
                  this.posts.unshift(newPost);

                  this._savePosts();

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200,
                    body: newPost
                  }));
              }
            }

            if (request.url.match(/\/api\/latest\/posts\/.+$/)) {
              switch (request.method) {
                case 'GET':
                  // getPost$
                  var slugMatch = request.url.match(/[\w-]+$/);

                  if (slugMatch) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                      status: 200,
                      body: this.posts.find(function (post) {
                        return post.slug === slugMatch[0];
                      })
                    }));
                  }

                  console.log("### ERROR: Issue with getPost$ in DemoInterceptor");
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({});

                case 'PUT':
                  // updatePost$
                  var updatePostPayload = request.body;
                  var updatePostID = request.url.match(/[\w-]+$/);

                  if (updatePostID) {
                    var foundPost = this.posts.find(function (post) {
                      return post.id === updatePostID[0];
                    });
                    updatePostPayload.backgroundImage = updatePostPayload.backgroundImage ? "url(\"".concat(updatePostPayload.backgroundImage, "\")") : undefined;
                    Object.assign(foundPost, updatePostPayload);

                    this._savePosts();

                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                      status: 200,
                      body: undefined
                    }));
                  }

                  console.log("### ERROR: Issue with updatePost$ in DemoInterceptor");
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({});

                case 'DELETE':
                  // deletePost$
                  var deletePostID = request.url.match(/[\w-]+$/);

                  if (deletePostID) {
                    this.posts = this.posts.filter(function (post) {
                      return post.id !== deletePostID[0];
                    });

                    this._savePosts();

                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                      status: 200,
                      body: undefined
                    }));
                  }

                  console.log("### ERROR: Issue with deletePost$ in DemoInterceptor");
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({});
              }
            }

            return next.handle(request);
          }
        }, {
          key: "_savePosts",
          value: function _savePosts() {
            this.utilityService.storeObject('DEMO_POSTS', this.posts);
          }
        }, {
          key: "_createToken",
          value: function _createToken() {
            var stringifiedData = crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_6___default.a.parse(JSON.stringify({
              id: 'test123',
              firstName: 'Testy',
              lastName: 'McTestface',
              email: 'test@test.test'
            }));

            var encodedData = this._base64url(stringifiedData);

            var stringifiedHeader = crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_6___default.a.parse(JSON.stringify({
              alglg: 'HS256',
              typ: 'JWT'
            }));

            var encodedHeader = this._base64url(stringifiedHeader);

            var signature = crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_7___default()("".concat(encodedHeader, ".").concat(encodedData), this.secret);
            return "".concat(encodedHeader, ".").concat(encodedData, ".").concat(this._base64url(signature));
          }
        }, {
          key: "_base64url",
          value: function _base64url(source) {
            // Encode in classical base64
            var encodedSource = crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(source); // Remove padding equal characters

            encodedSource = encodedSource.replace(/=+$/, ''); // Replace characters according to base64url specifications

            encodedSource = encodedSource.replace(/\+/g, '-');
            encodedSource = encodedSource.replace(/\//g, '_');
            return encodedSource;
          }
        }]);

        return DemoInterceptor;
      }();

      DemoInterceptor.ctorParameters = function () {
        return [{
          type: _common_services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
        }, {
          type: _common_services__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      DemoInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"], _common_services__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], DemoInterceptor);
      /***/
    },

    /***/
    "KEmI":
    /*!*******************************************************************************!*\
      !*** ./src/modules/navigation/layouts/layout-auth/layout-auth.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function KEmI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#layoutAuthentication {\n  background-color: #212529;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGF5b3V0LWF1dGguY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkNhTztFRFpQLGFBQUE7QUFESiIsImZpbGUiOiJsYXlvdXQtYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4jbGF5b3V0QXV0aGVudGljYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktOTAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4iLCIvLyBWYXJpYWJsZXNcbi8vXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3Jcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxuXG4vLyBDb2xvciBzeXN0ZW1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXG4gICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXG4gICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXG4gICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxuICApLFxuICAkZ3JheXNcbik7XG5cbiRibHVlOiAgICAjMDA3YmZmICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNkYzM1NDUgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjZmZjMTA3ICFkZWZhdWx0O1xuJGdyZWVuOiAgICMyOGE3NDUgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMTdhMmI4ICFkZWZhdWx0O1xuXG4kY29sb3JzOiAoKSAhZGVmYXVsdDtcbiRjb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiYmx1ZVwiOiAgICAgICAkYmx1ZSxcbiAgICBcImluZGlnb1wiOiAgICAgJGluZGlnbyxcbiAgICBcInB1cnBsZVwiOiAgICAgJHB1cnBsZSxcbiAgICBcInBpbmtcIjogICAgICAgJHBpbmssXG4gICAgXCJyZWRcIjogICAgICAgICRyZWQsXG4gICAgXCJvcmFuZ2VcIjogICAgICRvcmFuZ2UsXG4gICAgXCJ5ZWxsb3dcIjogICAgICR5ZWxsb3csXG4gICAgXCJncmVlblwiOiAgICAgICRncmVlbixcbiAgICBcInRlYWxcIjogICAgICAgJHRlYWwsXG4gICAgXCJjeWFuXCI6ICAgICAgICRjeWFuLFxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXG4gICAgXCJncmF5XCI6ICAgICAgICRncmF5LTYwMCxcbiAgICBcImdyYXktZGFya1wiOiAgJGdyYXktODAwXG4gICksXG4gICRjb2xvcnNcbik7XG5cbiRwcmltYXJ5OiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xuICApLFxuICAkdGhlbWUtY29sb3JzXG4pO1xuXG4vLyBTZXQgYSBzcGVjaWZpYyBqdW1wIHBvaW50IGZvciByZXF1ZXN0aW5nIGNvbG9yIGp1bXBzXG4kdGhlbWUtY29sb3ItaW50ZXJ2YWw6ICAgICAgOCUgIWRlZmF1bHQ7XG5cbi8vIFRoZSB5aXEgbGlnaHRuZXNzIHZhbHVlIHRoYXQgZGV0ZXJtaW5lcyB3aGVuIHRoZSBsaWdodG5lc3Mgb2YgY29sb3IgY2hhbmdlcyBmcm9tIFwiZGFya1wiIHRvIFwibGlnaHRcIi4gQWNjZXB0YWJsZSB2YWx1ZXMgYXJlIGJldHdlZW4gMCBhbmQgMjU1LlxuJHlpcS1jb250cmFzdGVkLXRocmVzaG9sZDogIDE1MCAhZGVmYXVsdDtcblxuLy8gQ3VzdG9taXplIHRoZSBsaWdodCBhbmQgZGFyayB0ZXh0IGNvbG9ycyBmb3IgdXNlIGluIG91ciBZSVEgY29sb3IgY29udHJhc3QgZnVuY3Rpb24uXG4keWlxLXRleHQtZGFyazogICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHlpcS10ZXh0LWxpZ2h0OiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuLy8gQ2hhcmFjdGVycyB3aGljaCBhcmUgZXNjYXBlZCBieSB0aGUgZXNjYXBlLXN2ZyBmdW5jdGlvblxuJGVzY2FwZWQtY2hhcmFjdGVyczogKFxuICAoXCI8XCIsIFwiJTNjXCIpLFxuICAoXCI+XCIsIFwiJTNlXCIpLFxuICAoXCIjXCIsIFwiJTIzXCIpLFxuICAoXCIoXCIsIFwiJTI4XCIpLFxuICAoXCIpXCIsIFwiJTI5XCIpLFxuKSAhZGVmYXVsdDtcblxuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByZWZlcnMtcmVkdWNlZC1tb3Rpb24tbWVkaWEtcXVlcnk6ICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtaG92ZXItbWVkaWEtcXVlcnk6ICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCwgbm8gbG9uZ2VyIGFmZmVjdHMgYW55IGNvbXBpbGVkIENTU1xuJGVuYWJsZS1ncmlkLWNsYXNzZXM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zOiAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJpbnQtc3R5bGVzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yZXNwb25zaXZlLWZvbnQtc2l6ZXM6ICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcblxuXG4vLyBTcGFjaW5nXG4vL1xuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cblxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAwOiAwLFxuICAgIDE6ICgkc3BhY2VyICogLjI1KSxcbiAgICAyOiAoJHNwYWNlciAqIC41KSxcbiAgICAzOiAkc3BhY2VyLFxuICAgIDQ6ICgkc3BhY2VyICogMS41KSxcbiAgICA1OiAoJHNwYWNlciAqIDMpXG4gICksXG4gICRzcGFjZXJzXG4pO1xuXG4vLyBUaGlzIHZhcmlhYmxlIGFmZmVjdHMgdGhlIGAuaC0qYCBhbmQgYC53LSpgIGNsYXNzZXMuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuJHNpemVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAyNTogMjUlLFxuICAgIDUwOiA1MCUsXG4gICAgNzU6IDc1JSxcbiAgICAxMDA6IDEwMCUsXG4gICAgYXV0bzogYXV0b1xuICApLFxuICAkc2l6ZXNcbik7XG5cblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJGxpbmstY29sb3IsIDE1JSkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XG4vLyBEYXJrZW4gcGVyY2VudGFnZSBmb3IgbGlua3Mgd2l0aCBgLnRleHQtKmAgY2xhc3MgKGUuZy4gYC50ZXh0LXN1Y2Nlc3NgKVxuJGVtcGhhc2l6ZWQtbGluay1ob3Zlci1kYXJrZW4tcGVyY2VudGFnZTogMTUlICFkZWZhdWx0O1xuXG4vLyBQYXJhZ3JhcGhzXG4vL1xuLy8gU3R5bGUgcCBlbGVtZW50LlxuXG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206ICAgMXJlbSAhZGVmYXVsdDtcblxuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vL1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcbkBpbmNsdWRlIF9hc3NlcnQtc3RhcnRzLWF0LXplcm8oJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5cblxuLy8gR3JpZCBjb250YWluZXJzXG4vL1xuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXG4gIHNtOiA1NDBweCxcbiAgbWQ6IDcyMHB4LFxuICBsZzogOTYwcHgsXG4gIHhsOiAxMTQwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRjb250YWluZXItbWF4LXdpZHRocywgXCIkY29udGFpbmVyLW1heC13aWR0aHNcIik7XG5cblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRncmlkLXJvdy1jb2x1bW5zOiAgICAgICAgICAgIDYgIWRlZmF1bHQ7XG5cblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG5cbiRyb3VuZGVkLXBpbGw6ICAgICAgICAgICAgICAgIDUwcmVtICFkZWZhdWx0O1xuXG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjE1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAgICAgICAgICAgICAgIDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcblxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNvbXBvbmVudC1hY3RpdmUtYmc6ICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgICAgICAuM2VtICFkZWZhdWx0O1xuJGNhcmV0LXZlcnRpY2FsLWFsaWduOiAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuJGNhcmV0LXNwYWNpbmc6ICAgICAgICAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1iYXNlOiAgICAgICAgICAgICBhbGwgLjJzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tZmFkZTogICAgICAgICAgICAgb3BhY2l0eSAuMTVzIGxpbmVhciAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiAgICAgICAgIGhlaWdodCAuMzVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6ICgpICFkZWZhdWx0O1xuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogam9pbihcbiAgKFxuICAgICgyMSA5KSxcbiAgICAoMTYgOSksXG4gICAgKDQgMyksXG4gICAgKDEgMSksXG4gICksXG4gICRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3Ncbik7XG5cbi8vIFR5cG9ncmFwaHlcbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCIgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgICAgICBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICAgICAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuODc1ICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogICAgICAgICBsaWdodGVyICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogICAgICAgICAgNDAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICAgNzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGRlcjogICAgICAgICAgYm9sZGVyICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtYmFzZTogICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG5cbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgIDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgIDEuMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS1zaXplOiAgICAgICAgICAgICAgIDZyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTItc2l6ZTogICAgICAgICAgICAgICA1LjVyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTMtc2l6ZTogICAgICAgICAgICAgICA0LjVyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTQtc2l6ZTogICAgICAgICAgICAgICAzLjVyZW0gIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5Mi13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5My13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5NC13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5LWxpbmUtaGVpZ2h0OiAgICAgICAgICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRsZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgODAlICFkZWZhdWx0O1xuXG4kdGV4dC1tdXRlZDogICAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLXNtYWxsLWZvbnQtc2l6ZTogICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuXG4kaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcblxuJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRrYmQtYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgLS4xcmVtIDAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XG4kbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtYXJrLWJnOiAgICAgICAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XG5cbiRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItY29sb3I6ICAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kdGFibGUtdGgtZm9udC13ZWlnaHQ6ICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICAgcmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcblxuJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1sZXZlbDogICAgICAgICAgLTYgIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiAgICAgICBudWxsICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6ICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgcmdiYSgkY29tcG9uZW50LWFjdGl2ZS1iZywgLjI1KSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogIDAgMCAwICRpbnB1dC1idG4tZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogICAgJGxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogICAgJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tZm9udC1mYW1pbHk6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kYnRuLXdoaXRlLXNwYWNlOiAgICAgICAgICAgICBudWxsICFkZWZhdWx0OyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXG5cbiRidG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtc206ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRidG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKCR3aGl0ZSwgLjE1KSwgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRidG4tZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNjUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICBpbnNldCAwIDNweCA1cHggcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuXG4kYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRidG4tYmxvY2stc3BhY2luZy15OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAyNSUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtLCAkaW5wdXQtcGFkZGluZy15KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgLyAyKSAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15ICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1zbSAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LWxnICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1sZyAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuXG4kaW5wdXQtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtZ3V0dGVyOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teTogICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teDogICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbmxpbmUtbWFyZ2luLXg6ICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5saW5lLWlucHV0LW1hcmdpbi14OiAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1ncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1jdXJzb3I6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA1MCUgNTAlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3gtc2hhZG93OiAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtY29sb3I6ICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiAgcmdiYSh0aGVtZS1jb2xvcihcInByaW1hcnlcIiksIC41KSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiAgIG51bGwgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm94LXNoYWRvdzogICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3JkZXItY29sb3I6ICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgbnVsbCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJvcmRlci1jb2xvcjogICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9JyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjZsMi45NzQgMi45OUw4IDIuMTkzeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnIHZpZXdCb3g9JzAgMCA0IDQnPjxwYXRoIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgZD0nTTAgMmg0Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiAgIG51bGwgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzUgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgLyAyICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgICAgICAgICAgc3VidHJhY3QoJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplLCAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aCAqIDQpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXk6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtZmFtaWx5OiAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZTogICAgICAgICAgICRpbnB1dC1mb250LXNpemUgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQ6ICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6ICAgMXJlbSAhZGVmYXVsdDsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXG4kY3VzdG9tLXNlbGVjdC1mb250LXdlaWdodDogICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAgICAgICAgICAgICA4cHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc1JyB2aWV3Qm94PScwIDAgNCA1Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kOiAgICAgICAgICBlc2NhcGUtc3ZnKCRjdXN0b20tc2VsZWN0LWluZGljYXRvcikgbm8tcmVwZWF0IHJpZ2h0ICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplICFkZWZhdWx0OyAvLyBVc2VkIHNvIHdlIGNhbiBoYXZlIG11bHRpcGxlIGJhY2tncm91bmQgZWxlbWVudHMgKGUuZy4sIGFycm93IGFuZCBmZWVkYmFjayBpY29uKVxuXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctcmlnaHQ6IGFkZCgxZW0gKiAuNzUsICgyICogJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15ICogLjc1KSArICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246ICAgICAgY2VudGVyIHJpZ2h0ICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWJvcmRlci13aWR0aDogICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiAgICAgICAgICBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGg6ICAgICAgICAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogICAgMCAwIDAgJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICAgICAgICAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAgICAgICAgICAgJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICAgICAgICAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAgICAgICAgICAgJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1jdXJzb3I6ICAgICAgICAgcG9pbnRlciAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICBpbnNldCAwIC4yNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIElFL0VkZ2VcbiRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJvcmRlci1jb2xvcjogICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAgICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtcGFkZGluZy15OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb250LWZhbWlseTogICAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1jb2xvcjogICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRjdXN0b20tZmlsZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS10ZXh0OiAoXG4gIGVuOiBcIkJyb3dzZVwiXG4pICFkZWZhdWx0O1xuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuXG4kZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgdmlld0JveD0nMCAwIDEyIDEyJz48Y2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTUuOCAzLjZoLjRMNiA2LjV6Jy8+PGNpcmNsZSBjeD0nNicgY3k9JzguMicgcj0nLjYnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgc3Ryb2tlPSdub25lJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKCkgIWRlZmF1bHQ7XG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJ2YWxpZFwiOiAoXG4gICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yLFxuICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWRcbiAgICApLFxuICAgIFwiaW52YWxpZFwiOiAoXG4gICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IsXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkXG4gICAgKSxcbiAgKSxcbiAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcbik7XG5cbi8vIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cblxuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuXG4vLyBOYXZzXG5cbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LWRpdmlkZXItY29sb3I6ICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kbmF2LWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcblxuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbi8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xuJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAvIDIgIWRlZmF1bHQ7XG5cbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1mb250LXNpemU6ICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogICAgICAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItZGFyay1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiAgcmdiYSgkd2hpdGUsIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjkpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4kZHJvcGRvd24tbWluLXdpZHRoOiAgICAgICAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1zcGFjZXI6ICAgICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kZHJvcGRvd24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1iZzogICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgc3VidHJhY3QoJGRyb3Bkb3duLWJvcmRlci1yYWRpdXMsICRkcm9wZG93bi1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgJG5hdi1kaXZpZGVyLW1hcmdpbi15ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgZGFya2VuKCRncmF5LTkwMCwgNSUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgJGRyb3Bkb3duLXBhZGRpbmcteSAkZHJvcGRvd24taXRlbS1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgMS4yNSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRwYWdpbmF0aW9uLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG5cbi8vIEp1bWJvdHJvblxuXG4kanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBDYXJkc1xuXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgc3VidHJhY3QoJGNhcmQtYm9yZGVyLXJhZGl1cywgJGNhcmQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyICFkZWZhdWx0O1xuJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xuXG4kY2FyZC1jb2x1bW5zLWNvdW50OiAgICAgICAgICAgICAgICAzICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xuXG5cbi8vIFRvb2x0aXBzXG5cbiR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcblxuLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHBvcG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJHBvcG92ZXItaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgc3VidHJhY3QoJHBvcG92ZXItYm9yZGVyLXJhZGl1cywgJHBvcG92ZXItYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBUb2FzdHNcblxuJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIDc1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNGVtICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcbiRiYWRnZS1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG5cbiRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XG4vLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXG4vLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXG4kYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcblxuXG4vLyBNb2RhbHNcblxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcbiRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KCRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXMsICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG5cbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogICAgICAgICAgICAgICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0OyAvLyBLZWVwIHRoaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcbiRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xuJG1vZGFsLXNjYWxlLXRyYW5zZm9ybTogICAgICAgICAgICAgc2NhbGUoMS4wMikgIWRlZmF1bHQ7XG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuXG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cblxuLy8gRmlndXJlc1xuXG4kZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gQnJlYWRjcnVtYnNcblxuJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNUw0LjI1IDRsMi41LTIuNUw1LjI1IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjVMMy43NSA0bC0yLjUgMi41TDIuNzUgOGw0LTQtNC00eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcbiRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXG5cblxuLy8gU3Bpbm5lcnNcblxuJHNwaW5uZXItd2lkdGg6ICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodDogICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgLjI1ZW0gIWRlZmF1bHQ7XG5cbiRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XG5cblxuLy8gQ2xvc2VcblxuJGNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAwIDFweCAwICR3aGl0ZSAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgIDg3LjUlICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XG5cbiRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4ka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xuXG5cbi8vIFV0aWxpdGllc1xuXG4kZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCwgaW5saW5lLWZsZXggIWRlZmF1bHQ7XG4kb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XG4kcG9zaXRpb25zOiBzdGF0aWMsIHJlbGF0aXZlLCBhYnNvbHV0ZSwgZml4ZWQsIHN0aWNreSAhZGVmYXVsdDtcbiR1c2VyLXNlbGVjdHM6IGFsbCwgYXV0bywgbm9uZSAhZGVmYXVsdDtcblxuXG4vLyBQcmludGluZ1xuXG4kcHJpbnQtcGFnZS1zaXplOiAgICAgICAgICAgICAgICAgICBhMyAhZGVmYXVsdDtcbiRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XG4iXX0= */";
      /***/
    },

    /***/
    "KTHn":
    /*!**********************************************************************!*\
      !*** ./src/modules/navigation/containers/footer/footer.component.ts ***!
      \**********************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function KTHn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "TZXJ");
      /* harmony import */


      var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.scss */
      "TOpt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-footer',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FooterComponent);
      /***/
    },

    /***/
    "KnmP":
    /*!*********************************************************!*\
      !*** ./src/modules/icons/icons.font-awesome-regular.ts ***!
      \*********************************************************/

    /*! exports provided: fontAwesomeRegularIcons */

    /***/
    function KnmP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fontAwesomeRegularIcons", function () {
        return fontAwesomeRegularIcons;
      });
      /* harmony import */


      var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-regular-svg-icons */
      "twK/");
      /* All free solid fontawesome icons -> https://fontawesome.com/icons?d=gallery&s=regular&m=free */


      var fontAwesomeRegularIcons = {
        faBell: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBell"]
      };
      /***/
    },

    /***/
    "LTXA":
    /*!****************************************************!*\
      !*** ./src/modules/app-common/containers/index.ts ***!
      \****************************************************/

    /*! exports provided: containers, VersionComponent */

    /***/
    function LTXA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containers", function () {
        return containers;
      });
      /* harmony import */


      var _version_version_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./version/version.component */
      "iR7h");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VersionComponent", function () {
        return _version_version_component__WEBPACK_IMPORTED_MODULE_0__["VersionComponent"];
      });

      var containers = [_version_version_component__WEBPACK_IMPORTED_MODULE_0__["VersionComponent"]];
      /***/
    },

    /***/
    "LonY":
    /*!***************************************************!*\
      !*** ./src/modules/auth/services/auth.service.ts ***!
      \***************************************************/

    /*! exports provided: AuthService */

    /***/
    function LonY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _common_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @common/services */
      "gNCb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _auth_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./auth-utils.service */
      "8iQY");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, configService, authUtilsService, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.configService = configService;
          this.authUtilsService = authUtilsService;
          this.router = router;
        }

        _createClass(AuthService, [{
          key: "login$",
          value: function login$(loginPayload) {
            var _this = this;

            return this.http.post("".concat(this.configService.config.sbCleanBlogNodeURL, "/api/latest/auth/login"), loginPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (loginResults) {
              return _this.authUtilsService.processToken$(loginResults.token);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(_this.router.navigate(['/']));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _common_services__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: _auth_utils_service__WEBPACK_IMPORTED_MODULE_7__["AuthUtilsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _common_services__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _auth_utils_service__WEBPACK_IMPORTED_MODULE_7__["AuthUtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AuthService);
      /***/
    },

    /***/
    "NMtB":
    /*!*****************************************************!*\
      !*** ./src/modules/app-common/app-common.module.ts ***!
      \*****************************************************/

    /*! exports provided: AppCommonModule, configServiceFactory, authInterceptorFactory, demoInterceptorFactory */

    /***/
    function NMtB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCommonModule", function () {
        return AppCommonModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "configServiceFactory", function () {
        return configServiceFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authInterceptorFactory", function () {
        return authInterceptorFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "demoInterceptorFactory", function () {
        return demoInterceptorFactory;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @modules/auth/services */
      "+nzF");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @modules/icons/icons.module */
      "NYJi");
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-markdown */
      "lR5k");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./containers */
      "LTXA");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components */
      "G69V");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./guards */
      "5TF+");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services */
      "gNCb");
      /* harmony import */


      var _interceptors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./interceptors */
      "NaSV");

      var AppCommonModule_1;
      /* tslint:disable: ordered-imports*/

      /* Third Party */

      var thirdParty = [_modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_7__["IconsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]];
      /* Containers */

      /* Components */

      /* Guards */

      /* Services */

      /* Interceptors */

      var AppCommonModule = AppCommonModule_1 = /*#__PURE__*/function () {
        function AppCommonModule() {
          _classCallCheck(this, AppCommonModule);
        }

        _createClass(AppCommonModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: AppCommonModule_1,
              providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_12__["services"]), _toConsumableArray(_modules_auth_services__WEBPACK_IMPORTED_MODULE_5__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_11__["guards"]), [{
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                useFactory: configServiceFactory,
                multi: true,
                deps: [_services__WEBPACK_IMPORTED_MODULE_12__["ConfigService"], _services__WEBPACK_IMPORTED_MODULE_12__["PrismService"]]
              }, {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useFactory: authInterceptorFactory,
                multi: true,
                deps: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__["AuthUtilsService"]]
              }, {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useFactory: demoInterceptorFactory,
                multi: true,
                deps: [_services__WEBPACK_IMPORTED_MODULE_12__["UtilityService"], _services__WEBPACK_IMPORTED_MODULE_12__["ConfigService"]]
              }])
            };
          }
        }]);

        return AppCommonModule;
      }();

      AppCommonModule = AppCommonModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]].concat(thirdParty, [ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot({
          sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].NONE
        })]),
        declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_9__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_10__["components"])),
        exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_9__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_10__["components"]), thirdParty)
      })], AppCommonModule);

      function configServiceFactory(configService) {
        return function () {
          return configService.loadConfig();
        };
      }

      function authInterceptorFactory(router, authUtilsService) {
        return new _interceptors__WEBPACK_IMPORTED_MODULE_13__["interceptors"].AuthInterceptor(router, authUtilsService);
      }

      function demoInterceptorFactory(utilityServuce, configServuce) {
        return new _interceptors__WEBPACK_IMPORTED_MODULE_13__["interceptors"].DemoInterceptor(utilityServuce, configServuce);
      }
      /***/

    },

    /***/
    "NYJi":
    /*!*******************************************!*\
      !*** ./src/modules/icons/icons.module.ts ***!
      \*******************************************/

    /*! exports provided: IconsModule */

    /***/
    function NYJi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconsModule", function () {
        return IconsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _icons_font_awesome_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./icons.font-awesome-solid */
      "/lcZ");
      /* harmony import */


      var _icons_font_awesome_regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./icons.font-awesome-regular */
      "KnmP");
      /* harmony import */


      var _icons_font_awesome_brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./icons.font-awesome-brands */
      "p1Hk");
      /* tslint:disable: ordered-imports*/


      var IconsModule = function IconsModule(library) {
        _classCallCheck(this, IconsModule);

        library.addIconPacks(_icons_font_awesome_solid__WEBPACK_IMPORTED_MODULE_3__["fontAwesomeSolidIcons"], _icons_font_awesome_regular__WEBPACK_IMPORTED_MODULE_4__["fontAwesomeRegularIcons"], _icons_font_awesome_brands__WEBPACK_IMPORTED_MODULE_5__["fontAwesomeBrandsIcons"]);
      };

      IconsModule.ctorParameters = function () {
        return [{
          type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"]
        }];
      };

      IconsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"]])], IconsModule);
      /***/
    },

    /***/
    "NaSV":
    /*!******************************************************!*\
      !*** ./src/modules/app-common/interceptors/index.ts ***!
      \******************************************************/

    /*! exports provided: interceptors, AuthInterceptor, DemoInterceptor */

    /***/
    function NaSV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "interceptors", function () {
        return interceptors;
      });
      /* harmony import */


      var _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.interceptor */
      "Styw");
      /* harmony import */


      var _demo_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./demo.interceptor */
      "Hf4d");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__["AuthInterceptor"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DemoInterceptor", function () {
        return _demo_interceptor__WEBPACK_IMPORTED_MODULE_1__["DemoInterceptor"];
      });

      var interceptors = {
        AuthInterceptor: _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__["AuthInterceptor"],
        DemoInterceptor: _demo_interceptor__WEBPACK_IMPORTED_MODULE_1__["DemoInterceptor"]
      };
      /***/
    },

    /***/
    "Nnxo":
    /*!**********************************************************************************************!*\
      !*** ./src/modules/app-common/components/card-view-details/card-view-details.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nnxo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLXZpZXctZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Qn4I":
    /*!********************************************************************************************!*\
      !*** ./src/modules/app-common/components/card-view-details/card-view-details.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: CardViewDetailsComponent */

    /***/
    function Qn4I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardViewDetailsComponent", function () {
        return CardViewDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_view_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-view-details.component.html */
      "uFFS");
      /* harmony import */


      var _card_view_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card-view-details.component.scss */
      "Nnxo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardViewDetailsComponent = /*#__PURE__*/function () {
        function CardViewDetailsComponent() {
          _classCallCheck(this, CardViewDetailsComponent);

          this.link = '';
          this.customClasses = [];
        }

        _createClass(CardViewDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.background) {
              this.customClasses.push(this.background);
            }

            if (this.color) {
              this.customClasses.push(this.color);
            }
          }
        }]);

        return CardViewDetailsComponent;
      }();

      CardViewDetailsComponent.ctorParameters = function () {
        return [];
      };

      CardViewDetailsComponent.propDecorators = {
        background: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CardViewDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-card-view-details',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_card_view_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_view_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardViewDetailsComponent);
      /***/
    },

    /***/
    "ReHY":
    /*!**************************************************!*\
      !*** ./src/modules/navigation/services/index.ts ***!
      \**************************************************/

    /*! exports provided: services, NavigationService */

    /***/
    function ReHY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "services", function () {
        return services;
      });
      /* harmony import */


      var _navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./navigation.service */
      "jvcL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return _navigation_service__WEBPACK_IMPORTED_MODULE_0__["NavigationService"];
      });

      var services = [_navigation_service__WEBPACK_IMPORTED_MODULE_0__["NavigationService"]];
      /***/
    },

    /***/
    "SIQ8":
    /*!**************************************************************************!*\
      !*** ./src/modules/app-common/containers/version/version.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function SIQ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9uLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "Styw":
    /*!*****************************************************************!*\
      !*** ./src/modules/app-common/interceptors/auth.interceptor.ts ***!
      \*****************************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function Styw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @modules/auth/services */
      "+nzF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(router, authUtilsService) {
          _classCallCheck(this, AuthInterceptor);

          this.router = router;
          this.authUtilsService = authUtilsService;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this2 = this;

            var bearerToken = this.authUtilsService.bearerToken();

            if (bearerToken && !_isWhiteListed(request.method, request.url)) {
              request = request.clone({
                setHeaders: {
                  'Content-Type': 'application/json',
                  Authorization: bearerToken
                }
              });
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              if (error.status === 401) {
                _this2.router.navigate(['/error/401']);
              }

              if (error.status === 404) {
                _this2.router.navigate(['/error/404']);
              }

              if (error.status === 500) {
                _this2.router.navigate(['/error/500']);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }));
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthUtilsService"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthUtilsService"]])], AuthInterceptor);

      function _isWhiteListed(method, url) {
        var whiteList = {
          GET: ['assets/*', 'api/latest/posts/*'],
          POST: ['api/latest/auth/login']
        };
        var paths = whiteList[method];

        if (paths) {
          var _iterator = _createForOfIteratorHelper(paths),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var path = _step.value;

              if (url.match(path)) {
                return true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return false;
      }
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AppComponent = function AppComponent(router, titleService) {
        var _this3 = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.titleService = titleService;
        this.title = 'sb-clean-blog-angular';
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildActivationEnd"];
        })).subscribe(function (event) {
          var snapshot = event.snapshot;

          while (snapshot.firstChild !== null) {
            snapshot = snapshot.firstChild;
          }

          _this3.titleService.setTitle(snapshot.data.title || 'Subhankar Sarkar');
        });
      };

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])], AppComponent);
      /***/
    },

    /***/
    "TOpt":
    /*!************************************************************************!*\
      !*** ./src/modules/navigation/containers/footer/footer.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function TOpt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "TZXJ":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/footer/footer.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TZXJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n                <ul class=\"list-inline text-center\">\r\n                    <li class=\"list-inline-item\">\r\n                        <a href=\"https://twitter.com/subhankars\" target=\"_blank\"\r\n                            ><fa-stack size=\"lg\"><fa-icon class=\"fa-stack-2x\" [icon]='[\"fas\", \"circle\"]' stackItemSize=\"2x\"></fa-icon><fa-icon class=\"fa-stack-1x fa-inverse\" [icon]='[\"fab\", \"twitter\"]' stackItemSize=\"1x\"></fa-icon></fa-stack\r\n                        ></a>\r\n                    </li>\r\n                    <!--<li class=\"list-inline-item\">\r\n                        <a [routerLink]=\"\"\r\n                            ><fa-stack size=\"lg\"><fa-icon class=\"fa-stack-2x\" [icon]='[\"fas\", \"circle\"]' stackItemSize=\"2x\"></fa-icon><fa-icon class=\"fa-stack-1x fa-inverse\" [icon]='[\"fab\", \"facebook-f\"]' stackItemSize=\"1x\"></fa-icon></fa-stack\r\n                        ></a>\r\n                    </li> -->\r\n                    <li class=\"list-inline-item\">\r\n                        <a href=\"https://github.com/subhankars\" target=\"_blank\"\r\n                            ><fa-stack size=\"lg\"><fa-icon class=\"fa-stack-2x\" [icon]='[\"fas\", \"circle\"]' stackItemSize=\"2x\"></fa-icon><fa-icon class=\"fa-stack-1x fa-inverse\" [icon]='[\"fab\", \"github\"]' stackItemSize=\"1x\"></fa-icon></fa-stack\r\n                        ></a>\r\n                    </li>\r\n                </ul>\r\n                <p class=\"copyright text-muted\">Copyright © Your Website 2020</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
      /***/
    },

    /***/
    "X0uC":
    /*!*********************************************************************************!*\
      !*** ./src/modules/navigation/layouts/layout-error/layout-error.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function X0uC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQtZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "XKEb":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/top-nav/top-nav.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XKEb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" routerLink=\"/\">Subhankar Sarkar</a><button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><fa-icon class=\"ml-1\" [icon]='[\"fas\", \"bars\"]'></fa-icon></button>\r\n        <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isMenuCollapsed\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/\">Home</a></li>\r\n                <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link icon\" href=\"https://github.com/subhankars\" target=\"_blank\"><fa-icon [icon]='[\"fab\", \"github\"]'></fa-icon></a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"isLoggedIn &amp;&amp; isOnPost\"><a class=\"nav-link pointer\" (click)=\"editPost()\">Edit Post</a></li>\r\n            </ul>\r\n            <form class=\"form-inline ml-lg-2\" *ngIf=\"isLoggedIn\"><a class=\"btn btn-primary\" routerLink=\"/new\">New Post</a></form>\r\n        </div>\r\n    </div>\r\n</nav>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @common/app-common.module */
      "NMtB");
      /* harmony import */


      var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @modules/navigation/navigation.module */
      "hex+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"].forRoot(), _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"].forRoot()],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "biH8":
    /*!*******************************************************************************!*\
      !*** ./src/modules/navigation/layouts/layout-error/layout-error.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: LayoutErrorComponent */

    /***/
    function biH8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutErrorComponent", function () {
        return LayoutErrorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_layout_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./layout-error.component.html */
      "HBbf");
      /* harmony import */


      var _layout_error_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout-error.component.scss */
      "X0uC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LayoutErrorComponent = /*#__PURE__*/function () {
        function LayoutErrorComponent() {
          _classCallCheck(this, LayoutErrorComponent);
        }

        _createClass(LayoutErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LayoutErrorComponent;
      }();

      LayoutErrorComponent.ctorParameters = function () {
        return [];
      };

      LayoutErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-layout-error',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_layout_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_layout_error_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LayoutErrorComponent);
      /***/
    },

    /***/
    "coY2":
    /*!************************************************!*\
      !*** ./src/modules/navigation/guards/index.ts ***!
      \************************************************/

    /*! exports provided: guards, NavigationGuard */

    /***/
    function coY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "guards", function () {
        return guards;
      });
      /* harmony import */


      var _navigation_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./navigation.guard */
      "68rg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NavigationGuard", function () {
        return _navigation_guard__WEBPACK_IMPORTED_MODULE_0__["NavigationGuard"];
      });

      var guards = [_navigation_guard__WEBPACK_IMPORTED_MODULE_0__["NavigationGuard"]];
      /***/
    },

    /***/
    "dZFI":
    /*!********************************************************************!*\
      !*** ./src/modules/app-common/components/card/card.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function dZFI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "dw0y":
    /*!************************************************************!*\
      !*** ./src/modules/app-common/services/utility.service.ts ***!
      \************************************************************/

    /*! exports provided: UtilityService */

    /***/
    function dw0y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
        return UtilityService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UtilityService = /*#__PURE__*/function () {
        function UtilityService(http) {
          _classCallCheck(this, UtilityService);

          this.http = http;
          this.parse = JSON.parse;
          this.stringify = JSON.stringify;
          this.localStorage = localStorage;
        }

        _createClass(UtilityService, [{
          key: "getStoredObject",
          value: function getStoredObject(objectName) {
            var objectString = this.localStorage.getItem(objectName);

            if (!objectString) {
              return undefined;
            }

            return this.parse(objectString);
          }
        }, {
          key: "storeObject",
          value: function storeObject(objectName, objectToStore) {
            this.localStorage.setItem(objectName, this.stringify(objectToStore));
          }
        }, {
          key: "version$",
          get: function get() {
            return this.http.get('/assets/version', {
              responseType: 'text'
            });
          }
        }]);

        return UtilityService;
      }();

      UtilityService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      UtilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], UtilityService);
      /***/
    },

    /***/
    "eUsG":
    /*!****************************************************!*\
      !*** ./src/modules/navigation/containers/index.ts ***!
      \****************************************************/

    /*! exports provided: containers, TopNavComponent, FooterComponent */

    /***/
    function eUsG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containers", function () {
        return containers;
      });
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./footer/footer.component */
      "KTHn");
      /* harmony import */


      var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./top-nav/top-nav.component */
      "zZ3C");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TopNavComponent", function () {
        return _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__["TopNavComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"];
      });

      var containers = [_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__["TopNavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]];
      /***/
    },

    /***/
    "f8sU":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-auth/layout-auth.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f8sU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"layoutAuthentication\">\r\n    <div id=\"layoutAuthentication_content\">\r\n        <main><ng-content></ng-content></main>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "gNCb":
    /*!**************************************************!*\
      !*** ./src/modules/app-common/services/index.ts ***!
      \**************************************************/

    /*! exports provided: services, AppCommonService, ConfigService, PrismService, UtilityService */

    /***/
    function gNCb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "services", function () {
        return services;
      });
      /* harmony import */


      var _app_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-common.service */
      "u8hC");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./config.service */
      "k6eA");
      /* harmony import */


      var _prism_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./prism.service */
      "sevx");
      /* harmony import */


      var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utility.service */
      "dw0y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppCommonService", function () {
        return _app_common_service__WEBPACK_IMPORTED_MODULE_0__["AppCommonService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return _config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PrismService", function () {
        return _prism_service__WEBPACK_IMPORTED_MODULE_2__["PrismService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
        return _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"];
      });

      var services = [_app_common_service__WEBPACK_IMPORTED_MODULE_0__["AppCommonService"], _config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _prism_service__WEBPACK_IMPORTED_MODULE_2__["PrismService"], _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]];
      /***/
    },

    /***/
    "hex+":
    /*!*****************************************************!*\
      !*** ./src/modules/navigation/navigation.module.ts ***!
      \*****************************************************/

    /*! exports provided: NavigationModule */

    /***/
    function hex(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
        return NavigationModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @common/app-common.module */
      "NMtB");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components */
      "ndoz");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./containers */
      "eUsG");
      /* harmony import */


      var _layouts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./layouts */
      "6yf/");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./guards */
      "coY2");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services */
      "ReHY");

      var NavigationModule_1;
      /* tslint:disable: ordered-imports*/

      /* Modules */

      /* Components */

      /* Containers */

      /* Layouts */

      /* Guards */

      /* Services */

      var NavigationModule = NavigationModule_1 = /*#__PURE__*/function () {
        function NavigationModule(navServices) {
          _classCallCheck(this, NavigationModule);

          this.navServices = navServices;
        }

        _createClass(NavigationModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: NavigationModule_1,
              providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_9__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_8__["guards"]))
            };
          }
        }]);

        return NavigationModule;
      }();

      NavigationModule.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]
        }];
      };

      NavigationModule = NavigationModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]],
        declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_6__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["components"]), _toConsumableArray(_layouts__WEBPACK_IMPORTED_MODULE_7__["layouts"])),
        exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_6__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["components"]), _toConsumableArray(_layouts__WEBPACK_IMPORTED_MODULE_7__["layouts"]))
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]])], NavigationModule);
      /***/
    },

    /***/
    "iOCu":
    /*!*****************************************************************************!*\
      !*** ./src/modules/navigation/layouts/layout-blog/layout-blog.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LayoutBlogComponent */

    /***/
    function iOCu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutBlogComponent", function () {
        return LayoutBlogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_layout_blog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./layout-blog.component.html */
      "2hFx");
      /* harmony import */


      var _layout_blog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout-blog.component.scss */
      "jwtK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LayoutBlogComponent = /*#__PURE__*/function () {
        function LayoutBlogComponent() {
          _classCallCheck(this, LayoutBlogComponent);
        }

        _createClass(LayoutBlogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LayoutBlogComponent;
      }();

      LayoutBlogComponent.ctorParameters = function () {
        return [];
      };

      LayoutBlogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-layout-blog',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_layout_blog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_layout_blog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LayoutBlogComponent);
      /***/
    },

    /***/
    "iR7h":
    /*!************************************************************************!*\
      !*** ./src/modules/app-common/containers/version/version.component.ts ***!
      \************************************************************************/

    /*! exports provided: VersionComponent */

    /***/
    function iR7h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VersionComponent", function () {
        return VersionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_version_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./version.component.html */
      "C5PV");
      /* harmony import */


      var _version_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./version.component.scss */
      "SIQ8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _modules_app_common_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @modules/app-common/services */
      "gNCb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var VersionComponent = /*#__PURE__*/function () {
        function VersionComponent(utilityService) {
          _classCallCheck(this, VersionComponent);

          this.utilityService = utilityService;
        }

        _createClass(VersionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.utilityService.version$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (v) {
              return _this4.version = v;
            });
          }
        }]);

        return VersionComponent;
      }();

      VersionComponent.ctorParameters = function () {
        return [{
          type: _modules_app_common_services__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
        }];
      };

      VersionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-version',
        template: _raw_loader_version_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_version_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_app_common_services__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])], VersionComponent);
      /***/
    },

    /***/
    "jvcL":
    /*!***************************************************************!*\
      !*** ./src/modules/navigation/services/navigation.service.ts ***!
      \***************************************************************/

    /*! exports provided: NavigationService */

    /***/
    function jvcL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return NavigationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var NavigationService = /*#__PURE__*/function () {
        function NavigationService(route, router) {
          var _this5 = this;

          _classCallCheck(this, NavigationService);

          this.route = route;
          this.router = router;
          this._routeData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
          this._currentURL$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
          this._currentComponent$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildActivationEnd"];
          })).subscribe(function (event) {
            var snapshot = event.snapshot;

            while (snapshot.firstChild !== null) {
              snapshot = snapshot.firstChild;
            }

            _this5._routeData$.next(snapshot.data);

            _this5._currentURL$.next(router.url);

            _this5._currentComponent$.next(snapshot.component.id);
          });
        }

        _createClass(NavigationService, [{
          key: "routeData$",
          value: function routeData$() {
            return this._routeData$;
          }
        }, {
          key: "currentURL$",
          value: function currentURL$() {
            return this._currentURL$;
          }
        }, {
          key: "currentComponent$",
          value: function currentComponent$() {
            return this._currentComponent$;
          }
        }]);

        return NavigationService;
      }();

      NavigationService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      NavigationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], NavigationService);
      /***/
    },

    /***/
    "jwtK":
    /*!*******************************************************************************!*\
      !*** ./src/modules/navigation/layouts/layout-blog/layout-blog.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function jwtK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQtYmxvZy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "jyPu":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card/card.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jyPu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card mb-4\" [ngClass]=\"customClasses\"><ng-content select=\".card-header\"></ng-content><ng-content select=\".card-body\"></ng-content><ng-content select=\".card-footer\"></ng-content></div>\r\n";
      /***/
    },

    /***/
    "k6eA":
    /*!***********************************************************!*\
      !*** ./src/modules/app-common/services/config.service.ts ***!
      \***********************************************************/

    /*! exports provided: ConfigService */

    /***/
    function k6eA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var _config;

      var ConfigService = /*#__PURE__*/function () {
        function ConfigService(http) {
          _classCallCheck(this, ConfigService);

          this.http = http;
        }

        _createClass(ConfigService, [{
          key: "loadConfig",
          value: function loadConfig() {
            return this.http.get("assets/config.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (config) {
              _config = config;
            })).toPromise();
          }
        }, {
          key: "config",
          get: function get() {
            return _config;
          }
        }]);

        return ConfigService;
      }();

      ConfigService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ConfigService);
      /***/
    },

    /***/
    "ndoz":
    /*!****************************************************!*\
      !*** ./src/modules/navigation/components/index.ts ***!
      \****************************************************/

    /*! exports provided: components */

    /***/
    function ndoz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "components", function () {
        return components;
      });

      var components = [];
      /***/
    },

    /***/
    "p1Hk":
    /*!********************************************************!*\
      !*** ./src/modules/icons/icons.font-awesome-brands.ts ***!
      \********************************************************/

    /*! exports provided: fontAwesomeBrandsIcons */

    /***/
    function p1Hk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fontAwesomeBrandsIcons", function () {
        return fontAwesomeBrandsIcons;
      });
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "8tEE");
      /* All free solid fontawesome icons -> https://fontawesome.com/icons?d=gallery&s=brands&m=free */


      var fontAwesomeBrandsIcons = {
        faGithub: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGithub"],
        faFacebook: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFacebook"],
        faFacebookF: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFacebookF"],
        faGoogle: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGoogle"],
        faMarkdown: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faMarkdown"],
        faTwitter: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTwitter"]
      };
      /***/
    },

    /***/
    "sevx":
    /*!**********************************************************!*\
      !*** ./src/modules/app-common/services/prism.service.ts ***!
      \**********************************************************/

    /*! exports provided: PrismService */

    /***/
    function sevx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrismService", function () {
        return PrismService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! marked */
      "DlQD");
      /* harmony import */


      var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! prismjs */
      "wZee");
      /* harmony import */


      var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var prismjs_components_prism_pug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! prismjs/components/prism-pug */
      "dVlL");
      /* harmony import */


      var prismjs_components_prism_pug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_pug__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! prismjs/components/prism-scss */
      "hnpa");
      /* harmony import */


      var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! prismjs/components/prism-typescript */
      "XIHC");
      /* harmony import */


      var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_6__);

      var PrismService = function PrismService() {
        _classCallCheck(this, PrismService);

        this.Marked = marked__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.Prism = prismjs__WEBPACK_IMPORTED_MODULE_3___default.a;
      };

      PrismService.ctorParameters = function () {
        return [];
      };

      PrismService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PrismService);
      /***/
    },

    /***/
    "u8hC":
    /*!***************************************************************!*\
      !*** ./src/modules/app-common/services/app-common.service.ts ***!
      \***************************************************************/

    /*! exports provided: AppCommonService */

    /***/
    function u8hC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCommonService", function () {
        return AppCommonService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AppCommonService = /*#__PURE__*/function () {
        function AppCommonService() {
          _classCallCheck(this, AppCommonService);
        }

        _createClass(AppCommonService, [{
          key: "getAppCommon$",
          value: function getAppCommon$() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
          }
        }]);

        return AppCommonService;
      }();

      AppCommonService.ctorParameters = function () {
        return [];
      };

      AppCommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AppCommonService);
      /***/
    },

    /***/
    "uFFS":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-view-details/card-view-details.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uFFS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card text-white mb-4\" [ngClass]=\"background\">\r\n    <ng-content select=\".card-body\"></ng-content>\r\n    <div class=\"card-footer d-flex align-items-center justify-content-between\">\r\n        <a class=\"small text-white stretched-link\" [routerLink]=\"link\">View Details</a>\r\n        <div class=\"small text-white\"><fa-icon [icon]='[\"fas\", \"angle-right\"]'></fa-icon></div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'version',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-app-common-app-common-routing-module */
          "modules-app-common-app-common-routing-module").then(__webpack_require__.bind(null,
          /*! modules/app-common/app-common-routing.module */
          "XaoG")).then(function (m) {
            return m.AppCommonRoutingModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-blog-blog-routing-module */
          "modules-blog-blog-routing-module").then(__webpack_require__.bind(null,
          /*! modules/blog/blog-routing.module */
          "IFN9")).then(function (m) {
            return m.BlogRoutingModule;
          });
        }
      }, {
        path: 'auth',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-auth-auth-routing-module */
          "modules-auth-auth-routing-module").then(__webpack_require__.bind(null,
          /*! modules/auth/auth-routing.module */
          "DrEB")).then(function (m) {
            return m.AuthRoutingModule;
          });
        }
      }, {
        path: 'error',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-error-error-routing-module */
          "modules-error-error-routing-module").then(__webpack_require__.bind(null,
          /*! modules/error/error-routing.module */
          "1nNA")).then(function (m) {
            return m.ErrorRoutingModule;
          });
        }
      }, {
        path: '**',
        pathMatch: 'full',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-error-error-routing-module */
          "modules-error-error-routing-module").then(__webpack_require__.bind(null,
          /*! modules/error/error-routing.module */
          "1nNA")).then(function (m) {
            return m.ErrorRoutingModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vaVa":
    /*!******************************************************************!*\
      !*** ./src/modules/app-common/components/card/card.component.ts ***!
      \******************************************************************/

    /*! exports provided: CardComponent */

    /***/
    function vaVa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return CardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card.component.html */
      "jyPu");
      /* harmony import */


      var _card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card.component.scss */
      "dZFI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardComponent = /*#__PURE__*/function () {
        function CardComponent() {
          _classCallCheck(this, CardComponent);

          this.customClasses = [];
        }

        _createClass(CardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.background) {
              this.customClasses.push(this.background);
            }

            if (this.color) {
              this.customClasses.push(this.color);
            }
          }
        }]);

        return CardComponent;
      }();

      CardComponent.ctorParameters = function () {
        return [];
      };

      CardComponent.propDecorators = {
        background: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-card',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardComponent);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zZ3C":
    /*!************************************************************************!*\
      !*** ./src/modules/navigation/containers/top-nav/top-nav.component.ts ***!
      \************************************************************************/

    /*! exports provided: TopNavComponent */

    /***/
    function zZ3C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopNavComponent", function () {
        return TopNavComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_top_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./top-nav.component.html */
      "XKEb");
      /* harmony import */


      var _top_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./top-nav.component.scss */
      "/pXg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @modules/auth/services */
      "+nzF");
      /* harmony import */


      var _modules_navigation_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @modules/navigation/services */
      "ReHY");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var TopNavComponent = /*#__PURE__*/function () {
        function TopNavComponent(navigationService, authUtilsService, route, router) {
          _classCallCheck(this, TopNavComponent);

          this.navigationService = navigationService;
          this.authUtilsService = authUtilsService;
          this.route = route;
          this.router = router;
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
          this.isLoggedIn = false;
          this.isOnPost = false;
          this.isMenuCollapsed = true;
        }

        _createClass(TopNavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.subscription.add(this.navigationService.currentComponent$().subscribe(function (currentComponentName) {
              _this6.isOnPost = currentComponentName === 'PostComponent';
            }));
            this.subscription.add(this.authUtilsService.isLoggedIn$().subscribe(function (isLoggedIn) {
              _this6.isLoggedIn = isLoggedIn;
            }));
            this.authUtilsService.checkToken();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "editPost",
          value: function editPost() {
            this.router.navigateByUrl("/edit/".concat(this.route.snapshot.params.post));
          }
        }]);

        return TopNavComponent;
      }();

      TopNavComponent.ctorParameters = function () {
        return [{
          type: _modules_navigation_services__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]
        }, {
          type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__["AuthUtilsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      TopNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-top-nav',
        template: _raw_loader_top_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_navigation_services__WEBPACK_IMPORTED_MODULE_6__["NavigationService"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__["AuthUtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], TopNavComponent);
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map