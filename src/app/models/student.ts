export interface Student {
  id: number;
  nom: string;
  prenom: string;
  moyenne: number;
}

export const STUDENTS: Student[] = [
  { id: 1, nom: 'Durand', prenom: 'Alice', moyenne: 16.5 },
  { id: 2, nom: 'Lefebvre', prenom: 'Bob', moyenne: 14.2 },
  { id: 3, nom: 'Moreau', prenom: 'Chloe', moyenne: 18.9 },
  { id: 4, nom: 'Petit', prenom: 'David', moyenne: 12.1 },
];
