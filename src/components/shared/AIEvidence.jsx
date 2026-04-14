export function AIEvidence({ children, className = '' }) {
  return (
    <p className={`font-poppins text-body-xxxs text-primary leading-relaxed ${className}`}>
      <span className="font-bold">AI Evidence:</span>{' '}
      <span className="font-light">{children}</span>
    </p>
  );
}

export function AIContext({ children, className = '' }) {
  return (
    <div className={`font-poppins text-body-xxs text-primary ${className}`}>
      <span className="font-semibold">AI Context:</span>{' '}
      <span className="font-medium text-body-xxxs">{children}</span>
    </div>
  );
}

export function AIRecommendation({ title, children, className = '' }) {
  return (
    <div className={`${className}`}>
      <h4 className="font-poppins font-semibold text-heading-md text-primary mb-1">
        {title || 'AI Recommendation'}
      </h4>
      <p className="font-poppins text-body-md text-text-secondary leading-normal">
        {children}
      </p>
    </div>
  );
}

export function AIInsightList({ items, className = '' }) {
  return (
    <ul className={`list-disc ml-3 space-y-0.5 ${className}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className="font-poppins text-body-xs text-text-secondary leading-normal"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
