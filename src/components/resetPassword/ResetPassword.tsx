import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import office from "../../assets/office.jpg";
import { ResetPasswordForm, OTPForm } from "../../interfaces";
import { Link } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const [step, setStep] = useState(1);

  const emailFormik = useFormik<ResetPasswordForm>({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Email submitted: ", values);
      setStep(2);
    },
  });

  const otpFormik = useFormik<OTPForm>({
    initialValues: {
      otp: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      otp: Yup.string().required("Required"),
      newPassword: Yup.string().required("Required").min(8).max(16),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), ""], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("OTP and new password submitted: ", values);
      //I will Handle OTP verification and password reset
    },
  });

  return (
    <>
      <section className="min-h-screen bg-gradient flex items-center justify-center">
        <div className="w-[90%] flex items-center bg-white shadow-2xl py-6 rounded-md md:rounded-none">
          <div className="hidden md:block w-[50%] bg-blue-900 md:shadow-sm">
            <h1 className="text-3xl font-bold text-white ">
              <img src={office} alt="register" />
            </h1>
          </div>
          <form
            onSubmit={
              step === 1 ? emailFormik.handleSubmit : otpFormik.handleSubmit
            }
            className="bg-white p-6 rounded md:shadow-sm w-[90%] md:max-w-[44%] lg:max-w-[30%] mx-auto"
          >
            {step === 1 ? (
              <>
                <h2 className="text-xl text-blue-500 font-bold text-center">
                  Reset your Password
                </h2>
                <p className="text-[10px] text-gray-500 text-center mb-6">
                  An OTP will be send to your mail. Proceed to the next step
                </p>
                <div className="mb-4 py-4 h-[12vh]">
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
                    onChange={emailFormik.handleChange}
                    onBlur={emailFormik.handleBlur}
                    value={emailFormik.values.email}
                    placeholder="Enter your email"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      emailFormik.touched.email && emailFormik.errors.email
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {emailFormik.touched.email && emailFormik.errors.email ? (
                    <div className="text-red-500 text-sm">
                      {emailFormik.errors.email}
                    </div>
                  ) : null}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl text-blue-500 font-bold mb-4 text-center">
                  Verify OTP
                </h2>

                <div className="mb-4 h-[9vh]">
                  <label
                    htmlFor="otp"
                    className="block text-sm font-medium text-gray-700"
                  >
                    OTP
                  </label>
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    onChange={otpFormik.handleChange}
                    onBlur={otpFormik.handleBlur}
                    value={otpFormik.values.otp}
                    placeholder="Enter the OTP"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      otpFormik.touched.otp && otpFormik.errors.otp
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {otpFormik.touched.otp && otpFormik.errors.otp ? (
                    <div className="text-red-500 text-sm">
                      {otpFormik.errors.otp}
                    </div>
                  ) : null}
                </div>

                <div className="mb-4 h-[9vh]">
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    onChange={otpFormik.handleChange}
                    onBlur={otpFormik.handleBlur}
                    value={otpFormik.values.newPassword}
                    placeholder="Enter your new password"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      otpFormik.touched.newPassword &&
                      otpFormik.errors.newPassword
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {otpFormik.touched.newPassword &&
                  otpFormik.errors.newPassword ? (
                    <div className="text-red-500 text-sm">
                      {otpFormik.errors.newPassword}
                    </div>
                  ) : null}
                </div>

                <div className="mb-4 h-[9vh]">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm New Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={otpFormik.handleChange}
                    onBlur={otpFormik.handleBlur}
                    value={otpFormik.values.confirmPassword}
                    placeholder="Confirm your new password"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      otpFormik.touched.confirmPassword &&
                      otpFormik.errors.confirmPassword
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {otpFormik.touched.confirmPassword &&
                  otpFormik.errors.confirmPassword ? (
                    <div className="text-red-500 text-sm">
                      {otpFormik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
              </>
            )}

            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-blue-900 via-blue-700 to-pink-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition ease-out duration-500"
              >
                {step === 1 ? "Send OTP" : "Reset Password"}
              </button>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm">Remembered your password?</p>
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
      </section>
    </>
  );
};

export default ResetPassword;
