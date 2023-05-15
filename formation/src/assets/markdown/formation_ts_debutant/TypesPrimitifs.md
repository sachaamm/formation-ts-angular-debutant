En TypeScript, les variables primitives sont des types de données de base intégrés qui représentent des valeurs individuelles. TypeScript offre des types de variables primitives similaires à ceux de JavaScript, mais avec des annotations de type statiques pour renforcer la sûreté et la précision du typage. Voici les principales variables primitives en TypeScript :

1. **`number`** : Représente les valeurs numériques, y compris les nombres entiers et les nombres à virgule flottante. Exemple : `let age: number = 25;`

2. **`string`** : Représente les valeurs de texte. Les chaînes de caractères sont délimitées par des guillemets simples ('') ou doubles (""). Exemple : `let name: string = "John";`

3. **`boolean`** : Représente les valeurs de vérité, soit `true` (vrai) soit `false` (faux). Exemple : `let isDone: boolean = false;`

4. **`null`** : Représente une valeur nulle intentionnelle. Exemple : `let myVariable: null = null;`

5. **`undefined`** : Représente une valeur non définie. Exemple : `let myVariable: undefined = undefined;`

6. **`symbol`** : Représente des valeurs uniques et immuables utilisées comme identifiants. Les symboles sont souvent utilisés comme clés dans les objets pour éviter les conflits de noms. Exemple : `let id: symbol = Symbol("id");`

7. **`bigint`** : Représente des entiers de taille arbitraire. Il est utilisé lorsque vous avez besoin de représenter des nombres entiers extrêmement grands. Exemple : `let bigNumber: bigint = 9007199254740991n;`

Ces variables primitives peuvent être utilisées pour stocker des valeurs de différents types de données dans vos programmes TypeScript. Les annotations de type statiques permettent à TypeScript de détecter les erreurs de typage potentielles lors de la compilation, offrant ainsi une meilleure sécurité et une meilleure clarté du code.


