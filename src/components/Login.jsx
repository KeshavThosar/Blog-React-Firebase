import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

 return (
    <>
    <div className="py-8 space-y-8"></div>
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="py-8 space-y-8"></div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
      <div className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            {...register("email", {
              required: true
            })}
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            {...register("password", {
              required: true,
            })}
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="Enter your password"
          />
        </div>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
        </form>
      </div>
    </div>
    </>
  );
}