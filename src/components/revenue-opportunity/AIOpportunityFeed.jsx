import { Card, CardHeader } from '../shared';
import { OpportunityCard } from './OpportunityCard';

const opportunities = [
  {
    id: 1,
    title: 'Recover $92,400 from aged accounts',
    amount: '$192.4K',
    recoveryRate: 78,
    expectedRecovery: '$72.1K',
    action: 'Contact payer cluster for 120+ day overages',
    riskLevel: 'low',
    expanded: true,
    details: {
      reason: 'Payer MediCare Plus has 18 claims aging 120+ days. Similar contacts in past 90 days show 78% recovery rate. Contact now to initiate payment arrangement before 150-day threshold.',
      actionDetails: {
        target: 'MediCare Plus AR Dept',
        method: 'Phone + Follow-up Letter',
        timeline: 'Within 48 hours',
        claimsAffected: '18',
      },
    },
  },
  {
    id: 2,
    title: 'Underpayment detected across payer cluster',
    amount: '$84.2K',
    recoveryRate: 65,
    expectedRecovery: '$54.7K',
    action: 'Generate and submit appeals with contract evidence',
    riskLevel: 'high',
  },
  {
    id: 3,
    title: '$240K at risk of aging deterioration',
    amount: '$240.0K',
    recoveryRate: 82,
    expectedRecovery: '$196.7K',
    action: 'Prioritize 60-90 day bucket before moving to 120+',
    riskLevel: 'low',
  },
  {
    id: 4,
    title: 'High-risk denial cluster detected',
    amount: '$67.8K',
    recoveryRate: 71,
    expectedRecovery: '$48.7K',
    action: 'Route to coding team for correction before resubmission',
    riskLevel: 'high',
  },
  {
    id: 5,
    title: 'Patient payment opportunity',
    amount: '$45.0K',
    recoveryRate: 68,
    expectedRecovery: '$30.7K',
    action: 'SMS outreach with payment plan option',
    riskLevel: 'medium',
  },
  {
    id: 6,
    title: 'Contract variance pattern: Cigna claims',
    amount: '$38.9K',
    recoveryRate: 59,
    expectedRecovery: '$23.7K',
    action: 'Review contract and initiate clarification call',
    riskLevel: 'medium',
  },
];

export function AIOpportunityFeed() {
  return (
    <Card className="p-4">
      <CardHeader
        title="AI Opportunity Feed"
        subtitle="Intelligence-driven recovery cases ranked by impact"
      />
      <div className="space-y-3 mt-3">
        {opportunities.map((opp) => (
          <OpportunityCard
            key={opp.id}
            title={opp.title}
            amount={opp.amount}
            recoveryRate={opp.recoveryRate}
            expectedRecovery={opp.expectedRecovery}
            action={opp.action}
            riskLevel={opp.riskLevel}
            expanded={opp.expanded}
            details={opp.details}
          />
        ))}
      </div>
    </Card>
  );
}
