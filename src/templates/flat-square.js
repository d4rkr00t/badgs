export default function flatTemplate({ widthA, widthB, color, subject, status }) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="${widthA + widthB}" height="20">
    <g shape-rendering="crispEdges">
      <rect width="${widthA}" height="20" fill="#555"/>
      <rect x="${widthA}" width="${widthB}" height="20" fill="${color || '#555'}"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${widthA / 2}" y="14">${subject}</text>
      <text x="${widthA + (widthB / 2) - 1}" y="14">${status}</text>
    </g>
  </svg>
  `;
}
