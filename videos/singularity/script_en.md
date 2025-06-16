# AI Singularity Is A Smokescreen

Whenever I curse my eyes with the worse app in existence, I get to read the same few takes about AI.
You probably know what I'm talking about:

- "AI will replace everyone"
- "AI will never replace everyone"
- "Buy my course to avoid getting replaced by AI"
- And my favorite: "The singularity is almost here"

Most people are prone to exaggeration when they talk about the future. It's easy to predict that
cars will be self=driving by 2018 [1]. That Amazon will fully automate grocery stores [2] [3].
That programmers will get replaced [4] [5]. Not that these technologies are useless, they *are*
impressive, but they end up being less transformative than expected. The wildest exaggeration out
there is artificial general intelligence, the idea that an AI could outperform humans in any context
[6]. It's hypothetical at the moment, but tech CEOs say it's almost here [7]. It's good for the
investors I guess. One possible consequence of AGI is the singularity, a point at which machines
can improve themselves so fast that human would not be able to keep up and would get replaced [8].

I think that the singularity is a distraction. Not only because it's exaggerated, but mostly
because it shifts attention away from real issues like poor governance, low sustainability, loss of
critical thinking. They all get exacerbated by AI and we need to address them now instead of
daydreaming about the singularity. And before we start, I will just spell out that I'm not against
AI. It does contribute to science and productivity and other things. I just want to reframe the
discussion around facts instead of hype.


 ## I. Reasoning

The first point I'll address is reasoning. It's been talked to death already, but generative AI
models don't think, they replicate statistical patterns, which makes them hallucinate false
information [9]. The counterpoint you hear all the time is "sure, current models are not perfect,
but this is just the start of the hockey stick. AI will ingest more and more data, get exponentially
better, and inevitably reach superintelligence!".

The hockey stick fallacy happens, in my opinion, because of a misunderstanding of emergent
properties, that is, properties that appear when assembling elements that individually lack these
properties. A few researchers have claimed that language models display emergent properties. Small
models are weak, but they improve as you increase their size and, passed, a certain point, their
performance shoots up, as if intelligence had somehow emerged [10]. This is just a superficial
impression that appears when using simplistic metrics. There's no spark of intelligence that appears
during training. If we use better statistics, it's easy to realize that performance gradually
improves and that emergent properties are an illusion [11]. The models remain bound to the same
limitations and will continue to hallucinate, even if we mitigate them by using a bigger training
dataset [12] [13] [55]. *Maybe* true intelligence will emerge if we keep using more data or better
architectures or improvement feedback loops or whatever, but there's no proof that will happen.

The consensus at the moment is that AI does not reason because it's too different from human
cognition, but some people disagree. AI parrots intelligence, but it does it so well enough to solve
problems, which, one could say, qualifies as reasoning. Either position is valid depending on how
you define "reasoning", that's just semantics. And yet, you can find tons of people online defending
these opinions, but they will never stop debating because we don't have a universal definition of
intelligence. That's arguing for the sake of arguing. I don't find that conversation useful. We
should instead discuss the limitations of AI.

No matter how good language models gets, their hallucinations remain unpredictable. If no one steps
in to eliminate them, they might get amplified [54], which makes AI, at the moment, unsuitable for
critical applications like medicine [14] or law [15]. And even, to some degree, in less critical
applications. The translation market is projected to grow in the next years [16], not because AI
cannot translate, but because humans will always add value to translation. I'm not saying that we
should refrain from using AI or that it won't impact the job market, it can automate a lot of work
pretty well, but we have to remain aware of its limitations and realize that they will not
necessarily go away.


## II. Interpretability

Another problem with AI is interpretability, understanding how It works. A lot of models, like
neural networks, are so large and convoluted that it's hard for humans to figure out how they
generate data. Other models are hidden behind paywalls, so we cannot inspect them. Those are called
black box models: we know what goes in and what goes out, but what happens in the middle is
incomprehensible [17].

And that can cause social problems. COMPAS, for instance, is a "recidivism risk prediction tool". It
basically tries to guess how likely a criminal is to commit another crime later, and some judges in
the US use it to decide if they send people to jail [53]. COMPAS is a proprietary algorithm, so no
one outside of the company that makes it knows exactly how it works which is not ideal. If you
disagree with a judge's decision and have valid reasons for that, you can appeal and have it
revised. But imagine if the decision is based on a biased model. Or a model that uses incorrect
information. You have no way of proving that the algorithm is at fault because its inner working is
hidden, which makes sentences less transparent [18]. Black box models have other problems. When they
make wrong predictions, it's hard to understand why they made them in the first place and how to
patch them [17]. Also, black box models are often not that useful? Why funnel public funds into a
crime prediction company when you could invest that money into crime prevention?

A reason some people invoke when pushing for AI in decision-making is that humans are far from
making rational decisions, we are biased. There is evidence that stereotypes affect how judges
evaluate the work of their peers [20]. Some people argue in favor of using COMPAS precisely to
mitigate human biases [21], but as we've seen, that entails unacceptable consequences.
Interpretability is not required in many cases, like if you want to generate ideas, but in any
critical application, black box models are irresponsible because they can perpetuate bad practices.
Open-source, transparent models that can be understood do not have this flaw. We can publicly
inspect and criticize them. *Those* are the models that should be used in critical applications. No
matter how smart AGI eventually gets, if ever, we would continue to need interpretability to ensure
that it's safe.


## III. Responsibility

A related problem is responsibility: if AI makes an error or a contribution, who takes the blame or
the credit? In pretty much all justice systems, a person has to be held responsible. Air Canada, an
airline of questionable quality, claimed that it could not "be held liable for the information
provided by" a chatbot that had hallucinated a compensation to a customer. A British Columbian
tribunal found Air Canada liable though, it's never legal to lie to your customers, even when you do
it through a chatbot [22]. Something similar happens with copyright: only humans can file patent
demands because AI cannot be credited for inventions [23]. AI-generated images are not protected
by copyright [24]. And I'm not worried about that changing. I don't think any regulator is
interested in transferring accountability or credit or personhood to AI because, then, anyone could
start denying their own responsibilities or claiming someone else's copyrights, it would be chaos.

But, I am worried about some decision makers delegating complex choices to computers. For instance,
in 2020, Stanford hospital executives decided to give COVID vaccines in priority to doctors working
at home instead of resident doctors working in the hospital who were much more likely to contract
the virus [25]. This happened because that decision was taken by an algorithm programmed to
prioritize older employees who, as we know, are more likely to develop complications from COVID. And
work at home, in that specific case. So the executives were well-intentioned: they calibrated the
model to protect more vulnerable employees, but when it proposed an unethical decision, the
executives accepted it thoughtlessly instead of evaluating it critically. Although legal systems
will probably continue to hold AI unaccountable, many people will try to hide behind AI to avoid
making choices themselves. Like, imagine how you'd feel if you realized that your government let
ChatGPT make decisions about healthcare [27]. Not good! We elect people to represent us as well as
they can, not mechanically execute decisions proposed by AI. There should be more transparency in
how decisions are taken, and AI use should always be disclosed.


## IV. Anthropomorphization

Another reason why people exaggerate the risks of AI singularity so much is anthropomorphization,
that is, assigning human traits to non-human things. In 2022, Blake Lemoine, an engineer at Google,
was fired after publicly saying that an AI model on which he was working was sentient [28]. Like, it
had feelings and all. This is an impression, language models approximate text, they are not alive.
But mammalian brains evolved to recognize patterns, so it's kind of expected that some people would
fall for the illusion that AI is sentient. I mean, people felt bad about forgetting their Tamagotchi
[29], it's not entirely new but it's getting more intense with LLMs.

You can find people online saying that ChatGPT is their friend [30]. Others create AI companions to
simulate interactions with deceased loved ones [31]. These people are allowed to use AI and grieve
the way they want - I want to make that clear. However they have to keep in mind that those are not
real interactions. AI companions are not friends. They are products made by companies that don't
care about their customers and will deny all responsibility when they are involved in tragic
deaths [32]. Some people seem to enjoy the idea of customizing a companion that's perfect for them
[33] instead of meeting real people, which I don't really get. Human connections are meaningful
precisely because they cannot be controlled and adapted to our every likes and needs. Modern life is
already atomized, I get why some people are drawn to AI companions, but rather than forfeiting our
interactions to tech companies, we should promote real friendship and community.

I dislike AI companions, but at least the people who use them understand that they are talking to a
machine. In most cases. Sometimes, anthropomorphization can reach, hum, dangerous levels. To be
clear: people with mental disorders should never discriminated and we have a duty to support them.
Now, I don't want to generalize, my intention is not to insult anyone, but *some* of the people who
believe that chatbots are sentient have mental disorders [34]. There are people who develop
delusions with language models and, paired with conditions like psychosis, that can cause real
distress. I'm not shaming them here, I'm saying that chatbots can amplify their symptoms, and
companies don't seem to care. And *that* worries me, not the idea that AI develops sentiments, which
I don't think will happen anyways. AI can also have the opposite effect. Limbic, for example, is a
chatbot that *encourages* people to consult mental health professionals [35]. It's not all bad, with
proper safety measures, AI can promote mental health, but its harm has to be documented and
regulated.


## V. Knowledge

A great promise of AI is its ability make knowledge more accessible. I'm skeptical of that. A 2025
study found that language models erode mental abilities [36]. This is not an opinion I have, people
who offload work to AI become worse at critical thinking. Maybe that's a reason why so many people
believe that AGI is so close. It's because they become so dependent on AI that they view it as more
intelligent than it is, not realizing that *they* got worse in the process. I've heard people say
that writing as a skill is going to disappear because the only thing that matters now is our ability
to judge the quality of LLM outputs. But evaluating a text is a skill developed by putting your own
ideas into words and being critical of the things you read. If we start accepting everything
chatbots say, we'll just become less skilled and more insipid. AI is also linked to a growth in
low-quality scientific publications [37], so even though some AI models do contribute to science if
we use them properly, others can spill disinformation. This growing wave of AI slop science scares
me more than the singularity ever could. So I'm not saying you have to stop using AI, I'm saying:
learn its negative side effects to make more informed decisions about your usage.

Another potential problem with AI is its capacity to indoctrinate. Language models have been shown
to be more persuasive than humans in text-based interactions [38]. There's already a worldwide
problem with disinformation and, if we throw in persuasive chatbots and deepfakes, that could get
even worse. That can also fail spectacularly, the Twitter chatbot is a good example of that, but I
can definitely imagine things taking a darker turn if the AI is controlled by a non-intoxicated
person. To be honest, I don't really know how we should handle the harms of AI on mental abilities
and disinformation. I guess school curricula will have to get updated to improve critical thinking.
Hum. Next topic.


## VI. Resources

The amount of resources that AI uses is becoming more and more problematic. Training AI models, as
we know, takes a lot of data, and to amass as much of them as possible, tech companies have shown
little respect for copyright. They use pirated books and overlook the terms of use of websites to
extract data. And there's always the argument that "actually, AI does not violate copyright, it
transforms data into a new form, just like how humans don't copy but take inspiration from other
work, so it's not infringing on any copyright...". It is infringing on copyright. Just ask OpenAI
what they think when someone takes inspiration in their work [39]. People don't want their work
stolen, so the Internet has started to close up. Terms of use have changed, and websites require
payment to access their data. At one point, the volume of fresh data might diminish and make models
harder to train [40].

I could point out the amount of electricity and water that generative AI consumes, which has been
abundantly discussed [41]. But to be honest I don't think that is ever going to motivate any change.
Search engines consume electricity, that has never prevented us from using them. Same for Bitcoins
[42]. Yes, language models are worse for the environment than Internet searches, yes that's
horrible, and, yes, people don't care. Our lifestyle is becoming less sustainable over time because
companies and making useless products and people are buying them [43]. If generative AI makes money,
companies will just build power plants to deliver it. And that trend will continue unless we rethink
this entire economic system.

Also, what's the point of using this much AI? We are flooded with AI-generated images, podcasts,
opinions. Bots are replying to each other's comments. People are using it to write their emails. An
article I really like is "I'd rather read the prompt" [44]. It explains that the output of LLMs is
often less valuable than what you provided to it because chatbots add a lot of filler words. And I
don't like wasting my time reading a text that could have been a single sentence.


## VII. Automation

Ok new section: will AI automate jobs to the point of causing mass unemployment. It depends on who
you ask, some think that new jobs will keep appearing to replace the automated ones [62], others,
that AI will make everyone obsolete [63]. Depending on your mood, that can lead to an unemployment
hellscape OR a new renaissance where people are free from working. We don't know how things will
turn out. Conjecturing about the future can be fun but it's not really useful, so let's instead talk
about how workers should react to automation.

It's clear that, given our current economic model, large-scale automation would be a nightmare.
The companies making the chatbots or robots or whatever would hoard all the money and inequalities
would get even worse. Our laws are not thought out to manage that kind of scenario, and, honestly,
if AGI were to happen tomorrow, I fully believe that governments would remain completely static and
just watch as a few people syphon all the money to the top as they've been doing for decades [45].
Again, this is not a new problem and we have to address it. We have to organize into stronger
unions, use more open-source software, vote laws that force AI companies to repay the money they
make from stolen material, fight tax havens. This does not happen overnight, it requires cooperation
between countries and between social groups, it's so hard to do but it's possible. Instead of
theorizing about whether AGI will eventually replace us we should realize that workers are CURRENTLY
treated unfairly and we need to fight inequalities more.

Inequality is one thing, another problem related to automation that I hear less often talked about
is why we overproduce and overconsume so much in the first place. As I said in the last section, we
are producing more and more stuff in an unsustainable way. I don't have numbers to back this up, but
if we were to decrease our consumption levels, reducing the average workweek to like two days a week
is probably conceivable. A lot of jobs are not very useful, they are just meant to keep the system
running or make useless products. If society were organized to be more efficient, we could all work
less. But we are not headed in this direction, we always want more. The fantasy of AI making us all
live like billionaires will never happen because, once you achieve it and reach a new consumption
baseline, people will keep wanting even more stuff than their neighbor instead of enjoying their
free time [47]. That cannot go on forever because our planet has finite resources, so sooner or
later we'll have to learn to be satisfied with what we have.


## VIII. Takeover

The last thing I want to address is the AI takeover. The Skynet scenario - I've never watched the
movie - in which AI becomes evil. History is full of doomsayers who predicted the end of the world,
but this time, it's real guys.

There are some reasons why a takeover *could* happen. A malicious government could develop a system
that gets a little too good at maintaining public order. An AI model trained to replicate human
behaviors could try to self-preserve like a human would [48].But the idea that AI completely goes
loose and no one can stop it is a fantasy. Like don't give it access to all the weapons in the first
place? And if the chabot becomes evil, just unplug it? Jumping from a boxed AI model to an
omnipresent threat requires wild leaps in logic. Whenever you read AI takeover scenarios [49], it
starts with level-headed assertions, but you always get to a point where the authors go full
fanfiction mode: out of nowhere, the AI circumvents all security mechanisms, spreads all over the
Internet, convinces humans to plug it into weapon systems, builds factories to manufacture human
killing drones, and takes over everything. But how? Missile launchers are air-gapped, you cannot
hack into them to make a firework. You cannot setup a secret weapon manufacturing plant without the
government noticing. "But AI will get supersmart! It will trick everyone! It will create physically
impossible things! If you can imagine something, AI will necessarily be able to do it!". This is not
logical argumentation. This is magical thinking. Wanna-be sci-fi writers think they are seeing the
future but they just badly parrot movie scripts.

Honestly, I think that these speculations tend to be unproductive and unhealthy. Don't get me wrong,
it's totally fine to be entertained by the idea of an AI takeover - the Matrix is one of my favorite
movies. I aso think it's good to plan in advance a legal framework to limit dangerous AI usage, and
we have to monitor AI companies, well, ALL companies, to ensure they don't do sketchy things. But,
many people who spend too much time thinking about an AI takeover end up experiencing distress over
a scenario that remains hypothetical [50]. It's like catastrophizing about nuclear war or
antimicrobial-resistant bacteria. It's good to be aware of large-scale problems and act upon them if
you can but there's no point in experiencing Angst in your daily life over them. Fearmongerers don't
realize it, but when they write sensationalistic pieces without contextualizing them properly, they
make vulnerable people panic for real. If you happen to find yourself stuck in a very negative
mindset about the future, it might be time to step back, go outside, and maybe talk to mental health
professionals. This might be *the* hot take of the video: your own mental health matters more than
the singularity ever will.


## Endsay

I guess I'll receive comments that go: "you're just in denial. AGI is progressing fast and will
become smarter than us, interpretable, accountable, and will replace us no matter what". Oh really?
Well, maybe progress in AI will stall. Maybe AI will come to be recognized as unsafe and left unused
in many applications. Vielleicht a solar flare will fry up all the GPUs on the planet. See, I can
also write fanfics instead of using real evidence. Our predictions of the future are often
exaggerated and inaccurate, and even though there are many reasons to be enthusiastic about AI, I
don't buy into all of its promises. Besides, even if AGI ever happens, all the points I've presented
would remain pertinent. The purpose of this video is not only to temperate the exaggerations around
AI, it is mainly to bring more focus on problems that should really be getting more attention.

I'd compare our attitude toward the singularity with climate change. Some people like to speculate,
write books, and make movies about an eventual climate catastrophe. Some real projects, like that
Norwegian seed vault [51], are even designed with a doomsday scenario in mind. And sure, that
doesn't hurt if you have time and cash to burn, but climate change is not some cool faraway problem
to daydream about. It's not an exciting movie scenario. We are in it, and it's bleak. It's watching
forests burn down in indifference, electing politicians who promise to gut sustainability programs.
Talking about the end of the world instead of focusing on real problems has not motivated change, it
just made us bored and unresponsive.

And we see the same thing happening with AI. Companies with hypothetical technologies and weird
projects [52] distract us from real problems and attempt to disempower workers. That makes us less
effective at organizing and pushing for better regulations that we need *now*. I'm not scared of AI,
but I am definitely scarred of what powerful people will do with it. I mean, look at what they
did to the Internet. It was supposed to connect everyone, to make dictatorships impossible, to make
education free. And it did fulfill its promises in some regards - it IS easier to connect and learn
than it was before, but large companies have also gifted us with echo chambers and mental health
problems. If we want AI to benefit everyone, we have to use open-source software as much as
possible. Vote for people who care about our rights. Denounce companies that don't respect them.
Criticize overconsumption. Organize with other workers to negotiate more effectively. Responsible AI
usage won't happen overnight, but these actions will make technology safer, promote sustainability,
and give more power to the people.


## References

Hinweis: The order is a little messed up because I added new sources and removed the ones I ended
up not using during editing.

- [1] Wikipedia. "List of predictions for autonomous Tesla vehicles by Elon Musk". https://en.wikipedia.org/wiki/List_of_predictions_for_autonomous_Tesla_vehicles_by_Elon_Musk
  - The fact alluded in the video is described in the third row of the table, which refers to:
    Voelcker, John (October 16, 2015). "Tesla Autopilot: The 10 Most Important Things You Need To Know". Green Car Reports. Retrieved 1 August 2023.
- [2] Connor Jewiss. "Why Amazon Fresh’s ‘just walk out’ tech is the shopping experience we all need" (May 17, 2022). Stuff. https://www.stuff.tv/features/amazon-fresh-just-walk-out-is-the-shopping-experience-we-need/
- [3] Alex Bitter. "Amazon's Just Walk Out technology relies on hundreds of workers in India watching you shop" (April 3, 2024). Business Insider. https://www.businessinsider.com/amazons-just-walk-out-actually-1-000-people-in-india-2024-4?op=1
- [4] Scott Wu. "Introducing Devin, the first AI software engineer" (March 2, 2024). Cognition AI. https://cognition.ai/blog/introducing-devin
- [5] "AI Won’t Solve Your Developer Productivity Problems for You" (October 18, 2024). Uplevel. https://uplevelteam.com/blog/ai-for-developer-productivity
- [6] Ben Goertzel. "Artificial General Intelligence: Concept, State of the Art, and Future Prospects" (Dec 29, 2014). Journal of Artificial General Intelligence. https://sciendo.com/article/10.2478/jagi-2014-0001
- [7] perplexity.ai. "Altman Predicts AGI by 2025" (Nov 11, 2024). https://www.perplexity.ai/page/altman-predicts-agi-by-2025-tUwvEDkiQ9.auqNAMT0X5A
  - Also in support of this point: Darren Orf. "Humanity May Achieve the Singularity Within the Next 6 Months, Scientists Suggest" (Jun 01, 2025). Popular Mechanics. https://www.popularmechanics.com/science/a64929206/singularity-six-months/
- [8] Vernor Vinge. "The coming technological singularity: How to survive in the post-human era" (December 1, 1993). NASA. Lewis Research Center, Vision 21: Interdisciplinary Science and Engineering in the Era of Cyberspace. https://ntrs.nasa.gov/citations/19940022856
- [9] Subbarao Kambhampati. "Can large language models reason and plan?" (6 March 2024). Annals of the New York Academy of Sciences. https://nyaspubs.onlinelibrary.wiley.com/doi/10.1111/nyas.15125
  - Preprint available for free at https://arxiv.org/abs/2403.04121
- [10] Jason Wei et al. "Emergent Abilities of Large Language Models" (15 Jun 2022). ArXiv. https://arxiv.org/pdf/2206.07682
- [11] Rylan Schaeffer, Brando Miranda, Sanmi Koyejo. "Are Emergent Abilities of Large Language Models a Mirage?" (2023).  Advances in Neural Information Processing Systems 36 (NeurIPS 2023). https://proceedings.neurips.cc/paper_files/paper/2023/hash/adc98a266f45005c403b8311ca7e8bd7-Abstract-Conference.html
- [12] Ziwei Xu, Sanjay Jain, Mohan Kankanhalli. "Hallucination is Inevitable: An Innate Limitation of Large Language Models" (2024). ArXiv. https://arxiv.org/abs/2401.11817
- [13] Iman Mirzadeh at al. "GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models" (2024). https://arxiv.org/pdf/2410.05229
- [14] Tao Tu et al. "Towards conversational diagnostic artificial intelligence" (2025). Nature. https://www.nature.com/articles/s41586-025-08866-7
- [15] Zhang v. Chen, 2024 BCSC 285. https://www.bccourts.ca/jdb-txt/sc/24/02/2024BCSC0285cor1.htm
- [16] ASTUTE Analytica. "Global Translation Service Market" (2025). https://www.astuteanalytica.com/industry-report/translation-service-market
- [17] Cynthia Rudin. "Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead" (2019). Nature Machine Intelligence. https://www.nature.com/articles/s42256-019-0048-x
  - Preprint available for free at https://arxiv.org/pdf/1811.10154
- [18] Iñigo De Miguel Beriain. "Does the use of risk assessments in sentences respect the right to due process? A critical analysis of the Wisconsin v. Loomis ruling" (2018).  Law, Probability and Risk. https://academic.oup.com/lpr/article/17/1/45/4877957
- [20] John Szmer et al. "Who Shapes the Law? Gender and Racial Bias in Judicial Citations" (2023). APSR. https://www.cambridge.org/core/journals/american-political-science-review/article/who-shapes-the-law-gender-and-racial-bias-in-judicial-citations/497727B157CB9C6C4C6E03A02B92145C#
- [21] Konstantin Chatziathanasiou. "Beware the Lure of Narratives: 'Hungry Judges' Should Not Motivate the Use of 'Artificial Intelligence' in Law". (2022). German Law Journal. https://www.cambridge.org/core/journals/german-law-journal/article/beware-the-lure-of-narratives-hungry-judges-should-not-motivate-the-use-of-artificial-intelligence-in-law/734C6F05568636FE09A26D1C4D52D627
- [22] Moffatt v. Air Canada, 2024 BCCRT 149 https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do
- [23] United States Patent and Trademark Office, Department of Commerce. "Inventorship Guidance for AI-Assisted Inventions" (2024). https://www.federalregister.gov/documents/2024/02/13/2024-02623/inventorship-guidance-for-ai-assisted-inventions
- [24] THALER v. PERLMUTTER et al, No. 1:2022cv01564 - Document 24 (D.D.C. 2023). https://law.justia.com/cases/federal/district-courts/district-of-columbia/dcdce/1:2022cv01564/243956/24/
- [25] Alyse Stanley. "A Faulty Algorithm Screwed Residents Out of Stanford’s Vaccine Distribution Plan" (2020). Gizmodo. https://gizmodo.com/a-faulty-algorithm-screwed-residents-out-of-stanfords-v-1845917350
- [26] Simon Willison's Weblog. "A computer can never be held accountable". https://simonwillison.net/2025/Feb/3/a-computer-can-never-be-held-accountable/
  - This reference is not used in the final version.
- [27] Dani Blum and Maggie Astor. "White House Health Report Included Fake Citations" (May 29, 2025). The New York Times. https://www.nytimes.com/2025/05/29/well/maha-report-citations.html
- [28] Tiffany Wertheimer. "Blake Lemoine: Google fires engineer who said AI tech has feelings" (22 July 2022). BBC. https://www.bbc.com/news/technology-62275326
- [29] Wikipedia. "Tamagotchi effect" (2025). https://en.wikipedia.org/wiki/Tamagotchi_effect
- [30] Derek Thompson. "The antisocial century, in three parts" (8:26 AM - May 26, 2025). Twitter (X). https://x.com/DKThomp/status/1926978180054724748
- [31] Mouhamad Rachini. "Some Canadians are using AI simulations to reconnect with their deceased loved ones" (Sep 21, 2023 11:10 AM EDT). CBC Radio. https://www.cbc.ca/radio/thecurrent/some-canadians-are-using-ai-simulations-to-reconnect-with-their-deceased-loved-ones-1.6949550
- [32] Kate Payne. "An AI chatbot pushed a teen to kill himself, a lawsuit against its creator alleges" (6:32 PM UTC−4, October 25, 2024). Associated Press. https://apnews.com/article/chatbot-ai-lawsuit-suicide-teen-artificial-intelligence-9d48adc572100822fdbc3c90d1456bd0
- [33] "Paris Hilton's My New BFF". https://www.sidereel.com/tv-shows/paris-hiltons-my-new-bff
- [34] Miles Klee. "People Are Losing Loved Ones to AI-Fueled Spiritual Fantasies" (May 4, 2025). Rolling Stone. https://www.rollingstone.com/culture/culture-features/ai-spiritual-delusions-destroying-human-relationships-1235330175/
- [35] Rhiannon Williams. "A chatbot helped more people access mental-health services" (February 5, 2024). MIT Technology Review. https://www.technologyreview.com/2024/02/05/1087690/a-chatbot-helped-more-people-access-mental-health-services/
- [36] Michael Gerlich. "AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking" (3 January 2025). Societies. https://www.mdpi.com/2075-4698/15/1/6
- [37] Miryam Naddaf. "AI linked to explosion of low-quality biomedical research papers" (21 May 2025). Nature. https://www.nature.com/articles/d41586-025-01592-0
- [38] Francesco Salvi et al. "On the conversational persuasiveness of GPT-4" (19 May 2025). Nature Human Behavior. https://www.nature.com/articles/s41562-025-02194-6
- [39] Sean Endicott. "OpenAI and Microsoft ironically accuse DeepSeek of copyright infringement — training its cost-effective model with privileged data" (January 29, 2025). Windows Central. https://www.windowscentral.com/software-apps/openai-accuses-deepseek-of-using-data-without-permission-fails-to-see-irony
- [40] Kevin Roose. "The Data That Powers A.I. Is Disappearing Fast" (July 19, 2024). The New York Times. https://www.nytimes.com/2024/07/19/technology/ai-data-restrictions.html
- [41] World Economic Forum. "AI's energy dilemma: Challenges, opportunities, and a path forward" (Jan 21, 2025). https://www.weforum.org/stories/2025/01/ai-energy-dilemma-challenges-opportunities-and-path-forward/
- [42] Cristina Criddle. "Bitcoin consumes 'more electricity than Argentina'" (10 February 2021). BBC. https://www.bbc.com/news/technology-56012952
- [43] Earth Overshoot Day. "Past Earth Overshoot Days" (Consulted June 13, 2025). https://www.overshootday.org/newsroom/past-earth-overshoot-days/
- [44] Clayton Ramsey . "I'd rather read the prompt" (2025-05-03). https://claytonwramsey.com/blog/prompt/
- [45] Pew Research Center. "Economic Inequality" (January 9, 2020). https://www.pewresearch.org/social-trends/2020/01/09/trends-in-income-and-wealth-inequality/
- [47] LearnVest. "Would You Rather Have More Time Or More Money?" (Dec 20, 2013). Forbes. https://www.forbes.com/sites/learnvest/2013/12/20/would-you-rather-have-more-time-or-more-money/
- [48] Meinke et al. "Frontier Models are Capable of In-context Scheming" (2024-12-05). https://static1.squarespace.com/static/6593e7097565990e65c886fd/t/6751eb240ed3821a0161b45b/1733421863119/in_context_scheming_reasoning_paper.pdf
- [49] Daniel Kokotajlo at al. "AI 2027" (April 2025). https://ai-2027.com/
  - Don't waste your time reading that, there are actually good sci-fi books out there.
- [50] Alkhalifah1 et al. "Existential anxiety about artificial intelligence (AI)- is it the end of humanity era or a new chapter in the human revolution: questionnaire-based observational study" (08 April 2024). Frontiers in Psychiatry. https://pmc.ncbi.nlm.nih.gov/articles/PMC11036542/
- [51] https://www.seedvault.no/
- [52] https://www.technologyreview.com/2025/05/05/1116090/bryan-johnson-new-religion-body-is-god/
- [53] Equivant. "Debunking Misconceptions About the COMPAS Core Instrument: What You Need to Know" (2024). https://equivant-supervision.com/debunking-misconceptions-about-the-compas-core-instrument-what-you-need-to-know/
- [54] Conor Murray. "Why AI ‘Hallucinations’ Are Worse Than Ever" (6 May 2025). Forbes. https://www.forbes.com/sites/conormurray/2025/05/06/why-ai-hallucinations-are-worse-than-ever/
- [55] Jessica Hamzelou. "Bryan Johnson wants to start a new religion in which 'the body is God'" (May 5, 2025). MIT Technology Review. https://machinelearning.apple.com/research/illusion-of-thinking
- [56] Gordon, Cindy. "ChatGPT And Generative AI Innovations Are Creating Sustainability Havoc". Forbes. https://www.forbes.com/sites/cindygordon/2024/03/12/chatgpt-and-generative-ai-innovations-are-creating-sustainability-havoc/
- [57] Engel et al. "Code is law: how COMPAS affects the way the judiciary handles the risk of recidivism" (2024). Artificial Intelligence and Law. https://link.springer.com/article/10.1007/s10506-024-09389-8
- [58] Hacker News forum thread "Hallucination is inevitable: An innate limitation of large language models". https://news.ycombinator.com/item?id=39499207
- [59] Christopher Reynolds. "Air Canada ordered to pay passengers $10M in damages after class action over ticket prices" (23 April 2025). CBC. https://www.cbc.ca/news/canada/montreal/air-canada-class-action-ruling-1.7516556
- [60] Twitter post: https://x.com/MattBinder/status/1922713839566561313
- [61] Alex Reisner. "The Unbelievable Scale of AI’s Pirated-Books Problem" (March 20, 2025). The Atlantic. https://www.theatlantic.com/technology/archive/2025/03/libgen-meta-openai/682093/
- [62] Julian Horsey. "Sam Altman On How AI Will Reshape Jobs – Are You Ready?" (December 15, 2024). Geeky Gadget. https://www.geeky-gadgets.com/ai-impact-on-jobs-and-workforce/
- [63] Jim VandeHei and Mike Allen. "Behind the Curtain: A white-collar bloodbath" (May 28, 2025). Axios. https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic
- [64] Simon Walo. "‘Bullshit’ After All? Why People Consider Their Jobs Socially Useless" (July 21, 2023). Work, Employment and Society. https://journals.sagepub.com/doi/10.1177/09500170231175771
- [65] Wikipedia. "Facebook–Cambridge Analytica data scandal". https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal
- [66] J. Alas. "Facebook Accused of Exploiting Teenage Girl Insecurities — Shows Beauty Ads After They Delete Selfies" (03 June 2025, 7:37 AM BST). International Business Times UK. https://www.ibtimes.co.uk/facebook-accused-exploiting-teenage-girl-insecurities-shows-beauty-ads-after-they-delete-selfies-1734823
- [67] Instagram page "gay.fabulous" (not sure if it's originally from there though) https://www.instagram.com/p/DKVX6MRRSC4/
- [68] Stephanie Ha. "Exclusive: Carney says ‘yes’ to building a pipeline if consensus exists for one" (May 13, 2025 at 8:42PM EDT). CTV News. https://www.ctvnews.ca/politics/article/exclusive-carney-says-yes-to-building-a-pipeline-if-consensus-exists-for-one/
- [69] Wikipedia. "Hockey stick graph". https://en.wikipedia.org/wiki/Hockey_stick_graph
