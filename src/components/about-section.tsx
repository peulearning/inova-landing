import { Target, Lightbulb, Award, Trophy, Rocket, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0B1121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Existing About Content */}
        <h2 className="text-4xl font-bold mb-8">Sobre a Inova Simples</h2>

        <p className="text-gray-400 text-lg max-w-3xl mb-16">
          Somos uma empresa de tecnologia focada em acelerar a transformação digital dos nossos clientes através de
          soluções inovadoras e personalizadas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Nossa Missão</h3>
                <p className="text-gray-400">
                  Impulsionar o sucesso dos nossos clientes através da excelência em tecnologia.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Nossa Visão</h3>
                <p className="text-gray-400">
                  Ser referência em inovação e transformação digital no mercado brasileiro.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Nossos Valores</h3>
                <p className="text-gray-400">Inovação, excelência, compromisso e transparência em tudo que fazemos.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <StatCard number="150+" label="Projetos Entregues" />
            <StatCard number="98%" label="Clientes Satisfeitos" />
            <StatCard number="10+" label="Anos de Experiência" />
            <StatCard number="24/7" label="Suporte Técnico" />
          </div>
        </div>

        {/* International Recognition Section */}
        <div className="text-center mb-16">
          <Award className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Reconhecimento Internacional</h2>
          <p className="text-gray-400 text-lg">Nossas conquistas globais em inovação e tecnologia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AchievementCard
            icon={<Trophy className="w-8 h-8" />}
            year="2019"
            title="FICI Chile"
            description="Medalha de Ouro na Feira Internacional de Ciência e Engenharia do Chile"
            tag="Inovação Tecnológica"
          />
          <AchievementCard
            icon={<Rocket className="w-8 h-8" />}
            year="2017"
            title="NASA Space Apps"
            description="Global Finalist no maior hackathon internacional da NASA"
            tag="Tecnologia Espacial"
          />
          <AchievementCard
            icon={<Globe className="w-8 h-8" />}
            year="2021"
            title="Hacking Rio"
            description="1º Lugar na maior maratona de inovação da América Latina"
            tag="Transformação Digital"
          />
        </div>
      </div>
    </section>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-[#1A2333] p-6 rounded-lg">
      <div className="text-3xl font-bold text-white mb-2">{number}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  )
}

function AchievementCard({
  icon,
  year,
  title,
  description,
  tag,
}: {
  icon: React.ReactNode
  year: string
  title: string
  description: string
  tag: string
}) {
  return (
    <div className="bg-[#1A2333] rounded-xl p-8 flex flex-col items-center text-center group hover:bg-blue-500/5 transition-colors">
      <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500/20 transition-colors">
        {icon}
      </div>
      <div className="text-blue-500 mb-4">{year}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <span className="inline-flex px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm">{tag}</span>
    </div>
  )
}

