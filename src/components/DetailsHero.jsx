import { Favourites } from "../assets/icons/Favourites";
import { Play } from "../assets/icons/Play";
import { Bookmark } from "../assets/icons/Bookmark";

const DetailsHero = ({ movieDetails }) => {
  return (
    <div className="relative min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden">
      {/* Backdrop */}
      <img
        src={movieDetails.backdrop}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[center_20%] md:object-[center_0%]"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-end md:items-center z-10 px-5 sm:px-8 lg:px-10 pb-10 md:pb-16 pt-20 md:pt-24">
        <div className="flex gap-6 lg:gap-10 items-end lg:items-start w-full max-w-5xl">

          {/* Poster — desktop only */}
          <div className="hidden lg:block w-52 xl:w-64 aspect-[2/3] flex-shrink-0 rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/10">
            <img
              src={movieDetails.poster}
              alt={movieDetails.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 w-full max-w-2xl pb-1">

            {/* Genres */}
            <div className="flex gap-1.5 md:gap-2 flex-wrap">
              {movieDetails.genres.map((g) => (
                <span
                  key={g}
                  className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border border-white/20 text-white/60"
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold leading-tight md:leading-none">
              {movieDetails.title}
            </h1>

            {/* Meta row */}
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-white/50 flex-wrap">
              <span className="border border-white/20 px-2 py-0.5 rounded text-[11px] md:text-xs text-white/40">
                {movieDetails.rating}
              </span>
              <span>{new Date(movieDetails.releaseDate).getFullYear()}</span>
              <span className="text-white/20">•</span>
              <span>{movieDetails.runtime}</span>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1 text-amber-400">
                <span>★</span>
                <span className="text-white/70 font-medium">
                  {movieDetails.score}
                </span>
              </div>
            </div>

            {/* Overview — hidden on very small screens */}
            <p className="hidden sm:block text-white/75 leading-relaxed text-sm md:text-base line-clamp-3 md:line-clamp-4">
              {movieDetails.overview}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-3 mt-1 md:mt-2">
              <button className="flex items-center gap-2 bg-white text-black font-bold px-4 py-2.5 md:py-3 rounded-full text-xs md:text-sm hover:bg-white/90 transition-colors shadow-xl">
                <Play className="w-4 h-4 md:w-5 md:h-5" /> Play Trailer
              </button>
              <button className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Favourites className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Bookmark className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHero;