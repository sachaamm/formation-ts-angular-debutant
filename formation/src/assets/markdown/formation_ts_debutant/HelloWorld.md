Étape 1: Installation de Node.js

- Assurez-vous d'avoir Node.js installé sur votre machine. Vous pouvez le télécharger à partir du site officiel de [Node.js](https://nodejs.org/en/download) et suivre les instructions d'installation pour votre système d'exploitation.

Étape 2: Création du répertoire du projet

1. Ouvrez un terminal ou une invite de commande.
2. Choisissez un répertoire sur votre système où vous souhaitez créer votre projet "Hello World" en TypeScript.
3. Utilisez la commande `mkdir` pour créer un nouveau répertoire :

   ```
   mkdir hello-world-typescript
   ```

4. Accédez au répertoire du projet :

   ```
   cd hello-world-typescript
   ```

Étape 3: Initialisation du projet

1. Dans le répertoire du projet, exécutez la commande suivante pour initialiser un fichier `package.json` :

   ```
   npm init -y
   ```

   Cela créera un fichier `package.json` avec des valeurs par défaut.

Étape 4: Installation de TypeScript

1. Exécutez la commande suivante pour installer TypeScript en tant que dépendance de développement :

   ```
   npm install --save-dev typescript
   ```

   Cela ajoutera TypeScript en tant que dépendance de développement dans votre fichier `package.json` et téléchargera les fichiers nécessaires.

Étape 5: Création du fichier TypeScript

1. Ouvrez le répertoire du projet dans VsCode

   ```
   code .
   ```

2. Créez un fichier `hello-world.ts` dans Visual Studio Code.

3. Ouvrez le fichier `hello-world.ts` et ajoutez le code TypeScript suivant :

   ```typescript
   const message: string = 'Hello, World!';
   console.log(message);
   ```

   Ce code définit une variable `message` de type `string` avec la valeur "Hello, World!" et l'affiche dans la console.

Étape 6: Compilation du code TypeScript

1. Dans le répertoire du projet, exécutez la commande suivante pour compiler votre code TypeScript en JavaScript :

   ```
   npx tsc hello-world.ts
   ```

   Cela exécutera le compilateur TypeScript et générera un fichier JavaScript `hello-world.js` à partir de votre fichier TypeScript.

Étape 7: Exécution du code JavaScript

1. Dans le répertoire du projet, exécutez la commande suivante pour exécuter le code JavaScript généré :

   ```
   node hello-world.js
   ```

   Cela exécutera le fichier JavaScript `hello-world.js` et affichera "Hello, World!" dans la console.

Étape 8 (Optionnel): Utilisation de ts-node

1. Dans le répertoire du projet, exécutez la commande suivante pour installer la bibliothèque **ts-node** à l'aide de la commande suivante : 

   ```
   npm install -g ts-node
   ```

   Une fois executée, la commande instellera **ts-node** globalement sur votre machine ( c'est à dire que la commande sera utilisable même en dehors de votre projet ). Le paramètre **-g** permet d'installer une librairie NodeJs globalement, plutôt que de l'installer uniquement pour votre projet.

2. Dans le répertoire du projet, exécutez la commande suivante pour executer directement le fichier ts :

   ```
   ts-node hello-world.ts
   ```

   Cela exécutera le fichier Typescript `hello-world.ts` sans le compiler.

Félicitations ! Vous venez de créer et d'exécuter votre premier projet "Hello World" en TypeScript. Vous pouvez maintenant continuer à explorer et à apprendre les fonctionnalités avancées de TypeScript pour développer des applications plus complexes.