# Les fiascos informatiques de la SAAQ étaient évitables

> Quand bien même que ça coûterait 50 M$, 100 M$, 200 M$ de plus... Ça n’empêchera pas la Terre de tourner!
>
> Guy Morneau, président du conseil d'administration de la Société de l'assurance automobile du Québec (SAAQ) de 2013 à 2016 [1]

Les déboires de la transformation numérique de la SAAQ se sont avérés plus coûteux encore [2.1], et ils ont été causés par une série de mauvaises décisions pour la plupart assez faciles à éviter. Retraçons l'histoire du Carrefour des services d'affaires (CASA) de la SAAQ, un programme marqué par de multiples fiascos qui n'ont pas fini de nous servir d'apprentissage collectif.


## 1. La nécessité d'une transformation numérique

Dès 2009, la SAAQ considère la modernisation de ses systèmes informatiques comme une urgence [2.2]. Ses infrastructures, qui datent des années 1980 [2.4], sont conçues avec le langage de programmation COBOL et une base de données IDMS, des technologies qui remontent aux années 1960 [3] [4]. Elles sont de moins en moins utilisées dans l'industrie, ce qui complique le recrutement de professionnels qui les maîtrisent et peuvent maintenir les systèmes.

Un autre problème est la dégradation du code. Au fil des années, les **règles métier** de la SAAQ, c'est-à-dire les spécifications qui expliquent comment fonctionnent des opérations de la Société, ont été ajoutées de manière incrémentales. Par exemple, les règles pour délivrer un permis de conduire (âge, condition de santé, réussite d'un examen) ou immatriculer un véhicule (paiement des frais, infractions pénales, etc.) ont évolué avec le cadre législatif québécois pendant plusieurs décennies. Des milliers de règles métiers complexes ont été directement intégrées dans le code source des systèmes de la SAAQ sans qu'elles ne soient documentées [2.5]. Par ailleurs, le déficit de la SAAQ augmente de 35 million $ par année en moyenne depuis le début des années 2000. La transformation numérique est perçue comme un passage obligé pour réduire ses coûts d'opération et à desservir la population plus efficacement [2.3].

> Exemple : IRS
>
> Le cas de la SAAQ est loin d'être inédit. Aux États-Unis, dans les années 1960, l'Internal Revenue Service (IRS) a ouvert la voie aux services automatisés de paiement d'impôts avec un système développé en COBOL et aussi en assembleur, un langage de programmation plus ancien encore [5]. L'IRS entreprend un ambitieux programme de modernisation à partir de 2012 pour récrire ses systèmes en Java, un langage plus moderne, ce qui lui donne accès à un plus grand bassin de développeurs et facilite l'ajout de fonctionnalités modernes. Après plus de dix ans d'effort et d'investissement, l'IRS arrive désormais à desservir plus efficacement les contribuables et à diminuer ses dépenses [6].


## 2. Faux départ

En 2011, la SAAQ adopte un **plan de pérennité** pour moderniser ses opérations. Celles-ci se déclinent en quatre domaines d'activité [2.6] :

1. L'accès au réseau routier (délivrance des permis de conduire, immatriculation, etc.)
2. L'indemnisation des victimes de la route (fond d'assurance des victimes)
3. Le contrôle routier (conduite de véhicules lourds notamment)
4. La promotion de la sécurité routière (campagnes publicitaires et autres initiatives)

Le plan de pérennité vise deux objectifs : (1) la **rénovation du système d'accès au réseau routier** et (2) la **conversion des données du fond d'assurance**. Les deux autres domaines d'activité ainsi que les opérations internes de la SAAQ (comme les ressources humaines) n'étaient pas considérés prioritaires à l'époque et donc non inclus dans le plan [2.7]. En somme, le plan de pérennité ne vise pas à changer en profondeur les opérations de la SAAQ, mais plutôt à rénover ses systèmes existants.

La SAAQ a de la difficulté à évaluer précisément ses besoins à l'avance à cause du manque de documentation de ses règles métier, ce qui complexifie l'élaboration de contrats à soumettre à des partenaires externes. Elle décide donc de développer le projet par elle-même, ce qu'elle appelle un « développement maison ». Suivant un rapport de PwC, la SAAQ décide de procéder en premier lieu à la conversion des données avant de modifier ses applications [2.8] et décompose la réalisation du plan en huit blocs qui se chevauchent dans le temps. Le plan de pérennité est finalement doté d'un budget de 364 millions $ et devait s'étaler de 2012 à 2022 [2.9]. Il s'avérera toutefois que la division du travail en blocs ralentit la réalisation du projet. Certaines parties, comme les données de l'accès au réseau routier, sont fortement interconnectées et ne peuvent pas être rénovées par blocs indépendants. Les équipes travaillent en silo, les retards s'accumulent, et le plan de pérennité subira ultimement une transformation radicale en 2014 sous l'influence, notamment, d'un certain Karl Malenfant [2.10].

> Exemple : TSB Bank
>
> En 2018, la TSB Bank, établie au Royaume-Uni, déploie un nouveau système informatique après plusieurs années de travail. Des clients deviennent alors incapables d'accéder à leur compte et certains arrivent à accéder aux informations financières d'étrangers. Le PDG de la banque quitte la direction suivant ces problèmes [16]. Un rapport indépendant conclura que le manque de communication entre les groupes de travail avait contribué aux problèmes du système [17]. Après tout, son développement avait mobilisé plus de 1400 personnes réparties à travers plus de 70 fournisseurs [18], d'où l'importance de veiller à une coordination efficace entre les groupes de travail.


## 3. Une équipe digne d'un cauchemar

En 2013, la SAAQ cherche un nouveau vice-président aux technologies de l'information pour remplacer Michel Léveillé, parti à la retraite pour « aller jouer du piano chez lui » [7]. Une firme de chasseurs de têtes contacte Karl Malenfant, un gestionnaire en projets informatiques ayant travaillé 15 ans chez Hydro-Québec [8] où il y a dirigé un programme, le Système d'information client (SIC), dont le coût était passé de 320 à 474 millions $. Ce programme a été effectué avec SAP, une multinationale allemande de logiciels de gestion [9].

Plusieurs personnes ayant côtoyé Malenfant durant sa carrière se joignent mystérieusement à la SAAQ peu après son arrivée. Par exemple :

- Madeleine Chagnon, alias Mado, ancienne employée d'Hydro-Québec et amie de Malenfant, est d'abord engagée avec des contrats de gré à gré [2.11], puis intègre la SAAQ plus définitivement en remportant en 2015 un appel d'offres de 1,2 million $. Les critères de l'appel d'offres sont très restrictifs et seule Chagnon se qualifie. [2.12]
- Louise Savoie, alias Loulou, ancienne employée d'Hydro-Québec et amie de Malenfant, arrive d'abord à la SAAQ à titre de consultante pour l'entreprise R3D [2.11], puis en remportant un appel d'offre de 1,2 million $. Les critères de l'appel sont très restrictifs et Savoie est la seule à se qualifier [2.12].
- Maurice Guénard, ancien collègue de Malenfant chez Hydro-Québec, est le seul à se qualifier à un appel d'offres restrictif de 1,28 million de $. Malenfant détient le CV de Guénard avant la rédaction de l'appel d'offres [2.13].
- Caroline Foldes-Busque, ancienne employée d'Hydro-Québec et conjointe de Maurice Guénard, est engagée à titre de directrice générale [2.13].
- Éric Beauregard, ancien employé d'Hydro-Québec qui a travaillé sur le SIC, est le seul à se qualifier à un appel d'offres restrictif de 1,2 million $. Chagnon et Savoie, alors chez la SAAQ, aident Beauregard à rédiger sa soumission [2.13].
- Geneviève Tremblay, ancienne employée d'Hydro-Québec et conjointe de Éric Beauregard, est engagée comme consultante [2.13].

On note, hormis la consanguinité de l'équipe, plusieurs irrégularités. Par exemple, les contrats de gré à gré de certains employés dépassaient 100k $, soit le seuil qui oblige la conversion des contrats en appels d'offres. La direction de la SAAQ acceptait néanmoins ces contrats [2.14]. Et lorsque le contrat de Louise Savoie prend fin en 2021, elle rejoint dès le lendemain l'entreprise LGS, qui travaille sur les projets informatiques de la SAAQ, même si cela contrevient aux règles encadrant les marchés publics [2.15].

L'arrivé des proches de Malenfant suscite peu de résistance. La Direction de la vérification interne et de l'évaluation des programmes de la SAAQ dénonce la situation à Yves Frenette, alors vice-président aux finances, ressources humaines et à la performance de la SAAQ, en lui exposant un diagramme détaillant les liens entre Malenfant et les soumissionnaires [2.16]. Frenette communique ces informations à la présidente-directrice générale de la SAAQ, Nathalie Tremblay, qui approuve les contrats en toute connaissance de cause [2.17]. Ce que Malenfant appelle un « noyau dur » mènera la transformation numérique de la SAAQ.

> Exemple : Ministère de la santé de l'Ontario
>
> En septembre 2008, le ministère de la santé de l'Ontario établit l'agence eHealth pour mener des projets de partage de dossiers médicaux numériques. Ces projets avait déjà débuté, mais, selon la présidente-directrice générale de eHealth, Sarah Kramer, nommée en octobre 2008, ils étaient en grand retard. Invoquant l'urgence de les faire progresser rapidement, elle outrepasse le processus habituel d'embauche pour sélectionner des consultants externes qu'elle connaît déjà, sans assurer une compétition équitable entre soumissionnaires. Cette décision a entraîné des augmentations de coûts [19.1]. Des contrats de 5 millions $, entre autres, ont causé un scandale majeur [20]. Kramer démissionne en Juin 2009 [19.2] et le ministre de la santé de l'Ontario, David Caplan, démissionne quelques heures avant le dépôt d'un rapport d'audit sur la gestion de eHealth [20].


## 4. Le PGI supplante le plan de pérennité

Malenfant ne démantèle pas immédiatement le plan de pérennité à son arrivé à la SAAQ (bien qu'il s'en montre très critique), mais un changement s'amorce au moment de réaliser, en 2013, le « bloc H » du plan, soit les services d'arrière-guichet nécessaires à l'immatriculation et aux permis de conduire. La SAAQ décide d'élargir la portée du bloc pour y inclure le système comptable de la Société, le système d'alors étant considéré désuet [2.18]. À ce moment se concrétise l'idée d'utiliser, au lieu du développement maison, un progiciel de gestion intégré (PGI) [2.19], c'est-à-dire un logiciel « qui permet de gérer les processus d'une entreprise en intégrant l'ensemble de ses fonctions » [10]. C'est une approche fondamentalement différente : au lieu de développer un système par elle-même à partir de zéro, la SAAQ achèterait un logiciel déjà conçu et l'adapterait à ses besoins.

En principe, un PGI est moins dispendieux parce qu'il évite de développer une solution entière. En pratique, les modifications à apporter à un PGI pour intégrer toutes les règles métier de l'organisation sont parfois si nombreuses qu'un développement sur mesure s'avère plus approprié, d'où l'importance d'effectuer une comparaison rigoureuse entre toutes les approches possibles. Trois options s'offraient à la SAAQ :

1. Développement maison
2. Approche du meilleur produit (combiner des PGI de plusieurs fournisseurs)
3. Suite PGI (acheter des PGI d'un seul fournisseur)

En 2014, la SAAQ décide de tenir des discussions sur l'achat de PGI avec une seule entreprise, SAP, par souci d'efficacité [2.20]. Le but n'est pas d'acheter un PGI mais plutôt de déterminer si ce serait une meilleure approche que le développement maison. Le choix de la Société de discuter uniquement avec SAP à cette étape est toutefois hasardeux. En ne discutant pas avec plusieurs fournisseurs, elle ne peut comparer leurs prix et sélectionner la meilleure solution sur le marché. La SAAQ en est consciente et prépare même des suggestions de réponses aux questions que les journalistes pourraient poser au sujet de sa relation avec SAP si celle-ci devenait publique. La haute direction de la SAAQ entérine néanmoins la décision de discuter uniquement avec SAP [2.21].

La SAAQ et SAP tiennent de nombreuses discussions en 2014, et, en janvier 2015, le comité de direction donne son accord à l'acquisition d'une suite PGI. Cette décision est prise sans analyse en profondeur des deux autres options [2.22] et sans vérification des informations fournies par SAP, lesquelles peuvent se montrer très inexactes. Par exemple, SAP prévoyait des coûts de 36 millions $ pour l'intégrateur du projet. En réalité, ces coûts s'élèveront à 360 millions $ [2.23]. Les membres issus de l'entourage de Malenfant agravent ce favoritisme. Plusieurs d'entre eux maîtrisent particulièrement bien les produits de SAP parce qu'ils les ont utilisés chez Hydro-Québec et certains font partie du comité chargé de la sélection du fournisseur en plus de comités aviseurs chargés de conseiller la sélection. Le noyau a aussi tendance à défendre des positions similaires, ce qui décourage la diversité de points de vue [2.24]. Malgré tout, la SAAQ est déterminée à acquérir une suite PGI. Le fournisseur n'est pas encore sélectionné, mais SAP, grâce à ses discussions privilégiées avec la SAAQ et au parti pris des proches de Malenfant pour lui, part avec une longueur d'avance. La SAAQ est néanmoins soumise à des lois et règlements qui visent à éviter ce genre d'écueil. À condition de les appliquer.

> Exemple : Healthcare.gov
>
> Dans un souci d'efficacité, le gouvernement américain crée, en 2007, une liste d'entreprises certifiées qui pouvaient recevoir des charges de travail en projets de technologie de l'information sans passer par l'habituel processus d'approbation, complexifiant ainsi l'accès de compétiteur à certains contrats. Cet arrangement a aidé l'entreprise CGI à obtenir des contrats pour la plateforme Healthcare.gov, développée pour accommoder les services découlant du *Affordable Care Act* (Obamacare) promulgué en 2010 [22]. La plateforme s'est révélée incapable de répondre à la demande et son déploiement fut considéré comme un échec [23], si bien que CGI perdit le contrat avec le gouvernement fédéral peu après [24].


## 5. Ramollissement réglementaire

La SAAQ est une société d'État, une « personne morale administrée par un conseil d'administration dont le gouvernement nomme la majorité des membres » [11]. Le conseil d'administration fixe les orientations générales d'une société, nomme sa direction, et rend des comptes au ministre responsable; dans le cas de la SAAQ, au Ministère des Transports et de la Mobilité durable [2.25]. D'autres institutions contribuent à la gestion des sociétés d'État. Le Conseil du trésor procure un encadrement financier aux ministères et organismes [2.26]. Le Vérificateur général du Québec effectue des enquêtes se rapportant aux fonds publics [2.27]. Depuis 2022, le Ministère de la cybersécurité et du numérique coordonne les activités de l'État en informatique [2.28]. Plusieurs autres composantes de l'appareil étatique effectuent des tâches complémentaires.

Dès 2011, la SAAQ se plaint à plusieurs reprises d'un dédoublement réglementaire : en plus de rendre des comptes au Conseil du trésor pour la réalisation de ses projets technologiques, elle devait aussi en rendre à son directeur principal de l'information (DPI), un rôle interne à la SAAQ [2.29]. Elle dépose donc, en 2014, une demande d'allègement réglementaire pour se soustraire à certaines exigences du Conseil du trésor, demande à laquelle acquiesce le gouvernement [2.30]. La SAAQ ne reçoit dès lors plus d'encadrement de l'État pour l'**autorisation** de ses projets, mais demeure soumise aux mêmes obligations pour la planification [2.31].

Cette autonomie additionnelle était censée donner plus d'agilité à la SAAQ dans la réalisation de ses mandats, mais l'allègement va dangereusement loin : en plus de dispenser la SAAQ d'informer le Conseil du trésor en cas de dépassement de coûts, il la libère de l'obligation d'informer son DPI. À la place, la SAAQ doit informer son « dirigeant sectoriel de l'information ». Or, à l'époque, ce rôle est assumé par le vice-président des technologie de l'information, c'est-à-dire Karl Malenfant. Autrement dit, le chargé de projet a l'obligation de dénoncer *à lui-même* les dépassements de coûts [2.32].

De 2014 à 2018, soit l'année où le gouvernement recadre ses mécanismes de surveillance des organismes public, la SAAQ opère donc en marge des du contrôle gouvernemental grâce à de multiples allègements. Et même après qu'ils aient pris fin, la SAAQ poursuivra une reddition de compte déficiente [2.33]. C'est dans ce contexte que commence le programme CASA : les proches de Malenfant ont une influence disproportionnée, SAP est le seul fournisseur réellement dans la course, et la SAAQ est libérée d'importantes obligations de reddition de compte. La table est mise pour un fiasco.

> Exemple : ArriveCan
>
> Le 29 avril 2020, l'Agence des services frontaliers du Canada lance ArriveCAN, une application qui recueille des renseignements sur la santé des voyageurs pour soutenir les mesures de quarantaine. Étant donné l'urgence la situation (l'Organisation mondiale de la santé avait déclaré la COVID-19 comme une pandémie mondiale le 11 mars 2020), le Secrétariat du Conseil du trésor du Canada a temporairement levé certains règlements sur les marchés de l'État [21.1]. Les contrats étaient attribués de manière non concurrentielle à trois entrepreneurs et plusieurs fois prolongés sans permettre à d'autres entreprises de participer à des appels d'offres [21.2] et les livrables étaient mal définis [21.3]. Le manque de concurrence a gonflé le coût du projet, mais il est impossible de déterminer son prix exact à cause du manque de documentation des contrats [21.4].


## 6. Acquisition de la suite PGI : les dérapages s'annoncent

L'acquisition d'une suite PGI s'étend de 2014 à 2017.

De 2014 à 2015, la SAAQ ne fait que *concevoir une stratégie d'acquisition*. Elle commence par discuter avec le Secrétariat du Conseil du trésor pour demander une dérogation au cadre réglementaire à l'époque, la SAAQ souhaitant en effet modifier le processus d'évaluation des soumissions et prolonger les durées de contrats [2.34]. La demande comprend une estimation de coûts de 200 millions $. Pourtant, à l'interne, la SAAQ prévoyait, au même moment, un coût minimum de 225 millions $ et un coût plausible de 269 millions $. Plusieurs membres de la SAAQ, dont Karl Malenfant, sont conscients de cet écart mais choisissent de ne pas le communiquer au gouvernement [2.35]. La stratégie d'acquisition prévoit en outre des modalités inédites, comme une clause de partage de risques assez complexe [2.36]. Le Conseil du trésor finit par accepter la stratégie en posant certaines conditions pour assurer la compétition entre les soumissionnaires, la qualité des évaluations, et la reddition de compte [2.37].

De 2015 à 2017, la SAAQ effectue trois appels d'offres afin de choisir un éditeur de PGI [2.38], un intégrateur de PGI [2.39], et une « alliance » formée d'un éditeur et d'un intégrateur qualifiés aux deux précédents appels d'offres pour réaliser la suite PGI [2.40]. Les conditions d'évaluation des soumissionnaires ne sont pas toujours optimales. Dans un groupe chargé de synthétiser les rapports de comités aviseurs, des membres d'un « noyau fort » constitué de proches de Karl Malenfant discutent souvent seuls et rendent l'ambiance si tendue qu'il est nécessaire de prendre des pauses [2.41]. Un seul éditeur, SAP [2.42], ainsi que deux intégrateurs, LGS/IDM et Deloitte [2.43], se qualifient. Lors de l'évaluation en vue de la sélection de l'Alliance, SAP est donc l'unique éditeur, ce qui lui donne un pouvoir de négociation important. La SAAQ retient l'Alliance composée de SAP et LGS/IBM [2.44]. Selon la soumission finale, le coût d'acquisition de la suite PGI serait de 375 millions $ [2.45]. Le coût d'exploitation projeté sur 10 ans est de 286 millions $, pour un total de **661 millions $**. Le ministre responsable n'est pas informé de la signature du contrat avec l'Alliance [2.46].


## 7. La livraison 1 : avant le déluge

La réalisation du programme de la SAAQ s'amorce en mars 2017. C'est aussi à ce moment-là qu'il est baptisé « Carrefour des services d'affaires » ou CASA [2.47]. Quatre livraisons distinctes sont prévues, mais la dernière livraison (indemnisation des victimes d'accidents de la route) sera abandonnée en cours de route [2.48].

La livraison 0 (2017) vise à planifier le programme CASA et à former le personnel. Elle se déroule sans problème majeur [2.49]. La livraison 1 (2017 à 2019) vise à réaliser les fonctions d'arrière-guichet de la SAAQ, comme l'administration, la comptabilité, l'approvisionnement, etc. C'est à ce moment que les frictions commencent à survenir avec l'Alliance, pour plusieurs raisons :

- LGS/IBM exagère les compétences de ses employés, allant jusqu'à présenter une personne sans connaissances d'un produit SAP comme un « spécialiste » en la matière. L'afflux d'employés cause par ailleurs des problèmes de cohésion dans les équipes [2.50].
- Dans le contrat de services professionnels, la SAAQ exigeait que les travaux soit exécutés dans ses locaux à Québec, mais en mars 2017, elle apprend « avec une certaine stupéfaction » que plus de 60 % des ressources responsables de l'intégration technologique de LGS/IBM travailleraient principalement en Inde. Le décalage horaire et la barrière linguistique agravent les problèmes de cohésion [2.51].
- LGS/IBM prévoyait effectuer les travaux de conversion de données sensibles en Inde, mais la SAAQ, pour des raisons qui ne sont pas totalement justifiées, insiste pour rapatrier ces travaux à Québec, ce qui implique des dépenses supplémentaires [2.52].
- Le taux horaire facturé par LGS/IBM change de manière considérable, passant de 85 $ à 350 $ pour certaines ressources. Ces décisions sont prises par Karl Malenfant et un gestionnaire de l'équipe d'IBM, Nabil Aboutanos [2.53].

Malgré tout, la livraison 1 se déroule relativement bien, se concluant à l'intérieur du délai de réalisation et sans dépasser son budget de 122 millions $, bien que certaines composantes furent livrées en retard et que le paiement de certaines factures fut laborieux [2.54].


## 8. La livraison 2 : le face-à-face

La livraison 2 (prévue de 2017 à 2020) vise à réaliser les fonctions principales de la SAAQ, comme l'immatriculation, les permis de conduire, et la plateforme SAAQclic. Elle s'annonce plus difficile que la livraison 1. Cette dernière se prêtait particulièrement bien à l'approche PGI parce que SAP disposait de logiciels qui répondaient aux besoins de la SAAQ et demandaient peu d'adaptations, mais ce cas de figure ne se répète pas lors de la livraison 2 [2.55]. L'Alliance retient un logiciel de gestion d'entrepôts [13] et doit l'adapter à la mission de la SAAQ en réalisant un ensemble d'unités de développement informatique qui correspondent à ses règles métier. Au moment de la soumission, l'Alliance prévoit réaliser 1800 unités. Pour donner un ordre de grandeur, un projet de grande envergure au sein de la Défense du Canada avait nécessité 500 unités. La livraison 2 constituait du « jamais-vu » aux yeux d'une gestionnaire d'expérience chez IBM [2.56]. La SAAQ et l'Alliance découvrent en outre des règles métier *pendant le programme*, ce qui implique de nouvelles unités de développement et des retards [2.57].

La SAAQ complique la situation en modifiant significativement la portée de la livraison 2 dès son amorce pour y intégrer le contrôle routier, ce qui n'était pas prévu au début du programme [2.58]. Il pourrait, à première vue, s'agir d'un banal ajout de composante à la livraison 2. Mais à cause des interdépendances entre les composantes de systèmes informatiques, l'élargissement de la portée d'un projet technologique n'en fait pas augmenter la complexité linéairement, mais plutôt exponentiellement [2.59]. Le coût de la livraison 2 augmente alors de 43 millions $ pour un budget initial de 114 millions $ [2.58].

À ces écueils s'ajoutent d'autres frictions, comme des enjeux de conversion de données [2.60] et de recrutement [2.61]. La SAAQ cède facilement à certaines demandes de l'Alliance et autorise des augmentations budgétaires pour régler ces problèmes sans en contester la nécessité [2.62]. Le projet déraille - « s'en va dans le mur » dixit Malenfant - fin 2018 à cause de ses trop nombreux retards [2.63]. Pour redresser la situation, IBM fait intervenir sa *Tiger Team*, qui constate que la rédaction des spécifications fonctionnelles prend environ trois fois plus de temps dans le programme CASA que dans les autres projets d'IBM à cause du manque particulièrement criant de documentation de ses règles métier. Les tigres relèvent aussi que la SAAQ augmente sans cesse ses objectifs et banalise le respect des échéanciers [2.64]. Début 2019, la SAAQ et l'Alliance replanifient donc la livraison 2. Le coût du développement de CASA passe de 375 millions $ à 448 millions $. En incluant la récurrence sur 10 ans, son coût total passe de 661 millions $ à **734 millions $** [2.65]. Mais cette première replanification est estimée irréaliste dès le départ et supplantée par une deuxième en 2019 [2.66], entraînant une hausse d'environ 100 millions $. Une *troisième* replanification a lieu en juillet 2020, entraînant une autre hausse d'environ 100 millions $ [2.67]. La SAAQ et l'Alliance se jettent mutuellement le blâme du dérapage et ne s'entendent pas sur la manière de partager ces hausses.

La Direction de la vérification interne de la SAAQ informe à plusieurs reprises la haute direction de la Société des différends avec l'Alliance, mais ses rapports ne sont pas pris en considération. Au contraire, la PDG de la SAAQ, Natalie Tremblay, demande d'en *retirer des informations* pour garder la face [2.68] et se montre rassurante quand le gouvernement demande des comptes. Pire encore, la SAAQ ment au gouvernement en mai 2020 en lui indiquant qu'il n'y a rien à signaler sur le déroulement du projet, malgré les problèmes contractuels et une hausse de près de 200 millions $ (c'est-à-dire, avant la troisième replanification) [2.69].

Les différends continuent d'empirer et certains employés de la SAAQ perçoivent la possibilité que l'Alliance décide d'abandonner le programme, ce qui laisserait la SAAQ sans fournisseur capable de finaliser CASA. Cela motive la Société à régler le litige [2.70]. En septembre 2020 se conclut un règlement à l'amiable : la SAAQ assumerait environ 75 % de l'augmentation des coûts de la livraison 2 [2.71]. Le programme CASA (développement et récurrence sur 10 ans) lui coûte alors **968 millions $** [2.72]. Cette augmentation passe inaperçue aux yeux du gouvernement parce que la SAAQ contourne les règles de gestion de projets pour la masquer à l'administration publique. Par ailleurs, le gouvernement se montre indulgent et ne recadre pas la SAAQ en dépit de ses écarts de conduite [2.73].

> Exemple : FBI
>
> La dérive des objectifs (*scope creep*) est généralement considérée néfaste parce qu'elle risque de mener à une croissance incontrôlée des objectifs d'un projet, ce qui le rend plus difficile à compléter. Elle n'affecte pas seulement la SAAQ. Aux États-Unis, le Virtual Case File était une application développée entre 2000 et 2005 par le FBI pour moderniser ses opérations, mais ses spécifications étaient mal définies dès le départ. Pour empirer les choses, plusieurs événements, dont les attentats du 11 septembre, ont ajouté une pression additionnelle sur le FBI pour accélérer sa transformation numérique, ce qui a mené à la création de nouveaux objectifs. Le projet a fini par dérailler et a été abandonné en avril 2005 [25].


## 9. N'oubliez pas les tests!

Le développement de la livraison 2 se poursuit jusqu'en 2022, année consacrée à des préparatifs pour son déploiement [2.74]. Il y a, en gros, deux manières de déployer une solution logicielle :

- « Big bang » : déploiement d'un coup, en débranchant l'ancien système et branchant le nouveau. Relativement simple, mais si le déploiement du nouveau système échoue, il est difficile de corriger la situation. Dans le cas de CASA, il est nécessaire de mettre les systèmes de la SAAQ hors service durant plusieurs jours.
- Graduelle : l'ancien système est peu à peu remplacé par un nouveau système. Plus complexe parce qu'il faut faire coexister des systèmes différents pendant un certain temps, mais permet de reculer plus facilement s'il y a des problèmes.

L'Alliance préfère l'approche graduelle parce qu'elle est plus sûre, mais la SAAQ insiste pour adopter l'approche « big bang » [2.75] sans avoir exploré d'autres avenues ni documenté les risques inhérents à cette approche [2.76]. Un autre défi vient du Service d'authentification gouvernementale (SAG), une initiative du gouvernement du Québec pour faciliter la connexion à ses services (le SAG remplace clicSÉQUR) [2.77]. La SAAQ est le premier organisme gouvernemental d'envergure à utiliser le SAG et son intégration à la livraison 2 entraîne des retards [2.78].

Les tests et la correction des bogues sont réalisés selon un calendrier compressé à cause des retards. Durant cette phase, des anomalies sont détectées plus vite que les équipes arrivent à les corriger. Plus de 1200 anomalies n'étaient pas encore réglées au moment de passer la livraison 2 en production [2.79]. La SAAQ prévoyait initialement fermer ses services du 21 décembre 2022 au 4 janvier 2023, mais elle doit repousser à deux reprises le déploiement jusqu'à février 2023 et raccourcir encore davantage ses tests [2.80]. Malgré les voyants rouges et une préparation clairement insuffisante, Karl Malenfant affirme que les préparatifs du déploiement de la livraison 2 sont « terminés » et la SAAQ va de l'avant avec le déploiement [2.81].

> Exemple : Phénix
>
> Le système de paye Phénix, créé pour moderniser les opérations de rémunération des employés du gouvernement fédéral, continue aussi de servir d'exemple à ne pas suivre. Ce qui a commencé comme un contrat de 5,8 millions $ à IBM a grimpé à plus de 650 millions $ au fil des ans [26]. Dès son lancement en 2016, plusieurs employés ne sont pas correctement payés ou ne reçoivent carrément pas de paiement. Plusieurs de ces situations auraient pu être évitées si des tests rigoureux avaient été effectués. Or, pour sauver du temps, la stratégie de tests était très incomplète, ce qui a empêcher de découvrir des erreurs pourtant évitable. Le système est ainsi lancé malgré plusieurs voyants rouges [27]. L'initiative qui était censé faire économiser des millions au gouvernement fédéral par gains d'efficacité s'est transformée en gouffre financier.


## 10. La catastrophe

Le déploiement de la livraison 2 (lundi le 20 février 2023 suivant un arrêt de service de 21 jours) est un échec dès le départ : les systèmes fonctionnent très lentement ou sont indisponibles et les employés dans les centres de services peinent à desservir la clientèle [2.83]. La population avait été avisée que des problèmes techniques pourraient survenir [2.82] et les clients de la SAAQ se montrent compréhensifs durant la première semaine, bien que la SAAQ soit parvenu à répondre à seulement 55 % du volume habituel des demandes. Les clients non desservis sont invités à revenir la semaine suivante [2.83].

Les choses se corsent alors. Les systèmes de la livraison 2 en arrachent toujours tandis que les clients continuent de se présenter aux centres de services. Les commerçants, n'arrivant pas à effectuer certaines transactions avec SAAQclic, redirigent leurs clients vers les centres, ce qui contribue à la formation d'imposantes files d'attente et d'agitations [2.84]. Les corps policiers reçoivent des informations erronées des systèmes de la SAAQ, ce qui mène à des interventions injustifiées et détentions illégales [2.85]. L'une de ces histoires d'horreur concerne un garçon qui, sortant de l'hôpital après un traitement contre le cancer, a été couché au sol par les policiers pendant que le conducteur du véhicule était mis en joue. Les systèmes de la SAAQ avait identifié par erreur le véhicule comme volé [14].

Karl Malenfant avait fait face à une situation semblable chez Hydro-Québec, où le déploiement du système qu'il avait dirigé (le SIC) connut des ratés importants lors de son déploiement. Malenfant avait alors convié 500 personnes travaillant sur le projet dans un auditorium pour leur montrer une capsule vidéo sur Apollo 13 et leur livrer un discours motivationnel [9]. Les techniques de gestion de crise de la SAAQ se montrèrent d'une inefficacité similaire, si bien que le gouvernement dû intervenir. La ministre des Transports, Geneviève Guilbault, écourte un séjour professionnel en Europe et prend le dossier en charge. Elle et son équipe mettent en place plusieurs mesures pour améliorer la situation, dont la suspension temporaire de certains articles du Code de la sécurité routière. La situation se rétablit progressivement [2.86].

Le gouvernement limoge le président-directeur général de la SAAQ, Denis Marsolais, le 5 avril 2023 après avoir perdu confiance en lui [2.87]. Karl Malenfant, lui, reste en poste jusqu'en janvier 2024, où il prend sa retraite. Caroline Foldes-Busque, une de ses proches, lui succède, jusqu'à être elle-même remplacée en août 2025 [2.88]. Les redditions de compte et la transparence de la SAAQ s'améliorent à mesure que se renouvelle sa direction [2.89].


## 11. Le bilan

Les hausses de coûts du programme CASA sont complexes à retracer parce que celui-ci s'étale sur plusieurs années et a été maintes fois modifié (sans parler de la détermination de la SAAQ à cacher de l'information). En 2025, le Vérificateur général du Québec publie un audit qui estime l'augmentation de coûts à 500 millions de $ pour un total de 1,1 milliard $ sur 10 ans [15.1], principalement à cause d'une sous-évaluation de la complexité de la livraison 2 [15.2]. La Commission Gallant, mise sur pieds après le rapport du Vérificateur général pour faire la lumière sur la transformation numérique de la SAAQ, estime le coût total à 955 millions $ [2.90]. Ces chiffres diffèrent de ceux rapportés par la SAAQ, mais, dans tous les cas, sa mauvaise planification et sa démesure expliquent la dramatique augmentation de coût du programme CASA ainsi que ses retards.

Le Vérificateur général [15.3] ainsi que la Commission [2.91] s'accordent aussi sur le grave manque de transparence de la SAAQ, qui a menti au gouvernement et aux parlementaires. Sans informations fiables, ils étaient incapables de prévenir les problèmes de gestion du programme CASA, mais la SAAQ n'est pas la seule à blâmer. Le gouvernement a quelques fois obtenu des informations fiables sur CASA, mais celles-ci n'étaient pas bien propagées au sein de l'appareil étatique et n'ont pas mené aux corrections nécessaires. Le gouvernement aurait aussi pu s'intéresser proactivement aux projets de la SAAQ pour y débusquer des écarts de conduite, mais ne l'a pas fait [2.92].

Les décisions de la SAAQ témoignent aussi d'un manque de jugement. La SAAQ ne s'assure pas qu'un PGI est l'approche appropriée pour sa transformation, et cette orientation s'avéra inadaptée à la livraison 2, quoi qu'il est difficile de dire si un développement sur mesure aurait mené à une meilleure issue [2.93]. Le processus d'appel d'offres était loin de favoriser le libre marché parce que la SAAQ entretenait une relation anormalement proche avec SAP; or, un appel d'offres doit favoriser un maximum de concurrence pour permettre la sélection de la meilleure valeur dans l'intérêt public [2.94]. À ce sujet, Guy Cossette, un directeur du développement des ventes pour SAP à l'époque de l’appel d'offres, a expliqué devant la Commission que *la capacité de payer du client détermine le prix soumissionné par l'éditeur de PGI* [2.95]. Autrement dit, un soumissionnaire détermine ses prix non pas en fonction de la valeur de ses produits, mais plutôt du montant qu'elle estime pouvoir soutirer des organismes publics. Une meilleure concurrence aurait pu mettre davantage de pression sur les soumissionnaires pour qu'ils abaissent leurs prix, mais la SAAQ a choisi de l'étouffer.


## 12. Les recommandations

Le Commission Gallant a formulé 26 recommandations en réponse aux déboires de la SAAQ. Celles-ci sont organisées en cinq catégories :

1. Créer une entité centralisée spécialisée en transformation numérique de l'État [2.96]. Sans expertise de pointe en la matière, l'État dépend de consultants externes pour effectuer sa transformation, ce qui le place en situation de vulnérabilité et l'empêche de bâtir une expertise interne. De telles entités existent dans plusieurs pays, dont l'Estonie, la France, le Royaume-Uni ou l'Australie, et soutiennent les institutions publiques dans leurs projets technologiques. La Commission recommande de garantir le financement de l'entité, d'obliger les organismes publics à y avoir recours pour effectuer leurs projets de transformation, et de charger l'entité d'évaluer la maturité technologique des organisations.
2. Resserrer les règles de gouvernance des sociétés d'État [2.97]. Contrairement à la législation fédérale, la législation québécoise définit mal les responsabilités des ministres à l'égard des sociétés d'État sous leur tutelle. Cette ambiguïté a contribué aux dérapages et au manque de transparence de la SAAQ durant la réalisation du programme CASA. La Commission recommande donc de clarifier les responsabilités des ministres et redéfinir l'autonomie des société d'État, mais aussi de préciser les obligations de leur conseil d'administration en matière de reddition de compte et de sélection de leur présidence.
3. Faire évoluer les lois et règlements pour assurer le succès des projets numériques [2.98]. Une des raisons à l'origine du fiasco de la SAAQ a été sa trop grande ambition à vouloir réaliser un programme trop vaste en trop peu de temps. Les experts en transformation numérique recommandent plutôt de réaliser ce genre d'initiative avec de petites composantes modulaires et facilement réutilisable pour éviter les gaspillage. La Commission recommande d'instaurer une limite de 50 millions $ par projet. Les règlements entourant le processus d'octroi de contrats de projets technologiques devrait selon elle aussi être modernisée, de même que la notion de « programme », soit un ensemble de projets, afin de mieux encadrer leur déroulement.
4. Favoriser la transparence et l'accès à une information fiable [2.99]. La SAAQ manquait gravement de rigueur et d'éthique dans ses redditions de compte. Les informations qu'elle transmettait au gouvernement différaient selon l'intervenant, occultaient une partie de la réalité, ou constituaient carrément des mensonges. La Commission recommande que les société d'État soient astreintes à des redditions de compte centralisées et faciles à consulter en plus de garantir l'indépendance de leurs auditeurs.
5. Bonifier les pouvoirs des remparts institutionnels de l'État québécois [2.100], c'est-à-dire, ceux de l'Autorité des marchés publics et du Commissaire au lobbyisme du Québec pour combattre plus efficacement le gaspillage des fonds publics, par exemple, en élargissant leurs pouvoirs d'enquête et encadrant davantage les processus d'appel d'offres. La Commission propose aussi de réformer la Loi sur les commissions d'enquête pour en faciliter la mise sur pieds, les travaux préliminaires et l'inclusion de témoins.


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
  - [2.63] page 293
  - [2.64] pages 294 et 295
  - [2.65] page 296
  - [2.66] page 297
  - [2.67] page 302
  - [2.68] page 299
  - [2.69] page 306
  - [2.70] page 310
  - [2.71] page 315
  - [2.72] page 317
  - [2.73] page 331
  - [2.74] page 360
  - [2.75] pages 361 et 362
  - [2.76] page 365
  - [2.77] page 367
  - [2.78] pages 368 et 369
  - [2.79] pages 372 et 373
  - [2.80] pages 379 et 380
  - [2.81] page 383
  - [2.82] page 384
  - [2.83] page 388
  - [2.84] page 389
  - [2.85] pages 389 et 390
  - [2.86] pages 391 et 392
  - [2.87] page 396
  - [2.88] page 410
  - [2.89] pages 398 et 399
  - [2.90] page 461
  - [2.91] pages 483 à 489
  - [2.92] pages 490 à 497
  - [2.93] pages 443 à 446
  - [2.94] pages 447 à 450
  - [2.95] page 207
  - [2.96] page 503
  - [2.97] page 511
  - [2.98] page 517
  - [2.99] page 525
  - [2.100] page 533
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
- [14] Nicolas Lachance. "Fiasco SAAQclic: des policiers mettent en joue par erreur la famille d’un garçon atteint du cancer" (5 septembre 2025). Le journal de Québec. https://www.journaldequebec.com/2025/09/05/fiasco-saaqclic--des-policiers-mettent-en-joue-par-erreur-la-famille-dun-garcon-atteint-du-cancer
- [15] Martin St-Louis et al. "CASA/SAAQclic : coûts, échéanciers et qualité" (février 2025). Vérificateur général du Québec. https://www.vgq.qc.ca/Fichiers/Publications/rapport-annuel/212/VGQ_Fevr2025_ch2_web.pdf
  - [15.1] page 12
  - [15.2] page 2
  - [15.3] pages 34 et 35
- [16] Bobby Hellard. "TSB outage: CEO Paul Pester quits after IT meltdown" (4 septembre 2018). ITPro. https://www.itpro.com/it-infrastructure/30990/tsb-outage-news
- [17] Slaughter and May. "An Independent Review Following TBD's Migration onto a New IT Platform in April 2018" (October 2019). page 50. https://www.tsb.co.uk/news-releases/slaughter-and-may.html
- [18] Keumars Afifi-Sabet. "TSB’s IT disaster pinned on ‘big bang’ approach to migration" (20 novembre 2019). ITPro. https://www.itpro.com/business-strategy/digital-transformation/354155/tsbs-it-disaster-pinned-on-big-bang-approach-to
- [19] Jim McCarter et al. "Ontario's Electronic Health Records Initiative" (Octobre 2009). Office of the Auditor General of Ontario. https://www.auditor.on.ca/en/content/specialreports/specialreports/ehealth_en.pdf
  - [19.1] pages 11 et 12
  - [19.2] page 48
- [20] "EHealth scandal a $1B waste: auditor" (7 octobre 2009). CBC. https://www.cbc.ca/news/canada/toronto/ehealth-scandal-a-1b-waste-auditor-1.808640
- [21] Karen Hogan et al. "Pandémie de COVID-19 - ArriveCan" (2024). Bureau du vérificateur général du Canada. https://publications.gc.ca/collections/collection_2024/bvg-oag/FA3-186-2024-fra.pdf
  - [21.1] paragraphe 1.33 à la page 9
  - [21.2] paragraphe 1.50 à la page 20
  - [21.3] paragraphe 1.69 aux pages 24 et 25
  - [21.4] page 4
- [22] Lydia DePillis. "Meet CGI Federal, the company behind the botched launch of HealthCare.gov" (16 octobre 2013). The Washington Post. https://www.washingtonpost.com/news/wonk/wp/2013/10/16/meet-cgi-federal-the-company-behind-the-botched-launch-of-healthcare-gov/
- [23] Jory Heckman. "How Healthcare.gov’s botched rollout led to a digital services revolution in government" (30 juillet 2025). Federal News Network. https://federalnewsnetwork.com/technology-main/2025/07/how-healthcare-gov-botched-rollout-led-to-a-digital-services-revolution-in-government/
- [24] "Obamacare site designer CGI of Montreal loses contract" (10 janvier 2014). CBC. https://www.cbc.ca/news/business/obamacare-site-designer-cgi-of-montreal-loses-contract-1.2491841
- [25] Glenn A. Fine. "The Federal Bureau of Investigation's Trilogy Information Technology Modernization Project" (15 mai 2005). United States Department of Justice. https://web.archive.org/web/20050515012739/https://www.usdoj.gov/oig/testimony/0502/final.pdf
- [26] Institut professionnel de la fonction publique du Canada (IPFPC). "Le système de paye Phénix a neuf ans : la débâcle de plusieurs milliards de dollars" (27 février 2025). PR Newswire. https://www.newswire.ca/fr/news-releases/le-systeme-de-paye-phenix-a-neuf-ans-la-debacle-de-plusieurs-milliards-de-dollars-808705462.html
- [27] Katie Simpson. "Minister not briefed on more critical independent Phoenix payroll analysis before rollout" (22 septembre 2016). CBC News. https://www.cbc.ca/news/politics/minister-not-briefed-on-independent-phoenix-analysis-1.3773148