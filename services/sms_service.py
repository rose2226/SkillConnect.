"""
SMS Service for SkillConnect
Handles SMS message processing and responses
"""

# Mock data for demonstration
learning_modules = [
    {
        'id': 'biz101',
        'title': 'Business Basics',
        'lessons': [
            'Lesson 1: Identifying Market Opportunities',
            'Lesson 2: Creating a Business Plan',
            'Lesson 3: Understanding Your Target Market',
        ]
    },
    {
        'id': 'fin101',
        'title': 'Financial Literacy',
        'lessons': [
            'Lesson 1: Bookkeeping Fundamentals',
            'Lesson 2: Pricing Your Products/Services',
            'Lesson 3: Managing Cash Flow',
        ]
    },
    {
        'id': 'mkt101',
        'title': 'Marketing Essentials',
        'lessons': [
            'Lesson 1: Building Your Brand',
            'Lesson 2: Low-Cost Marketing Strategies',
            'Lesson 3: Using Social Media for Business',
        ]
    }
]

def process_sms_request(phone_number, message):
    """
    Process incoming SMS messages and generate appropriate responses
    
    Args:
        phone_number (str): The sender's phone number
        message (str): The SMS message content
        
    Returns:
        dict: Response data including message type and content
    """
    # Convert message to lowercase for easier processing
    lower_message = message.lower().strip()
    
    # Handle registration
    if lower_message.startswith('register'):
        return {
            'type': 'registration',
            'message': 'Welcome to SkillConnect! You have successfully registered. Reply with MENU to see available options or HELP for assistance.',
            'phone_number': phone_number
        }
    
    # Handle menu request
    if lower_message == 'menu':
        return {
            'type': 'menu',
            'message': 'SkillConnect Menu:\n1. LEARN - Access learning modules\n2. ASSESS - Take a skill assessment\n3. MENTOR - Get matched with a mentor\n4. EVENTS - Upcoming workshops\n5. HELP - Get assistance',
            'phone_number': phone_number
        }
    
    # Handle learning module request
    if lower_message == 'learn':
        module_list = '\n'.join([f"{i+1}. {module['title']}" for i, module in enumerate(learning_modules)])
        
        return {
            'type': 'learning',
            'message': f"Available Learning Modules:\n{module_list}\nReply with the module number to access lessons.",
            'phone_number': phone_number
        }
    
    # Handle specific module selection (e.g., "1" for Business Basics)
    if lower_message.isdigit() and 1 <= int(lower_message) <= len(learning_modules):
        module_index = int(lower_message) - 1
        module = learning_modules[module_index]
        lesson_list = '\n'.join(module['lessons'])
        
        return {
            'type': 'module',
            'message': f"{module['title']}:\n{lesson_list}\nReply with {module['id']} followed by lesson number (e.g., {module['id']} 1) to access a specific lesson.",
            'phone_number': phone_number
        }
    
    # Handle specific lesson request (e.g., "biz101 1")
    import re
    lesson_match = re.match(r'^([a-z]+\d+)\s+(\d+)$', lower_message)
    if lesson_match:
        module_id = lesson_match.group(1)
        lesson_number = int(lesson_match.group(2))
        
        module = next((m for m in learning_modules if m['id'] == module_id), None)
        if module and 1 <= lesson_number <= len(module['lessons']):
            # In a real implementation, this would fetch the actual lesson content
            return {
                'type': 'lesson',
                'message': f"{module['lessons'][lesson_number - 1]}\n\nThis lesson covers essential concepts for entrepreneurs. We'll send you part 1 of 3 now:\n\nEntrepreneurship begins with identifying problems that need solutions. Look around your community - what challenges do people face? Each challenge is a potential business opportunity.",
                'phone_number': phone_number
            }
    
    # Handle help request
    if lower_message == 'help':
        return {
            'type': 'help',
            'message': 'SkillConnect Help:\nREGISTER - Create an account\nMENU - View all options\nLEARN - Access learning modules\nASSESS - Take skill assessment\nMENTOR - Get mentor matching\nEVENTS - View upcoming events',
            'phone_number': phone_number
        }
    
    # Default response for unrecognized commands
    return {
        'type': 'unknown',
        'message': 'Command not recognized. Reply with MENU to see available options or HELP for assistance.',
        'phone_number': phone_number
    }

def send_sms(phone_number, message):
    """
    Send an SMS message using Africa's Talking API
    
    In a real implementation, this would use the Africa's Talking SDK
    For this demo, we'll just print the message
    
    Args:
        phone_number (str): The recipient's phone number
        message (str): The message content
        
    Returns:
        dict: Response data from the SMS provider
    """
    print(f"Sending SMS to {phone_number}: {message}")
    
    # In a real implementation, this would use the Africa's Talking SDK
    # Example:
    # import africastalking
    # username = os.getenv("AT_USERNAME")
    # api_key = os.getenv("AT_API_KEY")
    # africastalking.initialize(username, api_key)
    # sms = africastalking.SMS
    # response = sms.send(message, [phone_number])
    # return response
    
    # For demo purposes, return a mock response
    return {
        'success': True,
        'message_id': 'mock-message-id',
        'phone_number': phone_number
    }

