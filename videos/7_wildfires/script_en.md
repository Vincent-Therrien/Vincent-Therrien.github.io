# Wildfires and the Limits of Computers

This page is the script of the video available at https://youtu.be/3mawXsPqdbs

I've been thinking about wildfires this Summer. We've been seeing catastrophic ones in recent years,
and they don't just burn forests, they also force evacuations [1], impact our health [2],
destroy infrastructures [3]. And with climate change, researchers anticipate wildfires to
become bigger and more unpredictable [4].

I got curious about how computer programs help fire control agencies. They use all sorts of
technologies, like interactive maps [5] and drones [6] to visualize fire propagation as well as
mobile apps [7] [8] to inform the public. But what I want to focus on are
**fire modelling programs**, which help professionals understand how wildfires behave [9](page 3),
and we are going to learn how they work.


## Numerical Simulations

The first type of programs we'll see are numerical simulations. They work by running fire
propagation models in virtual environments to predict how an actual fire would turn out. As you can
imagine, simulations need to balance accuracy with computation speed. I mean, it would be cool if
they could simulate every single burning branch and leaf to predict fires as precisely as possible,
but that would be way too slow. Instead, we run simplified models that approximate reality, and
multiple such models have been proposed.

In 1972, Richard Rothermel [9], a USDA forest service scientist, developed a surface fire spread
model. It simplifies wildfires into a uniform fuel bed. In that context, "fuel" just means
"flammable material", that can be grass or timber. Fire burns fuel, which releases energy that heats
up neighboring fuel until it reaches its ignition temperature, at which point it itself starts
burning and the fire propagates forward. Our goal is to calculate the rate of spread of the fire. To
do that, we take the heat flux, that is, the pace at which fire transmits heat to the fuel, and
divide it by the amount of heat required to bring the fuel to its ignition point, that gives us the
speed at which the fire advances. To solve this equation, we need to determine these two terms.

First, the heat flux indicates how much energy the fuel is absorbing. Heat can be transferred in
three main ways: conduction, when two bodies in direct contact exchange heat, convection, when a
fluid like air mediates heat transfers between bodies, and radiation, when heat is emitted through
electromagnetic waves [10]. These mechanisms interact with the fuel in complex ways. The composition
of the fuel determines the intensity and height of the fire. Wind and slopes tilt flames, which
favors convective and radiative heat transfers as well as direct flame contacts [9](page 11). We
*can* use fluid dynamics equations to compute heat flux from these parameters, but that's pretty
computationally expensive, especially in the 70s. Rothermel and his team instead determined heat
flux from lab experiments. They made small-scale fuel beds and measured how fast they would burn for
multiple fuel types, wind speeds, slope angles, and they obtained a parametrized heat flux equation.

The other term we have to determine is the preignition heat, that is, how much energy the fire must
transmit to the fuel before it catches fire. We can calculate it taking the difference between the
ignition point of a fuel and the ambient temperature and multiplying the difference with the
specific heat of the fuel, that is, how much energy it needs to increase its temperature. But wait,
we also have to consider the moisture content of the fuel. This leaves us with a preignition heat
equation that comprises some parameters [9](page 11). We *can* go on site to sample the fuel and
determine these variables, but we can also use charts that list them for well-known fuel types
[9](page 43).

The full equation yields the rate of spread, which can be used to used to estimate how fast a fire
could propagate. But as we've seen, this model makes a lot of simplifications. It assumes that
fuel is uniformly distributed, which is the case for lab settings but not wild areas. It is also
limited to surface fires, you cannot use it to predict crown fires, which happen when flames reach
tree branches. By Rothermel's own account, this model is not suitable to forecast an ongoing fire
because it is not reliable enough. But its simplicity allows it to be easily computed by hand or by
a state-of-the-art TI-59 programmable calculator, which facilitated its adoption [11]. The model has
been refined by subsequent researchers to address its shortcomings and it is still used by modern,
more accurate fire modelling programs like FlamMap [12], FARSITE [12], or BehavePlus [13].

To use these programs, we first have to obtain data that describe a real terrain. One database with
the required data is LANDFIRE, managed by the US Forestry Service and the Department of Interior. It
provides a toppology of the US territory as well as fuel models and information about canopy, so how
high and dense the foliage of trees gets [14]. LANDFIRE was initially designed to study wildfires,
but the dataset became so thorough that it's also used for ecological restoration projects and
carbon balance studies. The Canadian government manages similar databases for its own territory
[15], as well as the Australian government [16] and other countries. Maintaining datasets represents
a large effort, but wildfires cause billions US dollars worth of damage every year [17], so
monitoring them is a good investment.

Here, I've used LANDIFRE data to run a FARSITE simulation that predicts how a fire might spread
given an initial ignition point and weather conditions. It uses Rothermel's model to compute spread
rate, but that's just one element. The Huygens-Fresnel principle simulates 2D propagation by
treating every point of the fire perimeter as a source of heat [18]. Additional equations simulate
crown fires [19] [20], and other phenomena. There are a lot of equations at play, but that is still
an approximation reality that does not hold in some contexts, like when simulating interactions
between fires [21]. Other programs, like Prometheus, developed in Canada, use similar approximations
but rely on different models [22](page 14). And researchers are still improving these computer
programs to make them more accurate and easier to maintain [23].

I have focused on empircal models, which derive equations from observations. We can also use
physics-based models like FDS [24] or FIRETEC [25], which use computational fluid dynamics to
simulate fire propagation in a 3D space. Again, those are not perfect simulations, they make some
approximations, but they can modelize phenomena more accurately and yield better results. At the
same time, they are more computationally expensive and take more time to run. All fire modelling
programs are limited by computational speed, there's always a tradeoff between how realistic and how
fast you want your results. Instead of aiming for perfect simulations, fire control agencies develop
*practical* models that approximate reality to an appropriate level, depending on their objectives.


## Machine Learning

Apart from numerical simulations, a more recent type of wildfire modelling tools are machine
learning models. I know we're all sick of hearing it, but a machine learning model learns to perform
a task by analyzing a large amount of data during a process called training [26]. For example, a
model can ingest satellite images and learn to forecast wildfires. When presented with a satellite
image it has never seen before, the model predicts potential fires. It's not guaranteed to get it
right all the time of course, but if trained correctly, it can offer good results.

Machine learning really shines when we have a large amount of high-quality data, and that's the case
here. For example, the ERA5 dataset contains weather observations from 1940s to present [27] and the
Canadian National Fire Database [28] lists wildfires that have occurred since the 70s.

Models trained with these data can outperform older forecasting techniques, and to illustrate that
I'll talk about GraphCast [29], a weather prediction machine learning model. GraphCast represents
the weather as a 0.25 latitude-longitude grid, that gives around 1 million points for the entire
planet. Each point corresponds to multiple variables, like temperature or pressure, so we obtain
around 236 million values in total. That represents global weather at a specific point in time. This
representation is fed to a graph neural network [30] arranged in an encoder-processor-decoder
configuration. This means that the model first maps the input to an internal representation that
gets processed iteratively and then decoded by the final layer back into the original format. That
gives a prediction for the weather 6 hours later. If we want to predict farther into the future, we
can feed the prediction back to the model and obtain another 6-hour prediction; this is called
autoregression. Technically, we can do that as many times as we want to predict the weather
arbitrarily far into the future, but the predictions get less and less accurate as we do that.

That's because the weather is highly sensitive to small effects. Minute differences in wind speed or
temperature may not seem like they could influence the weather much initially, but their impact
compounds over time. A simple way to visualize this phenomenon is the double pendulum. It's an
apparatus made of two rods that can rotate independently. Now, let's take two identical pendulumns,
make the initial angle of their outermost rod differ by one degree, and release them. At first, the
two pendulums move around in practically the same motion, but the little difference in their initial
configuration gradually amplifies. If we wait long enough, their motions become completely
different, not because of randomness or external factors, but all because of slightly different
start configurations. This is called chaos [31], and it's a whole field of research. Some systems,
like double pendulums or the atmosphere, are extremely sensitive to initial conditions, which makes
them hard to predict. Even if we use very detailed measurements, small, local disturbances can
affect the system in unpredictable ways, and that limits how far into the future we can reliably
predict their behavior [29].

But GraphCast it still pretty good, it is on par with the Integrated Forecasting System, the gold
standard for medium-range weather predictions. The IFS esentially functions as a physics-based
model. It has to solve a lot of complex equations, so its predictions are computationally expensive.
Meanwhile, GraphCast takes a lot of time to train, but it learns to extract relevant features from
data to make forecasts, which makes its predictions much faster. GraphCast has some drawbacks, it
handles uncertainty more poorly than the IFS and it has a lower spatial resolution, but it will
certainly get better over time [29].

Global weather prediction models like GraphCast are useful for fire control agencies, for instance,
they help anticipate where lightning might start fires, but machine learning has also been applied
specifically to wildfire prediction. And, just like the weather, wildfires are chaotic. Pieces of
ember can fly off and trigger fires elsewhere, wind can change direction, rain can show up, these
events affect fires in unpredictable ways.

There are some open-source wildfire prediction models [32] [33] [34]. Instead of using global
data like GraphCast, they use local ones because they focus on small-scale phenomena. The input data
can be a grid whose cells correspond to a particular area with measurements like whether a fire is
occurring or not, soil humidity, or average temperature. One way to analyze that kind of data is to
use a neural network with convolutional layers that extract features from neighboring cells and
dense layers that further process data to obtain predictions.

One problem with machine learning is that, in most cases, we don't really understand what's going on
under the hood. In numerical simulations like FARSITE, you can read the documentation to see exactly
what equations are used to determine the effects of variables like slope on fire propagation. With
machine learning, we don't really have access to this, the models implicitly derive equations by
analyzing a lot of examples, but we don't know exactly how they did it. They probably learn that
slope affects fire propagation in some way, but the precise influence of that variable is not
accessible to us as a clear equation. Some models [35] are designed specifically to be explainable,
but there remain some difficulties to interpret their predictions [36]. Another challenge is that
private companies developing fire prediction models [37] [38] [39] are not fully transparent, they
don't disclose their architectures or the data they've used for training. And, yeah, I know, they
have to pay their employees, it's normal that they maintain some trade secrets, it's just that this
makes their models harder to validate.

Machine learning is really promising, but its application to wildfire prediction is still relatively
new and comes with some interpretability challenges.


## Managing Fire

I've focused on **how** computer programs can predict fires, now I want to talk about **what** we
can do with those predictions. The most obvious usecases are preparing fire suppression plans and
evacuations, but they are also useful for land management.

For starters, fire is an inherent part of the planet's ecology and has been part of it for millions
of years [40]. When fire ravages an area, it makes more sunlight available on the ground and it
releases nutrient. Pioneer species adapted to that kind of barren environment then colonize and
restore it [41]. Some of these species, like giant sequoias [42] and white birches [43], depend on
fire to reproduce: they only grow in full sun, so a mature forest has to burn down for them to
thrive. Eucalypti have an even pettier strategy: they make a flammable oil that intensifies
wildfires, and thanks to their fire-resistance mechanisms, they are more likely to survive than
other trees during a fire, thus outcompeting them [44]. Also, if there's no fire for an extended
duration, trees might become crowded and flammable material may accumulate, leading to potentially
larger, more uncontrollable fires [45]. Suppressing fire too much hurts multiple species and makes
catastrophes more dangerous.

Indigenous people understood the importance of fire and developed controlled burns: they would
intentionally start small fires, which had multiple benefits: for instance, it promoted the growth
of beneficial plants [46] [52] and made large fires less likely [47]. I want to emphasize that
ecosystems are varied and do not benefit from the same types of fire. Some are adapted to less
frequent fires, and carrying out controlled burns can harm them [66]. Indigenous people did not use
controlled burns everywhere, their use of fire was diverse and tailored to specific regions and
needs [67].

Colonial laws made controlled burns illegal, which has led to more severe wildfires [53], but
attitudes have shifted over time: fire control agencies, initially laser-focused on suppressing fire
at all cost, have come to recognize fire as necessary for the environment. Nowadays, they can let
some non-dangerous wildfires burn without intervention and they start controlled burns [48], even
though this idea was met with some skepticism at first [11] [53]. There are also modern initiatives
led by native communities to carry out controlled burns on their land [49].

Notice that I keep calling them **controlled** burns. Not all fires are good, especially when they
are triggered near human estate by people with no experience and left without supervision, that can
cause disasters and evacuations. Around 85 % of wildfires are caused by humans in the US [50].
That proportion is lower in Canada [51] because the population density is lower, but it remains
non-negligible. Reducing the number of fires inadventently triggered by humans is part of
responsible land management.

Controlled burns are also part of land management, but they are not a perfect, all-encompassing
solution. They don't fully eliminate the risk of large fires, in rare cases, they *can* go out of
hand [54], and they are not suitable for some areas, like those close to cities. Fire control
agencies can use alternative methods in these cases, such as mechanical treatment [45]. By cutting
branches or bulldowzing through sections of a forest, they can make fuel more difficult to burn and
create protective barriers, which renders wildfires less likely. And in many remote areas,
controlled burns are not even required, we can just let fires burn naturally while monitoring them
to ensure that they don't put anyone at risk. Selecting the right land management techniques is
complex, it depends on multiple factors, and it will become more challenging with climate change.
Now, back to the main topic, computer models are useful for that. They can help researchers identify
regions more at risk of large fires and find areas that would benefit the most from controlled
burns. Some computer models [56] are designed specifically to investigate that. Programs don't
replace on-site research, but they can complement it.

I will also highlight the social component of land management: people might not understand the
purpose of controlled burns and decide to pressure agencies into suppressing all fires, even when
that goes against scientific consensus [55]. And I will not shame these people, wildfires can be
terrifying, it's normal to fear them. Rather than patronizing the public, we should share clear
information and build trust so that communities and fire control agencies can agree on the safest,
most efficient land management strategies.

And that's a thing that computers alone cannot do. We've seen that wildfire modelling tools are
limited by computation speed, interpretability challenges, and the chaotic nature of reality. They
will keep getting better, but at the end of the day, we will always need qualified professionals,
not only to select and calibrate models based on their expertise, but also to inform the public and
decide the right actions.


## References

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


## Image References

- [57] NASA. "Earth Data". Data from 21 August 2025. Generated 20 September 2025. https://www.earthdata.nasa.gov/news/worldview-image-archive/smoke-from-fires-washington-state-u-s-british-columbia-canada
- [58] Province of Ontario. "Wildland fire behaviour". https://www.ontario.ca/page/wildland-fire-behaviour
- [59] Fractint. "A solution in the Lorenz attractor plotted at high resolution in the xz plane". Wikipedia. https://en.wikipedia.org/wiki/Lorenz_system#/media/File:Lorenz_system_r28_s10_b2-6666.png
- [61] Manzello1 amd Suzuki. "The world is burning: What exactly are firebrands and why should anyone care?" (2022). Frontiers in Mechanical Engineering. https://www.frontiersin.org/journals/mechanical-engineering/articles/10.3389/fmech.2022.1072214/full
- [62] Laurentius. "Wood ash". https://en.wikipedia.org/wiki/Ash#/media/File:Wood_ash.jpg. CC BY-SA 3.0 (no modifications).
- [63] "Two giant sequoias" (public domain). https://en.wikipedia.org/wiki/File:Sequoia_trees.JPG
- [64] "Paper birch at Acadia National Park in Maine". CC BY 3.0 (no modifications). https://en.wikipedia.org/wiki/Betula_papyrifera#/media/File:White_birch_at_Acadia_National_Park,_ME_IMG_2177.JPG
- [65] Fir0002. "Eucalyptus Forest". CC BY 3.0 (no modifications). https://commons.wikimedia.org/wiki/File:Eucalyptus_forest2.jpg
- [68] Jacob Serebrin. "Quebec man who blamed 2023 wildfires on government pleads guilty to setting 14 fires" (15 January 2024). CBC. https://www.cbc.ca/news/canada/montreal/brian-pare-pleads-guilty-to-setting-quebec-wildfires-1.7084669


## Furher References

- Glossary of wildfire-related terms: https://www.ciffc.ca/sites/default/files/2019-03/CIFFC_Canadian_Wildland_Fire_Mgmt_Glossary_2017_10_24.pdf
- Interview with Richard Rothermel: https://www.mtmemory.org/nodes/view/115416
- In-depth explanation of the Rothermel model: https://www.fs.usda.gov/rm/pubs_series/rmrs/gtr/rmrs_gtr371.pdf
