export const isAdminAuthenticated = () => {
  return localStorage.getItem("adminAuth") === "true";
};

export const logoutAdmin = () => {
  localStorage.removeItem("adminAuth");
};
