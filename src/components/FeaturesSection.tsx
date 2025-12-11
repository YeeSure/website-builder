import { Camera, Mic, Volume2, Wifi, MessageSquare, BatteryCharging } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Camera,
      title: 'Nhận diện vật thể',
      description: 'Camera ESP32-S3 chụp ảnh và xử lý bằng mô hình AI nhẹ hoặc cloud để nhận diện người, xe, vật cản.',
      gradient: 'from-primary to-cyan-400'
    },
    {
      icon: Volume2,
      title: 'Cảnh báo âm thanh',
      description: 'Khi phát hiện vật thể, hệ thống mô tả và phát âm thanh qua loa để người dùng nhận biết.',
      gradient: 'from-accent to-purple-400'
    },
    {
      icon: MessageSquare,
      title: 'Chatbot AI',
      description: 'Trợ lý ảo hỗ trợ học tập như gia sư, trò chuyện giải trí, trả lời câu hỏi người dùng.',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Mic,
      title: 'Thu âm giọng nói',
      description: 'Tích hợp microphone để người dùng điều khiển bằng giọng nói, gọi "Hi Lily" để kích hoạt.',
      gradient: 'from-orange-500 to-amber-400'
    },
    {
      icon: Wifi,
      title: 'Kết nối WiFi',
      description: 'Kết nối WiFi ổn định để truyền dữ liệu lên server AI hoặc sử dụng dịch vụ đám mây.',
      gradient: 'from-blue-500 to-sky-400'
    },
    {
      icon: BatteryCharging,
      title: 'Pin sạc tiện lợi',
      description: 'Sử dụng pin 18650 Li-ion với mạch sạc TP4056, tiện lợi cho việc di chuyển.',
      gradient: 'from-rose-500 to-pink-400'
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Tính năng nổi bật
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Khả năng của </span>
            <span className="gradient-text">thiết bị</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thiết bị tích hợp nhiều tính năng thông minh, hỗ trợ toàn diện cho người dùng trong cuộc sống hàng ngày.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group gradient-border p-6 card-hover"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
