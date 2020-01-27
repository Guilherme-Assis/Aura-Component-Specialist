({
	onInit : function(component, event, helper) {
        var action = component.get("c.getAll");
        action.setParams({
            "boatId" : component.get("v.boat").Id
        });
        
        
        
        action.setCallback(this, function(response) {
			var state = response.getState(); 
            
            if (state === "SUCCESS"){
                component.set("v.boatReviews", response.getReturnValue());
            }
            else if (state === "ERROR"){
                console.log(response.getError());
            }
            else{
                console.log(response);
            }
        });
        
        $A.enqueueAction(action);
        
	}
    
})