// TEST 1 - Do plugins have dangerous access?
console.log("=== TEST 1 START ===");
console.log("require?", typeof require);
console.log("process?", typeof process);

try {
  const fs = require('fs');
  console.log("VULNERABLE: fs is accessible!");
} catch (e) {
  console.log("SAFE: fs is blocked -", e.message);
}

try {
  const cp = require('child_process');
  console.log("VULNERABLE: child_process accessible!");
} catch (e) {
  console.log("SAFE: child_process blocked -", e.message);
}
console.log("=== TEST 1 END ===");
