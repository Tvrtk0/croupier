export default function PokerChip({ value, color, size }: { value: number; color: string; size: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size}>
      {/* Outer Circle (Chip) */}
      <circle cx="100" cy="100" r="90" fill={color} stroke="#000000" strokeWidth="5" />

      {/* Inner Circle */}
      <circle cx="100" cy="100" r="68" fill="#ffffff" stroke="#000000" strokeWidth="5" />

      {/* Chip Segments */}
      <g fill="#ffffff" stroke="#000000" strokeWidth="3">
        <rect x="95" y="12" width="15" height="19" />
        <rect x="95" y="12" width="15" height="19" transform="rotate(36,100,100)" />
        <rect x="95" y="12" width="15" height="19" transform="rotate(72,100,100)" />
        <rect x="95" y="12" width="15" height="19" transform="rotate(108,100,100)" />
        <rect x="95" y="12" width="15" height="19" transform="rotate(144,100,100)" />
        <rect x="95" y="12" width="15" height="19" transform="rotate(180,100,100)" />
        <rect x="95" y="12" width="15" height="19" transform="rotate(216,100,100)" />
        <rect x="95" y="12" width="15" height="19" transform="rotate(252,100,100)" />
        <rect x="95" y="12" width="15" height="19" transform="rotate(288,100,100)" />
        <rect x="95" y="12" width="15" height="19" transform="rotate(324,100,100)" />
      </g>

      {/* Text Label */}
      <text
        x="100"
        y="96"
        strokeWidth="4"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, sans-serif"
        fontSize="100"
        fontWeight="bold"
        fill={color}
        stroke="#000000"
      >
        {value}
      </text>
    </svg>
  )
}
