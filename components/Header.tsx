
import React from 'react';

const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C9.43 2 7.13 3.33 5.86 5.31C4.5 5.31 3.25 6.33 3.03 7.73C2.86 8.84 3.27 9.89 4 10.63V11C4 12.1 4.9 13 6 13H7.09C7.03 13.33 7 13.66 7 14C7 15.66 8.34 17 10 17C10.69 17 11.33 16.79 11.87 16.43C12.43 17.43 13.63 18.13 15 18.23V19C15 20.1 14.1 21 13 21H11V22H13C14.66 22 16 20.66 16 19V18.17C18.89 17.43 21 14.96 21 12C21 11.2 20.84 10.45 20.57 9.77C21.43 9.32 22 8.44 22 7.5C22 6.12 20.88 5 19.5 5C19.5 3.34 18.16 2 16.5 2C15.46 2 14.53 2.54 13.92 3.34C13.33 2.53 12.7 2 12 2M12 4C12.19 4 12.37 4.06 12.53 4.16C12.33 4.67 12.13 5.3 12.03 6H9.97C9.87 5.3 9.67 4.67 9.47 4.16C9.63 4.06 9.81 4 10 4C10.7 4 11.33 4.29 11.75 4.75C11.88 4.54 12 4.28 12 4M16.5 4C17.05 4 17.5 4.45 17.5 5H15.5C15.5 4.45 15.95 4 16.5 4M6 7H8V11H6V7M19.5 7C19.78 7 20 7.22 20 7.5C20 7.78 19.78 8 19.5 8C19.22 8 19 7.78 19 7.5C19 7.22 19.22 7 19.5 7M9 7H15V9H9V7M16 11V13H18V11H16M10 11H14V13H10V11M9 13H8V15H10C9.45 15 9 14.55 9 14V13Z" />
    </svg>
);

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/70 backdrop-blur-sm py-4 border-b border-slate-700/50 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
            <BrainIcon className="w-10 h-10 text-cyan-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            فك رموز الذكاء الاصطناعي
            </h1>
        </div>
        <p className="text-center mt-2 text-slate-400 text-sm md:text-base">
        بوابتك المبسطة لفهم أعقد مفاهيم الذكاء الاصطناعي
        </p>
      </div>
    </header>
  );
};
