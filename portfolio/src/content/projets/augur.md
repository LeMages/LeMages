---
titre: "Augur"
tagline: "Framework de prévision de séries temporelles (retail / demand forecasting), orchestration distribuée Python + Rust."
featured: true
ordre: 1
stack: ["Python", "Darts", "XGBoost", "PyTorch (TFT)", "Polars", "Rust", "Axum", "Tokio", "sqlx", "PostgreSQL", "Docker", "GitHub Actions"]
image: "/images/projets/augur.png"
contexteGroupe: false
metriques:
  - { label: "R²", valeur: "0.80" }
  - { label: "Directional Accuracy", valeur: "80%" }
  - { label: "SMAPE", valeur: "8%" }
  - { label: "Séries temporelles", valeur: "2000+" }
---

## Contexte

Projet entrepreneurial né de mon stage chez Need4Viz, où j'ai appris le forecasting et perçu son potentiel. J'y ai constaté que le code de forecasting est toujours quasiment le même d'un dataset à l'autre. Plutôt que de recoder à chaque nouveau dataset, j'ai créé un framework réutilisable.

## Ce qui a été construit

Un écosystème entier interconnecté autour de la prévision : framework, base de données, dashboard, orchestration et monitoring. Le pipeline couvre toutes les étapes de bout en bout — ingestion, entraînement, orchestration, monitoring.

Le cœur de prévision en Python s'appuie sur **Darts**, **XGBoost** et un **Temporal Fusion Transformer** (PyTorch), avec **Polars** pour le traitement de données. L'ensemble est conteneurisé via Docker multi-stage avec un pipeline CI/CD sur GitHub Actions.
