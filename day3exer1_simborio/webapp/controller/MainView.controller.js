sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.training.day3exer1simborio.controller.MainView", {
        onInit() {
        },

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            var oCardLabel = this.getView().byId("idLblCard");
            var oCardInput = this.getView().byId("idInputCard");

            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sGcash = oTextBundle.getText("gcashLbl");
            var sCard = oTextBundle.getText("ccLbl");
            var sCod = oTextBundle.getText("codLbl");
            

            if (sSelectedKey === "GCASH"){
                // show the mobile field
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                oCardLabel.setVisible(false);
                oCardInput.setVisible(false);

                this.fnDisplayMsg(sGcash);
            
            } else if (sSelectedKey === "CC") {
                oCardLabel.setVisible(true);
                oCardInput.setVisible(true);
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);

                this.fnDisplayMsg(sCard);
            } else{
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCardLabel.setVisible(false);
                oCardInput.setVisible(false);

                this.fnDisplayMsg(sCod);
            }
        },

        onAddItem: function (){
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        },

        onPressCheckout: function (){
                var oInputFNameValue = this.getView().byId("idInptFName").getValue();
                var oInputLNameValue = this.getView().byId("idInptLName").getValue();
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = oTextBundle.getText("reqFieldMsg");

                // Check if first name is blank
                if (oInputFNameValue === "" && oInputLNameValue === ""){
                    //sap.m.MessageToast.show("Required Field is blank"); 
                    this.fnDisplayMsg(sMsg);
                }
            },

    });
});