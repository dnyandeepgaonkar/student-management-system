function login(user) {
    if (user.type === "student") {
        return "Student Dashboard";
    }
    return "Unauthorized";
}

module.exports = login;
