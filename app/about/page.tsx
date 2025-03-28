import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About SkillConnect</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            SkillConnect is a revolutionary platform designed to empower entrepreneurs across Africa through accessible
            skills development and networking opportunities.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to bridge the digital divide by providing entrepreneurship training and resources through
            multiple channels including SMS, USSD, and voice services. We believe that everyone deserves access to
            quality entrepreneurship education, regardless of their location or device.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
          <p>
            SkillConnect was founded in 2023 by a team of passionate entrepreneurs who recognized the challenges faced
            by aspiring business owners in accessing quality training and mentorship. By leveraging Africa's Talking
            APIs, we've created a platform that makes entrepreneurship education accessible to anyone with a mobile
            phone.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Approach</h2>
          <p>We take a multi-channel approach to entrepreneurship education:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <strong>SMS Learning:</strong> Bite-sized lessons delivered directly to your phone
            </li>
            <li>
              <strong>USSD Assessments:</strong> Interactive quizzes and assessments accessible via USSD codes
            </li>
            <li>
              <strong>Voice Learning:</strong> Audio lessons and interactive voice sessions
            </li>
            <li>
              <strong>Mentor Matching:</strong> Connect with experienced entrepreneurs who can guide your journey
            </li>
            <li>
              <strong>Community Chat:</strong> Join a community of like-minded entrepreneurs
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
          <p>
            SkillConnect is powered by a diverse team of entrepreneurs, educators, and technologists who are passionate
            about empowering the next generation of business leaders in Africa.
          </p>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

