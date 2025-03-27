"""
Voice Service for SkillConnect
Handles voice call processing and responses
"""

def process_voice_request(session_id, phone_number, call_action=None):
    """
    Process voice call requests and generate appropriate responses
    
    Args:
        session_id (str): The voice call session ID
        phone_number (str): The user's phone number
        call_action (str, optional): The current call action/state
        
    Returns:
        dict: Response data including voice XML
    """
    # Default welcome message for new calls
    if not call_action:
        return {
            # In a real implementation, this would be an XML response for Africa's Talking Voice API
            'response': """
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
            """,
            'session_id': session_id,
            'phone_number': phone_number
        }
    
    # Handle menu selection
    if call_action == 'menu':
        # In a real implementation, this would extract the digits from the request
        digits = '1'  # Simulated user input
        
        if digits == '1':
            return {
                'response': """
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
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
        elif digits == '2':
            return {
                'response': """
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
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
        elif digits == '3':
            return {
                'response': """
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
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
        elif digits == '0':
            return {
                'response': """
                    <Response>
                      <Say voice="female">
                        Connecting you to customer support. Please hold while we connect your call.
                      </Say>
                      <Dial phoneNumbers="+254700000000" />
                    </Response>
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
        else:
            return {
                'response': """
                    <Response>
                      <Say voice="female">
                        Sorry, I didn't understand your selection. Let's try again.
                      </Say>
                      <Redirect>/api/voice</Redirect>
                    </Response>
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
    
    # Handle module selection
    if call_action == 'module':
        # In a real implementation, this would extract the digits from the request
        digits = '1'  # Simulated user input
        
        # Simulated module content
        module_content = {
            '1': """Business Planning Basics: This module covers how to identify business opportunities, conduct market research, and create a viable business plan. The first lesson focuses on identifying problems in your community that can be solved through entrepreneurship."""
        }
        
        if digits in module_content:
            return {
                'response': f"""
                    <Response>
                      <Say voice="female">
                        {module_content[digits]}
                        Press 1 to listen to this lesson now.
                        Press 2 to skip to the next lesson.
                        Press 9 to return to the main menu.
                      </Say>
                      <GetDigits timeout="30" finishOnKey="#" callbackUrl="/api/voice/lesson">
                        <Say voice="female">
                          Please make your selection followed by the hash key.
                        </Say>
                      </GetDigits>
                    </Response>
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
    
    # Handle tip selection
    if call_action == 'tip':
        # In a real implementation, this would extract the digits from the request
        digits = '1'  # Simulated user input
        
        if digits == '1':
            return {
                'response': """
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
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
        elif digits == '2':
            return {
                'response': """
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
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
        elif digits == '9':
            return {
                'response': """
                    <Response>
                      <Redirect>/api/voice</Redirect>
                    </Response>
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
    
    # Handle mentor selection
    if call_action == 'mentor':
        # In a real implementation, this would extract the digits from the request
        digits = '1'  # Simulated user input
        
        if digits == '1':
            return {
                'response': """
                    <Response>
                      <Say voice="female">
                        Thank you for confirming. You will receive an SMS shortly with available time slots for your mentor call.
                      </Say>
                      <Hangup/>
                    </Response>
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
        elif digits == '9':
            return {
                'response': """
                    <Response>
                      <Redirect>/api/voice</Redirect>
                    </Response>
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
    
    # Handle lesson selection
    if call_action == 'lesson':
        # In a real implementation, this would extract the digits from the request
        digits = '1'  # Simulated user input
        
        if digits == '1':
            return {
                'response': """
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
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
        elif digits == '2':
            return {
                'response': """
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
                """,
                'session_id': session_id,
                'phone_number': phone_number
            }
    
    # Default response for unrecognized actions
    return {
        'response': """
            <Response>
              <Say voice="female">
                I'm sorry, I didn't understand that request. Let's return to the main menu.
              </Say>
              <Redirect>/api/voice</Redirect>
            </Response>
        """,
        'session_id': session_id,
        'phone_number': phone_number
    }

