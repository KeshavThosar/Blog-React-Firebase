
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import ProfileSettings from "./components/ProfileSettings";
import ProfileBlogs from "./components/ProfileBlogs";
import Blog from "./components/Blog";
import BlogEditor from "./components/BlogEditor";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/register" element={ <Register /> }/>
        <Route path="/blogs" element={ <Home /> } />
        <Route path="/blogs/new" element={ <BlogEditor mode="new" /> }/>
        <Route path="/blogs/:blogId" element={ <Blog /> }/>
        <Route path="/blogs/:blogId/edit" element={ <BlogEditor mode="edit" /> }/>
        <Route path="/profile" element={ <Profile /> }> 
          <Route path="settings" element={ <ProfileSettings /> }/>
          <Route path="blogs" element={ <ProfileBlogs /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
