({
	onBoatClick : function(component, event, helper) {
        var selectedBoat = component.get("v.boat");
        
        var boatselect = component.getEvent("boatselect");
        boatselect.setParams({
            "boatId" : selectedBoat.Id
        });
        boatselect.fire();
        
        var boatselected = $A.get("e.c:BoatSelected");
        boatselected.setParams({
            "boat" : selectedBoat
        });
        boatselected.fire();
        debugger;
        var plotMapMarkerEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerEvent.setParams({
            "sObjectId" : selectedBoat.Id,
            "lat" : selectedBoat.Geolocation__Latitude__s,
            "long" : selectedBoat.Geolocation__Longitude__s,
            "label" : selectedBoat.Name
        });
       plotMapMarkerEvent.fire();
		
	}
})