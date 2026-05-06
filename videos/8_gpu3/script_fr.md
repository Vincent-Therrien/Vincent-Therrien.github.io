# Comment créer des images 3D

Les ordinateurs génèrent des images 3D en projetant des formes sur un plan, les convertissant en
pixels et ajustant leurs textures et leurs nuances. On va voir comment ça fonctionne et pourquoi les
GPU sont si efficaces pour cette application.


## I. Projection

On commence par les points. Notre objectif est de projeter ce nuage de points 3D sur une surface 2D.
Une solution consiste à imiter le fonctionnement des appareils photo sténopés. La lumière entre par
l'ouverture de l'appareil et est projetée sur un capteur qui interprète le signal comme une image.

On place la caméra virtuelle à l'origine du système de coordonnées, à l'intersection des axes X, Y
et Z. La caméra est orientée vers l'axe Z, où se trouve le nuage de points. Pour obtenir l'image 2D
projetée, on calcule le trajet que la lumière trace de chaque point vers le capteur. La lumière se
propage en ligne droite. En observant le plan ZY, on constate que la trajectoire d'un rayon lumineux
décrit des triangles semblables, ce qui nous permet de calculer la position du point projeté sur
l'axe Y. On procède de la même manière en regardant dans l'autre plan pour déterminer la position
sur l'axe X. En répétant cette opération pour tous les points, on obtient une projection du nuage de
points.

L'image qu'on vient d'obtenir est inversée parce que l'optique fonctionne comme ça. Notre cerveau ou
les caméras la redressent ensuite. Mais c'est pas nécessaire pour les graphiques 3D. On peut
modifier l'équation pour obtenir les sommets sur un plan image plutôt que sur un capteur simulé et
obtenir une image droite directement.

L'équation est très simple parce que j'ai aligné la caméra avec le système de coordonnées. Si, par
exemple, on fait pivoter la caméra et qu'on la déplace, l'équation précédente n'est plus valide
parce qu'elle ne décrit plus comment la lumière atteint la caméra. Mais voici une astuce : on peut
ramener la caméra à sa position initiale et appliquer la même transformation inverse à l'objet. Ça
change pas la position de l'objet par rapport à la caméra, mais ça recentre la caméra à l'origine du
système de coordonnées. On retrouve notre situation initiale et on peut réutiliser la même équation
pour projeter les points.

Pour y arriver, on utilise les coordonnées homogènes. Jusqu'à présent, on a représenté les points en
coordonnées cartésiennes, qui utilisent trois éléments, un pour chaque axe. Les coordonnées
homogènes utilisent quatre éléments. Les trois premiers sont identiques, et le dernier est égal à un
pour les points. À première vue, ça semble pas très utile, mais les coordonnées homogènes
simplifient les transformations. Par exemple, on peut représenter les translations et les rotations
par des multiplications matricielles. Voici une matrice de translation : c'est un un tableau 4x4
qu'on peut multiplier par les coordonnées homogènes pour obtenir la position translatée. On peut
aussi utiliser une matrice de rotation pour modifier l'orientation d'un objet. Mieux encore, on peut
enchaîner des matrices et les multiplier pour obtenir une nouvelle matrice décrivant une
transformation complète. Une autre propriété intéressante des matrices de transformation est qu'on
peut facilement calculer leur inverse, ce qui donne la transformation opposée. Ainsi, on peut
annuler les transformations et ramener les objets à leur configuration initiale.

On utilise les multiplications matricielles pour projeter les points. Une matrice modèle configure
d'abord la position et l'orientation de l'objet. Ensuite, une matrice de vue transpose l'objet dans
le système de coordonnées de la caméra. Cette matrice est l'inverse de la matrice qui décrit la
configuration de la caméra. On retrouve ainsi notre situation initiale et on peut réutiliser
l'équation précédente pour projeter les points. Mais cette équation ne représente qu'un cas
particulier de projection. Il y a en fait plusieurs façons de projeter des images.

Les projections en perspective imitent la perception visuelle, alors les objets loin de la caméra
semblent plus petits que ceux qui sont proches. Le champ de vision est un paramètre qui contrôle la
largeur que la caméra perçoit. Avec un angle d'environ 60 degrés, la projection semble naturelle
parce qu'elle correspond approximativement à la vision humaine. Un champ plus large donne des
proportions exagérées et un champ plus étroit donne une image plus plate. On peut jouer avec le
champ de vision pour créer des effets intéressants. Par exemple, dans le film Jaws, il y a un plan
où la caméra se rapproche de l'acteur alors que le champ de vision s'élargit. Ça s'appelle un
travelling compensé. Ça donne l'impression que l'arrière-plan s'éloigne à mesure que le personnage
s'approche. Ça n'a pas l'air réaliste, mais ça crée un effet artistique. À part le champ de vision,
on peut paramétrer la projection perspective avec les plans proche et lointain, qui délimitent
l'espace affiché à l'écran, ainsi que le rapport d'aspect de l'image. Ces paramètres sont intégrés
dans une matrice de projection, qu'on ajoute à une chaîne de matrices. Pour obtenir la projection
2D, il faut multiplier toutes ces matrices par les coordonnées du sommet à projeter. Finalement, on
divise les trois premiers éléments des coordonnées homogènes par le dernier. C'est ce qu'on appelle
la division perspective.

La projection perspective est la plus répandue en infographie, mais il y en a un autre type qu'on
appelle parallèle. Elle ne déforme pas les proportions des objets, alors les objets loin de la
caméra semblent aussi grands que les objets qui en sont proches. Un type de projection parallèle,
dite arthographique, est équivalent à l'utilisation d'une caméra perspective avec un champ de vision
infiniment petit. Le résultat n'est pas réaliste, mais il facilite la comparaison des tailles
d'objets, ce qui est utile en architecture et en ingénierie pour mesurer facilement les dimensions.

Pour résumer, on peut obtenir des images 2D à partir de points 3D en multipliant leurs coordonnées
par les matrices modèle, de vue et de projection, puis en effectuant la division perspective. Ces
calculs sont facilement parallélisables parce que chaque sommet de la scène est multiplié par la
même matrice. Il s'agit d'une forme de parallélisme de données : on effectue les mêmes calculs sur
différentes données d'entrée, ce qui permet leur exécution indépendante. Les GPU ont été conçus pour
exécuter efficacement le parallélisme des données. Ils peuvent donc effectuer des multiplications
matricielles à une échelle bien plus grande que les CPU et atteindre des performances supérieures.
Les nuages ​​de points comme celui-ci sont utilisés dans de plusieurs applications, par exemple, en
numérisant des environnements avec des lidars. Mais, en infographie 3D, on veut généralement éviter
les espaces entre les points.


## II. Rastérisation

À la place, on utilise des polygones pour représenter les surfaces solides, et il est possible de
créer des objets complexes en combinant plusieurs polygones. Pour simplifier, on décompose les
polygones en triangles et on projette les points à l'écran par multiplication matricielle et
division perspective. On doit maintenant convertir ces coordonnées 2D en pixels. C'est ce qu'on
appelle la rastérisation.

On commence par restreindre les calculs à un rectangle qui encadre les points, parce qu'on sait que
les pixels situés en dehors de cette zone ne font pas partie du triangle. Ensuite, on définit trois
équations, une pour chaque côté du triangle, et on applique cette condition pour déterminer quels
pixels sont à l'intérieur du triangle. Ce calcul est facilement parallélisable sur GPU parce que
c'est une forme de parallélisme de données. On calcule la même équation sur différentes données
d'entrée, sur différents pixels dans ce cas-ci, et c'est ainsi qu'on projette les triangles sur un
écran.

Ça, c'est la procédure de base pour rastériser des triangles, mais les logiciels graphiques modernes
utilisent plusieurs techniques d'optimisation pour accélérer le rendu. Par exemple, ils utilisent un
tampon de profondeur pour suivre la profondeur apparente de chaque pixel. Ainsi, un triangle situé derrière un
autre ne sera pas dessiné par-dessus un triangle plus proche de la caméra. On peut aussi utiliser
l'élimination de faces arrière pour ignorer les triangles qui ne font pas face à la caméra. C'est
pourquoi, quand un personnage sort des limites d'une zone, les murs ont l'air disparaître. Ils sont
toujours là, mais le moteur graphique les montre d'un seul côté pour réduire les calculs. Les
logiciels graphiques coupent aussi les triangles hors du champ de vision de la caméra pour éviter de
les afficher. C'étaient seulement quelques techniques d'optimisation simples. Il y en a plusieurs
autres.

Maintenant, on sait quelle zone de l'écran est occupée par les triangles projetés, et on doit
déterminer la couleur de chaque pixel. Ça dépend de la surface. Si c'est une couleur uniforme, on
peut juste l'appliquer à tous ses pixels. On peut créer des objets intéressants avec des couleurs
unies, mais vous êtes probablement d'accord pour dire que c'est un peu limité. Pour ajouter des
détails, on peut coller des textures sur les surfaces.


## III. Textures

Et, bien sûr, on peut pas simplement superposer des textures sur les triangles projetés parce que
les textures auraient alors une mauvaise perspective. C'est pas réaliste. On doit associer les
pixels des triangles projetés à des coordonnées de texture de manière à suivre la projection.

Pour ça, on calcule les coordonnées barycentriques. Elles précisent la position de chaque pixel du
triangle par rapport à son centre. Ensuite, on utilise ces équations pour déterminer les coordonnées
UV, qui indiquent l'emplacement correspondant de chaque pixel sur la texture. Ainsi, on peut faire
correspondre les pixels du triangle à ceux de la texture et l'afficher en 3D.

Ça marche bien avec une texture haute définition, mais si la texture est trop petite ou si le
triangle est trop grand, on obtient des contours nets correspondant à différents pixels. Le résultat
est généralement inesthétique. On interpole donc les couleurs entre les pixels pour obtenir des
transitions plus douces. L'interpolation était plus apparente dans les anciens jeux vidéo parce
qu'ils utilisaient des images basse résolution, mais elle est devenue moins évidente dans les jeux
modernes. Les coordonnées barycentriques et l'interpolation des couleurs sont aussi facilement
parallélisables sur les GPU parce qu'elles peuvent être calculées indépendamment.

Jusqu'ici, on a réussi à reproduire l'aspect des jeux 3D du début des années 90. La projection est
juste, les textures sont affichées avec une perspective correcte, mais le rendu est très simple et
peu réaliste. C'est dû en grande partie à l'absence de nuances. La lumière change l'apparence des
environnements. On s'en rend pas toujours compte, mais quand l'éclairage est trop uniforme, les
choses ont l'air un peu anormale. Face à ce constat, un nouveau type de programme, les nuanceurs, a
été inventé.


## IV. Nuanceurs

À l'origine, ces programmes modifiaient la couleur des pixels projetés. Ça permet, par exemple, de
simuler la réflexion de la lumière. Quand elle rencontre une surface lisse comme de l'eau calme,
elle est réfléchie comme dans un miroir : c'est la réflexion spéculaire. Quand elle rebondit sur une
surface rugueuse comme du bois brut, elle s'éparpille : c'est la réflexion diffuse. Les nuanceurs
peuvent simuler les réflexions spéculaire et diffuse en fonction de la position d'unesource
lumineuse, la position de la caméra, la géométrie de l'objet et les propriétés du matériau, pour
accroître le réalisme.

Les nuanceurs offrent bien d'autres possibilités. L'une des plus connues est l'ombrage de
celluloïdes, qui applique un seuil aux couleurs pour donner l'impression qu'une image a été
dessinée. Les nuanceurs peuvent aussi inverser les couleurs, simuler l'éclat des métaux, modifier
l'éclairage, et ainsi de suite. Et, vous l'aurez deviné, les nuanceurs sont faciles à accélérer sur
les GPU parce qu'ils peuvent s'exécuter en parallèle. À l'origine, les nuanceurs servaient à créer
des effets visuels, mais ils sont devenus de plus en plus polyvalents au fil du temps. Par exemple,
les multiplications matricielles utilisées pour la projection étaient effectuées par des
instructions fixes dans la chaîne de traitement graphique. Maintenant, les logiciel d'infographie
modernes utilisent des nuanceurs de point pour effectuer ces opérations, et on peut les
personnaliser.

Si vous vous demandez pourquoi les GPU excellent dans un domaine particulier, c'est presque toujours
grâce à la parallélisation. Les CPU et GPU effectuent les mêmes opérations arithmétiques, mais les
GPU sont conçus pour les exécuter simultanément à une plus grande échelle, ce qui les rend
particulièrement performants pour le parallélisme des données. Et les opérations graphiques,
projeter des sommets à l'écran, rastériser des polygones, ajouter des textures et appliquer des
nuanceurs, toutes sont facilement parallélisables. Une chaîne de traitement graphique typique
comporte bien d'autres opérations. J'en ai présenté les principales, mais un cadre moderne nous
permet de personnaliser encore plus de paramètres.

J'ai parlé des principes de l'infographie 3D, mais pas de sa programmation. On utilise généralement
des cadres graphiques comme OpenGL ou Vulkan, qui gèrent les opérations complexes. Je vais
probablement faire une vidéo pour expliquer comment les utiliser. J'aimerais aussi expliquer
d'autres applications, comme l'accélération des réseaux neuronaux ou des moteurs physiques par les
GPU. Il y a aussi des développements géopolitiques intéressants entre les États-Unis et la Chine
concernant les semi-conducteurs, un sujet intéressant à traiter. Et si vous avez d'autres idées,
vous pouvez toujours -


# Lectures supplémentaires

- [1] Multiplications matricielles : https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/les-operations-sur-les-matrices-m1467
- [2] Matrices de transformation : https://ablondin.uqam.ca/files/inf5071/hiv2019/07-transformations.pdf
- [3] Tutoriel sur les caméras avec OpenGL : https://songho.ca/opengl/gl_camera.html
- [4] Animations pour les matrices modèles-vue-perspective : https://jsantell.com/model-view-projection/
- [5] Explication de la rastérisation : https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/rasterization-stage.html
- [6] Explications sur les coordonées UV : https://medium.com/nerd-for-tech/texture-mapping-using-barycentric-weights-c0395058eaab
- [7] Explication des nuanceurs avec OpenGL : https://learnopengl.com/getting-started/shaders
- [8] Luke James. "Nvidia prepares shipment of 82,000 AI GPUs to China as chip war lines blur — H200 shipments with 25% tax to begin as US loosens restrictions" (2025). tom's Hardware. https://www.tomshardware.com/tech-industry/semiconductors/nvidia-prepares-h200-shipments-to-china-as-chip-war-lines-blur


# Resources

- Image d'un nuage de points prise avec un Lidar : https://lidar.gov.bc.ca/pages/program
- Image d'un circuit imprinmé : https://www.iqsdirectory.com/articles/printed-circuit-boards.html
- Image d'un plan d'architecture : https://www.archdaily.com/catalog/us/products/18805/best-practices-orthographic-views-enscape/206357?ad_source=neufert&ad_medium=gallery&ad_name=open-gallery
- Modèle 3D : "TeaScroll Clubhouse - Teapot Prop" (https://skfb.ly/6D8nL) by Anaïs Faure is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
- Modèle 3D : "England Tea Cup" (https://skfb.ly/6WZNH) by chung_the_artist is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
- Modèle 3D : "Table" (https://skfb.ly/6BYHM) by yryabchenko is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
