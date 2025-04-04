import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Providers } from "@/components/providers"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "InfluenceIQ - YouTube Creator Influence Analysis",
  description: "Analyze YouTube creators based on credibility, influence, and engagement",
  generator: 'Sankalpa & Sahnik'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <header className="border-b">
              <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                <div className="bg-black p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl ml-2">InfluenceIQ</span>
                </Link>
                <nav className="hidden md:flex items-center gap-4">
                  <Link href="/">
                    <Button variant="ghost" className="hover:bg-gray-100 text-black hover:text-black">Home</Button>
                  </Link>
                  <Link href="/analyze">
                    <Button variant="ghost" className="hover:bg-gray-100 text-black hover:text-black">Analyzer</Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="ghost" className="hover:bg-gray-100 text-black hover:text-black">Dashboard</Button>
                  </Link>
                  <Link href="/top-creators">
                    <Button variant="ghost" className="hover:bg-gray-100 text-black hover:text-black">Top Creators</Button>
                  </Link>
                </nav>
                <MobileNav />
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 bg-gray-50">
              <div className="container mx-auto px-4 text-center text-sm text-gray-600">
                <p>InfluenceIQ - YouTube Creator Influence Analysis</p>
                <p className="mt-1">Built with Next.js and Firebase</p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}