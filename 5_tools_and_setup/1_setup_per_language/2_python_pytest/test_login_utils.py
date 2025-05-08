"""
Decision Table for Login

| Criteria / Test Case     | TC1                        | TC2                  | TC3                              | TC4                                |
|--------------------------|----------------------------|----------------------|----------------------------------|------------------------------------|
| Username                 | "admin"                    | ""                   | "hacker!"                        | "admin"                            |
| Password                 | "admin123"                 | "admin123"           | "admin123"                       | "wrongpass"                        |
| ¿Hace Login?             | login success              | username missing     | username format invalid          | incorrect password                 |
| Business Rule (BR)       | BR1: valid credentials     | BR2: username needed | BR3: username must be alnum      | BR4: password must match           |
"""

import pytest
from login_utils import login


def test_TC1_valid_login():
    # Test Case 1 – valid login
    result = login("admin", "admin123")
    assert result["status"] == "success"
    assert result["user"] == "admin"


def test_TC2_username_missing():
    # Test Case 2 – username is empty
    with pytest.raises(ValueError, match="Invalid username format"):
        login("", "admin123")


def test_TC3_username_invalid_format():
    # Test Case 3 – username has invalid characters
    with pytest.raises(ValueError, match="Invalid username format"):
        login("hacker!", "admin123")


def test_TC4_wrong_password():
    # Test Case 4 – password is incorrect
    with pytest.raises(ValueError, match="Incorrect password"):
        login("admin", "wrongpass")
