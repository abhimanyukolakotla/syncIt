webpackJsonp([0],{

/***/ 198:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 241;

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tesseract_js__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tesseract_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_tesseract_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_watson_developer_cloud_visual_recognition_v3__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_watson_developer_cloud_visual_recognition_v3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_watson_developer_cloud_visual_recognition_v3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_service__ = __webpack_require__(785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(camera, loadingCtrl, httpService) {
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.httpService = httpService;
        this.visualRecognition = new __WEBPACK_IMPORTED_MODULE_5_watson_developer_cloud_visual_recognition_v3___default.a({
            // Set the endpoint
            url: 'https://gateway.watsonplatform.net/visual-recognition/api',
            version: '2018-03-19',
            iam_apikey: '9qetdH-6WQCBFB_2kiEsiPF_ToLHPkruhZuVZK6RjsGR',
            iam_url: 'https://appid-management.ng.bluemix.net/management/v4/',
        });
        //Using watson to recognise the images
    }
    HomePage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loader.present();
    };
    HomePage.prototype.takeManual = function () {
        var _this = this;
        // imageData is a base64 encoded string
        __WEBPACK_IMPORTED_MODULE_4_tesseract_js___default.a.recognize('https://nessalla.com/wp-content/uploads/2014/11/PeachNutritionalLabel.jpg')
            .then(function (result) {
            console.log(result.html);
            _this.output = result.html;
        });
    };
    HomePage.prototype.testGet = function () {
        this.httpService
            .getImage()
            .subscribe(function (response) {
            console.log('response', response);
        });
    };
    HomePage.prototype.testPost = function () {
        this.httpService
            .sendImage('C:\\Users\\abhim\\Downloads\\IMG_20180404_170142.jpg')
            .subscribe(function (response) {
            console.log('response', response);
        });
    };
    HomePage.prototype.takePicture = function () {
        var _this = this;
        this.presentLoading();
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.httpService
                .sendImage(_this.base64Image)
                .subscribe(function (response) {
                console.log('response', response);
                _this.loader.dismiss();
            });
        }, function (err) {
            console.log(err);
            _this.loader.dismiss();
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.httpService.getData('carbohydrates', '2018-07-01', '2018-07-11')
            .then(function (response) {
            var dataArray = response['data'];
            var labelArray = response['labels'];
            var legend = response['legend'];
            _this.barChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](_this.barCanvas.nativeElement, {
                type: 'line',
                data: {
                    labels: labelArray,
                    datasets: [{
                            label: legend,
                            data: dataArray,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)' /* ,
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)' */
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)' /* ,
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)' */
                            ],
                            borderWidth: 1
                        }]
                },
                options: {
                    maintainAspectRatio: true,
                    scales: {
                        yAxes: [{
                                /* ticks: {
                                    beginAtZero:true
                                }, */
                                gridLines: {
                                    display: false
                                }
                            }],
                        xAxes: [{
                                gridLines: {
                                    display: false
                                }
                            }],
                    }
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Coding\syncit\syncit-app\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            SyncIt\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button (click)="takePicture()">\n\n                <ion-icon name="md-camera" class="camera-icon"></ion-icon>\n\n            </button>    \n\n        </ion-buttons>\n\n        <ion-content>\n\n         </ion-content>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen padding>\n\n    <!-- <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-4>\n\n                <img [src]="base64Image" *ngIf="base64Image" />\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <canvas #barCanvas class="chart"></canvas>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid> -->\n\n    <canvas #barCanvas class="chart"></canvas>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Coding\syncit\syncit-app\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* HttpService */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(502);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Coding\syncit\syncit-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\Coding\syncit\syncit-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 292,
	"./af.js": 292,
	"./ar": 293,
	"./ar-dz": 294,
	"./ar-dz.js": 294,
	"./ar-kw": 295,
	"./ar-kw.js": 295,
	"./ar-ly": 296,
	"./ar-ly.js": 296,
	"./ar-ma": 297,
	"./ar-ma.js": 297,
	"./ar-sa": 298,
	"./ar-sa.js": 298,
	"./ar-tn": 299,
	"./ar-tn.js": 299,
	"./ar.js": 293,
	"./az": 300,
	"./az.js": 300,
	"./be": 301,
	"./be.js": 301,
	"./bg": 302,
	"./bg.js": 302,
	"./bm": 303,
	"./bm.js": 303,
	"./bn": 304,
	"./bn.js": 304,
	"./bo": 305,
	"./bo.js": 305,
	"./br": 306,
	"./br.js": 306,
	"./bs": 307,
	"./bs.js": 307,
	"./ca": 308,
	"./ca.js": 308,
	"./cs": 309,
	"./cs.js": 309,
	"./cv": 310,
	"./cv.js": 310,
	"./cy": 311,
	"./cy.js": 311,
	"./da": 312,
	"./da.js": 312,
	"./de": 313,
	"./de-at": 314,
	"./de-at.js": 314,
	"./de-ch": 315,
	"./de-ch.js": 315,
	"./de.js": 313,
	"./dv": 316,
	"./dv.js": 316,
	"./el": 317,
	"./el.js": 317,
	"./en-au": 318,
	"./en-au.js": 318,
	"./en-ca": 319,
	"./en-ca.js": 319,
	"./en-gb": 320,
	"./en-gb.js": 320,
	"./en-ie": 321,
	"./en-ie.js": 321,
	"./en-il": 322,
	"./en-il.js": 322,
	"./en-nz": 323,
	"./en-nz.js": 323,
	"./eo": 324,
	"./eo.js": 324,
	"./es": 325,
	"./es-do": 326,
	"./es-do.js": 326,
	"./es-us": 327,
	"./es-us.js": 327,
	"./es.js": 325,
	"./et": 328,
	"./et.js": 328,
	"./eu": 329,
	"./eu.js": 329,
	"./fa": 330,
	"./fa.js": 330,
	"./fi": 331,
	"./fi.js": 331,
	"./fo": 332,
	"./fo.js": 332,
	"./fr": 333,
	"./fr-ca": 334,
	"./fr-ca.js": 334,
	"./fr-ch": 335,
	"./fr-ch.js": 335,
	"./fr.js": 333,
	"./fy": 336,
	"./fy.js": 336,
	"./gd": 337,
	"./gd.js": 337,
	"./gl": 338,
	"./gl.js": 338,
	"./gom-latn": 339,
	"./gom-latn.js": 339,
	"./gu": 340,
	"./gu.js": 340,
	"./he": 341,
	"./he.js": 341,
	"./hi": 342,
	"./hi.js": 342,
	"./hr": 343,
	"./hr.js": 343,
	"./hu": 344,
	"./hu.js": 344,
	"./hy-am": 345,
	"./hy-am.js": 345,
	"./id": 346,
	"./id.js": 346,
	"./is": 347,
	"./is.js": 347,
	"./it": 348,
	"./it.js": 348,
	"./ja": 349,
	"./ja.js": 349,
	"./jv": 350,
	"./jv.js": 350,
	"./ka": 351,
	"./ka.js": 351,
	"./kk": 352,
	"./kk.js": 352,
	"./km": 353,
	"./km.js": 353,
	"./kn": 354,
	"./kn.js": 354,
	"./ko": 355,
	"./ko.js": 355,
	"./ky": 356,
	"./ky.js": 356,
	"./lb": 357,
	"./lb.js": 357,
	"./lo": 358,
	"./lo.js": 358,
	"./lt": 359,
	"./lt.js": 359,
	"./lv": 360,
	"./lv.js": 360,
	"./me": 361,
	"./me.js": 361,
	"./mi": 362,
	"./mi.js": 362,
	"./mk": 363,
	"./mk.js": 363,
	"./ml": 364,
	"./ml.js": 364,
	"./mn": 365,
	"./mn.js": 365,
	"./mr": 366,
	"./mr.js": 366,
	"./ms": 367,
	"./ms-my": 368,
	"./ms-my.js": 368,
	"./ms.js": 367,
	"./mt": 369,
	"./mt.js": 369,
	"./my": 370,
	"./my.js": 370,
	"./nb": 371,
	"./nb.js": 371,
	"./ne": 372,
	"./ne.js": 372,
	"./nl": 373,
	"./nl-be": 374,
	"./nl-be.js": 374,
	"./nl.js": 373,
	"./nn": 375,
	"./nn.js": 375,
	"./pa-in": 376,
	"./pa-in.js": 376,
	"./pl": 377,
	"./pl.js": 377,
	"./pt": 378,
	"./pt-br": 379,
	"./pt-br.js": 379,
	"./pt.js": 378,
	"./ro": 380,
	"./ro.js": 380,
	"./ru": 381,
	"./ru.js": 381,
	"./sd": 382,
	"./sd.js": 382,
	"./se": 383,
	"./se.js": 383,
	"./si": 384,
	"./si.js": 384,
	"./sk": 385,
	"./sk.js": 385,
	"./sl": 386,
	"./sl.js": 386,
	"./sq": 387,
	"./sq.js": 387,
	"./sr": 388,
	"./sr-cyrl": 389,
	"./sr-cyrl.js": 389,
	"./sr.js": 388,
	"./ss": 390,
	"./ss.js": 390,
	"./sv": 391,
	"./sv.js": 391,
	"./sw": 392,
	"./sw.js": 392,
	"./ta": 393,
	"./ta.js": 393,
	"./te": 394,
	"./te.js": 394,
	"./tet": 395,
	"./tet.js": 395,
	"./tg": 396,
	"./tg.js": 396,
	"./th": 397,
	"./th.js": 397,
	"./tl-ph": 398,
	"./tl-ph.js": 398,
	"./tlh": 399,
	"./tlh.js": 399,
	"./tr": 400,
	"./tr.js": 400,
	"./tzl": 401,
	"./tzl.js": 401,
	"./tzm": 402,
	"./tzm-latn": 403,
	"./tzm-latn.js": 403,
	"./tzm.js": 402,
	"./ug-cn": 404,
	"./ug-cn.js": 404,
	"./uk": 405,
	"./uk.js": 405,
	"./ur": 406,
	"./ur.js": 406,
	"./uz": 407,
	"./uz-latn": 408,
	"./uz-latn.js": 408,
	"./uz.js": 407,
	"./vi": 409,
	"./vi.js": 409,
	"./x-pseudo": 410,
	"./x-pseudo.js": 410,
	"./yo": 411,
	"./yo.js": 411,
	"./zh-cn": 412,
	"./zh-cn.js": 412,
	"./zh-hk": 413,
	"./zh-hk.js": 413,
	"./zh-tw": 414,
	"./zh-tw.js": 414
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 580;

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.url = "/api/textRecognition";
    }
    HttpService.prototype.sendImage = function (imageData) {
        console.log('sending', imageData);
        var formData = new FormData();
        formData.append('imageData', imageData);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'multipart/form-data');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url, formData, options)
            .map(this.extractData)
            .catch(this.handleErrorPromise);
    };
    HttpService.prototype.getImage = function () {
        return this.http.get('api/imageRecognition')
            .map(this.extractData)
            .catch(this.handleErrorPromise);
    };
    HttpService.prototype.getData = function (name, from, to) {
        return new Promise(function (resolve, reject) {
            resolve({
                data: [10, 40, 15, 46, 77.7, 20.4, 34.66, 22.4, 55.1, 83.7],
                labels: ['2018-07-01', '2018-07-02', '2018-07-03', '2018-07-04', '2018-07-05',
                    '2018-07-06', '2018-07-07', '2018-07-08', '2018-07-09', '2018-07-10'
                ],
                legend: 'Carbohydrate levels'
            });
        });
    };
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HttpService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], HttpService);
    return HttpService;
    var _a;
}());

//# sourceMappingURL=http.service.js.map

/***/ })

},[479]);
//# sourceMappingURL=main.js.map