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
    <header className="w-screen max-w-[100vw] overflow-hidden border-b border-border bg-card lg:w-full lg:max-w-full">
      <div className="hidden lg:flex items-center justify-between px-6 py-3 border-b border-border">
        <div />
        <ThemeToggle />
      </div>
      <div className="w-screen max-w-[100vw] px-4 py-5 sm:px-6 sm:py-7 lg:w-full lg:max-w-full lg:py-12">
        <h1 className="mb-2 text-balance text-2xl font-bold leading-tight text-primary sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        <p className="mb-4 max-w-full break-words text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>
        <div className="grid max-w-full grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {badges.map((badge) => {
            const Icon = badgeIcons[badge]
            return (
              <Badge key={badge} variant="secondary" className="w-full max-w-full justify-start gap-1.5 overflow-hidden text-ellipsis px-2.5 py-1 text-[11px] sm:w-fit sm:px-3 sm:text-xs">
                {Icon && <Icon className="h-3.5 w-3.5" />}
                <span className="truncate">{badge}</span>
              </Badge>
            )
          })}
        </div>
      </div>
    </header>
  )
}
