# TP3 - Docker CI/CD

Ce TP a pour objectif de vous familiariser avec Docker et les concepts de CI. 

## Étape 1 : Correction des tests

Dans cette étape, vous devrez corriger les tests de l'application. Assurez-vous que tous les tests passent correctement avant de passer à l'étape suivante.
* test/integration/app-router.test.js
* test/unit/compute.test.js

## Étape 2 : Containeriser l'application

Dans cette étape, vous devrez containeriser l'application à l'aide de Docker. Compléter le fichier Dockerfile et configurez-le pour construire une image Docker de l'application et exécuter la commande "npm run test:all".

## Étape 3 : Configuration de l'action GitHub

Dans cette étape, vous devrez configurer une action GitHub pour automatiser le processus de CI/CD. Utilisez les workflows GitHub Actions pour déclencher automatiquement les tests à chaque modification du code source.

