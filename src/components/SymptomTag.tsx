import React from 'react';
import { X } from 'lucide-react';

interface SymptomTagProps {
  symptom: string;
  onRemove: () => void;
}

const SymptomTag: React.FC<SymptomTagProps> = ({ symptom, onRemove }) => {
  return (
    <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-full flex items-center group transition-all">
      <span>{symptom}</span>
      <button 
        onClick={onRemove}
        className="ml-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center transition-colors"
        aria-label="Eliminar síntoma"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default SymptomTag;