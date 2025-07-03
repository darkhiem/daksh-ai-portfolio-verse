import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with Computer Vision in 2024",
      excerpt: "A comprehensive guide to diving into computer vision with modern tools and frameworks.",
      date: "March 15, 2024",
      category: "Computer Vision",
      readTime: "5 min read"
    },
    {
      title: "My Journey in Generative AI",
      excerpt: "Exploring the fascinating world of generative AI and its applications in solving real-world problems.",
      date: "March 10, 2024",
      category: "Generative AI",
      readTime: "8 min read"
    },
    {
      title: "Hackathon Tips: From Idea to Implementation",
      excerpt: "Lessons learned from participating in hackathons and strategies for success.",
      date: "March 5, 2024",
      category: "Experience",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Sharing insights on AI, technology, and my learning journey
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post, index) => (
            <Card key={post.title} className="slide-up hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
                <p className="text-muted-foreground">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;