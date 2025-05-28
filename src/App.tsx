import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './components/Home';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import About from './components/About';
import ServerStatus from './components/ServerStatus';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="bg-gray-900 py-4 px-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-neon">Bruto</span>
            <span className="text-white">VPN</span>
          </h1>
          <div className="space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-neon font-semibold' : 'text-white hover:text-neon transition'
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? 'text-neon font-semibold' : 'text-white hover:text-neon transition'
              }
            >
              ЧаВо
            </NavLink>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive ? 'text-neon font-semibold' : 'text-white hover:text-neon transition'
              }
            >
              Отзывы
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-neon font-semibold' : 'text-white hover:text-neon transition'
              }
            >
              О нас
            </NavLink>
            <NavLink
              to="/server-status"
              className={({ isActive }) =>
                isActive ? 'text-neon font-semibold' : 'text-white hover:text-neon transition'
              }
            >
              Статус серверов
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/server-status" element={<ServerStatus />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center">
        <p className="text-sm opacity-80">© 2025 BrutoVPN. Все права защищены.</p>
        <p className="text-sm mt-2">
          <a href="https://t.me/brutovpn" className="text-neon hover:underline">
            BrutoVPN в Telegram
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;