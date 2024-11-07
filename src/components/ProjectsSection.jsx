import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "GreenPrints: Sustainable 3D Printer Filament",
      description: `Developed an innovative recycling solution that transforms waste soda bottles into 
      3D printer filament, achieving a remarkable 90% reduction in plastic waste. The project 
      incorporates automated machine operations through C++ and Python programming, significantly 
      enhancing recycling and production efficiency.`,
      image: "/api/placeholder/600/400",
      imageAlt: "GreenPrints recycling system",
      tags: ["Sustainability", "Automation", "Python", "C++"]
    },
    {
      title: "RC Aircraft with Deployable Rocket Booster",
      description: `Engineered a custom radio-controlled aircraft featuring an innovative in-flight 
      deployable solid rocket booster system. Achieved precise deployment timing within 50 milliseconds 
      of pilot activation and maintained stable flight characteristics throughout all deployment phases. 
      Successfully completed two test flights demonstrating system reliability.`,
      image: "/api/placeholder/600/400",
      imageAlt: "RC Aircraft with rocket booster",
      tags: ["Aerospace", "Control Systems", "Flight Testing"]
    },
    {
      title: "Template Project",
      description: `[Template] Add your project description here. Include key achievements, 
      technologies used, and quantifiable results. Describe the problem you solved and its impact. 
      Consider adding metrics, scale, or improvements achieved.`,
      image: "/api/placeholder/600/400",
      imageAlt: "Project image",
      tags: ["Tag1", "Tag2", "Tag3"]
    }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-gray-600 whitespace-pre-line">
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;