'use client';

interface HeroProps {
  language: 'vi' | 'en';
}

const content = {
  en: {
    greeting: "Hello! I'm",
    name: "Nguyễn Cao Duy",
    title: "Data Scientist & Analytics Engineer",
    tagline: "Transforming raw data into actionable insights through AI and visualization",
    cta1: "View Projects",
    cta2: "View CV"
  },
  vi: {
    greeting: "Xin chào! Tôi là",
    name: "Nguyễn Cao Duy",
    title: "Khoa học Dữ liệu & Kỹ sư Phân tích",
    tagline: "Biến dữ liệu thô thành thông tin giá trị thông qua AI và Trực quan hóa",
    cta1: "Xem Dự Án",
    cta2: "Xem CV"
  }
};

export default function Hero({ language }: HeroProps) {
  const texts = content[language];

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-20 pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="text-center space-y-6 animate-slide-up">
          <div className="inline-block">
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-2">
              {texts.greeting}
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-slate-900 dark:text-white">
              {texts.name.split(' ').map((word, i) => (
                <span
                  key={i}
                  className={`inline-block ${i === 2 ? 'bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent' : ''}`}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>

          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-semibold">
            {texts.title}
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {texts.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              {texts.cta1}
            </a>
            <a
              href="/CV_DataScientistIntern_DuyNguyenCao.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-full hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
            >
              {texts.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
