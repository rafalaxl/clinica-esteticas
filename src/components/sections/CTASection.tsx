import { motion } from 'framer-motion';
import { CONFIG, getWhatsAppLink } from '../../lib/config';

export const CTASection = () => {
  return (
    <section id="sobre" className="py-32 px-6 text-center bg-gradient-to-b from-background to-primary-metallic/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="liquid-glass p-16 rounded-[3rem] max-w-5xl mx-auto border-primary/10"
        >
          <h2 className="text-4xl md:text-6xl mb-12 max-w-3xl mx-auto leading-tight italic">
            Pronto para redescobrir sua <span className="text-primary">melhor versão</span>?
          </h2>
          <p className="text-foreground/50 mb-12 max-w-xl mx-auto text-sm uppercase tracking-[0.3em]">
            Vagas limitadas para o próximo trimestre. Atendimento exclusivo sob reserva.
          </p>
          <a 
            href={getWhatsAppLink(CONFIG.messages.concierge)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary scale-110 uppercase tracking-[0.2em] text-[10px] md:text-xs inline-block"
          >
            Falar com nossa Concierge Exclusiva
          </a>
        </motion.div>
      </div>
    </section>
  );
};
