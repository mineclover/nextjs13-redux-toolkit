// import "./globals.css";
import { Providers } from '@/redux/provider'
import Nav from '@/components/Nav/Nav'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
