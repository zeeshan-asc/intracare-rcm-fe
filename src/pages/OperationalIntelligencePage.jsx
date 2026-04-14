import { Header, PageWrapper, PageContent } from '../components/layout';
import {
  SummaryStatsRow,
  TrendIntelligenceSurface,
  AlertBanner,
  AutomatedInsightsStream,
  PerformanceOutlierDetection,
  PayerBehaviorIntelligence,
  RootCauseAnalysisEngine,
  ARRiskHeatmap,
  SegmentationIntelligence,
  DenialPatternIntelligence,
  PerformanceVarianceExplanation,
} from '../components/operational-intelligence';

export function OperationalIntelligencePage() {
  return (
    <PageWrapper>
      <Header
        title="Operational Intelligence & Root Cause"
        subtitle="Continuously detect performance shifts, isolate underperforming segments, and uncover root causes to enable proactive operational correction."
        systemStatus="active"
        lastUpdated="2 minutes ago"
        dataRefresh="Real-Time"
      />
      <PageContent className="px-4 md:px-6 py-4 md:py-6 space-y-4 md:space-y-6">
        <SummaryStatsRow />
        
        <TrendIntelligenceSurface />
        
        <AlertBanner
          title="Collection Rate Analysis"
          description="Below target. Cash conversion weakening across 3 clinic segments."
          current="82"
          expected="85-95"
          status="Monitor Closely"
        />
        
        <AutomatedInsightsStream />
        
        <PerformanceOutlierDetection />
        
        <PayerBehaviorIntelligence />
        
        <RootCauseAnalysisEngine />
        
        <ARRiskHeatmap />
        
        <SegmentationIntelligence />
        
        <DenialPatternIntelligence />
        
        <PerformanceVarianceExplanation />
      </PageContent>
    </PageWrapper>
  );
}
