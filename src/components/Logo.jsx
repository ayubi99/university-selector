import React from "react";

const Logo = ({ size = "medium", className = "" }) => {
  const sizes = {
    small: "w-8 h-8 text-lg",
    medium: "w-12 h-12 text-xl",
    large: "w-16 h-16 text-2xl",
  };

  return (
    <div className={`flex items-center  ${className}`}>
      <div
        className={`${sizes[size]} bg-blue-700 rounded-xl flex items-center justify-center   text-center text-white font-bold shadow-lg`}
      >
        US
      </div>
      <div className="ml-3">
        <div className="text-xl  flex font-bold text-white">UNISELECTION</div>
      </div>
    </div>
  );
};

export default Logo;
