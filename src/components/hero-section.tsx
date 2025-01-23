import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transformando ideias em <span className="text-blue-500">soluções</span>{" "}
              <span className="text-blue-500">digitais</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Especialistas em RPA, consultoria tecnológica e desenvolvimento de software personalizado para impulsionar
              sua empresa ao próximo nível.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  Começar agora
                </Button>
              </Link>
              <Link href="/#services">
                <Button variant="outline" size="lg">
                  Nossos serviços
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <ServiceCard
              title="RPA"
              description="Automatização inteligente de processos para maior eficiência"
              icon="Bot"
            />
            <ServiceCard title="LabSoftware" description="Desenvolvimento de software sob medida" icon="Code" />
            <ServiceCard title="Outsourcing" description="Equipe especializada à sua disposição" icon="Users" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  const icons = {
    Bot: "🤖",
    Code: "💻",
    Users: "👥",
  }

  return (
    <div className="p-6 rounded-xl bg-[#1A2333] hover:bg-blue-500/10 transition-colors">
      <div className="text-3xl mb-4">{icons[icon as keyof typeof icons]}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

