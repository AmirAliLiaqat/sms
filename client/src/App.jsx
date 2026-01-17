import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PublicLayout from "./components/layout/PublicLayout";
import Home from "./pages/landing/Home";
import About from "./pages/landing/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// public routes
import {
  Vision,
  Faculty,
  Management,
  ClassStructure,
  FeeStructure,
  Admissions,
  News,
  Blogs,
  Gallery,
  Contact,
  Academics,
  FacultyProfile,
  SingleBlog,
  SingleNews,
  AcademicCalendar,
  CampusLife,
} from "./pages/landing/Pages";

// admin routes
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import {
  Students,
  Teachers,
  Staff,
  ManagementUsers,
  Classrooms,
  Subjects,
  Timetable,
  Attendance,
  Exams,
  AdmissionsAdmin,
  FeeStructureAdmin,
  FeePayments,
  LibraryAdmin,
  Canteen,
  Announcements,
  Roles,
  AuditLogs,
  Settings,
  Departments,
  BlogsAdmin,
  NewsAdmin,
} from "./pages/admin/Modules";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/faculty/:id" element={<FacultyProfile />} />
          <Route path="/management" element={<Management />} />
          <Route path="/class-structure" element={<ClassStructure />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SingleNews />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<AcademicCalendar />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/admin"
            element={
              <AdminLayout>
                <Outlet />
              </AdminLayout>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="students" element={<Students />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="staff" element={<Staff />} />
            <Route path="management" element={<ManagementUsers />} />
            <Route path="classrooms" element={<Classrooms />} />
            <Route path="departments" element={<Departments />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="exams" element={<Exams />} />
            <Route path="admissions" element={<AdmissionsAdmin />} />
            <Route path="fee-structure" element={<FeeStructureAdmin />} />
            <Route path="fee-payments" element={<FeePayments />} />
            <Route path="library" element={<LibraryAdmin />} />
            <Route path="canteen" element={<Canteen />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="roles" element={<Roles />} />
            <Route path="audit-logs" element={<AuditLogs />} />
            <Route path="news" element={<NewsAdmin />} />
            <Route path="blogs" element={<BlogsAdmin />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
