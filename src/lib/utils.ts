import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utilitário para mesclar classes Tailwind de forma segura,
 * resolvendo conflitos e permitindo condicionais.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
