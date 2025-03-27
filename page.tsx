import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, MessageSquare, Phone, Send, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary-foreground">SkillConnect</h1>
            <nav className="hidden md:flex space-x-6">
              <Link href="#features" className="text-primary-foreground hover:text-primary-foreground/80">
                Features
              </Link>
              <Link href="#how-it-works" className="text-primary-foreground hover:text-primary-foreground/80">
                How It Works
              </Link>
              <Link href="#testimonials" className="text-primary-foreground hover:text-primary-foreground/80">
                Success Stories
              </Link>
            </nav>
            <div className="flex space-x-2">
              <Button variant="secondary" size="sm">
                Log In
              </Button>
              <Button variant="outline" className="bg-white text-primary" size="sm">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Empowering Entrepreneurs Through Skills & Connections
                </h2>
                <p className="text-lg text-muted-foreground">
                  SkillConnect bridges the gap between aspiring entrepreneurs and mentors, providing accessible training
                  and resources via SMS, USSD, and voice services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2">
                    Get Started <ArrowRight size={16} />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="SkillConnect platform illustration showing mobile devices with the app interface"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform leverages Africa's Talking APIs to make entrepreneurship training and resources accessible
                to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<MessageSquare className="h-10 w-10 text-primary" />}
                title="SMS Learning Modules"
                description="Receive bite-sized entrepreneurship lessons and business tips directly via SMS, accessible on any mobile device."
              />
              <FeatureCard
                icon={<Phone className="h-10 w-10 text-primary" />}
                title="USSD Skill Assessment"
                description="Dial our USSD code to take skill assessments, track progress, and receive personalized learning recommendations."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Mentor Matching"
                description="Get connected with experienced entrepreneurs in your field who can provide guidance and support."
              />
              <FeatureCard
                icon={<Send className="h-10 w-10 text-primary" />}
                title="Funding Alerts"
                description="Receive notifications about grants, loans, and investment opportunities relevant to your business sector."
              />
              <FeatureCard
                icon={<BookOpen className="h-10 w-10 text-primary" />}
                title="Voice Learning"
                description="Access audio lessons and Q&A sessions through our voice service, perfect for on-the-go learning."
              />
              <FeatureCard
                icon={<MessageSquare className="h-10 w-10 text-primary" />}
                title="Community Chat"
                description="Connect with fellow entrepreneurs to share experiences, challenges, and opportunities."
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How SkillConnect Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform is designed to be accessible to entrepreneurs at all levels, regardless of their device or
                connectivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Register via SMS or USSD</h3>
                    <p className="text-muted-foreground">
                      Send an SMS to our number or dial our USSD code to create your profile and specify your interests
                      and skill level.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Receive Personalized Learning Path</h3>
                    <p className="text-muted-foreground">
                      Based on your profile, we'll create a customized learning journey with relevant modules and
                      resources.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Learn Through Multiple Channels</h3>
                    <p className="text-muted-foreground">
                      Access content via SMS, USSD menus, or voice calls depending on your preference and connectivity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Connect with Mentors and Peers</h3>
                    <p className="text-muted-foreground">
                      Get matched with mentors and join community discussions to expand your network and knowledge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Step-by-step illustration of the SkillConnect process"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from entrepreneurs who have transformed their businesses using SkillConnect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Sarah Mwangi"
                business="Handcrafted Jewelry"
                testimonial="SkillConnect's SMS lessons helped me learn business basics while managing my shop. The mentor matching connected me with an experienced jeweler who helped me scale my business."
              />
              <TestimonialCard
                name="John Odhiambo"
                business="Urban Farming"
                testimonial="The USSD skill assessments identified gaps in my financial knowledge. Through the voice learning modules, I improved my bookkeeping and secured a small business loan."
              />
              <TestimonialCard
                name="Amina Hassan"
                business="Tech Repair Service"
                testimonial="As someone with limited internet access, SkillConnect's SMS and voice services were perfect. I learned marketing strategies that helped me grow my customer base by 70%."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Entrepreneurship Journey?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join thousands of entrepreneurs across Africa who are building successful businesses with the help of
              SkillConnect.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg">
                Sign Up Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg">
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SkillConnect</h3>
              <p className="text-muted-foreground">
                Empowering entrepreneurs through accessible skills development and networking.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>SMS Learning</li>
                <li>USSD Assessments</li>
                <li>Mentor Matching</li>
                <li>Voice Learning</li>
                <li>Community Chat</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Blog</li>
                <li>Success Stories</li>
                <li>FAQ</li>
                <li>Support</li>
                <li>Partners</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>SMS: +254 XXX XXX XXX</li>
                <li>USSD: *XXX#</li>
                <li>Email: info@skillconnect.com</li>
                <li>Social Media: @SkillConnect</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} SkillConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ name, business, testimonial }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>{business}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="italic">"{testimonial}"</p>
      </CardContent>
    </Card>
  )
}

