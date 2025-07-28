import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Instructor Dashboard",
  description: "Instructor dashboard for managing courses",
}

export default function InstructorDashboard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Instructor Dashboard</h1>
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Course Management</h2>
          <p>Welcome to the instructor dashboard. Manage your courses and student progress here.</p>
        </div>
      </div>
    </div>
  )
}
