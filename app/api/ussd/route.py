import { NextResponse } from "next/server"

// Mock data for demonstration
const skillAssessments = [
  {
    id: "business",
    title: "Business Planning Assessment",
    description: "Evaluate your business planning skills and knowledge.",
  },
  {
    id: "financial",
    title: "Financial Literacy Assessment",
    description: "Test your understanding of business finances and accounting.",
  },
  {
    id: "marketing",
    title: "Marketing Skills Assessment",
    description: "Assess your marketing and customer acquisition knowledge.",
  },
]

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { sessionId, phoneNumber, text, serviceCode } = data

    if (!sessionId || !phoneNumber || !serviceCode) {
      return NextResponse.json({ error: "Session ID, phone number, and service code are required" }, { status: 400 })
    }

    // Process the USSD request
    const response = processUssdRequest(sessionId, phoneNumber, text, serviceCode)

    return NextResponse.json({ success: true, response })
  } catch (error) {
    console.error("USSD processing error:", error)
    return NextResponse.json({ error: "Failed to process USSD request" }, { status: 500 })
  }
}

function processUssdRequest(sessionId: string, phoneNumber: string, text: string, serviceCode: string) {
  // USSD responses should be prefixed with "CON" for expecting more input
  // or "END" for ending the session

  // Initial menu (no text input yet)
  if (!text) {
    return {
      response: `CON Welcome to SkillConnect!
      
1. Take Skill Assessment
2. View Learning Progress
3. Find a Mentor
4. Access Resources
5. My Profile`,
      sessionId,
      phoneNumber,
      serviceCode,
    }
  }

  // Handle skill assessment menu
  if (text === "1") {
    const assessmentList = skillAssessments.map((assessment, index) => `${index + 1}. ${assessment.title}`).join("\n")

    return {
      response: `CON Select an assessment:
      
${assessmentList}`,
      sessionId,
      phoneNumber,
      serviceCode,
    }
  }

  // Handle specific assessment selection
  if (text.startsWith("1*")) {
    const selection = text.split("*")[1]
    const assessmentIndex = Number.parseInt(selection) - 1

    if (assessmentIndex >= 0 && assessmentIndex < skillAssessments.length) {
      const assessment = skillAssessments[assessmentIndex]

      return {
        response: `CON ${assessment.title}
        
${assessment.description}

1. Start Assessment
2. View Sample Questions
3. Back to Main Menu`,
        sessionId,
        phoneNumber,
        serviceCode,
      }
    }
  }

  // Handle starting an assessment
  if (text.match(/^1\*[1-3]\*1$/)) {
    const parts = text.split("*")
    const assessmentIndex = Number.parseInt(parts[1]) - 1
    const assessment = skillAssessments[assessmentIndex]

    return {
      response: `END You have started the ${assessment.title}.
      
We will send you the first question via SMS shortly.
      
Thank you for using SkillConnect!`,
      sessionId,
      phoneNumber,
      serviceCode,
    }
  }

  // Handle viewing learning progress
  if (text === "2") {
    return {
      response: `CON Your Learning Progress:
      
Business Basics: 60% complete
Financial Literacy: 30% complete
Marketing Essentials: 45% complete

1. Continue Learning
2. View Certificates
3. Back to Main Menu`,
      sessionId,
      phoneNumber,
      serviceCode,
    }
  }

  // Handle mentor finding
  if (text === "3") {
    return {
      response: `CON Find a Mentor:
      
1. Search by Business Sector
2. Search by Location
3. View Recommended Mentors
4. Back to Main Menu`,
      sessionId,
      phoneNumber,
      serviceCode,
    }
  }

  // Handle resources
  if (text === "4") {
    return {
      response: `CON Access Resources:
      
1. Business Templates
2. Funding Opportunities
3. Local Business Networks
4. Success Stories
5. Back to Main Menu`,
      sessionId,
      phoneNumber,
      serviceCode,
    }
  }

  // Handle profile
  if (text === "5") {
    return {
      response: `CON My Profile:
      
Phone: ${phoneNumber}
Membership: Basic
Assessments Completed: 2
Mentor Sessions: 1

1. Update Profile
2. Upgrade Membership
3. Back to Main Menu`,
      sessionId,
      phoneNumber,
      serviceCode,
    }
  }

  // Default response for unrecognized inputs
  return {
    response: `END Invalid selection. Please dial the service code again and try once more.`,
    sessionId,
    phoneNumber,
    serviceCode,
  }
}

