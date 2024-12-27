import useCourseDetailResponse from "./useCourseDetail.jsx";
import Spinner from "../layout/Spinner.jsx";

const CourseDetail = () => {
  const { course, isLoading } = useCourseDetailResponse();
  const { id, thumbnail, title, creationDate } = course;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex items-center px-8">
        <img
          src={thumbnail}
          alt={title}
          className="rounded-md"
          style={{ width: "220px", height: "220px", marginRight: "16px" }}
        />
        <div>
          <p>
            <strong>ID:</strong> {id}
          </p>
          <p>
            <strong>Creation Date:</strong> {creationDate}
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
