({
    jsLoaded : function(component) {
        component.set("v.jsLoaded", true);
    },
    
    onPlotMapMarker : function(component, event) {
        var location = component.get("v.location");
        
        var locationData = {
            sObjectId : event.getParam("sObjectId"),
            lat : event.getParam("lat"),
            long : event.getParam("long"),
            label : event.getParam("label")
        };
        
        component.set("v.location", locationData);
        
    } 
    
})