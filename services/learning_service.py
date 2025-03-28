"""
Learning Service for SkillConnect
Handles learning modules and content
"""

# Mock learning modules data
learning_modules = [
  {
      'id': 'biz101',
      'title': 'Business Basics',
      'description': 'Learn the fundamentals of starting and running a business',
      'image': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'lessons': [
          {
              'id': 'biz101_1',
              'title': 'Identifying Market Opportunities',
              'content': 'This lesson covers how to identify problems in your community that can be solved through entrepreneurship. Each problem represents a potential business opportunity.\n\nEntrepreneurship begins with identifying problems that need solutions. Look around your community - what challenges do people face? Each challenge is a potential business opportunity.\n\nKey points to consider:\n\n1. **Observe daily frustrations**: What annoys people? What tasks take too long?\n\n2. **Listen to complaints**: When people complain, they\'re highlighting problems that need solutions.\n\n3. **Identify inefficiencies**: Where are resources being wasted? Where are processes too complicated?\n\n4. **Look for gaps**: What products or services are missing in your area?\n\n5. **Consider your own skills**: What problems are you uniquely positioned to solve?\n\nRemember, the best business opportunities solve real problems for real people.',
              'duration': 15,  # minutes
              'video_url': 'https://www.youtube.com/embed/7YB_qQ9H8zI'
          },
          {
              'id': 'biz101_2',
              'title': 'Creating a Business Plan',
              'content': 'A business plan is a roadmap for your business. This lesson teaches you how to create a simple but effective business plan.\n\nA good business plan helps you clarify your business idea, identify potential problems, and plan for success. It doesn\'t need to be complicated, especially when you\'re just starting out.\n\nComponents of a simple business plan:\n\n1. **Business description**: What does your business do? What problem does it solve?\n\n2. **Market analysis**: Who are your customers? Who are your competitors?\n\n3. **Products/services**: What exactly will you sell? How is it different from what\'s already available?\n\n4. **Marketing strategy**: How will customers find out about your business?\n\n5. **Operational plan**: How will you deliver your product or service?\n\n6. **Financial plan**: How much will it cost to start and run your business? How will you make money?\n\nYour business plan should be a living document that you revisit and revise as your business grows and changes.',
              'duration': 20,
              'video_url': 'https://www.youtube.com/embed/Fqch5OrUPvA'
          },
          {
              'id': 'biz101_3',
              'title': 'Understanding Your Target Market',
              'content': 'Learn how to identify and understand your potential customers, their needs, and how to reach them.\n\nKnowing your target market is essential for business success. The more specific you can be about who your customers are, the better you can serve them.\n\nSteps to understand your target market:\n\n1. **Create customer profiles**: Describe your ideal customers - their age, gender, location, income, interests, and pain points.\n\n2. **Research their needs**: What specific problems do they have that your business can solve?\n\n3. **Understand their buying behavior**: How do they make purchasing decisions? Where do they currently buy similar products or services?\n\n4. **Identify where they spend time**: What media do they consume? What social platforms do they use? Where do they gather in person?\n\n5. **Test your assumptions**: Talk to potential customers to verify that your understanding is correct.\n\nRemember that your target market might change as your business evolves, so regularly revisit and update your customer profiles.',
              'duration': 15,
              'video_url': 'https://www.youtube.com/embed/0mVbNvxZfjs'
          },
          {
              'id': 'biz101_4',
              'title': 'Legal Requirements for Business',
              'content': 'This lesson covers the basic legal requirements for starting a business, including registration and licensing.\n\nComplying with legal requirements is an important part of running a business. The specific requirements vary by country and type of business, but there are some common elements to consider.\n\nCommon legal requirements for businesses:\n\n1. **Business registration**: Registering your business name and structure with the appropriate government agency.\n\n2. **Business licenses and permits**: Obtaining the necessary licenses to operate legally in your location and industry.\n\n3. **Tax registration**: Registering for the appropriate tax IDs and understanding your tax obligations.\n\n4. **Employment laws**: Understanding the legal requirements if you plan to hire employees.\n\n5. **Industry-specific regulations**: Complying with any regulations specific to your industry (e.g., food safety for restaurants).\n\nIt\'s often helpful to consult with a business advisor or lawyer to ensure you\'re meeting all the legal requirements for your specific business.',
              'duration': 20,
              'video_url': 'https://www.youtube.com/embed/8dCBnzR1hy8'
          }
      ]
  },
  {
      'id': 'fin101',
      'title': 'Financial Literacy',
      'description': 'Essential financial knowledge for entrepreneurs',
      'image': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'lessons': [
          {
              'id': 'fin101_1',
              'title': 'Bookkeeping Fundamentals',
              'content': 'Learn the basics of tracking income and expenses for your business.\n\nBookkeeping is the process of recording and organizing your business\'s financial transactions. Good bookkeeping helps you understand your business\'s financial health, prepare for taxes, and make informed decisions.\n\nKey bookkeeping concepts:\n\n1. **Income tracking**: Recording all money coming into your business from sales and other sources.\n\n2. **Expense tracking**: Recording all money going out of your business for supplies, rent, salaries, etc.\n\n3. **Receipts and documentation**: Keeping records of all financial transactions.\n\n4. **Separating business and personal finances**: Maintaining separate accounts for business and personal expenses.\n\n5. **Regular reconciliation**: Comparing your records with bank statements to ensure accuracy.\n\nEven if you plan to hire an accountant eventually, understanding basic bookkeeping will help you manage your business more effectively.',
              'duration': 20,
              'video_url': 'https://www.youtube.com/embed/1tugGhJ0jIE'
          },
          {
              'id': 'fin101_2',
              'title': 'Pricing Your Products/Services',
              'content': 'This lesson covers different pricing strategies and how to determine the right price for your offerings.\n\nPricing is one of the most important decisions you\'ll make for your business. The right price needs to cover your costs, reflect your value, and be competitive in the market.\n\nFactors to consider when setting prices:\n\n1. **Cost of goods/services**: Calculate all direct and indirect costs involved in producing your product or service.\n\n2. **Competitor pricing**: Research what similar businesses charge for comparable offerings.\n\n3. **Perceived value**: Consider what customers are willing to pay based on the value they receive.\n\n4. **Profit margin**: Ensure your price allows for a sustainable profit margin.\n\n5. **Market positioning**: Decide whether you want to position your offering as premium, mid-range, or budget.\n\nCommon pricing strategies include cost-plus pricing, value-based pricing, competitive pricing, and penetration pricing. The best strategy depends on your specific business and market.',
              'duration': 15,
              'video_url': 'https://www.youtube.com/embed/mmm0ccYCFzY'
          },
          {
              'id': 'fin101_3',
              'title': 'Managing Cash Flow',
              'content': 'Cash flow is the lifeblood of any business. Learn how to manage and forecast your cash flow.\n\nCash flow refers to the movement of money in and out of your business. Even profitable businesses can fail if they run out of cash, so managing cash flow is critical.\n\nKey aspects of cash flow management:\n\n1. **Cash flow forecasting**: Predicting when money will come in and go out of your business.\n\n2. **Managing receivables**: Ensuring customers pay you on time.\n\n3. **Managing payables**: Strategically timing when you pay suppliers and other expenses.\n\n4. **Building a cash reserve**: Maintaining a buffer for unexpected expenses or slow periods.\n\n5. **Monitoring cash flow regularly**: Checking your cash position frequently to avoid surprises.\n\nA simple cash flow statement tracks the cash coming in (from sales, loans, etc.) and cash going out (for inventory, rent, salaries, etc.) over a specific period, helping you identify potential cash shortages before they occur.',
              'duration': 20,
              'video_url': 'https://www.youtube.com/embed/VQj5KcPCpyc'
          },
          {
              'id': 'fin101_4',
              'title': 'Funding Options for Small Businesses',
              'content': 'Explore different ways to fund your business, from personal savings to loans and grants.\n\nMost businesses need some initial capital to get started and additional funding to grow. Understanding your funding options helps you choose the best approach for your situation.\n\nCommon funding sources for small businesses:\n\n1. **Personal savings**: Using your own money to fund your business.\n\n2. **Friends and family**: Borrowing from or selling shares to people you know.\n\n3. **Microloans**: Small loans specifically designed for startups and small businesses.\n\n4. **Bank loans**: Traditional business loans from banks or credit unions.\n\n5. **Grants**: Money that doesn\'t need to be repaid, often available for specific types of businesses or purposes.\n\n6. **Crowdfunding**: Raising small amounts of money from many people, typically online.\n\n7. **Angel investors**: Individuals who provide capital in exchange for ownership equity.\n\nEach funding source has its own advantages and disadvantages in terms of cost, control, and accessibility.',
              'duration': 25,
              'video_url': 'https://www.youtube.com/embed/8IHwy0wK_-A'
          }
      ]
  },
  {
      'id': 'mkt101',
      'title': 'Marketing Essentials',
      'description': 'Learn how to promote your business and attract customers',
      'image': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'lessons': [
          {
              'id': 'mkt101_1',
              'title': 'Building Your Brand',
              'content': 'Your brand is more than just a logo. Learn how to create a strong brand identity for your business.\n\nYour brand is the overall perception of your business in the minds of customers. It encompasses your values, personality, and the experience you provide.\n\nElements of a strong brand:\n\n1. **Brand purpose**: Why your business exists beyond making money.\n\n2. **Brand values**: The principles that guide your business decisions.\n\n3. **Brand personality**: The human characteristics associated with your brand.\n\n4. **Visual identity**: Your logo, colors, typography, and other visual elements.\n\n5. **Brand voice**: How your brand communicates in writing and speech.\n\n6. **Customer experience**: How customers feel when interacting with your business.\n\nConsistency is key to building a strong brand. Every touchpoint with customers should reflect your brand identity.',
              'duration': 15,
              'video_url': 'https://www.youtube.com/embed/sO4te2QNsHY'
          },
          {
              'id': 'mkt101_2',
              'title': 'Customer Targeting',
              'content': 'Not everyone is your customer. This lesson helps you identify and focus on your ideal customers.\n\nTargeting the right customers is more effective and cost-efficient than trying to appeal to everyone. This lesson builds on the "Understanding Your Target Market" lesson from the Business Basics module.\n\nSteps for effective customer targeting:\n\n1. **Segment your market**: Divide potential customers into groups based on shared characteristics.\n\n2. **Evaluate each segment**: Assess the size, growth potential, and accessibility of each segment.\n\n3. **Select target segments**: Choose the segments that best align with your business strengths and goals.\n\n4. **Develop positioning**: Create a unique position for your business in the minds of your target customers.\n\n5. **Create targeted marketing messages**: Craft messages that specifically address the needs and preferences of your target segments.\n\nRegularly review and refine your targeting as you learn more about your customers and as market conditions change.',
              'duration': 15,
              'video_url': 'https://www.youtube.com/embed/SU3-pFwx3bf'
          },
          {
              'id': 'mkt101_3',
              'title': 'Low-Cost Marketing Strategies',
              'content': 'Learn effective marketing techniques that don\'t require a big budget.\n\nYou don\'t need a large marketing budget to effectively promote your business. There are many low-cost or free marketing strategies that can help you reach potential customers.\n\nEffective low-cost marketing strategies:\n\n1. **Social media marketing**: Building a presence on platforms where your target customers spend time.\n\n2. **Content marketing**: Creating valuable content that attracts and engages your target audience.\n\n3. **Email marketing**: Building an email list and sending regular updates to stay connected with customers.\n\n4. **Community involvement**: Participating in local events and community activities.\n\n5. **Networking**: Building relationships with other business owners and potential customers.\n\n6. **Referral programs**: Encouraging satisfied customers to refer others to your business.\n\n7. **Partnerships**: Collaborating with complementary businesses to cross-promote each other.\n\nThe key is to focus on strategies that reach your specific target audience, rather than trying to do everything.',
              'duration': 20,
              'video_url': 'https://www.youtube.com/embed/q1fCJtV5XNQ'
          },
          {
              'id': 'mkt101_4',
              'title': 'Building a Digital Presence',
              'content': 'Even small local businesses need a digital presence. Learn the basics of online marketing.\n\nIn today\'s digital world, having an online presence is essential for businesses of all sizes. A strong digital presence helps customers find you and learn about your offerings.\n\nComponents of a digital presence:\n\n1. **Website**: A central hub for information about your business, products, and services.\n\n2. **Social media profiles**: Platforms to engage with customers and share updates.\n\n3. **Google My Business listing**: Helps local customers find you in search results and on maps.\n\n4. **Online reviews**: Builds trust with potential customers.\n\n5. **Content strategy**: Regular creation of valuable content that attracts and engages your audience.\n\n6. **Search engine optimization (SEO)**: Techniques to improve your visibility in search results.\n\nStart with the platforms most relevant to your target audience and business type, then expand your presence as your business grows.',
              'duration': 25,
              'video_url': 'https://www.youtube.com/embed/nnuQtftQQug'
          }
      ]
  }
]

def get_learning_modules():
  """
  Get all learning modules
  
  Returns:
      list: All learning modules
  """
  # Return a simplified version of the modules (without full lesson content)
  simplified_modules = []
  for module in learning_modules:
      simplified_module = {
          'id': module['id'],
          'title': module['title'],
          'description': module['description'],
          'image': module['image'],
          'lesson_count': len(module['lessons'])
      }
      simplified_modules.append(simplified_module)
  
  return simplified_modules

def get_module_by_id(module_id):
  """
  Get a specific learning module by ID
  
  Args:
      module_id (str): The module ID
      
  Returns:
      dict: The module data or None if not found
  """
  return next((module for module in learning_modules if module['id'] == module_id), None)

def get_lesson_by_id(lesson_id):
  """
  Get a specific lesson by ID
  
  Args:
      lesson_id (str): The lesson ID
      
  Returns:
      dict: The lesson data or None if not found
  """
  for module in learning_modules:
      lesson = next((lesson for lesson in module['lessons'] if lesson['id'] == lesson_id), None)
      if lesson:
          return lesson
  return None

def get_module_for_lesson(lesson_id):
  """
  Get the module that contains a specific lesson
  
  Args:
      lesson_id (str): The lesson ID
      
  Returns:
      dict: The module data or None if not found
  """
  for module in learning_modules:
      if any(lesson['id'] == lesson_id for lesson in module['lessons']):
          return module
  return None

def get_next_lesson(current_lesson_id):
  """
  Get the next lesson after the current one
  
  Args:
      current_lesson_id (str): The current lesson ID
      
  Returns:
      dict: The next lesson data or None if not found
  """
  module = get_module_for_lesson(current_lesson_id)
  if not module:
      return None
  
  lesson_ids = [lesson['id'] for lesson in module['lessons']]
  current_index = lesson_ids.index(current_lesson_id)
  
  if current_index < len(lesson_ids) - 1:
      next_lesson_id = lesson_ids[current_index + 1]
      return next((lesson for lesson in module['lessons'] if lesson['id'] == next_lesson_id), None)
  
  return None













