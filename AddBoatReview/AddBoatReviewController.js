({
	doInit : function(component, event, helper) {
		helper.onInit(component, event, helper);
	},
    
    onRecordUpdated : function(component, event, helper) {
        
        var showToastEvent = $A.get("e.force:showToast");
        if (showToastEvent) {
            showToastEvent.setParams({
                "title" : "Updated",
                "message" : "The record has been updated.",
                "type" : "success" 
            });
            showToastEvent.fire();
        } 
        else {
            alert(params.Message);
        }
	},
    
    onSave : function(component, event, helper) {
		var boatId = component.get("v.boat").Id;
        component.set("v.boatReview.Boat__c", boatId);
        
		var service = component.find("service");
        
        service.saveRecord(function (saveResult){
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                
                var showToastEvent = $A.get("e.force:showToast");
                if (showToastEvent) {
                    showToastEvent.setParams({
                        "title" : "Saved",
                        "message" : "The record has been saved.",
                        "type" : "success" 
                    });
                    showToastEvent.fire();
                } 
                else {
                    alert(params.Message);
                }
                
                var reviewAddedEvent = component.getEvent("boatReviewAdded");
                reviewAddedEvent.fire();
                
                helper.onInit(component, event, helper); 
            } 
            else if (saveResult.state === "INCOMPLETE") {
                console.log("INCOMPLETE");
            } 
            else if (saveResult.state === "ERROR") {
                console.log(JSON.stringify(saveResult.error));
            } 
            else {
                console.log(saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
            
        });
	}
    
    
})