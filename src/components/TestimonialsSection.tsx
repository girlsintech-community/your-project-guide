import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sanwedana",
      feedback: "WOW!! I'd never attended any like these lined-up sessions and that too productive. Speakers were so amazing."
    },
    {
      name: "Catherine Infanta",
      feedback: "This is an all rounder session where i could get access to multiple sessions for free and the instructors are just experts in their field with 20+ years of experience! I appreciate the community and volunteers involved in organizing this awesome session. Its great that you embrace this women's day by organizing such useful sessions."
    },
    {
      name: "Ishita Soni",
      feedback: "Each Speaker was so great. Got to see the views from experienced WOMEN. In the future, 5 continuous sessions might be too many. Not able to take 100% of those valuable sessions that way. But still, this was a great marathon."
    },
    {
      name: "Manisha Choudhary",
      feedback: "It was a knowledgeable event."
    },
    {
      name: "Renu Kumari Prajapati",
      feedback: "It was amazing session and I learnt a lot and very grateful for the sessions and amazing guest."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-sky-50 to-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What Attendees Said
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the amazing women who joined us for EmpowerHer 2025
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group w-full md:w-[calc(50%-12px)] lg:w-auto lg:max-w-sm"
            >
              <div className="h-full p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-glass hover:shadow-glass-lg transition-all duration-300">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="font-medium text-foreground">{testimonial.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
