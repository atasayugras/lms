import { useNavigate } from "react-router-dom";
import UserAvatar from "../profile/UserAvatar.jsx";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 text-white pl-4 pr-8 py-2 flex justify-between items-center">
      <h1
        className="text-lg font-bold"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        LMS
      </h1>
      <UserAvatar />
    </nav>
  );
};

export default Header;
