"""
🧪 Decision Table for Login

| Criteria / Test Case     | TC1                        | TC2                  | TC3                              | TC4                                |
|--------------------------|----------------------------|----------------------|----------------------------------|------------------------------------|
| Username                 | "admin"                    | ""                   | "hacker!"                        | "admin"                            |
| Password                 | "admin123"                 | "admin123"           | "admin123"                       | "wrongpass"                        |
| ¿Hace Login?             | ✅ login success           | ❌ username missing  | ❌ username format invalid       | ❌ incorrect password              |
| Business Rule (BR)       | BR1: valid credentials     | BR2: username needed | BR3: username must be alnum      | BR4: password must match           |
"""

import unittest

from login_utils import login


class LoginForm(unittest.TestCase):

    def test_should_login_successfully(self):
        # ✅ TC1: Valid credentials – login should succeed
        result = login("admin", "admin123")
        self.assertEqual(result["status"], "success")
        self.assertEqual(result["user"], "admin")

    def test_should_raise_error_when_username_is_missing(self):
        # ❌ TC2: Missing username – should raise ValueError
        with self.assertRaises(ValueError) as context:
            login("", "admin123")
        self.assertIn("Invalid username format", str(context.exception))

    def test_should_raise_error_for_invalid_username(self):
        # ❌ TC3: Invalid characters in username – should raise ValueError
        with self.assertRaises(ValueError) as context:
            login("hacker!", "admin123")
        self.assertIn("Invalid username format", str(context.exception))

    def test_should_raise_error_when_password_is_wrong(self):
        # ❌ TC4: Wrong password – should raise ValueError
        with self.assertRaises(ValueError) as context:
            login("admin", "wrongpass")
        self.assertIn("Incorrect password", str(context.exception))


if __name__ == '__main__':
    unittest.main()
