import { useState } from "react";
import { mockMovies, sections } from "../data/mockMovies";
import { genres } from "../data/genres";
import MovieCard from "../components/MovieCard";
import { Search } from "../assets/icons/Search";
import { ArrowDown } from "../assets/icons/ArrowDown";

const sortOptions = ["Popular", "Latest", "Top Rated"];

const Explore = () => {
  const [activeGenre, setActiveGenre] = useState("All Genres");
  const [activeSort, setActiveSort] = useState("Popular");

  const [searchQuery, setSearchQuery] = useState("");

  const filtered = mockMovies
    .filter((m) => activeGenre === "All Genres" || m.genre === activeGenre)
    .filter((m) => m.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#080808] text-white px-5 md:px-[40px] pt-24 md:pt-36 space-y-12 md:space-y-16 pb-32">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-[40px] font-bold mb-2">Explore</h1>
        <p className="text-white/60 leading-relaxed text-sm md:text-base line-clamp-2 md:line-clamp-none">
          Browse movies by genre or mood. Discover your next favorite cinematic
          experience.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Search bar */}
        <div className="relative flex-1">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Movies..."
            className="w-full max-w-[650px] bg-white/[0.03] border border-white/10 rounded-full py-3 pl-11 pr-5 
            text-sm text-white placeholder-white/60 focus:outline-none focus:border-white/30 transition-colors"
          />
        </div>

        <div className="flex flex-row items-center gap-3 w-full md:w-auto">
          {/* Genre Dropdown */}
          <div className="relative flex-1 md:w-48 group">
            <select
              value={activeGenre}
              onChange={(e) => setActiveGenre(e.target.value)}
              className="w-full appearance-none bg-white/[0.03] border border-white/10 text-white/60 text-xs md:text-sm 
              rounded-full pl-5 pr-10 py-3 cursor-pointer focus:outline-none focus:border-white/30 focus:bg-white/[0.07] 
              transition-all"
            >
              {/* 3. Manually add "All Genres" or ensure your genres array includes it */}
              <option value="All Genres" className="bg-zinc-900 text-white">All Genres</option>
              {genres.filter(g => g !== "All").map((genre) => (
                <option
                  key={genre}
                  value={genre}
                  className="bg-zinc-900 text-white"
                >
                  {genre}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 group-hover:text-white/60 transition-colors">
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="relative flex-1 md:flex-none md:min-w-[160px] group">
            <select
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value)}
              className="w-full appearance-none bg-white/[0.03] border border-white/10 text-white/60 text-xs md:text-sm 
              rounded-full pl-5 pr-10 py-3 cursor-pointer focus:outline-none focus:border-white/30 focus:bg-white/[0.07] 
              transition-all"
            >
              {sortOptions.map((opt) => (
                <option
                  key={opt}
                  value={opt}
                  className="bg-zinc-900 text-white"
                >
                  {opt}
                </option>
              ))}
            </select>
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 group-hover:text-white/60 
            transition-colors"
            >
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Movie Grid Section */}
      <div className="space-y-12">
        {activeGenre !== "All Genres" ? (
          <section>
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">
              {activeGenre} Films
            </h2>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {filtered.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="text-center">
                <p className="text-white/20 text-sm">
                  No movies found in this genre yet.
                </p>
              </div>
            )}
          </section>
        ) : (
          /* Render Sections when "All" is selected */
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {mockMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
