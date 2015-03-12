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
    if(f2.dem==0) {err=DivideByZero; return Fraction();} //Report
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


