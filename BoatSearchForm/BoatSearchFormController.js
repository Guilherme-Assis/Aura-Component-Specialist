({
    initBoatSearchForm : function(component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        if (createRecordEvent){
            component.set("v.showNewButton", true);
        }
        
        helper.initBoatTypes(component);
    },
    
    createNewBoat : function(component, event, helper) {
        var boatTypeId = component.find("boatTypeSelect").get("v.value");
        
        var params = {"entityApiName": "Boat__c"};
        if(boatTypeId){
            params.defaultFieldValues = {"BoatType__c" : boatTypeId};
        }
        
        var createBoatRecordEvent = $A.get("e.force:createRecord");
        createBoatRecordEvent.setParams(params);
        
        createAcountContactEvent.fire();
        
    },
    
    onFormSubmit : function(component, event, helper) {
        var boatTypeId = component.find("boatTypeSelect").get("v.value");
        var data = {
            "boatTypeId" : boatTypeId
        };
        
        var formsubmit = component.getEvent("formsubmit");
        formsubmit.setParams({
            "formData" : data
        });
        
        formsubmit.fire();
    }
    
    
})