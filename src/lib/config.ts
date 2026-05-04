/**
 * Configurações Gerais do Site - Dr. Marcos
 * Altere estas informações para atualizar os links de contato em todo o site.
 */
export const CONFIG = {
  doctorName: "Dr. Marcos",
  whatsappNumber: "5511999999999", // Apenas números: Código País + DDD + Número
  instagramUser: "drmarcos",
  linkedinUser: "dr-marcos-albuquerque",
  contactEmail: "contato@clinicadrmarcos.com.br",
  address: "Av. Brigadeiro Faria Lima, 4500 - Itaim Bibi, São Paulo - SP",
  
  // Mensagens pré-definidas para WhatsApp
  messages: {
    simulation: "Olá Dr. Marcos! Gostaria de solicitar uma simulação 3D do meu transplante capilar.",
    appointment: "Olá! Gostaria de agendar uma consulta exclusiva com o Dr. Marcos.",
    concierge: "Olá! Gostaria de falar com a Concierge Exclusiva sobre o Protocolo Precision-Graft."
  }
};

/**
 * Utilitário para gerar links de WhatsApp
 */
export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
