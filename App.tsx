import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import RegistrationBanner from './components/RegistrationBanner.tsx';
import VolunteerGuidelines from './components/VolunteerGuidelines.tsx';
import VolunteerTutorial from './components/VolunteerTutorial.tsx';
import PackageVisualizer from './components/PackageVisualizer.tsx';
import VolunteerSearch from './components/VolunteerSearch.tsx';
import Footer from './components/Footer.tsx';
import InstructionsModal from './components/InstructionsModal.tsx';
import PackageModal from './components/PackageModal.tsx';
import DeveloperModal from './components/DeveloperModal.tsx';

const App: React.FC = () => {
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
  const [isPackageOpen, setIsPackageOpen] = useState(false);
  const [isDeveloperOpen, setIsDeveloperOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col islamic-pattern bg-opacity-5">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          onOpenInstructions={() => setIsInstructionsOpen(true)}
          onOpenDirectory={() => setIsDirectoryOpen(true)}
          onOpenPackage={() => setIsPackageOpen(true)}
        />
        
        <div className="container mx-auto px-4 -mt-10 mb-12 relative z-10">
          <RegistrationBanner />
        </div>

        <section id="guidelines" className="py-16 bg-white/50">
          <VolunteerGuidelines />
        </section>

        <section id="tutorial" className="py-20 bg-[#064d3b] text-white">
          <VolunteerTutorial />
        </section>

        <section id="package" className="py-16 bg-emerald-50/50">
          <PackageVisualizer />
        </section>

        <section id="volunteers" className="py-16 bg-white/50">
          <VolunteerSearch 
            forceDirectoryOpen={isDirectoryOpen} 
            onCloseDirectory={() => setIsDirectoryOpen(false)} 
            onOpenDirectory={() => setIsDirectoryOpen(true)}
          />
        </section>
      </main>

      <Footer onOpenDeveloper={() => setIsDeveloperOpen(true)} />

      {/* Global Modals rendered immediately for speed */}
      {isInstructionsOpen && (
        <InstructionsModal onClose={() => setIsInstructionsOpen(false)} />
      )}
      
      {isPackageOpen && (
        <PackageModal onClose={() => setIsPackageOpen(false)} />
      )}

      {isDeveloperOpen && (
        <DeveloperModal onClose={() => setIsDeveloperOpen(false)} />
      )}
    </div>
  );
};

export default App;