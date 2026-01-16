import React from "react";

const Logo = ({ size = "medium", className = "" }) => {
  const sizes = {
    small: "w-8 h-8 text-lg",
    medium: "w-12 h-12 text-xl",
    large: "w-16 h-16 text-2xl",
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div
        className={`${sizes[size]} bg-gradient-to from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold shadow-lg`}
      >
        US
      </div>
      <div className="ml-3">
        <div className="text-xl font-bold text-dark">UniSelector</div>
        <div className="text-xs text-gray">KPK Universities</div>
      </div>
    </div>
  );
};

export default Logo;
