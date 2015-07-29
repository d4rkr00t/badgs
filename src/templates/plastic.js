export default function pasticTemplate({ widthA, widthB, color, subject, status }) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="${widthA + widthB}" height="18">
    <linearGradient id="smooth" x2="0" y2="100%">
      <stop offset="0"  stop-color="#fff" stop-opacity=".7"/>
      <stop offset=".1" stop-color="#aaa" stop-opacity=".1"/>
      <stop offset=".9" stop-color="#000" stop-opacity=".3"/>
      <stop offset="1"  stop-color="#000" stop-opacity=".5"/>
    </linearGradient>

    <mask id="round">
      <rect width="${widthA + widthB}" height="18" rx="4" fill="#fff"/>
    </mask>

    <g mask="url(#round)">
      <rect width="${widthA}" height="18" fill="#555"/>
      <rect x="${widthA}" width="${widthB}" height="18" fill="${color || '#555'}"/>
      <rect width="${widthA + widthB}" height="18" fill="url(#smooth)"/>
    </g>

    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${widthA / 2}" y="14" fill="#010101" fill-opacity=".3">${subject}</text>
      <text x="${widthA / 2}" y="13">${subject}</text>
      <text x="${widthA + (widthB / 2)}" y="14" fill="#010101" fill-opacity=".3">${status}</text>
      <text x="${widthA + (widthB / 2)}" y="13">${status}</text>
    </g>
  </svg>
  `;
}
