import { motion } from "framer-motion";
import { Users, UserCheck, MessageCircleQuestion, Sparkles } from "lucide-react";

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

  const questions = [
    "Mam can you give an example of how a business idea stands out from the competition?",
    "If one wants to start with startup as a fresher so what kinds of steps that needs to be followed",
    "Everyone tries sometimes to compare themselves with others so how to tackle such situations?",
    "What advice would you give to girls who take failure a bit hard and how can they remove the self doubt?",
    "There are times when we don't get the desired results and parents question our capabilities. How to save ourselves from constantly proving our worth?",
    "How to handle people who criticize you even when you are on a right track?",
    "How did you bounce back from major failures and motivate yourself to keep going?",
    "I face difficulty making friends and if I do they end up betraying me. Should I just see this as a challenge?",
    "What do you do if you're constantly surrounded by people whose aspirations aren't as big as yours?",
    "How to cope when you feel like you're in the wrong place in terms of career?",
    "Ma'am how to evaluate an idea?",
    "How can I establish healthy boundaries while managing feelings of comparison and FOMO?",
    "How to deal with mental depression? Any ways to stop lurking it in the mind?",
    "I feel anxiety in my lower body when I am anxious about something",
    "What to do in that 2 hrs because everything we do uses laptop?",
    "What to do when lot of complexities are in mind but need to focus?",
    "What to do if we feel more productive at night?",
    "Parents say 'Dekh ke Beta gir na jana' - how to overcome that negative impact?",
    "What if we put a lot of effort in one thing but it compromises other things?",
    "What if we aren't getting full marks and feel like we haven't fulfilled parents' expectations?"
  ];

  const remarkableResponses = [
    "I am remarkable because I am ambitious",
    "I am remarkable because I am able to manage my college and built this valuable community that is helping so many people",
    "I am remarkable because I am great at connecting with people and building long term connections",
    "I am remarkable because I could make a career in IT and got the opportunity to work with the best companies in the world, despite being from a small town from North East India",
    "I am remarkable because I love doing things I am doing",
    "I am remarkable because I feel confident and I can do it",
    "I am remarkable because I could collaborate and network!",
    "I'm remarkable because I'm helping my interns, I'm remarkable because I'm more kind to others than myself",
    "I'm remarkable because I think I'm a great learner"
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
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 max-w-3xl mx-auto mb-16">
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

        {/* Questions Asked */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <MessageCircleQuestion className="w-6 h-6 text-primary" />
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Questions from Attendees
            </h3>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/40 shadow-glass hover:shadow-glass-lg transition-all duration-300"
              >
                <p className="text-foreground/80 text-sm leading-relaxed">
                  "{question}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* I am Remarkable Responses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-accent" />
            <h3 className="font-heading text-2xl font-bold text-foreground">
              #IAmRemarkable Responses
            </h3>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {remarkableResponses.map((response, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md border border-white/40 shadow-glass hover:shadow-glass-lg transition-all duration-300"
              >
                <p className="text-foreground font-medium text-sm leading-relaxed italic">
                  "{response}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
