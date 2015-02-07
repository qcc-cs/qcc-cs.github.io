## Lec 8

### There is a quiz 10 on Feb.

#### Practice 1. Make a function which prints two consecutive elements of an array s with size n in each line.
EXAMPLE.
```
const char * s[5]={"app","fruit","boy","girl","gym"};
```
Output:
```
app fruit
fruit boy
boy girl
girl gym
```


```
#include <iostream>
#include <cstring>
using namespace std;
void two(const char *s[], int n){
  //code
}
int main ()
{
  	const char * s[5]={"app","fruit","boy","girl","gym"};
  	two(s,5);
  	return 0;
}
```
[Run](http://cpp.sh/6oe)

#### Practice 2. Make a function which return the sum of an array v.
If $v={1,2,3}$, then $sum(v,3)=1+2+3=6$.

```
#include <iostream>
using namespace std;
int sum(int v[], int n){
    //code
    return t;
}
int main ()
{
  	int v[3]={1,2,3};
  	cout<<"sum="<<sum(v,3);
  	return 0;
}
```
[Run](http://cpp.sh/7omj)

#### Practice 3. Make a function which computes the dot product of two vectors.
If  $v=(1,2,3)$ and $w=(3,4,5)$,

$$ dot(v,w)=1*3+2*4+3*5=3+8+15=26 $$
```
#include <iostream>
using namespace std;
int dot(int v[],int w[], int n){
    //code
    return t;
}
int main ()
{
  	int v[3]={1,2,3};
  	int w[3]={3,4,5};
  	cout<<"dot="<<dot(v,w,3);
  	return 0;
}
```
[Run](http://cpp.sh/84ck)
#### Practice 4. To sort a given array s of characters using bubble sort, change the index array a, instead.
Example.
```
const char s[3]={'e','c','d'};
size_t a[3]={0,1,2};
```
Change the array a.
```
a[0]=1;a[1]=2;a[3]=0;
```
Then
```
s[a[0]]='c';s[a[1]]='d';s[a[2]]='e';
```
##### Construct the array a on heap memory.
##### For bubble sort, use **maximum** and **accending order**.
```
#include <iostream>
using namespace std;
void swap(size_t & x,size_t &y){
    size_t t=x;
    x=y;
    y=t;
}
size_t * bubble3(const char s[], int n){
    \\ construct a
    \\ initialize a
    \\ code. Be careful about the index.
    return a;
}
int main ()
{
  	char s[5]={'c','h','a','i','r'};
  	int n=5;
  	size_t * a=bubble3(s,5);
  	for(int i=0;i<n;i++){
  	    cout<<s[a[i]]<<" ";
  	}
  	return 0;
}
```
[Run](http://cpp.sh/7d7f)



