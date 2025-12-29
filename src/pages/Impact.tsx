import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MessageCircleQuestion, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const Impact = () => {
  return (
    <>
      <Helmet>
        <title>Event Impact | EmpowerHer 2025</title>
        <meta name="description" content="See the impact of EmpowerHer 2025 - questions from attendees and #IAmRemarkable responses." />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-sky-50 to-background">
        <div className="container px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Making a Difference
            </span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Event Impact
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Questions asked and #IAmRemarkable responses from EmpowerHer 2025
            </p>
          </motion.div>

          {/* Questions Asked */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <MessageCircleQuestion className="w-6 h-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Questions from Attendees
              </h2>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.03 }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-accent" />
              <h2 className="font-heading text-2xl font-bold text-foreground">
                #IAmRemarkable Responses
              </h2>
            </div>
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
              {remarkableResponses.map((response, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
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
      </main>

      <Footer />
    </>
  );
};

export default Impact;
