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

### [Sort](http://en.wikipedia.org/wiki/Sorting_algorithm)
**A sorting algorithm** is an algorithm that hat puts elements of a list in a certain **order**.
There are many different sorting algorithms, like  bubble-sort, quick-sort, merge-sort, heap-sort, insertion sort, shell sort...
[Visual sort comparision](http://www.sorting-algorithms.com/)

Here we will study [bubble sort](http://en.wikipedia.org/wiki/Bubble_sort).
### Bubble sort
Very easy, but very impractical.

Main idea: find the max or min using swapping. and repeat it.
Let's use the max.
![Bubble](http://www.programiz.com/sites/tutorial2program/files/Bubble-sort-algorithm-programming.jpg)

#### Using Max
Step1. Find the max of the following 5 numbers using the swapping.
(Keep larger one to the right.)

**1** **5** 2 4 3

a. Compare 1 and 5. Since 1<5, do not swap.

1 **5** **2** 4 3

b. 5>2 => swap!

1 2 **5** **4** 3

c. 5>4 => swap!

1 2 4 **5** **3**

d. 5>3 => swap!

1 2 4 3 **5**

We can guarantee **5** is the max.

Step2. Repeat Step1 with 
**1** **2** 4 3

1 **2** **4** 3

1 2 **4** **3**

1 2 3 **4**

We can guarantee **4** is the max.
Step 3.
**1** **2** 3

1 **2** **3**

1 2 **3**

We can guarantee **3** is the max.
Step 4.

**1** **2**

1 **2**

We can guarantee **2** is the max.
Conclusion: **1 2 3 4 5**

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



