(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-app-common-app-common-routing-module"],{

/***/ "XaoG":
/*!*************************************************************!*\
  !*** ./src/modules/app-common/app-common-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ROUTES, AppCommonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonRoutingModule", function() { return AppCommonRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-common.module */ "NMtB");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "LTXA");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["VersionComponent"],
    },
];
let AppCommonRoutingModule = class AppCommonRoutingModule {
};
AppCommonRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppCommonRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-app-common-app-common-routing-module-es2015.js.map