({
    sendEmail : function(component, event, helper) {
        var toAddress = component.get("v.toAddress");
        var subject = component.get("v.subject");
        var body = component.get("v.body");

        var action = component.get("c.sendEmail");
        action.setParams({
            "toAddress": toAddress,
            "subject": subject,
            "body": body
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email');
            }
        });

        $A.enqueueAction(action);
    }
})