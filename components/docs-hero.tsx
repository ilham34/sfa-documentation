"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Smartphone, 
  Monitor, 
  MapPin, 
  ShoppingCart, 
  BarChart3, 
  Camera,
  CheckCircle2,
  Users,
  Clock
} from "lucide-react"

interface DocsHeroProps {
  title: string
  subtitle: string
  badges: string[]
}

export function DocsHero({ title, subtitle, badges }: DocsHeroProps) {
  return (
    <div className="w-full max-w-full overflow-hidden space-y-8 sm:space-y-10">
      {/* Header */}
      <div className="space-y-4 text-center">
        <div className="mx-auto grid w-full max-w-[320px] grid-cols-2 justify-center gap-2 sm:flex sm:max-w-none sm:flex-wrap">
          {badges.map((badge) => (
            <Badge key={badge} variant="secondary" className="w-full max-w-full overflow-hidden text-ellipsis px-2.5 py-1 text-[11px] sm:w-fit sm:px-3 sm:text-xs">
              <span className="truncate">{badge}</span>
            </Badge>
          ))}
        </div>
        <h1 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">{title}</h1>
        <p className="mx-auto max-w-full break-words px-2 text-sm leading-relaxed text-muted-foreground sm:max-w-2xl sm:text-lg">{subtitle}</p>
      </div>

      {/* Device Mockups */}
      <div className="relative">
        <div className="flex flex-col items-center justify-center gap-8 overflow-hidden px-1 pb-3 lg:flex-row lg:gap-12 lg:overflow-visible lg:px-0">
          {/* Laptop Mockup - Admin Dashboard */}
          <div className="relative order-2 max-w-full lg:order-1">
            <div className="relative max-w-full">
              {/* Laptop Frame */}
              <div className="relative max-w-full rounded-t-lg bg-muted px-2 pb-2 pt-3 sm:px-4 sm:pt-4">
                {/* Screen */}
                <div className="bg-background rounded-sm border border-border overflow-hidden shadow-inner">
                  {/* Browser Chrome */}
                  <div className="bg-muted/80 px-3 py-2 flex items-center gap-2 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="mx-1 min-w-0 flex-1 sm:mx-2">
                      <div className="truncate rounded-md border bg-background px-2 py-1 text-[10px] text-muted-foreground sm:px-3 sm:text-xs">
                        sfa-admin.kalbe.co.id/dashboard
                      </div>
                    </div>
                  </div>
                  {/* Dashboard Content */}
                  <div className="h-[190px] w-[min(70vw,300px)] bg-gradient-to-br from-background to-muted/30 p-3 sm:w-[360px] sm:p-4 md:h-[240px] md:w-[400px]">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                          <BarChart3 className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-xs font-semibold">Dashboard Motoris</span>
                      </div>
                      <Badge variant="outline" className="text-[10px] py-0">Live</Badge>
                    </div>
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-card rounded-md p-2 border">
                        <p className="text-[10px] text-muted-foreground">Total Sales</p>
                        <p className="text-sm font-bold text-primary">1,247</p>
                      </div>
                      <div className="bg-card rounded-md p-2 border">
                        <p className="text-[10px] text-muted-foreground">Kunjungan</p>
                        <p className="text-sm font-bold text-green-600">892</p>
                      </div>
                      <div className="bg-card rounded-md p-2 border">
                        <p className="text-[10px] text-muted-foreground">Transaksi</p>
                        <p className="text-sm font-bold text-amber-600">3.2K</p>
                      </div>
                    </div>
                    {/* Chart Placeholder */}
                    <div className="bg-card rounded-md p-2 border h-[60px] md:h-[80px] flex items-end gap-1">
                      {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-primary/80 rounded-t transition-all"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop Base */}
              <div className="h-3 rounded-b-lg bg-muted" />
              <div className="bg-muted/80 h-1.5 mx-auto w-[80%] rounded-b-xl" />
            </div>
            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border bg-card px-3 py-1.5 shadow-sm">
              <Monitor className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium">Website Admin</span>
            </div>
          </div>

          {/* Phone Mockup - Sales App */}
          <div className="relative order-1 lg:order-2">
            {/* Phone Frame */}
            <div className="relative bg-foreground rounded-[2rem] p-2 shadow-xl">
              <div className="w-[170px] overflow-hidden rounded-[1.5rem] bg-background sm:w-[190px] md:w-[200px]">
                {/* Phone Notch */}
                <div className="bg-foreground h-6 flex items-center justify-center">
                  <div className="w-16 h-4 bg-foreground rounded-b-xl" />
                </div>
                {/* App Content */}
                <div className="h-[305px] bg-gradient-to-b from-slate-900 to-slate-800 p-3 sm:h-[340px] md:h-[360px]">
                  {/* App Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <span className="text-orange-500 font-bold text-xs">SFA</span>
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold">Hi, Ahmad</p>
                        <p className="text-slate-400 text-[10px]">Sales Motoris</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Check In Card */}
                  <div className="bg-slate-800/80 rounded-xl p-3 mb-3 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 text-[10px]">Kunjungan Hari Ini</span>
                      <Badge className="bg-green-500/20 text-green-400 text-[10px] py-0 border-0">5 Toko</Badge>
                    </div>
                    <div className="bg-orange-500 rounded-lg py-2.5 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-white" />
                        <span className="text-white text-xs font-semibold">CHECK IN</span>
                      </div>
                    </div>
                  </div>

                  {/* Menu Grid */}
                  <p className="text-slate-400 text-[10px] mb-2">Menu Transaksi</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: ShoppingCart, label: "Penjualan", color: "text-blue-400" },
                      { icon: Camera, label: "Foto Activity", color: "text-purple-400" },
                      { icon: BarChart3, label: "Distribusi", color: "text-green-400" },
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-800/80 rounded-lg p-2 text-center border border-slate-700">
                        <item.icon className={`w-4 h-4 mx-auto mb-1 ${item.color}`} />
                        <span className="text-slate-300 text-[9px]">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Nav */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-800 rounded-xl p-2 flex justify-around">
                    {["Home", "Log", "Activity", "Profile"].map((item, i) => (
                      <div key={i} className={`text-center ${i === 0 ? "text-orange-500" : "text-slate-500"}`}>
                        <div className={`w-5 h-5 mx-auto rounded-full ${i === 0 ? "bg-orange-500/20" : ""} flex items-center justify-center`}>
                          <div className="w-2 h-2 rounded-full bg-current" />
                        </div>
                        <span className="text-[8px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border bg-card px-3 py-1.5 shadow-sm">
              <Smartphone className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium">Android App</span>
            </div>
          </div>
        </div>

        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 border-t-2 border-dashed border-primary/30" />
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full p-2">
          <div className="bg-primary/20 rounded-full p-1.5">
            <CheckCircle2 className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <FeatureHighlight 
          icon={MapPin}
          title="GPS Tracking"
          description="Lokasi sales tercatat real-time saat check in/out ke toko"
          color="text-red-500"
          bgColor="bg-red-500/10"
        />
        <FeatureHighlight 
          icon={ShoppingCart}
          title="Transaksi Real-time"
          description="Data penjualan, pembelian, dan distribusi langsung tersimpan"
          color="text-blue-500"
          bgColor="bg-blue-500/10"
        />
        <FeatureHighlight 
          icon={BarChart3}
          title="Dashboard Monitoring"
          description="Pantau aktivitas sales dengan grafik dan peta interaktif"
          color="text-green-500"
          bgColor="bg-green-500/10"
        />
        <FeatureHighlight 
          icon={Users}
          title="Multi-Level Access"
          description="Hak akses berbeda untuk Admin, Manager, Team Leader, Sales"
          color="text-amber-500"
          bgColor="bg-amber-500/10"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid gap-3 text-center sm:flex sm:flex-wrap sm:justify-center sm:gap-6">
        <div className="flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Real-time Sync</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <span className="text-sm text-muted-foreground">GPS Verified</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Camera className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Photo Documentation</span>
        </div>
      </div>
    </div>
  )
}

function FeatureHighlight({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  bgColor 
}: { 
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
  bgColor: string
}) {
  return (
    <Card className="group rounded-lg transition-shadow hover:shadow-md">
      <CardContent className="p-4">
        <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
