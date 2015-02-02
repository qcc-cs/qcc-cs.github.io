## LEC 3

Pointer
Roughly speaking, pointer is a variable which contains the address  information.

Ex.Pointer p points the variable a.

![pointer-p](http://qcc-cs203.github.io/lectures/img/lec3-pointp-a.png)

To declare a pointer use *    

```
int *p;
```

To point a variable use & (**address operator**)
p=&n;

```
int a=3;
int *p=&a;
```
To assign a value to the int pointed to by p
```
*p=5;
```
Here `*`(asterisk)  is  the **dereference operator** which can be read as "value pointed to by".

####Check 1. Declare a point p and point p to the variable a.

Assign 5 to a using pointer p and print the value of a using pointer p.
```
#include <iostream>
using namespace std;
int main ()
{
  int a=3;
  // declare a point p and point p to a.
  // assign 5 to a using pointer p.
  // print the value of a using pointer p.
  return 0;
}
```
<div id="rbutton-2-1-1" data-try="VM8SSho8-qgTEtyX" data-ans="VM8STzdyKNsSRNaq"></div>

### Why do we need a pointer?

#### Check2. Let us make a swap function which swap values of a and b.

```
#include <iostream>
using namespace std;
void swap(int a, int b){
	int temp;
	temp=a;a=b;b=a;	           
}
int main() {
	int a=2,b=3;
	swap(a,b);
	cout<<"a="<<a<<",b="<<b;
	return 0;
}
```
<div id="rbutton-2-2-1" data-try="VM8bIxlvz4UgUHkN" data-ans="VM8gkhlvz4UgUHp6"></div>

It looks good, isn’t it?  But **it does not work**.
Why? 
Variables a,b in swap and variables in main function **are not same**.

#### **call-by-value**
Swap function only **duplicates values of a,b** from main function.
So there is no way to swap values of a,b in main function.

Now it is time to use pointer.
Fix above function with pointers.

Later, we will study swap function again with the **reference**.

Actually, you can make swap function with a temporary variable, but practically less useful.
[swap without temporary variable](http://en.wikipedia.org/wiki/XOR_swap_algorithm)

### How to pass C-array(s) to a function.

#### Check3  Make a function which print values of a given int array and the size n.

```
void array_print(int a[], int n){
  //For loop
}  
```
<div id="rbutton-2-3-1" data-try="VM8omdoggyI0PcEj" data-ans="VM8wVYi3AgRAGSWa"></div>

* Remark 1 When you pass an array to a function, you **pass a pointer** pointing to the array.
So it is equivalent to

```
void array_print(int * a,int n){
}
```

* Remark 2: Array and pointer has out of address problem.

```
int a[5]={1,2,3,4,5};
cout<<a[100]; //????
```

#### Name of the array.

Name of an array looks like a pointer since it contains the address(`&Name[0]`) of a given array and allows pointer arithmetic.( Consider name of an array as a label or an **alias**.) 

```
\\point arithmetic
\\a[5] is equivalent to *(a+5)
int a[5]=={1,2,3,4,5};
int *p=a;
```

Unfortunately, there are some differences between name of an array and a pointer.

```
int b[5];
a=&b;\\ a is fixed.
cout<<sizeof(a);//
cout<<sizeof(p);
```
<div id="rbutton-2-4-1" data-try="VM8omdoggyI0PcEj" data-ans=""></div>


For more, please check [Are pointers and arrays equivalent in  C?](http://eli.thegreenplace.net/2009/10/21/are-pointers-and-arrays-equivalent-in-c).




