import { useState } from "react";
import { mockMovies } from "../data/mockMovies";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import ProfileIcon from "../components/ProfileIcon";

import { ArrowRight } from "../assets/icons/ArrowRight";
import { Sun } from "../assets/icons/Sun";
import { Moon } from "../assets/icons/Moon";
import { Settings } from "../assets/icons/Settings";
import { Lists } from "../assets/icons/Lists";
import LogOut from "../components/LogOut";

const recentActivity = mockMovies.slice(0, 4);

const Profile = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log("Theme Toggled");
  };

  const sections = [
    {
      title: "Account",
      links: [
        {
          label: "My List",
          path: "/my-list",
          icon: <Lists className="w-4 h-4" />,
        },
      ],
    },
    {
      title: "Settings",
      links: [
        {
          label: "Account Settings",
          path: "/settings",
          icon: <Settings className="w-4 h-4" />,
        },
        {
          label: "Change Theme",
          onClick: toggleTheme,
          isThemeToggle: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-24 md:pt-38 px-6 md:px-[40px] pb-32">
      {/* Profile header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-12 md:mb-16 text-center sm:text-left">
        {/* Avatar */}
        <ProfileIcon size="w-24 h-24" textSize="text-4xl" />

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold">Jane</h1>
          <p className="text-white/70 font-bold text-sm md:text-md mt-1">
            Jane Doe
          </p>
          <p className="text-white/30 text-xs md:text-sm mt-1">
            Member since 2026
          </p>
        </div>

        <button className="w-full sm:w-auto text-[12px] md:text-xs text-white/40 border border-white/10 px-7 py-2.5 rounded-full hover:bg-white/5 transition-colors font-bold">
          Edit Profile
        </button>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-12 md:mb-16">
        {[
          { label: "Watched", value: "24" },
          { label: "Favourites", value: "8" },
          { label: "Watchlist", value: "12" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-white/[0.03] border border-white/[0.08] rounded-2xl py-4 px-2 md:p-6 text-center flex flex-col justify-center items-center"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-none">
              {value}
            </p>
            <p className="text-[8px] sm:text-[10px] md:text-xs text-white/30 mt-2 tracking-[0.1em] md:tracking-widest uppercase truncate w-full">
              {label}
            </p>
          </div>
        ))}
      </div>
      {/* Recent activity */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/20 mb-6">
          Recently Watched
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 md:px-17.5 md:-mx-17.5 lg:mx-0 lg:px-0 lg:overflow-visible">
          {recentActivity.map((movie) => (
            <div
              key={movie.id}
              className="w-[140px] md:w-[200px] flex-shrink-0"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links Container */}
      <div className="max-w-lg space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 mb-3 ml-4">
              {section.title}
            </h2>
            <div className="bg-white/[0.01] rounded-2xl border border-white/10 divide-y divide-white/5 overflow-hidden">
              {section.links.map((link) => (
                <button
                  key={link.label}
                  onClick={() =>
                    link.path ? navigate(link.path) : link.onClick?.()
                  }
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/[0.03] transition-colors text-sm text-white/70 hover:text-white group"
                >
                  <div className="flex items-center gap-3">
                    {/* LEFT SIDE ICON AREA */}
                    <div className="w-5 h-5 flex items-center justify-center relative">
                      {link.isThemeToggle ? (
                        <>
                          <div
                            className={`absolute transition-all duration-500 ease-out transform ${
                              isDarkMode
                                ? "opacity-100 scale-100 rotate-0"
                                : "opacity-0 scale-50 -rotate-120"
                            }`}
                          >
                            <Moon className="w-4 h-4 text-white/40 group-hover:text-white" />
                          </div>
                          <div
                            className={`absolute transition-all duration-500 ease-out transform ${
                              !isDarkMode
                                ? "opacity-100 scale-100 rotate-0"
                                : "opacity-0 scale-50 rotate-120"
                            }`}
                          >
                            <Sun className="w-4 h-4 text-white/40 group-hover:text-white" />
                          </div>
                        </>
                      ) : (
                        <span className="text-white/40 group-hover:text-white transition-colors">
                          {link.icon}
                        </span>
                      )}
                    </div>

                    <span className="font-medium">{link.label}</span>
                  </div>

                  {/* RIGHT SIDE ICON AREA */}
                  {!link.isThemeToggle && (
                    <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 duration-300 group-hover:translate-x-1" />
                  )}
                </button>
              ))}
            </div>
          </section>
        ))}
        {/* Logout Button */}
        <LogOut navigate={navigate} />
      </div>
    </div>
  );
};

export default Profile;
