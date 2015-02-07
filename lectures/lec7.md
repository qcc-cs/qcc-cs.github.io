## Lec 7

### 1. Goal

Make a bubble sort program to solve a given array of c-string.

- Post your code and 1 page a supporting document. Supporting document explains your idea behind your code.

### Idea

a. make gt function which compare two c-strings and return true if first string is greater than second. Otherwise return false.

b. order of string: For simplicity, we only consider lowercase alphabets.

http://en.wikipedia.org/wiki/Lexicographical_order

abc < baa since a<b
abc < aac 
ab<abc

c. Instead of swapping c-strings, you may swap indexes of c-strings.

EXAMPLE. 
```
const char *s[3]={"app","dog","cat"};
time_t a[3]={1,2,3};
```
Since s is const, we cannot swap. Instead, we can swap index array a using bubble function.
Of course, we need to use gt function to determine whether we swap or not.
Eventually, we can change the array a
```
a[0]=1; a[1]=3; a[2]=2;
```
Then
```
s[a[0]]="app";s[a[1]]="cat";s[a[2]]="dog";
```

d. bubble function should return the result as an array.

I would like to see whether you can use a heap memory with **new** command. 

3. Sample structure
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
	// code
}
size_t * bubble(const char *s[],size_t n){
    // code
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
4. You can swap the array of index a[ ] or a copy of constant string s within bubble function using Heap memory. (Use new command) .
Here a[] is ={1,2,3,4,5,6,...,n}

5. To get size of c-string use, [strlen](http://www.cplusplus.com/reference/cstring/strlen/) function. (You may need it for gt function.)

6. If you have any question, please post your question to piazza as a private note.
If time is available, we can discuss the code using c9.io collaboration tool.

- If you have any question, please ask until 2/11 9PM.

-------------------
1. Please, accept Github team invitation.
2. I already made a private repo for you.
If your tigermail is hello23@tigermail.qcc.cuny.edu
name of repo is hello23.

3. Using c9.io, clone your repo

git clone  Your-repo-link
If your repo name is hello23 then, your name of repo is hello23

4. Make a folder with name project1, project2,project3,project4, project5.

Post your  answer within project folder.
If you are doing project1, put your code and a supporting document
within project1 folder.

5. To push your code to github,

a] add  files.
git add *
b] Commit it. (Take a screenshot of your code.)
git commit -m "Your explanation"
c] Push to remote.
git push remote
d] Type your github id and  password.
e] Go to github and check whether it is upload properly.

I only grade code and document within your github repo, not in your local folder. 

--Please, check again whether you uploaded correctly.

