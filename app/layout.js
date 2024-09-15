import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Zaen Blog",
  description: "Static blog built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="font-[family-name:var(--font-geist-sans)]">
          <h1 className="text-3xl font-bold text-center pt-8 pb-10">
            Zaen Blog
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
