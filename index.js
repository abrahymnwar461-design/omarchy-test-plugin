// Benign test plugin for Omarchy - security research
console.log("Hello from omarchy-test-plugin - benign test");

function onLoad() {
  console.log("Test plugin loaded safely");
  return "Hello, this is a benign test plugin";
}

module.exports = { onLoad };
