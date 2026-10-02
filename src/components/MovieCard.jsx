import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="group">
      <div
        onClick={() => navigate("/movie-detail")}
        className="aspect-[2/3] bg-[#1a1a1a] rounded-xl mb-3 overflow-hidden 
        transition-all duration-300 cursor-pointer 
        border border-white/5 shadow-lg hover:shadow-2xl"
      >
        <img
          src={movie.img}
          alt={movie.title}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
        />
      </div>

      <p className="text-sm text-white/70 font-medium truncate group-hover:text-white transition-colors">
        {movie.title}
      </p>
      <p className="text-xs text-white/30 -mt-1">{movie.year}</p>
    </div>
  );
};

export default MovieCard;