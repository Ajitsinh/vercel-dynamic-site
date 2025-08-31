import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'My Media Site',
  description: 'Home, songs, photos, and videos — dynamic on Vercel.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
