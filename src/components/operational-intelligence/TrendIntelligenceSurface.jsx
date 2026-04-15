import { AlertTriangle, TrendingDown, TrendingUp } from 'lucide-react';
import { Card, CardHeader } from '../shared';

const metrics = [
  {
    id: 1,
    label: 'COLLECTIONS',
    value: '$2.4M',
    change: '-12.3%',
    isNegative: true,
    expectedRange: '75-95',
    status: 'critical',
    bars: [17, 17, 18, 16, 12, 12, 14, 12, 14, 14],
    cardTone: 'critical',
    barColors: ['bg-danger-accent', 'bg-danger-accent', 'bg-danger-accent', 'bg-danger-accent', 'bg-danger-accent', 'bg-primary-accent', 'bg-primary-accent', 'bg-primary-accent', 'bg-primary-accent', 'bg-primary-accent'],
  },
  {
    id: 2,
    label: 'DENIAL RATE',
    value: '14.2%',
    change: '+28.5',
    isNegative: true,
    useTrendUpIcon: true,
    expectedRange: '5-10',
    status: 'critical',
    bars: [5, 5, 5, 4, 3, 3, 4, 3, 4, 4],
    cardTone: 'critical',
    barColors: ['bg-danger-accent', 'bg-danger-accent', 'bg-danger-accent', 'bg-danger-accent', 'bg-danger-accent', 'bg-primary-accent', 'bg-primary-accent', 'bg-primary-accent', 'bg-primary-accent', 'bg-primary-accent'],
  },
  {
    id: 3,
    label: 'DENIAL RATE',
    value: '14.2%',
    change: '+28.5',
    isNegative: true,
    useTrendUpIcon: true,
    expectedRange: '5-10',
    status: 'warning',
    bars: [6, 7, 7, 10, 11, 11, 12, 13, 16, 18],
    cardTone: 'warning',
    barColors: ['bg-primary-accent', 'bg-primary-accent', 'bg-primary-accent', 'bg-primary-accent', 'bg-primary-accent', 'bg-warning', 'bg-warning', 'bg-warning', 'bg-warning', 'bg-warning'],
  },
  {
    id: 4,
    label: 'COLLECTION RATE',
    value: '82.4%',
    change: '-5.1%',
    isNegative: true,
    expectedRange: '85-95',
    status: 'warning',
    bars: [16, 13, 13, 13, 11, 11, 12, 11, 11, 11],
    cardTone: 'warning',
    barColors: ['bg-primary-accent', 'bg-primary-accent', 'bg-primary-accent', 'bg-primary-accent', 'bg-primary-accent', 'bg-warning', 'bg-warning', 'bg-warning', 'bg-warning', 'bg-warning'],
  },
];

const statusStyles = {
  warning: { labelColor: 'text-warning' },
  critical: { labelColor: 'text-danger-accent' },
  normal: { labelColor: 'text-primary' },
};

const cardToneStyles = {
  critical: {
    borderColor: '#E18C95',
    background: 'rgba(255, 122, 88, 0.12)',
  },
  warning: {
    borderColor: '#E9C748',
    background: 'rgba(255, 248, 36, 0.18)',
  },
};

function MiniBarChart({ bars, barColors }) {
  const maxBar = Math.max(...bars);
  
  return (
    <div className="flex items-end gap-1 h-8 w-full mt-3">
      {bars.map((bar, index) => (
        <div
          key={index}
          className={`flex-1 rounded-[2px] ${barColors[index]}`}
          style={{ height: `${(bar / maxBar) * 100}%` }}
        />
      ))}
    </div>
  );
}

function MetricCard({ label, value, change, isNegative, useTrendUpIcon, expectedRange, bars, status, cardTone, barColors }) {
  const styles = statusStyles[status] || statusStyles.normal;
  const toneStyle = cardToneStyles[cardTone] || cardToneStyles.warning;
  
  return (
    <div
      className="rounded-md p-4 min-h-[132px] flex flex-col border"
      style={{ borderColor: toneStyle.borderColor, background: toneStyle.background }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-poppins text-[11px] tracking-wide text-text-secondary">{label}</p>
        </div>
        <AlertTriangle size={11} className={status === 'critical' ? 'text-danger-accent' : 'text-warning'} />
      </div>
      <div className="flex items-center justify-between mt-1">
        <p className="font-poppins font-semibold text-[36px] leading-none text-primary">{value}</p>
        <div className="flex items-center gap-1">
          {useTrendUpIcon ? (
            <TrendingUp size={10} className="text-text-primary" />
          ) : isNegative ? (
            <TrendingDown size={10} className="text-text-primary" />
          ) : (
            <TrendingUp size={10} className="text-text-primary" />
          )}
          <span className={`font-poppins text-[11px] ${isNegative ? 'text-danger' : 'text-success'}`}>
            {change}
          </span>
        </div>
      </div>
      <MiniBarChart bars={bars} barColors={barColors} />
      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="font-poppins text-[11px] text-text-secondary">Expected Range</span>
        <span className="font-poppins text-[11px] text-text-primary">{expectedRange}</span>
      </div>
    </div>
  );
}

function LegendItem({ color, label }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
      <span className="font-poppins text-xs text-text-secondary">{label}</span>
    </div>
  );
}

export function TrendIntelligenceSurface() {
  return (
    <Card className="p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
        <CardHeader
          title="Trend Intelligence Surface"
          subtitle="Monitored signal with anomaly detection"
        />
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <LegendItem color="bg-success" label="Normal" />
          <LegendItem color="bg-warning" label="Warning" />
          <LegendItem color="bg-danger" label="Critical" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            label={metric.label}
            value={metric.value}
            change={metric.change}
            isNegative={metric.isNegative}
            useTrendUpIcon={metric.useTrendUpIcon}
            expectedRange={metric.expectedRange}
            bars={metric.bars}
            status={metric.status}
            cardTone={metric.cardTone}
            barColors={metric.barColors}
          />
        ))}
      </div>
    </Card>
  );
}
