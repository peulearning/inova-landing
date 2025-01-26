import { Rocket, Settings, Zap, CheckCircle } from "lucide-react"

export function HowWeWork() {
  const steps = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Análise Inicial",
      description: "Entendemos suas necessidades e objetivos de negócio",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Planejamento",
      description: "Desenvolvemos uma estratégia personalizada",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Implementação",
      description: "Executamos as soluções com agilidade",
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Resultados",
      description: "Entregamos valor mensurável ao seu negócio",
    },
  ]

  return (
    <section className="py-24 bg-[#0B1121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Como Trabalhamos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Nossa metodologia para entregar resultados excepcionais</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-500/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-[#1A2333] rounded-lg p-8 text-center relative z-10 h-full hover:bg-blue-500/5 transition-colors">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-6">
                    <div className="text-blue-500">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {/* Connection dot */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

