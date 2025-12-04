"use client";

import { motion } from "framer-motion";
import { Home, Instagram, Linkedin, MessageCircle, ExternalLink } from "lucide-react"; 
import Link from "next/link";

// --- KONFIGURASI ---
const BASE_PATH = "/porto"; // Sesuaikan nama repo

// Data Video Youtube
const videos = [
  { id: 1, title: "Cinematic Highlight 1", youtubeId: "fljrhe8HHic" },
  { id: 2, title: "Cinematic Highlight 2", youtubeId: "K5s088A7l9c" },
];

// Data Foto (Pastikan file ada di public/gallery/)
const photos = [
  { id: 1, title: "Urban Portrait", category: "Street", src: `${BASE_PATH}/gallery/1.jpg` },
  { id: 2, title: "Studio Session", category: "Fashion", src: `${BASE_PATH}/gallery/2.jpg` },
  { id: 3, title: "Night Vibes", category: "Low Light", src: `${BASE_PATH}/gallery/3.jpg` },
  { id: 4, title: "Product Detail", category: "Commercial", src: `${BASE_PATH}/gallery/4.jpg` },
];

const socialLinks = [
  { icon: Home, label: "Home", href: "#" }, 
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/bimahabib98" }, 
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/bimahabibnugraha" }, 
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/6289530324308" },  
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6 md:p-16 pb-32 font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mb-16 mt-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-neutral-400 text-sm font-medium tracking-wide">AVAILABLE FOR WORK</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-white">
          Bima <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Habib</span>
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-xl leading-relaxed">
          Visual Storyteller & Content Creator. Spesialis dalam videografi sinematik dan fotografi komersial.
        </p>
      </motion.div>

      {/* SECTION VIDEO */}
      <section className="mb-20">
        <div className="flex items-end gap-3 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest <span className="text-neutral-500">Visuals</span>
          </h2>
          <div className="h-[2px] flex-1 bg-neutral-800 mb-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                <iframe
                  className="w-full h-full absolute inset-0"
                  src={`https://www.youtube.com/embed/${item.youtubeId}?modestbranding=1&rel=0&controls=1&showinfo=0`}
                  title={item.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-neutral-300 group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION PHOTO */}
      <section>
        <div className="flex items-end gap-3 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Selected <span className="text-neutral-500">Shots</span>
          </h2>
          <div className="h-[2px] flex-1 bg-neutral-800 mb-2"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {photos.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative bg-neutral-900 shadow-lg">
                <img 
                  src={item.src} 
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-1">
                    {item.category}
                  </p>
                  <p className="text-sm font-bold text-white truncate">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DOCK MENU (Versi Compact) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
        <div className="flex items-center justify-center gap-1 px-4 py-2 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          {socialLinks.map((link, i) => (
            <Link 
              key={i} 
              href={link.href} 
              target={link.label === "Home" ? "_self" : "_blank"}
              className="p-2 rounded-full hover:bg-white/10 transition-all text-neutral-400 hover:text-white hover:scale-105"
            >
              <link.icon className="w-5 h-5" />
            </Link>
          ))}
          
          <div className="w-[1px] h-4 bg-white/10 mx-1"></div>
          
          <Link 
            href="mailto:bimahabibnugraha@gmail.com"
            className="p-2 rounded-full bg-white text-black hover:opacity-80 transition-opacity"
          >
             <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>