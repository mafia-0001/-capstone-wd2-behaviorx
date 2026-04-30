// Save user (signup)
export const signup = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// Login check
export const login = (name, password) => {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) return { success: false, message: "No account found" };

  if (savedUser.name !== name || savedUser.password !== password) {
    return { success: false, message: "Invalid credentials" };
  }

  localStorage.setItem("loggedIn", "true");
  return { success: true };
};

// Logout
export const logout = () => {
  localStorage.removeItem("loggedIn");
};

// Check login
export const isAuthenticated = () => {
  return localStorage.getItem("loggedIn") === "true";
};