import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart3, BookOpen, Calendar, ChevronRight, MessageSquare, Phone, Users } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Entrepreneur Dashboard</h1>
          <p className="text-muted-foreground">Track your progress and access resources</p>
        </div>
        <Button className="gap-2">
          Continue Learning <ChevronRight size={16} />
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid grid-cols-4 md:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="mentors">Mentors</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* Progress Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Learning Progress</CardTitle>
                <CardDescription>Overall completion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Business Basics</span>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />

                  <div className="flex justify-between items-center">
                    <span>Financial Literacy</span>
                    <span className="text-sm text-muted-foreground">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />

                  <div className="flex justify-between items-center">
                    <span>Marketing Essentials</span>
                    <span className="text-sm text-muted-foreground">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
                <CardDescription>Scheduled mentoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Mentor Call: Business Planning</p>
                      <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Group Workshop: Pricing Strategies</p>
                      <p className="text-sm text-muted-foreground">Friday, 2:00 PM</p>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full mt-2">
                    View All Events
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Communication Channels</CardTitle>
                <CardDescription>Ways to access content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">SMS Learning</p>
                      <p className="text-sm text-muted-foreground">Daily tips and lessons</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">USSD Menu</p>
                      <p className="text-sm text-muted-foreground">Dial *XXX# for assessments</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Voice Learning</p>
                      <p className="text-sm text-muted-foreground">Call for audio lessons</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity and Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Learning Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center">
                  <p className="text-muted-foreground">Activity chart visualization would appear here</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Lessons Completed</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Assessments Taken</p>
                    <p className="text-2xl font-bold">4</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Mentor Sessions</p>
                    <p className="text-2xl font-bold">2</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Resources Accessed</p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <h2 className="text-2xl font-bold">Your Learning Journey</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Business Basics</CardTitle>
                <CardDescription>60% Complete</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={60} className="h-2" />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Identifying Opportunities</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Completed</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Market Research</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Completed</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Business Planning</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">In Progress</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Legal Requirements</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">Not Started</span>
                  </div>
                </div>

                <Button size="sm" className="w-full">
                  Continue Module
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Financial Literacy</CardTitle>
                <CardDescription>30% Complete</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={30} className="h-2" />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Bookkeeping Basics</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Completed</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Pricing Strategies</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">In Progress</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cash Flow Management</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">Not Started</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Funding Options</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">Not Started</span>
                  </div>
                </div>

                <Button size="sm" className="w-full">
                  Continue Module
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Marketing Essentials</CardTitle>
                <CardDescription>45% Complete</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={45} className="h-2" />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Brand Building</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Completed</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Customer Targeting</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Completed</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Low-Cost Marketing</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">In Progress</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Digital Presence</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">Not Started</span>
                  </div>
                </div>

                <Button size="sm" className="w-full">
                  Continue Module
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mentors" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Your Mentors</h2>
            <Button>Find New Mentor</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>James Mwangi</CardTitle>
                    <CardDescription>Business Development Expert</CardDescription>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  15+ years experience in small business development and entrepreneurship training.
                </p>

                <div className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageSquare className="h-4 w-4" /> Message
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Phone className="h-4 w-4" /> Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Grace Ochieng</CardTitle>
                    <CardDescription>Financial Advisor</CardDescription>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Specializes in financial planning for small businesses and startups in East Africa.
                </p>

                <div className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageSquare className="h-4 w-4" /> Message
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Phone className="h-4 w-4" /> Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <h2 className="text-2xl font-bold">Business Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Business Templates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Business Plan Template</span>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Cash Flow Spreadsheet</span>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Marketing Plan Outline</span>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Invoice Template</span>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Funding Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Youth Enterprise Fund</span>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Women in Business Grant</span>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Agricultural Startup Loan</span>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Tech Innovation Fund</span>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Local Networks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Entrepreneurs Association</span>
                    <Button variant="ghost" size="sm">
                      Join
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Women in Business Network</span>
                    <Button variant="ghost" size="sm">
                      Join
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Youth Business Club</span>
                    <Button variant="ghost" size="sm">
                      Join
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Industry Meetups</span>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

