import React, { useState } from 'react';

// Standalone Toggle Menu Component
const ToggleMenu = ({ 
  menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' }
  ],
  onMenuItemClick = null,
  buttonText = "Get Started",
  onButtonClick = null,
  menuTitle = "Navigation",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item, event) => {
    if (onMenuItemClick) {
      onMenuItemClick(item, event);
    }
    // Close menu after item click
    setIsOpen(false);
  };

  const handleButtonClick = (event) => {
    if (onButtonClick) {
      onButtonClick(event);
    }
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="relative z-60 p-2 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          {/* Hamburger Lines */}
          <span 
            className={`block w-5 h-[1px] bg-gray-700 transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
            }`}
          />
          <span 
            className={`block w-5 h-[1px] bg-gray-700 transition-all duration-300 ease-in-out mt-1 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span 
            className={`block w-5 h-[1px] bg-gray-700 transition-all duration-300 ease-in-out mt-1 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
            }`}
          />
        </div>
      </button>

      {/* Morphing Menu Container */}
      <div 
        className={`absolute top-14 right-0 bg-white border border-gray-200 rounded-md shadow-xl transition-all duration-500 ease-out overflow-hidden z-50 ${
          isOpen 
            ? 'w-[20rem] h-[30rem] opacity-100 scale-100' 
            : 'w-12 h-12 opacity-0 scale-95 pointer-events-none'
        }`}
        style={{
          // height: isOpen ? '28rem' : '3rem',
          transformOrigin: 'top right',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* Menu Content */}
        <div 
          className={`p-6 h-full transition-all duration-300 delay-150 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{menuTitle}</h3>
            <div className="w-12 h-0.5 bg-blue-500 rounded"></div>
          </div>
          
          <nav className="space-y-3">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`block py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 transform ${
                  isOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${150 + index * 50}ms` : '0ms'
                }}
                onClick={(e) => handleMenuItemClick(item, e)}
              >
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          {buttonText && (
            <div className="absolute bottom-6 left-6 right-6">
              <div className="border-t border-gray-100 pt-4">
                <button 
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  onClick={handleButtonClick}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ToggleMenu;
// export { ToggleMenu };