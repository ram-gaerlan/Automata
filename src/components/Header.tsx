import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Bot size={28} className="text-white" />
            <h1 className="text-xl md:text-2xl font-bold">Automata Project</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className={`hover:text-green-200 transition duration-200 ${
                    location.pathname === '/' ? 'font-semibold border-b-2 border-white pb-1' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/members" 
                  className={`hover:text-green-200 transition duration-200 ${
                    location.pathname === '/members' ? 'font-semibold border-b-2 border-white pb-1' : ''
                  }`}
                >
                  Members
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;