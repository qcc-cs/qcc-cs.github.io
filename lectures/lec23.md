### Lec 23

#### [insertion sort](http://en.wikipedia.org/wiki/Insertion_sort)
![picw100](http://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

sertion sort iterates, consuming one input element each repetition, and **growing a sorted output list.**

Problem
 - Slow O(n^2)

Benefit
 - Simple
 - Better than bubble
 - Memory efficient
 - Can sort an extra elements easily.

#### How to implement I (Array)
Assume `a[0]<a[1]<a[2]<...<a[i-1]`. Now we need to sort with a new 'a[i]'.(i>0).
We start compare a[i] with a[0],a[1],a[2],....
If `a[j]` is the first element such that `a[i]<a[j]`, then we need to insert `a[i]` into `a[j]`.
To insert, we  need to shift `a[j],a[j+1],...,a[i-1]` into `a[j+1],...,a[i]` first.
It means we rotate a cycle `a[j],a[j+1],...,a[i-1],a[i]`.
```
a[0]<a[1]<....<a[i]<a[j]<a[j+1]<....<a[i-1]
```
Stupid implementation
```
#include <iostream>
using namespace std;
void print(int *a, int n){
    for(int i=0;i<n;++i){
        cout<<a[i]<<" ";
    }
    cout<<endl;
}
void insertionsort0(int *a, int n){
    for(int i=1;i<n;++i){
        for(int j=0;j<i;++j){
            if(a[i]<a[j]){
                int temp=a[i]; //Rotate
                for(int k=i;k>j;--k){
                    a[k]=a[k-1];
                }
                a[j]=temp;
                break;
            }
        }
    }
}
int main(){
    int a[8]={1,9,2,4,7,6,5,3};
    print(a,8);
    insertionsort0(a,8);
    print(a,8);
}
```
[Run](http://www.cpp.sh/8xa2)
Since we used three loops, above code is very inefficient.
We can optimize
```
for(int j=0;j<i;++j){
    if(a[i]<a[j]){
        int temp=a[i]; //Rotate
        for(int k=i;k>j;--k){
            a[k]=a[k-1];
        }
        a[j]=temp;
        break;
    }
}
```
By using swapping, we can insert a[i] efficiently.
```
void insertionsort1(int *a, int n){
    for(int i=1;i<n;++i){
        for(int j=i; j>0 ;j--){
            if(a[j]<a[j-1]){
                swap(a[j],a[j-1]);
            }
        }
    }
}
```
[Run](http://www.cpp.sh/6ffe)
Of course, you can tweak more.
```
void insertionsort(int *a, int n){
    for(int i=1;i<n;++i){
        for(int j=i; j>0 &&a[j]<a[j-1] ;j--){
            swap(a[j],a[j-1]);
        }
    }
}
```
[Run](http://www.cpp.sh/8nnq)
