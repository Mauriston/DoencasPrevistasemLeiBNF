// Ficheiro: types.ts

export interface Diagnosis {
  name: string;
  criteria: string[];
}

export interface Disease {
  id: string;
  name: string;
  definition: string;
  documents: string[];
  diagnoses: Diagnosis[];
}
