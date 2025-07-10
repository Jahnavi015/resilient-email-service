class MockProviderB {
  async send(payload) {
    console.log("Provider B sending...");
    return Math.random() > 0.5;
  }
}

module.exports = MockProviderB;
