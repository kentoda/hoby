import Link from "next/link";

const signUp: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-200">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mt-24">
          <h2 className="mt-6 text-center text-3xl leading-9 font-   extrabold text-gray-900">
            SignUp
          </h2>
          <p className="mt-2 text-center text-md text-gray-600">
            {"既にアカウントをお持ちですか?"}
            <Link href="/login">
              <a href="#" className="text-blue-500">
                LogIn
              </a>
            </Link>
          </p>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* SignUpFormコンポーネントをここ */}
        </div>
      </div>
    </div>
  );
};
export default signUp;