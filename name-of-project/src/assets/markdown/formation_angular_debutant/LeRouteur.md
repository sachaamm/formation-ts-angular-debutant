## Itinéraires (Route Patterns) avec le Routeur

Les itinéraires (route patterns) sont utilisés avec le routeur d'Angular pour définir les chemins et les correspondances d'URL dans votre application. Ils vous permettent de définir comment les URL sont mappées aux composants spécifiques qui doivent être affichés lorsque ces URL sont naviguées.

Voici comment vous pouvez utiliser les itinéraires avec le routeur d'Angular :

1. Importez les modules nécessaires : Dans votre module Angular, importez le module `RouterModule` depuis `@angular/router`.

   ```typescript
   import { NgModule } from '@angular/core';
   import { RouterModule } from '@angular/router';

   @NgModule({
     imports: [
       RouterModule.forRoot([
         // Définissez vos itinéraires ici
       ])
     ],
     // ...
   })
   export class AppRoutingModule { }
   ```

2. Définissez les itinéraires : Dans le tableau des itinéraires dans `RouterModule.forRoot()`, vous pouvez définir vos itinéraires en utilisant la méthode `RouterModule.forRoot()`.

   ```typescript
   import { NgModule } from '@angular/core';
   import { RouterModule } from '@angular/router';
   import { HomeComponent } from './home.component';
   import { AboutComponent } from './about.component';

   @NgModule({
     imports: [
       RouterModule.forRoot([
         { path: '', component: HomeComponent },
         { path: 'about', component: AboutComponent },
         // Définissez d'autres itinéraires ici
       ])
     ],
     // ...
   })
   export class AppRoutingModule { }
   ```

   Dans cet exemple, nous avons défini deux itinéraires : un itinéraire par défaut pour la racine de l'application (chemin vide) qui affiche le composant `HomeComponent`, et un itinéraire pour `/about` qui affiche le composant `AboutComponent`. Vous pouvez définir autant d'itinéraires que nécessaire pour votre application.

3. Ajoutez une balise `<router-outlet>` : Dans votre template racine (`app.component.html`), ajoutez une balise `<router-outlet>` à l'endroit où vous souhaitez que les composants associés aux itinéraires soient affichés.

   ```html
   <router-outlet></router-outlet>
   ```

   La balise `<router-outlet>` sera remplacée dynamiquement par le composant associé à l'itinéraire correspondant lors de la navigation.

4. Naviguez entre les itinéraires : Vous pouvez utiliser le service `Router` d'Angular pour naviguer entre les itinéraires à partir de vos composants ou en utilisant des liens dans votre template. Par exemple, pour naviguer vers l'itinéraire `/about`, vous pouvez utiliser `router.navigate(['/about'])` :

   ```typescript
   import { Component } from '@angular/core';
   import { Router } from '@angular/router';

   @Component({
     // Configuration du composant
   })
   export class MonComposant {
     constructor(private router: Router) {}

     goToAboutPage() {
       this.router.navigate(['/about']);
     }
   }
   ```

   Dans cet exemple, nous avons injecté le service `Router` dans le composant et nous avons utilisé `this.router.navigate(['/about'])` pour naviguer vers l'itinéraire `/about`.

C'est ainsi que vous pouvez utiliser les itinéraires avec le routeur d'Angular pour définir les chemins et les correspondances d'URL dans votre application.

## Query Strings

Le routeur d'Angular prend en charge les query strings dans les URL. Les query strings sont utilisées pour transmettre des données supplémentaires dans l'URL, généralement sous la forme de paramètres clé-valeur.

Pour utiliser les query strings avec le routeur d'Angular, vous pouvez suivre ces étapes :

1. Définir les itinéraires avec des paramètres de query string : Lors de la définition des itinéraires, vous pouvez spécifier des paramètres de query string en utilisant la syntaxe `:nomParametre` dans le chemin de l'itinéraire.

   ```typescript
   import { NgModule } from '@angular/core';
   import { RouterModule } from '@angular/router';
   import { ProductListComponent } from './product-list.component';
   import { ProductDetailsComponent } from './product-details.component';

   @NgModule({
     imports: [
       RouterModule.forRoot([
         { path: 'products', component: ProductListComponent },
         { path: 'products/:id', component: ProductDetailsComponent }
       ])
     ],
     // ...
   })
   export class AppRoutingModule { }
   ```

   Dans cet exemple, nous avons défini deux itinéraires : un itinéraire `/products` qui affiche le composant `ProductListComponent`, et un itinéraire `/products/:id` qui affiche le composant `ProductDetailsComponent` avec un paramètre `id` spécifié dans la query string.

2. Accéder aux paramètres de query string : Dans votre composant, vous pouvez accéder aux paramètres de query string en injectant le service `ActivatedRoute` et en utilisant la propriété `snapshot` pour récupérer les paramètres.

   ```typescript
   import { Component, OnInit } from '@angular/core';
   import { ActivatedRoute } from '@angular/router';

   @Component({
     // Configuration du composant
   })
   export class ProductDetailsComponent implements OnInit {
     productId: string;

     constructor(private route: ActivatedRoute) {}

     ngOnInit() {
       this.productId = this.route.snapshot.params.id;
     }
   }
   ```

   Dans cet exemple, nous avons injecté le service `ActivatedRoute` dans le composant `ProductDetailsComponent`. Dans la méthode `ngOnInit()`, nous utilisons `this.route.snapshot.params.id` pour accéder au paramètre `id` de la query string.

3. Générer des liens avec des paramètres de query string : Dans votre template, vous pouvez utiliser le service `Router` pour générer des liens avec des paramètres de query string à l'aide de la méthode `routerLink`.

   ```html
   <a [routerLink]="['/products']" [queryParams]="{ category: 'electronics' }">Products</a>
   ```

   Dans cet exemple, nous utilisons `[routerLink]` pour générer un lien vers l'itinéraire `/products` avec un paramètre de query string `category` défini sur `electronics`.

L'utilisation des query strings avec le routeur d'Angular permet de transmettre des données supplémentaires via les URL, ce qui peut être utile pour des fonctionnalités telles que la filtration, la pagination, etc.

## AuthGuard 
L'utilisation d'un AuthGuard est une technique supplémentaire couramment utilisée dans Angular pour protéger les itinéraires en fonction de l'authentification de l'utilisateur. Un AuthGuard permet de déterminer si un utilisateur a accès à un itinéraire spécifique en fonction de son statut d'authentification.

Voici comment mettre en place un AuthGuard dans Angular :

1. Créez un AuthGuard : Créez une classe pour votre AuthGuard en implémentant l'interface `CanActivate` depuis `@angular/router`. Cette interface définit la méthode `canActivate()` qui sera appelée lorsqu'un itinéraire est activé.

   ```typescript
   import { Injectable } from '@angular/core';
   import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
   import { AuthService } from './auth.service';

   @Injectable({
     providedIn: 'root'
   })
   export class AuthGuard implements CanActivate {
     constructor(private authService: AuthService, private router: Router) {}

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
       if (this.authService.isAuthenticated()) {
         return true;
       } else {
         // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
         return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
       }
     }
   }
   ```

   Dans cet exemple, nous avons créé une classe `AuthGuard` qui implémente l'interface `CanActivate`. La méthode `canActivate()` est implémentée pour vérifier si l'utilisateur est authentifié à l'aide d'un service d'authentification (`AuthService` dans cet exemple). Si l'utilisateur est authentifié, la méthode retourne `true` pour permettre l'accès à l'itinéraire. Sinon, elle utilise `createUrlTree()` du service `Router` pour rediriger vers la page de connexion en stockant l'URL demandée (`state.url`) comme paramètre de requête (`returnUrl`).

2. Utilisez l'AuthGuard pour protéger les itinéraires : Dans votre module de routage (`app-routing.module.ts`), utilisez l'AuthGuard pour protéger les itinéraires auxquels vous souhaitez restreindre l'accès.

   ```typescript
   import { NgModule } from '@angular/core';
   import { RouterModule, Routes } from '@angular/router';
   import { HomeComponent } from './home.component';
   import { DashboardComponent } from './dashboard.component';
   import { AuthGuard } from './auth.guard';

   const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
     // Définissez d'autres itinéraires
   ];

   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRoutingModule { }
   ```

   Dans cet exemple, nous avons utilisé `canActivate: [AuthGuard]` pour appliquer l'AuthGuard à l'itinéraire `/dashboard`. Cela signifie que l'AuthGuard sera appelé avant d'autoriser l'accès à cet itinéraire. Si l'utilisateur n'est pas authentifié, il sera redirigé vers la page de connexion.

3. Fournissez le service d'authentification : Assurez-vous de fournir le service d'authentification (`AuthService` dans cet exemple) dans le module approprié pour qu'il soit disponible

## Traitement des erreurs de routage (Optionnel)

Pour traiter les erreurs de routage dans Angular, comme une page 404 (page non trouvée), vous pouvez utiliser la fonctionnalité de gestion des itinéraires par défaut du routeur. Voici comment procéder :

1. Définir un itinéraire par défaut : Dans votre module de routage (`app-routing.module.ts`), vous pouvez définir un itinéraire par défaut à la fin de la liste des itinéraires. Cet itinéraire sera utilisé lorsque aucun autre itinéraire ne correspond à l'URL demandée.

   ```typescript
   import { NgModule } from '@angular/core';
   import { RouterModule, Routes } from '@angular/router';
   import { PageNotFoundComponent } from './page-not-found.component';
   // Importez d'autres composants et définissez les itinéraires nécessaires

   const routes: Routes = [
     // Définissez vos itinéraires ici
     { path: '404', component: PageNotFoundComponent },
     { path: '**', redirectTo: '/404' }
   ];

   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRoutingModule { }
   ```

   Dans cet exemple, nous avons défini un itinéraire `/404` qui utilise le composant `PageNotFoundComponent` pour afficher la page d'erreur 404. L'itinéraire `**` est un raccourci qui correspond à toutes les URL qui n'ont pas été gérées par les autres itinéraires. Il redirige toutes les URL non trouvées vers `/404`.

2. Créer le composant de page d'erreur : Créez un composant `PageNotFoundComponent` qui sera chargé lorsque l'URL demandée ne correspond à aucun autre itinéraire.

   ```typescript
   import { Component } from '@angular/core';

   @Component({
     template: `
       <h1>Page not found</h1>
       <p>The requested page could not be found.</p>
     `
   })
   export class PageNotFoundComponent { }
   ```

   Dans cet exemple, nous avons créé un composant simple avec un message indiquant que la page demandée n'a pas été trouvée.

3. Gérer la redirection vers la page 404 : Dans votre composant racine (`app.component.ts`) ou dans tout autre composant principal, vous pouvez ajouter une logique pour rediriger vers la page 404 lorsque l'URL demandée ne correspond à aucun autre itinéraire. Cela peut être fait en utilisant le service `Router` et en vérifiant si la route actuelle est invalide.

   ```typescript
   import { Component, OnInit } from '@angular/core';
   import { Router, NavigationEnd } from '@angular/router';

   @Component({
     // Configuration du composant
   })
   export class AppComponent implements OnInit {
     constructor(private router: Router) {}

     ngOnInit() {
       this.router.events.subscribe(event => {
         if (event instanceof NavigationEnd && !this.router.url.startsWith('/404')) {
           // Redirige vers la page 404 lorsque l'URL demandée n'est pas valide
           this.router.navigate(['/404']);
         }
       });
     }
   }
   ```

   Dans cet exemple, nous avons utilisé `router.events` pour écouter les événements de navigation. Lorsque l'événement `NavigationEnd` est déclenché et que l'URL ne commence pas par `/404`, cela signifie que l'URL demandée ne correspond à aucun itinéraire défini. Dans ce cas, nous utilisons `this.router.navigate(['/404'])` pour rediriger vers la page 404.

Avec ces étapes, vous pouvez traiter les erreurs de routage dans Angular et rediriger les utilisateurs vers une page d'erreur personnalisée, telle que la page 404, lorsqu'une URL demandée ne correspond à aucun itinéraire défini.

