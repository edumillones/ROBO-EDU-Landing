"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Cog, Radio, CircuitBoard, Wifi, Gauge } from "lucide-react"
import Image from "next/image"

const components = [
  {
    name: "ESP32",
    description: "Microcontrolador dual-core con WiFi y Bluetooth integrado",
    image: "/images/esp32.jpg",
    specs: ["240 MHz Dual-Core", "520 KB SRAM", "WiFi 802.11 b/g/n", "Bluetooth 4.2"],
  },
  {
    name: "DRV8833",
    description: "Driver de motores DC de doble puente H",
    image: "/images/driver-puente-h-drv8833-1a.jpg",
    specs: ["1A por canal", "PWM hasta 50kHz", "Protección térmica", "2.7V - 10.8V"],
  },
  {
    name: "HC-SR04",
    description: "Sensores ultrasónicos de distancia (x3)",
    image: "/images/sensor-ultrasonido-hc-sr04.jpg",
    specs: ["Rango: 2-400 cm", "Ángulo: 15°", "Precisión: 3mm", "Trigger + Echo"],
  },
  {
    name: "FC-51 IR",
    description: "Detectores infrarrojos de superficie (x2)",
    image: "/images/sensor-de-obstaculos-infrarrojo-fc-51.jpg",
    specs: ["Detección de línea", "Alcance: 1-8 cm", "Salida digital", "LED indicador"],
  },
]

export function HardwareSection() {
  return (
    <section id="hardware" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <CircuitBoard className="w-4 h-4 mr-2" />
            Mecatrónica
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Bajo el Capó: <span className="text-primary">Arquitectura</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Hardware open source diseñado para ser accesible, replicable y educativo.
          </p>
        </div>

        <Tabs defaultValue="components" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="components">Componentes</TabsTrigger>
            <TabsTrigger value="3d">Modelado 3D</TabsTrigger>
            <TabsTrigger value="diagram">Diagrama de Conexión</TabsTrigger>
          </TabsList>

          <TabsContent value="components">
            <div className="grid md:grid-cols-2 gap-6">
              {components.map((component, index) => (
                <Card
                  key={index}
                  className="group hover:border-primary/30 transition-all hover:shadow-lg overflow-hidden"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 rounded-lg bg-white flex items-center justify-center shrink-0 overflow-hidden border border-border p-2">
                        <Image
                          src={component.image || "/placeholder.svg"}
                          alt={component.name}
                          width={80}
                          height={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-foreground">{component.name}</CardTitle>
                        <CardDescription className="text-muted-foreground mt-1">
                          {component.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {component.specs.map((spec, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="3d">
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Visor 3D Interactivo</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Explora el modelo CAD del robot ROBO-EDU en 3D
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl flex items-center justify-center border border-border overflow-hidden relative">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Cog className="w-10 h-10 text-primary animate-spin" style={{ animationDuration: "8s" }} />
                    </div>
                    <p className="text-white font-medium">ROBO-EDU-ESP32-3D.stl</p>
                    <p className="text-sm text-slate-400">
                      Coloca tu archivo STL en:{" "}
                      <code className="bg-slate-700 px-2 py-1 rounded text-xs">/public/models/</code>
                    </p>
                    <a
                      href="https://github.com/edumillones/ROBO-EDU-ESP32"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                    >
                      Ver archivos CAD en GitHub
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="diagram">
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Esquemático Electrónico</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Diagrama de conexiones entre el ESP32, drivers y sensores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center space-y-4 p-8">
                    <CircuitBoard className="w-16 h-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">Espacio para diagrama esquemático</p>
                    <p className="text-xs text-muted-foreground/60">Fritzing / KiCad Export</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <Wifi className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">WiFi</p>
            <p className="text-sm text-muted-foreground">Control Remoto</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <Cpu className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">240MHz</p>
            <p className="text-sm text-muted-foreground">Procesamiento</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <Radio className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">5</p>
            <p className="text-sm text-muted-foreground">Sensores</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <Gauge className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">PWM</p>
            <p className="text-sm text-muted-foreground">Control Motores</p>
          </div>
        </div>
      </div>
    </section>
  )
}
