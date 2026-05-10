Bug: recv() was getting part of the previous message and garbling the JSON
the offending code:
```
char *c_str = static_cast<char *>(msg.data());
std::string str(c_str);
```
Reason: zmq buffers are raw bytes, not C strings
converting a char * into a std::string will keep reading until it finds a '/0' byte
the fix: just specify the number of bytes you actually want to read
i guess that means that zeromq uses the same memory region across recv() calls