# The Golden Age of Genomics

The Human Genome Project is one of the greatest scientific accomplishments of all time. Over
than a decade, an international team sequenced and analyzed human DNA, which propelled our
understanding of biology. It also paved the way for new technologies that are now contributing to
breakthroughs in cancer treatments [2], personalized medicine [3], virology [4], and even other
fields like anthropology [5]. The study of genomes is called genomics, and, to learn more about it,
I'll guide you through the main steps of a whole-genome sequencing project. You can follow along
with this Python notebook to execute all the algorithms that I will use on your own computer. We will see:

- How to sequence DNA from genetic material,
- How to assemble a genome from sequencing data, and
- How to annotate a genome to explain its functions.


## Sequencing

The first step is sequencing, that is, reading the genetic material. DNA is a long molecule made of
units called nucleotides, of which there are four types. They bind into complementary base pairs
that store the genetic information necessary to build the RNA molecules and proteins that make us
live [6]. That's why the Human Genome Project was launched: by having access to the entire genetic
material of a human being, scientists would obtain a more complete picture of the biological
processes carried out by these molecules. DNA is challenging to sequence because it is very small
and very long [7], but multiple sequencing technologies have been developed over the years to read it.

Sanger sequencing, or first-generation sequencing, developed in the 70s, uses chain termination [8].
It begins with a single-stranded DNA fragment to which we attach a primer, a short complementary
sequence. An enzyme called DNA polymerase then elongates the fragment by adding complementary
nucleotides. Some of them are actually modified nucleotides called dideoxynucleotides. When the
enzyme happens to incorporate one, it terminates elongation and we end up with fragments of different
lengths. They can be separated by gel or capillary electrophoresis, where fragments travel at
different speeds depending on their lengths. We can resolve which nucleotides make up the sequence
by using separate reactions or fluorescent labelling. This method can sequence fragments of at most
1000 base pairs.

Second-generation sequencing, which became available in the mid 2000s, amplifies DNA into millions
of fragments that get sequenced in parallel, drastically increasing throughput compared to Sanger
sequencing and reducing costs [8]. There are multiple ways to do it. For instance, Illumina detects
the emission of light as fluorescent nucleotides are incorporated into DNA strands while Ion Torrent
detects pH changes during DNA synthesis. Second-generation technologies are limited to relatively
short fragments, between around 50 and 300 base pairs.

Third-generation sequencing, developed since the late 2000s [8], directly sequences long DNA
fragments without amplification. The two main technologies of this generation are Oxford nanopore,
which detects an electrical current as DNA traverses a nanopore, and PacBio SMRT, which detects
fluorescence during DNA synthesis. They can sequence fragments that have tens of thousands of base
pairs. The error rate of third-generation sequencing devices used to be high, but their accuracy
has improved a lot over the last years [9].

The Human Genome Project used Sanger sequencing because that's what was available at the
time, but it's very slow and expensive. Second- and third-generation sequencing have largely replaced
it in modern projects because they are much faster and cheaper. An important point to keep in mind is
that none of these technologies are perfectly accurate: they misread some base pairs and, depending
on how the samples are prepared, the ends of the sequences might contain erroneous data. Sequencing
files like FASTQ can indicate the quality score of each sequenced base pair [10], and we can use
these scores to reject low-quality reads and trim extremities where necessary [11].

Another problem you might have noticed is that sequencing technologies read a limited number of base
pairs. Human chromosomes are much much longer than that, so it's impossible to sequence them in
one go, even with the latest technologies.


## Assembly

The second step is to assemble the genome from short DNA sequence reads. We have two options:

- stitch them together to reconstruct the genome - this is called de novo assembly, or
- compare them against a reference genome if one is available - this is called reference-based assembly.


### De Novo Assembly

Let's begin with de novo assembly. We overlap the reads to find contiguous segments - those are
called contigs - and put them together to form a scaffold, which is a draft of the complete genome.
We then fill the gaps and fix the errors in the scaffold to obtain the final genome [12].

A naïve algorithm could compare each read to all other reads and identify matches to find the
contigs. That scales terribly; modern sequencing technologies produce millions of reads, and it
would take too much time to do all these pairwise alignments.

An improvement of this approach is the **overlap-layout-consensus** method [13]. We build an overlap
graph where each node corresponds to a read and edges indicate overlaps. To reconstruct the original
sequence, we find the shortest path that visits all nodes once - this is called layout. If you're
familiar with graph theory, you'll recognize this as the traveling salesman problem, and there is no
known algorithm that can efficiently solve it for arbitrary graphs [14]. We can find the shortest
path by trying all possible combinations, but that's inefficient for large graphs. We instead
approximate the solution with a heuristic, for example, a greedy search that picks the shortest edge
linked to each node. It often works, but it's not guaranteed to find the shortest path. The last
stage is consensus, where we resolve discrepancies between reads. Overlap-layout-consensus is more
efficient than the naïve approach because it reduces the number of pairwise alignments, but the
construction of the graph can take time, especially if we have a lot of reads.

Another algorithm more adapted to a large number of reads is the **De Bruijn graph** [13]. We build
a graph similar to the one we had before, but instead of using complete reads, we cut them in pieces
called K-mers that have a predetermined length. They are linked when they overlap by a single base
pair, which makes the graph faster to build than with the other method. We then reconstruct the original
sequence by finding the shortest path. This is more challenging because the K-mers contain less
information, which makes conflicts more difficult to resolve. So there's a tradeoff between the two
methods: overlap-layout-consensus is better for long reads, and De Bruijn graphs are better for short reads.

One problem with de novo approaches is their poor ability to resolve repetitions. There are multiple
ways to overlap repeating reads, so the algorithms may fail to reconstruct the original sequence.
Unfortunately, as large fraction of the human genome consists of repeats [31], so scientists often have to
use tricks to resolve these repetitions, like using longer reads or isolating specific sequences.


### Reference-Based Assembly

Let's now look at reference-based assembly, also called alignment. If we are assembling reads obtained from
an organism for which the genome of a similar organism has already been sequenced, we can align our
reads to this reference genome. That's more efficient than patching all the reads together because
it requires fewer operations. It can be used to assemble human DNA because we have a reference
genome, but it cannot be used with more poorly-studied organisms.

Finding a match for each read by naïvely searching an entire genome would be time-consuming, but we can
convert the reference genome into a format that facilitates alignment. We would do something similar
to search numbers. If you need to find a particular value in a list, you can check them all
one by one, which can be slow, or sort the numbers and then perform a binary search.
Sorting the numbers takes some time, but once that's done the search becomes much faster.

One way to organize the reference genome into a format that accelerates alignment is the Burrows-Wheeler transform. We list all
the sequences that we can obtain by shifting the reference genome by different offsets and then sort
these strings to obtain the transform. Since this rearrangement is based on lexicographic order, we
can iteratively narrow the search down to sequences that match our reads and find the closest
alignment efficiently. Of course, computing the transform takes some time, but once it's done,
we can rapidly align our reads [15].

To recap, we can combine short reads into a full DNA sequence by using de novo or reference-based
methods, depending on the sequencing technology that we use and the availability of reference
genomes. In some cases, we can even combine these approaches to obtain better results [16]. But an
assembled genome, by itself, is not very useful, it's just a bunch of letters. We need to make sense
out of it.


## Annotation

The third step of a genome project is annotation, that is, documenting a genome. There are two main
things we can do:

- structural annotation identifies elements of interests like genes and
- functional annotation explains what these elements do.


### Structural Annotation

Let's start with structural annotation. Our goal is to find regions in the genome that serve a
particular purpose, like protein-coding genes. They get transcribed into messenger RNA and then
translated into protein­s by ribosomes that decode groups of three nucleotides. These groups are
called codons, and they correspond to specific amino acids. For instance, the codon ATG corresponds
to methionine and also indicates the start of the translation. The codon CGC corresponds to arginine
and the codon TGA stops the translation. This set of rules is called the genetic code. It is pretty
similar across all lifeforms, but there exist some variations. For example, the mitochondria in
human cells use a slightly modified version of the standard genetic code [32].

The oldest approach to identify genes is called ab initio, meaning that we use the genome
itself without relying on external information. Protein-coding genes typically comprise a start and a
stop codon to initiate and terminate translation, so we can look for sequences that follow this pattern.
Since codons are made of three nucleotides and because DNA can be read in two directions, there are
six possible ways to translate a DNA sequence.

For example, let's have a look at the first 300 nucleotides of the reference genome of Escherichia
coli, a bacteria that lives in the intestine of warm-blooded animals. We can find 4 regions that contain a start
and a stop codon, but that does not necessarily mean that they encode a protein. Indeed, when checking the
reference annotation, we realize that only one of the 4 regions that we have found is actually a gene.
The 3 others are false positives, and ab initio methods often end up with a lot of these. We can
refine the search by using heuristics to avoid false positives, such as eliminating sequences that
are too short and looking around for promoters, sequences that help initiate transcription. That will
weed out some false positives, but even for the relatively simple genes of bacteria, none of
these improvements will lead entirely accurate gene predictions. And the genes in eukaryotes like humans
are even more complex and difficult to identify [17].

Another approach is to work backward by isolating a protein or a piece of RNA, deducing the DNA
sequence that was used to make it, and then mapping this reconstructed sequence to the genome. This is an
evidence-based method. Simple sequences might directly map to a specific locus in the genome, but in many cases,
mapping is not as straightforward. For example, in mammals, a lot of genes contain introns,
sequences that get discarded after transcription. The gene product does not tell us where these
introns are, which makes our reconstructed sequences more difficult to align [18].

As more DNA sequences became available over time, a new type of structural annotation based on
homology became more widespread. In short, we use sequences that we already know and try to align
them to find similar sequences in a genome. For instance, we can identify a gene in one bacteria and then
try to find a similar gene in another bacteria. Homology-based methods were not very useful before
modern sequencing technologies, when few sequences were available, but now that we have large,
annotated sequence databases, they have become more efficient [17].


### Functional Annotation

Functional annotations explain what the elements that we have identified do. When scientists
discover the function of a gene through experimental means, they can write an entry in a database to
describe it in detail.

For instance, you can open the human reference genome the interactive genome viewer of the NCBI and search for the ABO gene,
which contributes to determining blood groups in humans. If you click on that gene, you'll land on
a page that provides functional annotations along with related elements, possible interactions with
other genes, the expression of the gene in different tissues and more information. The page even links
to research papers that discuss these points in detail [19].

I've focused on genes in this section, and, while they are essential components of the genome, they
represent a small fraction of the DNA in many organisms. Around 1.5 % of human DNA is coding [20],
meaning that it's used to make proteins. Other parts our genome are functional non-coding DNA because
they don't encode proteins but have other well-identified functions. For example, centromeres are
structural elements essential for the replication of chromosomes [21] and regulatory elements are
regions around genes that control their expression [20]. Other regions of our genome have less
clearly-identified functions. For example, transposable elements are sequences that can change
position, and they make up around 45 % of the human genome [28]. Some have been shown to participate
in gene regulation, others increase genetic diversity and contribute to evolution, but there remain
a lot of transposable elements with unidentified functions [29].

There's no consensus on the proportion of the human genome that can be considered "functional". One
way to estimate it is to find which sequences are under selective pressure, meaning that organisms
tend to preserve these sequences over generations because they provide an evolutionary advantage.
A team of researchers estimated that around 8.2 % of the human genome can be considered functional
according to this definition [24]. Another approach is to find the proportion of biochemically
active sequences. In 2012, the ENCODE project found that 80 % of the human genome can be considered
"functional" in the sense that it's active [25]. Depending on how you define the word, the
proportion of "functional" DNA in our genome differs.

To summarize, we use annotations to identify elements in a genome and explain their functions.
There remain a lot of functions to uncover and the definition of "functional" DNA is not universal.


## Conclusion

Let's recap: a whole-genome sequencing project aims at sequencing the genome of an organism and
explaining how it works. It consists in:

- sequencing DNA, typically with second and third generation technologies nowadays,
- assembling the sequenced reads into a genome with de novo or reference-based approaches, and
- annotating the genome to identify elements and explain their functions.

Genomics has immensely progressed over the last decades. Nowadays, sequencing technologies are much
more efficient, analysis programs are faster, and databases contain more and more annotations. The
Human Genome Project took more than 10 years of international effort to build one reference genome,
but we can now sequence hundreds of genomes in much less time [27]. Technological innovation and
scientific collaboration have led us to an era of rapid advances in genomics, which results in new
medical treatments and improves our understanding of life.


## Bonus: Elaborating on Functional and Nonfunctional DNA

> This section is not included in the video.

-> Elaborating on the discussion about functional DNA starting at 12:50

Less than 10 % of our genome has clearly recognized functions (encode proteins, control gene
expression, protect the extremities of chromosomes, ...) while the rest does not have obvious
functions. It is often called "junk DNA" (or, more neutrally, "nonfunctional DNA") because it
appears not to be useful for the organism, but we often end up discovering that junk DNA actually
has functions. They can be less critical than protein-coding genes, though.

- Introns were mostly seen as nonfunctional when they were discovered because they get discarded
  after transcription, but they can actually be important to determine how genes are expressed.
- Transposable elements were seen as nonfunctional because they mostly act as selfish elements, a
  bit like parasites that are interested in their own replication and providing no apparent benefit to the
  organism. But some TEs like LINE-1 have been shown to regulate genes. Others seem to promote
  genetic diversity, which could help species evolve over time (not directly useful for most organisms,
  but could still be seen as somewhat functional for long-term evolutionary adaptations). Other TEs
  are still considered nonfunctional, but maybe we don't just understand them well enough.

DNA sequences are complex and don't neatly fit into "functional" and "nonfunctional" categories.
Some are essential for survival and clearly fit into "functional", but it's more difficult to
categorize sequences that are "somewhat useful". Evolutionary biologists and biochemists use
different definitions to categorize sequences, which explains why they end up with such different
estimates. The article https://www.pnas.org/doi/full/10.1073/pnas.1318948111 summarizes them.

This situation reminds me of other semantic debates in science, such as the definition of the word
"planet". Pluto was considered a planet for decades, but as astronomers discovered new objects in
the solar system of a similar size, it became more logical to exclude it from the list of planets.
Apparently, some astronomers are still beefing with that redefinition. Maybe one day the scientific
community will settle on a clear definition of "functional DNA", but even if that happens I'm fairly
certain that some people will disagree with it.


## References

- [0] National Human Genome Research Institute. "Genomics". https://www.genome.gov/genetics-glossary/genomics
- [1] International Human Genome Sequencing Consortium. "Finishing the euchromatic sequence of the human genome". Nature 431, 931–945 (2004). https://doi.org/10.1038/nature03001
- [2] Chakravarty, D., Solit, D.B. "Clinical cancer genomic profiling". Nat Rev Genet 22, 483–501 (2021). https://doi.org/10.1038/s41576-021-00338-8
- [3] Heinken, A., Hertel, J., Acharya, G. et al. "Genome-scale metabolic reconstruction of 7,302 human microorganisms for personalized medicine". Nat Biotechnol 41, 1320–1331 (2023). https://doi.org/10.1038/s41587-022-01628-0
- [4] Frampton, Dan et al. "Genomic characteristics and clinical effect of the emergent SARS-CoV-2 B.1.1.7 lineage in London, UK: a whole-genome sequencing and hospital-based cohort study". The Lancet Infectious Diseases, Volume 21, Issue 9, 1246 - 1256 https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(21)00170-5/fulltext
- [5] Yang, X., Li, H., Wang, B. et al. "Population dynamics in Iron Age Xinjiang inferred from ancient genomes of the Zhagunluke site". Archaeol Anthropol Sci 17, 76 (2025). https://doi.org/10.1007/s12520-025-02186-7
- [6] Alberts, Bruce et al. "The Structure and Function of DNA". Molecular Biology of the Cell. 4th edition. https://www.ncbi.nlm.nih.gov/books/NBK26821/
- [7] National Center for Biotechnology Information (US). "Chromosome Map" https://www.ncbi.nlm.nih.gov/books/NBK22266/
- [8] Kübra Eren , Nursema Taktakoğlu , Ibrahim Pirim. "DNA Sequencing Methods: From Past to Present". (2022) The Eurasian Journal of Medicine. https://www.eajm.org/Content/files/sayilar/224/8.pdf
- [9] Wenger, A.M., Peluso, P., Rowell, W.J. et al. "Accurate circular consensus long-read sequencing improves variant detection and assembly of a human genome". Nat Biotechnol 37, 1155–1162 (2019). https://doi.org/10.1038/s41587-019-0217-9
- [10] National Center for Biotechnological Information. "File Format Guide". https://www.ncbi.nlm.nih.gov/sra/docs/submitformats/
- [11] Bolger, A. M., Lohse, M., & Usadel, B. (2014). Trimmomatic: A flexible trimmer for Illumina Sequence Data. Bioinformatics, btu170. http://www.usadellab.org/cms/?page=trimmomatic
- [12] Dominguez Del Angel V, Hjerde E, Sterck L et al. "Ten steps to get started in Genome Assembly and Annotation". F1000Research 2018, 7(ELIXIR):148 (https://doi.org/10.12688/f1000research.13598.1)
- [13] Gifford, David K. "Lecture 6 - Genome Assembly". MIT OpenCourseWare. https://ocw.mit.edu/courses/7-91j-foundations-of-computational-and-systems-biology-spring-2014/e885f0eb376ea6c2045eb9d8847f106f_MIT7_91JS14_Lecture6.pdf
- [14] Kuo, Marc. "Algorithms for the Travelling Salesman Problem". Routific. https://www.routific.com/blog/travelling-salesman-problem
- [15] Heng Li, Richard Durbin, "Fast and accurate short read alignment with Burrows–Wheeler transform", Bioinformatics. https://doi.org/10.1093/bioinformatics/btp324
- [16] Lischer, H.E.L., Shimizu, K.K. "Reference-guided de novo assembly approach improves genome reconstruction for related species". https://doi.org/10.1186/s12859-017-1911-6
- [17] Ejigu GF, Jung J. Review on the Computational Genome Annotation of Sequences Obtained by Next-Generation Sequencing. Biology. 2020; 9(9):295. https://doi.org/10.3390/biology9090295
- [18] Liang C, Mao L, Ware D, Stein L. "Evidence-based gene predictions in plant genomes". Genome Res. 2009 Oct;19(10):1912-23. doi: 10.1101/gr.088997.108. Epub 2009 Jun 18. PMID: 19541913; PMCID: PMC2765265.
- [19] National Center for Biotechnological Information. "Genome Data Viewer". https://www.ncbi.nlm.nih.gov/gdv/
- [20] Richard Boland, C. "Non-coding RNA: It’s Not Junk". Dig Dis Sci 62, 1107–1109 (2017). https://doi.org/10.1007/s10620-017-4506-1
- [21] Hayden KE, Strome ED, Merrett SL, Lee HR, Rudd MK, Willard HF. Sequences associated with centromere competency in the human genome. Mol Cell Biol. 2013 Feb;33(4):763-72. doi: 10.1128/MCB.01198-12. Epub 2012 Dec 10. PMID: 23230266; PMCID: PMC3571344.
- [22] Jennifer Witek; Shamim S. Mohiuddin. "Biochemistry, Pseudogenes" https://www.ncbi.nlm.nih.gov/books/NBK549832/
- [23] Kim YJ, Lee J, Han K. Transposable Elements: No More 'Junk DNA'. Genomics Inform. 2012 Dec;10(4):226-33. doi: 10.5808/GI.2012.10.4.226. Epub 2012 Dec 31. PMID: 23346034; PMCID: PMC3543922.
- [24] Rands CM, Meader S, Ponting CP, Lunter G (2014) "8.2% of the Human Genome Is Constrained: Variation in Rates of Turnover across Functional Element Classes in the Human Lineage". PLoS Genet 10(7): e1004525. https://doi.org/10.1371/journal.pgen.1004525
- [25] ENCODE Project Consortium. An integrated encyclopedia of DNA elements in the human genome. Nature. 2012 Sep 6;489(7414):57-74. doi: 10.1038/nature11247. PMID: 22955616; PMCID: PMC3439153.
- [26] Eddy, Sean R. "The C-value paradox, junk DNA and ENCODE". Current Biology https://www.cell.com/current-biology/fulltext/S0960-9822(12)01154-2
- [27] Liao, WW., Asri, M., Ebler, J. et al. A draft human pangenome reference. Nature 617, 312–324 (2023). https://doi.org/10.1038/s41586-023-05896-x
- [28] Margot Correa et al, "The Transposable Element Environment of Human Genes Differs According to Their Duplication Status and Essentiality", Genome Biology and Evolution, Volume 13, Issue 5, May 2021, evab062, https://doi.org/10.1093/gbe/evab062
- [29] Mangoni, D., Simi, A., Lau, P. et al. LINE-1 regulates cortical development by acting as long non-coding RNAs. Nat Commun 14, 4974 (2023). https://doi.org/10.1038/s41467-023-40743
- [30] Pray, L. (2008) Transposons: The jumping genes. Nature Education 1(1):204 https://www.nature.com/scitable/topicpage/transposons-the-jumping-genes-518/
- [31] Liao, X., Zhu, W., Zhou, J. et al. "Repetitive DNA sequence detection and its role in the human genome". Commun Biol 6, 954 (2023). https://doi.org/10.1038/s42003-023-05322-y
- [32] Andrzej (Anjay) Elzanowski, Jim Ostell. "The Genetic Codes". https://www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi
- [33] National Center for Biotechnological Information, "GenBank and WGS Statistics". https://www.ncbi.nlm.nih.gov/genbank/statistics/

Reference-based pipeline:

- [34] National Cancer Institue. "DNA-Seq: Whole Exome and Targeted Sequencing Analysis Pipeline". https://docs.gdc.cancer.gov/Data/Bioinformatics_Pipelines/DNA_Seq_Variant_Calling_Pipeline/

De novo pipeline:

- [35] Almeida FMd, Campos TAd and Pappas Jr GJ. Scalable and versatile container-based pipelines for de novo genome assembly and bacterial annotation. [version 1; peer review: 2 approved, 1 approved with reservations]. F1000Research 2023, 12:1205 (https://doi.org/10.12688/f1000research.139488.1)

Articles related to the history of the Human Genome Project. Not used for the video but interesting
if you want to know more about the HGP.

- How volunteers were recruited for the HGP: https://www.statnews.com/2024/07/09/human-genome-project-untold-story-how-single-volunteer-became-genetics-foundation/
- How stock prices tanked when the US and UK governments took a stance against gene patents: https://archive.nytimes.com/www.nytimes.com/learning/students/pop/articles/031500sci-human-genome.html

If you still have trouble wrapping your head around how most of the human genome is apparently not
selected during evolution: https://en.wikipedia.org/wiki/Nearly_neutral_theory_of_molecular_evolution
