(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services */ "ZF+8");
/* harmony import */ var _series_results_series_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./series-results/series-result.component */ "T/Vu");
/* harmony import */ var _current_competitor_current_competitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current-competitor/current-competitor.component */ "oapn");





class AppComponent {
    constructor(scoreService, configService) {
        this.scoreService = scoreService;
        this.configService = configService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.title = 'event-scoreboard';
        this.selectedIndex = 0;
        this.loadedResults = [];
    }
    ngOnInit() {
        this.configService.updateConfiguration();
        this.configService.currentConfig.subscribe(config => {
            this.scoreService.updateScores();
            this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, config.seriesChangeTime).subscribe(n => this.advanceSeries()));
            this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, config.backgroundUpdateTime).subscribe(n => this.scoreService.updateScores()));
        });
        this.selectedSeries = undefined;
        this.listenForScoreboardChanges();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    listenForScoreboardChanges() {
        this.subscription.add(this.scoreService.getCurrentScoreboard().subscribe(all => {
            all.forEach(resultDto => {
                const match = this.loadedResults.find(s => s.seriesName === resultDto.seriesName);
                if (match) {
                    match.results = resultDto.results;
                }
                else {
                    this.loadedResults.push(resultDto);
                }
            });
            if (this.selectedSeries === undefined) {
                // Load instantly if no results are found
                console.log('Initial load');
                this.advanceSeries();
            }
        }));
    }
    advanceSeries() {
        if (this.loadedResults.length === 0) {
            console.log('No results found.');
            this.selectedSeries = undefined;
            return;
        }
        this.selectedIndex = (this.selectedIndex + 1) % this.loadedResults.length;
        this.selectedSeries = this.loadedResults[this.selectedIndex];
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__["ScoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__["ConfigService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[3, "result"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-series-result", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-current-competitor");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("result", ctx.selectedSeries);
    } }, directives: [_series_results_series_result_component__WEBPACK_IMPORTED_MODULE_3__["SeriesResultComponent"], _current_competitor_current_competitor_component__WEBPACK_IMPORTED_MODULE_4__["CurrentCompetitorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "T/Vu":
/*!***********************************************************!*\
  !*** ./src/app/series-results/series-result.component.ts ***!
  \***********************************************************/
/*! exports provided: SeriesResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesResultComponent", function() { return SeriesResultComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services */ "ZF+8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SeriesResultComponent_div_0_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const resultRow_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", resultRow_r2, " ");
} }
function SeriesResultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, SeriesResultComponent_div_0_li_3_Template, 2, 1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.result == null ? null : ctx_r0.result.seriesName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r0.result == null ? null : ctx_r0.result.results);
} }
class SeriesResultComponent {
    constructor(scoreService) {
        this.scoreService = scoreService;
        this.showResults = this.scoreService.getCurrentCompetitor().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(m => !m || !m.isActive));
    }
}
SeriesResultComponent.??fac = function SeriesResultComponent_Factory(t) { return new (t || SeriesResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__["ScoreService"])); };
SeriesResultComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: SeriesResultComponent, selectors: [["app-series-result"]], inputs: { result: "result" }, decls: 2, vars: 3, consts: [["class", "results", 4, "ngIf"], [1, "results"], [4, "ngFor", "ngForOf"]], template: function SeriesResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, SeriesResultComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](1, 1, ctx.showResults));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["div.results[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  width: 65%;\n  text-align: left;\n  font-size: 5.9vh;\n}\ndiv.results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 4vh;\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Nlcmllcy1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQ1IiLCJmaWxlIjoic2VyaWVzLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5yZXN1bHRzIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDY1JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogNS45dmg7XG5cbiAgICBsaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHZoO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cbn1cblxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _current_competitor_current_competitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current-competitor/current-competitor.component */ "oapn");
/* harmony import */ var _series_results_series_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./series-results/series-result.component */ "T/Vu");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/config.service */ "vihK");
/* harmony import */ var _shared_services_score_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/score.service */ "reJD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ providers: [
        _shared_services_score_service__WEBPACK_IMPORTED_MODULE_7__["ScoreService"],
        _shared_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _series_results_series_result_component__WEBPACK_IMPORTED_MODULE_5__["SeriesResultComponent"],
        _current_competitor_current_competitor_component__WEBPACK_IMPORTED_MODULE_4__["CurrentCompetitorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();


/***/ }),

/***/ "ZF+8":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: ConfigService, ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/config.service */ "vihK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_0__["ConfigService"]; });

/* harmony import */ var src_app_shared_services_score_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/score.service */ "reJD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return src_app_shared_services_score_service__WEBPACK_IMPORTED_MODULE_1__["ScoreService"]; });





/***/ }),

/***/ "oapn":
/*!********************************************************************!*\
  !*** ./src/app/current-competitor/current-competitor.component.ts ***!
  \********************************************************************/
/*! exports provided: CurrentCompetitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentCompetitorComponent", function() { return CurrentCompetitorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services */ "ZF+8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CurrentCompetitorComponent_div_0_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const resultRow_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", resultRow_r2, " ");
} }
function CurrentCompetitorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CurrentCompetitorComponent_div_0_h2_4_Template, 2, 1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    let tmp_4_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 5, ctx_r0.currentResult)) == null ? null : tmp_0_0.seriesName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 7, ctx_r0.currentResult)) == null ? null : tmp_1_0.participants);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 9, ctx_r0.currentResult)) == null ? null : tmp_2_0.team, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 11, ctx_r0.currentResult)) == null ? null : tmp_3_0.scoreTotal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 13, ctx_r0.currentResult)) == null ? null : tmp_4_0.scoreParts, " ");
} }
class CurrentCompetitorComponent {
    constructor(scoreService) {
        this.scoreService = scoreService;
        this.currentResult = this.scoreService.getCurrentCompetitor();
    }
}
CurrentCompetitorComponent.??fac = function CurrentCompetitorComponent_Factory(t) { return new (t || CurrentCompetitorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__["ScoreService"])); };
CurrentCompetitorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CurrentCompetitorComponent, selectors: [["app-current-competitor"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function CurrentCompetitorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, CurrentCompetitorComponent_div_0_Template, 15, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](1, 1, ctx.currentResult)) == null ? null : tmp_0_0.isActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["div[_ngcontent-%COMP%] {\n  margin-top: 16%;\n  margin-left: 15%;\n  margin-right: auto;\n  width: 60%;\n  text-align: left;\n  font-size: 4vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2N1cnJlbnQtY29tcGV0aXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImN1cnJlbnQtY29tcGV0aXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgbWFyZ2luLXRvcDogMTYlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDR2aDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "reJD":
/*!**************************************************!*\
  !*** ./src/app/shared/services/score.service.ts ***!
  \**************************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ScoreService {
    constructor(http) {
        this.http = http;
        this.currentCompetitor = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.currentScoreboard = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getCurrentCompetitor() {
        return this.currentCompetitor.asObservable();
    }
    getCurrentScoreboard() {
        return this.currentScoreboard.asObservable();
    }
    updateScores() {
        this.http.get('../assets/results/allSeries.json').subscribe(rawResult => {
            var allSeries = rawResult;
            this.currentCompetitor.next(allSeries.currentResult);
            this.currentScoreboard.next(allSeries.allSeries);
        });
    }
}
ScoreService.??fac = function ScoreService_Factory(t) { return new (t || ScoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ScoreService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ScoreService, factory: ScoreService.??fac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vihK":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ConfigService {
    constructor(http) {
        this.http = http;
        this.currentConfig = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.configLocation = '../assets/config.json';
    }
    updateConfiguration() {
        this.http.get(this.configLocation).subscribe(configRaw => {
            this.currentConfig.next(configRaw);
        });
    }
}
ConfigService.??fac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ConfigService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ConfigService, factory: ConfigService.??fac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map