'use client';

import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

interface ContactProps {
  language: 'vi' | 'en';
}

const content = {
  en: {
    title: "Get In Touch",
    subtitle: "I'm always open to new opportunities, collaborations, and interesting conversations.",
    email: "caoduynguyen12@gmail.com",
    emailLabel: "Send me an email",
    viewOnLinkedIn: "View on LinkedIn",
    viewOnGitHub: "View on GitHub",
    form: {
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      orConnect: "Or connect with me on social media:"
    }
  },
  vi: {
    title: "Hãy Liên Hệ",
    subtitle: "Tôi luôn mở cửa cho các cơ hội mới, hợp tác, và những cuộc trò chuyện thú vị.",
    email: "caoduynguyen12@gmail.com",
    emailLabel: "Gửi email cho tôi",
    viewOnLinkedIn: "Xem trên LinkedIn",
    viewOnGitHub: "Xem trên GitHub",
    form: {
      name: "Tên của bạn",
      email: "Email của bạn",
      message: "Tin nhắn của bạn",
      send: "Gửi Tin Nhắn",
      orConnect: "Hoặc kết nối với tôi trên mạng xã hội:"
    }
  }
};

export default function Contact({ language }: ContactProps) {
  const texts = content[language];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-16 text-center animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              {texts.title}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300 mt-6 max-w-3xl mx-auto">
            {texts.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Direct Contact */}
          <div className="animate-slide-up space-y-6">
            <div className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-slate-700/20 rounded-2xl p-8 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{texts.form.orConnect}</p>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{texts.emailLabel}</h3>
                </div>
              </div>
              <a
                href={`mailto:${texts.email}`}
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-center"
              >
                {texts.email}
              </a>
            </div>

            <div className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-slate-700/20 rounded-2xl p-8">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">{texts.form.orConnect}</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/duy-nguyen-2b4883336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-600 dark:text-blue-400 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Linkedin size={20} />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Pongaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-500/20 hover:bg-slate-500/30 border border-slate-500/30 text-slate-600 dark:text-slate-400 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={20} />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <form className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-slate-700/20 rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  {texts.form.name}
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-white/20 dark:border-slate-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  {texts.form.email}
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-white/20 dark:border-slate-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  {texts.form.message}
                </label>
                <textarea
                  rows={5}
                  placeholder={language === 'en' ? 'Your message here...' : 'Tin nhắn của bạn ở đây...'}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-white/20 dark:border-slate-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                {texts.form.send}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-white/20 dark:border-slate-700/20 text-center animate-slide-up">
          <p className="text-slate-600 dark:text-slate-400">
            {language === 'en' 
              ? '© 2025 Nguyễn Cao Duy. All rights reserved.' 
              : '© 2025 Nguyễn Cao Duy. Tất cả quyền được bảo lưu.'}
          </p>
        </div>
      </div>
    </section>
  );
}
