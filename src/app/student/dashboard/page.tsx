import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Student dashboard for accessing courses",
}

export default function StudentDashboard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">My Courses</h2>
          <p>Welcome to your student dashboard. Access your enrolled courses and track your progress here.</p>
        </div>
      </div>
    </div>
  )
}
