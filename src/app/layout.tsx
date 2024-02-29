import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css"

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
      <body className={inter.className}>
      <StyledComponentsRegistry>
        <main>
          <NavBar />
          <div className="min-h-screen basis-full overflow-scroll flex flex-start">
            {children}
          </div>
         <Footer/>
        </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
