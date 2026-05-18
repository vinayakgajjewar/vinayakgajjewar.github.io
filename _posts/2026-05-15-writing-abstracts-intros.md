---
title: "How I write abstracts and introductions for my research papers"
date: 2026-05-15
layout: post
---

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

- I got this formula from a Nicholas Carlini blog post -
  https://nicholas.carlini.com/writing/2026/how-to-win-a-best-paper-award.html
- This is not the standard, even for CS systems research papers
- The formula for abstracts
    - #1: the broader topic you're working on
        - Computer science is a broad landscape—what subfield are we operating
          in?
    - #2: the specific problem you are going to solve
        - What was not possible before that your paper makes possible?
    - #3: your methods/techniques/key insight
        - Your paper should have exactly one key idea that it revolves around
    - #4: your results
        - Cite your main result
    - #5: why your work matters
        - Now that we know whatwe know, what is possible that was not possible
          before?
- This formula can be applied to your introduction as well but each bullet is a
  paragraph instead of a sentence
    - In general, an introduction should just be an expanded version of your
      abstract
- Walk through some fictional examples and how they map onto this formula
- Alternative: CGI
    - How does CGI map onto this formula

https://ieeexplore.ieee.org/abstract/document/7958570

Neural networks provide state-of-the-art results for most machine learning
tasks. Unfortunately, neural networks are vulnerable to adversarial examples:
given an input x and any target classification t, it is possible to find a new
input x' that is similar to x but classified as t. This makes it difficult to
apply neural networks in security-critical areas. Defensive distillation is a
recently proposed approach that can take an arbitrary neural network, and
increase its robustness, reducing the success rate of current attacks' ability
to find adversarial examples from 95% to 0.5%. In this paper, we demonstrate
that defensive distillation does not significantly increase the robustness of
neural networks by introducing three new attack algorithms that are successful
on both distilled and undistilled neural networks with 100% probability. Our
attacks are tailored to three distance metrics used previously in the
literature, and when compared to previous adversarial example generation
algorithms, our attacks are often much more effective (and never worse).
Furthermore, we propose using high-confidence adversarial examples in a simple
transferability test we show can also be used to break defensive distillation.
We hope our attacks will be used as a benchmark in future defense attempts to
create neural networks that resist adversarial examples.
