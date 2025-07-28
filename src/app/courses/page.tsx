import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
//import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import CourseCard from '@/components/CourseCard'
import Link from 'next/link'

export default function CoursesPage() {
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
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-white border-b border-slate-200 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Professional Learning Programs
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Advance your career with our intensive 6-week programs designed for working professionals. 
            Each course combines theoretical knowledge with practical, hands-on experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>6-Week Duration</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Expert Instructors</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Practical Focus</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Certificate Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Information Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">42K</span>
                </div>
                <CardTitle className="text-xl">Affordable Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">All courses are priced at KSH 42,000 for the complete 6-week program, including all materials and certification.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">📚</span>
                </div>
                <CardTitle className="text-xl">Comprehensive Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Access to all course materials, lectures, and resources. Materials are view-only to ensure content security.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">🎓</span>
                </div>
                <CardTitle className="text-xl">Professional Certificate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Receive a professional certificate upon successful completion of your chosen program.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Available Courses</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose from our carefully designed programs that combine theoretical knowledge with practical application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                showFullDetails={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How to Enroll</h2>
            <p className="text-lg text-slate-600">Simple steps to start your learning journey</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Register</h3>
              <p className="text-sm text-slate-600">Create your account and provide your details</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Choose Course</h3>
              <p className="text-sm text-slate-600">Select the program that matches your goals</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Get Approved</h3>
              <p className="text-sm text-slate-600">Wait for admin approval of your registration</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Start Learning</h3>
              <p className="text-sm text-slate-600">Access your course materials and begin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join other professionals advancing their careers through this intensive program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Register Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
                Have Questions?
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
