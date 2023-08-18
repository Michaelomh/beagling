import { Navbar } from "@/components/pages/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AppSettingsProvider } from "@/components/pages/AppSettings"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Beagling",
  description: "Track your habits with Beagling!",
  authors: { name: "Michael Ong", url: "http://datayse.com" },
  keywords: ["tracker", "habit forming", "tracking", "habits", "personal development", "improvement"],
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-icon.png",
    },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  appleWebApp: {
    capable: true,
    title: "My Website",
    statusBarStyle: "black-translucent",
  },
  creator: "Michael Ong",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AppSettingsProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </AppSettingsProvider>
    </html>
  )
}
