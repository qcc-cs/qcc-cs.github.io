### Lec 22

#### Exceptions

Errors

1. Syntax error : before compiling
2. logic error: after compiling

Return error
```
class Fraction{
    private:
        int num,den;
    public:
    // codes
        enum Error{Success,DivideByZero};
        Fraction div(const Fraction & f2,Error & err);
};
Fraction Fraction::div( const Fraction &f2,Error & err){
    if(f2.num==0) {err=DivideByZero; return Fraction();} //Report
    return Fraction(num*f2.den,den*f2.num);;
}
int main(){
  Fraction f1(1,0),f2(0,1);
  Fraction::Error err;
  Fraction f3=f1.div(f2,err);
  if(err==DivideByZero) {cout<<"Divided by zero";} //Handle
  else{ cout<<f3;}
}
```
Too messy!
![picw100](http://i.forbesimg.com/media/lists/people/lionel-messi_416x416.jpg)

Use exception!

```
void f(){
    if(something is wrong) throw Exception-object;
}
int main(){
    try{
        f();
    }
    catch (Exception-object & e){
    //Handle error here
    }
    catch (Exception-object2 & e){
    //Handle error here
    }
    //...
}

```
When you throw a **exception object**, try catch block will catch it and handle errors.

```
// This code is needed to be updated. (Not optimal)
#include <stdexcept> //inherit from exception
class Fraction{
    private:
        int num,den;
    public:
    // codes
        Fraction div(const Fraction & f2);
};
Fraction Fraction::div( const Fraction &f2,Error & err){
    if(f2.num==0) {throw overflow_error("Divide by zero"); } //Report
    return Fraction(num*f2.den,den*f2.num);;
}
int main(){
  Fraction f1(1,0),f2(0,1);
  try{
    Fraction f3=f1.div(f2);
    cout<<f3;
  }
  catch(overflow_error & e){
    cout<<"Exception:"<<e.what()<<endl;
  }
}
```
As you can see, you can separate the code from exception code.
You may use one of two headers from C++ standard.
```
#include<exception> // standard
#include<stdexcept> // More specific from exception 
```
[exception header](http://www.cplusplus.com/reference/exception/exception/)
[stdexcept header] (http://www.cplusplus.com/reference/stdexcept/)

Reconsider Fraction class.
Consider possible errors again..

1. Divide by Zero (Zero denominator)
2. overflow if the result is over the limits.
```
// Example program
#include <iostream>
#include <limits>
using namespace std;

int main()
{
  cout<<numeric_limits<int>::min()<<endl;
  cout<<numeric_limits<int>::max()<<endl;
}
```
[Run](http://cpp.sh/9pzr)



