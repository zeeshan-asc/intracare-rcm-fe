import { ChevronUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { RiskBadge } from '../shared';

export function OpportunityCard({ 
  title, 
  amount, 
  recoveryRate, 
  expectedRecovery, 
  action, 
  riskLevel = 'low',
  expanded = false,
  details = null 
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <div className="border border-surface-border rounded bg-surface">
      <div 
        className="bg-[#f9f9f9] border-b border-surface-border rounded-t p-3 cursor-pointer hover:bg-surface-highlight/30 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="font-poppins font-semibold text-sm text-text-primary truncate">
              {title}
            </p>
            <p className="font-prompt font-bold text-sm text-primary">
              {amount}
              <span className="font-poppins font-normal text-xs text-success ml-2">
                {recoveryRate}% recovery
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <RiskBadge level={riskLevel} />
            <button className="text-text-secondary hover:text-primary transition-colors">
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        </div>
        <div className="font-poppins text-xs text-text-secondary mt-1 space-y-0.5 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
          <p>
            <span className="text-text-secondary/70">Expected Recovery:</span>{' '}
            <span className="text-success">{expectedRecovery}</span>
          </p>
          <p>
            <span className="text-text-secondary/70">Action:</span>{' '}
            <span className="text-primary-accent">{action}</span>
          </p>
        </div>
      </div>
      
      {isExpanded && details && (
        <div className="p-3 space-y-3">
          {details.reason && (
            <div>
              <p className="font-poppins text-xs text-primary uppercase font-medium mb-1">
                WHY SYSTEM RECOMMENDS THIS
              </p>
              <p className="font-poppins text-xs text-text-secondary">
                {details.reason}
              </p>
            </div>
          )}
          
          {details.actionDetails && (
            <div className="bg-[#f9f9f9] border border-surface-border rounded p-2">
              <p className="font-poppins text-xs text-primary uppercase font-medium mb-2">
                ACTION DETAILS
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {details.actionDetails.target && (
                  <div>
                    <p className="font-poppins text-xs text-text-secondary/70 uppercase">Target</p>
                    <p className="font-poppins text-xs font-semibold text-text-primary">{details.actionDetails.target}</p>
                  </div>
                )}
                {details.actionDetails.method && (
                  <div>
                    <p className="font-poppins text-xs text-text-secondary/70 uppercase">Method</p>
                    <p className="font-poppins text-xs font-semibold text-text-primary">{details.actionDetails.method}</p>
                  </div>
                )}
                {details.actionDetails.timeline && (
                  <div>
                    <p className="font-poppins text-xs text-text-secondary/70 uppercase">Timeline</p>
                    <p className="font-poppins text-xs font-semibold text-warning-subtle">{details.actionDetails.timeline}</p>
                  </div>
                )}
                {details.actionDetails.claimsAffected && (
                  <div>
                    <p className="font-poppins text-xs text-text-secondary/70 uppercase">Claims Affected</p>
                    <p className="font-poppins text-xs font-semibold text-primary">{details.actionDetails.claimsAffected}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <button className="flex-1 bg-primary-muted border border-primary text-primary font-poppins font-semibold text-xs py-2 px-3 rounded shadow-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
              Execute Action
            </button>
            <button className="flex-1 bg-[#f9f9f9] border border-surface-border text-text-secondary font-poppins font-semibold text-xs py-2 px-3 rounded shadow-sm hover:bg-surface-light transition-colors cursor-pointer">
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
