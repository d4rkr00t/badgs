export default function flatTemplate({ widthA, widthB, color, textA, textB }) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${widthA + widthB}" height="20">
    <linearGradient id="smooth" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>

    <mask id="round">
      <rect width="${widthA + widthB}" height="20" rx="3" fill="#fff"/>
    </mask>

    <g mask="url(#round)">
      <rect width="${widthA}" height="20" fill="#555"/>
      <rect x="${widthA}" width="${widthB}" height="20" fill="${color || '#555'}"/>
      <rect width="${widthA + widthB}" height="20" fill="url(#smooth)"/>
    </g>

    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${widthA / 2}" y="15" fill="#010101" fill-opacity=".3">${textA}</text>
      <text x="${widthA / 2}" y="14">${textA}</text>
      <text x="${widthA + widthB / 2 - 1}" y="15" fill="#010101" fill-opacity=".3">${textB}</text>
      <text x="${widthA + widthB / 2 - 1}" y="14">${textB}</text>
    </g>
  </svg>`;
}
