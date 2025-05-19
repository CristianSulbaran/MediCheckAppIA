import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

interface Prediction {
  name: string;
  probability: number;
  description: string;
  treatments: string[];
}

interface ResultsDisplayProps {
  predictions: Prediction[];
  selectedSymptoms: string[];
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ predictions, selectedSymptoms }) => {
  const [expandedDisease, setExpandedDisease] = useState<string | null>(null);

  const toggleExpand = (diseaseName: string) => {
    if (expandedDisease === diseaseName) {
      setExpandedDisease(null);
    } else {
      setExpandedDisease(diseaseName);
    }
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 70) return { bg: 'bg-red-100', text: 'text-red-700' };
    if (probability >= 40) return { bg: 'bg-yellow-100', text: 'text-yellow-700' };
    return { bg: 'bg-green-100', text: 'text-green-700' };
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-blue-800 mb-6">Resultados del análisis</h2>
      
      {/* Showing analyzed symptoms */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Síntomas analizados:</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedSymptoms.map((symptom, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {symptom}
            </span>
          ))}
        </div>
      </div>

      {predictions.length === 0 ? (
        <div className="p-4 rounded-lg bg-gray-50 flex items-start mb-6">
          <AlertTriangle size={24} className="text-yellow-500 mr-3 flex-shrink-0 mt-1" />
          <div>
            <p className="text-gray-700 mb-2">
              No se encontraron condiciones médicas que coincidan significativamente con los síntomas proporcionados.
            </p>
            <p className="text-gray-600 text-sm">
              Si los síntomas persisten, te recomendamos consultar con un profesional médico.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {predictions.map((prediction, index) => {
              const colorScheme = getProbabilityColor(prediction.probability);
              const isExpanded = expandedDisease === prediction.name;
              
              return (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all">
                  <div 
                    className="flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleExpand(prediction.name)}
                  >
                    <div className={`flex-shrink-0 w-16 h-16 ${colorScheme.bg} ${colorScheme.text} rounded-full flex items-center justify-center font-bold text-xl mr-4`}>
                      {prediction.probability}%
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg">{prediction.name}</h3>
                      <p className="text-gray-600 text-sm">{prediction.description}</p>
                    </div>
                    <div className="flex-shrink-0 ml-2">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <h4 className="font-medium text-gray-800 mb-2">Posibles tratamientos y recomendaciones:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {prediction.treatments.map((treatment, idx) => (
                          <li key={idx}>{treatment}</li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-500 italic">
                          <AlertTriangle size={16} className="inline mr-1 text-yellow-500" />
                          Estas sugerencias son generadas por IA y no sustituyen la consulta profesional.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
            <div className="flex">
              <AlertTriangle size={24} className="text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="text-blue-800 font-medium mb-1">Recordatorio importante</p>
                <p className="text-blue-700 text-sm">
                  Este análisis es solo una referencia educativa. La precisión puede variar y no sustituye una valoración médica profesional.
                  Si experimentas síntomas graves o persistentes, busca atención médica inmediata.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultsDisplay;