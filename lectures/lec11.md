##LEC 10.
How to use pointer to pointer for matrix
#### Construct.
```
int ** gen(int n){
    int ** p = new int *[n];
    for(int i=0;i<n;i++){
        p[i] = new int [n];
    }
    return p;
}
```
#### Initialize with 1d-array
```
int ** gen(int * a, int n){
    int ** p = gen(n);
    for(int r=0;r<n;r++){
        for(int c=0;c<n;c++){
            p[r][c]=a[n*r+c];
        }
    }
    return p;
}
int main()
{
    int a[2*2]={1,2,3,4};
    int **p1=gen(a,2);
}
```
#### Delete
```
void del(int ** p, int n){
    for(int i=0; i<n; i++){
        delete[] p[i];
    }
    delete [] p;
}
```
#### Print
```
void print(int **p,int n){
    for(int r=0;r<n;r++){
        for(int c=0;c<n;c++){
            cout<<p[r][c]<<" ";
        }
        cout<<endl;
    }
}
```
#### sum?
```
int** sum(int **p1,int **p2,int n){
    int **s = gen(n);
    // code
    return s;
}
int main()
{
    int a[2*2]={1,2,3,4};
    int b[2*2]={4,3,2,1};
    int **p1=gen(a,2);
    int **p2=gen(b,2);
    int **p= sum(p1,p2,2);
    print(p,2);
    del(p1,2);
    del(p2,2);
    del(p,2);
}
```
[Run](http://cpp.sh/7cdh)

#### Product

```
int** mul(int **p1,int **p2,int n){
    int **s = gen(n);
    for(int r=0;r<n;r++){
        for(int c=0;c<n;c++){
            //code (for loop)      
        }
    }
    return s;
}
int main()
{
    int a[2*2]={1,2,3,4};
    int b[2*2]={4,3,2,1};
    int **p1=gen(a,2);
    int **p2=gen(b,2);
    int **p3=mul(p1,p2,2);
    print(p3,2);
    del(p1,2);
    del(p2,2);
    del(p3,2);
}
```
Please, try by yourself.

[Run](http://cpp.sh/4hx7)








