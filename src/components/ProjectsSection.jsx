import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Autonomous Drone Race Controller",
      description: `Developed a sophisticated autonomous controller for a racing quadcopter using state-space modeling 
      and linear quadratic regulation (LQR). The controller achieved remarkable performance metrics:
      
      • Successfully maintained position accuracy with RMSE < 0.25m in >60% of trials
      • Completed race course in average time of 25 seconds
      • Implemented full state feedback control with optimal gain matrices
      • Designed observer system using motion capture for state estimation
      • Achieved 2nd place in competition among 20+ teams`,
      image: "/portfolio/images/Drone_race.png",
      imageAlt: "Drone race controller visualization",
      tags: ["Control Systems", "Python", "State-Space Modeling", "LQR", "MATLAB"],
      pdfUrl: "/portfolio/pdfs/AE_353___DP_4-2.pdf" // Add your PDF URL here
    },
    {
      title: "CHEETA UAV Wing Structure Analysis",
      description: `Conducted finite element analysis (FEM) on a 5% scale model of the CHEETA hydrogen-powered UAV wing 
      structure using Abaqus CAE:
      
      • Identified critical stress concentrations at wing kink measuring 1.046×10^5 Pa
      • Developed optimized internal wing structure with multiple spars and reinforced ribs
      • Created accurate FEM model with tetrahedral mesh elements and realistic flight loads
      • Simulated elliptical lift distribution for 50N total lift condition
      • Designed structure capable of 33% chord length elastic tip deflection`,
      image: "/api/placeholder/600/400",
      imageAlt: "CHEETA UAV FEM Analysis",
      tags: ["FEM Analysis", "Abaqus CAE", "SolidWorks", "Structural Design", "Aerospace"],
      pdfUrl: "#" // Add your PDF URL here
    },
    {
      title: "GreenPrints: Sustainable 3D Printer Filament",
      description: `Developed an innovative recycling solution that transforms waste soda bottles into 
      3D printer filament, achieving a remarkable 90% reduction in plastic waste. The project 
      incorporates automated machine operations through C++ and Python programming, significantly 
      enhancing recycling and production efficiency.`,
      image: "/api/placeholder/600/400",
      imageAlt: "GreenPrints recycling system",
      tags: ["Sustainability", "Automation", "Python", "C++"],
      pdfUrl: "#" // Replace with your actual PDF URL
    },
    {
      title: "RC Aircraft with Deployable Rocket Booster",
      description: `Engineered a custom radio-controlled aircraft featuring an innovative in-flight 
      deployable solid rocket booster system. Achieved precise deployment timing within 50 milliseconds 
      of pilot activation and maintained stable flight characteristics throughout all deployment phases. 
      Successfully completed two test flights demonstrating system reliability.`,
      image: "/api/placeholder/600/400",
      imageAlt: "RC Aircraft with rocket booster",
      tags: ["Aerospace", "Control Systems", "Flight Testing"],
      pdfUrl: "#" // Replace with your actual PDF URL
    },
    {
      title: "Template Project",
      description: `[Template] Add your project description here. Include key achievements, 
      technologies used, and quantifiable results. Describe the problem you solved and its impact. 
      Consider adding metrics, scale, or improvements achieved.`,
      image: "/api/placeholder/600/400",
      imageAlt: "Project image",
      tags: ["Tag1", "Tag2", "Tag3"],
      pdfUrl: "#" // Replace with your actual PDF URL
    }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <a 
            href={project.pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={index}
            className="block transition-transform hover:scale-105 hover:shadow-lg"
          >
            <Card className="overflow-hidden h-full">
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;