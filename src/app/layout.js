import { Inter } from "next/font/google";
import "./globals.css";
import Nav from '@/components/nav/Nav';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LeCrone Fine Art",
  description: "Art work gallery and information for LeCrone Fine Art",
  openGraph: {

  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
