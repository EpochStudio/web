import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const userId = searchParams.get("userId")
  const botToken = process.env.BOT_TOKEN

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 })
  }

  // If no app token is available, return a placeholder
  if (!botToken) {
    console.warn("BOT_TOKEN environment variable not set, using placeholder avatar")
    return NextResponse.json({
      avatarUrl: `/placeholder.svg?height=100&width=100&text=${userId.slice(0, 2)}`,
    })
  }

  try {
    const response = await fetch(`https://discord.com/api/v10/users/${userId}`, {
      headers: {
        Authorization: `Bot ${botToken}`,
      }
    })

    if (!response.ok) {
      console.error(`Discord API error: ${response.status} ${response.statusText}`)
      // Return a placeholder on error
      return NextResponse.json({
        avatarUrl: `/placeholder.svg?height=100&width=100&text=${userId.slice(0, 2)}`,
      })
    }

    const userData = await response.json()

    if (userData.avatar) {
      const avatarUrl = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.${userData.avatar.startsWith("a_") ? "gif" : "png"}?size=1024`
      return NextResponse.json({ avatarUrl })
    } else {
      // Return default Discord avatar
      const defaultAvatarNumber = Number.parseInt(userId) % 5
      const defaultAvatarUrl = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
      return NextResponse.json({ avatarUrl: defaultAvatarUrl })
    }
  } catch (error) {
    console.error("Error fetching Discord avatar:", error)
    // Return a placeholder on error
    return NextResponse.json({
      avatarUrl: `/placeholder.svg?height=100&width=100&text=${userId.slice(0, 2)}`,
    })
  }
}
