import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/layout/Navigation';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Music Mentorship - Learn from the Best',
  description:
    'Connect with world-class music instructors and elevate your musical journey',
  keywords: [
    'music',
    'lessons',
    'mentorship',
    'guitar',
    'piano',
    'music education',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-animated bg-pattern min-h-screen`}
      >
        <AuthProvider>
          <Navigation />
          <main className="relative">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
