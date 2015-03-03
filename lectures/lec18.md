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
Point Point::+operator(Point pt1,Point pt2){
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

#### Type conversion
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
