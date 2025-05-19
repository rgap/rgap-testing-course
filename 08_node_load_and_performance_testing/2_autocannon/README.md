# ⚡ 03 — Load Testing with Autocannon

## 🎯 Goal

Use [`autocannon`](https://github.com/mcollina/autocannon) to quickly benchmark HTTP APIs and measure throughput, latency, and performance.

---

## 🧠 What Is Autocannon?

- Created by **Matteo Collina** (also author of Fastify) in **2017**
- Meant to be the `wrk` of Node.js — fast, low-overhead, and dev-friendly
- Built entirely in Node.js
- Supports CLI usage **and** programmatic use via code

---

## 💡 Why Use It?

| Feature           | Description                              |
| ----------------- | ---------------------------------------- |
| Blazing fast      | Similar to `wrk` in performance          |
| Dev-friendly      | Easy to integrate into scripts or tests  |
| Programmatic API  | Use directly in Node.js code             |
| Real-time stats   | CLI prints live RPS, latency, and errors |
| Native to Node.js | No C compilation or system dependencies  |

---

## 📦 Installation

```bash
npm install -g autocannon
```

Or locally for use in code:

```bash
npm install autocannon
```

---

## ▶️ Run from CLI

```bash
autocannon -c 10 -d 10 http://localhost:3000
```

- `-c 10` → 10 concurrent connections
- `-d 10` → run for 10 seconds

---

## ▶️ Run Programmatically

```bash
node run_autocannon.js
```

The script runs the same test using JavaScript instead of the CLI.
