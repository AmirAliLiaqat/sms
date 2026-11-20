import { Users, BookOpen, Clock, Calendar } from "lucide-react";

export const facultyStats = [
  {
    title: "Total Students",
    value: "142",
    icon: Users,
    color: "bg-blue-500",
    description: "Across 4 classes",
  },
  {
    title: "Classes",
    value: "4",
    icon: BookOpen,
    color: "bg-purple-500",
    description: "Assigned this term",
  },
  {
    title: "Pending Grades",
    value: "2",
    icon: Clock,
    color: "bg-yellow-500",
    description: "Assignments to review",
  },
  {
    title: "Events",
    value: "3",
    icon: Calendar,
    color: "bg-green-500",
    description: "Upcoming this week",
  },
];

export const classPerformanceData = [
  { subject: "Class 10-A", score: 85 },
  { subject: "Class 10-B", score: 78 },
  { subject: "Class 9-A", score: 92 },
  { subject: "Class 9-B", score: 88 },
];

export const upcomingClasses = [
  {
    subject: "Mathematics (10-A)",
    time: "09:00 AM - 10:00 AM",
    room: "Room 101",
    status: "In Progress",
  },
  {
    subject: "Physics (9-B)",
    time: "10:30 AM - 11:30 AM",
    room: "Lab 3",
    status: "Upcoming",
  },
  {
    subject: "Mathematics (10-B)",
    time: "01:00 PM - 02:00 PM",
    room: "Room 102",
    status: "Upcoming",
  },
];

export const recentNotices = [
  {
    title: "Faculty Meeting",
    date: "Jan 18, 2025",
    type: "Staff",
    priority: "High",
  },
  {
    title: "Grade Submission Deadline",
    date: "Jan 20, 2025",
    type: "Academic",
    priority: "High",
  },
  {
    title: "Campus Maintenance",
    date: "Jan 22, 2025",
    type: "General",
    priority: "Medium",
  },
];
