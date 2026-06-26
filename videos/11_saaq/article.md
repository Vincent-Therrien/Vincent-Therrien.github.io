# Les fiascos informatiques de la SAAQ étaient évitables

> Quand bien même que ça coûterait 50 M$, 100 M$, 200 M$ de plus... Ça n’empêchera pas la Terre de tourner!
>
> Guy Morneau, président du conseil d'administration de la Société de l'assurance automobile du Québec (SAAQ) de 2013 à 2016 [1]

C'est plutôt une augmentation de **245 millions de dollars canadiens** qu'on observe entre le démarrage du programme informatique de la SAAQ en 2017 et la fin de son développement en 2023 [2.1], augmentation qu'on explique par une série de mauvaises décisions. Retraçons l'histoire du Carrefour des services d'affaires (CASA) de la SAAQ, un programme marqué par de multiples fiascos qui n'ont pas fini de nous servir d'apprentissage collectif.


## 1. La nécessité d'une transformation numérique

Dès 2009, la SAAQ considère la modernisation de ses systèmes informatiques comme une urgence [2.2]. Ses infrastructures, qui datent des années 1980 [2.4], sont conçues avec le langage de programmation COBOL et une base de données IDMS, des technologies qui remontent aux années 1960 [3] [4]. Elles sont de moins en moins utilisées dans l'industrie, ce qui complique le recrutement de professionnels qui les maîtrisent.

Un autre problème est la dégradation du code. Au fil des années, les **règles métier** de la SAAQ, c'est-à-dire les spécifications des opérations de la Société, ont été ajoutées de manière incrémentales. Par exemple, les règles pour délivrer un permis de conduire (âge, condition de santé, réussite d'un examen) ou immatriculer un véhicule (paiement des frais, infractions pénales, etc.) ont évolué avec le cadre législatif québécois pendant plusieurs décennies. Des milliers de règles métiers complexes ont été directement intégrées dans le code source des systèmes de la SAAQ sans qu'elles ne soient documentées [2.5]. Par ailleurs, le déficit de la SAAQ augmente de 35 million $ par année en moyenne depuis le début des années 2000. La transformation numérique est perçue comme un passage obligé pour réduire ses coûts d'opération et à desservir la population plus efficacement [2.3].

> Exemple : IRS
>
> Le cas de la SAAQ n'était pas une situation inédite. Aux États-Unis, dans les années 1960, l'Internal Revenue Service (IRS) a ouvert la voie aux services automatisés de paiement d'impôts avec un système développé en COBOL et aussi en assembleur, un langage de programmation plus ancien encore [5]. L'IRS entreprend un ambitieux programme de modernisation à partir de 2012 pour récrire ses systèmes en Java, un langage plus moderne, ce qui lui donne accès à un plus grand bassin de candidats et facilite l'ajout de fonctionnalités plus modernes. Après plus de dix ans d'effort et d'investissement, l'IRS arrive désormais à desservir plus efficacement les contribuables et à diminuer ses dépenses [6].


## 2. Faux départ

En 2011, la SAAQ adopte un **plan de pérennité** pour moderniser ses opérations. Celles-ci se déclinent en quatre domaines d'activité [2.6] :

1. L'accès au réseau routier (délivrance des permis de conduire, immatriculation, etc.)
2. L'indemnisation des victimes de la route (fond d'assurance des victimes)
3. Le contrôle routier (conduite de véhicules lourds notamment)
4. La promotion de la sécurité routière (campagnes publicitaires et autres initiatives)

Le plan de pérennité vise deux objectifs : (1) la **rénovation du système d'accès au réseau routier** et (2) la **conversion des données du fond d'assurance**. Les deux autres domaines d'activité ainsi que les opérations internes de la SAAQ (comme les ressources humaines) n'étaient pas considérés prioritaires à l'époque et donc non inclus dans le plan [2.7]. En somme, le plan de pérennité ne vise pas à changer en profondeur les opérations de la SAAQ, mais plutôt à rénover ses systèmes existants.

La SAAQ a de la difficulté à évaluer précisément ses besoins à l'avance à cause du manque de documentation de ses règles métier, ce qui complexifie l'élaboration de contrats à soumettre à des partenaires externes. Elle décide donc de développer le projet par elle-même, ce qu'elle appelle un « développement maison ». Suivant un rapport de PwC, la SAAQ décide de procéder en premier lieu à la conversion des données avant de modifier ses applications [2.8] et décompose la réalisation du plan en huit blocs qui se chevauchent dans le temps. Le plan de pérennité est finalement doté d'un budget de 364 millions $ et devait s'étaler de 2012 à 2022 [2.9].

> Exemple : Phoenix
>
>

Il s'avérera toutefois que la division du travail en blocs ralentit la réalisation du projet. Certaines parties, comme les données de l'accès au réseau routier, sont fortement interconnectées et ne peuvent pas être rénovées par blocs indépendants. Les équipes travaillent en silo, les retards s'accumulent, et le plan de pérennité subira une transformation radicale en 2014 sous l'influence, notamment, d'un certain Karl Malenfant [2.10].


## 3. Une équipe digne d'un cauchemar

En 2013, la SAAQ cherche un nouveau vice-président aux technologies de l'information pour remplacer Michel Léveillé, parti à la retraite pour « aller jouer du piano chez lui » [7]. Une firme de chasseurs de têtes contacte Karl Malenfant, un gestionnaire en projets informatiques ayant travaillé 15 ans chez Hydro-Québec [8] où il y a dirigé un programme, le Système d'information client (SIC), dont les coûts étaient passés de 320 à 474 millions $. Ce programme a été effectué avec SAP, une multinationale allemande de logiciels de gestion [9].

Plusieurs personnes ayant côtoyé Malenfant durant sa carrière se joignent mystérieusement à la SAAQ peu après son arrivée. Par exemple :

- Madeleine Chagnon, alias Mado, ancienne employée d'Hydro-Québec et amie de Malenfant, est d'abord engagée avec des contrats de gré à gré [2.11], puis intègre la SAAQ plus définitivement en remportant en 2015 un appel d'offres de 1,2 million $. Les critères de l'appel d'offres sont très restrictifs et seule Chagnon se qualifie. [2.12]
- Louise Savoie, alias Loulou, ancienne employée d'Hydro-Québec et amie de Malenfant, arrive d'abord à la SAAQ à titre de consultante pour l'entreprise R3D [2.11], puis en remportant un appel d'offre de 1,2 millions $. Les critères de l'appel sont tout aussi restrictifs et Savoie est la seule à se qualifier [2.12].
- Maurice Guénard, ancien collègue de Malenfant chez Hydro-Québec, est le seul à se qualifier à un appel d'offres restrictif de 1,28 millions de $. Malenfant détient le CV de Guénard avant la rédaction de l'appel d'offres [2.13].
- Caroline Foldes-Busque, ancienne employée d'Hydro-Québec et conjointe de Maurice Guénard, est engagée à titre de directrice générale [2.13].
- Éric Beauregard, ancien employé d'Hydro-Québec qui a travaillé sur le SIC, est le seul à se qualifier à un appel d'offres restrictif de 1,2 millions $. Chagnon et Savoie, alors chez la SAAQ, aident Beauregard à rédiger sa soumission [2.13].
- Geneviève Tremblay, ancienne employée d'Hydro-Québec et conjointe de Éric Beauregard, est engagée comme consultante [2.13].

On note, hormis la consanguinité de l'équipe, plusieurs irrégularités. Par exemple, les contrats de gré à gré de certains employés dépassaient 100k $, soit le seuil d'appel d'offres. La direction de la SAAQ acceptait néanmoins ces contrats [2.14]. Et lorsque le contrat de Louise Savoie prend fin en 2021, elle rejoint dès le lendemain l'entreprise LGS, qui travaille sur les projets informatiques de la SAAQ, même si cela contrevient aux règles encadrant les marchés publics [2.15].

> exemple :
>
>

L'arrivé des proches de Malenfant suscite peu de résistance. La Direction de la vérification interne et de l’évaluation des programmes de la SAAQ dénonce la situation à Yves Frenette, alors vice-président aux finances, ressources humaines et à la performance, en lui exposant un diagramme détaillant les liens entre Malenfant et les soumissionnaires [2.16]. Frenette communique ces informations à la présidente-directrice générale de la SAAQ, Nathalie Tremblay, qui approuve les contrats en toute connaissance de cause [2.17]. À partir de là, ce que Malenfant appelle un « noyau dur » mènera la transformation numérique de la SAAQ.


## 4. Le PGI supplante le plan de pérennité

Malenfant ne démantèle pas immédiatement le plan de pérennité à son arrivé à la SAAQ (bien qu'il s'en montre très critique), mais un changement s'amorce au moment de réaliser, en 2013, le « bloc H » du plan, soit les services d'arrière-guichet nécessaires à l'immatriculation et aux permis de conduire. La SAAQ décide d'élargir la portée du bloc pour y inclure le système comptable de la Société, le système d'alors étant considéré désuet [2.18]. À ce moment se concrétise l'idée d'utiliser, au lieu du développement maison, un progiciel de gestion intégré (PGI) [2.19], c'est-à-dire un logiciel « qui permet de gérer les processus d'une entreprise en intégrant l'ensemble de ses fonctions » [10]. C'est une approche fondamentalement différente : au lieu de développer un système par elle-même à partir de zéro, la SAAQ achèterait un logiciel déjà conçu et l'adapterait à ses besoins.

En principe, un PGI est moins dispendieux parce qu'il évite de développer une solution entière. En pratique, les modifications à apporter à un PGI pour intégrer toutes les règles métier de l'organisation sont parfois si nombreuses qu'un développement sur mesure s'avère plus approprié, d'où l'importance d'effectuer une comparaison rigoureuse entre toutes les approches possibles. Trois options s'offraient à la SAAQ :

1. Développement maison
2. Approche du meilleur produit (combiner des PGI de plusieurs fournisseurs)
3. Suite PGI (acheter des PGI d'un seul fournisseur)

En 2014, la SAAQ décide de tenir des discussions sur l'achat de PGI avec une seule entreprise, SAP, par souci d'efficacité [2.20]. C'est une approche hasardeuse. Si la Société ne discute pas avec plusieurs fournisseurs, elle ne peut comparer leurs prix et sélectionner la meilleure solution sur le marché. La SAAQ en est consciente et prépare même des suggestions de réponses aux questions que les journalistes pourraient poser au sujet de sa relation avec SAP si celle-ci devenait publique. La haute direction de la SAAQ entérine néanmoins la décision de discuter uniquement avec SAP [2.21].

La SAAQ et SAP tiennent de nombreuses discussions en 2014, et, en janvier 2015, le comité de direction donne son accord à l'acquisition d'une suite PGI. Cette décision est prise sans analyse en profondeur des deux autres options [2.22] et sans vérification des informations fournies par SAP, lesquelles peuvent se montrer très inexactes. Par exemple, SAP prévoyait des coûts de 36 millions $ pour l'intégrateur du projet. En réalité, ces coûts s'élèveront à 360 millions $ [2.23]. Les membres issus de l'entourage de Malenfant agravent le problème. En situation de conflit d'intérêts, ils font tous partie de comités aviseurs chargés de conseiller la sélection de produits à acquérir. Plusieurs d'entre eux maîtrisent particulièrement bien les produits de SAP pour les avoir utilisés chez Hydro-Québec, ce qui favorise ce fournisseur, et certains font même partie du comité de sélection chargé de prendre les décisions [2.24].

> exemple de collusion
>
>

Ainsi, en 2015, la SAAQ est déterminée à acquérir une suite PGI. Le fournisseur n'est pas encore sélectionné, mais SAP, grâce à ses discussions privilégiées avec la SAAQ et au parti pris des proches de Malenfant pour lui, part avec une longueur d'avance. La SAAQ est néanmoins soumise à des lois et règlements qui visent à éviter ce genre d'écueil. À condition de les appliquer.


## 5. Ramollissement réglementaire

La SAAQ est une société d'État, une « personne morale administrée par un conseil d'administration dont le gouvernement nomme la majorité des membres » [11]. Le conseil d'administration fixe les orientations générales d'une société, nomme sa direction, et rend des comptes au ministre responsable; dans le cas de la SAAQ, au Ministère des Transports et de la Mobilité durable [2.25]. D'autres institutions contribuent à la gestion des sociétés d'État. Le Conseil du trésor procure un encadrement financier aux ministères et organismes [2.26]. Le Vérificateur général du Québec effectue des enquêtes se rapportant aux fonds publics [2.27]. Depuis 2022, le Ministère de la cybersécurité et du numérique coordonne les activités de l'État en informatique [2.28]. Plusieurs autres composantes de l'appareil étatique effectuent des tâches complémentaires.

Dès 2011, la SAAQ se plaint à plusieurs reprises d'un dédoublement réglementaire : en plus de rendre des comptes au Conseil du trésor pendant la réalisation de ses projets technologiques, elle devait aussi en rendre à son directeur principal de l'information (DPI), un rôle interne à la SAAQ [2.29]. Elle dépose donc, en 2014, une demande d'allègement réglementaire pour se soustraire à certaines exigences du Conseil du trésor, demande à laquelle acquiesce le gouvernement [2.30]. La SAAQ ne reçoit dès lors plus d'encadrement de l'État pour l'**autorisation** de ses projets, mais demeure soumise aux mêmes obligations pour la planification [2.31].

Cette autonomie additionnelle était censée donner plus d'agilité à la SAAQ dans la réalisation de ses mandats, mais l'allègement va dangereusement loin : en plus de dispenser la SAAQ d'informer le Conseil du trésor en cas de dépassement de coûts, il la libère de l'obligation d'informer son DPI. À la place, la SAAQ doit informer son « dirigeant sectoriel de l'information ». Or, à l'époque, ce rôle est assumé par le vice-président des technologie de l'information, c'est-à-dire Karl Malenfant. Autrement dit, le chargé de projet a l'obligation de dénoncer *à lui-même* les dépassements de coûts [2.32].

> Exemple
>
>

De 2014 à 2018, soit l'année où le gouvernement recadre ses mécanismes de surveillance des organismes public, la SAAQ opère donc en marge des du contrôle gouvernemental grâce à de multiples allègements. Et même après qu'ils aient pris fin, la SAAQ poursuivra une reddition de compte déficiente [2.33]. C'est dans ce contexte que commence le programme CASA : les proches de Malenfant ont une influence disproportionnée, SAP est le seul fournisseur réellement dans la course, et la SAAQ est libérée d'importantes obligations de reddition de compte. La table est mise pour un fiasco.


## 6. Acquisition de la suite PGI : les dérapages s'annoncent

L'acquisition d'une suite PGI s'étend de 2014 à 2017.

De 2014 à 2015, la SAAQ ne fait que *concevoir une stratégie d'acquisition*. Elle commence par discuter avec le Secrétariat du Conseil du trésor pour demander une dérogation au cadre réglementaire à l'époque, la SAAQ souhaitant en effet modifier le processus d'évaluation des soumissions et prolonger les durées de contrats [2.34]. La demande comprend une estimation de coûts de 200 millions $. Pourtant, à l'interne, la SAAQ prévoyait, au même moment, un coût minimum de 225 millions $ et un coût plausible de 269 millions $. Plusieurs membres de la SAAQ, dont Karl Malenfant, sont conscients de cet écart mais choisissent de ne pas le communiquer au gouvernement [2.35]. La stratégie d'acquisition prévoit en outre des modalités inédites, comme une clause de partage de risques assez complexe [2.36]. Le Conseil du trésor finit par accepter la stratégie en posant certaines conditions pour assurer la compétition entre les soumissionnaires, la qualité des évaluations, et la reddition de compte [2.37].

De 2015 à 2017, la SAAQ effectue trois appels d'offres afin de choisir un **éditeur de PGI** [2.38], un **intégrateur de PGI** [2.39], et une « **alliance** » formée d'un éditeur et d'un intégrateur qualifiés aux deux précédents appels d'offres pour réaliser la suite PGI [2.40]. Les conditions d'évaluation des soumissionnaires ne sont pas toujours optimales. Dans un groupe chargé de synthétiser les rapports de comités aviseurs, des membres d'un « noyau fort » constitué de proches de Karl Malenfant discutent souvent seuls et rendent l'ambiance si tendue qu'il est nécessaire de prendre des pauses [2.41]. Un seul éditeur, SAP [2.42], ainsi que deux intégrateurs, LGS/IDM et Deloitte [2.43], se qualifient. Lors de l'évaluation en vue de la sélection de l'Alliance, SAP est donc l'unique éditeur, ce qui lui donne un pouvoir de négociation important. La SAAQ retient l'Alliance composée de SAP et LGS/IBM [2.44]. Selon la soumission finale, le coût d'acquisition de la suite PGI serait de 375 millions $ [2.45]. Le coût d'exploitation projeté sur 10 ans est de 286 millions $, pour un total de 661 millions $. Le ministre responsable n'est pas informé de la signature du contrat avec l'Alliance [2.46].

> Exemple de trop d'ambition


## 7. La livraison 1 : avant le déluge

La réalisation du programme de la SAAQ s'amorce en mars 2017. C'est aussi à ce moment-là qu'il est baptisé « Carrefour des services d'affaires » ou CASA [2.47]. Quatre livraisons distinctes sont prévues, mais la dernière livraison (indemnisation des victimes d'accidents de la route) sera abandonnée en cours de route [2.48].

La livraison 0 (2017) vise à planifier le programme CASA et à former le personnel. Elle se déroule sans problème majeur [2.49].

La livraison 1 (2.17 à 2019) vise à réaliser les fonctions d'arrière-guichet de la SAAQ, comme l'administration, la comptabilité, l'approvisionnement, etc. C'est à ce moment que les frictions commencent à survenir avec l'Alliance, pour plusieurs raisons :

- LGS/IBM exagère les compétences de ses employés, allant jusqu'à présenter une personne sans connaissances d'un produit SAP comme un « spécialiste » en la matière. L’afflux d'employés cause par ailleurs des problèmes de cohésion [2.50].
- Dans le contrat de services professionnels, la SAAQ exigeait que les travaux soit exécutés dans ses locaux à Québec, mais en mars 2017, elle apprend « avec une certaine stupéfaction » que plus de 60 % des ressources responsables de l'intégration technologique de LGS/IBM travailleraient principalement en Inde. Le décalage horaire et la barrière linguistique agravent les problèmes de cohésion [2.51].
- LGS/IBM prévoyait effectuer les travaux de conversion de données sensibles en Inde, mais la SAAQ, pour des raisons qui ne sont pas totalement justifiées, insiste pour rapatrier ces travaux à Québec, ce qui implique des dépenses supplémentaires [2.52].
- Le taux horaire facturé par LGS/IBM change de manière considérable, passant de 85 $ à 350 $ pour certaines ressources. Ces décisions sont prises par Karl Malenfant et un gestionnaire de l'équipe d'IBM, Nabil Aboutanos [2.53].

Malgré tout, la livraison 1 se déroule assez bien, se concluant à l'intérieur du délai de réalisation et sans dépasser son budget de 122 millions $, bien que certaines composantes furent livrées en retard et que le paiement de certaines factures fut laborieux [2.54].


## 8. La livraison 2 : le face-à-face

La livraison 2 (2017 à 2020) vise à réaliser les fonctions principales de la SAAQ, comme l'immatriculation, les permis de conduire, et la plateforme SAAQclic. Elle s'annonce plus difficile que la livraison 1. Cette dernière se prêtait particulièrement bien à l'approche PGI parce que SAP disposait de logiciels qui répondaient bien aux besoins de la SAAQ et demandaient peu d'adaptations, mais ce cas de figure ne se répète pas lors de la livraison 2 [2.55]. L'Alliance retient un logiciel de gestion d'entrepôts [13] et doit l'adapter à la mission de la SAAQ en réalisant un ensemble d'unités de développement informatique qui correspondent aux règles métier. Au moment de la soumission, l'Alliance prévoit réaliser 1800 unités. Pour donner un ordre de grandeur, un projet de grande envergure au sein de la Défense du Canada avait nécessité 500 unités. La livraison 2 constituait du « jamais-vu » aux yeux d'une gestionnaire d'expérience chez IBM [2.56]. La SAAQ et l'Alliance découvrent en outre des règles métier *pendant le programme*, ce qui implique de nouvelles unités de développement et des retards [2.57].

La SAAQ complique la situation en modifiant significativement la portée de la livraison 2 dès son amorce pour y intégrer le contrôle routier, ce qui n'était pas prévu au début du programme [2.58]. Il pourrait à première vue s'agir d'un trivial ajout de composante à la livraison. Mais à cause des interdépendances entre les composantes de systèmes informatiques, l'élargissement de la portée d'un projet technologique en fait plutôt augmenter la complexité de manière exponentielle [2.59]. Le coût de la livraison 2 augmente alors de 43 millions $ pour un budget initial de 114 millions $ [2.58].

À ces écueils s'ajoutent d'autres frictions, comme des enjeux de conversion de données [2.60] et de recrutement [2.61]. Par ailleurs, la SAAQ cède facilement à certaines demandes de l'Alliance et autorise des augmentations budgétaires sans contester leur nécessité [2.62]. Le projet finit par dérailler fin 2018.

> exemple de conflit avec soumissionnaires
>
>


## 8. N'oubliez pas les tests!

> exemple : phoenix
>
>


## 9. La catastrophe

- [9] Apollo 13

> exemple : gestion de crise
>
>


## 10. Les recommandations


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
  - [2.10] pages 124 et 125
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
  - [2.34] page 165
  - [2.35] page 169
  - [2.36] pages 170 et 171
  - [2.37] page 172
  - [2.38] page 174
  - [2.39] page 179
  - [2.40] page 181
  - [2.41] page 200
  - [2.42] page 206
  - [2.43] page 176
  - [2.44] page 228
  - [2.45] page 222
  - [2.46] page 229
  - [2.47] page 256
  - [2.47] pages 257 et 258
  - [2.49] page 260
  - [2.50] pages 261 et 262
  - [2.51] pages 262 et 263
  - [2.52] page 265
  - [2.53] pages 267 et 268
  - [2.54] pages 276 et 277
  - [2.55] page 281
  - [2.56] page 282
  - [2.57] page 286
  - [2.58] page 284
  - [2.59] page 428
  - [2.60] page 289
  - [2.61] page 290
  - [2.62] page 292
- [3] Chrystal R. China et Michael Goodwin. "Qu’est-ce que le COBOL ?" (8 mai 2025). IBM. https://www.ibm.com/fr-fr/think/topics/cobol
- [4] Andrew L. Russell. "Oral-History:Charles Bachman" (9 avril 2011). IEEE Oral History Network. https://ethw.org/Oral-History:Charles_Bachman
- [5] Andrew Leahey. "From COBOL And Assembly To Java—Modernizing The IRS" (6 septembre 2024). Forbes. https://www.forbes.com/sites/andrewleahey/2024/09/06/from-cobol-and-assembly-to-java-modernizing-the-irs/
- [6] Nancy Sieger. "Modernizing tax processing systems" (28 juillet 2022). IRS. https://www.irs.gov/about-irs/modernizing-tax-processing-systems
- [7] Témoignage d'Yves Frenette aux audiences de la CESIS (10 juin 2025), page 38. https://www.cesis.gouv.qc.ca/fileadmin/documents/24_2025-06-10_CESIS__JOUR_24_.pdf
- [8] https://www.linkedin.com/in/karl-malenfant-b-sc-iro-mba-asc-01967337/
- [9] Katia Gagnon, Ulysse Bergeron et Vincent Larin. "Karl Malenfant et SAAQclic - L’architecte du chaos" (14 septembre 2025). La Presse. https://www.lapresse.ca/actualites/karl-malenfant-et-saaqclic/l-architecte-du-chaos/2025-09-14/l-histoire-qui-se-repete.php
- [10]  Office québécois de la langue française. "progiciel de gestion intégré" (2020). https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8874062/progiciel-de-gestion-integre
- [11] Gouvernement du Québec. "Loi sur la gouvernance des sociétés d’État". RLRQ, c. G-1.02, art. 3 « société d’État ».
- [12] Pierre-Paul Biron. "Risques de dérapage autour d’un mégaprojet informatique d’un demi-milliard de dollars à la SAAQ" (9 avril 2018). Le journal de Québec. https://www.journaldequebec.com/2018/04/09/risques-de-derapage-informatique-a-la-saaq
- [13] Témoignage de Michel Dumas aux audiences de la CESIS (24 septembre 2025), page 281. https://www.cesis.gouv.qc.ca/fileadmin/documents/2025-09-24_CESIS_JOUR_55_KMalenfant_MDumas.pdf