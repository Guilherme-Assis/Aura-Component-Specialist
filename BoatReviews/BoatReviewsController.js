({
	doInit : function(component, event, helper) {
		helper.onInit(component, event, helper);
	},
    
    onUserInfoClick : function(component, event, helper) {
		var dataUserId = event.target.getAttribute("data-userid");
        var redirectToUserEvent = $A.get("e.force:navigateToSObject");
        if (redirectToUserEvent) {
            redirectToUserEvent.setParams({
                "recordId": dataUserId
            });
            redirectToUserEvent.fire();
        }
	}
    
})