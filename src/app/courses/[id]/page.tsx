import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

// Mock course data - in real app, this would come from database
const getCourseData = (id: string) => {
  const courses = {
    '1': {
      id: 1,
      title: "Informatics and Data Science for Health",
      description: "Master Python programming, R modules, and health data analysis techniques in this comprehensive 6-week program.",
      duration: "6 weeks",
      fee: "KSH 42,000",
      instructor: "Mr. Knowen Cosmas & Dr.Loice Achieng",
      prerequisites: ["Basic computer skills", "High school mathematics", "Interest in healthcare data"],
      objectives: [
        "Understand the fundamentals of health informatics",
        "Master Python programming for data analysis",
        "Learn R statistical computing and visualization",
        "Apply machine learning techniques to health data",
        "Create meaningful data visualizations",
        "Develop practical skills in healthcare data management"
      ],
      schedule: [
        {
          week: 1,
          title: "Introduction to Health Informatics",
          topics: ["Health informatics overview", "Python basics", "Data types and structures"],
          assignments: ["Setup development environment", "Basic Python exercises"]
        },
        {
          week: 2,
          title: "Data Structures and Pandas",
          topics: ["Advanced Python", "Pandas library", "Data manipulation"],
          assignments: ["Data cleaning exercise", "Pandas practice problems"]
        },
        {
          week: 3,
          title: "Data Visualization and Analysis",
          topics: ["Matplotlib and Seaborn", "Statistical analysis", "Data interpretation"],
          assignments: ["Create health data visualizations", "Statistical analysis project"]
        },
        {
          week: 4,
          title: "R Programming for Health Data",
          topics: ["R basics", "R packages for health", "Statistical modeling"],
          assignments: ["R programming exercises", "Health data modeling"]
        },
        {
          week: 5,
          title: "Machine Learning Applications",
          topics: ["ML fundamentals", "Predictive modeling", "Model evaluation"],
          assignments: ["Build predictive model", "Model validation exercise"]
        },
        {
          week: 6,
          title: "Project Work and Presentations",
          topics: ["Capstone project", "Peer review", "Final presentations"],
          assignments: ["Complete final project", "Present findings"]
        }
      ],
      materials: [
        {
          title: "Introduction to Health Informatics - Lecture 1",
          type: "lecture",
          week: 1,
          description: "Comprehensive introduction to the field of health informatics and its applications."
        },
        {
          title: "Python Programming Fundamentals",
          type: "lecture",
          week: 1,
          description: "Basic Python programming concepts and syntax for beginners."
        },
        {
          title: "Healthcare Data Standards",
          type: "reading",
          week: 2,
          description: "Overview of common healthcare data standards and formats."
        }
      ]
    },
    '2': {
      id: 2,
      title: "Research Data Management and Project Evaluation",
      description: "Learn systematic approaches to managing research data and evaluating project outcomes effectively.",
      duration: "6 weeks",
      fee: "KSH 42,000",
      instructor: "Mr. Knowen Cosmas & Dr. Loice Achieng",
      prerequisites: ["Research experience", "Basic statistics knowledge", "Computer literacy"],
      objectives: [
        "Master research data management principles",
        "Implement quality assurance procedures",
        "Design effective project evaluation frameworks",
        "Learn statistical analysis techniques",
        "Develop professional reporting skills"
      ],
      schedule: [
        {
          week: 1,
          title: "Research Methodology and Data Management",
          topics: ["Research design", "Data management principles", "Ethics in research"],
          assignments: ["Research proposal outline", "Data management plan"]
        },
        {
          week: 2,
          title: "Data Collection and Quality Assurance",
          topics: ["Data collection methods", "Quality control", "Validation techniques"],
          assignments: ["Design data collection protocol", "Quality assurance checklist"]
        },
        {
          week: 3,
          title: "Data Storage and Security",
          topics: ["Database design", "Security protocols", "Backup strategies"],
          assignments: ["Database schema design", "Security assessment"]
        },
        {
          week: 4,
          title: "Project Planning and Evaluation",
          topics: ["Project management", "Evaluation frameworks", "KPI development"],
          assignments: ["Project evaluation plan", "KPI dashboard"]
        },
        {
          week: 5,
          title: "Statistical Analysis and Interpretation",
          topics: ["Advanced statistics", "Data interpretation", "Significance testing"],
          assignments: ["Statistical analysis project", "Results interpretation"]
        },
        {
          week: 6,
          title: "Report Writing and Presentation",
          topics: ["Scientific writing", "Data presentation", "Peer review"],
          assignments: ["Final research report", "Presentation delivery"]
        }
      ],
      materials: [
        {
          title: "Research Data Management Best Practices",
          type: "lecture",
          week: 1,
          description: "Comprehensive guide to managing research data effectively."
        }
      ]
    },
    '3': {
      id: 3,
      title: "Systems Security Assertion",
      description: "Advanced cybersecurity training covering threat assessment, security implementation, and compliance frameworks.",
      duration: "6 weeks",
      fee: "KSH 42,000",
      instructor: "Mr. Knowen Cosmas ",
      prerequisites: ["Basic networking knowledge", "Computer systems understanding", "IT experience preferred"],
      objectives: [
        "Understand cybersecurity fundamentals",
        "Perform comprehensive risk assessments",
        "Implement network security measures",
        "Develop incident response procedures",
        "Master security auditing techniques"
      ],
      schedule: [
        {
          week: 1,
          title: "Security Fundamentals",
          topics: ["Cybersecurity overview", "Threat landscape", "Security principles"],
          assignments: ["Security assessment", "Threat analysis report"]
        },
        {
          week: 2,
          title: "Risk Assessment and Vulnerability Analysis",
          topics: ["Risk management", "Vulnerability scanning", "Penetration testing"],
          assignments: ["Risk assessment project", "Vulnerability report"]
        },
        {
          week: 3,
          title: "Network Security Implementation",
          topics: ["Firewalls", "Encryption", "Network monitoring"],
          assignments: ["Network security design", "Encryption implementation"]
        },
        {
          week: 4,
          title: "Access Control and Authentication",
          topics: ["Identity management", "Multi-factor authentication", "Access policies"],
          assignments: ["Access control policy", "Authentication system design"]
        },
        {
          week: 5,
          title: "Incident Response and Monitoring",
          topics: ["Incident handling", "Security monitoring", "Forensics basics"],
          assignments: ["Incident response plan", "Monitoring setup"]
        },
        {
          week: 6,
          title: "Security Auditing and Compliance",
          topics: ["Security audits", "Compliance frameworks", "Documentation"],
          assignments: ["Security audit report", "Compliance assessment"]
        }
      ],
      materials: [
        {
          title: "Cybersecurity Fundamentals",
          type: "lecture",
          week: 1,
          description: "Introduction to cybersecurity principles and best practices."
        }
      ]
    }
  }

  return courses[id as keyof typeof courses] || null
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const course = getCourseData(resolvedParams.id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Course Header */}
      <section className="bg-white border-b border-slate-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <Badge className="bg-blue-100 text-blue-800">{course.duration}</Badge>
                <Badge variant="outline">Professional Certificate</Badge>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{course.title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">{course.description}</p>
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div>
                  <span className="font-medium">Instructor:</span> {course.instructor}
                </div>
                <div>
                  <span className="font-medium">Duration:</span> {course.duration}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{course.fee}</div>
                    <p className="text-slate-600">Complete 6-week program</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href={`/courses/${course.id}/enroll`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">
                      Enroll Now
                    </Button>
                  </Link>
                  <div className="text-center text-sm text-slate-600">
                    <p>Registration requires admin approval</p>
                  </div>
                  <div className="border-t pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certificate:</span>
                      <span className="font-medium">Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Materials:</span>
                      <span className="font-medium">View-only access</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Objectives</CardTitle>
                  <CardDescription>What you&apos;ll achieve by the end of this course</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold text-sm">6</span>
                        </div>
                        <div>
                          <h4 className="font-medium">6-Week Intensive Program</h4>
                          <p className="text-sm text-slate-600">Focused learning with weekly milestones</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">📚</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Comprehensive Materials</h4>
                          <p className="text-sm text-slate-600">Lectures, readings, and practical exercises</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">🎓</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Professional Certificate</h4>
                          <p className="text-sm text-slate-600">Industry-recognized completion certificate</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-orange-600 font-bold text-sm">👨‍🏫</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Expert Instruction</h4>
                          <p className="text-sm text-slate-600">Learn from industry professionals</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              {course.schedule.map((week, index) => (
                <Card key={week.week}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Week {week.week}: {week.title}</CardTitle>
                      <Progress value={(index + 1) * (100 / course.schedule.length)} className="w-24" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">Topics Covered:</h4>
                        <ul className="space-y-2">
                          {week.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-700 text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">Assignments:</h4>
                        <ul className="space-y-2">
                          {week.assignments.map((assignment, assignmentIndex) => (
                            <li key={assignmentIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-700 text-sm">{assignment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="materials" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Materials</CardTitle>
                  <CardDescription>
                    All materials are available for viewing only. Download functionality is disabled for content security.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.materials.map((material, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">
                              {material.type === 'lecture' ? '📖' : material.type === 'reading' ? '📄' : '🎥'}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-900">{material.title}</h4>
                            <p className="text-sm text-slate-600">{material.description}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <Badge variant="outline" className="text-xs">Week {material.week}</Badge>
                              <Badge variant="outline" className="text-xs capitalize">{material.type}</Badge>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" disabled>
                          View Only
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Course materials are accessible only to enrolled and approved students. 
                      All content is view-only to protect intellectual property.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requirements" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                  <CardDescription>Requirements to succeed in this course</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Hardware:</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• Computer with at least 4GB RAM</li>
                        <li>• Stable internet connection</li>
                        <li>• Webcam and microphone for virtual sessions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Software:</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• Modern web browser (Chrome, Firefox, Safari)</li>
                        <li>• PDF reader</li>
                        <li>• Text editor or IDE (will be specified during course)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start This Course?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join other professionals advancing their careers through this intensive program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/courses/${course.id}/enroll`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Enroll in This Course
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
