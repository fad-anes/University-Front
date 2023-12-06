import {etudiant} from '../Model/etudiant';
import {university} from '../Model/university';
export class user{
    id!:number;
    email!: string;
    password!: string;
    userrole!: string;
    access!: boolean;
    etudiant!:etudiant;
    university!:university;
}