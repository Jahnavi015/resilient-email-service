const MockProviderA = require('./providers/mockProviderA');
const MockProviderB = require('./providers/mockProviderB');
const RateLimiter = require('./utils/rateLimiter');
const retry = require('./utils/retry');

class EmailService {
  constructor() {
    this.providers = [new MockProviderA(), new MockProviderB()];
    this.sentEmails = new Set();
    this.statusMap = new Map();
    this.rateLimiter = new RateLimiter(5);
  }

  async sendEmail(emailId, payload) {
    if (this.sentEmails.has(emailId)) return true;

    if (!this.rateLimiter.allow()) {
      this.statusMap.set(emailId, "rate_limited");
      return false;
    }

    for (let provider of this.providers) {
      const success = await retry(() => provider.send(payload));
      if (success) {
        this.sentEmails.add(emailId);
        this.statusMap.set(emailId, "sent");
        return true;
      }
    }

    this.statusMap.set(emailId, "failed");
    return false;
  }

  getStatus(emailId) {
    return this.statusMap.get(emailId) || "not_found";
  }
}

module.exports = EmailService;
