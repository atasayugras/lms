import Table from "./Table.jsx";
import useCoursesResponse from "./useCoursesResponse.jsx";
import Spinner from "../layout/Spinner.jsx";

const Courses = () => {
  const { handleViewCourse, courses, isLoading } = useCoursesResponse();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="px-8">
        <Table courses={courses} onViewCourse={handleViewCourse} />
      </div>
    </>
  );
};

export default Courses;
