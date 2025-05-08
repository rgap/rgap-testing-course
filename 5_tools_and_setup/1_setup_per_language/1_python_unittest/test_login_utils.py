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


class TestLoginDecisionTable(unittest.TestCase):

    def test_TC1_valid_login(self):
        # ✅ Test Case 1 (Happy Path) – login succeeds with correct credentials
        result = login("admin", "admin123")
        self.assertEqual(result["status"], "success")
        self.assertEqual(result["user"], "admin")

    def test_TC2_username_missing(self):
        # ❌ Test Case 2 – username is empty
        with self.assertRaises(ValueError) as context:
            login("", "admin123")
        self.assertIn("Invalid username format", str(context.exception))

    def test_TC3_username_invalid_format(self):
        # ❌ Test Case 3 – username has invalid characters
        with self.assertRaises(ValueError) as context:
            login("hacker!", "admin123")
        self.assertIn("Invalid username format", str(context.exception))

    def test_TC4_wrong_password(self):
        # ❌ Test Case 4 – password is incorrect
        with self.assertRaises(ValueError) as context:
            login("admin", "wrongpass")
        self.assertIn("Incorrect password", str(context.exception))


if __name__ == '__main__':
    unittest.main()
