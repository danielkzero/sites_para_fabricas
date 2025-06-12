import { jwtDecode } from "jwt-decode";

export default defineNuxtRouteMiddleware((to) => {
  if (!to.path.startsWith("/admin/dashboard")) return;
  if (to.path === "/admin/login") return;

  if (!process.client) return; 

  const token = localStorage.getItem("modest_token");
  if (!token) return navigateTo("/admin/login", { replace: true });

  try {
    const decoded: any = jwtDecode(token);
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < now) {
      localStorage.removeItem("modest_token");
      return navigateTo("/admin/login", { replace: true });
    }
  } catch (e) {
    localStorage.removeItem("modest_token");
    return navigateTo("/admin/login", { replace: true });
  }
});
