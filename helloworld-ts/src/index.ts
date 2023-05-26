import { maFonction } from "./fonctions/maFonction";
import { Actor } from "./model/actor.model";
import { Box } from "./model/box.model";
import { JobEnum } from "./model/job.enum";

import { Person } from "./model/person.model";
import { Policeman } from "./model/policeman.model";
import { Worker } from "./model/worker.model";

const message: string = 'Hello, World!';
console.log(message);

maFonction('World');

const travailleurs: Worker[] = [
    new Policeman('Dupont', 'Jean', 37),
    new Actor('X', 'D', 44)
];

travailleurs.forEach(t => {
    console.log(t, ' me parle de son travail ');
    t.decrireSonMetier()
});

const personnesMajeures: Person[] = travailleurs.filter(p => p.age >= 18);

const nbMineurs: number = travailleurs.filter(p => p.age < 18).length;

console.log('Il y a ' + nbMineurs + ' personnes mineures ');

function afficherPersonnesMajeures(lesPersonnes: Person[]): void {
    lesPersonnes.filter(p => p.age >= 18).forEach(p => {
        console.log(`Vous etes ${p.nom} ${p.prenom}, Vous avez ${p.age} ans`);
    });
}

afficherPersonnesMajeures(travailleurs);

// != == !== ===
// 1 == "1" 
const calculSalaireMoyen = (personnes: Worker[]) => {

    let sum = 0;

    // personnes.forEach(p => {
    //     sum += p.salary;
    // })

    sum = personnes.reduce((partialSum, a) => partialSum + a.salary, 0);

    console.log("Salaire moyen : " + sum + " " + sum / personnes.length);
}

calculSalaireMoyen(travailleurs);

function compareNumbers(a: number, b: number) {
    return a - b;
}

function triParSalaire(a: Worker, b: Worker) {
    return a.salary - b.salary;
}

const numberArray = [40, 1, 5, 200];
numberArray.sort(compareNumbers);

travailleurs.sort(triParSalaire);

console.log(travailleurs)

// GESTION DE L'ASYNCHRONE EN JS

// 1. Les callbacks
function monPremierCallback(cb: (nom: string) => void) {
    const nom = "Toto"
    cb(nom);
}

function uneFonctionPasseEnParametre(nom: string) {
    console.log("Bonjour " + nom);
}



console.log('Hello world');

monPremierCallback(uneFonctionPasseEnParametre);
execution(uneFonctionPasseEnParametre);

function execution(cb: (nom: string) => void) {
    // Le corps de la fonction est executee apres 200 ms
    setTimeout(() => {
        cb('yyy');
        console.log('Apres un delai dattente de 200ms');
    }, 200);
}



// => La limite des callbacks : ils s'enchainent et peuvent creer du code difficilement visible

// 2. Les Promesses ( Promise )
const maPromesse = new Promise((resolve, reject) => {

    reject("Erreur inconnue");
    // const appelHttp = {}; // On appelle le webservice ( back end )

    // const statusCode = 201; // REST : Resource repondue avec succes

    // const operationReussie = statusCode !== 201;

    // if (operationReussie) {
    //     // Succes : on execute le resolve
    //     // Resolution de la promesse : tout s'est bien passe
    //     resolve('777');
    // } else {
    //     // Erreur : on execute le reject
    //     reject("Erreur inconnue");
    // }
})
    .then(() => {

    })
    .catch(() => {
        // console.log('err');
    });

// maPromesse
//     .then((res: number) => {
//         console.log('succes ', res);
//     })
//     .catch((err: any) => {
//         console.log('il y a eu une erreur ', err);
//     });

// Un retour de serveur, soit le serveur il me renvoie un statut ok et je resolve, soit c'est pas le cas et je reject
// Promise.reject(maPromesse);  // Je resouds ma promesse


const myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML API.
    setTimeout(() => {

        // const status = response.statusCode;

        resolve("Success!"); // Yay! Everything went well!
    }, 250);
});

myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log(`Yay! ${successMessage}`);
}).catch(() => {
    console.log('err')
});



const policier = new Policeman("Doe", "Stuart", 55)

// Utilisation de la classe générique
const policeBox = new Box<Policeman>(policier);
policeBox.methodeGenerique<Policeman>(policier);
