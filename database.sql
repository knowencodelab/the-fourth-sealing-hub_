-- The Fourth Sealing Hub Database Schema

-- Create database
CREATE DATABASE IF NOT EXISTS fourth_sealing_hub;
USE fourth_sealing_hub;

-- Users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'instructor', 'student') NOT NULL,
    is_approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Courses table
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) DEFAULT 42000.00,
    duration_weeks INT DEFAULT 6,
    instructor_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (instructor_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Enrollments table
CREATE TABLE enrollments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    progress_percentage INT DEFAULT 0,
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    UNIQUE KEY unique_enrollment (student_id, course_id)
);

-- Course materials table
CREATE TABLE course_materials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    material_type ENUM('lecture', 'assignment', 'quiz', 'resource') NOT NULL,
    week_number INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Insert default admin user
INSERT INTO users (name, email, password, role, is_approved) VALUES 
('Admin User', 'admin@thefourthsealing.com', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', TRUE);

-- Insert sample courses
INSERT INTO courses (title, description, price, duration_weeks) VALUES 
('Informatics and Data Science for Health', 'Comprehensive 6-week program covering Python, R, health data analysis, and machine learning applications in healthcare.', 42000.00, 6),
('Research Data Management and Project Evaluation', 'Learn data management, quality assurance, project planning, and statistical analysis techniques.', 42000.00, 6),
('Systems Security Assertion', 'Master cybersecurity fundamentals, risk assessment, network security, and incident response strategies.', 42000.00, 6);

-- Insert sample instructor
INSERT INTO users (name, email, password, role, is_approved) VALUES 
('John Instructor', 'instructor@example.com', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'instructor', TRUE);

-- Update courses with instructor
UPDATE courses SET instructor_id = (SELECT id FROM users WHERE email = 'instructor@example.com' LIMIT 1);

-- Insert sample course materials
INSERT INTO course_materials (course_id, title, content, material_type, week_number) VALUES
(1, 'Introduction to Python for Health Data', 'Learn Python basics and its applications in health data analysis', 'lecture', 1),
(1, 'R Programming Fundamentals', 'Introduction to R statistical computing environment', 'lecture', 2),
(2, 'Data Management Principles', 'Best practices for managing research data', 'lecture', 1),
(3, 'Cybersecurity Fundamentals', 'Introduction to cybersecurity concepts and frameworks', 'lecture', 1);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_enrollments_student ON enrollments(student_id);
CREATE INDEX idx_enrollments_course ON enrollments(course_id);
CREATE INDEX idx_course_materials_course ON course_materials(course_id);
