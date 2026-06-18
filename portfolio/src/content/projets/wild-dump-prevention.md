---
titre: "Wild Dump Prevention"
tagline: "Pipeline de détection de dépôts sauvages par vision par ordinateur."
featured: true
ordre: 3
stack: ["Flask", "PostgreSQL", "Pillow", "OpenCV", "YOLO"]
lienGithub: "https://github.com/benjidsv/wild-dump-prevention"
image: "/images/projets/wild-dump-prevention.jpg"
contexteGroupe: true
metriques:
  - { label: "Précision", valeur: "90%" }
  - { label: "Images", valeur: "3 000" }
---

## Contexte

Réalisé dans le cadre d'un mastercamp. La problématique : surveiller l'état de poubelles publiques par analyse d'images. Les utilisateurs téléversent des photos ou vidéos, le système applique des règles visuelles pour détecter les dépôts sauvages, et un tableau de bord présente statistiques et zones à risque.

## Ce qui a été construit

Un dashboard qui accepte des images et les analyse avec **YOLO**. Un système de géolocalisation extrait les métadonnées EXIF des photos pour afficher les zones à risque sur une carte interactive.
