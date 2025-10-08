import { useEffect, useState } from "react";
import { useFirebaseAppContext } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import BlogCard from "./BlogCard";

export default function Home() {
  const { db } = useFirebaseAppContext();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogPosts() {
      const _blogs = [];
      const querySnapshot = await getDocs(collection(db, "blogs"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        const data = doc.data();
        _blogs.push({
          doc: doc.id,
          title: data.title,
          content: data.content,
        });
      });

      setBlogs(_blogs);
    }

    getBlogPosts();
  }, []);
  return (
    <div className="mx-10 mt-5">
      {
        blogs.map((blog) => {
          return <BlogCard key={blog.doc} blog={blog} />;
        })}
    </div>
  );
}
