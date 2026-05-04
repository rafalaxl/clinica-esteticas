import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle2, Microscope } from 'lucide-react';

const StatCard = ({ stat, index }: { stat: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="liquid-glass rounded-[2.5rem] p-10 relative group hover:border-primary/40 transition-all duration-700"
  >
    <div className="flex justify-between items-start mb-10">
      <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">{stat.icon}</div>
      <div className="h-1 w-12 bg-primary/20 rounded-full mt-3" />
    </div>
    <div className="mb-8">
      <div className="text-6xl font-serif italic mb-2 tracking-tighter">{stat.value}</div>
      <div className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-1">{stat.label}</div>
      <div className="text-foreground/40 text-[10px] uppercase tracking-widest">{stat.sub}</div>
    </div>
    <p className="text-foreground/50 text-[10px] leading-relaxed border-t border-white/5 pt-6">{stat.detail}</p>
  </motion.div>
);

export const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const stats = [
    { label: "Prestígio Global", value: "ISHRS", sub: "Platinum Member Elite", icon: <Award />, detail: "Selo mundial de excelência em restauração." },
    { label: "Precisão Biológica", value: "10k+", sub: "Folículos Implantados", icon: <Microscope />, detail: "Engenharia de alta densidade por cm²." },
    { label: "Garantia Técnica", value: "98%", sub: "Taxa de Sucesso", icon: <CheckCircle2 />, detail: "Resultados soberanos e inquestionáveis." }
  ];

  return (
    <section id="resultados" ref={containerRef} className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">
            Autoridade Técnica Inquestionável
          </motion.span>
          <h2 className="text-4xl md:text-6xl max-w-4xl mx-auto leading-tight italic">
            A Excelência não é um Objetivo.<br />É o nosso <span className="text-primary">Padrão Biológico</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {stats.map((stat, i) => <StatCard key={i} stat={stat} index={i} />)}
        </div>

        <motion.div style={{ y }} className="liquid-glass border-primary/10 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 group relative">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full liquid-glass border-white/20 text-[10px] uppercase tracking-widest font-bold">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Assistência Robótica 4K
                </div>
              </div>
              <img src={`${import.meta.env.BASE_URL}assets/robotic.webp`} alt="Tecnologia Cirúrgica" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="text-3xl md:text-5xl leading-tight">A Fusão entre <span className="text-primary italic">IA Robótica</span> e Arte Manual.</h3>
            <p className="text-foreground/60 text-lg font-light leading-relaxed tracking-wide">
              Utilizamos a assistência robótica mais avançada do mercado para mapear a densidade doadora com erro zero, enquanto o Dr. Marcos executa a lapidação estética frontal.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-primary/20" />)}
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-primary">+1.200 Vidas Restauradas este ano</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
