'use client';

interface SkillsProps {
  language: 'vi' | 'en';
}

const skillsData = {
  en: {
    title: "Skills & Expertise",
    categories: [
      {
        name: "Programming Languages",
        icon: "💻",
        skills: ["Python", "SQL", "C++", "JavaScript"]
      },
      {
        name: "Data Science",
        icon: "📊",
        skills: ["Machine Learning", "Feature Engineering", "EDA", "Model Evaluation"]
      },
      {
        name: "Frameworks & Libraries",
        icon: "🔧",
        skills: ["Pandas", "NumPy", "Scikit-learn", "LightGBM", "FastAPI", "Flask"]
      },
      {
        name: "Data Visualization",
        icon: "📈",
        skills: ["Power BI", "Matplotlib", "Seaborn", "Tableau"]
      },
      {
        name: "Tools & Platforms",
        icon: "⚙️",
        skills: ["Git/GitHub", "Docker", "VS Code", "MySQL", "SQL Server", "Vercel"]
      },
      {
        name: "Soft Skills",
        icon: "🎯",
        skills: ["Critical Thinking", "Problem Solving", "Communication", "Teamwork"]
      }
    ]
  },
  vi: {
    title: "Kỹ Năng & Chuyên Môn",
    categories: [
      {
        name: "Ngôn Ngữ Lập Trình",
        icon: "💻",
        skills: ["Python", "SQL", "C++", "JavaScript"]
      },
      {
        name: "Khoa Học Dữ Liệu",
        icon: "📊",
        skills: ["Machine Learning", "Feature Engineering", "EDA", "Đánh Giá Mô Hình"]
      },
      {
        name: "Framework & Thư Viện",
        icon: "🔧",
        skills: ["Pandas", "NumPy", "Scikit-learn", "LightGBM", "FastAPI", "Flask"]
      },
      {
        name: "Trực Quan Hóa Dữ Liệu",
        icon: "📈",
        skills: ["Power BI", "Matplotlib", "Seaborn", "Tableau"]
      },
      {
        name: "Công Cụ & Nền Tảng",
        icon: "⚙️",
        skills: ["Git/GitHub", "Docker", "VS Code", "MySQL", "SQL Server", "Vercel"]
      },
      {
        name: "Kỹ Năng Mềm",
        icon: "🎯",
        skills: ["Tư Duy Phản Biện", "Giải Quyết Vấn Đề", "Giao Tiếp", "Làm Việc Nhóm"]
      }
    ]
  }
};

export default function Skills({ language }: SkillsProps) {
  const data = skillsData[language];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              {data.title}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.categories.map((category, index) => (
            <div
              key={index}
              className="animate-slide-up group bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-slate-700/20 rounded-2xl p-6 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:from-blue-500/30 hover:to-pink-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-slate-700/20 rounded-2xl p-8 animate-slide-up">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">
                795
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                {language === 'en' ? 'TOEIC Score' : 'Điểm TOEIC'}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Reading & Listening
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">
                8.35
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                {language === 'en' ? 'GPA' : 'Điểm GPA'}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {language === 'en' ? 'Top Student' : 'Sinh Viên Giỏi'}
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">
                3+
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                {language === 'en' ? 'Major Projects' : 'Dự Án Chính'}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {language === 'en' ? 'In Production' : 'Đang Vận Hành'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
