'use client';

interface ProjectsProps {
  language: 'vi' | 'en';
}

const projects = {
  en: [
    {
      title: "Product Recommendation System",
      subtitle: "AI-powered personalized shopping",
      description: "Built an end-to-end recommendation engine using Collaborative Filtering and LightGBM to predict top 10 products customers will purchase. Achieved 14% precision@10, helping increase revenue by optimizing inventory planning.",
      tech: ["Python", "Pandas", "Scikit-learn", "LightGBM", "EDA"],
      challenge: "Handled large real-world transaction data with feature engineering to extract customer behavior patterns.",
      result: "14% Precision@10 | Estimated 14% revenue increase"
    },
    {
      title: "Subscription Prediction System",
      subtitle: "End-to-end ML deployment",
      description: "Developed a complete solution from ML model to web app helping the sales team identify high-conversion prospects. Implemented Flask backend for real-time predictions with REST API.",
      tech: ["Flask", "Python", "SQL", "React", "RESTful API"],
      challenge: "Handled imbalanced data and created user-friendly UI for non-technical users.",
      result: "30-40% reduction in unproductive calls | Improved conversion rates"
    },
    {
      title: "Semantic Image Search Engine",
      subtitle: "AI-powered visual search system",
      description: "Built an intelligent image search system using CLIP embeddings and Milvus vector database. Users can search with natural language instead of keywords.",
      tech: ["FastAPI", "CLIP", "Milvus", "Docker", "Redis"],
      challenge: "Optimized vector database for million-scale similarity search with millisecond latency.",
      result: "50%+ improvement in document discovery | Eliminated manual tagging"
    }
  ],
  vi: [
    {
      title: "Hệ Thống Gợi Ý Sản Phẩm",
      subtitle: "Mua sắm được cá nhân hóa bằng AI",
      description: "Xây dựng hệ thống gợi ý toàn diện sử dụng Collaborative Filtering và LightGBM để dự đoán top 10 sản phẩm khách hàng sẽ mua. Đạt 14% Precision@10, giúp tăng doanh thu qua tối ưu hóa kế hoạch kho.",
      tech: ["Python", "Pandas", "Scikit-learn", "LightGBM", "EDA"],
      challenge: "Xử lý dữ liệu giao dịch thực tế lớn với Feature Engineering trích xuất hành vi khách hàng.",
      result: "14% Precision@10 | Ước tính tăng doanh thu 14%"
    },
    {
      title: "Hệ Thống Dự Báo Chuyển Đổi",
      subtitle: "Triển khai ML toàn diện",
      description: "Phát triển giải pháp hoàn chỉnh từ mô hình ML đến ứng dụng web giúp đội Sales xác định khách hàng tiềm năng cao. Implement Flask backend cho dự đoán real-time với REST API.",
      tech: ["Flask", "Python", "SQL", "React", "RESTful API"],
      challenge: "Xử lý dữ liệu mất cân bằng và tạo UI thân thiện với người dùng không kỹ thuật.",
      result: "Giảm 30-40% cuộc gọi vô ích | Cải thiện tỷ lệ chuyển đổi"
    },
    {
      title: "Công Cụ Tìm Kiếm Hình Ảnh Theo Ngữ Nghĩa",
      subtitle: "Hệ thống tìm kiếm hình ảnh thông minh",
      description: "Xây dựng hệ thống tìm kiếm hình ảnh thông minh sử dụng CLIP embeddings và Milvus vector database. Người dùng có thể tìm kiếm bằng ngôn ngữ tự nhiên thay vì từ khóa.",
      tech: ["FastAPI", "CLIP", "Milvus", "Docker", "Redis"],
      challenge: "Tối ưu hóa vector database cho tìm kiếm similarity quy mô triệu vector với độ trễ milisecond.",
      result: "Cải thiện tìm kiếm 50% | Loại bỏ hoàn toàn gắn thẻ thủ công"
    }
  ]
};

export default function Projects({ language }: ProjectsProps) {
  const projectList = projects[language];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              {language === 'en' ? 'Featured Projects' : 'Dự Án Tiêu Biểu'}
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="animate-slide-up group bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-slate-700/20 rounded-2xl p-8 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {language === 'en' ? 'Challenge & Solution' : 'Thách Thức & Giải Pháp'}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 dark:bg-blue-500/30 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center bg-gradient-to-br from-blue-500/10 to-pink-500/10 dark:from-blue-500/20 dark:to-pink-500/20 rounded-xl p-6 border border-white/20 dark:border-slate-700/20">
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-2">
                    {language === 'en' ? 'Results' : 'Kết Quả'}
                  </p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    {project.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
