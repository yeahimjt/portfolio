import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Trevino - Portfolio",
  description:
    "Welcome to my portfolio! I'm Jonathan Trevino, a frontend developer with a passion for creating engaging web experiences. Explore my projects and discover how I combine creativity and technical skill to bring ideas to life. From innovative designs to seamless user interfaces, my portfolio showcases the diverse range of projects I've worked on. Join me on a journey through the world of software engineering and frontend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
