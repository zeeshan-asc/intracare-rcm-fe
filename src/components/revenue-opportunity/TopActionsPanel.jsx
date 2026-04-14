import { Card, CardHeader } from '../shared';
import { ActionItem } from './ActionItem';

const actions = [
  {
    id: 1,
    title: 'Contact MediCare Plus AR for 18 aged claims',
    subtitle: 'Call AR Department + Send following letter',
    successRate: 78,
    effort: 'low',
    timeline: '48 hours',
    expectedRecovery: '$72.1K',
    borderColor: 'border-danger',
  },
  {
    id: 2,
    title: 'Submit Anthem underpayment appeals (34 claims)',
    subtitle: 'Generate appeals with contract documentation',
    successRate: 65,
    effort: 'medium',
    timeline: '7 days',
    expectedRecovery: '$54.7K',
    borderColor: 'border-warning-subtle',
  },
  {
    id: 3,
    title: 'Prioritize 60-90 day bucket outreach',
    subtitle: 'Multi-payer outreach campaign (156 claims)',
    successRate: 82,
    effort: 'high',
    timeline: 'This week',
    expectedRecovery: '$196.8K',
    borderColor: 'border-danger',
  },
  {
    id: 4,
    title: 'Route denial cluster to coding team',
    subtitle: 'Create work queue for coding review',
    successRate: 71,
    effort: 'low',
    timeline: '24 hours',
    expectedRecovery: '$48.1K',
    borderColor: 'border-warning-subtle',
  },
  {
    id: 5,
    title: 'Launch patient payment SMS campaign',
    subtitle: 'Send SMS with payment link to 89 accounts',
    successRate: 68,
    effort: 'medium',
    timeline: 'Today',
    expectedRecovery: '$30.7K',
    borderColor: 'border-warning-subtle',
  },
];

export function TopActionsPanel() {
  return (
    <Card className="p-4">
      <CardHeader
        title="Top Actions to Maximize Cash Today"
        subtitle="Ranked action queue by expected recovery x success likelihood"
      />
      <div className="space-y-3 mt-3">
        {actions.map((action) => (
          <ActionItem
            key={action.id}
            title={action.title}
            subtitle={action.subtitle}
            successRate={action.successRate}
            effort={action.effort}
            timeline={action.timeline}
            expectedRecovery={action.expectedRecovery}
            borderColor={action.borderColor}
          />
        ))}
      </div>
      
      <div className="bg-primary-muted rounded p-4 mt-4 text-center">
        <p className="font-poppins text-sm text-primary">
          Total Recoverable from Top 50 Actions
        </p>
        <p className="font-poppins font-semibold text-xl text-success">
          $402.3K
        </p>
      </div>
    </Card>
  );
}
