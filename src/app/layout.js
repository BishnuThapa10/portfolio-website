import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Bishnu Thapa",
  description: "My Portfolio",
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 `}
      >
        {children}
      </body>
    </html>
  );
}
