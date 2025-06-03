# AI Singularity Is A Smokescreen

In January 2024, a research team at Google claimed that their large language model outperforms
doctors not only by providing more accurate diagnoses, but also by being more empathetic than
humans. As expected, the usual crowd got a little too excited about the results. You know what I'm
talking about:

- "Doctors will literally get automated"
- "AI will save us all"
- "The singularity is almost here"

But more than a year later, language models have, like, not taken over any doctor? The research was
promising but it will take much more work to adapt it into real medical applications [1], so the
reaction to it was exaggerated. That's a trend we see time and time again: a new technology, like
self-driving cars, performs well in *some* specific settings, a bunch of salesmen make hyperbolic
claims, and their promises deflate. We've also seen it with Amazon shops, smart cities, and, to some
extent, programming assistants. Not that these technologies are useless, they simply end up being
less transformative than initially announced. Of course, whenever that happens, you hear people say
"just give it a few years. They'll retrain the AI with even more data, and one day it will
inevitably become better than any human in any context!". This idea is called artificial general
intelligence. We don't have proof yet that it's possible, but tech CEOs love to predict its imminent
arrival. It's good for the investors I guess.

A hypothetical consequence of AGI is the singularity, a point at which machines can improve
themselves so fast that humans cannot keep up and would, eventually, get replaced. A lot of people
believe that, but AI still retains fundamental limitations that are difficult to address and some
jobs that may appear easy to automate, like translation, software development, or truck driving, are
in fact projected to *grow* in the next few years. So AGI is not there, but we keep hearing about.

I think that the singularity is a distraction. Not only because it is exaggerated, but mostly
because it is used to shift attention away from way more pressing issues. Things like poor
governance, loss of critical thinking, low sustainability. These problems have existed for a long
time and get exacerbated by AI. They are real, they are happening right now, and we need to address
them instead of daydreaming about the singularity. And before we start, I'll just spell out that I'm
not anti-AI. This technology does contribute in various ways to medicine and science and other
fields, however we have to reframe the discussion around AI to make it more grounded on facts
instead of hype.


## I. Reasoning

The first limitation of AI is reasoning. It's been talked to death already, but generative AI models
do not think, they replicate statistical patterns. As a result, they make up false information and
struggle with problems that they have never seen. The counterpoint you hear all the time is
that "sure, current models are not perfect, but this is just the start of the hockey stick. AI will
use more and more data, get exponentially better, and eventually reach superintelligence!". Samuel
Altman is really good at this, the next ChatGPT version is always supposed to be an all-knowing
oracle. When it's released we realize it's basically the same as before, just a bit better. So
yes, AI will keep getting better, but we cannot extrapolate an exponential growth.

The hockey stick fallacy happens, in my opinion, because of a misunderstanding of emergent
properties, that is, properties that appear when assembling elements that individually lack these
properties. A few researchers have claimed that language models display emergent properties. Small
models are weak, but they improve as you increase their size and, passed, a certain point, their
performance shoots up, as if intelligence had somehow emerged. This is just a superficial impression
that appears when using simplistic metrics. Language models do not develop intelligence, they just
get better and better at approximating human text. If we use better statistics, it's easy to realize
that emergent properties are not a thing. The models remain bound to the same limitations and will
continue to hallucinate, even if we try to mitigate them by fact-checking the responses and using a
bigger training dataset. *Maybe* true intelligence will eventually emerge if we keep using more
data or better architectures or an improvement feedback loop or whatever, but there's no proof that
will happen. People repeating that AI will cure all diseases or automate all work are literally
making things up.

Also, you could say that "actually there's no empirical difference between approximating
reasoning with language models and actually reasoning, so why no use AI models if they are more
accurate than humans on average?." Swapping humans for AI wherever it's possible is for the most
part a terrible idea. No matter how good AI gets, its hallucinations remain unpredictable - if no
one steps in to eliminate them, they might get amplified. In critical applications, like medicine or
law, that can have catastrophic consequences! And even in less critical applications, like
translation, AI will never perfectly understand all terms because their meanings are defined by
*humans*, so AI is always lagging behind, figuring out meanings that we have invented. I'm not
saying that we should refrain from using AI, it can automate a lot of work pretty well, but we have
to remain aware of its limitations. Generative AI won't replace humans everywhere because it is
fundamentally *different* from human intelligence.


## II. Interpretability

Another problem with AI is interpretability, understanding how it works. A lot of AI models, like
neural networks, are so large and convoluted that it's very hard for humans to figure out how they
generate data. Those are called a black box models: we know what goes in and what goes out, but what
happens in the middle is incomprehensible.

One of my favorite article ever discusses black box models and how not understanding them can
cause social problems. A particularly striking example in that paper is COMPAS, a "recidivism risk
prediction tool". It basically tries to guess how likely a criminal is to commit another crime
later, and some judges in the US use it to decide if they send people to jail. COMPAS is a
proprietary algorithm, so no one outside of the company that makes it knows exactly how it works and
that can make decisions more difficult to challenge. If you disagree with a judge's decision, you
can appeal and have it revised. But imagine if the decision is based on a biased model. Or a model
that uses incorrect information. You have no way of proving that the algorithm is at fault because
its inner working is hidden. It's a black box! That makes sentences less transparent and injustices
more difficult to combat.

At the same time, humans are veeeery far from making totally interpretable, rational decisions; we
are biased and rely on emotions. Judges, for instance, are more likely to condemn you to harsher
sentences if they find you unattractive, if you're not white, or if you're poor, for instance. This
is not me trying to disparage the justice system by the way, judge biases are real and extensively
documented. Some people argue in favor of using COMPAS precisely to mitigate human biases, but as
we've seen, that entails other consequences. So, which is better, imperfect humans, or
incomprehensible black box models that are theoretically less biased? Interpretability is not
required in many cases, like if you want to generate ideas, but in any critical application, black
box models are always unethical because they can amplify injustices while giving the impression that
they are addressing them. Open-source, transparent models should always be used in these cases
because they can be publicly criticized and improved. That way, we can democratically ensure that AI
respects our values and relies on recent, high quality scientific data. No matter how smart AGI
eventually gets, if ever, we would continue to need interpretability to truly understand justice,
legislation, scientific calculations, you name it.


## III. Responsibility

A related problem is responsibility: if AI makes an error or a contribution, who takes the blame or
the credit? In pretty much all justice systems, a person has to be held responsible. Air Canada is
an airline of questionable quality that, rather than paying enough customer service employees,
rolled out a chatbot to manage its _many_ customer complaints. The chatbot hallucinated a
compensation in 2022 and Air Canada pretended that it was not accountable for the hallucination
because, according to the company, AI is "an independent agent". This time, a British Columbian
tribunal found Air Canada liable and it did have to pay for the compensation because AI cannot be
held accountable for errors. Something similar happens with copyright: only humans can file patent
demands because AI cannot be credited for inventions and AI-generated images are not protected by
copyright. And I'm not really worried about that changing. I don't think any regulator is interested
in transferring accountability or credit or personhood to AI because, then, anyone could start
denying their own responsibilities or claiming someone else's copyrights, it would be chaos.

But, I am worried about some decision makers delegating complex choices to computers. For instance,
in 2020, Stanford hospital executives decided to give COVID vaccines in priority to doctors working
at home instead of resident doctors working in the hospital who were much more likely to contract
the virus. This happened because that decision was taken by an algorithm programmed to prioritize
older people who, as we know, are more likely to develop complications from COVID. And work at home,
in that specific case. So the executives were well-intentioned: they calibrated the model to protect
more vulnerable employees, but when it proposed a bad and unethical decision, the executives
accepted it without question instead of evaluating it critically. That reminds me of an old IBM
quote: "A computer can never be held accountable, therefore a computer must never make a management
decision". Although legal systems will probably continue to hold humans accountable, many people
will try to hide behind AI to avoid making choices themselves. Like, imagine how you'd feel if you
learned that your government officials let ChatGPT make decisions about healthcare or urban
planning. Not good! We elect people to represent us as well as they can, not mechanically execute
decisions proposed by AI models. Technology can help them make better decisions, but they should
always disclose it and use it reasonably. There should be more transparency in how decisions are
taken, and citizens should be encouraged to participate more in decision making.


## IV. Anthropomorphization

Another reason why people exaggerate the risks of AI singularity so much is anthropomorphization,
that is, assigning human traits to non-human things. In 2022, Blake Lemoine, an engineer at Google,
was fired after publicly saying that an AI model on which he was working was sentient. Like, it had
feelings and all. This is an impression, language models approximate human responses, they are not
sentient. However, since mammalian brains evolved to recognize patterns, it's kind of expected
that some individuals would fall for the illusion that AI is sentient. I mean, people felt bad about
forgetting their Tamagotchi, that is not entirely new but it's getting more intense.

You can find a bunch of people online saying that ChatGPT understands them better than any of their
real friends. Others create AI companions to have conversations, or simulate conversations with
deceased loved ones with chatbots. These people are allowed to use AI and grieve the way they want -
I want to make that clear. However they have to keep in mind that those are not real interactions.
AI companions are not friends. They are products made by companies that don't care about their
customers and will fight tooth and nail against paying compensations when they are responsible for
tragic deaths. Some people seem to enjoy the idea of customizing a companion and picking a friend
that's perfect for them instead of meeting people [Paris Hilton my new best friend]. I think that
human connections are precious and meaningful precisely because they cannot be controlled and
adapted to our every likes and needs. Modern life is already atomized and lonely, I get why some
people are drawn to AI companions, but rather than forfeiting our interactions to tech companies, I
think we should revamp society to promote friendship and community.

I dislike AI companions, but at least the people who use them understand that they are talking to a
machine. In most cases. Sometimes, anthropomorphization can reach, hum, dangerous levels. Now, I
don't want to generalize, my intention is not to insult anyone, but *some* of the people who believe
that chatbots are sentient have mental disorders. This is a documented phenomenon. There are people
who develop delusions with language models and, paired with conditions like psychosis, that can
cause real distress. To be clear: people with mental disorders should never discriminated and we
have a duty to support them. I'm not shaming them here, I'm saying that chatbots can isolate them
and amplify their symptoms. And *that* worries me, not the idea that AI develops sentiments, which
I don't think will happen anyways. AI can also have the opposite effect. Limbic, for example, is a
British chatbot that has been shown to *encourage* people to consult mental health professionals.
With proper safety measures, AI can promote mental health by redirecting patients to actual
professionals, but its potential harms have to be addressed.


## V. Knowledge

A great promise of AI is its ability to teach and make knowledge more accessible. There's no
shortage good reasons to be skeptical of that. Language models have been shown to erode mental
abilities. This is not an opinion I have, people who offload work to AI do become worse at critical
thinking. Maybe that's a reason why so many people believe that AGI will inevitably happen. It's
because they become dependent on AI that they view it as more intelligent than it is, not realizing
that *they* got worse in the process. Hey, imagine if AI companies pushed their models
precisely because they know people will lose their skills and become easier replace, that would be
crazy! AI is also linked to a growth in low-quality scientific publications, so even though some AI
models can and do contribute to science, others can also spill disinformation. Honestly, this
growing wave of AI science slop scares me more than the singularity ever could. Of course, AI is not
always bad to use, I do find it practical sometimes, but I'm also aware that I would get dumber if I
didn't use it reasonably.

Another potential problem with AI is its capacity to indoctrinate. A 2025 study has shown that
language models are more persuasive than humans, in text-based interactions. There's already a
worldwide problem with disinformation and, if we throw in persuasive chatbots and deepfakes, that
could get even worse. Vivian Wilson's estranged father instructed a chatbot to propagate lies on
Twitter, so that's already happening. Didn't really work this time, but I can definitely see how
things could get worse in the future. To be honest, I don't really know what to do about the
potential harm of AI on mental abilities and disinformation. I guess school curricula will have to
get updated to improve critical thinking. Hum. Next topic.


## VI. Resources

The amount of resources that AI uses is becoming more and more problematic. Training AI models, as
we know, takes a lot of data, and to amass as much of it as possible, tech companies have shown very
little respect for copyright. They use pirated books, overlook the terms of use of websites, change
terms of uses on their services to extract more data than they previously could. And there's always
the argument that "actually, AI does not violate copyright, it transforms data into a new form, just
like how humans don't copy but take inspiration from other work, so it's not infringing on any...".
It is infringing on copyright. OpenAI gets it, they freak out when a competitor takes inspiration in
their models. The Internet has started to close up because of that. People don't want their work
stolen, so they change their terms of use and require payment to access their data. At one point,
the volume of fresh data might become too small to train new models effectively. The price of these
models is also preoccupying. They are expensive to run but remain easily available because of the
large investments in the sector. When they dry up, the costs might climb.

I could also point out the amount of electricity and water that generative AI consumes, which has
been abundantly discussed. But to be honest I don't think that is ever going to motivate any change.
Search engines also consume electricity, that has never prevented us from using them, we just
generate more electricity. Bitcoins use even more energy. Yes, language models are worse for the
environment than Internet searches, yes that's horrible, and, yes, people don't care. I mean, look
at how much stuff we consume. Per capita, we buy more and more clothes, more cars, bigger cars, more
electronics, more plane tickets. We vote for climate change enablers. A lot of people like to point
the finger at large companies and say that they are the ones responsible for the climate
catastrophe, that I don't have to do anything. But we are at fault. No one is forcing us to
consume this much. We have been in an environmental crisis for decades because our modern way of
life is unsustainable, and people don't want to change it. Most emission reduction comes from new
technological innovations, not from less consumption. So I kind of roll my eyes whenever I hear
people say that the poor Californian grid has to generate one percent more electricity. People want
more AI. Companies will deliver it by building power plants and making more efficient GPUs. And
sure, the impact of AI on the environment will remain concerning, but it's one problem in an entire
unsustainable system that has to be completely changed.


## VII. Automation

Ok new section: will AI automate jobs to the point of causing mass unemployment. Most
people agree that automation is good because it can take up repetitive work and, along with a
universal basic income, could lead to a new renaissance in which people are free to do what they
want instead of work. Things don't work out like that in practice. People getting laid off just have
to find other jobs or retrain into other roles. So far, new jobs have been created to replace the
automated ones. Some people believe that trend will continue, new jobs will keep popping up, others
say that it's totally different this time. We always say that about new technology. The radio was
supposed to replace teachers, computers would lead to fifteen-hour work weeks, and now AI will
replace everyone. It's easy to exaggerate the impact of new innovations, but who knows, vielleicht
it's different this time and AI could replace everyone. We don't know yet. Conjecturing about the
future can be fun but it's not really useful, so let's instead talk about how workers should react
to automation.

It's clear that, given our current economic model, large-scale automation would be a nightmare.
The companies making the chatbots or robots or whatever would hoard all the money and inequalities
would get even worse. Our laws are not thought out to manage that kind of scenario, and, honestly,
if AGI were to happen tomorrow, I fully believe that governments would remain completely static and
just watch as a few people syphon all the money to the top because they've been doing it for
decades. Again, this is not a new problem and we have to address it. We should organize into
stronger unions, use more open-source software, implement wealth caps, vote laws that force AI
companies to repay the money they make from stolen material, fight tax havens. This does not happen
overnight, it requires cooperation between countries and between social groups, it's so hard to do
but it's possible. We are not powerless about the future. Instead of obsessing over the idea that
AGI might inevitably replace us like rich people keep saying, we should work toward these goals.

Inequality is one thing, another problem related to automation that I hear less often talked about
is why we overproduce and overconsume so much in the first place. As I said in the last section, we
are consuming more and more stuff in an unsustainable way. Economic growth has improved living
standards, contributed to education and life expectancy, but in some respects we are reaching absurd
levels, spending more and more time and energy on things that are really not necessary. You can say
that marketing is at fault and brainwashes us into consuming needlessly or that alienation from work
makes people crave entertainment. I could say it's everyone else's fault and that I never have to
question any aspect of my own lifestyle. But ultimately, we'll have to realize that we are
participating in overconsumption and that reducing it could enable to work less and protect the
environment I'm not absolving the rich here: they are deepening inequalities and we have to
undermine their power by strengthening unions and weakening monopolies. It's just that lowering
consumption levels is also part of the solution.


## VIII. Takeover

The last thing I want to address is the AI takeover. The Skynet scenario - I've never watched the
movie - in which AI becomes evil. History is full of doomsayers who predicted the end of the world,
but this time, it's real guys.

There are some reasons why a takeover *could* happen. A malicious government could develop a system
that gets a little too good at maintaining public order. Or an AI model trained to replicate human
behaviors could try to self-preserve like a human would. But the idea that AI completely goes loose
and no one can stop it is a fantasy. Like IF THE CHATBOT BECOMES EVIL JUST UNPLUG IT, and don't give
it access to all the weapons in the first place. That concept - restricting what AI is capable of
doing - is called the AI box, and although it's no infallible - an AI could try to work around it
and escape control - proper safeguards make a Skynet scenario improbable. Very few experts are
preoccupied by a full-blown AI takeover, it's just too implausible at this point.

Honestly, I think that these speculations tend to be unproductive and unhealthy. Don't get me wrong,
it's totally fine to be entertained by the idea of an AI takeover - the Matrix is one of my favorite
movies. I aso think it's good to plan in advance a legal framework to limit dangerous AI usage. But,
many people who spend too much time thinking about an AI takeover end up experiencing distress over
a scenario that remains hypothetical. It's like catastrophizing about a hypothetical nuclear war or
antimicrobial-resistant bacteria. It's good to be aware of large-scale problems and act upon them if
you can but there's no point in experiencing Angst in your daily life over them. If you find
yourself stuck in a very negative mindset about the future, it might be time to step back, go
outside, and maybe talk to mental health professionals. This might be *the* hot take of the video:
your own mental health matters more than the singularity ever will.


## Conclusion

I guess I'll receive plenty of comments that go: "you're just in denial. AGI is progressing fast and
will become smarter than us, interpretable, accountable, and will replace you no matter what". Oh
really? Well, maybe progress in AI will stall. Maybe AI will come to be recognized as unsafe and
left unused in most applications. Maybe a solar flare will fry up all the GPUs on the planet. See,
I can also write fanfictions instead of using real evidence. Our predictions of the future are
often exaggerated and ungenau, and even though there are many reasons to be enthusiastic about
AI, I don't buy into all of its promises. Besides, even if AGI ever happens, all the points I've
presented would remain relevant. The purpose of this video is not only to temperate the
exaggerations of tech CEOs, it is also to bring more focus on problems in AI that should really be
getting more attention. We should never let powerful companies use the singularity as a smokescreen
to distract us and avoid criticism.

I'd compare our attitude toward the singularity with climate change. Some people like to speculate;
write books and make movies about an eventual climate catastrophe. Some real projects, like that
Norwegian seed vault, are even designed with that scenario in mind, to rebuild society after the
apocalypse. And sure, projects like that don't hurt if you have time and cash to burn, but climate
change is not some faraway problem. We are in it! The vast majority of resources should be mobilized
to decrease emissions and address pollution *now*. Daydreaming about a full-blown *eventual* end of
the world instead of focusing on real problems has accomplished little more than making people
bored and unresponsive.

And we see the same thing happening with AI. If we let companies with hypothetical technologies and
weird projects distract us from real problems and attempt to disempower workers, it makes us less
effective at organizing and pushing for better regulations that we need *now*. I'm not scared of AI,
but I am definitely scarred of what oligarchs will do with it. So, use open-source software as much
as you can. Vote for people who care about your rights. Denounce companies that don't respect them.
Criticize overconsumption and marketing. Organize with other workers to negotiate more effectively.
These individual actions won't bring all the changes we need, but they contribute to make technology
safer, promote sustainability, and give more power to the people.


## Endsay

This video was supposed to be a quick review of a research paper, but I realized it would be cooler
to just rant about AI discourse. This is the first time I'm doing an opinion piece instead of
talking over my coding experiments, so let me know what worked and what didn't.


## Summary: AI Limitations And How To Address Them

1. Reasoning -> We must document the limitations of AI and remain aware of its limitations.
2. Interpretability -> We must be able to transparently interpret AI decisions to ensure safe use.
3. Responsibility -> We must never hold AI accountable in lieu of humans.
4. Anthropomorphization -> We must regulate AI to promote mental health.
5. Knowledge -> We must teach critical thinking and exerce it when using AI.
6. Resources -> We must demand technological development to be sustainable and fight consumerism.
7. Automation -> Workers must defend their rights together.
8. Takeover -> Angst about the AI apocalypse is useless and unhealthy.


## References

- [1] Tu, T., Schaekermann, M., Palepu, A. et al. Towards conversational diagnostic artificial intelligence. Nature (2025). https://doi.org/10.1038/s41586-025-08866-7
  - Note: The preprint was published on January 12, 2024 at https://arxiv.org/abs/2401.05654. The above reference is the actual publication.
- reasoning: https://arxiv.org/abs/2403.04121
- Bias: https://arxiv.org/pdf/2309.00770
- Google emergent properties: https://arxiv.org/pdf/2206.07682
- Fake emergent properties: https://arxiv.org/abs/2304.15004
- Hallucinations: https://arxiv.org/abs/2401.11817
- Hallucinations: https://arxiv.org/pdf/2410.05229
- COVID vaccine distribution: https://gizmodo.com/a-faulty-algorithm-screwed-residents-out-of-stanfords-v-1845917350
- Bryan Johnson's religion (conclusion)
- COMPAS propaganda https://equivant-supervision.com/debunking-misconceptions-about-the-compas-core-instrument-what-you-need-to-know/
- Loomis vs Wisconsin: https://academic.oup.com/lpr/article/17/1/45/4877957
- Air Canada: https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do
- Lemoine: https://www.bbc.com/news/technology-62275326
- Allen: https://www.nytimes.com/2022/09/02/technology/ai-artificial-intelligence-artists.html
- critical thinking: https://www.mdpi.com/2075-4698/15/1/6
- persuasion: https://www.nature.com/articles/s41562-025-02194-6#MOESM1
- AI linked to explosion of low-quality biomedical research papers https://www.nature.com/articles/d41586-025-01592-0
- data drying up: https://www.nytimes.com/2024/07/19/technology/ai-data-restrictions.html
- AI on young workers: https://fortune.com/2025/05/25/ai-entry-level-jobs-gen-z-careers-young-workers-linkedin/
- AI anxiety: https://pmc.ncbi.nlm.nih.gov/articles/PMC11036542/
- Keynes: http://www.econ.yale.edu/smith/econ116a/keynes1.pdf
- laundry: https://x.com/AuthorJMac/status/1773679197631701238?lang=fr
