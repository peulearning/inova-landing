import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Code, Users } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0D1526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos soluções tecnológicas completas para transformar sua empresa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Bot className="w-12 h-12 text-blue-500" />}
            title="RPA"
            description="Automatização de processos robóticos para aumentar a eficiência operacional e reduzir custos."
          />
          <ServiceCard
            icon={<Code className="w-12 h-12 text-blue-500" />}
            title="Desenvolvimento de Software"
            description="Criação de soluções personalizadas que atendem às necessidades específicas do seu negócio."
          />
          <ServiceCard
            icon={<Users className="w-12 h-12 text-blue-500" />}
            title="Outsourcing"
            description="Equipe especializada para suporte e desenvolvimento contínuo de projetos tecnológicos."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-[#1A2333] border-none">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

