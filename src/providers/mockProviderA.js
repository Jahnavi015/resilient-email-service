class MockProviderA {
  async send(payload) {
    console.log("Provider A sending...");
    return Math.random() > 0.3;
  }
}

module.exports = MockProviderA;
