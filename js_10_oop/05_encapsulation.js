// ======================================
// Encapsulation in JavaScript
// ======================================

// Facts:
// 1. Private fields (#) store hidden data.
// 2. Private methods (#) contain hidden logic.
// 3. Only public methods can access private members.
// 4. Outside code cannot directly access private fields or methods.

class Student {
  // Private fields
  #marks = 90;

  // Private method
  #calculateGrade() {
    return this.#marks >= 80 ? "A" : "B";
  }

  // Public method
  showResult() {
    console.log(`Marks : ${this.#marks}`);
    console.log(`Grade : ${this.#calculateGrade()}`);
  }
}

const s1 = new Student();

s1.showResult();

/*
Output

Marks : 90
Grade : A
*/

// -------------------------------
// Outside access
// -------------------------------

// console.log(s1.#marks);             ❌ Error
// console.log(s1.#calculateGrade());  ❌ Error

// Only this works:
s1.showResult(); // ✅
