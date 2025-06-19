import { type NextRequest, NextResponse } from "next/server"

interface ChatLog {
  type: "chat_interaction" | "contact_form"
  timestamp: string
  userAgent: string
  url: string
  userMessage?: string
  botResponse?: string
  formData?: any
}

// In-memory storage for demo (use a database in production)
const chatLogs: ChatLog[] = []

export async function POST(request: NextRequest) {
  try {
    const logData: ChatLog = await request.json()

    // Add to logs
    chatLogs.push(logData)

    // Log to console for immediate visibility
    console.log("=== CHATBOT LOG ===")
    console.log("Type:", logData.type)
    console.log("Timestamp:", logData.timestamp)
    console.log("URL:", logData.url)
    console.log("User Agent:", logData.userAgent)

    if (logData.type === "chat_interaction") {
      console.log("User Message:", logData.userMessage)
      console.log("Bot Response:", logData.botResponse)
    } else if (logData.type === "contact_form") {
      console.log("Contact Form Data:", logData.formData)
    }
    console.log("==================")

    // In production, save to database:
    // await saveToDatabase(logData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Logging error:", error)
    return NextResponse.json({ success: false, message: "Failed to log data" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Return all logs for admin viewing
    return NextResponse.json({
      success: true,
      logs: chatLogs,
      totalInteractions: chatLogs.filter((log) => log.type === "chat_interaction").length,
      totalContactForms: chatLogs.filter((log) => log.type === "contact_form").length,
    })
  } catch (error) {
    console.error("Error fetching logs:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch logs" }, { status: 500 })
  }
}
