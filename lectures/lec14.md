### Lec 14

#### Fraction arithmetics

##### Addition

Let $LCD=lcm(B,D)$. Then
$$
\frac{A}{B}+\frac{C}{D}=\frac{A*LCD/B}{LCD}+\frac{C*LCD/D}{LCD}=\frac{A*LCD/B+C*LCD/D}{LCD}
$$

Is this an standard form?

$$
\frac{1}{4}+\frac{1}{4}=\frac{2}{4}=\frac{1}{2}
$$
Therefore normalization is necessary.
#### Remark
lcm function may also return a negative number. Answer could be zero but LCD is not 1. So the normalization is necessary. Use set function to setup a fraction.
#### Two implementations
##### 1. Using a member function

a. Input: Fraction other
b. Output: fract

```c++
Fraction Fraction::add(Fraction other){
  Fraction fract;
  //1. Find the lcd.
  //2. Find the new numerator
  //3. use set function of fract to initialize.
  return fract;
}
```
[Show](http://cpp.sh/3unc)
#### 2. Using non-member function

a. Input: Fraction x , Fraction y
b. Output: Fraction z =x+y

We cannot access num and den directly.
```
Fraction Fraction::add(Fraction x,Fraction y){
  Fraction z;
  Fraction Fraction::add(Fraction x,Fraction y){
  Fraction z;
  int xnum=x.get_num();
  int xden=x.get_dem();
  int ynum=y.get_num();
  int yden=y.get_dem();
  //1. Find the lcd.
  //2. Find the numerator of z
  //3. use set function of z to initialize.
  return z;
}
}
```
[Show](http://cpp.sh/8vov)

#### Remark 
Please read the following article.
[How Non-Member Functions Improve Encapsulation](http://www.drdobbs.com/cpp/how-non-member-functions-improve-encapsu/184401197)

#### Sample code
Update the class first.
```
class Fraction{
  private:
    int num,den;
  public:
    void set(int n,int d){ num=n; den=d;normalize();}
    int get_num(){return num;}
    int get_den(){return den;}
    Fraction add(Fraction other); // new!
    void normalize();
}; //Do not forget;

```



