import { useNavigate } from "react-router-dom";
import courses from "../../data/courses.json";
import useLoading from "../layout/useLoading.jsx";

const useCourses = () => {
  const navigate = useNavigate();
  const isLoading = useLoading(true, 1000); // We can adjust the delay as needed
  const handleViewCourse = (course) => {
    navigate(`/course/${course.id}`);
  };

  return {
    courses,
    handleViewCourse,
    isLoading,
  };
};

export default useCourses;
