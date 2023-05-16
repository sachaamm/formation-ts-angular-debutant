## Découpage de l'Application en Modules

Le découpage de l'application en modules est une pratique courante dans le développement d'applications Angular pour organiser et structurer le code de manière modulaire. Cela permet de séparer les fonctionnalités en modules distincts, ce qui facilite la maintenance, le partage de code et la gestion des dépendances.

Voici comment découper une application Angular en modules :

1. Créez un module racine : Commencez par créer un module racine qui sera le point d'entrée principal de votre application.

   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { AppRoutingModule } from './app-routing.module';
   import { AppComponent } from './app.component';

   @NgModule({
     declarations: [AppComponent],
     imports: [BrowserModule, AppRoutingModule],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

   Dans cet exemple, le module racine `AppModule` importe le module `BrowserModule` pour prendre en charge le rendu dans un navigateur, ainsi que le module `AppRoutingModule` qui contient la configuration des itinéraires. Le composant `AppComponent` est déclaré et utilisé comme composant racine de l'application.

2. Créez des modules fonctionnels : Ensuite, créez des modules fonctionnels pour regrouper les fonctionnalités spécifiques de votre application. Vous pouvez créer un module pour chaque domaine ou groupe de fonctionnalités liées.

   ```typescript
   import { NgModule } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { SharedModule } from '../shared/shared.module';
   import { ProductService } from './product.service';
   import { ProductListComponent } from './product-list.component';
   import { ProductDetailsComponent } from './product-details.component';

   @NgModule({
     declarations: [ProductListComponent, ProductDetailsComponent],
     imports: [CommonModule, SharedModule],
     providers: [ProductService]
   })
   export class ProductModule { }
   ```

   Dans cet exemple, nous avons créé un module `ProductModule` qui regroupe les fonctionnalités liées aux produits. Il importe le module `CommonModule` pour accéder aux fonctionnalités communes d'Angular, ainsi que le module `SharedModule` qui contient des fonctionnalités partagées. Nous déclarons les composants `ProductListComponent` et `ProductDetailsComponent` dans ce module, et nous fournissons le service `ProductService`.

3. Créez un module partagé : Si vous avez des fonctionnalités, des composants ou des services qui sont utilisés dans plusieurs modules, vous pouvez créer un module partagé pour les regrouper.

   ```typescript
   import { NgModule } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { FormsModule } from '@angular/forms';
   import { SharedModule } from '../shared/shared.module';
   import { HeaderComponent } from './header.component';
   import { FooterComponent } from './footer.component';

   @NgModule({
     declarations: [HeaderComponent, FooterComponent],
     imports: [CommonModule, FormsModule, SharedModule],
     exports: [HeaderComponent, FooterComponent]
   })
   export class CoreModule { }
   ```

   Dans cet exemple, nous avons créé un module `CoreModule` qui regroupe les composants `HeaderComponent` et `FooterComponent`, ainsi que les dépendances nécessaires comme `CommonModule` et `FormsModule`. Nous utilisons `exports` pour rendre ces composants disponibles pour les autres modules qui importent le module `CoreModule`.
4. Importez les modules dans le module racine : Dans le module racine `AppModule`, importez les modules fonctionnels que vous avez créés, ainsi que le module partagé.

   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { AppRoutingModule } from './app-routing.module';
   import { AppComponent } from './app.component';
   import { ProductModule } from './product/product.module';
   import { CoreModule } from './core/core.module';

   @NgModule({
     declarations: [AppComponent],
     imports: [BrowserModule, AppRoutingModule, ProductModule, CoreModule],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

   Dans cet exemple, nous importons le module `ProductModule` qui regroupe les fonctionnalités liées aux produits, ainsi que le module `CoreModule` qui regroupe les fonctionnalités partagées.

5. Utilisez les modules dans les composants : Dans vos composants, vous pouvez utiliser les fonctionnalités déclarées dans les modules en les important et en les utilisant.

   ```typescript
   import { Component } from '@angular/core';
   import { ProductService } from './product.service';

   @Component({
     // Configuration du composant
   })
   export class ProductListComponent {
     constructor(private productService: ProductService) {
       // Utilisation du service ProductService
     }
   }
   ```

   Dans cet exemple, nous importons le service `ProductService` du module `ProductModule` et l'utilisons dans le composant `ProductListComponent`.

En découpant votre application en modules, vous pouvez organiser votre code de manière modulaire, favoriser la réutilisabilité et améliorer la maintenabilité de votre application Angular. Cela vous permet également de gérer les dépendances entre les fonctionnalités et de faciliter le travail en équipe.


## Service Providers

En Angular, les fournisseurs (providers) sont utilisés pour enregistrer des services au sein du système d'injection de dépendances d'Angular. Les fournisseurs indiquent à Angular comment créer et fournir les instances des services dans l'application.

Un fournisseur peut être défini à différents niveaux de l'application, notamment au niveau du module racine (app.module.ts), au niveau d'un module spécifique ou au niveau d'un composant.

La syntaxe pour définir les fournisseurs dans un module est la suivante :

```typescript
import { NgModule } from '@angular/core';
import { MonService } from './mon-service.service';

@NgModule({
  // Déclarations, imports, etc. du module
  providers: [MonService]
})
export class MonModule { }
```

Dans cet exemple, nous avons importé le service `MonService` et nous l'avons ajouté à la liste des fournisseurs du module en utilisant la propriété `providers` de la configuration du module.

Lorsqu'un fournisseur est défini au niveau du module racine, il est disponible pour toute l'application. Il peut être injecté dans n'importe quel composant, service ou autre fournisseur de l'application.

Si vous souhaitez restreindre la portée d'un fournisseur à un module spécifique, vous pouvez le définir dans la propriété `providers` du module correspondant.

Par exemple :

```typescript
import { NgModule } from '@angular/core';
import { MonService } from './mon-service.service';

@NgModule({
  // Déclarations, imports, etc. du module
  providers: [MonService]
})
export class MonModule { }
```

Dans cet exemple, le service `MonService` est disponible uniquement pour les composants, services ou autres fournisseurs déclarés dans le module `MonModule`.

Il est également possible de définir des fournisseurs au niveau d'un composant spécifique. Cela permet de créer des instances spécifiques du service pour chaque instance du composant.

Voici un exemple de définition d'un fournisseur au niveau d'un composant :

```typescript
import { Component } from '@angular/core';
import { MonService } from './mon-service.service';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css'],
  providers: [MonService]
})
export class MonComposant { }
```

Dans cet exemple, nous avons ajouté le service `MonService` à la liste des fournisseurs du composant `MonComposant`. Cela signifie que chaque instance de `MonComposant` aura sa propre instance du service `MonService`.

L'utilisation des fournisseurs et la gestion de la portée des services sont des aspects importants lors de la conception de l'architecture d'une application Angular. Il est recommandé de comprendre comment les fournisseurs fonctionnent et d'organiser les services de manière appropriée pour garantir un système d'injection de dépendances cohérent et efficace.