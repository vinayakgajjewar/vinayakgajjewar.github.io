---
title: "ZeroMQ buffers are not null-terminated"
date: 2026-05-10
layout: post
---

Setup: I was sending JSON over ZeroMQ using `dump()`.

Bug: recv() was getting part of the previous message and garbling the JSON

As it turns out, the issue was in the following piece of code, which can be found
in my ZeroMQ helper functions for sending and receiving `std::string` objects:

```
char *c_str = static_cast<char *>(msg.data());
std::string str(c_str);
```


Reason: zmq buffers are raw bytes, not C strings
converting a char * into a std::string will keep reading until it finds a '/0' byte

The fix is simple: when converting a ZeroMQ message buffer into a `std::string`,
you just need to remember to specify the exact number of bytes that you want to
read from the buffer. ZeroMQ lets you find out how many bytes the message takes
up by calling `msg.size()`. Here's you how you would do the conversion:

```
std::string str(static_cast<char*>(msg.data()), msg.size());
```

interesting implication: i guess that means that zeromq uses the same memory region across recv() calls