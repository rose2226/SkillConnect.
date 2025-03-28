"use client"

import type * as React from "react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" className="p-0 h-auto text-sm font-medium transition-colors hover:text-primary">
            Features <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuItem asChild>
            <Link href="/features/sms-learning">SMS Learning</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/features/ussd-assessments">USSD Assessments</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/features/mentor-matching">Mentor Matching</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/features/voice-learning">Voice Learning</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/features/community-chat">Community Chat</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" className="p-0 h-auto text-sm font-medium transition-colors hover:text-primary">
            Resources <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuItem asChild>
            <Link href="/resources/blog">Blog</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/resources/success-stories">Success Stories</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/resources/faq">FAQ</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/resources/support">Support</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/resources/partners">Partners</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}

