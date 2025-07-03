import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Linkedin, Github } from 'lucide-react';

const Home = () => {
  const [typingText, setTypingText] = useState('');
  const fullText = "Engineering student passionate about Generative AI, Computer Vision & solving real-world problems through technology.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hero-bg to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
                Hi,
                <br />
                I'm <span className="gradient-text">Daksh</span>
                <br />
                <span className="text-3xl lg:text-5xl text-muted-foreground">
                  CS Student
                </span>
              </h1>
              
              <div className="h-20 mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {typingText}
                  <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"></span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <Button variant="outline" className="px-8 py-3 text-lg" onClick={() => window.open('#', '_blank')}>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 mt-8 lg:hidden">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative slide-up">
              <div className="relative">
                {/* Blue gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-full transform rotate-6 scale-95"></div>
                
                {/* Profile image placeholder */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-6xl font-bold text-gray-400 dark:text-gray-600">
                    DS
                  </div>
                  {/* You can replace this with an actual image */}
                  {<img 
                    src="/profile.jpg" 
                    alt="Daksh Sharma" 
                    className="w-full h-full object-cover rounded-full"
                  />}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full floating"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/20 rounded-full floating" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <h3 className="text-3xl font-bold text-primary">8.5</h3>
              <p className="text-muted-foreground">CGPA</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-bold text-primary">5+</h3>
              <p className="text-muted-foreground">Projects</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-3xl font-bold text-primary">2</h3>
              <p className="text-muted-foreground">Hackathons Won</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-3xl font-bold text-primary">10+</h3>
              <p className="text-muted-foreground">Technologies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;