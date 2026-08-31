import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: '徐建华 | Jianhua Xu',
  description: '徐建华的学术个人主页：复杂网络上的演化博弈、世界模型与 AI+教育。',
  openGraph: {
    title: '徐建华 | Jianhua Xu',
    description: '用数学理解智能，也用实践检验想法。',
    images: [{ url: '/og-jianhua.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '徐建华 | Jianhua Xu',
    description: '用数学理解智能，也用实践检验想法。',
    images: ['/og-jianhua.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
