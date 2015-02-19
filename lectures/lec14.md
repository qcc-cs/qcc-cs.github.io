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
Fraction add(Fraction x,Fraction y){
  Fraction z;
  int xnum=x.get_num();
  int xden=x.get_den();
  int ynum=y.get_num();
  int yden=y.get_den();
  int l=lcd(xden,yden);
  int n=(l/xden)*xnum+(l/yden)*ynum;
  z.set(n,l);
  return z;
}
```
[Show](http://cpp.sh/2wjj)

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
Main function
```
int main()
{
  Fraction x,y,z,w;
  x.set(1,2);
  y.set(1,3);
  z=x.add(y);
  cout<<x.get_num()<<"/"<<x.get_den()<<" + "
  <<y.get_num()<<"/"<<y.get_den()<<" = "
  << z.get_num()<<"/"<<z.get_den()<<endl;
  w=add(x,y);
  cout<<x.get_num()<<"/"<<x.get_den()<<" + "
  <<y.get_num()<<"/"<<y.get_den()<<" = "
  << w.get_num()<<"/"<<w.get_den()<<endl;
}
```
[Full code](http://cpp.sh/9pu6)

#### Practice1 - Make a subtraction function **sub**.
```
Fraction sub(Fraction x,Fraction y){
  Fraction z;
  int xnum=x.get_num();
  int xden=x.get_den();
  int ynum=y.get_num();
  int yden=y.get_den();
  int lcd=lcm(xden,yden);
  // code
  z.set(znum,lcd);
  return z;
}
```
#### Practice2 - Make a multiplication function **mul**
```
Fraction mul(Fraction x,Fraction y){
  Fraction z;
  int xnum=x.get_num();
  int xden=x.get_den();
  int ynum=y.get_num();
  int yden=y.get_den();
  // z.set 
  return z;
}
```
#### Practice3 - Make a division function **div**
```
Fraction div(Fraction x,Fraction y){
  Fraction z;
  int xnum=x.get_num();
  int xden=x.get_den();
  int ynum=y.get_num();
  int yden=y.get_den();
  // z.det
  return z;
}
```
Main function
```
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
[Full code](http://cpp.sh/6w7b)




