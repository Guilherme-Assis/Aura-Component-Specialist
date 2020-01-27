/**
 * Created by Guilherme Assis on 1/25/2020.
 */

({
    handleSaveRecord: function (component, event, helper) {
        let error = component.get('v.recordSaveError');

        if (error) {
            console.log('Deu ruim');
        }
        component.find("accountRecord").saveRecord($A.getCallback(function (saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                console.log("Success");
            } else if (saveResult.state === "ERROR") {
                var errMsg = "";
                for (var i = 0; i < saveResult.error.length; i++) {
                    errMsg += saveResult.error[i].message + "\n";
                }
                component.set("v.recordSaveError", errMsg);
            } else {
                console.log('Ops: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));
    }
})