"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

      password: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Login failed!");
      } else {
        toast.success("Login successful");
        router.push("/");
      }
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-sky-400 via-blue-500 to-indigo-700 dark:from-gray-400 dark:via-gray-600 dark:to-gray-800 px-5">

      <div className="w-full max-w-md rounded-3xl border border-white/30 bg-white/20 p-8 shadow-2xl backdrop-blur-xl">

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/30 text-4xl">
            🌤️
          </div>

          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-white/80">
            Login to check the weather
          </p>
        </div>

        <form onSubmit={formik.handleSubmit}>

          {/* Email */}
          <div className="mb-5">
            <label className="mb-2 block text-white">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white outline-none"
            />

            {formik.touched.email && formik.errors.email && (
              <p className="mt-2 text-sm text-white">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="mb-2 block text-white">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white outline-none"
            />

            {formik.touched.password && formik.errors.password && (
              <p className="mt-2 text-sm text-white">
                {formik.errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-white py-3 font-bold text-blue-600 shadow-lg transition hover:bg-blue-50"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-white/70">
          🌍 Your weather, everywhere
        </p>

      </div>
    </div>
  );
}