import { Worker } from "./worker.model";

export class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        return this.item;
    }

    // Afficher salaire de Type U ou U etend la classe Worker,
    // Optionnel : et on a une description du metier (on appelle la methode abstraite  decrireSonMetier de Worker )
    methodeGenerique<U extends Worker>(u: U) {
        console.log('Son nom ', u.nom, ' salaire ' + u.salary);
        console.log('Son metier c\'est : ');
        u.decrireSonMetier();
    }


}