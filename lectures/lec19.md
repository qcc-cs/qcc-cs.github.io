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

#### Comparison

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
