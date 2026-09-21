# Moore's Law's Waluigi

The biggest force at play in the history of software has been **laziness**. You'll more often see
engineers finding ways to make their job easier than making better programs, and the results are
fascinating.

Exhibit one: computers have become more powerful by orders of magnitude over decades, yet their
response latency, that is, the time between pressing a key and seeing the corresponding character on
screen, has not changed much. If anything, it got slightly worse [1]. The same happens with
Microsoft Office: the program becomes slower, but over that same period, computers get faster [2].
That happens because, once additional compute power becomes available, developers immediately add
more features; things balance out and you get a product that remains equally bad over time [3]. In
short, "software is getting slower more rapidly than hardware becomes faster" [4].

Now, this isn't yet another "software bloat is getting out of hand" video. You can find weirdos
arguing that we should go back to writing code in assembly with vim, and while I do see the appeal
of elegant code in comparison to just stacking up badly written abstraction layers, productivity
does matter. End users will not care you made a program 10 times faster if that means they'll wait
for a response 1 millisecond instead of 10; they will care if you add new features, and anyways,
hardware improvements will make up for a crappy codebase as the number of transistors on chips
doubles every two years. So there's no need to optimize everything obsessively, right?

Well, hardware progress is slowing down [5], and that means it won't make up for bad software as
well as before. This will get more and more taxing in the near future, unless we rethink how we
engineer software.


## 1. Rewrites

And the best way to do that is often to set things on fire and start again.

Building multi-platform user interfaces has long been a black hole of frustration because you had to
use a bunch of different tech stacks depending on the target platform, and the tools are you
disposition were often crappy. For example, Emacs is a text editing program developed in the 70s. If
you want to make a plugin for it, you have to use Lisp, an old programming language. In 2008, Github
wanted to make a more modern text editor and decided to use JavaScript for it, a more common
language used for Web pages. It couldn't run on desktop at the time so the idea was to package
essentially a Web browser and run the text editor, Atom, on top of it on desktop. That uses a lot of
RAM compared to native programs, but people really liked it because Javascript is so widespread that
the barrier to make plugins was low. Electron, the underlying framework, now supports a bunch of
other similarly bloated applications, and that same strategy, using Web technology everywhere for
the sake of convenience, was followed by other projects like React.

Microsoft bought Github in 2018, and since that company cannot exist with any competition they
decided to make room for their own Electron text editor by discontinuing Atom. Not too pleased with
this, one of its former developer decided to resurrect Atom under a new name: Zed. The original plan
was to use Web tech again for it, but not only does that uses a lot of RAM, it also complicates
access to some features like interactions with the operating system. So they decided to go
completely the other way and make it from scratch with Rust. That's a huge shift: instead of yet
again building on top of an edifice of abstractions, you get a minimal, highly optimized build. The
downside is that it is sightly harder to make plugins and the current user base is still rather
small, but there are definitely advantages that are probably forever out of reach for Electron.

That's a typical scenario: replacing an overcomplicated system build primarily with convenience in
mind with a highly optimized one. But it's not a panacea. Some projects, like Redpanda, invested a
ton of effort in rewrites but got mixed results. In other cases, "just rewriting" a codebase is
really hard. For instance, managing Python projects had long been an absolute pain because it
started off a essentially a scripting tool with little support for things like package installation
and distribution. The community incrementally built tools to support that, but without any cohesive
vision on how to handle that, they contained glaring flaws. The public index where people would
upload Python libraries for example did not require them to list their dependencies, so the
installer had to download packages, look inside to check their sub-dependencies, and discard the
whole thing if there was a conflict. That's just one issue, the ecosystem was riddled with other
inefficiencies that accumulated over decades [7]. And on a more fundamental level, Python itself is
slow. Around 75 times slower than a compiled language like C [8].

That did not prevent developers from shipping code though. There was no strong push to address those
limitations, but people still gradually woke up from years of poorly improvised tools and adopted
official standards to configure projects more brainfully. That's kind of an unglamorous job; it
doesn't bring new features to the language, but it did enable new tools, like uv, to resolve
dependencies much faster. And contrarily to established tools, they don't need to keep supporting
backward compatibility; they are free to drop features and aggressively implement new optimizations.
They are also free to get written in Rust. That's basically a meme at this point, people point at
Rust as if it can solve any issue, but in that case a lot of optimizations were made possible
because the community had to agree on standards that made them possible, and developers made
improvements that could have been implemented in any language.

So we often encounter this dilemma, you either live with the flaws of an existing tech stack for the
sake of convenience, or redo it with good engineering principle even if it requires huge effort and
you might not reap huge benefits. Of course it's entirely possible to improve code without throwing
it in the garbage; Cloudflare patched specific bottlenecks in the cache entries of its DNS, that is,
the program that resolves Website addresses into IP addresses, and ended up with 43 % faster insert
time. In other cases, more abstractions, more building on top of someone else's work, is actually
the best thing to do.


## 2. Negative-Cost Abstraction

- Type 1: virtualization (e.g. docker / data centers), save resources
- Type 2: developer experience (e.g. transcompiler prevent unsafe code)

And those abstraction layers don't always hurt performance.
Containers make applications cross-platform without slowing them down [x] and transcompilers makes
code safer without much ill effects [y] for instance.

Rust vs others

Docker vs VM

Transcompiler (typescript / Javascript)

Killing OOP - cache concerns

- https://www.science.org/doi/10.1126/science.aam9744 *****


## 3. Real Time Applications

SQLite / DuckDB


## 4. Energy




Before: cross-platform compatibility, speed of development
Now: energy consumption, AI ease use of use,



# Jokes

- Water walk by John Cage
- Roller coaster tycoon for weirdoes
- toilette dans Parasite
- Let smart people implement Vulkan and let dumb people use it
- Rust: we are not a cult. Rust people:
  - Taylor Swift concert
- "Everything sucks" applies to every facets of existence except like the old Sailor Moon anime
- Pokemon brilliant pearl reused the same code
- The Odyssey thesis statement VS Web tech

- https://danluu.com/input-lag/
- https://en.wikipedia.org/wiki/Software_bloat#Examples
- https://en.wikipedia.org/wiki/Moore's_law
- https://xkcd.com/1987/


# References

- [1] https://danluu.com/input-lag/
- [2] https://www.infoworld.com/article/2331126/fat-fatter-fattest-microsoft-s-kings-of-bloat.html
- [3] https://laptopretrospective.com/laptops/wirths-law-and-the-story-of-fatware/
- [4] https://www.computer.org/csdl/magazine/co/1995/02/r2064/13rRUwInv7E
- [5] Moore's law
- [6] pip dependency resolution: https://dublog.net/blog/so-many-python-package-managers/
- [7] uv optimizations: https://nesbitt.io/2025/12/26/how-uv-got-so-fast.html
- [8] languages
- [9] pylint -> Ruff
- [10] mypy -> ty
- [11] pandas -> polars
- [12] jupyter -> marimo
- [13] electron / node.js editors
- [14] zed
  - https://web.archive.org/web/20220805204227/https://zed.dev/tech
- [Atom] https://www.wired.com/2015/06/github-atoms-code-editor-nerds-take-universe/
- Cloudflare: https://blog.cloudflare.com/dns-cache-memory-optimization-1111/
