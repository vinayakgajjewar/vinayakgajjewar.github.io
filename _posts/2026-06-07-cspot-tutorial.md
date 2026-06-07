---
title: "Tutorial: getting up and running with CSPOT"
date: 2026-06-07
layout: post
---

This tutorial will walk you through the process of getting two machines to talk
to each other using CSPOT. Importantly, this is not intended to be a
comprehensive documentation of CSPOT's internals or design decisions. Rather,
I'm just trying to get someone up and running with CSPOT and gain some practical
experience with it.

# Getting the `senspot` binaries

In this tutorial, we'll be using `senspot`, a user-friendly command-line
interface to CSPOT. The first step is to obtain these binaries. First, run
`uname -m` and verify that the output you get is either `aarch64` or `x86_64`.
If you want to get CSPOT working on `arm64` (macOS, for example), you will need
to compile the binaries yourself for your architecture. That's a whole other
tutorial.

# Start the namespace servers

Start the namespace server on two different devices

```
./woofc-namespace-platform >& namespace.log &
```

Then do `cat namespace.log`. You should see something similar to the following:

```
TODO
```

# Creating your first WOOF

Create a WOOF on one device with senspot-init

```
./senspot-init -W myfirstwoof -s 100
```

This creates a WOOF in the local namespace with a name of `myfirstwoof` and a
maximum capacity of 100 elements. WOOFs are basically ring buffers, which means
that the 101st element will wrap around and overwrite the first one.

# Local operations

First, test PUT/GET on the local device

Notice how the sequence number that you get back increases.

# Operations over the network

Then, try PUT/GET on the other device

# Triggering a handler

Specify a handler to senspot-put and see the output show up in namespace.log.
From my (limited) testing, you can register either a precompiled binary or a
Bash script as a handler. Let's do the Bash script first. Create a file
`handler.sh` (on which machine?) with the following contents:

```
#/bin/bash

echo "Hello world"
```