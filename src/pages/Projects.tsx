import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Traffic Control System",
      description: "Real-Time Traffic Control using Computer Vision and AI that analyzes traffic patterns and optimizes signal timing. Winner of Smart India Hackathon 2024 Runner-up position.",
      technologies: ["Python", "OpenCV", "PyTorch", "Computer Vision", "AI"],
      category: "AI/Computer Vision",
      status: "Completed",
      achievement: "Smart India Hackathon 2024 - Runner-up",
      demoLink: "#",
      githubLink: "#",
      features: [
        "Real-time traffic density analysis",
        "Intelligent signal timing optimization",
        "Emergency vehicle detection",
        "Traffic flow prediction"
      ]
    },
    {
      title: "RAG-based Financial Report Processor",
      description: "Innovative financial report processing system using Claude LLM & Google Drive Connector for automated analysis and insights generation.",
      technologies: ["Python", "Claude LLM", "Google Drive API", "RAG", "NLP"],
      category: "Generative AI",
      status: "Completed",
      achievement: "LNMHACKS 7.0 2025 - Participant",
      demoLink: "#",
      githubLink: "#",
      features: [
        "Automated report parsing",
        "Intelligent data extraction",
        "Context-aware question answering",
        "Google Drive integration"
      ]
    },
    {
      title: "AI-Powered Multi-Modal Chatbot",
      description: "Comprehensive chatbot with Speech-to-Text, Text-to-Speech, and Text-to-Image capabilities using Gemini API, Streamlit, and Hugging Face models.",
      technologies: ["Python", "Gemini API", "Streamlit", "MongoDB", "Hugging Face"],
      category: "Full-Stack AI",
      status: "Completed",
      achievement: "Featured Project",
      demoLink: "#",
      githubLink: "#",
      features: [
        "Multi-modal interaction",
        "Real-time voice processing",
        "Image generation capabilities",
        "Conversation history storage"
      ]
    },
    {
      title: "Library Management System",
      description: "Complete web-based library management solution with user authentication, book cataloging, and automated fine calculation.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "Web Development",
      status: "Completed",
      achievement: "Academic Project",
      demoLink: "#",
      githubLink: "#",
      features: [
        "User authentication system",
        "Book inventory management",
        "Automated fine calculation",
        "Search and filter functionality"
      ]
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website showcasing projects and skills with dark/light theme toggle and smooth animations.",
      technologies: ["React", "TailwindCSS", "TypeScript", "Framer Motion"],
      category: "Web Development",
      status: "Completed",
      achievement: "Current Project",
      demoLink: "#",
      githubLink: "#",
      features: [
        "Responsive design",
        "Dark/light theme toggle",
        "Smooth animations",
        "SEO optimized"
      ]
    }
  ];

  const categories = ["All", "AI/Computer Vision", "Generative AI", "Full-Stack AI", "Web Development"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projects & <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my latest projects showcasing skills in AI, Computer Vision, and Full-Stack Development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 slide-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-xl transition-all duration-300 slide-up border-border/50 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <Badge 
                    className={project.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                
                {project.achievement && (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-primary">
                      {project.achievement}
                    </span>
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <section className="mt-20 slide-up">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Experience Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Hackathons Won</h3>
                <p className="text-muted-foreground text-sm">
                  Smart India Hackathon 2024 Runner-up and LNMHACKS 7.0 2025 participant
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">5+</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Projects Completed</h3>
                <p className="text-muted-foreground text-sm">
                  From AI/ML solutions to full-stack web applications
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">AI Specializations</h3>
                <p className="text-muted-foreground text-sm">
                  Computer Vision, Generative AI, and Natural Language Processing
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;