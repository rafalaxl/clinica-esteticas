import { motion, useScroll, useTransform } from 'framer-motion';
import { BlurText } from '../ui/BlurText';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { CONFIG, getWhatsAppLink } from '../../lib/config';

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // O conteúdo da Hero (texto) começa em opacity 0 e vai para 1 conforme scrolla
  // Mas o usuário quer "limpa de começo", então vamos fazer o contrário:
  // Ela começa limpa (imagem total), e o texto aparece conforme scrolla PARA BAIXO.
  // Na verdade, se a hero tem 100vh, e scrolar pra baixo, o texto deveria estar lá ou aparecer.
  
  // Ajuste: A imagem fica fixa ou scrola, e o texto surge com um efeito de fade.
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 1, 1]);
  const contentScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const imageBlur = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(10px)"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-background">
      {/* Sticky Container para manter a imagem e o texto visíveis durante o scroll da seção */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          {/* Overlay preto dinâmico: começa em 0 e vai para 0.6 para dar contraste ao texto */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0, 0.6]) }}
            className="absolute inset-0 bg-black z-10" 
          />
          <motion.div 
            style={{ 
              backgroundImage: `url("${import.meta.env.BASE_URL}assets/hero.webp")`,
              scale: imageScale,
              filter: imageBlur
            }}
            className="absolute inset-0 bg-cover bg-center animate-subtle-zoom"
          />
          {/* Gradiente dinâmico: começa suave e escurece na base */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0.2, 1]) }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-20" 
          />
        </div>

        {/* Scroll Indicator (Aparece brevemente ou fica limpo) */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05, 0.15], [0, 0.4, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-40"
        >
          <ChevronDown className="w-5 h-5 animate-bounce text-primary" />
        </motion.div>

        {/* Hero Content (Revelado pelo Scroll) */}
        <motion.div 
          style={{ 
            opacity: contentOpacity,
            scale: contentScale
          }}
          className="container relative z-30 px-6 text-center"
        >
          <div className="inline-block liquid-glass rounded-full px-6 py-2 mb-8 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-primary border border-primary/20">
            Referência Mundial em Transplante FUE
          </div>

          <div className="mb-10">
            <BlurText 
              text="A Arte da Naturalidade Absoluta. A Engenharia do Transplante Capilar de Elite."
              className="text-4xl md:text-7xl lg:text-8xl leading-[1.05] max-w-6xl mx-auto italic"
              delay={0.1}
            />
          </div>

          <p className="text-base md:text-xl text-foreground/70 font-light max-w-2xl mx-auto mb-14 tracking-widest leading-relaxed">
            Dominamos a ciência da restauração capilar com precisão robótica e estética soberana. 
            Onde a medicina encontra a arte.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={getWhatsAppLink(CONFIG.messages.simulation)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary uppercase tracking-[0.3em] text-[10px] md:text-xs inline-block"
            >
              Solicitar Simulação 3D
            </a>
            <a 
              href={getWhatsAppLink(CONFIG.messages.concierge)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass uppercase tracking-[0.3em] text-[10px] md:text-xs inline-block"
            >
              Concierge Exclusiva
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
