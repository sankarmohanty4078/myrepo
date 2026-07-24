class Person {
  //classes are just syntactical sugar, internally js uses prototype inheritance
  name;

  constructor(name) {
    this.name = name;
  }
  //here we have used a custom constructor function to initialize the properties of the object

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

const giles = new Person("Giles");
giles.introduceSelf(); // Hi! I'm Giles

//we can omit creating constructors and a default constructor is generated
class Animal {
  sleep() {
    //notice we dont use function keyword for methods
    console.log("zzzzzzz");
  }
}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'

//interesting difference between java oop and js oop
/* 
in java:

class Student {
    String name = "Sankar";

    void print() {
        System.out.println(name);      // Allowed
        System.out.println(this.name); // Also allowed
    }
}
*/

//while in js:
class Student {
  name = "Sankar";

  print() {
    console.log(this.name); // ✅
    console.log(name); // ❌ Looks for a variable named 'name'
  }
}
//in both the languages the object only stores all the data in it not the class
