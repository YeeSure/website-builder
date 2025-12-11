import { ArrowDown, Brain, Eye, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(hsl(187 92% 52% / 0.3) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(187 92% 52% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Dự án Khoa học Kỹ thuật 2025</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="animate-slide-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Phát triển</span>
            <br />
            <span className="gradient-text">Thiết bị Hỗ trợ</span>
            <br />
            <span className="text-foreground">Thông minh </span>
            <span className="gradient-text">AI</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-slide-up delay-200 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Thiết bị cầm tay thông minh với chi phí thấp, nhỏ gọn có khả năng nhận diện vật thể 
            và hỗ trợ người dùng thông qua cảnh báo âm thanh bằng AI.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl">
              Khám phá dự án
            </Button>
            <Button variant="outline" size="lg">
              Xem video demo
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="animate-slide-up delay-400 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Nhận diện vật thể</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Volume2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Cảnh báo âm thanh</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Chatbot AI</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-slide-up delay-500 absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium">Cuộn xuống</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
