import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Users, MessageSquare, Award } from "lucide-react"

export function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-6 sm:px-8 md:px-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by Thousands</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Galaxies is helping Discord communities around the world
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          <StatCard icon={<Server className="h-10 w-10 text-primary" />} title="14,000+" description="Active Servers" />
          <StatCard icon={<Users className="h-10 w-10 text-primary" />} title="1.6M+" description="Discord Users" />
          <StatCard
            icon={<MessageSquare className="h-10 w-10 text-primary" />}
            title="10M+"
            description="Messages Processed"
          />
          <StatCard icon={<Award className="h-10 w-10 text-primary" />} title="99.9%" description="Uptime" />
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="bg-background/60 backdrop-blur-sm">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">{icon}</CardHeader>
      <CardContent>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
