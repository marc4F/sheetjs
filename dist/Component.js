sap.ui.define(["sap/ui/core/UIComponent","sheetjs/model/models"],(e,t)=>{"use strict";return e.extend("sheetjs.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init(){e.prototype.init.apply(this,arguments);this.setModel(t.createDeviceModel(),"device");this.getRouter().initialize()}})});
//# sourceMappingURL=Component.js.map