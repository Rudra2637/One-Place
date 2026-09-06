import { ResourceRow } from './ResourceRow'

export function ResourceSection({
  category,
  resources,
  favorites,
  onToggleFavorite
}) {
  if (resources.length === 0) {
    return null
  }

  return (
    <section id={category.id} className="mb-10 scroll-mt-28">
      {/* Category Section Header */}
      <div className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-3 rounded-t-md flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors">
        <div className="flex items-center gap-3">
          {/* 3px vertical category indicator bar */}
          <div
            className="w-[3px] h-5 rounded-full shrink-0"
            style={{ backgroundColor: category.color }}
          />
          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-base font-semibold text-[var(--text-primary)]">
                {category.name}
              </h2>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                ({resources.length})
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              {category.description}
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[var(--text-muted)]">
          <span>zone: {category.id}</span>
        </div>
      </div>

      {/* Structured Rows Table Container */}
      <div className="border-x border-b border-[var(--border-subtle)] rounded-b-md overflow-hidden bg-[var(--bg-canvas)] transition-colors">
        {resources.map((res) => (
          <ResourceRow
            key={res.id}
            resource={res}
            categoryColor={category.color}
            isFavorite={favorites.includes(res.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  )
}
