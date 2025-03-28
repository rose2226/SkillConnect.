import streamlit as st
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
from dotenv import load_dotenv
load_dotenv()

# Set page config
st.set_page_config(
    page_title="SkillConnect - Entrepreneurship Platform",
    page_icon="📱",
    layout="wide"
)

# Define functions to handle API requests in Streamlit
def handle_sms_request(phone_number, message):
    """Handle SMS requests"""
    response = process_sms_request(phone_number, message)
    # Log the interaction
    log_interaction('sms', phone_number, message, response)
    return response

def handle_ussd_request(session_id, phone_number, text, service_code):
    """Handle USSD requests"""
    response = process_ussd_request(session_id, phone_number, text, service_code)
    # Log the interaction
    log_interaction('ussd', phone_number, text, response)
    return response

def handle_voice_request(session_id, phone_number, call_action=None):
    """Handle voice call requests"""
    response = process_voice_request(session_id, phone_number, call_action)
    # Log the interaction
    log_interaction('voice', phone_number, call_action or 'initial', response)
    return response

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

# Main Streamlit app
def main():
    st.title("SkillConnect - Entrepreneurship Platform")
    
    # Debug information
    st.write("App is running. If you can see this message, the app is working correctly.")
    
    # Sidebar navigation
    st.sidebar.title("Navigation")
    page = st.sidebar.radio("Go to", ["Home", "SMS Demo", "USSD Demo", "Voice Demo", "Learning Modules", "Mentors"])
    
    # Display content based on selection
    if page == "Home":
        show_home_page()
    elif page == "SMS Demo":
        show_sms_demo()
    elif page == "USSD Demo":
        show_ussd_demo()
    elif page == "Voice Demo":
        show_voice_demo()
    elif page == "Learning Modules":
        show_learning_modules()
    elif page == "Mentors":
        show_mentors()

def show_home_page():
    st.header("Welcome to SkillConnect")
    st.write("""
    SkillConnect is a platform designed to empower entrepreneurs through accessible skills development and networking.
    Our platform leverages SMS, USSD, and voice channels to make entrepreneurship education accessible to everyone.
    """)
    
    # Display key features
    st.subheader("Key Features")
    col1, col2, col3 = st.columns(3)
    
    with col1:
        st.markdown("### SMS Learning")
        st.write("Receive bite-sized entrepreneurship lessons directly via SMS.")
    
    with col2:
        st.markdown("### USSD Assessments")
        st.write("Take skill assessments using simple USSD codes on any phone.")
    
    with col3:
        st.markdown("### Mentor Matching")
        st.write("Connect with experienced entrepreneurs who can guide your journey.")
    
    # Call to action
    st.subheader("Try Our Demo")
    st.write("Use the sidebar to navigate to our interactive demos and explore the platform's features.")

def show_sms_demo():
    st.header("SMS Demo")
    st.write("This demo simulates the SMS learning experience. Enter a phone number and message to see how our system responds.")
    
    # Input form
    with st.form("sms_form"):
        phone_number = st.text_input("Phone Number", "+254700000001")
        message = st.selectbox(
            "Message", 
            ["REGISTER", "MENU", "LEARN", "1", "2", "3", "biz101 1", "fin101 2", "mkt101 3", "HELP"]
        )
        submitted = st.form_submit_button("Send SMS")
        
        if submitted:
            response = handle_sms_request(phone_number, message)
            
            # Display response
            st.subheader("Response")
            st.success(response['message'])
            
            # Display additional details
            with st.expander("Response Details"):
                st.json(response)

def show_ussd_demo():
    st.header("USSD Demo")
    st.write("This demo simulates the USSD experience. Enter the required information to see how our system responds.")
    
    # Input form
    with st.form("ussd_form"):
        session_id = st.text_input("Session ID", "USSD123456789")
        phone_number = st.text_input("Phone Number", "+254700000001")
        service_code = st.text_input("Service Code", "*123#")
        
        # USSD navigation simulation
        ussd_level = st.selectbox(
            "USSD Navigation Level",
            ["Initial Menu", "Take Assessment (1)", "Select Assessment Type (1*1)", "Start Assessment (1*1*1)"]
        )
        
        # Map selection to appropriate USSD text
        ussd_text_mapping = {
            "Initial Menu": "",
            "Take Assessment (1)": "1",
            "Select Assessment Type (1*1)": "1*1",
            "Start Assessment (1*1*1)": "1*1*1"
        }
        
        text = ussd_text_mapping[ussd_level]
        
        submitted = st.form_submit_button("Send USSD Request")
        
        if submitted:
            response = handle_ussd_request(session_id, phone_number, text, service_code)
            
            # Display response
            st.subheader("Response")
            st.code(response['response'], language=None)
            
            # Display additional details
            with st.expander("Response Details"):
                st.json(response)

def show_voice_demo():
    st.header("Voice Demo")
    st.write("This demo simulates the voice learning experience. Enter the required information to see how our system responds.")
    
    # Input form
    with st.form("voice_form"):
        session_id = st.text_input("Session ID", "VOICE123456789")
        phone_number = st.text_input("Phone Number", "+254700000001")
        
        # Voice call action simulation
        call_action = st.selectbox(
            "Call Action",
            ["Initial Greeting", "Menu Selection", "Module Selection", "Tip Selection", "Mentor Selection", "Lesson Selection"]
        )
        
        # Map selection to appropriate call action
        call_action_mapping = {
            "Initial Greeting": None,
            "Menu Selection": "menu",
            "Module Selection": "module",
            "Tip Selection": "tip",
            "Mentor Selection": "mentor",
            "Lesson Selection": "lesson"
        }
        
        action = call_action_mapping[call_action]
        
        submitted = st.form_submit_button("Make Voice Call")
        
        if submitted:
            response = handle_voice_request(session_id, phone_number, action)
            
            # Display response
            st.subheader("Response")
            st.code(response['response'], language=None)
            
            # Display additional details
            with st.expander("Response Details"):
                st.json(response)

def show_learning_modules():
    st.header("Learning Modules")
    
    # Get all modules
    modules = get_learning_modules()
    
    # Display modules in a grid
    col1, col2, col3 = st.columns(3)
    cols = [col1, col2, col3]
    
    for i, module in enumerate(modules):
        with cols[i % 3]:
            st.subheader(module['title'])
            st.image(module['image'], use_column_width=True)
            st.write(module['description'])
            st.write(f"**Lessons:** {module['lesson_count']}")
            
            # Create a unique key for each expander
            if st.button(f"View Lessons", key=f"btn_{module['id']}"):
                st.session_state.selected_module = module['id']
    
    # Show module details if selected
    if 'selected_module' in st.session_state:
        module_id = st.session_state.selected_module
        module = get_module_by_id(module_id)
        
        if module:
            st.markdown("---")
            st.subheader(f"{module['title']} - Lessons")
            
            for lesson in module['lessons']:
                with st.expander(f"{lesson['title']} ({lesson['duration']} min)"):
                    st.write(lesson['content'])
                    if lesson['video_url']:
                        st.video(lesson['video_url'])

def show_mentors():
    st.header("Mentors")
    
    # Get all mentors
    mentors_list = get_mentors()
    
    # Display mentors in a grid
    col1, col2 = st.columns(2)
    cols = [col1, col2]
    
    for i, mentor in enumerate(mentors_list):
        with cols[i % 2]:
            st.subheader(mentor['name'])
            st.image(mentor['profile_image'], width=150)
            st.write(f"**Title:** {mentor['title']}")
            st.write(f"**Bio:** {mentor['bio']}")
            st.write(f"**Rating:** {'⭐' * int(mentor['rating'])} ({mentor['rating']})")
            st.write(f"**Sessions Conducted:** {mentor['sessions_conducted']}")
            
            # Display expertise
            st.write("**Expertise:**")
            for expertise in mentor['expertise']:
                st.write(f"- {expertise}")
            
            # Create a unique key for each expander
            if st.button(f"View Profile", key=f"btn_{mentor['id']}"):
                st.session_state.selected_mentor = mentor['id']
    
    # Show mentor details if selected
    if 'selected_mentor' in st.session_state:
        mentor_id = st.session_state.selected_mentor
        mentor = get_mentor_by_id(mentor_id)
        
        if mentor:
            st.markdown("---")
            st.subheader(f"{mentor['name']} - Profile")
            
            st.write(f"**Background:** {mentor['background']}")
            
            st.write("**Testimonials:**")
            for testimonial in mentor['testimonials']:
                st.markdown(f"> *\"{testimonial['text']}\"*")
                st.write(f"— {testimonial['name']}, {testimonial['business']}")

if __name__ == "__main__":
    main()
































