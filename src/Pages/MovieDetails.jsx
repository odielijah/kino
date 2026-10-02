import { movieDetails } from "../data/movieDetails";

import Comments from "../components/Comments";
import DetailsHero from "../components/DetailsHero";
import ScoreCard from "../components/ScoreCard";
import Cast from "../components/Cast";
import MetaCard from "../components/MetaCard";
import Overview from "../components/Overview";
import Recommendations from "../components/Recommendations";

const MovieDetails = () => {
  return (
    <div className="bg-[#080808] text-white font-sans">
      <DetailsHero movieDetails={movieDetails} />

      <div className="px-5 md:px-[40px] pb-24 space-y-20 mt-8 lg:mt-16">
        <div className="grid grid-cols-1 min-[1230px]:grid-cols-[1fr_320px] gap-16">
          {/* Left column */}
          <div className="space-y-14">
            <Overview movieDetails={movieDetails} />
            <Recommendations />
            <Comments />
          </div>

          {/* Right column */}
          <div className="space-y-8 lg:pt-2">
              <MetaCard movieDetails={movieDetails} />
              <ScoreCard movieDetails={movieDetails} />

            <Cast movieDetails={movieDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
