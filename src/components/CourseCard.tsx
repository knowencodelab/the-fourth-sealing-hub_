import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CourseCardProps {
  id: number
  title: string
  description: string
  duration: string
  fee: string
  highlights: string[]
  isEnrolled?: boolean
  enrollmentStatus?: 'pending' | 'approved' | 'rejected'
  showFullDetails?: boolean
}

export default function CourseCard({
  id,
  title,
  description,
  duration,
  fee,
  highlights,
  isEnrolled = false,
  enrollmentStatus,
  showFullDetails = false
}: CourseCardProps) {
  const getStatusBadge = () => {
    if (!isEnrolled) return null
    
    const statusConfig = {
      pending: { color: 'bg-yellow-100 text-yellow-800', text: 'Pending Approval' },
      approved: { color: 'bg-green-100 text-green-800', text: 'Enrolled' },
      rejected: { color: 'bg-red-100 text-red-800', text: 'Application Rejected' }
    }
    
    const config = statusConfig[enrollmentStatus || 'pending']
    
    return (
      <Badge className={`${config.color} mb-2`}>
        {config.text}
      </Badge>
    )
  }

  const getActionButton = () => {
    if (isEnrolled && enrollmentStatus === 'approved') {
      return (
        <Link href={`/student/courses/${id}`}>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
            Access Course
          </Button>
        </Link>
      )
    }
    
    if (isEnrolled && enrollmentStatus === 'pending') {
      return (
        <Button disabled className="w-full bg-gray-400 text-white cursor-not-allowed">
          Awaiting Approval
        </Button>
      )
    }
    
    if (isEnrolled && enrollmentStatus === 'rejected') {
      return (
        <Link href="/contact">
          <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-50">
            Contact Support
          </Button>
        </Link>
      )
    }
    
    return (
      <Link href={showFullDetails ? `/courses/${id}/enroll` : `/courses/${id}`}>
        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
          {showFullDetails ? 'Enroll Now' : 'Learn More'}
        </Button>
      </Link>
    )
  }

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full flex flex-col">
      <CardHeader className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {duration}
          </Badge>
          <span className="text-2xl font-bold text-green-600">{fee}</span>
        </div>
        {getStatusBadge()}
        <CardTitle className="text-xl leading-tight">{title}</CardTitle>
        <CardDescription className="text-slate-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 mb-2">Key Topics:</h4>
          <div className="flex flex-wrap gap-2">
            {highlights.map((highlight, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>
        {showFullDetails && (
          <div className="mb-4 p-3 bg-slate-50 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Course Features:</h4>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• 6 weeks of intensive training</li>
              <li>• Hands-on practical exercises</li>
              <li>• Expert instructor guidance</li>
              <li>• Certificate upon completion</li>
              <li>• View-only course materials</li>
            </ul>
          </div>
        )}
        {getActionButton()}
      </CardContent>
    </Card>
  )
}
