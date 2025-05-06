"use client"

import {useEffect, useState} from "react"
import Link from "next/link"
import {ArrowLeft, Search} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Input} from "@/components/ui/input"
import {SiteHeader} from "@/components/site-header"

// Command data structure from the language file
// Might need a function to try and extract data later when we have new commands
/*
const commands = {
  moderation: [
    {
      name: "ban",
      description: "Bans the specified user",
      usage: "/ban @user [reason]",
      example: "/ban @username Breaking server rules",
    },
    {
      name: "kick",
      description: "Kicks the specified user",
      usage: "/kick @user [reason]",
      example: "/kick @username Violating server rules",
    },
    {
      name: "mute",
      description: "Mutes the specified user",
      usage: "/mute @user [duration] [reason]",
      example: "/mute @username 1h Excessive spam",
    },
    {
      name: "unmute",
      description: "Unmutes a muted member",
      usage: "/unmute @user",
      example: "/unmute @username",
    },
    {
      name: "warn",
      description: "Warns the specified user",
      usage: "/warn @user [reason]",
      example: "/warn @username Inappropriate behavior",
    },
    {
      name: "infractions",
      description: "Manage user infractions",
      usage: "/infractions view @user",
      example: "/infractions view @username",
    },
    {
      name: "purge",
      description: "Purges the specified amount of message. Max is 99 messages per time.",
      usage: "/purge [amount]",
      example: "/purge 50",
    },
    {
      name: "lockdown",
      description: "Lock or unlocks the specified channel.",
      usage: "/lockdown [channel]",
      example: "/lockdown #general",
    },
    {
      name: "setratelimit",
      description: "Sets the slowmode for the current channel.",
      usage: "/setratelimit [seconds]",
      example: "/setratelimit 10",
    },
    {
      name: "softban",
      description: "Bans and unbans the specified user and deletes their messages.",
      usage: "/softban @user [reason]",
      example: "/softban @username Clearing messages",
    },
    {
      name: "unban",
      description: "Unbans the specified user",
      usage: "/unban [user ID]",
      example: "/unban 123456789012345678",
    },
    {
      name: "channelaccess",
      description: "Revoke/Re-grant a user's access from viewing a certain channel",
      usage: "/channelaccess [revoke/re-grant] @user [channel]",
      example: "/channelaccess revoke @username #general",
    },
    {
      name: "voicemod",
      description: "Voice Channel Moderation Commands",
      usage: "/voicemod [action] @user",
      example: "/voicemod mute @username",
    },
  ],
  admin: [
    {
      name: "alt",
      description: "This command allows you to configure the alt detector",
      usage: "/alt setup [channel] [action] [age]",
      example: "/alt setup #logs kick 7d",
    },
    {
      name: "categories",
      description: "Disables/Enables the specified category",
      usage: "/categories [enable/disable] [category]",
      example: "/categories disable fun",
    },
    {
      name: "commands",
      description: "Disables/Enables the specified command",
      usage: "/commands [enable/disable] [command]",
      example: "/commands disable meme",
    },
    {
      name: "setmuterole",
      description: "Configure the Mute Role/Mod Log Settings",
      usage: "/setmuterole [role]",
      example: "/setmuterole @Muted",
    },
    {
      name: "customcmd",
      description: "Manage Custom Commands of this Guild",
      usage: "/customcmd create [name]",
      example: "/customcmd create welcome",
    },
    {
      name: "greet",
      description: "Configure the Welcome Channel/Message, Leave Channel/Message",
      usage: "/greet setup [welcome/leave] [channel]",
      example: "/greet setup welcome #welcome",
    },
    {
      name: "pauseinvites",
      description: "Pause/resume invites for the current server",
      usage: "/pauseinvites [pause/resume]",
      example: "/pauseinvites pause",
    },
    {
      name: "premium",
      description: "Configures your premium settings of this Guild",
      usage: "/premium info",
      example: "/premium info",
    },
    {
      name: "reactionrole",
      description: "Configures reaction role in your server.",
      usage: "/reactionrole add [message-id] [emoji] [role]",
      example: "/reactionrole add 123456789012345678-987654321098765432 👍 @Member",
    },
    {
      name: "settings",
      description: "Displays the server settings",
      usage: "/settings",
      example: "/settings",
    },
    {
      name: "stickymsg",
      description: "Configures sticky messages for this server",
      usage: "/stickymsg add [channel]",
      example: "/stickymsg add #rules",
    },
    {
      name: "starboard",
      description: "Manages the Guild Starboard Configuration",
      usage: "/starboard setup [channel]",
      example: "/starboard setup #starboard",
    },
  ],
  utility: [
    {
      name: "afk",
      description: "Set you as AFK",
      usage: "/afk [reason]",
      example: "/afk Gone for lunch",
    },
    {
      name: "avatar",
      description: "Displays the specified user's display avatar",
      usage: "/avatar [@user]",
      example: "/avatar @username",
    },
    {
      name: "discorddate",
      description: "Converts your human readable time to a Discord Timestamp",
      usage: "/discorddate [time]",
      example: "/discorddate 2023-01-01 12:00",
    },
    {
      name: "echo",
      description: "Send a message with the specified text.",
      usage: "/echo [text]",
      example: "/echo Hello everyone!",
    },
    {
      name: "embedcreator",
      description: "Creates an embed with a custom title, color, description and channel to send to",
      usage: "/embedcreator",
      example: "/embedcreator",
    },
    {
      name: "emoji",
      description: "Emoji Related Commands (View/Server/Enlarge)",
      usage: "/emoji [action] [emoji]",
      example: "/emoji enlarge 👍",
    },
    {
      name: "github",
      description: "Display a Github Repo Information",
      usage: "/github [username/repo]",
      example: "/github EpochStudio/Galaxies",
    },
    {
      name: "info",
      description: "Get info on various things",
      usage: "/info [type] [target]",
      example: "/info user @username",
    },
    {
      name: "list",
      description: "List the specified information",
      usage: "/list [type]",
      example: "/list bots",
    },
    {
      name: "randompw",
      description: "Generates a random 20 character password",
      usage: "/randompw",
      example: "/randompw",
    },
    {
      name: "reminder",
      description: "Manages your Galaxies reminders",
      usage: "/reminder add [time] [text]",
      example: "/reminder add 1h Check emails",
    },
    {
      name: "roles",
      description: "View the server roles or the specified user's roles",
      usage: "/roles [server/user] [@user]",
      example: "/roles user @username",
    },
    {
      name: "servericon",
      description: "Display's the server icon",
      usage: "/servericon",
      example: "/servericon",
    },
    {
      name: "urban",
      description: "Search up the specified word on the urban dictionary",
      usage: "/urban [word]",
      example: "/urban discord",
    },
    {
      name: "weather",
      description: "Fetches the weather details of a place",
      usage: "/weather [location]",
      example: "/weather New York",
    },
    {
      name: "zodiac",
      description: "Show's your zodaic sign with the given date",
      usage: "/zodiac [MM/DD]",
      example: "/zodiac 09/23",
    },
  ],
  fun: [
    {
      name: "8ball",
      description: "The magic 8ball",
      usage: "/8ball [question]",
      example: "/8ball Will I win the lottery?",
    },
    {
      name: "choose",
      description: "Choose a random element from the supplied options, use a comma for multiple world selection.",
      usage: "/choose [options]",
      example: "/choose pizza, burger, pasta",
    },
    {
      name: "coinflip",
      description: "Flip a coin",
      usage: "/coinflip",
      example: "/coinflip",
    },
    {
      name: "dice",
      description: "Roll a dice",
      usage: "/dice",
      example: "/dice",
    },
    {
      name: "fish",
      description: "Go fishing",
      usage: "/fish",
      example: "/fish",
    },
    {
      name: "fortune",
      description: "Get a fortune",
      usage: "/fortune",
      example: "/fortune",
    },
    {
      name: "imagefilter",
      description: "Image Filter Command",
      usage: "/imagefilter [filter] [image]",
      example: "/imagefilter invert @username",
    },
    {
      name: "interact",
      description: "Interact with another user through various actions.",
      usage: "/interact [action] [@user]",
      example: "/interact hug @username",
    },
    {
      name: "meme",
      description: "Generates a random meme",
      usage: "/meme",
      example: "/meme",
    },
    {
      name: "onthisday",
      description: "Get a random fact on the current day",
      usage: "/onthisday",
      example: "/onthisday",
    },
    {
      name: "periodic",
      description: "Fetches a random element or the specified element from the periodic table.",
      usage: "/periodic [element]",
      example: "/periodic gold",
    },
    {
      name: "pp",
      description: "PP Size (if you know, you know)",
      usage: "/pp [@user]",
      example: "/pp @username",
    },
    {
      name: "quote",
      description: "Get a random quote",
      usage: "/quote",
      example: "/quote",
    },
    {
      name: "rate",
      description: "Rate the specified user based on different metrics",
      usage: "/rate [metric] [@user]",
      example: "/rate simp @username",
    },
    {
      name: "ship",
      description: "Find out the love score of the 2 specified user",
      usage: "/ship [@user1] [@user2]",
      example: "/ship @user1 @user2",
    },
    {
      name: "text",
      description: "Shows all the text commands",
      usage: "/text [action] [text]",
      example: "/text binary Hello",
    },
  ],
  economy: [
    {
      name: "balance",
      description: "Display your balance",
      usage: "/balance",
      example: "/balance",
    },
    {
      name: "bank",
      description: "Deposit or withdraw money from the bank",
      usage: "/bank [deposit/withdraw] [amount]",
      example: "/bank deposit 1000",
    },
    {
      name: "daily",
      description: "Claim your daily rewards",
      usage: "/daily",
      example: "/daily",
    },
    {
      name: "eco-cooldown",
      description: "Displays all your Economy Cooldowns",
      usage: "/eco-cooldown",
      example: "/eco-cooldown",
    },
    {
      name: "eco-manage",
      description: "Manage the Economy System in this server.",
      usage: "/eco-manage [action] [@user] [amount]",
      example: "/eco-manage add @username 1000",
    },
    {
      name: "inventory",
      description: "Manages your inventory content",
      usage: "/inventory",
      example: "/inventory",
    },
    {
      name: "manageshop",
      description: "Manages the Server Economy Shop",
      usage: "/manageshop [action] [item]",
      example: "/manageshop create role",
    },
    {
      name: "leaderboard",
      description: "Displays Economy Leaderboard",
      usage: "/leaderboard",
      example: "/leaderboard",
    },
    {
      name: "pay",
      description: "Pay money to another user",
      usage: "/pay [@user] [amount]",
      example: "/pay @username 500",
    },
    {
      name: "rob",
      description: "Robs a user",
      usage: "/rob [@user]",
      example: "/rob @username",
    },
    {
      name: "shop",
      description: "View the server shop",
      usage: "/shop",
      example: "/shop",
    },
    {
      name: "weekly",
      description: "Claim your weekly rewards.",
      usage: "/weekly",
      example: "/weekly",
    },
    {
      name: "work",
      description: "Work so that you can get money",
      usage: "/work",
      example: "/work",
    },
  ],
  level: [
    {
      name: "level-settings",
      description: "Manages this server's level up sysytem configuration",
      usage: "/level-settings [action]",
      example: "/level-settings enable",
    },
    {
      name: "modify",
      description: "Modifies a user's xp",
      usage: "/modify [action] [@user] [amount]",
      example: "/modify add @username 1000",
    },
    {
      name: "rank-leaderboard",
      description: "Display the server's leaderboard",
      usage: "/rank-leaderboard",
      example: "/rank-leaderboard",
    },
    {
      name: "rank",
      description: "Displays your current rank level in your server.",
      usage: "/rank [@user]",
      example: "/rank @username",
    },
    {
      name: "reset-xp",
      description: "Reset the server's XP system.",
      usage: "/reset-xp",
      example: "/reset-xp",
    },
    {
      name: "reward",
      description: "Manages the leveling rewards",
      usage: "/reward [action] [level] [role]",
      example: "/reward add 10 @Role",
    },
  ],
  giveaway: [
    {
      name: "giveaway",
      description: "Create/End/Reroll/List/Giveaways",
      usage: "/giveaway [action]",
      example: "/giveaway create",
    },
    {
      name: "managegiveaway",
      description: "Manages the giveaway settings in this guild.",
      usage: "/managegiveaway [action]",
      example: "/managegiveaway settings",
    },
  ],
  general: [
    {
      name: "aboutme",
      description: "About Galaxies",
      usage: "/aboutme",
      example: "/aboutme",
    },
    {
      name: "badgeinfo",
      description: "Explains the purpose of each Galaxies Badges",
      usage: "/badgeinfo",
      example: "/badgeinfo",
    },
    {
      name: "changelogs",
      description: "Show the changelogs of the latest update",
      usage: "/changelogs",
      example: "/changelogs",
    },
    {
      name: "customize",
      description: "Customize your Galaxies Settings/Experience",
      usage: "/customize [setting]",
      example: "/customize color",
    },
    {
      name: "debug",
      description: "Debugs the app permissions",
      usage: "/debug",
      example: "/debug",
    },
    {
      name: "guilds",
      description: "Displays the amount of guilds that Galaxies is in",
      usage: "/guilds",
      example: "/guilds",
    },
    {
      name: "help",
      description: "Sends the help menu",
      usage: "/help [command]",
      example: "/help ban",
    },
    {
      name: "invite",
      description: "Sends the link to invite the app",
      usage: "/invite",
      example: "/invite",
    },
    {
      name: "ping",
      description: "Shows the app's Latency & Connection",
      usage: "/ping",
      example: "/ping",
    },
    {
      name: "profile",
      description: "Displays the specified user profile",
      usage: "/profile [@user]",
      example: "/profile @username",
    },
    {
      name: "profilewarning",
      description: "Review your Galaxies Warning.",
      usage: "/profilewarning",
      example: "/profilewarning",
    },
    {
      name: "stats",
      description: "Displays the app statistic",
      usage: "/stats",
      example: "/stats",
    },
    {
      name: "tos",
      description: "Shows the app Terms of Service or Privacy Policy",
      usage: "/tos",
      example: "/tos",
    },
    {
      name: "upvote",
      description: "Returns the link for upvoting us.",
      usage: "/upvote",
      example: "/upvote",
    },
  ],
}
*/

// This is a client component now
export default function CommandsClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("moderation")
  const [searchResults, setSearchResults] = useState<
    {
      commands: Array<{
        name: string
        description: string
      }>
    }[]
  >([])
  const [commandCount, setCommandCount] = useState(0)
  const [commands, setCommands] = useState([])

  useEffect(() => {
    const fetchCommands = async() => {
      try {
        const response = await fetch('/api/discord-application/');
        let output;

        if (response.ok) {
          output = response.json();
        }

        setCommands(output);
        setCommandCount(output.length)
        return output;
      } catch (err) {
        console.error("Error while fetching Client Application Command", err)
      }
    }

    (async() => {
      await fetchCommands()
    })()
  }, [])

  // Handle search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([])
      return
    }

    const term = searchTerm.toLowerCase()
    const results: typeof searchResults = []

    Object.entries(commands).forEach(([category, categoryCommands]) => {
      const matchedCommands = categoryCommands.filter(
        (cmd) =>
          cmd.name.toLowerCase().includes(term) ||
          cmd.description.toLowerCase().includes(term) ||
          cmd.usage.toLowerCase().includes(term),
      )

      if (matchedCommands.length > 0) {
        results.push({
          category,
          commands: matchedCommands,
        })
      }
    })

    setSearchResults(results)
  }, [searchTerm])

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
                <h1 className="text-3xl font-bold">App Commands</h1>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <p className="text-muted-foreground">
                  Explore all {commandCount} commands available in the Galaxies Discord app.
                </p>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search commands..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {searchTerm ? (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">
                    Search Results{" "}
                    <span className="text-muted-foreground font-normal text-base">
                      ({searchResults.reduce((acc, cat) => acc + cat.commands.length, 0)} found)
                    </span>
                  </h2>

                  {searchResults.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No commands found matching "{searchTerm}"</p>
                    </div>
                  ) : (
                    searchResults.map((result) => (
                      <div key={result.category} className="space-y-4">
                        <h3 className="text-lg font-medium capitalize">{result.category}</h3>
                        <Accordion type="single" collapsible className="w-full">
                          {result.commands.map((command, index) => (
                            <AccordionItem key={index} value={`${result.category}-${index}`}>
                              <AccordionTrigger className="text-left">
                                <div className="flex items-center">
                                  <span className="font-mono bg-muted px-2 py-1 rounded text-sm mr-3">
                                    /{highlightMatch(command.name)}
                                  </span>
                                  <span className="text-muted-foreground">{highlightMatch(command.description)}</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-4 pl-4">
                                  <div>
                                    <h4 className="font-semibold mb-1">Usage:</h4>
                                    <p className="font-mono bg-muted p-2 rounded">{highlightMatch(command.usage)}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-1">Example:</h4>
                                    <p className="font-mono bg-muted p-2 rounded">{command.example}</p>
                                  </div>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <Tabs defaultValue="moderation" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full">
                    <TabsTrigger value="moderation">Moderation</TabsTrigger>
                    <TabsTrigger value="admin">Admin</TabsTrigger>
                    <TabsTrigger value="utility">Utility</TabsTrigger>
                    <TabsTrigger value="fun">Fun</TabsTrigger>
                    <TabsTrigger value="economy">Economy</TabsTrigger>
                    <TabsTrigger value="level">Level</TabsTrigger>
                    <TabsTrigger value="general">General</TabsTrigger>
                  </TabsList>

                  {Object.entries(commands).map(([category, categoryCommands]) => (
                    <TabsContent key={category} value={category} className="mt-6">
                      <Accordion type="single" collapsible className="w-full">
                        {categoryCommands.map((command, index) => (
                          <AccordionItem key={index} value={`${category}-${index}`}>
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center">
                                <span className="font-mono bg-muted px-2 py-1 rounded text-sm mr-3">
                                  /{command.name}
                                </span>
                                <span className="text-muted-foreground">{command.description}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4 pl-4">
                                <div>
                                  <h4 className="font-semibold mb-1">Usage:</h4>
                                  <p className="font-mono bg-muted p-2 rounded">{command.usage}</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-1">Example:</h4>
                                  <p className="font-mono bg-muted p-2 rounded">{command.example}</p>
                                </div>
                              </div>
                            </AccordionContent>
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
            <Link href="https://github.com/EpochStudio/web" className="text-sm text-muted-foreground hover:text-primary">
              Github
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
