"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

export default function VerifyEmailPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setError("Invalid verification link")
        setIsLoading(false)
        return
      }

      try {
        // In a real app, you would call your email verification API here
        // For demo purposes, we'll simulate a successful verification after a delay
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Simulate success
        setSuccess(true)
      } catch (err) {
        setError("Email verification failed. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    verifyEmail()
  }, [token])

  if (isLoading) {
    return (
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Verifying Your Email</CardTitle>
            <CardDescription className="text-center">Please wait while we verify your email address</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-6">
            <Loader2 className="h-16 w-16 animate-spin text-primary" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex items-center justify-center mb-2">
              <XCircle className="h-12 w-12 text-red-500" />
            </div>
            <CardTitle className="text-center">Verification Failed</CardTitle>
            <CardDescription className="text-center">{error}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">The verification link may have expired or is invalid.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              <Link href="/login">Go to Login</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-center mb-2">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle className="text-center">Email Verified Successfully</CardTitle>
          <CardDescription className="text-center">
            Your email has been verified and your account is now active
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">You can now log in to your account and start using SkillConnect.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          >
            <Link href="/login">Go to Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

