import React from 'react';

const Header = () => {
  return (
    <header 
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 fixed w-full
        h-12 flex items-center pl-4 z-10">
      <h1 className="text-xl font-semibold text-white tracking-wide shadow-2xl">Super Postwoman</h1>
    </header>
  )
};

export default Header;