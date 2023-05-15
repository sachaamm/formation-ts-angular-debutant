En TypeScript, vous pouvez définir des propriétés optionnelles dans un objet en utilisant le `?` après le nom de la propriété. Cela permet de spécifier que la propriété peut être absente ou avoir une valeur `undefined`. Voici comment utiliser des propriétés optionnelles dans un objet :

```typescript
interface Person {
  name: string;
  age?: number;
  email?: string;
}

let person1: Person = {
  name: "John",
  age: 30,
};

let person2: Person = {
  name: "Jane",
  email: "jane@example.com",
};
```

Dans cet exemple, nous définissons l'interface `Person` avec trois propriétés : `name`, `age`, et `email`. Les propriétés `age` et `email` sont marquées comme optionnelles en ajoutant le `?` après leur nom. Cela signifie qu'elles peuvent être présentes dans l'objet `Person`, mais ne sont pas obligatoires.

Lorsque vous créez des objets de type `Person`, vous pouvez choisir d'inclure ou d'omettre les propriétés optionnelles. Par exemple, `person1` a les propriétés `name` et `age`, tandis que `person2` a les propriétés `name` et `email`.

L'utilisation de propriétés optionnelles est utile lorsque vous avez des objets avec des propriétés qui peuvent être présentes ou absentes en fonction du contexte ou des conditions. Cela permet une plus grande flexibilité lors de la création d'objets, car vous n'êtes pas obligé de fournir toutes les propriétés chaque fois que vous créez une instance de l'objet.

Lorsque vous accédez à une propriété optionnelle, vous devez vérifier si elle existe avant de l'utiliser pour éviter des erreurs de type `undefined`. Vous pouvez le faire en utilisant une vérification de présence, telle que :

```typescript
if (person1.age !== undefined) {
  console.log(person1.age);
}
```

Cette vérification garantit que la propriété `age` est définie avant d'accéder à sa valeur.