
import React from 'react';

interface ConceptGridProps {
  concepts: string[];
  onConceptClick: (concept: string) => void;
}

export const ConceptGrid: React.FC<ConceptGridProps> = ({ concepts, onConceptClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {concepts.map((concept) => (
        <button
          key={concept}
          onClick={() => onConceptClick(concept)}
          className="p-4 bg-slate-800 border border-slate-700 rounded-lg text-center text-slate-300 hover:bg-slate-700 hover:border-cyan-500 hover:text-white transition-all duration-200 transform hover:-translate-y-1"
        >
          {concept}
        </button>
      ))}
    </div>
  );
};
