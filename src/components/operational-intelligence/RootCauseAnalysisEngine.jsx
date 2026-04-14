import { ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardHeader } from '../shared';

function Badge({ children, variant = 'primary' }) {
  const variants = {
    primary: 'bg-primary-light text-white',
    warning: 'bg-[#FF7A58] text-white',
    muted: 'bg-primary-muted text-primary',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}

function ParentRow({ label, value, percentage, variant = 'warning', hasRedDot = false }) {
  return (
    <div className="flex items-center gap-2 py-1">
      <ChevronDown size={14} className="text-text-secondary flex-shrink-0" />
      <Badge variant={variant}>{label}</Badge>
      <span className="font-poppins text-xs text-text-primary font-medium">{value}</span>
      {percentage && <span className="font-poppins text-xs text-text-secondary">{percentage}</span>}
      {hasRedDot && <span className="w-2 h-2 rounded-full bg-danger flex-shrink-0" />}
    </div>
  );
}

function ChildRow({ label, value, percentage }) {
  return (
    <div className="flex items-center gap-2 py-1.5 ml-6">
      <ChevronRight size={14} className="text-text-secondary flex-shrink-0" />
      <Badge variant="muted">{label}</Badge>
      <span className="font-poppins text-xs text-text-primary font-medium">{value}</span>
      {percentage && <span className="font-poppins text-xs text-text-secondary">{percentage}</span>}
    </div>
  );
}

function AIEvidenceBlock({ children }) {
  return (
    <div className="ml-5 py-2">
      <p className="font-poppins text-xs font-bold text-text-primary leading-relaxed">AI Evidence:</p>
      <p className="font-poppins text-xs text-text-primary leading-relaxed mt-1">{children}</p>
    </div>
  );
}

export function RootCauseAnalysisEngine() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-5">
        <CardHeader
          title="Root Cause Analysis Engine"
          subtitle="Structured reasoning behind revenue problems"
        />
        <button className="bg-primary text-white font-poppins text-xs px-4 py-2 rounded-md cursor-pointer hover:bg-primary-accent transition-colors">
          Click to explore
        </button>
      </div>
      
      {/* Main Tree Structure */}
      <div className="space-y-0">
        
        {/* Revenue Leakage - Root */}
        <ParentRow label="Revenue Leakage" value="$423K monthly" variant="warning" />
        
        {/* AI Insight - under Revenue Leakage */}
        <div className="ml-5 py-3 border-l border-gray-200 pl-4">
          <p className="font-poppins text-xs text-text-primary leading-relaxed">
            <span className="font-bold">AI Insight:</span>{' '}
            Revenue leakage is primarily driven by denial-related issues (47%), with authorization gaps contributing 68% of denial losses. Payment delays account for 34% of leakage, largely due to payer processing backlog. Underpayments are concentrated in contract variance discrepancies.
          </p>
          <p className="font-poppins text-xs text-text-primary leading-relaxed mt-1">
            Primary drivers are concentrated across commercial payer claims and specific service departments, indicating both upstream process gaps and payer-side inefficiencies.
          </p>
        </div>

        {/* Denials Branch */}
        <ParentRow label="Denials" value="$198K" percentage="47%" variant="warning" />
        
        <AIEvidenceBlock>
          Adjustment rate increased from 16% → 22%; ~1,200 claims impacted. Highest concentration in authorization-related denials across commercial payers.
        </AIEvidenceBlock>
        
        <div className="ml-5">
          <ChildRow label="Authorization Issues" value="$343K" percentage="12%" />
          <ChildRow label="Coding Errors" value="$193K" percentage="7%" />
          <ChildRow label="Timely Filing" value="$148K" percentage="31%" />
        </div>

        {/* Payment Delays Branch */}
        <div className="mt-3">
          <ParentRow label="Payment Delays" value="$198K" percentage="43%" variant="warning" hasRedDot />
        </div>
        
        <AIEvidenceBlock>
          Avg payment lag increased from 35 → 46 days (service date vs payment date); ~$2.8M in claims currently delayed beyond expected cycle.
        </AIEvidenceBlock>
        
        <div className="ml-5">
          <ChildRow label="Payer Processing Backlog" value="$298K" percentage="37%" />
          <ChildRow label="Internal Workflow Lag" value="$38K" percentage="7%" />
        </div>

        {/* Underpayments Branch */}
        <div className="mt-3">
          <ParentRow label="Underpayments" value="$128K" percentage="20%" variant="warning" />
        </div>
        
        <AIEvidenceBlock>
          Expected reimbursement vs actual payments shows 6–8% variance; highest gaps observed in commercial payer contracts.
        </AIEvidenceBlock>
        
        <div className="ml-5">
          <ChildRow label="Contract Rate Variance" value="$144K" percentage="24%" />
          <ChildRow label="Improper Bundling" value="$120K" percentage="14%" />
        </div>
      </div>
      
      {/* Bottom Section - Recommendations and Focus Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <div className="bg-[#E8EEF4] rounded-md p-4">
          <p className="font-poppins font-bold text-sm text-text-primary mb-3">AI Recommended Actions</p>
          <ul className="space-y-1.5">
            <li className="font-poppins text-xs text-text-secondary flex items-start gap-2">
              <span className="text-text-primary">•</span> Fix authorization workflow for top denial categories (potential recovery: ~$134K)
            </li>
            <li className="font-poppins text-xs text-text-secondary flex items-start gap-2">
              <span className="text-text-primary">•</span> Prioritize follow-ups on delayed commercial payer claims &gt;30 days (potential: ~$98K)
            </li>
            <li className="font-poppins text-xs text-text-secondary flex items-start gap-2">
              <span className="text-text-primary">•</span> Audit contract variance for top underpaying payers (potential: ~$52K)
            </li>
          </ul>
        </div>
        
        <div className="bg-[#E8EEF4] rounded-md p-4">
          <p className="font-poppins font-bold text-sm text-text-primary mb-3">Focus Areas</p>
          <ul className="space-y-1.5">
            <li className="font-poppins text-xs text-text-secondary flex items-start gap-2">
              <span className="text-text-primary">•</span> Payer: Top 2 commercial payers driving majority of delays
            </li>
            <li className="font-poppins text-xs text-text-secondary flex items-start gap-2">
              <span className="text-text-primary">•</span> Department: Primary care &amp; specialty services with highest denial rates
            </li>
            <li className="font-poppins text-xs text-text-secondary flex items-start gap-2">
              <span className="text-text-primary">•</span> Claim Type: Authorization-dependent procedures
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
