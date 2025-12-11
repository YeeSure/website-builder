import { Search, Code, Wrench, TestTube, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Nghiên cứu tài liệu',
      description: 'Tìm hiểu datasheet, thư viện camera, các mô hình AI nhẹ như TensorFlow Lite Micro.',
    },
    {
      number: '02',
      icon: Wrench,
      title: 'Thực nghiệm phần cứng',
      description: 'Lắp mạch ESP32-S3-CAM, cấp nguồn, kiểm thử camera và các module liên quan.',
    },
    {
      number: '03',
      icon: Code,
      title: 'Lập trình phần mềm',
      description: 'Viết code chụp ảnh, gửi lên server AI, xuất âm thanh khi phát hiện vật thể.',
    },
    {
      number: '04',
      icon: TestTube,
      title: 'Kiểm thử thực tế',
      description: 'Thử nhận diện vật thể, đo thời gian xử lý, kiểm tra độ chính xác và kết nối WiFi.',
    },
    {
      number: '05',
      icon: Rocket,
      title: 'Tối ưu hóa',
      description: 'Tăng tốc độ phản hồi AI, tối ưu code, giảm thời gian xử lý, tăng thời lượng pin.',
    },
  ];

  return (
    <section id="process" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Quy trình thực hiện
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Phương pháp </span>
            <span className="gradient-text">nghiên cứu</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dự án được thực hiện theo quy trình nghiên cứu khoa học bài bản, từ tìm hiểu lý thuyết đến triển khai thực tế.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
              {/* Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="gradient-border p-6 flex-1 card-hover">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <span className="font-mono text-2xl font-bold text-primary/30">{step.number}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
