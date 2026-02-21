import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Tentukan halaman mana yang harus login (Create Blog)
const isAdminRoute = createRouteMatcher(['/create-blog(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isAdminRoute(req)) await auth.protect(); // Kalau mau buka /create-blog, wajib login
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};