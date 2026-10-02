import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Hamburger } from "../assets/icons/Hamburger";
import { Logo } from "../assets/icons/Logo";
import { Search } from "../assets/icons/Search";
import ProfileIcon from "./ProfileIcon";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isExplore = pathname === "/explore";

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 md:top-3 left-0 w-full flex items-center h-16 md:h-20 px-4 md:px-7 z-[100]">
      {/* Left Section: Menu & Logo */}
      <div className="flex items-center gap-4 md:gap-5">
        <button className="w-6 h-6 text-white transition-colors">
          <Hamburger />
        </button>

        <div
          className="group flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Logo className="w-6 h-6 text-white transition-colors" />
          <p className={`hidden sm:block text-white text-base font-semibold tracking-[0.2em] uppercase transition-colors`}>
            Kino
          </p>
        </div>
      </div>

      {/* Middle Section: Search Bar */}
      {!isExplore && (
        <div
          className={`
        absolute inset-x-0 top-full mt-2 px-4 transition-all duration-300 md:static md:block md:mt-0 md:px-0 md:ml-8 md:w-full md:max-w-md
        ${isSearchOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"}
      `}
        >
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search Movies..."
              className="w-full bg-white/10 md:bg-white/5 border border-white/10 rounded-full py-2 px-11 text-sm text-gray-200 focus:outline-none focus:border-yellow-400/50 focus:bg-white/15 transition-all"
            />
          </div>
        </div>
      )}

      {/* Right Section: Actions */}
      <div className="ml-auto flex items-center gap-3 md:gap-6">
        {/* Mobile Search Toggle */}
        {!isExplore && (
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden text-white p-2"
          >
            <Search className="w-6 h-6" />
          </button>
        )}

        <div className="hidden md:block">
          <div
            className="relative group cursor-pointer flex items-center justify-center"
            onClick={() => {
              navigate("/profile");
            }}
          >
            {" "}
            <ProfileIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
