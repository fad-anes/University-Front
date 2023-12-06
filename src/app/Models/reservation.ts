export class Reservation{
    idreservation:string;
    estvalide:boolean;
    anneeuniversitaire:Date;
    constructor(idreservation:string,estvalide:boolean,anneeuniversitaire:Date){
        this.anneeuniversitaire=anneeuniversitaire;
        this.estvalide=estvalide;
        this.idreservation=idreservation;
    }
}