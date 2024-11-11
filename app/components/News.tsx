/* eslint-disable @typescript-eslint/no-unused-vars */
import Weather from "./api/[Weather]";

const News = () => {

  return (
    <div className="flex flex-wrap justify-center gap-5 md:justify-between border mx-56">
      <div className="border">
        <h2>Weather</h2>
        <Weather />
      </div>
      <div className="border">Markets</div>
      <div className="border">Traffic</div>
      <div className="border">Trending</div>
    </div>
  );
};

export default News;
