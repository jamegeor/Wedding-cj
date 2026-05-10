import "./globals.css";

export const metadata = {
  title: "Carol & James",
  description: "Wedding Invitation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
