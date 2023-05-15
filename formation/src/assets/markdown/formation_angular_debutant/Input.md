En Angular, la propriété `Input()` est un décorateur qui permet de déclarer une propriété d'un composant comme étant une propriété d'entrée. Cela signifie que cette propriété peut recevoir des valeurs provenant d'un composant parent.

Voici comment utiliser le décorateur `Input()` pour déclarer une propriété d'entrée dans un composant :

1. Importez le décorateur `Input` depuis le module `@angular/core` :

   ```typescript
   import { Component, Input } from '@angular/core';
   ```

2. Dans la classe du composant, déclarez une propriété en utilisant le décorateur `Input()` :

   ```typescript
   @Component({
     // Configuration du composant
   })
   export class MonComposantComponent {
     @Input() nomPropriete: type;
   }
   ```

   Remplacez `nomPropriete` par le nom de votre propriété et `type` par le type de données attendu pour cette propriété. Par exemple, si vous voulez déclarer une propriété d'entrée appelée `message` de type `string`, vous pouvez le faire comme ceci :

   ```typescript
   @Input() message: string;
   ```

   Vous pouvez également spécifier une valeur par défaut pour la propriété d'entrée en utilisant la syntaxe `@Input() nomPropriete = valeurParDefaut;`.

3. Dans le template du composant, vous pouvez utiliser la propriété d'entrée comme n'importe quelle autre propriété de classe :

   ```html
   <p>{{ nomPropriete }}</p>
   ```

   Dans cet exemple, `nomPropriete` fait référence à la propriété d'entrée déclarée dans le composant.

Maintenant, lorsque vous utilisez ce composant dans un composant parent, vous pouvez lui fournir une valeur pour la propriété d'entrée. Par exemple :

```html
<app-mon-composant [nomPropriete]="valeur"></app-mon-composant>
```

Dans ce cas, `valeur` est une expression ou une variable définie dans le composant parent. La valeur sera transmise au composant enfant et sera accessible via la propriété d'entrée déclarée.

Les propriétés d'entrée permettent de communiquer entre les composants parents et enfants et facilitent la réutilisabilité des composants en leur permettant d'accepter des données externes.