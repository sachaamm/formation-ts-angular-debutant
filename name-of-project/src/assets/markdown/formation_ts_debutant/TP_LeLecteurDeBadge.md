## TP: Le lecteur de badges

Description:
Dans ce TP, vous allez créer un programme en TypeScript qui permettra de lire les informations d'une personne. Vous utiliserez une fonction pour recevoir un paramètre de type `Person` contenant les propriétés `name` (string) et `age` (number). Le programme affichera ensuite l'identité de chaque personne dans le tableau en utilisant un `console.log()`.

Instructions:

1. Dans le fichier `index.ts`, créez une interface `Person` qui définit les propriétés `name` de type `string` et `age` de type `number`. Cela permettra de définir la structure des objets `Person` dans votre programme.

2. Déclarez une fonction `displayIdentity(person: Person)` qui prend un paramètre `person` de type `Person`. Cette fonction affichera l'identité de la personne en utilisant `console.log()`. Par exemple, l'affichage peut être sous la forme "Nom: {name}, Age: {age}".

3. À l'intérieur de la fonction `displayIdentity`, utilisez `console.log()` pour afficher l'identité de la personne en utilisant les propriétés `name` et `age` du paramètre `person`.

4. Dans le corps principal de votre programme (`index.ts`), créez un tableau de personnes en utilisant l'interface `Person`. Par exemple :

   ```typescript
   const people: Person[] = [
     { name: 'John Doe', age: 25 },
     { name: 'Jane Smith', age: 30 },
     { name: 'Bob Johnson', age: 40 },
   ];
   ```

   Ce tableau contient plusieurs objets `Person` avec différentes identités.

5. Utilisez une boucle `for...of` pour parcourir chaque personne du tableau `people`. À chaque itération, appelez la fonction `displayIdentity` en passant la personne actuelle comme argument.

   ```typescript
   for (const person of people) {
     displayIdentity(person);
   }
   ```

   Cela exécutera la fonction `displayIdentity` pour chaque personne du tableau, affichant ainsi l'identité de chaque personne.

6. Compilez le fichier TypeScript en utilisant la commande `tsc` dans le terminal :

    ```
    tsc index.ts
    ```

    Cela générera un fichier JavaScript correspondant.

7. Exécutez le fichier JavaScript généré en utilisant la commande `node` :

    ```
    node index.js
    ```

    Vous devriez voir l'identité de chaque personne s'afficher dans la console.

Aller plus loin:
- Créer une fonction qui détermine si la personne est mineure ou majeure. Si la personne est mineure, afficher un texte "Interdit aux mineurs non accompagés.".