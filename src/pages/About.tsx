import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging technology to solve real-world problems and drive innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="slide-up">
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center text-4xl font-bold text-gray-400 dark:text-gray-600">
                Profile Photo
              </div>
              {/* Replace with actual image */}
              {/* <img 
                src="/path-to-full-photo.jpg" 
                alt="Daksh Sharma" 
                className="w-full h-96 object-cover rounded-2xl"
              /> */}
            </div>
          </div>

          {/* Content Section */}
          <div className="slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Turning Ideas Into Reality
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hi! I'm Daksh Sharma, a passionate Computer Science & Engineering student at JIET, Jodhpur, 
                with a strong focus on applying cutting-edge technology to solve real-world business challenges.
              </p>
              
              <p>
                My journey in technology is driven by an insatiable curiosity for Generative AI and Computer Vision. 
                I believe in the power of practical learning and hands-on experience, which has led me to participate 
                in numerous hackathons and build innovative projects.
              </p>
              
              <p>
                What sets me apart is my ability to bridge the gap between complex technical concepts and practical 
                business applications. I'm constantly exploring how emerging technologies can create meaningful impact 
                and drive innovation in various industries.
              </p>
              
              <p>
                When I'm not coding or working on projects, you'll find me researching the latest developments in AI, 
                contributing to open-source projects, or mentoring fellow students in their technology journey.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-primary/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Always seeking creative solutions to complex problems
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Committed to delivering high-quality work and continuous improvement
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    Believing in the power of teamwork and knowledge sharing
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Focused on creating technology that makes a real difference
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;