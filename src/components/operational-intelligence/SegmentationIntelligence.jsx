import { X, Check } from 'lucide-react';
import { Card, CardHeader } from '../shared';

const segments = [
  {
    id: 1,
    name: 'BlueCross BlueShield',
    type: 'Payer',
    status: 'localized',
    hasLogo: true,
    metrics: {
      collections: false,
      denials: false,
      arAging: false,
      collRate: false,
    },
  },
  {
    id: 2,
    name: 'Cardiology',
    type: 'Specialty',
    status: 'localized',
    hasLogo: false,
    metrics: {
      collections: false,
      denials: true,
      arAging: false,
      collRate: false,
    },
  },
  {
    id: 3,
    name: 'Medicaid',
    type: 'Payer',
    status: 'localized',
    hasLogo: true,
    metrics: {
      collections: false,
      denials: true,
      arAging: false,
      collRate: false,
    },
  },
];

const statusLegend = [
  { color: 'bg-[#2E9E47]', label: 'Healthy' },
  { color: 'bg-[#E9A800]', label: 'Localized Issue' },
  { color: 'bg-[#D64545]', label: 'Systemic Issue' },
];

function FilterTabs() {
  const tabs = ['Payer', 'Facility', 'Provider', 'Specialty'];
  return (
    <div className="flex items-center gap-2">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-4 py-1.5 rounded-md text-xs font-poppins transition-colors cursor-pointer border ${
            index === 0 
              ? 'bg-primary text-white border-primary font-medium' 
              : 'bg-white text-text-secondary border-gray-300 hover:bg-gray-50'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function LegendItem({ color, label }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      <span className="font-poppins text-[11px] text-text-secondary">{label}</span>
    </div>
  );
}

function MetricIndicator({ isHealthy }) {
  const toneClass = isHealthy
    ? 'bg-[#63D96A] text-[#0B3D0B]'
    : 'bg-[#F7B4A5] text-[#C62828]';

  return (
    <div className={`w-9 h-9 rounded-full flex items-center justify-center mx-auto ${toneClass}`}>
      {isHealthy ? (
        <Check size={16} strokeWidth={3.25} />
      ) : (
        <X size={16} strokeWidth={3.25} />
      )}
    </div>
  );
}

function StatusBadge() {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium text-[#E9A800]">
      Localized
    </span>
  );
}

function PayerLogo({ name }) {
  if (name === 'BlueCross BlueShield') {
    return (
      <img src="/blue-cross.png" alt="BlueCross BlueShield logo" className="h-8 w-auto object-contain" />
    );
  }
  if (name === 'Medicaid') {
    return (
      <img src="/medicaid.png" alt="Medicaid logo" className="h-6 w-auto object-contain" />
    );
  }
  return <span className="font-poppins font-semibold text-sm text-text-primary">{name}</span>;
}

function SegmentCard({ name, type, status, hasLogo, metrics }) {
  return (
    <div className="bg-[#F3F4F6] border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          {hasLogo ? (
            <PayerLogo name={name} />
          ) : (
            <span className="font-poppins font-semibold text-lg text-text-primary">{name}</span>
          )}
          <p className="font-poppins text-[10px] text-text-secondary mt-0.5">{type}</p>
        </div>
        <StatusBadge />
      </div>
      
      <div className="flex items-center justify-center gap-20">
        <div className="flex flex-col items-center">
          <p className="font-poppins text-[11px] text-[#565E67] font-semibold mb-2">Collections</p>
          <MetricIndicator isHealthy={metrics.collections} />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-poppins text-[11px] text-[#565E67] font-semibold mb-2">Denials</p>
          <MetricIndicator isHealthy={metrics.denials} />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-poppins text-[11px] text-[#565E67] font-semibold mb-2">AR Aging</p>
          <MetricIndicator isHealthy={metrics.arAging} />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-poppins text-[11px] text-[#565E67] font-semibold mb-2">Coll. Rate</p>
          <MetricIndicator isHealthy={metrics.collRate} />
        </div>
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="flex items-center justify-center gap-6 mt-5">
      {statusLegend.map((item, index) => (
        <LegendItem key={index} color={item.color} label={item.label} />
      ))}
    </div>
  );
}

export function SegmentationIntelligence() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-5">
        <CardHeader
          title="Segmentation Intelligence"
          subtitle="Identify localized vs systematic issues across segments"
        />
        <FilterTabs />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {segments.slice(0, 2).map((segment) => (
          <SegmentCard key={segment.id} {...segment} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {segments.slice(2).map((segment) => (
          <SegmentCard key={segment.id} {...segment} />
        ))}
      </div>

      <Legend />
    </Card>
  );
}
