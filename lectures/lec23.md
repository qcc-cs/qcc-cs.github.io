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
We may review first stupid implementation again and reduce the loop using a similar idea.
```
void insertionsort(int *a, int n){
    int i,k;
    for(i=1;i<n;++i){
        int temp=a[i];
        for(k=i;k>0 && a[k-1]>temp ;--k){ //rotate
            a[k]=a[k-1];
        }
        a[k]=temp;
    }
}
```
[Run](http://www.cpp.sh/8uo5)
#### linked list(http://en.wikipedia.org/wiki/Linked_list)
[Singly linked list]
![link](http://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)
 The linked list is a data structure consisting of a group of **nodes** which together represent a sequence.
 
Benefit over array
 - insert easily
 - remove easily
 
Problem
 - No random access.
 - No efficient indexing.

#### Implementation(Singly(simple) linked list)
```
class node{
    public:
    int num;
    node * next; //link
    node(int anum){num=anum;next=nullptr;}// For old c++, use NULL instead.
};
```
root->Node->Node->nullptr
#### Sample Code
```
#include <iostream>
using namespace std;
class node{
    public:
    int num;
    node * next; //link
    //node(){next=nullptr;}
    node(int anum){num=anum;next=nullptr;}// For old c++, use NULL instead.
};
void print(node * nodes){
    while(nodes != nullptr){
        cout<<nodes->num<<" ";
        nodes=nodes->next;
    }
    cout<<endl;
}
int main(){
    int a[8]={1,9,2,4,7,6,5,3};
    node * root=new node(a[0]); //initialize
    node * last=root;
    for(int i=1;i<8;++i){ //construct linked list
        last->next= new node(a[i]);//swap
        last=last->next;
    }
    print(root);
}
```
[RUN](http://cpp.sh/4iz3)
####  Insert a node
To insert yout node, we need the **previous** pointer.(simple linked list)
We have to cases.
CASE I) insert a node in the beginning.
We need to reset the root.
root->node[1]->node[2]->....->node[k]->nullptr

Insert a NODE.

root->NODE->node[1]->...
```
node * ptr=NODE;
ptr->next=root;
root=ptr;
```
CASE II) Otherwise.

->node[k]->node[k+1]


->node[k]->NODE->node[k+1]
```
node * r=node[k];//previous pointer
node * p=NODE;
p->next=r->next;
r->next=p;
```
#### insertion sort with linked list.
Idea: From source ---> result
We reconstruct result list from source list using insertion sorting.
```
node * insertsort(node * source){
    if(source==nullptr){return nullptr;}
    node * i=source->next;//i=1
    node * result=source;
    result->next=nullptr;  // j->source[0]->nullptr
    while(i!=nullptr){
        node * tr=result;
        node * pr=tr;
        node * ti=i;
        i=i->next;
        while(tr!=nullptr  && tr->num < ti->num){
            pr=tr; // To insert, we need to know the previous one.
            tr=tr->next; //tj++
        }
        //Case I: inserting a node in the beginning of the list.
        if(result==tr){
            ti->next=result;
            result=ti;
        }
        //Case II: otherwise.
        else{
            ti->next=pr->next;
            pr->next=ti;
        }
    }
    return result;
}
```
[Run](http://cpp.sh/8ve6)
 #### How to delete
Unfortunately, it does not delete well since links may have several nodes.
```
void delete_list(node * pnode){
    node * temp;
    while(pnode!=nullptr){
        temp=pnode;
        pnode=pnode->next;//pnode++
        delete temp;
    }
}
```
But the following code is not valid.
```
void delete_list(node * pnode){
    node * temp;
    while(pnode!=nullptr){
        temp=pnode;
        delete temp;
        pnode=pnode->next;//pnode++
    }
}
```
#### Practice : A variation
Rewrite the code for string instead of [int](http://cpp.sh/7qly)
```
class node{
public:
    string str;
    node * next; //link
    //node(){next=nullptr;}
    node(string astr){str =astr;next=nullptr;}// For old c++, use NULL instead.
};

//Rewrite other codes.

int main(){
    string a[4]={"apple","bee","dell","ca"};
    node * root=new node(a[0]); //initialize
    node * last=root;
    for(int i=1;i<4;++i){ //construct linked list
        last->next= new node(a[i]);//swap
        last=last->next;
    }
    print(root);
    root=insertsort(root);
    print(root);
    delete_list(root);
}
```

[Do not see the answer](http://cpp.sh/7pp7)
