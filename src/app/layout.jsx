

import Header from "../components/Header/Header";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import { Sen } from "next/font/google";

const Font = Poppins({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "3Legant",
  description: "Online Ecommerce platform for your funiture needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://kit.fontawesome.com/5ed107220d.js"></script>
      </head>

      <body className={Font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
