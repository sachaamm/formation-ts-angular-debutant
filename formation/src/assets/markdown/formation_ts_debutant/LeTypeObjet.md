En TypeScript, le type `object` est utilisé pour représenter tout type d'objet JavaScript. Il est plus générique que les types spécifiques tels que `string`, `number`, `boolean`, etc. et est souvent utilisé lorsque vous ne connaissez pas la structure spécifique de l'objet à l'avance ou lorsque vous travaillez avec des objets de types différents.

Voici comment vous pouvez déclarer une variable de type `object` en TypeScript :

```typescript
let person: object = {
  name: "John",
  age: 30,
};
```

Dans cet exemple, nous déclarons une variable `person` de type `object` qui contient les propriétés `name` et `age`. Cependant, notez que lorsque vous utilisez le type `object`, vous n'avez pas accès aux propriétés spécifiques de l'objet sans utiliser une conversion ou une assertion de type appropriée. Cela est dû au fait que le type `object` n'a pas de propriétés ou de méthodes spécifiques définies.

Pour travailler plus spécifiquement avec les propriétés d'un objet, vous pouvez utiliser des types d'interface ou des types d'objets spécifiques. Par exemple :

```typescript
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "John",
  age: 30,
};
```

Dans cet exemple, nous utilisons une interface `Person` pour définir la structure spécifique d'un objet représentant une personne. Maintenant, TypeScript reconnaît les propriétés `name` et `age` et fournit une vérification de type plus précise pour les opérations ultérieures.

Il est généralement recommandé d'utiliser des types spécifiques ou des interfaces pour décrire la structure d'un objet plutôt que de simplement utiliser le type `object`, car cela permet une meilleure vérification de type et facilite le développement en fournissant une structure claire et définie pour les objets manipulés dans votre code TypeScript.