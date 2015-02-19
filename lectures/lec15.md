### Lec 15

#### Fraction header
We can make a Fraction header.

Fraction.h
```
int abs(int a){
    if(a>0) return a;
    else return -a;
}
int gcf(int a,int b){
    if(b==0) return  abs(a);
    else return gcf(b,a%b);
}
int lcm(int a,int b){  // return integer.
  int n=gcf(a,b);
  return a/n*b;
} 
class Fraction{
  private:
    int num,den;
  public:
    void set(int n,int d){ num=n; den=d;normalize();}
    int get_num(){return num;}
    int get_den(){return den;}
    Fraction add(Fraction other);
    void normalize();
}; //Do not forget;
void Fraction::normalize(){
    if(num==0||den==0){
        num=0;den=1;       
    }
    if(den<0){
        num=num*-1;
        den=den*-1;
    }
    int n=gcf(num, den);
    num=num/n;
    den=den/n;
}
Fraction Fraction::add(Fraction other){
  Fraction fract;
  int lcd=lcm(den,other.den);
  int new_num=num*lcd/den+other.num*lcd/other.den;
  fract.set(new_num,lcd);
  return fract;
}
Fraction add(Fraction x,Fraction y){
  Fraction z;
  int xnum=x.get_num();
  int xden=x.get_den();
  int ynum=y.get_num();
  int yden=y.get_den();
  int lcd=lcm(xden,yden);
  int znum=xnum*lcd/xden+ynum*lcd/yden;
  z.set(znum,lcd);
  return z;
}
Fraction sub(Fraction x,Fraction y){
  Fraction z;
  int xnum=x.get_num();
  int xden=x.get_den();
  int ynum=y.get_num();
  int yden=y.get_den();
  int lcd=lcm(xden,yden);
  int znum=xnum*lcd/xden-ynum*lcd/yden;
  z.set(znum,lcd);
  return z;
}
Fraction mul(Fraction x,Fraction y){
  Fraction z;
  int xnum=x.get_num();
  int xden=x.get_den();
  int ynum=y.get_num();
  int yden=y.get_den();
  z.set(xnum*ynum,xden*yden);
  return z;
}
Fraction div(Fraction x,Fraction y){
  Fraction z;
  int xnum=x.get_num();
  int xden=x.get_den();
  int ynum=y.get_num();
  int yden=y.get_den();
  z.set(xnum*yden,xden*ynum);
  return z;
} 
```
To use it, use `#include "Fraction.h"`.
```
#include <iostream>
#include "Fraction.h"
using namespace std;
int main()
{
  Fraction x,y,a,aa,s,m,d;
  x.set(3,4);
  y.set(1,3);
  a=x.add(y);
  cout<<x.get_num()<<"/"<<x.get_den()<<" + "
  <<y.get_num()<<"/"<<y.get_den()<<" = "
  << a.get_num()<<"/"<<a.get_den()<<endl;
  aa=add(x,y);
  cout<<x.get_num()<<"/"<<x.get_den()<<" + "
  <<y.get_num()<<"/"<<y.get_den()<<" = "
  << aa.get_num()<<"/"<<aa.get_den()<<endl;
  s=sub(x,y);
  cout<<x.get_num()<<"/"<<x.get_den()<<" - "
  <<y.get_num()<<"/"<<y.get_den()<<" = "
  << s.get_num()<<"/"<<s.get_den()<<endl;
  m=mul(x,y);
  cout<<x.get_num()<<"/"<<x.get_den()<<" * "
  <<y.get_num()<<"/"<<y.get_den()<<" = "
  << m.get_num()<<"/"<<m.get_den()<<endl;
  d=div(x,y);
  cout<<x.get_num()<<"/"<<x.get_den()<<" / "
  <<y.get_num()<<"/"<<y.get_den()<<" = "
  << d.get_num()<<"/"<<d.get_den()<<endl;
}
```
#### Constructor
```
Fraction a;
a.set(1,2);
```
We want to initialize when we declare. So we need a **constructor**.
> A constructor is a member function for initialization.
```
classname_name(argument_list)
```
For example,
```
class Fraction{
  public:
    Fraction(int n, int d);
  //
}
```
How can we define a constructor? Let's use the set function.
```
class Fraction{
  public:
    Fraction(int n, int d){set(n,d);}
  //
}
```

### Overloading

We can reuse a nume to create different functions replying on  **different argument lists**. 
For example, we want to declare a Fraction object with an integer.
```
class Fraction{
  public:
    Fraction(int n, int d){set(n,d);}
    Fraction(int n);
  //
}
```
#### The default Constructor
If we do not provide a constuctor, the compiler automatically provides a **defacult constructor** which is trivial.
But once we declare a constructor, default constructor does not exist any more.
 
 For example, if we declare a constructor,
 ```
class Fraction{
  public:
    Fraction(int n, int d){set(n,d);}
    Fraction(int n);
  //
}
```
Then the following code does not work any more.
 ```
 Fraction x;// No more default constructor.
 ```
 ##### How to fix it?
 Declare the default operator by yourself.
```
class Fraction{
  public:
    Fraction(int n, int d){set(n,d);}
    Fraction(){} //default constructor
  //
}
```
Or assign 0/1
```
class Fraction{
  public:
    Fraction(int n, int d){set(n,d);}
    Fraction(){set(0,1);} //default constructor
  //
}
```
Or
```
class Fraction{
  public:
    Fraction(int n, int d){set(n,d);}
    Fraction(){num=0,den=1;} //default constructor
  //
}
```
[Run](http://runnable.com/VOVVv5BYtpcWXYRp/cs203-lec15-default-constructor-for-c%2B%2B)

[c++11] We can also reuse previous constructor to declare a new constructor.(**Delegation**).
```
class Fraction{
  public:
    Fraction(int n, int d){set(n,d);}
    Fraction():Fraction(0,1){} 
  //
}
```
[RUN](http://runnable.com/VOVTT5BYtpcWXYPJ/cs203-lec15-delegating-constructor-for-c%2B%2B)
Then the default constructor will initialize a given Fraction object as 0/1.

[c++11] Actually, you can initialize it within class.
```
class Fraction{
  private:
  int num=0; //c++11
  int den=1; //c++11
  //
  public:
    Fraction(int n, int d){set(n,d);}
    Fraction(){} 
  //
}
```
[Run](http://runnable.com/VOVTx5BYtpcWXYPj/cs203-lec15-initialization-with-class-for-c%2B%2B)

#### Example 1. 
Declare a constructor Fraction(int n) which convert an integer n into a fraction.
```
Fraction::Fraction(int n){
  // code
}
```


#### initialization by { }
```
Fraction f1;
Fraction f2(1,2);
Fraction f3=Fraction(1,2); // We need to discuss it later.
```
is equivalent to 
```
Fraction f1{};
Fraction f2{1,2};
Fraction f3=Fraction{1,2};
```
##### Remark
If the constructor does have one or more parameters, but they all have default values, then it is still a default constructor. 
Check this [link](http://en.wikipedia.org/wiki/Default_constructor). 

### Example 2.
 Construct Date class with following members;
 ```
 private:
  int month,day, year;
 public: 
 Date();// default constructor. Set the date as 02-19-2015
 Date(int m,int d, int y);// constructor.
 bool set(int m,int d, int y); //If m,d or d is not valid, return false;
 int get_m();// Get a month.
 int get_d();// Get a day.
 int get_y();// Get a year.
 void print(); //print date like Feb-1-2015
 // Hint: Use datelist[12]={Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec};
 ```
 


