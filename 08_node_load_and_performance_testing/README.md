# 📊 Load Testing & Performance Testing in Node.js

## 🎯 What Is Load Testing?

**Load testing** is the process of simulating traffic or usage to an application in order to evaluate how it behaves under expected or peak conditions.

### ✅ Goals:

- Measure **response time**, **throughput**, and **resource usage**
- Detect **bottlenecks** or **memory leaks**
- Ensure **stability** and **scalability** before production

---

## 🔍 Related Types of Testing

| Type                 | Description                                                      |
| -------------------- | ---------------------------------------------------------------- |
| 🏋️ Load Testing      | Test app under normal and peak load                              |
| 🔥 Stress Testing    | Push app beyond limits to find failure point                     |
| 📈 Spike Testing     | Sudden increase in users, see how app recovers                   |
| 🕒 Soak Testing      | Run for long duration, check for memory leaks or degradation     |
| ⚖️ Benchmark Testing | Compare performance under fixed conditions (e.g. version A vs B) |

---

## 🧠 Historical Context

The idea of measuring system performance under simulated load dates back to the **1960s** and **1970s**, when batch systems and mainframes required rigorous throughput analysis.

### 🕹️ Early Tools

- **Unix `ab` (ApacheBench)**: Introduced with Apache in the 1990s. It was one of the first CLI tools to send repeated HTTP requests and measure responses.
- **`httperf` (HP Labs, 1998)**: Allowed for more complex traffic patterns and connection reuse.
- **`JMeter` (Apache)**: Launched in 2001 as a GUI-based load testing tool, it became a standard for complex web test scenarios.

These tools influenced later performance tools tailored for web applications, APIs, and microservices.

### 📈 Modern Era

With the rise of **RESTful APIs**, **microservices**, and **serverless architectures**, newer tools emerged:

| Tool         | Year | Key Characteristics                             |
| ------------ | ---- | ----------------------------------------------- |
| `wrk`        | 2012 | High-speed C tool for raw HTTP benchmarking     |
| `autocannon` | 2017 | Fast, Node-native, designed by the Fastify team |
| `artillery`  | 2016 | YAML/JS-based scripting and real-time stats     |
| `k6`         | 2017 | JavaScript scripting, DevOps-friendly, non-Node |

---

## 🧪 Why It Matters in Node.js

Node.js uses a **single-threaded event loop**, which makes it lightweight and fast — but also vulnerable to:

- Event loop blocking
- High memory usage from async tasks
- Too many concurrent requests on a CPU-bound operation

Because Node.js thrives under I/O-heavy tasks but struggles under CPU strain, **load testing is essential** to:

- identify how many concurrent users it can handle,
- detect event loop lag,
- and prevent service downtime under scale.

---

## 🧰 Tools for Node.js

| Tool         | Strengths                           | Format   |
| ------------ | ----------------------------------- | -------- |
| `artillery`  | YAML+JS configs, structured reports | YAML/CLI |
| `autocannon` | Fast, dev-friendly, low-overhead    | JS/CLI   |
| `k6`         | Scripting via JS (non-Node)         | JS/CLI   |
| `wrk`        | Extremely fast C-based load tester  | CLI      |

> We'll focus on `artillery` and `autocannon`, the two most commonly used tools in real Node.js workflows.

---

## 📁 What’s Next?

In the next folders, we’ll:

- write test scripts for `artillery` and `autocannon`,
- generate load against a sample Express server,
- and analyze real metrics like RPS, latency, and errors.
