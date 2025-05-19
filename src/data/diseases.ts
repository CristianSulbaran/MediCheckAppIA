// 50 enfermedades relevantes traducidas al español con sus síntomas asociados

interface Disease {
  name: string;          // Nombre de la enfermedad
  symptoms: string[];    // Lista de síntomas asociados
  description: string;   // Breve descripción de la enfermedad
  prevalenceWeight: number; // Peso de prevalencia (0-1)
}

export const diseases: Disease[] = [
  {
    name: "Gripe",
    symptoms: ["fiebre", "dolor de cabeza", "tos", "dolor de garganta", "congestión nasal", "fatiga", "dolor muscular", "escalofríos"],
    description: "Infección viral que afecta las vías respiratorias superiores.",
    prevalenceWeight: 0.9
  },
  {
    name: "COVID-19",
    symptoms: ["fiebre", "tos", "fatiga", "dificultad para respirar", "pérdida del gusto", "pérdida del olfato", "dolor muscular", "dolor de garganta", "congestión nasal", "dolor de cabeza"],
    description: "Enfermedad infecciosa causada por el coronavirus SARS-CoV-2.",
    prevalenceWeight: 0.85
  },
  {
    name: "Resfriado común",
    symptoms: ["congestión nasal", "estornudos", "dolor de garganta", "tos leve", "lagrimeo", "fatiga leve"],
    description: "Infección viral leve que afecta principalmente la nariz y la garganta.",
    prevalenceWeight: 0.95
  },
  {
    name: "Gastroenteritis",
    symptoms: ["náuseas", "vómitos", "diarrea", "dolor abdominal", "fiebre leve", "fatiga", "pérdida de apetito"],
    description: "Inflamación del estómago y los intestinos que causa vómitos y diarrea.",
    prevalenceWeight: 0.8
  },
  {
    name: "Migraña",
    symptoms: ["dolor de cabeza intenso", "sensibilidad a la luz", "sensibilidad al sonido", "náuseas", "vómitos", "visión borrosa", "aura visual"],
    description: "Tipo de cefalea intensa con síntomas neurológicos asociados.",
    prevalenceWeight: 0.7
  },
  {
    name: "Hipertensión",
    symptoms: ["dolor de cabeza", "visión borrosa", "fatiga", "dolor en el pecho", "dificultad para respirar", "sangrado nasal", "ansiedad"],
    description: "Presión arterial constantemente elevada en las arterias.",
    prevalenceWeight: 0.75
  },
  {
    name: "Diabetes",
    symptoms: ["sed excesiva", "micción frecuente", "fatiga extrema", "visión borrosa", "pérdida de peso", "hambre constante", "heridas de lenta cicatrización"],
    description: "Enfermedad crónica que afecta la forma en que el cuerpo procesa la glucosa.",
    prevalenceWeight: 0.7
  },
  {
    name: "Asma",
    symptoms: ["dificultad para respirar", "presión en el pecho", "tos", "sibilancias", "problemas para dormir por tos o sibilancias"],
    description: "Enfermedad crónica que inflama y estrecha las vías respiratorias.",
    prevalenceWeight: 0.65
  },
  {
    name: "Bronquitis",
    symptoms: ["tos con mucosidad", "fatiga", "dificultad para respirar", "fiebre leve", "presión en el pecho", "sibilancias"],
    description: "Inflamación de los bronquios, los conductos que llevan aire a los pulmones.",
    prevalenceWeight: 0.6
  },
  {
    name: "Sinusitis",
    symptoms: ["congestión nasal", "dolor facial", "presión en los senos paranasales", "secreción nasal espesa", "goteo posnasal", "reducción del sentido del olfato"],
    description: "Inflamación de los senos paranasales, generalmente debido a una infección.",
    prevalenceWeight: 0.65
  },
  {
    name: "Neumonía",
    symptoms: ["tos con mucosidad", "fiebre", "escalofríos", "dificultad para respirar", "dolor en el pecho al respirar o toser", "fatiga", "sudores"],
    description: "Infección que inflama los sacos aéreos en uno o ambos pulmones.",
    prevalenceWeight: 0.5
  },
  {
    name: "Artritis",
    symptoms: ["dolor articular", "rigidez articular", "hinchazón articular", "enrojecimiento articular", "disminución del rango de movimiento"],
    description: "Inflamación de una o más articulaciones causando dolor y rigidez.",
    prevalenceWeight: 0.7
  },
  {
    name: "Conjuntivitis",
    symptoms: ["enrojecimiento de los ojos", "picazón en los ojos", "sensación de arenilla", "secreción ocular", "lagrimeo", "visión borrosa"],
    description: "Inflamación de la conjuntiva, la membrana que recubre el párpado y cubre la parte blanca del ojo.",
    prevalenceWeight: 0.6
  },
  {
    name: "Otitis media",
    symptoms: ["dolor de oído", "dificultad para oír", "secreción del oído", "fiebre", "irritabilidad", "problemas de equilibrio", "dificultad para dormir"],
    description: "Infección o inflamación del oído medio.",
    prevalenceWeight: 0.5
  },
  {
    name: "Faringitis",
    symptoms: ["dolor de garganta", "dificultad para tragar", "inflamación de la garganta", "amígdalas inflamadas", "ganglios linfáticos inflamados", "fiebre", "tos"],
    description: "Inflamación de la faringe, la parte de la garganta entre las amígdalas y la laringe.",
    prevalenceWeight: 0.7
  },
  {
    name: "Infección urinaria",
    symptoms: ["ardor al orinar", "micción frecuente", "urgencia urinaria", "orina turbia", "orina con olor fuerte", "dolor pélvico", "presión en la parte baja del abdomen"],
    description: "Infección en cualquier parte del sistema urinario: riñones, uréteres, vejiga o uretra.",
    prevalenceWeight: 0.6
  },
  {
    name: "Dermatitis",
    symptoms: ["piel enrojecida", "picazón", "erupción cutánea", "piel escamosa", "piel seca", "ampollas", "sensibilidad de la piel"],
    description: "Inflamación de la piel caracterizada por piel enrojecida, hinchada y con picazón.",
    prevalenceWeight: 0.55
  },
  {
    name: "Alergia estacional",
    symptoms: ["estornudos", "congestión nasal", "picazón en los ojos", "ojos llorosos", "picazón en la nariz", "tos", "picazón en la garganta"],
    description: "Reacción del sistema inmune a alérgenos como polen, ácaros del polvo o caspa de mascotas.",
    prevalenceWeight: 0.8
  },
  {
    name: "Gastritis",
    symptoms: ["dolor abdominal", "náuseas", "vómitos", "sensación de saciedad", "indigestión", "pérdida de apetito", "eructos"],
    description: "Inflamación del revestimiento del estómago.",
    prevalenceWeight: 0.5
  },
  {
    name: "Anemia",
    symptoms: ["fatiga", "debilidad", "palidez", "dificultad para respirar", "mareos", "latidos cardíacos rápidos", "dolor de cabeza"],
    description: "Condición en la que hay una deficiencia de glóbulos rojos sanos para transportar oxígeno a los tejidos del cuerpo.",
    prevalenceWeight: 0.45
  },
  {
    name: "Hipotiroidismo",
    symptoms: ["fatiga", "sensibilidad al frío", "estreñimiento", "piel seca", "aumento de peso", "voz ronca", "dolor muscular", "depresión", "pérdida de memoria"],
    description: "Condición en la que la glándula tiroides no produce suficiente hormona tiroidea.",
    prevalenceWeight: 0.4
  },
  {
    name: "Hipertiroidismo",
    symptoms: ["pérdida de peso", "taquicardia", "aumento del apetito", "nerviosismo", "temblores", "sudoración", "intolerancia al calor", "fatiga", "insomnio"],
    description: "Condición en la que la glándula tiroides produce un exceso de hormona tiroidea.",
    prevalenceWeight: 0.3
  },
  {
    name: "Depresión",
    symptoms: ["tristeza persistente", "pérdida de interés", "cambios en el apetito", "cambios en el sueño", "fatiga", "sentimientos de culpa", "dificultad para concentrarse", "pensamientos suicidas"],
    description: "Trastorno del estado de ánimo que causa un sentimiento persistente de tristeza y pérdida de interés.",
    prevalenceWeight: 0.6
  },
  {
    name: "Ansiedad generalizada",
    symptoms: ["preocupación excesiva", "inquietud", "fatiga", "dificultad para concentrarse", "irritabilidad", "tensión muscular", "problemas de sueño"],
    description: "Trastorno caracterizado por ansiedad y preocupación crónicas y excesivas.",
    prevalenceWeight: 0.5
  },
  {
    name: "Cálculos renales",
    symptoms: ["dolor intenso en el costado y la espalda", "dolor que irradia a la parte baja del abdomen", "dolor al orinar", "orina rosada, roja o marrón", "orina turbia o maloliente", "náuseas", "vómitos"],
    description: "Masas sólidas formadas por sustancias minerales en los riñones.",
    prevalenceWeight: 0.35
  },
  {
    name: "Enfermedad por reflujo gastroesofágico",
    symptoms: ["acidez estomacal", "regurgitación de alimentos", "dificultad para tragar", "sensación de nudo en la garganta", "tos crónica", "ronquera", "dolor en el pecho"],
    description: "Condición en la que el ácido del estómago fluye de regreso hacia el esófago.",
    prevalenceWeight: 0.55
  },
  {
    name: "Úlcera péptica",
    symptoms: ["dolor abdominal", "sensación de saciedad", "náuseas", "vómitos", "pérdida de apetito", "pérdida de peso", "hinchazón", "acidez estomacal"],
    description: "Llaga abierta que se desarrolla en el revestimiento del estómago o la primera parte del intestino delgado.",
    prevalenceWeight: 0.3
  },
  {
    name: "Colesterol alto",
    symptoms: ["generalmente asintomático", "xantomas (depósitos grasos en la piel)", "dolor en el pecho", "dolor de cabeza", "entumecimiento o frío en las extremidades"],
    description: "Niveles elevados de colesterol en la sangre que aumentan el riesgo de enfermedades cardíacas.",
    prevalenceWeight: 0.6
  },
  {
    name: "Osteoporosis",
    symptoms: ["dolor de espalda", "pérdida de altura", "postura encorvada", "fracturas óseas con facilidad", "dolor óseo"],
    description: "Enfermedad que debilita los huesos, haciéndolos frágiles y más propensos a romperse.",
    prevalenceWeight: 0.4
  },
  {
    name: "Apnea del sueño",
    symptoms: ["ronquidos fuertes", "episodios de interrupción de la respiración durante el sueño", "despertar con la boca seca", "dolor de cabeza matutino", "insomnio", "somnolencia diurna excesiva", "irritabilidad"],
    description: "Trastorno del sueño potencialmente grave en el que la respiración se detiene y se reinicia repetidamente.",
    prevalenceWeight: 0.45
  },
  {
    name: "Fibromialgia",
    symptoms: ["dolor generalizado", "fatiga", "problemas cognitivos", "depresión", "dolores de cabeza", "dolor abdominal", "entumecimiento en manos y pies", "trastornos del sueño"],
    description: "Trastorno caracterizado por dolor musculoesquelético generalizado acompañado de fatiga y problemas de sueño, memoria y estado de ánimo.",
    prevalenceWeight: 0.35
  },
  {
    name: "Síndrome del intestino irritable",
    symptoms: ["dolor abdominal", "calambres", "hinchazón", "gases", "diarrea", "estreñimiento", "moco en las heces"],
    description: "Trastorno intestinal común que afecta el intestino grueso, causando calambres, dolor abdominal, hinchazón, gases, diarrea y estreñimiento.",
    prevalenceWeight: 0.5
  },
  {
    name: "Enfermedad de Crohn",
    symptoms: ["diarrea", "dolor abdominal", "sangre en las heces", "fatiga", "fiebre", "pérdida de apetito", "pérdida de peso", "dolores articulares"],
    description: "Tipo de enfermedad inflamatoria intestinal que puede afectar cualquier parte del tracto gastrointestinal.",
    prevalenceWeight: 0.25
  },
  {
    name: "Colitis ulcerosa",
    symptoms: ["diarrea con sangre", "dolor abdominal", "urgencia rectal", "pérdida de peso", "fatiga", "fiebre", "incapacidad para defecar a pesar de la urgencia"],
    description: "Enfermedad inflamatoria intestinal que causa inflamación y úlceras en el colon y el recto.",
    prevalenceWeight: 0.25
  },
  {
    name: "Endometriosis",
    symptoms: ["dolor pélvico", "períodos dolorosos", "dolor durante o después del sexo", "dolor al defecar o orinar", "sangrado excesivo", "infertilidad", "fatiga"],
    description: "Trastorno en el que el tejido que normalmente recubre el interior del útero crece fuera del útero.",
    prevalenceWeight: 0.3
  },
  {
    name: "Glaucoma",
    symptoms: ["visión borrosa", "halos alrededor de las luces", "pérdida de visión periférica", "dolor ocular", "enrojecimiento ocular", "náuseas", "vómitos"],
    description: "Grupo de enfermedades oculares que dañan el nervio óptico, a menudo causado por una presión anormalmente alta en el ojo.",
    prevalenceWeight: 0.25
  },
  {
    name: "Cataratas",
    symptoms: ["visión borrosa", "dificultad para ver de noche", "sensibilidad a la luz", "visión doble en un ojo", "colores desvanecidos", "halos alrededor de las luces"],
    description: "Opacidad del cristalino del ojo que conduce a una disminución de la visión.",
    prevalenceWeight: 0.4
  },
  {
    name: "Psoriasis",
    symptoms: ["parches rojos en la piel", "piel escamosa", "picazón", "piel seca", "uñas engrosadas", "dolor articular"],
    description: "Enfermedad de la piel que causa parches rojos, escamosos en la piel.",
    prevalenceWeight: 0.3
  },
  {
    name: "Eczema",
    symptoms: ["piel seca", "picazón", "parches rojos", "piel escamosa", "piel agrietada", "piel sensible", "ampollas"],
    description: "Condición inflamatoria de la piel caracterizada por grupos de vesículas (pequeñas ampollas).",
    prevalenceWeight: 0.35
  },
  {
    name: "Gota",
    symptoms: ["dolor articular intenso", "inflamación articular", "enrojecimiento articular", "calor en la articulación", "rigidez articular", "nódulos bajo la piel"],
    description: "Forma de artritis caracterizada por ataques repentinos e intensos de dolor, hinchazón, enrojecimiento y sensibilidad en las articulaciones.",
    prevalenceWeight: 0.25
  },
  {
    name: "Síndrome de fatiga crónica",
    symptoms: ["fatiga extrema", "pérdida de memoria", "dificultad para concentrarse", "dolor de garganta", "ganglios linfáticos inflamados", "dolores musculares", "dolores de cabeza", "sueño no reparador"],
    description: "Trastorno complejo caracterizado por fatiga extrema que no mejora con el descanso y empeora con la actividad física o mental.",
    prevalenceWeight: 0.2
  },
  {
    name: "Mononucleosis infecciosa",
    symptoms: ["fatiga", "dolor de garganta", "fiebre", "ganglios linfáticos inflamados", "dolor de cabeza", "erupción cutánea", "bazo agrandado", "hígado agrandado"],
    description: "Infección causada principalmente por el virus de Epstein-Barr que afecta a ciertas células del sistema inmunitario.",
    prevalenceWeight: 0.3
  },
  {
    name: "Enfermedad de Lyme",
    symptoms: ["erupción en forma de diana", "fiebre", "escalofríos", "fatiga", "dolores corporales", "dolor de cabeza", "rigidez en el cuello", "inflamación de las articulaciones"],
    description: "Enfermedad infecciosa transmitida por garrapatas causada por la bacteria Borrelia burgdorferi.",
    prevalenceWeight: 0.2
  },
  {
    name: "Hepatitis",
    symptoms: ["fatiga", "náuseas", "vómitos", "dolor abdominal", "pérdida de apetito", "ictericia", "orina oscura", "heces de color claro"],
    description: "Inflamación del hígado, más comúnmente causada por un virus.",
    prevalenceWeight: 0.3
  },
  {
    name: "Enfermedad celíaca",
    symptoms: ["diarrea", "fatiga", "pérdida de peso", "hinchazón", "anemia", "dolor óseo", "erupción cutánea", "úlceras bucales", "dolor de cabeza"],
    description: "Trastorno autoinmune en el que la ingestión de gluten provoca daño en el intestino delgado.",
    prevalenceWeight: 0.2
  },
  {
    name: "Hipoglucemia",
    symptoms: ["hambre", "sudoración", "temblores", "irritabilidad", "ansiedad", "mareos", "confusión", "palpitaciones", "entumecimiento en los labios o la lengua"],
    description: "Afección que ocurre cuando el nivel de azúcar en la sangre (glucosa) está por debajo de lo normal.",
    prevalenceWeight: 0.3
  },
  {
    name: "Enfermedad de Parkinson",
    symptoms: ["temblor", "rigidez muscular", "bradicinesia (movimientos lentos)", "problemas de equilibrio", "cambios en el habla", "cambios en la escritura", "pérdida del olfato"],
    description: "Trastorno del sistema nervioso que afecta el movimiento.",
    prevalenceWeight: 0.15
  },
  {
    name: "Esclerosis múltiple",
    symptoms: ["fatiga", "entumecimiento o debilidad en las extremidades", "visión borrosa", "hormigueo o dolor en partes del cuerpo", "problemas de coordinación", "mareos", "problemas de vejiga"],
    description: "Enfermedad potencialmente incapacitante del cerebro y la médula espinal (sistema nervioso central).",
    prevalenceWeight: 0.15
  },
  {
    name: "Tuberculosis",
    symptoms: ["tos persistente", "tos con sangre", "dolor en el pecho", "fatiga", "fiebre", "sudores nocturnos", "pérdida de peso", "pérdida de apetito"],
    description: "Enfermedad infecciosa que afecta principalmente a los pulmones, causada por Mycobacterium tuberculosis.",
    prevalenceWeight: 0.2
  },
  {
    name: "Enfermedad de Alzheimer",
    symptoms: ["pérdida de memoria", "dificultad para resolver problemas", "dificultad para realizar tareas familiares", "confusión con el tiempo o el lugar", "problemas con las palabras", "cambios de humor y personalidad"],
    description: "Trastorno neurológico progresivo que causa que el cerebro se encoja y las células cerebrales mueran.",
    prevalenceWeight: 0.15
  }
];