"use client"

// import { useState } from "react"
import Link from "next/link"
import { Zap } from "lucide-react"

export function NavBar() {
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-[#0B1121]/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">  
          <div className="flex items-center">
            <Link href="/#home" className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Inova Simples</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/#home" className="hover:text-blue-500 transition-colors text-white">
                Home
              </Link>
              <Link href="/#services" className="hover:text-blue-500 transition-colors text-white">
                Serviços
              </Link>
              <Link href="/#about" className="hover:text-blue-500 transition-colors text-white">
                Sobre
              </Link>
              <Link href="/#contact" className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors text-white">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

