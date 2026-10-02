const ProfileIcon = ({
  username = "Jane",
  size = "w-10 h-10",
  textSize = "text-lg",
}) => {
  const initial = username.charAt(0).toUpperCase();

  return (
    <div
      className={`
          ${size} flex items-center justify-center 
          bg-gradient-to-br to-[#4b3c99] rounded-[5px]
          transition-all duration-300 ease-out border-1 border-[#4b3c99]
          shadow-lg group-hover:scale-110
      `}
    >
      <span className={`${textSize} font-extrabold text-white tracking-tight`}>
        {initial}
      </span>
    </div>
  );
};

export default ProfileIcon;
