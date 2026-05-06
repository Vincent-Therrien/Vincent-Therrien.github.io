# Feux de forêt et limites informatiques

Cette page est le script de la vidéo disponible à https://youtu.be/3mawXsPqdbs

J'ai beaucoup pensé aux feux de forêt cet été. Ces dernières années, plusieurs d'entre eux ont été
catastrophiques. Ils ne brûlent pas seulement les forêts, ils forcent aussi des évacuations [1], ont
un impact sur notre santé [2] et détruisent des infrastructures [3]. Avec les changements
climatiques, les chercheurs anticipent une ampleur et une imprévisibilité accrues des feux de forêt
[4].

Je me suis intéressé à la façon dont les programmes informatiques aident les services de lutte
contre les incendies. Ils utilisent toutes sortes de technologies, comme des cartes interactives [5]
et des drones [6] pour visualiser la propagation des incendies, et des applications mobiles pour
informer le public [7] [8]. Mais je veux me concentrer sur les **programmes de modélisation des incendies**,
qui aident les professionnels à comprendre le comportement des feux de forêt [9](page
3), et on va apprendre leur fonctionnement.


## Simulation numériques

Le premier type de programmes que nous verrons sont les simulations numériques. Elles fonctionnent
en exécutant des modèles de propagation des incendies dans des environnements virtuels pour prédire
l'évolution d'un incendie réel. Comme vous pouvez l'imaginer, les simulations doivent trouver le
juste équilibre entre précision et rapidité de calcul. Ce serait génial de pouvoir simuler chaque
branche et chaque feuille dans une forêt pour prédire les feux avec la plus grande précision
possible, mais ce serait beaucoup trop lent. À la place, on utilise des modèles simplifiés qui se
rapprochent de la réalité, et de nombreux modèles de ce type ont été proposés.

En 1972, Richard Rothermel [9], un scientifique du service forestier de l'USDA, a mis au point un
modèle de propagation des feux de surface. Ce modèle simplifie les feux de forêt en un lit de
combustible uniforme. Dans ce contexte, « combustible » signifie simplement « matière inflammable »,
ça peut être de l'herbe ou du bois. Le feu brûle du combustible, ce qui libère de l'énergie qui
chauffe le combustible voisin jusqu'à ce qu'il atteigne sa température d'inflammation. À ce
moment-là, il commence à brûler et le feu se propage. Notre objectif est de calculer la vitesse de
propagation du feu. Pour ce faire, nous prenons le flux thermique, c'est-à-dire la vitesse à
laquelle le feu transmet la chaleur au combustible, et nous le divisons par la quantité de chaleur
nécessaire pour amener le combustible à son point d'inflammation, ce qui nous donne la vitesse de
progression du feu. Pour résoudre cette équation, on doit déterminer ces deux termes.

Premièrement, le flux thermique indique la quantité d'énergie absorbée par le combustible. La
chaleur peut être transférée de trois manières principales : la conduction, lorsque deux corps en
contact direct échangent de la chaleur ; la convection, lorsqu’un fluide comme l’air assure les
transferts de chaleur entre les corps ; et le rayonnement, quand la chaleur est émise par des ondes
électromagnétiques [10]. Ces mécanismes interagissent avec le combustible de manière complexe. La
composition du combustible détermine l'intensité et la hauteur du feu. Le vent et les pentes
inclinent les flammes [9](page 11), ce qui favorise les transferts de chaleur convectifs et
radiatifs, ainsi que les contacts directs entre les flammes. On *peut* utiliser des équations de
dynamique des fluides pour calculer le flux de chaleur à partir de ces paramètres, mais cela
représente une charge de calcul importante, surtout dans les années 70. Rothermel et son équipe ont
plutôt déterminé le flux de chaleur à partir d’expériences en laboratoire. Ils ont fabriqué des lits
de combustible à petite échelle et mesuré leur vitesse de combustion pour différents types de
combustibles, vitesses du vent et angles d'inclinaison, et ont obtenu une équation de flux de
chaleur paramétrée.

L’autre terme à déterminer est la chaleur de pré-allumage, c’est-à-dire la quantité d’énergie que le
feu doit transmettre au combustible avant de s’enflammer. On peut la calculer en prenant la
différence entre le point d'inflammation d'un combustible et la température ambiante, puis en
multipliant cette différence par la capacité thermique massique combustible, c'est-à-dire l'énergie
nécessaire à son élévation de température. Mais il faut aussi tenir compte de la teneur en humidité
du combustible. On obtient alors une équation de chaleur de préinflammation comprenant certains
paramètres [9](page 11). On peut se rendre sur place pour prélever des échantillons de combustible
et déterminer ces variables, mais on peut aussi utiliser des graphiques les répertoriant pour des
types de combustibles connus [9](page 43).

L'équation complète donne la vitesse de propagation, ce qui permet d'estimer la vitesse de
propagation d'un incendie. Cependant, comme on l'a vu, ce modèle simplifie considérablement les
choses. Il suppose une répartition uniforme du combustible, ce qui est le cas en laboratoire, mais
pas en zone sauvage. Il est également limité aux feux de surface ; il ne permet pas de prédire les
feux de cimes, qui se produisent lorsque les flammes atteignent les branches des arbres. De l'avis
même de Rothermel, ce modèle n'est pas adapté à la prévision d'un incendie en cours, car il manque
de fiabilité. Mais sa simplicité permet de le calculer facilement à la main ou avec une calculatrice
programmable TI-59 de pointe, Ce qui a facilité son adoption [11]. Le modèle a été perfectionné par
des chercheurs ultérieurs afin de combler ses lacunes et il est toujours utilisé par des programmes
modernes et plus précis de modélisation des incendies comme FlamMap [12], FARSITE [12] ou BehavePlus
[13].

Pour utiliser ces programmes, il faut d'abord obtenir des données décrivant un terrain réel. Une
base de données contenant les données nécessaires est LANDFIRE, gérée par le Service forestier des
États-Unis et le ministère de l'Intérieur. Elle fournit une topologie du territoire américain, ainsi
que des modèles de combustibles et des informations sur la canopée, c'est-à-dire la hauteur et la
densité du feuillage des arbres [14]. LANDFIRE a été initialement conçu pour étudier les feux de
forêt, mais l'ensemble de données est devenu si complet qu'il est également utilisé pour des projets
de restauration écologique et des études de bilan carbone. Le gouvernement canadien gère des bases
de données similaires pour son propre territoire [15], ainsi que le gouvernement australien [16] et
d'autres pays. L'entretien d'ensembles de données représente un effort considérable, mais les feux
de forêt causent des milliards de dollars de dommages chaque année [17]; leur surveillance est donc
un bon investissement.

Ici, j'ai utilisé les données LANDIFRE pour réaliser une simulation FARSITE qui prédit la
propagation d'un feu en fonction du point d'inflammation initial et des conditions météorologiques.
Le modèle de Rothermel permet de calculer la vitesse de propagation, mais ce n'est qu'un élément
parmi d'autres. Le principe de Huygens-Fresnel simule la propagation 2D en traitant chaque point du
périmètre de l'incendie comme une source de chaleur [18]. D’autres équations simulent les feux de
cimes [19] [20] et d’autres phénomènes. De nombreuses équations sont en jeu, mais il s'agit d'une
approximation qui n'est pas toujours valable dans certains contextes, comme la simulation des
interactions entre des feux [21]. D’autres programmes, comme Prometheus, développé au Canada,
utilisent des approximations similaires, mais s’appuient sur des modèles différents [22](page 14).
Les chercheurs continuent d'améliorer ces programmes informatiques pour les rendre plus précis et
plus faciles à maintenir [23].

Je me suis concentré sur les modèles empiriques, qui dérivent des équations à partir d'observations.
Nous pouvons également utiliser des modèles basés sur la physique comme FDS [24] ou FIRETEC [25],
qui utilisent la dynamique des fluides numérique pour simuler la propagation d'un incendie dans un
espace 3D. Encore une fois, ces simulations ne sont pas parfaites ; elles font des approximations,
mais elles permettent de modéliser les phénomènes avec plus de précision et d'obtenir de meilleurs
résultats. Parallèlement , elles sont plus coûteuses en calcul et plus longues à exécuter. Tous les
programmes de modélisation des incendies sont limités par la vitesse de calcul ; il y a toujours un
compromis entre le réalisme et la rapidité d'obtention des résultats. Au lieu de viser des
simulations parfaites, les services de lutte contre les incendies développent des modèles pratiques
qui se rapprochent de la réalité à un niveau approprié, en fonction de leurs objectifs.


## Apprentissage automatique

Outre les simulations numériques, un II. Apprentissage automatique type plus récent d'outils de
modélisation des feux de forêt est celui des modèles d'apprentissage automatique. Je sais qu'on est
tous tannés de l'entendre, mais un modèle d'apprentissage automatique apprend à faire une tâche en
analysant une grande quantité de données au cours d'un processus appelé entraînement [26]. Par
exemple, un modèle peut ingérer des images satellite et apprendre à prévoir les feux de forêt.
Lorsqu'on lui présente une image satellite qu'il n'a jamais vue auparavant, le modèle prédit les
feux potentiels. Bien sûr, il n'est pas garanti qu'il obtienne toujours les résultats escomptés,
mais un apprentissage adéquat peut donner de bons résultats.

L'apprentissage automatique est particulièrement efficace lorsque nous disposons d'une grande
quantité de données de haute qualité, et c'est le cas ici. Par exemple, l'ensemble de données ERA5
contient des observations météorologiques des années 1940 à aujourd'hui [27] et la Base de données
nationale sur les feux de forêt du Canada [28] recense les feux de forêt survenus depuis les années
1970.

Les modèles entraînés avec ces données peuvent surpasser les techniques de prévision plus anciennes.
Pour illustrer cela, je vais parler de GraphCast [29], un modèle d'apprentissage automatique de
prévision météorologique. GraphCast représente la météo sous la forme d'une grille
latitude-longitude de 0,25, ce qui donne environ 1 million de points pour l'ensemble de la planète.
Chaque point correspond à plusieurs variables, comme la température ou la pression, ce qui nous
permet d'obtenir environ 236 millions de valeurs au total. Cela représente la météo mondiale à un
instant T. Cette représentation est transmise à un réseau neuronal graphique [30] organisé selon une
configuration encodeur-processeur-décodeur. Cela signifie que le modèle mappe d'abord l'entrée à une
représentation interne qui est traitée de manière itérative, puis décodée par la couche finale dans
son format d'origine. Ça Donne une prévision météorologique pour 6 heures. Pour prédire plus loin
dans le temps, on peut renvoyer cette prévision au modèle et obtenir une autre prévision pour 6
heures; c'est ce qu'on appelle l'autorégression. Techniquement, on peut répéter cette opération
autant de fois qu'on veut pour prédire la météo à un horizon arbitraire, mais les prévisions
deviennent de moins en moins précises.

C'est parce que la météo est très sensible aux petits effets. De minuscules différences de vitesse
du vent ou de température peuvent sembler peu susceptibles d'influencer la météo au départ, mais
leur impact s'amplifie avec le temps. Une façon simple de visualiser ce phénomène est le double
pendule. Il s'agit d'un appareil constitué de deux tiges pouvant tourner indépendamment. Prenons
maintenant deux pendules identiques, faisons en sorte que l'angle initial de leur tige extérieure
diffère d'un degré, puis relâchons-les. Au début, les deux pendules se déplacent pratiquement de la
même manière, mais la faible différence de configuration initiale s'amplifie progressivement. Si on
attend assez longtemps, leurs mouvements deviennent complètement différents, non pas à cause du
hasard ou de facteurs externes, mais à cause de configurations initiales légèrement différentes.
C'est ce qu'on appelle le chaos [31], et c'est un domaine de recherche à part entière. Certains
systèmes, comme les pendules doubles ou l'atmosphère, sont extrêmement sensibles aux conditions
initiales, ce qui les rend difficiles à prévoir. Même avec des mesures très détaillées, de petites
perturbations locales peuvent affecter le système de manière imprévisible, ce qui limite la
fiabilité de nos prévisions à long terme [29].

GraphCast demeure néanmoins performant, comparable au Système intégré de prévision (SIP), LA
référence pour les prévisions météorologiques à moyen terme. L'IFS fonctionne essentiellement comme
un modèle physique. Il doit résoudre de nombreuses équations complexes, ce qui rend ses prévisions
coûteuses en calculs. GraphCast, quant à lui, est long à entraîner, mais il apprend à extraire les
caractéristiques pertinentes des données pour établir des prévisions, ce qui accélère
considérablement ses prédictions. GraphCast présente quelques inconvénients : sa gestion de
l'incertitude est moins bonne que celle de l'IFS et sa résolution spatiale est inférieure, mais il
s'améliorera certainement avec le temps [29].

Les modèles mondiaux de prévision météorologique comme GraphCast sont utiles aux services de lutte
contre les incendies. Ils permettent par exemple d'anticiper les foyers d'incendie potentiels, mais
l'apprentissage automatique a également été appliqué spécifiquement à la prévision des feux de
forêt. Et, tout comme la météo, les feux de forêt sont chaotiques. Les braises peuvent s'envoler et
déclencher des incendies ailleurs, le vent peut changer de direction, la pluie peut se pointer; ces
événements ont un impact imprévisible sur les incendies.

Il existe des modèles de prévision des feux de forêt de code source ouvert [32] [33] [34]. Au lieu
d'utiliser des données globales comme GraphCast, ils utilisent des données locales, car ils se
concentrent sur les phénomènes à petite échelle. Les données d'entrée peuvent être une grille dont
les cellules correspondent à une zone spécifique et contiennent des mesures telles que la présence
ou l'absence d'incendie, l'humidité du sol ou la température moyenne. Une façon d'analyser ce type
de données est d' utiliser un réseau neuronal avec des couches convolutives qui extraient les
caractéristiques des cellules voisines et des couches denses qui traitent ensuite les données pour
obtenir des prédictions.

Un des problèmes avec l'apprentissage automatique est que, dans la plupart des cas, on ne comprend
pas vraiment ce qui se passe en coulisses. Dans les simulations numériques comme FARSITE, la
documentation permet de voir précisément quelles équations sont utilisées pour déterminer l'effet de
variables comme la pente sur la propagation du feu. Avec l'apprentissage automatique, on n'a pas
vraiment accès à ces informations : les modèles dérivent implicitement des équations en analysant de
nombreux exemples, mais on ne sait pas exactement comment ils y sont parvenus. Ils apprennent
probablement que la pente affecte la propagation du feu d'une manière ou d'une autre, mais
l'influence précise de cette variable ne nous est pas accessible sous forme d'équation claire.
Certains modèles [35] sont conçus spécifiquement pour être explicables, mais l'interprétation de
leurs prédictions demeure complexe. Un autre défi réside dans le manque de transparence des
entreprises privées qui développent des modèles de prévision des incendies [37] [38] [39] : elles ne
divulguent ni leurs architectures ni les données utilisées pour l'entraînement. Et, oui, je sais,
elles doivent payer leurs employés, c'est normal qu'elles préservent certains secrets commerciaux,
c'est juste que ça rend leurs modèles plus difficiles à valider.

L'apprentissage automatique est très prometteur, mais son application à la prévision des feux de forêt
est encore relativement récente et pose des problèmes d'interprétation.


## Gestion du territoire

Je me suis concentré sur la façon dont les programmes informatiques peuvent prédire les incendies;
maintenant je veux parler de ce qu'on peut faire avec. Les cas d'utilisation les plus
évidents sont la préparation des plans de lutte contre les incendies et les évacuations, mais ils
sont également utiles pour la gestion du territoire.

Tout d'abord, le feu fait partie intégrante de l'écologie de la planète et en fait partie depuis des
millions d'années [40]. Quand un feu ravage une zone, il augmente la quantité de lumière solaire
disponible au sol et libère des nutriments. Des espèces pionnières adaptées à ce type
d'environnement aride le colonisent et le restaurent [41]. Certaines de ces espèces, comme les
séquoias géants [42] et les bouleaux blancs [43], dépendent du feu pour se reproduire : elles ne
poussent qu'en plein soleil, ce qui nécessite qu'une forêt mature brûle pour qu'elles prospèrent.
Les eucalyptus ont une stratégie encore plus mesquine : ils produisent une huile inflammable qui
intensifie les feux de forêt. Grâce à leurs mécanismes de résistance au feu, ils ont plus de chances
de survivre que les autres arbres lors d'un incendie, les surpassant ainsi [44]. De plus, en
l'absence de feu pendant une période prolongée, les arbres peuvent devenir trop nombreux et les
matières inflammables s'accumuler, causant des incendies potentiellement plus importants et
incontrôlables [45]. L'élimination excessive du feu nuit à de nombreuses espèces et rend les
catastrophes plus dangereuses.

Les peuples autochtones ont compris l'importance du feu et ont développé les brûlages dirigés : ils
allumaient intentionnellement de petits feux, ce qui présentait de multiples avantages : par
exemple, cela favorisait la croissance de plantes utiles [46] [52] et réduisait la probabilité de
grands incendies [47]. Je tiens à souligner que les écosystèmes sont variés et ne bénéficient pas
des mêmes types de feux. Certains sont adaptés aux incendies moins fréquents, et les brûlages
dirigés peuvent leur être nocifs [66]. Les peuples autochtones n'utilisaient pas les brûlages
dirigés partout; leur utilisation du feu était diversifiée et adaptée à des régions et à des besoins
spécifiques [67].

Les lois coloniales ont rendu les brûlages dirigés illégaux, ce qui a entraîné des feux de forêt
plus graves [53]. Cependant, les mentalités ont évolué au fil du temps : les organismes de lutte
contre les incendies, initialement concentrés sur la lutte contre les incendies à tout prix, ont
fini par reconnaître le feu comme nécessaire à la protection de l’environnement. Maintenant, ils
peuvent laisser brûler certains feux de forêt non dangereux sans intervention et déclencher des
brûlages dirigés [48], même si cette idée a d'abord suscité un certain scepticisme [11] [53]. Il
existe également des initiatives modernes menées par des communautés autochtones pour effectuer des
brûlages dirigés sur leurs terres [49].

Notez que je continue de les appeler des brûlages dirigés. Tous les feux ne sont pas bons, surtout
lorsqu'ils sont déclenchés à proximité de propriétés humaines par des personnes inexpérimentées et
laissées sans surveillance, ce qui peut entraîner des catastrophes et des évacuations. Environ 85 %
des feux de forêt sont d'origine humaine aux États-Unis [50]. Cette proportion est plus basse au
Canada [51] en raison de la densité de population plus faible, mais elle reste non négligeable.
Réduire le nombre d’incendies déclenchés involontairement par l’homme fait partie d'une gestion
responsable des terres.

Les brûlages dirigés font également partie de la gestion des terres, mais ils ne constituent pas une
solution parfaite et universelle. Ils n'éliminent pas complètement le risque d' incendies majeurs;
dans de rares cas, ils peuvent même devenir incontrôlables [54] et ne conviennent pas à certaines
zones, comme celles proches des villes. Les services de lutte contre les incendies peuvent alors
recourir à des méthodes alternatives, comme le traitement mécanique [45]. En coupant des branches ou
en défrichant des sections de forêt, ils peuvent rendre le combustible plus difficile à brûler et
créer des barrières protectrices, réduisant ainsi le risque d'incendies de forêt. Dans de nombreuses
régions éloignées, les brûlages dirigés ne sont même pas nécessaires; on peut simplement laisser les
feux brûler naturellement tout en les surveillant pour s'assurer qu'ils ne mettent personne en
danger. Choisir les bonnes techniques de gestion des terres est complexe, dépend de multiples
facteurs et deviendra encore plus difficile avec le changement climatique. Revenons maintenant au
sujet principal : les modèles informatiques sont utiles à cet effet. Ils peuvent aider les
chercheurs à identifier les régions les plus exposées aux incendies majeurs et à identifier les
zones qui bénéficieraient le plus des brûlages dirigés. Certains modèles informatiques [56] sont
conçus spécifiquement pour étudier ce sujet. Les programmes ne le font pas. Les outils de
modélisation des incendies ne remplacent pas la recherche sur le terrain, mais peuvent la compléter.

Je soulignerai également la dimension sociale de la gestion des terres : certains pourraient ne pas
comprendre l’ objectif des brûlages dirigés et décider de faire pression sur les organismes pour
qu’ils éteignent tous les incendies, même lorsque cela va à l’encontre du consensus scientifique
[55]. Et je ne les blâmerai pas : les feux de forêt peuvent être terrifiants, c'est normal de les
craindre. Plutôt que de traiter le public avec condescendance, on devrait partager des informations
claires et établir la confiance afin que les communautés et les organismes de lutte contre les
incendies puissent s'entendre sur les stratégies de gestion des terres les plus sûres et les plus
efficaces.

Et ça, les ordinateurs seuls ne peuvent pas y arriver seuls. On a vu que les outils de modélisation
des feux de forêt sont limités par la vitesse de calcul, les difficultés d'interprétation et la
nature chaotique de la réalité. Ils continueront de s'améliorer, mais au final, nous aurons toujours
besoin de professionnels qualifiés, non seulement pour sélectionner et calibrer les modèles en
fonction de leur expertise, mais aussi pour informer le public et décider des actions à
entreprendre.


# Références

- [1] Global News. "Massive wildfire in Fort McMurray prompts largest fire evacuation in Alberta’s history" (4 May 2016). https://globalnews.ca/video/2679286/massive-wildfire-in-fort-mcmurray-prompts-largest-evacuation-in-alberta-history/
- [2] Zhang et al. "Long-range PM2.5 pollution and health impacts from the 2023 Canadian wildfires" (10 September 2025). Nature. https://www.nature.com/articles/s41586-025-09482-1
- [3] Frew and Snowdon. "Jasper officials release map, list of all structures destroyed by wildfire" (27 July 2024). CBC. https://www.cbc.ca/news/canada/edmonton/jasper-alberta-wildfire-1.7277680
- [4] Canadian Climate Institute. "FACT SHEET: Climate change and wildfires" (23 July 2024). https://climateinstitute.ca/news/fact-sheet-wildfires/
- [5] Natural Resources Canada. "Interactive map". Consulted 18 September 2025. https://cwfis.cfs.nrcan.gc.ca/interactive-map
- [6] Claire McArthur. "Wildfire watch: Forest fuel mapping and drones represent the next wave of firefighting" (16 September 2023). Sierra Sun. https://www.sierrasun.com/news/wildfire-watch-forest-fuel-mapping-and-drones-represent-the-next-wave-of-firefighting/
- [7] Province of British Columbia. "BC Wildfire Service". Consulted 18 September 2025. https://play.google.com/store/apps/details?id=ca.bc.gov.WildfireInformation
- [8] SOPFEU. "SOPFEU". Consulted 18 September 2025. https://play.google.com/store/apps/details?id=ca.qc.sopfeu.app
- [9] Richard C. Rothermel. "A Mathematical Model for Predicting Fire Spread in Wildland Fuels" (1972). USDA Forest Service. https://www.fs.usda.gov/rm/pubs_int/int_rp115.pdf
- [10] "Mechanisms of Heat Transfer". LibreTexts Physics. Consulted 18 September 2025. https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_II_-_Thermodynamics_Electricity_and_Magnetism_(OpenStax)/01%3A_Temperature_and_Heat/1.07%3A_Mechanisms_of_Heat_Transfer. CC BY 4.0
- [11] Gail Wells. "The Rothermel Fire-Spread Model: Still running Like a champ" (March 2008). Fire Science Digest. https://www.firescience.gov/ords/prd/jf_jfsp/file/getfile/DIGEST/2
- [12] Missoula Fire Sciences Laboratory. "FlamMap". Consulted 18 September 2025. https://research.fs.usda.gov/firelab/products/dataandtools/flammap
- [13] Missoula Fire Sciences Laboratory. "BehavePlus". Consulted 18 September 2025. https://research.fs.usda.gov/firelab/products/dataandtools/behaveplus
- [14] "About LANDFIRE". https://www.landfire.gov/about-landfire
- [15] Government of Canada. "Canadian Forest Fire Danger Rating System (CFFDRS) Fire Behaviour Prediction (FBP) Fuel Types 2024, 30 M". https://ouvert.canada.ca/data/dataset/4e66dd2f-5cd0-42fd-b82c-a430044b31de
- [16] National Bushfire Intelligence Capability. "National fuel types map". https://research.csiro.au/nbic/national-bushfire-fuel-map/
- [17] Western Fire CHiefs Association. "What is the Financial Cost of a Wildfire?" (6 December 2022). https://wfca.com/wildfire-articles/cost-of-wildfires/
- [18] FlamMap62. "Huygens' Principle (technical documentation)". https://owfflammaphelp62.firenet.gov/index.htm#t=LegacyFARSITE%2FTech_Huygens_Principle.htm
- [19] FlamMap62. "Crown Fire (technical documentation)". https://owfflammaphelp62.firenet.gov/index.htm#t=LegacyFARSITE%2FTech_Crown_Fire.htm
- [20] Butler et al. "A radiation-driven model for crown fire spread" (2004). https://www.frames.gov/documents/catalog/spa/butler_finney_andrews_albini_2004.pdf
- [21] FlamMap62. "Limitations and Assumptions (technical documentation)". https://owfflammaphelp62.firenet.gov/index.htm#t=LegacyFARSITE%2FTech_Limitations_and_Assumptions.htm
- [22] Tymstra et al. "Development and Structure of Prometheus: the Canadian Wildland Fire Growth Simulation Model" (2010). Natural Resources Canada. https://publications.gc.ca/collections/collection_2010/nrcan/Fo133-1-417-eng.pdf
- [23] Fire Growth Model. "W.I.S.E. Overview" (2025). https://firegrowthmodel.ca/#/wise_overview
- [24] Hayajneh and Naser. "Wind and Slope Influence on Wildland Fire Spread, a Numerical Study" (2025). MDPI. https://www.mdpi.com/2571-6255/8/6/217
- [25] Canada Wildfire. "Alberta Fire Risk Analysis using FIRETEC". https://www.canadawildfire.org/firetec
- [26] IBM. "What is machine learning ?". https://www.ibm.com/think/topics/machine-learning
- [27] Climate Data Store. "ERA5 hourly data on pressure levels from 1940 to present". https://cds.climate.copernicus.eu/datasets/reanalysis-era5-pressure-levels?tab=overview
- [28] Natural Resources Canada. "Canadian National Fire Database (CNFDB)". https://cwfis.cfs.nrcan.gc.ca/ha/nfdb
- [29] Lam et al. "Learning skillful medium-range global weather forecasting" (14 November 2023). Science. https://www.science.org/stoken/author-tokens/ST-1550/full
- [30] Scarselli et al. "The Graph Neural Network Model" (2009). IEEE Transactions on Neural Networks. https://ieeexplore.ieee.org/document/4700287
- [31] Britannica. "chaos theory". https://www.britannica.com/science/chaos-theory
- [32] Finney et al. "Deep Learning for High-Resolution Wildfire Modeling" (1 December 2022). Missoula Fire Sciences Laboratory. https://research.fs.usda.gov/firelab/understory/deep-learning-high-resolution-wildfire-modeling
- [33] Zhang et al. "Deep neural networks for global wildfire susceptibility modelling" (August 2021). Ecological Indicators. https://www.sciencedirect.com/science/article/pii/S1470160X21004003
- [34] Alexandre Brown. "WildfirePrediction". https://github.com/AlexandreBrown/WildfirePrediction
- [35] Cilli et al. "Explainable artificial intelligence (XAI) detects wildfire occurrence in the Mediterranean countries of Southern Europe" (29 Semptember 2022). Scientific Reports. https://www.nature.com/articles/s41598-022-20347-9
- [36] Cynthia Rudin. "Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead" (2019). Nature Machine Intelligence. https://www.nature.com/articles/s42256-019-0048-x
- [37] Angelica Marie Sanchez. "Firebird forecasts and models wildfire spread" (20 August 2025). Waterloo News. https://uwaterloo.ca/news/firebird-forecasts-and-models-wildfire-spread
- [38] Alex Antoneshyn. "How Alberta uses artificial intelligence for wildland firefighting" (4 October 2024). CTV News. https://www.ctvnews.ca/edmonton/article/how-alberta-uses-artificial-intelligence-for-wildland-firefighting/
- [39] SKYTL. https://www.skytl.com/
- [40] Sid Perkins. "Earth’s oldest known wildfires raged 430 million years ago" (24 June 2022). Science News. https://www.sciencenews.org/article/earth-oldest-wildfire-430-million-years-ago-fossil-charcoal
- [41] Poorter et al. "Successional theories" (16 July 2023). Wiley Online Library. https://onlinelibrary.wiley.com/doi/10.1111/brv.12995
- [42] National Park Service. "Giant Sequoias and Fire". https://www.nps.gov/seki/learn/nature/giant-sequoias-and-fire.htm
- [43] Government of Canada. "Fire ecology". https://natural-resources.canada.ca/forest-forestry/wildland-fires/fire-ecology
- [44] Tumino et al. "Plant traits linked to field-scale flammability metrics in prescribed burns in Eucalyptus forest" (26 August 2019). PLOS One. https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0221403
- [45] Forest Service. "Mechanical Treatment". https://www.fs.usda.gov/managing-land/fire/mechanical-treatment
- [46] Delcourt et al. "Prehistoric Human Use of Fire, the Eastern Agricultural Complex, and Appalachian Oak-Chestnut Forests: Paleoecology of Cliff Palace Pond, Kentucky" (20 January 2017). American Antiquity. https://www.cambridge.org/core/journals/american-antiquity/article/abs/prehistoric-human-use-of-fire-the-eastern-agricultural-complex-and-appalachian-oakchestnut-forests-paleoecology-of-cliff-palace-pond-kentucky/28A3FE26094893D4889FE50C1FAD6AF1
- [47] Roos et al. "Native American fire management at an ancient wildland–urban interface in the Southwest United States" (22 September 2020). PNAS. https://www.pnas.org/doi/full/10.1073/pnas.2018733118
- [48] Forest Service. "Prescribed Fire". https://www.fs.usda.gov/managing-land/prescribed-fire
- [49] Government of British Columbia. "Cultural and prescribed fire". https://www2.gov.bc.ca/gov/content/safety/wildfire-status/prevention/prescribed-burning
- [50] National Park Service. "Wildfire Causes and Evaluations". https://www.nps.gov/articles/wildfire-causes-and-evaluation.htm
- [51] Benjamin Shingler. "Lightning-caused wildfires burn the most area in Canada, and could be more common as the climate warms" (31 May 2024). CBC. https://www.cbc.ca/news/climate/canada-wildfire-starts-1.7219681
- [52] Long et al. "The importance of Indigenous cultural burning in forested regions of the Pacific West, USA" (15 November 2021). Forest Ecology and Management. https://www.sciencedirect.com/science/article/abs/pii/S0378112721006873?via%3Dihub
- [53] Susie Cagle. "'Fire is medicine': the tribes burning California forests to save them" (21 November 2019). The Guardian. https://www.theguardian.com/us-news/2019/nov/21/wildfire-prescribed-burns-california-native-americans
- [54] Lauren Sommer. "Let It Burn: The Forest Service Wants to Stop Putting Out Some Fires" (10 January 2024). KQED. https://www.kqed.org/science/1134217/let-it-burn-the-forest-service-wants-to-stop-putting-out-some-fires
- [55] Lauren Sommer. "With Extreme Fires Burning, Forest Service Stops 'Good Fires' Too" (10 August 2021). NPR. https://www.npr.org/2021/08/09/1026137249/with-extreme-fires-burning-forest-service-stops-good-fires-too
- [56] Joint Fire Science program. "The Reburn Project". https://depts.washington.edu/nwfire/reburn/index.html
- [60] Government of Canada. "Forest fires and lightning". https://www.canada.ca/en/environment-climate-change/services/lightning/forest-fires.html
- [66] California Chaparral Institute v. Board of Forestry & Fire Protection (2025). Super. Ct. No. 37-2020-00005203-CU-TT-CTL. https://climatecasechart.com/case/california-chaparral-institute-v-board-of-forestry-fire-protection/
- [67] California Chaparral Institute. "Native Californian Fire Use". https://www.californiachaparral.org/fire/native-americans/


## Images utilisées dans la vidéo

- [57] NASA. "Earth Data". Data from 21 August 2025. Generated 20 September 2025. https://www.earthdata.nasa.gov/news/worldview-image-archive/smoke-from-fires-washington-state-u-s-british-columbia-canada
- [58] Province of Ontario. "Wildland fire behaviour". https://www.ontario.ca/page/wildland-fire-behaviour
- [59] Fractint. "A solution in the Lorenz attractor plotted at high resolution in the xz plane". Wikipedia. https://en.wikipedia.org/wiki/Lorenz_system#/media/File:Lorenz_system_r28_s10_b2-6666.png
- [61] Manzello1 amd Suzuki. "The world is burning: What exactly are firebrands and why should anyone care?" (2022). Frontiers in Mechanical Engineering. https://www.frontiersin.org/journals/mechanical-engineering/articles/10.3389/fmech.2022.1072214/full
- [62] Laurentius. "Wood ash". https://en.wikipedia.org/wiki/Ash#/media/File:Wood_ash.jpg. CC BY-SA 3.0 (no modifications).
- [63] "Two giant sequoias" (public domain). https://en.wikipedia.org/wiki/File:Sequoia_trees.JPG
- [64] "Paper birch at Acadia National Park in Maine". CC BY 3.0 (no modifications). https://en.wikipedia.org/wiki/Betula_papyrifera#/media/File:White_birch_at_Acadia_National_Park,_ME_IMG_2177.JPG
- [65] Fir0002. "Eucalyptus Forest". CC BY 3.0 (no modifications). https://commons.wikimedia.org/wiki/File:Eucalyptus_forest2.jpg
- [68] Jacob Serebrin. "Quebec man who blamed 2023 wildfires on government pleads guilty to setting 14 fires" (15 January 2024). CBC. https://www.cbc.ca/news/canada/montreal/brian-pare-pleads-guilty-to-setting-quebec-wildfires-1.7084669


## Autres références

- Glossaire trilingue de termes techniques : https://glossary.ciffc.ca/
- Entrevue avec Richard Rothermel : https://www.mtmemory.org/nodes/view/115416
- Explication détaillée du modèle de Rothermel : https://www.fs.usda.gov/rm/pubs_series/rmrs/gtr/rmrs_gtr371.pdf

