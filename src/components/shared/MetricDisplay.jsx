export function MetricDisplay({
  label,
  value,
  description,
  valueColor = 'text-primary',
  className = '',
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="font-prompt text-body-xs text-text-primary leading-relaxed">
        {label}
      </span>
      <span className={`font-prompt font-semibold text-body-md ${valueColor} leading-relaxed`}>
        {value}
      </span>
      {description && (
        <span className="font-prompt text-body-xs text-text-secondary leading-relaxed">
          {description}
        </span>
      )}
    </div>
  );
}

export function MetricRow({ items, className = '' }) {
  return (
    <div className={`flex items-start gap-6 ${className}`}>
      {items.map((item, index) => (
        <MetricDisplay
          key={index}
          label={item.label}
          value={item.value}
          description={item.description}
          valueColor={item.valueColor}
        />
      ))}
    </div>
  );
}
