/* Generazione di immagini SVG per il sito */

// Funzione per generare SVG di base
function generateSVG(width, height, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
    ${content}
  </svg>`;
}

// Genera l'immagine hero per la home
function generateHeroImage() {
  const width = 500;
  const height = 400;
  const content = `
    <rect width="${width}" height="${height}" fill="#F3F4F6" />
    <circle cx="250" cy="200" r="150" fill="#3B82F6" opacity="0.1" />
    <circle cx="250" cy="200" r="100" fill="#3B82F6" opacity="0.2" />
    <circle cx="250" cy="200" r="50" fill="#3B82F6" opacity="0.3" />
    <path d="M200,150 L300,150 L300,250 L200,250 Z" fill="#1E3A8A" />
    <path d="M150,200 L350,200" stroke="#F97316" stroke-width="8" stroke-linecap="round" />
    <path d="M250,100 L250,300" stroke="#F97316" stroke-width="8" stroke-linecap="round" />
    <text x="250" y="350" font-family="Arial" font-size="24" fill="#1E3A8A" text-anchor="middle">SEO Olistica</text>
  `;
  return generateSVG(width, height, content);
}

// Genera l'immagine per la sezione profilo
function generateProfileImage() {
  const width = 400;
  const height = 400;
  const content = `
    <rect width="${width}" height="${height}" fill="#F3F4F6" />
    <circle cx="200" cy="150" r="100" fill="#1E3A8A" opacity="0.8" />
    <rect x="150" y="260" width="100" height="100" rx="10" fill="#3B82F6" />
    <path d="M100,200 L300,200" stroke="#F97316" stroke-width="5" stroke-linecap="round" />
    <path d="M100,220 L300,220" stroke="#F97316" stroke-width="5" stroke-linecap="round" />
    <path d="M100,240 L300,240" stroke="#F97316" stroke-width="5" stroke-linecap="round" />
  `;
  return generateSVG(width, height, content);
}

// Genera l'immagine per l'approccio SEO
function generateSeoApproachImage() {
  const width = 500;
  const height = 400;
  const content = `
    <rect width="${width}" height="${height}" fill="#F3F4F6" />
    <circle cx="250" cy="200" r="150" fill="#1E3A8A" opacity="0.1" />
    <path d="M150,150 L350,150 L350,250 L150,250 Z" fill="none" stroke="#1E3A8A" stroke-width="3" />
    <circle cx="200" cy="200" r="30" fill="#F97316" />
    <circle cx="300" cy="200" r="30" fill="#3B82F6" />
    <path d="M200,200 L300,200" stroke="#4B5563" stroke-width="3" stroke-linecap="round" />
    <text x="200" y="190" font-family="Arial" font-size="12" fill="white" text-anchor="middle">User</text>
    <text x="300" y="190" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Google</text>
    <text x="250" y="300" font-family="Arial" font-size="24" fill="#1E3A8A" text-anchor="middle">Approccio Olistico</text>
  `;
  return generateSVG(width, height, content);
}

// Genera l'immagine per la pagina competenze
function generateCompetenzeHeroImage() {
  const width = 500;
  const height = 400;
  const content = `
    <rect width="${width}" height="${height}" fill="#F3F4F6" />
    <rect x="100" y="100" width="300" height="200" rx="20" fill="#1E3A8A" opacity="0.1" />
    <rect x="150" y="150" width="200" height="100" rx="10" fill="#1E3A8A" opacity="0.2" />
    <circle cx="250" cy="200" r="30" fill="#F97316" />
    <path d="M220,200 L280,200" stroke="white" stroke-width="3" stroke-linecap="round" />
    <path d="M250,170 L250,230" stroke="white" stroke-width="3" stroke-linecap="round" />
    <text x="250" y="300" font-family="Arial" font-size="24" fill="#1E3A8A" text-anchor="middle">Competenze SEO</text>
  `;
  return generateSVG(width, height, content);
}

// Genera l'immagine per la pagina io e la seo
function generateHolisticSeoImage() {
  const width = 500;
  const height = 400;
  const content = `
    <rect width="${width}" height="${height}" fill="#F3F4F6" />
    <circle cx="250" cy="200" r="150" fill="#1E3A8A" opacity="0.1" />
    <circle cx="250" cy="200" r="100" fill="#1E3A8A" opacity="0.2" />
    <circle cx="250" cy="200" r="50" fill="#1E3A8A" opacity="0.3" />
    <circle cx="250" cy="200" r="25" fill="#F97316" />
    <path d="M175,125 L325,275" stroke="#3B82F6" stroke-width="3" stroke-linecap="round" />
    <path d="M175,275 L325,125" stroke="#3B82F6" stroke-width="3" stroke-linecap="round" />
    <text x="250" y="350" font-family="Arial" font-size="24" fill="#1E3A8A" text-anchor="middle">SEO Olistica</text>
  `;
  return generateSVG(width, height, content);
}

// Genera l'immagine per la pagina contatti
function generateContactImage() {
  const width = 500;
  const height = 400;
  const content = `
    <rect width="${width}" height="${height}" fill="#F3F4F6" />
    <rect x="150" y="100" width="200" height="200" rx="10" fill="#1E3A8A" opacity="0.1" />
    <rect x="175" y="150" width="150" height="30" rx="5" fill="white" stroke="#3B82F6" stroke-width="2" />
    <rect x="175" y="200" width="150" height="30" rx="5" fill="white" stroke="#3B82F6" stroke-width="2" />
    <rect x="175" y="250" width="150" height="30" rx="5" fill="#F97316" />
    <text x="250" y="270" font-family="Arial" font-size="14" fill="white" text-anchor="middle">Invia</text>
    <text x="250" y="350" font-family="Arial" font-size="24" fill="#1E3A8A" text-anchor="middle">Contattami</text>
  `;
  return generateSVG(width, height, content);
}

// Esporta le funzioni
module.exports = {
  generateSVG,
  generateHeroImage,
  generateProfileImage,
  generateSeoApproachImage,
  generateCompetenzeHeroImage,
  generateHolisticSeoImage,
  generateContactImage
};
