const Overview = ({ movieDetails }) => {
  return (
    <section>
      <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">
        Overview
      </h2>
      <p className="text-white/75 leading-relaxed text-base">
        {movieDetails.overview || "No overview available."}
      </p>
    </section>
  );
};

export default Overview;
