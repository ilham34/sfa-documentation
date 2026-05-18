"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Globe,
  Smartphone,
  Users,
  ShoppingCart,
  LayoutGrid,
  Trophy,
  Link as LinkIcon,
  Menu,
  FileText,
  Home
} from "lucide-react"

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
  Users,
  ShoppingCart,
  LayoutGrid,
  Trophy,
  Link: LinkIcon,
  Home,
}

interface NavItem {
  id: string
  title: string
  icon: string
}

interface DocsSidebarProps {
  items: NavItem[]
  activeSection: string
  onSectionChange: (id: string) => void
}

function SidebarContent({ items, activeSection, onSectionChange }: DocsSidebarProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b border-border px-4 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <FileText className="h-4 w-4 text-primary-foreground" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">SFA Dokumen</span>
          <span className="text-xs text-muted-foreground">Documentation</span>
        </div>
      </div>
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-1">
          <p className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Menu
          </p>
          {items.map((item) => {
            const Icon = icons[item.icon] || Globe
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{item.title}</span>
              </button>
            )
          })}
        </div>
      </ScrollArea>
      <div className="border-t border-border p-4">
        <p className="text-xs text-muted-foreground text-center">
          Powered by Blesscom
        </p>
      </div>
    </div>
  )
}

export function DocsSidebar({ items, activeSection, onSectionChange }: DocsSidebarProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {/* Mobile */}
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="sticky top-0 z-40 flex w-screen max-w-[100vw] items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="truncate font-semibold">SFA Dokumen</span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
          </div>
        </div>
        <SheetContent side="left" className="w-72 p-0">
          <SidebarContent 
            items={items} 
            activeSection={activeSection} 
            onSectionChange={(id) => {
              onSectionChange(id)
              setOpen(false)
            }} 
          />
        </SheetContent>
      </Sheet>

      {/* Desktop */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-border lg:bg-sidebar">
        <SidebarContent items={items} activeSection={activeSection} onSectionChange={onSectionChange} />
      </aside>
    </>
  )
}
