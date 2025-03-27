import { NextResponse } from "next/server"

// This would be replaced with actual Africa's Talking SDK in a real implementation
// import AfricasTalking from 'africastalking';

// Mock data for demonstration
const learningModules = [
  {
    id: "biz101",
    title: "Business Basics",
    lessons: [
      "Lesson 1: Identifying Market Opportunities",
      "Lesson 2: Creating a Business Plan",
      "Lesson 3: Understanding Your Target Market",
    ],
  },
  {
    id: "fin101",
    title: "Financial Literacy",
    lessons: [
      "Lesson 1: Bookkeeping Fundamentals",
      "Lesson 2: Pricing Your Products/Services",
      "Lesson 3: Managing Cash Flow",
    ],
  },
  {
    id: "mkt101",
    title: "Marketing Essentials",
    lessons: [
      "Lesson 1: Building Your Brand",
      "Lesson 2: Low-Cost Marketing Strategies",
      "Lesson 3: Using Social Media for Business",
    ],
  },
]

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { phoneNumber, message } = data

    if (!phoneNumber || !message) {
      return NextResponse.json({ error: "Phone number and message are required" }, { status: 400 })
    }

    // Process the incoming SMS
    const response = processSmsRequest(phoneNumber, message)

    // In a real implementation, this would use Africa's Talking SDK to send SMS
    // const response = await sendSmsResponse(phoneNumber, responseMessage);

    return NextResponse.json({ success: true, response })
  } catch (error) {
    console.error("SMS processing error:", error)
    return NextResponse.json({ error: "Failed to process SMS request" }, { status: 500 })
  }
}

function processSmsRequest(phoneNumber: string, message: string) {
  // Convert message to lowercase for easier processing
  const lowerMessage = message.toLowerCase().trim()

  // Handle registration
  if (lowerMessage.startsWith("register")) {
    return {
      type: "registration",
      message:
        "Welcome to SkillConnect! You have successfully registered. Reply with MENU to see available options or HELP for assistance.",
      phoneNumber,
    }
  }

  // Handle menu request
  if (lowerMessage === "menu") {
    return {
      type: "menu",
      message:
        "SkillConnect Menu:\n1. LEARN - Access learning modules\n2. ASSESS - Take a skill assessment\n3. MENTOR - Get matched with a mentor\n4. EVENTS - Upcoming workshops\n5. HELP - Get assistance",
      phoneNumber,
    }
  }

  // Handle learning module request
  if (lowerMessage === "learn") {
    const moduleList = learningModules.map((module, index) => `${index + 1}. ${module.title}`).join("\n")

    return {
      type: "learning",
      message: `Available Learning Modules:\n${moduleList}\nReply with the module number to access lessons.`,
      phoneNumber,
    }
  }

  // Handle specific module selection (e.g., "1" for Business Basics)
  if (/^[1-3]$/.test(lowerMessage)) {
    const moduleIndex = Number.parseInt(lowerMessage) - 1
    if (moduleIndex >= 0 && moduleIndex < learningModules.length) {
      const module = learningModules[moduleIndex]
      const lessonList = module.lessons.join("\n")

      return {
        type: "module",
        message: `${module.title}:\n${lessonList}\nReply with ${module.id} followed by lesson number (e.g., ${module.id} 1) to access a specific lesson.`,
        phoneNumber,
      }
    }
  }

  // Handle specific lesson request (e.g., "biz101 1")
  const lessonMatch = lowerMessage.match(/^([a-z]+\d+)\s+(\d+)$/)
  if (lessonMatch) {
    const moduleId = lessonMatch[1]
    const lessonNumber = Number.parseInt(lessonMatch[2])

    const module = learningModules.find((m) => m.id === moduleId)
    if (module && lessonNumber > 0 && lessonNumber <= module.lessons.length) {
      // In a real implementation, this would fetch the actual lesson content
      return {
        type: "lesson",
        message: `${module.lessons[lessonNumber - 1]}\n\nThis lesson covers essential concepts for entrepreneurs. We'll send you part 1 of 3 now:\n\nEntrepreneurship begins with identifying problems that need solutions. Look around your community - what challenges do people face? Each challenge is a potential business opportunity.`,
        phoneNumber,
      }
    }
  }

  // Handle help request
  if (lowerMessage === "help") {
    return {
      type: "help",
      message:
        "SkillConnect Help:\nREGISTER - Create an account\nMENU - View all options\nLEARN - Access learning modules\nASSESS - Take skill assessment\nMENTOR - Get mentor matching\nEVENTS - View upcoming events",
      phoneNumber,
    }
  }

  // Default response for unrecognized commands
  return {
    type: "unknown",
    message: "Command not recognized. Reply with MENU to see available options or HELP for assistance.",
    phoneNumber,
  }
}

// This function would use Africa's Talking SDK in a real implementation
// async function sendSmsResponse(phoneNumber: string, message: string) {
//   // Initialize the SDK
//   const africastalking = AfricasTalking({
//     apiKey: process.env.AT_API_KEY,
//     username: process.env.AT_USERNAME
//   });
//
//   // Get the SMS service
//   const sms = africastalking.SMS;
//
//   // Send the message
//   const result = await sms.send({
//     to: phoneNumber,
//     message: message,
//     from: 'SkillConnect'
//   });
//
//   return result;
// }

