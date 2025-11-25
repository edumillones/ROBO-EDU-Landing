<div align="center">

# ROBO-EDU ESP32

### Robot Educativo con Inteligencia Artificial Difusa

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Arduino](https://img.shields.io/badge/Platform-ESP32-orange.svg)](https://www.espressif.com/)
[![ODS 4](https://img.shields.io/badge/ODS-4%20Educación%20de%20Calidad-green.svg)](https://www.un.org/sustainabledevelopment/es/education/)
[![Next.js](https://img.shields.io/badge/Landing-Next.js%2015-black.svg)](https://nextjs.org/)

<img src="landing-page/public/images/esp32.jpg" alt="ESP32" width="200"/>

**Proyecto de Ingeniería Mecatrónica | Universidad Nacional de Trujillo**

[Ver Demo](https://robo-edu.vercel.app) · [Documentación](#documentación) · [Contribuir](#contribuir)

</div>

---

## Sobre el Proyecto

ROBO-EDU es un robot educativo open-source diseñado para enseñar conceptos de **robótica**, **programación** e **inteligencia artificial** de manera accesible. Utiliza **lógica difusa (Fuzzy Logic)** para tomar decisiones autónomas basadas en información sensorial.

### Características Principales

- **Lógica Difusa Real** - Implementación completa de inferencia difusa para control de velocidad
- **5 Sensores** - 3 ultrasónicos HC-SR04 + 2 infrarrojos FC-51
- **WiFi Integrado** - Control y monitoreo remoto vía ESP32
- **Código Abierto** - Hardware y software 100% replicable
- **Documentación Educativa** - Landing page interactiva con simulador

---

## Hardware

| Componente | Descripción | Cantidad |
|------------|-------------|----------|
| ESP32 DevKit | Microcontrolador dual-core 240MHz | 1 |
| DRV8833 | Driver de motores puente H | 1 |
| HC-SR04 | Sensor ultrasónico | 3 |
| FC-51 | Sensor infrarrojo | 2 |
| Motor DC | Motores con reductora | 2 |
| Batería | LiPo 7.4V 2S | 1 |

### Diagrama de Conexiones

\`\`\`
ESP32 GPIO          Componente
─────────────────────────────────
GPIO 5  ────────── Trig (Ultrasónico Izq)
GPIO 18 ────────── Echo (Ultrasónico Izq)
GPIO 19 ────────── Trig (Ultrasónico Centro)
GPIO 21 ────────── Echo (Ultrasónico Centro)
GPIO 22 ────────── Trig (Ultrasónico Der)
GPIO 23 ────────── Echo (Ultrasónico Der)
GPIO 34 ────────── IR Izquierdo
GPIO 35 ────────── IR Derecho
GPIO 25 ────────── Motor A (IN1)
GPIO 26 ────────── Motor A (IN2)
GPIO 27 ────────── Motor B (IN1)
GPIO 14 ────────── Motor B (IN2)
\`\`\`

---

## Lógica Difusa

El robot implementa un controlador difuso con las siguientes características:

### Variables de Entrada
- **Distancia**: Medida por sensores ultrasónicos (0-80 cm)

### Conjuntos Difusos
- **Cerca** (Close): 0-20 cm
- **Media** (Medium): 15-45 cm  
- **Lejos** (Far): 40-80 cm

### Variable de Salida
- **Velocidad del Motor**: 0-255 (PWM)

### Reglas de Inferencia
\`\`\`
SI distancia es CERCA    → velocidad es BAJA (50)
SI distancia es MEDIA    → velocidad es MEDIA (150)
SI distancia es LEJOS    → velocidad es ALTA (255)
\`\`\`

---

## Instalación

### Código ESP32

1. **Clonar el repositorio**
   \`\`\`bash
   git clone https://github.com/edumillones/ROBO-EDU-ESP32.git
   cd ROBO-EDU-ESP32
   \`\`\`

2. **Abrir en Arduino IDE**
   - Instalar soporte para ESP32 en Board Manager
   - Seleccionar "ESP32 Dev Module"

3. **Subir el código**
   \`\`\`bash
   # O usar PlatformIO
   pio run -t upload
   \`\`\`

### Landing Page (Desarrollo)

\`\`\`bash
cd landing-page
npm install
npm run dev
\`\`\`

Visita `http://localhost:3000`

---

## Estructura del Proyecto

\`\`\`
ROBO-EDU-ESP32/
├── ROBO_EDU.ino              # Código principal Arduino
├── src/                       # Código fuente adicional
├── docs/                      # Documentación
├── models/                    # Archivos CAD/STL
│   └── ROBO-EDU-ESP32-3D.stl
└── landing-page/              # Sitio web Next.js
    ├── app/
    ├── components/
    └── public/
        ├── models/
        │   └── ROBO-EDU-ESP32-3D.stl
        └── images/
\`\`\`

---

## ODS 4: Educación de Calidad

<img src="https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-04.jpg" alt="ODS 4" width="100" align="right"/>

Este proyecto está alineado con el **Objetivo de Desarrollo Sostenible 4** de las Naciones Unidas:

> "Garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida para todos"

### Contribuciones al ODS 4:
- Democratización del acceso a educación STEM
- Materiales educativos open-source
- Aprendizaje práctico de IA y robótica
- Reducción de barreras económicas

---

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/NuevaFuncion`)
3. Commit tus cambios (`git commit -m 'Add: nueva función'`)
4. Push a la rama (`git push origin feature/NuevaFuncion`)
5. Abre un Pull Request

---

## Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

---

## Contacto

**Eduardo Millones** - [@edumillones](https://github.com/edumillones)

Link del Proyecto: [https://github.com/edumillones/ROBO-EDU-ESP32](https://github.com/edumillones/ROBO-EDU-ESP32)

---

<div align="center">

**Hecho con dedicación en la Universidad Nacional de Trujillo**

Ingeniería Mecatrónica | 2024

</div>
