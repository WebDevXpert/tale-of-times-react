import { useState } from "react";
import { toast } from "react-toastify";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import customFetch from "../utils/axios.js";
import { useAuth } from "../context/AuthContext.js";
import axios from "axios";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // const data = await customFetch.post(`/api/v1/admin/login`, userData);
      const data = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/login`,
        userData
      );
      toast.success("User logged in");
      // console.log("data", data);
      // addUserToLocalStorage(data.data);
      login(data.data);
      navigate("/admin/blogs");
    } catch (error) {
      console.log("Error", error.response.data.msg);
      toast.error(error.response.data.msg);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <section className="text-gray-600 body-font relative bg-[#f2f0f0] w-1/3 my-8 mx-auto rounded-lg">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Login
              </h1>
            </div>
            <div className=" mx-auto">
              <div className="flex justify-center flex-wrap -m-2">
                <div className="fields w-full">
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        onChange={changeHandler}
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="password"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          onChange={changeHandler}
                          id="password"
                          name="password"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        {showPassword ? (
                          <IoMdEyeOff
                            className="absolute top-3 right-2"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <IoMdEye
                            className="absolute top-3 right-2"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 w-full mt-2">
                  <button className="flex justify-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 w-full rounded text-lg">
                    Login
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 flex justify-end">
                  <Link
                    href="/auth/forgot-password"
                    className="text-indigo-500"
                  >
                    Forget Password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}
