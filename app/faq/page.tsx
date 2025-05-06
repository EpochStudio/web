"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"

// FAQ data structure
const faqs = {
  general: [
    {
      question: "What is Galaxies App?",
      answer:
        "Galaxies is a powerful utility app for Discord that helps you manage your server with features like giveaways, welcome systems, sticky messages, moderation tools, and more!",
    },
    {
      question: "How do I add Galaxies to my server?",
      answer:
        "You can add Galaxies to your server by clicking the 'Invite App' button on our website, or by using the direct invite link: https://discord.com/oauth2/authorize?client_id=814441758037377045&permissions=8589934591&scope=app%20applications.commands",
    },
    {
      question: "Is Galaxies free to use?",
      answer:
        "Yes, Galaxies is free to use with a generous set of features. We also offer a Premium tier with additional features and benefits for those who want to support the development of the app.",
    },
    {
      question: "How do I get help with Galaxies?",
      answer:
        "You can join our support server at https://discord.gg/Gjd6U8MMrP for help with any issues or questions you may have. You can also use the /help command in your server to see a list of commands and their usage.",
    },
  ],
  commands: [
    {
      question: "How do I use Galaxies commands?",
      answer:
        "Galaxies uses Discord's slash command system. Simply type / in your Discord chat and select a command from the Galaxies category. You can also check our Commands page for a full list of available commands.",
    },
    {
      question: "Why aren't slash commands showing up?",
      answer:
        "If slash commands aren't showing up, make sure the app has the 'applications.commands' scope. You may need to reinvite the app with the correct permissions. Also, ensure you have the necessary permissions in the server to use the commands.",
    },
    {
      question: "Can I customize command permissions?",
      answer:
        "Yes, you can customize which roles can use specific commands using Discord's built-in integration settings. Go to Server Settings > Integrations > Galaxies and adjust the command permissions as needed.",
    },
    {
      question: "How do I disable certain commands?",
      answer:
        "You can disable specific commands or entire categories using the /commands disable [command] or /categories disable [category] commands. Only server administrators can use these commands.",
    },
  ],
  features: [
    {
      question: "How does the ALT Detector work?",
      answer:
        "The ALT Detector identifies potential alternative accounts by checking the account age. You can configure it to notify moderators or automatically take action when an alt account joins. Use /alt setup to configure this feature.",
    },
    {
      question: "How do I set up welcome messages?",
      answer:
        "You can set up welcome messages using the /greet setup welcome [channel] command. This allows you to configure a custom message, whether to ping the user, and if the message should be deleted after a certain time.",
    },
    {
      question: "What are sticky messages and how do I use them?",
      answer:
        "Sticky messages are messages that stay at the bottom of a channel, even as new messages are sent. They're useful for important information or rules that you want users to always see. Use the /stickymsg add [channel] command to set up a sticky message in a specific channel.",
    },
    {
      question: "How do I set up reaction roles?",
      answer:
        "Reaction roles allow users to assign themselves roles by reacting to a message. Use the /reactionrole add [message-id] [emoji] [role] command to set up reaction roles in your server.",
    },
    {
      question: "How does the leveling system work?",
      answer:
        "The leveling system rewards active members with XP for chatting in your server. You can set up role rewards for reaching certain levels using the /reward add [level] [role] command. Use /level-settings to configure the system.",
    },
  ],
  premium: [
    {
      question: "What is Galaxies Premium?",
      answer:
        "Galaxies Premium offers additional features and benefits for servers that want to support the development of the app. Premium features include higher limits, exclusive commands, and priority support.",
    },
    {
      question: "How much does Premium cost?",
      answer:
        "Premium pricing will be available when the service returns on 2025 Q2. You can contact us on our Discord server for more information or check our website for updates.",
    },
    {
      question: "How do I purchase Premium?",
      answer:
        "When Premium returns on 2025 Q2, you'll be able to purchase it through our Discord server or directly on our Patreon. Join our Discord server for the latest updates.",
    },
    {
      question: "Can I transfer Premium between servers?",
      answer:
        "Yes, Premium can be transferred between servers that you own. Contact our support team in the Discord server for assistance with transferring Premium.",
    },
  ],
  troubleshooting: [
    {
      question: "The app isn't responding to commands",
      answer:
        "If the app isn't responding to commands, check that it has the necessary permissions in your server. You can also try using the /debug command to check for any permission issues. If problems persist, join our support server for assistance.",
    },
    {
      question: "How do I report a bug?",
      answer:
        "You can report bugs by joining our support server at https://discord.gg/Gjd6U8MMrP and opening a ticket in the appropriate channel. Please provide as much detail as possible, including steps to reproduce the issue.",
    },
    {
      question: "The app went offline, what should I do?",
      answer:
        "If the app appears to be offline, it may be experiencing temporary issues or undergoing maintenance. Check our support server for any announcements. The app should automatically reconnect when the issue is resolved.",
    },
    {
      question: "I found a security vulnerability, how do I report it?",
      answer:
        "If you've found a security vulnerability, please report it privately to our team via Discord DM to one of the developers or by emailing us. Please do not disclose security vulnerabilities publicly.",
    },
  ],
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("general")
  const [searchResults, setSearchResults] = useState<
    {
      category: string
      faqs: Array<{
        question: string
        answer: string
      }>
    }[]
  >([])

  // Handle search
  const handleSearch = (term: string) => {
    setSearchTerm(term)

    if (!term.trim()) {
      setSearchResults([])
      return
    }

    const results: typeof searchResults = []
    const searchLower = term.toLowerCase()

    Object.entries(faqs).forEach(([category, categoryFaqs]) => {
      const matchedFaqs = categoryFaqs.filter(
        (faq) => faq.question.toLowerCase().includes(searchLower) || faq.answer.toLowerCase().includes(searchLower),
      )

      if (matchedFaqs.length > 0) {
        results.push({
          category,
          faqs: matchedFaqs,
        })
      }
    })

    setSearchResults(results)
  }

  // Highlight matching text in search results
  const highlightMatch = (text: string) => {
    if (!searchTerm.trim()) return text

    const regex = new RegExp(`(${searchTerm})`, "gi")
    const parts = text.split(regex)

    return parts.map((part, i) => {
      if (part.toLowerCase() === searchTerm.toLowerCase()) {
        return (
          <span key={i} className="bg-primary/20 text-primary font-medium">
            {part}
          </span>
        )
      }
      return part
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <SiteHeader />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-6 sm:px-8 md:px-10">
            <div className="flex flex-col space-y-8">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Back to home</span>
                  </Link>
                </Button>
                <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <p className="text-muted-foreground">Find answers to common questions about Galaxies Discord app.</p>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search FAQs..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
              </div>

              {searchTerm ? (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">
                    Search Results{" "}
                    <span className="text-muted-foreground font-normal text-base">
                      ({searchResults.reduce((acc, cat) => acc + cat.faqs.length, 0)} found)
                    </span>
                  </h2>

                  {searchResults.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No FAQs found matching "{searchTerm}"</p>
                    </div>
                  ) : (
                    searchResults.map((result) => (
                      <div key={result.category} className="space-y-4">
                        <h3 className="text-lg font-medium capitalize">{result.category}</h3>
                        <Accordion type="single" collapsible className="w-full">
                          {result.faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`${result.category}-${index}`}>
                              <AccordionTrigger className="text-left">{highlightMatch(faq.question)}</AccordionTrigger>
                              <AccordionContent>{highlightMatch(faq.answer)}</AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="commands">Commands</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="premium">Premium</TabsTrigger>
                    <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
                  </TabsList>

                  {Object.entries(faqs).map(([category, categoryFaqs]) => (
                    <TabsContent key={category} value={category} className="mt-6">
                      <Accordion type="single" collapsible className="w-full">
                        {categoryFaqs.map((faq, index) => (
                          <AccordionItem key={index} value={`${category}-${index}`}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </TabsContent>
                  ))}
                </Tabs>
              )}
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
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
