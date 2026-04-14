import { StatusIndicator } from '../shared';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { to: '/cash-intelligence', label: 'Cash Intelligence' },
  { to: '/revenue-opportunity', label: 'Revenue Opportunity' },
  { to: '/operational-intelligence', label: 'Operational Intelligence' },
];

export function Header({
  title = 'Cash Intelligence & Liquidity Forecast',
  subtitle = 'AI-powered financial command interface for predicting cash behavior and managing liquidity',
  systemStatus = 'active',
  lastUpdated = '2 minutes ago',
  dataRefresh = 'Real-Time',
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-header py-4 md:py-5 relative">
      <div className="w-[95%] md:w-[90%] mx-auto">
        <div className="flex items-start justify-between gap-3 md:gap-4">
          <div className="flex-1 min-w-0">
            <Link to="/">
              <h1 className="font-poppins font-semibold text-xl md:text-2xl lg:text-3xl text-white leading-tight hover:text-white/90 transition-colors">
                {title}
              </h1>
            </Link>
            <p className="hidden md:block font-poppins text-sm md:text-base text-white mt-1 opacity-90">
              {subtitle}
            </p>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded border border-white/30 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <nav className="hidden md:block md:flex-shrink-0">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `font-poppins text-sm md:text-base transition-colors ${
                        isActive
                          ? 'text-[#FF7A58] underline underline-offset-4'
                          : 'text-white hover:text-[#FFD7CC]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <nav className="bg-white/10 border border-white/20 rounded-lg p-2">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded font-poppins text-sm transition-colors ${
                        isActive
                          ? 'text-[#FF7A58] bg-white/10'
                          : 'text-white hover:bg-white/10 hover:text-[#FFD7CC]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-2 text-white">
          <div className="flex items-center gap-2">
            <StatusIndicator status={systemStatus} />
            <span className="font-prompt text-sm md:text-base">AI System Active</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-xs md:text-sm">
            <span className="font-prompt">
              Last Updated: {lastUpdated}
            </span>
            <span className="font-prompt">
              Data Refresh: {dataRefresh}
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border opacity-50" />
    </header>
  );
}
