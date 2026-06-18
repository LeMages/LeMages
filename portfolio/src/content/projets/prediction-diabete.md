---
titre: "Prédiction du Diabète"
tagline: "Modèle d'ensemble et explicabilité SHAP pour la prédiction du diabète."
featured: false
ordre: 4
stack: ["Python", "Machine Learning", "Flask", "Docker", "SHAP"]
lienGithub: "https://github.com/benjidsv/mldiabetesprediction"
image: "/images/projets/diabetes-prediction.png"
contexteGroupe: true
metriques:
  - { label: "Dataset", valeur: "BRFSS 2015" }
  - { label: "Accuracy", valeur: "0.70" }
---

## Contexte

Projet de machine learning utilisant le dataset **BRFSS 2015** pour prédire si une personne est atteinte de diabète. Combine Random Forest et XGBoost dans un modèle d'ensemble, servi par une API Flask containerisée avec Docker, avec ingénierie de variables et explicabilité SHAP.

## Ce qui a été construit

Une pipeline d'extraction et d'entraînement, et un dashboard pour visualiser les résultats et tester un cas individuel — pourcentage de risque de diabète pour une personne donnée, avec les explications SHAP des variables les plus influentes.
