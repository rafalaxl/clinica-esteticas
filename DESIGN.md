# DESIGN.md — SSoT Visual: Clínica Dr. Marcos (Soberania Capilar)

Este documento é a Única Fonte da Verdade (SSoT) para a estética do projeto. O agente DEVE seguir estas definições rigorosamente. Cores hardcoded (hex/rgb fora de variáveis) são consideradas FALHA CRÍTICA.

## 1. Brand & Feeling
- **Identidade:** Soberania, Precisão Robótica, Luxo Silencioso.
- **Feeling:** Late-night Cinematic (A24). Atmosfera escura, profunda, com pontos de luz esmeralda focados (como em uma sala de cirurgia de Dubai).

## 2. Colors (Sistema HSL Dinâmico - Tailwind 4 Ready)
Toda a paleta deve ser derivada destas variáveis no `index.css`:
- `--background`: `0 0% 2%` (Preto Absoluto).
- `--foreground`: `0 0% 98%` (Off-white para leitura).
- `--primary`: `160 84% 39%` (Verde Esmeralda Clínico).
- `--primary-metallic`: `160 84% 15%` (Variante profunda).
- `--glass-bg`: `rgba(255, 255, 255, 0.03)` (Base do Liquid Glass).
- `--glass-border`: `rgba(255, 255, 255, 0.08)`.

## 3. Typography
- **Headings (H1-H6):** `Instrument Serif`, Italic. 
  - Regra: SEMPRE em Itálico. É a assinatura de luxo do projeto.
- **Body:** `Barlow` (Weights: 300, 400, 600).
  - Regra: Tracking expandido (`tracking-wide`) para ar de exclusividade.

## 4. Liquid Glass (Efeito Assinatura)
O efeito "Vidro Líquido" deve ser implementado via utilitário CSS estrito:
```css
.liquid-glass {
  backdrop-filter: blur(20px);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
}
```

## 5. Spacing & Grids
- **Escala de Espaçamento:** Generosa (`py-32` a `py-48`). O luxo precisa de espaço.
- **Container:** Máximo de `1280px`, centralizado.

## 6. Components & Micro-interações
- **Regra de Ouro:** Máximo de 150 linhas por arquivo. Se exceder, fragmente em sub-componentes.
- **Buttons:** Bordas arredondadas (full), animação de glow pulsante no hover.
- **Reveals:** Use `BlurText` (Framer Motion) para todas as entradas de texto.

## 7. Voice & Tone (Copywriting)
- **Framework:** PAS (Problema, Agitação, Solução) com foco em Soberania.
- **Palavras-Chave:** Precisão, Robótica, Exclusividade, Naturalidade Absoluta.
- **Proibido:** Jargões de "promoção", placeholders de texto, e copies genéricos.
