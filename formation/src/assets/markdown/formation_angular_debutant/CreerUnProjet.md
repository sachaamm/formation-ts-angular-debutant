## Étape 1: Installation d'Angular CLI
Si vous n'avez pas encore installé Angular CLI, vous devez le faire en ouvrant une fenêtre de terminal et en exécutant la commande suivante :

```
npm install -g @angular/cli
```

Cela installera Angular CLI de manière globale sur votre système.

## Étape 2: Création d'un nouveau projet Angular
Pour créer un nouveau projet Angular, ouvrez une fenêtre de terminal et exécutez la commande suivante :

```
ng new nom-du-projet
```

Remplacez "nom-du-projet" par le nom que vous souhaitez donner à votre projet.

Angular CLI vous posera quelques questions pour personnaliser la configuration de votre projet, telles que le style CSS à utiliser (par exemple, CSS, SCSS, etc.). Vous pouvez répondre aux questions en fonction de vos préférences ou appuyer sur Entrée pour utiliser les valeurs par défaut.

La création du projet peut prendre quelques instants, car Angular CLI télécharge les dépendances nécessaires et génère la structure initiale du projet.

## Étape 3: Accéder au répertoire du projet
Après avoir créé le projet, accédez au répertoire nouvellement créé en utilisant la commande `cd` dans le terminal :

```
cd nom-du-projet
```

## Étape 4: Lancement de l'application
Enfin, vous pouvez lancer votre application Angular en exécutant la commande `ng serve`. Cela démarrera le serveur de développement et votre application sera accessible dans votre navigateur à l'adresse `http://localhost:4200`.

```
ng serve
```

Félicitations ! Vous avez maintenant créé et lancé votre projet Angular. Vous pouvez commencer à développer votre application en modifiant les fichiers générés dans le répertoire de votre projet.

# Structure d'un projet Angular 

La structure d'un projet Angular typique est composée de plusieurs répertoires et fichiers qui organisent les différentes parties de l'application. Voici une description générale de la structure d'un projet Angular :

1. **Le répertoire "src" :** C'est le répertoire principal de votre application. Il contient tous les fichiers source de votre application Angular, tels que les composants, les modèles, les styles, les services, etc. Voici quelques éléments clés à l'intérieur du répertoire "src" :

   - **Le répertoire "app" :** Ce répertoire contient les fichiers source spécifiques à votre application, tels que les composants, les modèles, les services, etc. C'est ici que vous développerez la majorité de votre code.

   - **Le fichier "index.html" :** C'est le fichier HTML principal de votre application, qui est chargé par le navigateur. Il contient généralement une balise `<app-root>` qui sert de point d'entrée pour votre application Angular.

   - **Le fichier "styles.css" :** Ce fichier contient les styles CSS globaux de votre application.

2. **Le répertoire "assets" :** Ce répertoire contient les ressources statiques de votre application, telles que les images, les fichiers JSON, les polices, etc. Ces fichiers seront copiés dans le dossier de production lors de la construction de l'application.

3. **Le fichier "angular.json" :** Ce fichier de configuration définit diverses options de construction et de configuration pour votre projet Angular, telles que les chemins des fichiers sources, les options de compilation, les dépendances, etc.

4. **Le fichier "tsconfig.json" :** Ce fichier définit la configuration du compilateur TypeScript pour votre projet, telle que la version de TypeScript à utiliser, les options de compilation, les chemins des fichiers sources, etc.

5. **Le fichier "package.json" :** Ce fichier contient les informations sur les dépendances du projet, les scripts de construction, les commandes de développement, les métadonnées de l'application, etc.

6. **Le répertoire "node_modules" :** Ce répertoire contient toutes les dépendances tierces installées pour votre projet, telles que les packages Angular, les bibliothèques externes, etc. Ces dépendances sont gérées par npm (Node Package Manager).

7. **Autres fichiers et répertoires :** Il peut y avoir d'autres fichiers et répertoires spécifiques à votre projet, tels que les fichiers de test, les configurations de déploiement, les fichiers de documentation, etc.

Il est important de noter que la structure d'un projet Angular peut varier en fonction des préférences de l'équipe de développement et des exigences spécifiques du projet. Cependant, la structure de base décrite ci-dessus est généralement recommandée et largement utilisée.

Cette structure organise les différents éléments de votre application de manière logique, ce qui facilite la navigation, la maintenance et le développement collaboratif. Elle permet également de séparer clairement les fichiers source de votre application des fichiers de configuration et des ressources statiques.

N'hésitez pas à consulter la documentation officielle d'Angular (https://angular.io/docs) pour en savoir plus sur la structure d'un projet Angular et les bonnes pratiques de développement.