"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Globe,
  Smartphone,
  Users,
  ShoppingCart,
  LayoutGrid,
  Trophy,
  Link as LinkIcon,
  Check,
  X,
  Circle,
  ArrowRight,
  Package,
  DoorClosed,
  Ban,
  Wallet,
  RefreshCw,
  Store,
  Map,
  Download,
  ClipboardList,
  FileBarChart,
  ClipboardCheck,
  Camera,
  TrendingUp,
  Boxes,
  MapPin,
  UserCog,
  Settings,
  FolderOpen,
  Image,
  FileText,
  History,
  Banknote,
  Activity,
  User,
  BarChart3,
  Bell,
  ChevronRight
} from "lucide-react"

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, Smartphone, Users, ShoppingCart, LayoutGrid, Trophy, Link: LinkIcon,
  Package, DoorClosed, Ban, Wallet, RefreshCw, Store, Map, Download,
  ClipboardList, FileBarChart, ClipboardCheck, Camera, TrendingUp, Boxes,
  MapPin, UserCog, Settings, FolderOpen, Image, FileText, History,
  Banknote, Activity, User, BarChart3, Bell
}

interface DocsSectionProps {
  section: any
}

function TimelineStep({ step, title, description, isLast }: { step: number | string; title: string; description: string | { intro: string; bullets: string[] }; isLast?: boolean }) {
  const isStructured = typeof description === 'object' && description !== null
  
  return (
    <div className="relative flex gap-3 sm:gap-4">
      {/* Timeline line & dot */}
      <div className="flex flex-col items-center">
        <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg ring-4 ring-background sm:h-10 sm:w-10 sm:text-sm">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-primary to-primary/20 mt-2" />
        )}
      </div>
      
      {/* Content */}
      <div className={`min-w-0 flex-1 pb-5 sm:pb-8 ${isLast ? '' : ''}`}>
        <div className="rounded-lg border bg-card p-3 shadow-sm transition-shadow hover:shadow-md sm:p-4">
          <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground sm:text-base">{title}</h3>
          {isStructured ? (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">{description.intro}</p>
              <ul className="space-y-2">
                {description.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: bullet }} />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: description as string }} />
          )}
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description, category }: { icon?: string; title: string; description: string; category: string }) {
  const Icon = icon ? icons[icon] : Package
  return (
    <Card className="h-full rounded-lg">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            {Icon && <Icon className="h-5 w-5 text-primary" />}
            <CardTitle className="text-sm font-medium leading-snug">{title}</CardTitle>
          </div>
          <Badge variant="outline" className="text-xs shrink-0">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/50 overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b border-border bg-muted">
          <span className="text-xs font-medium text-muted-foreground uppercase">{title}</span>
        </div>
      )}
      <pre className="overflow-x-auto p-3 sm:p-4">
        <code className="font-mono text-xs sm:text-sm">{code}</code>
      </pre>
    </div>
  )
}

export function DocsSection({ section }: DocsSectionProps) {
  const Icon = icons[section.icon] || Globe

  // Alur Website Section
  if (section.id === "alur-website") {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary">
            <Globe className="h-5 w-5" />
            <h2 className="text-xl font-bold leading-tight sm:text-2xl">{section.sectionTitle}</h2>
          </div>
          <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: section.description }} />
        </div>
        <div className="mt-8">
          {section.items.map((item: any, idx: number) => (
            <TimelineStep 
              key={item.step} 
              step={item.step} 
              title={item.title} 
              description={item.description} 
              isLast={idx === section.items.length - 1}
            />
          ))}
        </div>
      </div>
    )
  }

  // Alur Android Section
  if (section.id === "alur-android") {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary">
            <Smartphone className="h-5 w-5" />
            <h2 className="text-xl font-bold leading-tight sm:text-2xl">{section.sectionTitle}</h2>
          </div>
          <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: section.description }} />
        </div>
        <div className="mt-8">
          {section.items.map((item: any, idx: number) => (
            <TimelineStep 
              key={item.step} 
              step={item.step} 
              title={item.title} 
              description={item.description} 
              isLast={idx === section.items.length - 1}
            />
          ))}
        </div>
      </div>
    )
  }

  // Canvasser Section
  if (section.id === "canvasser") {
    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-bold leading-tight sm:text-2xl">{section.sectionTitle}</h2>
          <p className="text-muted-foreground">{section.description}</p>
        </div>

        {/* Journey Summary */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="text-xl">🧭</span>
              <CardTitle>{section.journeySummary.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {section.journeySummary.steps.map((step: any) => (
                <div key={step.number} className="flex gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Menu Tabs */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary" />
              <CardTitle>Menu Utama Aplikasi Android</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {section.menuTabs.map((tab: string) => (
                <Badge key={tab} variant="secondary" className="py-1.5 px-3">{tab}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detail Sections */}
        <div className="grid gap-4">
          {section.detailSections.map((detail: any, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-base">{detail.title}</CardTitle>
                <CardDescription>{detail.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2">
                  {detail.steps.map((step: string, idx: number) => (
                    <li key={idx} className="flex gap-2 text-sm">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  // Taking Order Section
  if (section.id === "taking-order") {
    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary">
            <ShoppingCart className="h-5 w-5" />
            <h2 className="text-xl font-bold leading-tight sm:text-2xl">{section.sectionTitle}</h2>
          </div>
          <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: section.description }} />
        </div>

        {/* Prerequisite */}
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Badge variant="destructive">WAJIB</Badge>
              <CardTitle className="text-base">{section.prerequisite.title}</CardTitle>
            </div>
            <CardDescription>{section.prerequisite.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              {section.prerequisite.flow.map((step: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                  {idx < section.prerequisite.flow.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:block" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Order Steps */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            6. Taking Order Process (Fitur Utama)
          </h3>
          <p className="text-muted-foreground mb-4">Fitur inti untuk melakukan pemesanan produk dari outlet. Setelah check-in berhasil, sales dapat mulai memasukkan order.</p>
          <div className="grid gap-4">
            {section.orderSteps.map((step: any) => (
              <Card key={step.step}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-base">{step.title}</CardTitle>
                  </div>
                  {step.description && <CardDescription>{step.description}</CardDescription>}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail: string, idx: number) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span dangerouslySetInnerHTML={{ __html: detail }} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Delete Feature */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="text-xl">🗑</span>
              <CardTitle>7. {section.deleteFeature.title}</CardTitle>
            </div>
            <CardDescription>{section.deleteFeature.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <span>⚡</span> Fungsi
              </h4>
              <ul className="space-y-1">
                {section.deleteFeature.functions.map((fn: string, idx: number) => (
                  <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                    <span>•</span>
                    <span>{fn}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <span>📋</span> Alur Hapus Produk
              </h4>
              <div className="grid gap-3 sm:grid-cols-3">
                {section.deleteFeature.flow.map((item: any) => (
                  <div key={item.step} className="p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {item.step}
                      </span>
                      <span className="font-medium text-sm">{item.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* No Order Feature */}
        <Card>
          <CardHeader>
            <CardTitle>8. {section.noOrderFeature.title}</CardTitle>
            <CardDescription>{section.noOrderFeature.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                Fungsi
              </h4>
              <div className="grid gap-2 sm:grid-cols-2">
                {section.noOrderFeature.functions.map((fn: any, idx: number) => (
                  <div key={idx} className="flex gap-2 text-sm">
                    <span className="text-primary">▸</span>
                    <span><strong>{fn.title}</strong> — {fn.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-primary" />
                Contoh Alasan No Order
              </h4>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {section.noOrderFeature.reasons.map((reason: any, idx: number) => {
                  const ReasonIcon = icons[reason.icon] || Package
                  return (
                    <div key={idx} className="p-3 rounded-lg border bg-card">
                      <div className="flex items-center gap-2 mb-1">
                        <ReasonIcon className="h-4 w-4 text-primary" />
                        <span className="font-medium text-sm">{reason.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{reason.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">📋 Alur Pencatatan No Order</h4>
              <div className="flex flex-wrap items-center gap-2">
                {section.noOrderFeature.flow.map((step: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-full bg-muted text-sm">{step}</div>
                    {idx < section.noOrderFeature.flow.length - 1 && (
                      <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Menu & Fitur Section
  if (section.id === "menu-fitur") {
    return (
      <div className="space-y-8">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">{section.sectionTitle}</h2>
        
        <Tabs defaultValue="website" className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-2">
            <TabsTrigger value="website" className="gap-1.5 px-2 py-2 text-xs sm:gap-2 sm:text-sm">
              <Globe className="h-4 w-4" />
              <span className="truncate">Website Admin</span>
            </TabsTrigger>
            <TabsTrigger value="android" className="gap-1.5 px-2 py-2 text-xs sm:gap-2 sm:text-sm">
              <Smartphone className="h-4 w-4" />
              <span className="truncate">Aplikasi Android</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="website" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.websiteMenus.map((menu: any, idx: number) => (
                <FeatureCard key={idx} icon={menu.icon} title={menu.title} description={menu.description} category={menu.category} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="android" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.androidMenus.map((menu: any, idx: number) => (
                <FeatureCard key={idx} icon={menu.icon} title={menu.title} description={menu.description} category={menu.category} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    )
  }

  // Keunggulan Section
  if (section.id === "keunggulan") {
    return (
      <div className="space-y-8">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">{section.sectionTitle}</h2>
        
        {/* Features */}
        <div className="grid gap-4 sm:grid-cols-2">
          {section.features.map((feature: any, idx: number) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.items.map((item: string, itemIdx: number) => (
                    <li key={itemIdx} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <CardTitle>Perbandingan dengan Kompetitor</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    {section.comparisonTable.headers.map((header: string, idx: number) => (
                      <TableHead key={idx} className={idx === 0 ? "min-w-[200px]" : "min-w-[150px]"}>
                        {header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {section.comparisonTable.rows.map((row: string[], rowIdx: number) => (
                    <TableRow key={rowIdx}>
                      <TableCell className="font-medium">{row[0]}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{row[1]}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {row[2].startsWith("○") ? (
                            <Circle className="h-4 w-4 text-yellow-500" />
                          ) : (
                            <X className="h-4 w-4 text-red-500" />
                          )}
                          <span className="text-sm text-muted-foreground">{row[2].replace(/^[○✗]\s*/, "")}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    )
  }

  // API Integration Section
  if (section.id === "api-integration") {
    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary">
            <LinkIcon className="h-5 w-5" />
            <h2 className="text-xl font-bold leading-tight sm:text-2xl">{section.sectionTitle}</h2>
          </div>
          <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: section.description }} />
        </div>

        {/* APIs */}
        {section.apis.map((api: any) => (
          <Card key={api.number}>
            <CardHeader>
              <div className="flex items-center gap-2">
                {api.icon && (() => {
                  const ApiIcon = icons[api.icon]
                  return ApiIcon && <ApiIcon className="h-5 w-5 text-primary" />
                })()}
                <CardTitle>{api.number}. {api.title}</CardTitle>
              </div>
              <CardDescription>{api.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-green-500 hover:bg-green-600">{api.method}</Badge>
                <code className="px-2 py-1 rounded bg-muted text-sm font-mono">{api.endpoint}</code>
                {api.note && <span className="text-xs text-muted-foreground">{api.note}</span>}
              </div>
              
              <CodeBlock code={api.requestBody} title="REQUEST BODY" />
              
              {api.responseBody && (
                <CodeBlock code={api.responseBody} title="RESPONSE" />
              )}
              
              {api.headerNote && (
                <div className="p-3 rounded-lg bg-muted/50 border">
                  <span className="text-xs font-medium text-muted-foreground uppercase block mb-1">HEADER (UNTUK SEMUA API)</span>
                  <code className="text-sm font-mono">{api.headerNote}</code>
                </div>
              )}

              {api.parameters && (
                <div>
                  <span className="text-sm font-medium mb-2 block">PARAMETER</span>
                  <ScrollArea className="w-full">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Field</TableHead>
                          <TableHead>Tipe</TableHead>
                          <TableHead>Keterangan</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {api.parameters.map((param: any, idx: number) => (
                          <TableRow key={idx}>
                            <TableCell className="font-mono text-sm">{param.field}</TableCell>
                            <TableCell>{param.type}</TableCell>
                            <TableCell className="text-muted-foreground">{param.description}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
              )}

              {api.stockTypes && (
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium">STOCK TYPE:</span>
                  {api.stockTypes.map((type: string) => (
                    <Badge key={type} variant="outline">{type}</Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        {/* Standard Response */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-primary" />
              <CardTitle>5. Standard Response</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock code={section.standardResponse.success} title="SUCCESS RESPONSE" />
            
            <div className="flex flex-wrap gap-2">
              {section.standardResponse.statusCodes.map((status: any) => (
                <Badge key={status.code} variant={status.code === "200" ? "default" : "outline"}>
                  {status.code} — {status.description}
                </Badge>
              ))}
            </div>
            
            <CodeBlock code={section.standardResponse.error} title="ERROR RESPONSE" />
          </CardContent>
        </Card>

        {/* Endpoint Summary */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <CardTitle>6. Ringkasan Endpoint</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>API</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Endpoint</TableHead>
                    <TableHead>Fungsi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {section.endpointSummary.map((endpoint: any, idx: number) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{endpoint.api}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500 hover:bg-green-600">{endpoint.method}</Badge>
                      </TableCell>
                      <TableCell>
                        <code className="text-xs font-mono">{endpoint.endpoint}</code>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{endpoint.function}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Integration Flow */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-primary" />
              <CardTitle>7. Alur Integrasi API</CardTitle>
            </div>
            <CardDescription>Flow Integrasi System-to-System</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {section.integrationFlow.map((step: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="px-4 py-2 rounded-lg bg-primary/10 text-center">
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                  {idx < section.integrationFlow.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:block" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technology */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              <CardTitle>8. Teknologi & Arsitektur</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <span>🛠</span> Teknologi
                </h4>
                <ul className="space-y-2">
                  {section.technology.tech.map((tech: string, idx: number) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-500 shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Karakteristik</h4>
                <ul className="space-y-2">
                  {section.technology.characteristics.map((char: string, idx: number) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-500 shrink-0" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return null
}
