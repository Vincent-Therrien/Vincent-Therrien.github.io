# The End of Free Abstractions

The biggest force at play in the history of software has been **laziness**. You'll more often see
engineers finding ways to make their job easier than making better software, and the results are
fascinating. For example, you can package applications alongside an entire Web browser itself
containing a runtime engine itself containing a just-in-time compiler, and, you know, refer to the
tower of abstraction chart for the rest. We can also build native applications that run with minimal
dependencies and overhead, but that means actually doing our job.

Now, this is not another generic "software is getting bloated" video. You can find weirdos arguing
that we should go back to writing software in assembly with vim, but most people agree that
abstractions are necessary. First, they isolate complexity; we don't all have to become specialists
in computer graphics to display a rectangle because smart people have made libraries that let dumb
people make graphics. Second, abstractions don't have to hurt performance; you can make an
application cross-platform by using a Docker container and you'll see practically no performance
drop, or you can rip your hair out trying to coding shell scripts for every possible platform.

What's not getting enough criticism are *taxing* abstractions, the poorly made ones that don't
actually make development easier or chip away memory and CPU. One bad abstraction layer won't crash
your system, but keep stacking them and you will have to buy a new mainframe. Historically,
developers didn't care that much about optimization in non-real time applications because hardware
improvements rolled out so fast that they largely made up for increasingly bad software practices.
However, hardware progress is slowing down. We are hitting physical limits at the silicon level, and
I'm afraid continuing to build software by stacking up abstraction layers will hurt more and more,
unless we rethink how we do it. Several developers are already working on solutions to make software
both less sluggish, and I think it's only the beginning.


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


## 3. Data-Oriented Design

Killing OOP - cache concerns



## 4. Priorities





Before: cross-platform compatibility, speed of development
Now: energy consumption, AI ease use of use,


## Jokes

- Roller coaster tycoon
