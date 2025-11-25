"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Brain, Gauge, AlertTriangle, Eye, Compass } from "lucide-react"

// Función matemática de Lógica Difusa (Triangular)
function fuzzyGrade(val: number, low: number, peak: number, high: number): number {
  if (val <= low || val >= high) return 0.0
  if (val === peak) return 1.0
  if (val < peak) return (val - low) / (peak - low)
  return (high - val) / (high - peak)
}

export function FuzzyLogicSection() {
  // Estado inicial: 30cm (Distancia media)
  const [distance, setDistance] = useState([30])

  // Cálculo en tiempo real del Sistema Experto
  const fuzzyValues = useMemo(() => {
    const dist = distance[0]

    // 1. FUSIFICACIÓN (Entradas Crisp -> Variables Lingüísticas)
    const isClose = fuzzyGrade(dist, -1, 0, 25)    // Pico en 0cm
    const isMedium = fuzzyGrade(dist, 15, 30, 45)  // Pico en 30cm
    
    // CORRECCIÓN AQUI:
    // Antes: fuzzyGrade(dist, 35, 60, 80) -> Caía a 0 en 80cm
    // Ahora: fuzzyGrade(dist, 35, 80, 120) -> Pico en 80cm (Max slider)
    const isFar = fuzzyGrade(dist, 35, 80, 120) 

    // 2. DESFUSIFICACIÓN (Método del Centroide)
    // Reglas: Cerca=0 (Stop), Medio=120 (Lento), Lejos=180 (Rápido)
    const num = isClose * 0 + isMedium * 120 + isFar * 180
    const den = isClose + isMedium + isFar
    
    // Evitamos división por cero y redondeamos
    const speed = den > 0 ? Math.round(num / den) : 100

    return {
      close: Math.round(isClose * 100),
      medium: Math.round(isMedium * 100),
      far: Math.round(isFar * 100),
      speed,
    }
  }, [distance])

  // Helpers para colores dinámicos
  const getSpeedColor = (speed: number) => {
    if (speed < 50) return "text-destructive" // Rojo
    if (speed < 150) return "text-orange-500" // Naranja
    return "text-green-500" // Verde
  }

  const getSpeedLabel = (speed: number) => {
    if (speed < 50) return "DETENIDO (PRECAUCIÓN)"
    if (speed < 130) return "LENTO (OBSERVACIÓN)"
    return "RÁPIDO (EXPLORACIÓN)"
  }

  return (
    <section id="ia" className="py-24 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="container mx-auto px-4">
        {/* Header de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <Brain className="w-4 h-4 mr-2" />
            Sistema Experto
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            El Cerebro: <span className="text-primary">Lógica Difusa Interactiva</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A diferencia de la lógica tradicional (0 o 1), ROBO-EDU percibe el mundo en{" "}
            <strong className="text-foreground">grados de verdad</strong>, tomando decisiones suaves y seguras.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Panel Izquierdo: Simulador de Entrada */}
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Gauge className="w-5 h-5 text-primary" />
                Simulador de Sensor Ultrasónico
              </CardTitle>
              <CardDescription>
                Mueve el slider para simular la distancia al objeto detectada
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Slider de Distancia */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-medium text-muted-foreground">Entrada del Sensor</span>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-foreground">{distance[0]}</span>
                    <span className="text-muted-foreground ml-1">cm</span>
                  </div>
                </div>
                
                <Slider 
                  value={distance} 
                  onValueChange={setDistance} 
                  max={80} 
                  min={0} 
                  step={1} 
                  className="py-2 cursor-pointer" 
                />
                
                <div className="flex justify-between text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  <span>0 cm (Peligro)</span>
                  <span>80 cm (Libre)</span>
                </div>
              </div>

              {/* Barras de Membresía (Fusificación) */}
              <div className="space-y-6 pt-4 border-t">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Variables Lingüísticas (Interpretación)
                </h4>

                {/* Variable: Cerca */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-destructive font-medium">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Cerca (Precaución)</span>
                    </div>
                    <span className="font-mono">{fuzzyValues.close}%</span>
                  </div>
                  <Progress value={fuzzyValues.close} className="h-2 bg-destructive/20 [&>div]:bg-destructive" />
                </div>

                {/* Variable: Medio */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-orange-500 font-medium">
                      <Eye className="w-4 h-4" />
                      <span>Medio (Observación)</span>
                    </div>
                    <span className="font-mono">{fuzzyValues.medium}%</span>
                  </div>
                  <Progress value={fuzzyValues.medium} className="h-2 bg-orange-500/20 [&>div]:bg-orange-500" />
                </div>

                {/* Variable: Lejos */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-green-500 font-medium">
                      <Compass className="w-4 h-4" />
                      <span>Lejos (Exploración)</span>
                    </div>
                    <span className="font-mono">{fuzzyValues.far}%</span>
                  </div>
                  <Progress value={fuzzyValues.far} className="h-2 bg-green-500/20 [&>div]:bg-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Panel Derecho: Salida del Sistema */}
          <Card className="bg-card shadow-lg flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Brain className="w-5 h-5 text-primary" />
                Salida del Motor de Inferencia
              </CardTitle>
              <CardDescription>
                Decisión final calculada por el método del centroide
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              
              {/* Velocímetro SVG */}
              <div className="flex flex-col items-center justify-center py-8">
                <div className="relative w-56 h-56 transition-all duration-300">
                  {/* Círculo de fondo */}
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-muted/30"
                    />
                    {/* Arco de Valor */}
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className={getSpeedColor(fuzzyValues.speed)}
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (fuzzyValues.speed / 255) * 251.2} // Ajustado a max 255 PWM
                      style={{ transition: "stroke-dashoffset 0.5s ease-out, color 0.3s" }}
                    />
                  </svg>
                  
                  {/* Texto Central */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-5xl font-bold tracking-tighter ${getSpeedColor(fuzzyValues.speed)}`}>
                      {fuzzyValues.speed}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground mt-1">PWM</span>
                  </div>
                </div>

                <Badge variant="outline" className={`mt-6 text-lg px-6 py-2 transition-colors duration-300 ${getSpeedColor(fuzzyValues.speed)} border-current`}>
                  {getSpeedLabel(fuzzyValues.speed)}
                </Badge>
              </div>

              {/* Explicación de Reglas */}
              <div className="bg-muted/50 rounded-xl p-5 text-sm space-y-3 border">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Base de Conocimiento (Reglas):
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className={`flex items-start gap-2 transition-opacity ${fuzzyValues.close > 0 ? 'opacity-100 font-medium text-destructive' : 'opacity-40'}`}>
                    <code className="bg-background px-1 rounded border">R1</code>
                    <span>Si CERCA → Velocidad 0 (Stop)</span>
                  </li>
                  <li className={`flex items-start gap-2 transition-opacity ${fuzzyValues.medium > 0 ? 'opacity-100 font-medium text-orange-500' : 'opacity-40'}`}>
                    <code className="bg-background px-1 rounded border">R2</code>
                    <span>Si MEDIO → Velocidad 120 (Obs)</span>
                  </li>
                  <li className={`flex items-start gap-2 transition-opacity ${fuzzyValues.far > 0 ? 'opacity-100 font-medium text-green-500' : 'opacity-40'}`}>
                    <code className="bg-background px-1 rounded border">R3</code>
                    <span>Si LEJOS → Velocidad 180 (Expl)</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
