import React, { useState, useEffect } from 'react';
import { Search, X, AlertTriangle } from 'lucide-react';
import SymptomTag from './SymptomTag';
import ResultsDisplay from './ResultsDisplay';
import { predictDiseases } from '../lib/randomForest';
import { generateAITreatment } from '../lib/aiSuggestions';
import { availableSymptoms } from '../data/symptoms';

interface Prediction {
  name: string;
  probability: number;
  description: string;
  treatments: string[];
}

const SymptomChecker: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [filteredSymptoms, setFilteredSymptoms] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modelLoaded, setModelLoaded] = useState<boolean>(false);

  // Initialize model on mount
  useEffect(() => {
    const loadModel = async () => {
      try {
        // This would typically load a pre-trained model
        // For now we'll just set a timeout to simulate loading
        setTimeout(() => {
          setModelLoaded(true);
        }, 1000);
      } catch (error) {
        console.error("Error loading model:", error);
      }
    };

    loadModel();
  }, []);

  // Filter symptoms based on input
  useEffect(() => {
    if (inputValue.trim() === '') {
      setFilteredSymptoms([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = availableSymptoms.filter(
      symptom => 
        symptom.toLowerCase().includes(inputValue.toLowerCase()) && 
        !selectedSymptoms.includes(symptom)
    ).slice(0, 5);
    
    setFilteredSymptoms(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [inputValue, selectedSymptoms]);

  const handleAddSymptom = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
      setInputValue('');
      setShowSuggestions(false);
    }
  };

  const handleRemoveSymptom = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
  };

  const handleCheckSymptoms = async () => {
    if (selectedSymptoms.length === 0) {
      alert('Por favor, agrega al menos un síntoma para realizar la verificación.');
      return;
    }

    setIsLoading(true);
    
    try {
      // Get disease predictions from Random Forest
      const diseaseResults = await predictDiseases(selectedSymptoms);
      
      // For each disease, generate AI treatment suggestions
      const resultsWithTreatments = await Promise.all(
        diseaseResults.map(async (result) => {
          const treatments = await generateAITreatment(result.name, selectedSymptoms);
          return {
            ...result,
            treatments
          };
        })
      );
      
      setPredictions(resultsWithTreatments);
      setShowResults(true);
    } catch (error) {
      console.error('Error analyzing symptoms:', error);
      alert('Ha ocurrido un error al analizar los síntomas. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      if (filteredSymptoms.length > 0) {
        handleAddSymptom(filteredSymptoms[0]);
      } else if (availableSymptoms.includes(inputValue.trim())) {
        handleAddSymptom(inputValue.trim());
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Model loading status */}
      {!modelLoaded && (
        <div className="mb-6 bg-blue-50 p-4 rounded-lg flex items-center">
          <div className="animate-spin mr-3 h-5 w-5 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <span className="text-blue-800">Cargando el modelo de predicción...</span>
        </div>
      )}

      {/* Symptom Input Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Verificar síntomas</h2>
        
        <div className="relative mb-4">
          <div className="flex">
            <div className="relative flex-grow">
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Introduce un síntoma (ej: fiebre, dolor de cabeza...)"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={!modelLoaded}
              />
              {showSuggestions && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                  {filteredSymptoms.map((symptom, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
                      onClick={() => handleAddSymptom(symptom)}
                    >
                      {symptom}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg flex items-center transition-colors"
              onClick={() => {
                if (inputValue.trim() !== '') {
                  // If input matches an available symptom
                  const matchedSymptom = availableSymptoms.find(
                    s => s.toLowerCase() === inputValue.toLowerCase()
                  );
                  
                  if (matchedSymptom) {
                    handleAddSymptom(matchedSymptom);
                  } else if (filteredSymptoms.length > 0) {
                    handleAddSymptom(filteredSymptoms[0]);
                  } else {
                    alert('Por favor, selecciona un síntoma válido de la lista.');
                  }
                }
              }}
              disabled={!modelLoaded}
            >
              <Search size={20} className="mr-2" />
              Agregar
            </button>
          </div>
        </div>

        {/* Selected Symptoms */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map((symptom, index) => (
              <SymptomTag 
                key={index} 
                symptom={symptom} 
                onRemove={() => handleRemoveSymptom(symptom)} 
              />
            ))}
            {selectedSymptoms.length === 0 && (
              <div className="text-gray-500 italic">
                No hay síntomas seleccionados. Agrega al menos uno para continuar.
              </div>
            )}
          </div>
        </div>

        {/* Check Button */}
        <button
          className={`w-full py-3 px-4 rounded-lg flex items-center justify-center transition-colors ${
            isLoading || !modelLoaded
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          onClick={handleCheckSymptoms}
          disabled={isLoading || selectedSymptoms.length === 0 || !modelLoaded}
        >
          {isLoading ? (
            <>
              <div className="animate-spin mr-3 h-5 w-5 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              Analizando síntomas...
            </>
          ) : (
            'Verificar síntomas'
          )}
        </button>
      </div>

      {/* Results Section */}
      {showResults && (
        <ResultsDisplay predictions={predictions} selectedSymptoms={selectedSymptoms} />
      )}
    </div>
  );
};

export default SymptomChecker;