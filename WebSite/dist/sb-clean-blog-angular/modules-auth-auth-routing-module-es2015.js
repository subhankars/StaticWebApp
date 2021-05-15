(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-routing-module"],{

/***/ "3+T0":
/*!**********************************************!*\
  !*** ./src/modules/auth/components/index.ts ***!
  \**********************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
const components = [];


/***/ }),

/***/ "9ke+":
/*!**************************************************************!*\
  !*** ./src/modules/auth/containers/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "iYnd");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "BgQx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/auth/services */ "+nzF");






let LoginComponent = class LoginComponent {
    constructor(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.loginForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
        });
    }
    ngOnInit() { }
    onSubmit() {
        if (this.loginForm.status === 'VALID') {
            this.authService
                .login$({
                password: this.loginForm.value.password,
            })
                .subscribe();
        }
        // tslint:disable-next-line: forin
        for (const key in this.loginForm.controls) {
            const control = this.loginForm.controls[key];
            control.markAllAsTouched();
        }
    }
    /* Accessor Methods */
    get passwordControl() {
        return this.loginForm.get('password');
    }
    get passwordControlValid() {
        return this.passwordControl.touched && !this.passwordControlInvalid;
    }
    get passwordControlInvalid() {
        return (this.passwordControl.touched &&
            (this.passwordControl.hasError('required') ||
                this.passwordControl.hasError('minlength')));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-login',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "BgQx":
/*!****************************************************************!*\
  !*** ./src/modules/auth/containers/login/login.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#inputPassword {\n  flex: 0.9 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtBQURKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbiNpbnB1dFBhc3N3b3JkIHtcclxuICAgIGZsZXg6IC45IDAgYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ "DrEB":
/*!*************************************************!*\
  !*** ./src/modules/auth/auth-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ROUTES, AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.module */ "OELk");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "ccMp");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: 'login',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        data: {
            title: 'Pages Login - Subhankar Sarkar',
        },
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthRoutingModule);



/***/ }),

/***/ "OELk":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "NMtB");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "hex+");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "3+T0");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "ccMp");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards */ "olz4");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services */ "+nzF");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Components */

/* Containers */

/* Guards */

/* Services */

let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
        ],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_10__["services"], ..._guards__WEBPACK_IMPORTED_MODULE_9__["guards"]],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_7__["components"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_7__["components"]],
    })
], AuthModule);



/***/ }),

/***/ "WVvL":
/*!***********************************************!*\
  !*** ./src/modules/auth/guards/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let AuthGuard = class AuthGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "ccMp":
/*!**********************************************!*\
  !*** ./src/modules/auth/containers/index.ts ***!
  \**********************************************/
/*! exports provided: containers, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "9ke+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });


const containers = [_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]];



/***/ }),

/***/ "iYnd":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/login/login.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth\r\n    ><div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-5\">\r\n                <h5 class=\"text-white text-center mt-5\">Enter admin password</h5>\r\n                <form class=\"form-inline justify-content-between\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <input class=\"form-control py-4 mr-2 my-2\" id=\"inputPassword\" data-cy=\"passwordInput\" type=\"password\" formControlName=\"password\" [class.is-valid]=\"passwordControlValid\" [class.is-invalid]=\"passwordControlInvalid\" /><button class=\"btn btn-primary\" data-cy=\"loginButton\" type=\"submit\" [disabled]=\"loginForm.invalid\">Login</button>\r\n                    <div class=\"invalid-feedback\" *ngIf='passwordControl.hasError(\"required\")'>Password required.</div>\r\n                    <div class=\"invalid-feedback\" *ngIf='passwordControl.hasError(\"minlength\")'>Password must be at least 8 characters.</div>\r\n                </form>\r\n                <h6 class=\"text-white-50\">Default: 123123123</h6>\r\n            </div>\r\n        </div>\r\n    </div></sb-layout-auth\r\n>\r\n");

/***/ }),

/***/ "olz4":
/*!******************************************!*\
  !*** ./src/modules/auth/guards/index.ts ***!
  \******************************************/
/*! exports provided: guards, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "WVvL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });


const guards = [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]];



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-routing-module-es2015.js.map