# Moore's Law's Waluigi


## Tradeoffs

The biggest force at play in the history of software has been **laziness**. You'll more often see
engineers finding ways to make their job easier than making better programs, and the results are
fascinating.

Exhibit one: computers have become more powerful by orders of magnitude since the 70s, yet their
response latency, that is, the time between pressing a key and seeing the corresponding character on
screen, has not changed much [1]. The same happens with Microsoft Office: the program becomes slower
with new versions, but computers get faster at the same time; things balance out and the product
remains equally bad over time [2] [3]. In short, "software is getting slower more rapidly than
hardware becomes faster" [4].

A good illustration to understand why that happens is the Electron framework. Making multi-platform
applications has long been a black hole of frustration because you have to use different tools for
each platforms, and those tools are often outdate, obscure, and not very efficient. In 2008, people
at Github wanted to make a modern, cross-platform text editor called Atom, and they wanted as many
people as possible to contribute to it. Their pick was Javascript, a programming language used for
Web pages. It's very popular, so a lot of people would be able to use it to write plugins for Atom.
But a problem was you couldn't even run Javascript on desktops. It only worked in browsers, so
Github had the idea to package essentially a Web browser into a framework, Electron, and run Atom on
top of it. That uses more way more RAM and CPU than native programs because Electron is eating it
away, but that means you can reuse the features of the underlying Web engine instead of paying your
employees to reimplement them. Also, developers outside of Github would have an easier time
contributing to that project, and that's work hours that Github wouldn't have to pay. What I'm
getting at is: there are stronger incentives to reduce the cost of development than the cost of
running software. Github doesn't pay for the RAM and the electricity of their users, so they have
little financial benefit to make Atom use less RAM and CPU; pushing unoptimized features is simply
more profitable for them. And the people tailoring Atom to their needs wanted an easy way to make
plugins; Javascript and Electron did that well enough. Software bloat is not an objectively good or
bad thing. Software is simply shaped by the concerns of the people who make and use them, if
optimization is not a priority, things don't get optimized more than needed. Besides, the number of
transistors on chips doubles every two years, so even if programs become more sluggish, hardware
improvements compensate anyways.

But maybe software bloat can go too far after all. Progress in hardware has been slowing down in
recent years [5], and that means it won't make up for bad software as well as before. And it's not
just a question of using too much computer resources, bloated software can also be harder to
maintain. After Microsoft bought Github, it made room for its own Electron text editor by pulling
the plug on Atom. One of its original developer decided to resurrect it under a new name: Zed. The
original plan was to use Web tech again for it, but not only is that inefficient, they also realized
it complicates access to some features like interactions with the operating system. So they decided
to pull a 180 and make a native program from scratch with Rust. That's a huge shift: instead of
building on top of abstractions, you get a minimal, highly optimized build. The downside is that
it's harder to make plugins and you start with a small user base, but it comes with advantages that
are probably forever out of reach for Electron.

"Rewrite it in Rust" is basically a meme at this point, but rebuilding software is not a panacea.
Some projects, like Redpanda, invested a ton of effort in a full rewrites but got mixed results. In
other cases, "just rewriting" a codebase is really hard. Python started off as a scripting tool with
little support for things like packages installation and distribution, so people incrementally
developed tools to do that but without much cohesive vision. For example, the public index to upload
packages didn't enforce a standardized way to describe metadata, which heavily complicated
dependency resolution. The ecosystem was riddled with other inefficiencies that accumulated over
decades [7]. It was bothersome, but people didn't want to fix them out of fear of breaking existing
features and because they didn't see that much benefit in accelerating a language that is anyways
not used for high performance. After all, pure Python is several times slower than a compiled
language like C [8].

So there was no strong push to address those limitations, but the community gradually woke up from
years of poor improvisation and adopted official standards to configure projects more brainfully.
It's an unglamorous job; it doesn't bring new features to the language, but it did enable new tools
to resolve dependencies much faster. And contrarily to established tools, new ones don't need to
keep supporting backward compatibility; they are free to drop slow features and aggressively
implement new optimizations that might break edge cases. They are also free to get written in Rust,
like uv. That's basically a meme at this point, people point at Rust as if it is solving all the
problems, and while it is true that it's faster than pure Python, most issues in this case were
solved by standards and better algorithms that could have been implemented in any language. The hard
part was building consensus among users.

This kind of situation is often presented as a dilemma between convenience and efficiency, but there
are other factors to consider. Of course you don't always have to redo a project from scratch to
improve it; for example, this year, Cloudflare patched specific bottlenecks in the cache entries of
its DNS, that is, the program that resolves Website addresses into IP addresses, and they ended up
with 43 % faster insert time. That didn't need an entire rewrite. And in other cases, going the
other way is actually the best thing to do.


## 2. Negative-Cost Abstraction

In 2010, data centers were becoming more common to meet the demands of, you know, every single
aspect of the economy getting digitalized. Some people got curious about the amount of electricity
they would need. If we double the amount of data centers, would they not consume twice as much?

Well, between 2010 and 2018, the number of compute instances in data centers rose by 550% while
their electricity consumption rose by 6% [paper]. And that's because virtualization increased
efficiency. In a classical setup, one physical computer runs one application, like serving up a Web
page or processing transactions of some sort. If that application sits idle, you're wasting most of
the computer's resources. The solution was to run fake computers inside of real computers. You can
run multiple containers on a single computer and the containers will run as isolated user spaces, so
without having to rewrite your application, you can execute it on containers. Although this adds a
layer of abstraction and some overhead, it lets operators use computer resources at max capacity,
which increases efficiency.

*Abstractions* are ways of simplifying a program by hiding internal details and presenting important
features to users; for example, you can use a graphics library to create an application without
having to learn how GPU drivers work. But there's often a cost: programs become layers of different
abstractions that were not necessarily engineered to work well together. That can lead to copying
data for no reason [fragmentation] or looking up references in real time [lookup]; once again,
trading development speed for execution speed.

- Type 1: virtualization (e.g. docker / data centers), save resources
- Type 2: developer experience (e.g. transcompiler prevent unsafe code)

And those abstraction layers don't always hurt performance.
Containers make applications cross-platform without slowing them down [x] and transcompilers makes
code safer without much ill effects [y] for instance.

Rust vs others

Docker vs VM

Transcompiler (typescript / Javascript)

Killing OOP - cache concerns

- [paper] Recalibrating global data center energy-use estimates
- [top] https://www.science.org/doi/10.1126/science.aam9744 *****


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
