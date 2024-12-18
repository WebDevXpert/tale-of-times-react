import React from 'react';

const PoliticsSection = () => {
  const articles = [
    {
      title: "The Joy, Comfort, and Stress-Reducing Power of Politics",
      date: "June 28, 2021",
      author: "akbarh",
      description: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
      image: "/images/business-blog-politic-news-image (1).jpg", // Replace with actual image URLs
    },
    {
      title: "What Politics Says About Your Personal Style",
      date: "June 28, 2021",
      author: "akbarh",
      description: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
      image: "/images/business-blog-politic-news-image(2).jpg", // Replace with actual image URLs
    },
    {
      title: "8 Surprising Ways Politics Can Affect You",
      date: "June 28, 2021",
      author: "akbarh",
      description: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
      image: "/images/business-blog-politic-news-image.jpg", // Replace with actual image URLs
    },
  ];

  return (
    <div className="container w-[80%] mx-auto px-4 py-8">
       <div className="flex items-center justify-between mt-8">
      <h1 className="text-4xl font-bold  mb-8">Politics</h1>
        <a href="#" className="text-black hover:text-blue-700 font-semibold">View All →</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className=" rounded-lg overflow-hidden ">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
            <a href="" className='text-blue-600 text-sm'>Politics</a>

              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600">{article.author} | {article.date}</p>
              <p className="text-gray-800 mt-2">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default PoliticsSection;
