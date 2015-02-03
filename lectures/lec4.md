## LEC 4

### [Reference](http://www.tutorialspoint.com/cplusplus/cpp_references.htm)
A reference variable is an **alias**, that is, another name for an already existing variable.

#### Differences between c++ pointers and reference

1.  No null reference.
2.  Cannot be changed.
3.  must be initialized when it is create.

To declare a reference  use &    

```
int n=5;
int &r=n; //must be initialized  when it is create.
```
To change a value of n using r,

```
r=1;
```


#### Check1. Let us make a swap function which swap values of a and b using references.

```
#include <iostream>
using namespace std;
void swap(int , int ){
	
	
	      
}
int main() {
	int a=2,b=3;
	swap(    ,     );
	cout<<"a="<<a<<",b="<<b;
	return 0;
}
```
<div id="rbutton-2-2-1" data-try="VM8bIxlvz4UgUHkL/cs203-lec3-check2-for-c%2B%2B" data-ans="VM8bmqIrSsIgqYcJ/cs203-lec3-check2-ans-for-c%2B%2B">
</div>

### [Sort](http://en.wikipedia.org/wiki/Sorting_algorithm)
**A sorting algorithm** is an algorithm that hat puts elements of a list in a certain **order**.
There are many different sorting algorithms, like  bubble-sort, quick-sort, merge-sort, heap-sort, insertion sort, shell sort...
[Visual sort comparision](http://www.sorting-algorithms.com/)

Here we will study [bubble sort](http://en.wikipedia.org/wiki/Bubble_sort).
#### Bubble sort
Very easy, but very impractical.

Main idea: find the max or min using swapping. and repeat it.
Let's use the max.
![Bubble](http://www.programiz.com/sites/tutorial2program/files/Bubble-sort-algorithm-programming.jpg)

#### Check2. Let us make a swap function which swap values of a and b using references.

```
#include <iostream>
using namespace std;
void swap(int , int ){
	
	
	      
}
int main() {
	int a=2,b=3;
	swap(    ,     );
	cout<<"a="<<a<<",b="<<b;
	return 0;
}
```
### One improvement

1, 3, 8, 4, 9, 11, 13

For 1 st step, we swap 8 and 4 only. it means we can guarantee at least 8< 9<11<13 are well-ordered.
So we only consider 1,3,4.

#### Check3. Improve your bubble sort function

```
#include <iostream>
using namespace std;
void bubble(int a[] , int n ){

}
int main() {
	int a[10]={7,4,2,8,9,3,11,17,5,16};
	bubble(a,10);
	//print array a;
}
```

Remark1: TEXTBOOK USES THE MIN and use a little bit different idea to reduce the number of swap.
Instead of swap each iteration, we just find the the min of each step. We only swap once if a given number of each step is not min. **Please, think how to use above improvement to textbook code.**



