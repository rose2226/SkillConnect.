import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { sessionId, phoneNumber, callAction } = data

    if (!sessionId || !phoneNumber) {
      return NextResponse.json({ error: "Session ID and phone number are required" }, { status: 400 })
    }

    // Process the voice call based on the action
    const response = processVoiceRequest(sessionId, phoneNumber, callAction)

    return NextResponse.json({ success: true, response })
  } catch (error) {
    console.error("Voice processing error:", error)
    return NextResponse.json({ error: "Failed to process voice request" }, { status: 500 })
  }
}

function processVoiceRequest(sessionId: string, phoneNumber: string, callAction?: string) {
  // Default welcome message for new calls
  if (!callAction) {
    return {
      // In a real implementation, this would be an XML response for Africa's Talking Voice API
      response: `
        <Response>
          <Say voice="female" playBeep="false">
            Welcome to Skill Connect. Your entrepreneurship learning platform.
            Press 1 to listen to today's business tip.
            Press 2 to access your learning modules.
            Press 3 to schedule a call with a mentor.
            Press 0 to speak with customer support.
          </Say>
          <GetDigits timeout="30" finishOnKey="#" callbackUrl="/api/voice/menu">
            <Say voice="female">
              Please make your selection followed by the hash key.
            </Say>
          </GetDigits>
        </Response>
      `,
      sessionId,
      phoneNumber,
    }
  }

  // Handle menu selection
  if (callAction === "menu") {
    // In a real implementation, this would extract the digits from the request
    const digits = "1" // Simulated user input

    switch (digits) {
      case "1":
        return {
          response: `
            <Response>
              <Say voice="female">
                Here is today's business tip: Building customer loyalty is often more profitable than acquiring new customers. Consider implementing a simple loyalty program to reward repeat business.
                Press 1 to repeat this tip.
                Press 2 to hear another tip.
                Press 9 to return to the main menu.
              </Say>
              <GetDigits timeout="30" finishOnKey="#" callbackUrl="/api/voice/tip">
                <Say voice="female">
                  Please make your selection followed by the hash key.
                </Say>
              </GetDigits>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }

      case "2":
        return {
          response: `
            <Response>
              <Say voice="female">
                Your active learning modules are:
                Press 1 for Business Planning Basics.
                Press 2 for Financial Management.
                Press 3 for Marketing Strategies.
                Press 9 to return to the main menu.
              </Say>
              <GetDigits timeout="30" finishOnKey="#" callbackUrl="/api/voice/module">
                <Say voice="female">
                  Please select a module followed by the hash key.
                </Say>
              </GetDigits>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }

      case "3":
        return {
          response: `
            <Response>
              <Say voice="female">
                To schedule a call with a mentor, we'll need to collect some information.
                After this call, you will receive an SMS with available time slots.
                Press 1 to confirm you want to schedule a mentor call.
                Press 9 to return to the main menu.
              </Say>
              <GetDigits timeout="30" finishOnKey="#" callbackUrl="/api/voice/mentor">
                <Say voice="female">
                  Please make your selection followed by the hash key.
                </Say>
              </GetDigits>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }

      case "0":
        return {
          response: `
            <Response>
              <Say voice="female">
                Connecting you to customer support. Please hold while we connect your call.
              </Say>
              <Dial phoneNumbers="+254700000000" />
            </Response>
          `,
          sessionId,
          phoneNumber,
        }

      default:
        return {
          response: `
            <Response>
              <Say voice="female">
                Sorry, I didn't understand your selection. Let's try again.
              </Say>
              <Redirect>/api/voice</Redirect>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }
    }
  }

  // Handle module selection
  if (callAction === "module") {
    // In a real implementation, this would extract the digits from the request
    const digits = "1" // Simulated user input

    // Simulated module content
    const moduleContent = {
      "1": `Business Planning Basics: This module covers how to identify business opportunities, conduct market research, and create a viable business plan. The first lesson focuses on identifying problems in your community that can be solved through entrepreneurship. Press 1 to listen to this lesson now.
                Press 2 to skip to the next lesson.
                Press 9 to return to the main menu.
              </Say>
              <GetDigits timeout="30" finishOnKey="#" callbackUrl="/api/voice/lesson">
                <Say voice="female">
                  Please make your selection followed by the hash key.
                </Say>
              </GetDigits>
            </Response>
          `,
    }

    if (moduleContent[digits]) {
      return {
        response: `
          <Response>
            <Say voice="female">
              ${moduleContent[digits]}
            </Say>
          </Response>
        `,
        sessionId,
        phoneNumber,
      }
    } else {
      return {
        response: `
          <Response>
            <Say voice="female">
              I'm sorry, I didn't understand that request. Let's return to the main menu.
            </Say>
            <Redirect>/api/voice</Redirect>
          </Response>
        `,
        sessionId,
        phoneNumber,
      }
    }
  }

  // Handle tip selection
  if (callAction === "tip") {
    // In a real implementation, this would extract the digits from the request
    const digits = "1" // Simulated user input

    switch (digits) {
      case "1":
        return {
          response: `
            <Response>
              <Say voice="female">
                Building customer loyalty is often more profitable than acquiring new customers. Consider implementing a simple loyalty program to reward repeat business.
                Press 1 to repeat this tip.
                Press 2 to hear another tip.
                Press 9 to return to the main menu.
              </Say>
              <GetDigits timeout="30" finishOnKey="#" callbackUrl="/api/voice/tip">
                <Say voice="female">
                  Please make your selection followed by the hash key.
                </Say>
              </GetDigits>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }
      case "2":
        return {
          response: `
            <Response>
              <Say voice="female">
                Another business tip: Focus on providing exceptional customer service. Happy customers are more likely to refer your business to others.
                Press 1 to repeat this tip.
                Press 2 to hear another tip.
                Press 9 to return to the main menu.
              </Say>
              <GetDigits timeout="30" finishOnKey="#" callbackUrl="/api/voice/tip">
                <Say voice="female">
                  Please make your selection followed by the hash key.
                </Say>
              </GetDigits>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }
      case "9":
        return {
          response: `
            <Response>
              <Redirect>/api/voice</Redirect>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }
      default:
        return {
          response: `
            <Response>
              <Say voice="female">
                Sorry, I didn't understand your selection. Let's try again.
              </Say>
              <Redirect>/api/voice</Redirect>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }
    }
  }

  // Handle mentor selection
  if (callAction === "mentor") {
    // In a real implementation, this would extract the digits from the request
    const digits = "1" // Simulated user input

    switch (digits) {
      case "1":
        return {
          response: `
            <Response>
              <Say voice="female">
                Thank you for confirming. You will receive an SMS shortly with available time slots for your mentor call.
              </Say>
              <Hangup/>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }
      case "9":
        return {
          response: `
            <Response>
              <Redirect>/api/voice</Redirect>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }
      default:
        return {
          response: `
            <Response>
              <Say voice="female">
                Sorry, I didn't understand your selection. Let's try again.
              </Say>
              <Redirect>/api/voice</Redirect>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }
    }
  }

  // Handle lesson selection
  if (callAction === "lesson") {
    // In a real implementation, this would extract the digits from the request
    const digits = "1" // Simulated user input

    switch (digits) {
      case "1":
        return {
          response: `
            <Response>
              <Say voice="female">
                The first lesson focuses on identifying problems in your community that can be solved through entrepreneurship. Think about the daily challenges people face and how you can create a business to address them.
                Press 2 to skip to the next lesson.
                Press 9 to return to the main menu.
              </Say>
              <GetDigits timeout="30" finishOnKey="#" callbackUrl="/api/voice/lesson">
                <Say voice="female">
                  Please make your selection followed by the hash key.
                </Say>
              </GetDigits>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }
      case "2":
        return {
          response: `
            <Response>
              <Say voice="female">
                The next lesson covers market research. Before starting a business, it's crucial to understand your target market and their needs.
                Press 1 to repeat this lesson.
                Press 9 to return to the main menu.
              </Say>
              <GetDigits timeout="30" finishOnKey="#" callbackUrl="/api/voice/lesson">
                <Say voice="female">
                  Please make your selection followed by the hash key.
                </Say>
              </GetDigits>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }
      case "9":
        return {
          response: `
            <Response>
              <Redirect>/api/voice</Redirect>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }
      default:
        return {
          response: `
            <Response>
              <Say voice="female">
                Sorry, I didn't understand your selection. Let's try again.
              </Say>
              <Redirect>/api/voice</Redirect>
            </Response>
          `,
          sessionId,
          phoneNumber,
        }
    }
  }

  return {
    response: `
      <Response>
        <Say voice="female">
          I'm sorry, I didn't understand that request. Let's return to the main menu.
        </Say>
        <Redirect>/api/voice</Redirect>
      </Response>
    `,
    sessionId,
    phoneNumber,
  }
}

