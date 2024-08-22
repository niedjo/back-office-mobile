
# Back-Office Mobile

Back-Office Mobile est la version mobile de l'interface back-office de mon portfolio web. Cette application permet de gérer mes projets, expériences, et les commentaires de mes clients, avec une charte graphique cohérente avec la version web, et une navigation fluide.

## Fonctionnalités

- **Gestion des projets** : Ajouter des projets directement depuis l'application.
- **Gestion des expériences** : Enregistrez vos nouvelles expériences professionnelles ou personnelles.
- **Gestion des commentaires** : Consultez et gérez les retours de vos clients sur leurs projets.

## Technologies utilisées

- **React Native** : Framework principal pour le développement de l'application mobile.
- **Expo** : Utilisé pour simplifier le développement, le déploiement, et les tests de l'application.
- **Expo Router** : Pour la gestion de la navigation au sein de l'application.
- **Jest** : Pour les tests unitaires et de composants.
- **NativeWind** : Utilisé pour le style de l'application. NativeWind combine la puissance de Tailwind CSS avec 

l'écosystème React Native, offrant une approche de style utilitaire pour une personnalisation rapide et efficace.

## Dépendances principales

- `@react-native-picker/picker` : Sélecteur natif pour Android et iOS.
- `expo-image-picker` : Pour sélectionner et gérer les images.
- `expo-document-picker` : Pour la sélection de documents.
- `react-navigation/native` : Pour la navigation fluide et intuitive au sein de l'application.
- `react-native-reanimated` : Pour des animations performantes.

## Scripts disponibles

- `start` : Démarre l'application en mode développement.
- `android` : Lance l'application sur un appareil ou émulateur Android.
- `ios` : Lance l'application sur un appareil ou émulateur iOS.
- `web` : Lance l'application sur le web.
- `test` : Lance les tests avec Jest.
- `lint` : Analyse le code pour détecter les problèmes de style et de syntaxe.

## Installation

Pour installer et exécuter cette application sur votre machine locale, suivez les étapes ci-dessous :

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/niedjo/back-office-mobile.git
   cd back-office-mobile
   ```

2. **Installez les dépendances** :
   Assurez-vous d'avoir Node.js installé sur votre machine. Ensuite, exécutez la commande suivante pour installer toutes les dépendances requises :
   ```bash
   npm install
   ```

3. **Démarrez l'application** :
   Après l'installation des dépendances, vous pouvez démarrer l'application avec la commande suivante :
   ```bash
   npx expo start
   ```
   Cela ouvrira Expo Developer Tools dans votre navigateur, où vous pouvez choisir d'exécuter l'application sur un appareil Android, iOS ou sur le web.

4. **Utilisation de l'API** :
   Cette application utilise une API hébergée sur [api.niedjo-kuitche.onrender.com](https://api.niedjo-kuitche.onrender.com) pour gérer les données des projets, expériences, et commentaires des clients. 

## Contributions

Les contributions sont les bienvenues ! N'hésitez pas à proposer des améliorations ou à signaler des bugs en ouvrant une issue ou en soumettant une pull request.

## Licence

Ce projet est sous licence ISC.