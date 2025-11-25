"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Brain, Gauge, AlertTriangle, Eye, Compass } from "lucide-react"

function fuzzyGrade(val: number, low: number, peak: number, high: number): number {
  if (val <= low || val >= high) return 0.0
  if (val === peak) return 1.0
  if (val < peak) return (val - low) / (peak - low)
  return (high - val) / (high - peak)
}

export function FuzzyLogicSection() {
  const [distance, setDistance] = useState([30])

  const fuzzyValues = useMemo(() => {
    const dist = distance[0]
    const isClose = fuzzyGrade(dist, -1, 0, 25)
    const isMedium = fuzzyGrade(dist, 15, 30, 45)
    const isFar = fuzzyGrade(dist, 35, 60, 80)

    // Defuzzification
    const num = isClose * 0 + isMedium * 120 + isFar * 180
    const den = isClose + isMedium + isFar
    const speed = den > 0 ? Math.round(num / den) : 100

    return {
      close: Math.round(isClose * 100),
      medium: Math.round(isMedium * 100),
      far: Math.round(isFar * 100),
      speed,
    }
  }, [distance])

  const getSpeedColor = (speed: number) => {
    if (speed < 50) return "text-destructive"
    if (speed < 120) return "text-chart-3"
    return "text-accent"
  }

  const getSpeedLabel = (speed: number) => {
    if (speed < 50) return "DETENIDO"
    if (speed < 100) return "LENTO"
    if (speed < 150) return "MODERADO"
    return "RÁPIDO"
  }

  return (
    <section id="ia" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Sistema Experto
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            El Cerebro: <span className="text-primary">Lógica Difusa Interactiva</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A diferencia de la lógica tradicional (0 o 1), ROBO-EDU percibe el mundo en{" "}
            <strong>grados de verdad</strong>, tomando decisiones suaves como un humano.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Simulator Panel */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Gauge className="w-5 h-5 text-primary" />
                Simulador de Sensor Ultrasónico
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Mueve el slider para simular la distancia detectada por el sensor
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Distance Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">Distancia al Objeto</span>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {distance[0]} cm
                  </Badge>
                </div>
                <Slider value={distance} onValueChange={setDistance} max={80} min={0} step={1} className="py-4" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0 cm (Muy cerca)</span>
                  <span>80 cm (Lejos)</span>
                </div>
              </div>

              {/* Fuzzy Membership Bars */}
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-foreground">Variables Lingüísticas (Fusificación)</h4>

                {/* Close */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                      <span className="text-sm font-medium text-foreground">Cerca (Precaución)</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{fuzzyValues.close}%</span>
                  </div>
                  <Progress value={fuzzyValues.close} className="h-3 [&>div]:bg-destructive" />
                </div>

                {/* Medium */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-chart-3" />
                      <span className="text-sm font-medium text-foreground">Medio (Observación)</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{fuzzyValues.medium}%</span>
                  </div>
                  <Progress value={fuzzyValues.medium} className="h-3 [&>div]:bg-chart-3" />
                </div>

                {/* Far */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">Lejos (Exploración)</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{fuzzyValues.far}%</span>
                  </div>
                  <Progress value={fuzzyValues.far} className="h-3 [&>div]:bg-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Output Panel */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Brain className="w-5 h-5 text-primary" />
                Salida del Sistema Experto
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Resultado de la desfusificación (Método del centroide)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Speed Gauge */}
              <div className="flex flex-col items-center justify-center py-8">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background arc */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      className="text-muted"
                      strokeLinecap="round"
                      strokeDasharray="188.5"
                      strokeDashoffset="47"
                    />
                    {/* Value arc */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      className={getSpeedColor(fuzzyValues.speed)}
                      strokeLinecap="round"
                      strokeDasharray="188.5"
                      strokeDashoffset={188.5 - (fuzzyValues.speed / 200) * 141}
                      style={{ transition: "stroke-dashoffset 0.3s ease" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-4xl font-bold ${getSpeedColor(fuzzyValues.speed)}`}>
                      {fuzzyValues.speed}
                    </span>
                    <span className="text-sm text-muted-foreground">PWM</span>
                  </div>
                </div>
                <Badge variant="outline" className={`mt-4 text-lg px-4 py-2 ${getSpeedColor(fuzzyValues.speed)}`}>
                  {getSpeedLabel(fuzzyValues.speed)}
                </Badge>
              </div>

              {/* Rules Applied */}
              <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                <h4 className="text-sm font-semibold text-foreground">Reglas Aplicadas:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <code className="text-destructive">R1:</code>
                    <span>Si CERCA → Velocidad = 0 (Precaución)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-chart-3">R2:</code>
                    <span>Si MEDIO → Velocidad = 120 (Observación)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-accent">R3:</code>
                    <span>Si LEJOS → Velocidad = 180 (Exploración)</span>
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
