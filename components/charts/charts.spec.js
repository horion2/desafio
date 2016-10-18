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
var testing_1 = require('@angular/core/testing');
var ng2_charts_1 = require('../../ng2-charts');
var html = "";
describe('Component: ng2-charts', function () {
    var fixture;
    var context;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestChartsComponent],
            imports: [ng2_charts_1.ChartsModule]
        });
        testing_1.TestBed.overrideComponent(TestChartsComponent, { set: { template: html } });
        fixture = testing_1.TestBed.createComponent(TestChartsComponent);
        context = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('fixture should not be null', function () {
        expect(fixture).not.toBeNull();
    });
});
var TestChartsComponent = (function () {
    function TestChartsComponent() {
    }
    TestChartsComponent = __decorate([
        core_1.Component({
            selector: 'charts-test',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], TestChartsComponent);
    return TestChartsComponent;
}());
//# sourceMappingURL=charts.spec.js.map