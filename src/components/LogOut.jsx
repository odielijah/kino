import { useState } from "react";
import { Logout } from "../assets/icons/LogOut";

const LogOut = ({ navigate }) => {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  return (
    <div className="w-full">
      {!showLogoutConfirm ? (
        <button
          onClick={() => setShowLogoutConfirm(true)}
          className="w-full p-4 rounded-2xl bg-red-500/5 border border-red-500/10 text-red-500/70 hover:text-red-500 hover:bg-red-500/10 transition-all text-sm font-semibold flex items-center gap-2 group"
        >
          <Logout className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Log Out</span>
        </button>
      ) : (
        <div className="space-y-3 animate-in fade-in zoom-in-95 duration-200">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 ml-4 mb-3">
            Sure you want to log out?
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/")}
              className="flex-1 p-4 rounded-2xl font-bold border border-red-500/10 bg-red-500/5 text-red-500/70 hover:text-red-500 hover:bg-red-500/10 transition-all text-sm"
            >
              Log out
            </button>
            <button
              onClick={() => setShowLogoutConfirm(false)}
              className="flex-1 p-4 rounded-2xl bg-white/5 border font-bold border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm"
            >
              Not yet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogOut;
