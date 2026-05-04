import { motion } from 'framer-motion';
import { Cpu, Target, Zap } from 'lucide-react';

export const PrecisionGraft = () => {
  const steps = [
    {
      phase: "P: O Problema",
      title: "O Pavor da Artificialidade",
      description: "O medo de muitos homens não é o transplante em si, mas o estigma do 'cabelo de boneca'. Resultados genéricos que gritam 'procedimento' à distância.",
      icon: <Target className="w-6 h-6" />,
      tag: "Risco Estético"
    },
    {
      phase: "A: A Agitação",
      title: "O Estigma da Imperfeição",
      description: "Uma linha frontal mal desenhada ou uma densidade inconsistente podem ser mais prejudiciais à autoestima do que a própria calvície.",
      icon: <Zap className="w-6 h-6" />,
      tag: "Alerta Biológico"
    },
    {
      phase: "S: A Solução",
      title: "Inclinação Angular de 100%",
      description: "Nosso Protocolo Precision-Graft utiliza biometria capilar para replicar a angulação exata de cada folículo. Uma engenharia impossível de distinguir do natural.",
      icon: <Cpu className="w-6 h-6" />,
      tag: "Engenharia de Elite"
    }
  ];

  return (
    <section id="protocolo" className="section-padding bg-background relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block"
            >
              Mecanismo Único: Protocolo Precision-Graft
            </motion.span>
            <h2 className="text-5xl md:text-7xl leading-tight italic">
              Não Vendemos Transplantes.<br />
              Arquitamos <span className="text-primary">Soberania</span>.
            </h2>
          </div>
          <div className="lg:mb-4">
            <p className="text-foreground/50 max-w-sm text-sm uppercase tracking-widest leading-relaxed">
              Desconstruindo a medicina genérica através da biometria capilar avançada.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="liquid-glass p-10 rounded-[2rem] flex flex-col group hover:border-primary/30 transition-all duration-500"
            >
              <div className="mb-12 flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-foreground/30">
                  {step.phase}
                </span>
              </div>
              
              <span className="text-primary/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                {step.tag}
              </span>
              <h3 className="text-3xl mb-6 group-hover:text-primary transition-colors duration-500">
                {step.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floating Precision Indicator */}
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mt-20 flex items-center justify-center gap-4 text-primary/40"
        >
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-primary/40" />
          <span className="text-[10px] uppercase tracking-[0.5em]">Tolerância Zero para Artificialidade</span>
          <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-primary/40" />
        </motion.div>
      </div>
    </section>
  );
};
