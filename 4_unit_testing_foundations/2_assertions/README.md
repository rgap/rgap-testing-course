## ✅ What Are Assertions?

Assertions are the core of every unit test. They check whether the code behaves as expected.

If an assertion fails, the test fails — giving immediate feedback that something is wrong.

---

## 🧪 Common Types of Assertions

### 🔷 Equality

```js
console.assert(sum(2, 3) === 5);
```

### 🔷 Boolean Conditions

```js
console.assert(isValid === true);
```

### 🔷 String/Array Inclusion

```js
console.assert("apple".includes("app"));
```

### 🔷 Throws Exception

```js
try {
  riskyFunction();
  console.assert(false, "Expected an error");
} catch (err) {
  console.assert(true);
}
```

---

## 🧠 Why Assertions Matter

- They define the _expected outcome_
- They immediately report when logic is broken
- They give confidence to refactor or add features
