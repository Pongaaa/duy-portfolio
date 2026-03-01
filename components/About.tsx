'use client';

interface AboutProps {
  language: 'vi' | 'en';
}

const content = {
  en: {
    title: "About Me",
    background: "Currently a 3rd-year Computer Science student at UIT (University of Information Technology) with a focus on Data Science and Analytics. I'm passionate about uncovering patterns in complex datasets and solving real-world business problems.",
    passion: "I love turning messy data into beautiful, actionable insights. Whether it's building ML models, designing dashboards, or optimizing data pipelines, I'm driven by the challenge of making data work for you.",
    traits: "I'm meticulous, continuously learning new technologies, and believe in writing clean, maintainable code.",
    school: "Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM (UIT)",
    gpa: "Top Student (GPA: 8.35/10)",
    coursework: "Data Structures & Algorithms • Machine Learning • Probability & Statistics • Database Systems"
  },
  vi: {
    title: "Về Tôi",
    background: "Sinh viên năm 3 chuyên ngành Khoa học Máy tính tại UIT (Đại học Công nghệ Thông tin) với định hướng Khoa học Dữ liệu và Phân tích. Tôi đam mê tìm ra quy luật từ những bộ dữ liệu phức tạp và giải quyết các vấn đề kinh doanh thực tế.",
    passion: "Tôi thích biến dữ liệu hỗn loạn thành những insight hữu ích, hành động được. Dù xây dựng mô hình ML, thiết kế dashboard hay tối ưu hóa data pipeline, tôi luôn bị thôi thúc bởi thử thách làm cho dữ liệu hoạt động hiệu quả.",
    traits: "Tôi cầu toàn, liên tục học hỏi công nghệ mới, và tin vào việc viết code sạch, dễ bảo trì.",
    school: "Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM (UIT)",
    gpa: "Sinh Viên Giỏi (GPA: 8.35/10)",
    coursework: "Cấu trúc Dữ liệu & Giải thuật • Học Máy • Xác suất & Thống kê • Hệ cơ sở Dữ liệu"
  }
};

export default function About({ language }: AboutProps) {
  const texts = content[language];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 animate-slide-up flex items-center gap-6">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              {texts.title}
            </h2>
          </div>
          <img 
            src="/images/logo-uit-web.png" 
            alt="UIT Logo" 
            className="h-16 w-16 object-contain"
          />
        </div>

        <div className="mb-8 animate-slide-up">
          <p className="text-center text-blue-600 dark:text-blue-400 font-semibold text-lg">
            {texts.school}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-slate-700/20 hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Background</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {texts.background}
            </p>
          </div>

          <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-slate-700/20 hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300">
            <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-3">My Passion</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {texts.passion}
            </p>
          </div>

          <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-slate-700/20 hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Traits</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {texts.traits}
            </p>
          </div>

          <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-slate-700/20 hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300">
            <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-3">{texts.gpa}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {texts.coursework}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
