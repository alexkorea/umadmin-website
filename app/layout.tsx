import type { Metadata } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

const notoSerifKr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-kr',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '드림파트너스 행정사 사무소 | 신뢰와 전문성의 행정 파트너',
  description: '비영리법인설립, 농업법인설립, 투자(D-8), 취업(E-7), 영주권(F-5), 재외동포(F-4), 행정심판, 부동산, 인허가 전문. 드림파트너스 행정사 사무소가 복잡한 행정 업무를 명쾌하게 해결해 드립니다.',
  keywords: ['행정사', '비자', '인허가', '비영리법인설립', '농업법인설립', '서울 행정사', '행정심판', '영주권', '재외동포'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: '드림파트너스 행정사 사무소 | 신뢰와 전문성의 행정 파트너',
    description: '비영리법인설립, 농업법인설립, 투자(D-8), 취업(E-7), 영주권(F-5), 재외동포(F-4), 행정심판, 부동산, 인허가 전문. 드림파트너스 행정사 사무소가 복잡한 행정 업무를 명쾌하게 해결해 드립니다.',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${notoSerifKr.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
