# Utiliser l'image officielle Node.js comme image de base
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier tout le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Exposer le port que l'application utilise (si applicable)
EXPOSE 3000

# Définir la commande pour exécuter les tests
CMD ["npm", "run", "test:all"]
