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
Fraction Fraction::div( const Fraction &f2){
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
[stdexcept header](http://www.cplusplus.com/reference/stdexcept/)

Reconsider Fraction class.
Consider possible errors again..

1. Divide by Zero (Zero denominator)
2. overflow if the result is over the limits.

```
#include <iostream>
#include <limits>
using namespace std;

int main()
{
  cout<<numeric_limits<int>::min()<<endl;
  cout<<numeric_limits<int>::max()<<endl;
  int a=numeric_limits<int>::max();
  int b=a+a;
  cout <<b;
}
```

[Run](http://goo.gl/0HCG5z)


####  Divide by zero (Zero denominator)
We put a exception code within a division function.
It is usually better to handle it within constructor since  the desctructor is called when it throws an exception. [RAII](http://en.wikibooks.org/wiki/C%2B%2B_Programming/RAII)

```
void set(int n,int d){num=n;den=d;normalize();}
```

We used a set function for constructor. It is better to implement directly into constrcutor and delegate if you want to make another constructor since you may use the set function for other functions.
(It is ok since we do not use resources like dynamic memory or file, etc. But it is not recommended.)

```
Fraction(){num=0;den=1;}
Fraction(int n){num=n;den=1;}
Fraction(int n,int d){
    if(d==0){ // Throw exception. 
        throw overfolow_error("Divide by zero");
    }
    num=n;
    den=d;
    normalize();
}
void Fraction::normalize(){
    if(num==0){
        num=0;den=1;return;
    }
    int g=gcf(num,den);
    num=num/g;
    den=den/g;
    if(den<0){
        num*=-1;
        den*=-1;
    }
}
```

We recommend you throw object instead of primitive types, since you can catch it differently by object types.
Here we use the overflow class form the stdexcept header. You can construct your own exception class.
(Unfortunately, there is no standard divide by zero exception. Some people may use runtime_error class for divide by zero.)

#### Remark 1 Exception handling is a not magic. You need to think how to implement seriously.

#### For a simplicity, we do not check overflow when we assigns or initialize.
Since addition(subtraction), multiplication may cause overflow, we need to make a secure addtion and multiplication functions for integers which throw exceptions. One simple trick is using 'long long' type to do the validation.

```
int intadd(int a, int b){
    long long aa=a,bb=b,c=aa+bb;//a+b 
    if(LIMIT::INT_MAX < c || c < LIMIT::INT_MIN){
        throw overflow_error("overflow-integer");
    }
    return static_cast<int>(c);
}
```

#### Practice Make intmul(int a,int b) function.

#### Practice Update lcm function.

Now update add function.

```
Fraction Fraction::add( const Fraction &f2){       
    int tnum, tden,l;
    tden=lcd(den,f2.den);
    tnum=intadd(intmul(num,tden/den),intmul(f2.num,tden/f2.den));
    return Fraction(tnum,tden);
}
```

#### Practice Update sub function.

#### Practice Update mul function.

#### Practice Update div function.

------------


Now check this.

```
#include <iostream>
#include <stdexcept>
#include <limits>
using namespace std;
namespace LIMIT   {
    const int INT_MAX=numeric_limits<int>::max();
    const int INT_MIN=numeric_limits<int>::min();
};
class Fraction{
    private:
        int num,den;
        
    public:
        Fraction(){num=0;den=1;}
        Fraction(int n){num=n;den=1;}
        Fraction(int n,int d);
        int gcf(int a,int b);
        int lcd(int a,int b);
        void normalize();
        int getn() const {return num;}//constant member
        int getd() const {return den;}//constant member
        Fraction add(const Fraction & f2);
        Fraction sub(const Fraction & f2);
        Fraction mul(const Fraction & f2);
        Fraction div(const Fraction & f2);
        Fraction(Fraction const & f){num=f.num;den=f.den;}//copy constructor
        Fraction operator+(const Fraction &f){return add(f);}
        Fraction operator-(const Fraction &f){return sub(f);}
        Fraction operator*(const Fraction &f){return mul(f);}
        Fraction operator/(const Fraction &f){return div(f);}
        bool operator==(const Fraction &f){
            if(num==f.num && den==f.den){return true;}
            else{return false;}
        }//It works because of the normailization.
                Fraction & operator=(const Fraction &src);
        bool operator>(const Fraction &f){
            if(num*f.den>den*f.num) return true;
        }//It works because of the normailization.
        bool operator<(const Fraction &f){
            if(num*f.den<den*f.num) return true;
        }//It works because of the normailization.
        friend Fraction operator+(int n, Fraction &f){return Fraction(n)+f;}
        friend Fraction operator-(int n, Fraction &f){return Fraction(n)-f;}
        friend Fraction operator*(int n, Fraction &f){return Fraction(n)*f;}
        friend Fraction operator/(int n, Fraction &f){return Fraction(n)/f;}
        friend ostream & operator<<(ostream & os,const Fraction & f){os<<f.num<<"/"<<f.den;return os;}
};
//constant member will not change any class variables or call any non-const member functions.
Fraction::Fraction(int n,int d){
    if(d==0) throw overflow_error("Divide By Zero.");
    num=n;
    den=d;
    normalize();
}
Fraction & Fraction::operator=(const Fraction &src){
    num=src.num; den=src.den;
    return *this;
}
int intadd(int a, int b){
    long long aa=a,bb=b,c=aa+bb;//a+b 
    if(LIMIT::INT_MAX < c || c < LIMIT::INT_MIN){
        throw overflow_error("overflow-integer");
    }
    return static_cast<int>(c);
}
/*
int intadd(int a, int b){
    int c=a+b;    
    if(a>0 && b>0 && a>LIMIT::INT_MAX -b){
        cout<<"hi"<<endl;
        throw overflow_error("overflow-integer addition.");
    }
    if(a<0 && b<0 && a<LIMIT::INT_MIN -b){
        cout<<"bye"<<endl;
        throw overflow_error("overflow-integer addition.");
    }
    cout <<"c="<<c<<endl;
    return c;
}
*/   
int intmul(int a, int b){
    long long aa=a,bb=b,c=aa*bb;//a*b 
    if(LIMIT::INT_MAX < c || c < LIMIT::INT_MIN){
        throw overflow_error("overflow-integer");
    }
    return static_cast<int>(c);
}
/*
int intmul(int a, int b){
    int c=a*b;
    if( b>0 && (a > static_cast<int>(LIMIT::INT_MAX/b) || a<static_cast<int>(LIMIT::INT_MIN/b))){
        throw overflow_error("overflow-integer");
    }
    if( b<0 && (a < static_cast<int>(LIMIT::INT_MAX/b) ||a > static_cast<int>((-1)*LIMIT::INT_MIN/(-b)))){
        throw overflow_error("overflow-integer");
    }//(-1)*LIMIT::INT_MIN/(-b)  since MIN/negative gives an error.
    return c;
}
*/
int Fraction::gcf(int a,int b){
    if (b==0) return a;
    else return gcf(b,a%b);
}
int Fraction::lcd(int a,int b){//Assume a,b within the range.
    int g=gcf(a,b); 
    return intmul(a,b/g);
    
}
void Fraction::normalize(){
    if(num==0){
        num=0;den=1;return;
    }
    int g=gcf(num,den);
    num=num/g;
    den=den/g;
    if(den<0){
        num*=-1;
        den*=-1;
    }
}

Fraction Fraction::add( const Fraction &f2){       
    int tnum, tden,l;
    tden=lcd(den,f2.den);
    tnum=intadd(intmul(num,tden/den),intmul(f2.num,tden/f2.den));
    return Fraction(tnum,tden);
}
Fraction Fraction::sub( const Fraction &f2){
    int tnum, tden,l;
    tden=lcd(den,f2.den);
    tnum=intadd(intmul(num,tden/den),intmul(f2.num,(-1)*tden/f2.den));
    return Fraction(tden,tnum);
}
Fraction Fraction::mul( const Fraction &f2){
    int tnum, tden;
    tnum=intmul(num,f2.num);
    tden=intmul(den,f2.den);
    return Fraction(tnum,tden);
}
Fraction Fraction::div( const Fraction &f2){
    int tnum, tden;
    tnum=intmul(num,f2.den);
    tden=intmul(den,f2.num);
    return Fraction(tnum,tden);// Constructor will throw zero denominator if f2.num =0
}
int main(){
  try{
    int a=LIMIT::INT_MAX;
    Fraction f1(a,2),f2(-a,2);
    Fraction f3=f1.add(f2);
    cout<<f3<<"="<<"("<<f1<<")+("<<f2<<")"<<endl;
  }
  catch(overflow_error & e){
    cout<<"Exception:"<<e.what()<<endl;
  }    
  try{
    int a=LIMIT::INT_MAX;
    Fraction f1(a,2),f2(-a,2);
    Fraction f3=f1.sub(f2);
    cout<<f3<<"="<<"("<<f1<<")-("<<f2<<")"<<endl;
  }
  catch(overflow_error & e){
    cout<<"Exception:"<<e.what()<<endl;
  }
    try{
    int a=LIMIT::INT_MAX;
    Fraction f1(a,2),f2(-a,2);
    Fraction f3=f1.mul(f2);
    cout<<f3<<"="<<"("<<f1<<")*("<<f2<<")"<<endl;
  }
  catch(overflow_error & e){
    cout<<"Exception:"<<e.what()<<endl;
  }
  try{
    Fraction f1(2,1),f2(0,1);
    Fraction f3=f1.div(f2);
    cout<<f3<<"="<<"("<<f1<<")/("<<f2<<")"<<endl;
  }
  catch(overflow_error & e){
    cout<<"Exception:"<<e.what()<<endl;
  }    
}
```

[RUN](http://goo.gl/DPvhyK)
---------
#### Vector class

```
#include <iostream>
#include <stdexcept>
using namespace std;
class Vector{
    private:
        int n;
        int *vec;
    public:
        void set(int size);
        void set(int * vect1,int size);
        Vector();
        explicit Vector(int size){set(size);}// avoid conversion.
        Vector(int *vec1, int size){set(vec1,size);}
        // Destructor!!
        // Copy constructor
        // Assignment constructor
        Vector add(const Vector & v1);
        Vector sub(const Vector & v1);
        // Constant multiple cmul function.
        int dot(const Vector & v1);
        // + operator from add
        // - operator from sub
        // * operator from dot
        // overload << operator 
        void print();
};
void Vector::set(int size){
    n=size;
    vec= new int[n];
}
void Vector::set(int *vec1, int size){
    set(size);
    for(int i=0;i<n;i++){
        vec[i]=vec1[i];
    }
}
int Vector::dot(Vector v1){
    int sum=0;
    for(int i=0;i<n;i++){
        sum+=vec[i]*v1.vec[i];
    }
    return sum;
}
void Vector::print(){
    cout<<"(";
    for(int i=0;i<n-1;i++){
        cout<<vec[i]<<",";
    }
    cout<<vec[n-1]<<")";
}
int main(){
    int a[3]={1,2,3};
    int b[3]={1,3,5};
    Vector v1(a,3);
    Vector v2(b,3);
    a[2]=10;
    cout<<"v1+v2"<<v1+v2<<endl;
    cout<<"v1-v2"<<v1-v2<<endl;
    cout<<"dot(v1,v2)="<<v1*v2<<endl;
    cout<<"2*v2"<<2*v2<<endl;
}    
```

[Start](http://goo.gl/GNbnw6)


#### Quick discussion on exception
```
#include<exception>
void Vector::set(int size){
    n=size;
    vec= new int[n];
}
```

'new' may throw bad_alloc if we do not have enough memory.
Best way to handle dynamic memory is using a smart pointer.










