const StockMarket = () => {
  const articles = [
    {
      title: "What Your Relationship With Stock Market Says About You",
      date: "June 28, 2021",
      author: "akbarh",
      description:
        "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
      image: "/images/business-blog-stock-market-news (2).jpg", // Replace with actual image URLs
    },
    {
      title: "How I Learned to Stop Worrying and Love Stock Market",
      date: "June 28, 2021",
      author: "akbarh",
      description:
        "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
      image: "/images/business-blog-stock-market-news (1).jpg", // Replace with actual image URLs
    },
    {
      title: "Why Stock Market Affects Men and Women Differently",
      date: "June 28, 2021",
      author: "akbarh",
      description:
        "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
      image: "/images/business-blog-stock-market-news.jpg", // Replace with actual image URLs
    },
  ];

  return (
    <div id="stock-market" className="container w-[80%] mx-auto px-4 py-8">
      <div className=" flex justify-between items-center mt-8">
        <h1 className="text-4xl font-bold  mb-8">Stock Market</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className=" rounded-lg overflow-hidden ">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <a href="" className="text-blue-600 text-sm">
                Stock Market
              </a>
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600">
                {article.author} | {article.date}
              </p>
              <p className="text-gray-800 mt-2">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockMarket;
