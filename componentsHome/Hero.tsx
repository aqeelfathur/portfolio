"use client"

import React from "react"
import Image from "next/image"
import { Plus } from "lucide-react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export default function Hero() {
  const { scrollY } = useScroll()

  // spring config
  const springConfig = { stiffness: 60, damping: 20, mass: 1 }

  // parallax config
  const rawGeoY        = useTransform(scrollY, [0, 800], [0, 180])   // paling cepat
  const rawGeoBorderY  = useTransform(scrollY, [0, 800], [0, 120])
  const rawAvatarY     = useTransform(scrollY, [0, 800], [0, 60])    // lebih lambat
  const rawDot1Y       = useTransform(scrollY, [0, 800], [0, -100])  // naik (counter)
  const rawDot2Y       = useTransform(scrollY, [0, 800], [0, -70])
  const rawOrb1Y       = useTransform(scrollY, [0, 800], [0, 140])
  const rawOrb2Y       = useTransform(scrollY, [0, 800], [0, -90])

  const geoY       = useSpring(rawGeoY,       springConfig)
  const geoBorderY = useSpring(rawGeoBorderY, springConfig)
  const avatarY    = useSpring(rawAvatarY,    springConfig)
  const dot1Y      = useSpring(rawDot1Y,      springConfig)
  const dot2Y      = useSpring(rawDot2Y,      springConfig)
  const orb1Y      = useSpring(rawOrb1Y,      springConfig)
  const orb2Y      = useSpring(rawOrb2Y,      springConfig)

  // TEXT SCALE UP on scroll
  const rawTextScale   = useTransform(scrollY, [0, 400], [1, 1.08])
  const rawTextOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const rawTextY       = useTransform(scrollY, [0, 500], [0, -40])
  const textScale   = useSpring(rawTextScale,   { stiffness: 80, damping: 25 })
  const textOpacity = useSpring(rawTextOpacity, { stiffness: 80, damping: 25 })
  const textY       = useSpring(rawTextY,       { stiffness: 80, damping: 25 })

  // avatar rotate subtle on scroll
  const rawAvatarRotate = useTransform(scrollY, [0, 600], [0, 6])
  const avatarRotate    = useSpring(rawAvatarRotate, springConfig)

  // inner ring parallax
  const rawRingY = useTransform(scrollY, [0, 800], [0, 90])
  const ringY    = useSpring(rawRingY, springConfig)

  // badge parallax
  const rawBadge1Y = useTransform(scrollY, [0, 600], [0, -50])
  const badge1Y    = useSpring(rawBadge1Y, springConfig)
  const rawBadge2Y = useTransform(scrollY, [0, 600], [0, 50])
  const badge2Y    = useSpring(rawBadge2Y, springConfig)

  // STAGGER ANIMATION
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
  }
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section
      className="relative min-h-screen pt-60 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* ── BACKGROUND AMBIENT ORBS ── */}
      <motion.div
        style={{ y: orb1Y }}
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[120px]"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="pointer-events-none absolute -bottom-40 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[100px]"
      />

      {/* ── FLOATING DECORATIVE – LEFT ── */}
      <motion.div
        style={{ y: dot1Y }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-10 w-8 h-8 border-2 border-purple-400 opacity-30"
      />
      <motion.div
        style={{ y: dot2Y }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-40 left-24 w-4 h-4 bg-blue-400/30 rounded-full"
      />

      {/* ── FLOATING DECORATIVE – RIGHT ── */}
      <motion.div
        style={{ y: dot2Y }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-40 right-20 w-12 h-12 border-2 border-blue-400 rounded-full opacity-20"
      />
      <motion.div
        style={{ y: dot1Y }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-60 right-8 w-6 h-6 border border-purple-300/40 rotate-45"
      />

      {/* ── GRID NOISE OVERLAY ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)",
        }}
      />

      {/* ── MAIN CONTAINER ── */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 gap-y-35 items-center">

          {/* ── LEFT: TEXT with scale-up + fade on scroll ── */}
          <motion.div
            style={{ scale: textScale, opacity: textOpacity, y: textY }}
            className="origin-left"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6 z-10"
            >
              <motion.h1
                variants={item}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Ananda{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
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

          {/* ── RIGHT: PARALLAX IMAGE STACK ── */}
          <div className="relative flex justify-center items-center h-96">

            {/* Layer 1 – blurry geo bg, fastest */}
            <motion.div
              style={{ y: geoY }}
              className="absolute w-80 h-80 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl transform rotate-12 blur-xl"
            />

            {/* Layer 2 – border frame, medium speed */}
            <motion.div
              style={{ y: geoBorderY }}
              className="absolute w-96 h-96 border border-purple-500/30 rounded-3xl transform rotate-12"
            />

            {/* Layer 3 – inner ring, slightly slower */}
            <motion.div
              style={{ y: ringY }}
              className="absolute w-80 h-80 border border-blue-400/20 rounded-full"
            />

            {/* Layer 4 – AVATAR, slowest + subtle rotate */}
            <motion.div
              style={{ y: avatarY, rotate: avatarRotate }}
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

            {/* Floating icons on right panel */}
            <motion.div
              style={{ y: dot1Y }}
              animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-10"
            >
              <Plus className="text-blue-400 w-8 h-8 opacity-50" />
            </motion.div>

            <motion.div
              style={{ y: dot2Y }}
              animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-10 left-10 w-6 h-6 border-2 border-purple-400 transform rotate-45 opacity-50"
            />

            {/* Badge floating – parallax berlawanan arah */}
            <motion.div
              style={{ y: badge1Y }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-20 z-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2 text-sm text-white/80"
            >
              Full-Stack Dev
            </motion.div>

            <motion.div
              style={{ y: badge2Y }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 bottom-20 z-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2 text-sm text-white/80"
            >
              Open to Internship!
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}