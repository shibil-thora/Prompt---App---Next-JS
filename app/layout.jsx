import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

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
  title: "Promptopia",
  description: "Discover & Share AI Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="main">
            <div className="gradient" />
        </div> 

        <main className="app">
          <Nav />
        {children}
        </main>

        
      </body>
    </html>
  );
}
