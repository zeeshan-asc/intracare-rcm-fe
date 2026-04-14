import { ChevronUp } from 'lucide-react';
import { Card, CardHeader } from '../shared';

const riskItems = [
  {
    id: 1,
    title: '$1.2M at risk of aging deterioration',
    claims: '234 claims',
    overdue: '120+ days overdue',
    payer: 'UnitedHealth Group',
    location: 'Santan',
    driver: 'Single large payer',
    concentration: 'Single large payer',
    recommendedAction: 'Escalate to VP of Revenue; Consider stopping submissions',
  },
  {
    id: 2,
    title: '$580.0K at risk of aging deterioration',
    claims: '89 claims',
    overdue: '90+ days overdue',
    payer: 'Multiple',
    location: 'Cornerstone',
    driver: 'Clinic-specific denial pattern',
    concentration: 'Clinic-specific denial pattern',
    recommendedAction: 'Clinical review of coding; Update billing guidelines',
  },
  {
    id: 3,
    title: '$420.0K at risk of aging deterioration',
    claims: '156 claims',
    overdue: '60+ days overdue',
    payer: 'Aetna',
    location: 'Gilbert & Mesa',
    driver: 'Underpayment pattern',
    concentration: 'Underpayment pattern',
    recommendedAction: 'Schedule payer meeting to discuss contract terms',
  },
];

function RiskCard({ item }) {
  return (
    <div className="border border-surface-border rounded overflow-hidden">
      <div className="bg-[#f9f9f9] border-b border-surface-border p-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="font-poppins font-semibold text-sm text-text-primary">
              {item.title}
            </p>
            <p className="font-prompt font-bold text-sm text-primary">
              {item.claims}
              <span className="font-poppins font-normal text-xs text-danger ml-2">
                {item.overdue}
              </span>
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="font-poppins text-xs text-primary uppercase">Concentration</p>
            <span className="inline-block bg-surface-light rounded px-2 py-0.5 mt-0.5">
              <p className="font-poppins text-xs text-primary-accent">
                {item.concentration}
              </p>
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-6 mt-3">
          <div>
            <p className="font-poppins text-xs text-text-secondary/70 uppercase">Payer</p>
            <p className="font-poppins font-semibold text-xs text-text-primary">{item.payer}</p>
          </div>
          <div>
            <p className="font-poppins text-xs text-text-secondary/70 uppercase">Clinic/Location</p>
            <p className="font-poppins font-semibold text-xs text-text-primary">{item.location}</p>
          </div>
          <div>
            <p className="font-poppins text-xs text-text-secondary/70 uppercase">Driver</p>
            <p className="font-poppins font-semibold text-xs text-warning-subtle">{item.driver}</p>
          </div>
        </div>
      </div>
      
      <div className="p-3">
        <div className="bg-[#f9f9f9] border border-surface-border rounded p-2 mb-3">
          <p className="font-poppins text-xs text-primary uppercase">Recommended Action</p>
          <p className="font-poppins text-xs text-text-secondary mt-0.5">{item.recommendedAction}</p>
        </div>
        
        <div className="flex gap-2">
          <button className="bg-danger/10 border border-danger text-danger font-poppins font-semibold text-xs py-2 px-4 rounded shadow-sm hover:bg-danger hover:text-white transition-colors cursor-pointer">
            Escalate to VP
          </button>
          <button className="bg-warning-subtle/10 border border-warning-subtle text-warning-subtle font-poppins font-semibold text-xs py-2 px-4 rounded shadow-sm hover:bg-warning-subtle hover:text-white transition-colors cursor-pointer">
            Prioritize
          </button>
          <button className="bg-primary-muted border border-primary text-primary font-poppins font-semibold text-xs py-2 px-4 rounded shadow-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export function ARRiskEscalationEngine() {
  return (
    <Card className="p-4">
      <CardHeader
        title={<span className="text-danger-accent">AR Risk Escalation Engine</span>}
        subtitle="Future risks & concentration drivers that require immediate escalation"
      />
      
      <div className="space-y-3 mt-3">
        {riskItems.map((item) => (
          <RiskCard key={item.id} item={item} />
        ))}
      </div>
    </Card>
  );
}
