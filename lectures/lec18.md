### LEC 18 - overloading operator

#### Point again
```
class Point{
    private:
        int x;
        int y;
    public:
        Point(){x=0;y=0;}
        void set(int nx,int ny){x=nx;y=ny;}
        Point(int nx,int ny){set(nx,ny);}
        Point operator+(Point pt);
        //friend Point operator+(Point pt1, Point pt2);// Friend!
        Point operator-(Point pt);
        Point(Point const & pt);//copy constructor!
        void print(){cout<<"("<<x<<","<<y<<")";}
};
```
Make a Copy constructor.
[Run](http://cpp.sh/9huw)


#### Overload + operator

##### As a member function.
```
Point p1,p2,p3;
p1=p2+p3;
```
Compiler will call 'p2.+operator(p3)' from  'p2+p3'. 
Let's overload +operator.
```
Point Point::+operator(Point pt){
    Point npt;
    npt.x=x+pt.x;
    npt.y=y+pt.y;
    return npt;
}
```
Or
```
Point Point::+operator(Point pt){
    return Point(x+pt.x,y+pt.y);
}
```
[Run](http://cpp.sh/232l)
#### As a global funciton
```
Point +operator(Point pt1,Point pt2){
    return Point(pt1.x+pt2.x,pt1.y+pt2.y);
}
```
Unfortunately, above code does not work. Why?
Since data members 'x,y' are not public, this function cannot access them.
Of course, we make make 'get_x(),get_y()'. Or we can give a special permission.

#### friend function
```
class Point{
    private:
        int x;
        int y;
    public:
        Point(){x=0;y=0;}
        void set(int nx,int ny){x=nx;y=ny;}
        Point(int nx,int ny){set(nx,ny);}
        //Point operator+(Point pt);
        friend Point operator+(Point pt1, Point pt2);// Friend!
        Point operator-(Point pt);
        Point(Point const & pt);//copy constructor!
        void print(){cout<<"("<<x<<","<<y<<")";}
};
```
[Run](http://cpp.sh/3tgb)

#### Remark
We will study subclass later. Basically, subclass does not inherit friend members.

#### Benefit for global function -flexiblity.
```
Point p(1,2);
p=2*p;
//p=(2,4);
```
We cannot use a member function since we cannot overload '2*'.

Make a integer multiple operator*.
```
Point operator*(int n, Point pt){
//code
}
```
[Run](http://cpp.sh/6ton)

#### Efficiency.
Current! 

[Run](http://cpp.sh/8ueu)

Reference

[Run](http://cpp.sh/2lyg)

#### Practice: Fraction class again.
[See Code](http://cpp.sh/4tic)

overload +,-,*,/ using add,sub,mul,div member functions.


[Run](http://cpp.sh/6wdh)

[Optimized](http://cpp.sh/5kf7)

#### With other types
Dream
```
Fraction f1;f2(1,2);
f1=3*f2;
```
How?
Constructor for an integer.
```
Fraction(int n){num=n;den=1;}
```
Then it will cover
```
Fraction f2(1,2);
Fraction f1=f2+1;
```
But it will not cover
```
Fraction f1,f2(1,2);
f1=1+f2;
```
Make the following global function to compute '1+f2'.
```
friend Fraction operator+(int n, Fraction &f){return Fraction(n)+f;}
```
[Run](http://cpp.sh/5vb5)
Continue to extend -,*,/.

[Run](http://cpp.sh/8ver)


#### assginement operator
```
class_name & operator=(const class_name & source)
```
Assignment operator should not return new object.

#### this keyword
** this** is a pointer pointing to an object.

```
Fraction & Fraction::operator=(const Fraction &src){
    num=src.num; den=src.den;
    return *this;
}
```
[Run](http://cpp.sh/3if4)

#### Equality(==)
Overload equality operator for Fraction class.
```
bool Fraction::operator==(const Fraction &f){
//code
}
```

#### Print
Goal
```
Fraction f;
cout<<f;
```
We need overload << and use (friend) global function since we cannot modify cout which an object of **ostream** class.
```
ostream & operator<<(ostream & os,const Fraction & f){
    //code
}
```
[Run](http://cpp.sh/3b6y)

#### Practice
Overload < and >

[Run](http://cpp.sh/855l)

#### Overload << operator for the Point class.

[Run](http://cpp.sh/9fts)
