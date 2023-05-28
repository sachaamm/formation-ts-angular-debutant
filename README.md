# formation-ts-angular-debutant

Formation Typescript et Angular Débutant planifiée sur 4 jours

## Description des Projets
- 1. **formation** : Projet Angular qui contient les supports de la formation ( Formation Typescript et Formation Angular ) 
- 2. **helloworld-ts** : Projet de decouverte du language Typescript
- 3. **MonPremierProjetAngular** : Projet Angular qui aborde les notions vues sur Angular
- 4. **authenticator-app** : Projet Typescript BackEnd qui simule un BackEnd afin d'explorer les notions d'appel Webservice avec Angular, et qui contient un systeme d'authentification Jwt rudimentaire

## Installation et lancement des Projets
### Contexte d'Installation
- NodeJS v18.16 / NPM v9.5.1 / Angular cli v16

### 1. formation
- Installation
``` bash
cd formation && npm install
```
- Lancement du projet
``` bash
ng serve
```

### 2. helloworld-ts
- Installation
``` bash
cd helloworld-ts && npm install
```
- Lancement du projet 
``` bash
npm run build
```

### 3. MonPremierProjetAngular
- Installation
``` bash
cd MonPremierProjetAngular && npm install
```

- Lancement du projet 
``` bash
ng serve
```

### 4. authenticator-app
- Installation du projet
``` bash
cd authenticator-app
```

``` bash
npm install
```

- Installation des cles avec GitBash
``` bash
openssl genrsa -out key.pem 2048
```

``` bash
openssl rsa -in key.pem -pubout > publickey.pub
```

- Lancement du projet
``` bash
npm run build
```

Lancement du projet en mode debug :
- Ouvrir le projet "authenticator-app" a part dans VsCode 
- Dans VsCode, allez dans le menu Debug
- Lancer la configuration intitulee "Build Project"

