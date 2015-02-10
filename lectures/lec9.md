### Lec 9

A matrix is any doubly subscripted array of elements arranged in rows and columns. 
Ex:  matrix 

![picw500](https://cloud.githubusercontent.com/assets/10469752/6126637/8f3f0be4-b0f0-11e4-8612-4b7fc859b508.png)

A has n rows and m columns.

$$a_{i,j}$$ is a coefficient  of A.
![picw200](https://cloud.githubusercontent.com/assets/10469752/6127327/97fdbb66-b0f7-11e4-8e5d-08f3f0d33453.png)

A has n rows.

![picw200](https://cloud.githubusercontent.com/assets/10469752/6126675/f54e9012-b0f0-11e4-9157-0318de63fb5c.png)

A has m columns.

![picw500](https://cloud.githubusercontent.com/assets/10469752/6126708/4835bbd4-b0f1-11e4-944c-44c9489dec9f.png)
![picw500](https://cloud.githubusercontent.com/assets/10469752/6126707/4834bf5e-b0f1-11e4-9d25-840c1150529d.png)
![picw500](https://cloud.githubusercontent.com/assets/10469752/6126710/4837af70-b0f1-11e4-8783-c24e4d2f0537.png)
![picw500](https://cloud.githubusercontent.com/assets/10469752/6126709/48361ebc-b0f1-11e4-8312-10c4b228a8ee.png)

#### How to implement
For simplicity, we only consider the square matrix.

1. Using 2d array.
```
// Example program
#include <iostream>
#include <string>
using namespace std;
void print(int a[2][2],int n){//fixed size.
    for(int r=0;r<n;r++){
        for(int c=0;c<n;c++){
            cout<<a[r][c]<<" ";
        }
        cout<<endl;
    }
    a[1][1]=10; //check.
}
int main()
{
    int a[2][2]={{1,2},{3,4}};
    print(a,2);
    cout<<a[1][1];  //pointer.
}
```
[Run](http://cpp.sh/2jq7)
```
// Example program
#include <iostream>
#include <string>
using namespace std;
void print(int a[][2],int n){//fixed size.
    for(int r=0;r<n;r++){
        for(int c=0;c<n;c++){
            cout<<a[r][c]<<" ";
        }
        cout<<endl;
    }
    a[1][1]=10; //check.
}
int main()
{
    int a[2][2]={{1,2},{3,4}};
    print(a,2);
    cout<<a[1][1];  //pointer.
}
```
[Run](http://cpp.sh/7lfs)
Unfortunately, you cannot leave [][]. Error!
```
#include <iostream>
#include <string>
using namespace std;
void print(int a[][],int n){//fixed size.
    for(int r=0;r<n;r++){
        for(int c=0;c<n;c++){
            cout<<a[r][c]<<" ";
        }
        cout<<endl;
    }
    a[1][1]=10; //check.
}
int main()
{
    int a[2][2]={{1,2},{3,4}};
    print(a,2);
    cout<<a[1][1];  //pointer.
}
```
[Run](http://cpp.sh/2vb37)
Since compiler does not have any clue the 2d-size of array, compiler cannot compile during a compile time.
#### Conversion to 1d
![screenshot 2015-02-10 07 11 26](https://cloud.githubusercontent.com/assets/10469752/6127006/3c21be44-b0f4-11e4-84b2-c5f80462b9ad.png)
![screenshot 2015-02-10 07 12 35](https://cloud.githubusercontent.com/assets/10469752/6127007/3c23ce00-b0f4-11e4-829e-e18db8d0f69e.png)
```
#include <iostream>
#include <string>
using namespace std;
void print(int a[],int n){//fixed size.
    //code
}
int main()
{
    int a[4]={1,2,3,4};
    print(a,2);
}u
```
[Run](http://cpp.sh/8xby)

#### Use a pointer of pointer
Be careful.

```
#include <iostream>
#include <string>
using namespace std;
int main()
{
    int a[2][2]={{1,2},{3,4}};
    int **p;
    p= a;
    
}
```

p is a pointer of pointer but a is two dimensional array( array of arrays).

[Check](http://stackoverflow.com/q/5329107)

```
#include <iostream>
#include <string>
using namespace std;
void print(int **p,int n){
    for(int r=0;r<n;r++){
        for(int c=0;c<n;c++){
            cout<<p[r][c]<<" ";
        }
        cout<<endl;
    }
}
int main()
{
    int a[2][2]={{1,2},{3,4}};
    int **p=new int*[2];
    p[0]= a[0];
    p[1]= a[1];
    print(p,2);
    delete[] p;    
}
```

[Run](http://cpp.sh/62wj)
#### C++ template
Later.



