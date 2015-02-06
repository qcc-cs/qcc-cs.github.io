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

#### Remark

 Each swap checking sub-step guarantees that  the right element of two elements is the max between first and 
the right element.
Ex. Assume we **already swapped** if the left element(**a[i]**) is greater than the right(**a[i+1]**).

a[0] a[1] a[2] a[3] ..... **a[i]** **a[i+1]**  .... a[n-2] a[n-1]

Then

$$ a[i+1] = max\{ a[0],a[1],\ldots, a[i+1] \}$$

#### How to implement
##### One step
From the 1st step,
we start with
a[0] a[1] .... a[n-2] a[n-1]

We need to pick two elements to compare, and move pair again and again.
So we can describe a pair as

a[i] a[i+1]

Now we need to find the range of i.

Start:

a[0] a[1]
a[i] a[i+1]

i=1
End:

a[n-2] a[n-1]
a[i]   a[i+1]

i=n-2

The range of i is 1<=i<=n-2

##### Between a step and next step.
Now let us compare 1st step and 2nd step.
1st step

a[0] a[1] ............ a[n-2] a[n-1]

2nd step

a[0] a[1] ......a[n-3] a[n-2] 

3rd step

a[0] a[1] ......a[n-3]

We can see the size of array is getting smaller. In other words,
```
n--;
```
#### Check4. Improve your bubble sort function

```c++
#include <iostream>
using namespace std;
void swap(int *p,int * q){
    int temp=*p;
    *p=*q;
    *q=temp;
}
void array_print(int a[], int n){
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
}
void bubble(int a[], int n){
    while(n>=2){
        for(int i=0;i<n-1;i++){
            if(a[i]>a[i+1]){
                swap(&a[i],&a[i+1]);
            }
        }
        n--; //Get smaller.
    }
}
int main() {
    int a[10]={1,3,8,4,7,5,0,9,6,2};
    bubble(a,10);
    array_print(a,10);
}
```
#### One improvement

1, 3, 8, 4, 9, 11, 13

The last swapping for first step is

1, 3, **8**, **4**, 9, 11, 13

1, 3, 4, 8, 9, 11, 13

Since there is no more swapping we can guarantee that

1. 8 < 9 < 11 < 13
2. the final list of this step is still same to

1, 3, 4, 8, 9, 11, 13

From above remark,

$$ 8 = max\{1, 3, 4\}$$

Therefore  8, 9, 11, 13 are already well-ordered 
and we only need to do bubble sort with 
1, 3, 4

So if the last pair which is swapped is a[k] and  a[k+1]
then we only need to do bubble sort with

a[0] a[1] .... a[k]

a[0] a[1] .... a[n-1]

k=n-1 => n=k+1

#### Check4. Improve your bubble sort function

```
#include <iostream>
using namespace std;
void array_print(int a[],int n)
{
  for(int j=0;j<n;j++)
    cout<<a[j]<<" ";
}
void swap(int &a,int &b)
{
  int temp = a;
  a = b;
  b = temp;
}
void bubble2(int a[] , int n ){
    int k;
    while(n>=2){
    	k=0; // any number less than 1 to skip steps with n>=2
        for(int i=0;i<n-1;i++){
            if(a[i]>a[i+1]){
                swap(a[i],a[i+1]);
            }
        }
        n=k+1; //Get smaller.
    }	
}
int main() {
	int a[10]={7,4,2,8,9,3,11,17,5,16};
	bubble2(a,10);
	array_print(a,10);
	return 0;
}
```

Remark1: TEXTBOOK USES THE MIN and use a little bit different idea to reduce the number of swap.
Instead of swap each iteration, we just find the the min of each step. We only swap once if a given number of each step is not min. **Please, think how to use above improvement to textbook code.**



