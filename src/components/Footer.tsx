import { Cpu, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-bold">AI Smart Device</span>
              <p className="text-xs text-muted-foreground">Dự án Khoa học Kỹ thuật 2025</p>
            </div>
          </div>

          {/* Credits */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Được thực hiện với <Heart className="w-4 h-4 text-red-500 inline" /> bởi
            <span className="text-foreground font-medium">Nguyễn Vũ Kha & Trần Châu Á</span>
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/78/xiaozhi-esp32"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Trường THCS & THPT Khánh Hưng - SỞ GD & ĐT CÀ MAU
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
