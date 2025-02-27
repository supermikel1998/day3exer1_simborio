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
            // Comment this code for now
            // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            // var sMsg = oTextBundle.getText("addButtonMsg");
            // this.fnDisplayMsg(sMsg);

            // Instantiate the fragment

            // create dialog lazily
            if (!this.oDialog) {
                // By using loadFragment, we are adding the fragment as a dependent to the View
                // By doing so, we can use the functions inside the view's controller
                this.oDialog = this.loadFragment({
                    name: "com.training.day3exer1simborio.fragment.productDialog"
                });
            } 
            this.oDialog.then(function(oDialog) {
                oDialog.open();
            });
        },


        onPressCheckout: function (){
              //var oInputFNameValue = this.getView().byId("idInptFName").getValue();
              //var oInputLNameValue = this.getView().byId("idInptLName").getValue();
              //  var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
              //  var sMsg = oTextBundle.getText("reqFieldMsg");

                // Check if first name is blank
               // if (oInputFNameValue === "" && oInputLNameValue === ""){
                    //sap.m.MessageToast.show("Required Field is blank"); 
                 //   this.fnDisplayMsg(sMsg);
                //}

               //fragment exercise
                var oInputFName = this.getView().byId("idInptFName");
                var oInputLName = this.getView().byId("idInptLName");
                var oInputFNameValue = oInputFName.getValue();
                var oInputLNameValue = oInputLName.getValue();
                var oRouter = this.getOwnerComponent().getRouter();

               if (oInputFNameValue === "" || oInputLNameValue === ""){
                   
                // set value state to Error
                    oInputFName.setValueState("Error");
                    oInputLName.setValueState("Error");
                } else {
                    oInputFName.setValueState("None");
                    oInputLName.setValueState("None");
                
                //Navigate to review page passing first
                    oRouter.navTo("RouteReviewPage", {
                        firstName: oInputFNameValue
                    });
                
                }                
            },

        onCloseDialog: function (){
            this.getView().byId("idProductDialog").close();
            },

    });
});