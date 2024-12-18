import React from "react";

const LatestTechnology = () => {
  return (
    <div className="container w-[80%] mx-auto">
      <div className="flex items-center justify-between mt-8">
        <h1 className="text-4xl font-bold  mb-8">Technology</h1>
        <a href="#" className="text-black hover:text-blue-700 font-semibold">
          View All →
        </a>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="w-full relative -z-10 md:w-1/2 lg:w-[49.333333%]">
          <a href="#">
            <img
              src="/images/business-blog-latest-technology (1).jpg"
              alt="This Will Fundamentally Change the Way You Look at Technology"
              className="w-full rounded-lg"
            />
            <div className="p-4   absolute bottom-4">
              <p className="text-sm text-white">Technology</p>
              <h3 className="text-4xl font-bold pb-2 text-white">
                This Will Fundamentally Change the Way You Look at Technology
              </h3>
              <p className="text-white text-sm">akbarh June 28, 2021</p>
            </div>
          </a>
        </div>
        <div className="w-full relative -z-10 md:w-1/2 lg:w-[49.333333%]">
          <a href="#">
            <img
              src="/images/business-blog-latest-technology.jpg"
              alt="Technology Changed My Life. Here's My Story"
              className="w-full rounded-lg"
            />
            <div className="p-4   absolute bottom-4">
              <p className="text-sm text-white">Technology</p>
              <h3 className="text-4xl font-bold pb-2 text-white">
                Technology Changed My Life. Here's My Story
              </h3>
              <p className="text-white text-sm">akbarh June 28, 2021</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestTechnology;
