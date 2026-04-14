export function Card({ children, className = '', variant = 'default', ...props }) {
  const variants = {
    default: 'border-border bg-surface',
    primary: 'bg-primary-muted border-transparent',
    danger: 'bg-danger-muted border-transparent',
    muted: 'bg-surface-muted border-transparent',
    highlight: 'bg-surface-highlight border-transparent',
  };

  return (
    <div
      className={`border rounded-lg ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, className = '' }) {
  return (
    <div className={`mb-2 ${className}`}>
      <h3 className="font-poppins font-semibold text-heading-md text-primary leading-normal">
        {title}
      </h3>
      {subtitle && (
        <p className="font-poppins font-light text-body-sm text-text-secondary leading-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
