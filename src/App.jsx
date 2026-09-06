import { useState, useEffect, useMemo } from 'react'
import { CATEGORIES, RESOURCES } from './data/resources'
import { Header } from './components/Header'
import { CategoryNav } from './components/CategoryNav'
import { ResourceSection } from './components/ResourceSection'
import { ExternalLink, Terminal } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'

const GITHUB_ISSUE_URL = 'https://github.com/Rudra2637/One-Place/issues/new?title=%5BResource+Suggestion%5D&body=Describe+the+tool+or+resource+you+would+like+to+add+with+its+link+and+category.'

function GithubIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

const STORAGE_KEY_FAVORITES = 'oneplace_favorites'
const STORAGE_KEY_THEME = 'oneplace_theme'

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_THEME) || 'dark'
    } catch {
      return 'dark'
    }
  })

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FAVORITES)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(STORAGE_KEY_THEME, theme)
    } catch (e) {
      console.error('Failed to save theme', e)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favorites))
    } catch (e) {
      console.error('Failed to sync favorites to localStorage', e)
    }
  }, [favorites])

  // Keyboard shortcut listener (/ or Cmd/Ctrl+K to focus search)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k')) && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault()
        const searchInput = document.querySelector('input[type="text"]')
        if (searchInput) {
          searchInput.focus()
        }
      }
      if (e.key === 'Escape') {
        setSearchQuery('')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Toggle favorite
  const handleToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Filtering logic
  const filteredResources = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()

    return RESOURCES.filter((res) => {
      if (showFavoritesOnly && !favorites.includes(res.id)) {
        return false
      }

      if (activeCategory !== 'all' && res.categoryId !== activeCategory) {
        return false
      }

      if (!q) return true

      return (
        res.title.toLowerCase().includes(q) ||
        res.description.toLowerCase().includes(q) ||
        res.source.toLowerCase().includes(q) ||
        (res.tag && res.tag.toLowerCase().includes(q))
      )
    })
  }, [searchQuery, activeCategory, showFavoritesOnly, favorites])

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = {}
    CATEGORIES.forEach((cat) => {
      counts[cat.id] = RESOURCES.filter((r) => r.categoryId === cat.id).length
    })
    return counts
  }, [])

  // Visible categories to display
  const visibleCategories = useMemo(() => {
    if (activeCategory !== 'all') {
      return CATEGORIES.filter((c) => c.id === activeCategory)
    }
    return CATEGORIES
  }, [activeCategory])

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] flex flex-col font-sans transition-colors">
      {/* Top Console Navigation & Search Bar */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalCount={RESOURCES.length}
        filteredCount={filteredResources.length}
        showFavoritesOnly={showFavoritesOnly}
        setShowFavoritesOnly={setShowFavoritesOnly}
        favoritesCount={favorites.length}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Category Zone Navigation */}
      <CategoryNav
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        categoryCounts={categoryCounts}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search / Filter notification if query is active */}
        {(searchQuery || showFavoritesOnly) && (
          <div className="mb-6 flex items-center justify-between text-xs text-[var(--text-muted)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2.5 rounded transition-colors">
            <div>
              <span>
                Filtering by:{' '}
                {searchQuery && (
                  <strong className="text-[var(--text-primary)] font-mono">"{searchQuery}"</strong>
                )}
                {searchQuery && showFavoritesOnly && ' + '}
                {showFavoritesOnly && (
                  <strong className="text-[var(--accent-link)]">Pinned Resources</strong>
                )}
              </span>
            </div>
            <button
              onClick={() => {
                setSearchQuery('')
                setShowFavoritesOnly(false)
                setActiveCategory('all')
              }}
              className="text-[var(--accent-link)] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Category Sections */}
        {filteredResources.length > 0 ? (
          visibleCategories.map((cat) => {
            const sectionResources = filteredResources.filter(
              (r) => r.categoryId === cat.id
            )
            return (
              <ResourceSection
                key={cat.id}
                category={cat}
                resources={sectionResources}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            )
          })
        ) : (
          <div className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] rounded-md p-10 text-center my-8 transition-colors">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded border border-[var(--border-subtle)] text-[var(--text-muted)] mb-3">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
              No matching resources found
            </h3>
            <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto mb-4">
              {searchQuery
                ? `No indexed tools or links matched "${searchQuery}".`
                : 'No resources currently in this view.'}
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSearchQuery('')
                  setShowFavoritesOnly(false)
                  setActiveCategory('all')
                }}
                className="px-3 py-1.5 rounded text-xs font-medium bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--text-muted)] cursor-pointer"
              >
                Clear all filters
              </button>
              <a
                href={GITHUB_ISSUE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-[var(--accent-link)] text-[var(--accent-link)] hover:bg-[var(--accent-link)] hover:text-white transition-colors"
              >
                <span>Suggest on GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Structured Footer */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] py-8 text-xs text-[var(--text-muted)] mt-auto transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[var(--text-primary)]">Oneplace</span>
              <span className="text-[var(--border-subtle)]">•</span>
              <span>Engineering Reference Hub</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)]">
              A place to find all necessary tools for tech — if you don't find one,{' '}
              <a
                href={GITHUB_ISSUE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-link)] hover:underline"
              >
                create an issue
              </a>{' '}
              and we'll add it.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono">
            <a
              href="https://github.com/Rudra2637/One-Place"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Rudra2637/One-Place</span>
            </a>
            <span className="text-[var(--border-subtle)]">•</span>
            <a
              href={GITHUB_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--accent-link)] hover:underline"
            >
              <span>Submit Issue</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  )
}

export default App
