import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-800">React Blog Site</div>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors">
              Login
            </Link>
            <Link to="/register" className="text-gray-600 hover:text-blue-600 transition-colors">
              Register
            </Link>
            <Link to="/profile/settings" className="text-gray-600 hover:text-blue-600 transition-colors">
              Profile
            </Link>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}