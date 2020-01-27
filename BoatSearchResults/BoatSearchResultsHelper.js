({
	onSearch : function(component) {
        var action = component.get("c.getBoats");
        action.setParams({
            "boatTypeId" : component.get("v.boatTypeId")
        });

        action.setCallback(this, function(response) {
            var state = response.getState(); 
            
            if (state === "SUCCESS"){
                component.set("v.boats", response.getReturnValue());
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