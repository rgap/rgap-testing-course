# Intro to Software Testing

## What is Software Testing?

Software testing is the process of evaluating and verifying that a software program or application does what it is intended to do. The goal is to identify bugs and issues before the product reaches users.

Testing can be:

- **Manual**: Done by a human clicking through the application.
- **Automated**: Performed by scripts or testing tools.

## Why Test Software?

Software is inherently complex and prone to errors. Even simple programs can produce unexpected behavior if not properly tested. Testing helps:

- Catch bugs early
- Improve code quality
- Increase user trust
- Reduce maintenance cost

## Historical Context

Before the popularization of automated testing, most software was tested manually or not tested at all. This led to many high-profile failures:

### 🚀 Ariane 5 Explosion (1996)

- Cost: \~\$370 million
- Cause: Software error in the guidance system due to unhandled exception

### 🛰 Mars Climate Orbiter (1999)

- Cost: \~\$125 million
- Cause: Metric vs. Imperial unit mismatch (integration failure)

### 💉 Therac-25 Radiation Machine (1985–87)

- Several deaths due to race condition and lack of hardware interlocks

These disasters highlighted the need for systematic testing and motivated modern practices.

## Manual vs Automated Testing

| Aspect           | Manual Testing               | Automated Testing             |
| ---------------- | ---------------------------- | ----------------------------- |
| Performed by     | Humans                       | Scripts/Tools                 |
| Repetitive tasks | Time-consuming               | Fast and consistent           |
| Best for         | Exploratory, usability tests | Regression, performance tests |
| Errors           | Prone to human error         | Less error-prone once set up  |

## Conclusion

Testing has evolved from ad-hoc methods to structured processes. Before TDD, testing was often reactive — done after code was written. TDD flipped this model by making testing the starting point.

➡️ **Next**: Understand how testing was done during the Waterfall era and its limitations.
