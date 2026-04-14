import { ChevronDown } from 'lucide-react';

const riskColors = {
  low: { bg: 'bg-success-muted', text: 'text-success', border: 'border-success' },
  medium: { bg: 'bg-warning-light', text: 'text-warning', border: 'border-warning' },
  high: { bg: 'bg-danger-light', text: 'text-danger-dark', border: 'border-danger' },
};

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
      
      <div className="flex items-center gap-4 mt-3">
        <div>
          <p className="font-poppins text-xs text-text-secondary/70 uppercase">Success Rate</p>
          <p className="font-poppins font-semibold text-xs text-success">{successRate}%</p>
        </div>
        <div>
          <p className="font-poppins text-xs text-text-secondary/70 uppercase">Effort</p>
          <span className={`inline-block px-2 py-0.5 rounded text-xs font-prompt ${effortLevels[effort].bg} ${effortLevels[effort].text}`}>
            {effort === 'low' ? 'Low' : effort === 'medium' ? 'Medium' : 'High'}
          </span>
        </div>
        <div>
          <p className="font-poppins text-xs text-text-secondary/70 uppercase">Timeline</p>
          <p className="font-poppins font-semibold text-xs text-warning-subtle">{timeline}</p>
        </div>
        <div className="flex-1 flex justify-end gap-2">
          <button className="bg-success/10 border border-success text-success font-poppins font-semibold text-xs py-1.5 px-12 rounded shadow-sm hover:bg-success hover:text-white transition-colors cursor-pointer">
            Execute Now
          </button>
          <button className="bg-surface-muted border border-border text-border font-poppins font-semibold text-xs py-1.5 px-12 rounded shadow-sm hover:bg-surface-light transition-colors cursor-pointer">
            Snooze
          </button>
        </div>
      </div>
    </div>
  );
}
