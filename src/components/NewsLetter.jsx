import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <div className="rounded-lg md:p-10 w-full md:w-1/2">
        <div className="flex items-center mb-4">
          <img
            src="/images/business-blog-wide-promo-banner.jpg"
            alt="This Will Fundamentally Change the Way You Look at Technology"
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full bg-white shadow-md p-[1.5rem] md:w-[28%]">
        <h2 className="text-gray-800 text-2xl font-bold mb-4">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-gray-600 mb-4">
          Egestas eu molestie lacus, rhoncus, gravida aliquet sociis vulputate
          faucibus tristique odio
        </p>
        <form className="flex items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-100 p-2 pl-10 text-sm text-gray-700"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
