const riskVariants = {
  critical: 'bg-danger-light text-danger',
  high: 'bg-warning-light text-warning',
  medium: 'bg-warning-pale text-warning-subtle',
  low: 'bg-success-muted text-success',
};

const riskLabels = {
  critical: 'Critical',
  high: 'High',
  medium: 'Medium',
  low: 'Low Risk',
};

export function RiskBadge({ level, className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md text-body-xs font-prompt whitespace-nowrap ${riskVariants[level]} ${className}`}
    >
      {riskLabels[level]}
    </span>
  );
}

export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-primary-muted text-primary',
    success: 'bg-success-muted text-success',
    danger: 'bg-danger-muted text-danger',
    warning: 'bg-warning-light text-warning',
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md text-body-xs font-prompt ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
