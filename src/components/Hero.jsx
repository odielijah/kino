import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { featuredMovies } from "../data/featuredMovies";
import { Favourites } from "../assets/icons/Favourites";
import { Play } from "../assets/icons/Play";
import { Bookmark } from "../assets/icons/Bookmark";

const Hero = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      loop={true}
      allowTouchMove={false}
      autoplay={{ delay: 12000, disableOnInteraction: true }}
      modules={[Autoplay, Navigation]}
      className="h-[60vh] md:h-[80vh] w-full mb-5"
    >
      {featuredMovies.map((movie, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          {/* Background Image */}
          <img
            src={movie.img}
            alt={movie.title}
            className="w-full h-full object-cover object-[center_0%]"
          />

          {/* darker left and bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />

          {/* Content Overlay */}
          <div className="absolute inset-0 left-4 md:left-8 flex flex-col justify-center z-10 md:p-4 md:pl-0">
            <h1 className="md:text-[30px] text-[25px] font-bold text-white mb-6 leading-[1.1] max-w-2xl">
              {movie.title}
            </h1>
            <p className="text-white/50 text-base md:text-[16px] text-[14px] mb-10 max-w-lg">
              {movie.desc}
            </p>
            <div className="flex gap-3 items-center">
              <button className="flex items-center gap-2 bg-white text-black font-bold px-5 py-3 rounded-full text-sm hover:bg-white/90 transition-colors shadow-xl">
                <Play className="w-5 h-5" /> Watch Trailer
              </button>
              <button className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Favourites className="w-5 h-5 text-white" />
              </button>
              <button className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
