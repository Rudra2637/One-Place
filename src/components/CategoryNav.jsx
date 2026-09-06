export function CategoryNav({
  categories,
  activeCategory,
  onSelectCategory,
  categoryCounts
}) {
  return (
    <nav className="border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-4 sm:px-6 lg:px-8 overflow-x-auto transition-colors">
      <div className="max-w-7xl mx-auto flex items-center gap-1 py-2 text-xs">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-3 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
            activeCategory === 'all'
              ? 'text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-semibold'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-transparent'
          }`}
        >
          All Categories
        </button>

        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id
          const count = categoryCounts[cat.id] || 0

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap border cursor-pointer ${
                isSelected
                  ? 'text-[var(--text-primary)] bg-[var(--bg-surface)] border-[var(--border-subtle)] font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] border-transparent'
              }`}
            >
              {/* Category indicator pip */}
              <span
                className="w-2 h-2 rounded-full inline-block shrink-0"
                style={{ backgroundColor: cat.color }}
              />
              <span>{cat.name}</span>
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                ({count})
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
