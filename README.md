## Resilient Email Sending Service

A simple JavaScript-based email sending system with retry, fallback, idempotency, rate limiting, and status tracking — using mock email providers.

## Features

- Retry with exponential backoff
- Fallback between two providers
- Idempotent sends (no duplicates)
- Rate limit: 5 emails per minute
- Tracks status of each email

## How to Run

```bash
npm install
node src/index.js
```

## Live API

Test it here(for POST):  
🔗 (https://resilient-email-service-usbo.onrender.com/send-email)

for browser test here:
https://resilient-email-service-usbo.onrender.com/

Example POST body:

```json
{
  "emailId": "email-001",
  "payload": {
    "to": "user@example.com",
    "subject": "Hello from API",
    "body": "This is a test email!"
  }
}
```
