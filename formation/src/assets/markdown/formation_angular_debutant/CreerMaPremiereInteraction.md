Pour créer une fonction dans le composant `AppComponent` d'Angular qui sera déclenchée par un clic sur un bouton, suivez ces étapes :

1. Ouvrez le fichier `app.component.ts` correspondant au composant `AppComponent`.

2. À l'intérieur de la classe `AppComponent`, déclarez une fonction publique qui sera exécutée lors du clic sur le bouton. Par exemple, nous allons créer une fonction nommée `onClickButton()` :

   ```typescript
   onClickButton() {
     // Code à exécuter lors du clic sur le bouton
   }
   ```

3. Dans le fichier `app.component.html`, recherchez l'emplacement où vous souhaitez ajouter le bouton. Par exemple, vous pouvez ajouter le bouton à l'intérieur d'un `<div>` :

   ```html
   <div>
     <button (click)="onClickButton()">Cliquez ici</button>
   </div>
   ```

   Notez l'utilisation de `(click)` pour écouter l'événement de clic et appeler la fonction `onClickButton()`.

4. Sauvegardez les fichiers.

5. Lancez l'application en exécutant la commande `ng serve` dans votre terminal.

6. Ouvrez votre navigateur et accédez à l'URL `http://localhost:4200` (ou l'URL spécifiée par Angular).

7. Vous verrez le bouton affiché à l'écran. Lorsque vous cliquez sur le bouton, la fonction `onClickButton()` sera exécutée.

8. Pour vérifier si la fonction est exécutée, vous pouvez ajouter une instruction `console.log()` à l'intérieur de la fonction :

   ```typescript
   onClickButton() {
     console.log('Bouton cliqué !');
   }
   ```

   Ouvrez la console de votre navigateur pour voir les messages de débogage.

C'est ainsi que vous pouvez créer une fonction dans le composant `AppComponent` d'Angular et la déclencher en cliquant sur un bouton. Vous pouvez ensuite ajouter votre propre logique à la fonction pour effectuer des opérations spécifiques en réponse à l'événement de clic.