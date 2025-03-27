from flask import Flask, request, jsonify, render_template, redirect, url_for, flash, session
from dotenv import load_dotenv
import os
import json
from datetime import datetime
from services.sms_service import process_sms_request
from services.ussd_service import process_ussd_request
from services.voice_service import process_voice_request
from services.user_service import get_user_progress, get_user_by_phone, register_user, get_all_users
from services.learning_service import get_learning_modules, get_module_by_id
from services.mentor_service import get_mentors, get_mentor_by_id

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'skillconnect-secret-key')

# Sample admin credentials
ADMIN_USERNAME = os.getenv('ADMIN_USERNAME', 'admin')
ADMIN_PASSWORD = os.getenv('ADMIN_PASSWORD', 'admin123')

@app.route('/')
def home():
    """Render the home page"""
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    """Handle user login"""
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        # For demo purposes, we'll use a simple authentication
        # In a real app, you would check against a database
        if username == ADMIN_USERNAME and password == ADMIN_PASSWORD:
            session['logged_in'] = True
            session['username'] = username
            flash('Login successful!', 'success')
            return redirect(url_for('dashboard'))
        else:
            # For demo, let's also allow any phone number as username and "password" as password
            if password == "password":
                user = get_user_by_phone(username)
                if not user:
                    # Register a new user with the phone number
                    user = register_user(username)
                
                session['logged_in'] = True
                session['username'] = username
                session['user_id'] = user['id']
                flash('Login successful!', 'success')
                return redirect(url_for('dashboard'))
            else:
                flash('Invalid credentials. Please try again.', 'danger')
    
    return render_template('login.html')

@app.route('/logout')
def logout():
    """Handle user logout"""
    session.clear()
    flash('You have been logged out.', 'info')
    return redirect(url_for('home'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    """Handle user registration"""
    if request.method == 'POST':
        phone_number = request.form.get('phone_number')
        name = request.form.get('name')
        email = request.form.get('email')
        
        # Check if user already exists
        existing_user = get_user_by_phone(phone_number)
        if existing_user:
            flash('A user with this phone number already exists.', 'warning')
            return redirect(url_for('login'))
        
        # Register new user
        user = register_user(phone_number, name, email)
        
        # Log the user in
        session['logged_in'] = True
        session['username'] = name or phone_number
        session['user_id'] = user['id']
        
        flash('Registration successful! Welcome to SkillConnect.', 'success')
        return redirect(url_for('dashboard'))
    
    return render_template('register.html')

@app.route('/dashboard')
def dashboard():
    """Render the dashboard page"""
    # Check if user is logged in
    if not session.get('logged_in'):
        flash('Please log in to access the dashboard.', 'warning')
        return redirect(url_for('login'))
    
    # Get user data
    user_id = session.get('user_id', '1')  # Default to user 1 for demo
    user = get_user_by_phone(user_id)
    progress = get_user_progress(user_id)
    modules = get_learning_modules()
    mentors = get_mentors()
    
    return render_template(
        'dashboard.html', 
        user=user, 
        progress=progress, 
        modules=modules,
        mentors=mentors
    )

@app.route('/module/<module_id>')
def module_detail(module_id):
    """Render the module detail page"""
    # Check if user is logged in
    if not session.get('logged_in'):
        flash('Please log in to access learning modules.', 'warning')
        return redirect(url_for('login'))
    
    module = get_module_by_id(module_id)
    if not module:
        flash('Module not found.', 'danger')
        return redirect(url_for('dashboard'))
    
    user_id = session.get('user_id', '1')
    progress = get_user_progress(user_id)
    module_progress = progress.get('modules_progress', {}).get(module_id, 0)
    
    return render_template(
        'module.html',
        module=module,
        progress=module_progress
    )

@app.route('/mentor/<mentor_id>')
def mentor_detail(mentor_id):
    """Render the mentor detail page"""
    # Check if user is logged in
    if not session.get('logged_in'):
        flash('Please log in to view mentor profiles.', 'warning')
        return redirect(url_for('login'))
    
    mentor = get_mentor_by_id(mentor_id)
    if not mentor:
        flash('Mentor not found.', 'danger')
        return redirect(url_for('dashboard'))
    
    return render_template('mentor.html', mentor=mentor)

@app.route('/admin')
def admin_dashboard():
    """Render the admin dashboard"""
    # Check if user is logged in as admin
    if not session.get('logged_in') or session.get('username') != ADMIN_USERNAME:
        flash('You do not have permission to access the admin dashboard.', 'danger')
        return redirect(url_for('login'))
    
    users = get_all_users()
    modules = get_learning_modules()
    mentors = get_mentors()
    
    return render_template(
        'admin.html',
        users=users,
        modules=modules,
        mentors=mentors
    )

@app.route('/api/sms', methods=['POST'])
def handle_sms():
    """Handle incoming SMS messages"""
    try:
        data = request.json
        phone_number = data.get('phoneNumber')
        message = data.get('message')
        
        if not phone_number or not message:
            return jsonify({'error': 'Phone number and message are required'}), 400
        
        # Process the SMS request
        response = process_sms_request(phone_number, message)
        
        # Log the interaction
        log_interaction('sms', phone_number, message, response)
        
        return jsonify({'success': True, 'response': response})
    
    except Exception as e:
        print(f"SMS processing error: {str(e)}")
        return jsonify({'error': 'Failed to process SMS request'}), 500

@app.route('/api/ussd', methods=['POST'])
def handle_ussd():
    """Handle USSD requests"""
    try:
        data = request.json
        session_id = data.get('sessionId')
        phone_number = data.get('phoneNumber')
        text = data.get('text')
        service_code = data.get('serviceCode')
        
        if not session_id or not phone_number or not service_code:
            return jsonify({'error': 'Session ID, phone number, and service code are required'}), 400
        
        # Process the USSD request
        response = process_ussd_request(session_id, phone_number, text, service_code)
        
        # Log the interaction
        log_interaction('ussd', phone_number, text, response)
        
        return jsonify({'success': True, 'response': response})
    
    except Exception as e:
        print(f"USSD processing error: {str(e)}")
        return jsonify({'error': 'Failed to process USSD request'}), 500

@app.route('/api/voice', methods=['POST'])
def handle_voice():
    """Handle voice calls"""
    try:
        data = request.json
        session_id = data.get('sessionId')
        phone_number = data.get('phoneNumber')
        call_action = data.get('callAction')
        
        if not session_id or not phone_number:
            return jsonify({'error': 'Session ID and phone number are required'}), 400
        
        # Process the voice call
        response = process_voice_request(session_id, phone_number, call_action)
        
        # Log the interaction
        log_interaction('voice', phone_number, call_action or 'initial', response)
        
        return jsonify({'success': True, 'response': response})
    
    except Exception as e:
        print(f"Voice processing error: {str(e)}")
        return jsonify({'error': 'Failed to process voice request'}), 500

@app.route('/api/modules', methods=['GET'])
def get_modules():
    """Get all learning modules"""
    modules = get_learning_modules()
    return jsonify(modules)

@app.route('/api/modules/<module_id>', methods=['GET'])
def get_module(module_id):
    """Get a specific learning module"""
    module = get_module_by_id(module_id)
    if module:
        return jsonify(module)
    return jsonify({'error': 'Module not found'}), 404

@app.route('/api/mentors', methods=['GET'])
def get_all_mentors():
    """Get all mentors"""
    mentors = get_mentors()
    return jsonify(mentors)

@app.route('/api/mentors/<mentor_id>', methods=['GET'])
def get_mentor(mentor_id):
    """Get a specific mentor"""
    mentor = get_mentor_by_id(mentor_id)
    if mentor:
        return jsonify(mentor)
    return jsonify({'error': 'Mentor not found'}), 404

def log_interaction(channel, phone_number, request_data, response_data):
    """Log user interactions for analytics"""
    log_dir = 'logs'
    if not os.path.exists(log_dir):
        os.makedirs(log_dir)
    
    log_file = os.path.join(log_dir, f"{channel}_interactions.log")
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    log_entry = {
        'timestamp': timestamp,
        'phone_number': phone_number,
        'request': request_data,
        'response': response_data
    }
    
    with open(log_file, 'a') as f:
        f.write(json.dumps(log_entry) + '\n')

@app.errorhandler(404)
def page_not_found(e):
    """Handle 404 errors"""
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_error(e):
    """Handle 500 errors"""
    return render_template('500.html'), 500

if __name__ == '__main__':
    # Create log directory if it doesn't exist
    if not os.path.exists('logs'):
        os.makedirs('logs')
    
    # Run the Flask app
    app.run(debug=True, port=5000)


