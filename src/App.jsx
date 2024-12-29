import { Routes, Route } from "react-router-dom";
import Courses from "./features/course/Courses.jsx";
import Catalog from "./features/course/Catalog.jsx";
import CourseDetail from "./features/course/CourseDetail.jsx";
import UserProfile from "./features/profile/UserProfile.jsx";
import Layout from "./features/layout/Layout.jsx";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout pageTitle="My courses">
            <Courses />
          </Layout>
        }
      />
      <Route path="/course/:courseId" element={<CourseDetail />} />
      <Route
        path="/catalog"
        element={
          <Layout pageTitle="Catalog">
            <Catalog />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout pageTitle="Profile">
            <UserProfile />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
