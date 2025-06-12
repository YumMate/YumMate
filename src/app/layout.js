import { ThemeModeScript } from "flowbite-react";

import "./globals.css";
import Footer from "./components/Footer";
import Nav from "./components/NavBar";
import Card from "./components/Card";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
        <title>My App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
