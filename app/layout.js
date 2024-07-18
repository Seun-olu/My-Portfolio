import { Inter } from "next/font/google";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Oluwaseun Olugbewesa</title>
        <link rel="shortcut icon" href="/static/logo.png" />
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}