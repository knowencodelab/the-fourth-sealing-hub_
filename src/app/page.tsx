import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
//import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import CourseCard from '@/components/CourseCard'

export default function HomePage() {
  const courses = [
    {
      id: 1,
      title: "Informatics and Data Science for Health",
      description: "Master Python programming, R modules, and health data analysis techniques in this comprehensive 6-week program.",
      duration: "6 weeks",
      fee: "KSH 42,000",
      highlights: ["Python Programming", "R Statistical Computing", "Health Data Analysis", "Machine Learning"]
    },
    {
      id: 2,
      title: "Research Data Management and Project Evaluation",
      description: "Learn systematic approaches to managing research data and evaluating project outcomes effectively.",
      duration: "6 weeks", 
      fee: "KSH 42,000",
      highlights: ["Data Management", "Quality Assurance", "Project Planning", "Statistical Analysis"]
    },
    {
      id: 3,
      title: "Systems Security Assertion",
      description: "Advanced cybersecurity training covering threat assessment, security implementation, and compliance frameworks.",
      duration: "6 weeks",
      fee: "KSH 42,000", 
      highlights: ["Cybersecurity", "Risk Assessment", "Network Security", "Incident Response"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Career with
            <span className="block text-blue-400 mt-2">Professional Learning</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join The Fourth Sealing Hub for intensive, practical courses designed to advance your expertise in data science, research management, and systems security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/courses">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Explore Courses
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose The Fourth Sealing Hub?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer intensive, practical learning experiences designed for working professionals who want to advance their careers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">6</span>
                </div>
                <CardTitle className="text-xl">6-Week Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Intensive, focused learning designed to fit your schedule while delivering maximum impact.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">💼</span>
                </div>
                <CardTitle className="text-xl">Practical Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Real-world applications and hands-on projects that you can immediately apply in your career.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">🎓</span>
                </div>
                <CardTitle className="text-xl">Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Learn from industry professionals with years of practical experience in their fields.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Professional Programs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our carefully designed courses that combine theoretical knowledge with practical application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                showFullDetails={false}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button size="lg" variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who have advanced their careers through our intensive programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/auth/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Enroll Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="text-slate-400">
            <p>Email: thefourthsealing@outlook.com</p>
            <p>Website: www.thefourthsealing.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}
