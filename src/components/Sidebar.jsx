import { Home } from "../assets/icons/Home";
import { Search } from "../assets/icons/Search";
import { Logout } from "../assets/icons/LogOut";
import { Lists } from "../assets/icons/Lists";
import { NavLink } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
const Sidebar = () => {
  const navItems = [
    { name: "Home", Icon: Home, path: "/" },
    { name: "Explore", Icon: Search, path: "/explore" },
    { name: "My List", Icon: Lists, path: "/my-list" },
  ];

  return (
    <aside
      className="
      /* Mobile Styles: Bottom Bar */
      fixed bottom-0 left-0 w-full h-16 bg-black/80 backdrop-blur-md border-t border-white/10 px-2 z-50 flex flex-row items-center
      
      /* Desktop Styles: Vertical Sidebar */
      md:top-0 md:left-0 md:h-screen md:w-20 md:flex-col md:bg-transparent md:border-t-0 md:py-8
    "
    >
      <nav className="flex flex-row md:flex-col justify-around md:justify-center items-center gap-0 md:gap-12 flex-1 w-full">
        {navItems.map(({ name, Icon, path }) => (
          <NavLink
            key={path}
            to={path}
            end
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition-all duration-300 hover:text-white relative
              ${isActive ? "text-white" : "text-white/60"}`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className="w-4.5 h-4.5" />

                {/* Mobile Label */}
                <span className="text-[10px] md:hidden font-medium">
                  {name}
                </span>

                {/* Desktop Active Dot */}
                {isActive && (
                  <span className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-cinema-gold rounded-full shadow-[0_0_8px_#d97706]" />
                )}
              </>
            )}
          </NavLink>
        ))}

        {/* Mobile-only Profile Link */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 md:hidden ${isActive ? "text-white" : "text-white-70"}`
          }
        >
          <ProfileIcon size="w-4.5 h-4.5" textSize="text-[10px]" />
          <span className="text-[10px] font-medium">Profile</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
