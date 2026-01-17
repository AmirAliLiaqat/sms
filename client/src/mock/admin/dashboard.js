import {
  UserPlus,
  CreditCard,
  Users,
  Bell
} from "lucide-react";

export const enrollmentData = [
  { name: "Jan", students: 400 },
  { name: "Feb", students: 600 },
  { name: "Mar", students: 800 },
  { name: "Apr", students: 1000 },
  { name: "May", students: 900 },
  { name: "Jun", students: 1200 },
  { name: "Jul", students: 1250 },
];

export const facultyDeptData = [
  { name: "Sciences", value: 25 },
  { name: "Maths", value: 15 },
  { name: "Languages", value: 12 },
  { name: "Arts", value: 8 },
  { name: "Sports", value: 4 },
];

export const genderData = [
  { name: "Male", value: 750 },
  { name: "Female", value: 500 },
];

export const recentActivities = [
  {
    text: "New student application: Alex Johnson",
    time: "2 mins ago",
    icon: UserPlus,
    color: "text-blue-600",
  },
  {
    text: "Fee payment received: #TXN-9921",
    time: "45 mins ago",
    icon: CreditCard,
    color: "text-green-500",
  },
  {
    text: "Faculty update: Dr. Sarah Wilson",
    time: "2 hours ago",
    icon: Users,
    color: "text-purple-600",
  },
  {
    text: "New announcement posted",
    time: "5 hours ago",
    icon: Bell,
    color: "text-[#FFD60A]",
  },
];
