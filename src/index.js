const EmailService = require('./emailService');

const emailService = new EmailService();

const emailPayload = {
  to: 'user@example.com',
  subject: 'Hello from Jahnavi!',
  body: 'This is a test email sent using a mock service.'
};

(async () => {
  for (let i = 1; i <= 6; i++) {
    const id = `email-${i}`;
    const result = await emailService.sendEmail(id, emailPayload);
    const status = emailService.getStatus(id);
    console.log(`Email ${id}: result = ${result}, status = ${status}`);
}
})();
