### Lec 16

#### Why constructor? (initialization)
```
class Example{
  private:
    const int x;
  public:
    //Widget():x(11){}
    set(int xx){x=xx;}
}
int main(){
  Example e;
  e.set(11); // Error! 
}
```

### More than a constructor.

```
class X{
  X(); //Default constructor
  X( type); // Ordinary constructor
  //...
}
```
We have some missing parts.
For example, we do not know how to delete our object.
We need a **destructor**!
If we do not use the heap memory with new command, it is **usually** ok
since object will be destroyed when it goes out of score.
(Exception is a possible problem. Check RAII.)
```
class Fraction{
  private:
    int num,den; //  Stack.
  public:
  
};
void function1(){
  Fraction f(1,2); // Object is created.
  // code
}// Object is destroyed.
```
Now consider Vector class
```
class Vector{
    private:
        int n;
        int *vec;
    public:
        void set(int size);
        void set(int *vect1,int size);
        Vector();
        Vector(int size){set(size);}
        Vector(int *vec1, int size){set(vec1,size);}
        Vector fmul( Vector v1);
        int box(Vector v1);
        void print();
};
void Vector::set(int size){
    n=size;
    vec= new int[n]; //Heap memory!!!
}
```
We used the heap memory for vec. So we need to delete it later.
```
class Vector{
    private:
        int n;
        int *vec;
    public:
        void set(int size);
        void set(int *vect1,int size);
        Vector();
        Vector(int size){set(size);}
        Vector(int *vec1, int size){set(vec1,size);}
        Vector fmul( Vector v1);
        int box(Vector v1);
        void print();
};
void Vector::set(int size){
    n=size;
    vec= new int[n]; //Heap memory!!!
}
```
So we need to delete vec.
Let me introduce a destructor.
```
class Example{
  public:
    ~Example(){} //Destructor!
}
```
For Vector class,
```
class Vector{
    private:
        int n;
        int *vec;
    public:
        //
        ~Vector(){delete [] vec;}
        //
};
```
#### How to call a Destructor?
Use delete command.
```
Vector v(2);
delete v; // Call destructor!!
```
#### Copy constructor
We use the copy constructor

1. To initialize one object from another
2. Copy an object to pass it as an argument to a function or to return it from a function

```
Point v1=Point(1,2); //  constructor
Point v2(2,1); // constructor
Point v3=v2; // Copy constructor
```
[Run](http://cpp.sh/6ijp)

```
class Name{
  Name(const Name & objname);
};
```
**We usually need to construct a copy constructor for a pointer especially when we use new command (Heap memory).**

```
#include <iostream>
using namespace std;
class A
{
   public:
        void set(int a){*p=a;}
        void print(){cout<<*p<<endl;}
        A( int a ){
            p = new int;
            *p = a;
        } 
        ~A(){
            delete p;
        } 
   private:
      int *p;
};
int main( )
{
   A e(1);
   A f=e;
   e.set(2);
   f.print();
   return 0;
}
```
What do you expect?
[Run](http://cpp.sh/46ie)
