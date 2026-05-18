"use client"

import { useState } from "react"
import { docsData } from "@/lib/docs-data"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsHeader } from "@/components/docs-header"
import { DocsSection } from "@/components/docs-section"
import { DocsFooter } from "@/components/docs-footer"
import { DocsHero } from "@/components/docs-hero"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  const [activeSection, setActiveSection] = useState(docsData.sections[0].id)
  
  const navItems = docsData.sections.map((section) => ({
    id: section.id,
    title: section.title,
    icon: section.icon,
  }))

  const currentSection = docsData.sections.find((s) => s.id === activeSection)
  const isHome = activeSection === "home"

  return (
    <div className="min-h-screen w-screen max-w-[100vw] overflow-hidden bg-background lg:flex lg:w-full lg:max-w-full">
      <DocsSidebar 
        items={navItems} 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="flex w-screen min-w-0 max-w-[100vw] flex-1 flex-col overflow-hidden lg:w-auto lg:max-w-full">
        <DocsHeader 
          title={docsData.title} 
          subtitle={docsData.subtitle} 
          badges={docsData.badges} 
        />
        
        <ScrollArea className="w-full flex-1 overflow-hidden">
          <div className="mx-auto w-screen max-w-[100vw] px-4 py-6 sm:px-6 lg:w-full lg:max-w-5xl lg:py-8">
            {isHome ? (
              <DocsHero 
                title={docsData.title}
                subtitle={docsData.subtitle}
                badges={docsData.badges}
              />
            ) : (
              currentSection && <DocsSection section={currentSection} />
            )}
          </div>
          
          <DocsFooter 
            title={docsData.footer.title} 
            tech={docsData.footer.tech} 
          />
        </ScrollArea>
      </main>
    </div>
  )
}
