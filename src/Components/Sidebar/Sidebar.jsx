import React from 'react'
import { navigationLinks } from '../../data/navigationLinks';

const Sidebar = () => (
    <div className="w-64 hidden md:block bg-backGroudColor h-full border-r border-gray-100">

      <div className="p-6">

        <div className="mb-8">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">GENERAL</h3>
          <nav className="space-y-1">
            {navigationLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    link.active 
                      ? 'text-violet-800 text-base' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );

export default Sidebar