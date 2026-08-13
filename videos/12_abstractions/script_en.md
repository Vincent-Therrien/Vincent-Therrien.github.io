# The End of Free Abstractions

The biggest force at play in the history of software has been **laziness**. You'll more often see
engineers finding ways to make their job easier than making better software, and the results are
fascinating. For example, a popular way to ship applications is to package them alongside a Web
browser itself containing a runtime engine itself containing a just-in-time compiler, and, you know,
refer to the tower of abstraction chart for all the details. We *could* write native applications
that would run with minimal dependencies and overhead, but that would mean actually doing our job.

Now, this is not another generic "software is getting bloated" video. You can find weirdos arguing
that we should go back to writing software in binary with vim, but most people, and me, agree that  // Roller coaster tycoon
abstractions are **necessary**. When we package graphics operations in a dedicated library or
engine, knowledgeable people can optimize them and make them easy to use for non-specialists; that
way we don't all have to learn complex logic to draw a stupid rectangle. And in many cases,
abstractions don't even hurt performance. Programs run on Docker almost as fast as on native
platforms, so making a program cross-platform comes at almost zero cost.

What's not getting enough criticism are *taxing* abstractions, the poorly made ones that chip away
CPU and memory. One layer alone isn't bad, but keep stacking them and you will have to buy a new
mainframe. Historically, developers didn't care that much about optimization in non-real time
applications because hardware improvements rolled out so fast that they largely made up for
increasingly bad software practices. However, hardware progress is slowing down. We are hitting
physical limits at the silicon level, and I'm afraid continuing to build software by stacking up
abstraction layers will hurt more and more, unless we rethink how we do it. Several developers are
already working on solutions to make software less sluggish, and I think it's only the beginning.


## 1. Rewrites

The most impressive feat of the 2020s has not been Kimi 3 blowing Californian models out of the
water. It was rather uv, a project and dependency management tool for Python that dropped in 2024
and proved to be tens to hundreds of times faster than comparable tools. Python is one of the most
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
