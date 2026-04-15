const effortLevels = {
  low: { bg: 'bg-success-muted', text: 'text-success' },
  medium: { bg: 'bg-warning-light', text: 'text-warning' },
  high: { bg: 'bg-danger-light', text: 'text-danger' },
};

export function ActionItem({
  title,
  subtitle,
  successRate,
  effort = 'low',
  timeline,
  expectedRecovery,
  borderColor = 'border-success',
}) {
  return (
    <div className={`bg-[#f9f9f9] border-l-2 ${borderColor} rounded p-3`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-poppins font-semibold text-sm text-text-primary">
            {title}
          </p>
          <p className="font-poppins text-xs text-text-secondary mt-0.5">
            {subtitle}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="font-poppins font-semibold text-sm text-success">
            {expectedRecovery}
          </p>
          <p className="font-poppins text-xs text-text-secondary">
            Expected Recovery
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap items-end gap-3 mt-3">
        <div className="min-w-[84px]">
          <p className="font-poppins text-xs text-text-secondary/70 uppercase">Success Rate</p>
          <p className="font-poppins font-semibold text-xs text-success">{successRate}%</p>
        </div>
        <div className="min-w-[76px]">
          <p className="font-poppins text-xs text-text-secondary/70 uppercase">Effort</p>
          <span className={`inline-block px-2 py-0.5 rounded text-xs font-prompt ${effortLevels[effort].bg} ${effortLevels[effort].text}`}>
            {effort === 'low' ? 'Low' : effort === 'medium' ? 'Medium' : 'High'}
          </span>
        </div>
        <div className="min-w-[86px]">
          <p className="font-poppins text-xs text-text-secondary/70 uppercase">Timeline</p>
          <p className="font-poppins font-semibold text-xs text-warning-subtle">{timeline}</p>
        </div>
        <div className="flex w-full sm:w-auto sm:ml-auto gap-2">
          <button className="flex-1 sm:flex-none bg-success/10 border border-success text-success font-poppins font-semibold text-xs py-1.5 px-4 sm:px-6 rounded shadow-sm hover:bg-success hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            Execute Now
          </button>
          <button className="flex-1 sm:flex-none bg-surface-muted border border-border text-border font-poppins font-semibold text-xs py-1.5 px-4 sm:px-6 rounded shadow-sm hover:bg-surface-light transition-colors cursor-pointer whitespace-nowrap">
            Snooze
          </button>
        </div>
      </div>
    </div>
  );
}
