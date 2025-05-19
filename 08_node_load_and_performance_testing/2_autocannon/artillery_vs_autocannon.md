# ⚖️ Artillery vs Autocannon — Comparison for Node.js Load Testing

## 🧪 Purpose

This document compares the two most widely used load testing tools in Node.js development: **Artillery** and **Autocannon**.

---

## 🧠 Quick Summary

| Feature             | Artillery                         | Autocannon                     |
| ------------------- | --------------------------------- | ------------------------------ |
| Language            | Node.js                           | Node.js                        |
| First Released      | 2016                              | 2017                           |
| Config Format       | YAML / JS                         | JavaScript or CLI only         |
| CLI Support         | ✅ Yes                            | ✅ Yes                         |
| Programmatic Usage  | ❌ No longer officially supported | ✅ Yes                         |
| Real-Time Output    | ✅ Rich stats                     | ✅ Streamed CLI stats          |
| Use Case Fit        | Full test scenarios, config-heavy | Fast benchmarking, dev testing |
| Output              | JSON + HTML reports               | JSON + console summary         |
| Overhead            | Medium                            | Very low                       |
| Protocols Supported | HTTP, WebSocket, Socket.io        | HTTP only                      |

---

## 🧰 When to Use Artillery

- You need to simulate real-world flows with multiple steps
- You prefer a declarative YAML format
- You want HTML reports or save JSON stats to disk
- You're testing protocols beyond HTTP (e.g., WebSockets)

---

## ⚡ When to Use Autocannon

- You need **quick performance feedback**
- You want to integrate load tests into Node.js scripts
- You’re benchmarking APIs during development
- You need very **low overhead** and high concurrency

---

## 🧪 Other Tools for Context

| Tool     | Notable For                                   |
| -------- | --------------------------------------------- |
| `k6`     | DevOps-style scripting, CLI/CI-friendly       |
| `wrk`    | Raw HTTP speed, C-based, very high throughput |
| `JMeter` | GUI-based, supports multiple protocols        |

---

## 📌 Conclusion

If you're writing repeatable, scenario-based test plans: **Artillery** is excellent.

If you're benchmarking endpoints in development or CI: **Autocannon** is faster, simpler, and more flexible in code.
