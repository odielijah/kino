import { mockMovies } from "../data/mockMovies";
import MovieCard from "./MovieCard";

const Recommendations = () => {
  return (
    <section>
      <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">
        You Might Also Like
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide">
        {mockMovies.map((movie) => (
          <div key={movie.id} className="max-w-[200px] flex-shrink-0">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
