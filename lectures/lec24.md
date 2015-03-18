### Lec 24 [Stack](http://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29) and STL
Stack (Last in, first out) is an abstract data type with two operattions

  - push: add an element to the collection.
  - pop remove the last element.
![pic100](http://upload.wikimedia.org/wikipedia/commons/2/29/Data_stack.svg)
#### implementation with the array
```
#include <iostream>
using namespace std;
class mystack{
private:
    int maxsize; //maximum size of stack
    int top;  //top index
    int * items; //items
public:
    mystack():mystack(1){};
    mystack(int max);
    void push(const int & );
    int pop();
};

``
