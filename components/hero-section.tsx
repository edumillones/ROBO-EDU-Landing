import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Cpu } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
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
          <div className="space-y-8 animate-in fade-in slide-in-from-left-5 duration-700">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20 hover:bg-accent/15 backdrop-blur-sm"
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
              <Button size="lg" asChild className="group shadow-lg shadow-primary/20">
                <a href="#ia">
                  Ver el Cerebro del Robot
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="backdrop-blur-sm bg-background/50">
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

          {/* Right Content - Robot Image */}
          <div className="relative animate-in fade-in slide-in-from-right-5 duration-700 delay-200">
            <div className="aspect-square max-w-lg mx-auto rounded-3xl bg-card border border-border shadow-2xl overflow-hidden relative group">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              {/* IMAGEN PRINCIPAL DEL ROBOT */}
              <img 
                src="/images/ROBO-EDU-3D-IA.png" 
                alt="Prototipo Robo-Edu" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-accent animate-pulse shadow-[0_0_15px_theme(colors.accent.DEFAULT)] z-20" />
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary/60 z-20" />
              
              {/* Optional: Tech Overlay Grid */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            </div>

            {/* Floating Badge (Tarjeta Flotante) */}
            <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl hidden md:flex items-center gap-3 animate-bounce-slow">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                 <Cpu size={20} />
               </div>
               <div>
                 <p className="text-sm font-bold text-foreground">Versión 2.0</p>
                 <p className="text-xs text-muted-foreground">Sistema Experto Activo</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}