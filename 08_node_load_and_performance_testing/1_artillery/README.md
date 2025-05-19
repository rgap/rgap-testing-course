# 🧨 Load Testing with Artillery

## 🎯 Goal

Use [Artillery](https://artillery.io/) to simulate HTTP load against an API or service using a human-readable YAML file.

---

## 🧠 About Artillery

- Introduced around **2016**
- Built for **high-level scenario simulation**
- Written in Node.js, works well in JS-based environments
- Output includes **requests per second (RPS)**, **latency**, **status codes**, etc.
- Can be extended with custom JS functions
- ⚠️ **Note**: Artillery is a **CLI tool** and is **not meant to be used as a Node.js module**. You should use it through the terminal (`npx` or `artillery`), not via `require()`.

---

## 📦 Installation

```bash
npm install -g artillery
```

> You can also install locally (`npm install artillery`) and use `npx artillery`.

---

## 📁 File Overview

| File              | Purpose                            |
| ----------------- | ---------------------------------- |
| `simple_test.yml` | Declares a basic HTTP GET scenario |

---

## ▶️ Run the Test

```bash
npx artillery run simple_test.yml
```

This will simulate 10 requests per second for 10 seconds against your local server.

---

## 📈 Output Sample

You'll get a report with:

- Latency statistics
- Status code breakdown
- Request rate
