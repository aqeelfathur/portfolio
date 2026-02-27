"use client"

import React, { RefObject } from "react"
import Image from "next/image"
import { Plus } from "lucide-react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

type HeroProps = {
  scrollContainerRef: RefObject<HTMLElement | null>
}

export default function Hero({ scrollContainerRef }: HeroProps) {
  // ✅ Listen ke scroll container yang benar, bukan window
  const { scrollY } = useScroll({ container: scrollContainerRef })

  const springConfig = { stiffness: 50, damping: 20, mass: 1 }

  // === PARALLAX — 3 layer saja, blur orb dibuat STATIC ===
  const rawBorderY = useTransform(scrollY, [0, 800], [0, 80])
  const rawAvatarY = useTransform(scrollY, [0, 800], [0, 40])
  const rawDotY    = useTransform(scrollY, [0, 800], [0, -60])

  const borderY = useSpring(rawBorderY, springConfig)
  const avatarY = useSpring(rawAvatarY, springConfig)
  const dotY    = useSpring(rawDotY,    springConfig)

  // === TEXT SCALE on scroll ===
  const rawTextScale   = useTransform(scrollY, [0, 400], [1, 1.07])
  const rawTextOpacity = useTransform(scrollY, [0, 450], [1, 0])
  const rawTextY       = useTransform(scrollY, [0, 450], [0, -30])
  const textScale   = useSpring(rawTextScale,   { stiffness: 70, damping: 25 })
  const textOpacity = useSpring(rawTextOpacity, { stiffness: 70, damping: 25 })
  const textY       = useSpring(rawTextY,       { stiffness: 70, damping: 25 })

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
  }
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" as const },
    },
  }

  return (
    <section className="relative min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* STATIC AMBIENT ORBS — tidak bergerak = tidak boros GPU */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[100px]" />

      {/* GRID NOISE OVERLAY */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)",
        }}
      />

      {/* FLOATING DECORATIVE */}
      <motion.div
        style={{ y: dotY, willChange: "transform" }}
        className="absolute top-40 left-10 w-8 h-8 border-2 border-purple-400 opacity-30"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: dotY, willChange: "transform" }}
        className="absolute bottom-40 right-20 w-10 h-10 border-2 border-blue-400 rounded-full opacity-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform" }}
        className="absolute top-60 right-8 w-6 h-6 border border-purple-300/40 rotate-45"
      />

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: TEXT */}
          <motion.div
            style={{ scale: textScale, opacity: textOpacity, y: textY, willChange: "transform, opacity" }}
            className="origin-left pl-4 sm:pl-6 lg:pl-8"
          >
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 z-10">
              <motion.h1
                variants={item}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Ananda{" "}
                <span className="text-transparent bg-clip-text bg-purple-400">
                  Aqeel
                </span>
                <br />
                Fathur Rahman
              </motion.h1>

              <motion.p
                variants={item}
                className="text-gray-300 text-lg sm:text-xl max-w-lg leading-relaxed"
              >
                Full-Stack | Passionate about Project Management &
                Digital Solutions | Information Systems Student at Universitas
                Airlangga
              </motion.p>
            </motion.div>
          </motion.div>

          {/* RIGHT: PARALLAX IMAGE STACK */}
          <div className="relative flex justify-center items-center h-96">

            {/* Static blurry bg — tidak bergerak */}
            <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl transform rotate-12 blur-xl" />

            {/* Border frame */}
            <motion.div
              style={{ y: borderY, willChange: "transform" }}
              className="absolute w-96 h-96 border border-purple-500/30 rounded-3xl transform rotate-12"
            />

            {/* Inner ring */}
            <motion.div
              style={{ y: avatarY, willChange: "transform" }}
              className="absolute w-80 h-80 border border-blue-400/20 rounded-full"
            />

            {/* Avatar */}
            <motion.div
              style={{ y: avatarY, willChange: "transform" }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-72 h-72 bg-gradient-to-br from-purple-400/40 to-blue-400/40 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden ring-2 ring-purple-500/20"
            >
              <Image
                src="/fotoaqeel.png"
                alt="Aqeel"
                width={288}
                height={288}
                className="object-cover rounded-full scale-110"
                priority
              />
            </motion.div>

            {/* Floating icons */}
            <motion.div
              style={{ y: dotY, willChange: "transform" }}
              animate={{ rotate: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-10"
            >
              <Plus className="text-blue-400 w-8 h-8 opacity-50" />
            </motion.div>

            <motion.div
              style={{ y: dotY, willChange: "transform" }}
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-10 left-10 w-6 h-6 border-2 border-purple-400 transform rotate-45 opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}