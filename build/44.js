webpackJsonp([44],{

/***/ 2148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@ionic-native/device/index.js
var _ionic_native_device = __webpack_require__(492);

// EXTERNAL MODULE: ./node_modules/@ionic-native/network/index.js
var _ionic_native_network = __webpack_require__(186);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/file.ts
var file = __webpack_require__(57);

// EXTERNAL MODULE: ./src/providers/init.ts
var init = __webpack_require__(155);

// EXTERNAL MODULE: ./src/providers/lang.ts
var providers_lang = __webpack_require__(151);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils_utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/local-notifications.ts
var local_notifications = __webpack_require__(152);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/configconstants.ts
var configconstants = __webpack_require__(123);

// EXTERNAL MODULE: ./src/core/pushnotifications/providers/pushnotifications.ts
var pushnotifications = __webpack_require__(137);

// CONCATENATED MODULE: ./src/core/settings/pages/deviceinfo/deviceinfo.ts
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Page that displays the device information.
 */
var deviceinfo_CoreSettingsDeviceInfoPage = /** @class */ (function () {
    function CoreSettingsDeviceInfoPage(platform, device, network, zone, appProvider, fileProvider, initDelegate, langProvider, sitesProvider, localNotificationsProvider, pushNotificationsProvider, utils, translate) {
        var _this = this;
        this.utils = utils;
        this.translate = translate;
        this.deviceInfo = {
            versionName: configconstants["a" /* CoreConfigConstants */].versionname,
            versionCode: configconstants["a" /* CoreConfigConstants */].versioncode,
            compilationTime: configconstants["a" /* CoreConfigConstants */].compilationtime,
            lastCommit: configconstants["a" /* CoreConfigConstants */].lastcommit,
            networkStatus: appProvider.isOnline() ? 'online' : 'offline',
            wifiConnection: appProvider.isWifi() ? 'yes' : 'no',
            localNotifAvailable: localNotificationsProvider.isAvailable() ? 'yes' : 'no',
            pushId: pushNotificationsProvider.getPushId(),
        };
        if (window.location && window.location.href) {
            var url = window.location.href;
            this.deviceInfo.locationHref = url.substr(0, url.indexOf('#'));
        }
        var navigator = window.navigator;
        if (navigator) {
            if (navigator.userAgent) {
                this.deviceInfo.userAgent = navigator.userAgent;
            }
            if (navigator.language) {
                this.deviceInfo.browserLanguage = navigator.language;
            }
        }
        if (device) {
            if (device.cordova) {
                this.deviceInfo.cordovaVersion = device.cordova;
            }
            if (device.platform) {
                this.deviceInfo.platform = device.platform;
            }
            if (device.version) {
                this.deviceInfo.osVersion = device.version;
            }
            if (device.model) {
                this.deviceInfo.model = device.model;
            }
            if (device.uuid) {
                this.deviceInfo.uuid = device.uuid;
            }
        }
        if (appProvider.isMobile()) {
            this.deviceInfo.deviceType = platform.is('tablet') ? 'tablet' : 'phone';
            if (appProvider.isAndroid()) {
                this.deviceInfo.deviceOs = 'android';
                this.deviceOsTranslated = 'Android';
            }
            else if (appProvider.isIOS()) {
                this.deviceInfo.deviceOs = 'ios';
                this.deviceOsTranslated = 'iOS';
            }
            else {
                var matches = navigator.userAgent.match(/\(([^\)]*)\)/);
                if (matches && matches.length > 1) {
                    this.deviceInfo.deviceOs = matches[1];
                    this.deviceOsTranslated = matches[1];
                }
                else {
                    this.deviceInfo.deviceOs = 'unknown';
                    this.deviceOsTranslated = this.translate.instant('core.unknown');
                }
            }
        }
        else {
            this.deviceInfo.deviceType = appProvider.isDesktop() ? 'desktop' : 'browser';
            if (appProvider.isLinux()) {
                this.deviceInfo.deviceOs = 'linux';
                this.deviceOsTranslated = 'Linux';
            }
            else if (appProvider.isMac()) {
                this.deviceInfo.deviceOs = 'mac';
                this.deviceOsTranslated = 'MacOS';
            }
            else if (appProvider.isWindows()) {
                this.deviceInfo.deviceOs = 'windows';
                this.deviceOsTranslated = 'Windows';
            }
            else {
                var matches = navigator.userAgent.match(/\(([^\)]*)\)/);
                if (matches && matches.length > 1) {
                    this.deviceInfo.deviceOs = matches[1];
                    this.deviceOsTranslated = matches[1];
                }
                else {
                    this.deviceInfo.deviceOs = 'unknown';
                    this.deviceOsTranslated = this.translate.instant('core.unknown');
                }
            }
        }
        langProvider.getCurrentLanguage().then(function (lang) {
            _this.deviceInfo.currentLanguage = lang;
            _this.currentLangName = configconstants["a" /* CoreConfigConstants */].languages[lang];
        });
        if (fileProvider.isAvailable()) {
            fileProvider.getBasePath().then(function (basepath) {
                _this.deviceInfo.fileSystemRoot = basepath;
                _this.fsClickable = fileProvider.usesHTMLAPI();
            });
        }
        if (window.screen) {
            this.deviceInfo.screen = window.innerWidth + 'x' + window.innerHeight +
                ' (' + window.screen.width + 'x' + window.screen.height + ')';
        }
        var currentSite = sitesProvider.getCurrentSite();
        this.deviceInfo.siteUrl = (currentSite && currentSite.getURL()) ||
            (typeof configconstants["a" /* CoreConfigConstants */].siteurl == 'string' && configconstants["a" /* CoreConfigConstants */].siteurl);
        this.deviceInfo.isPrefixedUrl = !!configconstants["a" /* CoreConfigConstants */].siteurl;
        this.deviceInfo.siteId = currentSite && currentSite.getId();
        this.deviceInfo.siteVersion = currentSite && currentSite.getInfo().release;
        // Refresh online status when changes.
        this.onlineObserver = network.onchange().subscribe(function () {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            zone.run(function () {
                _this.deviceInfo.networkStatus = appProvider.isOnline() ? 'online' : 'offline';
            });
        });
    }
    /**
     * Copies device info into the clipboard.
     */
    CoreSettingsDeviceInfoPage.prototype.copyInfo = function () {
        this.utils.copyToClipboard(JSON.stringify(this.deviceInfo));
    };
    /**
     * Copies device info item into the clipboard.
     *
     * @param e Event.
     */
    CoreSettingsDeviceInfoPage.prototype.copyItemInfo = function (e) {
        e.preventDefault();
        var el = e.target;
        this.utils.copyToClipboard(el.closest('ion-item').textContent.trim());
    };
    /**
     * Page destroyed.
     */
    CoreSettingsDeviceInfoPage.prototype.ngOnDestroy = function () {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    };
    CoreSettingsDeviceInfoPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-settings-deviceinfo',
            templateUrl: 'deviceinfo.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["v" /* Platform */],
            _ionic_native_device["a" /* Device */],
            _ionic_native_network["a" /* Network */],
            core["M" /* NgZone */],
            app["a" /* CoreAppProvider */],
            file["a" /* CoreFileProvider */],
            init["a" /* CoreInitDelegate */],
            providers_lang["a" /* CoreLangProvider */],
            sites["a" /* CoreSitesProvider */],
            local_notifications["a" /* CoreLocalNotificationsProvider */],
            pushnotifications["a" /* CorePushNotificationsProvider */],
            utils_utils["a" /* CoreUtilsProvider */],
            _ngx_translate_core["c" /* TranslateService */]])
    ], CoreSettingsDeviceInfoPage);
    return CoreSettingsDeviceInfoPage;
}());

//# sourceMappingURL=deviceinfo.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(28);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(108);

// CONCATENATED MODULE: ./src/core/settings/pages/deviceinfo/deviceinfo.module.ts
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var deviceinfo_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var deviceinfo_module_CoreSettingsDeviceInfoPageModule = /** @class */ (function () {
    function CoreSettingsDeviceInfoPageModule() {
    }
    CoreSettingsDeviceInfoPageModule = deviceinfo_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                deviceinfo_CoreSettingsDeviceInfoPage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(deviceinfo_CoreSettingsDeviceInfoPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsDeviceInfoPageModule);
    return CoreSettingsDeviceInfoPageModule;
}());

//# sourceMappingURL=deviceinfo.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(1525);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(1526);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(1527);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js
var loading_component_ngfactory = __webpack_require__(1528);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(1529);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(1530);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(1531);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js
var select_popover_component_ngfactory = __webpack_require__(1532);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(1533);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-popover.ngfactory.js
var context_menu_popover_ngfactory = __webpack_require__(1534);

// EXTERNAL MODULE: ./src/components/course-picker-menu/course-picker-menu-popover.ngfactory.js
var course_picker_menu_popover_ngfactory = __webpack_require__(1535);

// EXTERNAL MODULE: ./src/components/recaptcha/recaptchamodal.ngfactory.js
var recaptchamodal_ngfactory = __webpack_require__(1536);

// EXTERNAL MODULE: ./src/components/bs-tooltip/bs-tooltip.ngfactory.js
var bs_tooltip_ngfactory = __webpack_require__(1537);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(30);

// EXTERNAL MODULE: ./src/directives/long-press.ts
var long_press = __webpack_require__(750);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./src/directives/link.ts
var directives_link = __webpack_require__(175);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var utils_url = __webpack_require__(22);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(29);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(27);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(11);

// EXTERNAL MODULE: ./src/pipes/format-date.ts
var format_date = __webpack_require__(229);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/utils/time.ts
var time = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(374);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(724);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(35);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(477);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform_platform = __webpack_require__(16);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(725);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(375);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(182);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(109);

// CONCATENATED MODULE: ./src/core/settings/pages/deviceinfo/deviceinfo.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















































var styles_CoreSettingsDeviceInfoPage = [];
var RenderType_CoreSettingsDeviceInfoPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSettingsDeviceInfoPage, data: {} });

function View_CoreSettingsDeviceInfoPage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, ["", ""])), core["_49" /* ɵppd */](2, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_44" /* ɵnov */](_v.parent, 0), _co.deviceInfo.compilationTime, "LLL Z", false)); _ck(_v, 1, 0, currVal_0); }); }
function View_CoreSettingsDeviceInfoPage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.deviceInfo.lastCommit; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreSettingsDeviceInfoPage_4(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, [" *"]))], null, null); }
function View_CoreSettingsDeviceInfoPage_5(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.deviceInfo.siteVersion; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreSettingsDeviceInfoPage_6(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.deviceInfo.siteId; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreSettingsDeviceInfoPage_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 24, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 8, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 9, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 10, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 4, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreSettingsDeviceInfoPage_4)), core["_30" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](14, 0, null, 2, 3, "p", [], null, null, null, null, null)), (_l()(), core["_31" /* ɵeld */](15, 0, null, null, 2, "a", [["auto-login", "yes"], ["core-link", ""]], [[8, "href", 4]], null, null, null, null)), core["_30" /* ɵdid */](16, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["t" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils_utils["a" /* CoreUtilsProvider */], sites["a" /* CoreSitesProvider */], utils_url["a" /* CoreUrlUtilsProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], utils_text["a" /* CoreTextUtilsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](17, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 2, 1, null, View_CoreSettingsDeviceInfoPage_5)), core["_30" /* ɵdid */](20, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 2, 1, null, View_CoreSettingsDeviceInfoPage_6)), core["_30" /* ɵdid */](23, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_1 = _co.deviceInfo.isPrefixedUrl; _ck(_v, 12, 0, currVal_1); _ck(_v, 16, 0); var currVal_4 = _co.deviceInfo.siteVersion; _ck(_v, 20, 0, currVal_4); var currVal_5 = _co.deviceInfo.siteId; _ck(_v, 23, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.siteinfo")); _ck(_v, 9, 0, currVal_0); var currVal_2 = _co.deviceInfo.siteUrl; _ck(_v, 15, 0, currVal_2); var currVal_3 = _co.deviceInfo.siteUrl; _ck(_v, 17, 0, currVal_3); }); }
function View_CoreSettingsDeviceInfoPage_8(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "a", [["auto-login", "no"], ["core-link", ""]], [[8, "href", 4]], null, null, null, null)), core["_30" /* ɵdid */](1, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["t" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils_utils["a" /* CoreUtilsProvider */], sites["a" /* CoreSitesProvider */], utils_url["a" /* CoreUrlUtilsProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], utils_text["a" /* CoreTextUtilsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.deviceInfo.fileSystemRoot; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.deviceInfo.fileSystemRoot; _ck(_v, 2, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_9(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.deviceInfo.fileSystemRoot; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreSettingsDeviceInfoPage_7(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 11, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 12, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 13, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_CoreSettingsDeviceInfoPage_8)), core["_30" /* ɵdid */](14, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 2, 1, null, View_CoreSettingsDeviceInfoPage_9)), core["_30" /* ɵdid */](17, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_1 = _co.fsClickable; _ck(_v, 14, 0, currVal_1); var currVal_2 = !_co.fsClickable; _ck(_v, 17, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.filesystemroot")); _ck(_v, 9, 0, currVal_0); }); }
function View_CoreSettingsDeviceInfoPage_10(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 14, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 15, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 16, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.navigatoruseragent")); _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.deviceInfo.userAgent; _ck(_v, 13, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_11(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 17, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 18, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 19, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.navigatorlanguage")); _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.deviceInfo.browserLanguage; _ck(_v, 13, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_12(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 20, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 21, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 22, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", " (", ")"])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.currentlanguage")); _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.currentLangName; var currVal_2 = _co.deviceInfo.currentLanguage; _ck(_v, 13, 0, currVal_1, currVal_2); }); }
function View_CoreSettingsDeviceInfoPage_13(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 23, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 24, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 25, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.locationhref")); _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.deviceInfo.locationHref; _ck(_v, 13, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_14(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 15, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 26, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 27, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 28, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.displayformat")); _ck(_v, 9, 0, currVal_0); var currVal_1 = core["_56" /* ɵunv */](_v, 13, 0, core["_44" /* ɵnov */](_v, 14).transform(("core." + _co.deviceInfo.deviceType))); _ck(_v, 13, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_15(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 29, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 30, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 31, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.deviceos")); _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.deviceInfo.deviceOsTranslated; _ck(_v, 13, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_16(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 15, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 32, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 33, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 34, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.screen")); _ck(_v, 9, 0, currVal_0); var currVal_1 = core["_56" /* ɵunv */](_v, 13, 0, core["_44" /* ɵnov */](_v, 14).transform(_co.deviceInfo.screen)); _ck(_v, 13, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_17(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 41, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 42, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 43, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.cordovaversion")); _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.deviceInfo.cordovaVersion; _ck(_v, 13, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_18(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 44, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 45, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 46, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.cordovadeviceplatform")); _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.deviceInfo.platform; _ck(_v, 13, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_19(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 47, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 48, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 49, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.cordovadeviceosversion")); _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.deviceInfo.osVersion; _ck(_v, 13, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_20(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 50, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 51, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 52, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.cordovadevicemodel")); _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.deviceInfo.model; _ck(_v, 13, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_21(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 53, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 54, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 55, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.cordovadeviceuuid")); _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.deviceInfo.uuid; _ck(_v, 13, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_22(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 56, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 57, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 58, { _icons: 1 }), core["_30" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](9, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](12, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](13, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 9, 0, core["_44" /* ɵnov */](_v, 10).transform("core.settings.pushid")); _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.deviceInfo.pushId; _ck(_v, 13, 0, currVal_1); }); }
function View_CoreSettingsDeviceInfoPage_0(_l) { return core["_57" /* ɵvid */](0, [core["_47" /* ɵpid */](0, format_date["a" /* CoreFormatDatePipe */], [logger["a" /* CoreLoggerProvider */], time["a" /* CoreTimeUtilsProvider */]]), (_l()(), core["_31" /* ɵeld */](1, 0, null, null, 25, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, null, 21, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform_platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ɵted */](10, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](13, 0, null, 2, 11, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](14, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](17, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.copyInfo() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](18, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ɵeld */](21, 0, null, 0, 1, "ion-icon", [["name", "copy"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](22, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](28, 0, null, null, 133, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](29, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](31, 0, null, 1, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](32, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](33, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_30" /* ɵdid */](37, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](39, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](40, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](43, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](44, null, ["", " (", ")"])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](47, 0, null, 1, 17, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](48, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](49, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 7, { _icons: 1 }), core["_30" /* ɵdid */](53, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](55, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](56, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 2, 1, null, View_CoreSettingsDeviceInfoPage_1)), core["_30" /* ɵdid */](60, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 2, 1, null, View_CoreSettingsDeviceInfoPage_2)), core["_30" /* ɵdid */](63, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_3)), core["_30" /* ɵdid */](67, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_7)), core["_30" /* ɵdid */](70, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_10)), core["_30" /* ɵdid */](73, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_11)), core["_30" /* ɵdid */](76, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_12)), core["_30" /* ɵdid */](79, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_13)), core["_30" /* ɵdid */](82, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_14)), core["_30" /* ɵdid */](85, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_15)), core["_30" /* ɵdid */](88, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_16)), core["_30" /* ɵdid */](91, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](93, 0, null, 1, 15, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](94, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](95, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 35, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 36, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 37, { _icons: 1 }), core["_30" /* ɵdid */](99, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](101, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](102, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](105, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](106, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](110, 0, null, 1, 15, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](111, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](112, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 38, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 39, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 40, { _icons: 1 }), core["_30" /* ɵdid */](116, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](118, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](119, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](122, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](123, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_17)), core["_30" /* ɵdid */](128, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_18)), core["_30" /* ɵdid */](131, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_19)), core["_30" /* ɵdid */](134, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_20)), core["_30" /* ɵdid */](137, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_21)), core["_30" /* ɵdid */](140, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsDeviceInfoPage_22)), core["_30" /* ɵdid */](143, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](145, 0, null, 1, 15, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, [[null, "longPress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longPress" === en)) {
        var pd_0 = (_co.copyItemInfo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](146, 212992, null, 0, long_press["a" /* CoreLongPressDirective */], [core["t" /* ElementRef */]], null, { longPress: "longPress" }), core["_30" /* ɵdid */](147, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 59, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 60, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 61, { _icons: 1 }), core["_30" /* ɵdid */](151, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](153, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](154, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ɵeld */](157, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](158, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_5 = "copy"; _ck(_v, 22, 0, currVal_5); _ck(_v, 32, 0); _ck(_v, 48, 0); var currVal_12 = _co.deviceInfo.compilationTime; _ck(_v, 60, 0, currVal_12); var currVal_13 = _co.deviceInfo.lastCommit; _ck(_v, 63, 0, currVal_13); var currVal_14 = _co.deviceInfo.siteUrl; _ck(_v, 67, 0, currVal_14); var currVal_15 = _co.deviceInfo.fileSystemRoot; _ck(_v, 70, 0, currVal_15); var currVal_16 = _co.deviceInfo.userAgent; _ck(_v, 73, 0, currVal_16); var currVal_17 = _co.deviceInfo.browserLanguage; _ck(_v, 76, 0, currVal_17); var currVal_18 = _co.deviceInfo.currentLanguage; _ck(_v, 79, 0, currVal_18); var currVal_19 = _co.deviceInfo.locationHref; _ck(_v, 82, 0, currVal_19); var currVal_20 = _co.deviceInfo.deviceType; _ck(_v, 85, 0, currVal_20); var currVal_21 = _co.deviceInfo.deviceOs; _ck(_v, 88, 0, currVal_21); var currVal_22 = _co.deviceInfo.screen; _ck(_v, 91, 0, currVal_22); _ck(_v, 94, 0); _ck(_v, 111, 0); var currVal_27 = _co.deviceInfo.cordovaVersion; _ck(_v, 128, 0, currVal_27); var currVal_28 = _co.deviceInfo.platform; _ck(_v, 131, 0, currVal_28); var currVal_29 = _co.deviceInfo.osVersion; _ck(_v, 134, 0, currVal_29); var currVal_30 = _co.deviceInfo.model; _ck(_v, 137, 0, currVal_30); var currVal_31 = _co.deviceInfo.uuid; _ck(_v, 140, 0, currVal_31); var currVal_32 = _co.deviceInfo.pushId; _ck(_v, 143, 0, currVal_32); _ck(_v, 146, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ɵunv */](_v, 10, 0, core["_44" /* ɵnov */](_v, 11).transform("core.settings.deviceinfo")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_56" /* ɵunv */](_v, 17, 0, core["_44" /* ɵnov */](_v, 19).transform("core.settings.copyinfo")); _ck(_v, 17, 0, currVal_3); var currVal_4 = core["_44" /* ɵnov */](_v, 22)._hidden; _ck(_v, 21, 0, currVal_4); var currVal_6 = core["_44" /* ɵnov */](_v, 29).statusbarPadding; var currVal_7 = core["_44" /* ɵnov */](_v, 29)._hasRefresher; _ck(_v, 28, 0, currVal_6, currVal_7); var currVal_8 = core["_56" /* ɵunv */](_v, 40, 0, core["_44" /* ɵnov */](_v, 41).transform("core.settings.appversion")); _ck(_v, 40, 0, currVal_8); var currVal_9 = _co.deviceInfo.versionName; var currVal_10 = _co.deviceInfo.versionCode; _ck(_v, 44, 0, currVal_9, currVal_10); var currVal_11 = core["_56" /* ɵunv */](_v, 56, 0, core["_44" /* ɵnov */](_v, 57).transform("core.settings.compilationinfo")); _ck(_v, 56, 0, currVal_11); var currVal_23 = core["_56" /* ɵunv */](_v, 102, 0, core["_44" /* ɵnov */](_v, 103).transform("core.settings.networkstatus")); _ck(_v, 102, 0, currVal_23); var currVal_24 = core["_56" /* ɵunv */](_v, 106, 0, core["_44" /* ɵnov */](_v, 107).transform(("core." + _co.deviceInfo.networkStatus))); _ck(_v, 106, 0, currVal_24); var currVal_25 = core["_56" /* ɵunv */](_v, 119, 0, core["_44" /* ɵnov */](_v, 120).transform("core.settings.wificonnection")); _ck(_v, 119, 0, currVal_25); var currVal_26 = core["_56" /* ɵunv */](_v, 123, 0, core["_44" /* ɵnov */](_v, 124).transform(("core." + _co.deviceInfo.wifiConnection))); _ck(_v, 123, 0, currVal_26); var currVal_33 = core["_56" /* ɵunv */](_v, 154, 0, core["_44" /* ɵnov */](_v, 155).transform("core.settings.localnotifavailable")); _ck(_v, 154, 0, currVal_33); var currVal_34 = core["_56" /* ɵunv */](_v, 158, 0, core["_44" /* ɵnov */](_v, 159).transform(("core." + _co.deviceInfo.localNotifAvailable))); _ck(_v, 158, 0, currVal_34); }); }
function View_CoreSettingsDeviceInfoPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-core-settings-deviceinfo", [], null, null, null, View_CoreSettingsDeviceInfoPage_0, RenderType_CoreSettingsDeviceInfoPage)), core["_30" /* ɵdid */](1, 180224, null, 0, deviceinfo_CoreSettingsDeviceInfoPage, [platform_platform["a" /* Platform */], _ionic_native_device["a" /* Device */], _ionic_native_network["a" /* Network */], core["M" /* NgZone */], app["a" /* CoreAppProvider */], file["a" /* CoreFileProvider */], init["a" /* CoreInitDelegate */], providers_lang["a" /* CoreLangProvider */], sites["a" /* CoreSitesProvider */], local_notifications["a" /* CoreLocalNotificationsProvider */], pushnotifications["a" /* CorePushNotificationsProvider */], utils_utils["a" /* CoreUtilsProvider */], translate_service["a" /* TranslateService */]], null, null)], null, null); }
var CoreSettingsDeviceInfoPageNgFactory = core["_27" /* ɵccf */]("page-core-settings-deviceinfo", deviceinfo_CoreSettingsDeviceInfoPage, View_CoreSettingsDeviceInfoPage_Host_0, {}, {}, []);

//# sourceMappingURL=deviceinfo.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.loader.js
var translate_loader = __webpack_require__(370);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.compiler.js
var translate_compiler = __webpack_require__(371);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.parser.js
var translate_parser = __webpack_require__(373);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/missing-translation-handler.js
var missing_translation_handler = __webpack_require__(372);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.store.js
var translate_store = __webpack_require__(476);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(723);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(273);

// CONCATENATED MODULE: ./src/core/settings/pages/deviceinfo/deviceinfo.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsDeviceInfoPageModuleNgFactory", function() { return CoreSettingsDeviceInfoPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var CoreSettingsDeviceInfoPageModuleNgFactory = core["_28" /* ɵcmf */](deviceinfo_module_CoreSettingsDeviceInfoPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreSettingsDeviceInfoPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, deviceinfo_module_CoreSettingsDeviceInfoPageModule, deviceinfo_module_CoreSettingsDeviceInfoPageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], deviceinfo_CoreSettingsDeviceInfoPage, [])]); });

//# sourceMappingURL=deviceinfo.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=44.js.map