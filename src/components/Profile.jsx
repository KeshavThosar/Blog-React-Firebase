import { useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!["/profile/settings", "/profile/blogs"].includes(location.pathname)) {
      navigate("/profile/settings");
    }
  }, []);

  return (
    <div className="flex mt-10 ">
      <div className="w-64 bg-white h-screen shadow-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Account</h2>
          <nav className="space-y-2">
            <Link
              to="settings"
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
            >
              Settings
            </Link>
            <Link
              to="blogs"
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
            >
              Your Blogs
            </Link>
          </nav>
        </div>
      </div>
      <div className="grow mx-10">
        <Outlet />
      </div>
    </div>
  );
}
