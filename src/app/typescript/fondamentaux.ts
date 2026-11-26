interface Profil {
  readonly id: number;
  nom: string;
}

export class Etudiant implements Profil {
  constructor(public readonly id: number, public nom: string, public moyenne: number) {}
}

export const promotion: string = 'Ingénierie informatique';
export const inscrits: boolean = true;
export const etudiants: Etudiant[] = [new Etudiant(1, 'Alice', 16), new Etudiant(2, 'Bob', 9)];
export const admis = etudiants.filter(etudiant => etudiant.moyenne >= 10);
export const noms = etudiants.map(etudiant => etudiant.nom);
export const totalNotes = etudiants.reduce((total, etudiant) => total + etudiant.moyenne, 0);
