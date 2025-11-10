import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Enver - Build Your Awesome Platform',
  description: 'Digital studio offering UI/UX Design and development services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}