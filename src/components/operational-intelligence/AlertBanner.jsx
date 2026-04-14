export function AlertBanner({
  title = 'Collection Rate Analysis',
  description = 'Below target. Cash conversion weakening across 3 clinic segments.',
  current = '82',
  expected = '85-95',
  status = 'Monitor Closely',
}) {
  return (
    <div className="bg-[#F5F5F5] border border-border rounded-md p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <p className="font-poppins font-bold text-base text-text-primary">{title}</p>
          <p className="font-poppins text-sm text-text-secondary mt-0.5">{description}</p>
        </div>
        <div className="flex items-center gap-3 text-xs font-poppins">
          <span className="text-text-secondary">Current: <span className="font-semibold text-text-primary">{current}</span></span>
          <span className="text-text-secondary">Expected: <span className="font-semibold text-text-primary">{expected}</span></span>
          <span className="bg-primary-light text-white px-3 py-1 rounded font-medium">{status}</span>
        </div>
      </div>
    </div>
  );
}
