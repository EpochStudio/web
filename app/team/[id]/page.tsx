"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { teamMembers, type TeamMember } from "@/lib/team-data"

export default function TeamMemberPage() {
  const { id } = useParams()
  const [member, setMember] = useState<TeamMember | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(false)

  useEffect(() => {
    const foundMember = teamMembers.find((m) => m.id === id)
    if (!foundMember) {
      notFound()
    }

    setMember(foundMember)

    // Use existing avatar if available
    if (foundMember.avatar) {
      setAvatarUrl(foundMember.avatar)
      setIsLoading(false)
      return
    }

    // Fetch Discord avatar
    const fetchAvatar = async () => {
      try {
        const response = await fetch(`/api/discord-avatar?userId=${foundMember.id}`)
        if (response.ok) {
          const data = await response.json()
          setAvatarUrl(data.avatarUrl)
        } else {
          setFetchError(true)
        }
      } catch (error) {
        console.error("Error fetching avatar:", error)
        setFetchError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAvatar()
  }, [id])

  if (!member && !isLoading) {
    return notFound()
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
                  <Link href="/team">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Back to team</span>
                  </Link>
                </Button>
                <h1 className="text-3xl font-bold">Team Member</h1>
              </div>

              {isLoading ? (
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-40 h-40 rounded-full bg-muted animate-pulse"></div>
                  <div className="flex-1 space-y-4">
                    <div className="h-8 bg-muted animate-pulse rounded w-1/3"></div>
                    <div className="h-6 bg-muted animate-pulse rounded w-1/4"></div>
                    <div className="h-4 bg-muted animate-pulse rounded w-full"></div>
                    <div className="h-4 bg-muted animate-pulse rounded w-full"></div>
                    <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
                  </div>
                </div>
              ) : member ? (
                <Card className="overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-primary/40 to-primary/10"></div>
                  <CardContent className="relative pt-0 pb-6">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start -mt-24 md:-mt-16">
                      <div className="rounded-full border-4 border-background overflow-hidden">
                        <Image
                          src={
                            avatarUrl ||
                            member.avatar ||
                            `/placeholder.svg?height=200&width=200&text=${member.name.slice(0, 2) || "/placeholder.svg"}`
                          }
                          alt={member.name}
                          width={160}
                          height={160}
                          className="aspect-square object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1 space-y-4 text-center md:text-left bg-background/80 backdrop-blur-sm p-4 rounded-lg mt-4 md:mt-0">
                        <h2 className="text-3xl font-bold">{member.name}</h2>
                        <p className="text-xl text-muted-foreground whitespace-pre-line">{member.title}</p>

                        <div className="flex gap-4 justify-center md:justify-start">
                          {member.github && (
                            <a
                              href={member.github}
                              className="text-muted-foreground hover:text-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-6 w-6" />
                              <span className="sr-only">GitHub</span>
                            </a>
                          )}
                          {member.twitter && (
                            <a
                              href={member.twitter}
                              className="text-muted-foreground hover:text-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Twitter className="h-6 w-6" />
                              <span className="sr-only">Twitter</span>
                            </a>
                          )}
                        </div>

                        {member.aboutMe ? (
                          <div className="mt-6 space-y-4">
                            <h3 className="text-xl font-semibold">About</h3>
                            <div className="whitespace-pre-line bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                              {member.aboutMe}
                            </div>
                          </div>
                        ) : (
                          <div className="mt-6 text-muted-foreground italic">No additional information available.</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : null}
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
            <Link href="https://github.com/EpochStudio/web" className="text-sm text-muted-foreground hover:text-primary">
              Github
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
