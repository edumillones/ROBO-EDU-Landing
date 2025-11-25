import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Eye, Shield } from "lucide-react"

const missions = [
  {
    icon: Globe,
    title: "Acceso Universal",
    description:
      "Hardware de bajo costo (ESP32) y código abierto para escuelas rurales y comunidades con recursos limitados.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Eye,
    title: "Aprendizaje Visual",
    description:
      "Enseña conceptos complejos (Lógica de programación, IA) mediante comportamientos físicos observables.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Shield,
    title: "Seguro y Adaptable",
    description: "Sensores de seguridad y lógica de protección para un entorno de aula controlado y seguro.",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

export function MissionSection() {
  return (
    <section id="mision" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Más que un Robot: <span className="text-primary">Responsabilidad Social</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            ROBO-EDU nace de la necesidad de democratizar la educación STEM, llevando tecnología de punta a todas las
            aulas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {missions.map((mission, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div
                  className={`w-14 h-14 rounded-xl ${mission.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <mission.icon className={`w-7 h-7 ${mission.color}`} />
                </div>
                <CardTitle className="text-xl text-foreground">{mission.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {mission.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
