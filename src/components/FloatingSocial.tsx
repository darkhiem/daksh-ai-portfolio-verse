import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const FloatingSocial = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-background border border-border rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${link.color}`}
              aria-label={link.name}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
        <div className="w-px h-16 bg-border mx-auto"></div>
      </div>
    </div>
  );
};

export default FloatingSocial;