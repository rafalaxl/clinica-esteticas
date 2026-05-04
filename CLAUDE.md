# CLAUDE.md — Governança Agêntica: Projeto Dr. Marcos

Este arquivo é o briefing permanente. O Agente deve ler este arquivo, o `DESIGN.md` e as `Instrucoes_Web_Design_2026.md` ANTES de agir. O não cumprimento das regras abaixo resultará em rejeição imediata da tarefa.

## 🛠 Tech Stack
- **Framework:** React + Vite.
- **CSS:** Tailwind v4 (Estritamente via CSS Variables do `DESIGN.md`).
- **Animações:** Framer Motion (motion/react).
- **Ícones:** Lucide React.

## 📏 Regras de Ferro (Zero Tolerance)
1.  **Limite de Linhas:** NENHUM arquivo de código (`.tsx`, `.css`) pode ultrapassar **150 linhas**. Refatore e decomponha em componentes atômicos se atingir este limite.
2.  **Zero Hardcoding:** PROIBIDO usar cores HEX ou RGB diretamente no JSX/TSX. Use apenas as classes Tailwind que mapeiam as variáveis HSL do `DESIGN.md`.
3.  **Step-by-Step (Atômico):** O projeto deve ser executado seção por seção. Não implemente a próxima seção sem validar a anterior.
4.  **Performance 1s:** A `Hero Section` deve ser priorizada para carregamento crítico (< 1s).
5.  **Acessibilidade & GEO:** Todo componente deve ter ARIA labels e o JSON-LD MedicalClinic deve estar presente e correto.

## 🔄 Fluxo de Execução Obrigatório
- **Fase 0 (Setup):** Limpeza do projeto e configuração do `index.css` com o tema HSL do `DESIGN.md`.
- **Fase 1 (Atômica):** Implementação da `Navbar` e `SEO` (JSON-LD).
- **Fase 2 (Atômica):** Implementação da `Hero Section` (Texto com BlurText + Video Background Otimizado).
- **Fase 3 (Atômica):** Implementação da seção `PrecisionGraft` (Engenharia Biológica).
- **Fase 4 (Atômica):** Implementação de `Stats` e `Prova Social`.
- **Fase 5 (Refinamento):** Ativação do Polisher (FX Artist) para micro-interações de luxo e auditoria final do QA.

## 🎭 Subagentes & Responsabilidades
- **Coder:** Escrita do código modular seguindo o limite de 150 linhas.
- **QA:** Auditor de performance, acessibilidade e "Anti-Slop" (caça por texto genérico).
- **Polisher:** Especialista em Framer Motion e Liquid Glass. Entra APENAS para o acabamento visual.

## 📂 Estrutura de Pastas
- `src/components/ui/` -> Átomos (Buttons, BlurText, GlassContainer).
- `src/components/sections/` -> Moléculas (Hero, Stats, etc).
- `src/components/layout/` -> Navbar, Footer, SEO.
- `src/lib/` -> Utilitários e configurações.
