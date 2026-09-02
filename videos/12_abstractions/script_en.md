# Software Will Keep Getting Worse

The biggest force at play in the history of software has been **laziness**. You'll more often see
engineers finding ways to make their job easier than making better programs, and the results are
fascinating. The clock speed and number of transistors in computers has increased by orders of
magnitude over the years, yet computer you can buy now have significantly worse latency than
machines sold in the 80s [1]. That's because software used to support very specific use cases, so it
was easy to optimize, but when you want to support more platforms or make development faster, the
easiest way to do this is often to introduce complexity. And that's how you eventually end up
distributing applications by packaging it alongside an entire Web browser itself containing a
runtime engine itself containing a just-in-time compiler.

Now, this is not yet another "software is getting too bloated" video. You can find weirdos arguing
that we should go back to writing software in assembly with vim, but most people agree that adding
complexity is often the best thing to do. Some libraries might look needlessly byzantine and with
too many abstractions, but they isolate complex logic and make it easy for dumber developers to
create applications on top of that. Docker lets you make applications cross-platform without
decreasing their performance. I refuse to jump on the Docker hate wagon, I can complain that it's
taking too much space on my disk, but it's definitely making my life easier.

But what's not getting enough criticism are *taxing* abstractions, the poorly made ones that don't
really make development easier and chip resources away. Historically, developers didn't care that
much about optimization in non-real time applications because hardware improvements rolled out so
fast that they made up for increasingly bad software practices. However, hardware progress is
slowing down. We are hitting physical limits at the silicon level, and I'm afraid continuing to
build software by stacking up more and more abstraction layers will begin to hurt, unless we rethink
how we do it. Several developers are already working on solutions to make software both less
sluggish, and I think it's only the beginning.


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


## 3. Data-Oriented Design

Killing OOP - cache concerns



## 4. Generated Code





Before: cross-platform compatibility, speed of development
Now: energy consumption, AI ease use of use,


## Jokes

- Roller coaster tycoon for weirdoes
- Let smart people implement Vulkan and let dumb people use it

- https://danluu.com/input-lag/
- https://en.wikipedia.org/wiki/Software_bloat#Examples
- https://en.wikipedia.org/wiki/Moore's_law


# References

- [1] https://danluu.com/input-lag/
