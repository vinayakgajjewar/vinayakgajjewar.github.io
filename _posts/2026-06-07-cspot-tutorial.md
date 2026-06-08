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
woofc-container: started message server
listen: /home/pi/vinayak/iot-streaming/bin
```

The file path will probably be different, though.

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

```
echo "3.14" | ./senspot-put -W woof://127.0.0.1/path/to/myfirstwoof -T d
```

The `-T d` bit tells `senspot-put` that you are appending an element of type
double. (TODO: what are the other types?)

```
./senspot-get -W woof://127.0.0.1/path/to/myfirstwoof
```

The output from the above command should look similar to the following:

```
3.140000 time: 1780951066.5463969707 192.168.101.30 seq_no: 1
```

If your output looks like this: congratulations! You have just written and read
from your first WOOF. Try performing some more `senspot-put` operations and
notice how the `seq_no` field that you get from `senspot-get` changes.

# Operations over the network

Then, try PUT/GET on the other device

# Triggering a handler

Specify a handler to senspot-put and see the output show up in namespace.log.
From my (limited) testing, you can register either a precompiled binary or a
Bash script as a handler. Let's do the Bash script first. Create a file
`handler.sh` (on which machine?) with the following contents:

```
#/bin/bash

echo "Hello world from a handler"
```

In the CSPOT paradigm, handlers are only triggered when data is appended to a
WOOF, which happens when `senspot-put` is invoked, in our case. To append an
element and trigger a computation, use the following command:

```
echo "3.14" | ./senspot-put -W woof://127.0.0.1/path/to/myfirstwoof -T d -H handler.sh
```

After this command completes, do `cat namespace.log` and you should see the
output from the Bash script appear there:

```
TODO
```

# Shutting down the namespace server

Bafflingly, right now, there is no clean way to shut down as CSPOT namespace
server. Until this functionality is added, right now you can do `pgrep woofc` to
get a list of all the process IDs and use `kill -9 PID` to kill them all one by
one.

You need to do both `pgrep woofc-namespace` and `pgrep woofc-container`. Could
you also use `pkill`?