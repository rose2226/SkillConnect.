"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-bold">SkillConnect</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 px-2 py-4">
          <Link href="/" onClick={() => setOpen(false)} className="px-4 py-2 text-sm">
            Home
          </Link>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="features">
              <AccordionTrigger className="px-4 py-2 text-sm">Features</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link href="/features/sms-learning" onClick={() => setOpen(false)} className="px-4 py-2 text-sm">
                    SMS Learning
                  </Link>
                  <Link href="/features/ussd-assessments" onClick={() => setOpen(false)} className="px-4 py-2 text-sm">
                    USSD Assessments
                  </Link>
                  <Link href="/features/mentor-matching" onClick={() => setOpen(false)} className="px-4 py-2 text-sm">
                    Mentor Matching
                  </Link>
                  <Link href="/features/voice-learning" onClick={() => setOpen(false)} className="px-4 py-2 text-sm">
                    Voice Learning
                  </Link>
                  <Link href="/features/community-chat" onClick={() => setOpen(false)} className="px-4 py-2 text-sm">
                    Community Chat
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="resources">
              <AccordionTrigger className="px-4 py-2 text-sm">Resources</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link href="/resources/blog" onClick={() => setOpen(false)} className="px-4 py-2 text-sm">
                    Blog
                  </Link>
                  <Link href="/resources/success-stories" onClick={() => setOpen(false)} className="px-4 py-2 text-sm">
                    Success Stories
                  </Link>
                  <Link href="/resources/faq" onClick={() => setOpen(false)} className="px-4 py-2 text-sm">
                    FAQ
                  </Link>
                  <Link href="/resources/support" onClick={() => setOpen(false)} className="px-4 py-2 text-sm">
                    Support
                  </Link>
                  <Link href="/resources/partners" onClick={() => setOpen(false)} className="px-4 py-2 text-sm">
                    Partners
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="px-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Button asChild variant="outline" className="justify-start">
                <Link href="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 justify-start"
              >
                <Link href="/register" onClick={() => setOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

