"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, RotateCcw, Github, Box } from "lucide-react"

interface STLViewerProps {
modelPath: string
githubRawUrl?: string
}

export function STLViewer({
modelPath,
githubRawUrl = "https://github.com/edumillones/ROBO-EDU-ESP32/blob/main/hardware/stl/ROBO-EDU-ESP32-3D.STL",
}: STLViewerProps) {
const [rotateX, setRotateX] = useState(-20)
const [rotateY, setRotateY] = useState(45)
const [isDragging, setIsDragging] = useState(false)
const [lastPos, setLastPos] = useState({ x: 0, y: 0 })

const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setLastPos({ x: e.clientX, y: e.clientY })
}

const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const deltaX = e.clientX - lastPos.x
    const deltaY = e.clientY - lastPos.y
    setRotateY((prev) => prev + deltaX * 0.5)
    setRotateX((prev) => Math.max(-90, Math.min(90, prev - deltaY * 0.5)))
    setLastPos({ x: e.clientX, y: e.clientY })
}

const handleMouseUp = () => setIsDragging(false)

const resetView = () => {
    setRotateX(-20)
    setRotateY(45)
}

return (
    <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl overflow-hidden relative">
      {/* Interactive 3D CSS Robot Preview */}
    <div
        className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ perspective: "1000px" }}
    >
        <div
        className="relative transition-transform duration-75"
        style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: "preserve-3d",
        }}
        >
          {/* Robot Body - Main chassis */}
        <div
            className="relative w-40 h-24 bg-gradient-to-b from-sky-400 to-sky-600 rounded-lg shadow-2xl"
            style={{ transform: "translateZ(20px)" }}
        >
            {/* ESP32 on top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-slate-800 rounded border border-slate-600">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-4 bg-slate-600 rounded-sm" />
            <div className="absolute bottom-1 left-2 w-1 h-1 bg-green-400 rounded-full animate-pulse" />
            <div className="absolute bottom-1 right-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
            </div>

            {/* Ultrasonic sensors */}
            <div className="absolute -top-1 left-2 flex gap-1">
            <div className="w-3 h-3 bg-slate-400 rounded-full border border-slate-500" />
            <div className="w-3 h-3 bg-slate-400 rounded-full border border-slate-500" />
            </div>
            <div className="absolute -top-1 right-2 flex gap-1">
            <div className="w-3 h-3 bg-slate-400 rounded-full border border-slate-500" />
            <div className="w-3 h-3 bg-slate-400 rounded-full border border-slate-500" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-2 flex flex-col gap-1">
            <div className="w-3 h-3 bg-slate-400 rounded-full border border-slate-500" />
            <div className="w-3 h-3 bg-slate-400 rounded-full border border-slate-500" />
            </div>

            {/* IR sensors */}
            <div className="absolute bottom-2 left-4 w-2 h-4 bg-red-800 rounded-sm">
            <div className="w-1 h-1 bg-red-400 rounded-full mx-auto mt-0.5 animate-pulse" />
            </div>
            <div className="absolute bottom-2 right-4 w-2 h-4 bg-red-800 rounded-sm">
            <div className="w-1 h-1 bg-red-400 rounded-full mx-auto mt-0.5 animate-pulse" />
            </div>
        </div>

          {/* Wheels */}
        <div
            className="absolute -bottom-6 -left-3 w-8 h-8 bg-slate-800 rounded-full border-4 border-slate-600 shadow-lg"
            style={{ transform: "rotateY(90deg) translateZ(4px)" }}
        />
        <div
            className="absolute -bottom-6 -right-3 w-8 h-8 bg-slate-800 rounded-full border-4 border-slate-600 shadow-lg"
            style={{ transform: "rotateY(90deg) translateZ(4px)" }}
        />

          {/* Ground shadow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-4 bg-black/30 rounded-full blur-md" />
        </div>
    </div>

      {/* Controls overlay */}
    <div className="absolute top-4 right-4 flex gap-2">
        <Button
        size="sm"
        variant="secondary"
        onClick={resetView}
        className="bg-white/10 hover:bg-white/20 text-white border-0"
        >
        <RotateCcw className="w-4 h-4" />
        </Button>
    </div>

      {/* Info overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center justify-between">
        <div>
            <p className="text-white font-medium">ROBO-EDU ESP32</p>
            <p className="text-slate-400 text-sm">Arrastra para rotar la vista previa</p>
        </div>
        <a href={githubRawUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
            <Github className="w-4 h-4 mr-2" />
            Ver STL en GitHub
            <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
        </a>
        </div>
    </div>

      {/* Floating label */}
    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
        <Box className="w-4 h-4 text-primary" />
        <span className="text-white text-sm">Vista previa 3D</span>
    </div>
    </div>
)
}

export default STLViewer
