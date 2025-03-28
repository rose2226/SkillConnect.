"""
USSD Service for SkillConnect
Handles USSD request processing and responses
"""

# Mock data for demonstration
skill_assessments = [
    {
        'id': 'business',
        'title': 'Business Planning Assessment',
        'description': 'Evaluate your business planning skills and knowledge.'
    },
    {
        'id': 'financial',
        'title': 'Financial Literacy Assessment',
        'description': 'Test your understanding of business finances and accounting.'
    },
    {
        'id': 'marketing',
        'title': 'Marketing Skills Assessment',
        'description': 'Assess your marketing and customer acquisition knowledge.'
    }
]

def process_ussd_request(session_id, phone_number, text, service_code):
    """
    Process USSD requests and generate appropriate responses
    
    Args:
        session_id (str): The USSD session ID
        phone_number (str): The user's phone number
        text (str): The USSD text input
        service_code (str): The USSD service code
        
    Returns:
        dict: Response data including USSD response text
    """
    # Initial menu (no text input yet)
    if not text:
        return {
            'response': """CON Welcome to SkillConnect!
            
1. Take Skill Assessment
2. View Learning Progress
3. Find a Mentor
4. Access Resources
5. My Profile""",
            'session_id': session_id,
            'phone_number': phone_number,
            'service_code': service_code
        }
    
    # Handle skill assessment menu
    if text == '1':
        assessment_list = '\n'.join([f"{i+1}. {assessment['title']}" for i, assessment in enumerate(skill_assessments)])
        
        return {
            'response': f"""CON Select an assessment:
            
{assessment_list}""",
            'session_id': session_id,
            'phone_number': phone_number,
            'service_code': service_code
        }
    
    # Handle specific assessment selection
    if text.startswith('1*'):
        selection = text.split('*')[1]
        if selection.isdigit() and 1 <= int(selection) <= len(skill_assessments):
            assessment_index = int(selection) - 1
            assessment = skill_assessments[assessment_index]
            
            return {
                'response': f"""CON {assessment['title']}
                
{assessment['description']}

1. Start Assessment
2. View Sample Questions
3. Back to Main Menu""",
                'session_id': session_id,
                'phone_number': phone_number,
                'service_code': service_code
            }
    
    # Handle starting an assessment
    import re
    if re.match(r'^1\*[1-3]\*1$', text):
        parts = text.split('*')
        assessment_index = int(parts[1]) - 1
        assessment = skill_assessments[assessment_index]
        
        return {
            'response': f"""END You have started the {assessment['title']}.
            
We will send you the first question via SMS shortly.
            
Thank you for using SkillConnect!""",
            'session_id': session_id,
            'phone_number': phone_number,
            'service_code': service_code
        }
    
    # Handle viewing learning progress
    if text == '2':
        return {
            'response': """CON Your Learning Progress:
            
Business Basics: 60% complete
Financial Literacy: 30% complete
Marketing Essentials: 45% complete

1. Continue Learning
2. View Certificates
3. Back to Main Menu""",
            'session_id': session_id,
            'phone_number': phone_number,
            'service_code': service_code
        }
    
    # Handle mentor finding
    if text == '3':
        return {
            'response': """CON Find a Mentor:
            
1. Search by Business Sector
2. Search by Location
3. View Recommended Mentors
4. Back to Main Menu""",
            'session_id': session_id,
            'phone_number': phone_number,
            'service_code': service_code
        }
    
    # Handle resources
    if text == '4':
        return {
            'response': """CON Access Resources:
            
1. Business Templates
2. Funding Opportunities
3. Local Business Networks
4. Success Stories
5. Back to Main Menu""",
            'session_id': session_id,
            'phone_number': phone_number,
            'service_code': service_code
        }
    
    # Handle profile
    if text == '5':
        return {
            'response': f"""CON My Profile:
            
Phone: {phone_number}
Membership: Basic
Assessments Completed: 2
Mentor Sessions: 1

1. Update Profile
2. Upgrade Membership
3. Back to Main Menu""",
            'session_id': session_id,
            'phone_number': phone_number,
            'service_code': service_code
        }
    
    # Default response for unrecognized inputs
    return {
        'response': """END Invalid selection. Please dial the service code again and try once more.""",
        'session_id': session_id,
        'phone_number': phone_number,
        'service_code': service_code
    }

