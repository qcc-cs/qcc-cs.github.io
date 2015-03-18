### Lec 24 [Stack](http://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29) and STL
Stack (Last in, first out) is an abstract data type with two operattions

  - push: add an element to the collection.
  - pop remove the last element.

![pic100](http://upload.wikimedia.org/wikipedia/commons/2/29/Data_stack.svg)
#### [Call stack](http://faculty.ycp.edu/~dhovemey/fall2012/cs201/notes/recursion.html)
```
public static int sumInts(int n) {
  // Check base cases
  if (n == 0) { return 0; }
  if (n == 1) { return 1; }

  // Solve subproblem, add n, and we're done
  int total = sumInts(n - 1);
  total = total + n;
  return total;
}
```
![pic](http://faculty.ycp.edu/~dhovemey/fall2012/cs201/notes/figures/callStackRecursion.png)
#### implementation with the array
For a simplicity, we do not consider exceptions like overflow or underflow.
```
#include <iostream>
using namespace std;
class mystack{
private:
    int maxsize; //maximum size of stack
    int top;  //top index
    int * items; //items
public:
    mystack():mystack(1){}
    mystack(int max):maxsize(max),top(0),items(new int[max]){}
    void push(const int & );
    int pop();
};
```

##### push
```
void mystack::push(const int & item)
{
    top++;
    items[top]=item;
}
```
or
```
void mystack::push(const int & item)
{
    items[top++]=item;
}
```
### Practice : make pop function.
```

```
[Try](http://cpp.sh/8emf)

[See](http://cpp.sh/64rp)
