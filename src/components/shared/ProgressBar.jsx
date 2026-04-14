export function ProgressBar({
  value,
  maxValue = 100,
  variant = 'default',
  showLabel = false,
  label,
  className = '',
}) {
  const percentage = Math.min((value / maxValue) * 100, 100);

  const variants = {
    default: 'bg-gradient-progress',
    success: 'bg-gradient-success',
    danger: 'bg-gradient-danger',
    primary: 'bg-primary-accent',
    warning: 'bg-danger-accent',
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && label && (
        <div className="flex justify-between mb-1">
          <span className="font-prompt text-body-xs text-text-secondary">{label}</span>
          <span className="font-prompt text-body-xs text-text-secondary">{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className="h-3 bg-surface-light rounded-xl shadow-md overflow-hidden">
        <div
          className={`h-full rounded-xl transition-all duration-500 ${variants[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export function VerticalProgressBar({
  value,
  maxValue = 100,
  height = '100%',
  variant = 'default',
  className = '',
}) {
  const percentage = Math.min((value / maxValue) * 100, 100);

  const variants = {
    default: 'bg-primary',
    muted: 'bg-surface-border',
  };

  return (
    <div
      className={`w-[3px] rounded-xl bg-surface-border ${className}`}
      style={{ height }}
    >
      <div
        className={`w-full rounded-xl transition-all duration-500 ${variants[variant]}`}
        style={{ height: `${percentage}%` }}
      />
    </div>
  );
}

export function ComparisonBar({
  baseline,
  current,
  maxValue,
  className = '',
}) {
  const baselinePercentage = Math.min((baseline / maxValue) * 100, 100);
  const currentPercentage = Math.min((current / maxValue) * 100, 100);
  const isPositive = current >= baseline;

  return (
    <div className={`relative h-2 ${className}`}>
      <div className="absolute inset-0 bg-border rounded-pill" />
      <div
        className={`absolute top-0 h-full rounded-pill ${isPositive ? 'bg-danger-accent' : 'bg-primary-accent'}`}
        style={{ width: `${currentPercentage}%` }}
      />
      <div
        className="absolute top-0 h-full w-0.5 bg-text-primary"
        style={{ left: `${baselinePercentage}%` }}
      />
    </div>
  );
}
