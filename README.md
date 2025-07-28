# The Fourth Sealing Hub - E-Learning Platform

A comprehensive React TypeScript e-learning platform designed for professional practical intensive learning. The platform offers courses in informatics, data science, research management, and systems security.

## 🌟 Features

### Multi-Role System
- **Admin Dashboard**: Manage users, courses, and platform settings
- **Instructor Portal**: Create and manage course materials
- **Student Dashboard**: Access courses, track progress, and view materials

### Course Management
- 6-week intensive programs
- View-only course materials (no downloads)
- Progress tracking and analytics
- Certificate generation upon completion

### User Management
- Role-based access control (Admin, Instructor, Student)
- Registration approval workflow
- Secure authentication system

### Payment Integration
- Course fee management (KSH 42,000 per course)
- Payment status tracking
- Enrollment management

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Database**: MySQL (XAMPP)
- **Authentication**: NextAuth.js, JWT
- **Forms**: React Hook Form, Zod validation
- **Email**: Nodemailer
- **Security**: bcryptjs for password hashing

## 📋 Prerequisites

- Node.js 18+ 
- XAMPP (MySQL)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fourth-sealing-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the `.env.local` file with your configuration:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=fourth_sealing_hub
   DB_PORT=3306
   
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:8000
   
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASSWORD=your_app_password
   ```

4. **Set up the database**
   - Start XAMPP and ensure MySQL is running
   - Open phpMyAdmin (http://localhost/phpmyadmin)
   - Create a new database named `fourth_sealing_hub`
   - Import the `database.sql` file located in the project root

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Open http://localhost:8000 in your browser

## 📚 Available Courses

### 1. Informatics and Data Science for Health
- **Duration**: 6 weeks
- **Fee**: KSH 42,000
- **Topics**: Python Programming, R Statistical Computing, Health Data Analysis, Machine Learning

### 2. Research Data Management and Project Evaluation
- **Duration**: 6 weeks
- **Fee**: KSH 42,000
- **Topics**: Data Management, Quality Assurance, Project Planning, Statistical Analysis

### 3. Systems Security Assertion
- **Duration**: 6 weeks
- **Fee**: KSH 42,000
- **Topics**: Cybersecurity, Risk Assessment, Network Security, Incident Response

## 👥 User Roles & Access

### Admin
- Approve/reject student registrations
- Register new instructors
- Create and manage courses
- Upload course materials
- View platform analytics

**Default Admin Login:**
- Email: admin@thefourthsealing.com
- Password: admin123 (change after first login)

### Instructor
- Update assigned course materials
- Manage student progress
- Create lectures and assignments
- View student analytics

### Student
- View available courses and fees
- Enroll in courses (requires approval)
- Access approved course materials (view-only)
- Track learning progress

## 🗂️ Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── (admin)/           # Admin dashboard
│   ├── (auth)/            # Authentication pages
│   ├── (instructor)/      # Instructor dashboard
│   ├── (student)/         # Student dashboard
│   ├── courses/           # Course pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── CourseCard.tsx    # Course display component
│   ├── Footer.tsx        # Site footer
│   └── Navbar.tsx        # Navigation component
├── lib/                  # Utility functions
│   ├── db.ts            # Database connection & queries
│   ├── utils.ts         # General utilities
│   └── validation.ts    # Zod validation schemas
└── hooks/               # Custom React hooks
```

## 🔐 Security Features

- Password hashing with bcryptjs
- JWT-based authentication
- Role-based access control
- Input validation and sanitization
- SQL injection prevention
- XSS protection

## 📱 Responsive Design

The platform is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 Design Principles

- Clean, modern interface
- Typography-focused design (no external icon libraries)
- Consistent spacing and layout
- Accessible design patterns
- Professional color scheme

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Environment Setup
Ensure all environment variables are properly configured for production:
- Database connection strings
- SMTP settings for email notifications
- JWT secrets
- NextAuth configuration

## 📧 Contact Information

- **Website**: www.thefourthsealing.com
- **Email**: thefourthsealing@outlook.com
- **Platform**: The Fourth Sealing Hub

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by The Fourth Sealing Hub.

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure XAMPP MySQL is running
   - Check database credentials in `.env.local`
   - Verify database exists and is accessible

2. **Authentication Issues**
   - Check NEXTAUTH_SECRET is set
   - Verify NEXTAUTH_URL matches your domain
   - Clear browser cookies and try again

3. **Email Not Sending**
   - Verify SMTP credentials
   - Check if less secure apps are enabled (Gmail)
   - Test email configuration

4. **Port Already in Use**
   - Kill process using port 8000: `fuser -k 8000/tcp`
   - Or use a different port in package.json

### Database Reset
If you need to reset the database:
```sql
DROP DATABASE fourth_sealing_hub;
CREATE DATABASE fourth_sealing_hub;
-- Then re-import database.sql
```

## 📊 Features Roadmap

- [ ] Payment gateway integration (M-Pesa)
- [ ] Real-time notifications
- [ ] Video conferencing integration
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Automated certificate generation
- [ ] Multi-language support

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

---

**The Fourth Sealing Hub** - Transforming careers through professional learning.
# the-fourth-sealing-hub
