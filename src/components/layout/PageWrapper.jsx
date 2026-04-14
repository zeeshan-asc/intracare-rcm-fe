export function PageWrapper({ children, className = '' }) {
  return (
    <div className={`min-h-screen bg-surface ${className}`}>
      {children}
    </div>
  );
}

export function PageContent({ children, className = '' }) {
  return (
    <main className={`px-4 py-4 ${className}`}>
      {children}
    </main>
  );
}

export function Section({ children, className = '' }) {
  return (
    <section className={`mb-4 ${className}`}>
      {children}
    </section>
  );
}

export function Grid({ children, cols = 2, gap = 4, className = '' }) {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gapClass = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    6: 'gap-6',
  };

  return (
    <div className={`grid ${colsClass[cols]} ${gapClass[gap]} ${className}`}>
      {children}
    </div>
  );
}
