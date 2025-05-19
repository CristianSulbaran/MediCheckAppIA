/**
 * Generate AI-based treatment suggestions for a disease
 * This is a mock implementation - in a real application, this would connect to an API
 * like OpenAI to generate actual AI responses
 * 
 * @param diseaseName The name of the disease to generate treatments for
 * @param symptoms The symptoms reported by the user
 * @returns An array of treatment suggestions
 */
export async function generateAITreatment(diseaseName: string, symptoms: string[]): Promise<string[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Map of common treatments for each disease
  const treatmentDatabase: Record<string, string[]> = {
    'Gripe': [
      'Descansar y dormir lo suficiente para permitir que el cuerpo combata la infección',
      'Beber abundante líquido para mantenerse hidratado',
      'Tomar medicamentos de venta libre para reducir la fiebre y aliviar dolores',
      'Usar un humidificador para aliviar la congestión',
      'Considerar antivirales recetados si se detecta en las primeras 48 horas (consultar médico)'
    ],
    'Resfriado común': [
      'Descansar adecuadamente para acelerar la recuperación',
      'Mantenerse hidratado con agua, té caliente o caldos',
      'Usar solución salina nasal para aliviar la congestión',
      'Consumir miel para aliviar el dolor de garganta (no recomendado para niños menores de 1 año)',
      'Tomar medicamentos descongestionantes de venta libre si es necesario'
    ],
    'COVID-19': [
      'Aislarse para evitar la propagación a otras personas',
      'Descansar y mantenerse hidratado',
      'Tomar medicamentos para reducir la fiebre',
      'Monitorear los niveles de oxígeno con un oxímetro si está disponible',
      'Buscar atención médica inmediata si presenta dificultad para respirar o dolor persistente en el pecho'
    ],
    'Migraña': [
      'Descansar en una habitación oscura y tranquila',
      'Aplicar compresas frías o calientes en la cabeza según lo que proporcione más alivio',
      'Mantener un registro de los desencadenantes para evitarlos en el futuro',
      'Considerar medicamentos específicos para migraña recetados por un médico',
      'Practicar técnicas de relajación como meditación o respiración profunda'
    ],
    'Gastroenteritis': [
      'Beber líquidos en pequeñas cantidades frecuentemente para evitar la deshidratación',
      'Seguir una dieta blanda (BRAT: plátano, arroz, puré de manzana, tostadas)',
      'Evitar lácteos, cafeína, alcohol y alimentos grasos hasta recuperarse',
      'Reintroducir gradualmente alimentos sólidos cuando mejoren los síntomas',
      'Considerar probióticos para restaurar la flora intestinal'
    ],
    'Hipertensión': [
      'Reducir el consumo de sal a menos de 5g diarios',
      'Realizar actividad física regular, al menos 150 minutos semanales',
      'Mantener un peso saludable',
      'Limitar el consumo de alcohol',
      'Seguir el tratamiento médico prescrito con regularidad'
    ],
    'Diabetes': [
      'Monitorear regularmente los niveles de glucosa en sangre',
      'Seguir una dieta equilibrada baja en azúcares simples',
      'Realizar actividad física regular',
      'Tomar medicamentos según prescripción médica',
      'Realizar chequeos periódicos de ojos, riñones y pies'
    ],
    'Asma': [
      'Identificar y evitar los desencadenantes personales',
      'Usar inhaladores de rescate según las indicaciones',
      'Seguir el plan de tratamiento preventivo diario',
      'Mantener un ambiente limpio y libre de alérgenos',
      'Aprender técnicas de respiración para momentos de crisis'
    ]
  };
  
  // Default generic treatments for any disease not in our database
  const genericTreatments = [
    'Consultar con un médico para un diagnóstico preciso y plan de tratamiento personalizado',
    'Descansar adecuadamente para permitir que el cuerpo se recupere',
    'Mantenerse hidratado bebiendo suficiente agua',
    'Seguir una alimentación equilibrada y nutritiva',
    'Monitorear los síntomas y buscar atención médica si empeoran'
  ];
  
  // Find the closest disease name in our database
  const matchedDisease = Object.keys(treatmentDatabase).find(
    disease => disease.toLowerCase() === diseaseName.toLowerCase()
  ) || Object.keys(treatmentDatabase).find(
    disease => disease.toLowerCase().includes(diseaseName.toLowerCase()) || 
                diseaseName.toLowerCase().includes(disease.toLowerCase())
  );
  
  if (matchedDisease) {
    return treatmentDatabase[matchedDisease];
  }
  
  // If no specific treatments found, return generic advice
  return genericTreatments;
}