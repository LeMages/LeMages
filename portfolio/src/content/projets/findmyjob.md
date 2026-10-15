---
titre: "FindMyJob"
tagline: "Application desktop de suivi de candidatures avec génération de CV et de lettres de motivation par LLM."
categorie: "Application desktop · IA générative"
resume: "Application desktop open source pour gérer ses candidatures de bout en bout. Les offres sont ajoutées par simple lien, puis le CV et la lettre sont générés sur mesure à partir de templates Typst."
featured: true
ordre: 2
stack: ["Rust", "Tauri 2", "Vue 3", "SQLite (sqlx)", "Claude API", "Typst", "GitHub Actions", "semantic-release"]
lienGithub: "https://github.com/LeMages/FindMyJob"
image: "/images/projets/find_my_job.png"
imageAlt: "FindMyJob"
contexteGroupe: false
---

## Contexte

Outil personnel né de ma propre recherche de stage : centraliser les offres, les candidatures, les entretiens et les contacts, et produire des documents adaptés à chaque offre sans repartir de zéro.

## Ce qui a été construit

- Ajout d'une offre par lien : extraction des informations structurées (JSON-LD de la page, puis extraction par LLM en sortie structurée), avec une capture de page en secours pour les sites protégés.
- Génération du CV et de la lettre : le document de référence est converti une fois en template Typst paramétré, puis rempli de façon déterministe. Le LLM se contente de sélectionner les projets les plus pertinents et de rédiger la lettre, et le profil reste la seule source de vérité.
- Suivi des candidatures : timeline des statuts, planning des entretiens et carnet de contacts recruteurs relié aux candidatures.
- Application autonome : base SQLite locale et clé API stockée dans le trousseau du système.
- CI GitHub Actions (tests de bout en bout sur les fonctionnalités clés) et releases automatisées par semantic-release.

## Évolution de l'architecture

Une première version reposait sur un agent serveur (Rust/Axum, PostgreSQL, Docker) qui collectait et notait automatiquement des offres par LLM. Je l'ai abandonnée au profit d'une application desktop autonome, plus légère et plus fiable, où l'utilisateur ajoute lui-même les offres qui l'intéressent.
