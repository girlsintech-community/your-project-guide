import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const sessions = [
  {
    title: "Entrepreneurship & Strategic Thinking",
    youtubeUrl: "https://youtu.be/WkiHwfHo-qk?si=B5lXAIWpChVzyJCx",
    videoId: "WkiHwfHo-qk",
  },
  {
    title: "How to Deal with FOMO, Burnout & Impostor Syndrome",
    youtubeUrl: "https://youtu.be/pb5cL2zY7U8?si=Js2-9gxqE-gF5YVe",
    videoId: "pb5cL2zY7U8",
  },
  {
    title: "How Leadership & Public Speaking Build Your Confidence",
    youtubeUrl: "https://youtu.be/pdAkjkFv4i4?si=URujz-qWVcVurNex",
    videoId: "pdAkjkFv4i4",
  },
  {
    title: "Unlock your Hidden Potential & Live your life to the Fullest",
    youtubeUrl: "https://youtu.be/QTazZvDYFAw?si=sLtcDVA8c8_nyl_i",
    videoId: "QTazZvDYFAw",
  },
  {
    title: "Discussion on Mental Health",
    youtubeUrl: "https://youtu.be/0BBn6bgb_F8?si=IbKFLKlTlOhrHW9Y",
    videoId: "0BBn6bgb_F8",
  },
];

const SessionsSection = () => {
  return (
    <section id="sessions" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-48 h-48 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-magenta/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wider text-coral uppercase mb-4 block">
              Event Recordings
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Watch the Sessions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Missed the event? Catch up on all the inspiring talks and discussions from EmpowerHer 2025.
            </p>
          </motion.div>

          {/* Sessions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session, index) => (
              <motion.a
                key={session.videoId}
                href={session.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group block"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-coral/30 transition-all duration-300 hover:shadow-card">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${session.videoId}/maxresdefault.jpg`}
                      alt={session.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault doesn't exist
                        e.currentTarget.src = `https://img.youtube.com/vi/${session.videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-coral flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-coral transition-colors line-clamp-2">
                      {session.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3 text-muted-foreground text-sm">
                      <ExternalLink className="w-4 h-4" />
                      <span>Watch on YouTube</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;