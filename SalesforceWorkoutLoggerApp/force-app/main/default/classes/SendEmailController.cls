public with sharing class SendEmailController {
    @AuraEnabled
    public static void sendEmail(String toAddress, String subject, String body) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        String[] toAddresses = new String[] { toAddress };
        mail.setToAddresses(toAddresses);
        mail.setSubject(subject);
        mail.setPlainTextBody(body);

        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
}