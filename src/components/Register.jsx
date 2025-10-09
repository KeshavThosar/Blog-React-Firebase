import { useForm } from "react-hook-form";

export default function Register() {
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    
  }
  return (
    <>
    <div className="py-7 space-y-8"></div>
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mb-5">
      
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
      <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="Create a password"
            required
          />
        </div>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Register
        </button>
      </form>
      </div>
    </div>
    </>
  );
}