import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ananda Aqeel Fathur Rahman | Full-Stack Developer & Project Manager',
  description:
    'Portfolio of Ananda Aqeel Fathur Rahman, an Information Systems undergraduate building full-stack web systems and coordinating software delivery.',
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
