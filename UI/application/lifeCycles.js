"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LifeCycles = (function () {
    function LifeCycles() {
        this.logs = [];
        this.logs.push('----- Initialized -----');
    }
    // 入力値の初期化後に実行
    LifeCycles.prototype.ngOnInit = function () {
        console.log(this.data);
        this.logs.push('ngOnInit');
    };
    // 入力値の変更時に実行
    LifeCycles.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.logs.push('ngOnChanges');
    };
    // 何かしらの変更の度に実行
    LifeCycles.prototype.ngDoCheck = function () {
        this.logs.push('ngDoCheck');
    };
    // コンポーネントに属するビューの初期化後に実行
    LifeCycles.prototype.ngAfterContentInit = function () {
        this.logs.push('ngAfterContentInit');
    };
    // コンポーネントに属するビューの変更時に実行
    LifeCycles.prototype.ngAfterContentChecked = function () {
        this.logs.push('ngAfterContentChecked');
    };
    // 子コンポーネントの初期化後に実行
    LifeCycles.prototype.ngAfterViewInit = function () {
        this.logs.push('ngAfterViewInit');
    };
    // 子コンポーネントの変更時に実行
    LifeCycles.prototype.ngAfterViewChecked = function () {
        this.logs.push('ngAfterViewChecked');
    };
    // コンポーネントが削除される前に実行
    LifeCycles.prototype.ngOnDestroy = function () {
        this.logs.push('ngOnDestroy');
    };
    LifeCycles.prototype.add = function (str) {
        this.logs.push("----- input: \"" + str + "\" -----");
    };
    LifeCycles.prototype.remove = function (index) {
        this.logs.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LifeCycles.prototype, "data", void 0);
    LifeCycles = __decorate([
        core_1.Component({
            selector: 'my-parent',
            providers: [],
            template: "\n    <div>\n      <input type=\"text\" #input />\n      <input type=\"button\" value=\"add\" (click)=\"add(input.value); input.value = ''\" />\n    </div>\n    <div>\n      <ol>\n        <my-child *ngFor=\"let log of logs; let i = index\" [log]=\"log\" [index]=\"i\" (onDelete)=\"remove($event)\"></my-child>\n      </ol>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], LifeCycles);
    return LifeCycles;
}());
exports.LifeCycles = LifeCycles;
//# sourceMappingURL=lifeCycles.js.map