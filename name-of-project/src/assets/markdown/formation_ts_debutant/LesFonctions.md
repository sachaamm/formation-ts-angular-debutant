En TypeScript, vous pouvez typer les paramètres d'une fonction en spécifiant le type attendu pour chaque paramètre entre parenthèses lors de la déclaration de la fonction. Voici quelques exemples :

```typescript
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

function processArray(arr: number[]): void {
  // Traitement du tableau
}
```

Dans le premier exemple, la fonction `greet` prend un paramètre `name` de type `string`. Cela signifie que lors de l'appel de cette fonction, vous devez passer une valeur de type `string` en tant qu'argument.

Dans le deuxième exemple, la fonction `addNumbers` prend deux paramètres `a` et `b`, tous deux de type `number`. La fonction retourne la somme des deux paramètres, qui est également de type `number`.

Dans le troisième exemple, la fonction `processArray` prend un paramètre `arr` de type tableau de `number`. Cela signifie que lors de l'appel de cette fonction, vous devez passer un tableau contenant uniquement des éléments de type `number`.

La typage des paramètres de fonction en TypeScript offre plusieurs avantages :

1. **Détection d'erreurs de typage :** Le compilateur TypeScript peut détecter les erreurs de typage potentielles lors de la compilation, ce qui permet de repérer les incohérences de types dès la phase de développement plutôt qu'à l'exécution.

2. **Documentation :** Les types spécifiés pour les paramètres de fonction servent de documentation pour les développeurs qui utilisent ou maintiennent le code. Cela clarifie les attentes en matière de types et facilite la compréhension du code.

3. **Assistance des outils de développement :** Les éditeurs et les outils de développement TypeScript peuvent utiliser les informations de typage pour fournir une assistance contextuelle, comme la saisie automatique, la vérification de syntaxe et la documentation intégrée.

4. **Sûreté de typage :** Le typage des paramètres de fonction renforce la sûreté de typage de votre code en évitant les erreurs de manipulation de types incorrects ou incompatibles.

Il est important de noter que les types des paramètres de fonction sont facultatifs en TypeScript. Si vous ne spécifiez pas de type pour un paramètre, il sera inféré automatiquement à partir de la valeur passée lors de l'appel de la fonction. Cependant, il est recommandé de spécifier les types de manière explicite pour améliorer la clarté et la sûreté du code.