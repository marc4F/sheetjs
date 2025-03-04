sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "xlsx"
], (Controller, XLSX) => {
    "use strict";

    return Controller.extend("sheetjs.controller.View1", {
        onInit() {
            console.log(XLSX.version);
        }
    });
});