import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[60px] h-[calc(100vh-56px)] bg-gray-800 relative top-[56px] overflow-y-auto">
      <nav className="p-2">
        <Link
          to="/"
          className="flex justify-center p-3 text-gray-300 hover:bg-gray-700 rounded mb-2"
        >
          <span className="text-xl">📖</span>
        </Link>
        <Link
          to="/catalog"
          className="flex justify-center p-3 text-gray-300 hover:bg-gray-700 rounded mb-2"
        >
          <span className="text-xl">📚</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
