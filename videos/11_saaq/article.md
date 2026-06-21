# Les fiascos informatiques de la SAAQ étaient évitables

> Quand bien même que ça coûterait 50 M$, 100 M$, 200 M$ de plus... Ça n’empêchera pas la Terre de tourner!
>
> Guy Morneau, président du conseil d'administration de la Société de l'assurance automobile du Québec (SAAQ) de 2013 à 2016 [1]

C'est plutôt une augmentation de **245 millions de dollars canadiens** qu'on observe entre le démarrage du programme informatique de la SAAQ en 2017 et la fin de son développement en 2023 [2.1], augmentation qu'on explique par une série de mauvaises décisions. Retraçons l'histoire du Carrefour des services d'affaires (CASA) de la SAAQ, un programme marqué par de multiples fiascos qui n'ont pas fini de nous servir d'apprentissage collectif.


## 1. La nécessité d'une transformation numérique

Dès 2009, la SAAQ considère la modernisation de ses systèmes informatiques comme une urgence [2.2]. Ses infrastructures, qui datent des années 1980 [2.4], sont conçues avec le langage de programmation COBOL et une base de données IDMS, des technologies qui remontent aux années 1960 [3] [4]. Elles sont de moins en moins utilisées dans l'industrie, ce qui complique le recrutement de professionnels qui les maîtrisent.

Un autre problème est la dégradation du code. Au fil des années, les **règles métier** de la SAAQ, c'est-à-dire les spécifications des opérations de la Société, ont été ajoutées de manière incrémentales. Par exemple, les règles pour délivrer un permis de conduire (âge, condition de santé, réussite d'un examen) ou immatriculer un véhicule (paiement des frais, infractions pénales, etc.) ont évolué avec le cadre législatif québécois pendant plusieurs décennies. Des milliers de règles métiers complexes ont été directement intégrées dans le code source des systèmes de la SAAQ sans qu'elles ne soient documentées [2.5].

Par ailleurs, le déficit de la SAAQ augmente de 35 million $ par année en moyenne depuis le début des années 2000. La transformation numérique est perçue comme un passage obligé pour réduire ses coûts d'opération et à desservir la population plus efficacement [2.3].

Ce n'est pas une situation inédite. Aux États-Unis, dans les années 1960, l'Internal Revenue Service (IRS) a ouvert la voie aux services automatisés de paiement d'impôts avec un système développé en COBOL et en assembleur, un langage plus ancien encore [5]. L'IRS entreprend un ambitieux programme de modernisation à partir de 2012 pour récrire ses systèmes en Java, un langage de programmation plus moderne, ce qui lui donne accès à un plus grand bassin de candidats et facilite l'ajout de fonctionnalités plus modernes. Après plus de dix ans d'effort et d'investissement, l'IRS arrive désormais à desservir plus efficacement les contribuables et à diminuer ses dépenses [6]. Mais ce ne sont pas toutes les organisations qui sont gérées comme l'IRS.


## 2. Faux départ

En 2011, la SAAQ adopte un **plan de pérennité** pour moderniser ses opérations, qui se déclinent en quatre domaines d'activité [2.6] :

1. L'accès au réseau routier (délivrance des permis de conduire, immatriculation, etc.)
2. L'indemnisation des victimes de la route (fond d'assurance des victimes)
3. Le contrôle routier (conduite de véhicules lourds notamment)
4. La promotion de la sécurité routière (campagnes publicitaires et autres initiatives)

Le plan de pérennité vise deux objectifs : (1) la **rénovation du système d'accès au réseau routier** et (2) la **conversion des données du fond d'assurance**. Les deux autres domaines d'activité ainsi que les opérations internes de la SAAQ comme les ressources humaines n'étaient pas considérés prioritaires à l'époque et donc non inclus dans le plan [2.7]. En somme, le plan de pérennité ne vise pas à changer en profondeur les opérations de la SAAQ, mais plutôt à rénover ses systèmes existants.

La SAAQ a de la difficulté à évaluer précisément ses besoins à l'avance à cause du manque de documentation de ses règles métier, ce qui complexifie l'élaboration de contrats à soumettre à des partenaires externes. Elle décide donc de développer le projet par elle-même, ce qu'elle appelle un « développement maison ». Suivant un rapport de PwC, la SAAQ décide de procéder en premier lieu à la conversion des données avant de modifier ses applications [2.8] et décompose la réalisation du plan en huit blocs qui se chevauchent dans le temps. Le plan de pérennité est finalement doté d'un budget de 364 millions $ et devait s'étaler de 2012 à 2022 [2.9].

// Exemple : Phoenix

Il s'avérera toutefois que la division du travail en blocs ralentit la réalisation du projet. Certaines parties, comme les données de l'accès au réseau routier, sont fortement interconnectées et ne peuvent pas être rénovées par blocs indépendants. Les équipes travaillent en silo, les retards s'accumulent, et le plan de pérennité est finalement abandonné en 2014 sous l'influence, notamment, d'un certain Karl Malenfant [2.10].


## 3. Une équipe digne d'un cauchemar

En 2013, la SAAQ cherche un nouveau vice-président aux technologies de l'information pour remplacer Michel Léveillé, parti à la retraite pour « aller jouer du piano chez lui » [7]. Une firme de chasseurs de têtes contacte Karl Malenfant, un gestionnaire en projets informatiques ayant travaillé 15 ans chez Hydro-Québec [8] où il y a dirigé un projet, le Système d'information client (SIC), dont les coûts étaient passés de 320 à 474 millions $. Ce projet a été effectué avec SAP, une multinationale allemande de logiciels de gestion [9].

Plusieurs personnes ayant côtoyé Malenfant durant sa carrière se joignent mystérieusement à la SAAQ peu après son arrivée. Par exemple :

- Madeleine Chagnon, alias Mado, ancienne employée d'Hydro-Québec et amie de Malenfant, est d'abord engagée avec des contrats de gré à gré [2.11], puis intègre la SAAQ plus définitivement en remportant en 2015 un appel d'offres de 1,2 million $. Les critères de l'appel d'offres sont très restrictifs et seule Chagnon se qualifie. [2.12]
- Louise Savoie, alias Loulou, ancienne employée d'Hydro-Québec et amie de Malenfant, arrive d'abord à la SAAQ à titre de consultante pour l'entreprise R3D [2.11], puis en remportant un appel d'offre de 1,2 millions $. Les critères de l'appel sont tout aussi restrictifs et Savoie est la seule à se qualifier [2.12].
- Maurice Guénard, ancien collègue de Malenfant chez Hydro-Québec, est le seul à se qualifier à un appel d'offres restrictif de 1,28 millions de $. Malenfant détient le CV de Guénard avant la rédaction de l'appel d'offres [2.13].
- Caroline Foldes-Busque, ancienne employée d'Hydro-Québec et conjointe de Maurice Guénard, est engagée à titre de directrice générale [2.13].
- Éric Beauregard, ancien employé d'Hydro-Québec qui a travaillé sur le SIC, est le seul à se qualifier à un appel d'offres restrictif de 1,2 millions $. Chagnon et Savoie, alors chez la SAAQ, aident Beauregard à rédiger sa soumission [2.13].
- Geneviève Tremblay, ancienne employée d'Hydro-Québec et conjointe de Éric Beauregard, est engagée comme consultante [2.13].

Hormis la consanguinité de l'équipe, on note plusieurs irrégularités. Par exemple, les contrats de gré à gré pour certains employés dépassaient 100k $, soit le seuil d'appel d'offres. La direction de la SAAQ acceptait néanmoins ces contrats [2.14]. Et lorsque le contrat de Louise Savoie prend fin en 2021, elle rejoint dès le lendemain l'entreprise LGS, qui travaille sur les projets informatiques de la SAAQ, même si cela contrevient aux règles encadrant les marchés publics [2.15].

// exemple :

L'arrivé des proches de Malenfant suscite peu de résistance. La Direction de la vérification interne et de l’évaluation des programmes de la SAAQ dénonce la situation à Yves Frenette, alors vice-président aux finances, ressources humaines et à la performance, en lui exposant un diagramme détaillant les liens entre Malenfant et les soumissionnaires [2.16]. Frenette communique ces informations à la présidente-directrice générale de la SAAQ, Nathalie Tremblay, qui approuve néanmoins les contrats en toute connaissance de cause [2.17]. À partir de là, ce que Malenfant appelle un « noyau dur » mènera la transformation numérique de la SAAQ.


## 4. Le PGI supplante le plan de pérennité

Malenfant ne démantèle pas immédiatement le plan de pérennité à son arrivé à la SAAQ, bien qu'il s'en montre très critique, mais un changement s'amorce au moment de réaliser, en 2013, le « bloc H » du plan, soit les services d'arrière-guichet nécessaires à l'immatriculation et aux permis de conduire. La SAAQ décide d'élargir la portée du bloc pour y inclure le système comptable de la Société, le système d'alors étant considéré désuet [2.18]. À ce moment se concrétise l'idée d'utiliser, au lieu du développement maison, un progiciel de gestion intégré (PGI) [2.19], c'est-à-dire un logiciel « qui permet de gérer les processus d'une entreprise en intégrant l'ensemble de ses fonctions » [10]. C'est une approche fondamentalement différente : au lieu de développer un système par elle-même à partir de zéro, la SAAQ achèterait un logiciel déjà conçu et l'adapterait à ses besoins.

En principe, un PGI est moins dispendieux parce qu'il évite de développer une solution entière. En pratique, les modifications à apporter à un PGI pour intégrer toutes les règles métier de l'organisation sont parfois si nombreuses qu'un développement sur mesure s'avère plus approprié, d'où l'importance d'effectuer une comparaison rigoureuse de toutes les approches possibles. Trois options s'offraient à la SAAQ :

1. Le développement maison
2. Approche du meilleur produit (combiner des PGI de plusieurs fournisseurs)
3. Suite PGI (acheter des PGI d'un seul fournisseur)

En 2014, la SAAQ décide de tenir des discussions sur l'achat de PGI avec une seule entreprise, SAP, par souci d'efficacité [2.20]. C'est une approche hasardeuse. Si la Société ne discute pas avec plusieurs fournisseurs, elle ne peut comparer leurs prix et sélectionner la meilleure solution sur le marché. La SAAQ en est consciente et prépare même des suggestions de réponses aux questions que les journalistes pourraient poser au sujet de sa relation avec SAP si celle-ci devenait publique. La haute direction de la SAAQ entérine néanmoins la décision de discuter uniquement avec SAP [2.21].

La SAAQ et SAP tiennent de nombreuses discussions en 2014, et, en janvier 2015, le comité de direction donne son accord à l'acquisition d'une suite PGI. Cette décision est prise sans analyse en profondeur des deux autres options [2.22] et sans vérification des informations fournies par SAP, lesquelles peuvent se montrer très inexactes. Par exemple, SAP prévoyait des coûts de 36 millions $ pour l'intégrateur du projet. En réalité, ces coûts s'élèveront à 360 millions $ [2.23].

Les membres issus de l'entourage de Malenfant agravent le problème. En situation de conflit d'intérêts, ils font tous partie de comités aviseurs chargés de conseiller la sélection de produits à acquérir. Plusieurs d'entre eux maîtrisent particulièrement bien les produits de SAP pour les avoir utilisés chez Hydro-Québec, et certains font même partie du comité de sélection chargé de prendre les décisions [2.24].

// exemple de collusion

L'acquisition de la suite PGI s'amorce donc sur de très mauvaises assises qui ne favorisent ni la compétition entre les fournisseurs, ni la transparence, ni la recherche objective de la meilleure solution. La SAAQ est néanmoins soumise à des lois et règlement qui visent à éviter ces écueils et garantir une saine gouvernance. À condition de les appliquer.


## 5. Ramollissement réglementaire

La SAAQ est une société d'État, une « personne morale administrée par un conseil d'administration dont le gouvernement nomme la majorité des membres » [11]. Le conseil d'administration fixe les orientations générales d'une société, nomme sa direction, et rend des comptes au ministre responsable, dans le cas de la SAAQ, au Ministère des Transports et de la Mobilité durable [2.25]. D'autres institutions contribuent à la gestion des sociétés d'État. Le Conseil du trésor procure un encadrement financier aux ministères et organismes [2.26]. Le Vérificateur général du Québec effectue des enquêtes se rapportant aux fonds publics [2.27]. Depuis 2022, le Ministère de la cybersécurité et du numérique coordonne les activités de l'État en informatique [2.28]. Plusieurs autres composantes de l'appareil étatique effectuent d'autres tâches.

Dès 2011, la SAAQ se plaint à plusieurs reprises d'un certain dédoublement réglementaire : en plus de rendre des comptes au Conseil du trésor pendant la réalisation de ses projets technologiques, elle devait aussi en rendre à son directeur principal de l'information (DPI), un rôle interne à la SAAQ [2.29]. Elle dépose donc, en 2014, une demande d'allègement réglementaire à laquelle acquiesce le gouvernement [2.30]. La SAAQ ne reçoit dès lors plus d'encadrement de l'État pour l'**autorisation** de ses projets, mais demeure soumise à des obligations pour la planification [2.31].

Cette autonomie additionnelle était censée donner plus d'agilité à la SAAQ dans la réalisation de ses mandats, mais l'allègement va dangereusement loin : en plus de dispenser la SAAQ d'informer le Conseil du trésor en cas de dépassement de coûts, il la libère de l'obligation d'informer son DPI. À la place, la SAAQ doit informer son « dirigeant sectoriel de l'information ». Or, à l'époque, ce rôle est assumé par le vice-président des technologie de l'information, Karl Malenfant. Autrement dit, le chargé de projet a l'obligation de dénoncer *à lui-même* les dépassements de coûts [2.32].

// Exemple

De 2014 à 2018, soit l'année où le gouvernement recadre ses mécanismes de surveillance des organismes public, la SAAQ opère donc en marge des du contrôle gouvernemental grâce à de multiples allègements. Et même après qu'ils aient pris fin, la SAAQ poursuivra une reddition de compte déficiente [2.33]. C'est dans ce contexte que commencera le programme CASA : les proches de Malenfant ont une influence disproportionnée, SAP est le seul fournisseur présent aux discussions, et la SAAQ est libérée d'importantes obligations de reddition de compte. La table est mise pour un fiasco.


## 6. Les dérapages commencent et n'arrêtent pas



La SAAQ fait quand à elle preuve de malhonnêteté : en avril 2015, alors qu'elle estime les coûts d'acquisition d'une suite PGI à 269 millions $, elle présente au Conseil du Trésor une estimation de 200 millions $ [X]. C'est un comportement récurrent de la SAAQ qui a été encouragé par nul autre que le gouvernement lui-même.

// Exemple de trop d'ambition


## 7. N'oubliez pas les tests!

// phoenix

## 8. La catastrophe

- [9] Apollo 13

## 9. La suite


# Références

- [1] Jean-François Thériault. "Enquête sur SAAQclic : « Quand bien même ça coûterait 100, 200 millions de plus… »" (13 mai 2025). Radio-Canada. https://ici.radio-canada.ca/nouvelle/2164960/saaqclic-commission-gallant-guy-morneau
- [2] Denis Gallant et al. « Commission d’enquête sur la gestion de la modernisation des systèmes informatiques de la Société de l’assurance automobile du Québec - Rapport et recommandations » (Février 2026). Commission d'enquête sur la gestion de la modernisation des systèmes informatiques de la Société de l'assurance automobile, Gouvernement du Québec. https://www.cesis.gouv.qc.ca/la-commission
  - [2.1] page 457, tableau 20
  - [2.2] page 118
  - [2.3] page 119
  - [2.4] page 118
  - [2.5] page 285
  - [2.6] page 48
  - [2.7] page 120
  - [2.8] page 123
  - [2.9] page 122
  - [2.10] page 124
  - [2.11] page 152
  - [2.12] page 154
  - [2.13] page 156
  - [2.14] page 157
  - [2.15] page 160
  - [2.16] page 161
  - [2.17] page 162
  - [2.18] page 133
  - [2.19] page 134
  - [2.20] page 137
  - [2.21] page 138
  - [2.22] page 149
  - [2.23] page 147
  - [2.24] page 193
  - [2.25] pages 36 et 37
  - [2.26] page 31
  - [2.26] page 169
  - [2.27] page 45
  - [2.28] page 33
  - [2.29] page 126
  - [2.30] page 127
  - [2.31] page 128
  - [2.32] page 130
  - [2.33] page 430
- [3] Chrystal R. China et Michael Goodwin. "Qu’est-ce que le COBOL ?" (8 mai 2025). IBM. https://www.ibm.com/fr-fr/think/topics/cobol
- [4] Andrew L. Russell. "Oral-History:Charles Bachman" (9 avril 2011). IEEE Oral History Network. https://ethw.org/Oral-History:Charles_Bachman
- [5] Andrew Leahey. "From COBOL And Assembly To Java—Modernizing The IRS" (6 septembre 2024). Forbes. https://www.forbes.com/sites/andrewleahey/2024/09/06/from-cobol-and-assembly-to-java-modernizing-the-irs/
- [6] Nancy Sieger. "Modernizing tax processing systems" (28 juillet 2022). IRS. https://www.irs.gov/about-irs/modernizing-tax-processing-systems
- [7] Témoignage d'Yves Frenette aux audiences de la CESIS (10 juin 2025), page 38. https://www.cesis.gouv.qc.ca/fileadmin/documents/24_2025-06-10_CESIS__JOUR_24_.pdf
- [8] https://www.linkedin.com/in/karl-malenfant-b-sc-iro-mba-asc-01967337/
- [9] Katia Gagnon, Ulysse Bergeron et Vincent Larin. "Karl Malenfant et SAAQclic - L’architecte du chaos" (14 septembre 2025). La Presse. https://www.lapresse.ca/actualites/karl-malenfant-et-saaqclic/l-architecte-du-chaos/2025-09-14/l-histoire-qui-se-repete.php
- [10]  Office québécois de la langue française. "progiciel de gestion intégré" (2020). https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8874062/progiciel-de-gestion-integre
- [11] Gouvernement du Québec. "Loi sur la gouvernance des sociétés d’État". RLRQ, c. G-1.02, art. 3 « société d’État ».