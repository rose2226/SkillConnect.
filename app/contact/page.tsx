"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle2, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, you would call your API to send the message
      // For demo purposes, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Failed to send message:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Have questions about SkillConnect? We're here to help. Reach out to our team and we'll get back to you as soon
          as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">info@skillconnect.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">+254 700 000000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Innovation Hub
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {success && (
                  <Alert className="mb-6 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    <AlertDescription>
                      Your message has been sent successfully! We'll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isLoading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What is this regarding?"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

