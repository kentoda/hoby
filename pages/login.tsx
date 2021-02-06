import Link from "next/link";
import LoginForm from "../components/forms/loginform";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-200">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mt-24">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
          <p className="mt-2 text-center text-md text-gray-600">
            {"アカウントをお持ちではないですか？"}
            <Link href="/signup">
              <a href="#" className="text-blue-500">
                Signup
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
