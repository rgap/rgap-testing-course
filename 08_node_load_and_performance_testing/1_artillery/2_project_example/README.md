# 🚀 Load Testing Express API with Artillery

This project evaluates the performance of two endpoints in an Express.js API using [Artillery](https://artillery.io/), a load testing toolkit built for developers.

---

## 🧠 Why Load Testing?

Load testing is essential in software engineering to ensure your application:

- ✅ **Performs reliably** under normal and peak traffic
- 🛡️ **Resists crashes** under high load
- 🔍 **Reveals bottlenecks** before production
- 📈 **Scales properly** when users grow

Node.js, being single-threaded, is performant for I/O tasks but **sensitive to CPU-bound logic**, making realistic testing especially critical.

---

## 📁 Endpoints Under Test

| Endpoint              | Description                                 |
| --------------------- | ------------------------------------------- |
| `/operacion-simple`   | Adds numbers in a small loop (I/O-like)     |
| `/operacion-compleja` | Adds numbers in a long loop (CPU-intensive) |

---

## 🧪 Test Scenarios Defined

| Test         | File                     | Description                                          |
| ------------ | ------------------------ | ---------------------------------------------------- |
| Simple Test  | `tests/simple_test.yml`  | Simulates 5 req/sec for 10s on `/operacion-simple`   |
| Complex Test | `tests/complex_test.yml` | Simulates 5 req/sec for 10s on `/operacion-compleja` |

Both use:

- `arrivalRate: 5` – 5 new requests per second
- `duration: 10` – Test runs for 10 seconds
- ~50 total virtual users automatically generated

---

## 📊 What Metrics Matter?

| Metric                  | What It Shows                                      |
| ----------------------- | -------------------------------------------------- |
| `http.request_rate`     | Requests sent per second (RPS)                     |
| `http.response_time`    | Time from request sent to response received        |
| `vusers.failed`         | How many virtual users crashed                     |
| `http.codes.200`        | Number of successful responses                     |
| `vusers.session_length` | Duration of the full session for each virtual user |
| `downloaded_bytes`      | Total response data received                       |

These metrics help you understand system behavior under pressure:

- Low response time = fast app
- High throughput = scalable app
- Zero failures = stable under test conditions

---

## 📈 Summary of Results

| Metric               | `/operacion-simple` | `/operacion-compleja` |
| -------------------- | ------------------- | --------------------- |
| Requests Sent        | 50                  | 50                    |
| Mean Response Time   | 0.6 ms              | 2.6 ms                |
| P95 Response Time    | 1 ms                | 4 ms                  |
| Max Session Duration | 20.7 ms             | 24.5 ms               |
| Virtual Users Failed | 0                   | 0                     |

### 🔍 Insights

- ✅ All requests succeeded, indicating **stable handling of 5 RPS**
- 🧠 CPU-bound `/operacion-compleja` took ~4× longer — as expected
- 💡 Low latency across the board: server is under low stress

---

## ▶️ How to Run Locally

Install Artillery:

```bash
npm install --save-dev artillery
```

Run the tests:

```bash
npx artillery run tests/simple_test.yml
npx artillery run tests/complex_test.yml
```

Or, send results to **Artillery Cloud** (requires key):

```bash
npx artillery run tests/simple_test.yml --record --key <your-api-key>
npx artillery run tests/complex_test.yml --record --key <your-api-key>
```

---

## 📦 Project Structure

```
src/
  index.js                # Express app
tests/
  simple_test.yml         # Load test for /operacion-simple
  complex_test.yml        # Load test for /operacion-compleja
```

---

## 🔄 Scenario: Comparing Old vs New Report Generator

### 🧓 Old Endpoint – /api/reports/generate (v1)

- Generates reports slowly
- Handles requests one by one
- No optimizations

### ⚡ New Endpoint – /api/reports/generate (v2)

Same output, but:

- Uses faster code
- Processes in batches
- Reduces wait time

### ✅ Why Compare?

To see if:

- The new version is faster
- It handles more users at once
- Nothing breaks under pressure

### 📝 Use Case:

You're replacing v1 with v2 — this test proves that the new version is actually better under real conditions.

---

## 🧭 Real-World Usage

Use these techniques to:

- Test latency after code changes
- Benchmark scaling across server instances
- Simulate spikes in traffic (e.g. product launch)
- Verify app reliability before production

Artillery can also:

- Generate HTML reports
- Export metrics to CSV/JSON
- Integrate with CI/CD pipelines
