"""
User Service for SkillConnect
Handles user data and operations
"""

# Mock user data for demonstration
users = [
    {
        'id': '1',
        'phone_number': '+254700000001',
        'name': 'John Doe',
        'email': 'john@example.com',
        'registration_date': '2023-01-15',
        'membership_level': 'Basic',
        'profile_image': 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        'id': '2',
        'phone_number': '+254700000002',
        'name': 'Jane Smith',
        'email': 'jane@example.com',
        'registration_date': '2023-02-20',
        'membership_level': 'Premium',
        'profile_image': 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        'id': '3',
        'phone_number': '+254700000003',
        'name': 'David Kimani',
        'email': 'david@example.com',
        'registration_date': '2023-03-10',
        'membership_level': 'Basic',
        'profile_image': 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        'id': '4',
        'phone_number': '+254700000004',
        'name': 'Grace Ochieng',
        'email': 'grace@example.com',
        'registration_date': '2023-04-05',
        'membership_level': 'Premium',
        'profile_image': 'https://randomuser.me/api/portraits/women/4.jpg'
    }
]

# Mock user progress data
user_progress = {
    '1': {
        'modules_progress': {
            'biz101': 60,  # Percentage complete
            'fin101': 30,
            'mkt101': 45
        },
        'assessments_completed': [
            {'id': 'business', 'score': 75, 'date': '2023-03-10'},
            {'id': 'marketing', 'score': 82, 'date': '2023-04-05'}
        ],
        'mentor_sessions': [
            {'mentor_id': '1', 'date': '2023-03-15', 'duration': 30, 'notes': 'Discussed business plan'}
        ],
        'badges_earned': [
            {'id': 'first_module', 'name': 'First Steps', 'date': '2023-02-01'},
            {'id': 'mentor_connect', 'name': 'Mentor Connection', 'date': '2023-03-15'}
        ]
    },
    '2': {
        'modules_progress': {
            'biz101': 100,  # Percentage complete
            'fin101': 75,
            'mkt101': 90
        },
        'assessments_completed': [
            {'id': 'business', 'score': 90, 'date': '2023-02-25'},
            {'id': 'financial', 'score': 85, 'date': '2023-03-15'},
            {'id': 'marketing', 'score': 92, 'date': '2023-04-10'}
        ],
        'mentor_sessions': [
            {'mentor_id': '2', 'date': '2023-03-05', 'duration': 45, 'notes': 'Reviewed marketing strategy'},
            {'mentor_id': '1', 'date': '2023-04-20', 'duration': 60, 'notes': 'Financial planning session'}
        ],
        'badges_earned': [
            {'id': 'first_module', 'name': 'First Steps', 'date': '2023-01-25'},
            {'id': 'mentor_connect', 'name': 'Mentor Connection', 'date': '2023-03-05'},
            {'id': 'assessment_pro', 'name': 'Assessment Pro', 'date': '2023-04-10'},
            {'id': 'module_master', 'name': 'Module Master', 'date': '2023-04-15'}
        ]
    },
    '3': {
        'modules_progress': {
            'biz101': 85,
            'fin101': 40,
            'mkt101': 20
        },
        'assessments_completed': [
            {'id': 'business', 'score': 80, 'date': '2023-03-20'}
        ],
        'mentor_sessions': [
            {'mentor_id': '3', 'date': '2023-04-10', 'duration': 30, 'notes': 'Initial consultation'}
        ],
        'badges_earned': [
            {'id': 'first_module', 'name': 'First Steps', 'date': '2023-03-15'}
        ]
    },
    '4': {
        'modules_progress': {
            'biz101': 100,
            'fin101': 100,
            'mkt101': 70
        },
        'assessments_completed': [
            {'id': 'business', 'score': 95, 'date': '2023-04-01'},
            {'id': 'financial', 'score': 90, 'date': '2023-04-15'}
        ],
        'mentor_sessions': [
            {'mentor_id': '1', 'date': '2023-04-05', 'duration': 45, 'notes': 'Business expansion strategy'},
            {'mentor_id': '2', 'date': '2023-04-25', 'duration': 30, 'notes': 'Financial planning'}
        ],
        'badges_earned': [
            {'id': 'first_module', 'name': 'First Steps', 'date': '2023-02-10'},
            {'id': 'mentor_connect', 'name': 'Mentor Connection', 'date': '2023-04-05'},
            {'id': 'module_master', 'name': 'Module Master', 'date': '2023-04-20'}
        ]
    }
}

def get_all_users():
    """
    Get all users
    
    Returns:
        list: All users
    """
    return users

def get_user_by_phone(phone_number):
    """
    Get a user by their phone number
    
    Args:
        phone_number (str): The user's phone number or ID
        
    Returns:
        dict: User data or None if not found
    """
    # For demo purposes, if the phone_number is a user ID, return that user
    if phone_number in [user['id'] for user in users]:
        return next((user for user in users if user['id'] == phone_number), None)
    
    # Otherwise, look up by actual phone number
    return next((user for user in users if user['phone_number'] == phone_number), None)

def get_user_progress(user_id):
    """
    Get a user's learning progress
    
    Args:
        user_id (str): The user's ID
        
    Returns:
        dict: User progress data or empty dict if not found
    """
    return user_progress.get(user_id, {})

def register_user(phone_number, name=None, email=None):
    """
    Register a new user
    
    Args:
        phone_number (str): The user's phone number
        name (str, optional): The user's name
        email (str, optional): The user's email
        
    Returns:
        dict: The newly created user data
    """
    # Check if user already exists
    existing_user = get_user_by_phone(phone_number)
    if existing_user:
        return existing_user
    
    # Create new user
    import datetime
    import random
    
    # Generate a random profile image from randomuser.me
    gender = random.choice(['men', 'women'])
    image_id = random.randint(1, 99)
    profile_image = f"https://randomuser.me/api/portraits/{gender}/{image_id}.jpg"
    
    new_user = {
        'id': str(len(users) + 1),
        'phone_number': phone_number,
        'name': name or f"User{len(users) + 1}",
        'email': email,
        'registration_date': datetime.datetime.now().strftime('%Y-%m-%d'),
        'membership_level': 'Basic',
        'profile_image': profile_image
    }
    
    # Add to users list (in a real app, this would be a database insert)
    users.append(new_user)
    
    # Initialize progress tracking
    user_progress[new_user['id']] = {
        'modules_progress': {},
        'assessments_completed': [],
        'mentor_sessions': [],
        'badges_earned': []
    }
    
    return new_user

def update_user_progress(user_id, module_id, progress_percentage):
    """
    Update a user's progress in a learning module
    
    Args:
        user_id (str): The user's ID
        module_id (str): The module ID
        progress_percentage (int): The progress percentage (0-100)
        
    Returns:
        dict: Updated user progress data
    """
    if user_id not in user_progress:
        user_progress[user_id] = {
            'modules_progress': {},
            'assessments_completed': [],
            'mentor_sessions': [],
            'badges_earned': []
        }
    
    user_progress[user_id]['modules_progress'][module_id] = progress_percentage
    
    # Check if user completed their first module
    if progress_percentage == 100 and 'first_module' not in [badge['id'] for badge in user_progress[user_id].get('badges_earned', [])]:
        import datetime
        user_progress[user_id].setdefault('badges_earned', []).append({
            'id': 'first_module',
            'name': 'First Steps',
            'date': datetime.datetime.now().strftime('%Y-%m-%d')
        })
    
    # Check if user completed all modules
    all_modules_complete = all(progress == 100 for progress in user_progress[user_id]['modules_progress'].values())
    if all_modules_complete and len(user_progress[user_id]['modules_progress']) >= 3:
        if 'module_master' not in [badge['id'] for badge in user_progress[user_id].get('badges_earned', [])]:
            import datetime
            user_progress[user_id].setdefault('badges_earned', []).append({
                'id': 'module_master',
                'name': 'Module Master',
                'date': datetime.datetime.now().strftime('%Y-%m-%d')
            })
    
    return user_progress[user_id]

def record_assessment(user_id, assessment_id, score):
    """
    Record a completed assessment for a user
    
    Args:
        user_id (str): The user's ID
        assessment_id (str): The assessment ID
        score (int): The assessment score
        
    Returns:
        dict: Updated user progress data
    """
    import datetime
    
    if user_id not in user_progress:
        user_progress[user_id] = {
            'modules_progress': {},
            'assessments_completed': [],
            'mentor_sessions': [],
            'badges_earned': []
        }
    
    assessment = {
        'id': assessment_id,
        'score': score,
        'date': datetime.datetime.now().strftime('%Y-%m-%d')
    }
    
    user_progress[user_id].setdefault('assessments_completed', []).append(assessment)
    
    # Check if user has completed 3 or more assessments
    if len(user_progress[user_id]['assessments_completed']) >= 3:
        if 'assessment_pro' not in [badge['id'] for badge in user_progress[user_id].get('badges_earned', [])]:
            user_progress[user_id].setdefault('badges_earned', []).append({
                'id': 'assessment_pro',
                'name': 'Assessment Pro',
                'date': datetime.datetime.now().strftime('%Y-%m-%d')
            })
    
    return user_progress[user_id]

def schedule_mentor_session(user_id, mentor_id, date, duration=30, notes=''):
    """
    Schedule a mentor session for a user
    
    Args:
        user_id (str): The user's ID
        mentor_id (str): The mentor's ID
        date (str): The session date (YYYY-MM-DD)
        duration (int, optional): The session duration in minutes
        notes (str, optional): Session notes
        
    Returns:
        dict: Updated user progress data
    """
    if user_id not in user_progress:
        user_progress[user_id] = {
            'modules_progress': {},
            'assessments_completed': [],
            'mentor_sessions': [],
            'badges_earned': []
        }
    
    session = {
        'mentor_id': mentor_id,
        'date': date,
        'duration': duration,
        'notes': notes
    }
    
    user_progress[user_id].setdefault('mentor_sessions', []).append(session)
    
    # Award mentor connection badge if this is their first session
    if len(user_progress[user_id]['mentor_sessions']) == 1:
        import datetime
        if 'mentor_connect' not in [badge['id'] for badge in user_progress[user_id].get('badges_earned', [])]:
            user_progress[user_id].setdefault('badges_earned', []).append({
                'id': 'mentor_connect',
                'name': 'Mentor Connection',
                'date': datetime.datetime.now().strftime('%Y-%m-%d')
            })
    
    return user_progress[user_id]

