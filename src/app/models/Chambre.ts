import { TypeChambre } from "./TypeChambre";

export class Chambre {
    idchambre !: number;
    numeroChambre !: number;
    typec !: TypeChambre;
    affectedBloc?: string;
}