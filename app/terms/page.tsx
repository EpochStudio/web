import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Terms of Service | Galaxies Discord Bot",
  description: "Terms of Service for the Galaxies Discord Bot",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="container max-w-4xl px-6 sm:px-8 md:px-10">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <Button variant="outline" size="icon" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back to home</span>
                </Link>
              </Button>
              <h1 className="text-3xl font-bold">Terms of Service</h1>
            </div>

            <div className="text-muted-foreground text-lg mb-8">
              <p>
                Thank you for choosing Galaxies as your Server Utility Discord bot. By using Galaxies (hereafter
                referred to as the "Service"), you agree to the following Terms. If you disagree with any of these
                Terms, you are prohibited from using the Service.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">Section 1 - General Terms</h2>
              <div className="space-y-4 pl-1">
                <p>
                  By using the Service, you explicitly agree to abide by{" "}
                  <Link href="https://discord.com/terms" className="text-primary hover:underline">
                    Discord's Terms of Service
                  </Link>
                  . You acknowledge that your account may be suspended from using the Service if you violate Discord's
                  Terms of Service in any way.
                </p>
                <p>
                  We prohibit Service users, as well as any associated guilds (servers), threads, or forums, from
                  promoting the violation of these Terms or Discord's Terms of Service. Any violations will be addressed
                  accordingly, up to and including suspension from the Service.
                </p>
                <p>
                  If we do not immediately act on a violation, it does not imply waiver of our legal rights. If any part
                  of these Terms is deemed invalid or unenforceable by a court or competent authority, the remainder of
                  the Terms will remain in effect.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold border-b pb-2">Section 2 - Service Guidelines and Restrictions</h2>

              <div className="space-y-8 pl-1">
                {/* Section 2.1 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-muted-foreground">Section 2.1 - Content Posting</h3>
                  <div className="pl-4 space-y-4">
                    <p>
                      The Service allows you to post, link, store, and make available certain information, text, or material
                      ("Content"). You are solely responsible for the Content you share, and the Service provider assumes no
                      responsibility for this information. However, we reserve the right to take action against your Content
                      or revoke your access to the Service if it includes, but is not limited to:
                    </p>
                    <ul className="list-disc pl-8 space-y-2">
                      <li>Harassment</li>
                      <li>NSFW (Not Safe For Work) content</li>
                      <li>Threats of any kind</li>
                      <li>Links to malicious content</li>
                      <li>Political discussions</li>
                      <li>Violations of Discord's Terms of Service</li>
                    </ul>
                  </div>
                </div>

                {/* Section 2.2 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-muted-foreground">Section 2.2 - Prohibited Usage</h3>
                  <div className="pl-4">
                    <p>
                      Using the Service to directly or indirectly affect other users' experience is strictly prohibited.
                      This includes exploiting any bugs or vulnerabilities in the Service. Violations may result in
                      suspension from the Service, with the severity of the action determined by the nature of the offense.
                    </p>
                  </div>
                </div>

                {/* Section 2.3 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-muted-foreground">Section 2.3 - Galaxies Badges</h3>
                  <div className="pl-4">
                    <p>
                      We offer collectible "Galaxies Badges" to recognize contributors to the Service. Badge holders are
                      prohibited from selling these badges to other users for any material or digital goods. Violations may
                      result in badge removal and/or Service suspension for both the seller and the recipient.
                    </p>
                  </div>
                </div>

                {/* Section 2.4 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-muted-foreground">Section 2.4 - Subscription Services</h3>
                  <div className="pl-4 space-y-6">
                    <p>
                      Guilds may purchase Subscription Services to access additional features. These services are subject to
                      the following conditions:
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">2.4.1 - Refund Policy</h4>
                      <p className="pl-4">
                        We are not capable of managing refunds as all payments are processed
                        by Discord, Inc.
                        Please open a ticket at{" "}
                        <Link href="https://support.discord.com" className="text-primary hover:underline">
                          Discord Support
                        </Link>{" "}
                        to issue a refund.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">2.4.2 - Trial Policy</h4>
                      <p className="pl-4">
                        Guilds are eligible for a one-time, 14-day Trial Period of Subscription Services. This offer cannot be
                        extended or repeated. Guild owner must contact the Head Developer for
                        information about this trial offer.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">2.4.3 - Third-Party Sellers</h4>
                      <p className="pl-4">
                        Unauthorized third-party sales of our Subscription Services are prohibited. Violators will be banned
                        from purchasing Subscription Services.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">2.4.4 - Subscription Removal</h4>
                      <p className="pl-4">
                        We reserve the right to remove Subscription Services without refund from guilds violating these Terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">Section 3 - Modifications</h2>
              <div className="pl-1">
                <p>
                  We reserve the right to modify these Terms at any time. For material changes, we will attempt to
                  provide 7 days' notice. Your continued use of the Service after modifications constitutes acceptance
                  of the new Terms.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">Section 4 - Privacy Policy</h2>
              <div className="pl-1">
                <p>
                  Our Privacy Policy is available{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    here
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">Section 5 - Suspension</h2>
              <div className="pl-1 space-y-4">
                <p>
                  Violations of these Terms may result in warnings or immediate suspension from the Service. In cases of
                  repeated misconduct, we may permanently revoke your right to appeal suspensions.
                </p>
                <p>
                  While you have the right to appeal a suspension (unless explicitly stated otherwise), approval is not
                  guaranteed. Access to certain features may be permanently restricted based on prior violations.
                </p>
                <p>
                  This document is effective as of July 12th, 2024, and will remain in effect until replaced by a future
                  version. Any changes to these Terms will be effective immediately upon posting of the revised Terms on
                  the Official Releases of the Service.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container px-6 sm:px-8 md:px-10 flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Galaxies Bot. All rights reserved.
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
