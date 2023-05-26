import { JobEnum } from "./job.enum";
import { Worker } from "./worker.model";

export class Policeman extends Worker {

    constructor(nom: string, prenom: string, age: number) {
        super(nom, prenom, age, JobEnum.Policeman, 2000);
    }

    decrireSonMetier(): void {
        console.log("Faire respecter l'ordre public");
    }

}