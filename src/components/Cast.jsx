const Cast = ({ movieDetails }) => {
  return (
    <section>
      <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">
        Top Billed Cast
      </h2>
      <div className="flex flex-col gap-4">
        {movieDetails.cast.map((actor) => (
          <div
            key={actor.name}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
              <img
                src={actor.img}
                alt={actor.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white/90">
                {actor.name}
              </p>
              <p className="text-xs text-white/40">{actor.character}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cast;
