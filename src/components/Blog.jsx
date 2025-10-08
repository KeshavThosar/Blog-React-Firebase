import { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useFirebaseAppContext } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function Blog() {
  const { blogId } = useParams();
  const { db } = useFirebaseAppContext();
  const [blog, setBlog] = useState(null);
   
  useEffect(() => {
    async function getBlog(blogId) {
      const docRef = await doc(db, 'blogs', blogId);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()) {
        setBlog(docSnap.data());
      }
    }


    // setTimeout(() => {
    getBlog(blogId);
    // }, 1500);

  }, [])

  if(!blog) {
    return <div className="text-center text-lg font-bold mt-5">Loading...</div>
  }


  return (
  <div className="mx-10 mt-5">
    <h1 className="text-lg font-bold text-center">{blog.title}</h1>
    <p className="mt-3">{blog.content}</p>
  </div>
  );
}