---
titre: "Blackjack Monte Carlo"
tagline: "Moteur de simulation Monte Carlo haute performance en Rust, comparant 6 systèmes de comptage de cartes."
featured: true
ordre: 2
stack: ["Rust", "rayon", "Parquet", "React", "Vite"]
lienGithub: "https://github.com/LeMages"
image: "/images/projets/projet_black_jack.png"
contexteGroupe: false
metriques:
  - { label: "Mains simulées", valeur: "50M" }
  - { label: "Zen Count — avantage", valeur: "+0.560%" }
  - { label: "EV", valeur: "+1.058 u./100" }
  - { label: "Seuil N₀", valeur: "341 264" }
---

## Contexte

Né d'une discussion avec un ami : peut-on être rentable au Blackjack ? J'ai construit un moteur de simulation et un dashboard pour le savoir.

## Ce qui a été construit

Un moteur qui simule 6 stratégies de comptage de cartes en parallèle. Le moteur tourne une fois et enregistre les résultats en **Parquet** (et JSON), qu'un dashboard **React/Vite** consulte ensuite pour l'analyse.

Les 6 systèmes comparés : Hi-Lo, KO, Hi-Opt II, Omega II, Wong Halves et **Zen Count**. La parallélisation via **rayon** permet de simuler ~10M de mains par système.

Le **Zen Count** est le plus performant des 6 avec un avantage joueur de +0.560%, un EV de +1.058 unité par 100 mains et un seuil de significativité statistique N₀ de 341 264 mains.
