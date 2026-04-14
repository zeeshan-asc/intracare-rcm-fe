import { AlertTriangle } from 'lucide-react';
import { Card, CardHeader } from '../shared';

const denialPatterns = [
  {
    id: 1,
    category: 'Authorization Mismatch',
    claims: '867 Claims',
    atRisk: '$134K at risk',
    payers: '3 payer',
    providers: '3 provider',
    recovery: '28%',
    share: '32%',
    tone: 'critical',
  },
  {
    id: 2,
    category: 'Coding Error',
    claims: '543 Claims',
    atRisk: '$675K at risk',
    payers: '2 payer',
    providers: '2 provider',
    recovery: '5%',
    share: '21%',
    tone: 'warning',
  },
  {
    id: 3,
    category: 'Medical Necessity',
    claims: '477 Claims',
    atRisk: '$54K at risk',
    payers: '2 payer',
    providers: '2 provider',
    recovery: '3%',
    share: '18%',
    tone: 'info',
  },
];

const legend = [
  { color: 'bg-[#FF0000]', label: 'Authorization Mismatch (32%)' },
  { color: 'bg-[#FFC400]', label: 'Coding Error (21%)' },
  { color: 'bg-[#0A67D0]', label: 'Medical Necessity (18%)' },
  { color: 'bg-[#0059B3]', label: 'Timely Filing (11%)' },
  { color: 'bg-[#F28B7A]', label: 'Duplicate Claims (9%)' },
  { color: 'bg-[#6C6C6C]', label: 'Patient Eligibility (9%)' },
];

function LegendItem({ color, label }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
      <span className="font-poppins text-xs text-text-secondary">{label}</span>
    </div>
  );
}

function DenialPatternCard({ category, claims, atRisk, payers, providers, recovery, share, tone: toneKey }) {
  const toneStyles = {
    critical: {
      bg: 'bg-[#FCE4DF]',
      border: 'border-[#F4B5AB]',
      icon: 'text-[#D64545]',
    },
    warning: {
      bg: 'bg-[#F8E6AE]',
      border: 'border-[#EDCF75]',
      icon: 'text-[#D6A100]',
    },
    info: {
      bg: 'bg-[#DCE6F1]',
      border: 'border-[#BFD0E4]',
      icon: 'text-[#2C6FAE]',
    },
  };
  const tone = toneStyles[toneKey] || toneStyles.warning;

  return (
    <div className={`relative border rounded-md p-3 ${tone.bg} ${tone.border}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <AlertTriangle size={14} className={tone.icon} />
          <span className="font-poppins font-semibold text-sm text-text-primary">{category}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-poppins text-[11px] text-[#5C5C5C]">{share}</span>
          <span className="font-poppins text-[11px] text-[#9A0000] font-semibold">↗ {recovery}</span>
        </div>
      </div>
      
      <p className="font-poppins text-[11px] text-[#6D6D6D] mb-1">{claims}  |  {atRisk}</p>
      <p className="font-poppins text-[11px] text-[#4F4F4F]">{payers}      {providers}</p>
    </div>
  );
}

function StackedBar() {
  return (
    <div className="h-6 rounded-full overflow-hidden flex bg-[#D9DEE6]">
      <div className="bg-[#FF0000]" style={{ width: '32%' }} />
      <div className="bg-[#FFC400]" style={{ width: '21%' }} />
      <div className="bg-[#0A67D0]" style={{ width: '18%' }} />
      <div className="bg-[#0059B3]" style={{ width: '11%' }} />
      <div className="bg-[#F28B7A]" style={{ width: '9%' }} />
      <div className="bg-[#6C6C6C]" style={{ width: '9%' }} />
    </div>
  );
}

export function DenialPatternIntelligence() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <CardHeader
          title="Denial Pattern Intelligence"
          subtitle="Clustered denial causes, segments, and recurring issues"
        />
        <p className="font-poppins text-xs text-text-secondary">
          Total: <span className="font-semibold text-text-primary">2,675</span> denials
        </p>
      </div>
      
      <div className="mb-4 bg-[#DBE6F4] rounded-md p-2.5">
        <StackedBar />
        <div className="flex flex-wrap items-center gap-4 mt-2">
          {legend.map((item, index) => (
            <LegendItem key={index} color={item.color} label={item.label} />
          ))}
        </div>
      </div>
      
      <div className="space-y-3">
        {denialPatterns.map((pattern) => (
          <DenialPatternCard key={pattern.id} {...pattern} />
        ))}
      </div>
      
    </Card>
  );
}
