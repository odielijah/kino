import { mockMovies, sections } from "../data/mockMovies";

import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="mt-8">
        {sections.map((section) => (
          <div key={section.id} className="px-8 max-md:pl-4 md:pt-13">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase mb-6">
              {section.title}
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-10 -mx-8 px-8 scrollbar-hide">
              {mockMovies.map((movie) => (
                <div key={movie.id} className="w-[140px] md:w-[200px] flex-shrink-0">
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
