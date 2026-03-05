import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UK Policy Matcher — Find Your Party',
  description:
    'Find out which UK political party truly matches your views. Answer questions across the NHS, immigration, education, tax, and housing. Anonymous, source-backed, and free.',
  keywords: 'UK politics, vote match, policy matcher, Conservative, Labour, Liberal Democrats, Reform UK, Green Party',
  openGraph: {
    title: 'UK Policy Matcher',
    description: 'Which UK party best reflects your values? Find out in 5 minutes.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased min-h-screen`}>{children}</body>
    </html>
  );
}
