webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_constants__ = __webpack_require__(102);
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
        //USE BELOW FOR LOCAL TESTING
        //baseUrl = "/api";
        // USE BELOW FOR APP DEPLOYMENT
        this.baseUrl = "https://syncit-backend-prod.mybluemix.net/backend";
        this.url = "/textRecognition";
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
    HttpService.prototype.getMedicalConditions = function () {
        return new Promise(function (resolve, reject) {
            resolve(__WEBPACK_IMPORTED_MODULE_4__utils_constants__["d" /* medicationConditionResponse */]);
        });
    };
    HttpService.prototype.getVitals = function () {
        return new Promise(function (resolve, reject) {
            resolve(__WEBPACK_IMPORTED_MODULE_4__utils_constants__["e" /* vitalsResponse */]);
        });
    };
    HttpService.prototype.sendImageForRecognition = function (imageData, type) {
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_4__utils_constants__["a" /* IMAGE_TYPE */].IMAGE_FOOD:
                return this.performImageRecognition();
            case __WEBPACK_IMPORTED_MODULE_4__utils_constants__["a" /* IMAGE_TYPE */].IMAGE_LABEL:
            default:
                return this.performTextRecognition();
        }
    };
    HttpService.prototype.performImageRecognition = function () {
        return this.http.get(this.baseUrl + '/imageRecognition')
            .map(this.extractData)
            .catch(this.handleErrorPromise);
    };
    HttpService.prototype.performTextRecognition = function () {
        return this.http.get(this.baseUrl + '/textRecognition')
            .map(this.extractData)
            .catch(this.handleErrorPromise);
    };
    HttpService.prototype.getData = function (name, from, to) {
        return new Promise(function (resolve, reject) {
            resolve(__WEBPACK_IMPORTED_MODULE_4__utils_constants__["c" /* dataResponse */]);
        });
    };
    HttpService.prototype.convertToMillisecs = function (date) {
        return new Date(date).valueOf();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IMAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MEDICAL_CONDITION_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return medicationConditionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return vitalsResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dataResponse; });
/* unused harmony export dataJson */
var IMAGE_TYPE = {
    IMAGE_FOOD: 'raw',
    IMAGE_LABEL: 'label'
};
var MEDICAL_CONDITION_PAGE = {
    DEFAULT: 'medication'
};
var medicationConditionResponse = [{
        "datefrom": "2011-03-03T09:58:00.000-05:00",
        "dateto": "2012-03-21T18:33:00.000-04:00",
        "dosage": 0.5,
        "maxDosage": 0.0,
        "refillsRemaining": 0,
        "fsId": 1608,
        "genericMedicineName": "simvastatin (bulk) misc",
        "med": "SIMVASTATIN (BULK) MISC",
        "medicinename": "simvastatin (bulk) misc",
        "mode": "Outpatient",
        "reasonForDiscontinue": "",
        "route": "Miscell. (Med.Supl.;Non-Drugs)",
        "rxNormCode": "36567",
        "score": 0.0,
        "source": "MEDORDER",
        "status": "",
        "strength": "",
        "theraClass": "UNCLASSIFIED DRUG PRODUCTS",
        "units": "unit",
        "use": "1/2 TAB IN THE EVENING",
        "ingredientRxNormCode": "36567"
    }, {
        "datefrom": "2013-03-06T10:12:00.000-05:00",
        "dateto": "2013-03-25T13:09:00.000-04:00",
        "dosage": 40.0,
        "maxDosage": 0.0,
        "refillsRemaining": 0,
        "fsId": 1661,
        "genericMedicineName": "furosemide",
        "med": "FUROSEMIDE 20 MG TABLET",
        "medicinename": "furosemide",
        "mode": "",
        "reasonForDiscontinue": "",
        "route": "ORAL",
        "rxNormCode": "4603",
        "score": 0.0,
        "source": "MEDORDER",
        "status": "",
        "strength": "20 mg",
        "theraClass": "DIURETICS",
        "units": "mg",
        "use": "Take 20 mg by mouth twice daily.  ",
        "ingredientRxNormCode": "4603"
    }];
var vitalsResponse = [{
        "encounterId": "3778-1",
        "fsId": 8215,
        "value": "184/72",
        "vitals": "BLOOD PRESSURE",
        "vitalsDate": "2010-12-26T19:30:00.000-05:00"
    }, {
        "encounterId": "3778-1",
        "fsId": 8225,
        "value": "74",
        "vitals": "PULSE",
        "vitalsDate": "2010-12-26T19:30:00.000-05:00"
    }, {
        "encounterId": "3778-1",
        "fsId": 8235,
        "value": "96",
        "vitals": "PULSE OXIMETRY",
        "vitalsDate": "2010-12-26T19:30:00.000-05:00"
    }, {
        "encounterId": "3778-1",
        "fsId": 8245,
        "value": "24",
        "vitals": "RESPIRATION RATE",
        "vitalsDate": "2010-12-26T19:30:00.000-05:00"
    }];
var dataResponse = {
    "results": [
        {
            "data": [
                [
                    1530403200000,
                    40
                ],
                [
                    1530489600000,
                    46
                ],
                [
                    1530576000000,
                    65
                ],
                [
                    1530662400000,
                    43
                ],
                [
                    1530748800000,
                    77.7
                ],
                [
                    1530835200000,
                    11.4
                ],
                [
                    1530921600000,
                    34.66
                ],
                [
                    1531008000000,
                    22.4
                ],
                [
                    1531094400000,
                    75.1
                ],
                [
                    1531180800000,
                    54.7
                ]
            ],
            "legend": "Carbohydrates"
        },
        {
            "data": [
                [
                    1530403200000,
                    40
                ],
                [
                    1530489600000,
                    45
                ],
                [
                    1530576000000,
                    35
                ],
                [
                    1530662400000,
                    42
                ],
                [
                    1530748800000,
                    27.7
                ],
                [
                    1530835200000,
                    28.4
                ],
                [
                    1530921600000,
                    84.66
                ],
                [
                    1531008000000,
                    52.4
                ],
                [
                    1531094400000,
                    35.1
                ],
                [
                    1531180800000,
                    74.7
                ]
            ],
            "legend": "Proteins"
        },
        {
            "data": [
                [
                    1530403200000,
                    10
                ],
                [
                    1530489600000,
                    40
                ],
                [
                    1530576000000,
                    15
                ],
                [
                    1530662400000,
                    46
                ],
                [
                    1530748800000,
                    7.7
                ],
                [
                    1530835200000,
                    22.4
                ],
                [
                    1530921600000,
                    34.66
                ],
                [
                    1531008000000,
                    22.4
                ],
                [
                    1531094400000,
                    45.1
                ],
                [
                    1531180800000,
                    34.7
                ]
            ],
            "legend": "Fats"
        }
    ]
};
var dataJson = {
    results: [
        {
            data: [
                [convertToMillisecs('2018-07-01'), 40], [convertToMillisecs('2018-07-02'), 46],
                [convertToMillisecs('2018-07-03'), 65], [convertToMillisecs('2018-07-04'), 43],
                [convertToMillisecs('2018-07-05'), 77.7], [convertToMillisecs('2018-07-06'), 11.4],
                [convertToMillisecs('2018-07-07'), 34.66], [convertToMillisecs('2018-07-08'), 22.4],
                [convertToMillisecs('2018-07-09'), 75.1], [convertToMillisecs('2018-07-10'), 54.7]
            ],
            legend: 'Carbohydrates'
        },
        {
            data: [
                [convertToMillisecs('2018-07-01'), 40], [convertToMillisecs('2018-07-02'), 45],
                [convertToMillisecs('2018-07-03'), 35], [convertToMillisecs('2018-07-04'), 42],
                [convertToMillisecs('2018-07-05'), 27.7], [convertToMillisecs('2018-07-06'), 28.4],
                [convertToMillisecs('2018-07-07'), 84.66], [convertToMillisecs('2018-07-08'), 52.4],
                [convertToMillisecs('2018-07-09'), 35.1], [convertToMillisecs('2018-07-10'), 74.7]
            ],
            legend: 'Proteins'
        },
        {
            data: [
                [convertToMillisecs('2018-07-01'), 10], [convertToMillisecs('2018-07-02'), 40],
                [convertToMillisecs('2018-07-03'), 15], [convertToMillisecs('2018-07-04'), 46],
                [convertToMillisecs('2018-07-05'), 7.7], [convertToMillisecs('2018-07-06'), 22.4],
                [convertToMillisecs('2018-07-07'), 34.66], [convertToMillisecs('2018-07-08'), 22.4],
                [convertToMillisecs('2018-07-09'), 45.1], [convertToMillisecs('2018-07-10'), 34.7]
            ],
            legend: 'Fats'
        }
    ]
};
function convertToMillisecs(date) {
    return new Date(date).valueOf();
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_chart__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_constants__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__medical_condition_medical_condition__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_media__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MEDIA_FILES_KEY = 'mediaFiles';
var HomePage = /** @class */ (function () {
    function HomePage(camera, loadingCtrl, navCtrl, alertCtrl, mediaCapture, storage, media, file, platform, httpService) {
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.mediaCapture = mediaCapture;
        this.storage = storage;
        this.media = media;
        this.file = file;
        this.platform = platform;
        this.httpService = httpService;
        this.mediaFiles = [];
        this.recording = false;
        this.audioList = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(MEDIA_FILES_KEY).then(function (res) {
            _this.mediaFiles = JSON.parse(res) || [];
        });
    };
    HomePage.prototype.goToOtherPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__charts_chart__["a" /* ChartPage */], { 'data': data, 'image': this.base64Image });
    };
    HomePage.prototype.goToMedicalConditionPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__medical_condition_medical_condition__["a" /* MedicalConditionPage */]);
    };
    HomePage.prototype.captureAudio = function () {
        /* this.mediaCapture.captureAudio().then(res => {
          //this.storeMediaFiles(res);
        }, (err: CaptureError) => console.error(err)); */
        this.presentLoading();
        if (this.recording)
            this.stopRecord();
        else
            this.startRecord();
    };
    /******* NEW *******/
    HomePage.prototype.startRecord = function () {
        if (this.platform.is('ios')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.startRecord();
        this.recording = true;
        this.loader.dismiss();
    };
    HomePage.prototype.stopRecord = function () {
        this.audio.stopRecord();
        var data = { filename: this.fileName };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        this.loader.dismiss();
        //this.getAudioList();
    };
    HomePage.prototype.storeMediaFiles = function (files) {
        var _this = this;
        this.storage.get(MEDIA_FILES_KEY).then(function (res) {
            if (res) {
                var arr = JSON.parse(res);
                arr = arr.concat(files);
                _this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
            }
            else {
                _this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files));
            }
            _this.mediaFiles = _this.mediaFiles.concat(files);
        });
    };
    HomePage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loader.present();
    };
    HomePage.prototype.takePicture = function (imageType) {
        var _this = this;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            /* this.httpService
            .sendImage(this.base64Image)
            .subscribe((response) => {
              console.log('response', response);
              this.loader.dismiss();
            }); */
            _this.goToOtherPage(imageType);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Take picture',
            inputs: [
                {
                    type: 'radio',
                    label: 'Take picture of food',
                    value: __WEBPACK_IMPORTED_MODULE_5__utils_constants__["a" /* IMAGE_TYPE */].IMAGE_FOOD,
                    checked: true
                },
                {
                    type: 'radio',
                    label: 'Take picture of nutrition label',
                    value: __WEBPACK_IMPORTED_MODULE_5__utils_constants__["a" /* IMAGE_TYPE */].IMAGE_LABEL
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel called');
                    }
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('Ok called', data);
                        _this.takePicture(data);
                    }
                }
            ]
        });
        prompt.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\Projects\hackathon-18\syncIt\syncit-app\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-7>SyncIt</ion-col>\n\n                    <ion-col col-5 class="medium-font">Welcome, John Doe</ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page" fullscreen padding>\n\n    <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-12>\n\n                <ion-card (click)="goToOtherPage()">\n\n                    <img src="assets/imgs/food-dinner-lunch.jpg"/>\n\n                    <ion-card-content>\n\n                        <ion-card-title>\n\n                                Nutritional Management\n\n                        </ion-card-title>\n\n                        <p>Check your intake amount here</p>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n              </ion-col>              \n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <ion-card>\n\n                        <!-- <img src="assets/imgs/ibm-watson.png"/>\n\n                        <div class="card-title" >Personal Insights</div>\n\n                        <div class="card-subtitle">Know yourself</div> -->\n\n                        <img src="assets/imgs/ibm-watson.png"/>\n\n                        <ion-card-content>\n\n                                <ion-card-title>\n\n                                        Personal Insights\n\n                                </ion-card-title>\n\n                                <p>Know yourself</p>\n\n                        </ion-card-content>\n\n                    </ion-card>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <ion-card (click)="goToMedicalConditionPage()">\n\n                        <!-- <img src="assets/imgs/medical-insights.jpg"/>\n\n                        <div class="card-title">Medical Condition</div>\n\n                        <div class="card-subtitle"></div> -->\n\n                        <img src="assets/imgs/medical-insights.jpg"/>\n\n                        <ion-card-content>\n\n                                <ion-card-title>\n\n                                        Medical Condition\n\n                                </ion-card-title>\n\n                                <p>Track your medical condition</p>\n\n                            </ion-card-content>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n\n        <ion-fab-list side="left">\n\n            <button ion-fab (click)="showPrompt()" color="primary"><ion-icon name="md-camera" class="camera-icon"></ion-icon></button>\n\n            \n\n            <button ion-fab color="secondary" (click)="captureAudio()"> \n\n                <ion-icon name="mic-off" *ngIf="recording"></ion-icon>\n\n                <ion-icon name="mic" *ngIf="!recording"></ion-icon>\n\n            </button>\n\n           <!-- <button ion-fab (click)="captureAudio()" color="secondary"><ion-icon name="mic" ></ion-icon></button> -->\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\Projects\hackathon-18\syncIt\syncit-app\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChartPage = /** @class */ (function () {
    function ChartPage(httpService, navParams, loadingCtrl, toastCtrl, alertCtrl) {
        this.httpService = httpService;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.showAddButton = false;
        this.data = this.navParams.get('data');
        this.imageData = this.navParams.get('image');
    }
    ChartPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loader.present();
    };
    ChartPage.prototype.showMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            /* duration: 5000 */
            showCloseButton: true
        });
        toast.present();
    };
    ChartPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    ChartPage.prototype.addToChart = function () {
        this.showAlert('Added to chart successfully!');
    };
    ChartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentLoading();
        this.httpService.sendImageForRecognition(this.imageData, this.data)
            .subscribe(function (response) {
            _this.loader.dismiss();
            var dataArray = _this.transformResponse(response); //response['results'];
            var labelArray = _this.transformXAxisLabels(response);
            var warnText = response.warn;
            if (!Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["isUndefined"])(response.warn)) {
                _this.showMessage(response.warn);
            }
            var legend = response['legend'];
            _this.options = {
                chart: {
                    type: 'line'
                },
                xAxis: {
                    labels: {
                        formatter: function () {
                            return new Date(this.value).toDateString();
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<div class="tooltip-container">The value for <b>' + this.series.name + '</b> on <b>' + new Date(this.x).toDateString() + '</b><br /> is <b>' + this.y + '</b></div>';
                    }
                },
                series: dataArray
            };
            _this.shouldShowAddButton();
        });
    };
    ChartPage.prototype.shouldShowAddButton = function () {
        this.showAddButton = this.imageData != undefined;
    };
    ChartPage.prototype.transformXAxisLabels = function (responseData) {
        return responseData.results[0].labels;
    };
    ChartPage.prototype.transformResponse = function (responseData) {
        return Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["transform"])(responseData.results, function (accumulator, value, index) {
            accumulator.push({ 'data': value.data, 'name': value.legend });
        }, []);
    };
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\Projects\hackathon-18\syncIt\syncit-app\src\pages\charts\chart.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Charts</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="card-background-page" fullscreen padding>\n\n    <ion-card>\n\n        <chart class="chart-container" [options]="options"></chart>\n\n    </ion-card>\n\n    <ion-fab right bottom *ngIf="showAddButton">\n\n        <button ion-fab mini color="primary" (click)="addToChart()">\n\n            <ion-icon name="add"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n</ion-content>\n\n    '/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\Projects\hackathon-18\syncIt\syncit-app\src\pages\charts\chart.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalConditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MedicalConditionPage = /** @class */ (function () {
    function MedicalConditionPage(httpService) {
        this.httpService = httpService;
    }
    MedicalConditionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.type = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["b" /* MEDICAL_CONDITION_PAGE */].DEFAULT;
        this.httpService.getMedicalConditions().then(function (responseData) {
            _this.medicationData = responseData;
        });
        this.httpService.getVitals().then(function (responseData) {
            _this.vitalsData = responseData;
        });
    };
    MedicalConditionPage.prototype.transformResponse = function (responseData) {
    };
    MedicalConditionPage.prototype.segmentChanged = function (event) {
        console.log('event', event.value);
    };
    MedicalConditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\Projects\hackathon-18\syncIt\syncit-app\src\pages\medical-condition\medical-condition.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Medical Condition</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Segment in content -->\n\n  <ion-segment [(ngModel)]="type" color="primary" (ionChange)="segmentChanged($event)">\n\n    <ion-segment-button value="medication">\n\n      Medication\n\n    </ion-segment-button>\n\n    <ion-segment-button value="vitals">\n\n      Vitals\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <ion-content [ngSwitch]="type" fullscreen>\n\n        <ion-grid *ngSwitchCase="\'medication\'">\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <ion-row text-center class="table-header">\n\n                        <ion-col col-6 class="table-header-column">Medicine Name</ion-col>\n\n                        <ion-col col-6 class="table-header-column">Usage</ion-col>\n\n                    </ion-row>            \n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <ion-row *ngFor="let item of medicationData">\n\n                        <ion-col col-6>{{item.medicinename | titlecase }}</ion-col>\n\n                        <ion-col col-6>{{item.use}}</ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-grid>\n\n      \n\n        <ion-grid *ngSwitchCase="\'vitals\'">\n\n                <ion-card>\n\n                        <ion-card-header>\n\n                            <ion-row text-center class="table-header">\n\n                                <ion-col col-6 class="table-header-column">Vitals Name</ion-col>\n\n                                <ion-col col-6 class="table-header-column">Usage</ion-col>\n\n                            </ion-row>            \n\n                        </ion-card-header>\n\n                        <ion-card-content>\n\n                            <ion-row *ngFor="let item of vitalsData">\n\n                                <ion-col col-6>{{item.vitals | titlecase }}</ion-col>\n\n                                <ion-col col-6 text-center>{{item.value}}</ion-col>\n\n                            </ion-row>\n\n                        </ion-card-content>\n\n                    </ion-card>\n\n        </ion-grid>\n\n    </ion-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\Projects\hackathon-18\syncIt\syncit-app\src\pages\medical-condition\medical-condition.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]])
    ], MedicalConditionPage);
    return MedicalConditionPage;
}());

//# sourceMappingURL=medical-condition.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_highcharts__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_highcharts__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_charts_chart__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_medical_condition_medical_condition__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_media_capture__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_media__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(207);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_charts_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_medical_condition_medical_condition__["a" /* MedicalConditionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7_angular2_highcharts__["ChartModule"].forRoot(__WEBPACK_IMPORTED_MODULE_8_highcharts__),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_charts_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_medical_condition_medical_condition__["a" /* MedicalConditionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_media_capture__["a" /* MediaCapture */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\Projects\hackathon-18\syncIt\syncit-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\Projects\hackathon-18\syncIt\syncit-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map