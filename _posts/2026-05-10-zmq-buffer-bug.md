---
title: "ZeroMQ message buffers are not null-terminated"
date: 2026-05-10
layout: post
---

This weekend, I was working on implementing a benchmark for a research project
I'm working on and found a really cool bug in my codebase that exposed some
really interesting tidbits about the weirdness that is C/C++, so I decided that
it would be a good idea to write it up as a blog post. So here we are.

For this project, I was manipulating JSON data using the excellent
`nlohmann::json` library (need to link to it here), turning it into a
`std::string` using `dump()`, and then sending that string over the network
using ZeroMQ.

The bug manifested itself on the receiving node, which would need to parse the
request that it receives as JSON. The first call to `recv()` would work as
expected and parse successfully, but subsequent requests would fail to parse.
After printing out the offending messages, I discovered that for some reason,
ZeroMQ was appending a portion of the previous message onto new messages! Here's
an example of what the receiving socket would read:

```
{"dropoff_datetime":"2013-01-07 18:20:47"}dropoff_datetime":"dropoff_datetime"}
```

Notice that this is not valid JSON. As it turns out, the issue was in the
following piece of code, which can be found in my ZeroMQ helper functions for
sending and receiving `std::string` objects:

```
char *c_str = static_cast<char *>(msg.data());
std::string str(c_str);
```

This code snippet attempts to turn a ZeroMQ message buffer (the thing that
`msg.data()` gives you) into a `std::string` by first converting it into a
`char *`, otherwise known as a C-string. However, and this is the key insight,
C/C++ expects that every C-string is terminated with a null byte (`/0`). When
you convert a `char *` into a `std::string`, under the hood, C++ keeps reading
bytes until it encounters this null byte, at which point it stops. If the
sequence of bytes you specify does not have a valid null byte, it will just keep
reading, and reading, and reading... which can have nasty side effects. In my
case, the nasty side effect in question was that parts of previously-received
messages would be appended to the current message!

The fix turned out to be pretty simple: when converting a ZeroMQ message buffer
into a `std::string`, you just need to remember to specify the exact number of
bytes that you want to read from the buffer. Handily, ZeroMQ lets you find out
how many bytes the message takes up by calling `msg.size()`. Here's you how you
would convert a ZeroMQ message into a `std::string` the correct way:

```
std::string str(static_cast<char*>(msg.data()), msg.size());
```

In hindsight, it's pretty interesting that the garbage data was coming from the
previous `recv` data! I guess that means that zeromq uses the same memory region
across recv() calls. It's possible that ZeroMQ might be reusing a
previously-allocated message buffer across `recv` calls. Most investigation is
required.

Thanks for reading!