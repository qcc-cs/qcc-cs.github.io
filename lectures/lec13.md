### Lec 13

#### Fraction class
##### Naive version
```
class Fraction{
  public:
    int num,den;
}; //Do not forget ;
```
As we discussed, it is better to encapsulate.
```
class Fraction{
  private:
    int num,den;
  public:
    void set(int n,int d);
    int get_num();
    int get_den();
}; //Do not forget ;
```

`void set(int n,int d)`
```
void Fraction::set(int n,int d){
  num=n; den=d;
}
```

Of course, we can put it as [inline function](http://stackoverflow.com/a/145841). For an inline function,
compiler tries to replace the function call with the body of code.
```
class Fraction{
  private:
    int num,den;
  public:
    void set(int n,int d){ num=n; den=d;}
    int get_num();
    int get_den();
}; //Do not forget;
```
Similarly, we can declare 'get_num()' and 'get_den()' as inline functions.
```
class Fraction{
  private:
    int num,den;
  public:
    void set(int n,int d){ num=n; den=d;}
    int get_num(){return num;}
    int get_den(){return den;}
}; //Do not forget;

```
#### Normalization

$$
\frac{1}{2}=\frac{2}{4}=\frac{3}{6}=...
$$

There are several expressions for one fraction.
So we want to reduce our expression as simple as we can. 

##### Standard form I
> If 'gcf(num,den)=1', we call $\frac{num}{den}$ as a standard form(I).
 
##### Standard from II
> If 'gcf(num,den)=1' and 'den>0', we call $\frac{num}{den}$ as a standard form(II).

#### gcf review
Make a gcf function using [Euclid's algorithm](http://www.cut-the-knot.org/blue/Euclid.shtml) with recursion.
```
int gcf(int a,int b){
  if(b==0)
    // your code
  else
    // your code
}
```
To ignore a sign, use `abs()` function iwth `#include<cstdlib>` or handle directly.

[Run](http://cpp.sh/2ehn)

#### zero and zero-denominator
We assume $0=\frac{0}{1}$. For a simplicity, let $\frac{num}{0}\rightarrow \frac{0}{1}$. We will handle it later.

#### normalize()
```
void Fraction::normalize(){
  // Handle zero and zero-denominator
  // Handle when den<0
  //Simplify using gcf of num and den.
}
```
Now Fraction class is the following.
```
class Fraction{
  private:
    int num,den;
  public:
    void set(int n,int d){ num=n; den=d;normalize()};//modified.
    int get_num(){return num;}
    int get_den(){return den;}
    void normalize();
}; //Do not forget;
```
[Run](http://cpp.sh/5atv)
#### LCM.
Write a function of lcm( least common multiple) using gcf.
```
int lcm(int a,int b){
  int n=gcf(a,b);
  // your code
}
```
[Run](http://cpp.sh/5qb2)


 





