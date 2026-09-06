# Moore's Law's Waluigi

The biggest force at play in the history of software has been **laziness**. You'll more often see
engineers finding ways to make their job easier than making better programs, and the results are
fascinating.

Exhibit one: computers have become more powerful by orders of magnitude over the years, yet their
response latency, that is, the time between pressing a key and seeing the corresponding character on
screen, has not changed much. If anything, it got slightly worse [1]. Same thing happens with
Microsoft Office: while computers became faster, the software itself became more sluggish, which
compensated hardware improvements and resulted in consistently bad user experience over time [2]. I
could go on: Web browsers use more and more memory [3], Electron applications consume more and more
resources [4], modern build systems run slower than tooling from the 80s [5]. "Software is getting
slower more rapidly than hardware becomes faster" [6]. That's because any additional computing power
is used to support more features or more convenience for developers. No one really cares that it
makes the code less optimized because faster hardware cancels that out anyway, so we end up with
increasingly complex, unoptimized software.

Now, this is not yet another "software is getting too bloated" video. You can find weirdos arguing
that we should go back to writing software in assembly using vim, but this isn't the 80s anymore;
computers are doing way more things now, largely thanks to the pile of byzantine software I was just
complaining about. Making a video game or analyzing scientific data is, all things considered,
pretty easy today; you just assemble existing engines and libraries instead of coding everything
from scratch. Sure, stacking up abstraction layers can hurt performance, but I don't know anyone who
would pick the alternative. And it doesn't always hurt performance. Docker makes applications
cross-platform [7] and Typescript makes code safer [8]; neither of those technologies slow things
down. Jump on the hate wagon if you want, it's not all bad.

However, software often does in fact get more crappy, and while most developers were happy to ignore
this while the number of transistors on a chip was doubling every two years, things are becoming
more taxing. Hardware progress is slowing down, and if we keep building applications by continuing
to pile up poorly optimized code to save development time, we'll have an overall worse time
using technology and waste resources, unless we rethink software engineering.


## 1. Rewrites

The most impressive feat of the 2020s has not been Kimi 3 blowing Californian models out of the
water. It was uv, a project and dependency management tool for Python that dropped in 2024 and
proved to be tens to hundreds of times faster than comparable tools. Python is one of the most
widely used programming language, especially in AI. Managing dependencies in Python has long been a
nightmare and several projects have been developed to address that, but somehow everyone decided to
settle for awkwardly slow tools for years.

And that's simply because not enough effort had been put in optimization. Older tools, like poetry,
were written in Python, an interpreted language. When you run a Python program, it [explain the sequence in Python].


## 2. Zero-Cost Abstraction

Rust vs others

Docker vs VM

Transcompiler (typescript / Javascript)

Killing OOP - cache concerns

Cloudflare DNS cache entries Rust optimizations 100 TB freed insert 43 % faster
https://blog.cloudflare.com/dns-cache-memory-optimization-1111/

SQLite


Before: cross-platform compatibility, speed of development
Now: energy consumption, AI ease use of use,



- Roller coaster tycoon for weirdoes
- Let smart people implement Vulkan and let dumb people use it
- Moore's law's Waluigi: Wirth's law

- https://danluu.com/input-lag/
- https://en.wikipedia.org/wiki/Software_bloat#Examples
- https://en.wikipedia.org/wiki/Moore's_law
- https://www.science.org/doi/10.1126/science.aam9744 *****


# References

- [1] https://danluu.com/input-lag/
- [2] https://www.infoworld.com/article/2331126/fat-fatter-fattest-microsoft-s-kings-of-bloat.html
- [3] https://laptopretrospective.com/laptops/wirths-law-and-the-story-of-fatware/
- [4] Electron
- [5] Tooling
- [6] https://www.computer.org/csdl/magazine/co/1995/02/r2064/13rRUwInv7E
- [7] Docker