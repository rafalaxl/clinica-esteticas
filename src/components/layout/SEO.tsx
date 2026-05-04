import React from 'react';

export const SEO: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Clínica Dr. Marcos - Transplante Capilar Elite",
    "description": "Clínica de estética avançada e transplante capilar de alta densidade com assistência robótica. Criadores do Protocolo Precision-Graft.",
    "url": "https://www.clinicadrmarcos.com.br",
    "logo": "https://www.clinicadrmarcos.com.br/logo.png",
    "image": "https://www.clinicadrmarcos.com.br/hero-image.jpg",
    "priceRange": "$$$$",
    "telephone": "+55 (11) 99999-9999",
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
      "streetAddress": "Av. Brigadeiro Faria Lima, 4500",
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
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
};
