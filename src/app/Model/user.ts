import {etudiant} from '../Model/etudiant';
export class user{
    id!:number;
    email!: string;
    password!: string;
    userrole!: string;
    access!: boolean;
    etudiant!:etudiant;
}