import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Bishnu Thapa",
  description: "My Portfolio",
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.variable}
      >
        {children}
      </body>
    </html>
  );
}
