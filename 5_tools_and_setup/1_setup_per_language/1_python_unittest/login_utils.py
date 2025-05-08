USER_DATABASE = [
    {"username": "admin", "password": "admin123"}
]


def is_valid_username_format(username):
    return isinstance(
        username,
        str) and username.isalnum() and len(username) >= 3


def is_valid_password_format(password):
    return isinstance(password, str)


def find_user(username):
    for user in USER_DATABASE:
        if user["username"].lower() == username.lower():
            return user
    return None


# This represents the login function that checks if the username and
# password are valid. It raises exceptions or returns a success message.


def login(username, password):
    if not is_valid_username_format(username):
        raise ValueError("Invalid username format")

    if not is_valid_password_format(password):
        raise ValueError("Invalid password format")

    user = find_user(username)
    if not user:
        raise ValueError("User not found")

    if user["password"] != password:
        raise ValueError("Incorrect password")

    return {"status": "success", "user": user["username"]}
