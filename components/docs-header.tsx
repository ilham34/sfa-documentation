"use client"

import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Globe, Smartphone, BarChart3 } from "lucide-react"

interface DocsHeaderProps {
  title: string
  subtitle: string
  badges: string[]
}

const badgeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Website Admin": Globe,
  "Android App": Smartphone,
  "Real-time Dashboard": BarChart3,
}

export function DocsHeader({ title, subtitle, badges }: DocsHeaderProps) {
  return (
    <header className="border-b border-border bg-card">
      <div className="hidden lg:flex items-center justify-between px-6 py-3 border-b border-border">
        <div />
        <ThemeToggle />
      </div>
      <div className="px-6 py-8 lg:py-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-2 text-balance">
          {title}
        </h1>
        <p className="text-muted-foreground mb-4">{subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => {
            const Icon = badgeIcons[badge]
            return (
              <Badge key={badge} variant="secondary" className="gap-1.5 py-1 px-3">
                {Icon && <Icon className="h-3.5 w-3.5" />}
                {badge}
              </Badge>
            )
          })}
        </div>
      </div>
    </header>
  )
}
