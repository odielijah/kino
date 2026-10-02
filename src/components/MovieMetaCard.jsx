import { movieMeta } from "../data/movieMeta";

const MovieMetaCard = () => {
  return (
    <div className="bg-white/3 border border-white/8 rounded-2xl p-6 space-y-5">
      <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30">
        Details
      </h2>
      {movieMeta.map(({ label, value }) => (
        <div key={label} className="flex flex-col gap-0.5">
          <span className="text-xs text-white/30">{label}</span>
          <span className="text-sm text-white/80 font-medium">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default MovieMetaCard;
