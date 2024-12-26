import { Routes, Route } from "react-router-dom";
import Courses from "./features/course/Courses.jsx";
import CourseDetail from "./features/course/CourseDetail.jsx";
import UserProfile from "./features/profile/UserProfile.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Courses />} />
      <Route path="/course/:courseId" element={<CourseDetail />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
};

export default App;
