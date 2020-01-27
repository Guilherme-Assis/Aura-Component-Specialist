({
	init : function(component, event, helper) {
		var redirectToSObjectPageEvent = $A.get("e.force:navigateToSObject");
        
        if (redirectToSObjectPageEvent) {
            component.set("v.showDetailsButton", true);
        }
	},
    
    onFullDetails : function(component, event, helper) {
		var redirectToSObjectPageEvent = $A.get("e.force:navigateToSObject");
        var boat = component.get("v.boat");
        
        if(boat){
           redirectToSObjectPageEvent.setParams({
               "recordId" : boat.Id
            }); 
            redirectToSObjectPageEvent.fire();
        }
	}
    
})