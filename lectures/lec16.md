### 16

```
class X{
  X(); //Default constructor
  X( type); // Ordinary constructor
  //...
}
```
We have some missing parts.
For example, we do not know how to delete our object.
If we do not use the heap memory with new command, it is **usually** ok
since object will be destroyed when it goes out of score.
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
But





