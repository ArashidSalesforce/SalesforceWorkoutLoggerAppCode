({
    calculate : function(component, event, helper) {
        var weight = component.get("v.weight");
        var reps = component.get("v.reps");

        // Validate inputs
        if(weight && reps) {
            // Perform the calculation
            var result = weight / (1.0278 - 0.0278 * reps);
            component.set("v.result", result);
            component.set("v.displayResult", "Result: " + result.toFixed(2));
        } else {
            // Handle invalid inputs
            component.set("v.displayResult", "Please enter valid weight and reps.");
        }
    }
})