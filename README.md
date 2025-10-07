# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Commande Git Description
git config –global user.name <nom> Modifie le nom d’utilisateur dans votre config git
git config –global user.email <mail> Modifie l’adresse email dans votre configuration git
git init <le_nom_de_votre_repo_git> Initialise un nouveau repo git
git init --bare <nom_de_depot> Initialise un repo sans working tree
git clone <url_du_depot_git> Clone un repo git
git add <nom_du_ou_des_fichier(s)> Ajoute les fichiers spécifiés à l’index
git add _ Ajoute tous les fichiers à l’index
git add --patch _ Ouvre le mode interactif de git add
git commit Permet de commit des modifications
git commit -m <message_de_commit> Permet de commit en donnant un message de commit
git commit -a Add & commit tous les fichiers modifiés ou supprimés
git diff Montre les modifications dans l’index non commitées
git diff -–staged --staged est un synonyme de --cached
git diff <branche_1> <branche_2> Montre les différences entre deux branches
git reset <fichier> L’inverse de git add
git reset <hash_du_commit> Retourne au commit choisi
git reset –hard <hash_du_commit> Pareil mais supprime tous les changements
git status Affiche les statuts du working tree
git rm <fichier(s)> Supprime les fichiers du working tree et de l’index
git log Affiche l’historique des commits
git log –follow <nom_du_fichier> Affiche l’historique des changements du fichier
git show <hash_du_commit> Affiche les détails d’un commit
git tag <hash_du_commit> Donne un tag au commit
git branch Liste toutes les branches locales du repo actuel
git branch <branche> Crée une nouvelle branche
git branch -d <branche> Supprime une certaine branche
git checkout <branche> Permet de changer de branche
git checkout -b <branche> Crée une nouvelle branche et passe dessus
git merge <branche> Merge une branche à la branche actuelle
git remote add <nom> <lien_git> Ajoute un serveur git en lui donnant un nom remote
git push Push le commit sur git
git push <remote> <branche> Push le commit en spécifiant un repo et une branche
git push –all <remote> Push tous les commits de toutes branches sur remote
git pull <branche> Pull les derniers commits d’une branche
git stash Met de côté les modifications présentes
git stash save Pareil que git stash mais plus explicite
git stash pop Récupère les fichiers sauvés dans la stash
git stash list Liste les différentes stashes sauvées
git stash drop Supprime une stash préalablement sauvée
