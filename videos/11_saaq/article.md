# Les fiascos informatiques de la SAAQ étaient évitables

> Quand bien même que ça coûterait 50 M$, 100 M$, 200 M$ de plus... Ça n’empêchera pas la Terre de tourner!
>
> Guy Morneau, président du conseil d'administration de la Société de l'assurance automobile du Québec (SAAQ) de 2013 à 2016 [1]

C'est plutôt une augmentation de **245 millions de dollars canadiens** qu'on observe entre le démarrage du programme informatique de la SAAQ en 2017 et la fin de son développement en 2023 [2.1], augmentation qu'on explique par une série de mauvaises décisions. Retraçons l'histoire du Carrefour des services d'affaires (CASA) de la SAAQ, un programme marqué par de multiples fiascos qui n'ont pas fini de nous servir d'apprentissage collectif.


## 1. La nécessité d'une transformation numérique

Dès 2009, la SAAQ considère la modernisation de ses systèmes informatiques comme une urgence [2.2]. Son déficit augmente de 35 million $ par année en moyenne depuis le début des années 2000 et elle cherche à desservir la population plus efficacement [2.3].

Les opérations de la SAAQ sont soutenues par des infrastructures qui datent des années 1980 [2.4]. Elles sont conçues avec le langage de programmation COBOL et une base de données IDMS, des technologies qui remontent aux années 1960 [3] [4] et sont de moins en moins utilisées dans l'industrie, ce qui complique la recrutement de développeurs familiers avec elles. Un autre problème est la dégradation du code. Au fil des années, les **règles métier** de la SAAQ, c'est-à-dire les spécifications du fonctionnement de la Société, ont été ajoutées de manière incrémentales. Par exemple, les règles pour délivrer un permis de conduire (âge, condition de santé, réussite d'un examen) ou immatriculer un véhicule (paiement des frais, infractions pénales, etc.) ont évolué avec le cadre législatif québécois et les activité des organismes gouvernementaux pendant plusieurs décennies. Des milliers de règles métiers complexes ont été directement intégrées dans le code source des systèmes de la SAAQ sans qu'elles soient documentées [2.5].

Ce n'est pas une situation inédite. Aux États-Unis, dans les années 1960, l'Internal Revenue Service (IRS) a ouvert la voie aux services automatisés de paiement d'impôts avec un système développé en COBOL et en assembleur, un langage plus ancien encore [5]. L'IRS entreprend un ambitieux programme de modernisation à partir de 2012 pour récrire ses systèmes en Java, un langage de programmation plus moderne, ce qui lui donne accès à un plus grand bassin de candidats et facilite l'ajout de fonctionnalités plus modernes [6]. Mais ce ne sont pas toutes les organisations qui sont gérées comme l'IRS.


## 2. Mauvais départ

La SAAQ adopte donc en 2011 un **plan de pérennité** pour moderniser ses opérations, qui se déclinent en quatre domaines d'activité [2.6] :

1. L'accès au réseau routier (délivrance des permis de conduire, immatriculation, etc.)
2. L'indemnisation des victimes de la route (fond d'assurance des victimes)
3. Le contrôle routier (conduite de véhicules lourds notamment)
4. La promotion de la sécurité routière (campagnes publicitaires et autres initiatives)

Le plan de pérennité comporte deux objectifs : la rénovation du système d'accès au réseau routier et la conversion des données du fond d'assurance, les deux autres domaines d'activité n'étant pas considérés prioritaires [2.7]. Doté d'un budget de 364 millions $, le plan de pérennité devait être réalisé de 2012 à 2022 [2.8].


## 3. Une équipe digne d'un cauchemar


## 4. Quelques mots sur la réglementation


## 5. De multiples erreurs de gestions


## 6. Les monopoles et leurs conséquences

// règles métier, ex. IRS avec toutes les lois américaines

## 7. N'oubliez pas les tests!


## 8. La catastrophe


## 9. La suite


# Références

- [1] Jean-François Thériault. "Enquête sur SAAQclic : « Quand bien même ça coûterait 100, 200 millions de plus… »" (13 mai 2025). Radio-Canada. https://ici.radio-canada.ca/nouvelle/2164960/saaqclic-commission-gallant-guy-morneau
- [2] Denis Gallant et al. « Commission d’enquête sur la gestion de la modernisation des systèmes informatiques de la Société de l’assurance automobile du Québec - Rapport et recommandations » (Février 2026). Commission d'enquête sur la gestion de la modernisation des systèmes informatiques de la Société de l'assurance automobile, Gouvernement du Québec. https://www.cesis.gouv.qc.ca/la-commission
  - [2.1] page 457, tableau 20
  - [2.2] témoignage de Annie-Marie Croteau le 20 mai 2025, https://www.cesis.gouv.qc.ca/fileadmin/documents/10_2025-05-20_CESIS__JOUR_10_.pdf pages 23 et 24
  - [2.3] page 119, paragraphe 2
  - [2.4] page 118, troisième paragraphe
  - [2.5] page 285, section (ii)
  - [2.6] page 48, section A
  - [2.7] page 120, section B
  - [2.8] page 122
- [3] Chrystal R. China et Michael Goodwin. "Qu’est-ce que le COBOL ?" (8 mai 2025). IBM. https://www.ibm.com/fr-fr/think/topics/cobol
- [4] Andrew L. Russell. "Oral-History:Charles Bachman" (9 avril 2011). IEEE Oral History Network. https://ethw.org/Oral-History:Charles_Bachman
- [5] Andrew Leahey. "From COBOL And Assembly To Java—Modernizing The IRS" (6 septembre 2024). Forbes. https://www.forbes.com/sites/andrewleahey/2024/09/06/from-cobol-and-assembly-to-java-modernizing-the-irs/
- [6] Nancy Sieger. "Modernizing tax processing systems" (28 juillet 2022). IRS. https://www.irs.gov/about-irs/modernizing-tax-processing-systems
