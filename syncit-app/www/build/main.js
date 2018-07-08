webpackJsonp([0],{

/***/ 189:
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
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 232:
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
webpackEmptyAsyncContext.id = 232;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tesseract_js__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tesseract_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_tesseract_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_watson_developer_cloud_visual_recognition_v3__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_watson_developer_cloud_visual_recognition_v3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_watson_developer_cloud_visual_recognition_v3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__(602);
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
        this.visualRecognition = new __WEBPACK_IMPORTED_MODULE_4_watson_developer_cloud_visual_recognition_v3___default.a({
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
        __WEBPACK_IMPORTED_MODULE_3_tesseract_js___default.a.recognize('https://nessalla.com/wp-content/uploads/2014/11/PeachNutritionalLabel.jpg')
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Coding\syncit\syncit-app\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            SyncIt\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button (click)="takePicture()">\n\n                <ion-icon name="md-camera" class="camera-icon"></ion-icon>\n\n            </button>    \n\n        </ion-buttons>\n\n        <ion-content>\n\n         </ion-content>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-4>\n\n                <img [src]="base64Image" *ngIf="base64Image" />\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Coding\syncit\syncit-app\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(276);
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

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(275);
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

/***/ 435:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(604);
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

},[342]);
//# sourceMappingURL=main.js.map