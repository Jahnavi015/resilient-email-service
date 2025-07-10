class RateLimiter {
  constructor(limit) {
    this.limit = limit;
    this.tokens = limit;
    this.lastRefill = Date.now();
  }

  allow() {
    const now = Date.now();
    if (now - this.lastRefill > 60000) {
      this.tokens = this.limit;
      this.lastRefill = now;
    }

    if (this.tokens > 0) {
      this.tokens--;
      return true;
    }

    return false;
  }
}

module.exports = RateLimiter;
