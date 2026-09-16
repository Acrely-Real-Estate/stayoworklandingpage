"use client";

import { motion } from "framer-motion";
import { contactContent } from "@/content/contact";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface-container-lowest min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin w-full">
        
        {/* HERO & DETAILS SPLIT */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 md:mb-40 items-start">
          
          {/* LEFT: Headline */}
          <div className="lg:w-1/2 flex flex-col">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-8 block">
              {contactContent.hero.label}
            </span>
            
            <h1 
              className="font-headline text-[clamp(56px,7vw,110px)] text-on-surface font-bold leading-[1.05] tracking-tight mb-8" 
              style={{ wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none' }}
            >
              {contactContent.hero.headline.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-lg">
              {contactContent.hero.support}
            </p>
          </div>
          
          {/* RIGHT: Contact Information */}
          <div className="lg:w-1/2 flex flex-col w-full lg:pt-16">
            <div className="flex flex-col gap-12 lg:pl-12">
              
              {/* EMAIL */}
              <div className="group flex flex-col">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4 block">Email</span>
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactContent.details.email}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headline text-3xl md:text-4xl lg:text-5xl text-on-surface font-bold transition-colors group-hover:text-primary flex items-center justify-between gap-6 w-full"
                  aria-label={`Email us at ${contactContent.details.email}`}
                >
                  <span className="break-words" style={{ whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                    {contactContent.details.email}
                  </span>
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                </a>
                <div className="w-full h-[1px] bg-outline-variant/40 mt-8 transition-colors group-hover:bg-primary/40" />
              </div>

              {/* PHONE */}
              <div className="group flex flex-col">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4 block">Phone</span>
                <a 
                  href={`tel:${contactContent.details.phone.replace(/[^0-9]/g, '')}`} 
                  className="font-headline text-3xl md:text-4xl lg:text-5xl text-on-surface font-bold transition-colors group-hover:text-primary flex items-center justify-between gap-6 w-full"
                  aria-label={`Call us at ${contactContent.details.phone}`}
                >
                  <span className="break-words" style={{ whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                    {contactContent.details.phone}
                  </span>
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 lg:hidden" />
                </a>
                <div className="w-full h-[1px] bg-outline-variant/40 mt-8 transition-colors group-hover:bg-primary/40" />
              </div>

              {/* GENERAL ENQUIRIES */}
              <div className="flex flex-col mt-4">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4 block">
                  {contactContent.details.general.label}
                </span>
                <p className="text-lg md:text-xl text-on-surface font-medium max-w-md">
                  {contactContent.details.general.description}
                </p>
              </div>

            </div>
          </div>

        </div>
        
        {/* VISUAL ANCHOR */}
        <motion.div 
          initial={{ opacity: 1, scale: 0.98 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
          viewport={{ once: true }}
          className="w-full h-[400px] md:h-[600px] bg-surface-container relative overflow-hidden rounded-sm"
        >
          <img 
            src={contactContent.visual.image} 
            alt={contactContent.visual.alt} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </motion.div>
        
      </div>
    </div>
  );
}
