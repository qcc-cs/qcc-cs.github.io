### Lec 13

#### Fraction class
##### Naive version
```
class Fraction{
  public:
    int num,dem;
}; //Do not forget ;
```
As we discussed, it is better to encapsulate.
```
class Fraction{
  private:
    int num,dem;
  public:
    void set(int n,int d);
    int get_num();
    int get_dem();
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
    int num,dem;
  public:
    void set(int n,int d){ num=n; den=d;}
    int get_num();
    int get_dem();
}; //Do not forget;
```
Similarly, we can declare 'get_num()' and 'get_dem()' as inline functions.
```
class Fraction{
  private:
    int num,dem;
  public:
    void set(int n,int d){ num=n; den=d;}
    int get_num(){return num;}
    int get_dem(){return dem;}
}; //Do not forget;

```
#### Normalization

$$
\frac{1}{2}=\frac{2}{4}=\frac{3}{6}=...
$$

There are several expressions for one fraction.
So we want to reduce our expression as simple as we can. 

##### Standard form I
> If 'gcf(num,dem)=1', we call $\frac{num}{dem}$ as a standard form(I).
 
##### Standard from II
> If 'gcf(num,dem)=1' and 'dem>0', we call $\frac{num}{dem}$ as a standard form(II).

#### gcf review
Make a gcf function using Euclid's algorithm with recursion.
```
int gcf(int a,int b){
  if(b==0)
    // your code
  else
    // your code
}
```
To ignore a sign, use `abs()` function iwth `#include<cstdlib>` or handle directly.

 
 





