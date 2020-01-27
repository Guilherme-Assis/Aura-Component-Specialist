({
	onInit : function(component, event, helper) {
        var service = component.find("service");
        service.getNewRecord(
            "BoatReview__c",
            null,
            false,
            $A.getCallback(function() {
                var boatReview = component.get("v.boatReview");
                var error = component.get("v.recordError");
                
                if(error || !boatReview) {
                    console.log("Error: " + error);
                    return;
                }
                
                boatReview.Boat__c = component.get("v.boat").Id;
                component.set("v.boatReview", boatReview);
            })
        );
	},
    
    notifyUser : function(params){
        var showToastEvent = $A.get("e.force:showToast");
        if (showToastEvent) {
            showToastEvent.setParams({
                "title" : params.Title,
                "message" : params.Message,
                "type" : params.Type 
            });
            showToastEvent.fire();
        } 
        else {
            alert(params.Message);
        } 
    }
    
})