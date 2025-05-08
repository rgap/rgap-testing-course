## 📑 Tests as Living Documentation

Tests not only verify correctness — they **explain how the system is expected to behave**. When written clearly, they double as examples and documentation for developers.

---

## 🧪 Example in this folder

The test:

```js
formatPrice(5); // should return "$5.00"
```

...implies the function must:

- Accept a number as input
- Format it to 2 decimal places
- Prefix it with a dollar sign

You understand what `formatPrice()` does _without reading the implementation_.

---

## 🧠 Benefits

- Easy onboarding for new developers
- Encourages consistent usage and formatting
- Tests evolve along with the system

---

## ✏️ Best Practices

- Write tests with descriptive names
- Avoid cryptic inputs/outputs
- Include edge cases as examples
