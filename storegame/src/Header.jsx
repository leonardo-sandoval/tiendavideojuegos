import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu2Line, RiCloseLine, RiShoppingCartLine, RiHeart2Line } from 'react-icons/ri';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="h-[7vh] lg:h-[10vh] p-4 text-gray-400 py-4 px-10 flex items-center justify-between z-40 sticky top-0 bg-[#181A20]">
      {/* Mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden text-2xl"
      >
        <RiMenu2Line />
      </button>
      <div
        className={`fixed bg-gray-800 left-0 w-full h-full z-50 transition-all ${
          showMenu ? "top-0" : "-top-full"
        }`}
      >
        <button onClick={() => setShowMenu(!showMenu)} className="text-3xl p-4">
          <RiCloseLine />
        </button>
        <nav>
          <ul className="mt-20 space-y-4"> {/* Espacio vertical entre los enlaces */}
            <li>
              <Link to="/" className="text-4xl block text-center p-4">
                Home
              </Link>
            </li>
            <li>
              <Link to="/stream" className="text-4xl block text-center p-4">
                Streams
              </Link>
            </li>
            <li>
              <Link
                to="/store"
                className="text-4xl text-[#E58D27] block p-4 text-center"
              >
                Game store
              </Link>
            </li>
            <li>
              <Link to="/new" className="text-4xl block text-center p-4">
                News
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Menu */}
      <ul className="hidden lg:flex items-center gap-6">
        <li>
          <Link to="/" className="hover:text-[#E58D27] transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/stream" className="hover:text-[#E58D27] transition-colors">
            Streams
          </Link>
        </li>
        <li>
          <Link to="/store" className="text-[#E58D27] transition-colors">
            Game store
          </Link>
        </li>
        <li>
          <Link to="/new" className="hover:text-[#E58D27] transition-colors">
            News
          </Link>
        </li>
      </ul>
      {/* User menu */}
      <ul className="flex items-center gap-6 text-xl">
        <li>
          <button className="hover:text-[#E58D27] transition-colors">
            <RiShoppingCartLine />
          </button>
        </li>
        <li>
          <button className="hover:text-[#E58D27] transition-colors">
            <RiHeart2Line />
          </button>
        </li>
        <li>
          <button>
            <img
              src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
              className="w-8 h-8 object-cover rounded-full ring-2 ring-[#E58D27]"
            />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;

