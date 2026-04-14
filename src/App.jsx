import { Header } from './components/layout';
import { PageWrapper, PageContent } from './components/layout';
import { 
  AIQueryInterface, 
  CashForecastChart, 
  LiquidityRiskPanel,
  RevenueFlowPipeline,
  PaymentBehaviorIntelligence,
  EntityContributionIntelligence,
  StrategicInsights,
  ScenarioSimulationEngine
} from './components/dashboard';

function App() {
  return (
    <PageWrapper>
      <Header
        title="Cash Intelligence & Liquidity Forecast"
        subtitle="AI-powered financial command interface for predicting cash behavior and managing liquidity"
        systemStatus="active"
        lastUpdated="2 minutes ago"
        dataRefresh="Real-Time"
      />
      <PageContent className="px-4 md:px-6 py-4 md:py-6 space-y-4 md:space-y-6">
        {/* Section 2: AI Query Interface */}
        <AIQueryInterface />

        {/* Section 3: Cash Forecast & Liquidity Risk */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <CashForecastChart />
          <LiquidityRiskPanel />
        </div>

        {/* Section 4: Revenue Flow Pipeline */}
        <RevenueFlowPipeline />

        {/* Section 5: Payment Behavior Intelligence & Cash Driver Decomposition */}
        <PaymentBehaviorIntelligence />

        {/* Section 6: Entity Contribution Intelligence */}
        <EntityContributionIntelligence />

        {/* Section 7: Strategic Insights */}
        <StrategicInsights />

        {/* Section 8: Scenario Simulation Engine */}
        <ScenarioSimulationEngine />
      </PageContent>
    </PageWrapper>
  );
}

export default App;
