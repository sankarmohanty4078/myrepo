# JavaScript Memory Management & Garbage Collection

---

# Memory

**Memory (RAM)** is the temporary storage where JavaScript keeps variables, objects, arrays, functions, etc., while the program is running.

Example:

```javascript
let name = "Sankar";
let age = 22;
```

Memory:

```
RAM

+----------------+
| name -> Sankar |
| age  -> 22     |
+----------------+
```

---

# Memory Allocation

**Definition**

> Memory Allocation is the process of reserving space in RAM for storing data.

Example:

```javascript
let arr = [1, 2, 3];
```

JavaScript allocates memory for:

* Variable `arr`
* Array `[1,2,3]`

---

# Reference

**Definition**

> A reference is a variable that points to the memory location of an object, array or function.

Example:

```javascript
let arr = [1,2,3];
```

```
arr
 │
 ▼
+-----------+
| [1,2,3]   |
+-----------+
```

---

# Garbage Collection

**Definition**

> Garbage Collection is the automatic process of removing memory occupied by objects that are no longer reachable.

JavaScript performs Garbage Collection automatically.

Programmers do **not** manually free memory.

---

# Memory Leak

**Definition**

> A Memory Leak occurs when memory is no longer needed, but JavaScript cannot free it because a live reference still exists.

**Important**

Memory is **not physically leaking**.

It is **unnecessarily occupied** because something still points to it.

---

# Reachability (Most Important Concept)

**Definition**

> An object is reachable if there exists at least one live reference that can access it.

Garbage Collector asks only one question:

> **Can this object still be reached?**

If Yes → Keep it.

If No → Remove it.

---

# Example 1

```javascript
let arr = [1,2,3];

arr = null;
```

Memory:

```
arr -> null

[1,2,3]
```

No references remain.

✅ Eligible for Garbage Collection.

---

# Example 2

```javascript
let arr = [1,2,3];
let arr2 = arr;

arr = null;
```

Memory:

```
arr -> null

arr2
 │
 ▼
+-----------+
| [1,2,3]   |
+-----------+
```

Array is still reachable.

❌ Cannot be Garbage Collected.

---

# Example 3

```javascript
arr2 = null;
```

Memory:

```
arr -> null

arr2 -> null

[1,2,3]
```

No references remain.

✅ Garbage Collector removes it.

---

# Multiple References

```javascript
let a = { value: 1 };
let b = a;
let c = b;

a = null;
b = null;
c = null;
```

The object becomes eligible for Garbage Collection **only after**

```javascript
c = null;
```

because that was the last reachable reference.

---

# Reachability Chain

```javascript
const user = {
    address: {
        city: "BBSR"
    }
};
```

```
user
 │
 ▼
address
 │
 ▼
city
```

Every object is reachable.

---

Breaking the chain

```javascript
user.address = null;
```

```
user
 │
 ▼
address -> null


city
```

The inner object becomes unreachable.

The outer object still exists.

---

# Root Objects

Garbage Collection starts from root references.

Examples:

* Global variables
* Variables in currently executing functions (Call Stack)
* Internal JavaScript engine references

The Garbage Collector starts from these roots and checks what is reachable.

---

# Mark-and-Sweep Algorithm

Modern JavaScript engines use **Mark-and-Sweep**.

## Step 1 : Mark

Start from the roots.

Mark every reachable object.

Example

```
Global

 │
 ▼

A

 │

 ▼

B

 │

 ▼

C


D

E
```

Marked

```
✓ A
✓ B
✓ C

D
E
```

---

## Step 2 : Sweep

Remove everything that was **not marked**.

```
✓ A
✓ B
✓ C

❌ D
❌ E
```

D and E are Garbage Collected.

---

# Global Variable Memory Leak

```javascript
let users = [];

users.push(new Array(1000000));
users.push(new Array(1000000));
users.push(new Array(1000000));
```

```
users

 │

 ▼

[
 HugeArray,
 HugeArray,
 HugeArray
]
```

Since `users` is still reachable,

Garbage Collector cannot remove those arrays.

---

# Event Listener Memory Leak

```javascript
const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);
```

Removing the button

```javascript
btn.remove();
```

does **not** automatically remove the event listener.

If the listener still exists,

the callback and related objects remain reachable.

Always remove unnecessary listeners.

---

# Timer Memory Leak

```javascript
const id = setInterval(() => {
    console.log("Running...");
},1000);
```

If never stopped

```javascript
clearInterval(id);
```

the callback remains reachable forever.

---

# Closures and Memory

## Important Interview Point

A Closure **is NOT a memory leak.**

A Closure only keeps variables alive **if it still needs them.**

---

## Example 1 (Large object retained)

```javascript
function outer(){

    let hugeArray = new Array(1000000);

    return function(){
        console.log(hugeArray.length);
    }

}

const fn = outer();
```

The returned function uses `hugeArray`.

```
Closure

 │

 ▼

hugeArray
```

`hugeArray` remains reachable.

It **cannot** be Garbage Collected while `fn` exists.

---

## Example 2 (Large object not retained)

```javascript
function outer(){

    let hugeArray = new Array(1000000);

    return function(){
        console.log("Hello");
    }

}

const fn = outer();
```

The returned function never accesses `hugeArray`.

Modern JavaScript engines (like V8) are smart enough to discard `hugeArray` because it is not required by the closure.

Therefore,

`hugeArray` can be Garbage Collected even though the closure still exists.

---

# Why JavaScript doesn't use delete() like C++

C/C++

```cpp
delete ptr;
free(ptr);
```

JavaScript

```
Remove references

↓

Garbage Collector

↓

Memory Freed Automatically
```

JavaScript automatically manages memory.

---

# Important Definitions

### Memory

Temporary storage used while the program is running.

---

### Memory Allocation

Reserving space in RAM for data.

---

### Reference

A variable pointing to an object, array or function.

---

### Reachability

Whether an object can still be accessed through at least one live reference.

---

### Garbage Collection

Automatic removal of unreachable objects from memory.

---

### Memory Leak

Memory that remains occupied because a live reference still exists, even though the program no longer needs the object.

---

# Interview Questions

## Q1. What is Garbage Collection?

Garbage Collection is the automatic process of removing unreachable objects from memory.

---

## Q2. What algorithm does JavaScript use?

Modern JavaScript engines mainly use the **Mark-and-Sweep** algorithm.

---

## Q3. What is Reachability?

An object is reachable if at least one live reference can still access it.

---

## Q4. Does assigning a variable to null delete the object?

**No.**

It removes only **one reference**.

The object is Garbage Collected only when **all** reachable references disappear.

---

## Q5. Are Closures memory leaks?

**No.**

Closures only keep variables alive when those variables are actually needed.

Unused outer variables may be Garbage Collected by modern JavaScript engines.

---

## Q6. Common Causes of Memory Leaks

* Global variables
* Event listeners
* `setInterval()`
* Closures that retain unnecessary data

---

# Interview Summary

* RAM stores data while the program runs.
* Memory Allocation reserves space in RAM.
* References point to objects, arrays and functions.
* Garbage Collection removes **unreachable** objects.
* JavaScript uses the **Mark-and-Sweep** algorithm.
* Reachability determines whether memory stays alive.
* Setting a variable to `null` removes only one reference.
* Objects are collected only after **all** live references disappear.
* Closures are **not** memory leaks by themselves.
* Modern JavaScript engines discard unused closure variables whenever possible.
* Most memory leaks occur because some reference unintentionally remains alive.
