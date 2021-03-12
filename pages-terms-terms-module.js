(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-terms-terms-module"],{

/***/ "./src/app/pages/terms/terms-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/terms/terms-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TermsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsRoutingModule", function() { return TermsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _terms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms.component */ "./src/app/pages/terms/terms.component.ts");





const routes = [
    {
        path: '',
        component: _terms_component__WEBPACK_IMPORTED_MODULE_2__["TermsComponent"]
    }
];
class TermsRoutingModule {
}
TermsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermsRoutingModule });
TermsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermsRoutingModule_Factory(t) { return new (t || TermsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/terms/terms.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/terms/terms.component.ts ***!
  \************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_register_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register/register.service */ "./src/app/services/register/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class TermsComponent {
    constructor(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        if (this.registerService.isAuthenticated()) {
            this.router.navigate(['listado-tecnologias']);
        }
    }
    ngOnInit() {
    }
}
TermsComponent.ɵfac = function TermsComponent_Factory(t) { return new (t || TermsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_register_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsComponent, selectors: [["app-terms"]], decls: 2, vars: 0, template: function TermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "terms works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms',
                templateUrl: './terms.component.html',
                styleUrls: ['./terms.component.scss']
            }]
    }], function () { return [{ type: _services_register_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/terms/terms.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/terms/terms.module.ts ***!
  \*********************************************/
/*! exports provided: TermsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsModule", function() { return TermsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _terms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms-routing.module */ "./src/app/pages/terms/terms-routing.module.ts");
/* harmony import */ var _terms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms.component */ "./src/app/pages/terms/terms.component.ts");





class TermsModule {
}
TermsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermsModule });
TermsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermsModule_Factory(t) { return new (t || TermsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _terms_routing_module__WEBPACK_IMPORTED_MODULE_2__["TermsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermsModule, { declarations: [_terms_component__WEBPACK_IMPORTED_MODULE_3__["TermsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _terms_routing_module__WEBPACK_IMPORTED_MODULE_2__["TermsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_terms_component__WEBPACK_IMPORTED_MODULE_3__["TermsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _terms_routing_module__WEBPACK_IMPORTED_MODULE_2__["TermsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-terms-terms-module.js.map