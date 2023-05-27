## L'Héritage

L'héritage de classe en TypeScript permet aux classes dérivées d'hériter les propriétés et les méthodes de la classe de base, tout en leur permettant d'ajouter des fonctionnalités supplémentaires spécifiques à la classe dérivée. <br/>
Cela favorise la réutilisation du code et facilite la modélisation de relations entre les objets. <br/>
Voici un exemple d'héritage de classe en TypeScript :

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void { // Chaque animal a la faculté de manger.
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  bark(): void { // Seuls les chiens ont la faculté d'aboyer.
    console.log(`${this.name} is barking.`);
  }
}

// Utilisation des classes héritées
const dog = new Dog("Buddy", "Labrador");
dog.eat();  // Affiche : Buddy is eating.
dog.bark(); // Affiche : Buddy is barking.
```

Dans cet exemple, nous avons une classe de base `Animal` qui a une propriété `name` et une méthode `eat()`. <br/>
Ensuite, nous avons une classe dérivée `Dog` qui hérite de la classe `Animal`. La classe `Dog` ajoute une propriété `breed` et une méthode `bark()`.

Lorsque nous créons une instance de `Dog` en utilisant `new Dog("Buddy", "Labrador")`, cela appelle d'abord le constructeur de la classe de base `Animal` en utilisant `super(name)`, puis initialise la propriété `breed` spécifique à la classe `Dog`. Nous pouvons ensuite utiliser les méthodes `eat()` héritée de `Animal` et `bark()` spécifique à `Dog`.

## Classe abstraite

En utilisant des classes abstraites, vous pouvez définir une base commune avec des fonctionnalités génériques dans la classe abstraite, puis spécialiser ces fonctionnalités dans les classes dérivées. Cela favorise une meilleure organisation du code, une réutilisation efficace et une meilleure maintenabilité.
Voici un exemple d'une classe dérivée de la classe abstraite `Animal` :

```typescript
abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void; // La méthode doit être définie dans les classes qui héritent de la classe Animal !
}

class Cat extends Animal {
  makeSound(): void { // On définit la méthode abstraite "makeSound", afin de lui donner un comportement spécifique.
    console.log(`${this.name} makes a sound: Meow!`);
  }
}

const cat = new Cat("Whiskers");
cat.makeSound(); // Affiche : Whiskers makes a sound: Meow!
```

Dans cet exemple, nous avons une classe `Cat` qui étend la classe abstraite `Animal`. La classe `Cat` fournit une implémentation concrète de la méthode abstraite `makeSound()` héritée de la classe `Animal`.

Lorsque nous créons une instance de `Cat` en utilisant `new Cat("Whiskers")`, nous pouvons appeler la méthode `makeSound()` définie dans la classe `Cat`. Cette méthode affiche un message spécifique pour un chat en utilisant la propriété `name` héritée de la classe `Animal`.

Ainsi, la classe dérivée `Cat` respecte le contrat de méthode de la classe abstraite `Animal` en fournissant une implémentation concrète de la méthode `makeSound()`. Cela permet d'utiliser des références de type `Animal` pour manipuler des instances de `Cat` de manière polymorphique.

