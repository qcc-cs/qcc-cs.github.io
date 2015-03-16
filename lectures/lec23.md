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
To insert we also need to shift `a[j+1],a[j+1],...,a[i-1]` into `a[j+2],...,a[i]`.
It means we rotate a cycle `a[j+1],a[j+1],...,a[i-1],a[i]`.
```
a[0]<a[1]<....<a[j]<a[i]<a[j+1]<....<a[i-1]
```



