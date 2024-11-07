import React from 'react';
import ProjectsSection from './components/ProjectsSection';
import { Linkedin, FileText } from 'lucide-react'; // Using lucide icons

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-6 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Jack Whitehouse</h1>
            <p className="text-gray-600 mt-2">Aerospace Engineering Student</p>
            <div className="flex gap-4 mt-3">
              <a 
                href="https://www.linkedin.com/in/jack-whitehouse-36a483212/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <FileText size={20} />
                <span>Resume</span>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src="public/images/headshot.jpg"
              alt="Jack Whitehouse"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 shadow-lg"
            />
          </div>
        </div>
      </header>
      <main>
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;