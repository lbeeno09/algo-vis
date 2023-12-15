import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";

const TopBar: React.FC = () => {
  const [isSticky, setSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll);
    });
  }, []);

  return (
    <div className={`bg-gray-800 text-white py-4 transition-all ${isSticky ? 'fixed top-0 w-full shadow-md' : ''}`}>
      <SideBar />
      <div className="container mx-auto text-xl font-bold">
        Algorithm Visualizer
      </div>
    </div>
  );
};

export default TopBar;
