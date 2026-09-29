import React from 'react';

// SVG strings for Three.js texture generation
export const techSvgStrings = {
  Python: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill="#3776AB" d="M49.4 6c-17.5 0-16.4 7.6-16.4 7.6l.1 7.9h16.7v2.4H26.5S10 22.1 10 39.7c0 17.6 14.4 17 14.4 17h8.6v-12c0-9.7 8.3-9.5 8.3-9.5h16.7s8.1.1 8.1-7.8V13.8S67.6 6 49.4 6zm-8.8 5.2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"/>
    <path fill="#FFD43B" d="M50.6 94c17.5 0 16.4-7.6 16.4-7.6l-.1-7.9H50.2v-2.4h23.3s16.5 1.8 16.5-15.8c0-17.6-14.4-17-14.4-17h-8.6v12c0 9.7-8.3 9.5-8.3 9.5H42s-8.1-.1-8.1 7.8v14.1S23.4 94 50.6 94zm8.8-5.2c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
  </svg>`,

  Django: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="90" height="90" x="5" y="5" rx="18" fill="#0C4B33"/>
    <text x="32" y="66" fill="#FFFFFF" font-family="'Inter', sans-serif" font-weight="800" font-size="52">dj</text>
  </svg>`,

  DRF: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="90" height="90" x="5" y="5" rx="18" fill="#B91C1C"/>
    <text x="50" y="58" fill="#FFFFFF" font-family="'Inter', sans-serif" font-weight="900" font-size="32" text-anchor="middle">DRF</text>
  </svg>`,

  React: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="8" fill="#61DAFB"/>
    <g fill="none" stroke="#61DAFB" stroke-width="5">
      <ellipse cx="50" cy="50" rx="38" ry="14"/>
      <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(60 50 50)"/>
      <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(120 50 50)"/>
    </g>
  </svg>`,

  PostgreSQL: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill="#336791" d="M50 8C27.9 8 10 25.9 10 48c0 14 7.2 26.3 18.2 33.5.5-2.8 1.4-6.6 1.4-6.6-4.5-4.7-7.3-11.1-7.3-18.2 0-14.4 11.6-26 26-26s26 11.6 26 26c0 7.1-2.8 13.5-7.3 18.2 0 0 .9 3.8 1.4 6.6C79.8 74.3 87 62 87 48 87 25.9 69.1 8 50 8z"/>
    <circle cx="50" cy="46" r="16" fill="#336791"/>
    <path fill="#FFFFFF" d="M46 36h8v20h-8zM36 46h20v8H36z"/>
  </svg>`,

  JavaScript: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="90" height="90" x="5" y="5" rx="14" fill="#F7DF1E"/>
    <text x="78" y="78" fill="#000000" font-family="'Inter', sans-serif" font-weight="900" font-size="44" text-anchor="end">JS</text>
  </svg>`,

  Git: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill="#F05032" d="M92.7 45.4L54.6 7.3c-2.4-2.4-6.3-2.4-8.7 0L37 16.2l11 11c2.5-.8 5.4 0 7.3 1.9 1.9 1.9 2.7 4.8 1.9 7.3l10.6 10.6c2.5-.8 5.4 0 7.3 1.9 2.5 2.5 2.5 6.5 0 9-2.5 2.5-6.5 2.5-9 0-2-2-2.6-4.9-1.8-7.3L53.7 40.1v23.2c.6.3 1.2.8 1.7 1.3 2.5 2.5 2.5 6.5 0 9-2.5 2.5-6.5 2.5-9 0-2.5-2.5-2.5-6.5 0-9 .8-.8 1.8-1.3 2.9-1.5V39.6c-1.1-.3-2.1-.8-2.9-1.6-2-2-2.6-4.9-1.8-7.3l-11-11L7.3 45.4c-2.4 2.4-2.4 6.3 0 8.7l38.1 38.1c2.4 2.4 6.3 2.4 8.7 0l38.6-38.1c2.4-2.4 2.4-6.3 0-8.7z"/>
  </svg>`,

  Docker: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill="#2496ED" d="M96 46c-2.8 0-6.1 1.6-8.2 3.6-3.8-2.8-8.8-4.1-14.3-3.6-1.5-3.8-4.5-8.3-9-11.4l-3 3.6c4.2 2.8 6.7 7.2 7.7 10.8-2.7-.4-5.5-.3-8.3.3V34H48v12h-9V34h-13v12H15v12h-9v13c0 14.4 11.6 23 26 23h38c20 0 28-12 28-26 0-7.3-3.2-13.8-8.6-18.4C92.4 47.4 94.4 46 96 46z"/>
    <rect width="11" height="10" x="26" y="21" fill="#2496ED" rx="1"/>
    <rect width="11" height="10" x="40" y="21" fill="#2496ED" rx="1"/>
    <rect width="11" height="10" x="54" y="21" fill="#2496ED" rx="1"/>
  </svg>`,

  Angular: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill="#DD0031" d="M50 6L9 20l6 54 35 20 35-20 6-54L50 6z"/>
    <path fill="#C3002F" d="M50 6v88l35-20 6-54L50 6z"/>
    <path fill="#FFFFFF" d="M50 20L27 72h10l4.6-11.5h16.8L63 72h10L50 20zm5.6 42H44.4L50 34.6 55.6 62z"/>
  </svg>`,

  HTML5: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill="#E34F26" d="M12 8l7 78 31 9 31-9 7-78H12z"/>
    <path fill="#EF652A" d="M50 14v75.4l24.4-6.8 6.1-68.6H50z"/>
    <path fill="#FFFFFF" d="M50 36.5H33.5l-1.1-12.6H50V14.2H20.5l3.4 37.1H50v-14.8zm0 29.5l-.2.1-11.3-3-.7-8.3H26.2l1.4 16.5 22.4 6.2v-11.5z"/>
    <path fill="#ECECEC" d="M50 36.5v14.8h15.4l-1.5 16.3-13.9 3.8v11.5l22.4-6.2 2.2-25.1H50v-15.3zM50 14.2v9.7h28.1l.8-9.7H50z"/>
  </svg>`,

  CSS3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill="#1572B6" d="M12 8l7 78 31 9 31-9 7-78H12z"/>
    <path fill="#33A9DC" d="M50 14v75.4l24.4-6.8 6.1-68.6H50z"/>
    <path fill="#FFFFFF" d="M50 36.5H33.5l-1.1-12.6H50V14.2H20.5l3.4 37.1H64l-1.4 15.6-12.6 3.4v11.5l22.4-6.2 2.3-25.1H50v-14.8z"/>
    <path fill="#ECECEC" d="M50 14.2v9.7h28.1l.8-9.7H50z"/>
  </svg>`,

  Flask: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="90" height="90" x="5" y="5" rx="18" fill="#1C1C1C"/>
    <path fill="#FFFFFF" d="M58 24v12.2l17.4 29c3 5 3.3 11.1.8 16.3-2.5 5.2-7.7 8.5-13.5 8.5H37.3c-5.8 0-11-3.3-13.5-8.5-2.5-5.2-2.2-11.3.8-16.3L42 36.2V24h-4v-6h24v6h-4zm-10 18L32.2 68.4c-1.3 2.1-1.4 4.7-.3 6.9 1 2.2 3.2 3.7 5.7 3.7h25.4c2.4 0 4.6-1.4 5.7-3.7 1.1-2.2 1-4.8-.3-6.9L52 42H48z"/>
  </svg>`,

  SQL: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="24" rx="36" ry="14" fill="#2B5B84"/>
    <path fill="#2B5B84" d="M14 24v24c0 7.7 16.1 14 36 14s36-6.3 36-14V24H14z"/>
    <ellipse cx="50" cy="48" rx="36" ry="14" fill="#3B719F"/>
    <path fill="#2B5B84" d="M14 48v24c0 7.7 16.1 14 36 14s36-6.3 36-14V48H14z"/>
    <ellipse cx="50" cy="72" rx="36" ry="14" fill="#4B87BA"/>
  </svg>`,

  RESTAPIs: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="90" height="90" x="5" y="5" rx="18" fill="#0284C7"/>
    <text x="50" y="58" fill="#FFFFFF" font-family="'Inter', sans-serif" font-weight="900" font-size="28" text-anchor="middle">REST</text>
  </svg>`
};

// React component to render tech SVG icon inline
export function TechIcon({ name, size = 32, className = '' }) {
  const svgContent = techSvgStrings[name] || techSvgStrings[name.replace(/\s+/g, '')];
  if (!svgContent) {
    return null;
  }
  return (
    <div
      className={`tech-icon ${className}`}
      style={{ width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
