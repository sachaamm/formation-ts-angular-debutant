import { JobEnum } from "./job.enum";
import { Worker } from "./worker.model";

export class Actor extends Worker {

    constructor(nom: string, prenom: string, age: number) {
        super(nom, prenom, age, JobEnum.Actor, 8000);
    }

    decrireSonMetier(): void {
        console.log("Joue dans des films.");
    }

}