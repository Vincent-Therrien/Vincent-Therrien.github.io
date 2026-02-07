# Why GPU Programming Is Chaotic

GPU programming is a bit of a hassle. There are multiple frameworks to do it, but they only work on
some platforms, they use weird shading languages, or they don't support some features. In some
cases, you have to combine several frameworks in a single project. I made an entire video just to
complain about how impractical it gets.

CPU programming, meanwhile, is much more convenient: an application written in a modern programming
language can run on almost any CPU on the market. It used to be much worse: developers would
manually translate programs to target different CPU architectures [1] and buy compiler toolchains to
build their applications [2]. But things improved a lot over time.

So, why is there such a big difference between the two? Why is GPU programming so chaotic?


## The CPU Market

To answer this question, we first need to look at how CPU programming evolved. I promise it's
important for the GPU section.

A central processing unit, or **CPU**, is an electrical component in a computer that executes
instructions, like mathematical calculations or input/output operations [3]. It works by reading
machine code, a sequence of instructions that looks like this [4] [5]. Writing machine code by hand
is extremely tedious and error prone, so since the 1940s [6], people have been using assembly
languages. They map machine code instructions to simple mnemonics, which facilitates programming.
But they remain pretty hard to use and, since assemblers are tied to specific CPU architectures,
your code has to be adapted to different platforms [3].

Another improvement came in the form of programming languages, like Fortran and C. They are more
high-level than assembly: instead of directly writing the instructions that a CPU will run, they use
an abstract syntax made of keywords and mathematical symbols to express computations in a more
intuitive way. This source code is then automatically converted into machine code by a compiler,
which can target multiple CPU architectures [4].

Programming languages are very convenient, so you might imagine that at this point, CPU programming
entered a golden era of smooth, easy development. It did not. Back in the 70s, the computer
ecosystem was pretty fragmented and it was common for companies to control their products tightly.
IBM, for instance, manufactured most components of its mainframe computers and wrote most of the
software. Computers built with that kind of vertical integration were expensive, but IBM liked it
because it completely controlled the platform [7]. Consumers were stuck in a vendor lock-in and had
to rely on IBM for support. Apple had - still has - a similar strategy: it makes the hardware and
software of its devices, and that gives it a lot of power. It would sell documentation and
development tools back in the days [8]! However there are drawbacks to controlling your products too
much: it makes you slower at adapting to the market, more vulnerable to supply chain disruptions,
and it makes third-party development more difficult [9].

IBM realized it. It wanted to enter the home computer market but developing a new product from
scratch would have taken too much time, so, instead, it decided to assemble components made by other
companies [10]. And it worked: the IBM personal computer became a commercial success [11]. It also
backfired. The PC was well documented to help other companies make its components, and competitors
used this open design to copy the PC and sell compatible clones. IBM was not happy, but it did
reduce prices for consumers and it did improve cross-compatibility.

There's always a tradeoff between openness and secrecy. If you publicly document your product,
it's easier to develop it quickly and take over a market, but competitors can also free-ride it. If
you keep your product as secret as possible, you can have higher margins, but it's more difficult to
disrupt a market. We see the same thing with CPUs. When manufacturers document their chips well, it
makes it easier for programmers to write and optimize code [12], that's a selling point. But
manufacturers do not release the inner workings of their CPUs, they hide information and use legal
protection to make sure that they preserve trade secrets.

So manufacturers used to control how computers were made and what software they could run,
but competition between companies somehow pushed for more openness, which made it easier for
developers to write compilers themselves instead of relying on manufacturers. Paid compilers still
exist [13] [14], but they have become less common, we have free, cross-compatible ones now [15]
[16]. Intel and IBM didn't publish documentation out of generosity, it was a business move to sell
more products than their competitors. These companies can actually get quite anti-competitive once
they begin dominating a market [8]. Another way to promote the interests of consumers is through
public architectures. For example, RISC-V is an open CPU standard originally developed by the
University of California, Berkeley. Anyone can make a RISC-V CPU without getting sued or having to
pay for a license, and that encourages innovation in this industry [19].

CPU programming is not perfect, but without competition and open projects, it might have remained in
the dark age of vertical integration. Hey, I wonder if another segment of the tech industry is still
stuck in the same horrible business practices.


## The GPU Market

A graphics processing unit, or **GPU**, is an electrical component that executes instructions in
parallel [20]. I know the name makes it seem like it's only for graphics, but practically any
computation that can be split in parallel may benefit from GPUs. That includes some physics
simulations [21] and DNA analyses [22], along with an obscure application called artificial
intelligence [23]. Nvidia was the first company to formally define GPUs in the modern sense in 1999
[24], but a lot of chips designed to manipulate images had been made before that [25].

Initially, these chips were only intended to run graphics pipelines that would take vertices,
process them, and output images. This is called fixed-function programming: you can modify the
parameters of the pipeline, but you cannot execute arbitrary code [26]. Each manufacturer had its
own way of doing things, so you had to adapt your code to each GPU [27]. To address that, some
companies made cross-platform standards like OpenGL and Direct3D, and developers adopted them
because they improved productivity. Those are application programming *interfaces*, not compilers.
They don't generate machine code that GPUs can run directly, but rather create standard instructions
that GPU drivers convert into machine code [28]. And, a bit like at the beginning of the computer
market, most GPU manufacturers would protect their architecture by releasing little detail about
them. People couldn't write their own compilers, so the only way to use GPUs was through standard
APIs or vendor-specific tools [29].

In the early 2000s, GPU APIs began supporting shaders, programs that let you run code at some stages
of the graphics pipeline to obtain more varied visual effects. And people realized that you
can also use them to accelerate other applications. But remember, you had to go through the graphics
pipeline. So people would put numbers in textures, write shaders to process the textures, launch the
pipeline, and then analyze the output images to obtain results [30]. That's a hideous hack, but they
were stuck with it. Some projects tried to simplify that mess, but they were not backed by
manufacturers and didn't really succeed [31]. Eventually, Nvidia caught glimpse of developers
struggling with general-purpose programs and decided to release a framework called CUDA, which
forgoes the graphics pipeline [32]. That is worlds more convenient and it became popular to train
neural networks, many ground-breaking discoveries in the field were made using programs written with
CUDA [33]. And it remains widely used. Nvidia is really dominant in the market, it controls around
90 % of discrete GPUs [34], with AMD taking the rest and Intel barely selling anything [35].
Discrete GPUs are the ones used for high-end graphics applications and training AI models. Another
type of GPUs are the integrated ones. They are more often used in applications that require less
computations, and Nvidia is not in that market [36].

As we've seen with CPUs, a device manufacturer has an interest in making their products less
compatible to preserve a market advantage. Nvidia releases limited documentation of its GPUs, enough
to help developers optimize their programs, but not enough for other manufacturers to make
CUDA-compatible GPUs and free-ride its market [29]. IBM documented the PC because it was desperate
to take over home computers quickly, and that improved cross-compatibility. Nvidia is already at the
top, it doesn't need to disrupt the market by becoming more transparent. In an effort to win over
some shares of the discrete GPU market, AMD and Intel document their GPUs more thoroughly and their
frameworks are open-source [37] [38]. Not because they are freedom fighters, but to convince
consumers to buy their products. However their openness has not really paid off so far, Nvidia is
just too far ahead.

Companies want to promote their own APIs to sell their own hardware, but they have to enable some
degree of cross-platform support, otherwise no one would buy their chips. And these two
interests often collide. For example, Apple developed OpenCL as a direct response to CUDA. It
enables general-purpose computing on GPUs, but it's designed to run everywhere [39]. Although
several manufacturers support the first version, they decided not to support newer features to
instead invest in their own APIs. OpenCL is a good API, but it stagnated over the years [40]. Vulkan
has similar issues. It was made to succeed OpenGL as a cross-platform graphics API, so it has a set
of mandatory features that GPU manufacturers agree to support. But some vendors wanted additional
features that they had implemented on their own devices, so there are also optional Vulkan
extensions that don't work everywhere [41]. A certain company decided not to support Vulkan at all,
you have to use a weird compatibility layer on its devices [42]. So we got another API to improve
cross-platform support [43], and this one also has some missing features [44]. I'm sure another
projects will address them [45]. It never stops! Even when all manufacturers get together to make a
common API, GPU programming always remains fragmented because of their competing interests.

From what I've gathered, the lack of competition is the main problem that plagues GPU programming,
but it's not the only one. On a technical level, GPUs are massively parallel and have a lot of
variations [46]. This complexity makes them more challenging to document than CPUs, which
contributes to making the technology more opaque. And from a legal perspective, things have changed
a lot since the early 80s. Governments have made it easier to copyright chip designs [47] and
companies protect their intellectual property more aggressively: for example, Nvidia takes legal
precautions to discourage running CUDA on other devices, again, to make sure that their consumers
stay locked in the same ecosystem [48].

Overall, GPU programming is chaotic mainly because Nvidia's dominance hinders competition, which
stalls cross-compatibility. Nvidia didn't use shadowy scheming, but rather built good GPUs, invested
early in a good API, and used legal magic to protect its IP. Nowadays, a lot of consumers are kind
of locked in its ecosystem. I don't think Jensen Huang is a Final Fantasy villain who wants to make
GPU programming more cumbersome for no reason, I think his company finds ways to maximize profit to
the detriment of everyone else, like all companies do. But, when they go too far, there can be
consequences.


## Antitrust

In 1974, the US government filed an antitrust action against AT&T for monopolizing the telephone
infrastructure [49]. Monopolies, by the way, are legal according to the federal trade commission, as
long as you don't use them to harm the market with predatory practices [50]. But since the forties,
AT&T had been sued for abusing its market power. There were many points of contention, but a
particularly egregious one was its subsidiary Western Electric, which manufactured telephone
equipment. AT&T controlled how a lot of phones were made and how they operated. It could dictate
prices, and this situation became increasingly problematic.

The United States, and most other countries, have competition laws, also called antitrust laws [51].
They regulate monopolies, collusion, they supervise mergers and acquisition, they basically address
any market behavior that may lead to predatory practices. AT&T was clearly going against antitrust
laws, but before the state can break a monopoly, it has to prove that it is harming the market, and
gathering enough evidence for that takes time. It took around 8 years to reach a settlement, and
AT&T got split up in multiple companies [52]. There have been more recent antitrust cases, Apple has
some experience in that field [53], as well as Amazon [54], Google [55], Microsoft [56], Intel [57].
But they didn't get ripped apart à la AT&T. Yet.

The US Department of Justice started investigating Nvidia in 2024 because of its dominant market
position [58]. And like, yeah, it really looks like a monopoly [59]. I would be the first one to
cheer if CUDA was forced to become more transparent or if architectures were made more open, then
GPUs would become way more convenient to program. But that is highly unlikely and it would take at
least several years, so let's not look forward to that.

There are some arguments in favor of monopolies. For instance, you might argue that large companies
are more productive than smaller ones and splitting monopolies too aggressively could hinder
progress [60]. Or that the state is ran by incompetents and we should just let the market regulate
itself [61]. The worst argument is that once a company establishes a monopoly and extorts money, it
creates a business opportunity: another company can propose a cheaper product, which breaks the
monopoly [62]. But that almost never happens, large companies have so much resources that they can
easily put barriers to entry that prevent competition. NO ONE could have competed with AT&T at the
time, and I don't see how anyone could dislodge Nvidia now.

The reality is that the invisible hand only works in a world of small shop owners. Large companies
are too powerful for small competitors and they only work in their own interest. They are unaligned,
if you will. The state has the responsibility to maintain a healthy economic environment and ensure
that the rights of consumers are respected, at the same time, it is bound to follow judicial
procedures, so we may remain stuck with monopolies or quasi-monopolies for years.


## Can It Get Better

Rather than waiting for big government to do everything for us, we can ask ourselves if GPU
programming might get better without antitrust miracles, and, there are a few possibilities.

The first one is to just hope for competition to get more intense. AMD and Intel are, hum, doing
their best I'm sure, but they are not serious competitors. In China, 摩尔线程 (Moore Thread) is
a relatively new GPU manufacturer that could stir competition up [63]. Maybe these companies will
get better and push for more transparency. There are also projects to make open architectures, a bit
like RISC-V but for GPUs, and they could encourage innovation and cross-compatibility [64] [65].

Another possibility is for consumers to put pressure on Nvidia. Zum Beispiel, if developers start
using open frameworks instead of CUDA, Nvidia might decide to improve support for these projects.
But we have no way of forcing Nvidia to react positively to open-source projects. I would definitely
not favor more direct forms of pressure like boycotts because Nvidia is so large that there's no way
consumers could significantly alter its market presence. To be clear, boycotts are not useless, in
many cases, they have successfully forced companies to fix problematic behaviors [66] [67] [68]. But
there's a limit to what boycotts can accomplish, and trying to make CUDA open-source by canceling
Nvidia on Twitter is not gonna work. I think that the market is in a disastrous state and the only
thing we can do is live with it. Whether GPU programming will get better is out of our control, but
we can slightly push for more transparency in that field with open-source projects and by electing
people who favor stricter antitrust regulations.

Some of you might be sitting in disbelief at how much of a non-issue this whole situation is. "GPU
programming works. The applications you write in Vulkan or OpenCL or a game engine will function
on almost any GPU on the market, there's no need to freak out!" And, fair, it's not *that* bad, we
don't have to pay for GPU compilers at least. But it could be so much better. The CPU programming
ecosystem is convenient enough that hobbyists can easily share their projects with people who don't
necessarily have the same hardware. Python was started by one guy [69], it's now one of the most
widely used programming languages and anyone can contribute to it [70]. This is the strength of
openness: when you let people freely collaborate, the best ideas rise to the top and meliorate
technology to the benefit of everyone. It's never perfect, but it's much better than when companies
make their products incompatible on purpose.

Another beef I have with GPU programming is that, in most cases, you have to keep the CPU and GPU
source codes separate. There are projects, like Rust-GPU [71], OpenMP [72], and SYCL [73], that let
you integrate GPU code within CPU code, which is more convenient to write but in practice that code
is compiled in pretty convoluted ways because GPUs are not built for compatibility [74]. With more
open architectures, we could develop open-source, cross-platform compilers more easily. That would
not impact graphics applications much I think, but for general-purpose computing, it would be really
practical. Heterogeneous computing might become more widely used and enhance informatics as a whole.
So I'm not exactly mad at the current GPU programming scene, well, a little. I am disheartened
because it has the potential to get much better but we might never see that happen.

Ok I made my point. If you want more information on GPU programming, you can look up the Github
repository I made to compare frameworks. I've added links to other interesting projects since last
time. You can also check my other video on the topic, but I made some errors in it so make sure to
read my pinned comment for the errata. I hope I wasn't too discouraging, GPU programming is really
fun and useful despite what the market has done to it. I should do a video to prove that.


## References

- [1] Juris Reinfelds. "The First Port of Unix" (1977). University of Wollongong. https://documents.uow.edu.au/content/groups/public/@web/@inf/@scsse/documents/doc/uow103747.pdf
  - The seventh paragraph on the second page explains how a compiler had to be partially rewritten
    to compile to a target architecture. The end of the paragraph is unintentional comedy.
- [2] Tech Monitor. "MICROSOFT UNVEILS VISUAL STUDIO 97" (1997). https://www.techmonitor.ai/technology/microsoft_unveils_visual_studio_97/
  - There was no free / community version at the time.
  - The image of the CD used in the video is from https://archive.org/details/MSDN_VisualStudio_97_Disc_2_March_1997
- [3] Nagpal, D. P. "Computer Fundamentals" (2008). S. Chand Publishing. p. 33. ISBN 978-81-219-2388-0. https://books.google.ca/books?id=LAsbEAAAQBAJ.
- [4] Stephen Marz. "Example RISC-V Assembly Programs" (2025). https://marz.utk.edu/my-courses/cosc230/book/example-risc-v-assembly-programs/
  - This page comprises example programs written in C and their equivalent in RISC-V assembly.
- [5] Joël Porquet-Lupine. "RISC-V Instruction Encoder/Decoder" (2025). https://luplab.gitlab.io/rvcodecjs/
  - This page converts RISC-V assembly instructions into machine code.
- [6] Chris Putnam. "Remembering a USask computing pioneer" (2022).University of Saskatchewan. https://artsandscience.usask.ca/news/articles/8087/Remembering_a_USask_computing_pioneer
- [7] Guido A. Krickx. "Vertical integration in the computer mainframe industry: A transaction cost interpretation" (1995). Journal of Economic Behavior and Organization. https://www.sciencedirect.com/science/article/pii/016726819400010C
- [8] Dan Allen. "THE MACINTOSH PROGRAMMER'S WORKSHOP". Dr. Dobb's Journal. https://jacobfilipp.com/DrDobbs/articles/DDJ/1988/8814/8814b/8814b.htm
- [9] Indeed. "Vertical Integration and Its Effects on Companies and Employees" (2025). https://www.indeed.com/hire/c/info/vertical-integration-and-its-effects-on-companies-and-employees
- [10] Zir Blazer. "History of the evolution of the x86 platform, from the IBM PC to the modern era" (2021). https://zirblazer.github.io/htmlfiles/pc_evolution.html?ver=123
- [11] Tom Hormby. "Origin of the IBM PC" (2006). Low End Mac. https://lowendmac.com/2006/origin-of-the-ibm-pc/
- [12] Intel. "Intel 64 and IA-32 Architectures Software Developer Manuals" (2025). https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html
- [13] Microsoft. "Buy Visual Studio" (2025). https://visualstudio.microsoft.com/fr/vs/pricing/?tab=business
- [14] JetBrains. "Subscription Plans" (2025). https://www.jetbrains.com/clion/buy/?section=personal&billing=monthly
- [15] GCC Team. "GCC, the GNU Compiler Collection" (2025). https://gcc.gnu.org/
- [16] llvm-admin team. "The LLVM Compiler Infrastructure" (2025). https://llvm.org/
- [17] Foo Yun Chee and Bart H. Meijer. "Intel hit with $400 million EU antitrust fine in decades-old case" (2023). Reuters. https://www.reuters.com/technology/eu-re-imposes-400-mln-fine-intel-abuse-market-power-2023-09-22/
- [18] Telex Corp. v. International Business MacHines Corp., 367 F. Supp. 258 (N.D. Okla. 1973). https://law.justia.com/cases/federal/district-courts/FSupp/367/258/1425543/
- [19] "About RISC-V International" (2025). RISC-V. https://riscv.org/about/
- [20] Intel. "What Is a GPU?" (2025). https://www.intel.com/content/www/us/en/products/docs/processors/what-is-a-gpu.html
- [21] Moritz Lehmann. "FluidX3D" (2025). https://github.com/ProjectPhysX/FluidX3D
- [22] H. Zhong et al. "GPU acceleration for DNA sequence alignment algorithm and its application" (2025). https://link.springer.com/article/10.1007/s42514-024-00203-0
- [23] Kirsty Paterson's Instagram page: @scottishoompaloompa
- [24] Vivek Singh. "Game-Changer: How the World’s First GPU Leveled Up Gaming and Ignited the AI Era" (2024). https://blogs.nvidia.com/blog/first-gpu-gaming-ai/
- [25] Jon Peddie. "Is it Time to Rename the GPU?" (2018). https://www.computer.org/publications/tech-news/chasing-pixels/is-it-time-to-rename-the-gpu
- [26] Wikipedia. "Fixed-function (computer graphics)" (2025). https://en.wikipedia.org/wiki/Fixed-function_(computer_graphics)
  - The other pages I've found defining this term are paywalled or AI-generated so I'm using
    Wikipedia I'm sorry.
- [27] Learn WebGL. "1.3 - Computer Graphics - A Brief History". https://learnwebgl.brown37.net/the_big_picture/webgl_history.html
- [28] OpenGL. "Shader Compilation". https://www.khronos.org/opengl/wiki/Shader_Compilation
- [29] André Machado. "Nouveau vs. NVIDIA: The Battle Between Open-Source Ideals and Proprietary Performance on Linux" (2024). https://machaddr.substack.com/p/nouveau-vs-nvidia-the-battle-between
- [30] Jens Kr¨uger and R¨udiger Westermann. "Linear Algebra Operators for GPU Implementation of Numerical Algorithms" (2003). ACM Transactions on Graphics. https://dl.acm.org/doi/10.1145/882262.882363
- [31] BrookGPU. https://graphics.stanford.edu/projects/brookgpu/
- [32] GamesIndustry.biz. "NVIDIA UNVEILS CUDA™ – THE GPU COMPUTING REVOLUTION BEGINS" (2006). https://www.gamesindustry.biz/nvidia-unveils-cuda-the-gpu-computing-revolution-begins
- [33] Helen Peterson et al. "Exclusive: the most-cited papers of the twenty-first century" (2025). Nature. https://www.nature.com/articles/d41586-025-01125-9
- [34] Michael Crider. "Nvidia extends desktop GPU market share lead beyond 90%" (2025). PCWorld. https://www.pcworld.com/article/2806604/nvidia-extends-desktop-gpu-market-share-beyond-90-percent.html
- [35] Anton Shilov. "Intel's share of the discrete GPU market drops to 0% as sales in the overall market increase" (2025). Tom's Hardware. https://www.tomshardware.com/pc-components/gpus/discrete-gpu-sales-increase-as-intels-share-drops-to-0
- [36] Intel. "What Is the Difference Between Integrated Graphics and Discrete Graphics?" (2025). https://www.intel.com/content/www/us/en/support/articles/000057824/graphics.html
- [37] ROCm project on Github. https://github.com/ROCm/ROCm
- [38] OneAPI. "oneAPI Open Source". https://oneapi.io/open-source/
- [39] Khronos Group. "Khronos Launches Heterogeneous Computing Initiative" (2008). https://web.archive.org/web/20080620123431/http://www.khronos.org/news/press/releases/khronos_launches_heterogeneous_computing_initiative/
- [40] Tim Anderson. "Less is more with OpenCL 3.0: Implementing the 2.x spec was tricky – so now everything beyond 1.2 is optional" (2020). The Register. https://www.theregister.com/2020/04/27/opencl_30/
- [41] Khronos Group. "Khronos Vulkan Registry". https://registry.khronos.org/vulkan/#repo-docs
- [42] The Brenwill Workshop Ltd. "MoltenVK Runtime User Guide". https://github.com/KhronosGroup/MoltenVK/blob/main/Docs/MoltenVK_Runtime_UserGuide.md
- [43] World Wide Web Consortium. "WebGPU, W3C Candidate Recommendation Draft" (11 July 2025). https://www.w3.org/TR/webgpu/
- [44] "WebRTS, WebGPU Ray Tracing eXtension". https://github.com/codedhead/webrtx
- [45] Randall Patrick. "Standards". https://xkcd.com/927/
- [46] Nvidia. "Compare GeForce Graphics Cards". https://www.nvidia.com/en-us/geforce/graphics-cards/compare/
- [47] Wikipedia. "Semiconductor Chip Protection Act of 1984". https://en.wikipedia.org/wiki/Semiconductor_Chip_Protection_Act_of_1984
  - The law is available at https://www.govinfo.gov/content/pkg/STATUTE-98/pdf/STATUTE-98-Pg3335.pdf but I put the
    Wikipedia header in the video because it's more legible.
- [48] Anton Shilov. "Nvidia bans using translation layers for CUDA software — previously the prohibition was only listed in the online EULA, now included in installed files (Updated)" (2024). Tom's Hardware. https://www.tomshardware.com/pc-components/gpus/nvidia-bans-using-translation-layers-for-cuda-software-to-run-on-other-chips-new-restriction-apparently-targets-zluda-and-some-chinese-gpu-makers
- [49] United States v. American Tel. and Tel. Co., 552 F. Supp. 131 (D.D.C. 1983). https://law.justia.com/cases/federal/district-courts/FSupp/552/131/1525975/
- [50] Federal trade Commission. "Monopolization Defined". https://www.ftc.gov/advice-guidance/competition-guidance/guide-antitrust-laws/single-firm-conduct/monopolization-defined
- [51] Alexandra Twin. "Antitrust Laws: What They Are, How They Work, Major Examples" (2025). Investopedia. https://www.investopedia.com/terms/a/antitrust.asp
- [52] Wikipedia. "Breakup of the Bell System". https://en.wikipedia.org/wiki/Breakup_of_the_Bell_System
- [53] US Department of Justice. "U.S and Plaintiff States v. Apple Inc." (2024). https://www.justice.gov/atr/case/us-and-plaintiff-states-v-apple-inc
- [54] US Federal Trade Commission. "FTC Sues Amazon for Illegally Maintaining Monopoly Power" (2023). https://www.ftc.gov/news-events/news/press-releases/2023/09/ftc-sues-amazon-illegally-maintaining-monopoly-power
- [55] US Department of Justice. "U.S. and Plaintiff States v. Google LLC (2020)". https://www.justice.gov/atr/case/us-and-plaintiff-states-v-google-llc
- [56] U.S. v. Microsoft Corp., 253 F.3d 34 (D.C. Cir. 2001). https://law.justia.com/cases/federal/appellate-courts/F3/253/34/576095/
- [57] Intel Corp. v. Advanced Micro Devices, Inc., 542 U.S. 241 (2004). https://supreme.justia.com/cases/federal/us/542/241/
- [58] Patrick Moorhead. "Antitrust Probes Into Nvidia: What Are The Implications?" (2024). Forbes. https://www.forbes.com/sites/patrickmoorhead/2024/09/12/antitrust-probes-into-nvidia-what-are-the-implications/
- [59] Daniel Sims. "Nvidia reaches historic 92% GPU market share, leaves AMD and Intel far behind" (2025). Tech Spot. https://www.techspot.com/news/108225-nvidia-reaches-historic-92-gpu-market-share-leaves.html
- [60] McKinsey & Company. "Small enterprises, big productivity gaps" (2024). https://www.mckinsey.com/featured-insights/sustainable-inclusive-growth/charts/small-enterprises-big-productivity-gaps
- [61] CTV News. "$270M investment in Northvolt’s parent company now worthless, says Quebec government" (2025). https://www.ctvnews.ca/montreal/article/270m-investment-in-northvolts-parent-company-now-worthless-says-quebec-government/
- [62] Harvard Business Manager. "Der kreative Zerstörer" (2013). https://www.manager-magazin.de/hbm/management/joseph-schumpeter-innovation-und-schoepferische-zerstoerung-a-00000000-0002-0001-0000-000091405742
- [63] Moore's Thread. "Accelerate Computing for the Future". https://en.mthreads.com/about
- [64] Vertical Research Group. "miaow". https://github.com/VerticalResearchGroup/miaow
- [65] LibreSOC. "Hybrid 3D GPU / CPU / VPU". https://libre-soc.org/3d_gpu/
- [66] Lily Hay Newman. "Apple Kills Its Plan to Scan Your Photos for CSAM. Here’s What’s Next" (2022). Wired. https://www.wired.com/story/apple-photo-scanning-csam-communication-safety-messages/
- [67] Afdhel Aziz. "Facebook Ad Boycott Campaign ‘Stop Hate For Profit’ Gathers Momentum And Scale: Inside The Movement For Change" (2020). Forbes. https://www.forbes.com/sites/afdhelaziz/2020/06/24/facebook-ad-boycott-campaign-stop-hate-for-profit-gathers-momentum-and-scale-inside-the-movement-for-change/
- [68] Sophia Brown Harrods. "Uber’s #DeleteUber Movement: How Travis Kalanick’s Culture of Chaos Backfired" (2024). https://medium.com/@sophia-brown-harrods/ubers-deleteuber-movement-how-travis-kalanick-s-culture-of-chaos-backfired-56e01c0e6cf0
- [69] Python Documentation. "History and License". https://docs.python.org/3/license.html
- [70] CPython. "Contributing to Python". https://github.com/python/cpython/blob/main/.github/CONTRIBUTING.rst
- [71] rust-gpu. https://github.com/Rust-GPU/rust-gpu
- [72] OpenMP. https://www.openmp.org/
- [73] Khronos Group. "SYCL". https://www.khronos.org/sycl/
- [74] Rust-GPU Development Guide. "Platform Support". https://rust-gpu.github.io/rust-gpu/book/platform-support.html#platform-support


## Additional Notes

- The thesis of the video is that competition somehow forces company to become transparent, which
  leads to open-source compilers and operating systems. I think that competition is required because
  a vertically integrated technology can more easily be protected by its manufacturer. However,
  competition is not the only thing require to have open-source projects, you also need:
  - A community of developers working on open-source projects. Research institutes can also
    contribute (e.g. UC Berkeley for RISC-V).
  - Public organizations (e.g. ISO, W3C, IETF) that make standards like programming languages or
    protocol specifications.
  - A well-regulated market - technology would be barely usable without antitrust laws.
- Intel and AMD have a very weird history, you cna read it at
  https://www.cnbc.com/2022/11/22/how-amd-became-a-chip-giant-leapfrogged-intel-after-playing-catch-up.html
- I focused on Intel in the CPU section, but ARM is also very widely used, especially in phones. ARM
  has a different business model compared to Intel. Instead of designing and manufacturing CPUs, it
  licenses its CPU designs to other companies. You have to pay to access ARM CPU designs, but the
  instruction set architecture (i.e. the interface of the CPU) is public, like x86.




Additional thoughts:

- I don't hate Apple more than other tech companies! It's just a good example of a company that favors vertical integration, so I use it to contrast with more "open" business strategies.
- I'm not angry at Nvidia and I'm not saying that we should protest it. Tech companies are not avatars of evil, at the end of the day they just want to make money and we buy their stuff. But we have to be aware that they may trap consumers, and pushing for more open source projects is a good way to counterbalance them.
- Is it me or did people had more fun back in the days? The page for BrookGPU (7:16), a Standford project, advertises a fishing flies at the bottom for apparently no reason and Reinfelds (0:30) complains that he didn't have enough funds to shuttle between computers located in two cities (this one is unintentional comedy but I love the way it's phrased out). Maybe it's because the writing style was different, but I kept laughing while reading archives. It seems like computer science has become more serious now.
