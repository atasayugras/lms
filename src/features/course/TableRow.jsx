/* eslint-disable react/prop-types */

function TableRow(props) {
  const { onViewCourse, course } = props;
  const { id, thumbnail, title, creationDate } = course;

  return (
    <tr key={id}>
      <td>
        <img
          src={thumbnail}
          alt={title}
          style={{ width: "50px", height: "50px" }}
        />
      </td>
      <td>{title}</td>
      <td>{id}</td>
      <td>{creationDate}</td>
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

export default TableRow;
