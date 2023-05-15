## Builder son Application

La commande `ng build --prod` est utilisée pour construire une version de production optimisée de votre application Angular. Lorsque vous exécutez cette commande, Angular effectue plusieurs étapes pour générer les fichiers finaux prêts à être déployés sur un serveur :

1. Compilation du code TypeScript : Angular compile tous les fichiers TypeScript de votre application en code JavaScript. Il applique également des optimisations spécifiques à la production, telles que l'élimination des métadonnées et le regroupement des fichiers.

2. Minification : Les fichiers JavaScript générés sont minifiés, ce qui réduit leur taille en supprimant les espaces, les commentaires et en raccourcissant les noms de variables et de fonctions. Cela contribue à améliorer les performances de l'application en réduisant le temps de chargement des fichiers.

3. Optimisation des ressources : Angular optimise les ressources de l'application, notamment en utilisant des techniques de mise en cache, de compression et de chargement asynchrone des fichiers. Cela permet d'améliorer les performances de l'application en réduisant les temps de chargement et en optimisant l'utilisation du réseau.

4. Génération des fichiers finaux : Une fois toutes les étapes de construction terminées, Angular génère les fichiers finaux prêts à être déployés. Il s'agit généralement d'un ensemble de fichiers JavaScript, de feuilles de style CSS, d'images et d'autres ressources nécessaires à l'exécution de l'application.

L'utilisation de la commande `ng build --prod` est recommandée lorsque vous souhaitez déployer votre application Angular en production. Cela garantit que votre application est optimisée en termes de performances, de taille des fichiers et de sécurité. Les fichiers générés peuvent ensuite être déployés sur un serveur Web pour être accessibles aux utilisateurs finaux.

## Executer son site en production locale

Pour exécuter votre site en production à l'aide de `http-server` sur le port 4200, vous pouvez suivre les étapes suivantes :

1. Assurez-vous que vous avez `http-server` installé : Si vous n'avez pas encore installé `http-server`, vous pouvez l'installer en utilisant `npm`. Ouvrez une fenêtre de terminal et exécutez la commande suivante :

   ```
   npm install -g http-server
   ```

   Cela installera `http-server` globalement sur votre système.

2. Générez les fichiers de production : Avant d'exécuter votre site en production, assurez-vous d'avoir généré les fichiers de production de votre application Angular en utilisant la commande suivante :

   ```
   ng build --prod
   ```

   Cette commande génère les fichiers optimisés prêts pour la production dans le répertoire `dist/` de votre projet.

3. Accédez au répertoire de distribution : Dans votre terminal, accédez au répertoire de distribution de votre application en utilisant la commande suivante (si vous n'êtes pas déjà dans ce répertoire) :

   ```
   cd dist/
   ```

4. Exécutez `http-server` sur le port 4200 : Pour exécuter votre site en production, exécutez la commande suivante :

   ```
   http-server -p 4200
   ```

   Cela lancera le serveur `http-server` sur le port 4200, et votre site sera accessible localement à l'URL `http://localhost:4200`.

   Notez que si le port 4200 est déjà utilisé, vous pouvez spécifier un autre port disponible à la place, par exemple :

   ```
   http-server -p 5000
   ```

   Cela lancera le serveur `http-server` sur le port 5000.

Maintenant, vous pouvez ouvrir votre navigateur et accéder à l'URL `http://localhost:4200` (ou l'URL correspondant au port que vous avez spécifié) pour voir votre site exécuté en mode production à l'aide de `http-server`.