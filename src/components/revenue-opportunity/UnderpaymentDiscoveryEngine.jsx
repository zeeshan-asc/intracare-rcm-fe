import { Card, CardHeader } from '../shared';

const summaryMetrics = [
  { label: 'Total Variance Identified', value: '$460', description: '3 claims affected' },
  { label: 'Recovery Potential', value: '$460', description: 'Via appeals' },
  { label: 'Success Rate', value: '62%', description: 'Historical appeal rate' },
];

const claims = [
  {
    id: '729519',
    payer: 'Anthem Blue Cross',
    pattern: 'E&M code underpayment (15% variance)',
    expected: '$450',
    received: '$380',
    shortfall: '$70',
    variance: '15.6%',
    action: 'Submit appeal with fee schedule attachment',
  },
  {
    id: '929623',
    payer: 'Blue Shield Blue Cross',
    pattern: 'E&M code underpayment (21% variance)',
    expected: '$680',
    received: '$540',
    shortfall: '$140',
    variance: '20.6%',
    action: 'Submit appeal with fee schedule attachment',
  },
  {
    id: '929623',
    payer: 'Cigna',
    pattern: 'Procedure code variance (21% below contract)',
    expected: '$1.2K',
    received: '$950',
    shortfall: '$250',
    variance: '20.8%',
    action: 'Contact payer for contract clarification',
  },
];

function ClaimCard({ claim }) {
  return (
    <div className="border border-surface-border rounded overflow-hidden">
      <div className="bg-[#f9f9f9] border-b border-surface-border p-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="font-poppins font-semibold text-sm text-text-primary">
              Claim ID: {claim.id}
            </p>
            <p className="font-prompt font-bold text-sm text-primary">
              {claim.payer}
              <span className="font-poppins font-normal text-xs text-danger-accent ml-2">
                Pattern: {claim.pattern}
              </span>
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="font-poppins font-bold text-xl text-danger-accent">
              -${claim.shortfall.replace('$', '')}
            </p>
            <p className="font-poppins text-xs text-text-secondary">
              ({claim.variance} variance)
            </p>
          </div>
        </div>
        
        <p className="font-poppins text-xs text-primary-accent mt-2">
          {claim.action}
        </p>
        
        <div className="flex items-center gap-6 mt-3">
          <div>
            <p className="font-poppins text-xs text-text-secondary/70 uppercase">Expected</p>
            <p className="font-poppins font-semibold text-xs text-text-primary">{claim.expected}</p>
          </div>
          <div>
            <p className="font-poppins text-xs text-text-secondary/70 uppercase">Received</p>
            <p className="font-poppins font-semibold text-xs text-text-primary">{claim.received}</p>
          </div>
          <div>
            <p className="font-poppins text-xs text-text-secondary/70 uppercase">Shortfall</p>
            <p className="font-poppins font-semibold text-xs text-danger-accent">{claim.shortfall}</p>
          </div>
        </div>
      </div>
      
      <div className="p-3 flex gap-2">
        <button className="bg-success/10 border border-success text-success font-poppins font-semibold text-xs py-2 px-4 rounded shadow-sm hover:bg-success hover:text-white transition-colors cursor-pointer">
          Generate Appeal
        </button>
        <button className="bg-primary-muted border border-primary text-primary font-poppins font-semibold text-xs py-2 px-4 rounded shadow-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
          View Evidence
        </button>
        <button className="bg-[#f9f9f9] border border-surface-border text-text-secondary font-poppins font-semibold text-xs py-2 px-4 rounded shadow-sm hover:bg-surface-light transition-colors cursor-pointer">
          Dismiss
        </button>
      </div>
    </div>
  );
}

export function UnderpaymentDiscoveryEngine() {
  return (
    <Card className="p-4">
      <CardHeader
        title="Underpayment Discovery Engine"
        subtitle="Detect missed revenue from payer variance & contract mismatches"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        {summaryMetrics.map((metric, index) => (
          <div key={index} className="bg-danger-muted rounded p-3">
            <p className="font-poppins text-xs text-primary uppercase">
              {metric.label}
            </p>
            <p className="font-poppins font-bold text-xl text-primary mt-1">
              {metric.value}
            </p>
            <p className="font-poppins text-xs text-text-secondary mt-0.5">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="space-y-3 mt-4">
        {claims.map((claim, index) => (
          <ClaimCard key={index} claim={claim} />
        ))}
      </div>
    </Card>
  );
}
