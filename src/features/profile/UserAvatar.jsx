import { useNavigate } from "react-router-dom";
import user from "../../data/user.json";

function UserAvatar() {
  const navigate = useNavigate();

  return (
    <img
      src={user.avatar}
      alt="User Avatar"
      className="rounded-full cursor-pointer"
      style={{ width: "40px", height: "40px" }}
      onClick={() => navigate("/profile")}
    />
  );
}

export default UserAvatar;
