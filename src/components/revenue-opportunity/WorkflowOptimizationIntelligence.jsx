import { Card, CardHeader } from '../shared';

const collectors = [
  {
    name: 'Collector A',
    impact: '$4,200',
    success: '82%',
    evidence: 'Avg recovery per claim $1,250; resolves cases 11% faster than team avg, strongest on commercial payer cases.',
    top: true,
    highlighted: true,
  },
  {
    name: 'Collector B',
    impact: '$3,800',
    success: '76%',
    evidence: 'Avg recovery per claim $1,050; consistent performance across payer types, moderate resolution speed.',
  },
  {
    name: 'Collector C',
    impact: '$3,200',
    success: '71%',
    evidence: 'Avg recovery per claim $980; slower resolution (+9% vs avg), higher exposure to aged AR accounts.',
  },
];

const channels = [
  {
    name: 'Phone',
    conversion: '68%',
    avgValue: '$1,850',
    evidence: 'Higher success for balances >$2,000; lower response for self-pay accounts',
  },
  {
    name: 'SMS',
    conversion: '72%',
    avgValue: '$1,200',
    evidence: '74% conversion driven by balances <$1,500, +22% higher response vs phone',
    top: true,
    highlighted: true,
  },
  {
    name: 'Letter',
    conversion: '42%',
    avgValue: '$850',
    evidence: 'Lower conversion; primarily effective for older AR accounts (>60 days)',
  },
  {
    name: 'Email',
    conversion: '38%',
    avgValue: '$600',
    evidence: 'Lowest engagement; limited impact on high-value or delayed accounts',
  },
];

const contactTiming = [
  { day: 'Monday', rate: '65%', value: 65 },
  { day: 'Tuesday', rate: '72%', value: 72 },
  { day: 'Wednesday', rate: '74%', value: 74, highlighted: true },
  { day: 'Thursday', rate: '71%', value: 71 },
  { day: 'Friday', rate: '58%', value: 58 },
];

const recommendations = [
  {
    title: 'Route High-Value Cases To',
    value: 'Collector A',
    detail1: 'Avg recovery: $4,200',
    detail2: '18% faster resolution vs team',
  },
  {
    title: 'Prioritize Channel',
    value: 'SMS',
    detail1: '74% conversion Rate',
    detail2: '+22% higher success vs phone for balances <$1,500',
  },
  {
    title: 'Schedule Outreach On',
    value: 'Wednesdays',
    detail1: '74% success Rate',
    detail2: 'Peak response window 4-7 PM',
  },
];

export function WorkflowOptimizationIntelligence() {
  return (
    <Card className="p-4">
      <CardHeader
        title="Workflow Optimization Intelligence"
        subtitle="AI-driven recommendations to optimize staffing, routing, and contact timing"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3">
        <div className="border border-surface-border rounded-lg p-2">
          <h4 className="font-poppins font-semibold text-sm text-primary mb-2">
            Collector Performance
          </h4>
          <div className="space-y-2">
            {collectors.map((collector, index) => (
              <div
                key={index}
                className={`border border-surface-border rounded-md p-2 ${
                  collector.highlighted ? 'bg-surface-muted' : 'bg-surface'
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <p className="font-poppins font-semibold text-sm text-primary leading-none">
                    {collector.name}
                  </p>
                  {collector.top && <span className="px-1 py-0.5 rounded text-[10px] font-poppins text-danger bg-danger-light">TOP</span>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-1">
                  <div>
                    <p className="font-poppins text-xs text-text-secondary leading-none">Impact</p>
                    <p className="font-poppins font-semibold text-sm text-text-primary leading-none mt-1">{collector.impact}</p>
                  </div>
                  <div>
                    <p className="font-poppins text-xs text-text-secondary leading-none">Success</p>
                    <p className="font-poppins font-semibold text-sm text-text-primary leading-none mt-1">{collector.success}</p>
                  </div>
                </div>
                <p className="font-poppins text-xs text-text-secondary leading-tight">
                  <span className="font-semibold">AI Evidence:</span> {collector.evidence}
                </p>
              </div>
            ))}
            <button className="w-full bg-surface-highlight border border-primary rounded-md py-1.5 font-poppins font-semibold text-xs text-primary hover:bg-primary-muted transition-colors cursor-pointer">
              Optimize Routing
            </button>
          </div>
        </div>
        
        <div className="border border-surface-border rounded-lg p-2">
          <h4 className="font-poppins font-semibold text-sm text-primary mb-2">
            Channel Performance
          </h4>
          <div className="space-y-2">
            {channels.map((channel, index) => (
              <div
                key={index}
                className={`border border-surface-border rounded-md p-2 ${
                  channel.highlighted ? 'bg-surface-muted' : 'bg-surface'
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <p className="font-poppins font-semibold text-sm text-primary leading-none">
                    {channel.name}
                  </p>
                  {channel.top && <span className="px-1 py-0.5 rounded text-[10px] font-poppins text-danger bg-danger-light">TOP</span>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-1">
                  <div>
                    <p className="font-poppins text-xs text-text-secondary leading-none">Conversion</p>
                    <p className="font-poppins font-semibold text-sm text-text-primary leading-none mt-1">{channel.conversion}</p>
                  </div>
                  <div>
                    <p className="font-poppins text-xs text-text-secondary leading-none">Avg Value</p>
                    <p className="font-poppins font-semibold text-sm text-text-primary leading-none mt-1">{channel.avgValue}</p>
                  </div>
                </div>
                <p className="font-poppins text-xs text-text-secondary leading-tight">
                  <span className="font-semibold">AI Evidence:</span> {channel.evidence}
                </p>
              </div>
            ))}
            <button className="w-full bg-surface-highlight border border-primary rounded-md py-1.5 font-poppins font-semibold text-xs text-primary hover:bg-primary-muted transition-colors cursor-pointer">
              Adjust Channels
            </button>
          </div>
        </div>
        
        <div className="border border-surface-border rounded-lg p-2">
          <h4 className="font-poppins font-semibold text-sm text-primary mb-2">
            Optimal Contact Timing
          </h4>
          <div className="space-y-2">
            {contactTiming.map((timing, index) => (
              <div
                key={index}
                className={`flex items-center justify-between border border-surface-border rounded-md px-3 py-2 ${
                  timing.highlighted ? 'bg-surface-highlight' : 'bg-surface'
                }`}
              >
                <span className="font-poppins font-semibold text-sm text-primary">
                  {timing.day}
                </span>
                <span className="font-poppins font-semibold text-sm text-text-secondary">
                  {timing.rate}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-3 p-2">
            <p className="font-poppins text-xs text-text-secondary leading-tight">
              <span className="font-semibold text-text-primary">AI Evidence:</span> Based on last 60 days of outreach; peak response window 4-7 PM, especially for commercial payer accounts.
            </p>
          </div>
          <button className="w-full bg-surface-highlight border border-primary rounded-md py-1.5 font-poppins font-semibold text-xs text-primary hover:bg-primary-muted transition-colors cursor-pointer">
            Schedule Outreach
          </button>
        </div>
      </div>

      <div className="bg-surface-highlight rounded p-4 mt-4">
        <h4 className="font-poppins font-semibold text-sm text-primary mb-3">
          AI Optimization Recommendations
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendations.map((rec, index) => (
            <div key={index}>
              <p className="font-poppins text-xs text-primary">
                {rec.title}
              </p>
              <p className="font-poppins font-bold text-sm text-primary-accent">
                {rec.value}
              </p>
              <p className="font-poppins text-xs text-text-secondary mt-1">
                {rec.detail1}
              </p>
              <p className="font-poppins text-xs text-text-secondary">
                {rec.detail2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
