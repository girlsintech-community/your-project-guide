import { useRef } from "react";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

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
    <section id="testimonials" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What Attendees Said
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the amazing women who joined us for EmpowerHer 2025
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-6 rounded-2xl bg-card/80 backdrop-blur-md border border-border/40 shadow-card hover:shadow-glow transition-all duration-300">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                      "{testimonial.feedback}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </div>
                      <span className="font-medium text-foreground">{testimonial.name}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
