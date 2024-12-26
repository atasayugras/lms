import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import useCourseDetailResponse from "./useCourseDetail.jsx";
import Spinner from "../layout/Spinner.jsx";

const CourseDetail = () => {
  const navigate = useNavigate();
  const { course, isLoading } = useCourseDetailResponse();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Layout PageTitle={course.title} />
      <div className="flex items-center px-8">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="rounded-md"
          style={{ width: "220px", height: "220px", marginRight: "16px" }}
        />
        <div>
          <p>
            <strong>ID:</strong> {course.id}
          </p>
          <p>
            <strong>Creation Date:</strong> {course.creationDate}
          </p>
          <strong>About the course:</strong>
          <textarea
            name="courseDescription"
            rows="5"
            cols="50"
            placeholder="Enter course content here..."
            className="w-full mt-4 p-2 border rounded-md"
            defaultValue="This course is about ..."
          />
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
