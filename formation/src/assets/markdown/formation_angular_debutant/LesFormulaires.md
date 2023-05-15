## Formulaire réactif

Pour créer un formulaire réactif avec Angular, vous pouvez suivre ces étapes :

1. Importez les modules nécessaires : Dans votre module Angular, importez les modules `ReactiveFormsModule` et `FormsModule` depuis `@angular/forms`. Le module `ReactiveFormsModule` est utilisé pour les formulaires réactifs, tandis que le module `FormsModule` est utilisé pour les formulaires template-driven.

   ```typescript
   import { NgModule } from '@angular/core';
   import { ReactiveFormsModule, FormsModule } from '@angular/forms';

   @NgModule({
     imports: [
       ReactiveFormsModule,
       FormsModule
     ],
     // ...
   })
   export class MonModule { }
   ```

2. Créez un formulaire réactif : Dans votre composant, créez une instance de `FormGroup` en utilisant `FormBuilder` pour représenter votre formulaire réactif.

   ```typescript
   import { Component, OnInit } from '@angular/core';
   import { FormGroup, FormBuilder, Validators } from '@angular/forms';

   @Component({
     // Configuration du composant
   })
   export class MonComposant implements OnInit {
     myForm: FormGroup;

     constructor(private formBuilder: FormBuilder) {}

     ngOnInit() {
       this.myForm = this.formBuilder.group({
         // Définissez les champs du formulaire et leurs validateurs
         firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         email: ['', [Validators.required, Validators.email]],
         // ...
       });
     }

     onSubmit() {
       if (this.myForm.valid) {
         // Traitez les données soumises ici
         console.log(this.myForm.value);
       }
     }
   }
   ```

   Dans cet exemple, nous avons utilisé `FormBuilder` pour créer une instance de `FormGroup` appelée `myForm`. Nous avons défini les champs du formulaire, tels que `firstName`, `lastName`, `email`, avec leurs validateurs respectifs.

3. Liez les contrôles de formulaire dans le template : Dans le template HTML, liez les contrôles de formulaire aux éléments d'interface utilisateur appropriés en utilisant la directive `formControlName`.

   ```html
   <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
     <div>
       <label for="firstName">Prénom</label>
       <input type="text" id="firstName" formControlName="firstName">
     </div>
     <div>
       <label for="lastName">Nom de famille</label>
       <input type="text" id="lastName" formControlName="lastName">
     </div>
     <div>
       <label for="email">Email</label>
       <input type="email" id="email" formControlName="email">
     </div>
     <button type="submit" [disabled]="myForm.invalid">Envoyer</button>
   </form>
   ```

   Dans cet exemple, nous avons utilisé la directive `formGroup` pour lier le formulaire réactif `myForm` à l'élément `<form>`. Chaque champ de formulaire est lié à un élément d'interface utilisateur en utilisant la directive `formControlName`.

   Le bouton de soumission est désactivé si le formulaire est invalide en utilisant `[disabled]="myForm.invalid"`.

4. Traitez les données soumises : Dans la méthode `onSubmit()` du composant, vous pouvez traiter les données soumises du formulaire réactif.
   Notez que vous pouvez accéder aux valeurs du formulaire en utilisant `this.myForm.value`.

## IsPristine / IsValid

Les propriétés `isPristine` et `isValid` sont des propriétés fournies par les formulaires réactifs dans Angular. Voici leur signification :

1. `isPristine` (état de propreté) : La propriété `isPristine` indique si un formulaire ou un contrôle de formulaire a été modifié ou non depuis sa création. Elle renvoie `true` si le formulaire ou le contrôle n'a pas été modifié, et `false` s'il a été modifié.

   Par exemple, si vous souhaitez afficher un message d'erreur uniquement après que l'utilisateur a modifié une valeur, vous pouvez utiliser `isPristine` pour vérifier l'état de propreté du contrôle.

   ```html
   <div *ngIf="myForm.get('firstName').dirty && myForm.get('firstName').invalid">
     Prénom requis
   </div>
   ```

   Dans cet exemple, `myForm.get('firstName').dirty` vérifie si le champ `firstName` a été modifié (`dirty`), et `myForm.get('firstName').invalid` vérifie si le champ `firstName` est invalide.

2. `isValid` (état de validité) : La propriété `isValid` renvoie `true` si le formulaire ou le contrôle de formulaire est valide, c'est-à-dire que toutes les règles de validation sont respectées. Elle renvoie `false` si le formulaire ou le contrôle est invalide.

   Par exemple, si vous souhaitez désactiver le bouton de soumission tant que le formulaire n'est pas valide, vous pouvez utiliser `isValid` pour désactiver le bouton.

   ```html
   <button type="submit" [disabled]="!myForm.valid">Envoyer</button>
   ```

   Dans cet exemple, le bouton de soumission est désactivé (`disabled`) si le formulaire est invalide (`!myForm.valid`).

Il est important de noter que ces propriétés sont mises à jour automatiquement par Angular lorsqu'un formulaire ou un contrôle de formulaire est modifié ou validé. Elles sont utiles pour effectuer des validations conditionnelles, des affichages conditionnels ou pour gérer l'état d'activation des éléments d'interface utilisateur liés au formulaire.

Assurez-vous d'avoir importé les modules `ReactiveFormsModule` et `FormsModule` dans votre module Angular pour utiliser ces fonctionnalités.

## Validation du formulaire et Gestion des erreurs

La validation des formulaires est une fonctionnalité essentielle dans le développement des applications Angular. Elle permet de s'assurer que les données saisies par l'utilisateur sont valides avant de les soumettre au serveur. Angular offre plusieurs outils pour gérer la validation des formulaires et la gestion des erreurs. Voici comment procéder :

1. Définir les règles de validation : Dans le formulaire réactif, vous pouvez définir les règles de validation pour chaque champ en utilisant les validateurs disponibles dans `@angular/forms`. Par exemple, vous pouvez utiliser `Validators.required` pour rendre un champ obligatoire, `Validators.minLength` pour spécifier une longueur minimale, `Validators.pattern` pour définir un motif de validation personnalisé, etc. Voici un exemple de validation d'un champ email :

   ```typescript
   import { Component, OnInit } from '@angular/core';
   import { FormGroup, FormBuilder, Validators } from '@angular/forms';

   @Component({
     // Configuration du composant
   })
   export class MonComposant implements OnInit {
     myForm: FormGroup;

     constructor(private formBuilder: FormBuilder) {}

     ngOnInit() {
       this.myForm = this.formBuilder.group({
         email: ['', [Validators.required, Validators.email]],
         // ...
       });
     }

     onSubmit() {
       if (this.myForm.valid) {
         // Traitez les données soumises ici
         console.log(this.myForm.value);
       } else {
         // Afficher des messages d'erreur ou prendre d'autres mesures
         console.log('Formulaire invalide');
       }
     }
   }
   ```

2. Afficher les messages d'erreur : Dans le template HTML, vous pouvez utiliser les directives `ngIf` pour afficher les messages d'erreur conditionnellement en fonction de l'état de validation des champs. Par exemple, vous pouvez afficher un message d'erreur si le champ est invalide et a été touché par l'utilisateur :

   ```html
   <div>
     <label for="email">Email</label>
     <input type="email" id="email" formControlName="email">
     <div *ngIf="myForm.get('email').invalid && myForm.get('email').touched">
       <div *ngIf="myForm.get('email').errors.required">Le champ email est obligatoire.</div>
       <div *ngIf="myForm.get('email').errors.email">Veuillez saisir une adresse email valide.</div>
     </div>
   </div>
   ```

   Dans cet exemple, nous utilisons `myForm.get('email').invalid` pour vérifier si le champ `email` est invalide, et `myForm.get('email').touched` pour vérifier si le champ a été touché par l'utilisateur. En fonction de ces conditions, nous affichons les messages d'erreur appropriés.

   Notez que `myForm.get('email').errors` renvoie un objet contenant les erreurs de validation spécifiques pour le champ `email`. Vous pouvez utiliser ces erreurs pour personnaliser les messages d'erreur en fonction des règles de validation définies.

3. Personnaliser les styles visuels : Vous pouvez également ajouter des classes CSS conditionnellement pour styliser les champs en fonction de leur état de validation. Par exemple, vous pouvez ajouter une classe `is-invalid` lorsque le champ est invalide et a été touché :

   ```html
   <div>
     <label for="email">Email</label>
     <input type="email" id="email" formControlName="email" [class.is-invalid]="myForm.get('email').invalid && myForm.get('email').touched">
     <div *ngIf="myForm.get('email').invalid && myForm.get('email').touched">
       <div *ngIf="myForm.get('email').errors.required">Le champ email est obligatoire.</div>
       <div *ngIf="myForm.get('email').errors.email">Veuillez saisir une adresse email valide.</div>
      </div>
   </div>
   ```

   Dans cet exemple, nous utilisons `[class.is-invalid]` pour ajouter la classe `is-invalid` lorsque l'expression `myForm.get('email').invalid && myForm.get('email').touched` est évaluée à `true`. Cela permet d'appliquer des styles visuels personnalisés aux champs invalides.

    En utilisant ces techniques, vous pouvez gérer la validation des formulaires dans Angular et fournir des messages d'erreur pertinents à l'utilisateur en fonction de l'état de validation des champs. Assurez-vous d'avoir importé les modules `ReactiveFormsModule` et `FormsModule` dans votre module Angular pour utiliser les fonctionnalités de validation des formulaires.