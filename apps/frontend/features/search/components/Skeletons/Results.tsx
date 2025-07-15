const SKELETON_KEYS = Array.from({ length: 12 }, (_, i) => `skeleton-${i}`)

export default function SkeletonResults() {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:grid-rows-4">
      {SKELETON_KEYS.map((key) => (
        <div
          className="size-full rounded-md border border-border bg-background px-3 py-3"
          key={key}
        >
          <div className="opacity-50">
            <div className="h-3 w-1/4 animate-pulse rounded-sm bg-foreground" />
            <div className="mt-2 h-2 w-1/3 animate-pulse rounded-sm bg-foreground" />
            <div className="mt-5 h-2 w-full animate-pulse rounded-sm bg-foreground" />
            <div className="mt-1.5 h-2 w-full animate-pulse rounded-sm bg-foreground" />
            <div className="mt-1.5 h-2 w-3/4 animate-pulse rounded-sm bg-foreground" />
          </div>
        </div>
      ))}
    </div>
  )
}
