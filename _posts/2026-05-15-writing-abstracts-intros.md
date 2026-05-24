---
title: "How I write abstracts and introductions for my research papers"
date: 2026-05-15
layout: post
---

It's kinda funny that abstracts are the part of research papers that are written
last, but are the parts that are read by the most people. I can personally say
that I use the abstract of a research paper to judge whether or not it is
relevant for me to read further. Thus, it is important for abstracts to be
clear, concise, and representative of the rest of the paper.

Writing abstracts and introductions for my research papers used to be a bit of a
dark art for me, where I would just sort of vaguely summarize the main thrust of
my paper and hope that it got the point across. Lately, though, after reading
enough abstracts I think I know what the "formula" sort of is, and I thought it
would be a good idea to write a post about it. So here we are.

The most helpful advice for writing abstracts I've ever read came from
[this](https://nicholas.carlini.com/writing/2026/how-to-win-a-best-paper-award.html)
blog post by Nicholas Carlini, and I highly recommend reading through the whole
thing because it is chock full of good advice. Here, though, I'll just focus on
writing abstracts.

I think one thing that I've realized is that it is perfectly okay for abstracts
and introductions to be a bit fomulaic. In fact if you follow the zeitgesit
established by other papers in your field, it will be easier for people familiar
with that schema to understand your paper and there is a higher chance it will
be accepted. I think in general, scientific writing is a bit more rigid than
fiction for this very reason. It is important for there to be no surprises in
the structure of your paper so that the content (which is the important part!)
comes through as cleanly as possible.

The abstracts I write that follow this template are exactly five sentences long,
no more and no less:

- Sentence #1 sets the stage and introduces the broader topic you're working on.
- Sentence #2 introduces the specific problem that you're going to solve in this
  paper.
- Sentence #3 should summarize the key insight/technique you use to solve the
  problem introduced in sentence 2.
- Sentence #4 should contain you "headline result" that demonstrates, broadly,
  that your idea works in practice.
- Sentence #5 concludes the abstract by emphasizing why exactly this work
  matters in the broader context of computer science.

Note that this is just a skeleton or template, and thus there is a lot of wiggle
room to play around with when writing abstracts in practice. In fact, a lot of
extremely well-written CS research papers completely eschew this template. For
example, you might need two sentences to summarize your results, or you may
decide that the problem you're solving in the paper is so well-known and
formalized that it is unecessary to mention it in the abstract. However, I do
maintain that following this template/formula will at least provide a solid
starting point that you can modify at your discretion.

# Real-world example

To make this structure a bit more concrete, let's walk through an abstract from
a real published research paper
([this](https://ieeexplore.ieee.org/abstract/document/7958570) one, to be
precise). Here's the abstract in its entirety:

> *Neural networks provide state-of-the-art results for most machine learning
> tasks. Unfortunately, neural networks are vulnerable to adversarial examples:
> given an input x and any target classification t, it is possible to find a new
> input x' that is similar to x but classified as t. This makes it difficult to
> apply neural networks in security-critical areas. Defensive distillation is a
> recently proposed approach that can take an arbitrary neural network, and
> increase its robustness, reducing the success rate of current attacks' ability
> to find adversarial examples from 95% to 0.5%. In this paper, we demonstrate
> that defensive distillation does not significantly increase the robustness of
> neural networks by introducing three new attack algorithms that are successful
> on both distilled and undistilled neural networks with 100% probability. Our
> attacks are tailored to three distance metrics used previously in the
> literature, and when compared to previous adversarial example generation
> algorithms, our attacks are often much more effective (and never worse).
> Furthermore, we propose using high-confidence adversarial examples in a simple
> transferability test we show can also be used to break defensive distillation.
> We hope our attacks will be used as a benchmark in future defense attempts to
> create neural networks that resist adversarial examples.*

## Broader topic

Let's break this down through the lens of my five-part structure.

> *Neural networks provide state-of-the-art results for most machine learning
> tasks.*

This sentence informs the reader what subfield of computer science this paper is
most relevant to. Specifically, the keywords "neural networks" and "machine
learning" act as signposts to tell the reader what topic this paper dabbles in.

## Specific problem

Here's the sentence that follows:

> *Unfortunately, neural networks are vulnerable to adversarial examples: given
> an input x and any target classification t, it is possible to find a new input
> x' that is similar to x but classified as t. This makes it difficult to apply
> neural networks in security-critical areas.*

This sentence clearly tells the reader what specific problem in the subfield of
neural networks this paper is going to tackle: the existence of adverserial
inputs. Stating the problem clearly up-front like this primes the reader and
tells them what to look for while reading the rest of your paper. It also acts
as an escape hatch. At this point, a potential reader might not care whatsoever
about the problem of adverserial inputs. After reading three sentences of your
abstract, that reader can then decide that the rest of this paper is not
reading. However, let's assume that our reader is indeed interested in this
research problem. The next logical step is to introduce the novel insight that
this paper produces:

## Novel insight

> *Defensive distillation is a recently proposed approach that can take an
> arbitrary neural network, and increase its robustness, reducing the success
> rate of current attacks' ability to find adversarial examples from 95% to
> 0.5%. In this paper, we demonstrate that defensive distillation does not
> significantly increase the robustness of neural networks by introducing three
> new attack algorithms that are successful on both distilled and undistilled
> neural networks with 100% probability.*

Well that was a bit of a juke! It turns out that this paper advances our
understanding of the world by demonstrating that a proposed technique (defense
distillation) does not actually work that well in practice. This is still a very
real insight that advances our understanding of this problem space. Note that
this is really the "core" of your paper, and as such, it is a very useful
exercise to see if you can actually summarize it in one or two concise
sentences. If you find this difficult, that might be a sign that you are trying
to cram too many disparate ideas into a single paper, when maybe they should be
separate papers.

## Evaluation results

> *Our attacks are tailored to three distance metrics used previously in the
> literature, and when compared to previous adversarial example generation
> algorithms, our attacks are often much more effective (and never worse).
> Furthermore, we propose using high-confidence adversarial examples in a simple
> transferability test we show can also be used to break defensive
> distillation.*

A idea is worthless if it doesn't actually work in practice, and hopefully you
are evaluating the efficacy of your idea in some way, so it is very important
that you summarize the results of that evaluation in your abstract to give some
evidence to your reader that your idea actually works.

## Why this matters

> *We hope our attacks will be used as a benchmark in future defense attempts to
> create neural networks that resist adversarial examples.*

The last step (and arguably the most important) is to "widen the funnel" back
out and concretely state why this paper matters in the broader field of research
it inhabits.