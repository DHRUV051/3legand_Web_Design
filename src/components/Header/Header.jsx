"use client";
import Navbar from "./Navbar";
import Poster from "./Poster";

const Header = () => {
  return (
    <header className="bg-[rgb(255,255,255)]">
      <Poster />
      <Navbar />
    </header>
  );
};

export default Header;
