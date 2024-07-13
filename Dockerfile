# Verwende ein offizielles Node.js-Image als Basis
FROM node:18-alpine

# Setze das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den Rest des Anwendungscodes
COPY . .

# Baue die Anwendung
RUN npm run build

# Exponiere den Port, auf dem die Anwendung läuft
EXPOSE 3000

# Definiere den Befehl zum Starten der Anwendung
CMD ["npm", "run", "start", "dev"]