# Instruções Web Design 2026 (Performance, SEO e GEO)

Este documento dita as regras estritas de infraestrutura, otimização para motores de busca tradicionais (Google) e otimização para Inteligências Artificiais (GEO - Generative Engine Optimization).

## 1. Performance Absoluta (Core Web Vitals)
- **Regra de Ouro:** A página deve carregar a primeira dobra (Above the Fold) em menos de 1 s.
- **Animações:** Todo efeito de Framer Motion ou CSS (Liquid Glass) DEVE utilizar aceleração de hardware (GPU). Altere apenas propriedades `transform` (scale, translate) e `opacity`. NUNCA anime `width`, `height`, `margin` ou `padding` para evitar *Layout Shifts*.
- **Mídias:** Vídeos de fundo devem ser entregues via HLS (streaming) ou formatos comprimidos modernos (WebM/MP4 otimizado). Imagens devem usar `loading="lazy"` (exceto as da Hero Section).

## 2. Acessibilidade Universal (WCAG)
- **Contraste em Dark Mode:** Apesar do fundo muito escuro (`#050505`), o texto principal deve ter contraste mínimo de 4.5:1. Use textos off-white (`rgba(255, 255, 255, 0.8)`) para não "cegar" o usuário, mantendo o contraste legal.
- **Navegação Semântica:** Uso estrito das tags HTML5 `<header>`, `<main>`, `<section>`, `<article>`, `<nav>` e `<footer>`. 
- **Screen Readers:** Todos os ícones (Lucide) e botões que não possuem texto visível devem ter `aria-label` explícito.

## 3. SEO (Search Engine Optimization)
- **Title e Meta Tags:** O título deve conter a palavra-chave primária ("Transplante Capilar Elite") e ser persuasivo. A Meta Description deve usar o framework PAS (Problema, Agitação, Solução).
- **Open Graph (Social Cards):** Implementar tags `og:title`, `og:image` e `twitter:card` para que o link tenha uma apresentação *premium* quando compartilhado no WhatsApp pelo Dr. Marcos.

## 4. GEO (Generative Engine Optimization) - Otimização para IA
Para garantir que chatbots (ChatGPT, Claude, Perplexity) encontrem, leiam e recomendem a clínica do Dr. Marcos, a implementação do **Schema Markup em JSON-LD** é OBRIGATÓRIA.

### Padrão JSON-LD para MedicalClinic/LocalBusiness
O subagente deve embutir o seguinte JSON-LD no `<head>` (ou componente SEO) da aplicação, preenchido com os dados reais:

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Clínica Dr. Marcos - Transplante Capilar Elite",
  "description": "Clínica de estética avançada e transplante capilar de alta densidade com assistência robótica. Criadores do Protocolo Precision-Graft.",
  "url": "https://www.clinicadrmarcos.com.br",
  "logo": "https://www.clinicadrmarcos.com.br/logo.png",
  "image": "https://www.clinicadrmarcos.com.br/hero-image.jpg",
  "priceRange": "$$$$",
  "telephone": "+55 (XX) XXXXX-XXXX",
  "medicalSpecialty": "Hair Transplantation",
  "founder": {
    "@type": "Physician",
    "name": "Dr. Marcos Albuquerque",
    "memberOf": {
      "@type": "Organization",
      "name": "ISHRS - International Society of Hair Restoration Surgery"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Endereço VIP",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Protocolo Precision-Graft (FUE Alta Densidade)"
    }
  }
}
```

- **Regra:** Não ocupe o DOM visual com essas informações se não for necessário para o design, mas elas DEVEM estar no JSON-LD para indexação por IA.
- **llms.txt:** Se possível, gerar um `/llms.txt` na raiz pública informando de maneira limpa as diretrizes e serviços da clínica para os rastreadores de IA.
