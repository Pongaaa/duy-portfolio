'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import FloatingClouds from '@/components/FloatingClouds';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<'vi' | 'en'>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedDark = localStorage.getItem('darkMode');
    const savedLang = localStorage.getItem('language');
    if (savedDark !== null) setIsDark(JSON.parse(savedDark));
    if (savedLang) setLanguage(savedLang as 'vi' | 'en');
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('darkMode', JSON.stringify(isDark));
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDark, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  if (!mounted) return null;

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLanguage = () => setLanguage(language === 'en' ? 'vi' : 'en');

  const translations = {
    en: {
      nav: { projects: 'Projects', about: 'About', skills: 'Skills', contact: 'Contact' }
    },
    vi: {
      nav: { projects: 'Dự Án', about: 'Về Tôi', skills: 'Kỹ Năng', contact: 'Liên Hệ' }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <FloatingClouds />
      <div className="relative z-10">
        <Header language={language} translations={translations} />
        
        <div className="fixed top-20 right-4 z-40 flex gap-2">
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full backdrop-blur-md border-2 transition-all duration-300 transform hover:scale-110 ${
              isDark 
                ? 'bg-gradient-to-br from-blue-400/40 to-blue-500/40 border-blue-400/60 text-blue-900 hover:from-blue-400/50 hover:to-blue-500/50' 
                : 'bg-gradient-to-br from-sky-300/40 to-sky-400/40 border-sky-300/60 text-blue-600 hover:from-sky-300/50 hover:to-sky-400/50'
            }`}
            title={isDark ? 'Light Mode' : 'Dark Mode'}
          >
            {isDark ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-blue-700" />}
          </button>
          <button
            onClick={toggleLanguage}
            className="p-3 rounded-full bg-white/30 dark:bg-slate-700/40 backdrop-blur-md border-2 border-white/40 dark:border-slate-600/40 hover:bg-white/40 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110"
            aria-label="Toggle language"
            title={language === 'en' ? 'Tiếng Việt' : 'English'}
          >
            <Globe size={20} className="text-slate-700 dark:text-slate-200" />
          </button>
        </div>

        <Hero language={language} />
        <About language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Contact language={language} />
      </div>
    </div>
  );
}
