import Table from "./Table.jsx";
import useCoursesResponse from "./useCoursesResponse.jsx";
import Spinner from "../layout/Spinner.jsx";
import Pagination from "../layout/Pagination.jsx";
import usePagination from "../layout/usePagination.jsx";

const Courses = () => {
  const { handleViewCourse, courses, isLoading } = useCoursesResponse();
  const { currentItems, currentPage, totalPages, handlePageChange } =
    usePagination(courses, 10); // 10 items per page for table

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="px-8">
      <Table courses={currentItems} onViewCourse={handleViewCourse} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Courses;
