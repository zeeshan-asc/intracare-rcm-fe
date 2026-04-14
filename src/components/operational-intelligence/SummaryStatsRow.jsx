import { AlertTriangle, Zap, Activity, Radio } from 'lucide-react';
import { Card } from '../shared';

const stats = [
  {
    id: 1,
    icon: AlertTriangle,
    iconColor: 'text-warning',
    value: '12 Today',
    label: 'Anomalies Detected',
  },
  {
    id: 2,
    icon: Zap,
    iconColor: 'text-primary-light',
    value: '47 24H',
    label: 'Insights Generated',
  },
  {
    id: 3,
    icon: Activity,
    iconColor: 'text-primary',
    value: '156 Active',
    label: 'Patterns Tracked',
  },
  {
    id: 4,
    icon: Radio,
    iconColor: 'text-success',
    value: '24 Monitoring',
    label: 'Signals Active',
  },
];

function StatCard({ icon: Icon, iconColor, value, label }) {
  return (
    <Card className="p-3 flex items-center gap-3 bg-[#F3F4F6]">
      <div className={`${iconColor}`}>
        <Icon size={18} />
      </div>
      <div>
        <p className="font-poppins font-semibold text-sm text-text-primary">
          {value}
        </p>
        <p className="font-poppins text-xs text-text-secondary">{label}</p>
      </div>
    </Card>
  );
}

export function SummaryStatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          icon={stat.icon}
          iconColor={stat.iconColor}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}
