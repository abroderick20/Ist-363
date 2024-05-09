import "../sass/globals.css";

export const metadata = {
  title: "IST 363 Spotify",
  description: "A marketing page for spotify spotlighting 10 artists of 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
