import { JobEnum } from "./job.enum";
import { Person } from "./person.model";

export abstract class Worker extends Person {

    job: JobEnum
    salary?: number

    constructor(nom: string, prenom: string, age: number, job: JobEnum, salary: number) {
        super(nom, prenom, age);
        this.job = job
        this.salary = salary
    }

    abstract decrireSonMetier(): void;

}