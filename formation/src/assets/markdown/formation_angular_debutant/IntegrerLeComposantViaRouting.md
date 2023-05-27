Pour intégrer un nouveau composant à une application Angular existante via le router, vous devez suivre ces étapes :

1. Assurez-vous que votre application Angular a déjà un système de routage en place. Si vous n'avez pas encore configuré le router, vous pouvez le faire en modifiant le fichier `app-routing.module.ts` ou en créant un fichier de module de routage si vous n'en avez pas déjà un.

2. Dans le fichier de configuration du router (par exemple, `app-routing.module.ts`), importez le composant que vous souhaitez intégrer. Supposons que vous ayez créé un composant appelé `MonComposant`, vous pouvez l'importer comme ceci :

   ```typescript
   import { MonComposantComponent } from './mon-composant/mon-composant.component';
   ```

3. Dans la définition de vos routes, ajoutez une nouvelle route pour le composant que vous souhaitez intégrer. Vous pouvez définir un chemin et un nom de route pour le composant, par exemple :

   ```typescript
   const routes: Routes = [
     // Autres routes existantes...
     { path: 'mon-composant', component: MonComposantComponent }
   ];
   ```

   Cette route associe le chemin `/mon-composant` à votre composant `MonComposantComponent`. Vous pouvez choisir le chemin que vous souhaitez utiliser en fonction de votre application.

4. Ensuite, utilisez le `<router-outlet></router-outlet>` dans le template du composant parent (par exemple, dans le template de l'`AppComponent`) pour indiquer où le contenu du composant intégré doit être affiché. Cela permettra au router de remplacer le contenu du `<router-outlet>` avec le contenu du composant correspondant à la route spécifiée.

   ```html
   <!-- app.component.html -->
   <h1>Mon application</h1>
   <router-outlet></router-outlet>
   ```

   Le contenu du composant `MonComposantComponent` sera rendu à l'endroit où se trouve le `<router-outlet>`.

5. Vous pouvez maintenant naviguer vers votre nouveau composant en utilisant des liens ou en programmant la navigation. Par exemple, vous pouvez ajouter un lien dans le template d'un autre composant pour accéder à votre `MonComposantComponent` :

   ```html
   <!-- app.component.html -->
   <h1>Mon application</h1>
   <a routerLink="/mon-composant">Aller à Mon Composant</a>
   <router-outlet></router-outlet>
   ```

   Cela créera un lien cliquable qui, lorsqu'il est cliqué, naviguera vers la route associée au composant `MonComposantComponent`.

C'est ainsi que vous pouvez intégrer un nouveau composant à une application Angular existante en utilisant le router. Assurez-vous de bien comprendre la configuration du router et les concepts de base de la navigation dans Angular pour utiliser cette fonctionnalité de manière efficace.