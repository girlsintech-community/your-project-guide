import { motion } from "framer-motion";
import { Users, UserCheck } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      icon: Users,
      value: "336",
      label: "Registrations",
      description: "Women registered for the event"
    },
    {
      icon: UserCheck,
      value: "67",
      label: "Attendees",
      description: "Girls joined us live"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-sky-50 to-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Making a Difference
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Event Impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The reach and engagement of EmpowerHer 2025
          </p>
        </motion.div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-glass flex items-center justify-center">
                <stat.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-foreground font-semibold mb-1">{stat.label}</div>
              <div className="text-muted-foreground text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
