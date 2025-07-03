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
                Hi! I'm Daksh Sharma, an Engineering student at JIET, Jodhpur (B.Tech in Computer Science & Engineering, 8.5 CGPA till 3rd Sem), 
                with a deep interest in Generative AI, Computer Vision, and Software Development.
              </p>
              
              <p>
                I'm passionate about applying technology to solve real-world problems and thrive on building innovative projects. 
                My approach combines practical learning with hands-on experience, which has led me to participate in hackathons 
                like Smart India Hackathon 2024 where I was a runner-up.
              </p>
              
              <p>
                What drives me is the excitement of turning complex technical concepts into practical solutions that make a real difference. 
                I believe in continuous learning and enjoy tackling challenges that push the boundaries of what's possible with technology.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring the latest developments in AI, working on personal projects, 
                or collaborating with fellow developers to create something amazing.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-primary/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">Teamwork</h3>
                  <p className="text-sm text-muted-foreground">
                    Collaborative approach to problem-solving and project development
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">Creativity</h3>
                  <p className="text-sm text-muted-foreground">
                    Innovative thinking to create unique solutions
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">Problem-Solving</h3>
                  <p className="text-sm text-muted-foreground">
                    Analytical approach to breaking down complex challenges
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">Resourcefulness</h3>
                  <p className="text-sm text-muted-foreground">
                    Ability to find creative solutions with available resources
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