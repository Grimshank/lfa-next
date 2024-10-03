import { Inter } from "next/font/google";
import Nav from '@/components/nav/Nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { CSPostHogProvider } from '@/app/providers';

import './globals.css';

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
      <CSPostHogProvider>
        <Nav/>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </CSPostHogProvider>
    </body>
    </html>
)
  ;
}
