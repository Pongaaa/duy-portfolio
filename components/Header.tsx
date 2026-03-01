'use client';

interface HeaderProps {
  language: 'vi' | 'en';
  translations: any;
}

const navLinks = {
  en: [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ],
  vi: [
    { href: '#about', label: 'Về Tôi' },
    { href: '#projects', label: 'Dự Án' },
    { href: '#skills', label: 'Kỹ Năng' },
    { href: '#contact', label: 'Liên Hệ' }
  ]
};

export default function Header({ language }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-white/10 dark:bg-slate-900/10 border-b border-white/20 dark:border-slate-700/20">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
          {language === 'en' ? 'Cao Duy' : 'Cao Duy'}
        </a>
        
        <nav className="hidden md:flex gap-8">
          {navLinks[language].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-slate-700 dark:text-slate-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
