const toneStyles = {
  critical: {
    background: 'rgba(255, 122, 88, 0.41)',
    color: '#820000',
    minWidth: '33px',
  },
  high: {
    background: 'rgba(255, 166, 0, 0.43)',
    color: '#FF8000',
    minWidth: '33px',
  },
  medium: {
    background: 'rgba(255, 248, 36, 0.54)',
    color: '#FFC300',
    minWidth: '33px',
  },
  low: {
    background: 'rgba(15, 124, 255, 0.21)',
    color: '#084B86',
    minWidth: '33px',
  },
  success: {
    background: 'rgba(13, 186, 13, 0.21)',
    color: '#006200',
    minWidth: '33px',
  },
  neutral: {
    background: 'rgba(184, 184, 184, 0.36)',
    color: '#5F5F5F',
    minWidth: '33px',
  },
};

const riskLabels = {
  critical: 'Critical',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
  success: 'Normal',
};

export function FigmaBadge({ tone = 'critical', label, className = '' }) {
  const badgeTone = toneStyles[tone] || toneStyles.neutral;
  const badgeLabel = label || riskLabels[tone] || tone;

  return (
    <span
      className={`inline-flex items-center justify-center rounded-md font-prompt leading-none ${className}`}
      style={{
        height: '20px',
        minWidth: '52px',
        borderRadius: '40px',
        background: badgeTone.background,
        color: badgeTone.color,
        fontSize: '12px',
        fontWeight: 500,
        paddingLeft: '10px',
        paddingRight: '12px',
      }}
    >
      {badgeLabel}
    </span>
  );
}
