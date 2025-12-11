import { Target, Lightbulb, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Mục tiêu',
      description: 'Xây dựng thiết bị hỗ trợ người dùng trong đời sống, đặc biệt là nhận diện vật cản và cảnh báo nguy hiểm.'
    },
    {
      icon: Lightbulb,
      title: 'Sáng tạo',
      description: 'Khai thác khả năng thu thập và xử lý hình ảnh bằng AI trên ESP32-S3 CAM với chi phí thấp.'
    },
    {
      icon: Users,
      title: 'Đối tượng',
      description: 'Hỗ trợ người khiếm thị, học sinh và người dùng phổ thông nhận biết môi trường xung quanh.'
    },
    {
      icon: Zap,
      title: 'Tiềm năng',
      description: 'Tạo tiền đề nghiên cứu sâu hơn về IoT, hệ thống nhúng và thị giác máy tính.'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Giới thiệu dự án
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Về </span>
              <span className="gradient-text">dự án</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Dự án <strong className="text-foreground">"Phát triển thiết bị hỗ trợ thông minh AI"</strong> được 
              thực hiện với mục tiêu xây dựng một thiết bị cầm tay thông minh với chi phí thấp, nhỏ gọn có 
              khả năng nhận diện vật thể và hỗ trợ người dùng thông qua cảnh báo âm thanh.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Hệ thống sử dụng vi điều khiển ESP32-S3-CAM tích hợp camera để thu thập hình ảnh, xử lý bằng 
              mô hình AI nhẹ. Dữ liệu sau khi phân tích sẽ được mô tả lại và phát âm thanh ra loa để người 
              dùng biết.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-md bg-secondary text-sm font-mono text-primary">IoT</span>
              <span className="px-3 py-1.5 rounded-md bg-secondary text-sm font-mono text-primary">AI/ML</span>
              <span className="px-3 py-1.5 rounded-md bg-secondary text-sm font-mono text-primary">ESP32</span>
              <span className="px-3 py-1.5 rounded-md bg-secondary text-sm font-mono text-primary">Computer Vision</span>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="gradient-border p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
