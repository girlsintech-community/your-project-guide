import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Safe Space",
    description: "A supportive community where every woman feels valued, heard, and encouraged to pursue her dreams.",
  },
  {
    icon: Lightbulb,
    title: "Expert Sessions",
    description: "Engage in conversations about mental health, leadership, public speaking, and overcoming challenges.",
  },
  {
    icon: Users,
    title: "Connection",
    description: "Build genuine relationships, share experiences, and find a sense of belonging with like-minded women.",
  },
  {
    icon: MessageCircle,
    title: "Interactive",
    description: "Breakout discussions and activities ensure meaningful two-way conversations and growth opportunities.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-subtle-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-magenta/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
              About The Event
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              More Than Just an Event
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              EmpowerHer 2025 is a movement, a celebration of strength, resilience, and inclusivity. 
              For the dreamers, the doers, the learners, and the changemakers.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                Women and girls across the world face countless challenges—barriers to leadership, 
                societal pressures, struggles with confidence, and the burden of expectations. 
                Too often, they are told to fit into boxes, to dim their light, or to follow paths 
                that do not align with their true potential.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                But we believe in a different future—one where every girl has the tools, opportunities, 
                and support to rise, lead, and thrive. EmpowerHer 2025 is designed to make that future a reality.
              </p>
              <p className="text-foreground font-medium leading-relaxed">
                This event is for every girl who has ever felt like she didn't belong, for every woman 
                who has struggled to find her voice, and for every ally who believes in creating a world 
                where gender is not a limitation but a source of strength.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  A Call to Action
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  EmpowerHer 2025 is an invitation to show up for yourself and for others, 
                  to stand together in solidarity, and to push forward toward a more inclusive, equal world.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-hero-gradient flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Your presence matters</p>
                    <p className="text-sm text-muted-foreground">This is your space, your community</p>
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-coral/10 rounded-3xl" />
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-card rounded-2xl p-6 border border-border/50 hover:border-coral/30 transition-all duration-300 hover:shadow-card">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-coral/10 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-coral" />
                  </div>
                  <h4 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
