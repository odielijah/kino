const MetaCard = ({ movieDetails }) => {
  const meta = [
    { label: "Status", value: movieDetails.status },
    { label: "Release Date", value: new Date(movieDetails.releaseDate).toLocaleDateString() },
    { label: "Runtime", value: movieDetails.runtime },
    { label: "Director", value: movieDetails.director || "N/A" },
    { label: "Based on novel by", value: movieDetails.novel || "N/A" },
    { label: "Original Language", value: movieDetails.originalLanguage },
  ];
  return (
    <div className="bg-white/3 border border-white/8 rounded-2xl p-6 space-y-5">
      <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30">
        Details
      </h2>
      {meta.map(({ label, value }) => (
        <div key={label} className="flex flex-col gap-0.5">
          <span className="text-xs text-white/30">{label}</span>
          <span className="text-sm text-white/80 font-medium">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default MetaCard;
