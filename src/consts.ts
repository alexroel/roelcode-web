// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Roelcode";
export const SITE_DESCRIPTION =
  "Bienvenido a mi Roelcode.com donde encontrarás curso de Udemy, tutoriales y artículos sobre programación y desarrollo web.";

// Funciones utilitarias para categorías
export function formatCategorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function getCategoryUrl(category: string): string {
  return `/cursos-gratis/${formatCategorySlug(category)}`;
}
