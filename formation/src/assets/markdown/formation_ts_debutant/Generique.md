## Classe Générique

En TypeScript, les classes génériques permettent de créer des classes qui peuvent fonctionner avec différents types de données sans spécifier le type exact au moment de la conception. <br/> 
Les classes génériques sont définies en utilisant des paramètres de type génériques, qui peuvent être utilisés pour spécifier les types des propriétés, des méthodes et des arguments dans la classe. Voici comment vous pouvez déclarer et utiliser une classe générique en TypeScript :

```typescript
class Box<T> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }
}

// Utilisation de la classe générique
const stringBox = new Box<string>("Hello");
console.log(stringBox.getItem()); // Affiche : Hello

const numberBox = new Box<number>(42);
console.log(numberBox.getItem()); // Affiche : 42
```

Dans cet exemple, nous avons une classe générique `Box<T>`. Le paramètre de type générique `T` est utilisé pour définir le type de l'attribut `item` et de la méthode `getItem()`. Lorsque vous instanciez la classe `Box`, vous spécifiez le type que vous souhaitez utiliser pour `T` entre les chevrons (`<string>` pour une instance de `Box` avec des chaînes de caractères, `<number>` pour une instance avec des nombres, etc.).

Lorsque vous appelez la méthode `getItem()`, elle renvoie la valeur de l'attribut `item` du type spécifié.

Les classes génériques offrent plusieurs avantages :

1. **Réutilisation du code :** Les classes génériques permettent de créer des composants réutilisables qui peuvent être utilisés avec différents types de données sans avoir à réécrire le code pour chaque type spécifique.

2. **Sûreté de typage :** TypeScript garantit que les types utilisés avec la classe générique sont cohérents dans toute l'implémentation. Les erreurs de typage peuvent être détectées lors de la compilation plutôt qu'à l'exécution.

3. **Flexibilité :** Les classes génériques offrent une grande flexibilité, car elles peuvent être utilisées avec différents types de données sans modification du code source de la classe générique elle-même.

4. **Polymorphisme :** Les instances de classes génériques peuvent être manipulées de manière polymorphique en utilisant des références de type générique.

Les classes génériques sont couramment utilisées pour créer des structures de données génériques et des algorithmes réutilisables. Elles offrent une approche puissante pour créer des composants flexibles et sûrs sur le plan du typage.

## Fonction Générique

Les fonctions génériques en TypeScript vous permettent de créer des fonctions réutilisables qui peuvent travailler avec différents types de données de manière flexible. Elles vous permettent de paramétrer le type des arguments et du retour d'une fonction, ce qui vous donne une grande flexibilité lors de l'écriture de code générique et réutilisable.

Voici comment vous pouvez définir et utiliser des fonctions génériques en TypeScript :

1. Déclaration d'une fonction générique :
   - Pour déclarer une fonction générique, utilisez la syntaxe `function nomFonction<T>(paramètres): typeRetour {}`, où `T` est un paramètre de type générique.
   - Exemple :
     ```typescript
     function identity<T>(arg: T): T {
       return arg;
     }
     ```

2. Utilisation d'une fonction générique :
   - Lorsque vous appelez une fonction générique, vous pouvez spécifier le type de données que vous souhaitez utiliser en fournissant un argument de type entre les chevrons `<>`.
   - Exemple :
     ```typescript
     let result = identity<string>('Hello');
     console.log(result); // Affiche 'Hello'
     ```

3. Inférence de type automatique :
   - Dans certains cas, TypeScript peut inférer automatiquement le type générique en fonction de la valeur passée à la fonction.
   - Exemple :
     ```typescript
     let result = identity('Hello');
     console.log(result); // Affiche 'Hello' avec le type de retour inféré comme string
     ```

4. Utilisation de plusieurs types génériques :
   - Vous pouvez définir plusieurs paramètres de type générique dans une fonction générique.
   - Exemple :
     ```typescript
     function swap<T, U>(a: T, b: U): [U, T] {
       return [b, a];
     }

     let result = swap<number, string>(1, 'two');
     console.log(result); // Affiche ['two', 1]
     ```

5. Contraintes sur les types génériques :
   - Vous pouvez appliquer des contraintes sur les types génériques pour limiter les types possibles utilisables.
   - Exemple :
     ```typescript
     interface Lengthy {
       length: number;
     }

     function printLength<T extends Lengthy>(arg: T): void {
       console.log(arg.length);
     }

     printLength('Hello'); // Affiche 5
     printLength([1, 2, 3]); // Affiche 3
     ```

   Dans cet exemple, la fonction générique `printLength` accepte un argument de type `T` qui doit satisfaire la contrainte `Lengthy` (avoir une propriété `length` de type `number`).

<br/>

## Conclusion
Les fonctions génériques vous permettent d'écrire du code réutilisable et flexible en TypeScript. <br/>
Elles vous permettent de travailler avec différents types de données sans sacrifier la sécurité du type.