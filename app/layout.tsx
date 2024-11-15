import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin-ext"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl="/login"
      signInForceRedirectUrl="/"
      signUpForceRedirectUrl="/"
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${mulish.className} dark antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
