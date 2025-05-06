import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Privacy Policy | Galaxies Discord Bot",
  description: "Privacy Policy for the Galaxies Discord Bot",
}

export default function PrivacyPage() {
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
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </div>
          </div>

          <div className="space-y-12">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">Introduction</h2>
              <div className="pl-1 space-y-4">
                <p>
                  <strong>Last Updated:</strong> 2nd June, 2024
                </p>
                <p>
                  At Galaxies, one of our main priorities is the privacy of our users' data. This Privacy Policy
                  document contains the types of information that is collected and used by Galaxies and how we use it to
                  provide service to our users.
                </p>
                <p>
                  For additional questions, do not hesitate to contact us via{" "}
                  <Link href="https://discord.gg/Gjd6U8MMrP" className="text-primary hover:underline">
                    Discord
                  </Link>
                </p>
              </div>
            </section>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">Section 1 - Consent</h2>
              <div className="pl-1">
                <p>
                  By using Galaxies (referred to as "service"), you consent to our Privacy Policy and agree to its
                  terms.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold border-b pb-2">Section 2 - Information We Collect</h2>

              <div className="space-y-8 pl-1">
                {/* Section 2.1 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-muted-foreground">Section 2.1 - Personal Information</h3>
                  <div className="pl-4">
                    <p>
                      The personal information you are asked to provide, and why you are asked to provide it, will be
                      made clear to you at the point we ask you to provide your personal information.
                    </p>
                  </div>
                </div>

                {/* Section 2.2 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-muted-foreground">
                    Section 2.2 - Personal Data and Information
                  </h3>
                  <div className="pl-4 space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Section 2.2.1 - Data Collected By Commands</h4>
                      <div className="pl-4 space-y-4">
                        <p>
                          The following items may be collected and stored when intentionally provided by a user (usually
                          through a command). This data will not be collected automatically. When providing data this
                          way, you forego any rights to the content of the data provided.
                        </p>
                        <ul className="list-disc pl-8 space-y-2">
                          <li>Server configurations</li>
                          <li>
                            Data and content for automated tasks (giveaways, blacklists, infractions, AFK, sticky
                            messages, greet)
                          </li>
                          <li>Saved references, URLs, or text (profile bios, footer)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Section 2.2.2 - Data Collected When Enabled</h4>
                      <div className="pl-4 space-y-4">
                        <p>
                          The following items may be collected and stored if the "service" is configured to perform
                          certain actions by a server administrator. These features are always opt-in, and thus the data
                          will not be collected unless the corresponding feature is enabled.
                        </p>
                        <ul className="list-disc pl-8 space-y-2">
                          <li>Channel-ids</li>
                          <li>Server-ids</li>
                          <li>
                            User-ids (including but not limited to the server members that trigger these features and
                            the enabler of these features.)
                          </li>
                          <li>Role-ids</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2.3 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-muted-foreground">Section 2.3 - Other Information</h3>
                  <div className="pl-4 space-y-4">
                    <p>
                      The following information is information that we can access via the Discord API, but do not store
                      in our Database System
                    </p>
                    <ul className="list-disc pl-8 space-y-2">
                      <li>Message content of server members</li>
                      <li>Sensitive guild member information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">Section 3 - How We Utilize Your Information</h2>
              <div className="pl-1 space-y-4">
                <p>We use the information we collect in various ways, including:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Provide, operate, and maintain the "service"</li>
                  <li>Improve, personalize, and expand our "service"</li>
                  <li>Develop new services, features, and functionality</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">Section 4 - GDPR Data Protection Rights</h2>
              <div className="pl-1 space-y-4">
                <p>
                  We would like to make sure you are fully aware of all of your data protection rights. Every user is
                  entitled to the following:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>The right to access - You have the right to request copies of your data.</li>
                  <li>
                    The right to rectification - You have the right to request that we correct any information you
                    believe is inaccurate.
                  </li>
                  <li>
                    The right to erasure - You have the right to request that we erase your data, under certain
                    conditions.
                  </li>
                  <li>
                    The right to restrict processing – You have the right to request that we restrict the processing of
                    your data, under certain conditions.
                  </li>
                  <li>
                    The right to object to processing – You have the right to object to our processing of your data,
                    under certain conditions.
                  </li>
                  <li>
                    The right to data portability – You have the right to request that we transfer the data that we have
                    collected to another organization, or directly to you, under certain conditions.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">Section 5 - Data Storage and Security</h2>
              <div className="pl-1">
                <p>
                  The security of your Personal Information and Data is important to us, but remember that no method of
                  transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to
                  use commercially acceptable means to protect your Personal Information and Data, we cannot guarantee
                  its absolute security.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">Section 6 - Effectiveness</h2>
              <div className="pl-1">
                <p>
                  This Privacy Policy is effective as of June 2nd, 2024, and will remain in effect except concerning any
                  changes in its provisions in the future, which will be in effect immediately after being changed on
                  one of the Official Releases of the "service".
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
