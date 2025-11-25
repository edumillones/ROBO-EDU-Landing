import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Cpu } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.06),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%233B82F6' fillOpacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20 hover:bg-accent/15"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Proyecto Alineado a ODS 4: Educación de Calidad
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                ROBO-EDU: Plataforma STEM con <span className="text-primary">Inteligencia Artificial</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed text-pretty">
                Democratizando la educación en robótica con ESP32, Lógica Difusa y Hardware Open Source.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <a href="#ia">
                  Ver el Cerebro del Robot
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#hardware">
                  <Cpu className="mr-2 w-4 h-4" />
                  Explorar Hardware
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">ESP32</p>
                <p className="text-sm text-muted-foreground">Microcontrolador</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">3</p>
                <p className="text-sm text-muted-foreground">Sensores Ultrasónicos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">Open</p>
                <p className="text-sm text-muted-foreground">Source</p>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Model Placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto rounded-3xl bg-card border border-border shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Cpu className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Espacio para modelo 3D interactivo</p>
                  <p className="text-xs text-muted-foreground/60">Spline / Sketchfab Embed</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-accent animate-pulse" />
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
