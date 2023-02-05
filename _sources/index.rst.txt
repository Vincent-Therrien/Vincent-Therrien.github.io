.. Trouver des BGC avec l'apprentissage par renforcement documentation master file, created by
   sphinx-quickstart on Sun Jan 29 21:01:15 2023.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Identifier des gènes biosynthétiques avec l'apprentissage par renforcement
==========================================================================

.. bibliography:: references.bib
   :filter: False

Almeida *et al.* :cite:`almeida2022` présentent une technique
d'apprentissage par renforcement pour identifier des grappes de gènes
biosynthétiques chez les champignons. Cette page présente leurs découvertes
ainsi que des informations supplémentaires sur l'apprentissage par
renforcement.

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
bénéfiques pour des activités humaines, comme la fabrication de médicaments
:cite:`kwon2021`. Malheureusement, les métabolites secondaires sont diffciles
à identifier. Les voies métaboliques impliquées dans leur synthèse sont
encodées dans le génome de l'organisme sur des grappes (*clusters*) de gènes
contigus nommés **grappe de gènes biosynthétiques** (*Biosynthetic Gene Clusters*,
BGC). Étant donné leur grande diversité, les méthodes modernes ont du mal à
identifier efficacement les BCG :cite:`almeida2022`.

La technique de Almeida *et al.* est basé sur l'apprentissage par renforcement,
un type d'intelligence artificielle. La méthode surpasse les performances de
modèles développés par d'autres équipes.

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

L'algoritme Q-learning
``````````````````````

L'algorithme Q-learning est une manière d'entraîner un agent.

Soient :

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



L'apprentissage par renforcement pour identifier des BCG 
--------------------------------------------------------

- TOUCAN
- fungiSMASH
- DeepBGC

Ensemble de données pour identifier des BCG
-------------------------------------------

Résultats des tests

Bibliographie
=============

.. bibliography:: references.bib
