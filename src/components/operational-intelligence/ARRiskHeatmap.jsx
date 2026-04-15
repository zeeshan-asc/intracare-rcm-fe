import { Card, CardHeader } from '../shared';

const summaryStats = [
  { label: 'Total', value: '$789K', bg: 'bg-[#E8EEF4]', textColor: 'text-primary' },
  { label: 'High Risk', value: '2', bg: 'bg-[#FDECEA]', textColor: 'text-[#D64545]' },
  { label: 'Medium Risk', value: '2', bg: 'bg-[#FEF9E6]', textColor: 'text-[#E9A800]' },
  { label: 'Low Risk', value: '2', bg: 'bg-[#E6F7E9]', textColor: 'text-[#2E9E47]' },
];

const clinics = [
  {
    id: 1,
    name: 'Clinic West',
    amount: '$234K',
    percentage: '18%',
    riskScore: 92,
    concentration: 29.2,
    risk: 'high',
  },
  {
    id: 2,
    name: 'Downtown Center',
    amount: '$194K',
    percentage: '12%',
    riskScore: 78,
    concentration: 25.2,
    risk: 'high',
  },
  {
    id: 3,
    name: 'North Campus',
    amount: '$154K',
    percentage: '8%',
    riskScore: 65,
    concentration: 19.2,
    risk: 'medium',
  },
  {
    id: 4,
    name: 'East Medical',
    amount: '$89K',
    percentage: '3%',
    riskScore: 42,
    concentration: 11.2,
    risk: 'medium',
  },
  {
    id: 5,
    name: 'South Clinic',
    amount: '$67K',
    percentage: '2%',
    riskScore: 35,
    concentration: 8.5,
    risk: 'low',
  },
  {
    id: 6,
    name: 'Metro Health',
    amount: '$234K',
    percentage: '5%',
    riskScore: 28,
    concentration: 5.7,
    risk: 'low',
  },
];

function FilterTabs() {
  const tabs = ['Clinic', 'Provider', 'Payer'];
  return (
    <div className="flex flex-wrap items-center gap-1 bg-[#E8EEF4] rounded-md p-1">
      {tabs.map((tab, index) => (
      <button
          key={tab}
          className={`px-3 py-1.5 rounded text-xs font-poppins transition-colors cursor-pointer ${
            index === 0 
              ? 'bg-primary text-white font-medium' 
              : 'text-text-secondary hover:bg-white/50'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function SummaryStatCard({ label, value, bg, textColor }) {
  return (
    <div className={`${bg} rounded-lg p-4 text-center`}>
      <p className="font-poppins text-[10px] text-text-secondary mb-1">{label}</p>
      <p className={`font-poppins font-bold text-xl ${textColor}`}>{value}</p>
    </div>
  );
}

function RiskBar({ value, maxValue = 100, risk }) {
  const percentage = (value / maxValue) * 100;
  const barColors = {
    high: 'bg-[#D64545]',
    medium: 'bg-[#E9A800]',
    low: 'bg-[#2E9E47]',
  };
  
  return (
    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className={`h-full ${barColors[risk]} rounded-full`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

function ConcentrationBar({ value, maxValue = 100 }) {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary-light rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

function ClinicCard({ name, amount, percentage, riskScore, concentration, risk }) {
  const cardStyles = {
    high: {
      border: 'border-[#E57373]',
      bg: 'bg-[#FEF0EE]',
    },
    medium: {
      border: 'border-[#F5D76E]',
      bg: 'bg-[#FFFDE7]',
    },
    low: {
      border: 'border-[#81C784]',
      bg: 'bg-[#E8F5E9]',
    },
  };

  const riskScoreColors = {
    high: 'text-[#D64545]',
    medium: 'text-[#E9A800]',
    low: 'text-[#2E9E47]',
  };
  
  const styles = cardStyles[risk];
  
  return (
    <div className={`border-2 ${styles.border} ${styles.bg} rounded-lg p-3`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-poppins font-semibold text-sm text-text-primary">{name}</p>
          <p className="font-poppins font-bold text-lg text-primary">{amount}</p>
        </div>
        <span className="font-poppins text-xs text-text-secondary font-medium">{percentage}</span>
      </div>
      
      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className={`font-poppins text-[10px] ${riskScoreColors[risk]}`}>Risk Score</span>
            <span className={`font-poppins text-[10px] font-medium ${riskScoreColors[risk]}`}>{riskScore}</span>
          </div>
          <RiskBar value={riskScore} risk={risk} />
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="font-poppins text-[10px] text-primary-light">Concentration</span>
            <span className="font-poppins text-[10px] font-medium text-primary-light">{concentration}%</span>
          </div>
          <ConcentrationBar value={concentration} />
        </div>
      </div>
    </div>
  );
}

function RiskLegend() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#2E9E47]" />
        <span className="font-poppins text-[10px] text-text-secondary">Low Risk(0-40)</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#E9A800]" />
        <span className="font-poppins text-[10px] text-text-secondary">Medium Risk (40-70)</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#D64545]" />
        <span className="font-poppins text-[10px] text-text-secondary">High Risk (70+)</span>
      </div>
    </div>
  );
}

export function ARRiskHeatmap() {
  return (
    <Card className="p-4 md:p-5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-5">
        <CardHeader
          title="AR Risk Heatmap"
          subtitle="Where AR is building and risk is increasing"
        />
        <FilterTabs />
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {summaryStats.map((stat, index) => (
          <SummaryStatCard key={index} {...stat} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {clinics.map((clinic) => (
          <ClinicCard key={clinic.id} {...clinic} />
        ))}
      </div>

      <RiskLegend />
    </Card>
  );
}
