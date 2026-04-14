import { Mic } from 'lucide-react';

export function AIQueryInterface({
  query = "Why is the forecasted cash down despite an increase in charges?",
}) {
  return (
    <div 
      className="rounded-lg shadow-md overflow-hidden"
      style={{
        background: 'linear-gradient(168.52deg, rgba(255, 122, 88, 0.41) 0%, rgb(255, 122, 88) 75.273%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)',
        boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.19)',
      }}
    >
      {/* Query Input Bar */}
      <div className="mx-3 mt-3 mb-3">
        <div 
          className="flex items-center gap-3 rounded-xl px-4 py-2.5"
          style={{
            background: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.25)',
          }}
        >
          <span className="flex-1 font-poppins text-sm md:text-base text-text-primary leading-tight">
            {query}
          </span>
          <button 
            className="p-2 rounded-md hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Voice input"
          >
            <Mic size={18} className="text-text-primary" />
          </button>
        </div>
      </div>

      {/* Response Area */}
      <div className="mx-3 mb-3 bg-white rounded-lg p-4 min-h-[140px]">
        <div className="font-poppins text-sm md:text-base text-text-secondary leading-relaxed space-y-3">
          <p>
            Forecasted cash is down by $660,000 despite a $420,000 increase in charges due to three primary factors impacting cash realization:
          </p>
          <p>
            <span className="font-bold">1. Denial Impact (−$650,000):</span>{' '}
            Adjustment rates have increased to 22%, leading to a higher volume of claims requiring rework or write-offs. This is slowing conversion from claims to cash.
          </p>
          <p>
            <span className="font-bold">2. Payment Lag (−$290,000):</span>{' '}
            Average payment cycle for top commercial payers has increased from 35 to 46 days, delaying approximately $2.8M in expected monthly collections.
          </p>
          <p>
            <span className="font-bold">3. AR Aging (−$180,000):</span>{' '}
            Accounts receivable beyond 90 days have increased from 18% to 26%, reducing near-term recovery rates and impacting liquidity.
          </p>
          <p className="font-bold underline">Recommended Focus:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Prioritize reducing payer lag for top commercial payers</li>
            <li>Accelerate denial rework for high-value claims</li>
            <li>Target recovery of AR &gt;90 day accounts</li>
          </ul>
          <p>
            <span className="font-bold">Addressing these areas could recover ~$680K–$970K in near-term cash.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
