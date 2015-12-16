package galvanize;

class Foo {
  void bar(String foo){
     System.out.println("Green");
  }
  void bar(int foo){
     System.out.println("Yellow");
  }
  void bar(Object foo){
     System.out.println("Brown");
  }
}

class Junk{
  public static void main(String[] args){
    Foo foo = new Foo();

    foo.bar(4);
  }
}