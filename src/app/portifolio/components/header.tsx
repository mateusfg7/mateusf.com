'use client'

import { useEffect, useState } from 'react'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

export function Header() {
  const [percentScrollPosition, setPercentScrollPosition] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScrollValue, setMaxScrollValue] = useState(0)

  function handleScroll() {
    if (window) {
      setScrollPosition(window.scrollY)
    }
    if (document) {
      setMaxScrollValue(
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      )
    }
  }

  useEffect(() => {
    setPercentScrollPosition(
      Math.round((scrollPosition / maxScrollValue) * 100)
    )
  }, [scrollPosition, maxScrollValue])

  useEffect(() => {
    handleScroll()

    if (window) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }
  }, [])

  return (
    <div
      className={`fixed z-50 flex w-full items-center justify-center border-b bg-neutral-1000/80 backdrop-blur-lg duration-300 ${
        percentScrollPosition > 0
          ? 'border-b-neutral-800'
          : 'border-b-transparent'
      }`}
    >
      <nav className="portifolio-content-w relative flex items-center justify-between gap-4 py-10 md:justify-center md:py-6">
        <div className="left-0 md:absolute">
          <a
            href="#home"
            className="font-chivo-mono font-medium text-blue-500 hover:cursor-pointer"
          >
            Mateus Felipe
          </a>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#sobre-mim"
            className={`${
              percentScrollPosition >= 9 && percentScrollPosition < 21
                ? 'text-neutral-50'
                : 'text-neutral-400'
            } hover:cursor-pointer hover:text-neutral-50`}
          >
            Sobre mim
          </a>
          <a
            href="#projetos"
            className={`${
              percentScrollPosition >= 21 && percentScrollPosition < 66
                ? 'text-neutral-50'
                : 'text-neutral-400'
            } hover:cursor-pointer hover:text-neutral-50`}
          >
            Projetos
          </a>
          <a
            href="#conhecimentos"
            className={`${
              percentScrollPosition >= 66 && percentScrollPosition < 95
                ? 'text-neutral-50'
                : 'text-neutral-400'
            } hover:cursor-pointer hover:text-neutral-50`}
          >
            Conhecimentos
          </a>
          <a
            href="#contato"
            className={`${
              percentScrollPosition >= 95
                ? 'text-neutral-50'
                : 'text-neutral-400'
            } hover:cursor-pointer hover:text-neutral-50`}
          >
            Contato
          </a>
        </div>
        <div className="right-0 flex items-center gap-6 md:absolute md:gap-4">
          <a
            className="text-xl text-neutral-300 hover:cursor-pointer hover:text-neutral-50"
            href="https://linkedin.com/in/mateusfg"
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
          >
            <FiLinkedin />
          </a>
          <a
            className="text-xl text-neutral-300 hover:cursor-pointer hover:text-neutral-50"
            href="https://github.com/mateusfg7"
            target="_blank"
            rel="noreferrer"
            title="Github"
          >
            <FiGithub />
          </a>
          <a
            className="text-xl text-neutral-300 hover:cursor-pointer hover:text-neutral-50"
            href="https://instagram.com/mateusfg7"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <FiInstagram />
          </a>
        </div>
      </nav>
    </div>
  )
}
