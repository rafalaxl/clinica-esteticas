import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu } from 'lucide-react';
import { CONFIG, getWhatsAppLink } from '../../lib/config';

export const Navbar = () => {
  const { scrollY } = useScroll();
  
  // A Navbar aparece apenas depois de 100px de scroll
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-20, 0]);

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
    >
      <div className="liquid-glass rounded-full px-8 py-4 flex items-center justify-between border border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="text-xl font-serif italic tracking-tighter">
          DR. MARCOS<span className="text-primary ml-1">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.3em] uppercase">
          <a href="#protocolo" className="hover:text-primary transition-colors">Protocolo</a>
          <a href="#resultados" className="hover:text-primary transition-colors">Resultados</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a 
            href={getWhatsAppLink(CONFIG.messages.appointment)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-6 text-[10px] uppercase tracking-[0.2em] inline-block"
          >
            Agendar Consulta
          </a>
        </div>

        <button className="md:hidden text-primary">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
};
