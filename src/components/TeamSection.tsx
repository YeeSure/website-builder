import { GraduationCap, School, User } from 'lucide-react';

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Nhóm thực hiện
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Đội ngũ </span>
            <span className="gradient-text">nghiên cứu</span>
          </h2>
        </div>

        {/* School Info */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <School className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">SỞ GD & ĐT CÀ MAU</p>
                <h3 className="text-xl font-bold">Trường THCS & THPT Khánh Hưng</h3>
              </div>
            </div>
            <p className="text-muted-foreground">Khánh Hưng, tháng 11 năm 2025</p>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Student 1 */}
          <div className="gradient-border p-6 text-center card-hover">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-1">Nguyễn Vũ Kha</h3>
            <p className="text-primary text-sm font-medium mb-2">Lớp 12T</p>
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
              Người thực hiện
            </span>
          </div>

          {/* Student 2 */}
          <div className="gradient-border p-6 text-center card-hover">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-1">Trần Châu Á</h3>
            <p className="text-primary text-sm font-medium mb-2">Lớp 12T</p>
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
              Người thực hiện
            </span>
          </div>

          {/* Teacher */}
          <div className="gradient-border p-6 text-center card-hover">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-1">Thầy Vũ Văn Minh</h3>
            <p className="text-emerald-400 text-sm font-medium mb-2">Giáo viên Hóa học</p>
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
              Giáo viên hướng dẫn
            </span>
          </div>
        </div>

        {/* Research Field */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Lĩnh vực nghiên cứu</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium">
              🔌 IoT
            </span>
            <span className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium">
              🤖 Trí tuệ nhân tạo
            </span>
            <span className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium">
              👁️ Thị giác máy tính
            </span>
            <span className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium">
              ⚙️ Hệ thống nhúng
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
