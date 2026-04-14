import { Mic } from 'lucide-react';

export function QueryBar() {
  return (
    <div
      className="rounded-lg px-4 py-3 shadow-md"
      style={{
        background:
          'linear-gradient(168.52deg, rgba(255, 122, 88, 0.41) 0%, rgb(255, 122, 88) 75.273%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)',
        boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.19)',
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex-1 flex items-center gap-2 rounded-md px-3 py-2"
          style={{
            background: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.25)',
          }}
        >
          <input
            type="text"
            placeholder="Ask which opportunities to act on and how to maximize recovery..."
            className="flex-1 bg-transparent text-text-primary placeholder-text-secondary/80 font-poppins text-sm outline-none"
          />
          <button 
            className="text-text-primary/80 hover:text-text-primary transition-colors cursor-pointer"
            aria-label="Voice input"
          >
            <Mic size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
