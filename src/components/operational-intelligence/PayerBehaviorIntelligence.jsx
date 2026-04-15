import { Card, CardHeader } from '../shared';
import { FigmaBadge } from './FigmaBadge';

const payers = [
  {
    id: 1,
    logo: 'Aetna',
    logoSrc: '/aetna.png',
    claims: '2,875 claims',
    avgDays: 45,
    denialRate: '8.2%',
    underpay: '4.1%',
    reimbVar: '-3.2%',
    status: 'critical',
  },
  {
    id: 2,
    logo: 'Cigna',
    logoSrc: '/cigna.png',
    claims: '3,875 claims',
    avgDays: 32,
    denialRate: '14.2%',
    underpay: '2.3%',
    reimbVar: '-1.1%',
    status: 'critical',
  },
  {
    id: 3,
    logo: 'UHC',
    logoSrc: '/united-healthcare.png',
    claims: '2,875 claims',
    avgDays: 28,
    denialRate: '5.2%',
    underpay: '6.8%',
    reimbVar: '-5.4%',
    status: 'high',
  },
  {
    id: 4,
    logo: 'BCBS',
    logoSrc: '/blue-cross.png',
    claims: '5,875 claims',
    avgDays: 38,
    denialRate: '4.1%',
    underpay: '1.2%',
    reimbVar: '+0.3%',
    status: 'high',
  },
  {
    id: 5,
    logo: 'Medicare',
    logoSrc: '/medicaid.png',
    claims: '1,875 claims',
    avgDays: 31,
    denialRate: '6.2%',
    underpay: '2.1%',
    reimbVar: '-0.8%',
    status: 'low',
  },
];

function FilterTabs() {
  const tabs = ['By Status', 'By Volume', 'By Denials', 'By Delays'];
  return (
    <div className="flex flex-wrap items-center gap-1 bg-surface-muted rounded-lg p-1">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-3 py-1 rounded text-xs font-poppins transition-colors cursor-pointer ${
            index === 0 ? 'bg-surface text-primary font-semibold' : 'text-text-secondary hover:bg-surface/50'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function MetricBadge({ value, isNegative }) {
  const bgColor = isNegative ? 'bg-danger/10' : 'bg-success/10';
  const textColor = isNegative ? 'text-danger' : 'text-success';
  
  return (
    <span className={`inline-flex items-center gap-0.5 px-1 py-0.5 rounded ${bgColor}`}>
      <span className={`w-1 h-1 rounded-full ${isNegative ? 'bg-danger' : 'bg-success'}`} />
      <span className={`font-poppins text-xs ${textColor}`}>{value}</span>
    </span>
  );
}

function PayerCard({ logo, logoSrc, claims, avgDays, denialRate, underpay, reimbVar, status }) {
  const isReimbNegative = reimbVar.startsWith('-');
  const toneStyles = {
    critical: {
      border: 'border-[#E18C95]',
      bg: 'bg-[rgba(255,122,88,0.12)]',
      badgeTone: 'critical',
    },
    high: {
      border: 'border-[#E9C748]',
      bg: 'bg-[rgba(255,248,36,0.18)]',
      badgeTone: 'medium',
    },
    low: {
      border: 'border-[#8ED49C]',
      bg: 'bg-[rgba(13,186,13,0.10)]',
      badgeTone: 'success',
    },
  };
  const tones = toneStyles[status] || toneStyles.high;
  
  return (
    <div className={`border rounded-md p-3 transition-colors cursor-pointer ${tones.border} ${tones.bg}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-surface rounded px-2 py-1">
            <img src={logoSrc} alt={`${logo} logo`} className="h-4 w-auto object-contain" />
          </div>
          <FigmaBadge tone={tones.badgeTone} />
        </div>
      </div>
      
      <p className="font-poppins text-xs text-text-secondary mb-2">{claims}</p>
      
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <span className="font-poppins text-text-secondary">Avg Days </span>
          <span className="font-poppins font-semibold text-text-primary">{avgDays}</span>
        </div>
        <div>
          <span className="font-poppins text-text-secondary">Denial Rate </span>
          <span className="font-poppins font-semibold text-danger">{denialRate}</span>
        </div>
        <div>
          <span className="font-poppins text-text-secondary">Underpay </span>
          <span className="font-poppins font-semibold text-warning">{underpay}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-poppins text-text-secondary">Reimb Var </span>
          <MetricBadge value={reimbVar} isNegative={isReimbNegative} />
        </div>
      </div>
    </div>
  );
}

export function PayerBehaviorIntelligence() {
  return (
    <Card className="p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
        <CardHeader
          title="Payer Behavior Intelligence"
          subtitle="How payers are behaving differently over time"
        />
        <FilterTabs />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
        {payers.map((payer) => (
          <PayerCard key={payer.id} {...payer} />
        ))}
      </div>
    </Card>
  );
}
