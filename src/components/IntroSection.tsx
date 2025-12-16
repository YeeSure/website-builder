import { Play, Eye, Volume2, MessageSquare } from 'lucide-react';

const IntroSection = () => {
  return (
    <section id="intro" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            Giới thiệu dự án
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hỗ trợ người khiếm thị <br />
            <span className="text-primary">bằng công nghệ AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Dự án của chúng tôi sử dụng trí tuệ nhân tạo để giúp người khiếm thị 
            nhận biết môi trường xung quanh, đọc văn bản và tương tác với thế giới 
            một cách độc lập hơn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video/Demo placeholder */}
          <div className="relative group animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden border border-border/50 shadow-xl">
              <div className="w-full h-full flex items-center justify-center bg-card/50 backdrop-blur-sm">
                <button className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group-hover:shadow-primary/50">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
          </div>

          {/* Features list */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Nhận diện vật thể</h3>
                <p className="text-muted-foreground text-sm">
                  AI nhận diện và mô tả các vật thể, người, văn bản trong môi trường xung quanh.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Volume2 className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phản hồi bằng âm thanh</h3>
                <p className="text-muted-foreground text-sm">
                  Chuyển đổi thông tin hình ảnh thành âm thanh tự nhiên, dễ hiểu.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Trợ lý AI thông minh</h3>
                <p className="text-muted-foreground text-sm">
                  Chatbot hỗ trợ trả lời câu hỏi và hướng dẫn sử dụng ứng dụng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
