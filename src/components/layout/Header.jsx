import { StatusIndicator } from '../shared';

export function Header({
  title = 'Cash Intelligence & Liquidity Forecast',
  subtitle = 'AI-powered financial command interface for predicting cash behavior and managing liquidity',
  systemStatus = 'active',
  lastUpdated = '2 minutes ago',
  dataRefresh = 'Real-Time',
}) {
  return (
    <header className="bg-gradient-header px-4 md:px-6 py-4 md:py-5 relative">
      <div className="max-w-full">
        <h1 className="font-poppins font-semibold text-xl md:text-2xl lg:text-3xl text-white leading-tight">
          {title}
        </h1>
        <p className="font-poppins text-sm md:text-base text-white mt-1 opacity-90">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-2 text-white">
          <div className="flex items-center gap-2">
            <StatusIndicator status={systemStatus} />
            <span className="font-prompt text-sm md:text-base">AI System Active</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-xs md:text-sm">
            <span className="font-prompt">
              Last Updated: {lastUpdated}
            </span>
            <span className="font-prompt">
              Data Refresh: {dataRefresh}
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border opacity-50" />
    </header>
  );
}
