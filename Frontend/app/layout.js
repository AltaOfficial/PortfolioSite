import localFont from "next/font/local";
import { ToastProvider } from "@/components/toast/toastComponent";
import { HamburgerMenuProvider } from "@/components/hamburger menu/HamburgerMenuComponent";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jaedon.dev",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider>
          <HamburgerMenuProvider>{children}</HamburgerMenuProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
