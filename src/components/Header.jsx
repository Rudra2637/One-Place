import { Search, PlusCircle, Bookmark, ExternalLink, Sun, Moon } from 'lucide-react'

const GITHUB_ISSUE_URL = 'https://github.com/Rudra2637/One-Place/issues/new?title=%5BResource+Suggestion%5D&body=Describe+the+tool+or+resource+you+would+like+to+add+with+its+link+and+category.'

export function Header({
  searchQuery,
  setSearchQuery,
  totalCount,
  filteredCount,
  showFavoritesOnly,
  setShowFavoritesOnly,
  favoritesCount,
  theme,
  onToggleTheme
}) {
  return (
    <header className="border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)]/95 backdrop-blur sticky top-0 z-30 transition-colors">
      {/* Top utility bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="flex items-baseline gap-2.5">
            <h1 className="text-lg font-semibold tracking-tight text-[var(--text-primary)] m-0">
              Oneplace
            </h1>
            <span className="text-xs text-[var(--text-muted)] font-mono border border-[var(--border-subtle)] rounded px-1.5 py-0.5">
              v1.0
            </span>
          </div>
          <div className="h-4 w-px bg-[var(--border-subtle)] hidden sm:block" />
          <p className="text-xs text-[var(--text-muted)] hidden md:block">
            Developer Reference Console
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex-1 sm:w-72">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources, topics, sources..."
              className="w-full bg-[var(--bg-input)] border border-[var(--border-subtle)] rounded-md pl-8 pr-8 py-1.5 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-link)] transition-colors"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] px-1 cursor-pointer"
                title="Clear search"
              >
                ×
              </button>
            ) : (
              <kbd className="hidden lg:inline-block absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-[var(--text-muted)] font-mono border border-[var(--border-subtle)] rounded px-1 py-0.2 bg-[var(--bg-canvas)]">
                /
              </kbd>
            )}
          </div>

          {/* Theme Color Toggle (Dark <-> White/Light) */}
          <button
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center p-1.5 rounded-md text-xs font-medium border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] transition-colors cursor-pointer"
            title={theme === 'dark' ? "Toggle white background (Light mode)" : "Toggle dark background (Dark mode)"}
            aria-label="Toggle theme color"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Pinned filter toggle */}
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium border transition-all cursor-pointer ${
              showFavoritesOnly
                ? 'bg-[var(--accent-link)] border-[var(--accent-link)] text-white shadow-xs'
                : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)]'
            }`}
            title="Toggle pinned / saved resources"
          >
            <Bookmark className={`w-3.5 h-3.5 ${showFavoritesOnly ? 'fill-white text-white' : ''}`} />
            <span>Pinned</span>
            {favoritesCount > 0 && (
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded transition-colors ${
                  showFavoritesOnly
                    ? 'bg-black/20 text-white'
                    : 'bg-[var(--bg-subtle)] text-[var(--text-primary)]'
                }`}
              >
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Direct link to open GitHub Issue */}
          <a
            href={GITHUB_ISSUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-link)] hover:text-[var(--accent-link)] transition-colors"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Suggest Link</span>
          </a>
        </div>
      </div>

      {/* Tagline & Issue Note Banner */}
      <div className="border-t border-[var(--border-hairline)] bg-[var(--bg-surface)]/60 px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs">
          <div className="text-[var(--text-muted)]">
            A place to find all necessary tools for tech — if you don't find one,{' '}
            <a
              href={GITHUB_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-link)] hover:underline underline-offset-2 font-medium inline-flex items-center gap-1"
            >
              create an issue
              <ExternalLink className="w-3 h-3" />
            </a>{' '}
            and we'll add it.
          </div>
          <div className="text-[var(--text-muted)] font-mono text-[11px] flex items-center gap-3 self-start md:self-auto">
            <span>
              {searchQuery || showFavoritesOnly
                ? `Showing ${filteredCount} of ${totalCount} resources`
                : `${totalCount} indexed resources`}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
