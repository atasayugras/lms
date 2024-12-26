import CourseTableRow from "./CourseTableRow.jsx";

const CourseTable = (props) => {
  const { onViewCourse, courses } = props;
  return (
    <table
      className="mt-0"
      border="1"
      style={{ width: "100%", borderCollapse: "collapse" }}
    >
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>ID</th>
          <th>Creation Date</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <CourseTableRow
            key={course.id}
            onViewCourse={onViewCourse}
            course={course}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;
