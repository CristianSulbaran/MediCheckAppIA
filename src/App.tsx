import React from 'react';
import { Activity } from 'lucide-react';
import SymptomChecker from './components/SymptomChecker';

function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-3">
            <Activity size={36} className="mr-3 animate-pulse" />
            <h1 className="text-3xl font-bold">MediCheck</h1>
          </div>
          <p className="text-center text-lg opacity-90">Verificación inteligente de síntomas</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Warning Banner */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-md shadow-sm">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Aviso Importante:</strong> Esta aplicación es un proyecto académico y NO sustituye la consulta con un profesional médico. Ante cualquier duda o síntoma preocupante, consulte con su médico.
              </p>
            </div>
          </div>
        </div>

        {/* Symptom Checker Component */}
        <SymptomChecker />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2">
            <div className="text-blue-500 text-4xl mb-4 flex justify-center">🔍</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 text-center">Búsqueda inteligente</h3>
            <p className="text-gray-600 text-center">Nuestro sistema utiliza tecnología avanzada para identificar síntomas y relacionarlos con posibles condiciones médicas.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2">
            <div className="text-blue-500 text-4xl mb-4 flex justify-center">📊</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 text-center">Algoritmo Random Forest</h3>
            <p className="text-gray-600 text-center">Utilizamos un modelo de aprendizaje automático Random Forest para analizar patrones y proporcionar resultados más precisos.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2">
            <div className="text-blue-500 text-4xl mb-4 flex justify-center">💡</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 text-center">Sugerencias de IA</h3>
            <p className="text-gray-600 text-center">Recibe recomendaciones y posibles tratamientos generados por inteligencia artificial basados en los resultados del análisis.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">MediCheck © 2025 - Proyecto Académico de Verificación de Síntomas</p>
          <p className="text-gray-500 text-sm mt-2 italic">Esta aplicación es demostrativa y no sustituye la consulta médica profesional.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;