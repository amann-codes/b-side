"use client"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 bg-card border-b-2 border-border">
      <div className="flex items-center justify-between p-4 md:p-6 max-w-7xl mx-auto gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight">MUSIC ARCHIVE</h1>
          <p className="text-xs text-muted-foreground uppercase tracking-wide font-mono">Discover & Discuss</p>
        </div>
      </div>
    </header>
  )
}