import React from 'react';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-6 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Jack Whitehouse</h1>
          <p className="text-gray-600 mt-2">Aerospace Engineering Student, University of Illinois at Urbana-Champaign</p>
        </div>
      </header>
      <main>
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;