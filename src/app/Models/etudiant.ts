export class Etudiant {
    idetudiant: number;
    nom: string;
    prenom: string;
    cin: number;
    ecole: string;
    datenaissance: Date;
    constructor(idetudiant: number, nom: string, prenom: string, cin: number, ecole: string, datenaissance: Date) {
      this.idetudiant = idetudiant;
      this.nom = nom;
      this.prenom = prenom;
      this.cin = cin;
      this.ecole = ecole;
      this.datenaissance = datenaissance;
    }
  }
  