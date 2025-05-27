
# MediCheck: Verificador de Síntomas con IA

#### Especificaciones generales del proyecto
Proyecto construido con **React (TypeScript)** y **Tailwind CSS**, desplegado en **Azure Static Web Apps**. Incluye un modelo tipo **Random Forest simulado** y una lógica para generar sugerencias mediante coincidencias de texto.



#  Archivos Principales

# 1. `src/App.tsx`

### Funcionalidad general `App.tsx`

 **Componente Principal**

`App.tsx` es el componente raíz de la aplicación React. Toda la estructura del sitio parte desde aquí. Al ser el punto de entrada, se encarga de cargar los demás componentes visuales y funcionales en pantalla.
-   **Función:** Componente principal que define la estructura general de la aplicacion.
-   **Contenido:**
    -   Contiene el Header (Encabezado) con logo de MediCheck.
    -   El baanner de advertencia especificando el uso académico.
    -   Descripción de funcionalidades.  
    -   Footer la sección inferior de la pagina con advertencias legales.
-   **Diseño:** Implementa el diseño Tailwind CSS responsive.
-   **Importancia:** Entrada principal de la aplicación.
------
# 2. `src/components/SymptomChecker.tsx`

### Funcionalidad general

  Componente central: `<SymptomChecker />` 
Que es el **núcleo funcional** de la aplicación **MediCheck**. Su propósito principal es permitir al usuario ingresar síntomas y que obtenga como resultado una predicción de las enfermedades posibles y sugerencias de tratamiento.

#### Autocompletado y Validación
-   Cuando el usuario escribe, el sistema busca coincidencias en `symptoms.ts`. Solo se permiten síntomas de la lista predefinida (`availableSymptoms`), lo que evita errores.

#### Agregar y Eliminar Síntomas
-   Al presionar Enter o hacer clic, el síntoma se agrega a `selectedSymptoms`. Los síntomas ya seleccionados se muestran como etiquetas interactivas (`SymptomTag`), que se pueden eliminar.

#### Predicción de Enfermedades
-   Cuando hay al menos un síntoma, el usuario puede hacer clic en un botón para generar resultados. Llama a la función `predictDiseases(symptoms)` desde `randomForest.ts`. Calcula probabilidades para cada enfermedad basada en coincidencias.
-   **Función:** Componente principal para ingresar síntomas.
    
-   **Características:**
    
    -   Estado de síntomas seleccionados.
        
    -   Autocompletado y validación.
        
    -   Predicción (`predictDiseases`) y sugerencias (`generateAITreatment`).
        
    -   Manejo de errores y carga.
   -----
# 3. `src/components/ResultsDisplay.tsx`

### **Funcionalidad General:**

Es el componente responsable de **mostrar visualmente** los resultados obtenidos después de que el usuario selecciona síntomas y se ejecuta la predicción. Actúa como una **pantalla de resultados médicos interactiva**.

-   **Función:** Mostrar predicciones y tratamientos.
-   **Visual:**
    
    -   Tarjetas expandibles.
        
    -   Colores por probabilidad:
        
        -   Rojo: ≥70%
            
        -   Amarillo: 40–69%
            
        -   Verde: <40%
            
    -   Tratamientos y descripciones.
    - ---
# 4. `src/components/SymptomTag.tsx`

    
### **Funcionalidad General:**

Es un **componente visual simple pero funcional**, que representa cada síntoma seleccionado por el usuario como una "etiqueta" (tag) interactiva.

####  **Características:**

-   Muestra el nombre del síntoma.
    
-   Tiene un botón para eliminarlo (una "x" o ícono similar).
    
-   Permite al usuario corregir o actualizar fácilmente su selección antes de procesar los resultados.
    

#### **Interactividad:**

-   Al hacer clic en la "x", el síntoma es eliminado del arreglo `selectedSymptoms`.
-   Esto desencadena un re-render que actualiza la interfaz inmediatamente.

####  **Objetivo:**

Dar al usuario el control visual de su entrada, mejorando la **usabilidad**, permitiendo eliminar errores o modificar síntomas fácilmente.
-   **Función:** Mostrar síntomas seleccionados como etiquetas.
    
-   **Interactividad:** Eliminar síntomas seleccionados.
----------

## Datos y Modelo (logica)

# 5. `src/data/diseases.ts`

### **Funcionalidad General:**

Este archivo actúa como una **base de datos estática** que contiene información sobre **50 enfermedades comunes**.

#### **Objetivo:**

Alimentar el modelo predictivo (`randomForest.ts`) con la información necesaria para comparar los síntomas del usuario con cada enfermedad.
-   **Contenido:** Dataset de 50 enfermedades.
    
-   **Estructura:**
```ts
{
  name: "Gripe",
  symptoms: ["fiebre", "dolor de cabeza"],
  description: "Infección viral...",
  prevalenceWeight: 0.9
}
```
----
# 6. `src/data/symptoms.ts`

### **Funcionalidad General:**

Archivo que contiene un **array plano con 100 síntomas comunes**, todos en español.

#### **Uso específico:**

-   Validación de entrada: los síntomas ingresados por el usuario deben existir en esta lista.
    
-   Autocompletado: se utiliza para mostrar sugerencias conforme el usuario escribe.
    
-   Consistencia: evita errores tipográficos o entradas arbitrarias.
    

#### **Objetivo:**

Garantizar que el sistema trabaje con un conjunto controlado de síntomas válidos y reconocibles por el modelo.

----------

##  Lógica de Predicción y AI

### 7. `src/lib/randomForest.ts`

### **Funcionalidad General:**

Este archivo contiene el núcleo del sistema de decisión. Simula el comportamiento de un algoritmo **Random Forest** a través de **reglas heurísticas**.
**Lógica de predicción:**
-   **Modelo simulado** -   Implementa el algoritmo de clasificación (no entrenado).
### **Funciones principales:**

#### `predictDiseases(symptoms: string[]): Prediction[]`

-   Recibe los síntomas del usuario.
    
-   Itera por todas las enfermedades del archivo `diseases.ts`.
    
-   Para cada enfermedad:
    
    1.  Calcula cuántos síntomas coinciden.
        
    2.  Estima una **probabilidad** basada en:
        
        -   % de síntomas del usuario que coinciden con la enfermedad.
            
        -   % de síntomas de la enfermedad cubiertos por el usuario.
            
        -   Prevalencia de la enfermedad.
```ts
let probabilityScore = (
  (diseaseSymptomCoverage * 0.6) +
  (userSymptomCoverage * 0.3) +
  (disease.prevalenceWeight * 0.1)
) * 100;
```
#### `trainModel()`

-   Simula un entrenamiento del modelo.
    
-   Solo inicializa datos; no hay aprendizaje real.
    

#### **Objetivo:**

Tomar los síntomas y entregar una lista ordenada de predicciones médicas con su respectiva probabilidad.

**a. Coincidencia de síntomas:**

```ts
const matchingSymptoms = disease.symptoms.filter(diseaseSymptom =>
  symptoms.some(userSymptom =>
    diseaseSymptom.toLowerCase().includes(userSymptom.toLowerCase()) ||
    userSymptom.toLowerCase().includes(diseaseSymptom.toLowerCase())
  )
);

```

**b. Probabilidad:**

```ts
const diseaseSymptomCoverage = matchingSymptoms.length / disease.symptoms.length;
const userSymptomCoverage = matchingSymptoms.length / symptoms.length;

let probabilityScore = (
  (diseaseSymptomCoverage * 0.6) +
  (userSymptomCoverage * 0.3) +
  (disease.prevalenceWeight * 0.1)
) * 100;

```
----

# 8. `src/lib/aiSuggestions.ts`

### **Funcionalidad General:**

Este archivo contiene la lógica para generar **tratamientos sugeridos por IA** de acuerdo con la enfermedad detectada. Aunque no utiliza un modelo de lenguaje (como ChatGPT), funciona como un **sistema experto basado en coincidencias de texto**.

### IMPORTANTE: 
Este archivo es nuestra **base de datos estática interna** en formato JSON que asocia enfermedades con tratamientos recomendados 
-   **Ejemplo:**
    Lógica para matching de enfermedades

```ts
const treatmentDatabase: Record<string, string[]> = {
  "Gripe": ["Descanso", "Líquidos", "Analgésicos"],
  "Asma": ["Inhalador", "Evitar alérgenos", "Ejercicio controlado"],
  ...
};


```

### Función principal: 
`generateAITreatment(diseaseName: string): string[]`

#### ¿Qué hace?

1.  Recibe el **nombre de una enfermedad** (string).
    
2.  **Busca una coincidencia exacta** en la base de datos.
    
3.  Si encuentra coincidencia, retorna un array de tratamientos.
    
4.  Si no encuentra, devuelve un mensaje genérico o vacío.

```ts
const suggestions = generateAITreatment("Gripe");
// ["Descanso", "Líquidos", "Analgésicos"]

```
### Para tener en cuenta:

-   **No es IA generativa real.** No se conecta a OpenAI u otro proveedor.
    
-   Es **determinístico**, funciona solo con coincidencias exactas.
    
-   Aun así, es útil para mostrar cómo un sistema de IA podría proporcionar tratamientos a partir de una predicción médica.

#### Objetivo:

Complementar el resultado del análisis médico con recomendaciones prácticas y entendibles para el usuario. Simula un razonamiento basado en conocimiento médico básico, ideal para entornos educativos.

----
# TRABAJO FUNCIONAL DEL SISTEMA MEDICHECK

### 1. `symptoms.ts`

-   Se carga automáticamente al iniciar.
    
-   Contiene todos los **síntomas válidos**.
    
-   Se usa para:
    
    -   Validar la entrada del usuario.
        
    -   Proveer autocompletado.
        

----------

###  2. `SymptomTag.tsx`

-   Se activa al **agregar síntomas**.
    
-   Muestra síntomas seleccionados como etiquetas.
    
-   Permite al usuario **eliminarlos fácilmente**.
    

----------

###  3. `diseases.ts`

-   Se accede cuando se ejecuta la predicción.
    
-   Contiene:
    
    -   Enfermedades.
        
    -   Síntomas asociados.
        
    -   Descripción.
        
    -   Prevalencia.
        
-   Se usa como **base de comparación** para el modelo.
    

----------

###  4. `randomForest.ts`

-   Recibe los síntomas del usuario.
    
-   Compara contra `diseases.ts`.
    
-   Calcula **probabilidad de cada enfermedad**.
    
-   Devuelve un array de objetos tipo `Prediction`.
    

----------

### 5. `aiSuggestions.ts`

-   Recibe el nombre de la enfermedad más probable.
    
-   Busca tratamientos relacionados.
    
-   Devuelve un array de sugerencias prácticas.
    

----------

###  6. `ResultsDisplay.tsx`

-   Toma el array de predicciones y sugerencias de tratamientos.
    
-   Muestra:
    
    -   Enfermedad.
        
    -   Descripción.
        
    -   Probabilidad con color.
        
    -   Tratamientos sugeridos (colapsables).
        
-   Brinda al usuario **una visualización clara** y completa.
- --

##  Flujo de Datos (Visual)

[ Usuario selecciona síntomas ]
                        ↓
 [ Validación con symptoms.ts ]
                        ↓
 [ Visualización en SymptomTag.tsx ]
                        ↓
 [ Cálculo de predicciones en randomForest.ts ]
                             ↘ utiliza diseases.ts
                         ↓
 [ Tratamientos generados en aiSuggestions.ts ]
                        ↓
 [ Visualización final en ResultsDisplay.tsx ]

----------
# Proceso de Clasificación y Entrenamiento

### 1. Entrenamiento del Modelo

El modelo utiliza un enfoque basado en reglas que simula un Random Forest:

1.  **Inicialización**

-   Carga el dataset de enfermedades
-   Establece pesos de prevalencia
-   Prepara la base de conocimiento

2.  **Proceso de "Entrenamiento"**

-   No hay entrenamiento real ya que es un modelo basado en reglas
-   Se utiliza la función  `trainModel()`  para simular el proceso
-   Los pesos y reglas están predefinidos en el dataset.
- --

### 2. Clasificación de Enfermedades

El proceso de clasificación sigue estos pasos:
1.  **Análisis de Síntomas**
```ts
const matchingSymptoms = disease.symptoms.filter(diseaseSymptom => 
  symptoms.some(userSymptom => 
    diseaseSymptom.toLowerCase().includes(userSymptom.toLowerCase()) || 
    userSymptom.toLowerCase().includes(diseaseSymptom.toLowerCase())
  )
);
```
2.  **Cálculo de Probabilidad**
```ts
const diseaseSymptomCoverage = matchingSymptoms.length / disease.symptoms.length;
const userSymptomCoverage = matchingSymptoms.length / symptoms.length;

let probabilityScore = (
  (diseaseSymptomCoverage * 0.6) + 
  (userSymptomCoverage * 0.3) + 
  (disease.prevalenceWeight * 0.1)
) * 100;
```

---
### 3. Representación de Atributos
Los atributos del dataset se representan así:
1. Enfermedades 
```ts
interface Disease {
  name: string;          // Nombre de la enfermedad
  symptoms: string[];    // Lista de síntomas asociados
  description: string;   // Descripción
  prevalenceWeight: number; // Peso de prevalencia
}
```
2. predicciones 
```ts 
interface Prediction {
  name: string;
  probability: number;
  description: string;
  treatments: string[];
}

```
### Flujo de Datos

1.  El usuario ingresa síntomas
2.  El sistema valida contra  `availableSymptoms`
3.  Se ejecuta  `predictDiseases()`
4.  Se calculan probabilidades
5.  Se generan sugerencias con  `generateAITreatment()`
6.  Se muestran resultados en  `ResultsDisplay`

Este sistema, demuestra los principios básicos de un sistema de diagnóstico médico, con énfasis en la usabilidad y la presentación clara de información médica relevante.

---
# Tematica de las diapositivas 

##  Experiencia de Usuario

-   Interfaz limpia (Tailwind CSS).
    
-   Interactividad con tags.
    
-   Códigos de colores para probabilidades.
    
-   Advertencias médicas visibles.
    
----------

##  Despliegue en Azure

-   Preparado para CI/CD con Azure Static Web Apps.
    
-   Compilación con `npm run build`.
    
-   Conectado a GitHub para despliegue automático.


# Resumen

## Consideraciones Finales

-   Uso académico, no clínico.
    
-   Simulación de Random Forest con lógica heurística.
    
-   IA basada en coincidencias de texto.
    
##### Significado de logica heuristica:
- Una heurística o técnica heurística (solución de problemas, atajo mental, regla general) es cualquier enfoque para la resolución de problemas que emplea un método pragmático que no está totalmente optimizado, perfeccionado o racionalizado, pero que, sin embargo, es "suficientemente bueno" como aproximación o sustitución de atributos.

