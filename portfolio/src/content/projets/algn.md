---
titre: "ALGN — Autonomous Legal Graph Navigator"
tagline: "LLM qui navigue dans un code juridique article par article, avec journal d'audit."
featured: false
ordre: 5
stack: ["Python", "Ollama", "PostgreSQL", "pgvector", "LLM", "RAG"]
contexteGroupe: true
---

## Contexte

Projet d'école mené en partenariat entre Zizofa et l'EFREI (équipe de 6, avril–juillet 2026). L'objectif était de permettre à un LLM de répondre à des questions juridiques sur le CESEDA (Code de l'entrée et du séjour des étrangers et du droit d'asile) de manière traçable.

## Ce qui a été construit

- Navigation du code article par article, en suivant les renvois entre articles plutôt qu'en recherchant des passages isolés.
- Journal d'audit retraçant le chemin parcouru par le modèle pour chaque réponse.
- Stockage et recherche vectorielle avec PostgreSQL + pgvector, modèles exécutés en local via Ollama.
