# Login Form Typo Example

This folder illustrates a classic bug in web development: form field typos.

## 🐞 Bug Description

A login form might reference `userame` instead of `username`, causing login attempts to silently fail because the field name doesn't match.

### Bug Behavior:

```javascript
const form = { userame: "admin", password: "123" };
login(form); // ❌ fails because 'username' is missing
```

## ✅ Fix Strategy

Ensure all field names in the form match what the code expects.

### Fixed Behavior:

```javascript
const form = { username: "admin", password: "123" };
login(form); // ✅ works
```

## 🔎 Manual Test Cases (No libraries)

We manually define test objects with and without proper fields, and log the expected vs actual output.

## 📁 Folder Structure

```
login_form_typo/
├── buggy_version/
│   └── login_form_typo.js
├── fixed_version/
│   └── login_form_typo_fixed.js
└── manual_test/
    └── test_login_form_typo_fixed.js
```

Each script runs standalone in a browser or Node environment for educational clarity.
