---
titre: "Augur"
tagline: "Framework de prévision de séries temporelles (retail / demand forecasting), orchestration distribuée Python + Rust."
categorie: "Time-series forecasting"
resume: "Framework de prévision de séries temporelles (retail / demand forecasting), avec orchestration distribuée Python + Rust : ingestion, entraînement, orchestration et monitoring."
featured: true
ordre: 1
stack: ["Python", "Rust", "PyTorch (TFT)", "Polars", "Darts", "XGBoost", "Axum", "Tokio", "sqlx", "PostgreSQL", "Docker", "GitHub Actions"]
imageAlt: "Dashboard de prévision Augur"
contexteGroupe: false
---

## Contexte

Projet personnel né de mon stage chez Need4Viz, où j'ai appris le forecasting. J'y ai constaté que le code de forecasting est quasiment le même d'un dataset à l'autre : plutôt que de le recoder à chaque nouveau dataset, j'ai construit un framework réutilisable.

## Ce qui a été construit

Un écosystème entier interconnecté autour de la prévision : framework, base de données, dashboard, orchestration et monitoring. Le pipeline couvre toutes les étapes de bout en bout — ingestion, entraînement, orchestration, monitoring.

Le cœur de prévision en Python s'appuie sur **Darts**, **XGBoost** et un **Temporal Fusion Transformer** (PyTorch), avec **Polars** pour le traitement de données. L'ensemble est conteneurisé via Docker multi-stage avec un pipeline CI/CD sur GitHub Actions.
