import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './styles/themes.css';

// icons
import {
  HomeIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

function Layout() {
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const isTheme2 = theme === 'theme2';

  return (
    <main
      className="min-h-screen transition-all duration-500 ease-in-out"
      style={{
        display: isTheme2 ? 'flex' : 'block',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'var(--font)',
        paddingTop: '5rem', // offset for fixed header
      }}
    >
      {/* Sidebar for Theme 2 */}
      {isTheme2 && (
        <aside
          className={`bg-gray-800 text-white h-[calc(100vh-80px)] sticky top-20 transition-all duration-300 ${
            sidebarOpen ? 'w-60' : 'w-20'
          } hidden md:flex flex-col items-start p-4 gap-4`}
        >
          <button
            onClick={toggleSidebar}
            className="text-sm bg-gray-700 p-2 rounded hover:bg-gray-600"
          >
            {sidebarOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
          <nav className="flex flex-col gap-4 w-full mt-4">
            <a href="#" className="flex items-center gap-2 hover:text-yellow-400">
              <HomeIcon className="w-5 h-5" />
              {sidebarOpen && 'Home'}
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-yellow-400">
              <UserCircleIcon className="w-5 h-5" />
              {sidebarOpen && 'Profile'}
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-yellow-400">
              <Cog6ToothIcon className="w-5 h-5" />
              {sidebarOpen && 'Settings'}
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-yellow-400">
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              {sidebarOpen && 'Logout'}
            </a>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
