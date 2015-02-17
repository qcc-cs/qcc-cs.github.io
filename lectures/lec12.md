### LEC 12

### Ch11. Class and objects

#### Class
> A clss creates a data type that has both **state** (data member) and **behavior** (method member).

Fraction type??
$$
\frac{1}{2}+\frac{1}{3}=?
$$
```
Fraction a(1,2), b(1,3);
Fraction c=a+b;
cout<<"The total of 1/2 and 1/3 is "<<c;
```

#### a 2D-Point class
You may use an array for a 2D-point.
```
int a[2]={1,2}; //(1,2);
```
But there is a better way.

```c++
class Point{
  int x,y;
}; // Do not forget ;
```
In general,
```
class class_name{
  \\declarations
};// Do not forget ;
```
##### How to declare Point variable pt1 and access varable x,y?
Like int or double, just type Point as variable(class) type.
To use ** data members**, use **dot(.)** operator.
pt1 is called an **object**.
```
Point pt1;
pt1.x=1;
pt1.y=2;
```
#### Example 1
```
#include <iostream>
using namespace std;
class Point{
    int x,y;
}// Do not forget ;
int main()
{
    Point pt1;
    pt1.x=1;
    pt1.y=2;
}
```
[Run](http://cpp.sh/76gu)

You will get an error. Why?
>error: 'int Point::x' is **private** 

Since x and y is **private**, members within Point can only access them.
Basically, **members are private bt default**.
Therefore, the class needs to have at least one **public** member.
#### Example 2
```
#include <iostream>
using namespace std;
class Point{
  public:
    int x,y;
}; // Do not forget ;
int main()
{
    Point pt1;
    pt1.x=1;
    pt1.y=2;
    cout<<pt1.x;
}
```
There is a reason why private is default.
Google  **Encapsulation**  in class c++.

#### Example3.
```
#include <iostream>
using namespace std;
class Point{
  private:
    int x,y;
  public:
    void set(int new_x,int new_y);
    int get_x();
    int get_y();
}; // Do not forget ;
int main()
{
    Point pt1;
    pt1.set(1,2);
    cout<<pt1.get_x();
}
```
Actually, we did nore declare three functions, `set,get_x, get_y`.
```
void Point::set(int new_x,int new_y){
  x=new_x;
  y=new_y;
}
```
get_x()
```
int Point::get_x(){
  return x;
}
```
get_y()
```
int Point::get_y(){
  return y;
}
```
[Run](http://cpp.sh/3ipo)

What is benefit here? You can **control your data more**.
### Example 4.
Rewrite the Point::set function so that negative input values are converted to postive.
```
void Point::set(int new_x,int new_y){
  // your code
  x=new_x;
  y=new_y;
}
int main()
{
    Point pt1;
    pt1.set(-1,2);
    cout<<pt1.get_x();
}
```
[Run](http://cpp.sh/6jbn)
### Example 5.
Rewrite the Point::set function so that  it establishes an upper limit of 100 for values of x and y; if a value greater than 100 is entered, it is reduced to 100.
```c++
#include <iostream>
#define upperlimit_x 100
#define upperlimit_y 100
using namespace std;
class Point{
  private:
    int x,y;
  public:
    void set(int new_x,int new_y);
    int get_x();
    int get_y();
}; // Do not forget ;
void Point::set(int new_x,int new_y){
  // your code
  x=new_x;
  y=new_y;
}
int Point::get_x(){
  return x;
}
int Point::get_y(){
  return y;
}
int main()
{
    Point pt1;
    pt1.set(150,20);
    cout<<pt1.get_x();
}
```
[Run](http://cpp.sh/73my)











