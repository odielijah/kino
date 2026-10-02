// Footer.jsx
import { useNavigate } from "react-router-dom";
import { Logo } from "../assets/icons/Logo";
import { Instagram } from "../assets/icons/Instagram";
import { Twitter } from "../assets/icons/Twitter";
import { Linkedin } from "../assets/icons/Linkedin";
import { Github } from "../assets/icons/Github";

const links = [
  { label: "Home", path: "/" },
  { label: "Explore", path: "/explore" },
  { label: "My List", path: "/my-list" },
  { label: "Profile", path: "/profile" },
];

const socials = [
  { label: "Instagram", Icon: Instagram, url: "https://instagram.com" },
  { label: "Twitter", Icon: Twitter, url: "https://twitter.com" },
  { label: "Linkedin", Icon: Linkedin, url: "https://linkedin.com" },
  { label: "Github", Icon: Github, url: "https://github.com" },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="md:px-[60px] px-[16px] pb-22 pt-14 border-t border-white/5 mt-5 md:mt-20">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-3">
          <div
            className="flex items-center gap-2 cursor-pointer w-fit"
            onClick={() => navigate("/")}
          >
            <Logo className="w-5 h-5 text-white" />
            <p className="text-white text-base font-semibold tracking-[0.2em] uppercase">
              Kino
            </p>
          </div>
          <p className="text-white/30 text-sm max-w-xs leading-relaxed">
            Your personal cinema. Discover, save, and watch movies you love.
          </p>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
              </a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-1">
            Navigate
          </h3>
          {links.map(({ label, path }) => (
            <button
              key={label}
              onClick={() => navigate(path)}
              className="text-sm text-white/50 hover:text-white transition-colors text-left"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="md:mt-16 mt-5 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/20">
          © 2026 Kino. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
