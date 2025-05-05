import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedBackground } from "@/components/animated-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Galaxies Discord App",
  description:
    "A powerful utility app to manage your Discord server with advanced features like giveaways, welcome systems, sticky messages, moderation tools, and more!",
  keywords: ["discord app", "discord utility", "moderation app", "alt detector", "welcome app", "sticky messages"],
  authors: [{ name: "Galaxies Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://galaxies-tech.vercel.app",
    title: "Galaxies Discord App",
    description: "A powerful utility app to manage your Discord server",
    siteName: "Galaxies App",
    images: [
      {
        url: "https://images-ext-1.discordapp.net/external/ilZeQH42X5HhsLfCyYeg3DWxE9Q3j_wUCLrM7mzKgmw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/814441758037377045/f335ed9c5c2df7712f30423806396d54.png",
        width: 1200,
        height: 630,
        alt: "Galaxies Discord App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxies Discord App",
    description: "A powerful utility app to manage your Discord server",
    images: [
      "https://images-ext-1.discordapp.net/external/ilZeQH42X5HhsLfCyYeg3DWxE9Q3j_wUCLrM7mzKgmw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/814441758037377045/f335ed9c5c2df7712f30423806396d54.png",
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
