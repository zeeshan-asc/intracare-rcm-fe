import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  ArrowRight,
  Building2,
  CreditCard,
  Mic,
  User,
  TrendingDown,
  TrendingUp,
  ChevronDown,
  ChevronRight,
  Circle,
  CheckCircle2,
  XCircle,
  Info,
  Activity,
  DollarSign,
  Calendar,
  Clock,
  Target,
  Zap,
} from 'lucide-react';

const iconMap = {
  warning: AlertTriangle,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  'arrow-right': ArrowRight,
  hospital: Building2,
  'credit-card': CreditCard,
  mic: Mic,
  user: User,
  'trending-down': TrendingDown,
  'trending-up': TrendingUp,
  'chevron-down': ChevronDown,
  'chevron-right': ChevronRight,
  circle: Circle,
  'check-circle': CheckCircle2,
  'x-circle': XCircle,
  info: Info,
  activity: Activity,
  dollar: DollarSign,
  calendar: Calendar,
  clock: Clock,
  target: Target,
  zap: Zap,
};

export function Icon({ name, size = 20, className = '', ...props }) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent size={size} className={className} {...props} />;
}

export function StatusIndicator({ status = 'active', className = '' }) {
  const statusColors = {
    active: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-danger',
    inactive: 'bg-border',
  };

  return (
    <span
      className={`inline-block w-2.5 h-2.5 md:w-3 md:h-3 rounded-full animate-pulse ${statusColors[status]} ${className}`}
    />
  );
}
