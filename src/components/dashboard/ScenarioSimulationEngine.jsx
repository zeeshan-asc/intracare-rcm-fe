import { useState } from 'react';

const initialScenarios = [
  {
    id: 1,
    title: 'Denial Rate Improves 2%',
    description: 'Enhanced adjudication process reduces denials from 6.2% to 4.2%',
    impact: '+$490,000',
    impactValue: 490000,
    confidence: 65,
  },
  {
    id: 2,
    title: 'Top Payers Reduces Payment Lag',
    description: 'Commercial payers return to 35-days baseline from current 46-day average',
    impact: '+$680,000',
    impactValue: 680000,
    confidence: 44,
  },
  {
    id: 3,
    title: 'AR Aging Collections Accelerate',
    description: '90+ day AR account recovery rate improve from 35% to 50%',
    impact: '+$390,000',
    impactValue: 390000,
    confidence: 55,
  },
  {
    id: 4,
    title: 'Self-Pay Collection Improve',
    description: 'Targeted self-pay collection efforts reduce aging 60+ balances by 30%',
    impact: '+$240,000',
    impactValue: 240000,
    confidence: 72,
  },
];

const highImpactOpportunities = [
  {
    title: 'Reduce Payer Lag',
    items: [
      'Target lag reduction from 46 → 35 days',
      'Impacted volume: ~$2.8M monthly collections',
    ],
    value: '+$620,000',
  },
  {
    title: 'Improve Denial Conversion',
    subtitle: 'Supporting Opportunity:',
    items: [
      'Adjustment rate currently at 22% (↑ 6%)',
      '~1200 claims eligible for faster reprocessing',
    ],
    value: '+$480,000',
  },
];

function ScenarioCard({ scenario, isSelected, onToggle }) {
  const confidenceColor = scenario.confidence >= 60 ? 'bg-success' : 'bg-primary';
  
  return (
    <div className="rounded-lg p-4" style={{ backgroundColor: '#E5E5E5' }}>
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={`w-7 h-7 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 cursor-pointer transition-colors ${
            isSelected 
              ? 'border-danger bg-white' 
              : 'border-border bg-white hover:border-primary-light'
          }`}
        >
          {isSelected && <div className="w-4 h-4 bg-danger rounded-sm" />}
        </button>
        
        {/* Content */}
        <div className="flex-1">
          <h4 className="font-poppins font-semibold text-base text-primary mb-1">
            {scenario.title}
          </h4>
          <p className="font-poppins text-xs text-text-secondary mb-3">
            {scenario.description}
          </p>
          
          {/* Impact & Confidence */}
          <div className="flex items-center justify-between">
            <div>
              <span className="font-poppins text-xs text-text-secondary">Impact: </span>
              <span className="font-poppins font-semibold text-sm text-success">{scenario.impact}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-poppins text-xs text-text-secondary">Confidence: </span>
              <span className="font-poppins font-semibold text-sm text-text-primary">{scenario.confidence}%</span>
              <div className="w-16 h-1.5 bg-surface-border rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${confidenceColor}`}
                  style={{ width: `${scenario.confidence}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScenarioSimulationEngine() {
  const [selectedIds, setSelectedIds] = useState([2]);
  
  const baseline = 2860000;
  const totalImpact = initialScenarios
    .filter(s => selectedIds.includes(s.id))
    .reduce((sum, s) => sum + s.impactValue, 0);
  const projected = baseline + totalImpact;
  
  const selectedScenarios = initialScenarios.filter(s => selectedIds.includes(s.id));
  
  const toggleScenario = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) 
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };
  
  const formatCurrency = (value) => {
    return '$' + value.toLocaleString();
  };
  
  return (
    <div className="border border-border rounded-xl p-5 md:p-6">
      {/* Header */}
      <div className="mb-5">
        <h3 className="font-poppins font-semibold text-xl lg:text-2xl text-primary leading-normal">
          Scenario Simulation Engine
        </h3>
        <p className="font-poppins font-light text-sm text-text-secondary leading-normal">
          Explore "what if" scenarios and see projected liquidity improvements
        </p>
      </div>

      {/* Baseline vs Projected */}
      <div className="rounded-xl p-4 mb-5 flex items-center justify-between" style={{ backgroundColor: '#E5E5E5' }}>
        <div>
          <p className="font-poppins text-xs text-text-secondary">Baseline</p>
          <p className="font-poppins font-bold text-2xl text-primary">{formatCurrency(baseline)}</p>
          <p className="font-poppins text-xs text-text-secondary">Current forecast</p>
        </div>
        <div className="text-right">
          <p className="font-poppins text-xs text-text-secondary">Projected</p>
          <p className="font-poppins font-bold text-2xl text-success">{formatCurrency(projected)}</p>
        </div>
      </div>

      {/* Scenario Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {initialScenarios.map((scenario) => (
          <ScenarioCard 
            key={scenario.id} 
            scenario={scenario}
            isSelected={selectedIds.includes(scenario.id)}
            onToggle={() => toggleScenario(scenario.id)}
          />
        ))}
      </div>

      {/* Selected Scenarios & High Impact Opportunities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        {/* Selected Scenarios */}
        <div className="bg-surface-muted rounded-xl p-4">
          <h4 className="font-poppins font-semibold text-lg text-primary mb-3">
            Selected Scenarios:
          </h4>
          {selectedScenarios.length > 0 ? (
            <div className="space-y-3">
              {selectedScenarios.map((scenario) => (
                <div key={scenario.id}>
                  <p className="font-poppins font-semibold text-base text-text-primary mb-1">
                    {scenario.title}
                  </p>
                  <p className="font-poppins text-sm text-text-secondary">
                    {scenario.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="font-poppins text-sm text-text-secondary">No scenarios selected</p>
          )}
        </div>

        {/* High Impact Opportunities */}
        <div className="bg-surface-muted rounded-xl p-4">
          <h4 className="font-poppins font-semibold text-lg text-primary mb-3">
            High Impact Opportunities
          </h4>
          <div className="space-y-3">
            {highImpactOpportunities.map((opp, index) => (
              <div key={index}>
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <p className="font-poppins font-semibold text-sm text-danger-dark">{opp.title}</p>
                    {opp.subtitle && (
                      <p className="font-poppins text-xs text-text-secondary">
                        <span className="font-semibold">{opp.subtitle}</span> {opp.title}
                      </p>
                    )}
                  </div>
                  <span className="font-poppins font-semibold text-sm text-success">{opp.value}</span>
                </div>
                <ul className="space-y-0.5">
                  {opp.items.map((item, idx) => (
                    <li key={idx} className="font-poppins text-xs text-text-secondary">
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex justify-end pt-2 border-t border-border">
              <span className="font-poppins text-sm text-text-secondary">
                Combined potential: <span className="font-semibold text-primary">$1,100,000</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="rounded-xl p-4" style={{ backgroundColor: '#E5E5E5' }}>
        <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
          AI Recommendation
        </h4>
        <p className="font-poppins text-sm text-text-secondary leading-relaxed">
          Forecasting on reducing payer lag for the top 2 commercial payers represents the highest confidence opportunity to improve liquidity. This scenario has 45% confidence with $620,000 potential impact.
        </p>
      </div>
    </div>
  );
}
