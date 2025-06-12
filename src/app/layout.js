import { ThemeModeScript } from "flowbite-react";

import "./globals.css";

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
