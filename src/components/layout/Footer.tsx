import { Camera, User, MessageCircle } from 'lucide-react';
import { CONFIG, getWhatsAppLink } from '../../lib/config';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md">
            <div className="text-3xl font-serif italic mb-8 tracking-tighter">
              {CONFIG.doctorName.toUpperCase()}<span className="text-primary ml-1">.</span>
            </div>
            <p className="text-white/40 text-lg leading-relaxed">
              Redefinindo os padrões da medicina capilar através da precisão robótica e um olhar artístico inquestionável.
            </p>
            <p className="mt-8 text-white/20 text-xs uppercase tracking-widest leading-loose">
              {CONFIG.address}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Clínica</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href="#protocolo" className="hover:text-primary transition-colors">Protocolo</a></li>
                <li><a href="#resultados" className="hover:text-primary transition-colors">Resultados</a></li>
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Atendimento</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href={getWhatsAppLink(CONFIG.messages.concierge)} target="_blank" className="hover:text-primary transition-colors">Concierge VIP</a></li>
                <li><a href={getWhatsAppLink(CONFIG.messages.appointment)} target="_blank" className="hover:text-primary transition-colors">Suporte 24h</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Social</h4>
              <div className="flex gap-6">
                <a href={`https://instagram.com/${CONFIG.instagramUser}`} target="_blank" className="text-white/40 hover:text-primary transition-colors" aria-label="Siga o Dr. Marcos no Instagram"><Camera className="w-5 h-5" /></a>
                <a href={`https://linkedin.com/in/${CONFIG.linkedinUser}`} target="_blank" className="text-white/40 hover:text-primary transition-colors" aria-label="Conecte-se com o Dr. Marcos no LinkedIn"><User className="w-5 h-5" /></a>
                <a href={getWhatsAppLink(CONFIG.messages.appointment)} target="_blank" className="text-white/40 hover:text-primary transition-colors" aria-label="Fale conosco pelo WhatsApp"><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-white/20 text-[10px] uppercase tracking-[0.3em]">
          <p>© 2026 Clínica {CONFIG.doctorName} - Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
