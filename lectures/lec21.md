#Lec 21 Projec 2 - Matrix

sqmatrix class
```
private:
    double **m; // coefficients
    size_t n;   // n*n matrix
```
functions
```
    sqmatrix(); //Default constructor
    explicit sqmatrix(const size_t size); //Construct n*n matrix
    sqmatrix(double *a,const size_t size); //1 dim array -> matrix
    qmatrix(double **p,const size_t size); //2 dim array -> matrix
    sqmatrix(double fill, size_t size); // Construct n*n matrix and fill with value fill.
    sqmatrix(const sqmatrix & mat);//copy constructor
    ~sqmatrix();//Destructor
    sqmatrix & operator=(const sqmatrix &mat);//Assignment operator
    sqmatrix add(const sqmatrix & mat1,const sqmatrix & mat2); //Matrix addition
    sqmatrix sub(const sqmatrix & mat1,const sqmatrix & mat2); //Matrix subtraction
    sqmatrix mul(const sqmatrix & mat1,const sqmatrix & mat2); //Matrix multiplication
    sqmatrix operator+(const sqmatrix &mat1,const sqmatrix &mat2);//Matrix addition
    sqmatrix operator-(const sqmatrix &mat1,const sqmatrix &mat2);//Matrix subtraction
    sqmatrix operator*(const sqmatrix &mat1,const sqmatrix &mat2);//Matrix multiplication
    sqmatrix operator*(double co, sqmatrix &mat);//constant multiplication
    bool operator==(const sqmatrix &mat); //equality operator
    ostream & operator<<(ostream & os,sqmatrix &mat);
```
main function
```
int main()
{
    double a[2*2]={1,2,3,4};
    double b[2*2]={4,3,2,1};
    double c[3*3]={1,2,3,4,5,6,7,8,9};
    sqmatrix m1=sqmatrix(a,2);
    sqmatrix m2=sqmatrix(b,2);
    sqmatrix m3=m1+m2;
    sqmatrix m4=m1-m2;
    sqmatrix m5=m1*m2;
    sqmatrix m6(c,3);
    sqmatrix m7=2*m6;
    cout<<m1<<endl;
    cout<<m2<<endl;
    cout<<m3<<endl;
    cout<<m4<<endl;
    cout<<m5<<endl;
    cout<<m6<<endl;
    cout<<m7<<endl;
}
```
Output
```
[    1     2 ]
[    3     4 ]
 
[    4     3 ]
[    2     1 ]
 
[    5     5 ]
[    5     5 ]
 
[   -3    -1 ]
[    1     3 ]
 
[    8     5 ]
[   20    13 ]
 
[    1     2     3 ]
[    4     5     6 ]
[    7     8     9 ]
 
[    2     4     6 ]
[    8    10    12 ]
[   14    16    18 ]
```
Class
```
#include <iostream>
#include <iomanip>
#include <stdexcept>
#define WIDTH 5
using namespace std;
class sqmatrix{
private:
    double ** m;
    size_t n;//row=col. square matrix
    void set(size_t size); //Reserve n*n dynamic memory.
    void set(double *a, size_t size);
    void set(double fill, size_t size);
    void set(double ** p, size_t size);
    void release(); //Free n*n dynamic memory and reset n to 0.
public:
    void copy(const sqmatrix & mat);
    sqmatrix(){n=0;}
    explicit sqmatrix(const size_t size){set(size);}
    sqmatrix(double *a, size_t size){set(a,size);}
    sqmatrix(double **p, size_t size){set(p,size);}
    sqmatrix(double fill, size_t size){set(fill,size);}
    sqmatrix(const sqmatrix & mat);
    ~sqmatrix(){release();}
    sqmatrix& operator=(const sqmatrix &mat);
    //double & operator()(size_t row,size_t col);//m(row,col)=m[row][col]
    friend sqmatrix add(const sqmatrix & mat1,const sqmatrix & mat2);
    friend sqmatrix sub(const sqmatrix & mat1,const sqmatrix & mat2);
    friend sqmatrix mul(const sqmatrix & mat1,const sqmatrix & mat2);
    friend sqmatrix operator*(double co, sqmatrix &mat);//constant multiple
    friend ostream& operator<<(ostream & os,sqmatrix &mat);
    friend sqmatrix operator+(const sqmatrix &mat1,const sqmatrix &mat2);
    friend sqmatrix operator-(const sqmatrix &mat1,const sqmatrix &mat2);
    friend sqmatrix operator*(const sqmatrix &mat1,const sqmatrix &mat2);
};
```
Hints:
[Matrix](http://en.wikipedia.org/wiki/Matrix\_(mathematics))
[Matrix implementation](http://cpp.sh/4hx7)
[setw()](http://www.cplusplus.com/reference/iomanip/setw/) function

