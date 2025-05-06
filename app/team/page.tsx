"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { teamMembers, type TeamMember } from "@/lib/team-data"
import { Github, Twitter } from "lucide-react"

export default function TeamPage() {
  const [selectedOption, setSelectedOption] = useState<string>("developer")
  const [team, setTeam] = useState<TeamMember[]>(teamMembers)
  const [filteredTeam, setFilteredTeam] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Filter team members based on selected option
  useEffect(() => {
    setFilteredTeam(team.filter((member) => member.type === selectedOption))
  }, [selectedOption, team])

  // Fetch Discord avatars for team members
  useEffect(() => {
    const fetchAvatars = async () => {
      setIsLoading(true)
      try {
        const updatedTeam = await Promise.all(
          team.map(async (member) => {
            // If member already has an avatarUrl or avatar, skip fetching
            if (member.avatarUrl || member.avatar) {
              return member
            }

            try {
              const response = await fetch(`/api/discord-avatar?userId=${member.id}`)
              if (response.ok) {
                const data = await response.json()
                return { ...member, avatarUrl: data.avatarUrl }
              }
              return member
            } catch (error) {
              console.error(`Error fetching avatar for ${member.name}:`, error)
              return member
            }
          }),
        )
        setTeam(updatedTeam)
      } catch (error) {
        console.error("Error fetching avatars:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAvatars()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <SiteHeader />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-6 sm:px-8 md:px-10">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="/">
                      <ArrowLeft className="h-4 w-4" />
                      <span className="sr-only">Back to home</span>
                    </Link>
                  </Button>
                  <h1 className="text-3xl font-bold">
                    {selectedOption === "staff" ? "Staff Team" : "Development Team"}
                  </h1>
                </div>
                <Select value={selectedOption} onValueChange={setSelectedOption}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select team" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="h-24 bg-gradient-to-r from-primary/40 to-primary/10 animate-pulse"></div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-col items-center -mt-12">
                          <div className="rounded-full border-4 border-background overflow-hidden w-20 h-20 bg-muted animate-pulse"></div>
                          <div className="mt-4 h-5 w-24 bg-muted animate-pulse rounded"></div>
                          <div className="mt-2 h-4 w-16 bg-muted animate-pulse rounded"></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredTeam.map((member) => (
                    <Card key={member.id} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="h-24 bg-gradient-to-r from-primary/40 to-primary/10"></div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-col items-center -mt-12">
                          <Link
                            href={`/team/${member.id}`}
                            className="rounded-full border-4 border-background overflow-hidden hover:opacity-90 transition-opacity"
                          >
                            <Image
                              src={
                                member.avatarUrl ||
                                member.avatar ||
                                `/placeholder.svg?height=100&width=100&text=${member.name.slice(0, 2) || "/placeholder.svg"}`
                              }
                              alt={member.name}
                              width={80}
                              height={80}
                              className="aspect-square object-cover"
                            />
                          </Link>
                          <Link
                            href={`/team/${member.id}`}
                            className="mt-4 font-semibold hover:text-primary transition-colors"
                          >
                            {member.name}
                          </Link>
                          <CardDescription className="text-center whitespace-pre-line">{member.title}</CardDescription>
                          {member.aboutMe && (
                            <p className="mt-2 text-sm text-muted-foreground text-center px-4">
                              {member.aboutMe.length > 100 ? `${member.aboutMe.slice(0, 100)}...` : member.aboutMe}
                            </p>
                          )}
                          <div className="flex gap-2 mt-2">
                            {member.github && (
                              <a
                                href={member.github}
                                className="text-muted-foreground hover:text-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-5 w-5" />
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
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
            <Link href="https://github.com/EpochStudio/web" className="text-sm text-muted-foreground hover:text-primary">
              Github
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
