import { ChevronUp } from 'lucide-react';
import { Card, CardHeader } from '../shared';

const claimTypes = {
  AUTH: { label: 'AUTH', color: 'bg-primary/40 text-primary' },
  CODING: { label: 'CODING', color: 'bg-primary/40 text-primary' },
  DOCUMENTATION: { label: 'DOCUMENTATION', color: 'bg-primary/40 text-primary' },
};

const claims = [
  {
    id: '125441',
    issue: 'Missing prior authorization code',
    type: 'AUTH',
    claimAmount: '$2.4K',
    confidence: '89%',
    reviewType: 'auth',
    denialRisk: 92,
    riskColor: 'text-danger-accent',
    recommendedAction: 'Escalate to VP of Revenue; Consider stopping submissions',
  },
  {
    id: '10583',
    issue: 'Incorrect modifier for procedure',
    type: 'CODING',
    claimAmount: '$1.9K',
    confidence: '85%',
    reviewType: 'coding',
    denialRisk: 87,
    riskColor: 'text-danger-accent',
    recommendedAction: 'Correct modifier from 59-76',
  },
  {
    id: '829510',
    issue: 'Insufficient medical documentation',
    type: 'DOCUMENTATION',
    claimAmount: '$3.2K',
    confidence: '81%',
    reviewType: 'documentation',
    denialRisk: 78,
    riskColor: 'text-warning-subtle',
    recommendedAction: 'Attach progress notes and lab results',
  },
  {
    id: '829190',
    issue: 'Service outside patient contract period',
    type: 'CODING',
    claimAmount: '$1.6K',
    confidence: '88%',
    reviewType: 'coding',
    denialRisk: 72,
    riskColor: 'text-warning',
    recommendedAction: 'Verify service date matches coverage dates',
  },
];

function ClaimCard({ claim }) {
  const typeConfig = claimTypes[claim.type];
  
  return (
    <div className="border border-surface-border rounded overflow-hidden">
      <div className="bg-[#f9f9f9] border-b border-surface-border p-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-poppins font-semibold text-sm text-text-primary">
                Claim ID: {claim.id}
              </p>
              <span className={`px-1.5 py-0.5 rounded text-xs font-prompt ${typeConfig.color}`}>
                {typeConfig.label}
              </span>
            </div>
            <p className="font-poppins text-xs text-primary-accent mt-0.5">
              {claim.issue}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className={`font-poppins font-bold text-xl ${claim.riskColor}`}>
              {claim.denialRisk}%
            </p>
            <p className="font-poppins text-xs text-text-secondary">
              Denial Risk
            </p>
          </div>
        </div>
        
      </div>
      
      <div className="p-3 flex items-center gap-3">
        <div className="flex-1 bg-surface border border-surface-border rounded p-3">
          <div className="flex items-center gap-10 md:gap-12">
            <div>
              <p className="font-poppins text-xs text-text-secondary/70 uppercase">Claim Amount</p>
              <p className="font-poppins font-semibold text-xs text-primary">{claim.claimAmount}</p>
            </div>
            <div>
              <p className="font-poppins text-xs text-text-secondary/70 uppercase">Confidence</p>
              <p className="font-poppins font-semibold text-xs text-primary-accent">{claim.confidence}</p>
            </div>
            <div>
              <p className="font-poppins text-xs text-text-secondary/70 uppercase">Review Type</p>
              <p className="font-poppins font-semibold text-xs text-text-primary">{claim.reviewType}</p>
            </div>
          </div>
          <div className="bg-surface-highlight rounded p-2 mt-3">
            <p className="font-poppins text-xs text-primary-accent uppercase">Recommended Action</p>
            <p className="font-poppins text-xs text-text-secondary mt-0.5">{claim.recommendedAction}</p>
          </div>
        </div>
        <button className="bg-success/10 border border-success text-success font-poppins font-semibold text-xs py-2 px-4 rounded shadow-sm hover:bg-success hover:text-white transition-colors cursor-pointer whitespace-nowrap">
          Fix & Submit
        </button>
        <button className="bg-primary-muted border border-primary text-primary font-poppins font-semibold text-xs py-2 px-4 rounded shadow-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
          Review
        </button>
      </div>
    </div>
  );
}

export function DenialPreventionSystem() {
  return (
    <Card className="p-4">
      <CardHeader
        title="Denial Prevention System"
        subtitle="Predict & prevent denials before submission - 2 high-risk claims detected"
      />
      
      <div className="bg-danger-muted rounded p-4 mt-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-poppins font-semibold text-sm text-text-primary">
              Claims Flagged for Review
            </p>
            <p className="font-poppins text-xs text-text-secondary mt-0.5">
              4 claims at risk of denial
            </p>
          </div>
          <div className="text-right">
            <p className="font-poppins font-bold text-xl text-danger-accent">
              $9.1K
            </p>
            <p className="font-poppins text-xs text-text-secondary">
              Total Revenue at Risk
            </p>
          </div>
        </div>
      </div>
      
      <div className="space-y-3 mt-4">
        {claims.map((claim) => (
          <ClaimCard key={claim.id} claim={claim} />
        ))}
      </div>
    </Card>
  );
}
