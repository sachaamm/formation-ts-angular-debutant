En Angular, la propriété `Output()` est un décorateur qui permet de déclarer un événement émis par un composant. Cela permet au composant parent de s'abonner à cet événement et de réagir aux changements survenus dans le composant enfant.

Voici comment utiliser le décorateur `Output()` pour déclarer un événement émis par un composant :

1. Importez le décorateur `Output` et la classe `EventEmitter` depuis le module `@angular/core` :

   ```typescript
   import { Component, Output, EventEmitter } from '@angular/core';
   ```

2. Dans la classe du composant, déclarez une propriété en utilisant le décorateur `Output()` et la classe `EventEmitter` :

   ```typescript
   @Component({
     // Configuration du composant
   })
   export class MonComposantComponent {
     @Output() nomEvenement: EventEmitter<type> = new EventEmitter<type>();
   }
   ```

   Remplacez `nomEvenement` par le nom de votre événement et `type` par le type de données que vous souhaitez émettre avec cet événement. Par exemple, si vous voulez déclarer un événement appelé `messageChange` qui émet des valeurs de type `string`, vous pouvez le faire comme ceci :

   ```typescript
   @Output() messageChange: EventEmitter<string> = new EventEmitter<string>();
   ```

3. Dans le code du composant, vous pouvez utiliser la méthode `emit()` de l'`EventEmitter` pour émettre l'événement avec une valeur :

   ```typescript
   this.nomEvenement.emit(valeur);
   ```

   Par exemple, si vous voulez émettre l'événement `messageChange` avec la valeur `"Nouveau message"`, vous pouvez le faire comme ceci :

   ```typescript
   this.messageChange.emit("Nouveau message");
   ```

4. Dans le composant parent, vous pouvez vous abonner à l'événement en utilisant la syntaxe de liaison d'événement :

   ```html
   <app-mon-composant (nomEvenement)="handleEvent($event)"></app-mon-composant>
   ```

   Dans cet exemple, `handleEvent($event)` est une méthode définie dans le composant parent qui sera appelée lorsque l'événement sera émis. L'objet `$event` contiendra la valeur émise par le composant enfant.

   Vous pouvez également utiliser une syntaxe raccourcie pour lier l'événement directement à une méthode sans utiliser la syntaxe de liaison d'événement complète :

   ```html
   <app-mon-composant (nomEvenement)="handleEvent"></app-mon-composant>
   ```

   Dans ce cas, Angular passera automatiquement l'objet `$event` à la méthode `handleEvent` lorsque l'événement sera émis.

Les propriétés `Output()` permettent aux composants enfants d'émettre des événements que les composants parents peuvent écouter et y réagir. Cela facilite la communication entre les composants et permet aux composants de notifier les changements ou les événements importants à leurs composants parents.