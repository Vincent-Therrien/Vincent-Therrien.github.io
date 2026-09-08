# Moore's Law's Waluigi

The biggest force at play in the history of software has been **laziness**. You'll more often see
engineers finding ways to make their job easier than making better programs, and the results are
fascinating.

Exhibit one: computers have become more powerful by orders of magnitude over decades, yet their
response latency, that is, the time between pressing a key and seeing the corresponding character on
screen, has not changed much. If anything, it got slightly worse [1]. Same thing happens with
Microsoft Office: the program becomes slower, but computers get faster; things balance out and you
get a product that remains equally bad over time [2]. Once additional computing power becomes
available, we use it to support new features [3] or make development more convenient [4], and things
become increasingly unoptimized. In short, "software is getting slower more rapidly than hardware
becomes faster" [5].

Now, this isn't another "software bloat is getting is getting out of hand" video. You can find
weirdos arguing that we should go back to writing code in assembly with vim, but this isn't the 80s
anymore; if computers can do so many things now, it's largely thanks to the pile of byzantine
software I was just complaining about. Software is, all things considered, relatively easy today;
you can assemble existing engines and libraries instead of coding everything from scratch.

But generally speaking, software has in fact been getting slower. Developers were happy to ignore
this while the number of transistors on chips doubled every two years and made up for crappy code,
however, hardware progress is slowing down [6], and that means bad software will get more and more
taxing in the near future. If we keep building applications by piling up horrendous code to save on
development time, things will get worse, unless we rethink software engineering.


## 1. Rewrites

The best way to make good software is often to set it on fire and start again.

Managing Python projects has been an absolute pain for the longest time because, before it became
the multipurpose programming language we know and love, it started off as a scripting tool with
little support for things like package installation and distribution. So people incrementally
developed a bunch of programs to address those limitations, and they were not always good. For
example, when installing dependencies, you need to validate their sub-dependencies to make sure you
don't end up with conflicts, and for some reason that crucial piece of information was stored inside
of archives. Instead of looking up package versions on an index, installers had to download full
packages, check their metadata, and if the version didn't match, discard the files entirely. That's
one issue, the ecosystem was riddled with other inefficiencies. And on a more fundamental level,
Python itself is slow. Around 75 times slower than C.

People gradually woke up from decades of poorly improvised project management and adopted official
standards to configure projects in a specific file format and put metadata on a public index instead
of inside archives. That doesn't really bring new features to the language, but it makes dependency
resolution faster. And new tools, like uv, implemented additional optimizations: parallel downloads,
a global cache, dropping slow legacy features, and it's written in Rust. This is basically a meme at
this point, and a lot of people focus only on that point when discussing uv but forget a lot of the
performance gain could have been implemented in pure Python. No one bothers doing it though because
Python isn't used for speed anyway and it can break backward compatibility. In that kind of
situation, making new software is the best way to go against Wirth's law.

But you don't always have to rewrite a project from scratch though, in many cases it's enough to patch
inefficiencies.
Cloudflare DNS cache entries Rust optimizations 100 TB freed insert 43 % faster

- uv optimizations: https://nesbitt.io/2025/12/26/how-uv-got-so-fast.html
- uv resolver: https://deepwiki.com/astral-sh/uv/3.1-pubgrub-resolver
- pip dependency resolution: https://dublog.net/blog/so-many-python-package-managers/
- joke: https://xkcd.com/1987/
- Cloudflare: https://blog.cloudflare.com/dns-cache-memory-optimization-1111/


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

SQLite


## 4. Energy



## 5. Psychological Limits



Before: cross-platform compatibility, speed of development
Now: energy consumption, AI ease use of use,



# Jokes

- Water walk by John Cage
- Roller coaster tycoon for weirdoes
- toilette dans Parasite
- Let smart people implement Vulkan and let dumb people use it

- https://danluu.com/input-lag/
- https://en.wikipedia.org/wiki/Software_bloat#Examples
- https://en.wikipedia.org/wiki/Moore's_law


# References

- [1] https://danluu.com/input-lag/
- [2] https://www.infoworld.com/article/2331126/fat-fatter-fattest-microsoft-s-kings-of-bloat.html
- [3] https://laptopretrospective.com/laptops/wirths-law-and-the-story-of-fatware/
- [4] Electron
- [5] https://www.computer.org/csdl/magazine/co/1995/02/r2064/13rRUwInv7E
- [6] Moore's law
