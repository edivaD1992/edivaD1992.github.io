/* Script per generare le immagini SVG e salvarle come file */
const fs = require('fs');
const path = require('path');
const svgGenerator = require('./svg-generator.js');

// Crea la directory delle immagini se non esiste
const imagesDir = path.join(__dirname, '..', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Genera e salva tutte le immagini
const images = [
  { name: 'hero-image.svg', generator: svgGenerator.generateHeroImage },
  { name: 'profile-illustration.svg', generator: svgGenerator.generateProfileImage },
  { name: 'seo-approach.svg', generator: svgGenerator.generateSeoApproachImage },
  { name: 'competenze-hero.svg', generator: svgGenerator.generateCompetenzeHeroImage },
  { name: 'holistic-seo.svg', generator: svgGenerator.generateHolisticSeoImage },
  { name: 'contact-illustration.svg', generator: svgGenerator.generateContactImage },
  // Aggiungi altre immagini specifiche per le competenze
  { name: 'architettura-informazione.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <rect x="100" y="100" width="200" height="50" rx="5" fill="#1E3A8A" />
      <rect x="150" y="170" width="100" height="30" rx="5" fill="#3B82F6" />
      <rect x="120" y="220" width="160" height="30" rx="5" fill="#3B82F6" />
      <rect x="180" y="270" width="40" height="30" rx="5" fill="#F97316" />
      <path d="M150,150 L150,270" stroke="#4B5563" stroke-width="2" stroke-linecap="round" />
      <path d="M250,150 L250,220" stroke="#4B5563" stroke-width="2" stroke-linecap="round" />
      <path d="M200,170 L200,270" stroke="#4B5563" stroke-width="2" stroke-linecap="round" />
    `);
  }},
  { name: 'keyword-analysis.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <rect x="50" y="100" width="300" height="200" rx="5" fill="white" stroke="#1E3A8A" stroke-width="2" />
      <path d="M80,150 L320,150" stroke="#3B82F6" stroke-width="2" />
      <path d="M80,200 L320,200" stroke="#3B82F6" stroke-width="2" />
      <path d="M80,250 L320,250" stroke="#3B82F6" stroke-width="2" />
      <circle cx="100" cy="175" r="10" fill="#F97316" />
      <circle cx="150" cy="175" r="15" fill="#F97316" />
      <circle cx="210" cy="175" r="20" fill="#F97316" />
      <circle cx="280" cy="175" r="25" fill="#F97316" />
      <circle cx="120" cy="225" r="15" fill="#F97316" />
      <circle cx="190" cy="225" r="10" fill="#F97316" />
      <circle cx="250" cy="225" r="20" fill="#F97316" />
    `);
  }},
  { name: 'technical-seo.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <rect x="100" y="100" width="200" height="200" rx="10" fill="white" stroke="#1E3A8A" stroke-width="2" />
      <text x="120" y="140" font-family="monospace" font-size="14" fill="#1E3A8A">&lt;html&gt;</text>
      <text x="140" y="170" font-family="monospace" font-size="14" fill="#1E3A8A">&lt;head&gt;</text>
      <text x="160" y="200" font-family="monospace" font-size="14" fill="#3B82F6">&lt;title&gt;SEO&lt;/title&gt;</text>
      <text x="160" y="230" font-family="monospace" font-size="14" fill="#F97316">&lt;meta&gt;</text>
      <text x="140" y="260" font-family="monospace" font-size="14" fill="#1E3A8A">&lt;/head&gt;</text>
      <text x="120" y="290" font-family="monospace" font-size="14" fill="#1E3A8A">&lt;/html&gt;</text>
    `);
  }},
  { name: 'data-analysis.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <rect x="50" y="250" width="50" height="100" fill="#1E3A8A" />
      <rect x="120" y="200" width="50" height="150" fill="#3B82F6" />
      <rect x="190" y="150" width="50" height="200" fill="#1E3A8A" />
      <rect x="260" y="100" width="50" height="250" fill="#F97316" />
      <path d="M50,350 L350,350" stroke="#4B5563" stroke-width="2" />
      <path d="M50,100 L50,350" stroke="#4B5563" stroke-width="2" />
    `);
  }},
  { name: 'ecommerce-optimization.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <rect x="100" y="100" width="200" height="200" rx="10" fill="white" stroke="#1E3A8A" stroke-width="2" />
      <rect x="120" y="120" width="160" height="100" rx="5" fill="#3B82F6" opacity="0.2" />
      <circle cx="200" cy="250" r="30" fill="#F97316" />
      <path d="M185,250 L215,250" stroke="white" stroke-width="3" />
      <path d="M200,235 L200,265" stroke="white" stroke-width="3" />
      <path d="M120,180 L280,180" stroke="#1E3A8A" stroke-width="2" />
      <path d="M120,200 L240,200" stroke="#1E3A8A" stroke-width="2" />
    `);
  }},
  { name: 'local-seo.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <circle cx="200" cy="200" r="100" fill="#3B82F6" opacity="0.2" />
      <circle cx="200" cy="200" r="50" fill="#1E3A8A" opacity="0.3" />
      <path d="M200,150 L200,250" stroke="#F97316" stroke-width="8" />
      <circle cx="200" cy="150" r="20" fill="#F97316" />
      <path d="M150,200 C150,150 250,150 250,200 C250,250 200,300 200,300" stroke="#1E3A8A" stroke-width="3" fill="none" />
    `);
  }},
  { name: 'digital-pr.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <circle cx="100" cy="150" r="30" fill="#1E3A8A" />
      <circle cx="200" cy="150" r="30" fill="#3B82F6" />
      <circle cx="300" cy="150" r="30" fill="#F97316" />
      <circle cx="150" cy="250" r="30" fill="#3B82F6" />
      <circle cx="250" cy="250" r="30" fill="#1E3A8A" />
      <path d="M100,150 L200,150" stroke="#4B5563" stroke-width="2" />
      <path d="M200,150 L300,150" stroke="#4B5563" stroke-width="2" />
      <path d="M100,150 L150,250" stroke="#4B5563" stroke-width="2" />
      <path d="M200,150 L150,250" stroke="#4B5563" stroke-width="2" />
      <path d="M200,150 L250,250" stroke="#4B5563" stroke-width="2" />
      <path d="M300,150 L250,250" stroke="#4B5563" stroke-width="2" />
    `);
  }},
  { name: 'integrated-approach.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <circle cx="200" cy="200" r="100" fill="#1E3A8A" opacity="0.1" />
      <circle cx="200" cy="200" r="80" fill="#1E3A8A" opacity="0.2" />
      <path d="M150,150 L250,150 L250,250 L150,250 Z" fill="none" stroke="#1E3A8A" stroke-width="3" />
      <path d="M150,150 L250,250" stroke="#F97316" stroke-width="3" />
      <path d="M150,250 L250,150" stroke="#F97316" stroke-width="3" />
      <circle cx="200" cy="200" r="20" fill="#3B82F6" />
    `);
  }},
  { name: 'seo-evolution.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <path d="M50,350 L350,350" stroke="#4B5563" stroke-width="2" />
      <path d="M50,50 L50,350" stroke="#4B5563" stroke-width="2" />
      <path d="M50,300 L100,280 L150,290 L200,250 L250,200 L300,150 L350,100" stroke="#1E3A8A" stroke-width="3" fill="none" />
      <circle cx="100" cy="280" r="5" fill="#1E3A8A" />
      <circle cx="150" cy="290" r="5" fill="#1E3A8A" />
      <circle cx="200" cy="250" r="5" fill="#1E3A8A" />
      <circle cx="250" cy="200" r="5" fill="#1E3A8A" />
      <circle cx="300" cy="150" r="5" fill="#1E3A8A" />
      <circle cx="350" cy="100" r="5" fill="#F97316" />
    `);
  }},
  { name: 'user-centered.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <circle cx="200" cy="200" r="100" fill="#1E3A8A" opacity="0.1" />
      <circle cx="200" cy="150" r="40" fill="#F97316" />
      <circle cx="180" cy="140" r="8" fill="white" />
      <circle cx="220" cy="140" r="8" fill="white" />
      <path d="M180,170 Q200,190 220,170" stroke="white" stroke-width="3" fill="none" />
      <path d="M150,200 L250,200" stroke="#1E3A8A" stroke-width="3" />
      <path d="M150,230 L250,230" stroke="#1E3A8A" stroke-width="3" />
      <path d="M150,260 L250,260" stroke="#1E3A8A" stroke-width="3" />
    `);
  }},
  { name: 'google-role.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <rect x="100" y="150" width="200" height="50" rx="25" fill="#F97316" />
      <rect x="100" y="210" width="200" height="40" rx="5" fill="white" stroke="#1E3A8A" stroke-width="2" />
      <circle cx="130" cy="175" r="15" fill="#3B82F6" />
      <circle cx="170" cy="175" r="15" fill="#1E3A8A" />
      <circle cx="210" cy="175" r="15" fill="#3B82F6" />
      <circle cx="250" cy="175" r="15" fill="#F97316" />
      <path d="M120,230 L280,230" stroke="#1E3A8A" stroke-width="2" />
    `);
  }},
  { name: 'seo-ecosystem.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <circle cx="200" cy="200" r="100" fill="#1E3A8A" opacity="0.1" />
      <circle cx="200" cy="200" r="30" fill="#1E3A8A" />
      <text x="200" y="205" font-family="Arial" font-size="12" fill="white" text-anchor="middle">SEO</text>
      <circle cx="120" cy="150" r="25" fill="#3B82F6" />
      <text x="120" y="155" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Content</text>
      <circle cx="280" cy="150" r="25" fill="#3B82F6" />
      <text x="280" y="155" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Social</text>
      <circle cx="120" cy="250" r="25" fill="#3B82F6" />
      <text x="120" y="255" font-family="Arial" font-size="10" fill="white" text-anchor="middle">UX</text>
      <circle cx="280" cy="250" r="25" fill="#3B82F6" />
      <text x="280" y="255" font-family="Arial" font-size="10" fill="white" text-anchor="middle">PPC</text>
      <path d="M200,200 L120,150" stroke="#F97316" stroke-width="2" />
      <path d="M200,200 L280,150" stroke="#F97316" stroke-width="2" />
      <path d="M200,200 L120,250" stroke="#F97316" stroke-width="2" />
      <path d="M200,200 L280,250" stroke="#F97316" stroke-width="2" />
    `);
  }},
  { name: 'my-approach.svg', generator: () => {
    return svgGenerator.generateSVG(400, 400, `
      <rect width="400" height="400" fill="#F3F4F6" />
      <circle cx="200" cy="200" r="100" fill="#1E3A8A" opacity="0.1" />
      <circle cx="200" cy="200" r="80" fill="#1E3A8A" opacity="0.2" />
      <circle cx="200" cy="200" r="60" fill="#1E3A8A" opacity="0.3" />
      <path d="M160,160 L240,160 L240,240 L160,240 Z" fill="none" stroke="#F97316" stroke-width="3" />
      <path d="M180,180 L220,180" stroke="#3B82F6" stroke-width="3" />
      <path d="M180,200 L220,200" stroke="#3B82F6" stroke-width="3" />
      <path d="M180,220 L220,220" stroke="#3B82F6" stroke-width="3" />
    `);
  }},
  { name: 'favicon.png', generator: () => {
    return svgGenerator.generateSVG(32, 32, `
      <rect width="32" height="32" fill="#1E3A8A" />
      <text x="16" y="22" font-family="Arial" font-size="20" font-weight="bold" fill="white" text-anchor="middle">D</text>
    `);
  }}
];

// Salva ogni immagine
images.forEach(image => {
  const svgContent = image.generator();
  const filePath = path.join(imagesDir, image.name);
  fs.writeFileSync(filePath, svgContent);
  console.log(`Immagine generata: ${image.name}`);
});

console.log('Tutte le immagini sono state generate con successo!');
