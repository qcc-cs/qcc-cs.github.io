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
    mystack(int max):maxsize(max>0 ?max:1),top(-1),items(new int[max>0 ?max:1]){}
    void push(const int & item);
    int pop();
    int getsize(){return top+1;}
    //int getmaxsize(){return maxsize;}
    //void print();
    //
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
    items[++top]=item;
}
```
#### Practice : make pop function.
```
//Try
```
[Try](http://cpp.sh/7l4w)

[See](http://cpp.sh/6opb)

#### Example
```
int main(){
    mystack stackme(MAX);
    int a=1;
    int i=0;
    do{
        cout<<"Type a postive number(To stop type 0):";
        cin>>a;
        if(a==0) break;
        stackme.push(a);
        i++;
    }while( i< MAX);
    while(stackme.getsize()>0){
        cout<<stackme.pop()<<endl;
    }
}
```
[RUN](http://cpp.sh/5zoh)

[Debug](http://cpp.sh/8gba)

#### Practice : Make isfull and isempty function.
[Try](http://cpp.sh/5d3r)

[See](http://cpp.sh/7p3z)

#### Practice HW: make mystack using List class.
Use need a pop member function of List class which extract and returns **the last node**.
```
Node List::pop();
```
[Try](http://cpp.sh/2vca)

