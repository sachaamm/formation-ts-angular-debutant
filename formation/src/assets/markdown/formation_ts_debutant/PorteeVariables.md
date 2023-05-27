## Portée des variables

En TypeScript, les variables peuvent être déclarées avec différentes portées, ce qui détermine où et comment elles peuvent être accessibles dans votre code. Les portées de variables définissent la visibilité et la durée de vie des variables. Voici les différentes portées de variables en TypeScript :

1. **Portée globale :** Les variables déclarées à l'extérieur de toutes les fonctions ou blocs de code sont considérées comme des variables à portée globale. Elles sont accessibles depuis n'importe quelle partie de votre code, y compris les fonctions et les blocs de code imbriqués. La durée de vie d'une variable globale est tout au long de l'exécution du programme.

2. **Portée locale (fonction) :** Les variables déclarées à l'intérieur d'une fonction ont une portée locale à cette fonction. Elles sont accessibles uniquement à l'intérieur de la fonction dans laquelle elles sont déclarées, y compris les blocs de code imbriqués à l'intérieur de la fonction. La durée de vie d'une variable locale commence lorsque la fonction est appelée et se termine lorsque la fonction se termine.

3. **Portée de bloc :** Les variables déclarées à l'intérieur d'un bloc de code, tel qu'un bloc `if`, une boucle `for`, ou une déclaration `let`/`const`, ont une portée limitée au bloc dans lequel elles sont déclarées. Elles ne sont pas accessibles en dehors du bloc de code dans lequel elles sont déclarées. La durée de vie d'une variable de bloc est limitée à la durée d'exécution du bloc de code dans lequel elle est déclarée.

Il est important de noter que TypeScript suit les règles de portée du langage JavaScript sous-jacent. Les variables déclarées avec `var` ont une portée de fonction, tandis que les variables déclarées avec `let` et `const` ont une portée de bloc.

Voici un exemple illustrant les différentes portées de variables en TypeScript :

```typescript
let globalVariable = "Global"; // Variable globale

function exampleFunction() {
  let localVariable = "Local"; // Variable locale à la fonction

  if (true) {
    let blockVariable = "Block"; // Variable de bloc
    console.log(blockVariable); // Affiche : Block
  }

  console.log(localVariable); // Affiche : Local
  console.log(globalVariable); // Affiche : Global
}

exampleFunction();
console.log(globalVariable); // Affiche : Global
```

Dans cet exemple, `globalVariable` est une variable à portée globale, `localVariable` est une variable à portée locale à la fonction `exampleFunction`, et `blockVariable` est une variable à portée de bloc dans le bloc `if`. Chaque variable n'est accessible que dans sa portée respective.

Il est recommandé de définir la portée des variables de manière appropriée pour éviter les problèmes de collision de noms et pour limiter l'accès non autorisé aux variables. Une bonne gestion des portées de variables contribue à la lisibilité, à la maintenance et à la prévention d'erreurs dans votre code.