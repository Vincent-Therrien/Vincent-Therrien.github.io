# The Blessings and Curses of Cache Optimization


## What the Cache

The CPU cache is one of those things you don't want to mess with. It's a type of memory inside a CPU
that's designed to accelerate computations. In most cases, it improves performance by a lot, and you
can even modify some programs to use the cache more efficiently and make them run even faster. But
if you're not careful, the cache can also make programs run significantly slower than you'd expect
or cause major security vulnerabilities. So, let's see how we can use the cache to accelerate
programs and avoid wrecking them.

There's a huge problem with the main memory of a computer: it's very slow. At least, compared to a
CPU, the component that processes data. Accessing an element in main memory takes several
nanoseconds on a modern computer. In that time, a CPU can perform hundreds of operations, so it may
waste a lot of time just waiting for data to arrive [1]. The gap between memory access speed and
computation speed is called the memory wall, and it has been consistently increasing over the years.
To improve performance, manufacturers don't just make CPUs faster - they also have to minimize this latency [2].

CPU caches are a type of computer memory designed to address the memory wall. They are hardware
components integrated into CPUs that have an extremely low latency. On the downside, they are very
small. Therefore, caches only store data that the CPU has recently accessed. When the CPU needs to
use these data again, it gets them right away. This is called a cache hit, and it saves time. When
the data are not already in the cache, the CPU has to access main memory. This is called a cache
miss, and it wastes some time. To accelerate programs, we can make cache hits as frequent as
possible and avoid cache misses.

This is a simplified representation. In reality, the cache is organized into multiple layers. Some
are specific to each core, and others are shared across cores.


## The Blessings


### Matrix Multiplication

Let's see how we can optimize a program with the cache. A basic example is matrix multiplication, a
calculation that multiplies and adds up the elements in the rows and columns of two matrices. We
visualize matrices as 2D arrays, but in C++, for instance, they are generally stored as linear lists
of numbers. Accessing the rows of a matrix is pretty fast. When reading one value, the CPU actually
reads an entire cache line, which comprises multiple values. Reading the next value in the
row results in a cache hit because it belongs to the same cache line, so it was already in the
cache. Accessing the columns of a matrix is slower because their elements are spaced out and don't
fit in the same cache line. Therefore, accessing the values in a column results in cache misses.

The whiteboard implementation of matrix multiplication is not cache-friendly because the elements in
the right-end matrix are accessed by column. To avoid that, we can simply transpose that matrix and
access it by row. That leads to a performance gain of around 20 % on my system for large matrices.
Of course, if the matrices are very small, they can easily fit in the cache and won't really benefit
from this optimization.

We can do even better than that by recursively dividing the matrices into submatrices and
multiplying them together. Since the submatrices are small, their content can be fetched with fewer
cache misses. This is around 40 % faster than the naïve version on my system [3]. By the way, the
compiler won't show any warning message if you use the cache inefficiently, so it's really up to the
programmers to realize that they need to implement that kind of optimization. Other algorithms can
be improved in a similar way by accessing elements that are close to each other instead of jumping
all around memory.


### Sorting

One example is sorting. Our goal is to put a list of numbers in order, and there are many ways to do
that. Quicksort, for instance, is a simple, widespread sorting algorithm that's usually pretty fast,
but there exist algorithms that are specifically optimized for the cache, like funnelsort [4]. It
sorts data by relying on a tree structure to minimize cache misses. On average, quicksort is faster
that funnelsort, but in some situations, like when there's a very high memory latency,
funnelsort can outperform quicksort. However, that's rarely the case in practice, so funnelsort is
not much used in the wild.


### Data Types

There are other ways to optimize for the cache. One of them is to use smaller data types to reduce
accesses to main memory. For instance, let's compare the time required to sum a large amount of
integers in C++ using different types. Each type represents similar values but stores them with
different numbers of bytes. On my system, summing up 2-byte integers is around twice as fast as
summing 4-byte integers, which is itself twice as fast as 8-byte integers.

A modern CPU takes pretty much the same time to add two integers regardless of their type, so the
performance gain that we observe is due to the cache. Smaller data types fit more easily into the
cache, which reduces the number of times the CPU accesses main memory. There are downsides to using
smaller types of course: they can represent a smaller range of numbers and, for some operations like
multiplication, smaller types might take more time process than larger ones. Generally speaking, if
a program does not access memory very frequently, it will not gain much performance by using small
types, but if it is limited by a memory bottleneck, small types can be more useful [5].

Cache-friendly algorithms and data types can accelerate programs, but you always have to
remain careful to avoid their potentially negative side effects.


## The Curses

In some cases, the cache can ruin your programs even further, causing additional performance losses
and security concerns. And those problems are often hard to debug because the compiler and runtime
tools typically don't tell us that there's a problem at all.


### False Sharing

One example is false sharing, a loss of performance that occurs when threads write into the same
cache line. Take this program. It computes a sum in parallel by splitting a vector across multiple
threads and letting each one write their result at a specific index in a shared vector. When a thread
writes at a single index in the vector, the CPU marks the entire cache line as modified, which
invalidates the content of the cache in other cores. Before they access the now-invalidated line,
they'll first have to reload it, which leads to more memory accesses and decreases performance.

That's why we call it false sharing: the code makes it seem like the threads modify independent
elements, but, in practice, they are competing for access to memory because of how the cache works.
A solution is to space out the elements in the shared vector to ensure that they sit in different
cache lines, which avoids false sharing and increases performance [5].


### Security Issues

Apart from performance issues, CPU caches can also cause security vulnerabilities that attackers can
exploit to obtain private information. As we've seen, cache hits are much faster than cache misses,
and it's possible to measure the timing difference between the two. An attacker can set the
cache to a known state, let the victim execute an operation, and measure the time required to
execute it. If there's a cache hit, it means that the data were untouched. If there's a cache miss,
it means that the victim evicted part of the cache, perhaps to load private data. The attacker can
use this information to reconstruct the data of the victim. This is a type of side-channel attack -
we learn data by analyzing the side effects of a program. Other side-channel attacks can observe
power consumption, for instance [6].

In early 2018, two major security vulnerabilities partially due
to cache side-channel attacks were published, and they had actually been present in several CPUs
for years. To my delight, the researchers who discovered them bothered to find them cool names:
Meltdown and Spectre. CPU manufacturers announced that they would modify their products to counter
the vulnerabilities and software maintainers rolled out patches to minimize them [7]. But I find it
really spooky that such massive security flaws had just been hanging around for years and no one had
noticed them. Makes you wonder what other vulnerabilities might be floating around.

Everything we've seen so far pertains to CPU caches, a type of hardware cache. This is an example of
a memory hierarchy. Data are stored in different physical devices depending on their purpose.
External memory has a very high latency but a big capacity, so it's used for long-term storage of
large files. Main memory has a lower latency and capacity, so it's used to process data at
runtime. And the cache has a small capacity but a very low latency, so it's used to retrieve recently
accessed data. Other devices, like GPUs, also have hardware caches, and they work in a similar way.


## Software Cache

The word "cache" is not restricted to hardware, it can also refer to software buffers that store
recently used data to load them faster at a later moment. A software cache can grow or shrink
depending on the amount of data that are stored. This contrasts with hardware caches, which
cannot change their size because they are physical components. But, in both cases, it's the same
principle: the caches store recently used data to improve performance. Let's see some examples:

A Web browser cache temporarily stores parts of Web pages [8]. When a user tries to access a page
later, the browser loads the elements from the cache instead of downloading them again. This saves
time and decreases network usage, but there are some drawbacks. The browser cache can grow and end
up taking too much memory. It can also cause some bugs, and it that case you have to delete its
content. Nevertheless, the performance gained by using a cache are so significant that pretty much
all Web browsers implement one.

I guess it's time to talk about an AI, like everyone. In large language models, a cache can
store the previous queries and responses of a model. If a new query matches a similar one in the
cache, we can reuse the corresponding response instead of generating a new one, which lowers costs.
And, you know, electricity usage and water consumption [9]. But finding a cache hit can be difficult
because there are multiple ways to phrase a single query. Some projects use semantic caching,
meaning that they find matches based on the meaning of the queries instead of their exact words [10].
But, as you imagine, semantic caching can miss out nuances or misinterpret queries, which can lead
to retrieving the wrong responses.

In video games, a cache can store frequently used assets, like textures and sounds, to load them
more quickly and decrease lag. The content of the cache can change to store new data as a player
moves around and interacts with the environment [11]. If it grows too large, the game might have
to clear the cache up. This operation can take some time and cause noticeable delays, but some
games have found ways to disguise them into their gameplay to make them less obvious.

To wrap things up, a cache is a component that stores recently used data. Hardware caches are
physical components that store a small amount of data that can be accessed with a low latency.
Software caches are collections of recently accessed data that a program can reuse efficiently. In
both cases, a cache can dramatically improve the performance of a program but also wreck it if you
don't avoid pitfalls. As we've seen, cache optimizations can be difficult to implement and debug,
so it's always better to benchmark and validate your programs to ensure that they deliver the
performance that you expect.


## References

- [1] Schwarzkopf, Malte. "Lab 4: Caching". CS 131: Fundamentals of Computer Systems, Brown University. https://cs.brown.edu/courses/csci1310/2020/assign/labs/lab4.html
- [2] Gholami, Amir et al. "AI and Memory Wall" (2024). https://arxiv.org/abs/2403.14123
- [3] Slotin, Sergey. "Cache-Oblivious Algorithms". https://en.algorithmica.org/hpc/external-memory/oblivious/
- [4] Jansens, Dana. "I/O Efficient Sorting in the Cache-Oblivious Model: Quicker than Quick". Carleton University https://cglab.ca/~dana/funnelsort/funnelsort.pdf
- [5] Drepper, Ulrich. "What Every Programmer Should Know About Memory" (2007). https://www.akkadia.org/drepper/cpumemory.pdf
- [6] Yarom, Yuval and Falkner, Katrina. "LUSH+RELOAD: a High Resolution, Low Noise, L3 Cache Side-Channel Attack" (2014). https://eprint.iacr.org/2013/448.pdf
- [7] Graz University of Technology. "Meltdown and Spectre". https://meltdownattack.com/
- [8] Mozilla Foundation. "How to clear the Firefox cache". https://support.mozilla.org/en-US/kb/how-clear-firefox-cache
- [9] Gordon, Cindy. "ChatGPT And Generative AI Innovations Are Creating Sustainability Havoc". Forbes. https://www.forbes.com/sites/cindygordon/2024/03/12/chatgpt-and-generative-ai-innovations-are-creating-sustainability-havoc/
- [10] Zilliz. "GPTCache". https://github.com/zilliztech/GPTCache
- [11] Redis. "Cache Memory". https://redis.io/glossary/cache-memory/
