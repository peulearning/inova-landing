"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

type Testimonial = {
  quote: string
  author: string
  role: string
  company: string
  image: string
}

  const testimonials: Testimonial[] = [
    {
      quote:
        "A Acceleration Develop transformou completamente nossos processos internos com soluções de RPA. A produtividade aumentou em 300% em apenas 3 meses.",
      author: "Ana Silva",
      role: "CTO",
      company: "TechCorp Brasil",
      image: "/assets/images/ana.jpg",
    },
    {
      quote:
        "Excelente parceria em desenvolvimento de software. Entregaram além das nossas expectativas e no prazo estabelecido.",
      author: "João Santos",
      role: "Diretor de Tecnologia",
      company: "Inovação Tech",
      image: "/assets/images/joao_1.jpg",
    },
    {
      quote:
        "O suporte 24/7 e a qualidade do trabalho são impressionantes. Recomendo fortemente para qualquer empresa que busca transformação digital.",
      author: "Maria Oliveira",
      role: "CEO",
      company: "Digital Solutions",
      image: "/assets/images/mariana_1.jpg",
    },
  ]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-24 bg-[#0B1121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossos Clientes</h2>
          <p className="text-gray-400 text-lg">O que dizem sobre nossas soluções</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={previous}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-24 w-10 h-10 rounded-full bg-blue-500/10 hover:bg-blue-500/20 flex items-center justify-center text-blue-500 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-24 w-10 h-10 rounded-full bg-blue-500/10 hover:bg-blue-500/20 flex items-center justify-center text-blue-500 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-[#1A2333] rounded-2xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-blue-500 mb-6" />

            <div className="space-y-8">
              <blockquote className="text-xl md:text-2xl leading-relaxed">
                {testimonials[currentIndex].quote}
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonials[currentIndex].author}</div>
                  <div className="text-gray-400">{testimonials[currentIndex].role}</div>
                  <div className="text-blue-500">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

