sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.infocus.TimeApproval2.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.infocus.TimeApproval2",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
