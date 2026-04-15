import { Building2, User, CreditCard, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardHeader } from '../shared';

const outliers = [
  {
    id: 1,
    icon: Building2,
    name: 'Clinic West Clinic',
    metric: 'Denial Rate',
    current: '18.4%',
    benchmark: '6.6%',
    deviation: '179%',
    impact: '$142K at risk',
    trend: 'worsening',
    tone: 'critical',
  },
  {
    id: 2,
    icon: User,
    name: 'Dr. Martinez Group Provider',
    metric: 'Collection Rate',
    current: '71%',
    benchmark: '89%',
    deviation: '20%',
    impact: '$67K under-collected',
    trend: 'stable',
    tone: 'critical',
  },
  {
    id: 3,
    icon: Building2,
    name: 'Downtown Center Clinic',
    metric: 'AR Aging 90+',
    current: '$234K',
    benchmark: '$98K',
    deviation: '162%',
    impact: 'Cash flow strain',
    trend: 'worsening',
    tone: 'critical',
  },
  {
    id: 4,
    icon: CreditCard,
    name: 'Cardiology Segment',
    metric: 'Avg Reimbursement',
    current: '$314',
    benchmark: '$389',
    deviation: '20%',
    impact: '$45K quarterly gap',
    trend: 'stable',
    tone: 'warning',
  },
  {
    id: 5,
    icon: User,
    name: 'Orthopedic Services Provider',
    metric: 'Cash Conversion',
    current: '62%',
    benchmark: '85%',
    deviation: '27%',
    impact: '$89K conversion gap',
    trend: 'improving',
    tone: 'warning',
  },
  {
    id: 6,
    icon: Building2,
    name: 'North Campus Clinic',
    metric: 'Days to Payment',
    current: '52 days',
    benchmark: '34 days',
    deviation: '53%',
    impact: 'Working capital delay',
    trend: 'worsening',
    tone: 'warning',
  },
];

function FilterTabs() {
  const tabs = ['All', 'Clinic', 'Providers', 'Segments'];
  return (
    <div className="flex flex-wrap items-center gap-1 bg-surface-muted rounded-lg p-1">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-2.5 sm:px-3 py-1 rounded text-xs font-poppins transition-colors cursor-pointer whitespace-nowrap ${
            index === 0 ? 'bg-surface text-primary font-semibold' : 'text-text-secondary hover:bg-surface/50'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function TrendIndicator({ trend }) {
  const trendConfig = {
    worsening: { icon: TrendingDown, color: 'text-danger', label: 'worsening' },
    stable: { icon: null, color: 'text-warning', label: 'stable' },
    improving: { icon: TrendingUp, color: 'text-success', label: 'improving' },
  };
  
  const config = trendConfig[trend];
  
  return (
    <div className="flex items-center gap-1">
      {config.icon && <config.icon size={10} className={config.color} />}
      <span className={`font-poppins text-xs ${config.color}`}>{config.label}</span>
    </div>
  );
}

function OutlierCard({ icon: Icon, name, metric, current, benchmark, deviation, impact, trend, tone }) {
  const toneStyles = {
    critical: {
      border: 'border-[#E18C95]',
      bg: 'bg-[rgba(255,122,88,0.12)]',
      icon: 'text-danger-accent',
    },
    warning: {
      border: 'border-[#E9C748]',
      bg: 'bg-[rgba(255,248,36,0.18)]',
      icon: 'text-warning',
    },
  };

  const styles = toneStyles[tone] || toneStyles.warning;

  return (
    <div className={`border rounded-md p-3 transition-colors cursor-pointer ${styles.border} ${styles.bg}`}>
      <div className="flex items-start gap-3">
        <div className={`${styles.icon} mt-0.5`}>
          <Icon size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-poppins font-semibold text-xs text-text-primary">{name}</p>
          <p className="font-poppins text-xs text-text-secondary">{metric}</p>
          
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <div>
              <span className="font-poppins text-xs text-text-secondary">Current </span>
              <span className="font-poppins font-semibold text-xs text-primary">{current}</span>
            </div>
            <div>
              <span className="font-poppins text-xs text-text-secondary">Benchmark </span>
              <span className="font-poppins text-xs text-text-primary">{benchmark}</span>
            </div>
            <div>
              <span className="font-poppins text-xs text-text-secondary">Impact </span>
              <span className="font-poppins text-xs text-danger">{impact}</span>
            </div>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="font-poppins font-bold text-sm text-danger">{deviation}</p>
          <p className="font-poppins text-xs text-text-secondary">deviation</p>
          <TrendIndicator trend={trend} />
        </div>
      </div>
    </div>
  );
}

export function PerformanceOutlierDetection() {
  return (
    <Card className="p-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">
        <CardHeader
          title="Performance Outlier Detection"
          subtitle="Entities drifting away from expected performance"
        />
        <div className="w-full lg:w-auto">
          <FilterTabs />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {outliers.map((outlier) => (
          <OutlierCard key={outlier.id} {...outlier} />
        ))}
      </div>
    </Card>
  );
}
