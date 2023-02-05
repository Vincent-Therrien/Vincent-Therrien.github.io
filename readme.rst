Comment générer la page
=======================

Créer un environnement virtuel Python, activer l'environnement, installer les
dépendances et compiler les fichiers sources.

Linux :

```
python3 -m venv pyvenv
source ./pyvenv/bin/activate
pip install -r requirements.txt
sphinx-build source .
```

Windows :

```
py -m venv pyvenv
.\pyvenv\Scripts\activate.bat
pip install -r requirements.txt
sphinx-build source .
```

Modifier la page
================

Éditer le fichier `source/index.rst` pour ajouter du contenu.
