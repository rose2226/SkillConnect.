import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchButton } from "@/components/search"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-xl">SkillConnect</span>
          </Link>
          <MainNav />
        </div>
        <div className="flex md:hidden">
          <MobileNav />
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">SkillConnect</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <SearchButton />
            <ThemeToggle />
            <div className="hidden sm:flex sm:space-x-2">
              <Button asChild variant="ghost" size="sm">
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
            <div className="sm:hidden">
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

