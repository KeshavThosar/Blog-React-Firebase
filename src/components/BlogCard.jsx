import { Link } from "react-router-dom";

export default function BlogCard({ blog: { doc, title, content } }) {
  return (
    <div className="max-w-md my-3 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        <Link to={`/blogs/${doc}`} >
          {title ?? 'Understanding React Hooks'}
        </Link>
      </h3>
      <p className="text-gray-600 leading-relaxed">
        { content ?? 
        `React Hooks are functions that let you use state and other React features 
        without writing a class. They provide a more direct API to the React concepts 
        you already know...` }
      </p>
    </div>
  );
}