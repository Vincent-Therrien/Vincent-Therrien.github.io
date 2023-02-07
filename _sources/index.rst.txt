.. Trouver des BGC avec l'apprentissage par renforcement documentation master file, created by
   sphinx-quickstart on Sun Jan 29 21:01:15 2023.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Identifier des gènes biosynthétiques avec l'apprentissage par renforcement
==========================================================================

.. bibliography:: references.bib
   :filter: False

On découvre avec le génome de plusieurs organismes des composés chimiques
utiles pour des activités humaines. Parmi ceux-ci, les métabolites secondaires
présents, entre autres, chez les plantes et les champignons, ont des
applications variées allant de la médecine à l'agriculture :cite:`kwon2021`.
Des équipes de recherche s'efforcent de trouver des manières d'identifier
davantage de tels composés en explorant différentes approches. Cette page
présente un survol de techniques utilisées dans ce but.

.. contents:: Contenu
   :depth: 2
   :local:
   :backlinks: none

Mise en contexte
----------------

Les métabolites secondaires sont des molécules qui n'appartiennent pas au
métabolisme primaire :cite:`kwon2021`. En plus d'être présents chez une variété
d'organismes, comme les plantes, les champignons ou les bactéries, les
métabolites secondaires remplissent des rôles très diversifiés. Ils peuvent
entre autres, défendre un organisme, lui permettre de communiquer avec ses
semblables et attirer des espèces favorables à sa survie.

Dans l'industrie pharmaceutique et en agriculture, les métabolites secondaires
ont une grande importance puisqu'ils permettent de découvrir des molécules
bénéfiques dans plusieurs domaines, comme la fabrication de médicaments,
de pesticides ou de cosmétiques :cite:`kwon2021`. Malheureusement, les
métabolites secondaires sont difficiles à identifier. Les voies métaboliques
impliquées dans leur synthèse sont encodées dans le génome de l'organisme sur
des grappes (*clusters*) de gènes contigus nommés **grappe de gènes
biosynthétiques** (*Biosynthetic Gene Clusters*, BGC). Étant donné leur grande
diversité, les méthodes modernes ont du mal à identifier efficacement les
BCG :cite:`almeida2022`.

Almeida *et al.* :cite:`almeida2022` présentent une technique de détection des
BCG basée sur l'apprentissage par renforcement, un type d'intelligence
artificielle. Cette page présente le fonctionnement de leur méthode ainsi que
des comparaisons avec d'autres approches.

Survol de l'apprentissage par renforcement
------------------------------------------

L'apprentissage par renforcement consiste à entraîner un modèle en simulant des
interaction avec un environnement. En expérimentant différentes actions dans un
milieu virtuel, un *agent* apprend quelles *actions* poser pour atteindre un
*état* voulu :cite:`chaudhuri2019`. Les *récompenses* sont des valeurs qui
guident l'agent dans son entraînement quand il se rapproche de l'état voulu.

Par exemple, si l'on utilise l'apprentissage par renforcement pour apprendre à
un robot comment marcher en ligne droite, on peut considérer que :

- **L'agent** est le robot.
- **L'environnement** est le milieu dans lequel il se déplace.
- Les **états** représentent toutes les configurations possibles de robot et sa
  position dans l'espace.
- Les **actions** de l'agent consistent à bouger ses articulations.
- Les **récompenses** mesurent comment l'agent accomplit sa tâches. Par
  exemple, avancer pourrait entraîner une récompense positive tandis que tomber
  ou reculer entraînerait une récompense négative.

L'algorithme Q-learning
```````````````````````

L'algorithme Q-learning est une manière d'entraîner un agent. Soient :

- Un ensemble d'états :math:`S` composé de :math:`n` états :math:`s`.
- Un ensemble d'actions :math:`A` composé de :math:`m` actions :math:`a`.

Un agent dans un état :math:`s_t` peut poser une action :math:`a_t` pour passer
à un état :math:`s_{t+1}`. À chaque transition d'état, l'agent observe une
récompense :math:`r_t`.

Le but du Q-learning est d'apprendre quelle est la meilleure action à
sélectionner lorsque l'agent est dans un état donné. Pour ce faire, on cherche
à élaborer une **fonction de qualité** :math:`Q` qui calcule la qualité
(c'est-à-dire, la tendance à produire des récompenses positives) de chaque
combinaison état-action. L'équation :eq:`qlearning` présente l'algorithme
utilisé pour calculer la fonction de qualité :

.. math:: Q_{t+1}(s_t, a_t) \leftarrow Q_t(s_t, a_t) + \alpha \{ r_t + \gamma \cdot argmax[Q(s_{t+1}, a)] - Q(s_t, a_t) \}
   :label: qlearning

où :

- :math:`\alpha` est le facteur d'apprentissage. Plus
  :math:`\alpha` est élevé, plus l'algorithme privilégie les informations
  récentes par rapport aux informations anciennes. On doit observer
  :math:`0 < \alpha < 1`.
- :math:`\gamma` est le facteur d'actualisation. Plus :math:`\gamma` est élevé,
  plus l'algorithme privilégie les récompenses à long terme par rapport aux
  récompenses à court terme. On doit observer
  :math:`0 < \gamma < 1`.

Exemple d'utilisation du Q-learning
```````````````````````````````````

Cette section présente une application du Q-learning pour résoudre un problème
simple disponible dans la bibliothèque ``Gymnasium``, un projet destiné à
étudier l'apprentissage par renforcement :cite:`gymnasium2023`.

L'environnement ``FrozenLake-v1`` de la bibliothèque permet de tester des
algorithmes. Il est composé d'une grille de seize cellules. L'agent doit se
déplacer d'une position de départ vers une cible en évitant des obstacles.
Atteindre la cible entraîne une récompense de ``1,0``.

Au début de l'entraînement, l'agent ne sait pas quelles actions sélectionner
pour atteindre l'objectif. Il pose des actions aléatoires qui ne lui permettent
pas d'obtenir des valeurs de récompense, comme le montre l'animation suivante :

.. figure:: figures/frozen_lake_aleatoire.gif
   
   Exploration aléatoire de l'environnement

Pour améliorer les performances, on calcule la fonction de qualité en suivant
l'algorithme Q-learning. Le code Python suivant montre comment appliquer la
fonction :eq:`qlearning` en interagissant avec l'environnement.

.. code-block:: python
   :linenos:

   ALPHA = 0.5 # Facteur d'apprentissage (vitesse de changement de la valeur Q)
   GAMMA = 0.9 # Facteur d'actualisation (importance des récompenses futures)
   N_EPISODES = 1000 # Nombre d'essais

   # Créer l'environnement d'apprentissage et la table de qualité.
   env = gym.make("FrozenLake-v1", is_slippery=False)
   qtable = np.zeros((env.observation_space.n, env.action_space.n))

   # Entraîner le modèle en réinitialisant l'environnement à chaque épisode.
   for _ in range(N_EPISODES):
       state = env.reset()[0]
       while True:
           # Sélectionner l'action avec la meilleure qualité. Si aucune action
           # n'a été évaluée pour l'état, choisir une action aléatoirement.
           if np.max(qtable[state]) > 0:
               action = np.argmax(qtable[state])
           else:
               action = env.action_space.sample()
           # Interagir avec l'environnement et mesurer la réponse.
           new_state, reward, terminated, truncated, info = env.step(action)
           if truncated or terminated:
               break
           # Actualiser la table.
           q_0 = qtable[state, action]
           q_1 = np.max(qtable[new_state])
           qtable[state, action] += ALPHA * (reward + GAMMA*q_1 - q_0)
           state = new_state
   env.close()

On obtient la table de qualité suivante :

+------------------+-----------------+----------------------------------------------------------------------------------+
| Table de qualité |                 | Action (direction vers laquelle se déplacer)                                     |
+==================+=================+====================+====================+=====================+==================+
|                  |                 | :math:`\leftarrow` | :math:`\downarrow` | :math:`\rightarrow` | :math:`\uparrow` |
|                  |                 |                    |                    |                     |                  |
+------------------+-----------------+--------------------+--------------------+---------------------+------------------+
| **État (position | :math:`(0, 0)`  | :math:`0,0`        |  :math:`0,59`      | :math:`0,0`         | :math:`0,0`      |
| de l'agent)**    +-----------------+--------------------+--------------------+---------------------+------------------+
|                  | :math:`(0, 1)`  | :math:`0,0`        |  :math:`0,0`       | :math:`0,0`         | :math:`0,0`      |
|                  +-----------------+--------------------+--------------------+---------------------+------------------+
|                  | :math:`...`     |                    |                    |                     |                  |
|                  +-----------------+--------------------+--------------------+---------------------+------------------+
|                  | :math:`(3, 2)`  | :math:`0,0`        |  :math:`0,0`       | :math:`1,0`         | :math:`0,0`      |
|                  +-----------------+--------------------+--------------------+---------------------+------------------+
|                  | :math:`(3, 3)`  | :math:`0,0`        |   :math:`0,0`      | :math:`0,0`         | :math:`0,0`      |
+------------------+-----------------+--------------------+--------------------+---------------------+------------------+

Par exemple, on voit que l'algorithme a déterminé que la meilleure action à
sélectionner lorsque l'agent se trouve dans la cellule :math:`(0, 0)` consiste
se diriger vers le bas (:math:`\downarrow`). En suivant ce modèle, l'agent
peut alors se déplacer dans l'environnement sans rencontrer d'obstacle pour
atteindre son but.

.. figure:: figures/frozen_lake_qlearning.gif
   
   Déplacement dans l'environnement après apprentissage par Q-learning

L'apprentissage par renforcement pour identifier des BCG 
--------------------------------------------------------

La section suivante présente comment appliquer l'algorithme Q-learning à la
découverte de BCG chez les champignons.

Présentation de la problématique
````````````````````````````````

Ensembles de données
````````````````````

Identification des BCG
``````````````````````

Autres approches possibles
``````````````````````````


Bibliographie
=============

.. bibliography:: references.bib
