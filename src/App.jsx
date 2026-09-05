import { Sparkles, Terminal } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
          <Terminal className="w-7 h-7" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
            OnePlace <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            React + Tailwind CSS v4 environment is ready!
          </p>
        </div>
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-left text-xs font-mono text-slate-300 space-y-1">
          <p className="text-emerald-400">✓ React 19 / Vite installed</p>
          <p className="text-indigo-400">✓ Tailwind CSS v4 configured</p>
          <p className="text-cyan-400">✓ Lucide icons available</p>
        </div>
      </div>
    </div>
  )
}

export default App
