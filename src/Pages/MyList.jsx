import { useState } from "react";
import { mockMovies } from "../data/mockMovies";
import MovieCard from "../components/MovieCard";
import { Favourites } from "../assets/icons/Favourites";
import { Bookmark } from "../assets/icons/Bookmark";

const tabs = [
  { id: "favourites", label: "Favourites", Icon: Favourites },
  { id: "watchlist", label: "Watchlist", Icon: Bookmark },
];

const MyList = () => {
  const [activeTab, setActiveTab] = useState("favourites");

  const content = {
    favourites: mockMovies.slice(4, 7),
    watchlist: [],
  };

  const activeContent = content[activeTab];

  return (
    <div className="min-h-screen bg-[#080808] text-white px-5 md:px-10 pt-24 md:pt-32 pb-24">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">My List</h2>

      {/* Simplified Tabs */}
      <div className="flex gap-3 mb-10 overflow-x-auto pb-2 no-scrollbar">
        {tabs.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-medium border transition-all duration-300 ${
              activeTab === id
                ? "bg-white text-black border-white shadow-lg"
                : "text-white/30 border-white/10 hover:text-white"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {activeContent.length > 0 ? (
          activeContent.map((movie) => (
            <div key={movie.id} className="transition-transform hover:scale-105">
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border border-dashed border-white/5 rounded-3xl">
            <p className="text-white/20 text-sm italic">
              Your {activeTab} is currently empty
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;