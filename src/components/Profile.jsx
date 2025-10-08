import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <div>
        Profile Page
        <Link to="settings">Settings</Link>
        <Link to="blogs">Your Blogs</Link>
      </div>
      <Outlet />
    </div>
  );
}