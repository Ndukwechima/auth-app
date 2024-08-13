import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import office from "../../assets/office.jpg";
import { LoginForm } from "../../interfaces";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Login: React.FC = () => {
  const formik = useFormik<LoginForm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required").min(8).max(16),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <section className="min-h-screen bg-gradient flex items-center justify-center">
        <div className="w-[90%] md:w-[80%] flex items-center bg-white shadow-2xl py-6 rounded-md md:rounded-none">
          <div className="hidden md:block w-[50%] bg-blue-900 md:shadow-sm">
            <h1 className="text-3xl font-bold text-white ">
              <img src={office} alt="register" />
            </h1>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="w-[90%] lg:max-w-[40%] mx-auto bg-white p-6 rounded md:shadow-sm "
          >
            <div className="">
              <Link to="/">
                <FaArrowLeft size={18} className="cursor-pointer" />
              </Link>
              <h2 className="text-xl text-blue-500 font-bold text-center">
                Welcome Back
              </h2>
              <p className="text-gray-500 text-center mb-4">
                Login to your account
              </p>
            </div>

            <div className="mb-4 mt-8 h-[9vh]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Enter your email"
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="mb-6 mt-8 h-[9vh]">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Enter your password"
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div>
              <Link to="/dashboard">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-blue-900 via-blue-700 to-pink-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition ease-out duration-500 "
                >
                  Login
                </button>
              </Link>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm">Forgot password?</p>
                <Link
                  to="/reset-password"
                  className="text-blue-500 font-semibold underline cursor-pointer text-sm"
                >
                  Reset password
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
