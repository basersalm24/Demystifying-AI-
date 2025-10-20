
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { ConceptGrid } from './components/ConceptGrid';
import { ExplanationDisplay } from './components/ExplanationDisplay';
import { Footer } from './components/Footer';
import { explainConcept } from './services/geminiService';
import { PREDEFINED_CONCEPTS } from './constants';

const App: React.FC = () => {
  const [activeTerm, setActiveTerm] = useState<string>('');
  const [explanation, setExplanation] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = useCallback(async (term: string) => {
    if (!term || isLoading) return;

    setIsLoading(true);
    setError(null);
    setExplanation('');
    setActiveTerm(term);

    try {
      const result = await explainConcept(term);
      setExplanation(result);
    } catch (err) {
      setError('حدث خطأ أثناء جلب الشرح. يرجى المحاولة مرة أخرى.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);
  
  const handleConceptClick = (term: string) => {
    handleSearch(term);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          
          <div className="my-8 text-center">
            <p className="text-slate-400">أو اختر أحد المفاهيم الشائعة:</p>
          </div>

          <ConceptGrid concepts={PREDEFINED_CONCEPTS} onConceptClick={handleConceptClick} />
          
          <ExplanationDisplay 
            term={activeTerm} 
            explanation={explanation} 
            isLoading={isLoading} 
            error={error} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
