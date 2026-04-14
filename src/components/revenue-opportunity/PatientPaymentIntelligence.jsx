import { ChevronUp } from 'lucide-react';
import { Card, CardHeader } from '../shared';

const summaryMetrics = [
  { label: 'Total Patient Balance', value: '$8.7K' },
  { label: 'Accounts Analyzed', value: '4' },
  { label: 'Avg. Willingness', value: '73%' },
  { label: 'Optimal Window', value: 'Evening' },
];

const patients = [
  {
    id: 'ACC-001',
    message: '"Hi, your healthcare bill of $2,400 is now 45 days overdue. Reply PLAN to set up a payment arrangement."',
    balance: '$2.4K',
    willingness: '85%',
    channel: 'SMS',
    timing: 'Tonight 7-8pm',
  },
  {
    id: 'ACC-002',
    message: '"Your $1,850 balance is due. Click here to pay online or call 1-800-XXX-XXXX for a payment plan."',
    balance: '$1.9K',
    willingness: '72%',
    channel: 'SMS',
    timing: 'Tomorrow morning 10am',
  },
  {
    id: 'ACC-003',
    message: '"Requires phone conversation - high balance and engagement needed"',
    balance: '$3.2K',
    willingness: '58%',
    channel: 'CALL',
    timing: 'Business hours',
  },
  {
    id: 'ACC-004',
    message: '"Quick reminder: Your $1,200 bill is ready to pay online. Reply THANKS once paid."',
    balance: '$1.2K',
    willingness: '78%',
    channel: 'SMS',
    timing: 'Afternoon 2-3pm',
  },
];

function PatientCard({ patient }) {
  return (
    <div className="border border-surface-border rounded overflow-hidden">
      <div className="bg-[#f9f9f9] border-b border-surface-border p-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="font-poppins font-semibold text-sm text-text-primary">
              {patient.id}
            </p>
            <p className="font-poppins text-xs text-text-secondary/70 mt-0.5">
              {patient.message}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="font-poppins font-bold text-xl text-primary-accent">
              {patient.balance}
            </p>
            <p className="font-poppins text-xs text-text-secondary">
              Balance Due
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 mt-3">
          <div>
            <p className="font-poppins text-xs text-text-secondary/70 uppercase">Willingness</p>
            <p className="font-poppins font-semibold text-xs text-text-primary">{patient.willingness}</p>
          </div>
          <div>
            <p className="font-poppins text-xs text-text-secondary/70 uppercase">Channel</p>
            <span className="inline-block bg-danger-light rounded px-1.5 py-0.5">
              <p className="font-prompt text-xs text-danger-dark">{patient.channel}</p>
            </span>
          </div>
          <div>
            <p className="font-poppins text-xs text-text-secondary/70 uppercase">Timing</p>
            <p className="font-poppins font-semibold text-xs text-primary-accent">{patient.timing}</p>
          </div>
        </div>
      </div>
      
      <div className="p-3 flex gap-2">
        <button className="flex-1 bg-primary-muted border border-primary text-primary font-poppins font-semibold text-xs py-2 px-4 rounded shadow-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
          Send Now
        </button>
        <button className="flex-1 bg-[#f9f9f9] border border-surface-border text-text-secondary font-poppins font-semibold text-xs py-2 px-4 rounded shadow-sm hover:bg-surface-light transition-colors cursor-pointer">
          Schedule
        </button>
      </div>
    </div>
  );
}

export function PatientPaymentIntelligence() {
  return (
    <Card className="p-4">
      <CardHeader
        title="Patient Payment Intelligence"
        subtitle="Segment behavior & recommend optimal contact strategy for each patient"
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
        {summaryMetrics.map((metric, index) => (
          <div key={index} className="bg-surface-highlight rounded p-3">
            <p className="font-poppins text-xs text-primary uppercase">
              {metric.label}
            </p>
            <p className="font-poppins font-bold text-xl text-primary mt-1">
              {metric.value}
            </p>
          </div>
        ))}
      </div>
      
      <div className="space-y-3 mt-4">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </Card>
  );
}
