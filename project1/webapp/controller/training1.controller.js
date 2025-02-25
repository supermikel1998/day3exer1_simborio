sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    
    return Controller.extend("com.acn.project1.project1.controller.training1", {
        onInit() {

        },

        onClickClear: function() {
            this.byId("txtName").setValue("");
            this.byId("txtStreet").setValue("");
            this.byId("txtNo").setValue("");
            this.byId("txtZip").setValue("");
            this.byId("txtCity").setValue("");
            this.byId("ddCountry").setValue("");
        }

    });
});

