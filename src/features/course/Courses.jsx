import Layout from "../layout/Layout.jsx";
import CourseTable from "./CourseTable.jsx";
import useCoursesResponse from "./useCoursesResponse.jsx";
import Spinner from "../layout/Spinner.jsx";

const Courses = () => {
  const { handleViewCourse, courses, isLoading } = useCoursesResponse();

  if (isLoading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  return (
    <>
      <Layout PageTitle="Courses">
        <div className="px-8">
          <CourseTable courses={courses} onViewCourse={handleViewCourse} />
        </div>
      </Layout>
    </>
  );
};

export default Courses;
