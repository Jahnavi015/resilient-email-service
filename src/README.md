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
