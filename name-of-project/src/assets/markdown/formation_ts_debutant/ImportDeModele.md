Dans ce chapitre, nous allons voir comment importer un modèle inclus dans un fichier source pour l'utiliser dans le fichier cible.
Pour importer le modèle d'interface "Person" du fichier "Person.model.ts" dans le fichier "index.ts" d'un projet TypeScript, suivez les étapes suivantes :

1. Assurez-vous que la structure de votre projet ressemble à ceci :

   ```
   - src/
     - index.ts
     - models/
       - Person.model.ts
   ```

2. Dans le fichier "Person.model.ts", assurez-vous que vous avez déclaré et exporté l'interface `Person` comme suit :

   ```typescript
   // Ficher: ./src/models/Person.model.ts
   export interface Person {
     name: string;
     age: number;
   }
   ```

   En exportant l'interface, vous la rendez accessible pour l'importation dans d'autres fichiers.

3. Dans le fichier "index.ts" où vous souhaitez utiliser l'interface `Person`, ajoutez une ligne d'importation pour inclure le modèle d'interface. Utilisez le chemin relatif depuis le fichier "index.ts" pour atteindre le fichier "Person.model.ts" :

   ```typescript
   // Ficher: ./src/index.ts
   import { Person } from './models/Person.model';
   ```

   Dans cet exemple, nous supposons que le fichier "Person.model.ts" est situé dans le dossier "models" qui se trouve dans le même répertoire que "index.ts".

4. Maintenant, vous pouvez utiliser l'interface `Person` dans le fichier "index.ts" comme suit :

   ```typescript
   // Ficher: ./src/index.ts

   // après la ligne d'import
   const person: Person = {
     name: 'John Doe',
     age: 25,
   };

   console.log(`Vous vous appelez ${person.name}, vous avez ${age} ans.`);

   ```

   L'interface `Person` est maintenant disponible dans le fichier "index.ts" grâce à l'importation que vous avez effectuée.

Assurez-vous que vous exécutez le compilateur TypeScript (`tsc`) pour compiler vos fichiers et générer les fichiers JavaScript correspondants. Vous pouvez ensuite exécuter le fichier JavaScript généré pour exécuter votre programme.

Notez que le chemin relatif utilisé dans l'importation peut varier en fonction de la structure spécifique de votre projet. Assurez-vous d'ajuster le chemin en fonction de la structure réelle de vos dossiers.