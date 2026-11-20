import { BookOpen, Calendar, CheckCircle, Clock } from "lucide-react";

export const studentStats = [
  {
    title: "Attendance",
    value: "85%",
    icon: CheckCircle,
    color: "bg-green-500",
    description: "Present this semester",
  },
  {
    title: "CGPA",
    value: "3.8",
    icon: BookOpen,
    color: "bg-purple-500",
    description: "Last updated yesterday",
  },
  {
    title: "Assignments",
    value: "4",
    icon: Clock,
    color: "bg-yellow-500",
    description: "Pending submission",
  },
  {
    title: "Events",
    value: "2",
    icon: Calendar,
    color: "bg-blue-500",
    description: "Upcoming this week",
  },
];

export const performanceData = [
  { subject: "Math", score: 85 },
  { subject: "Science", score: 92 },
  { subject: "English", score: 78 },
  { subject: "History", score: 88 },
  { subject: "Physics", score: 95 },
];

export const upcomingClasses = [
  {
    subject: "Mathematics",
    time: "09:00 AM - 10:00 AM",
    teacher: "Prof. Sarah Johnson",
    room: "Room 101",
    status: "In Progress",
  },
  {
    subject: "Physics",
    time: "10:30 AM - 11:30 AM",
    teacher: "Dr. Robert Smith",
    room: "Lab 3",
    status: "Upcoming",
  },
  {
    subject: "English Literature",
    time: "01:00 PM - 02:00 PM",
    teacher: "Ms. Emily Davis",
    room: "Room 204",
    status: "Upcoming",
  },
];

export const recentNotices = [
  {
    title: "Semester Exam Schedule",
    date: "Jan 15, 2025",
    type: "Exam",
    priority: "High",
  },
  {
    title: "Holiday Announcement",
    date: "Jan 12, 2025",
    type: "General",
    priority: "Medium",
  },
  {
    title: "Library Book Return Due",
    date: "Jan 10, 2025",
    type: "Library",
    priority: "Low",
  },
];
