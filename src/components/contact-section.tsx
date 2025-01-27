import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#0D1526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-gray-400 mb-8">
              Estamos prontos para ajudar sua empresa a alcançar o próximo nível. Entre em contato conosco para uma
              consulta gratuita.
            </p>
            <div className="space-y-6">
              <ContactInfo icon={<Mail />} text="contato@inovasimples.dev" />
              <ContactInfo icon={<Phone />} text="+55 (11) 99999-9999" />
              <ContactInfo icon={<MapPin />} text="São Paulo, SP - Brasil" />
            </div>
          </div>
          <div className="bg-[#1A2333] p-8 rounded-xl"> 
            <form className="space-y-6">
              <div>
                <Input placeholder="Nome" className="bg-[#0D1526]" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="bg-[#0D1526]" />
              </div>
              <div>
                <Textarea placeholder="Mensagem" className="bg-[#0D1526]" rows={6} />
              </div>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Enviar Mensagem</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-blue-500">{icon}</div>
      <span className="text-gray-400">{text}</span>
    </div>
  )
}

