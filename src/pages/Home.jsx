import React from "react";
import FeaturedArticles from "../components/FeaturedArticles";
import InfoBoard from "../components/InfoBoard";
import Newsletter from "../components/NewsLetter";
import UpdatedNews from "../components/UpdatedNews";
import StockMarket from "../components/StockMarket";
import LatestTechnology from "../components/LatestTechnologies";
import PoliticsSection from "../components/PoliticsSection";
import ArticleGrid from "../components/ArticleGrid";
import GuestPost from "../components/GuestPost";
import MergedComponent from "../components/MergedComponent";

function Home() {
  return (
    <div>
      <FeaturedArticles />
      {/* <InfoBoard />
      <Newsletter /> */}
      <UpdatedNews />
      <StockMarket />
      <LatestTechnology />
      <PoliticsSection />
      <ArticleGrid />
      <GuestPost />
      <MergedComponent />
    </div>
  );
}

export default Home;
