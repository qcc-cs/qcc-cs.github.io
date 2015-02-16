##LECT 10. PROJECT 1 REVIEW

### Please, do not copy the code from friends.

### I will drop one of lowest projects. 

#### Naive code
```
#include <iostream>
#include <cstring>
using namespace std;
void swap(size_t &a,size_t &b){
    size_t t=a;
    a=b;
    b=t;
}
bool gt(const char * x,const char * y){
    size_t lenx=strlen(x);
    size_t leny=strlen(y);
    size_t len=0;
    bool great;
    if(lenx>leny){
        len=leny;
        great=true;
    }
    else{
        len=lenx;
        great=false;
    }
    size_t valx;
    size_t valy;
    for(size_t i=0;i<len;i++){
        valx=(size_t)tolower(x[i]);
        valy=(size_t)tolower(y[i]);
        if(valx>valy){
            return true;
        }
        else if(valx<valy){
            return false;
        }
    }
    return great;
}
size_t * bubble(const char *s[],size_t n){
    size_t * a=new size_t[n];
    size_t m=n;
    for(size_t i=0;i<n;i++){
        a[i]=i;
    }
    size_t  nn=0;
    while(n>=2){
        for(size_t i=0;i<n-1;i++){
            if(gt(s[ a[i] ], s[ a[i+1] ])){
                cout<<s[a[i]]<<">"<<s[a[i+1]]<<endl;//debug 
                swap(a[i],a[i+1]);
                nn=i+1;
            }
            else{
                cout<<s[a[i]]<<"=<"<<s[a[i+1]]<<endl; //debug
            }
        }
        for(size_t i=0;i<m;i++){
            cout<<s[a[i]]<<" ";
        }
        cout<<endl;
        n=nn;
    }
    return a;
}
int main() {
    const char * s[8]= { "apple","zoo","bee","beacon","jane","june","bee","app"};
    size_t n=8;
    size_t * a=bubble(s,n);
    for(size_t i=0;i<n;i++){
        cout<<s[a[i]]<<" ";
    }
    delete [] a;
    return 0;
}
```
[Run](http://cpp.sh/972i)

[strcmp](http://opensource.apple.com/source/Libc/Libc-262/ppc/gen/strcmp.c)

#### gt function
```
bool gt(const char * x,const char * y){
        for ( ;*x == *y; x++, y++)
	if (*x == '\0')
	    return false;
    return ((*(unsigned char *)x < *(unsigned char *)y) ? false : true);
}
```
[Run](http://cpp.sh/6tbj)

#### const !!
```
#include <iostream>
using namespace std;
int main() {
    const char * s[2]= { "apple","zoo"};
    s[0]="bee";
    cout<<s[0];
    return 0;
}
```
[Run](http://cpp.sh/34iy)

```
#include <iostream>
using namespace std;
int main() {
    const char * s[2]= { "apple","zoo"};
    s[0][0]='b';
    cout<<s[0];
    return 0;
}
```
Error!
[Run](http://cpp.sh/5sp6)

It is an array of const c-string. Not constant array!.
```
#include<iostream>
#include<cstring>
using namespace std;

void swap(char *a, char *b )
{
	char *temp = a;
	a=b;
	b=temp;
}
void sort(const char *s[], int n)
{
	while (n>=2)
	{
		for (int i=0; i<n-1;i++)
		{
			if(strcmp(s[i],s[i+1])>0)
			{
				swap(s[i],s[i+1]);
			}
		}
		n--;
	}
}
void print(const char *s[], int n )
{
   int i;
   for( i = 0; i < n; i++ )
   {
	cout << s[i]<<"  ";
   }	 
}
	int main()
{
   const char* s[11] = { "zoney", "pear", "nectar", "starfruit", "blueberry", "pineapple", "gojiberry", "guava", "nectarine", "honeycomb", "grapefruit" };
   int  n = 11;
   sort(s,n);
   print(s,n );
   return 0;
}
```
[Run](http://cpp.sh/8nuc)











