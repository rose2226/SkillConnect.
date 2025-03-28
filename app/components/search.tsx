"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { SearchIcon, Loader2 } from "lucide-react"

// Mock search results for demo purposes
const mockSearchResults = [
  { id: 1, title: "SMS Learning Module: Business Basics", type: "course", url: "/courses/business-basics" },
  { id: 2, title: "How to Create a Business Plan", type: "article", url: "/resources/business-plan" },
  { id: 3, title: "Finding Funding for Your Startup", type: "webinar", url: "/webinars/startup-funding" },
  { id: 4, title: "Marketing Strategies for Small Businesses", type: "course", url: "/courses/marketing-strategies" },
  { id: 5, title: "Financial Management for Entrepreneurs", type: "course", url: "/courses/financial-management" },
]

export function SearchButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
          <SearchIcon className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Search SkillConnect</DialogTitle>
        </DialogHeader>
        <SearchBox />
      </DialogContent>
    </Dialog>
  )
}

export function SearchBox() {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState([])

  const handleSearch = async (value) => {
    setQuery(value)

    if (value.length < 2) {
      setResults([])
      return
    }

    setIsSearching(true)

    try {
      // In a real app, you would call your search API here
      // For demo purposes, we'll use mock data and add a delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Filter mock results based on query
      const filteredResults = mockSearchResults.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))

      setResults(filteredResults)
    } catch (error) {
      console.error("Search failed:", error)
    } finally {
      setIsSearching(false)
    }
  }

  const handleSelect = (item) => {
    router.push(item.url)
  }

  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput
        placeholder="Search for courses, resources, mentors..."
        value={query}
        onValueChange={handleSearch}
      />
      <CommandList>
        {isSearching ? (
          <div className="flex items-center justify-center py-6">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <CommandEmpty>No results found.</CommandEmpty>
            {results.length > 0 && (
              <CommandGroup heading="Results">
                {results.map((item) => (
                  <CommandItem key={item.id} onSelect={() => handleSelect(item)} className="cursor-pointer">
                    <div className="flex flex-col">
                      <span>{item.title}</span>
                      <span className="text-xs text-muted-foreground capitalize">{item.type}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </>
        )}
      </CommandList>
    </Command>
  )
}

export function SearchInput() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="relative w-full max-w-sm">
        <Button
          variant="outline"
          className="w-full justify-start text-muted-foreground"
          onClick={() => setIsOpen(true)}
        >
          <SearchIcon className="mr-2 h-4 w-4" />
          Search...
        </Button>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Search SkillConnect</DialogTitle>
          </DialogHeader>
          <SearchBox />
        </DialogContent>
      </Dialog>
    </>
  )
}

