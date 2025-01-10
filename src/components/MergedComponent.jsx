import { Icon } from "@iconify/react";
import React from "react";

const MergedComponent = () => {
  const articles = [
    {
      category: "Stock Market",
      title: "The Incredible Stock Market Product I Can’t Live Without",
      date: "June 25, 2021",
      author: "akbarh",
      description:
        "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
      image: "/images/business-blog-must-read-news-ima.jpg", // Replace with actual image URLs
    },
    {
      category: "Health",
      title: "8 Powerful Habits to Master for Success in Health",
      date: "June 25, 2021",
      author: "akbarh",
      description:
        "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
      image: "/images/business-blog-must-read-news-ima (2).jpg", // Replace with actual image URLs
    },
    {
      category: "Technology",
      title: "10 Global Trends That Will Affect Technology in 2022",
      date: "June 25, 2021",
      author: "akbarh",
      description:
        "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
      image: "/images/business-blog-must-read-news-ima (1).jpg", // Replace with actual image URLs
    },
  ];

  const stats = [
    {
      platform: "Facebook",
      icon: <Icon icon="logos:facebook" width="1.3em" height="1.3em" />,
      count: "204,640",
      label: "Fans",
    },
    {
      platform: "Twitter",
      icon: <Icon icon="logos:twitter" width="1.3em" height="1.3em" />,
      count: "164,408",
      label: "Followers",
    },
    {
      platform: "YouTube",
      icon: <Icon icon="logos:youtube-icon" width="1.3em" height="1.3em" />,
      count: "320,228",
      label: "Subscribers",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      <div className="gg w-1/2  px-4 py-8">
        {/* Must Read Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Must Read</h1>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            View All →
          </a>
        </div>
        <div className="space-y-8 mb-12">
          {articles?.map((article, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full md:w-1/2 lg:w-1/3 h-48 object-cover rounded-md"
              />
              <div className="flex-1">
                <p className="text-blue-500 text-sm">
                  Must Read | {article.category}
                </p>
                <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
                <p className="text-gray-500 text-sm my-2">
                  {article.author} | {article.date}
                </p>
                <p className="text-gray-800">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="gg py-8 mx-2">
        {/* Stay Connected Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Stay connected</h2>
        </div>
        <div className="flex justify-center space-x-8 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold">{stat.count}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="relative -z-10 rounded-lg  overflow-hidden">
          <img
            src="/images/business-blog-promo-news-image-2.jpg" // Replace with actual image URL
            alt="Promotional banner"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MergedComponent;
