
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Umme Ayman Atika Khatun | Full Stack Web Developer",
  description:
    "Explore the portfolio of Umme Ayman Atika Khatun, a Full Stack Web Developer skilled in React, Next.js, JavaScript, TypeScript, Node.js, and MongoDB.",
  keywords: [
    "Umme Ayman Atika Khatun",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Umme Ayman Atika Khatun" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
