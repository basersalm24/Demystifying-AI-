
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} فك رموز الذكاء الاصطناعي. تم إنشاؤه بواسطة Gemini.</p>
      </div>
    </footer>
  );
};
