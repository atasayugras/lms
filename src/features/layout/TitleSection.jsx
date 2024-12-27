/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function TitleSection(props) {
  const { pageTitle } = props;
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginBottom: "20px",
      }}
    >
      {location.pathname !== "/" && (
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
            alt="View"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
      )}
      <h1 className="text-2xl font-bold">{pageTitle}</h1>
    </div>
  );
}

export default TitleSection;
