import { Icon } from "@iconify/react";
import React from "react";

const GuestPost = () => {
  return (
    <div className="container w-[80%] mx-auto">
      <div className="flex items-center justify-between mt-8">
        <h1 className="text-4xl font-bold  mb-8">Guest Posts</h1>
        <a href="#" className="text-black hover:text-blue-700 font-semibold">
          View All →
        </a>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="w-full relative -z-10 md:w-1/2 lg:w-[49.333333%]">
          <a href="#">
            <img
              src="/images/business-blog-guest-posts-image (1).jpg"
              alt="This Will Fundamentally Change the Way You Look at Technology"
              className="w-full rounded-lg"
            />
            <div className="p-4   absolute bottom-4">
              <p className="text-sm text-white">Guests Posts | Health</p>
              <h3 className="text-4xl font-bold pb-2 text-white">
                How Health Businesses Can Survive in a Post Coronaconomy
              </h3>
              <p className="text-white text-sm">akbarh June 25, 2021</p>
            </div>
          </a>
        </div>
        <div className="w-full relative -z-10 md:w-1/2 lg:w-[49.333333%]">
          <img
            src="/images/business-blog-guest-posts-image.jpg"
            alt="Technology Changed My Life. Here's My Story"
            className="w-full rounded-lg"
          />
          <div className="p-4   absolute bottom-4">
            <p className="text-sm text-white">Guests Posts | Stock Market</p>
            <h3 className="text-4xl font-bold pb-2 text-white">
              Fact Check: 12 Common Misconceptions About Stock Market
            </h3>
            <p className="text-white text-sm">akbarh June 25, 2021</p>
          </div>
        </div>
      </div>
      <div className="mt-10  flex flex-wrap max-md:justify-center justify-between items-center px-10 py-7 shadow-md">
        <div className="flex flex-wrap max-md:justify-center ">
          <span className="rounded-full border p-3 border-black mx-3">
            <Icon icon="fa:newspaper-o" width="2.3em" height="2.3em" />
          </span>
          <div>
            <h3 className="text-4xl font-bold">Your posts will be the next</h3>
            <p>
              Egestas suspendisse bibendum tempus cursus pulvinar eget odio
              ultricies augue.
            </p>
          </div>
        </div>
        <button className="text-[15px] max-sm:my-3 px-10 py-[10px] group hover:bg-black border-black border-[1px]">
          <p className="group-hover:text-white font-bold">Be A Guest Author</p>
        </button>
      </div>
    </div>
  );
};

export default GuestPost;
