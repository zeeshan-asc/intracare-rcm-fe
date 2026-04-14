import { ArrowDown, ArrowUp } from 'lucide-react';
import { Card, CardHeader } from '../shared';

const varianceDrivers = [
  {
    id: 1,
    label: 'Denial Rate Increase',
    claimsMeta: '45% of variance',
    impact: '-$180K',
    isNegative: true,
    tone: 'critical',
  },
  {
    id: 2,
    label: 'Payer Payment Delays',
    claimsMeta: '30% of variance',
    impact: '-$120K',
    isNegative: true,
    tone: 'critical',
  },
  {
    id: 3,
    label: 'AR Aging Growth',
    claimsMeta: '15% of variance',
    impact: '-$60K',
    isNegative: true,
    tone: 'critical',
  },
  {
    id: 4,
    label: 'Volume Improvement',
    claimsMeta: '10% of variance',
    impact: '+$40K',
    isNegative: false,
    tone: 'positive',
  },
];

function VarianceStackedBar() {
  return (
    <div className="h-5 rounded-md overflow-hidden flex border border-[#D9B9B2] bg-[#F7DFD9]">
      <div className="bg-[#EE0606]" style={{ width: '45%' }} />
      <div className="w-px bg-white/70" />
      <div className="bg-[#EE0606]" style={{ width: '30%' }} />
      <div className="w-px bg-white/70" />
      <div className="bg-[#EE0606]" style={{ width: '15%' }} />
      <div className="bg-[#12B012]" style={{ width: '10%' }} />
    </div>
  );
}

function DriverRow({ label, claimsMeta, impact, isNegative, tone }) {
  const toneStyles = {
    critical: {
      rowBg: 'bg-[#F7D9D2]',
      rowBorder: 'border-[#E99A8E]',
      iconBg: 'bg-[#EA8A79]',
      iconColor: 'text-[#8A1D14]',
      valueColor: 'text-[#7E1818]',
    },
    positive: {
      rowBg: 'bg-[#A9DCA1]',
      rowBorder: 'border-[#2FA848]',
      iconBg: 'bg-[#45B95A]',
      iconColor: 'text-[#0A5D18]',
      valueColor: 'text-[#0A5D18]',
    },
  };
  const style = toneStyles[tone] || toneStyles.critical;

  return (
    <div className={`flex items-center justify-between rounded-md border p-2.5 ${style.rowBg} ${style.rowBorder}`}>
      <div className="flex items-center gap-2.5">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${style.iconBg}`}>
          {isNegative ? (
            <ArrowDown size={14} className={style.iconColor} strokeWidth={2.75} />
          ) : (
            <ArrowUp size={14} className={style.iconColor} strokeWidth={2.75} />
          )}
        </div>
        <div>
          <p className="font-poppins text-sm font-semibold text-[#222] leading-tight">{label}</p>
          <p className="font-poppins text-[10px] text-[#666] leading-tight mt-0.5">{claimsMeta}</p>
        </div>
      </div>
      <p className={`font-poppins text-xs font-semibold ${style.valueColor}`}>{impact}</p>
    </div>
  );
}

export function PerformanceVarianceExplanation() {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between mb-3">
        <CardHeader
          title="Performance Variance Explanation"
          subtitle="Gap between expected vs actual with driver breakdown"
        />
      </div>

      <div className="rounded-md border border-[#D8DEE6] bg-[#F5F7FA] p-3">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="font-poppins text-[22px] font-semibold leading-none text-[#1F1F1F]">Net Collections</p>
            <p className="font-poppins text-[10px] text-[#5F5F5F] mt-1">
              Expected: $2.5M &nbsp; - &nbsp; Actual: $2.4M
            </p>
          </div>
          <div className="text-right">
            <p className="font-poppins text-lg font-semibold text-[#781C1C] leading-tight">↑ -$400K</p>
            <p className="font-poppins text-[11px] text-[#5F5F5F]">(-14.3%)</p>
          </div>
        </div>

        <div className="mb-2">
          <p className="font-poppins text-[9px] tracking-wide text-[#6B6B6B] uppercase mb-1.5">Variance Drivers</p>
          <VarianceStackedBar />
        </div>

        <div className="space-y-1.5">
          {varianceDrivers.map((driver) => (
            <DriverRow key={driver.id} {...driver} />
          ))}
        </div>

        <div className="mt-3 rounded-md border border-[#7FA6D3] bg-[#EFEFEF] p-2.5">
          <p className="font-poppins text-xs text-[#2E2E2E] leading-relaxed">
            <span className="font-semibold">Summary:</span> The 14.3% net collections variance is primary driven by denial
            rate increase (45%) and payer payment delays (30%). Focus remediation efforts on these key areas.
          </p>
        </div>
      </div>
    </Card>
  );
}
