import { diseases } from '../data/diseases';

// Interface for disease prediction results
interface DiseasePrediction {
  name: string;
  probability: number;
  description: string;
}

/**
 * Simplified implementation of Random Forest algorithm for disease prediction
 * In a real-world scenario, this would be a proper ML model implementation
 * or potentially using TensorFlow.js to run an actual model in the browser
 */
export async function predictDiseases(symptoms: string[]): Promise<DiseasePrediction[]> {
  // Simulating model processing time
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const predictions: DiseasePrediction[] = [];
  
  // For each disease, calculate how many symptoms match
  diseases.forEach(disease => {
    // Count matching symptoms between user input and disease symptoms
    const matchingSymptoms = disease.symptoms.filter(diseaseSymptom => 
      symptoms.some(userSymptom => 
        diseaseSymptom.toLowerCase().includes(userSymptom.toLowerCase()) || 
        userSymptom.toLowerCase().includes(diseaseSymptom.toLowerCase())
      )
    );
    
    if (matchingSymptoms.length > 0) {
      // Calculate probability score based on:
      // 1. What percentage of the disease symptoms are matched
      // 2. What percentage of the user symptoms are matched
      // 3. The prevalence weight of the disease
      
      const diseaseSymptomCoverage = matchingSymptoms.length / disease.symptoms.length;
      const userSymptomCoverage = matchingSymptoms.length / symptoms.length;
      
      // Combined score formula (weighted average)
      // We weight disease coverage higher because it's more important that we match a high percentage
      // of a disease's symptoms than that we explain all user symptoms with one disease
      let probabilityScore = (
        (diseaseSymptomCoverage * 0.6) + 
        (userSymptomCoverage * 0.3) + 
        (disease.prevalenceWeight * 0.1)
      ) * 100;
      
      // Add random noise to simulate the variability of a real Random Forest model
      // This is just for demonstration purposes
      const noise = Math.random() * 10 - 5; // -5 to +5
      probabilityScore = Math.max(0, Math.min(100, probabilityScore + noise));
      
      // Round to integer
      probabilityScore = Math.round(probabilityScore);
      
      // Only include diseases with a minimum probability
      if (probabilityScore > 15) {
        predictions.push({
          name: disease.name,
          probability: probabilityScore,
          description: disease.description
        });
      }
    }
  });
  
  // Sort results by probability (descending)
  const sortedPredictions = predictions.sort((a, b) => b.probability - a.probability);
  
  // Return top 5 results max
  return sortedPredictions.slice(0, 5);
}

// Function to train the model (simulation)
export async function trainModel(): Promise<void> {
  console.log('Training model...');
  // In a real implementation, this would train the actual model
  // For this demo, there's nothing to train since we're using a rule-based approach
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log('Model training complete');
}