import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {Toaster} from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <GoogleOAuthProvider clientId="786323574832-gevus1bus9v1qe816ce478q2fgjiopae.apps.googleusercontent.com">
        <body className={inter.className}>{children}
          <div>
            <Toaster/>
          </div>
        </body>
        
      </GoogleOAuthProvider>
    </html>
  );
}
