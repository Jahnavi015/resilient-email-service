async function retry(fn, retries = 3) {
  let delay = 100;
  for (let i = 0; i < retries; i++) {
    try {
      if (await fn()) return true;
    } catch (e) {}
    await new Promise((r) => setTimeout(r, delay));
    delay *= 2;
  }
  return false;
}

module.exports = retry;
