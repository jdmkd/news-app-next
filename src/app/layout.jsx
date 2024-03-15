import { Inter } from "next/font/google";
import "./globals.css";

// import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News App Next",
  description: "developed by wolf.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        {/* <Link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        {/* <Link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"/> */}
        
        {/* <Link rel="preconnect" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/> */}
        


        {/* <Script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></Script> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
