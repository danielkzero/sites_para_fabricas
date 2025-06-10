import { jwtDecode } from "jwt-decode";

export default defineNuxtRouteMiddleware((to) => {
  if (!to.path.startsWith("/admin/dashboard")) return;
  if (to.path === "/admin/login") return;

  if (!process.client) return; // Evita erro em SSR

  const token = localStorage.getItem("modest_token");
  if (!token) return navigateTo("/admin/login");

  try {
    const decoded: any = jwtDecode(token);
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < now) {
      localStorage.removeItem("modest_token");
      return navigateTo("/admin/login");
    }
  } catch (e) {
    localStorage.removeItem("modest_token");
    return navigateTo("/admin/login");
  }
});
