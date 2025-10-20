
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (term: string) => void;
  isLoading: boolean;
}

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="اكتب مصطلحًا للبحث عنه (مثل: تعلم الآلة)"
        className="w-full pl-4 pr-32 py-4 bg-slate-800 border-2 border-slate-700 rounded-full text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-lg"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !term.trim()}
        className="absolute inset-y-0 right-2 my-2 flex items-center justify-center gap-2 px-6 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold rounded-full hover:from-violet-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
      >
        <SearchIcon className="w-5 h-5" />
        <span>{isLoading ? 'جار البحث...' : 'اشرح'}</span>
      </button>
    </form>
  );
};
