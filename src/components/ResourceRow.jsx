import { useState } from 'react'
import { Copy, Check, Bookmark, ExternalLink } from 'lucide-react'

export function ResourceRow({
  resource,
  categoryColor,
  isFavorite,
  onToggleFavorite
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(resource.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="group relative flex flex-col md:flex-row md:items-center justify-between gap-3 px-4 py-3 border-b border-[var(--border-hairline)] bg-[var(--bg-canvas)] hover:bg-[var(--row-hover)] transition-colors">
      {/* 2px left accent border on hover matching the category */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: categoryColor }}
      />

      {/* Main Content: Title + Description */}
      <div className="flex-1 min-w-0 pr-2">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="m-0 text-sm font-medium">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-primary)] hover:text-[var(--accent-link)] transition-colors inline-flex items-center gap-1.5"
            >
              <span>{resource.title}</span>
              <ExternalLink className="w-3 h-3 text-[var(--text-muted)] opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </h3>

          {/* Technical source host badge in monospace */}
          <span className="font-mono text-[11px] text-[var(--text-muted)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] px-1.5 py-0.5 rounded">
            {resource.source}
          </span>
        </div>

        <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2 md:line-clamp-1">
          {resource.description}
        </p>
      </div>

      {/* Meta & Interactive Controls */}
      <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
        {/* Classification Tag / Metric */}
        {resource.tag && (
          <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[var(--text-muted)] bg-[var(--bg-surface)]">
            {resource.tag}
          </span>
        )}

        {/* Copy URL action */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer"
          title={copied ? 'URL Copied!' : 'Copy direct link'}
          aria-label="Copy direct link"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-500" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Pin / Favorite action */}
        <button
          onClick={() => onToggleFavorite(resource.id)}
          className={`p-1.5 rounded transition-colors cursor-pointer ${
            isFavorite
              ? 'text-[var(--accent-link)] hover:bg-[var(--bg-subtle)]'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
          }`}
          title={isFavorite ? 'Remove bookmark' : 'Pin resource'}
          aria-label={isFavorite ? 'Remove bookmark' : 'Pin resource'}
        >
          <Bookmark
            className={`w-3.5 h-3.5 ${isFavorite ? 'fill-[var(--accent-link)]' : ''}`}
          />
        </button>
      </div>
    </div>
  )
}
