function CourseTableRow(props) {
  const { onViewCourse, course } = props;

  return (
    <tr key={course.id}>
      <td>
        <img
          src={course.thumbnail}
          alt={course.title}
          style={{ width: "50px", height: "50px" }}
        />
      </td>
      <td>{course.title}</td>
      <td>{course.id}</td>
      <td>{course.creationDate}</td>
      <td>
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => onViewCourse(course)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/709/709724.png"
            alt="View"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
      </td>
    </tr>
  );
}

export default CourseTableRow;
