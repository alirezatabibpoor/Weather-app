"use client";
import { useRouter } from "next/navigation";
import { add_user } from "@/app/redux/userslice";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup"
export default function Register() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{name:"",email:"",password:"",confirmPassword:""},
        validationSchema: yup.object({
            name:yup.string().required("Full name is required!!"),
            email:yup.string().email().required("Email is requierd!"),
            password:yup.string().required("Password is required"),
             confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords do not match").required("Confirm your password"),
        }),
        onSubmit:async(values,{resetForm})=>
            {
             await dispatch(add_user({name:values.name , email:values.email , password:values.password}))
              toast.success("Account created successfully!");
              router.push("/login");
              resetForm();
              
            }
    })
    const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-sky-400 via-blue-500 to-indigo-700 dark:from-gray-400 dark:via-gray-600 dark:to-gray-800 px-5">

      <div className="w-full max-w-md rounded-3xl border border-white/30 bg-white/20 p-8 shadow-2xl backdrop-blur-xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/30 text-4xl shadow-lg">
            🌤️
          </div>

          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-2 text-white/80">
            Join us and explore the weather worldwide
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="mb-2 block font-medium text-white">
              Full Name
            </label>

            <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white outline-none placeholder:text-white/60 transition focus:bg-white/30 focus:ring-2 focus:ring-white"
            />
            {
            formik.touched.name && formik.errors.name &&(
                <p className="dark:text-white text-red-500">{formik.errors.name}</p>
            )
            }
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium text-white">
              Email
            </label>

            <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
              type="text"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white outline-none placeholder:text-white/60 transition focus:bg-white/30 focus:ring-2 focus:ring-white"
            />
            {
            formik.touched.email && formik.errors.email &&(
                <p className="dark:text-white text-red-500">{formik.errors.email}</p>
            )
            }
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-medium text-white">
              Password
            </label>

            <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white outline-none placeholder:text-white/60 transition focus:bg-white/30 focus:ring-2 focus:ring-white"
            />
            {
            formik.touched.password && formik.errors.password &&(
                <p className="dark:text-white text-red-500">{formik.errors.password}</p>
            )
            }
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block font-medium text-white">
              Confirm Password
            </label>

           <input
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
              type="password"
              placeholder="Enter your confirm password"
              className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white outline-none placeholder:text-white/60 transition focus:bg-white/30 focus:ring-2 focus:ring-white"
            />
            {
            formik.touched.confirmPassword && formik.errors.confirmPassword &&(
                <p className="dark:text-white text-red-500">{formik.errors.confirmPassword}</p>
            )
            }
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-white py-3 font-bold text-blue-600 shadow-lg transition hover:scale-[1.02] hover:bg-blue-50 active:scale-95"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-white/80">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-white underline hover:text-blue-100"
          >
            Sign In
          </a>
        </p>

      </div>
    </div>
  );
}