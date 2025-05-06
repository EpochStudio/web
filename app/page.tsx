import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MessageSquare, Shield, Users, Zap } from "lucide-react"
import TeamSection from "@/components/team-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InteractiveImageGallery } from "@/components/interactive-image-gallery"
import { SiteHeader } from "@/components/site-header"

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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 section-animate">
          <div className="container px-6 sm:px-8 md:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
                  <span className="text-primary">Galaxies</span>. The Ultimate Discord App.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-lg">
                  Simplify server management and boost engagement with a single, powerful tool.
                  </p>
                  <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground md:text-lg">Comprehensive moderation tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground md:text-lg">Customizable welcome messages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground md:text-lg">Automated giveaways to engage your community</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground md:text-lg">Advanced alt account detection for security</span>
                  </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="https://discord.com/oauth2/authorize?client_id=814441758037377045&permissions=8589934591&scope=bot%20applications.commands">
                      Invite App
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="https://discord.gg/Gjd6U8MMrP">Join Support Server</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative h-[400px] w-full">
                <InteractiveImageGallery />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-muted/50 section-animate">
          <div className="container px-6 sm:px-8 md:px-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Zap className="mr-1 h-3 w-3" />
                  Powerful Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Galaxies comes packed with all the tools you need to manage and enhance your Discord server
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card className="bg-background/60 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Alt Detector</CardTitle>
                  <CardDescription>Protect your server from alt accounts automatically</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Setup Alt Detector to help you get rid of alts by notifying you or taking actions automatically!
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Greeting System</CardTitle>
                  <CardDescription>Welcome new members in style</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Set up custom greet messages on your server with our advanced Greet System to make your users feel
                    welcomed!
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <MessageSquare className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Sticky Messages</CardTitle>
                  <CardDescription>Keep important information visible</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Got important messages that pinning just won't cut it? Set up sticky messages in your channels
                    today!
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild variant="outline">
                <Link href="/commands">View All Commands</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Alt Detector Section */}
        <section className="w-full py-12 md:py-24 section-animate">
          <div className="container px-6 sm:px-8 md:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    <Shield className="mr-1 h-3 w-3" />
                    Security
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Alt Detector</h2>
                  <p className="text-muted-foreground">
                    Keep your server safe from alt accounts with our powerful detection system
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Setup the age of accounts you want to get kicked",
                    "Make the app DM kicked users to explain why",
                    "Get notified when an alt joins",
                    "Create a whitelist for your friends to bypass requirements",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mx-auto lg:mx-0 overflow-hidden rounded-xl border bg-background shadow-lg">
                <div className="aspect-video relative w-full h-full">
                  <Image
                    src="https://i.imgur.com/j9xgpjD.png"
                    alt="ALT Detector Feature"
                    width={600}
                    height={400}
                    className="object-cover object-center w-full h-full"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Greet Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50 section-animate">
          <div className="container px-6 sm:px-8 md:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:mx-0 order-2 lg:order-1 overflow-hidden rounded-xl border bg-background shadow-lg">
                <div className="aspect-video relative w-full h-full">
                  <Image
                    src="https://i.imgur.com/gvzS62F.png"
                    alt="Greet Feature"
                    width={600}
                    height={400}
                    className="object-cover object-center w-full h-full"
                    unoptimized
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    <Users className="mr-1 h-3 w-3" />
                    Community
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Greet System</h2>
                  <p className="text-muted-foreground">
                    Make new members feel welcome with customizable greeting messages
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Setup app to ping someone when they join",
                    "Make the message delete after a few seconds",
                    "Set a custom message for app to send",
                    "Enable the welcome banner to spice up your greet message!",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Section */}
        <section id="premium" className="w-full py-12 md:py-24 section-animate">
          <div className="container px-6 sm:px-8 md:px-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Zap className="mr-1 h-3 w-3" />
                  Premium
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Upgrade Your Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Get access to exclusive features and priority support with Galaxies Premium
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-8">
              <Card className="bg-gradient-to-br from-primary/20 via-background to-background backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Premium Services</CardTitle>
                  <CardDescription>Coming back in Q2, 2025</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-4">
                    We're currently working actively behind the scenes to improve our Premium Services!
                  </p>
                  <p className="mb-6">
                    To purchase premium for the app, you can contact us on our Discord server or purchase directly on
                    Discord, which will be supported in the near future.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="https://discord.gg/Gjd6U8MMrP">Join Discord Server</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 bg-muted/50 section-animate">
          <div className="container px-6 sm:px-8 md:px-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Users className="mr-1 h-3 w-3" />
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Meet our Development Team!{" "}
                  <Link href="/team" className="text-primary font-medium hover:underline">
                    Check out full team here
                  </Link>
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-8">
              <TeamSection />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 section-animate">
          <div className="container px-6 sm:px-8 md:px-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Add Galaxies to your Discord server today and experience the difference
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="https://discord.com/oauth2/authorize?client_id=814441758037377045&permissions=8589934591&scope=app%20applications.commands">
                    Invite App
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://discord.gg/Gjd6U8MMrP">Join Support Server</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container px-6 sm:px-8 md:px-10 flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Galaxies App. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://discord.gg/Gjd6U8MMrP" className="text-sm text-muted-foreground hover:text-primary">
              Discord
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="https://github.com/EpochStudio/web" className="text-sm text-muted-foreground hover:text-primary">
              Github
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
