"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { teamMembers } from "@/lib/team-data"

export default function TeamSection() {
  // Filter to only show developers and limit to 3
  const featuredTeam = teamMembers.filter((member) => member.type === "developer").slice(0, 3)
  const [avatars, setAvatars] = useState<Record<string, string>>({})

  useEffect(() => {
    // Fetch avatar URLs for each team member
    const fetchAvatars = async () => {
      const avatarData: Record<string, string> = {}
      
      // Check if we have cached avatars in localStorage
      const cachedAvatars = localStorage.getItem('teamAvatars')
      const cachedTimestamp = localStorage.getItem('teamAvatarsTimestamp')
      
      // Use cache if it exists and is less than 24 hours old
      if (cachedAvatars && cachedTimestamp && 
          (Date.now() - parseInt(cachedTimestamp) < 24 * 60 * 60 * 1000)) {
        setAvatars(JSON.parse(cachedAvatars))
        return
      }
      
      // If no valid cache, fetch new data with a delay between requests
      for (const member of featuredTeam) {
        try {
          const response = await fetch(`/api/discord-avatar?userId=${member.id}`)
          const data = await response.json()
          if (data.avatarUrl) {
            avatarData[member.id] = data.avatarUrl
          }
          // Add delay between requests to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 300))
        } catch (error) {
          console.error(`Failed to fetch avatar for ${member.name}:`, error)
        }
      }
      
      // Save to state and cache the results
      setAvatars(avatarData)
      localStorage.setItem('teamAvatars', JSON.stringify(avatarData))
      localStorage.setItem('teamAvatarsTimestamp', Date.now().toString())
    }

    fetchAvatars()
  }, [])  // Remove featuredTeam dependency to prevent unnecessary re-fetches

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredTeam.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="h-24 bg-gradient-to-r from-primary/40 to-primary/10"></div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col items-center -mt-12">
                <div className="rounded-full border-4 border-background overflow-hidden">
                  {avatars[member.id] ? (
                    <Image
                      src={avatars[member.id]}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="aspect-square object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-muted flex items-center justify-center">
                      {/* Placeholder while loading */}
                      <span className="text-muted-foreground text-xs">Loading...</span>
                    </div>
                  )}
                </div>
                <CardTitle className="mt-4">{member.name}</CardTitle>
                <CardDescription>{member.title.split("\n")[0]}</CardDescription>
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
      <div className="flex justify-center mt-6">
        <Button asChild variant="outline">
          <Link href="/team">View Full Team</Link>
        </Button>
      </div>
    </>
  )
}
