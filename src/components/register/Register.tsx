import { Link } from "react-router-dom";
import office from "../../assets/office.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RegisterForm } from "../../interfaces";

const Register = () => {
  const formik = useFormik<RegisterForm>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required").min(8).max(16),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <section className="min-h-screen bg-gradient flex items-center justify-center">
        <div className=" w-[90%] md:w-[80%] flex items-center bg-white shadow-2xl rounded-md md:rounded-none">
          {/* left side */}

          <div className="hidden md:block w-[50%] bg-blue-900">
            <h1 className="text-3xl font-bold text-white ">
              <img src={office} alt="register" />
            </h1>
          </div>
          {/* right side */}
          <div className="w-[90%] md:w-[50%] mx-auto flex justify-center items-center md:shadow-md py-4">
            <form
              onSubmit={formik.handleSubmit}
              className=" w-[90%] md:w-[80%] bg-white rounded md:shadow-sm max-w-sm p-6"
            >
              <div className="pb-6">
                <h2 className="text-2xl text-blue-500 font-semibold  text-center">
                  Welcome to our website
                </h2>
                <p className="text-gray-600 text-center">
                  Register your account
                </p>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  placeholder="Enter your full name"
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
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

              <div className="mb-4">
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

              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Repeat Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  placeholder="Confirm your password"
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-blue-900 via-blue-700 to-pink-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition ease-out duration-500 "
                >
                  Register Now
                </button>
                <div className="flex justify-between items-center mt-2">
                  <p>Already registered?</p>
                  <Link
                    to="/login"
                    className="text-blue-500 font-semibold underline cursor-pointer"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
