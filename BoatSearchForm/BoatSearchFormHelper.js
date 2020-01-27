({
    initBoatTypes : function(component) {
        var action = component.get("c.getBoatTypes");
        
        action.setCallback(this, function(response) {
            var state = response.getState(); 
            
            if (state === "SUCCESS"){
                component.set("v.boatTypes", response.getReturnValue());
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