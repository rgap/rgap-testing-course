"""
🧪 Decision Table for Login

| Criteria / Test Case     | TC1                        | TC2                  | TC3                              | TC4                                |
|--------------------------|----------------------------|----------------------|----------------------------------|------------------------------------|
| Username                 | "admin"                    | ""                   | "hacker!"                        | "admin"                            |
| Password                 | "admin123"                 | "admin123"           | "admin123"                       | "wrongpass"                        |
| ¿Hace Login?             | ✅ login success           | ❌ username missing  | ❌ username format invalid       | ❌ incorrect password              |
| Business Rule (BR)       | BR1: valid credentials     | BR2: username needed | BR3: username must be alnum      | BR4: password must match           |
"""

import pytest
from login_utils import login


def test_should_login_successfully_with_valid_credentials():
    # ✅ TC1 – BR1: Valid credentials allow login
    result = login("admin", "admin123")
    assert result["status"] == "success"
    assert result["user"] == "admin"


def test_should_raise_error_when_username_is_missing():
    # ❌ TC2 – BR2: Username is required
    with pytest.raises(ValueError, match="Invalid username format"):
        login("", "admin123")


def test_should_raise_error_for_invalid_username_format():
    # ❌ TC3 – BR3: Username must be alphanumeric
    with pytest.raises(ValueError, match="Invalid username format"):
        login("hacker!", "admin123")


def test_should_raise_error_when_password_is_incorrect():
    # ❌ TC4 – BR4: Password must match
    with pytest.raises(ValueError, match="Incorrect password"):
        login("admin", "wrongpass")
