import { NextResponse } from "next/server"

export async function GET() {
    const botToken = process.env.BOT_TOKEN
    const botId = process.env.BOT_ID

    if (!botToken || !botId) {
        console.warn("BOT_TOKEN or BOT_ID environment variable not set, using placeholder array.")
        return NextResponse.json({
            commands: []
        })
    }

    try {
        const response = await fetch(`https://discord.com/api/v10/applications/${botId}/commands`, {
            headers: {
                Authorization: `Bot ${botToken}`
            }
        })

        if (!response.ok) {
            console.error(`Discord API error: ${response.status} ${response.statusText}`)
            return NextResponse.json({
                commands: []
            })
        }

        const commandData = await response.json();

        if (commandData.length) {
            return NextResponse.json({
                commands: commandData
            })
        } else {
            console.warn("No Slash Commands detected, returning empty array.")
            return NextResponse.json({
                commands: []
            })
        }
    } catch (err) {
        console.error("Error fetching Client Application Commands", err);

        return NextResponse.json({
            commands: []
        })
    }
}
