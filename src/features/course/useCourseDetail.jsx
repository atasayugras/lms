import courses from "../../data/courses.json";
import { useParams } from "react-router-dom";
import useLoading from "../layout/useLoading.jsx";

function useCourseDetailResponse() {
  const isLoading = useLoading(true, 150); // We can adjust the delay as needed
  const params = useParams();
  const courseId = params.courseId;
  const course = courses.find((course) => course.id === courseId);

  return { course, courseId, isLoading };
}

export default useCourseDetailResponse;
