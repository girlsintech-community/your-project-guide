import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
const CTASection = () => {
  return <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary-foreground/40 rounded-full" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8">
              <Heart className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">
                Limited Seats Available
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Join the Movement
            </h2>
            
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Together, let's create an impact that lasts far beyond this event—one that 
              continues to uplift, empower, and transform lives.
            </p>

            {/* Event Details */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">March 8, 2025</span>
              </div>
              <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Mohali, India</span>
              </div>
              <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Full Day Event</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <Button size="xl" className="bg-primary-foreground text-coral hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" onClick={() => window.open("https://events.cmxhub.com/events/details/cmx-mohali-presents-empowerher-elevate-inspire-lead/", "_blank")}>Virtual event • Organized by Girls Leading Tech<ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <p className="text-primary-foreground/70 text-sm mt-6">
              Free event • Open to all genders • Organized by Girls in Tech
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default CTASection;