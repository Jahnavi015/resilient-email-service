const express = require('express');
const EmailService = require('./emailService');

const app = express();
const port = process.env.PORT || 3000;

const emailService = new EmailService();

app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { emailId, payload } = req.body;

  if (!emailId || !payload) {
    return res.status(400).json({ error: 'Missing emailId or payload' });
  }

  const result = await emailService.sendEmail(emailId, payload);
  const status = emailService.getStatus(emailId);

  res.json({ success: result, status });
});

app.get('/', (req, res) => {
  res.send('Resilient Email Service is up and running!');
});

app.get('/send-email', (req, res) => {
  res.status(405).send('This endpoint only accepts POST requests.');
});

app.listen(port, () => {
  console.log(`Email API running on port ${port}`);
});
