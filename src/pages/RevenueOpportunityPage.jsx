import { Header } from '../components/layout';
import { PageWrapper, PageContent } from '../components/layout';
import {
  QueryBar,
  AIOpportunityFeed,
  TopActionsPanel,
  DenialPreventionSystem,
  ARRiskEscalationEngine,
  PatientPaymentIntelligence,
  UnderpaymentDiscoveryEngine,
  WorkflowOptimizationIntelligence,
} from '../components/revenue-opportunity';

export function RevenueOpportunityPage() {
  return (
    <PageWrapper>
      <Header
        title="Revenue Opportunity Engine"
        subtitle="A real-time opportunity layer that surfaces exactly where revenue is being lost and what actions will recover it."
        systemStatus="active"
        lastUpdated="1 minute ago"
        dataRefresh="Real-Time"
      />
      <PageContent className="px-4 md:px-6 py-4 md:py-6 space-y-4 md:space-y-6">
        <QueryBar />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <AIOpportunityFeed />
          <TopActionsPanel />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <ARRiskEscalationEngine />
          <DenialPreventionSystem />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <PatientPaymentIntelligence />
          <UnderpaymentDiscoveryEngine />
        </div>

        <WorkflowOptimizationIntelligence />
      </PageContent>
    </PageWrapper>
  );
}
