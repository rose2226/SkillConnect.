"""
Mentor Service for SkillConnect
Handles mentor data and matching
"""

# Mock mentor data
mentors = [
    {
        'id': '1',
        'name': 'James Mwangi',
        'title': 'Business Development Expert',
        'bio': '15+ years experience in small business development and entrepreneurship training.',
        'expertise': ['business planning', 'market research', 'startup growth'],
        'availability': ['Monday', 'Wednesday', 'Friday'],
        'rating': 4.8,
        'sessions_conducted': 42,
        'profile_image': 'https://randomuser.me/api/portraits/men/32.jpg',
        'background': 'James has helped over 200 entrepreneurs start and grow their businesses across East Africa. He specializes in identifying market opportunities and creating sustainable business models.',
        'testimonials': [
            {
                'name': 'Sarah K.',
                'business': 'Handcrafted Jewelry',
                'text': 'James helped me transform my hobby into a profitable business. His guidance on pricing and market positioning was invaluable.'
            },
            {
                'name': 'David M.',
                'business': 'Tech Startup',
                'text': 'Working with James gave me the clarity I needed to refine my business model and secure initial funding.'
            }
        ]
    },
    {
        'id': '2',
        'name': 'Grace Ochieng',
        'title': 'Financial Advisor',
        'bio': 'Specializes in financial planning for small businesses and startups in East Africa.',
        'expertise': ['financial planning', 'bookkeeping', 'funding strategies'],
        'availability': ['Tuesday', 'Thursday', 'Saturday'],
        'rating': 4.9,
        'sessions_conducted': 38,
        'profile_image': 'https://randomuser.me/api/portraits/women/44.jpg',
        'background': 'Grace has a background in banking and microfinance. She now dedicates her time to helping small business owners understand and manage their finances effectively.',
        'testimonials': [
            {
                'name': 'John O.',
                'business': 'Urban Farming',
                'text': 'Grace helped me set up proper bookkeeping systems and secure a small business loan that allowed me to expand my operations.'
            },
            {
                'name': 'Amina H.',
                'business': 'Catering Service',
                'text': 'Thanks to Grace\'s financial guidance, I was able to identify cost-saving opportunities and increase my profit margin by 15%.'
            }
        ]
    },
    {
        'id': '3',
        'name': 'David Kimani',
        'title': 'Marketing Specialist',
        'bio': 'Digital marketing expert with focus on low-cost strategies for small businesses.',
        'expertise': ['digital marketing', 'branding', 'customer acquisition'],
        'availability': ['Monday', 'Tuesday', 'Thursday'],
        'rating': 4.7,
        'sessions_conducted': 31,
        'profile_image': 'https://randomuser.me/api/portraits/men/22.jpg',
        'background': 'David built his marketing career working with both multinational corporations and local businesses. He now focuses on helping entrepreneurs build strong brands and effective marketing strategies with limited budgets.',
        'testimonials': [
            {
                'name': 'Lucy W.',
                'business': 'Beauty Salon',
                'text': 'David helped me establish a social media presence that has brought in dozens of new clients. His strategies were practical and affordable.'
            },
            {
                'name': 'Michael K.',
                'business': 'Mobile Repair Shop',
                'text': 'The local marketing campaign David designed for my business increased foot traffic by 40% within just two months.'
            }
        ]
    },
    {
        'id': '4',
        'name': 'Fatima Hassan',
        'title': 'E-commerce Specialist',
        'bio': 'Expert in helping businesses sell products online and manage digital operations.',
        'expertise': ['e-commerce', 'digital operations', 'online payments'],
        'availability': ['Wednesday', 'Friday', 'Sunday'],
        'rating': 4.8,
        'sessions_conducted': 27,
        'profile_image': 'https://randomuser.me/api/portraits/women/28.jpg',
        'background': 'Fatima has helped dozens of traditional businesses transition to online sales. She specializes in setting up e-commerce operations that are manageable even for those with limited technical skills.',
        'testimonials': [
            {
                'name': 'Robert N.',
                'business': 'Handmade Crafts',
                'text': 'Fatima guided me through setting up my online store and reaching customers beyond my local market. My sales have doubled since working with her.'
            },
            {
                'name': 'Jane M.',
                'business': 'Specialty Foods',
                'text': 'As someone with limited tech knowledge, I was intimidated by e-commerce. Fatima made the process simple and now I\'m successfully selling nationwide.'
            }
        ]
    }
]

def get_mentors():
    """
    Get all mentors
    
    Returns:
        list: All mentors
    """
    return mentors

def get_mentor_by_id(mentor_id):
    """
    Get a specific mentor by ID
    
    Args:
        mentor_id (str): The mentor ID
        
    Returns:
        dict: The mentor data or None if not found
    """
    return next((mentor for mentor in mentors if mentor['id'] == mentor_id), None)

def find_mentors_by_expertise(expertise):
    """
    Find mentors with specific expertise
    
    Args:
        expertise (str): The expertise to search for
        
    Returns:
        list: Mentors with matching expertise
    """
    return [mentor for mentor in mentors if expertise.lower() in [e.lower() for e in mentor['expertise']]]

def get_available_mentors(day_of_week):
    """
    Get mentors available on a specific day
    
    Args:
        day_of_week (str): The day of the week
        
    Returns:
        list: Mentors available on that day
    """
    return [mentor for mentor in mentors if day_of_week.capitalize() in mentor['availability']]

def get_recommended_mentors(user_id, user_progress):
    """
    Get recommended mentors based on user progress
    
    Args:
        user_id (str): The user ID
        user_progress (dict): The user's progress data
        
    Returns:
        list: Recommended mentors
    """
    # This is a simplified recommendation algorithm
    # In a real app, this would be more sophisticated
    
    # Find the module with the lowest progress
    modules_progress = user_progress.get('modules_progress', {})
    if not modules_progress:
        # If no progress data, recommend all mentors
        return mentors
    
    lowest_module = min(modules_progress.items(), key=lambda x: x[1]) if modules_progress else (None, 0)
    module_id = lowest_module[0]
    
    # Map module IDs to expertise areas
    expertise_map = {
        'biz101': 'business planning',
        'fin101': 'financial planning',
        'mkt101': 'digital marketing'
    }
    
    needed_expertise = expertise_map.get(module_id)
    if not needed_expertise:
        return mentors
    
    # Find mentors with the needed expertise
    recommended = find_mentors_by_expertise(needed_expertise)
    
    # If no specific recommendations, return all mentors
    return recommended if recommended else mentors

def schedule_session(mentor_id, user_id, date, time, duration=30):
    """
    Schedule a session with a mentor
    
    Args:
        mentor_id (str): The mentor ID
        user_id (str): The user ID
        date (str): The session date (YYYY-MM-DD)
        time (str): The session time (HH:MM)
        duration (int, optional): The session duration in minutes
        
    Returns:
        dict: Session details
    """
    # In a real app, this would check mentor availability and create a booking
    
    mentor = get_mentor_by_id(mentor_id)
    if not mentor:
        return {'error': 'Mentor not found'}
    
    # Create a session record
    session = {
        'id': f"session_{mentor_id}_{user_id}_{date.replace('-', '')}",
        'mentor_id': mentor_id,
        'mentor_name': mentor['name'],
        'user_id': user_id,
        'date': date,
        'time': time,
        'duration': duration,
        'status': 'scheduled'
    }
    
    # In a real app, this would be saved to a database
    
    return session

