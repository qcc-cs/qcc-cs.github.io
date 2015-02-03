## LEC 5 Memory management.

###  vector sum function.
```
int* vector_sum(int v1[], int v2[], int n){
}
```
Input: two vectors v1,v2 and size of two vectors , n.
Actually, we get two pointers of vector v1 and v2.
Output: a pointer of sum of v1 and v2.
Calc: Add values of each coordinates.
```
int* vector_sum(int v1[], int v2[], int n){
	int sum[n];
	for(int i=0;i<n;i++){
	sum[i]=v1[i]+v2[i];		
	}
	return sum;
}
```
Unfortunately, this code does not work.

To do this, let us make a function which print a vector.

```
void vector_print(int v[],int n){
}

```

Answer:
```
void vector_print(int v[],int n){
	cout<<"(";
	for(int i=0;i<n-1;i++){
		cout<<v[i]<<",";
	}
	cout<<v[n-1]<<")"; // last coordinate does not need comma.
}
```

Now check vector_sum
```
#include <iostream>
using namespace std;
int* vector_sum(int v1[], int v2[], int n); 
void vector_print(int v[],int n);
int main(){
	int a[5]={1,2,3,4,5};
	int b[5]={5,4,3,2,1};
	int c[5];
 	c=vector_sum(a,b,5);
	vector_print(c,5);       
}
```

 Error c is fixed!
 
 ```
#include <iostream>
using namespace std;
int* vector_sum(int v1[], int v2[], int n); 
void vector_print(int v[],int n);
int main(){
	int a[5]={1,2,3,4,5};
	int b[5]={5,4,3,2,1};
	int* c;
 	c=vector_sum(a,b,5);
	vector_print(c,5);       
}
```
#### review

```
int* vector_sum(int v1[], int v2[], int n){
	int sum[n]; // local variable in vector_sum It may die.
	for(int i=0;i<n;i++){
	sum[i]=v1[i]+v2[i];		
	}
	return sum;
}
```
One possible solution is using an array of main function.
```
void vector_sum(int v1[], int v2[],int sum[], int n){
	// Now sum array is from main(). It will not die.
	for(int i=0;i<n;i++){
	sum[i]=v1[i]+v2[i];		
	}
}
```
Since we have exact address, we can change values of sum array from the function vector_sum.
```
#include <iostream>
using namespace std;
int* vector_sum(int v1[], int v2[], int sum[], int n); 
void vector_print(int v[],int n);
int main(){
	int a[5]={1,2,3,4,5};
	int b[5]={5,4,3,2,1};
	int c[5]={0};
 	vector_sum(a,b,c,5);
	vector_print(c,5);       
}

```
Check 1. Make a vector_sub function.

### Dynamic memory.

To allocate a dynamic memory and assign it to a pointer, use **new**.
```
int * p=new int[100];
```
To delete it, use **delete**. (For an array, use **delete[]**.)
```
delete[] p;
```
Why do we need it?
```
int * vector_add(int v1[],int v2[],int n){
	int *tmp=new int[n]; // now we make a memory.
	for(int i=0;i <n;i++){
	 tmp[i]=v1[i]+v2[i];	
	}
	return tmp;
}
```
Check 1. Make a vector_sub function using a dynamic memory.
```
int main ()
{
  	int v1[3]={1,2,3},v2[3]={1,2,3};
  	int *v3;
  	v3=vector_add(v1,v2,3);
  	vector_print(v3,3);
  	delete[] v3; // deallocation!
  	return 0;
}
```
