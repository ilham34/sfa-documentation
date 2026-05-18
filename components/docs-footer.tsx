export function DocsFooter({ title, tech }: { title: string; tech: string }) {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-8">
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <span>📄</span>
          {title}
        </p>
        <p className="text-xs text-muted-foreground">
          {tech}
        </p>
      </div>
    </footer>
  )
}
