/*global QUnit*/

sap.ui.define([
	"comacnproject1/project1/controller/training1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("training1 Controller");

	QUnit.test("I should test the training1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
