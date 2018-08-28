(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #3f00b3;\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"../logo.png\" width=\"30\" height=\"30\" alt=\"\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"/\"><font color=\"white\">≡Sprint</font><span class=\"sr-only\">(current)</span></a>\n            </li>\n        </ul>\n        <span class=\"navbar-text\" *ngIf=\"!auth.isAuthenticated()\" (click)=\"auth.login()\">\n            <a routerLink=\"/login\"><font color=\"white\">Login</font></a>\n        </span>\n        <span class=\"navbar-text\" *ngIf=\"auth.isAuthenticated()\">\n            <nav>\n                <a routerLink=\"/sprint\"><font color=\"white\">Sprints</font></a>\n                <a routerLink=\"/logout\" (click)=\"auth.logout()\"><font color=\"white\">Logout</font></a>\n            </nav>\n        </span>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'Time Tracker';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _sprint_sprint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sprint/sprint.component */ "./src/app/sprint/sprint.component.ts");
/* harmony import */ var _pastsprints_pastsprints_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pastsprints/pastsprints.component */ "./src/app/pastsprints/pastsprints.component.ts");
/* harmony import */ var _newsprint_newsprint_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./newsprint/newsprint.component */ "./src/app/newsprint/newsprint.component.ts");
/* harmony import */ var _inprogresssprint_inprogresssprint_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inprogresssprint/inprogresssprint.component */ "./src/app/inprogresssprint/inprogresssprint.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _sprint_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sprint.service */ "./src/app/sprint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"], pathMatch: 'full' },
    { path: 'sprint', component: _sprint_sprint_component__WEBPACK_IMPORTED_MODULE_8__["SprintComponent"] },
    { path: 'newsprint', component: _newsprint_newsprint_component__WEBPACK_IMPORTED_MODULE_10__["NewsprintComponent"] },
    { path: 'pastsprints', component: _pastsprints_pastsprints_component__WEBPACK_IMPORTED_MODULE_9__["PastsprintsComponent"] },
    { path: 'inprogress', component: _inprogresssprint_inprogresssprint_component__WEBPACK_IMPORTED_MODULE_11__["InprogresssprintComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                _sprint_sprint_component__WEBPACK_IMPORTED_MODULE_8__["SprintComponent"],
                _pastsprints_pastsprints_component__WEBPACK_IMPORTED_MODULE_9__["PastsprintsComponent"],
                _newsprint_newsprint_component__WEBPACK_IMPORTED_MODULE_10__["NewsprintComponent"],
                _inprogresssprint_inprogresssprint_component__WEBPACK_IMPORTED_MODULE_11__["InprogresssprintComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _sprint_service__WEBPACK_IMPORTED_MODULE_13__["SprintService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var auth0_lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auth0-lock */ "./node_modules/auth0-lock/lib/index.js");
/* harmony import */ var auth0_lock__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(auth0_lock__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        this.auth0Options = {
            auth: {
                redirectUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth0.callbackURL,
                responseType: 'token id_token',
                audience: "https://" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth0.domain + "/userinfo",
                params: {
                    scope: 'openid profile'
                }
            },
            autoclose: true,
            oidcConformant: true,
        };
        this.lock = new auth0_lock__WEBPACK_IMPORTED_MODULE_4___default.a(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth0.clientId, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth0.domain, this.auth0Options);
        this.lock.on('authenticated', function (authResult) {
            _this.lock.getUserInfo(authResult.accessToken, function (error, profile) {
                if (error) {
                    throw new Error(error);
                }
                localStorage.setItem('token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.router.navigate(['/sprint']);
            });
        });
        this.lock.on('authorization_error', function (error) {
            console.log('something went wrong', error);
        });
    }
    AuthService.prototype.login = function () {
        this.lock.show();
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('profile');
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/inprogresssprint/inprogresssprint.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/inprogresssprint/inprogresssprint.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inprogresssprint/inprogresssprint.component.html":
/*!******************************************************************!*\
  !*** ./src/app/inprogresssprint/inprogresssprint.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Progress\n</p>\n\n<p>Focus fully on your task</p>\n\n<div class=\"form-group\">\n  <div class=\"col-sm-10\">\n    <button type=\"submit\" class=\"btn btn-outline-danger\" data-toggle=\"modal\" data-target=\"#onhold\">Stop</button>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"onhold\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalLongTitle\">On hold. Cancel sprint?</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-footer\">\n        <form (ngSubmit)=\"stopSprint()\" #stopSprintForm=\"ngForm\">\n          <button type=\"submit\" class=\"btn btn-danger\">YES</button>\n        </form>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">NO</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/inprogresssprint/inprogresssprint.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/inprogresssprint/inprogresssprint.component.ts ***!
  \****************************************************************/
/*! exports provided: InprogresssprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InprogresssprintComponent", function() { return InprogresssprintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sprint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprint.service */ "./src/app/sprint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InprogresssprintComponent = /** @class */ (function () {
    function InprogresssprintComponent(sprintService) {
        this.sprintService = sprintService;
        this.newSprint = (JSON.parse(localStorage.getItem('sprint')));
    }
    InprogresssprintComponent.prototype.ngOnInit = function () {
        this.addedSprint = {};
        this.requesting = false;
    };
    InprogresssprintComponent.prototype.stopSprint = function () {
        var _this = this;
        this.requesting = true;
        this.sprintService.createSprint(this.addedSprint).subscribe(function (res) {
            _this.sprints.push(_this.newSprint);
            _this.addedSprint = {};
            _this.requesting = false;
        });
        localStorage.removeItem('sprint');
        console.log('INSERT INTO SPRINT');
    };
    InprogresssprintComponent.prototype.finishSprint = function () {
        var _this = this;
        this.requesting = true;
        this.sprintService.createSprint(this.addedSprint).subscribe(function (res) {
            _this.sprints.push(_this.newSprint);
            _this.addedSprint = {};
            _this.requesting = false;
        });
        localStorage.removeItem('sprint');
        console.log('INSERT INTO SPRINT');
    };
    InprogresssprintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inprogresssprint',
            template: __webpack_require__(/*! ./inprogresssprint.component.html */ "./src/app/inprogresssprint/inprogresssprint.component.html"),
            styles: [__webpack_require__(/*! ./inprogresssprint.component.css */ "./src/app/inprogresssprint/inprogresssprint.component.css")]
        }),
        __metadata("design:paramtypes", [_sprint_service__WEBPACK_IMPORTED_MODULE_1__["SprintService"]])
    ], InprogresssprintComponent);
    return InprogresssprintComponent;
}());



/***/ }),

/***/ "./src/app/newsprint/newSprint.ts":
/*!****************************************!*\
  !*** ./src/app/newsprint/newSprint.ts ***!
  \****************************************/
/*! exports provided: NewSprint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSprint", function() { return NewSprint; });
var NewSprint = /** @class */ (function () {
    function NewSprint(sprintLength, description, notification) {
        this.sprintLength = sprintLength;
        this.description = description;
        this.notification = notification;
    }
    return NewSprint;
}());



/***/ }),

/***/ "./src/app/newsprint/newsprint.component.css":
/*!***************************************************!*\
  !*** ./src/app/newsprint/newsprint.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newsprint/newsprint.component.html":
/*!****************************************************!*\
  !*** ./src/app/newsprint/newsprint.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div [hidden]=\"submitted\">\n    <h1>Start a sprint</h1>\n    <form (ngSubmit)=\"saveSprint(newsprintForm)\" #newsprintForm=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"sprintLength\">Choose length</label>\n        <select class=\"form-control\" id=\"sprintLength\" required [(ngModel)]=\"model.sprintLength\" name=\"sprintLength\" #sprintLength=\"ngModel\">\n          <option *ngFor=\"let sprintLeng of sprintLengths\" [value]=\"sprintLeng\">{{sprintLeng}}</option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"What will you be doing?\" id=\"description\" required [(ngModel)]=\"model.description\"\n          name=\"description\" #description=\"ngModel\">\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-sm-10\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"notification\" [(ngModel)]=\"model.notification\" name=\"notification\">\n            <label class=\"form-check-label\" for=\"notification\">\n              Notify when completed\n            </label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!newsprintForm.form.valid\">Start</button>\n        </div>\n      </div>\n\n    </form>\n  </div>\n</div>\n\n\n<div [hidden]=\"!submitted\">\n  <app-inprogresssprint></app-inprogresssprint>\n</div>"

/***/ }),

/***/ "./src/app/newsprint/newsprint.component.ts":
/*!**************************************************!*\
  !*** ./src/app/newsprint/newsprint.component.ts ***!
  \**************************************************/
/*! exports provided: NewsprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsprintComponent", function() { return NewsprintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _newSprint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newSprint */ "./src/app/newsprint/newSprint.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsprintComponent = /** @class */ (function () {
    function NewsprintComponent(http, router) {
        this.http = http;
        this.router = router;
        this.sprintLengths = ['Instant (5 s)',
            'Very Short (5 min)',
            'Short (15 min)',
            'Pomodoro (25 min)',
            'Long (45 min)',
            'Very Long (60 min)'];
        this.model = new _newSprint__WEBPACK_IMPORTED_MODULE_3__["NewSprint"]('Pomodoro (25 min)', null, false);
        this.submitted = false;
    }
    Object.defineProperty(NewsprintComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    NewsprintComponent.prototype.ngOnInit = function () {
    };
    NewsprintComponent.prototype.saveSprint = function (form) {
        var params = form.value;
        var now = new Date();
        var sec = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();
        var startTime = hours + ':' + minutes + ':' + sec;
        localStorage.setItem('sprint', JSON.stringify(params));
        /*const sprintDuration = params['sprintLength'].split('(')[1].split(')')[0].split(' ');
        var timeValue = parseInt(sprintDuration[0]);
        const timeUnit = sprintDuration[1];
        if (timeUnit === 'min') {
          timeValue = timeValue * 60;
        }*/
        //this.router.navigate(['/inprogress']);
        /*const startTimeS = sec + minutes * 60 + hours * 3600;
        var finishTimeS = timeValue + startTimeS;*/
        this.submitted = true;
    };
    NewsprintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsprint',
            template: __webpack_require__(/*! ./newsprint.component.html */ "./src/app/newsprint/newsprint.component.html"),
            styles: [__webpack_require__(/*! ./newsprint.component.css */ "./src/app/newsprint/newsprint.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewsprintComponent);
    return NewsprintComponent;
}());



/***/ }),

/***/ "./src/app/pastsprints/pastsprints.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pastsprints/pastsprints.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pastsprints/pastsprints.component.html":
/*!********************************************************!*\
  !*** ./src/app/pastsprints/pastsprints.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Length</th>\n      <th scope=\"col\">Status</th>\n      <th scope=\"col\">Date</th>\n      <th scope=\"col\">Start</th>\n      <th scope=\"col\">Finish</th>\n      <th scope=\"col\">Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let sprints of pastsprints\">\n      <td>{{sprint.lenght}}</td>\n      <td>{{sprint.status}}</td>\n      <td>{{sprint.date}}</td>\n      <td>{{sprint.start}}</td>\n      <td>{{sprint.finish}}</td>\n      <td>{{sprint.description}}</td>\n    </tr>\n</table>\n\n<div class=\"form-group\">\n  <div class=\"col-sm-10\">\n    <button type=\"submit\" class=\"btn btn-outline-danger\" data-toggle=\"modal\" data-target=\"#areyousure\">Delete all data</button>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"areyousure\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalLongTitle\">Deletion is irreversible. Are you sure?</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>The only information concerning your user that we store are your past sprints. We do not store information about\n          your user itself.</p>\n        <p>Delete to eliminate all records.</p>\n      </div>\n      <div class=\"modal-footer\">\n        <form (ngSubmit)=\"deleteUserSprints()\" #deletesprintForm=\"ngForm\">\n          <button type=\"submit\" class=\"btn btn-danger\">YES</button>\n        </form>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">NO</button>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pastsprints/pastsprints.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pastsprints/pastsprints.component.ts ***!
  \******************************************************/
/*! exports provided: PastsprintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastsprintsComponent", function() { return PastsprintsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sprint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprint.service */ "./src/app/sprint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PastsprintsComponent = /** @class */ (function () {
    function PastsprintsComponent(router, sprintService) {
        this.router = router;
        this.sprintService = sprintService;
        this.username = (JSON.parse(localStorage.getItem('profile'))).name;
        this.getUserSprints();
    }
    PastsprintsComponent.prototype.ngOnInit = function () {
        this.requesting = false;
    };
    PastsprintsComponent.prototype.getUserSprints = function () {
        var _this = this;
        console.log('SELECT * FROM SPRINT WHERE USER' + this.username);
        this.requesting = true;
        this.sprintService.getSprints().subscribe(function (res) {
            _this.sprints = res.sprints;
            _this.requesting = false;
        }, function (err) {
            _this.requesting = false;
        });
    };
    PastsprintsComponent.prototype.deleteUserSprints = function () {
        var _this = this;
        console.log('DELETE FROM SPRINT WHERE USER:=' + this.username);
        this.requesting = true;
        this.sprintService.deleteSprints().subscribe(function () {
            _this.sprints.forEach(function (t, i) {
                /*if (t.id == todo.id) {
                  this.todos.splice(i, 1);
                }*/
            });
            _this.requesting = false;
        });
        this.router.navigate(['/sprint']);
    };
    PastsprintsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pastsprints',
            template: __webpack_require__(/*! ./pastsprints.component.html */ "./src/app/pastsprints/pastsprints.component.html"),
            styles: [__webpack_require__(/*! ./pastsprints.component.css */ "./src/app/pastsprints/pastsprints.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _sprint_service__WEBPACK_IMPORTED_MODULE_2__["SprintService"]])
    ], PastsprintsComponent);
    return PastsprintsComponent;
}());



/***/ }),

/***/ "./src/app/sprint.service.ts":
/*!***********************************!*\
  !*** ./src/app/sprint.service.ts ***!
  \***********************************/
/*! exports provided: SprintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintService", function() { return SprintService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SprintService = /** @class */ (function () {
    function SprintService(http) {
        this.http = http;
    }
    SprintService.prototype.getSprints = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/sprint')
            .map(function (res) { return res.json(); });
    };
    SprintService.prototype.createSprint = function (sprint) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/newsprint', sprint)
            .map(function (res) { return res.json(); });
    };
    SprintService.prototype.deleteSprints = function () {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/deletesprint');
    };
    SprintService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SprintService);
    return SprintService;
}());



/***/ }),

/***/ "./src/app/sprint/sprint.component.css":
/*!*********************************************!*\
  !*** ./src/app/sprint/sprint.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sprint/sprint.component.html":
/*!**********************************************!*\
  !*** ./src/app/sprint/sprint.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n  <form (ngSubmit)=\"navigationPast()\" #newsprintForm=\"ngForm\">\n    <button type=\"submit\" class=\"nav-link\">Past Sprints </button>\n  </form>\n  <form (ngSubmit)=\"navigationNew()\" #newsprintForm=\"ngForm\">\n    <button type=\"submit\" class=\"nav-link\">New Sprint </button>\n  </form>\n</nav>\n\n\n<div [hidden]=\"!pastpage\">\n  <app-pastsprints></app-pastsprints>\n</div>\n\n<div [hidden]=\"pastpage\">\n  <app-newsprint></app-newsprint>\n</div>\n\n<p>Logged in as <label id='username'></label> </p>\n<router-outlet></router-outlet>\n\n<script>document.getElementById(\"username\").innerHTML = localStorage.profile.name;</script>"

/***/ }),

/***/ "./src/app/sprint/sprint.component.ts":
/*!********************************************!*\
  !*** ./src/app/sprint/sprint.component.ts ***!
  \********************************************/
/*! exports provided: SprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintComponent", function() { return SprintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SprintComponent = /** @class */ (function () {
    function SprintComponent() {
        this.pastpage = true;
        this.current = false;
    }
    SprintComponent.prototype.ngOnInit = function () {
    };
    SprintComponent.prototype.navigationPast = function () {
        this.pastpage = true;
    };
    SprintComponent.prototype.navigationNew = function () {
        this.pastpage = false;
    };
    SprintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sprint',
            template: __webpack_require__(/*! ./sprint.component.html */ "./src/app/sprint/sprint.component.html"),
            styles: [__webpack_require__(/*! ./sprint.component.css */ "./src/app/sprint/sprint.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SprintComponent);
    return SprintComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem; position: absolute; margin: auto; top: 10%;\n                        right: 0; bottom: 55%; left: 0;\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">About</h5>\n    <p class=\"card-text\">Sprint is a minimalist desktop time management application inspired by the <a href='http://en.wikipedia.org/wiki/Pomodoro_Technique'\n        style=\"color: black; text-decoration: underline;\">Pomodoro Technique</a>.</p>\n    <p class=\"card-text\">Choose a sprint length, enter a brief description of the activity, and get things done.</p>\n    <p class=\"card-text\">Preferred browser: <a href='http://www.google.com/chrome' style=\"color: black; text-decoration: underline;\">Chrome</a>.</p>\n    <p class=\"card-text\"><a href='' data-toggle=\"modal\" data-target=\"#termsandconditions\" style=\"color: black; text-decoration: underline;\">Terms\n        and conditions</a>.</p>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"termsandconditions\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalLongTitle\">Terms and Conditions</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>≡Sprint</p>\n        <p>version 0.3</p>\n        You understand this is a demonstrative application. Long term persistence of your data is not guaranteed.\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: 'http://localhost:8080/sprint',
    auth0: {
        domain: 'time-tracker-salim.auth0.com',
        clientId: 'elCGXM6IvU47sa_wYSQ8BTrM_2308TUI',
        callbackURL: 'http://localhost:4200/'
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\slim.hariz\Desktop\Time-Tracker\angular-time-tracker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map