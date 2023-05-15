## Structure de Projet NodeJs

Voici la structure minimaliste d'un projet Node.js Typescript (supprimer les fichiers hello-world.ts et hello-world.js créés à l'étape précedente) :

```bash
projet-node/
  |- src/
  |    |- index.ts # créer le fichier index.ts
  |- node_modules/
  |- package.json
  |- README.md
  |- tsconfig.json # créer le fichier tsconfig.json
```

Voici une description de chaque élément de la structure typique d'un projet Node.js :

- **`src/` :** Ce répertoire contient le code source de l'application, y compris le point d'entrée `index.ts` qui initialise l'application. Il peut également contenir des sous-répertoires pour organiser le code en fonction de ses responsabilités.

- **`node_modules/` :** Ce répertoire contient les dépendances du projet installées via npm (Node Package Manager). Les modules externes nécessaires à l'application sont stockés ici.

- **`package.json` :** Le fichier `package.json` est un fichier de configuration qui contient des informations sur le projet, telles que le nom, la version, les dépendances, les scripts npm personnalisés, etc. Il est également utilisé pour gérer les dépendances du projet.

- **`README.md` :** Ce fichier est généralement utilisé pour fournir une documentation et des instructions sur l'utilisation du projet. Il peut contenir des informations sur l'installation, la configuration, l'exécution et d'autres détails importants du projet.

## Fichiers spécifiques dans une structure de projet Typescript

Lorsque vous utilisez TypeScript dans un projet Node.js, il y a quelques fichiers spécifiques qui sont souvent présents pour la configuration et la gestion du code TypeScript. Voici les fichiers couramment utilisés :

1. **`tsconfig.json`** : Ce fichier est utilisé pour configurer les paramètres du compilateur TypeScript (tsc). Il définit les options de compilation, les fichiers sources, les fichiers d'exclusion, le chemin de sortie des fichiers JavaScript transpilés, etc. C'est un fichier de configuration essentiel pour un projet TypeScript. Exemple de contenu :

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

2. **`package.json`** : En plus de sa fonction principale de gestion des dépendances du projet, le fichier `package.json` est également utilisé pour spécifier les scripts de compilation TypeScript. Par exemple, vous pouvez ajouter un script `"build"` pour transpiler le code TypeScript en JavaScript à l'aide de tsc. Exemple de script dans `package.json` :

```json
{
  "scripts": {
    "build": "tsc"
  }
}
```

3. **Fichiers TypeScript** : Les fichiers source TypeScript contiennent le code TypeScript de votre application. Ils peuvent avoir une extension `.ts`. Par exemple, vous pouvez avoir un fichier `index.ts` qui sert de point d'entrée de votre application.

4. **Fichiers JavaScript transpilés** : Lorsque vous compilez votre code TypeScript, les fichiers JavaScript transpilés sont générés. Ils peuvent avoir la même structure que les fichiers TypeScript, mais avec une extension `.js`. Par exemple, après la compilation, vous pouvez obtenir un fichier `index.js`.

Ces fichiers spécifiques à TypeScript vous aident à configurer et à gérer votre projet Node.js lors de l'utilisation de TypeScript. Le fichier `tsconfig.json` configure les options du compilateur TypeScript, le fichier `package.json` peut contenir des scripts de compilation, les fichiers TypeScript contiennent le code source, et les fichiers JavaScript transpilés sont générés à partir des fichiers TypeScript. 

