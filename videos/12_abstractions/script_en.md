# Moore's Law's Waluigi

The biggest force at play in the history of software has been **laziness**. You'll more often see
engineers finding ways to make their job easier than making better programs, and the results are
fascinating.

Exhibit one: computers have become more powerful by orders of magnitude over decades, yet their
response latency, that is, the time between pressing a key and seeing the corresponding character on
screen, has not changed much. If anything, it got slightly worse [1]. Same thing happens with
Microsoft Office: the program becomes slower, but computers get faster; things balance out and you
get a product that remains equally bad across years [2]. Once additional computing power becomes
available, we use it to support new features [3] or make development more convenient [4], and things
become increasingly unoptimized. In short, "software is getting slower more rapidly than hardware
becomes faster" [5].

Now, this isn't another "software bloat is getting is getting out of hand" video. You can find
weirdos arguing that we should go back to writing code in assembly with vim, but this isn't the 80s
anymore; if computers can do so many things now, it's largely thanks to the pile of byzantine
software I was just complaining about. Making a video game or analyzing scientific data is, all
things considered, pretty easy today; you just assemble existing engines and libraries instead of
coding everything from scratch. And those abstraction layers don't always hurt performance.
Containers make applications cross-platform without slowing them down [6] and transcompilers makes
code safer without much ill effects [7] for instance.

But generally speaking, software has in fact been getting slower. Developers were happy to ignore
this while the number of transistors on chips was doubling every two years and making up for crappy
code, however, hardware progress is slowing down [8], and that means bad software will get more and
more taxing. If we keep building applications by piling up horrendous code to save on development
time, things will get worse, unless we rethink software engineering.


## 1. Rewrites

The best to make better software is often to set it on fire and start again.

Python is essentially everywhere at this point; in research, backend services, AI. But managing
Python projects has been an absolute pain for the longest time because the ecosystem was fragmented
across a dozen tools that really didn't work that well. Dependencies took forever to get resolved,
packages collided or didn't work on some platforms. Python started off as a scripting language. As
it began supporting more and more features, new tools were incrementally developed to manage more
complex projects, and they predictably accumulated bad twists. A few of them desperately needed
attention:

- Dependency resolution
- Zero copy virtual environments
- Write in a compiled language



Cloudflare DNS cache entries Rust optimizations 100 TB freed insert 43 % faster
https://blog.cloudflare.com/dns-cache-memory-optimization-1111/



## 2. Zero-Cost Abstraction

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
- [6] Docker
- [7] Typescript
- [8] Moore's law
