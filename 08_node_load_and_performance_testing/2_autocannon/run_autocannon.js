// ⚡ LOAD TESTING WITH AUTOCANNON (PROGRAMMATIC)

const autocannon = require("autocannon");

const url = "http://localhost:3000";

autocannon(
  {
    url,
    connections: 10, // number of concurrent users
    duration: 10, // test duration in seconds
  },
  (err, results) => {
    if (err) {
      console.error("Autocannon test failed:", err);
      return;
    }

    console.log("📊 Results Summary:");
    console.log(results);
  }
);
