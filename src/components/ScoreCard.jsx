const ScoreCard = ({ movieDetails }) => {
  return (
    <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
      <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">
        Score
      </h2>
      <div className="flex items-end gap-3">
        <span className="text-5xl font-black text-white">
          {movieDetails.score}
        </span>
        <span className="text-white/30 pb-1.5 text-sm">/ 10</span>
      </div>
      <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-400 rounded-full"
          style={{ width: `${movieDetails.score * 10}%` }}
        />
      </div>
      <p className="text-xs text-white/30 mt-2">Based on 1.2k ratings</p>
    </div>
  );
};

export default ScoreCard;
