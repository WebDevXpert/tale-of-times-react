import React from "react";
export default function ArticleGrid() {
  const articles = [
    {
      id: 1,
      title:
        "Automobile: All the Stats, Facts, and Data You'll Ever Need to Know",
      category: "Automobile",
      image: "/path-to-your-image1.jpg",
      description:
        "Cursus iaculis etiam in nullam donec sed consequat scelerisque nibh amet.",
      date: "June 28, 2021",
    },
    {
      id: 2,
      title: "The Top 11 Traits Health CEOs Have in Common",
      category: "Health",
      image: "/path-to-your-image2.jpg",
      description:
        "Cursus iaculis etiam in nullam donec sed consequat scelerisque nibh amet.",
      date: "June 25, 2021",
    },
    {
      id: 3,
      title: "How Millennials Are Disrupting Automobile",
      category: "Automobile",
      image: "/path-to-your-image3.jpg",
      description:
        "Cursus iaculis etiam in nullam donec sed consequat scelerisque nibh amet.",
      date: "June 28, 2021",
    },
    {
      id: 4,
      title: "15 Counterintuitive Tips for Crushing Your Health Goals",
      category: "Health",
      image: "/path-to-your-image4.jpg",
      description:
        "Cursus iaculis etiam in nullam donec sed consequat scelerisque nibh amet.",
      date: "June 25, 2021",
    },
  ];

  return (
    <div className="flex max-md:flex-wrap w-[80%] mx-auto justify-center items-center">
      <div className="container1">
        <div className=" flex justify-between items-center mt-8">
          <h1 className="text-4xl font-bold  mb-8">Automobile</h1>
          <a href="#" className="text-black hover:text-blue-700 font-semibold">
            View All →
          </a>
        </div>
        <div className=" rounded-lg -z-10 overflow-hidden ">
          <img
            src="/images/business-blog-editor-pick-img-6.jpg"
            alt=""
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <a href="" className="text-blue-600 text-sm">
              Automobile
            </a>

            <h2 className="text-xl font-semibold">
              Automobile: All the Stats, Facts, and Data You’ll Ever Need to
              Know
            </h2>
            <p className="text-gray-600">akbarh | June 28, 2021</p>
            <p className="text-gray-800 mt-2">
              Cursus iaculis etiam in In nullam donec sem sed consequat
              scelerisque nibh amet, massa egestas risus, gravida vel amet,
              imperdiet …
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="midcont1">
            <div className=" rounded-lg overflow-hidden ">
              <img
                src="/images/business-blog-automobile-news-im (1).jpg"
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <a href="" className="text-blue-600 text-sm">
                  Automobile
                </a>

                <h2 className="text-xl font-semibold">
                  Automobile: All the Stats, Facts, and Data You’ll Ever Need to
                  Know
                </h2>
                <p className="text-gray-600">akbarh | June 28, 2021</p>
                <p className="text-gray-800 mt-2">
                  Cursus iaculis etiam in In nullam donec sem sed consequat
                  scelerisque nibh amet, massa egestas risus, gravida vel amet,
                  imperdiet …
                </p>
              </div>
            </div>
          </div>
          <div className="midcont2">
            {" "}
            <div className=" rounded-lg overflow-hidden ">
              <img
                src="/images/business-blog-automobile-news-im.jpg"
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <a href="" className="text-blue-600 text-sm">
                  Automobile
                </a>

                <h2 className="text-xl font-semibold">
                  Automobile: All the Stats, Facts, and Data You’ll Ever Need to
                  Know
                </h2>
                <p className="text-gray-600">akbarh | June 28, 2021</p>
                <p className="text-gray-800 mt-2">
                  Cursus iaculis etiam in In nullam donec sem sed consequat
                  scelerisque nibh amet, massa egestas risus, gravida vel amet,
                  imperdiet …
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2  mx-2">
        <div className=" flex  flex-wrap justify-between items-center mt-8">
          <h1 className="text-4xl font-bold  mb-8">Health</h1>
          <a href="#" className="text-black hover:text-blue-700 font-semibold">
            View All →
          </a>
        </div>
        <div className=" rounded-lg overflow-hidden ">
          <img
            src="/images/business-blog-health-news-image.jpg"
            alt=""
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <a href="" className="text-blue-600 text-sm">
              Health
            </a>

            <h2 className="text-xl font-semibold">
              The Top 11 Traits Health Ceos Have in Common
            </h2>
            <p className="text-gray-600">akbarh | June 28, 2021</p>
            <p className="text-gray-800 mt-2">
              Cursus iaculis etiam in In nullam donec sem sed consequat
              scelerisque nibh amet, massa egestas risus, gravida vel amet,
              imperdiet …
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="midcont1">
            <div className=" rounded-lg overflow-hidden ">
              <img
                src="/images/business-blog-health-news-image (1).jpg"
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <a href="" className="text-blue-600 text-sm">
                  Automobile
                </a>

                <h2 className="text-xl font-semibold">
                  Automobile: All the Stats, Facts, and Data You’ll Ever Need to
                  Know
                </h2>
                <p className="text-gray-600">akbarh | June 28, 2021</p>
                <p className="text-gray-800 mt-2">
                  Cursus iaculis etiam in In nullam donec sem sed consequat
                  scelerisque nibh amet, massa egestas risus, gravida vel amet,
                  imperdiet …
                </p>
              </div>
            </div>
          </div>
          <div className="midcont2">
            {" "}
            <div className=" rounded-lg overflow-hidden ">
              <img
                src="/images/business-blog-health-news-image (2).jpg"
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <a href="" className="text-blue-600 text-sm">
                  Automobile
                </a>

                <h2 className="text-xl font-semibold">
                  Automobile: All the Stats, Facts, and Data You’ll Ever Need to
                  Know
                </h2>
                <p className="text-gray-600">akbarh | June 28, 2021</p>
                <p className="text-gray-800 mt-2">
                  Cursus iaculis etiam in In nullam donec sem sed consequat
                  scelerisque nibh amet, massa egestas risus, gravida vel amet,
                  imperdiet …
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //   return  */}

      {/* //       </div> */}
    </div>
  );
}
