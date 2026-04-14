import { Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { Card, CardHeader } from '../shared';
import { FigmaBadge } from './FigmaBadge';

const insights = [
  {
    id: 1,
    icon: Shield,
    iconColor: 'text-danger',
    title: 'Clinic West denial rate is 2.8x peer average',
    description: 'Clinic West has experienced a significant spike in denials over the past 7 days, outpacing all other facilities',
    metrics: 'Denial Rate: 18.4% | Peer Average: 6.6% | Claims Affected: 876',
    severity: 'critical',
    timestamp: '6m ago',
  },
  {
    id: 2,
    icon: TrendingUp,
    iconColor: 'text-warning',
    title: 'AR Growth concentration in single payer',
    description: 'Aetna accounts for 47% of AR growth this month despite representing only 18% of total claims volume',
    metrics: 'AR Contribution: +32% | Claims Share: 18% | Avg Delay: +12 days',
    severity: 'medium',
    timestamp: '46m ago',
  },
  {
    id: 3,
    icon: Shield,
    iconColor: 'text-warning',
    title: 'Payment velocity declining for Medicare claims',
    description: 'Medicare payment velocity has dropped 18% over the past 3 weeks, extending average days to payments',
    metrics: 'Velocity Change: -18% | Avg Days: 38 → 45 | Claims in Review: 12',
    severity: 'high',
    timestamp: '1hr ago',
  },
];

const rightInsights = [
  {
    id: 4,
    icon: TrendingUp,
    iconColor: 'text-warning',
    title: 'Provider group generating volume but weak cash conversion',
    description: 'Orthopedic Services group shows 32% increase in claim volume but only 8% increase in collections',
    metrics: 'Volume Growth: +32% | Collection Growth: +8% | Conversion Gap: $89K',
    severity: 'high',
    timestamp: '19m ago',
  },
  {
    id: 5,
    icon: Shield,
    iconColor: 'text-primary',
    title: 'Opportunity: Coding optimization for Cardiology',
    description: 'AI analysis suggests potential undercoding in Cardiology department based on documentation complexity',
    metrics: 'Undercoding %: 23% | Potential Uplift: $52K | Visits Reviewed: 1,234',
    severity: 'low',
    timestamp: '1hr ago',
  },
];

const severityStyles = {
  critical: {
    border: 'border-2 border-danger-accent',
    bg: 'bg-[rgba(255,122,88,0.08)]',
  },
  high: {
    border: 'border-2 border-danger-accent',
    bg: 'bg-[rgba(255,122,88,0.08)]',
  },
  medium: {
    border: 'border-2 border-warning',
    bg: 'bg-[rgba(255,166,0,0.08)]',
  },
  low: {
    border: 'border-2 border-primary-light',
    bg: 'bg-[rgba(15,124,255,0.08)]',
  },
};

function InsightCard({ icon: Icon, iconColor, title, description, metrics, severity, timestamp }) {
  const styles = severityStyles[severity] || severityStyles.medium;
  
  return (
    <div className={`rounded-md p-3 cursor-pointer ${styles.border} ${styles.bg}`}>
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 ${iconColor}`}>
          <Icon size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p className="font-poppins font-semibold text-xs text-text-primary">{title}</p>
            <div className="flex items-center gap-2 shrink-0">
              <FigmaBadge tone={severity} />
              <span className="font-poppins text-xs text-text-secondary">{timestamp}</span>
              <ArrowRight size={12} className="text-text-secondary" />
            </div>
          </div>
          <p className="font-poppins text-xs text-text-secondary mt-1 line-clamp-2">{description}</p>
          <p className="font-prompt text-xs text-primary mt-1">{metrics}</p>
        </div>
      </div>
    </div>
  );
}

function FilterTabs() {
  const tabs = ['All', 'Critical', 'High', 'Medium', 'Low'];
  return (
    <div className="flex items-center gap-1 bg-surface-muted rounded-lg p-1">
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

export function AutomatedInsightsStream() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <CardHeader
          title="Automated Insights Stream"
          subtitle="AI-generated findings updated in real-time"
        />
        <div className="flex items-center gap-3">
          <FilterTabs />
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-poppins text-xs text-text-secondary">Live</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="space-y-3">
          {insights.slice(0, 2).map((insight) => (
            <InsightCard key={insight.id} {...insight} />
          ))}
        </div>
        <div className="space-y-3">
          {rightInsights.map((insight) => (
            <InsightCard key={insight.id} {...insight} />
          ))}
        </div>
      </div>
      <div className="mt-3">
        <InsightCard {...insights[2]} />
      </div>
    </Card>
  );
}
