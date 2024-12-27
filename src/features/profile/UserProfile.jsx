import user from "../../data/user.json";
import Spinner from "../layout/Spinner.jsx";
import useLoading from "../layout/useLoading.jsx";

const UserProfile = () => {
  const isLoading = useLoading(true, 150);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex items-center px-8">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="rounded-full"
          style={{ width: "100px", height: "100px", marginRight: "16px" }}
        />
        <div>
          <p>
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>User ID:</strong> {user.userID}
          </p>
          <p>
            <strong>Profile Creation Date:</strong> {user.profileCreationDate}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
