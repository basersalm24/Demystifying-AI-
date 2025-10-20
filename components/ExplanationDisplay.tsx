
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface ExplanationDisplayProps {
  term: string;
  explanation: string;
  isLoading: boolean;
  error: string | null;
}

// Basic markdown-to-HTML converter
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
    const renderContent = () => {
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
            .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
            .split('\n')
            .map((line, index) => {
                if (line.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-cyan-400">{line.substring(4)}</h3>;
                }
                if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-violet-400">{line.substring(3)}</h2>;
                }
                if (line.startsWith('# ')) {
                    return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-white">{line.substring(2)}</h1>;
                }
                if (line.trim().startsWith('- ')) {
                    return <li key={index} className="ml-6 mb-1">{line.substring(2)}</li>;
                }
                return line.trim() === '' ? <br key={index} /> : <p key={index} className="mb-4 leading-relaxed">{line}</p>;
            });
    };

    return <div className="prose prose-invert max-w-none">{renderContent()}</div>;
};


export const ExplanationDisplay: React.FC<ExplanationDisplayProps> = ({ term, explanation, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="mt-12 p-8 bg-slate-800/50 border border-slate-700 rounded-lg flex flex-col items-center justify-center min-h-[200px]">
        <LoadingSpinner />
        <p className="mt-4 text-slate-400 animate-pulse">
            جاري توليد شرح لـ "{term}"...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 p-8 bg-red-900/20 border border-red-500/50 rounded-lg text-center">
        <p className="text-red-400 font-semibold">{error}</p>
      </div>
    );
  }

  if (!explanation) {
    return (
        <div className="mt-12 p-8 bg-slate-800/50 border border-dashed border-slate-700 rounded-lg text-center min-h-[200px] flex items-center justify-center">
            <p className="text-slate-500">سيظهر الشرح هنا عند البحث عن مصطلح.</p>
        </div>
    );
  }

  return (
    <div className="mt-12 p-6 md:p-8 bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            شرح لـ: {term}
        </h2>
        <div className="text-slate-300 space-y-4 leading-loose">
           <MarkdownRenderer content={explanation} />
        </div>
    </div>
  );
};
