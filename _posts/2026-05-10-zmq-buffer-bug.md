---
title: "ZeroMQ message buffers are not null-terminated"
date: 2026-05-10
layout: post
---

Setup: I was sending JSON over ZeroMQ using `dump()`.

Bug: `recv()` was getting part of the previous message and garbling the JSON.
Here's an example of what the receiving socket would read:

```
{"dropoff_datetime":"2013-01-07 18:20:47"}dropoff_datetime":"dropoff_datetime"}
```

As it turns out, the issue was in the following piece of code, which can be found
in my ZeroMQ helper functions for sending and receiving `std::string` objects:

```
char *c_str = static_cast<char *>(msg.data());
std::string str(c_str);
```

Reason: zmq buffers are raw bytes, not C strings
C strings must be terminated with a '/0'.
converting a `char *` that doesn't have a `/0` into a `std::string` will keep reading until it finds a `/0` byte,
which means it will read garbage data


The fix is simple: when converting a ZeroMQ message buffer into a `std::string`,
you just need to remember to specify the exact number of bytes that you want to
read from the buffer. ZeroMQ lets you find out how many bytes the message takes
up by calling `msg.size()`. Here's you how you would do the conversion:

```
std::string str(static_cast<char*>(msg.data()), msg.size());
```

observation: the garbage data was coming from the previous `recv` data!
interesting implication: i guess that means that zeromq uses the same memory region across recv() calls
ZeroMQ might be reusing a previously-allocated message buffer
More invetigation is required.