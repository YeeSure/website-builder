import { Cpu, Camera, Volume2, Battery, Power, Mic } from 'lucide-react';

const ComponentsSection = () => {
  const components = [
    {
      icon: Cpu,
      name: 'ESP32-S3-CAM',
      description: 'Vi điều khiển chính với WiFi/BLE, xử lý AI',
      specs: 'Dual-core 240MHz, 8MB PSRAM'
    },
    {
      icon: Camera,
      name: 'OV2640 Camera',
      description: 'Camera 2MP tích hợp để chụp ảnh',
      specs: '1600x1200 pixels, JPEG'
    },
    {
      icon: Volume2,
      name: 'Loa mini',
      description: 'Phát âm thanh cảnh báo và phản hồi',
      specs: '3W, 8Ω'
    },
    {
      icon: Mic,
      name: 'Microphone',
      description: 'Thu âm giọng nói điều khiển',
      specs: 'INMP441 I2S'
    },
    {
      icon: Battery,
      name: 'Pin 18650 Li-ion',
      description: 'Nguồn điện di động sạc được',
      specs: '3.7V, 2200mAh'
    },
    {
      icon: Power,
      name: 'Mạch sạc TP4056',
      description: 'Module sạc pin Type-C tiện lợi',
      specs: '5V input, 1A charge'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Phần cứng
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Thành phần </span>
            <span className="gradient-text">hệ thống</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thiết bị được tích hợp từ các linh kiện hiện đại, tối ưu về chi phí và hiệu suất.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((component, index) => (
            <div
              key={index}
              className="group glass rounded-xl p-5 hover:bg-secondary/50 transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <component.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {component.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {component.description}
                  </p>
                  <span className="inline-block px-2 py-0.5 rounded bg-secondary text-xs font-mono text-primary/80">
                    {component.specs}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="mt-16 gradient-border p-8">
          <h3 className="text-xl font-semibold text-center mb-8">Sơ đồ hoạt động</h3>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2 animate-glow-pulse">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Chụp ảnh</span>
            </div>
            
            <div className="text-2xl text-primary">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-2">
                <Cpu className="w-8 h-8 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Xử lý AI</span>
            </div>
            
            <div className="text-2xl text-primary">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-2">
                <Volume2 className="w-8 h-8 text-emerald-400" />
              </div>
              <span className="text-sm text-muted-foreground">Phát âm thanh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
