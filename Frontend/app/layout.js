import localFont from "next/font/local";
import { ToastProvider } from "@/components/toast/toastComponent";
import { HamburgerMenuProvider } from "@/components/hamburger menu/HamburgerMenuComponent";
import "./globals.css";

export const metadata = {
  title: "Jaedon.dev",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <HamburgerMenuProvider>{children}</HamburgerMenuProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
