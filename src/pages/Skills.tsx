import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "JIET, Jodhpur",
      grade: "8.5 CGPA",
      year: "2022-2026 (4th Sem)",
      status: "Pursuing"
    },
    {
      degree: "Class 12 (PCM)",
      institution: "Vidya Sagar Sr. Sec. School, Jaipur",
      grade: "83.4%",
      year: "2022",
      status: "Completed"
    },
    {
      degree: "Class 10",
      institution: "Bhartiya Vidya Bhavan's Vidyashram, Jaipur", 
      grade: "90.6%",
      year: "2020",
      status: "Completed"
    }
  ];

  const technicalSkills = {
    "Programming Languages": ["C", "C++", "Python", "Java", "JavaScript", "PHP"],
    "AI/ML Tools": ["NumPy", "Pandas", "Matplotlib", "OpenCV", "PyTorch", "Hugging Face"],
    "Web & Database": ["MongoDB", "MySQL", "PHP", "JavaScript", "HTML", "CSS"],
    "DevOps & Tools": ["Docker", "Git", "Linux"],
    "Frameworks": ["Streamlit", "React", "TailwindCSS"]
  };

  const softSkills = [
    "Teamwork",
    "Creativity", 
    "Problem-Solving",
    "Attention to Detail",
    "Resourcefulness",
    "Communication",
    "Time Management",
    "Rapid Prototyping"
  ];

  const certifications = [
    "Smart India Hackathon 2024 - Runner-up",
    "LNMHACKS 7.0 2025 - Participant",
    "NPTEL: Programming in Modern C++",
    "NPTEL: DSA using Python", 
    "NPTEL: Database Management Systems",
    "Infosys Springboard: C Programming",
    "Infosys Springboard: Introduction to Java"
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Education & <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my academic background and technical expertise
          </p>
        </div>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 slide-up">Education</h2>
          <div className="grid gap-6">
            {education.map((item, index) => (
              <Card key={index} className="slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.degree}</h3>
                      <p className="text-muted-foreground mb-2">{item.institution}</p>
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">{item.grade}</Badge>
                        <span className="text-sm text-muted-foreground">{item.year}</span>
                        <Badge className={item.status === 'Pursuing' ? 'bg-primary' : 'bg-green-500'}>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 slide-up">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <Card key={category} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Soft Skills & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8 slide-up">Soft Skills</h2>
            <Card className="slide-up">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Certifications & Achievements */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8 slide-up">Achievements</h2>
            <Card className="slide-up">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={cert} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Skills Progress Visualization */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 slide-up">Proficiency Levels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: "Python", level: 90 },
              { skill: "Machine Learning", level: 85 },
              { skill: "Computer Vision", level: 80 },
              { skill: "JavaScript", level: 75 },
              { skill: "React", level: 70 },
              { skill: "Docker", level: 65 },
            ].map((item, index) => (
              <div key={item.skill} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;