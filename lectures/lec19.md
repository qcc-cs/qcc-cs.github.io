### Lec19 - A simple String
We will construct a very simple String class. Since c++ already have string class, we use String as a name of class.
```
class String {
    private:
        char * str;
        void set(const char *s);
    public:
        String();//default constructor
        String(const char * s);//constructor
        void copy(const char *s);// copy from s
        void cat(const char *s);//concatenation
        ~String();//Destructor
        String(String const & st);//copy constructor
        //String(String const & st, size_t pos, size_t len); //substring
        operator char*();//user-defined conversion
        String& operator=(const String & st);// assignment operator
        String& operator=(const char * s);// assignment operator (Type conversion from char*)
        bool operator==(const String & st);// comparison operator
        bool operator>(const String & st);// comparison operator
        bool operator<(const String & st);// comparison operator
        String operator+(const char *s);//concatenation
        char & operator[](size_t n);//[] operator
        size_t size(){return strlen(str);} //length of string
};
```
Let us construct some constructors and descructor.
```
void String::set(const char *s){
    size_t len=strlen(s);//initialization
    str=new char[len+1];
    strcpy(str,s);
}
void String::copy(const char *s){
    delete [] str; //Delete previous memory for str
    set(s);
}
String::String(){
    str=new char[1];
    str[0]='\0';//escape code
}
String::~String(){
    delete [] str;
}
String::String(const char * s){
    set(s);//initialization
}
```
#### Practice make a copy constructor.
```
String::String(String const & st){
    //code
}
```
[See](http://cpp.sh/2jot)

Now make assignment operators
```
String & String::operator=(const String & st){
    //
    return *this;
}
String & String::operator=(const char * s){
    //
    return *this;
}
```
[See](http://cpp.sh/5ktr)

#### Concatenation member function
```
void String::cat(const char * s){
    size_t n=strlen(str)+strlen(s);
    char * t=new char[n+1];
    strcpy(t,str); // copy a current string.
    strcat(t,s);//concatenation
    delete[] str;
    str=t;
}
```
#### Practice - make a operator+ as a concatenation operator. Do not forget it should return a new String.
```
String String::operator+(const char *s){
//code 
}
int main(){
    String s1("1234"),s2("567");
    s1.cat(s2);
    //cout<<s1;
}
```
[See](http://cpp.sh/8p3of)

#### Practice - Comparison

Recall [strcmp function](http://www.cplusplus.com/reference/cstring/strcmp/).
Using strcmp function make ==, >, < operator.
```
bool String::operator==(const String & st){
    //code
}
bool String::operator>(const String & st){
    //code
}
bool String::operator<(const String & st){
    //code
}
```
[Run](http://cpp.sh/4n5n)

#### [Type conversion.](http://www.cplusplus.com/doc/tutorial/typecasting/)
Implicit conversion - conversion by compiler.

For class, implicit conversion can be controlled by means of three member function.
1. Single argument constructors.
```
Fraction(int n); // From integer -> Fraction
String(const char * s); // char * -> String
```
2. Assignment operator
```
String operator=(const char * s); From char * to String by =(assigment)
```
3. Type cast operator
```
operator char*();  //From String to char*.
```
In general,
```
operator type();
```
Let's make 'operator char*()'

```
String::operator char*(){// Type cast operator. To char*
    return str;
}
```
What is the benefit?
```
String s("12");
cout<<s; // Works well by conversion to char* .
```
[Run](http://cpp.sh/2fml)
Sometimes compiler do work convert type correctly. 
```
Vector(int n); // Constructor fotsize n vector.
Vector v=1; // Compiler will call  Vector(int n) to convert.
```
If you want to avoid such implicit conversion, use 'explicit' keyword.
```
explicit Vector(int n);
```
Compare [No explicit](http://cpp.sh/5vb5) with [Explicit](http://cpp.sh/4uuv)

#### [] operator for each element in String.
```
char & String::operator[](size_t n){
    // if(n>=size() || n < 0) throw std::out_of_range("Out of bound for String []");
    return str[n];
}
```
#### Practice 
Using friend operator+, allow the following computation.
```
String s1("1");
String s2="2"+s1;
```



We may try this.
```
friend String operator+(const char * s, const String & st){return String(s)+st;}
```
[Error](https://ideone.com/kBclxL)

Why? To debug, use the following code.
```
friend String operator+(const char * s, const String & st){cout<<"debug"<<endl;return String(s)+st;}
```
[Error](https://ideone.com/eeltFP)
Compiler tries to convert String(s) to const char *. So we have infinite loop.
To solve this,
```
friend String operator+(const char * s, const String & st){return String(s)+st.str;}
//Call operator+(const char * s)
```
or introduce a new operator+(cons String st) to avoid an infinite loop.
```
String String::operator+(const String & stt){
    String st(str);
    st.cat(stt.str);
    return st;//Return a new String.
}
```
[Run](http://cpp.sh/8pmi)

or

[Run](http://cpp.sh/2ynj)
